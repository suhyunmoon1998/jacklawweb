'use client';

import { useState } from 'react';

interface FormData {
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
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  employer: '',
  jobTitle: '',
  dateOfHire: '',
  stillWorking: '',
  terminated: '',
  workedInCalifornia: '',
  inUnion: '',
  description: '',
};

type Lang = 'es' | 'en' | 'zh';

interface ContactFormProps {
  lang?: Lang;
}

const labels = {
  es: {
    name: 'Nombre completo',
    namePlaceholder: 'Su nombre completo',
    phone: 'Teléfono',
    phonePlaceholder: '(555) 000-0000',
    email: 'Correo electrónico',
    emailPlaceholder: 'correo@ejemplo.com',
    employer: 'Nombre del empleador',
    employerPlaceholder: 'Empresa donde trabajaba o trabaja',
    jobTitle: 'Puesto de trabajo',
    jobTitlePlaceholder: 'Ej: cajero, chofer, enfermera...',
    dateOfHire: 'Fecha de contratación (aproximada)',
    stillWorking: '¿Sigue trabajando allí?',
    terminated: '¿Fue despedido?',
    workedInCalifornia: '¿Trabajó en California?',
    inUnion: '¿Es miembro de un sindicato?',
    description: 'Cuéntenos brevemente qué pasó',
    descriptionPlaceholder: 'Describa la situación con el mayor detalle posible: qué ocurrió, cuándo y quién estuvo involucrado.',
    yes: 'Sí',
    no: 'No',
    submit: 'Enviar solicitud de evaluación',
    sending: 'Enviando…',
    successTitle: 'Solicitud recibida',
    successMsg:
      'Gracias por comunicarse con nosotros. Un miembro de nuestro equipo revisará su información y se pondrá en contacto con usted a la brevedad. Si necesita asistencia inmediata, llame directamente al (866) JACKLAW.',
    successNote:
      'El envío de este formulario no crea una relación abogado-cliente.',
    privacy:
      'Su información es confidencial. El envío de este formulario no crea una relación abogado-cliente.',
    requiredNote: 'Los campos marcados con * son obligatorios.',
    selectOption: 'Seleccione una opción',
    errorRequired: 'Este campo es obligatorio.',
  },
  en: {
    name: 'Full name',
    namePlaceholder: 'Your full name',
    phone: 'Phone',
    phonePlaceholder: '(555) 000-0000',
    email: 'Email',
    emailPlaceholder: 'email@example.com',
    employer: 'Employer name',
    employerPlaceholder: 'Company where you work or worked',
    jobTitle: 'Job title',
    jobTitlePlaceholder: 'e.g. cashier, driver, nurse...',
    dateOfHire: 'Date of hire (approximate)',
    stillWorking: 'Are you currently working there?',
    terminated: 'Were you terminated?',
    workedInCalifornia: 'Did you work in California?',
    inUnion: 'Are you in a union?',
    description: 'Briefly describe what happened',
    descriptionPlaceholder:
      'Describe the situation in as much detail as possible: what happened, when, and who was involved.',
    yes: 'Yes',
    no: 'No',
    submit: 'Submit case review request',
    sending: 'Sending…',
    successTitle: 'Request received',
    successMsg:
      'Thank you for reaching out. A member of our team will review your information and contact you shortly. For immediate assistance, call (866) JACKLAW directly.',
    successNote:
      'Submitting this form does not create an attorney-client relationship.',
    privacy:
      'Your information is confidential. Submitting this form does not create an attorney-client relationship.',
    requiredNote: 'Fields marked with * are required.',
    selectOption: 'Select an option',
    errorRequired: 'This field is required.',
  },
  zh: {
    name: '全名',
    namePlaceholder: '您的全名',
    phone: '电话',
    phonePlaceholder: '(555) 000-0000',
    email: '电子邮件',
    emailPlaceholder: 'email@example.com',
    employer: '雇主名称',
    employerPlaceholder: '您工作或曾工作的公司',
    jobTitle: '职位',
    jobTitlePlaceholder: '例如：收银员、司机、护士...',
    dateOfHire: '入职日期（大约）',
    stillWorking: '您目前是否仍在该公司工作？',
    terminated: '您是否被解雇？',
    workedInCalifornia: '您是否在加利福尼亚州工作？',
    inUnion: '您是否是工会成员？',
    description: '请简要描述发生了什么',
    descriptionPlaceholder: '请尽量详细描述情况：发生了什么、何时发生、涉及哪些人。',
    yes: '是',
    no: '否',
    submit: '提交免费咨询申请',
    sending: '提交中…',
    successTitle: '申请已收到',
    successMsg:
      '感谢您与我们联系。我们的团队成员将审阅您的信息并尽快与您联系。如需立即协助，请直接致电 (866) JACKLAW。',
    successNote: '提交此表单不会建立律师-委托人关系。',
    privacy: '您的信息将保密处理。提交此表单不会建立律师-委托人关系。',
    requiredNote: '标有 * 的字段为必填项。',
    selectOption: '请选择',
    errorRequired: '此字段为必填项。',
  },
};

