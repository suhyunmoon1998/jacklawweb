import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MapSection from '@/components/MapSection';
import CalendlyWidget from '@/components/CalendlyWidget';
import ScrollObserver from '@/components/ScrollObserver';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: '[866]JACKLAW | California Employment Lawyers',
    template: '%s | [866]JACKLAW',
  },
  description:
    'California employment lawyers in Los Angeles helping employees with unpaid overtime, wrongful termination, discrimination, harassment, retaliation, and wage theft.',
  keywords: [
    'california employment lawyer',
    'unpaid overtime',
    'wrongful termination',
    'workplace discrimination',
    'jacklaw',
    'employee attorney los angeles',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    siteName: '[866]JACKLAW | Law Offices of Jack D. Josephson, APC',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'Law Offices of Jack D. Josephson, APC',
              alternateName: '[866]JACKLAW',
              telephone: '+1-866-522-5529',
              url: 'https://866jacklaw.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '3580 Wilshire Blvd., 17th Floor',
                addressLocality: 'Los Angeles',
                addressRegion: 'CA',
                postalCode: '90010',
                addressCountry: 'US',
              },
              areaServed: [
                { '@type': 'State', name: 'California' },
                { '@type': 'City', name: 'Los Angeles' },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Servicios de Derecho Laboral',
                itemListElement: [
                  'Despido Injusto',
                  'Overtime No Pagado',
                  'Discriminación Laboral',
                  'Acoso Sexual',
                  'Robo de Salarios',
                  'Represalias',
                  'Licencia Médica y Embarazo',
                ],
              },
              description:
                'Abogados laborales en Los Angeles, California que representan a empleados con reclamos de overtime no pagado, despido injusto, discriminación, acoso sexual y represalias.',
              knowsLanguage: ['es', 'en', 'zh'],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <MapSection />
        <Footer />
        <CalendlyWidget />
        <ScrollObserver />
      </body>
    </html>
  );
}
