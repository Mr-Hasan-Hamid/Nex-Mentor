'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { UserRole } from '@/types/database';
import { RiLoader4Line, RiAlertLine, RiArrowRightLine } from '@remixicon/react';

interface Props {
  role: 'student' | 'alumni';
  onSwitchToSignup: () => void;
}

export function SupabaseLoginForm({ role, onSwitchToSignup }: Props) {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const isStudent = role === 'student';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setErrorMsg(error.message);
        setLoading(false);
        return;
      }

      if (data.user) {
        let userRole = data.user.user_metadata?.role as UserRole | undefined;

        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', data.user.id)
          .single();

        if (profile?.role) userRole = profile.role;

        if (userRole === 'alumni') router.push('/alumni/dashboard');
        else if (userRole === 'admin') router.push('/admin/dashboard');
        else router.push('/student/dashboard');

        router.refresh();
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      {errorMsg && (
        <div className="flex items-start gap-2 p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg text-xs text-rose-500">
          <RiAlertLine className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-medium text-zinc-400 mb-1.5">
          {isStudent ? 'College Email Address' : 'Professional Email Address'}
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={isStudent ? 'student@campus.edu' : 'rahul@google.com'}
          className="w-full px-3.5 py-2 text-xs rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-1.5">
          <label className="block text-xs font-medium text-zinc-400">Password</label>
          <Link
            href="/auth/ForgotPassword"
            className="text-[11px] text-zinc-500 hover:text-emerald-500 transition-colors"
          >
            Forgot password?
          </Link>
        </div>
        <input
          type="password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-3.5 py-2 text-xs rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
        />
      </div>

      {/* Supabase Emerald Action Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full mt-2 py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50 shadow-sm"
      >
        {loading ? (
          <>
            <RiLoader4Line className="w-4 h-4 animate-spin text-zinc-950" />
            <span>Signing in...</span>
          </>
        ) : (
          <>
            <span>Sign In</span>
            <RiArrowRightLine className="w-3.5 h-3.5" />
          </>
        )}
      </button>

      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80 text-center">
        <p className="text-xs text-zinc-500">
          {isStudent ? "Don't have an account?" : 'New alumni mentor?'}{' '}
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="text-emerald-500 hover:text-emerald-400 font-medium hover:underline ml-1"
          >
            {isStudent ? 'Create student account' : 'Join as mentor'}
          </button>
        </p>
      </div>
    </form>
  );
}
