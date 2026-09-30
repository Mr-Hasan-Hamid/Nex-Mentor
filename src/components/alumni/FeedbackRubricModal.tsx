'use client';

import React, { useState } from 'react';
import { RiCloseLine, RiCheckLine, RiLoader4Line } from '@remixicon/react';

interface Props {
  booking: any;
  onClose: () => void;
  onSuccess: (bookingId: string) => void;
}

export function FeedbackRubricModal({ booking, onClose, onSuccess }: Props) {
  const [coding, setCoding] = useState(4);
  const [comm, setComm] = useState(4);
  const [sysDesign, setSysDesign] = useState(4);
  const [strengths, setStrengths] = useState('');
  const [improvements, setImprovements] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          booking_id: booking.id,
          coding_rating: coding,
          communication_rating: comm,
          system_design_rating: sysDesign,
          strengths,
          improvements,
        }),
      });

      if (res.ok) {
        setDone(true);
        setTimeout(() => {
          onSuccess(booking.id);
          onClose();
        }, 1200);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-white dark:bg-[#181818] border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-2xl space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
        >
          <RiCloseLine className="w-5 h-5" />
        </button>

        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-500">
            Candidate Rubric
          </span>
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            Feedback: {booking.student?.full_name || 'Candidate'}
          </h3>
        </div>

        {done ? (
          <div className="py-6 text-center space-y-2">
            <RiCheckLine className="w-10 h-10 text-emerald-500 mx-auto" />
            <h4 className="text-sm font-semibold">Feedback Submitted!</h4>
            <p className="text-xs text-zinc-400">Scores sent to student & stats updated.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-zinc-500">1. Coding & DSA</span>
                <span className="font-semibold text-emerald-500">{coding} / 5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={coding}
                onChange={(e) => setCoding(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-zinc-500">2. Communication</span>
                <span className="font-semibold text-emerald-500">{comm} / 5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={comm}
                onChange={(e) => setComm(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-zinc-500">3. System Design</span>
                <span className="font-semibold text-emerald-500">{sysDesign} / 5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={sysDesign}
                onChange={(e) => setSysDesign(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-zinc-400 mb-1">Key Strengths</label>
              <textarea
                required
                rows={2}
                value={strengths}
                onChange={(e) => setStrengths(e.target.value)}
                placeholder="Strong grasp of DP state transitions..."
                className="w-full p-2 text-xs rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-zinc-400 mb-1">Areas for Improvement</label>
              <textarea
                required
                rows={2}
                value={improvements}
                onChange={(e) => setImprovements(e.target.value)}
                placeholder="Needs to clarify scale requirements before proposing DB schemas..."
                className="w-full p-2 text-xs rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              {loading ? (
                <>
                  <RiLoader4Line className="w-4 h-4 animate-spin text-zinc-950" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <RiCheckLine className="w-4 h-4" />
                  <span>Submit Evaluation & Notify Student</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
