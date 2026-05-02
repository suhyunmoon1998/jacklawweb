import type { Metadata } from 'next';
import PracticeAreaCard from '@/components/PracticeAreaCard';
import CTASection from '@/components/CTASection';
import SectionHeading from '@/components/SectionHeading';
import ProcessSteps from '@/components/ProcessSteps';
import { practiceAreas } from '@/data/practiceAreas';

export const metadata: Metadata = {
  title: '加州劳动法律师 | [866]JACKLAW',
  description:
    '我们为加州华裔工人提供劳动法律服务。加班费未支付、不当解雇、就业歧视等。免费案件咨询，请致电 (866) JACKLAW。',
};

const zhSteps = [
  {
    step: '1',
    title: '告诉我们发生了什么',
    desc: '拨打 (866) JACKLAW 或填写在线表格。免费、保密、无任何义务。',
  },
  {
    step: '2',
    title: '我们审查案件事实',
    desc: '我们的团队仔细分析您的情况，评估是否可能存在有效的劳动法索赔。',
  },
  {
    step: '3',
    title: '我们解释您的选择',
    desc: '我们清晰地说明您可能拥有的法律选项。由您决定如何继续。',
  },
];

export default function ChinesePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative bg-[#111111] text-white py-28 md:py-36 px-4 sm:px-6 overflow-hidden"
        aria-labelledby="hero-headline"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/logo.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: '55%',
            opacity: 0.05,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white"
          aria-hidden="true"
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-[#e07820]/10 border border-[#e07820]/25 text-[#e07820] text-[11px] font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-[0.15em]">
            加州劳工权益
          </div>

          <h1
            id="hero-headline"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            您的权利。{' '}
            <span className="text-[#e07820]">我们来守护。</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            加班费未支付。不当解雇。歧视。骚扰。{' '}
            <strong className="text-white font-semibold">[866]JACKLAW</strong>{' '}
            为加州华裔工人提供法律代理服务——无需预付费用。
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a
              href="tel:+18665225529"
              className="bg-[#e07820] hover:bg-[#c9660f] text-white font-bold py-4 px-9 rounded-lg text-[15px] tracking-wide transition-colors shadow-lg"
            >
              致电 (866) JACKLAW
            </a>
            <a
              href="/chinese-labor-law/contact"
              className="bg-white/8 hover:bg-white/12 border border-white/15 hover:border-white/30 text-white font-bold py-4 px-9 rounded-lg text-[15px] tracking-wide transition-all"
            >
              免费案件咨询
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-gray-400">
            <span>无需预付费用</span>
            <span className="text-gray-600" aria-hidden="true">&middot;</span>
            <span>保密咨询</span>
            <span className="text-gray-600" aria-hidden="true">&middot;</span>
            <span>提供中文服务</span>
            <span className="text-gray-600" aria-hidden="true">&middot;</span>
            <span>免费评估</span>
          </div>
        </div>
      </section>

      {/* ─── QUICK STATS ─── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { stat: '100%', label: '专注代理雇员' },
              { stat: '免费', label: '初次咨询' },
              { stat: '3', label: '服务语言' },
              { stat: '$0', label: '预付费用' },
            ].map((item) => (
              <div
                key={item.label}
                className="py-7 px-4 text-center hover:bg-[#f5f5f5] transition-colors"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#e07820] mb-1 tracking-tight">
                  {item.stat}
                </div>
                <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.12em]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST / INTRO ─── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="为什么重要"
              subtitle="加州拥有全美最完善的劳工保护法律。无论您的移民身份如何，每位工人都享有同等权利。"
            >
              您的雇主有律师。您也可以有。
            </SectionHeading>
            <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">
              在 <strong className="text-[#111111]">[866]JACKLAW</strong>，我们专门代理雇员——从不代理雇主。
              我们审查您的情况，解释您的法律选项，并评估您是否可能拥有有效索赔权——初次咨询无需任何费用。
            </p>
            <a
              href="/chinese-labor-law/contact"
              className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#1f1f1f] text-white font-bold py-3 px-6 rounded-lg text-sm tracking-wide transition-colors"
            >
              申请免费评估 <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="bg-[#111111] rounded-2xl p-8 text-white">
            <div className="text-[#e07820] font-bold text-[11px] uppercase tracking-[0.18em] mb-6">
              我们为您做什么
            </div>
            <ul className="space-y-4">
              {[
                '仔细审查您案件的事实情况',
                '解释您在加州法律下享有的权利',
                '评估是否可能存在有效的劳动法索赔',
                '诚实告知您的选项——无压力，无夸大承诺',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] leading-relaxed text-gray-200">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border border-[#e07820]/40 bg-[#e07820]/10 flex items-center justify-center text-[#e07820] text-[10px] font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── PRACTICE AREAS ─── */}
      <section className="py-20 px-4 sm:px-6 bg-[#f5f5f5]" aria-labelledby="practice-areas-heading">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            center
            eyebrow="业务范围"
            subtitle="我们为加州华裔雇员处理以下劳动法案件。"
          >
            <span id="practice-areas-heading">业务领域</span>
          </SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {practiceAreas.map((area, i) => (
              <PracticeAreaCard
                key={area.id}
                index={i + 1}
                title={area.titleZh}
                description={area.descZh}
                href="/chinese-labor-law/contact"
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/chinese-labor-law/contact"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-600 hover:border-[#111111] hover:text-[#111111] font-semibold py-2.5 px-6 rounded-lg text-sm transition-colors"
            >
              免费咨询您的案件 <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHY JACKLAW ─── */}
      <section className="py-20 px-4 sm:px-6 bg-[#111111]" aria-labelledby="why-jacklaw-heading">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            center
            light
            eyebrow="我们的优势"
            subtitle="[866]JACKLAW 与其他律师事务所的不同之处。"
          >
            <span id="why-jacklaw-heading">为什么华裔工人选择 [866]JACKLAW</span>
          </SectionHeading>
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {[
              {
                num: '01',
                title: '专注代理雇员',
                desc: '我们的律所专门代理工人，从不代理雇主。我们的利益始终与您保持一致。',
              },
              {
                num: '02',
                title: '提供中文服务',
                desc: '我们提供中文咨询服务。无需翻译——您始终清楚了解案件进展。',
              },
              {
                num: '03',
                title: '诚实评估，不夸大承诺',
                desc: '我们会明确告知是否存在有效索赔，以及您可以合理期望的结果。',
              },
              {
                num: '04',
                title: '零门槛开始',
                desc: '免费、保密的初次咨询。许多案件采用风险代理制——胜诉前无需支付律师费。',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="group bg-white/5 hover:bg-white/8 rounded-xl p-7 border border-white/8 hover:border-white/15 transition-all"
              >
                <div className="text-[#e07820] font-mono text-sm font-bold mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.num}
                </div>
                <h3 className="text-white font-bold text-[15px] mb-2 leading-snug">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3-STEP PROCESS ─── */}
      <section className="py-20 px-4 sm:px-6 bg-white" aria-labelledby="process-heading">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            center
            eyebrow="操作流程"
            subtitle="开始咨询非常简单、保密，且无任何义务。"
          >
            <span id="process-heading">三步了解您的选择</span>
          </SectionHeading>
          <ProcessSteps steps={zhSteps} />
          <div className="mt-14 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+18665225529"
              className="bg-[#e07820] hover:bg-[#c9660f] text-white font-bold py-3.5 px-8 rounded-lg text-sm tracking-wide transition-colors shadow-md"
            >
              致电 (866) JACKLAW
            </a>
            <a
              href="/chinese-labor-law/contact"
              className="border border-gray-200 hover:border-[#111111] text-gray-600 hover:text-[#111111] font-bold py-3.5 px-8 rounded-lg text-sm tracking-wide transition-colors"
            >
              填写在线表格
            </a>
          </div>
        </div>
      </section>

      {/* ─── LANGUAGE CALLOUT ─── */}
      <section className="py-20 px-4 sm:px-6 bg-[#f5f5f5]" aria-labelledby="language-callout-heading">
        <div className="max-w-5xl mx-auto">
          <SectionHeading center eyebrow="多语言服务">
            <span id="language-callout-heading">我们以您的语言服务</span>
          </SectionHeading>
          <p className="text-center text-gray-500 text-[15px] -mt-6 mb-10 max-w-xl mx-auto">
            您在加州的权利与您的语言或移民身份无关。
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="text-[11px] font-bold text-[#e07820] uppercase tracking-[0.18em] mb-3">English</div>
              <h3 className="font-bold text-[#111111] text-xl mb-3 leading-snug">English-Speaking Clients</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-5">
                Full service available in English for all employment law matters in California.
              </p>
              <a href="/" className="inline-flex items-center gap-1.5 text-[#e07820] hover:text-[#c9660f] font-semibold text-sm transition-colors">
                View English site <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="text-[11px] font-bold text-[#e07820] uppercase tracking-[0.18em] mb-3">Español</div>
              <h3 className="font-bold text-[#111111] text-xl mb-3 leading-snug">Trabajadores Hispanohablantes</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-5">
                Ofrecemos atención completa en español para trabajadores de California.
              </p>
              <a href="/es" className="inline-flex items-center gap-1.5 text-[#e07820] hover:text-[#c9660f] font-semibold text-sm transition-colors">
                Consulta gratis en español <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <CTASection
        headline="您认为您的劳工权益受到了侵害？"
        subtext="您不必独自面对。立即致电获取免费、保密的评估——无任何义务，无需预付费用。"
        primaryLabel="致电 (866) JACKLAW"
        primaryHref="tel:+18665225529"
        secondaryLabel="填写在线表格"
        secondaryHref="/chinese-labor-law/contact"
      />
    </>
  );
}
