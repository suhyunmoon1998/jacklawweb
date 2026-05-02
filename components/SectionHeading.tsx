interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  eyebrow?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  children,
  subtitle,
  eyebrow,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-[#e07820] text-[11px] font-bold uppercase tracking-[0.18em] mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-[2.5rem] font-bold leading-[1.15] ${
          light ? 'text-white' : 'text-[#111111]'
        }`}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[15px] leading-relaxed max-w-2xl ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-gray-300' : 'text-gray-500'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
