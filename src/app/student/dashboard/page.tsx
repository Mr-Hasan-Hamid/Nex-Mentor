'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { StudentHeader } from '@/components/student/StudentHeader';
import { UpcomingSessionCard } from '@/components/student/UpcomingSessionCard';
import { PastFeedbackCard } from '@/components/student/PastFeedbackCard';
import { MentorDirectory, MentorItem } from '@/components/student/MentorDirectory';
import BookingFlow from '@/components/booking/BookingFlow';
import { RiCloseLine } from '@remixicon/react';

const SAMPLE_MENTORS: MentorItem[] = [
  {
    id: 'm1',
    name: 'Rahul Sharma',
    company: 'Google',
    job_title: 'Software Engineer II',
    domain: 'Distributed Systems',
    expertise: ['System Design', 'DSA', 'Go'],
    rating: 4.95,
    total_sessions: 42,
  },
  {
    id: 'm2',
    name: 'Ananya Sharma',
    company: 'Microsoft',
    job_title: 'Software Engineer',
    domain: 'Full Stack Architecture',
    expertise: ['React', 'System Design', 'DSA'],
    rating: 4.92,
    total_sessions: 32,
  },
  {
    id: 'm3',
    name: 'Vikramaditya Iyer',
    company: 'TCS Research',
    job_title: 'Systems Architect',
    domain: 'Systems & Networks',
    expertise: ['Low-Level Design', 'C++', 'OS'],
    rating: 4.88,
    total_sessions: 28,
  },
  {
    id: 'm4',
    name: 'Pooja Patel',
    company: 'Amazon',
    job_title: 'SDE II (AWS)',
    domain: 'Cloud Infrastructure',
    expertise: ['Dynamic Programming', 'AWS', 'HLD'],
    rating: 4.96,
    total_sessions: 56,
  },
];

export default function StudentDashboard() {
  const router = useRouter();
  const supabase = createClient();

  const [studentName, setStudentName] = useState('Student');
  const [upcomingBooking, setUpcomingBooking] = useState<any | null>(null);
  const [pastBookings, setPastBookings] = useState<any[]>([]);
  const [selectedMentor, setSelectedMentor] = useState<MentorItem | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user?.user_metadata?.full_name) {
        setStudentName(data.user.user_metadata.full_name);
      }
    });

    fetch('/api/bookings?role=student')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.bookings) {
          const now = new Date();
          const upcoming = data.bookings.find(
            (b: any) => new Date(b.starts_at) >= now && b.status === 'confirmed'
          );
          setUpcomingBooking(upcoming || null);
          const past = data.bookings.filter(
            (b: any) => new Date(b.starts_at) < now || b.status === 'completed'
          );
          setPastBookings(past);
        }
      })
      .catch(() => {});
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors pb-16">
      <StudentHeader studentName={studentName} onSignOut={handleSignOut} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <UpcomingSessionCard booking={upcomingBooking} />
          </div>
          <div className="lg:col-span-2">
            <PastFeedbackCard pastBookings={pastBookings} />
          </div>
        </div>

        <MentorDirectory mentors={SAMPLE_MENTORS} onSelectMentor={setSelectedMentor} />
      </main>

      {selectedMentor && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-xl my-6">
            <button
              onClick={() => setSelectedMentor(null)}
              className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 shadow-md flex items-center justify-center z-10"
            >
              <RiCloseLine className="w-4 h-4" />
            </button>
            <BookingFlow mentor={selectedMentor} onSuccess={() => setSelectedMentor(null)} />
          </div>
        </div>
      )}
    </div>
  );
}