const requiredFields: (keyof FormData)[] = ['name', 'phone', 'email', 'description'];

export default function ContactForm({ lang = 'es' }: ContactFormProps) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  // Honeypot: humans leave this blank; bots fill it in.
  const [honeypot, setHoneypot] = useState('');
  const t = labels[lang];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (serverError) setServerError(null);
  };

  const hasError = (field: keyof FormData) =>
    touched[field] && requiredFields.includes(field) && !form[field].trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Surface all required-field errors before hitting the network
    const allTouched = requiredFields.reduce<Partial<Record<keyof FormData, boolean>>>(
      (acc, f) => ({ ...acc, [f]: true }),
      {}
    );
    setTouched(allTouched);

    const hasErrors = requiredFields.some((f) => !form[f].trim());
    if (hasErrors) return;

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang, website: honeypot }),
      });

      const data: { success: boolean; error?: string } = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setServerError(
          data.error ??
            (lang === 'zh'
              ? '发生错误，请直接致电 (866) JACKLAW。'
              : lang === 'en'
                ? 'An error occurred. Please call (866) JACKLAW directly.'
                : 'Ocurrió un error. Por favor llame directamente al (866) JACKLAW.')
        );
      }
    } catch {
      setServerError(
        lang === 'zh'
          ? '网络错误，请直接致电 (866) JACKLAW。'
          : lang === 'en'
            ? 'Network error. Please call (866) JACKLAW directly.'
            : 'Error de red. Por favor llame directamente al (866) JACKLAW.'
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#f5f5f5] border border-[#e07820]/40 rounded-xl p-8 text-center">
        <div className="w-14 h-14 bg-[#e07820]/10 border-2 border-[#e07820] rounded-full flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-7 h-7 text-[#e07820]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#111111] mb-3">{t.successTitle}</h3>
        <p className="text-gray-700 leading-relaxed mb-4">{t.successMsg}</p>
        <p className="text-xs text-gray-500 italic">{t.successNote}</p>
      </div>
    );
  }

  const baseInput =
    'w-full border rounded-lg px-4 py-3 text-gray-800 text-sm transition-colors bg-white placeholder:text-gray-400';
  const validInput = `${baseInput} border-gray-300 focus:border-[#e07820] focus:ring-1 focus:ring-[#e07820]`;
  const errorInput = `${baseInput} border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400 bg-red-50`;

  const inputClass = (field: keyof FormData) =>
    hasError(field) ? errorInput : validInput;

  const labelClass = 'block text-sm font-semibold text-gray-700 mb-1.5';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/*
        Honeypot: visually hidden from real users (positioned off-screen, not
        display:none so automated tools don't trivially skip it). Bots fill this
        in; humans never see it. The API route rejects submissions where it's set.
      */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
      >
        <label htmlFor="website">Website (leave blank)</label>
        <input
          id="website"
          name="website"
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <p className="text-xs text-gray-500">{t.requiredNote}</p>

      {serverError && (
        <div role="alert" className="bg-red-50 border border-red-300 rounded-lg p-4">
          <p className="text-red-700 text-sm font-medium">{serverError}</p>
          <a
            href="tel:+18665225529"
            className="inline-block mt-2 text-sm font-bold text-red-700 underline"
          >
            📞 (866) JACKLAW
          </a>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            {t.name} <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClass('name')}
            autoComplete="name"
            placeholder={t.namePlaceholder}
            aria-describedby={hasError('name') ? 'name-error' : undefined}
            aria-invalid={hasError('name') ? 'true' : undefined}
          />
          {hasError('name') && (
            <p id="name-error" className="text-red-500 text-xs mt-1" role="alert">
              {t.errorRequired}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            {t.phone} <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className={inputClass('phone')}
            autoComplete="tel"
            placeholder={t.phonePlaceholder}
            aria-describedby={hasError('phone') ? 'phone-error' : undefined}
            aria-invalid={hasError('phone') ? 'true' : undefined}
          />
          {hasError('phone') && (
            <p id="phone-error" className="text-red-500 text-xs mt-1" role="alert">
              {t.errorRequired}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          {t.email} <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className={inputClass('email')}
          autoComplete="email"
          placeholder={t.emailPlaceholder}
          aria-describedby={hasError('email') ? 'email-error' : undefined}
          aria-invalid={hasError('email') ? 'true' : undefined}
        />
        {hasError('email') && (
          <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">
            {t.errorRequired}
          </p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="employer" className={labelClass}>
            {t.employer}
          </label>
          <input
            id="employer"
            name="employer"
            type="text"
            value={form.employer}
            onChange={handleChange}
            className={validInput}
            placeholder={t.employerPlaceholder}
          />
        </div>
        <div>
          <label htmlFor="jobTitle" className={labelClass}>
            {t.jobTitle}
          </label>
          <input
            id="jobTitle"
            name="jobTitle"
            type="text"
            value={form.jobTitle}
            onChange={handleChange}
            className={validInput}
            placeholder={t.jobTitlePlaceholder}
          />
        </div>
      </div>

      <div>
        <label htmlFor="dateOfHire" className={labelClass}>
          {t.dateOfHire}
        </label>
        <input
          id="dateOfHire"
          name="dateOfHire"
          type="date"
          value={form.dateOfHire}
          onChange={handleChange}
          className={validInput}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {(
          ['stillWorking', 'terminated', 'workedInCalifornia', 'inUnion'] as const
        ).map((field) => (
          <div key={field}>
            <label htmlFor={field} className={labelClass}>
              {t[field]}
            </label>
            <select
              id={field}
              name={field}
              value={form[field]}
              onChange={handleChange}
              className={validInput}
            >
              <option value="">{t.selectOption}</option>
              <option value="yes">{t.yes}</option>
              <option value="no">{t.no}</option>
            </select>
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>
          {t.description} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          value={form.description}
          onChange={handleChange}
          className={inputClass('description')}
          placeholder={t.descriptionPlaceholder}
          aria-describedby={hasError('description') ? 'desc-error' : undefined}
          aria-invalid={hasError('description') ? 'true' : undefined}
        />
        {hasError('description') && (
          <p id="desc-error" className="text-red-500 text-xs mt-1" role="alert">
            {t.errorRequired}
          </p>
        )}
      </div>

      <p className="text-xs text-gray-500 bg-gray-50 p-3.5 rounded-lg border border-gray-200 leading-relaxed">
        🔒 {t.privacy}
      </p>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#e07820] hover:bg-[#c9660f] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg text-base transition-colors shadow-sm"
      >
        {loading ? t.sending : t.submit}
      </button>
    </form>
  );
}
