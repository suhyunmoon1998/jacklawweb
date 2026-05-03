'use client';
import { useState } from 'react';

interface PracticeAreaCardProps {
  title: string;
  description: string;
  detail?: string;
  index?: number;
  href?: string;
  ctaLabel?: string;
}

export default function PracticeAreaCard({
  title,
  description,
  detail,
  index = 1,
  href = '/services',
  ctaLabel = 'Free consultation →',
}: PracticeAreaCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card h-[270px] cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
      role="group"
      aria-label={title}
    >
      <div className={`flip-card-inner${flipped ? ' is-flipped' : ''}`}>
        {/* Front */}
        <div className="flip-card-front relative bg-white border border-gray-100 shadow-sm p-6 flex flex-col">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#e07820]/25" />
          <div className="text-[#e07820] font-mono text-[11px] font-bold tracking-[0.15em] mb-3 opacity-50">
            {String(index).padStart(2, '0')}
          </div>
          <h3 className="font-bold text-[#111111] text-[15px] mb-2 leading-snug">{title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-4 flex-1">{description}</p>
          <div className="mt-3 text-[#e07820] text-[11px] font-semibold opacity-40 select-none">
            Hover to learn more →
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back relative bg-[#111111] p-6 text-white flex flex-col">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#e07820]" />
          <div className="text-[#e07820] font-mono text-[11px] font-bold tracking-[0.15em] mb-2 opacity-60">
            {String(index).padStart(2, '0')}
          </div>
          <h3 className="font-bold text-white text-[14px] mb-3 leading-snug">{title}</h3>
          <p className="text-gray-300 text-[13px] leading-relaxed line-clamp-5 flex-1">
            {detail || description}
          </p>
          <a
            href={href}
            onClick={(e) => e.stopPropagation()}
            className="mt-4 inline-flex items-center gap-1.5 bg-[#e07820] hover:bg-[#c9660f] text-white font-bold text-xs py-2 px-4 rounded-lg transition-colors w-fit"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
