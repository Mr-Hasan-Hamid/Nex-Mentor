'use client';

import React from 'react';
import { RiVideoOnLine, RiFilePdfLine, RiCheckLine, RiCalendarLine } from '@remixicon/react';

interface Props {
  bookings: any[];
  onOpenRubric: (booking: any) => void;
}

export function UpcomingInterviews({ bookings, onOpenRubric }: Props) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
          <RiCalendarLine className="w-3.5 h-3.5 text-emerald-500" />
          Upcoming Student Bookings
        </h3>
        <span className="text-[11px] text-zinc-400">{bookings.length} scheduled</span>
      </div>

      {bookings.length > 0 ? (
        <div className="space-y-2.5">
          {bookings.map((b) => (
            <div
              key={b.id}
              className="p-3.5 border border-zinc-200 dark:border-zinc-800 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-zinc-50/50 dark:bg-zinc-950/40"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-xs text-zinc-900 dark:text-zinc-100">
                    {b.student?.full_name || 'Student Candidate'}
                  </h4>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                    30 Mins
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  {new Date(b.starts_at).toLocaleDateString()} at{' '}
                  {new Date(b.starts_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {b.focus_areas?.map((fa: string) => (
                    <span key={fa} className="text-[9px] px-1.5 py-0.2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                      {fa}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {b.resume_url && (
                  <a
                    href={b.resume_url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-[11px] font-medium text-zinc-600 dark:text-zinc-300 hover:border-zinc-400 flex items-center gap-1"
                  >
                    <RiFilePdfLine className="w-3.5 h-3.5 text-rose-500" />
                    Résumé
                  </a>
                )}

                {b.meeting_url && (
                  <a
                    href={b.meeting_url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-[11px] font-semibold flex items-center gap-1 transition-colors"
                  >
                    <RiVideoOnLine className="w-3.5 h-3.5" />
                    Join
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => onOpenRubric(b)}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[11px] font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                >
                  Rubric
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-6 text-center text-xs text-zinc-400">
          No student mock interviews scheduled currently.
        </div>
      )}
    </div>
  );
}
