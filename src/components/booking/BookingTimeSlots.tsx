'use client';

import React from 'react';
import { RiCheckLine } from '@remixicon/react';

interface Props {
  selectedSlot: string;
  onSlotChange: (slot: string) => void;
}

const MORNING_SLOTS = ['10:00 AM', '11:30 AM'];
const AFTERNOON_SLOTS = ['02:00 PM', '03:30 PM', '04:30 PM'];
const EVENING_SLOTS = ['06:00 PM', '07:30 PM', '09:00 PM'];

export function BookingTimeSlots({ selectedSlot, onSlotChange }: Props) {
  const renderRow = (label: string, slots: string[]) => (
    <div key={label}>
      <span className="text-[11px] font-mono text-zinc-500 mb-1.5 block">{label}</span>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {slots.map((slot) => {
          const isSelected = selectedSlot === slot;
          return (
            <button
              key={slot}
              type="button"
              onClick={() => onSlotChange(slot)}
              className={`py-2 px-3 rounded-lg border text-xs font-mono transition-all text-center flex items-center justify-center gap-1.5 ${
                isSelected
                  ? 'border-zinc-950 dark:border-white bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold shadow-sm'
                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121214] text-zinc-700 dark:text-zinc-300 hover:border-zinc-400'
              }`}
            >
              <span>{slot}</span>
              {isSelected && <RiCheckLine className="w-3.5 h-3.5" />}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="space-y-3">
      {renderRow('Morning', MORNING_SLOTS)}
      {renderRow('Afternoon', AFTERNOON_SLOTS)}
      {renderRow('Evening', EVENING_SLOTS)}
    </div>
  );
}
