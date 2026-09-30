'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navigation/Navbar';
import { LandingHero } from '@/components/landing/LandingHero';
import { FeaturedAlumni, AlumniCardData } from '@/components/landing/FeaturedAlumni';
import { BentoFeatures } from '@/components/landing/BentoFeatures';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { CompanyCarousel } from '@/components/landing/CompanyCarousel';
import { SupabaseStyleFooter } from '@/components/landing/SupabaseStyleFooter';
import BookingFlow from '@/components/booking/BookingFlow';

export default function Home() {
  const [selectedMentor, setSelectedMentor] = useState<AlumniCardData | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors">
      <Navbar />
      <LandingHero />
      <FeaturedAlumni onSelectMentor={setSelectedMentor} />
      <BentoFeatures />
      <HowItWorks />
      <CompanyCarousel />
      <SupabaseStyleFooter />

      {/* Spacious 30-Min Booking Modal */}
      {selectedMentor && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedMentor(null)}
        >
          <div
            className="relative w-full max-w-2xl sm:max-w-3xl my-8 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <BookingFlow
              mentor={{
                id: selectedMentor.id,
                name: selectedMentor.name,
                company: selectedMentor.company,
                jobTitle: selectedMentor.jobTitle,
                domain: selectedMentor.domain,
              }}
              onClose={() => setSelectedMentor(null)}
              onSuccess={() => {
                setTimeout(() => setSelectedMentor(null), 2000);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
