'use client';

import React from 'react';
import { RiCalendarLine, RiArrowRightLine } from '@remixicon/react';

interface Props {
  selectedDate: string;
  selectedSlot: string;
  onDateChange: (date: string) => void;
  onSlotChange: (slot: string) => void;
  onContinue: () => void;
}

const AVAILABLE_SLOTS = ['16:00', '16:30', '17:00', '17:30', '18:00', '19:30'];

export function BookingSlotStep({
  selectedDate,
  selectedSlot,
  onDateChange,
  onSlotChange,
  onContinue,
}: Props) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
          <RiCalendarLine className="w-4 h-4 text-emerald-500" />
          1. Choose an available 30-minute slot
        </h3>
        <p className="text-xs text-zinc-500 mt-0.5">
          Times shown in your local timezone.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-zinc-500 mb-1.5">
            Interview Date
          </label>
          <input
            type="date"
            value={selectedDate}
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => onDateChange(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-zinc-500 mb-1.5">
            Start Time (30 mins)
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {AVAILABLE_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => onSlotChange(slot)}
                className={`py-1.5 px-2 text-xs font-medium rounded-lg border transition-all ${
                  selectedSlot === slot
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-transparent font-semibold shadow-sm'
                    : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-end">
        <button
          type="button"
          onClick={onContinue}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
        >
          <span>Continue to Résumé</span>
          <RiArrowRightLine className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
