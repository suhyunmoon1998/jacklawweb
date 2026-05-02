import type { Metadata } from 'next';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Law Offices of Jack D. Josephson, APC — Los Angeles employment lawyers dedicated to representing California workers. Millions recovered for clients.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#111111] text-white py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#e07820] text-[11px] font-bold uppercase tracking-[0.18em] mb-4">
            Los Angeles, California
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.1]">
            About Our Firm
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Employment and Labor Legal Offices dedicated to representing
            California workers who have been abused by their employers.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Firm overview */}
          <div>
            <p className="text-[#e07820] text-[11px] font-bold uppercase tracking-[0.18em] mb-3">Our Firm</p>
            <h2 className="text-3xl font-bold text-[#111111] mb-6 leading-tight">
              Los Angeles Employment &amp; Labor Legal Offices
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
              <p>
                Located in the heart of Los Angeles, the Law Offices of Jack D.
                Josephson, APC is dedicated to representing California workers who
                have been abused by their employers. Our team of highly qualified
                legal professionals is committed to helping our clients receive the
                full monetary compensation they deserve.
              </p>
              <p>
                The Firm represents California employees who have been victims of
                violated employment laws. These include wrongful termination,
                pregnancy, age/racial/gender discrimination, sexual harassment,
                denial of sick or disabled leave, failure to provide disability
                accommodations, unpaid overtime, tip-and-tip tie, whistleblowing,
                retaliation, failure to provide rest and meal breaks, class actions,
                and other State and Federal labor law violations.
              </p>
            </div>
          </div>

          {/* Jack D. Josephson */}
          <div>
            <p className="text-[#e07820] text-[11px] font-bold uppercase tracking-[0.18em] mb-3">Founder</p>
            <h2 className="text-3xl font-bold text-[#111111] mb-1 leading-tight">
              Jack D. Josephson
            </h2>
            <p className="text-gray-400 text-sm mb-8">Founder and Lead Attorney</p>

            <div className="flex flex-col sm:flex-row gap-8 items-start">
              {/* Photo placeholder */}
              <div className="flex-shrink-0">
                <div
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-[#111111] flex flex-col items-center justify-center text-[#e07820] border-2 border-white/10 shadow-lg"
                  aria-label="Jack D. Josephson — Attorney"
                  role="img"
                >
                  <span className="text-4xl font-bold tracking-tight">JDJ</span>
                  <span className="text-[10px] text-gray-500 mt-1 font-medium uppercase tracking-wider">
                    Attorney
                  </span>
                </div>
              </div>

              {/* Bio */}
              <div className="bg-[#f5f5f5] rounded-2xl p-7 border border-gray-100 flex-1 space-y-4 text-gray-600 leading-relaxed text-[15px]">
                <p>
                  Jack D. Josephson has fought for and won{' '}
                  <strong className="text-[#111111]">millions of dollars</strong> for
                  his clients and continues to work tirelessly to ensure that his
                  clients win every last dollar they deserve under the law.
                </p>
                <p>
                  Mr. Josephson graduated <em>magna cum laude</em> from UCLA and is
                  an alumnus of Loyola Law School in Los Angeles. He was trained and
                  certified as an ethics educator by the Josephson Institute of
                  Ethics and applies his commitment to ethical values in the practice
                  of law without sacrificing the aggressive representation of his
                  clients&rsquo; rights.
                </p>
                <p>
                  His approach is direct: listen carefully, review the facts with
                  care, and fight aggressively for every dollar his clients deserve
                  under the law.
                </p>
              </div>
            </div>
          </div>

          {/* Personalized Approach */}
          <div>
            <p className="text-[#e07820] text-[11px] font-bold uppercase tracking-[0.18em] mb-3">Our Approach</p>
            <h2 className="text-3xl font-bold text-[#111111] mb-6 leading-tight">
              A Personalized Approach
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Our clients are important to us, and we understand that a workplace
                dispute can be a highly emotional experience. We believe that an
                attorney should not only fight for their client but also communicate
                honestly and listen attentively.
              </p>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                At the Law Offices of Jack D. Josephson, APC, we emphasize open
                communication with you throughout your case. Your attorney will work
                with you personally to ensure your rights are protected and that your
                interests always take precedence over our legal strategy.
              </p>
            </div>
          </div>

          {/* 3 pillars */}
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                title: 'Direct Communication',
                desc: 'Your attorney works with you personally — open communication throughout your case, not generic responses.',
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
                className="group relative bg-white rounded-xl p-6 border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-100 group-hover:bg-[#e07820] transition-colors duration-300" />
                <h3 className="font-bold text-[#111111] mb-2 text-[15px]">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Ethics / affiliation disclaimer */}
          <div className="bg-[#f5f5f5] border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-[#111111] mb-3 text-xs uppercase tracking-[0.15em]">
              Ethics &amp; Affiliation Notice
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              The founder of this firm was trained and certified as an ethics educator
              by the Josephson Institute of Ethics (founded by his brother, Michael
              Josephson).{' '}
              <strong className="text-[#111111]">
                The Law Offices of Jack D. Josephson, APC is not associated with the
                Josephson Institute of Ethics.
              </strong>
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
