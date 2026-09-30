'use client';

import React from 'react';

interface Props {
  company: string;
  className?: string;
}

export function CompanyBrandLogo({ company, className = 'h-5' }: Props) {
  const norm = company.toLowerCase();

  // 1. GOOGLE
  if (norm.includes('google')) {
    return (
      <div className={`flex items-center gap-1.5 font-bold tracking-tight text-white ${className}`}>
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.66-5.17 3.66-9.12z" />
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.13C3.25 21.37 7.31 24 12 24z" />
          <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.57H1.26C.46 8.16 0 9.98 0 12s.46 3.84 1.26 5.43l4.02-3.14z" />
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.63 1.26 6.57l4.02 3.14c.95-2.83 3.6-4.96 6.72-4.96z" />
        </svg>
        <span className="text-sm font-semibold tracking-tight text-zinc-100">Google</span>
      </div>
    );
  }

  // 2. MICROSOFT
  if (norm.includes('microsoft')) {
    return (
      <div className={`flex items-center gap-1.5 font-bold tracking-tight text-white ${className}`}>
        <div className="grid grid-cols-2 gap-0.5 w-4 h-4 shrink-0">
          <span className="bg-[#f25022] rounded-[1px]" />
          <span className="bg-[#7fba00] rounded-[1px]" />
          <span className="bg-[#00a4ef] rounded-[1px]" />
          <span className="bg-[#ffb900] rounded-[1px]" />
        </div>
        <span className="text-sm font-semibold tracking-tight text-zinc-100">Microsoft</span>
      </div>
    );
  }

  // 3. AMAZON (Authentic official typography + signature orange smile arrow)
  if (norm.includes('amazon')) {
    return (
      <div className={`flex items-center ${className}`}>
        <svg className="h-6 w-auto" viewBox="0 0 603 182" fill="none">
          {/* Authentic Amazon wordmark in crisp white */}
          <g fill="#FFFFFF">
            <path d="M55.28 59.76V55.72c-13.47 0-27.71 2.88-27.71 18.77 0 8.05 4.17 13.5 11.33 13.5 5.24 0 9.93-3.22 12.9-8.47 3.67-6.45 3.48-12.5 3.48-19.76m18.8 45.43c-1.23 1.1-3.01 1.18-4.4.45-6.19-5.14-7.29-7.53-10.7-12.43-10.22 10.43-17.46 13.55-30.73 13.55-15.67 0-27.89-9.67-27.89-29.04 0-15.13 8.21-25.43 19.87-30.47 10.12-4.45 24.25-5.24 35.05-6.47v-2.42c0-4.43.34-9.67-2.25-13.5-2.28-3.43-6.63-4.85-10.46-4.85-7.1 0-13.45 3.64-15 11.2-.31 1.67-1.54 3.32-3.22 3.4L6.26 32.68C4.74 32.34 3.06 31.1 3.48 28.77 7.65 6.85 27.45.25 45.17.25c9.07 0 20.92 2.41 28.08 9.28 9.07 8.47 8.2 19.77 8.2 32.06v29.05c0 8.73 3.62 12.56 7.03 17.28 1.2 1.67 1.47 3.7-.06 4.95-3.8 3.17-10.56 9.07-14.28 12.37l-.06-.05" />
            <path d="m125 105.45h-18.64c-1.78-.13-3.2-1.46-3.33-3.17V6.62c0-1.92 1.6-3.44 3.59-3.44h17.38c1.81.08 3.25 1.47 3.38 3.2v12.5h.34c4.54-12.08 13.06-17.72 24.54-17.72 11.67 0 18.96 5.64 24.2 17.72 4.51-12.08 14.76-17.72 25.75-17.72 7.81 0 16.36 3.23 21.57 10.46 5.9 8.05 4.7 19.74 4.7 29.99l-.03 60.38c0 1.91-1.6 3.46-3.59 3.46h-18.61c-1.87-.13-3.36-1.63-3.36-3.46V51.29c0-4.04.37-14.1-.52-17.93-1.39-6.43-5.56-8.23-10.96-8.23-4.51 0-9.23 3.01-11.14 7.84-1.92 4.82-1.73 12.9-1.73 18.32v50.71c0 1.91-1.6 3.46-3.6 3.46h-18.61c-1.89-.13-3.36-1.63-3.36-3.46L152.95 51.29c0-10.67 1.75-26.37-11.49-26.37-13.4 0-12.87 15.31-12.87 26.37v50.71c0 1.91-1.6 3.46-3.59 3.46" />
            <path d="M299.66 59.76V55.72c-13.48 0-27.71 2.88-27.71 18.77 0 8.05 4.17 13.5 11.32 13.5 5.25 0 9.94-3.22 12.9-8.47 3.67-6.45 3.49-12.5 3.49-19.76m18.79 45.43c-1.23 1.1-3.01 1.18-4.4.45-6.19-5.14-7.29-7.53-10.7-12.43-10.22 10.43-17.46 13.55-30.73 13.55-15.67 0-27.89-9.67-27.89-29.04 0-15.13 8.21-25.43 19.87-30.47 10.12-4.45 24.25-5.24 35.05-6.47v-2.42c0-4.43.34-9.67-2.25-13.5-2.28-3.43-6.63-4.85-10.46-4.85-7.11 0-13.45 3.64-15 11.2-.31 1.67-1.55 3.32-3.23 3.4L250.63 32.68c-1.52-.34-3.2-1.58-2.78-3.91 4.17-21.92 23.97-28.52 41.69-28.52 9.07 0 20.92 2.41 28.08 9.28 9.07 8.47 8.2 19.77 8.2 32.06v29.05c0 8.73 3.62 12.56 7.03 17.28 1.2 1.67 1.47 3.7-.06 4.95-3.8 3.17-10.56 9.07-14.28 12.37l-.05-.05" />
            <path d="M348.5 20.07V6.38c0-2.07 1.57-3.46 3.46-3.46h61.27c1.96 0 3.54 1.42 3.54 3.46v11.72c-.03 1.97-1.68 4.54-4.62 8.6l-31.74 45.33c11.79-.29 24.25 1.47 34.94 7.5 2.42 1.36 3.07 3.35 3.26 5.32V99.45c0 2-2.21 4.33-4.51 3.12-18.85-9.88-43.89-10.96-64.73.1-2.13 1.16-4.36-1.15-4.36-3.14V85.66c0-2.23.03-6.03 2.25-9.41l36.79-52.75h-32.01c-1.97 0-3.54-1.39-3.54-3.43" />
            <path d="M469.51 1.16c27.66 0 42.63 23.76 42.63 53.96 0 29.18-16.54 52.33-42.63 52.33-27.16 0-41.94-23.75-41.94-53.35 0-29.78 14.97-52.93 41.94-52.93m.16 19.54c-13.74 0-14.6 18.71-14.6 30.38 0 11.69-.19 36.65 14.44 36.65 14.45 0 15.13-20.13 15.13-32.4 0-8.08-.34-17.73-2.78-25.38-2.1-6.66-6.27-9.25-12.19-9.25" />
            <path d="M548.01 105.45h-18.56c-1.86-.13-3.36-1.62-3.36-3.46l-.02-95.69c.15-1.76 1.7-3.12 3.59-3.12h17.27c1.63.08 2.97 1.18 3.33 2.67v14.63h.34c5.22-13.08 12.53-19.32 25.4-19.32 8.37 0 16.52 3.01 21.76 11.27 4.88 7.66 4.88 20.53 4.88 29.78v60.22c-.21 1.68-1.76 3.02-3.6 3.02h-18.69c-1.7-.13-3.12-1.39-3.3-3.02V50.48c0-10.46 1.2-25.77-11.67-25.77-4.53 0-8.7 3.04-10.77 7.65-2.63 5.85-2.97 11.67-2.97 18.12v51.51c-.02 1.92-1.65 3.46-3.64 3.46" />
          </g>
          {/* Authentic Amazon orange smile arrow with curved dimple & arrowhead */}
          <path
            d="m374.01 142.18c-35 25.8-85.73 39.56-129.41 39.56-61.24 0-116.37-22.65-158.08-60.32-3.28-2.97-.35-7 3.59-4.7 45.01 26.2 100.67 41.95 158.16 41.95 38.78 0 81.43-8.02 120.65-24.67 5.93-2.52 10.88 3.88 5.09 8.18"
            fill="#FF9900"
          />
          <path
            d="m388.56 125.54c-4.46-5.72-29.58-2.7-40.85-1.37-3.44.42-3.96-2.56-.87-4.71 20-14.08 52.83-10.02 56.66-5.3 3.82 4.75-.99 37.65-19.8 53.35-2.88 2.42-5.63 1.13-4.35-2.07 4.22-10.54 13.68-34.16 9.2-39.9"
            fill="#FF9900"
          />
        </svg>
      </div>
    );
  }

  // 4. META (Authentic Meta infinity ribbon with gradient + Meta bold wordmark)
  if (norm.includes('meta')) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <svg className="w-6 h-5" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="meta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0064E0" />
              <stop offset="50%" stopColor="#0081FB" />
              <stop offset="100%" stopColor="#00A2FF" />
            </linearGradient>
          </defs>
          <path
            fill="url(#meta-gradient)"
            d="M16.92 4.5C15.07 4.5 13.62 5.89 12.31 7.66 10.51 5.37 9.01 4.5 7.21 4.5 3.53 4.5.72 9.28.72 14.34.72 17.5 2.25 19.5 4.82 19.5c1.84 0 3.17-.87 5.53-5 0 0 .98-1.74 1.66-2.93.24.38.49.8.75 1.24l1.11 1.86c2.15 3.61 3.35 4.83 5.53 4.83 2.5 0 3.89-2.02 3.89-5.26 0-5.3-2.88-9.74-6.37-9.74zm-8.37 8.89c-1.91 3-2.57 3.67-3.64 3.67-1.1 0-1.75-.96-1.75-2.68 0-3.67 1.83-7.43 4.01-7.43 1.19 0 2.17.68 3.69 2.85-1.44 2.2-2.31 3.59-2.31 3.59zm7.22-.38l-1.32-2.21c-.36-.58-.7-1.12-1.03-1.61 1.19-1.84 2.18-2.76 3.35-2.76 2.43 0 4.37 3.58 4.37 7.98 0 1.67-.55 2.65-1.68 2.65-1.09 0-1.62-.72-3.69-4.05z"
          />
        </svg>
        <span className="text-base font-extrabold tracking-tight text-white leading-none">Meta</span>
      </div>
    );
  }

  // 5. TCS
  if (norm.includes('tcs')) {
    return (
      <div className={`flex items-center gap-1.5 ${className}`}>
        <span className="text-base font-black tracking-tight text-rose-500 uppercase leading-none">tcs</span>
        <span className="text-[10px] font-mono uppercase text-zinc-400">Tata Consultancy</span>
      </div>
    );
  }

  // 6. COGNIZANT (Faceted geometric 3D prism logo + crisp lowercase cognizant wordmark)
  if (norm.includes('cognizant')) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 52 44" fill="none">
          <defs>
            <linearGradient id="cog-g1" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#3d54ce" />
              <stop offset="1%" stopColor="#35cacf" />
            </linearGradient>
            <linearGradient id="cog-g2" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#13457d" />
              <stop offset="1%" stopColor="#279698" />
            </linearGradient>
            <linearGradient id="cog-g3" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#090086" />
              <stop offset="1%" stopColor="#2f96a9" />
            </linearGradient>
            <linearGradient id="cog-g4" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b62ca" />
              <stop offset="1%" stopColor="#93dfe3" />
            </linearGradient>
          </defs>
          <path d="M0 22L15.3 44L31.1 34.5L22.2 22Z" fill="url(#cog-g1)" />
          <path d="M15.3 44H37.1L52.1 22Z" fill="url(#cog-g2)" />
          <path d="M15.3 0L0 22H22.2L31.1 9.5Z" fill="url(#cog-g3)" />
          <path d="M15.3 0L52.1 22L37.1 0Z" fill="url(#cog-g4)" />
        </svg>
        <span className="text-sm font-semibold tracking-tight text-white leading-none">cognizant</span>
      </div>
    );
  }

  return (
    <div className={`text-sm font-bold tracking-tight text-zinc-100 ${className}`}>
      {company}
    </div>
  );
}
