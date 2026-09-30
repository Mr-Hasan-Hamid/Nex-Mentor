'use client';

import React, { useState } from 'react';
import {
  RiSparklingLine,
  RiCheckLine,
  RiLoader4Line,
  RiArrowLeftLine,
  RiAlertLine,
} from '@remixicon/react';

interface Props {
  availableFocus: string[];
  selectedFocus: string[];
  notes: string;
  loading: boolean;
  onToggleFocus: (area: string) => void;
  onNotesChange: (notes: string) => void;
  onBack: () => void;
  onSubmit: () => void;
}

export function BookingFocusStep({
  availableFocus,
  selectedFocus,
  notes,
  loading,
  onToggleFocus,
  onNotesChange,
  onBack,
  onSubmit,
}: Props) {
  const [shake, setShake] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = () => {
    if (selectedFocus.length === 0) {
      setShake(true);
      setErrorMsg('Please select at least 1 focus area for the mock interview.');
      setTimeout(() => setShake(false), 500);
      return;
    }
    setErrorMsg(null);
    onSubmit();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-zinc-950 dark:text-white flex items-center gap-1.5">
            <RiSparklingLine className="w-4 h-4 text-zinc-900 dark:text-white" />
            <span>Select Focus Areas (Choose 1 to 3)</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            Specify technical topics you want your alumni mentor to probe.
          </p>
        </div>
        <span className="text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800">
          {selectedFocus.length} of 3 selected
        </span>
      </div>

      {/* Focus Area Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {availableFocus.map((area) => {
          const isSelected = selectedFocus.includes(area);
          return (
            <button
              key={area}
              type="button"
              onClick={() => {
                onToggleFocus(area);
                setErrorMsg(null);
              }}
              className={`p-3 rounded-xl text-left text-xs border flex items-center justify-between transition-all ${
                isSelected
                  ? 'border-zinc-950 dark:border-white bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold shadow-sm'
                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121214] text-zinc-700 dark:text-zinc-300 hover:border-zinc-400'
              }`}
            >
              <span>{area}</span>
              {isSelected && <RiCheckLine className="w-4 h-4 shrink-0" />}
            </button>
          );
        })}
      </div>

      {/* Optional Target Role / Company notes */}
      <div className="space-y-1.5">
        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
          Target Role or Upcoming Interviews (Optional)
        </label>
        <input
          type="text"
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
          placeholder="e.g. Practicing for Google SWE / Microsoft L3 on-site next week..."
          className="w-full px-3.5 py-2 text-xs rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121214] text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-950 dark:focus:border-zinc-200 transition-colors"
        />
      </div>

      {errorMsg && (
        <div className="flex items-center gap-2 p-2.5 bg-rose-500/10 border border-rose-500/20 rounded-lg text-xs text-rose-500">
          <RiAlertLine className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors"
        >
          <RiArrowLeftLine className="w-3.5 h-3.5" />
          <span>Back</span>
        </button>

        <button
          type="button"
          disabled={loading}
          onClick={handleSubmit}
          className={`px-5 py-2.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm ${
            selectedFocus.length === 0
              ? 'opacity-40 cursor-not-allowed hover:bg-zinc-950 dark:hover:bg-white'
              : 'hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[1.01]'
          } ${shake ? 'animate-shake' : ''}`}
        >
          {loading ? (
            <span className="flex items-center gap-1.5">
              <RiLoader4Line className="w-4 h-4 animate-spin" />
              <span>Confirming Booking...</span>
            </span>
          ) : (
            <span className="flex items-center gap-1.5">
              <span>Confirm 30m Mock Interview</span>
              <RiCheckLine className="w-3.5 h-3.5" />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
