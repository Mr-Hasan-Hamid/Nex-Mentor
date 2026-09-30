'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { NeXMentorLogo } from '@/components/brand/NeXMentorLogo';
import {
  RiMenuLine,
  RiCloseLine,
  RiDashboardLine,
  RiLogoutBoxRLine,
} from '@remixicon/react';
import { NavMobileMenu } from './NavMobileMenu';

export default function Navbar() {
  const router = useRouter();
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setUser(data.user);
        setRole(data.user.user_metadata?.role || 'student');
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user || null);
      setRole(session?.user?.user_metadata?.role || null);
    });

    return () => listener.subscription.unsubscribe();
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setRole(null);
    router.push('/');
    router.refresh();
  };

  const dashboardHref =
    role === 'alumni' ? '/alumni/dashboard' : role === 'admin' ? '/admin/dashboard' : '/student/dashboard';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <NeXMentorLogo size="sm" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-xs text-zinc-500 dark:text-zinc-400">
          <Link href="/#featured-alumni" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            Featured Alumni
          </Link>
          <Link href="/#how-it-works" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            How it Works
          </Link>
          <Link href="/student/login" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            For Students
          </Link>
          <Link href="/alumni/login" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            For Alumni
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {user ? (
            <div className="flex items-center gap-2">
              <Link
                href={dashboardHref}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <RiDashboardLine className="w-3.5 h-3.5 text-zinc-500" />
                Dashboard
              </Link>
              <button
                onClick={handleSignOut}
                className="p-1.5 rounded-lg text-zinc-500 hover:text-rose-500"
                title="Sign out"
              >
                <RiLogoutBoxRLine className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Link
                href="/auth/login"
                className="px-3 py-1.5 text-xs text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="px-3 py-1.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Get Started
              </Link>
            </div>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-1.5 text-zinc-600 dark:text-zinc-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <RiCloseLine className="w-5 h-5" /> : <RiMenuLine className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <NavMobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        user={user}
        dashboardHref={dashboardHref}
        onSignOut={handleSignOut}
      />
    </header>
  );
}
