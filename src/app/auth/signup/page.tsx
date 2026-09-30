'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AuthForm from '@/components/auth/AuthForm';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { NeXMentorLogo } from '@/components/brand/NeXMentorLogo';
import {
  RiGraduationCapLine,
  RiBriefcaseLine,
  RiArrowRightLine,
  RiArrowLeftLine,
} from '@remixicon/react';

export default function SignupPage() {
  const [selectedRole, setSelectedRole] = useState<'student' | 'alumni' | null>(null);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex flex-col justify-center py-12 px-4 sm:px-6 relative overflow-hidden transition-colors">

      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <ThemeToggle />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-6">
        <Link href="/" className="inline-flex items-center gap-2">
          <NeXMentorLogo size="md" />
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {!selectedRole ? (
          <div className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 sm:p-7 shadow-xl">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                Join NeXMentor
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Select your role to continue
              </p>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setSelectedRole('student')}
                className="w-full group flex items-center justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-950 dark:hover:border-zinc-200 bg-zinc-50 dark:bg-zinc-900/60 hover:bg-white dark:hover:bg-zinc-900 transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center">
                    <RiGraduationCapLine className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      I'm a Student
                    </h3>
                    <p className="text-[11px] text-zinc-500">Book mock interviews & practice</p>
                  </div>
                </div>
                <RiArrowRightLine className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors" />
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole('alumni')}
                className="w-full group flex items-center justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-950 dark:hover:border-zinc-200 bg-zinc-50 dark:bg-zinc-900/60 hover:bg-white dark:hover:bg-zinc-900 transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center">
                    <RiBriefcaseLine className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      I'm an Alumni Mentor
                    </h3>
                    <p className="text-[11px] text-zinc-500">Mentor students & give feedback</p>
                  </div>
                </div>
                <RiArrowRightLine className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors" />
              </button>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 text-center">
              <p className="text-xs text-zinc-500">
                Already registered?{' '}
                <Link
                  href="/auth/login"
                  className="text-zinc-950 dark:text-white hover:underline font-medium"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setSelectedRole(null)}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
            >
              <RiArrowLeftLine className="w-3.5 h-3.5" />
              Back to role selection
            </button>
            <AuthForm roleContext={selectedRole} initialMode="signup" />
          </div>
        )}
      </div>
    </div>
  );
}
