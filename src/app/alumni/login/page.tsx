'use client';

import React from 'react';
import { SupabaseSplitLayout } from '@/components/auth/SupabaseSplitLayout';
import { SplitLoginForm } from '@/components/auth/SplitLoginForm';

export default function AlumniLoginPage() {
  return (
    <SupabaseSplitLayout
      roleBadge="Alumni Mentor"
      quoteText="Giving 30 minutes a week helped 18 college juniors crack their placement rounds. ⚡"
      quoteAuthor="@rahul_google"
    >
      <SplitLoginForm roleContext="alumni" />
    </SupabaseSplitLayout>
  );
}
