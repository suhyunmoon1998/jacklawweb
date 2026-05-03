import type { Metadata } from 'next';
import PracticeAreaCard from '@/components/PracticeAreaCard';
import CTASection from '@/components/CTASection';
import SectionHeading from '@/components/SectionHeading';
import ProcessSteps from '@/components/ProcessSteps';
import { practiceAreas } from '@/data/practiceAreas';

export const metadata: Metadata = {
  title: '[866]JACKLAW | California Employment Lawyers',
  description:
    'Employment lawyers in Los Angeles helping California employees with unpaid overtime, wrongful termination, discrimination, harassment, retaliation, and wage theft.',
};

export default function HomePage() {
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
          <div className="hero-badge inline-flex items-center bg-[#e07820]/10 border border-[#e07820]/25 text-[#e07820] text-[11px] font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-[0.15em]">
            California Employment Law
          </div>

          <h1
            id="hero-headline"
            className="hero-h1 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            Your Rights.{' '}
            <span className="text-[#e07820]">Our Fight.</span>
          </h1>

          <p className="hero-desc text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Unpaid overtime. Wrongful termination. Discrimination. Harassment.{' '}
            <strong className="text-white font-semibold">[866]JACKLAW</strong> represents
            California employees — at no upfront cost.
          </p>

          <div className="hero-btns flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a
              href="tel:+18665225529"
              className="bg-[#e07820] hover:bg-[#c9660f] text-white font-bold py-4 px-9 rounded-lg text-[15px] tracking-wide transition-colors shadow-lg"
            >
              Call (866) JACKLAW
            </a>
            <a
              href="/contact"
              className="bg-white/8 hover:bg-white/12 border border-white/15 hover:border-white/30 text-white font-bold py-4 px-9 rounded-lg text-[15px] tracking-wide transition-all"
            >
              Free Case Evaluation
            </a>
          </div>

          <div className="hero-chips flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-gray-400">
            <span>No upfront fees</span>
            <span className="text-gray-600" aria-hidden="true">&middot;</span>
            <span>Confidential</span>
            <span className="text-gray-600" aria-hidden="true">&middot;</span>
            <span>Spanish &amp; Chinese available</span>
            <span className="text-gray-600" aria-hidden="true">&middot;</span>
            <span>Free evaluation</span>
          </div>
        </div>
      </section>

      {/* ─── QUICK STATS ─── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { stat: '100%', label: 'Employee-side only' },
              { stat: 'Free', label: 'Initial consultation' },
              { stat: '3', label: 'Languages served' },
              { stat: '$0', label: 'Upfront cost' },
            ].map((item, i) => (
              <div
                key={item.label}
                className="reveal py-7 px-4 text-center hover:bg-[#f5f5f5] transition-colors"
                data-delay={String(i * 80)}
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
          <div className="reveal-left">
            <SectionHeading
              eyebrow="Why it matters"
              subtitle="California has some of the strongest labor protections in the country. Yet many employers fall short."
            >
              Your employer has lawyers. You can too.
            </SectionHeading>
            <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">
              At <strong className="text-[#111111]">[866]JACKLAW</strong>, we represent
              employees exclusively — never employers. We review your situation, explain
              your legal options, and assess whether you may have a valid claim, at no
              cost in the initial consultation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#1f1f1f] text-white font-bold py-3 px-6 rounded-lg text-sm tracking-wide transition-colors"
            >
              Request free evaluation <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="reveal-right bg-[#111111] rounded-2xl p-8 text-white">
            <div className="text-[#e07820] font-bold text-[11px] uppercase tracking-[0.18em] mb-6">
              What we do for you
            </div>
            <ul className="space-y-4">
              {[
                'Review the facts of your situation carefully',
                'Explain your rights under California law',
                'Assess whether a valid employment claim may exist',
                'Give you honest information — no pressure, no promises',
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
          <div className="reveal">
            <SectionHeading
              center
              eyebrow="What we handle"
              subtitle="Hover each card to learn more. We represent California employees across a wide range of employment claims."
            >
              <span id="practice-areas-heading">Practice Areas</span>
            </SectionHeading>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {practiceAreas.map((area, i) => (
              <div
                key={area.id}
                className="reveal"
                data-delay={String(Math.min(i, 8) * 55)}
              >
                <PracticeAreaCard
                  index={i + 1}
                  title={area.titleEn}
                  description={area.descEn}
                  detail={area.detailEn}
                  href="/services"
                />
              </div>
            ))}
          </div>
          <div className="reveal text-center mt-10">
            <a
              href="/services"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-600 hover:border-[#111111] hover:text-[#111111] font-semibold py-2.5 px-6 rounded-lg text-sm transition-colors"
            >
              View all practice areas <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHY JACKLAW ─── */}
      <section
        className="reveal-section py-20 px-4 sm:px-6 bg-[#111111]"
        aria-labelledby="why-jacklaw-heading"
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            center
            light
            eyebrow="Our approach"
            subtitle="What sets [866]JACKLAW apart."
          >
            <span id="why-jacklaw-heading">Why Workers Choose [866]JACKLAW</span>
          </SectionHeading>
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {[
              {
                num: '01',
                title: 'We Only Represent Employees',
                desc: 'Our firm is dedicated exclusively to representing workers, never employers. Our interests are always aligned with yours.',
              },
              {
                num: '02',
                title: 'Service in Your Language',
                desc: 'Consultations in Spanish and Chinese. No interpreters needed — you will always understand exactly what is happening in your case.',
              },
              {
                num: '03',
                title: 'Honest Evaluation, No Exaggerated Promises',
                desc: 'We will tell you clearly whether a valid claim exists and what you can reasonably expect — no inflated promises.',
              },
              {
                num: '04',
                title: 'No Barriers to Getting Started',
                desc: 'Free, confidential consultation. Many cases are handled on contingency — you pay nothing unless there is a recovery.',
              },
            ].map((item, i) => (
              <div
                key={item.num}
                className="reveal-scale group bg-white/5 hover:bg-white/8 rounded-xl p-7 border border-white/8 hover:border-white/15 transition-all"
                data-delay={String(i * 100)}
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
          <div className="reveal">
            <SectionHeading
              center
              eyebrow="How it works"
              subtitle="Getting started is simple, confidential, and carries no obligation."
            >
              <span id="process-heading">Three Steps to Know Your Options</span>
            </SectionHeading>
          </div>

          <ProcessSteps />

          <div className="reveal mt-14 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+18665225529"
              className="bg-[#e07820] hover:bg-[#c9660f] text-white font-bold py-3.5 px-8 rounded-lg text-sm tracking-wide transition-colors shadow-md"
            >
              Call: (866) JACKLAW
            </a>
            <a
              href="/contact"
              className="border border-gray-200 hover:border-[#111111] text-gray-600 hover:text-[#111111] font-bold py-3.5 px-8 rounded-lg text-sm tracking-wide transition-colors"
            >
              Complete the form
            </a>
          </div>
        </div>
      </section>

      {/* ─── LANGUAGE CALLOUT ─── */}
      <section className="py-20 px-4 sm:px-6 bg-[#f5f5f5]" aria-labelledby="language-callout-heading">
        <div className="max-w-5xl mx-auto">
          <div className="reveal">
            <SectionHeading
              center
              eyebrow="Multilingual service"
            >
              <span id="language-callout-heading">We Serve Workers in Their Language</span>
            </SectionHeading>
          </div>
          <p className="text-center text-gray-500 text-[15px] -mt-6 mb-10 max-w-xl mx-auto">
            Your rights in California do not depend on your language or immigration status.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="reveal-left bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="text-[11px] font-bold text-[#e07820] uppercase tracking-[0.18em] mb-3">
                Español
              </div>
              <h3 className="font-bold text-[#111111] text-xl mb-3 leading-snug">
                Spanish-Speaking Workers
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-5">
                If you are a Spanish-speaking worker in California, your rights are the
                same as any other employee — regardless of immigration status. We offer
                full service in Spanish.
              </p>
              <a
                href="/es"
                className="inline-flex items-center gap-1.5 text-[#e07820] hover:text-[#c9660f] font-semibold text-sm transition-colors"
              >
                Consulta gratis en español <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="reveal-right bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="text-[11px] font-bold text-[#e07820] uppercase tracking-[0.18em] mb-3">
                中文
              </div>
              <h3 className="font-bold text-[#111111] text-xl mb-3 leading-snug">
                华裔劳工支持
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-5">
                我们为加州华裔工人提供劳动法法律服务。无论您的移民身份如何，您在加州都享有同等的劳工权利。
              </p>
              <a
                href="/chinese-labor-law"
                className="inline-flex items-center gap-1.5 text-[#e07820] hover:text-[#c9660f] font-semibold text-sm transition-colors"
              >
                了解更多中文信息 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <CTASection
        headline="Think your employment rights were violated?"
        subtext="You don't have to face it alone. Call today for a free, confidential evaluation — no obligation, no upfront cost."
        primaryLabel="Call: (866) JACKLAW"
        primaryHref="tel:+18665225529"
        secondaryLabel="Contact form"
        secondaryHref="/contact"
      />
    </>
  );
}
