'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { SocialAuthButtons } from './SocialAuthButtons';
import { TubeRoleSwitch } from './TubeRoleSwitch';
import { RiEyeLine, RiEyeOffLine, RiLoader4Line, RiAlertLine } from '@remixicon/react';

interface Props {
  roleContext: 'student' | 'alumni' | 'general';
}

export function SplitLoginForm({ roleContext }: Props) {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [currentRole, setCurrentRole] = useState<'student' | 'alumni'>(
    roleContext === 'alumni' ? 'alumni' : 'student'
  );

  const handleSignIn = async (e: React.FormEvent) => {
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
        let role = data.user.user_metadata?.role;
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', data.user.id)
          .single();

        if (profile?.role) role = profile.role;

        if (role === 'alumni') router.push('/alumni/dashboard');
        else if (role === 'admin') router.push('/admin/dashboard');
        else router.push('/student/dashboard');
        router.refresh();
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Authentication error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full space-y-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Welcome back
        </h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
          Sign in to your {currentRole === 'alumni' ? 'mentor' : 'student'} account
        </p>
      </div>

      {/* Symmetrical Tube Role Switcher */}
      <TubeRoleSwitch
        activeRole={currentRole}
        onRoleChange={(r) => setCurrentRole(r)}
        navigateOnChange={true}
      />

      <SocialAuthButtons />

      {errorMsg && (
        <div className="flex items-start gap-2 p-2.5 bg-rose-500/10 border border-rose-500/20 rounded-md text-xs text-rose-500">
          <RiAlertLine className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSignIn} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-3 py-2 text-xs rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#121214] text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-950 dark:focus:border-zinc-200 focus:ring-1 focus:ring-zinc-950 dark:focus:ring-zinc-200 transition-colors"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
              Password
            </label>
            <Link
              href="/auth/ForgotPassword"
              className="text-[11px] text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-200 transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2 pr-9 text-xs rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#121214] text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-950 dark:focus:border-zinc-200 focus:ring-1 focus:ring-zinc-950 dark:focus:ring-zinc-200 transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2.5 top-2.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              {showPassword ? <RiEyeOffLine className="w-3.5 h-3.5" /> : <RiEyeLine className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Vercel High-Contrast Monochrome Solid Action Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 px-4 rounded-md bg-zinc-950 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 text-xs font-semibold transition-all shadow-sm flex items-center justify-center gap-1.5 disabled:opacity-50"
        >
          {loading ? (
            <>
              <RiLoader4Line className="w-4 h-4 animate-spin" />
              <span>Signing in...</span>
            </>
          ) : (
            <span>Sign in</span>
          )}
        </button>
      </form>

      <div className="text-center pt-2">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Don't have an account?{' '}
          <Link
            href="/auth/signup"
            className="text-zinc-900 dark:text-white font-medium hover:underline ml-0.5"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
