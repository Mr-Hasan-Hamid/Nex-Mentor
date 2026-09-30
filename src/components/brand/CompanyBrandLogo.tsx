'use client';

import React from 'react';

interface Props {
  company: string;
  className?: string;
}

export function CompanyBrandLogo({ company, className = 'h-5' }: Props) {
  const norm = company.toLowerCase();

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

  if (norm.includes('amazon')) {
    return (
      <div className={`flex items-center gap-1 font-bold tracking-tight text-white ${className}`}>
        <span className="text-base font-extrabold tracking-tight text-white lowercase">amazon</span>
        <svg className="w-5 h-2 text-amber-400 mt-1" viewBox="0 0 100 35" fill="currentColor">
          <path d="M5 20 Q 50 40 95 10 Q 50 25 5 20" />
        </svg>
      </div>
    );
  }

  if (norm.includes('meta')) {
    return (
      <div className={`flex items-center gap-1.5 font-bold tracking-tight text-white ${className}`}>
        <svg className="w-5 h-5 text-[#0081fb]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.963 3.5c-2.484 0-4.57 1.637-5.263 3.902C11.007 5.137 8.921 3.5 6.437 3.5 2.882 3.5 0 6.436 0 10.057c0 4.195 3.328 7.747 7.737 9.877 1.258.608 2.658.948 4.126.948 1.468 0 2.868-.34 4.126-.948 4.409-2.13 7.737-5.682 7.737-9.877 0-3.621-2.882-6.557-6.763-6.557zm.006 14.73c-1.127 0-2.222-.275-3.21-.778-1.077-.549-2.03-1.34-2.808-2.316.657-1.127 1.442-2.133 2.338-2.997 1.054-1.018 2.298-1.587 3.68-1.587 2.115 0 3.83 1.748 3.83 3.903 0 2.05-1.744 3.775-3.83 3.775z" />
        </svg>
        <span className="text-sm font-bold tracking-tight text-white">Meta</span>
      </div>
    );
  }

  if (norm.includes('tcs')) {
    return (
      <div className={`flex items-center gap-1.5 font-extrabold tracking-wider ${className}`}>
        <span className="text-base font-black tracking-tight text-rose-500 uppercase">tcs</span>
        <span className="text-[10px] font-mono uppercase text-zinc-400">Tata Consultancy</span>
      </div>
    );
  }

  if (norm.includes('cognizant')) {
    return (
      <div className={`flex items-center gap-1.5 font-bold tracking-tight text-white ${className}`}>
        <div className="w-3.5 h-3.5 rounded-full border-2 border-cyan-400 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        </div>
        <span className="text-sm font-semibold tracking-tight text-zinc-100">Cognizant</span>
      </div>
    );
  }

  return (
    <div className={`text-sm font-bold tracking-tight text-zinc-100 ${className}`}>
      {company}
    </div>
  );
}
