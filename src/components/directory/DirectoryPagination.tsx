'use client';

import React from 'react';
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';

interface Props {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
}

export function DirectoryPagination({
  currentPage,
  totalPages,
  totalItems,
  startIndex,
  endIndex,
  onPageChange,
}: Props) {
  if (totalItems === 0) return null;

  return (
    <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Counter label */}
      <p className="text-xs font-mono text-zinc-500">
        Showing <span className="font-semibold text-zinc-900 dark:text-white">{startIndex + 1}</span>–
        <span className="font-semibold text-zinc-900 dark:text-white">{Math.min(endIndex, totalItems)}</span> of{' '}
        <span className="font-semibold text-zinc-900 dark:text-white">{totalItems}</span> verified mentors
      </p>

      {/* Interactive Controls */}
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121214] text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1"
        >
          <RiArrowLeftLine className="w-3.5 h-3.5" />
          <span>Previous</span>
        </button>

        {/* Page pills */}
        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
            const isActive = p === currentPage;
            return (
              <button
                key={p}
                type="button"
                onClick={() => onPageChange(p)}
                className={`w-8 h-8 rounded-lg text-xs font-mono font-semibold transition-all ${
                  isActive
                    ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-sm'
                    : 'border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121214] text-zinc-600 dark:text-zinc-400 hover:border-zinc-400'
                }`}
              >
                {p}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121214] text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1"
        >
          <span>Next</span>
          <RiArrowRightLine className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
