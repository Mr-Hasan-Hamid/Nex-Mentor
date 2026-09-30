'use client';

import React from 'react';
import { SupabaseSplitLayout } from '@/components/auth/SupabaseSplitLayout';
import { SplitLoginForm } from '@/components/auth/SplitLoginForm';

export default function LoginPage() {
  return (
    <SupabaseSplitLayout
      roleBadge="Sign In"
      quoteText="NeXMentor mock interviews gave me the exact confidence needed for placement rounds. ⚡"
      quoteAuthor="@shadcn"
    >
      <SplitLoginForm roleContext="general" />
    </SupabaseSplitLayout>
  );
}
