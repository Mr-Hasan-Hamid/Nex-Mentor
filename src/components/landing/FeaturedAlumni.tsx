'use client';

import React from 'react';
import Link from 'next/link';
import { RiArrowRightLine } from '@remixicon/react';
import { AlumniMentorCard, AlumniCardData } from './AlumniMentorCard';

export type { AlumniCardData };

const ALUMNI_LIST: AlumniCardData[] = [
  {
    id: 'feat-1',
    name: 'Rahul Sharma',
    company: 'Google',
    jobTitle: 'Software Engineer II',
    domain: 'Distributed Systems',
    expertise: ['System Design', 'DSA', 'Go'],
    rating: 4.9,
    totalSessions: 32,
    experience: '3+ yrs exp',
    bio: 'Currently working at Google, previously at Amazon. Happy to help with DSA, system design and mock interviews.',
  },
  {
    id: 'feat-2',
    name: 'Sneha Iyer',
    company: 'Microsoft',
    jobTitle: 'Software Engineer',
    domain: 'Cloud Platforms',
    expertise: ['Communication', 'Aptitude', 'DSA'],
    rating: 4.8,
    totalSessions: 28,
    experience: '2+ yrs exp',
    bio: 'Passionate about helping students crack technical interviews. Focus on problem solving & clear thinking.',
  },
  {
    id: 'feat-3',
    name: 'Arjun Mehta',
    company: 'TCS',
    jobTitle: 'System Engineer',
    domain: 'Enterprise Systems',
    expertise: ['Java', 'System Design', 'Cloud'],
    rating: 4.7,
    totalSessions: 24,
    experience: '2+ yrs exp',
    bio: 'Working on scalable systems and enterprise infrastructure. Happy to share practical interview insights.',
  },
  {
    id: 'feat-4',
    name: 'Priya Nair',
    company: 'Cognizant',
    jobTitle: 'SDE',
    domain: 'Web Architecture',
    expertise: ['Web Dev', 'DSA', 'System Design'],
    rating: 4.8,
    totalSessions: 20,
    experience: '2+ yrs exp',
    bio: 'Love mentoring and helping students sharpen their coding, data structures, and project portfolio.',
  },
  {
    id: 'feat-5',
    name: 'Karan Malhotra',
    company: 'Amazon',
    jobTitle: 'SDE II',
    domain: 'AWS Cloud Services',
    expertise: ['System Design', 'DSA', 'Backend'],
    rating: 4.9,
    totalSessions: 35,
    experience: '4+ yrs exp',
    bio: 'Building distributed systems at Amazon AWS. Happy to help with placement prep and technical rounds.',
  },
  {
    id: 'feat-6',
    name: 'Isha Verma',
    company: 'Meta',
    jobTitle: 'Software Engineer',
    domain: 'Core Infra',
    expertise: ['DSA', 'System Design', 'Backend'],
    rating: 4.8,
    totalSessions: 19,
    experience: '2+ yrs exp',
    bio: 'Building scalable systems at Meta. Excited to mentor fellow students on placement prep and coding interviews.',
  },
];

interface Props {
  onSelectMentor: (mentor: AlumniCardData) => void;
}

export function FeaturedAlumni({ onSelectMentor }: Props) {
  return (
    <section id="featured-alumni" className="py-24 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-black transition-colors relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-mono font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">
            // ALUMNI NETWORK
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Featured Alumni Mentors
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2">
            Learn from senior engineers at top tech companies. Book 1-on-1 30-minute mock interviews.
          </p>
        </div>

        {/* 3x2 Grid (3 columns, 2 rows) with lower-row blur and See More CTA */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALUMNI_LIST.map((mentor) => (
              <AlumniMentorCard
                key={mentor.id}
                mentor={mentor}
                onSelectMentor={onSelectMentor}
              />
            ))}
          </div>

          {/* Frosted Blur Overlay covering the bottom of the 2nd row with "See More" Button */}
          <div className="absolute -bottom-4 inset-x-0 h-52 bg-gradient-to-t from-white via-white/80 dark:from-black dark:via-black/90 to-transparent backdrop-blur-[2px] flex flex-col items-center justify-end pb-8 pointer-events-auto">
            <Link
              href="/find-mentor"
              className="px-7 py-3 rounded-full bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-950 text-xs font-semibold transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 group hover:scale-[1.02]"
            >
              <span>Explore All 380+ Alumni Mentors</span>
              <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
