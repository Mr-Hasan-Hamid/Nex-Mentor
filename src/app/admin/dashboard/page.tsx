'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { NeXMentorLogo } from '@/components/brand/NeXMentorLogo';
import {
  RiUserVoiceLine,
  RiBuildingLine,
  RiCalendarCheckLine,
  RiTimeLine,
  RiLogoutBoxRLine,
  RiAwardLine,
} from '@remixicon/react';

const STATS = [
  { label: 'Students', val: '2,400+', sub: 'Registered for placements', icon: RiUserVoiceLine },
  { label: 'Alumni Mentors', val: '380+', sub: 'Google, MS, Amazon, TCS', icon: RiBuildingLine },
  { label: 'Mock Interviews', val: '1,200+', sub: 'Completed sessions', icon: RiCalendarCheckLine },
  { label: 'Hours Mentored', val: '3,600+', sub: '1-on-1 guidance', icon: RiTimeLine },
];

const LEADERBOARD = [
  { rank: '🥇 1', name: 'Rahul Sharma', company: 'Google', role: 'SDE II', sessions: 42, rating: 4.95 },
  { rank: '🥈 2', name: 'Pooja Patel', company: 'Amazon', role: 'SDE II', sessions: 56, rating: 4.9 },
  { rank: '🥉 3', name: 'Ananya Sharma', company: 'Microsoft', role: 'SWE', sessions: 32, rating: 4.95 },
  { rank: '#4', name: 'Vikramaditya Iyer', company: 'TCS Research', role: 'Architect', sessions: 28, rating: 4.85 },
];

export default function AdminDashboard() {
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors pb-16">
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <NeXMentorLogo size="sm" />
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono font-medium">
              Admin RBAC
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={handleSignOut}
              className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-rose-500"
            >
              <RiLogoutBoxRLine className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 space-y-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Platform Administration</h1>
          <p className="text-xs text-zinc-500">Campus-wide placement metrics & alumni leaderboard.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {STATS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between text-zinc-400 mb-1">
                  <span className="text-[11px] font-medium">{s.label}</span>
                  <Icon className="w-3.5 h-3.5 text-purple-500" />
                </div>
                <div className="text-2xl font-black">{s.val}</div>
                <p className="text-[10px] text-zinc-400 mt-0.5">{s.sub}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <RiAwardLine className="w-4 h-4 text-amber-500" />
              Alumni Mentorship Leaderboard
            </h2>
            <span className="text-[11px] text-zinc-400">Ranked by mock interview sessions</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-zinc-600 dark:text-zinc-300">
              <thead className="border-b border-zinc-200 dark:border-zinc-800 text-[10px] uppercase text-zinc-400">
                <tr>
                  <th className="py-2.5 px-3">Rank</th>
                  <th className="py-2.5 px-3">Mentor</th>
                  <th className="py-2.5 px-3">Company</th>
                  <th className="py-2.5 px-3 text-center">Sessions</th>
                  <th className="py-2.5 px-3 text-right">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/80">
                {LEADERBOARD.map((item) => (
                  <tr key={item.name}>
                    <td className="py-2.5 px-3 font-bold text-zinc-900 dark:text-zinc-100">{item.rank}</td>
                    <td className="py-2.5 px-3 font-semibold text-zinc-900 dark:text-zinc-100">{item.name}</td>
                    <td className="py-2.5 px-3">{item.company} • {item.role}</td>
                    <td className="py-2.5 px-3 text-center font-bold text-emerald-500">{item.sessions}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-amber-500">★ {item.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
