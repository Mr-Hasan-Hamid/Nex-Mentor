'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { RiCheckLine, RiVideoOnLine } from '@remixicon/react';

interface Props {
  mentorName: string;
  meetingUrl?: string;
}

export function BookingConfirmedStep({ mentorName, meetingUrl }: Props) {
  const router = useRouter();

  return (
    <div className="py-6 text-center space-y-4">
      <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
        <RiCheckLine className="w-6 h-6" />
      </div>

      <div>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
          Booking Confirmed! 🎉
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-sm mx-auto">
          30-minute mock interview scheduled with <strong>{mentorName}</strong>. Notifications have been dispatched.
        </p>
      </div>

      {meetingUrl && (
        <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg max-w-md mx-auto flex items-center justify-center gap-2 text-xs">
          <RiVideoOnLine className="w-4 h-4 text-emerald-500" />
          <a
            href={meetingUrl}
            target="_blank"
            rel="noreferrer"
            className="text-emerald-500 hover:underline font-mono truncate max-w-xs"
          >
            {meetingUrl}
          </a>
        </div>
      )}

      <div className="pt-2 flex justify-center gap-2">
        <button
          type="button"
          onClick={() => router.push('/student/dashboard')}
          className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
