'use client';

import React from 'react';
import {
  RiShieldCheckLine,
  RiBuilding4Line,
  RiStarFill,
  RiArrowRightSLine,
  RiUser3Line,
} from '@remixicon/react';

export function VerifiedAlumniCapabilityCard() {
  const alumniProfiles = [
    {
      name: 'Rahul Sharma',
      role: 'Google • SDE II',
      tags: ['System Design', 'DSA', 'Backend'],
      rating: '4.9',
      sessions: '32 sessions',
    },
    {
      name: 'Priya Mehta',
      role: 'TCS • SDE',
      tags: ['System Design', 'DSA'],
      rating: '4.7',
      sessions: '18 sessions',
    },
    {
      name: 'Arjun Mehta',
      role: 'TCS • SDE',
      tags: ['System Design', 'ML'],
      rating: '4.7',
      sessions: '18 sessions',
    },
  ];

  return (
    <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#0c0c0e]/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-sm">
            <RiShieldCheckLine className="w-5 h-5" />
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/50">
            Trust & Verification
          </span>
        </div>

        <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
          Campus-Verified Alumni
        </h3>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
          Direct guidance from senior alumni working across global engineering teams and research labs.
        </p>
      </div>

      {/* Split Interactive Display */}
      <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Stat Badges */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2.5">
          <div className="p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center gap-3 shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 shrink-0">
              <RiBuilding4Line className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-zinc-900 dark:text-white text-xs font-mono">Google / Meta</div>
              <div className="text-[10px] text-zinc-400 font-mono">FAANG Mentors</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center gap-3 shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
              <RiShieldCheckLine className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-zinc-900 dark:text-white text-xs font-mono">100% Verified</div>
              <div className="text-[10px] text-zinc-400 font-mono">Campus Identity</div>
            </div>
          </div>
        </div>

        {/* Right Stacked Alumni Cards */}
        <div className="space-y-2">
          {alumniProfiles.map((m) => (
            <div
              key={m.name}
              className="p-2.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all flex items-center justify-between shadow-xs"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 shrink-0">
                  <RiUser3Line className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white leading-tight">
                    {m.name}
                  </div>
                  <div className="text-[9px] text-zinc-400 font-mono leading-tight">{m.role}</div>
                  <div className="flex items-center gap-1 mt-1">
                    {m.tags.map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.2 rounded bg-zinc-100 dark:bg-zinc-800 text-[8px] font-mono text-zinc-600 dark:text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="flex items-center gap-0.5 text-[10px] font-mono font-bold text-amber-500">
                  <RiStarFill className="w-3 h-3" />
                  <span>{m.rating}</span>
                </div>
                <div className="text-[8px] text-zinc-400 font-mono">({m.sessions})</div>
                <RiArrowRightSLine className="w-3.5 h-3.5 text-zinc-400 ml-auto mt-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
