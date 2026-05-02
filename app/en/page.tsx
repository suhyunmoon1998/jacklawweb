import type { Metadata } from 'next';
import { practiceAreas } from '@/data/practiceAreas';
import CTASection from '@/components/CTASection';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'California Employment Lawyers | [866]JACKLAW',
  description:
    'California employment lawyers fighting for workers. Unpaid overtime, wrongful termination, discrimination, sexual harassment, retaliation, and wage theft. Free case review.',
};

export default function EnglishPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#111111] to-[#1f1f1f] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-[#e07820] text-white text-xs font-bold px-4 py-1 rounded-full mb-6 uppercase tracking-wider">
            California Employment Law
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            California Employment Lawyers Fighting for Workers
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Unpaid overtime? Wrongful termination? Workplace discrimination, harassment, or retaliation?
            At <strong className="text-[#e07820]">[866]JACKLAW</strong>, we represent California employees and
            help them understand their rights and evaluate their legal options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+18665225529"
              className="bg-[#e07820] hover:bg-[#c9660f] text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg focus-visible:outline-2 focus-visible:outline-white"
            >
              📞 Call (866) JACKLAW
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#111111] font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              Free Case Review
            </a>
          </div>
          <p className="text-gray-300 text-sm">
            No upfront cost · Confidential evaluation · Services in Spanish &amp; Chinese
          </p>
        </div>
      </section>

      {/* Practice areas */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            center
            subtitle="We represent California employees in a wide range of employment law matters."
          >
            Practice Areas
          </SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {practiceAreas.map((area) => (
              <a
                key={area.id}
                href="/services"
                className="group block bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#e07820] transition-all p-6 focus-visible:outline-2 focus-visible:outline-[#e07820]"
              >
                <div className="text-3xl mb-3" role="img" aria-label={area.titleEn}>{area.icon}</div>
                <h3 className="text-lg font-bold text-[#111111] mb-2 group-hover:text-[#e07820] transition-colors">
                  {area.titleEn}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.descEn}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About the firm */}
      <section className="py-14 px-4 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading center subtitle="Law Offices of Jack D. Josephson, APC — Los Angeles, California">
            About [866]JACKLAW
          </SectionHeading>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl mx-auto">
            We are an employment law firm based in Los Angeles that represents California employees who believe
            their workplace rights have been violated. We handle cases involving wage and hour claims, wrongful
            termination, discrimination, harassment, and retaliation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl mx-auto">
            We offer services in English, Spanish, and Chinese, and we provide free initial case evaluations.
            The results of any case depend on the specific facts and applicable law — we do not make guarantees
            about outcomes.
          </p>
          <a
            href="/about"
            className="inline-block text-[#e07820] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-[#e07820] rounded"
          >
            Learn more about our firm →
          </a>
        </div>
      </section>

      <CTASection
        headline="Think your workplace rights were violated?"
        subtext="Call (866) JACKLAW or complete our online form for a free, confidential case review. No obligation, no upfront cost."
        primaryLabel="📞 Call (866) JACKLAW"
        primaryHref="tel:+18665225529"
        secondaryLabel="Contact form"
        secondaryHref="/contact"
      />
    </>
  );
}
