'use client';

import React from 'react';
import {
  RiFileTextLine,
  RiCheckboxCircleFill,
  RiCheckLine,
  RiUser3Line,
} from '@remixicon/react';

export function ResumeCapabilityCard() {
  const focusAreas = ['System Design', 'Dynamic Programming', 'Behavioral'];

  return (
    <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#0c0c0e]/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
            <RiFileTextLine className="w-5 h-5" />
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/50">
            Student Tools
          </span>
        </div>

        <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
          Résumé & 3 Focus Areas
        </h3>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
          Upload your résumé PDF and specify target focus areas for the mentor to probe during the session.
        </p>
      </div>

      {/* Split Interactive Display */}
      <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Features List */}
        <div className="space-y-3 text-xs font-medium text-zinc-700 dark:text-zinc-300">
          <div className="flex items-center gap-2">
            <RiCheckboxCircleFill className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>PDF upload (secure)</span>
          </div>
          <div className="flex items-center gap-2">
            <RiCheckboxCircleFill className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>3 focus areas selection</span>
          </div>
          <div className="flex items-center gap-2">
            <RiCheckboxCircleFill className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Auto-shared with mentor</span>
          </div>
        </div>

        {/* Right Preview Composite */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* File & Focus Chips */}
          <div className="space-y-2.5">
            <div className="p-2.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <RiFileTextLine className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-zinc-900 dark:text-white font-mono">
                    resume_hasan.pdf
                  </div>
                  <div className="text-[9px] text-zinc-400 font-mono">PDF • 1.4 MB</div>
                </div>
              </div>
              <RiCheckboxCircleFill className="w-4 h-4 text-emerald-500" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] text-zinc-400 font-mono">Focus Areas (max 3)</span>
              <div className="flex flex-col gap-1">
                {focusAreas.map((tag) => (
                  <div
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800/40 text-indigo-700 dark:text-indigo-300 text-[10px] font-medium flex items-center gap-1.5"
                  >
                    <RiCheckLine className="w-3 h-3 text-indigo-500" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resume Preview Document Skeleton */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3 shadow-xs font-sans text-left space-y-2">
            <span className="text-[10px] font-bold text-zinc-400 font-mono uppercase tracking-wider block">
              Resume Preview
            </span>
            <div className="flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800/60 pb-2">
              <div className="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300">
                <RiUser3Line className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-900 dark:text-white leading-tight">Hasan Khan</p>
                <p className="text-[8px] text-zinc-500 dark:text-zinc-400 leading-tight">Software Engineering Student</p>
              </div>
            </div>
            <div className="space-y-1.5 pt-1">
              <div className="h-1.5 w-3/4 rounded bg-zinc-200 dark:bg-zinc-700" />
              <div className="h-1.5 w-full rounded bg-zinc-100 dark:bg-zinc-800" />
              <div className="h-1.5 w-5/6 rounded bg-zinc-100 dark:bg-zinc-800" />
              <div className="h-1.5 w-2/3 rounded bg-zinc-100 dark:bg-zinc-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
