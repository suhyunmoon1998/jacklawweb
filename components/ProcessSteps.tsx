'use client';

import { useEffect, useRef, useState } from 'react';

interface Step {
  step: string;
  title: string;
  desc: string;
}

const defaultSteps: Step[] = [
  {
    step: '1',
    title: 'Tell Us What Happened',
    desc: 'Call (866) JACKLAW or complete the online form. Free, confidential, no obligation.',
  },
  {
    step: '2',
    title: 'We Review the Facts',
    desc: 'Our team analyzes your situation and evaluates whether a valid employment claim may exist.',
  },
  {
    step: '3',
    title: 'We Explain Your Options',
    desc: 'We lay out your legal options clearly. You decide how to proceed.',
  },
];

export default function ProcessSteps({ steps = defaultSteps }: { steps?: Step[] }) {
  const [active, setActive] = useState(0);
  const hasAnimated = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setTimeout(() => setActive(1), 150);
          setTimeout(() => setActive(2), 950);
          setTimeout(() => setActive(3), 1750);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative grid md:grid-cols-3 gap-8 mt-14">

      {/* Connector line: step 1 → 2 */}
      <div className="hidden md:block absolute top-6 h-0.5 bg-gray-100 overflow-hidden"
        style={{ left: 'calc(16.67% + 1.5rem)', right: 'calc(50% + 1.5rem)' }}>
        <div
          className="h-full bg-[#e07820]"
          style={{
            width: active >= 2 ? '100%' : '0%',
            transition: active >= 2 ? 'width 700ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }}
        />
      </div>

      {/* Connector line: step 2 → 3 */}
      <div className="hidden md:block absolute top-6 h-0.5 bg-gray-100 overflow-hidden"
        style={{ left: 'calc(50% + 1.5rem)', right: 'calc(16.67% + 1.5rem)' }}>
        <div
          className="h-full bg-[#e07820]"
          style={{
            width: active >= 3 ? '100%' : '0%',
            transition: active >= 3 ? 'width 700ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }}
        />
      </div>

      {steps.map((item, i) => {
        const stepNum = i + 1;
        const isActive = active >= stepNum;
        return (
          <div key={item.step} className="relative flex flex-col items-center text-center">
            {/* Step circle */}
            <div
              className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-base ring-4 ring-white shadow-sm"
              style={{
                backgroundColor: isActive ? '#e07820' : '#f3f4f6',
                color: isActive ? '#ffffff' : '#9ca3af',
                transform: isActive ? 'scale(1.1)' : 'scale(1)',
                transition: 'background-color 400ms ease, color 400ms ease, transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              {/* Pulse ring on activate */}
              {isActive && (
                <span
                  className="absolute inset-0 rounded-full bg-[#e07820] animate-ping opacity-20"
                  style={{ animationDuration: '600ms', animationIterationCount: 1 }}
                />
              )}
              {item.step}
            </div>

            {/* Title */}
            <h3
              className="font-bold text-[15px] mb-2 mt-5"
              style={{
                color: isActive ? '#111111' : '#d1d5db',
                transition: 'color 400ms ease',
              }}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className="text-sm leading-relaxed"
              style={{
                color: isActive ? '#6b7280' : '#e5e7eb',
                transition: 'color 400ms ease',
              }}
            >
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}
