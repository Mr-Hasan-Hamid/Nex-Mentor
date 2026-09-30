'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navigation/Navbar';
import { LandingHero } from '@/components/landing/LandingHero';
import { FeaturedAlumni, AlumniCardData } from '@/components/landing/FeaturedAlumni';
import { BentoFeatures } from '@/components/landing/BentoFeatures';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { CompanyCarousel } from '@/components/landing/CompanyCarousel';
import { VercelFooter } from '@/components/landing/VercelFooter';
import BookingFlow from '@/components/booking/BookingFlow';
import { RiCloseLine } from '@remixicon/react';

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
      <VercelFooter />

      {/* Booking Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-xl my-6">
            <button
              onClick={() => setSelectedMentor(null)}
              className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 shadow-md flex items-center justify-center z-10 hover:text-zinc-950 dark:hover:text-white"
            >
              <RiCloseLine className="w-4 h-4" />
            </button>
            <BookingFlow
              mentor={{
                id: selectedMentor.id,
                name: selectedMentor.name,
                company: selectedMentor.company,
                jobTitle: selectedMentor.jobTitle,
                domain: selectedMentor.domain,
              }}
              onSuccess={() => {
                setTimeout(() => setSelectedMentor(null), 1500);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
