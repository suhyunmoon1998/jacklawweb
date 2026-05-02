import type { Metadata } from 'next';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Law Offices of Jack D. Josephson, APC — an employment law firm in Los Angeles dedicated to representing California employees.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#111111] to-[#1f1f1f] text-white py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            About Us
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Law Offices of Jack D. Josephson, APC&nbsp;—&nbsp;Protecting the
            rights of California workers.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Firm overview */}
          <div>
            <div className="h-1 w-12 bg-[#e07820] rounded mb-5" />
            <h2 className="text-3xl font-bold text-[#111111] mb-2">Our Firm</h2>
            <p className="text-gray-500 text-sm mb-6">
              An employment law firm based in Los Angeles, California.
            </p>
            <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
              <p>
                Law Offices of Jack D. Josephson, APC is an employment law firm
                based in Los Angeles, California. We represent employees who
                believe their workplace rights have been violated. Our practice
                focuses exclusively on employee-side employment law — meaning we
                only work on behalf of workers, never employers.
              </p>
              <p>
                California has some of the strongest labor protections in the
                country. Yet many employees do not know their rights or how to
                enforce them. Our mission is to help workers understand their
                legal options and, where appropriate, pursue a fair resolution.
              </p>
            </div>
          </div>

          {/* Jack D. Josephson */}
          <div>
            <div className="h-1 w-12 bg-[#e07820] rounded mb-5" />
            <h2 className="text-3xl font-bold text-[#111111] mb-2">
              Jack D. Josephson
            </h2>
            <p className="text-gray-500 text-sm mb-8">Founder and Lead Attorney</p>

            <div className="flex flex-col sm:flex-row gap-8 items-start">
              {/* Photo placeholder */}
              <div className="flex-shrink-0">
                <div
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-[#111111] flex flex-col items-center justify-center text-[#e07820] border-4 border-[#fcd9aa] shadow-md"
                  aria-label="Jack D. Josephson — Attorney"
                  role="img"
                >
                  <span className="text-4xl font-bold tracking-tight">JDJ</span>
                  <span className="text-[10px] text-gray-400 mt-1 font-medium">
                    Attorney
                  </span>
                </div>
              </div>

              {/* Bio */}
              <div className="bg-[#f5f5f5] rounded-2xl p-7 border border-[#fcd9aa] flex-1 space-y-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  Jack D. Josephson is the founder of Law Offices of Jack D.
                  Josephson, APC. A graduate of the University of California, Los
                  Angeles (UCLA), where he earned his degree <em>Magna Cum Laude</em>,
                  he went on to complete his legal education at Loyola Law School
                  Los Angeles, one of the most respected law schools in Southern
                  California.
                </p>
                <p>
                  Mr. Josephson has dedicated his legal practice to representing
                  employees in California on matters of employment and labor law.
                  He has completed professional ethics training, reflecting his
                  commitment to responsible legal practice and principled advocacy
                  on behalf of his clients.
                </p>
                <p>
                  His approach is straightforward: listen carefully to the client,
                  review the facts with care, and provide an honest assessment of
                  the available legal options — without exaggerated promises.
                </p>
              </div>
            </div>
          </div>

          {/* Personal attention */}
          <div>
            <div className="h-1 w-12 bg-[#e07820] rounded mb-5" />
            <h2 className="text-3xl font-bold text-[#111111] mb-8">
              Personal Attention for Every Client
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: 'Direct Communication',
                  desc: 'We believe every client deserves direct attention and clear communication about the status of their case — not generic responses.',
                },
                {
                  title: 'Confidentiality',
                  desc: 'Everything you share with us is confidential. The initial consultation does not create an attorney-client relationship until both parties agree.',
                },
                {
                  title: 'Service in Your Language',
                  desc: 'We offer consultations in Spanish and Chinese. No language barrier should prevent you from understanding your rights.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
                >
                  <h3 className="font-bold text-[#111111] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ethics / affiliation disclaimer */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 className="font-bold text-[#111111] mb-3 text-sm uppercase tracking-wide">
              Ethics &amp; Affiliation Notice
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The founder of this firm has completed recognized professional ethics
              training.{' '}
              <strong>
                This firm has no affiliation, association, or relationship with the
                Josephson Institute of Ethics.
              </strong>{' '}
              The shared surname implies no institutional connection of any kind.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to evaluate your case?"
        subtext="Contact us today for a free, confidential consultation. We will explain your options with no obligation."
        primaryLabel="Call: (866) JACKLAW"
        primaryHref="tel:+18665225529"
        secondaryLabel="Contact form"
        secondaryHref="/contact"
      />
    </>
  );
}
