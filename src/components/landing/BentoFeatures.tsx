'use client';

import React from 'react';
import { CapabilitiesHeader } from './capabilities/CapabilitiesHeader';
import { SchedulingCapabilityCard } from './capabilities/SchedulingCapabilityCard';
import { ResumeCapabilityCard } from './capabilities/ResumeCapabilityCard';
import { VerifiedAlumniCapabilityCard } from './capabilities/VerifiedAlumniCapabilityCard';
import { EvaluationRubricCapabilityCard } from './capabilities/EvaluationRubricCapabilityCard';

export function BentoFeatures() {
  return (
    <section id="capabilities" className="py-24 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with hand-drawn note */}
        <CapabilitiesHeader />

        {/* 2x2 Platform Capabilities Grid - Full Section Width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SchedulingCapabilityCard />
          <ResumeCapabilityCard />
          <VerifiedAlumniCapabilityCard />
          <EvaluationRubricCapabilityCard />
        </div>
      </div>
    </section>
  );
}
