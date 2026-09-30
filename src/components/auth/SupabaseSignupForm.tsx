'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { SignupRoleFields } from './SignupRoleFields';
import { RiLoader4Line, RiAlertLine, RiCheckLine, RiSparklingLine } from '@remixicon/react';

interface Props {
  role: 'student' | 'alumni';
  onSwitchToLogin: () => void;
}

export function SupabaseSignupForm({ role, onSwitchToLogin }: Props) {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [department, setDepartment] = useState('CSE');
  const [gradYear, setGradYear] = useState('2026');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [calUsername, setCalUsername] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const isStudent = role === 'student';

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const metadata: Record<string, any> = { role, full_name: fullName.trim() };
      if (isStudent) {
        metadata.department = department.trim();
        metadata.grad_year = parseInt(gradYear) || 2026;
      } else {
        metadata.company = company.trim();
        metadata.job_title = jobTitle.trim();
        metadata.cal_username = calUsername.trim() || undefined;
      }

      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: metadata,
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        setErrorMsg(error.message);
        setLoading(false);
        return;
      }

      if (data?.session) {
        router.push(isStudent ? '/student/dashboard' : '/alumni/dashboard');
        router.refresh();
      } else {
        setSuccessMsg('Account created! Please check your email to verify your account.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignup} className="space-y-3.5">
      {errorMsg && (
        <div className="flex items-start gap-2 p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg text-xs text-rose-500">
          <RiAlertLine className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {successMsg && (
        <div className="flex items-start gap-2 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-xs text-emerald-500">
          <RiCheckLine className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{successMsg}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-medium text-zinc-400 mb-1">Full Name</label>
        <input
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder={isStudent ? 'Aman Kumar' : 'Rahul Sharma'}
          className="w-full px-3 py-2 text-xs rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-400 mb-1">
          {isStudent ? 'College Email' : 'Professional Email'}
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={isStudent ? 'student@campus.edu' : 'rahul@google.com'}
          className="w-full px-3 py-2 text-xs rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-400 mb-1">Password</label>
        <input
          type="password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-3 py-2 text-xs rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500"
        />
      </div>

      <SignupRoleFields
        role={role}
        department={department}
        gradYear={gradYear}
        company={company}
        jobTitle={jobTitle}
        calUsername={calUsername}
        setDepartment={setDepartment}
        setGradYear={setGradYear}
        setCompany={setCompany}
        setJobTitle={setJobTitle}
        setCalUsername={setCalUsername}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-2 py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50"
      >
        {loading ? (
          <>
            <RiLoader4Line className="w-4 h-4 animate-spin" />
            <span>Creating account...</span>
          </>
        ) : (
          <>
            <span>{isStudent ? 'Sign up as Student' : 'Join as Alumni Mentor'}</span>
            <RiSparklingLine className="w-3.5 h-3.5" />
          </>
        )}
      </button>

      <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800/80 text-center">
        <p className="text-xs text-zinc-500">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-emerald-500 hover:text-emerald-400 font-medium hover:underline ml-1"
          >
            Sign in
          </button>
        </p>
      </div>
    </form>
  );
}
