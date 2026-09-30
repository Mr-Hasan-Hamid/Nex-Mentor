'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { AlumniHeader } from '@/components/alumni/AlumniHeader';
import { ImpactMetrics } from '@/components/alumni/ImpactMetrics';
import { UpcomingInterviews } from '@/components/alumni/UpcomingInterviews';
import { AvailabilityCard } from '@/components/alumni/AvailabilityCard';
import { FeedbackRubricModal } from '@/components/alumni/FeedbackRubricModal';

export default function AlumniDashboard() {
  const router = useRouter();
  const supabase = createClient();

  const [mentorName, setMentorName] = useState('Rahul');
  const [company, setCompany] = useState('Google');
  const [calUsername, setCalUsername] = useState('rahul-sharma');
  const [bookings, setBookings] = useState<any[]>([]);
  const [activeBooking, setActiveBooking] = useState<any | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        if (data.user.user_metadata?.full_name) setMentorName(data.user.user_metadata.full_name);
        if (data.user.user_metadata?.company) setCompany(data.user.user_metadata.company);
        if (data.user.user_metadata?.cal_username) setCalUsername(data.user.user_metadata.cal_username);
      }
    });

    fetch('/api/bookings?role=mentor')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.bookings?.length) {
          setBookings(data.bookings.filter((b: any) => b.status === 'confirmed'));
        } else {
          setBookings([
            {
              id: 'mock-b1',
              starts_at: new Date(Date.now() + 3600 * 2000).toISOString(),
              focus_areas: ['System Design (HLD)', 'DSA'],
              meeting_url: 'https://meet.jit.si/campusmentor-sample-mock',
              student: { full_name: 'Aman Kumar', email: 'aman@campus.edu' },
            },
          ]);
        }
      })
      .catch(() => {});
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/auth/login');
  };

  const handleFeedbackDone = (bookingId: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== bookingId));
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors pb-16">
      <AlumniHeader mentorName={mentorName} company={company} onSignOut={handleSignOut} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 space-y-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Mentorship Overview</h1>
          <p className="text-xs text-zinc-500">Track mock interviews and student placement impact.</p>
        </div>

        <ImpactMetrics students={18} sessions={42} hours={126} rating={4.95} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <UpcomingInterviews bookings={bookings} onOpenRubric={setActiveBooking} />
          </div>
          <div className="lg:col-span-1">
            <AvailabilityCard calUsername={calUsername} />
          </div>
        </div>
      </main>

      {activeBooking && (
        <FeedbackRubricModal
          booking={activeBooking}
          onClose={() => setActiveBooking(null)}
          onSuccess={handleFeedbackDone}
        />
      )}
    </div>
  );
}
