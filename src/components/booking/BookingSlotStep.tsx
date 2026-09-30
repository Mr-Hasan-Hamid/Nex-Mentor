'use client';

import React, { useState } from 'react';
import {
  RiCalendarLine,
  RiTimeLine,
  RiArrowRightLine,
  RiAlertLine,
} from '@remixicon/react';
import { BookingTimeSlots } from './BookingTimeSlots';

interface Props {
  selectedDate: string;
  selectedSlot: string;
  onDateChange: (date: string) => void;
  onSlotChange: (slot: string) => void;
  onContinue: () => void;
}

function getUpcomingDays() {
  const days = [];
  const today = new Date();
  for (let i = 1; i <= 6; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push({
      iso: d.toISOString().split('T')[0],
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
      dateNum: d.getDate(),
      month: d.toLocaleDateString('en-US', { month: 'short' }),
    });
  }
  return days;
}

export function BookingSlotStep({
  selectedDate,
  selectedSlot,
  onDateChange,
  onSlotChange,
  onContinue,
}: Props) {
  const days = getUpcomingDays();
  const [shake, setShake] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const isComplete = Boolean(selectedDate && selectedSlot);

  const handleNextClick = () => {
    if (!isComplete) {
      setShake(true);
      setErrorMsg('Please select both an interview date and a 30-minute time slot.');
      setTimeout(() => setShake(false), 500);
      return;
    }
    setErrorMsg(null);
    onContinue();
  };

  return (
    <div className="space-y-6">
      {/* 1. Date Selector: Interactive Day Cards */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-zinc-950 dark:text-white flex items-center gap-1.5">
            <RiCalendarLine className="w-4 h-4 text-zinc-900 dark:text-white" />
            <span>Select Interview Date</span>
          </label>
          <span className="text-[11px] font-mono text-zinc-500">Asia/Kolkata (IST)</span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {days.map((d) => {
            const isSelected = selectedDate === d.iso;
            return (
              <button
                key={d.iso}
                type="button"
                onClick={() => {
                  onDateChange(d.iso);
                  setErrorMsg(null);
                }}
                className={`py-3 px-2 rounded-xl border text-center transition-all flex flex-col items-center justify-center ${
                  isSelected
                    ? 'border-zinc-950 dark:border-white bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-md font-semibold'
                    : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121214] text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-700'
                }`}
              >
                <span className={`text-[10px] font-mono uppercase ${isSelected ? 'text-zinc-300 dark:text-zinc-700' : 'text-zinc-500'}`}>
                  {d.dayName}
                </span>
                <span className="text-base font-extrabold my-0.5 leading-tight">{d.dateNum}</span>
                <span className={`text-[10px] font-mono ${isSelected ? 'text-zinc-300 dark:text-zinc-700' : 'text-zinc-500'}`}>
                  {d.month}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Categorized Time Slots */}
      <div className="space-y-3">
        <label className="text-xs font-bold text-zinc-950 dark:text-white flex items-center gap-1.5">
          <RiTimeLine className="w-4 h-4 text-zinc-900 dark:text-white" />
          <span>Select 30-Minute Slot</span>
        </label>
        <BookingTimeSlots
          selectedSlot={selectedSlot}
          onSlotChange={(slot) => {
            onSlotChange(slot);
            setErrorMsg(null);
          }}
        />
      </div>

      {/* Error message alert */}
      {errorMsg && (
        <div className="flex items-center gap-2 p-2.5 bg-rose-500/10 border border-rose-500/20 rounded-lg text-xs text-rose-500">
          <RiAlertLine className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-end">
        <button
          type="button"
          onClick={handleNextClick}
          className={`px-5 py-2.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm ${
            !isComplete
              ? 'opacity-40 cursor-not-allowed hover:bg-zinc-950 dark:hover:bg-white'
              : 'hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[1.01]'
          } ${shake ? 'animate-shake' : ''}`}
        >
          <span>Continue to Résumé</span>
          <RiArrowRightLine className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
