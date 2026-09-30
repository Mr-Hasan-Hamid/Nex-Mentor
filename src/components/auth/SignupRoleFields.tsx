'use client';

import React from 'react';

interface Props {
  role: 'student' | 'alumni';
  department: string;
  gradYear: string;
  company: string;
  jobTitle: string;
  calUsername: string;
  setDepartment: (v: string) => void;
  setGradYear: (v: string) => void;
  setCompany: (v: string) => void;
  setJobTitle: (v: string) => void;
  setCalUsername: (v: string) => void;
}

export function SignupRoleFields({
  role,
  department,
  gradYear,
  company,
  jobTitle,
  calUsername,
  setDepartment,
  setGradYear,
  setCompany,
  setJobTitle,
  setCalUsername,
}: Props) {
  if (role === 'student') {
    return (
      <div className="grid grid-cols-2 gap-2.5">
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1">Department</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="CSE / IT"
            className="w-full px-3 py-2 text-xs rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1">Grad Year</label>
          <input
            type="number"
            value={gradYear}
            onChange={(e) => setGradYear(e.target.value)}
            placeholder="2026"
            className="w-full px-3 py-2 text-xs rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2.5">
      <div className="grid grid-cols-2 gap-2.5">
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1">Company</label>
          <input
            type="text"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Google / TCS"
            className="w-full px-3 py-2 text-xs rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1">Job Title</label>
          <input
            type="text"
            required
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="SDE II"
            className="w-full px-3 py-2 text-xs rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-zinc-400 mb-1">
          Cal.com Username (Optional)
        </label>
        <input
          type="text"
          value={calUsername}
          onChange={(e) => setCalUsername(e.target.value)}
          placeholder="e.g. rahul-sharma"
          className="w-full px-3 py-2 text-xs rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-emerald-500"
        />
      </div>
    </div>
  );
}
