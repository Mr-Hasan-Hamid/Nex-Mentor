'use client';

import React, { useState } from 'react';
import { RiSearchLine, RiStarFill, RiArrowRightLine } from '@remixicon/react';

export interface MentorItem {
  id: string;
  name: string;
  company: string;
  job_title: string;
  domain: string;
  expertise: string[];
  rating: number;
  total_sessions: number;
  cal_username?: string;
}

interface Props {
  mentors: MentorItem[];
  onSelectMentor: (mentor: MentorItem) => void;
}

export function MentorDirectory({ mentors, onSelectMentor }: Props) {
  const [search, setSearch] = useState('');
  const [company, setCompany] = useState('All');

  const filtered = mentors.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.company.toLowerCase().includes(search.toLowerCase()) ||
      m.expertise.some((e) => e.toLowerCase().includes(search.toLowerCase()));
    const matchesCompany = company === 'All' || m.company === company;
    return matchesSearch && matchesCompany;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Discover Alumni</h2>
          <p className="text-xs text-zinc-500">Pick a 30-min slot with an alumni in your target domain.</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <RiSearchLine className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-2.5" />
            <input
              type="text"
              placeholder="Search mentors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-7 pr-3 py-1.5 text-xs rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <select
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="px-2.5 py-1.5 text-xs rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 focus:outline-none"
          >
            <option value="All">All Companies</option>
            <option value="Google">Google</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Amazon">Amazon</option>
            <option value="TCS Research">TCS</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((m) => (
          <div
            key={m.id}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">{m.name}</h3>
                  <p className="text-xs text-zinc-500">{m.company} • {m.job_title}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-md">
                  <RiStarFill className="w-3 h-3 fill-amber-500" />
                  <span>{m.rating}</span>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-1">
                {m.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs">
              <span className="text-[11px] text-zinc-400">{m.total_sessions} mock interviews</span>
              <button
                type="button"
                onClick={() => onSelectMentor(m)}
                className="inline-flex items-center gap-1 font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
              >
                Book 30m Slot
                <RiArrowRightLine className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
