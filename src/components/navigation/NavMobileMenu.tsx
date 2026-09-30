'use client';

import React from 'react';
import Link from 'next/link';

interface NavMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
  dashboardHref: string;
  onSignOut: () => void;
}

export function NavMobileMenu({
  isOpen,
  onClose,
  user,
  dashboardHref,
  onSignOut,
}: NavMobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="sm:hidden absolute top-full left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-2xl border-b border-zinc-200 dark:border-zinc-800 shadow-2xl px-6 py-6 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="flex flex-col items-center justify-center text-center space-y-4 text-xs font-medium">
        <Link
          href="/find-mentor"
          onClick={onClose}
          className="py-1 text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 font-semibold"
        >
          Find Mentors
        </Link>
        <Link
          href="/#featured-alumni"
          onClick={onClose}
          className="py-1 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
        >
          Featured Alumni
        </Link>
        <Link
          href="/#capabilities"
          onClick={onClose}
          className="py-1 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
        >
          Platform Capabilities
        </Link>
        <Link
          href="/#how-it-works"
          onClick={onClose}
          className="py-1 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
        >
          How it Works
        </Link>

        <div className="w-full pt-3 border-t border-zinc-200 dark:border-zinc-800 flex flex-col items-center gap-2.5">
          {user ? (
            <>
              <Link
                href={dashboardHref}
                onClick={onClose}
                className="w-full py-2.5 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold text-center"
              >
                Go to Dashboard
              </Link>
              <button
                onClick={() => {
                  onClose();
                  onSignOut();
                }}
                className="w-full py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-rose-500 text-xs font-medium"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                onClick={onClose}
                className="w-full py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs font-medium text-center hover:bg-zinc-50 dark:hover:bg-zinc-900"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                onClick={onClose}
                className="w-full py-2.5 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold text-center hover:bg-zinc-800 dark:hover:bg-zinc-200"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
