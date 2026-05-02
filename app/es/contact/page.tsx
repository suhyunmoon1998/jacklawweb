import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Consulta Gratuita',
  description:
    'Solicite una evaluación gratuita de su caso laboral. Llame a (866) JACKLAW o complete el formulario en línea. Sin costo, sin compromiso.',
};

export default function EsContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#111111] to-[#1f1f1f] text-white py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Evaluación Gratuita de Caso
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Cuéntenos lo que pasó. Nuestro equipo revisará su situación y le
            responderá a la brevedad — sin costo y sin compromiso.
          </p>
          <a
            href="tel:+18665225529"
            className="inline-block bg-[#e07820] hover:bg-[#c9660f] text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg"
          >
            &nbsp;Llame Ahora: (866) JACKLAW
          </a>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#111111] mb-1">
                Envíe su Información
              </h2>
              <div className="h-1 w-10 bg-[#e07820] rounded mb-2" />
              <p className="text-gray-500 text-sm mb-7">
                Complete el formulario y nos pondremos en contacto con usted a la
                brevedad.
              </p>
              <ContactForm lang="es" />
            </div>

            {/* Sidebar */}
            <aside className="space-y-5 lg:sticky lg:top-24">
              <div className="bg-[#111111] text-white rounded-xl p-6 shadow-md">
                <h2 className="font-bold text-[#e07820] mb-1 text-xs uppercase tracking-widest">
                  ¿Prefiere llamar?
                </h2>
                <a
                  href="tel:+18665225529"
                  className="block text-2xl font-bold text-white hover:text-[#e07820] transition-colors mt-2"
                >
                  (866) JACKLAW
                </a>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  Hablamos español. Llame en cualquier momento para hablar con
                  nuestro equipo.
                </p>
              </div>

              <div className="bg-[#f5f5f5] rounded-xl p-6 border border-[#fcd9aa]">
                <h2 className="font-bold text-[#111111] mb-4">Lo que puede esperar</h2>
                <ul className="space-y-3">
                  {[
                    'Revisión confidencial de su caso',
                    'Respuesta a la brevedad',
                    'Sin costo inicial',
                    'Sin obligación de contratar',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-[#e07820] font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-gray-700 text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <p className="text-xs text-gray-500 leading-relaxed">
                  <strong className="text-gray-600">Aviso legal:</strong> El envío de
                  este formulario no crea una relación abogado-cliente. Su información
                  se mantiene confidencial. Los resultados dependen de los hechos
                  específicos de cada caso y no están garantizados.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
