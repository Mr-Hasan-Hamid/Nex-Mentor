'use client';

import React, { useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';

interface Props {
  selectedDate: string;
  onSelectDate: (isoDate: string) => void;
}

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

export function InteractiveCalendar({ selectedDate, onSelectDate }: Props) {
  const [currentDate, setCurrentDate] = useState(() => {
    return selectedDate ? new Date(selectedDate) : new Date();
  });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // First day of month (0 = Sun, 1 = Mon ... adjust to Mon-first)
  const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const monthLabel = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121214] p-4 shadow-sm select-none">
      {/* Calendar Header with Month/Year and Nav Chevrons */}
      <div className="flex items-center justify-between mb-3 px-1">
        <span className="text-xs font-bold text-zinc-950 dark:text-white font-mono uppercase tracking-wider">
          {monthLabel}
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={prevMonth}
            className="w-7 h-7 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 flex items-center justify-center transition-colors"
          >
            <RiArrowLeftSLine className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextMonth}
            className="w-7 h-7 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 flex items-center justify-center transition-colors"
          >
            <RiArrowRightSLine className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 text-center mb-1">
        {WEEKDAYS.map((wd) => (
          <span key={wd} className="text-[10px] font-mono font-medium text-zinc-400">
            {wd}
          </span>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {/* Empty cells before 1st day */}
        {Array.from({ length: firstDayIndex }).map((_, i) => (
          <div key={`empty-${i}`} className="h-8" />
        ))}

        {/* Days 1 to N */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const dayNum = i + 1;
          const dayDate = new Date(year, month, dayNum);
          dayDate.setHours(0, 0, 0, 0);

          const iso = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
          const isSelected = selectedDate === iso;
          const isPast = dayDate < today;
          const isToday = dayDate.getTime() === today.getTime();

          return (
            <button
              key={dayNum}
              type="button"
              disabled={isPast}
              onClick={() => onSelectDate(iso)}
              className={`h-8 rounded-lg text-xs font-mono font-medium transition-all relative flex items-center justify-center ${
                isSelected
                  ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold shadow-sm'
                  : isPast
                  ? 'text-zinc-300 dark:text-zinc-700 cursor-not-allowed opacity-40'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:text-zinc-950 dark:hover:text-white'
              } ${isToday && !isSelected ? 'border border-zinc-300 dark:border-zinc-700 font-bold' : ''}`}
            >
              <span>{dayNum}</span>
              {!isPast && !isSelected && (
                <span className="w-1 h-1 rounded-full bg-emerald-500 absolute bottom-1 left-1/2 -translate-x-1/2 opacity-70" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
