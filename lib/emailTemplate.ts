export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  employer: string;
  jobTitle: string;
  dateOfHire: string;
  stillWorking: string;
  terminated: string;
  workedInCalifornia: string;
  inUnion: string;
  description: string;
  lang: string;
  submittedAt: string;
}

const yesNo: Record<string, string> = {
  yes: 'Sí / Yes',
  no: 'No',
  '': '—',
};

function row(label: string, value: string) {
  const display = value.trim() || '—';
  return `
    <tr>
      <td style="padding:10px 16px;background:#f8f9fa;font-size:12px;font-weight:700;
                 color:#64748b;text-transform:uppercase;letter-spacing:0.05em;
                 white-space:nowrap;border-bottom:1px solid #e2e8f0;width:35%;">
        ${label}
      </td>
      <td style="padding:10px 16px;font-size:14px;color:#1e293b;
                 border-bottom:1px solid #e2e8f0;">
        ${display}
      </td>
    </tr>`;
}

export function buildEmailHtml(p: ContactPayload): string {
  const lang = p.lang === 'zh' ? '中文' : p.lang === 'en' ? 'English' : 'Español';

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <!-- Header -->
  <tr>
    <td style="background:#111111;padding:28px 32px;border-radius:12px 12px 0 0;">
      <div style="color:#e07820;font-size:22px;font-weight:700;letter-spacing:-0.02em;">
        [866]JACKLAW
      </div>
      <div style="color:#d1d5db;font-size:12px;margin-top:2px;">
        Law Offices of Jack D. Josephson, APC
      </div>
      <div style="margin-top:16px;">
        <span style="display:inline-block;background:#e07820;color:#fff;
                     font-size:11px;font-weight:700;padding:4px 12px;border-radius:20px;
                     text-transform:uppercase;letter-spacing:0.08em;">
          Nueva Solicitud de Evaluación de Caso
        </span>
      </div>
    </td>
  </tr>

  <!-- Quick-reply bar -->
  <tr>
    <td style="background:#0a0a0a;padding:16px 32px;">
      <table cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="color:#e07820;font-size:11px;font-weight:700;text-transform:uppercase;
                     letter-spacing:0.08em;padding-bottom:6px;" colspan="2">
            Contacto rápido
          </td>
        </tr>
        <tr>
          <td style="color:#e2e8f0;font-size:15px;font-weight:700;">${p.name}</td>
          <td style="text-align:right;">
            <a href="tel:${p.phone.replace(/\D/g, '')}"
               style="color:#e07820;font-size:15px;font-weight:700;text-decoration:none;">
              ${p.phone}
            </a>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding-top:4px;">
            <a href="mailto:${p.email}"
               style="color:#d1d5db;font-size:13px;text-decoration:none;">
              ${p.email}
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Employment details -->
  <tr>
    <td style="background:#fff;padding:0;">
      <table width="100%" cellpadding="0" cellspacing="0"
             style="border-collapse:collapse;">
        ${row('Empleador', p.employer)}
        ${row('Puesto', p.jobTitle)}
        ${row('Fecha de contratación', p.dateOfHire)}
        ${row('¿Sigue trabajando allí?', yesNo[p.stillWorking] ?? p.stillWorking)}
        ${row('¿Fue despedido?', yesNo[p.terminated] ?? p.terminated)}
        ${row('¿Trabajó en California?', yesNo[p.workedInCalifornia] ?? p.workedInCalifornia)}
        ${row('¿Miembro de sindicato?', yesNo[p.inUnion] ?? p.inUnion)}
        ${row('Idioma del formulario', lang)}
      </table>
    </td>
  </tr>

  <!-- Description -->
  <tr>
    <td style="background:#fff;padding:20px 32px 28px;border-top:2px solid #f1f5f9;">
      <div style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;
                  letter-spacing:0.08em;margin-bottom:10px;">
        Descripción del caso
      </div>
      <div style="background:#f8f9fa;border-left:4px solid #e07820;padding:16px;
                  border-radius:0 8px 8px 0;font-size:14px;color:#1e293b;
                  line-height:1.7;white-space:pre-wrap;">
${p.description}
      </div>
    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td style="background:#f8f9fa;padding:16px 32px;border-radius:0 0 12px 12px;
               border-top:1px solid #e2e8f0;">
      <p style="margin:0 0 4px;font-size:11px;color:#94a3b8;">
        Enviado el ${p.submittedAt}
      </p>
      <p style="margin:0;font-size:11px;color:#94a3b8;">
        Esta notificación fue generada automáticamente por el formulario de contacto en 866jacklaw.com.
        El envío de este formulario no crea una relación abogado-cliente.
      </p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

export function buildEmailText(p: ContactPayload): string {
  const lang = p.lang === 'zh' ? '中文' : p.lang === 'en' ? 'English' : 'Español';
  return [
    '[866]JACKLAW — Nueva Solicitud de Evaluación de Caso',
    '='.repeat(52),
    '',
    `Nombre:            ${p.name}`,
    `Teléfono:          ${p.phone}`,
    `Correo:            ${p.email}`,
    `Empleador:         ${p.employer || '—'}`,
    `Puesto:            ${p.jobTitle || '—'}`,
    `Fecha contrat.:    ${p.dateOfHire || '—'}`,
    `Sigue trabajando:  ${(yesNo[p.stillWorking] ?? p.stillWorking) || '—'}`,
    `Fue despedido:     ${(yesNo[p.terminated] ?? p.terminated) || '—'}`,
    `Trabajó en CA:     ${(yesNo[p.workedInCalifornia] ?? p.workedInCalifornia) || '—'}`,
    `Sindicato:         ${(yesNo[p.inUnion] ?? p.inUnion) || '—'}`,
    `Idioma:            ${lang}`,
    '',
    'DESCRIPCIÓN DEL CASO',
    '-'.repeat(52),
    p.description,
    '',
    '-'.repeat(52),
    `Enviado: ${p.submittedAt}`,
    'El envío de este formulario no crea una relación abogado-cliente.',
  ].join('\n');
}
