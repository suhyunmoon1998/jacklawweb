import type { Metadata } from 'next';
import PracticeAreaCard from '@/components/PracticeAreaCard';
import CTASection from '@/components/CTASection';
import SectionHeading from '@/components/SectionHeading';
import ProcessSteps from '@/components/ProcessSteps';
import { practiceAreas } from '@/data/practiceAreas';

export const metadata: Metadata = {
  title: '[866]JACKLAW | Abogados Laborales en California',
  description:
    'Abogados laborales en Los Angeles que ayudan a empleados de California con overtime no pagado, despido injusto, discriminación, acoso, represalias y violaciones de salarios.',
};

const esSteps = [
  {
    step: '1',
    title: 'Cuéntenos Qué Pasó',
    desc: 'Llame al (866) JACKLAW o complete el formulario. Gratuito, confidencial, sin compromiso.',
  },
  {
    step: '2',
    title: 'Revisamos los Hechos',
    desc: 'Nuestro equipo analiza su situación y evalúa si puede existir un reclamo laboral válido.',
  },
  {
    step: '3',
    title: 'Le Explicamos Sus Opciones',
    desc: 'Le informamos qué opciones legales puede tener. Usted decide cómo proceder.',
  },
];

export default function EsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative bg-[#111111] text-white py-28 md:py-36 px-4 sm:px-6 overflow-hidden"
        aria-labelledby="hero-headline"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/logo.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: '55%',
            opacity: 0.05,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white"
          aria-hidden="true"
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-[#e07820]/10 border border-[#e07820]/25 text-[#e07820] text-[11px] font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-[0.15em]">
            Derecho Laboral en California
          </div>

          <h1
            id="hero-headline"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            Sus Derechos.{' '}
            <span className="text-[#e07820]">Nuestra Lucha.</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Overtime no pagado. Despido injusto. Discriminación. Acoso.{' '}
            <strong className="text-white font-semibold">[866]JACKLAW</strong> representa
            a empleados de California — sin costo inicial.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a
              href="tel:+18665225529"
              className="bg-[#e07820] hover:bg-[#c9660f] text-white font-bold py-4 px-9 rounded-lg text-[15px] tracking-wide transition-colors shadow-lg"
            >
              Llame: (866) JACKLAW
            </a>
            <a
              href="/es/contact"
              className="bg-white/8 hover:bg-white/12 border border-white/15 hover:border-white/30 text-white font-bold py-4 px-9 rounded-lg text-[15px] tracking-wide transition-all"
            >
              Evaluación Gratuita de Caso
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-gray-400">
            <span>Sin honorarios anticipados</span>
            <span className="text-gray-600" aria-hidden="true">&middot;</span>
            <span>Consulta confidencial</span>
            <span className="text-gray-600" aria-hidden="true">&middot;</span>
            <span>Atención en español y chino</span>
            <span className="text-gray-600" aria-hidden="true">&middot;</span>
            <span>Evaluación gratuita</span>
          </div>
        </div>
      </section>

      {/* ─── QUICK STATS ─── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { stat: '100%', label: 'Solo representamos empleados' },
              { stat: 'Gratis', label: 'Consulta inicial' },
              { stat: '3', label: 'Idiomas disponibles' },
              { stat: '$0', label: 'Costo anticipado' },
            ].map((item) => (
              <div
                key={item.label}
                className="py-7 px-4 text-center hover:bg-[#f5f5f5] transition-colors"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#e07820] mb-1 tracking-tight">
                  {item.stat}
                </div>
                <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.12em]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST / INTRO ─── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Por qué importa"
              subtitle="California tiene algunas de las protecciones laborales más sólidas del país. Pero muchos empleadores no las cumplen."
            >
              Su empleador tiene abogados. Usted también puede tenerlos.
            </SectionHeading>
            <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">
              En <strong className="text-[#111111]">[866]JACKLAW</strong>, representamos
              exclusivamente a empleados — nunca a empleadores. Revisamos su situación,
              explicamos sus opciones legales y evaluamos si puede haber un reclamo
              válido, sin costo en la consulta inicial.
            </p>
            <a
              href="/es/contact"
              className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#1f1f1f] text-white font-bold py-3 px-6 rounded-lg text-sm tracking-wide transition-colors"
            >
              Solicite evaluación gratuita <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="bg-[#111111] rounded-2xl p-8 text-white">
            <div className="text-[#e07820] font-bold text-[11px] uppercase tracking-[0.18em] mb-6">
              Lo que hacemos por usted
            </div>
            <ul className="space-y-4">
              {[
                'Revisamos los hechos de su situación con atención',
                'Explicamos sus derechos bajo la ley de California',
                'Evaluamos si puede existir un reclamo laboral válido',
                'Le informamos sin presión sobre sus opciones legales',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] leading-relaxed text-gray-200">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border border-[#e07820]/40 bg-[#e07820]/10 flex items-center justify-center text-[#e07820] text-[10px] font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── PRACTICE AREAS ─── */}
      <section className="py-20 px-4 sm:px-6 bg-[#f5f5f5]" aria-labelledby="practice-areas-heading">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            center
            eyebrow="Lo que manejamos"
            subtitle="Representamos a empleados de California en una amplia gama de reclamos laborales."
          >
            <span id="practice-areas-heading">Áreas de Práctica</span>
          </SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {practiceAreas.map((area, i) => (
              <PracticeAreaCard
                key={area.id}
                index={i + 1}
                title={area.titleEs}
                description={area.descEs}
                detail={area.detailEn}
                href="/es/contact"
                ctaLabel="Consulta gratuita →"
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/services"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-600 hover:border-[#111111] hover:text-[#111111] font-semibold py-2.5 px-6 rounded-lg text-sm transition-colors"
            >
              Ver todas las áreas de práctica <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHY JACKLAW ─── */}
      <section className="py-20 px-4 sm:px-6 bg-[#111111]" aria-labelledby="why-jacklaw-heading">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            center
            light
            eyebrow="Nuestro enfoque"
            subtitle="Lo que distingue a [866]JACKLAW de otras firmas."
          >
            <span id="why-jacklaw-heading">
              ¿Por Qué los Trabajadores Eligen [866]JACKLAW?
            </span>
          </SectionHeading>
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {[
              {
                num: '01',
                title: 'Solo Representamos Empleados',
                desc: 'Nuestra firma se dedica exclusivamente a representar a trabajadores. Nuestros intereses siempre están del mismo lado que los suyos.',
              },
              {
                num: '02',
                title: 'Atención en Su Idioma',
                desc: 'Ofrecemos atención en español y chino. No necesitará intérpretes ni sentirá que no entiende lo que pasa con su caso.',
              },
              {
                num: '03',
                title: 'Evaluación Honesta y Sin Promesas',
                desc: 'Le explicaremos con claridad si hay un reclamo válido y qué puede razonablemente esperar.',
              },
              {
                num: '04',
                title: 'Sin Barreras para Empezar',
                desc: 'La consulta es gratuita y confidencial. Muchos casos se manejan en base a honorarios contingentes.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="group bg-white/5 hover:bg-white/8 rounded-xl p-7 border border-white/8 hover:border-white/15 transition-all"
              >
                <div className="text-[#e07820] font-mono text-sm font-bold mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.num}
                </div>
                <h3 className="text-white font-bold text-[15px] mb-2 leading-snug">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3-STEP PROCESS ─── */}
      <section className="py-20 px-4 sm:px-6 bg-white" aria-labelledby="process-heading">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            center
            eyebrow="Cómo funciona"
            subtitle="Comenzar es sencillo, confidencial y sin ningún compromiso de su parte."
          >
            <span id="process-heading">Tres Pasos para Conocer Sus Opciones</span>
          </SectionHeading>
          <ProcessSteps steps={esSteps} />
          <div className="mt-14 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+18665225529"
              className="bg-[#e07820] hover:bg-[#c9660f] text-white font-bold py-3.5 px-8 rounded-lg text-sm tracking-wide transition-colors shadow-md"
            >
              Llame: (866) JACKLAW
            </a>
            <a
              href="/es/contact"
              className="border border-gray-200 hover:border-[#111111] text-gray-600 hover:text-[#111111] font-bold py-3.5 px-8 rounded-lg text-sm tracking-wide transition-colors"
            >
              Completar formulario
            </a>
          </div>
        </div>
      </section>

      {/* ─── LANGUAGE CALLOUT ─── */}
      <section className="py-20 px-4 sm:px-6 bg-[#f5f5f5]" aria-labelledby="language-callout-heading">
        <div className="max-w-5xl mx-auto">
          <SectionHeading center eyebrow="Servicio multilingüe">
            <span id="language-callout-heading">Atendemos a Trabajadores en Su Idioma</span>
          </SectionHeading>
          <p className="text-center text-gray-500 text-[15px] -mt-6 mb-10 max-w-xl mx-auto">
            Sus derechos en California no dependen de su idioma ni de su estatus migratorio.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="text-[11px] font-bold text-[#e07820] uppercase tracking-[0.18em] mb-3">English</div>
              <h3 className="font-bold text-[#111111] text-xl mb-3 leading-snug">English-Speaking Clients</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-5">
                We also offer full service in English for clients who prefer it.
              </p>
              <a href="/" className="inline-flex items-center gap-1.5 text-[#e07820] hover:text-[#c9660f] font-semibold text-sm transition-colors">
                View English site <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="text-[11px] font-bold text-[#e07820] uppercase tracking-[0.18em] mb-3">中文</div>
              <h3 className="font-bold text-[#111111] text-xl mb-3 leading-snug">华裔劳工支持</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-5">
                我们为加州华裔工人提供劳动法法律服务。无论您的移民身份如何，您在加州都享有同等的劳工权利。
              </p>
              <a href="/chinese-labor-law" className="inline-flex items-center gap-1.5 text-[#e07820] hover:text-[#c9660f] font-semibold text-sm transition-colors">
                了解更多中文信息 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <CTASection
        headline="¿Cree que sus derechos laborales fueron violados?"
        subtext="No tiene que enfrentarlo solo. Llame hoy para una evaluación gratuita y confidencial — sin compromiso, sin costo inicial."
        primaryLabel="Llame: (866) JACKLAW"
        primaryHref="tel:+18665225529"
        secondaryLabel="Formulario de contacto"
        secondaryHref="/es/contact"
      />
    </>
  );
}
