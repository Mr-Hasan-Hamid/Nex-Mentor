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
  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* NXM Geometric Monogram SVG */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSizes[size]} shrink-0`}
      >
        <rect
          width="32"
          height="32"
          rx="6"
          className="fill-black dark:fill-white transition-colors"
        />
        {/* N */}
        <path
          d="M5 23V9L11 23V9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white dark:stroke-black"
        />
        {/* X */}
        <path
          d="M13 9L19 23M19 9L13 23"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white dark:stroke-black"
        />
        {/* M */}
        <path
          d="M21 23V9L24 16L27 9V23"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white dark:stroke-black"
        />
      </svg>

      {showWordmark && (
        <span
          className={`font-extrabold tracking-tight text-zinc-950 dark:text-white ${textSizes[size]}`}
        >
          NeX<span className="font-medium text-zinc-600 dark:text-zinc-400">Mentor</span>
        </span>
      )}
    </div>
  );
}
