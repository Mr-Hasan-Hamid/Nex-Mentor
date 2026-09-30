'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NeXMentorLogo } from '@/components/brand/NeXMentorLogo';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import {
  RiGithubFill,
  RiTwitterXFill,
  RiDiscordFill,
  RiYoutubeFill,
  RiLinkedinBoxFill,
  RiShieldCheckLine,
  RiArrowRightLine,
} from '@remixicon/react';

const FOOTER_SECTIONS = [
  {
    title: 'Product',
    links: ['Featured Alumni', 'Cal.com Engine', 'Feedback Rubrics', 'Résumé Review', 'Leaderboard', '30m Slots'],
  },
  {
    title: 'Solutions',
    links: ['Campus Students', 'Senior Mentors', 'Tier-1 Tech', 'Research Roles', 'Core Engineering', 'Placement Cell'],
  },
  {
    title: 'Resources',
    links: ['Placement Guides', 'System Design', 'DSA Patterns', 'Mock Questions', 'Cal.com Docs', 'Video Setup'],
  },
  {
    title: 'Developers',
    links: ['Supabase RLS', 'API Endpoints', 'Webhook Spec', 'Open Source', 'GitHub Repo', 'Architecture'],
  },
  {
    title: 'Community',
    links: ['Campus Discord', 'Alumni Network', 'Success Stories', 'Ambassadors', 'Hackathons', 'Leaderboard'],
  },
  {
    title: 'Company',
    links: ['About NeXMentor', 'Privacy Policy', 'Terms of Service', 'Security.txt', 'Acceptable Use', 'Contact Us'],
  },
];

export function SupabaseStyleFooter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-[#fafafa] dark:bg-[#060608] text-zinc-600 dark:text-zinc-400 transition-colors">
      {/* 1. Top CTA Section (Matching Image 3) */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 py-16 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white mb-6">
          Practice in 30 minutes,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 via-zinc-900 to-zinc-950 dark:from-white dark:via-zinc-200 dark:to-zinc-500">
            scale to placement offers
          </span>
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/auth/signup"
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-950 text-xs font-semibold transition-all shadow-sm flex items-center justify-center gap-1.5"
          >
            <span>Start with a Mentor</span>
            <RiArrowRightLine className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/alumni/login"
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs font-semibold transition-all shadow-sm"
          >
            Join as Alumni Mentor
          </Link>
        </div>
      </div>

      {/* 2. Security & Compliance Bar (Matching Image 3) */}
      <div className="border-b border-zinc-200 dark:border-zinc-800/80 py-4 px-4 bg-zinc-100/50 dark:bg-zinc-950/40">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono">
          <span className="text-zinc-900 dark:text-zinc-300 font-semibold flex items-center gap-1">
            <RiShieldCheckLine className="w-4 h-4 text-zinc-950 dark:text-white" />
            We protect your data:
          </span>
          <span className="text-zinc-500 flex items-center gap-1">✓ 100% Verified Campus Alumni</span>
          <span className="text-zinc-500 flex items-center gap-1">✓ Cal.com 30-Min Atomic Slots</span>
          <span className="text-zinc-500 flex items-center gap-1">✓ Supabase RLS & Auth Protected</span>
        </div>
      </div>

      {/* 3. Main Footer Body (Left Newsletter + 6 Columns on Right, Matching Image 3) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Brand + Socials + Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <NeXMentorLogo size="md" />
            </Link>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 text-zinc-500">
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-zinc-950 dark:hover:text-white transition-colors" title="Twitter / X">
                <RiTwitterXFill className="w-4 h-4" />
              </a>
              <a href="https://github.com/Mr-Hasan-Hamid/Nex-Mentor" target="_blank" rel="noreferrer" className="hover:text-zinc-950 dark:hover:text-white transition-colors" title="GitHub">
                <RiGithubFill className="w-4 h-4" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-zinc-950 dark:hover:text-white transition-colors" title="Discord">
                <RiDiscordFill className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-zinc-950 dark:hover:text-white transition-colors" title="LinkedIn">
                <RiLinkedinBoxFill className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-zinc-950 dark:hover:text-white transition-colors" title="YouTube">
                <RiYoutubeFill className="w-4 h-4" />
              </a>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="pt-2">
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2">
                Get product updates and placement news from NeXMentor.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your college email"
                  className="w-full px-3 py-2 text-xs rounded-md border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-[#121214] text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-950 dark:focus:border-zinc-300"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-md bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm"
                >
                  {subscribed ? 'Subscribed ✓' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>

          {/* Right Columns: 6 Dense Navigation Columns (Exact Image 3 Layout) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {FOOTER_SECTIONS.map((sec) => (
              <div key={sec.title} className="space-y-2.5">
                <h4 className="text-xs font-semibold text-zinc-950 dark:text-white uppercase tracking-wider font-mono">
                  {sec.title}
                </h4>
                <ul className="space-y-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-normal">
                  {sec.links.map((link) => (
                    <li key={link}>
                      <Link href="/" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Sub-Footer with Theme Toggle and Copyright */}
        <div className="pt-10 mt-10 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-zinc-400">
            © 2026 NeXMentor Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-zinc-400 text-[11px]">Toggle Theme:</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
