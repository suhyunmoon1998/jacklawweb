interface PracticeAreaCardProps {
  title: string;
  description: string;
  index?: number;
  href?: string;
}

export default function PracticeAreaCard({
  title,
  description,
  index = 1,
  href = '/services',
}: PracticeAreaCardProps) {
  return (
    <a
      href={href}
      className="group relative block bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#e07820]/30 transition-all duration-200 p-6 overflow-hidden focus-visible:outline-2 focus-visible:outline-[#e07820]"
    >
      {/* Top accent bar — appears on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-100 group-hover:bg-[#e07820] transition-colors duration-300" />

      {/* Number badge */}
      <div className="text-[#e07820] font-mono text-[11px] font-bold tracking-[0.15em] mb-3 opacity-50 group-hover:opacity-100 transition-opacity">
        {String(index).padStart(2, '0')}
      </div>

      <h3 className="font-bold text-[#111111] text-[15px] mb-2 group-hover:text-[#e07820] transition-colors leading-snug">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

      <div className="mt-4 text-[#e07820] text-xs font-semibold inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Learn more <span aria-hidden="true">→</span>
      </div>
    </a>
  );
}
