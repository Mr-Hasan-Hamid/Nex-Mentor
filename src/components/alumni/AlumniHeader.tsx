'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { NeXMentorLogo } from '@/components/brand/NeXMentorLogo';
import { RiLogoutBoxRLine } from '@remixicon/react';

interface Props {
  mentorName: string;
  company: string;
  onSignOut: () => void;
}

export function AlumniHeader({ mentorName, company, onSignOut }: Props) {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <NeXMentorLogo size="sm" />
          <span className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono font-medium">
            Alumni
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-400 hidden sm:inline">
            {mentorName} • <strong className="text-zinc-800 dark:text-zinc-200">{company}</strong>
          </span>
          <ThemeToggle />
          <button
            onClick={onSignOut}
            className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-rose-500 transition-colors"
            title="Sign out"
          >
            <RiLogoutBoxRLine className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
