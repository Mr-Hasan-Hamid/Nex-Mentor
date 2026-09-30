'use client';

import React, { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { BookingModalHeader } from './BookingModalHeader';
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
  onClose: () => void;
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

export default function BookingFlow({ mentor, onClose, onSuccess }: Props) {
  const supabase = createClient();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Critical requirement: NO date and NO slot pre-selected!
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeUrl, setResumeUrl] = useState('');
  const [uploadingResume, setUploadingResume] = useState(false);
  const [selectedFocus, setSelectedFocus] = useState<string[]>([]);
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

  const handleFileUpload = async (file: File) => {
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
      // Parse slot time e.g. "10:00 AM" or "02:00 PM"
      const [time, modifier] = selectedSlot.split(' ');
      let [hours, minutes] = time.split(':').map(Number);
      if (modifier === 'PM' && hours < 12) hours += 12;
      if (modifier === 'AM' && hours === 12) hours = 0;

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
    <div className="w-full bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-2xl transition-all">
      <BookingModalHeader mentor={mentor} currentStep={step} onClose={onClose} />

      <div className="p-6 sm:p-8">
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
            onRemoveFile={() => {
              setResumeFile(null);
              setResumeUrl('');
            }}
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
