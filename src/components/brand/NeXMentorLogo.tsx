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
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Symmetrical NXM Monogram */}
      <div className={`${iconDimensions[size]} rounded-lg bg-zinc-950 dark:bg-white flex items-center justify-center shadow-sm p-1 shrink-0`}>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white dark:text-zinc-950"
        >
          {/* N */}
          <path
            d="M5 23V9L11 23V9"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* X */}
          <path
            d="M13 9L19 23M19 9L13 23"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* M */}
          <path
            d="M21 23V9L24 16L27 9V23"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {showWordmark && (
        <span className={`font-extrabold tracking-tight text-zinc-950 dark:text-white ${textStyles[size]}`}>
          NeX<span className="font-medium text-zinc-500 dark:text-zinc-400">Mentor</span>
        </span>
      )}
    </div>
  );
}
