'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const langs = [
  { code: 'en', label: 'EN', href: '/' },
  { code: 'es', label: 'ES', href: '/es' },
  { code: 'zh', label: '中文', href: '/chinese-labor-law' },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const active =
    pathname === '/'
      ? 'en'
      : pathname.startsWith('/es')
        ? 'es'
        : pathname.startsWith('/chinese')
          ? 'zh'
          : 'en';

  return (
    <div className="flex items-center gap-0.5 bg-white/10 rounded-lg p-1" role="group" aria-label="Language selector">
      {langs.map((lang) => (
        <Link
          key={lang.code}
          href={lang.href}
          aria-label={`Switch to ${lang.label}`}
          aria-current={active === lang.code ? 'page' : undefined}
          className={`flex items-center px-2.5 py-1.5 rounded text-xs font-bold transition-all whitespace-nowrap ${
            active === lang.code
              ? 'bg-[#e07820] text-white shadow-sm'
              : 'text-gray-400 hover:text-white hover:bg-white/10'
          }`}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
}
