'use client';

import React from 'react';

export function CapabilitiesHeader() {
  return (
    <div className="relative text-center max-w-2xl mx-auto mb-16">
      <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 mb-3">
        <p className="text-[11px] font-mono font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
          // PLATFORM CAPABILITIES
        </p>
      </div>
      <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.15]">
        Built for serious placement preparation.
      </h2>
      <p className="text-xs sm:text-base text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
        Eliminating scheduling friction so students and alumni mentors can focus 100% on interview performance.
      </p>

      {/* Hand-drawn style decorative note with curved arrow (desktop only) */}
      <div className="hidden lg:flex absolute -right-24 top-2 flex-col items-center pointer-events-none select-none">
        <span className="font-serif italic text-sm text-indigo-500 dark:text-indigo-400 rotate-6 font-medium">
          Better Mentorship.<br />Brighter Careers.
        </span>
        <svg
          className="w-10 h-10 text-indigo-500 dark:text-indigo-400 -mt-1 -scale-x-100 rotate-12"
          viewBox="0 0 50 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 12 10 Q 30 20 20 38" />
          <path d="M 14 34 L 20 38 L 26 32" />
        </svg>
      </div>
    </div>
  );
}
