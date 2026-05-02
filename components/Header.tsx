'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Practice Areas', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Free Consultation', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-[#111111] shadow-xl">
      {/* Top utility bar — desktop only */}
      <div className="hidden lg:block bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-8">
          <span className="text-[11px] text-gray-500 tracking-wide">
            3580 Wilshire Blvd., 17th Floor &mdash; Los Angeles, CA 90010
          </span>
          <span className="text-[11px] text-gray-500 tracking-wide">
            Confidential consultations &mdash; No upfront fees
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-[68px]">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 rounded-sm"
              aria-label="[866]JACKLAW — Home"
            >
              <Image
                src="/logo.png"
                alt="[866]JACKLAW logo"
                width={44}
                height={44}
                className="rounded-lg flex-shrink-0"
                priority
              />
              <div className="flex flex-col leading-tight">
                <span className="text-[#e07820] font-bold text-xl md:text-2xl tracking-tight">
                  [866]JACKLAW
                </span>
                <span className="text-gray-500 text-[10px] hidden sm:block font-normal tracking-wider uppercase">
                  Law Offices of Jack D. Josephson, APC
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 text-[13px] font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-[#e07820] bg-white/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="ml-3">
                <LanguageSwitcher />
              </div>
              <a
                href="tel:+18665225529"
                className="ml-4 bg-[#e07820] hover:bg-[#c9660f] text-white font-bold px-5 py-2 rounded-lg text-[13px] tracking-wide transition-colors shadow-sm"
              >
                (866) JACKLAW
              </a>
            </nav>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageSwitcher />
              <a
                href="tel:+18665225529"
                className="bg-[#e07820] hover:bg-[#c9660f] text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Call
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-md hover:bg-white/5 transition-colors"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <nav id="mobile-menu" className="lg:hidden border-t border-white/5 py-3" aria-label="Mobile menu">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center py-3 px-1 text-sm font-medium border-b border-white/5 transition-colors ${
                    isActive(item.href) ? 'text-[#e07820]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {isActive(item.href) && (
                    <span className="w-1 h-4 bg-[#e07820] rounded-full mr-3 flex-shrink-0" />
                  )}
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <a
                  href="tel:+18665225529"
                  className="flex items-center justify-center bg-[#e07820] hover:bg-[#c9660f] text-white font-bold py-3 px-6 rounded-lg text-sm transition-colors w-full"
                >
                  Call: (866) JACKLAW
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
