'use client';

import React from 'react';
import {
  RiCalendarCheckLine,
  RiFilePdfLine,
  RiShieldCheckLine,
  RiBarChartBoxLine,
  RiCheckLine,
  RiVideoOnLine,
  RiArrowRightUpLine,
} from '@remixicon/react';

export function BentoFeatures() {
  return (
    <section id="capabilities" className="py-24 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[11px] font-mono font-semibold text-zinc-500 uppercase tracking-widest mb-2">
            // PLATFORM CAPABILITIES
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Built for serious placement preparation.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
            Eliminating scheduling friction so students and alumni mentors can focus 100% on interview performance.
          </p>
        </div>

        {/* Symmetrical 2x2 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Cal.com Atomic Scheduling Engine */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-[#0c0c0e] p-7 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center mb-5 shadow-sm">
                <RiCalendarCheckLine className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                Cal.com Atomic Scheduling Engine
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                Zero back-and-forth emails. Mentors publish 30-minute availability; students book directly with instant Google Meet link generation.
              </p>
            </div>

            {/* Visual: Simulated Time Slot Picker */}
            <div className="mt-8 pt-5 border-t border-zinc-200 dark:border-zinc-800/80 space-y-3">
              <div className="text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                <span>Select 30-Min Availability:</span>
                <span className="text-zinc-500">Asia/Kolkata (IST)</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-mono font-semibold shadow-sm flex items-center gap-1.5">
                  <RiCheckLine className="w-3.5 h-3.5" />
                  10:30 AM (IST) • Selected
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-mono">
                  02:00 PM
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-mono">
                  04:30 PM
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 pt-1">
                <RiVideoOnLine className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300" />
                <span>Google Meet auto-synced to calendar invites</span>
              </div>
            </div>
          </div>

          {/* Card 2: Résumé & 3 Focus Areas */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-[#0c0c0e] p-7 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center mb-5 shadow-sm">
                <RiFilePdfLine className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                Résumé & 3 Focus Areas
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                Upload your résumé PDF and specify target focus areas for the mentor to probe during the session.
              </p>
            </div>

            {/* Visual: Résumé PDF Preview & Target Badges */}
            <div className="mt-8 pt-5 border-t border-zinc-200 dark:border-zinc-800/80 space-y-3">
              <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white">
                    <RiFilePdfLine className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-950 dark:text-white font-mono">
                      resume_placement_v3.pdf
                    </div>
                    <div className="text-[10px] text-zinc-400 font-mono">
                      PDF • 380 KB • Ready for mentor review
                    </div>
                  </div>
                </div>
                <RiArrowRightUpLine className="w-4 h-4 text-zinc-400" />
              </div>

              <div className="flex flex-wrap gap-2">
                {['#SystemDesign', '#DynamicProgramming', '#Behavioral'].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-zinc-200/80 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Campus-Verified Alumni */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-[#0c0c0e] p-7 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center mb-5 shadow-sm">
                <RiShieldCheckLine className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                Campus-Verified Alumni
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                Direct guidance from senior alumni working across global engineering teams and research labs.
              </p>
            </div>

            {/* Visual: Verified Tier Stats */}
            <div className="mt-8 pt-5 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <div className="font-bold text-zinc-950 dark:text-white text-sm">Google / Meta</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">FAANG Mentors</div>
              </div>
              <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <div className="font-bold text-zinc-950 dark:text-white text-sm">100% Verified</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">Campus Identity</div>
              </div>
            </div>
          </div>

          {/* Card 4: Standardized Evaluation Rubric */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-[#0c0c0e] p-7 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center mb-5 shadow-sm">
                <RiBarChartBoxLine className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                Standardized Evaluation Rubric
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                No vague feedback. Receive scored metrics across Coding, Communication, and System Design with actionable notes.
              </p>
            </div>

            {/* Visual: Rubric Progress Meters */}
            <div className="mt-8 pt-5 border-t border-zinc-200 dark:border-zinc-800/80 space-y-3">
              {[
                { label: 'Data Structures & Algorithms', score: '9.4 / 10', w: 'w-[94%]' },
                { label: 'System Design & Scalability', score: '8.8 / 10', w: 'w-[88%]' },
                { label: 'Technical Communication & Clarity', score: '9.2 / 10', w: 'w-[92%]' },
              ].map((r) => (
                <div key={r.label} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-700 dark:text-zinc-300">{r.label}</span>
                    <span className="font-bold text-zinc-950 dark:text-white">{r.score}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                    <div className={`h-full rounded-full bg-zinc-950 dark:bg-white ${r.w}`} />
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
