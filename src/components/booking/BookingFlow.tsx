'use client';

import React, { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { BookingSlotStep } from './BookingSlotStep';
import { BookingResumeStep } from './BookingResumeStep';
import { BookingFocusStep } from './BookingFocusStep';
import { BookingConfirmedStep } from './BookingConfirmedStep';

export interface MentorInfo {
  id: string;
  name: string;
  company: string;
  jobTitle: string;
  domain: string;
  calUsername?: string | null;
}

interface Props {
  mentor: MentorInfo;
  onSuccess?: (bookingId: string) => void;
}

const AVAILABLE_FOCUS = [
  'Dynamic Programming & Recursion',
  'System Design (HLD & Scalability)',
  'Low-Level Design & OOD',
  'Data Structures & Algorithms',
  'Behavioral & Leadership Principles',
  'Database Design & SQL Optimization',
  'Frontend Architecture & React',
  'Concurrency & Multithreading',
];

export default function BookingFlow({ mentor, onSuccess }: Props) {
  const supabase = createClient();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [selectedDate, setSelectedDate] = useState('2026-10-02');
  const [selectedSlot, setSelectedSlot] = useState('16:30');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeUrl, setResumeUrl] = useState('');
  const [uploadingResume, setUploadingResume] = useState(false);
  const [selectedFocus, setSelectedFocus] = useState<string[]>([
    'System Design (HLD & Scalability)',
    'Data Structures & Algorithms',
  ]);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);

  const toggleFocus = (area: string) => {
    if (selectedFocus.includes(area)) {
      setSelectedFocus(selectedFocus.filter((item) => item !== area));
    } else if (selectedFocus.length < 3) {
      setSelectedFocus([...selectedFocus, area]);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || file.type !== 'application/pdf') return;

    setResumeFile(file);
    setUploadingResume(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      const fileName = `${user?.id || 'guest'}-${Date.now()}-${file.name.replace(/\s+/g, '_')}`;
      const { data, error } = await supabase.storage.from('resumes').upload(fileName, file, { upsert: true });

      if (!error && data) {
        const { data: pub } = supabase.storage.from('resumes').getPublicUrl(data.path);
        setResumeUrl(pub.publicUrl);
      } else {
        setResumeUrl(URL.createObjectURL(file));
      }
    } catch {
      setResumeUrl(URL.createObjectURL(file));
    } finally {
      setUploadingResume(false);
    }
  };

  const handleConfirm = async () => {
    setLoading(true);
    try {
      const [hours, minutes] = selectedSlot.split(':').map(Number);
      const start = new Date(selectedDate);
      start.setHours(hours, minutes, 0, 0);
      const end = new Date(start);
      end.setMinutes(end.getMinutes() + 30);

      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mentor_id: mentor.id,
          starts_at: start.toISOString(),
          ends_at: end.toISOString(),
          resume_url: resumeUrl || null,
          focus_areas: selectedFocus,
          notes,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to book');

      setConfirmedBooking(data.booking);
      setStep(4);
      if (onSuccess) onSuccess(data.booking.id);
    } catch (err: any) {
      alert(err.message || 'Booking failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-[#181818] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
      <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-500">
            30-Min Mock Interview
          </span>
          <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{mentor.name}</h2>
          <p className="text-xs text-zinc-500">{mentor.jobTitle} • {mentor.company}</p>
        </div>
        <span className="text-[11px] font-mono text-zinc-400">Step {step}/4</span>
      </div>

      <div className="p-6">
        {step === 1 && (
          <BookingSlotStep
            selectedDate={selectedDate}
            selectedSlot={selectedSlot}
            onDateChange={setSelectedDate}
            onSlotChange={setSelectedSlot}
            onContinue={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <BookingResumeStep
            resumeFile={resumeFile}
            uploading={uploadingResume}
            onFileUpload={handleFileUpload}
            onBack={() => setStep(1)}
            onContinue={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <BookingFocusStep
            availableFocus={AVAILABLE_FOCUS}
            selectedFocus={selectedFocus}
            notes={notes}
            loading={loading}
            onToggleFocus={toggleFocus}
            onNotesChange={setNotes}
            onBack={() => setStep(2)}
            onSubmit={handleConfirm}
          />
        )}
        {step === 4 && (
          <BookingConfirmedStep
            mentorName={mentor.name}
            meetingUrl={confirmedBooking?.meeting_url}
          />
        )}
      </div>
    </div>
  );
}
