'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { NeXMentorLogo } from '@/components/brand/NeXMentorLogo';
import { RiBookOpenLine } from '@remixicon/react';

interface Props {
  children: React.ReactNode;
  roleBadge?: string;
  quoteText?: string;
  quoteAuthor?: string;
}

export function SupabaseSplitLayout({
  children,
  roleBadge = 'Student',
  quoteText = 'CampusMentor is really good. ⚡',
  quoteAuthor = '@shadcn',
}: Props) {
  return (
    <div className="min-h-screen w-full flex bg-white dark:bg-[#0c0c0e] text-zinc-900 dark:text-zinc-100 transition-colors">
      {/* LEFT COLUMN: AUTH FORM */}
      <div className="w-full lg:w-[48%] min-h-screen flex flex-col justify-between p-6 sm:p-10 border-r border-zinc-200 dark:border-[#1f1f23]">
        {/* Top Header: Brand Logo + Role badge */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <NeXMentorLogo size="sm" />
            <span className="text-[10px] px-2.5 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-mono font-medium">
              {roleBadge}
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-[340px] sm:max-w-[360px] mx-auto py-8">
          {children}
        </div>

        {/* Bottom Legal Disclaimer matching screenshot */}
        <div className="text-[11px] text-zinc-400 dark:text-zinc-500 leading-relaxed text-center sm:text-left">
          By continuing, you agree to NeXMentor's{' '}
          <Link href="/terms" className="underline hover:text-zinc-700 dark:hover:text-zinc-300">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="underline hover:text-zinc-700 dark:hover:text-zinc-300">
            Privacy Policy
          </Link>
          , and to receive periodic emails with updates.
        </div>
      </div>

      {/* RIGHT COLUMN: DARK QUOTE HERO (EXACT SCREENSHOT MATCH) */}
      <div className="hidden lg:flex lg:w-[52%] min-h-screen bg-zinc-950 dark:bg-[#080809] flex-col justify-between p-10 relative overflow-hidden">
        {/* Subtle Vercel grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

        {/* Top-Right Documentation Button */}
        <div className="flex justify-end z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-white text-xs font-medium transition-colors"
          >
            <RiBookOpenLine className="w-3.5 h-3.5" />
            <span>Documentation</span>
          </Link>
        </div>

        {/* Centered Testimonial Quote */}
        <div className="max-w-md mx-auto my-auto z-10">
          <div className="text-zinc-600 dark:text-zinc-700 font-serif text-6xl leading-none select-none mb-2">
            “
          </div>
          <blockquote className="text-2xl font-bold tracking-tight text-white leading-snug">
            {quoteText}
          </blockquote>

          <div className="mt-6 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 p-0.5 shadow-md">
              <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-xs font-bold text-white">
                {quoteAuthor.replace('@', '').slice(0, 2).toUpperCase()}
              </div>
            </div>
            <span className="text-xs font-medium text-zinc-400 font-mono">
              {quoteAuthor}
            </span>
          </div>
        </div>

        <div className="z-10" />
      </div>
    </div>
  );
}
