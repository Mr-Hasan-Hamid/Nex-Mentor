'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { RiSunLine, RiMoonLine } from '@remixicon/react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8 rounded-lg border border-border bg-transparent" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <RiSunLine className="w-4 h-4 text-amber-400" />
      ) : (
        <RiMoonLine className="w-4 h-4 text-zinc-600" />
      )}
    </button>
  );
}
