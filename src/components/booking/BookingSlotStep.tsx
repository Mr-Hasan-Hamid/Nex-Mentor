'use client';

import React, { useState } from 'react';
import {
  RiCalendarCheckLine,
  RiTimeLine,
  RiArrowRightLine,
  RiAlertLine,
  RiInformationLine,
  RiCalendarLine,
} from '@remixicon/react';
import { InteractiveCalendar } from './InteractiveCalendar';
import { BookingTimeSlots } from './BookingTimeSlots';
import { CalEmbedView } from './CalEmbedView';

interface Props {
  calUsername?: string | null;
  selectedDate: string;
  selectedSlot: string;
  onDateChange: (date: string) => void;
  onSlotChange: (slot: string) => void;
  onContinue: () => void;
}

export function BookingSlotStep({
  calUsername,
  selectedDate,
  selectedSlot,
  onDateChange,
  onSlotChange,
  onContinue,
}: Props) {
  const [schedulerMode, setSchedulerMode] = useState<'native' | 'calcom'>('native');
  const [shake, setShake] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const isComplete = Boolean(selectedDate && selectedSlot);

  const handleNextClick = () => {
    if (!isComplete) {
      setShake(true);
      setErrorMsg('Please select a date on the calendar and choose a 30-minute slot.');
      setTimeout(() => setShake(false), 500);
      return;
    }
    setErrorMsg(null);
    onContinue();
  };

  const formattedDate = selectedDate
    ? new Date(selectedDate).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      })
    : null;

  return (
    <div className="space-y-5">
      {/* Mode Switcher: Native Campus Engine vs Cal.com Embed */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <h3 className="text-sm font-semibold text-zinc-950 dark:text-white flex items-center gap-1.5">
            <RiCalendarCheckLine className="w-4 h-4 text-zinc-900 dark:text-white" />
            <span>Select Interview Date & Time</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Synced directly to the alumni mentor&apos;s schedule.
          </p>
        </div>

        {/* Engine switcher toggle */}
        <div className="inline-flex p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setSchedulerMode('native')}
            className={`px-3 py-1 text-[11px] font-mono font-medium rounded-lg transition-all ${
              schedulerMode === 'native'
                ? 'bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white shadow-xs font-bold'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
            }`}
          >
            Campus Calendar
          </button>
          <button
            type="button"
            onClick={() => setSchedulerMode('calcom')}
            className={`px-3 py-1 text-[11px] font-mono font-medium rounded-lg transition-all ${
              schedulerMode === 'calcom'
                ? 'bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white shadow-xs font-bold'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
            }`}
          >
            Cal.com Embed
          </button>
        </div>
      </div>

      {schedulerMode === 'calcom' ? (
        /* Cal.com Official Embed */
        <div className="space-y-3">
          <CalEmbedView
            calLink={calUsername || 'peer/30min'}
            onBookingSuccessful={(data) => {
              if (data?.date) onDateChange(data.date);
              onContinue();
            }}
          />
        </div>
      ) : (
        /* Native Interactive Calendar Side-by-Side */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
          <div className="md:col-span-6 space-y-2">
            <label className="text-xs font-mono font-medium text-zinc-500 block">
              1. Choose Date
            </label>
            <InteractiveCalendar
              selectedDate={selectedDate}
              onSelectDate={(iso) => {
                onDateChange(iso);
                setErrorMsg(null);
              }}
            />
          </div>

          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-medium text-zinc-500 flex items-center gap-1">
                <RiTimeLine className="w-3.5 h-3.5" />
                <span>2. Available Slots</span>
              </label>
              {formattedDate && (
                <span className="text-xs font-mono font-semibold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                  {formattedDate}
                </span>
              )}
            </div>

            {selectedDate ? (
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-[#121214] p-4 shadow-sm">
                <BookingTimeSlots
                  selectedSlot={selectedSlot}
                  onSlotChange={(slot) => {
                    onSlotChange(slot);
                    setErrorMsg(null);
                  }}
                />
              </div>
            ) : (
              <div className="h-64 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center p-6 text-center text-zinc-400">
                <RiInformationLine className="w-7 h-7 mb-2 text-zinc-400" />
                <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  Select a date on the calendar
                </p>
                <p className="text-[11px] text-zinc-500 mt-1 max-w-[200px]">
                  Available 30-minute mock interview slots will appear here.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {errorMsg && (
        <div className="flex items-center gap-2 p-2.5 bg-rose-500/10 border border-rose-500/20 rounded-lg text-xs text-rose-500">
          <RiAlertLine className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

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
