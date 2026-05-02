import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Practice Areas', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Free Consultation', href: '/contact' },
  { label: 'Español', href: '/es' },
  { label: '中文', href: '/chinese-labor-law' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-gray-300 pt-14 pb-8 px-4 sm:px-6 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="[866]JACKLAW"
                width={64}
                height={64}
                className="rounded-xl"
              />
            </Link>
            <div className="text-gray-400 text-sm mb-1">
              Law Offices of Jack D. Josephson, APC
            </div>
            <div className="text-gray-500 text-sm">3580 Wilshire Blvd., 17th Floor</div>
            <div className="text-gray-500 text-sm mb-5">Los Angeles, California 90010</div>
            <a
              href="tel:+18665225529"
              className="inline-flex items-center gap-2 text-[#e07820] hover:text-[#f59340] font-semibold text-sm transition-colors"
              aria-label="Call (866) JACKLAW"
            >
              (866) 522-5529
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">
              Navigation
            </h3>
            <nav aria-label="Footer navigation">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-1.5 text-gray-400 hover:text-[#e07820] transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">
              Questions about your case?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Call us or complete our online form. The initial consultation is
              free and confidential.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#e07820] hover:bg-[#c9660f] text-white font-bold py-2.5 px-5 rounded-lg text-sm transition-colors"
            >
              Free Evaluation
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-gray-500 leading-relaxed mb-3">
            <strong className="text-gray-400">Legal disclaimer:</strong> The
            information on this website is for informational purposes only and
            does not constitute legal advice. Submitting a form or making an
            initial call does not create an attorney-client relationship. Prior
            results, if mentioned, do not guarantee future outcomes. Each case
            depends on its own facts and applicable law.{' '}
            <em>Attorney Advertising.</em>
          </p>
          <p className="text-xs text-gray-500 leading-relaxed mb-5">
            <strong className="text-gray-400">Affiliation notice:</strong> The
            founder of this firm has completed recognized professional ethics
            training.{' '}
            <em>
              This firm is not affiliated with or associated with the Josephson
              Institute of Ethics.
            </em>{' '}
            The shared surname implies no institutional connection of any kind.
          </p>
          <p className="text-xs text-gray-600">
            © {year} Law Offices of Jack D. Josephson, APC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
