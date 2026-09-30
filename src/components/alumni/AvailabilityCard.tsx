'use client';

import React from 'react';
import { RiTimeLine, RiExternalLinkLine } from '@remixicon/react';

interface Props {
  calUsername?: string;
}

export function AvailabilityCard({ calUsername }: Props) {
  const schedule = [
    { day: 'Mon', time: '4:00 PM – 6:00 PM', active: true },
    { day: 'Tue', time: '4:00 PM – 6:00 PM', active: true },
    { day: 'Wed', time: 'Unavailable', active: false },
    { day: 'Thu', time: '5:00 PM – 7:00 PM', active: true },
    { day: 'Fri', time: '3:00 PM – 5:00 PM', active: true },
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
          <RiTimeLine className="w-3.5 h-3.5 text-emerald-500" />
          30-Min Availability
        </h3>
        <span className="text-[10px] text-emerald-500 font-mono">Cal.com Synced</span>
      </div>

      <div className="space-y-1.5">
        {schedule.map((item) => (
          <div
            key={item.day}
            className="flex items-center justify-between p-2 rounded bg-zinc-50 dark:bg-zinc-950 text-xs"
          >
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">{item.day}</span>
            <span className={`text-[11px] ${item.active ? 'text-zinc-500' : 'text-zinc-400 italic'}`}>
              {item.time}
            </span>
          </div>
        ))}
      </div>

      <a
        href={calUsername ? `https://cal.com/${calUsername}` : 'https://cal.com/availability'}
        target="_blank"
        rel="noreferrer"
        className="w-full py-1.5 px-3 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300 hover:border-zinc-400 flex items-center justify-center gap-1 transition-colors"
      >
        <span>Manage Availability on Cal.com</span>
        <RiExternalLinkLine className="w-3 h-3 text-zinc-400" />
      </a>
    </div>
  );
}
