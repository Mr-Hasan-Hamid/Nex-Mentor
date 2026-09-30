'use client';

import React from 'react';
import {
  RiGoogleFill,
  RiMicrosoftFill,
  RiAmazonFill,
  RiMetaFill,
  RiAppleFill,
  RiNetflixFill,
  RiSpotifyFill,
  RiGithubFill,
  RiSlackFill,
  RiTwitterXFill,
} from '@remixicon/react';

const COMPANIES_ROW1 = [
  { name: 'Google', icon: RiGoogleFill },
  { name: 'Microsoft', icon: RiMicrosoftFill },
  { name: 'Amazon', icon: RiAmazonFill },
  { name: 'Meta', icon: RiMetaFill },
  { name: 'Apple', icon: RiAppleFill },
  { name: 'Netflix', icon: RiNetflixFill },
];

const COMPANIES_ROW2 = [
  { name: 'Spotify', icon: RiSpotifyFill },
  { name: 'GitHub', icon: RiGithubFill },
  { name: 'Slack', icon: RiSlackFill },
  { name: 'X / Twitter', icon: RiTwitterXFill },
  { name: 'TCS Research', textOnly: true },
  { name: 'Goldman Sachs', textOnly: true },
];

const repeatItems = (arr: any[], count = 4) =>
  Array.from({ length: count }).flatMap(() => arr);

export function CompanyCarousel() {
  return (
    <section className="relative py-16 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-black/60 overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 35s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 35s linear infinite;
          }
        `,
      }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-10">
        <p className="text-[11px] font-mono font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">
          // GLOBAL ALUMNI FOOTPRINT
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          Where NeXMentor alumni write production code
        </h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-lg mx-auto">
          Practice 1-on-1 mock interviews with engineers actively designing distributed systems at leading technology firms.
        </p>
      </div>

      {/* Edge-faded Marquee Container */}
      <div className="w-full relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Row 1: Scroll Left */}
        <div className="flex whitespace-nowrap animate-scroll-left items-center w-max gap-3 py-1.5">
          {repeatItems(COMPANIES_ROW1, 6).map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={`r1-${i}`}
                className="h-11 px-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] flex items-center justify-center gap-2.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all select-none shadow-sm"
              >
                {Icon && <Icon className="w-4 h-4 text-zinc-900 dark:text-white" />}
                <span>{c.name}</span>
              </div>
            );
          })}
        </div>

        {/* Row 2: Scroll Right */}
        <div className="flex whitespace-nowrap mt-3 animate-scroll-right items-center w-max gap-3 py-1.5">
          {repeatItems(COMPANIES_ROW2, 6).map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={`r2-${i}`}
                className="h-11 px-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] flex items-center justify-center gap-2.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all select-none shadow-sm"
              >
                {Icon && <Icon className="w-4 h-4 text-zinc-900 dark:text-white" />}
                <span>{c.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
