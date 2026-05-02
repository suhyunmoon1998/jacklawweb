import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Free Consultation',
  description:
    'Request a free evaluation of your employment case. Call (866) JACKLAW or complete the online form. No cost, no obligation.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#111111] to-[#1f1f1f] text-white py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Free Case Evaluation
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Tell us what happened. Our team will review your situation and get
            back to you promptly — at no cost and with no obligation.
          </p>
          <a
            href="tel:+18665225529"
            className="inline-block bg-[#e07820] hover:bg-[#c9660f] text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg"
          >
            &nbsp;Call Now: (866) JACKLAW
          </a>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* Form — takes 2 of 3 columns on desktop */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#111111] mb-1">
                Submit Your Information
              </h2>
              <div className="h-1 w-10 bg-[#e07820] rounded mb-2" />
              <p className="text-gray-500 text-sm mb-7">
                Complete the form and we will be in touch shortly.
              </p>
              <ContactForm lang="en" />
            </div>

            {/* Sidebar */}
            <aside className="space-y-5 lg:sticky lg:top-24">
              {/* Call box */}
              <div className="bg-[#111111] text-white rounded-xl p-6 shadow-md">
                <h2 className="font-bold text-[#e07820] mb-1 text-xs uppercase tracking-widest">
                  Prefer to call?
                </h2>
                <a
                  href="tel:+18665225529"
                  className="block text-2xl font-bold text-white hover:text-[#e07820] transition-colors mt-2"
                >
                  (866) JACKLAW
                </a>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  We speak Spanish and Chinese. Call anytime to speak with our team.
                </p>
              </div>

              {/* What to expect */}
              <div className="bg-[#f5f5f5] rounded-xl p-6 border border-[#fcd9aa]">
                <h2 className="font-bold text-[#111111] mb-4">What to expect</h2>
                <ul className="space-y-3">
                  {[
                    'Confidential review of your case',
                    'Prompt response',
                    'No upfront cost',
                    'No obligation to hire',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-[#e07820] font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-gray-700 text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal note */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <p className="text-xs text-gray-500 leading-relaxed">
                  <strong className="text-gray-600">Legal notice:</strong> Submitting
                  this form does not create an attorney-client relationship. Your
                  information is kept confidential. Results depend on the specific
                  facts of each case and are not guaranteed.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
