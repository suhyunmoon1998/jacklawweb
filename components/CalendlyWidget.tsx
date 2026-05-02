'use client';

import { useState } from 'react';

const CALENDLY_URL = 'https://calendly.com/d/cx2z-678-vkh/jacklaw';

export default function CalendlyWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#e07820] hover:bg-[#c9660f] text-white rounded-full shadow-xl transition-all duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-white flex items-center gap-2.5 pl-4 pr-5 py-3.5"
        aria-label="Schedule a free consultation"
      >
        {/* Chat icon */}
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="text-sm font-bold tracking-wide">Free Consultation</span>
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-[#111111] px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-sm">[866]JACKLAW</p>
              <p className="text-gray-400 text-[11px] mt-0.5">Schedule a free consultation</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="px-5 py-5">
            {/* Bot message */}
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#111111] flex-shrink-0 flex items-center justify-center">
                <span className="text-[#e07820] font-bold text-[10px]">JDJ</span>
              </div>
              <div className="bg-[#f5f5f5] rounded-2xl rounded-tl-sm px-4 py-3 text-[13px] text-gray-700 leading-relaxed max-w-[200px]">
                Hi! Ready to schedule your <strong>free consultation</strong> with [866]JACKLAW?
              </div>
            </div>

            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#111111] flex-shrink-0 flex items-center justify-center">
                <span className="text-[#e07820] font-bold text-[10px]">JDJ</span>
              </div>
              <div className="bg-[#f5f5f5] rounded-2xl rounded-tl-sm px-4 py-3 text-[13px] text-gray-700 leading-relaxed max-w-[200px]">
                Pick a time below — no cost, no obligation.
              </div>
            </div>

            {/* CTA buttons */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#e07820] hover:bg-[#c9660f] text-white font-bold py-3 px-4 rounded-xl text-sm tracking-wide transition-colors shadow-sm mb-2"
            >
              Schedule a Time
            </a>
            <a
              href="tel:+18665225529"
              className="block w-full text-center border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-[#111111] font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors"
            >
              Call (866) JACKLAW instead
            </a>
          </div>

          {/* Footer note */}
          <div className="px-5 pb-4">
            <p className="text-[11px] text-gray-400 text-center leading-relaxed">
              Free &middot; Confidential &middot; No obligation
            </p>
          </div>
        </div>
      )}
    </>
  );
}
