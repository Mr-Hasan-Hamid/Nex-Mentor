'use client';

import React from 'react';
import { SupabaseSplitLayout } from '@/components/auth/SupabaseSplitLayout';
import { SplitLoginForm } from '@/components/auth/SplitLoginForm';

export default function StudentLoginPage() {
  return (
    <SupabaseSplitLayout
      roleBadge="Student"
      quoteText="NeXMentor mock interviews got me placed at Microsoft. ⚡"
      quoteAuthor="@hasan_swe"
    >
      <SplitLoginForm roleContext="student" />
    </SupabaseSplitLayout>
  );
}
