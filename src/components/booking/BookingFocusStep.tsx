'use client';

import React from 'react';
import { RiSparklingLine, RiCheckLine, RiLoader4Line, RiArrowLeftLine } from '@remixicon/react';

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
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
          <RiSparklingLine className="w-4 h-4 text-emerald-500" />
          3. Choose up to 3 Focus Areas
        </h3>
        <p className="text-xs text-zinc-500 mt-0.5">
          Selected: {selectedFocus.length} of 3
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {availableFocus.map((area) => {
          const isSelected = selectedFocus.includes(area);
          return (
            <button
              key={area}
              type="button"
              onClick={() => onToggleFocus(area)}
              className={`p-2.5 rounded-lg text-left text-xs border flex items-center justify-between transition-all ${
                isSelected
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold'
                  : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300'
              }`}
            >
              <span>{area}</span>
              {isSelected && <RiCheckLine className="w-3.5 h-3.5 text-emerald-500 shrink-0" />}
            </button>
          );
        })}
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-500 mb-1">
          Target Role or Companies (Optional)
        </label>
        <input
          type="text"
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
          placeholder="e.g. Practicing for Google SWE / Microsoft L3 on-site..."
          className="w-full px-3 py-1.5 text-xs rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-emerald-500"
        />
      </div>

      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
        >
          <RiArrowLeftLine className="w-3.5 h-3.5" />
          Back
        </button>

        <button
          type="button"
          disabled={loading || selectedFocus.length === 0}
          onClick={onSubmit}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-colors shadow-sm disabled:opacity-50"
        >
          {loading ? (
            <>
              <RiLoader4Line className="w-4 h-4 animate-spin text-zinc-950" />
              <span>Confirming...</span>
            </>
          ) : (
            <>
              <span>Confirm 1-Click Booking</span>
              <RiCheckLine className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
