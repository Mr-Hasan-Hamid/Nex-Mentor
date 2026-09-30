'use client';

import React from 'react';
import { RiGithubFill, RiGoogleFill, RiLockLine } from '@remixicon/react';

interface Props {
  onProviderClick?: (provider: string) => void;
}

export function SocialAuthButtons({ onProviderClick }: Props) {
  const providers = [
    { id: 'github', label: 'Continue with GitHub', icon: RiGithubFill },
    { id: 'google', label: 'Continue with Google', icon: RiGoogleFill },
    { id: 'sso', label: 'Continue with SSO', icon: RiLockLine },
  ];

  return (
    <div className="space-y-2.5 w-full">
      {providers.map((p) => {
        const Icon = p.icon;
        return (
          <button
            key={p.id}
            type="button"
            onClick={() => onProviderClick?.(p.id)}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121214] hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-200 text-xs font-medium transition-all shadow-sm"
          >
            <Icon className="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
            <span>{p.label}</span>
          </button>
        );
      })}

      <div className="relative py-3 flex items-center justify-center">
        <div className="w-full border-t border-zinc-200 dark:border-[#27272a]" />
        <span className="absolute px-3 bg-white dark:bg-[#0c0c0e] text-[11px] text-zinc-500 uppercase tracking-wider">
          or
        </span>
      </div>
    </div>
  );
}
