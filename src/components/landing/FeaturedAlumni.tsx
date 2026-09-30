'use client';

import React from 'react';
import { AlumniMentorCard } from './AlumniMentorCard';

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
    <section id="featured-alumni" className="py-20 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-lg mx-auto mb-12">
          <p className="text-[11px] font-mono font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">
            // ALUMNI NETWORK
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Featured Alumni Mentors
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5">
            Verified alumni conducting 30-minute mock interviews with realistic grading rubrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ALUMNI_LIST.map((mentor) => (
            <AlumniMentorCard
              key={mentor.id}
              mentor={mentor}
              onSelectMentor={onSelectMentor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
