import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { buildEmailHtml, buildEmailText, type ContactPayload } from '@/lib/emailTemplate';

// ─── Validation helpers ────────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, 5000);
}

interface ValidationError {
  field: string;
  message: string;
}

function validate(body: Record<string, string>): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!body.name || body.name.length < 2)
    errors.push({ field: 'name', message: 'Name is required (min 2 characters).' });

  if (!body.phone || body.phone.length < 7)
    errors.push({ field: 'phone', message: 'A valid phone number is required.' });

  if (!body.email || !EMAIL_RE.test(body.email))
    errors.push({ field: 'email', message: 'A valid email address is required.' });

  if (!body.description || body.description.length < 10)
    errors.push({
      field: 'description',
      message: 'Please describe what happened (min 10 characters).',
    });

  return errors;
}

// ─── IP-based rate limiter ─────────────────────────────────────────────────────
// 3 submissions per IP per 10 minutes. In-memory — resets on cold start,
// which is fine for a low-volume law firm site. Upgrade to Redis/KV if needed.

const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_MAX = 3;
const rateLimitStore = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitStore.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );
  if (timestamps.length >= RATE_MAX) return true;
  timestamps.push(now);
  rateLimitStore.set(ip, timestamps);
  return false;
}

// Periodically prune stale entries so the Map doesn't grow unbounded.
setInterval(() => {
  const now = Date.now();
  for (const [ip, times] of rateLimitStore) {
    const fresh = times.filter((t) => now - t < RATE_WINDOW_MS);
    if (fresh.length === 0) rateLimitStore.delete(ip);
    else rateLimitStore.set(ip, fresh);
  }
}, RATE_WINDOW_MS);

// ─── Route handler ─────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  // ── 1. Parse body ──────────────────────────────────────────────────────────
  let raw: Record<string, unknown>;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  // ── 2. Honeypot check ─────────────────────────────────────────────────────
  // The "website" field is visually hidden from humans. Bots fill it in.
  if (sanitize(raw.website)) {
    // Return 200 so bots think they succeeded — don't reveal the check.
    return NextResponse.json({ success: true });
  }

  // ── 3. Rate limiting ──────────────────────────────────────────────────────
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        success: false,
        error:
          'Demasiados intentos. Por favor espere unos minutos e intente de nuevo, o llame directamente al (866) JACKLAW.',
      },
      { status: 429 }
    );
  }

  // ── 4. Server-side validation ─────────────────────────────────────────────
  const body: Record<string, string> = {
    name: sanitize(raw.name),
    phone: sanitize(raw.phone),
    email: sanitize(raw.email),
    employer: sanitize(raw.employer),
    jobTitle: sanitize(raw.jobTitle),
    dateOfHire: sanitize(raw.dateOfHire),
    stillWorking: sanitize(raw.stillWorking),
    terminated: sanitize(raw.terminated),
    workedInCalifornia: sanitize(raw.workedInCalifornia),
    inUnion: sanitize(raw.inUnion),
    description: sanitize(raw.description),
    lang: sanitize(raw.lang),
  };

  const errors = validate(body);
  if (errors.length > 0) {
    return NextResponse.json(
      { success: false, error: errors[0].message, fields: errors },
      { status: 422 }
    );
  }

  // ── 5. Environment variable check ─────────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    console.error(
      '[contact] Missing environment variables: RESEND_API_KEY and/or CONTACT_EMAIL. ' +
        'See .env.example for setup instructions.'
    );
    return NextResponse.json(
      {
        success: false,
        error:
          'El servicio de correo no está configurado. Por favor llame directamente al (866) JACKLAW.',
      },
      { status: 503 }
    );
  }

  // ── 6. Build and send email ───────────────────────────────────────────────
  const fromEmail = process.env.FROM_EMAIL ?? 'onboarding@resend.dev';
  const fromName = process.env.FROM_NAME ?? '[866]JACKLAW Contact Form';
  const submittedAt = new Date().toLocaleString('es-US', {
    timeZone: 'America/Los_Angeles',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  const payload: ContactPayload = {
    name: body.name,
    phone: body.phone,
    email: body.email,
    employer: body.employer,
    jobTitle: body.jobTitle,
    dateOfHire: body.dateOfHire,
    stillWorking: body.stillWorking,
    terminated: body.terminated,
    workedInCalifornia: body.workedInCalifornia,
    inUnion: body.inUnion,
    description: body.description,
    lang: body.lang,
    submittedAt,
  };

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: [contactEmail],
      replyTo: body.email,
      subject: `Nueva consulta de ${body.name} — [866]JACKLAW`,
      html: buildEmailHtml(payload),
      text: buildEmailText(payload),
    });

    if (error) {
      console.error('[contact] Resend API error:', error);
      return NextResponse.json(
        {
          success: false,
          error:
            'No se pudo enviar su solicitud. Por favor llame directamente al (866) JACKLAW.',
        },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error('[contact] Unexpected error sending email:', err);
    return NextResponse.json(
      {
        success: false,
        error:
          'Ocurrió un error inesperado. Por favor llame directamente al (866) JACKLAW.',
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

// Reject all other HTTP methods cleanly.
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}
