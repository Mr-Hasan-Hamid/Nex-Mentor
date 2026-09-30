'use client';

import React from 'react';
import { SupabaseSplitLayout } from '@/components/auth/SupabaseSplitLayout';
import { SplitSignupForm } from '@/components/auth/SplitSignupForm';

export default function SignupPage() {
  return (
    <SupabaseSplitLayout
      roleBadge="Sign Up"
      quoteText="Joining NeXMentor as an alumni mentor let me give students the 30 minutes that changed their placement journey. ⚡"
      quoteAuthor="@rahul_google"
    >
      <SplitSignupForm initialRole="student" />
    </SupabaseSplitLayout>
  );
}
