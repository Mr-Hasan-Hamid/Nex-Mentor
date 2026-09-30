'use client';

import React, { useState } from 'react';
import {
  RiCalendarEventLine,
  RiCheckLine,
  RiVideoOnLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from '@remixicon/react';

export function SchedulingCapabilityCard() {
  const [selectedSlot, setSelectedSlot] = useState('10:30 AM');
  const [selectedDay, setSelectedDay] = useState(8);

  const slots = ['10:30 AM', '02:00 PM', '04:30 PM', '05:30 PM'];

  return (
    <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#0c0c0e]/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
            <RiCalendarEventLine className="w-5 h-5" />
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/50">
            Scheduling
          </span>
        </div>

        <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
          Cal.com Atomic Scheduling Engine
        </h3>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
          Zero back-and-forth emails. Mentors publish 30-minute availability; students book directly with instant Google Meet link generation.
        </p>
      </div>

      {/* Split Interactive Display */}
      <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Side: Select chips */}
        <div className="space-y-4">
          <div className="text-[11px] font-mono text-zinc-500 flex items-center justify-between">
            <span>Select 30-Min Availability:</span>
            <span className="text-zinc-400">Asia/Kolkata (IST)</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedSlot('10:30 AM')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-1.5 shadow-sm ${
                selectedSlot === '10:30 AM'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
              }`}
            >
              <RiCheckLine className="w-3.5 h-3.5" />
              10:30 AM (IST) • Selected
            </button>
            <button
              type="button"
              onClick={() => setSelectedSlot('02:00 PM')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all border border-zinc-200 dark:border-zinc-800 ${
                selectedSlot === '02:00 PM'
                  ? 'bg-indigo-600 text-white border-transparent'
                  : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400'
              }`}
            >
              02:00 PM
            </button>
            <button
              type="button"
              onClick={() => setSelectedSlot('04:30 PM')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all border border-zinc-200 dark:border-zinc-800 ${
                selectedSlot === '04:30 PM'
                  ? 'bg-indigo-600 text-white border-transparent'
                  : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400'
              }`}
            >
              04:30 PM
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 pt-1">
            <RiVideoOnLine className="w-4 h-4 text-emerald-500" />
            <span className="text-[11px] font-medium">Google Meet auto-synced to calendar invites</span>
          </div>
        </div>

        {/* Right Side: Mini Calendar Box */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 p-4 shadow-sm text-xs font-mono">
          <div className="flex items-center justify-between font-bold text-zinc-900 dark:text-white mb-3 text-[11px]">
            <span>September 2026</span>
            <div className="flex items-center gap-1 text-zinc-400">
              <RiArrowLeftSLine className="w-4 h-4 hover:text-zinc-600 cursor-pointer" />
              <RiArrowRightSLine className="w-4 h-4 hover:text-zinc-600 cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-zinc-400 mb-1.5">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-[11px]">
            <span className="text-zinc-300 dark:text-zinc-600">28</span>
            <span className="text-zinc-300 dark:text-zinc-600">29</span>
            <span className="text-zinc-300 dark:text-zinc-600">30</span>
            <span className="text-zinc-700 dark:text-zinc-300 py-0.5">1</span>
            <span className="text-zinc-700 dark:text-zinc-300 py-0.5">2</span>
            <span className="text-zinc-700 dark:text-zinc-300 py-0.5">3</span>
            <span className="text-zinc-700 dark:text-zinc-300 py-0.5">4</span>
            <span className="text-zinc-700 dark:text-zinc-300 py-0.5">5</span>
            <span className="text-zinc-700 dark:text-zinc-300 py-0.5">6</span>
            <span className="text-zinc-700 dark:text-zinc-300 py-0.5">7</span>
            <button
              type="button"
              onClick={() => setSelectedDay(8)}
              className="w-6 h-6 mx-auto rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center"
            >
              8
            </button>
            <span className="text-zinc-700 dark:text-zinc-300 py-0.5">9</span>
            <span className="text-zinc-700 dark:text-zinc-300 py-0.5">10</span>
            <span className="text-zinc-700 dark:text-zinc-300 py-0.5">11</span>
          </div>

          <div className="mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
            <span className="text-[10px] text-zinc-400 font-semibold block mb-1.5">Available Slots</span>
            <div className="grid grid-cols-2 gap-1.5">
              {slots.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSelectedSlot(s)}
                  className={`py-1 text-center rounded-lg text-[10px] font-medium transition-all ${
                    selectedSlot === s
                      ? 'bg-indigo-600 text-white font-bold'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
