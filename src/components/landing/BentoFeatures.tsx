'use client';

import React from 'react';
import {
  RiCalendarCheckLine,
  RiFilePdfLine,
  RiShieldCheckLine,
  RiBarChartBoxLine,
  RiCheckLine,
  RiVideoOnLine,
} from '@remixicon/react';

export function BentoFeatures() {
  return (
    <section className="py-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <p className="text-[11px] font-mono font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">
            // PLATFORM CAPABILITIES
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Built for serious placement preparation.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
            Eliminating scheduling friction so students and alumni mentors can focus 100% on interview performance.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: 30-Minute Scheduling (Span 2) */}
          <div className="md:col-span-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-[#09090b] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-zinc-400 dark:hover:border-zinc-700 transition-all">
            <div>
              <div className="w-9 h-9 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center mb-4">
                <RiCalendarCheckLine className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                Cal.com Atomic Scheduling Engine
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-md">
                Zero back-and-forth emails. Mentors publish 30-minute availability; students book directly with instant Google Meet link generation.
              </p>
            </div>

            {/* Interactive Schedule Visual */}
            <div className="mt-6 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1.5 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 text-xs font-mono font-medium shadow-sm flex items-center gap-1.5">
                  <RiCheckLine className="w-3.5 h-3.5" />
                  10:30 AM (IST) • Selected
                </span>
                <span className="px-3 py-1.5 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-mono">
                  02:00 PM
                </span>
                <span className="px-3 py-1.5 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-mono">
                  04:30 PM
                </span>
                <div className="ml-auto inline-flex items-center gap-1 text-[11px] font-mono text-zinc-500">
                  <RiVideoOnLine className="w-3.5 h-3.5" />
                  Google Meet auto-synced
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Resume PDF & Focus (Span 1) */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-[#09090b] p-6 sm:p-8 flex flex-col justify-between group hover:border-zinc-400 dark:hover:border-zinc-700 transition-all">
            <div>
              <div className="w-9 h-9 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center mb-4">
                <RiFilePdfLine className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                Résumé & 3 Focus Areas
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Upload your résumé PDF and specify target focus areas for the mentor to probe.
              </p>
            </div>

            <div className="mt-6 space-y-2">
              <div className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-mono text-zinc-800 dark:text-zinc-200 text-[11px]">
                  <RiFilePdfLine className="w-4 h-4 text-zinc-400" />
                  <span>resume_placement_v3.pdf</span>
                </div>
                <span className="text-[10px] text-zinc-400 font-mono">PDF • 380KB</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {['#SystemDesign', '#DynamicProgramming', '#Behavioral'].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Verified Alumni Network (Span 1) */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-[#09090b] p-6 sm:p-8 flex flex-col justify-between group hover:border-zinc-400 dark:hover:border-zinc-700 transition-all">
            <div>
              <div className="w-9 h-9 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center mb-4">
                <RiShieldCheckLine className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                Campus-Verified Alumni
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Direct guidance from senior alumni working across global engineering teams.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 text-center text-xs font-mono">
              <div className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <div className="font-bold text-zinc-900 dark:text-white">Google / Meta</div>
                <div className="text-[10px] text-zinc-400">FAANG Mentors</div>
              </div>
              <div className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <div className="font-bold text-zinc-900 dark:text-white">100% Verified</div>
                <div className="text-[10px] text-zinc-400">Campus Identity</div>
              </div>
            </div>
          </div>

          {/* Card 4: Evaluation Rubric (Span 2) */}
          <div className="md:col-span-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-[#09090b] p-6 sm:p-8 flex flex-col justify-between group hover:border-zinc-400 dark:hover:border-zinc-700 transition-all">
            <div>
              <div className="w-9 h-9 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center mb-4">
                <RiBarChartBoxLine className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                Standardized Evaluation Rubric
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-md">
                No vague feedback. Receive scored metrics across Coding, Communication, and System Design with actionable notes.
              </p>
            </div>

            {/* Rubric Score Bars */}
            <div className="mt-6 space-y-2.5">
              {[
                { label: 'Data Structures & Algorithms', score: '9.4 / 10', w: 'w-[94%]' },
                { label: 'System Design & Scalability', score: '8.8 / 10', w: 'w-[88%]' },
                { label: 'Technical Communication & Clarity', score: '9.2 / 10', w: 'w-[92%]' },
              ].map((r) => (
                <div key={r.label} className="space-y-1">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-zinc-700 dark:text-zinc-300">{r.label}</span>
                    <span className="font-semibold text-zinc-950 dark:text-white">{r.score}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                    <div className={`h-full rounded-full bg-zinc-900 dark:bg-white ${r.w}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
