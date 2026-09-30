'use client';

import React from 'react';
import {
  RiStarFill,
  RiArrowRightLine,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiTwitterXFill,
  RiCalendarCheckLine,
  RiShieldCheckFill,
} from '@remixicon/react';
import { AlumniCardData } from './FeaturedAlumni';

interface Props {
  mentor: AlumniCardData;
  onSelectMentor: (mentor: AlumniCardData) => void;
}

export function AlumniMentorCard({ mentor, onSelectMentor }: Props) {
  return (
    <div className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] shadow-sm hover:shadow-xl hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      {/* 1. Header Banner: Symmetrical & Spacious */}
      <div className="relative h-24 bg-gradient-to-r from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-[#131316] dark:to-zinc-900 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Usericon Avatar */}
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold text-base flex items-center justify-center shadow-lg border-2 border-white dark:border-zinc-900 shrink-0">
              {mentor.name.slice(0, 2).toUpperCase()}
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white dark:bg-zinc-900 rounded-full p-0.5 shadow-sm">
              <RiShieldCheckFill className="w-4 h-4 text-emerald-500" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-base text-zinc-950 dark:text-white leading-tight">
                {mentor.name}
              </h3>
            </div>
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
              <strong className="text-zinc-900 dark:text-zinc-200">{mentor.company}</strong> • {mentor.jobTitle}
            </p>
          </div>
        </div>

        {/* Rating Pill */}
        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full shrink-0 border border-amber-500/20">
          <RiStarFill className="w-3.5 h-3.5 fill-amber-500" />
          <span>{mentor.rating}</span>
        </div>
      </div>

      {/* 2. Description & Focus Areas */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>Domain Focus:</span>
            <span className="text-zinc-900 dark:text-zinc-200 font-semibold">{mentor.domain}</span>
          </div>

          {/* Symmetrical Expertise Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {mentor.expertise.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-800 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sessions & Availability Metadata */}
        <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
          <span className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300">
            <RiCalendarCheckLine className="w-4 h-4 text-zinc-900 dark:text-white" />
            30-Min Live Slot
          </span>
          <span className="text-zinc-500 font-medium">
            {mentor.totalSessions} sessions completed
          </span>
        </div>
      </div>

      {/* 3. Social Media & Action Bar */}
      <div className="px-6 pb-6 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-900/30">
        <div className="flex items-center justify-between mb-3.5 text-zinc-400">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Alumni Profile</span>
          <div className="flex items-center gap-3">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-zinc-950 dark:hover:text-white transition-colors" title="LinkedIn">
              <RiLinkedinBoxFill className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-zinc-950 dark:hover:text-white transition-colors" title="GitHub">
              <RiGithubFill className="w-4 h-4" />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-zinc-950 dark:hover:text-white transition-colors" title="Twitter / X">
              <RiTwitterXFill className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Book 30m Slot Button */}
        <button
          type="button"
          onClick={() => onSelectMentor(mentor)}
          className="w-full py-2.5 px-4 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-sm group-hover:scale-[1.01]"
        >
          <span>Book 30m Mock Interview</span>
          <RiArrowRightLine className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
