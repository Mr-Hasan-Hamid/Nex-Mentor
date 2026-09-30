'use client';

import React from 'react';
import { RiCloseLine, RiCheckLine } from '@remixicon/react';
import { MentorInfo } from './BookingFlow';

interface Props {
  mentor: MentorInfo;
  currentStep: number;
  onClose: () => void;
}

const STEPS = [
  { id: 1, label: 'Date & Time' },
  { id: 2, label: 'Résumé' },
  { id: 3, label: 'Focus Areas' },
  { id: 4, label: 'Confirmed' },
];

export function BookingModalHeader({ mentor, currentStep, onClose }: Props) {
  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-[#121214] p-5 sm:p-6">
      {/* Top row: Mentor brief & Close button */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold text-sm flex items-center justify-center shadow-sm shrink-0">
            {mentor.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-extrabold text-zinc-950 dark:text-white leading-tight">
                {mentor.name}
              </h2>
              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-zinc-200/80 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                {mentor.company}
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              30-Min Live Technical Mock Interview • {mentor.domain || mentor.jobTitle}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="w-8 h-8 rounded-lg bg-zinc-200/60 dark:bg-zinc-800/80 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 flex items-center justify-center transition-colors"
        >
          <RiCloseLine className="w-4 h-4" />
        </button>
      </div>

      {/* Progress Stepper Bar */}
      <div className="grid grid-cols-4 gap-2 mt-5 pt-4 border-t border-zinc-200/80 dark:border-zinc-800">
        {STEPS.map((s) => {
          const isDone = currentStep > s.id;
          const isCurrent = currentStep === s.id;

          return (
            <div key={s.id} className="space-y-1.5">
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isDone
                    ? 'bg-zinc-950 dark:bg-white'
                    : isCurrent
                    ? 'bg-zinc-950 dark:bg-white'
                    : 'bg-zinc-200 dark:bg-zinc-800'
                }`}
              />
              <div className="flex items-center gap-1">
                {isDone ? (
                  <RiCheckLine className="w-3 h-3 text-zinc-900 dark:text-zinc-100" />
                ) : (
                  <span className={`text-[10px] font-mono ${isCurrent ? 'font-bold text-zinc-900 dark:text-white' : 'text-zinc-400'}`}>
                    0{s.id}
                  </span>
                )}
                <span className={`text-[11px] font-medium hidden sm:inline ${isCurrent ? 'text-zinc-950 dark:text-white font-semibold' : 'text-zinc-400'}`}>
                  {s.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
