interface CTASectionProps {
  headline: string;
  subtext?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
}

export default function CTASection({
  headline,
  subtext,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  dark = true,
}: CTASectionProps) {
  return (
    <section className={`py-20 px-4 ${dark ? 'bg-[#111111]' : 'bg-[#f5f5f5]'}`}>
      <div className="max-w-xl mx-auto text-center">
        <div className="h-px w-10 mx-auto mb-8 bg-[#e07820]" />
        <h2
          className={`text-3xl md:text-4xl font-bold leading-tight mb-5 ${
            dark ? 'text-white' : 'text-[#111111]'
          }`}
        >
          {headline}
        </h2>
        {subtext && (
          <p
            className={`text-[15px] leading-relaxed mb-8 ${
              dark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {subtext}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={primaryHref}
            className="bg-[#e07820] hover:bg-[#c9660f] text-white font-bold py-3.5 px-8 rounded-lg text-sm tracking-wide transition-colors shadow-md"
          >
            {primaryLabel}
          </a>
          {secondaryLabel && secondaryHref && (
            <a
              href={secondaryHref}
              className={`font-bold py-3.5 px-8 rounded-lg text-sm tracking-wide border transition-colors ${
                dark
                  ? 'border-white/20 text-white hover:bg-white/8 hover:border-white/40'
                  : 'border-[#111111]/20 text-[#111111] hover:bg-[#111111]/5 hover:border-[#111111]/40'
              }`}
            >
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
