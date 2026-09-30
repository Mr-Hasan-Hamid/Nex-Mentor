'use client';

import React from 'react';
import { RiGraduationCapLine, RiBriefcaseLine } from '@remixicon/react';

interface Props {
  role: 'student' | 'alumni';
  onChange: (role: 'student' | 'alumni') => void;
}

export function SupabaseRoleSelector({ role, onChange }: Props) {
  return (
    <div className="grid grid-cols-2 p-1 mb-6 bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 rounded-lg">
      <button
        type="button"
        onClick={() => onChange('student')}
        className={`flex items-center justify-center gap-1.5 py-1.5 text-xs font-medium rounded-md transition-all ${
          role === 'student'
            ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm font-semibold'
            : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
        }`}
      >
        <RiGraduationCapLine className="w-3.5 h-3.5 text-emerald-500" />
        Student
      </button>

      <button
        type="button"
        onClick={() => onChange('alumni')}
        className={`flex items-center justify-center gap-1.5 py-1.5 text-xs font-medium rounded-md transition-all ${
          role === 'alumni'
            ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm font-semibold'
            : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
        }`}
      >
        <RiBriefcaseLine className="w-3.5 h-3.5 text-emerald-500" />
        Alumni Mentor
      </button>
    </div>
  );
}
