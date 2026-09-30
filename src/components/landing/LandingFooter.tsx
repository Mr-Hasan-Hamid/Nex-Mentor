'use client';

import React from 'react';
import Link from 'next/link';
import { NeXMentorLogo } from '@/components/brand/NeXMentorLogo';

export function LandingFooter() {
  return (
    <footer className="py-8 bg-zinc-50 dark:bg-black text-xs text-zinc-500 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <NeXMentorLogo size="sm" />
          <span className="text-zinc-400">© 2026 Campus Mock Interviews & Mentorship</span>
        </div>

        <div className="flex gap-4">
          <Link href="/student/login" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            Student Portal
          </Link>
          <Link href="/alumni/login" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            Alumni Portal
          </Link>
          <Link href="/admin/dashboard" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
