'use client';

import React from 'react';
import { RiUploadCloud2Line, RiFilePdfLine, RiLoader4Line, RiArrowRightLine, RiArrowLeftLine } from '@remixicon/react';

interface Props {
  resumeFile: File | null;
  uploading: boolean;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBack: () => void;
  onContinue: () => void;
}

export function BookingResumeStep({
  resumeFile,
  uploading,
  onFileUpload,
  onBack,
  onContinue,
}: Props) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
          <RiFilePdfLine className="w-4 h-4 text-emerald-500" />
          2. Attach your Résumé (PDF)
        </h3>
        <p className="text-xs text-zinc-500 mt-0.5">
          The alumni mentor will review this before your 30-minute mock interview.
        </p>
      </div>

      <div className="border border-dashed border-zinc-300 dark:border-zinc-700 hover:border-emerald-500 rounded-xl p-8 text-center bg-zinc-50 dark:bg-zinc-900/40 relative cursor-pointer transition-colors">
        <input
          type="file"
          accept=".pdf"
          onChange={onFileUpload}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
        />

        {uploading ? (
          <div className="flex flex-col items-center">
            <RiLoader4Line className="w-8 h-8 text-emerald-500 animate-spin mb-2" />
            <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Uploading to Supabase Storage...</p>
          </div>
        ) : resumeFile ? (
          <div className="flex flex-col items-center">
            <RiFilePdfLine className="w-8 h-8 text-emerald-500 mb-1.5" />
            <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">{resumeFile.name}</p>
            <p className="text-[11px] text-emerald-500 mt-0.5">✓ PDF attached successfully</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 flex items-center justify-center mb-2">
              <RiUploadCloud2Line className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
              Click to browse or drop your PDF résumé
            </p>
            <p className="text-[10px] text-zinc-400 mt-0.5">PDF up to 5MB</p>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
        >
          <RiArrowLeftLine className="w-3.5 h-3.5" />
          Back
        </button>
        <button
          type="button"
          onClick={onContinue}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
        >
          <span>Select Focus Areas</span>
          <RiArrowRightLine className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
