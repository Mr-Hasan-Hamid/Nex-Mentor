'use client';

import React from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Discover Alumni',
    desc: 'Filter alumni by Google, Microsoft, TCS, target role, and domain.',
  },
  {
    num: '02',
    title: 'Pick 30-Min Slot',
    desc: 'Select from published calendar availability without email delays.',
  },
  {
    num: '03',
    title: 'Résumé & 3 Focus Areas',
    desc: 'Attach PDF résumé and choose topics: DP, System Design, Communication.',
  },
  {
    num: '04',
    title: 'Feedback Rubric',
    desc: 'Attend live session and receive candidate evaluation scores on 3 dimensions.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-lg mx-auto mb-10">
          <p className="text-[11px] font-mono font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">
            // FRICTIONLESS FLOW
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            How NeXMentor Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((s) => (
            <div
              key={s.num}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5"
            >
              <div className="text-xs font-mono font-bold text-zinc-400 dark:text-zinc-600 mb-2">
                {s.num}
              </div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                {s.title}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
