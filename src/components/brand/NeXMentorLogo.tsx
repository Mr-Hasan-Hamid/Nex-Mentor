'use client';

import React from 'react';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  className?: string;
}

export function NeXMentorLogo({
  size = 'md',
  showWordmark = true,
  className = '',
}: Props) {
  const iconDimensions = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-9 h-9',
  };

  const textStyles = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Sleek Vercel-Grade Geometric Monogram */}
      <div className={`${iconDimensions[size]} relative rounded-lg bg-zinc-950 dark:bg-white flex items-center justify-center shadow-sm overflow-hidden p-1 transition-all group-hover:scale-105`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white dark:text-zinc-950"
        >
          {/* Geometric N-X Vector Glyph */}
          <path
            d="M4 19V5L13 19V5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 5L12 17"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M15 12L20 19"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {showWordmark && (
        <div className="flex items-baseline tracking-tight">
          <span className={`font-black text-zinc-950 dark:text-white ${textStyles[size]}`}>
            Nex
          </span>
          <span className={`font-medium text-zinc-500 dark:text-zinc-400 ${textStyles[size]}`}>
            Mentor
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-white ml-0.5" />
        </div>
      )}
    </div>
  );
}
