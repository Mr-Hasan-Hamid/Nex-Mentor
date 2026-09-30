'use client';

import React from 'react';
import { RiStarFill, RiArrowRightLine } from '@remixicon/react';

export interface AlumniCardData {
  id: string;
  name: string;
  company: string;
  jobTitle: string;
  domain: string;
  expertise: string[];
  rating: number;
  totalSessions: number;
}

const ALUMNI_LIST: AlumniCardData[] = [
  {
    id: 'feat-1',
    name: 'Rahul Sharma',
    company: 'Google',
    jobTitle: 'Software Engineer II',
    domain: 'Distributed Systems',
    expertise: ['System Design', 'DSA', 'Go'],
    rating: 4.95,
    totalSessions: 42,
  },
  {
    id: 'feat-2',
    name: 'Ananya Sharma',
    company: 'Microsoft',
    jobTitle: 'Software Engineer',
    domain: 'Full Stack Architecture',
    expertise: ['React', 'System Design', 'DSA'],
    rating: 4.92,
    totalSessions: 32,
  },
  {
    id: 'feat-3',
    name: 'Vikramaditya Iyer',
    company: 'TCS Research',
    jobTitle: 'Systems Architect',
    domain: 'Systems & Networks',
    expertise: ['Low-Level Design', 'C++', 'OS'],
    rating: 4.88,
    totalSessions: 28,
  },
  {
    id: 'feat-4',
    name: 'Pooja Patel',
    company: 'Amazon',
    jobTitle: 'SDE II (AWS)',
    domain: 'Cloud Infrastructure',
    expertise: ['Dynamic Programming', 'AWS', 'HLD'],
    rating: 4.96,
    totalSessions: 56,
  },
];

interface Props {
  onSelectMentor: (mentor: AlumniCardData) => void;
}

export function FeaturedAlumni({ onSelectMentor }: Props) {
  return (
    <section id="featured-alumni" className="py-20 border-b border-zinc-200 dark:border-[#1f1f23] bg-zinc-50/50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-lg mx-auto mb-12">
          <p className="text-[11px] font-mono font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">
            // ALUMNI NETWORK
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Featured Alumni Mentors
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            30-minute mock interviews with realistic grading rubrics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ALUMNI_LIST.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold flex items-center justify-center text-sm shadow-sm">
                    {mentor.name.charAt(0)}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono font-semibold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-md">
                    <RiStarFill className="w-3 h-3 fill-amber-500" />
                    <span>{mentor.rating}</span>
                  </div>
                </div>

                <h3 className="font-semibold text-sm text-zinc-950 dark:text-white">{mentor.name}</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
                  {mentor.company} • {mentor.jobTitle}
                </p>

                <div className="mt-4 flex flex-wrap gap-1">
                  {mentor.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-zinc-400">{mentor.totalSessions} sessions</span>
                <button
                  type="button"
                  onClick={() => onSelectMentor(mentor)}
                  className="inline-flex items-center gap-1 font-semibold text-zinc-950 dark:text-white hover:underline transition-colors"
                >
                  Book Slot
                  <RiArrowRightLine className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
