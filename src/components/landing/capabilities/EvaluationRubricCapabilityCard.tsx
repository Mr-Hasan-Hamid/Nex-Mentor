'use client';

import React from 'react';
import {
  RiBarChartBoxLine,
  RiCodeSSlashLine,
  RiCpuLine,
  RiChat1Line,
  RiCheckboxCircleFill,
  RiUser3Line,
} from '@remixicon/react';

export function EvaluationRubricCapabilityCard() {
  const rubrics = [
    {
      label: 'Data Structures & Algorithms',
      score: '9.4 / 10',
      pct: '94%',
      icon: RiCodeSSlashLine,
      color: 'bg-indigo-600',
    },
    {
      label: 'System Design & Scalability',
      score: '8.8 / 10',
      pct: '88%',
      icon: RiCpuLine,
      color: 'bg-emerald-600',
    },
    {
      label: 'Technical Communication & Clarity',
      score: '9.2 / 10',
      pct: '92%',
      icon: RiChat1Line,
      color: 'bg-cyan-600',
    },
  ];

  return (
    <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#0c0c0e]/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shadow-sm">
            <RiBarChartBoxLine className="w-5 h-5" />
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border border-cyan-200/60 dark:border-cyan-800/50">
            Performance Analytics
          </span>
        </div>

        <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
          Standardized Evaluation Rubric
        </h3>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
          No vague feedback. Receive scored metrics across Coding, Communication, and System Design with actionable notes.
        </p>
      </div>

      {/* Split Interactive Display */}
      <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Rubric Meters */}
        <div className="space-y-3">
          {rubrics.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.label} className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300">
                    <Icon className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{r.label}</span>
                  </div>
                  <span className="font-bold text-zinc-950 dark:text-white">{r.score}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                  <div className={`h-full rounded-full ${r.color}`} style={{ width: r.pct }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Feedback Note Box */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40 text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
            <RiCheckboxCircleFill className="w-3.5 h-3.5 text-emerald-500" />
            <span>Session Completed • Feedback submitted</span>
          </div>

          <div className="p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs space-y-2">
            <span className="text-[10px] font-bold text-zinc-400 font-mono uppercase tracking-wider block">
              Mentor Notes
            </span>
            <p className="text-[11px] text-zinc-700 dark:text-zinc-300 italic leading-relaxed">
              &quot;Great problem solving approach. Work on edge cases and improve explanation clarity during system design rounds.&quot;
            </p>
            <div className="flex items-center gap-2 pt-1 border-t border-zinc-100 dark:border-zinc-800">
              <div className="w-5 h-5 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300">
                <RiUser3Line className="w-3 h-3" />
              </div>
              <span className="text-[10px] font-semibold text-zinc-900 dark:text-white">
                Rahul Sharma <span className="text-zinc-400 font-normal">• Google SDE II</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
