'use client';

import React from 'react';
import { RiUserVoiceLine, RiCalendarCheckLine, RiTimeLine, RiStarFill } from '@remixicon/react';

interface Props {
  students: number;
  sessions: number;
  hours: number;
  rating: number;
}

export function ImpactMetrics({ students, sessions, hours, rating }: Props) {
  const cards = [
    { label: 'Students Mentored', val: students, sub: 'Across 4 branches', icon: RiUserVoiceLine },
    { label: 'Mock Interviews', val: sessions, sub: '100% attendance', icon: RiCalendarCheckLine },
    { label: 'Hours Mentored', val: `${hours}h`, sub: 'Direct prep time', icon: RiTimeLine },
    { label: 'Average Rating', val: `${rating} ★`, sub: 'Top 5% mentor', icon: RiStarFill },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {cards.map((c) => {
        const Icon = c.icon;
        return (
          <div
            key={c.label}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-center justify-between text-zinc-400 mb-1">
              <span className="text-[11px] font-medium">{c.label}</span>
              <Icon className="w-3.5 h-3.5 text-emerald-500" />
            </div>
            <div className="text-2xl font-black text-zinc-900 dark:text-zinc-100">{c.val}</div>
            <p className="text-[10px] text-zinc-400 mt-0.5">{c.sub}</p>
          </div>
        );
      })}
    </div>
  );
}
