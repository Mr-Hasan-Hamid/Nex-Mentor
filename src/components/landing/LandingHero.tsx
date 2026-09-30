'use client';

import React from 'react';
import Link from 'next/link';
import { RiSparklingLine, RiArrowRightLine } from '@remixicon/react';

export function LandingHero() {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden border-b border-zinc-200 dark:border-[#1f1f23]">
      {/* Vercel Geometric Grid Background with Radial Mask */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 dark:opacity-50" />

      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Vercel Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/90 dark:bg-zinc-900/90 text-[11px] font-mono text-zinc-700 dark:text-zinc-300 mb-8 backdrop-blur-sm shadow-sm">
          <RiSparklingLine className="w-3.5 h-3.5 text-zinc-900 dark:text-white" />
          <span>NeXMentor 1.0 • Campus Mentorship Engine</span>
        </div>

        {/* Vercel Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.08] mb-6">
          Your next interview starts with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-700 via-zinc-900 to-zinc-950 dark:from-white dark:via-zinc-200 dark:to-zinc-500">
            one conversation.
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed font-normal">
          Connect with alumni from Google, Microsoft, Amazon, and TCS. Book a 30-minute slot, attach your résumé, and practice with real engineering rubrics.
        </p>

        {/* Vercel Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <a
            href="#featured-alumni"
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center justify-center gap-1.5 shadow-sm"
          >
            <span>Find a Mentor</span>
            <RiArrowRightLine className="w-3.5 h-3.5" />
          </a>
          <Link
            href="/alumni/login"
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-zinc-200 dark:border-[#27272a] bg-white dark:bg-[#121214] text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-[#1c1c1f] text-xs font-semibold transition-all"
          >
            Join as Alumni Mentor
          </Link>
        </div>

        {/* Vercel Metric Grid */}
        <div className="grid grid-cols-3 max-w-lg mx-auto border-t border-zinc-200 dark:border-[#1f1f23] pt-8 divide-x divide-zinc-200 dark:divide-[#1f1f23] text-center font-mono">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">2,400+</div>
            <div className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-1 uppercase tracking-wider">Students</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">380+</div>
            <div className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-1 uppercase tracking-wider">Alumni</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">1,200+</div>
            <div className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-1 uppercase tracking-wider">Interviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
