'use client';

import React from 'react';
import { RiFileTextLine, RiAwardLine } from '@remixicon/react';

interface Props {
  pastBookings: any[];
}

export function PastFeedbackCard({ pastBookings }: Props) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
          <RiAwardLine className="w-4 h-4 text-amber-500" />
          Past Sessions & Feedback
        </h3>
        <span className="text-[11px] text-zinc-400">{pastBookings.length} completed</span>
      </div>

      {pastBookings.length > 0 ? (
        <div className="space-y-2">
          {pastBookings.slice(0, 3).map((b) => (
            <div
              key={b.id}
              className="p-3 border border-zinc-100 dark:border-zinc-800/80 rounded-lg flex items-center justify-between text-xs"
            >
              <div>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {b.mentor?.full_name || 'Alumni Mentor'}
                </span>
                <span className="ml-2 text-zinc-400 text-[10px]">
                  {new Date(b.starts_at).toLocaleDateString()}
                </span>
              </div>
              <span className="text-emerald-500 font-medium text-[11px]">Feedback Recorded</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-6 text-center">
          <RiFileTextLine className="w-6 h-6 text-zinc-300 dark:text-zinc-700 mx-auto mb-1.5" />
          <p className="text-xs text-zinc-500">No mock interview feedback recorded yet.</p>
        </div>
      )}
    </div>
  );
}
