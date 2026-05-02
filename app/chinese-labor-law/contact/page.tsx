import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: '免费案件咨询 | [866]JACKLAW',
  description:
    '申请免费劳动法案件评估。拨打 (866) JACKLAW 或填写在线表格。无需预付费用，无任何义务。',
};

export default function ZhContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#111111] to-[#1f1f1f] text-white py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            免费案件咨询
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            请告诉我们发生了什么。我们的团队将审查您的情况并尽快回复您——免费且无任何义务。
          </p>
          <a
            href="tel:+18665225529"
            className="inline-block bg-[#e07820] hover:bg-[#c9660f] text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg"
          >
            &nbsp;立即致电：(866) JACKLAW
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
                提交您的信息
              </h2>
              <div className="h-1 w-10 bg-[#e07820] rounded mb-2" />
              <p className="text-gray-500 text-sm mb-7">
                填写表格，我们将尽快与您联系。
              </p>
              <ContactForm lang="zh" />
            </div>

            {/* Sidebar */}
            <aside className="space-y-5 lg:sticky lg:top-24">
              <div className="bg-[#111111] text-white rounded-xl p-6 shadow-md">
                <h2 className="font-bold text-[#e07820] mb-1 text-xs uppercase tracking-widest">
                  更愿意打电话？
                </h2>
                <a
                  href="tel:+18665225529"
                  className="block text-2xl font-bold text-white hover:text-[#e07820] transition-colors mt-2"
                >
                  (866) JACKLAW
                </a>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  我们提供中文服务。随时致电与我们的团队交流。
                </p>
              </div>

              <div className="bg-[#f5f5f5] rounded-xl p-6 border border-[#fcd9aa]">
                <h2 className="font-bold text-[#111111] mb-4">您可以期待什么</h2>
                <ul className="space-y-3">
                  {[
                    '对您案件的保密审查',
                    '及时回复',
                    '无需预付费用',
                    '无雇用义务',
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
                  <strong className="text-gray-600">法律声明：</strong>
                  提交此表格不会建立律师-委托人关系。您的信息将严格保密。案件结果取决于具体事实，无法保证。
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
