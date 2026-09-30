'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { RiGraduationCapLine, RiBriefcaseLine } from '@remixicon/react';

interface Props {
  activeRole: 'student' | 'alumni';
  onRoleChange?: (role: 'student' | 'alumni') => void;
  navigateOnChange?: boolean;
  className?: string;
}

export function TubeRoleSwitch({
  activeRole,
  onRoleChange,
  navigateOnChange = true,
  className = '',
}: Props) {
  const router = useRouter();

  const handleSelect = (role: 'student' | 'alumni') => {
    if (role === activeRole) return;
    onRoleChange?.(role);
    if (navigateOnChange) {
      if (role === 'student') router.push('/student/login');
      else router.push('/alumni/login');
    }
  };

  return (
    <div
      className={`w-full p-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-xs font-medium select-none transition-all shadow-inner ${className}`}
      role="tablist"
      aria-label="Role Switcher"
    >
      {/* Student Option */}
      <button
        type="button"
        role="tab"
        aria-selected={activeRole === 'student'}
        onClick={() => handleSelect('student')}
        className={`w-1/2 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-full transition-all duration-200 text-center ${
          activeRole === 'student'
            ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-sm font-semibold'
            : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
        }`}
      >
        <RiGraduationCapLine className="w-3.5 h-3.5 shrink-0" />
        <span>Student</span>
      </button>

      {/* Alumni Mentor Option */}
      <button
        type="button"
        role="tab"
        aria-selected={activeRole === 'alumni'}
        onClick={() => handleSelect('alumni')}
        className={`w-1/2 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-full transition-all duration-200 text-center ${
          activeRole === 'alumni'
            ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-sm font-semibold'
            : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
        }`}
      >
        <RiBriefcaseLine className="w-3.5 h-3.5 shrink-0" />
        <span>Alumni Mentor</span>
      </button>
    </div>
  );
}
