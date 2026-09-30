'use client';

import React, { useEffect, useState, useRef } from 'react';

interface Props {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  sublabel: string;
}

export function InteractiveCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 1800,
  label,
  sublabel,
}: Props) {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * target);
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          animationFrameId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration]);

  return (
    <div
      ref={countRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-4 sm:p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-[#0c0c0e]/70 backdrop-blur-md hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 text-center select-none shadow-sm group hover:-translate-y-0.5"
    >
      <div className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-zinc-950 dark:text-white font-mono flex items-center justify-center">
        <span>{prefix}</span>
        <span>{count.toLocaleString()}</span>
        <span className="text-zinc-400 dark:text-zinc-500 font-sans">{suffix}</span>
      </div>

      <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mt-1.5">
        {label}
      </div>

      <div className={`text-[11px] font-mono mt-0.5 transition-colors ${
        isHovered ? 'text-zinc-950 dark:text-white font-medium' : 'text-zinc-400 dark:text-zinc-500'
      }`}>
        {sublabel}
      </div>
    </div>
  );
}
