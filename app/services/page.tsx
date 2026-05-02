import type { Metadata } from 'next';
import { practiceAreas } from '@/data/practiceAreas';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Practice Areas',
  description:
    'Practice areas of [866]JACKLAW: wrongful termination, unpaid overtime, employment discrimination, sexual harassment, meal and rest breaks, wage theft, retaliation, and more.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#111111] text-white py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#e07820] text-[11px] font-bold uppercase tracking-[0.18em] mb-4">
            California Employment Law
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.1]">
            Practice Areas
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            We represent California employees across a variety of employment claims.
            Select an area to learn more about your potential rights.
          </p>
        </div>
      </section>

      {/* Jump nav */}
      <nav
        className="bg-white border-b border-gray-100 sticky top-16 md:top-[76px] z-40 overflow-x-auto"
        aria-label="Jump to section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ul className="flex gap-1 py-2 min-w-max">
            {practiceAreas.map((area, i) => (
              <li key={area.id}>
                <a
                  href={`#${area.id}`}
                  className="flex items-center gap-2 px-3 py-2 text-[12px] font-semibold text-gray-500 hover:text-[#111111] hover:bg-[#f5f5f5] rounded-lg transition-colors whitespace-nowrap"
                >
                  <span className="font-mono text-[10px] text-[#e07820] font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {area.titleEn}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Practice areas detail */}
      <section className="py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto divide-y divide-gray-100">
          {practiceAreas.map((area, i) => (
            <article
              key={area.id}
              id={area.id}
              className="scroll-mt-28 py-16 first:pt-4"
            >
              <div className="flex flex-col md:flex-row gap-10">
                {/* Number block */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#111111] rounded-2xl flex items-center justify-center">
                    <span className="text-[#e07820] font-mono font-bold text-lg">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-3">
                    {area.titleEn}
                  </h2>
                  <div className="h-px w-10 bg-[#e07820] mb-5" />
                  <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">
                    {area.descEn}
                  </p>
                  <blockquote className="text-sm text-gray-400 italic border-l-2 border-[#e07820] pl-4 bg-[#f5f5f5] py-3 pr-4 rounded-r mb-6">
                    Prior case results do not guarantee similar outcomes. Each case
                    depends on its own facts and circumstances.
                  </blockquote>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#e07820] hover:bg-[#c9660f] text-white font-bold py-2.5 px-6 rounded-lg transition-colors text-sm shadow-sm"
                  >
                    Evaluate your case for free →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        headline="Have questions about your situation?"
        subtext="Call [866]JACKLAW for a free evaluation. We will explain what options you may have under California law."
        primaryLabel="(866) JACKLAW"
        primaryHref="tel:+18665225529"
        secondaryLabel="Contact form"
        secondaryHref="/contact"
      />
    </>
  );
}
