'use client';

import React from 'react';
import { RiCalendarLine, RiTimeLine, RiVideoOnLine } from '@remixicon/react';

interface Props {
  booking: any | null;
}

export function UpcomingSessionCard({ booking }: Props) {
  if (!booking) {
    return (
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 text-center py-8">
        <RiCalendarLine className="w-8 h-8 text-zinc-300 dark:text-zinc-700 mx-auto mb-2" />
        <h3 className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">No session scheduled</h3>
        <p className="text-[11px] text-zinc-400 mt-0.5">Book a 30-min slot with an alumni below.</p>
      </div>
    );
  }

  const mentorName = booking.mentor?.full_name || 'Alumni Mentor';
  const company = booking.mentor?.mentor_profiles?.[0]?.company || 'Tech Company';
  const role = booking.mentor?.mentor_profiles?.[0]?.job_title || 'Software Engineer';
  const dateStr = new Date(booking.starts_at).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
  const timeStr = new Date(booking.starts_at).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-500 font-semibold">
          Next Session
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-medium">
          Confirmed
        </span>
      </div>

      <div>
        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{mentorName}</h3>
        <p className="text-xs text-zinc-500">{company} • {role}</p>
      </div>

      <div className="p-3 bg-zinc-50 dark:bg-zinc-950/60 rounded-lg text-xs space-y-1 text-zinc-600 dark:text-zinc-300">
        <div className="flex items-center gap-2">
          <RiCalendarLine className="w-3.5 h-3.5 text-zinc-400" />
          <span>{dateStr}</span>
        </div>
        <div className="flex items-center gap-2">
          <RiTimeLine className="w-3.5 h-3.5 text-zinc-400" />
          <span>{timeStr} (30 mins)</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1">
        {booking.focus_areas?.map((fa: string) => (
          <span key={fa} className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
            {fa}
          </span>
        ))}
      </div>

      {booking.meeting_url && (
        <a
          href={booking.meeting_url}
          target="_blank"
          rel="noreferrer"
          className="w-full py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
        >
          <RiVideoOnLine className="w-4 h-4" />
          Join Live Meeting
        </a>
      )}
    </div>
  );
}
