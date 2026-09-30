'use client';

import React, { useState } from 'react';
import { SupabaseRoleSelector } from './SupabaseRoleSelector';
import { SupabaseLoginForm } from './SupabaseLoginForm';
import { SupabaseSignupForm } from './SupabaseSignupForm';

interface AuthFormProps {
  roleContext?: 'student' | 'alumni' | 'general';
  initialMode?: 'login' | 'signup';
}

export default function AuthForm({
  roleContext = 'general',
  initialMode = 'login',
}: AuthFormProps) {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [selectedRole, setSelectedRole] = useState<'student' | 'alumni'>(
    roleContext === 'alumni' ? 'alumni' : 'student'
  );

  const activeRole = roleContext === 'general' ? selectedRole : (roleContext as 'student' | 'alumni');
  const isStudent = activeRole === 'student';

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Supabase Inspired Card */}
      <div className="relative bg-white dark:bg-[#181818] border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 sm:p-7 shadow-2xl backdrop-blur-md">
        {/* Supabase Emerald Logo & Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-3">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.2 12.638a.396.396 0 0 0 .316.638H12v8.958a.396.396 0 0 0 .716.233l9.084-12.475a.396.396 0 0 0-.316-.638z" />
            </svg>
          </div>

          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {mode === 'login' ? 'Welcome back' : 'Create an account'}
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-xs">
            {isStudent
              ? 'Find an alumni mentor who can help you ace placement.'
              : 'Share your 30-min industry experience with students.'}
          </p>
        </div>

        {/* Role toggle if in general mode */}
        {roleContext === 'general' && (
          <SupabaseRoleSelector role={selectedRole} onChange={setSelectedRole} />
        )}

        {/* Dynamic Form */}
        {mode === 'login' ? (
          <SupabaseLoginForm
            role={activeRole}
            onSwitchToSignup={() => setMode('signup')}
          />
        ) : (
          <SupabaseSignupForm
            role={activeRole}
            onSwitchToLogin={() => setMode('login')}
          />
        )}
      </div>
    </div>
  );
}
