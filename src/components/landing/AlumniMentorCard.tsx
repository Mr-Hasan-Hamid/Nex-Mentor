'use client';

import React, { useState } from 'react';
import {
  RiStarFill,
  RiArrowRightLine,
  RiHeartLine,
  RiHeartFill,
  RiBriefcaseLine,
  RiShieldCheckFill,
} from '@remixicon/react';
import { CompanyBrandLogo } from '@/components/brand/CompanyBrandLogo';

export interface AlumniCardData {
  id: string;
  name: string;
  company: string;
  jobTitle: string;
  domain: string;
  expertise: string[];
  rating: number;
  totalSessions: number;
  experience: string;
  bio: string;
  avatarUrl?: string;
}

interface Props {
  mentor: AlumniCardData;
  onSelectMentor: (mentor: AlumniCardData) => void;
}

export function AlumniMentorCard({ mentor, onSelectMentor }: Props) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] shadow-sm hover:shadow-xl hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      {/* 1. Top Banner matching Reference Image 2 */}
      <div className="relative h-20 bg-gradient-to-r from-zinc-950 via-[#18181c] to-zinc-900 px-5 flex items-center justify-between border-b border-zinc-800/80">
        {/* Company Logo on Left */}
        <CompanyBrandLogo company={mentor.company} />

        {/* Right side: Available pill + Favorite Heart toggle */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-mono font-medium text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available</span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setFavorite(!favorite);
            }}
            aria-label="Save mentor"
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
          >
            {favorite ? (
              <RiHeartFill className="w-3.5 h-3.5 text-rose-500" />
            ) : (
              <RiHeartLine className="w-3.5 h-3.5 text-white/90" />
            )}
          </button>
        </div>
      </div>

      {/* 2. Overlapping Circular Avatar */}
      <div className="px-5 pt-0">
        <div className="relative -mt-7 mb-2 flex items-end justify-between">
          <div className="relative">
            <div className="w-14 h-14 rounded-full border-[3px] border-white dark:border-[#0c0c0e] bg-zinc-900 text-white font-bold text-sm flex items-center justify-center shadow-md overflow-hidden shrink-0">
              {mentor.avatarUrl ? (
                <img
                  src={mentor.avatarUrl}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>{mentor.name.slice(0, 2).toUpperCase()}</span>
              )}
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 bg-white dark:bg-[#0c0c0e] rounded-full p-0.5 shadow-sm">
              <RiShieldCheckFill className="w-4 h-4 text-emerald-500" />
            </div>
          </div>
        </div>

        {/* Name & Job Title */}
        <div className="space-y-0.5">
          <h3 className="font-bold text-base text-zinc-950 dark:text-white leading-tight">
            {mentor.name}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {mentor.jobTitle} • <strong className="text-zinc-800 dark:text-zinc-200 font-semibold">{mentor.company}</strong>
          </p>
        </div>

        {/* Rating & Experience Row */}
        <div className="flex items-center gap-3 mt-3 text-xs font-mono text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-1 font-semibold text-amber-500">
            <RiStarFill className="w-3.5 h-3.5 fill-amber-500" />
            <span>{mentor.rating.toFixed(1)}</span>
            <span className="text-zinc-400 font-normal">({mentor.totalSessions} sessions)</span>
          </div>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
            <RiBriefcaseLine className="w-3.5 h-3.5" />
            <span>{mentor.experience}</span>
          </div>
        </div>

        {/* Skill Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {mentor.expertise.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bio Snippet */}
        <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
          {mentor.bio}
        </p>
      </div>

      {/* 3. Bottom Full-Width Action Button */}
      <div className="p-5 pt-4">
        <button
          type="button"
          onClick={() => onSelectMentor(mentor)}
          className="w-full py-2.5 px-4 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center justify-center gap-1.5 shadow-sm group-hover:scale-[1.01]"
        >
          <span>Book 30m Mock Interview</span>
          <RiArrowRightLine className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
