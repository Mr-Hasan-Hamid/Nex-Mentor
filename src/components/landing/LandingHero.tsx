'use client';

import React from 'react';
import Link from 'next/link';
import { InteractiveCounter } from './InteractiveCounter';
import { RiSparklingLine, RiArrowRightLine, RiShieldCheckLine } from '@remixicon/react';

export function LandingHero() {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
      {/* Side Blur Overlays: Desktop only (lg+) so mobile text is never obscured */}
      <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black via-white/70 dark:via-black/70 to-transparent backdrop-blur-[2px] pointer-events-none z-10" />
      <div className="hidden lg:block absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black via-white/70 dark:via-black/70 to-transparent backdrop-blur-[2px] pointer-events-none z-10" />

      {/* Vercel Ambient Gradient Glow & Subtle Grid Background with Horizontal Fade */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Soft radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-gradient-to-b from-zinc-300/30 dark:from-zinc-800/40 to-transparent blur-[90px] rounded-full" />
        {/* Subtle developer grid masked on 2 sides */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] opacity-40 dark:opacity-30" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.035em] text-zinc-950 dark:text-white leading-[1.06] mb-6 max-w-4xl mx-auto">
          Master your tech interview.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 via-zinc-900 to-zinc-950 dark:from-white dark:via-zinc-200 dark:to-zinc-500">
            Practice with campus alumni.
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed font-normal">
          Book 30-minute mock interviews with verified alumni working across Google, Microsoft, Amazon, and TCS. Attach your résumé, select 3 focus areas, and receive actionable rubric feedback.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-16">
          <a
            href="#featured-alumni"
            className="w-full sm:w-auto px-7 py-3 rounded-lg bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-950 text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Browse Alumni Mentors</span>
            <RiArrowRightLine className="w-4 h-4" />
          </a>
          <Link
            href="/alumni/login"
            className="w-full sm:w-auto px-7 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-xs font-semibold transition-all shadow-sm"
          >
            Join as Alumni Mentor
          </Link>
        </div>

        {/* Interactive Animated Metric Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4">
          <InteractiveCounter
            target={2400}
            suffix="+"
            label="Students Placed"
            sublabel="Active placement candidates"
          />
          <InteractiveCounter
            target={380}
            suffix="+"
            label="Alumni Mentors"
            sublabel="Google, MS, Amazon, TCS"
          />
          <InteractiveCounter
            target={1200}
            suffix="+"
            label="Mock Sessions"
            sublabel="Completed 1-on-1 calls"
          />
          <InteractiveCounter
            target={98}
            suffix="%"
            label="Success Rate"
            sublabel="Passed technical rounds"
          />
        </div>
      </div>
    </section>
  );
}
