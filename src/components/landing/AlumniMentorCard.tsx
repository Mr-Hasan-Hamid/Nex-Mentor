'use client';

import React from 'react';
import {
  RiStarFill,
  RiArrowRightLine,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiTwitterXFill,
  RiCalendarLine,
} from '@remixicon/react';
import { AlumniCardData } from './FeaturedAlumni';

interface Props {
  mentor: AlumniCardData;
  onSelectMentor: (mentor: AlumniCardData) => void;
}

export function AlumniMentorCard({ mentor, onSelectMentor }: Props) {
  return (
    <div className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#0c0c0e] shadow-sm hover:shadow-xl hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      {/* 1. Header Banner (Adapted from Uiverse imge, styled in Vercel Monochrome) */}
      <div className="relative h-20 bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-200 dark:from-zinc-900 dark:via-[#141418] dark:to-zinc-900 p-3.5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Usericon: Avatar Squircle */}
          <div className="w-12 h-12 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold text-sm flex items-center justify-center shadow-md border-2 border-white dark:border-zinc-900 shrink-0">
            {mentor.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <h3 className="font-bold text-xs sm:text-sm text-zinc-950 dark:text-white leading-tight line-clamp-1">
              {mentor.name}
            </h3>
            <p className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 mt-0.5">
              {mentor.company} • {mentor.jobTitle}
            </p>
          </div>
        </div>

        {/* Rating Pill */}
        <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full shrink-0">
          <RiStarFill className="w-3 h-3 fill-amber-500" />
          <span>{mentor.rating}</span>
        </div>
      </div>

      {/* 2. Description Section */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3.5">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
            <span>Domain:</span>
            <span className="text-zinc-800 dark:text-zinc-200 font-semibold">{mentor.domain}</span>
          </div>

          {/* Expertise Pills */}
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {mentor.expertise.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sessions Count & Availability */}
        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
          <span className="flex items-center gap-1">
            <RiCalendarLine className="w-3.5 h-3.5 text-zinc-400" />
            30m Slot Available
          </span>
          <span className="font-medium text-zinc-700 dark:text-zinc-300">
            {mentor.totalSessions} sessions
          </span>
        </div>
      </div>

      {/* 3. Social Media & Book Slot Action Bar */}
      <div className="px-4 pb-4 pt-2 border-t border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="flex items-center justify-between mb-3 text-zinc-400 dark:text-zinc-500">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Verified Alumni</span>
          <div className="flex items-center gap-2.5">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors" title="LinkedIn">
              <RiLinkedinBoxFill className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors" title="GitHub">
              <RiGithubFill className="w-4 h-4" />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors" title="Twitter / X">
              <RiTwitterXFill className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Book 30m Slot CTA */}
        <button
          type="button"
          onClick={() => onSelectMentor(mentor)}
          className="w-full py-2 px-3 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center justify-center gap-1.5 shadow-sm group-hover:scale-[1.01]"
        >
          <span>Book 30m Mock Interview</span>
          <RiArrowRightLine className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
