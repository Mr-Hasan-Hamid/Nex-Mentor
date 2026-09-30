'use client';

import React from 'react';
import Link from 'next/link';
import { NeXMentorLogo } from '@/components/brand/NeXMentorLogo';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { RiGithubFill, RiTwitterXFill, RiGlobalLine } from '@remixicon/react';

const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Featured Alumni', href: '#featured-alumni' },
      { label: 'Platform Capabilities', href: '#how-it-works' },
      { label: 'Cal.com Integration', href: '#how-it-works' },
      { label: 'Evaluation Rubric', href: '#how-it-works' },
    ],
  },
  {
    title: 'Portals',
    links: [
      { label: 'Student Sign In', href: '/student/login' },
      { label: 'Alumni Mentor Sign In', href: '/alumni/login' },
      { label: 'Create New Account', href: '/auth/signup' },
      { label: 'Admin RBAC Dashboard', href: '/admin/dashboard' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/' },
      { label: 'Campus Placement Guide', href: '/' },
      { label: 'Interview Rubric Spec', href: '/' },
      { label: 'System Architecture', href: '/' },
    ],
  },
  {
    title: 'Legal & Trust',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Row Level Security', href: '/' },
      { label: 'Contact Campus Team', href: 'mailto:contact@nexmentor.dev' },
    ],
  },
];

export function VercelFooter() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black text-zinc-600 dark:text-zinc-400 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand & Status Column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              <NeXMentorLogo size="sm" />
            </Link>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Campus mentorship and 30-minute mock interview marketplace.
            </p>

            {/* Live System Status */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-zinc-700 dark:text-zinc-300">All systems normal</span>
            </div>
          </div>

          {/* Navigation Links Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="text-xs font-semibold text-zinc-950 dark:text-white uppercase tracking-wider font-mono">
                {col.title}
              </h4>
              <ul className="space-y-2 text-xs">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4">
            <p className="text-zinc-500 font-mono text-[11px]">
              © 2026 NeXMentor Inc. Built for campus placements.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <RiGithubFill className="w-4 h-4" />
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors"
              aria-label="Twitter / X"
            >
              <RiTwitterXFill className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
