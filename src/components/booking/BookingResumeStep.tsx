'use client';

import React, { useState } from 'react';
import {
  RiUploadCloud2Line,
  RiFilePdfLine,
  RiLoader4Line,
  RiArrowRightLine,
  RiArrowLeftLine,
  RiDeleteBinLine,
  RiAlertLine,
  RiCheckLine,
} from '@remixicon/react';

interface Props {
  resumeFile: File | null;
  uploading: boolean;
  onFileUpload: (file: File) => void;
  onRemoveFile: () => void;
  onBack: () => void;
  onContinue: () => void;
}

export function BookingResumeStep({
  resumeFile,
  uploading,
  onFileUpload,
  onRemoveFile,
  onBack,
  onContinue,
}: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [shake, setShake] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const processFile = (file?: File) => {
    if (!file) return;
    if (file.type !== 'application/pdf' && !file.name.endsWith('.pdf')) {
      setErrorMsg('Please upload a PDF file only.');
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setErrorMsg(null);
    onFileUpload(file);
  };

  const handleContinueClick = () => {
    if (!resumeFile) {
      setShake(true);
      setErrorMsg('Please upload your résumé PDF before continuing.');
      setTimeout(() => setShake(false), 500);
      return;
    }
    setErrorMsg(null);
    onContinue();
  };

  const formatSize = (bytes: number) =>
    bytes < 1048576 ? `${(bytes / 1024).toFixed(0)} KB` : `${(bytes / 1048576).toFixed(1)} MB`;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-zinc-950 dark:text-white flex items-center gap-1.5">
          <RiFilePdfLine className="w-4 h-4 text-zinc-900 dark:text-white" />
          <span>Attach Your Résumé (PDF Required)</span>
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
          Your mentor reviews your résumé to ask real-world questions tailored to your projects.
        </p>
      </div>

      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => { e.preventDefault(); setIsDragging(false); processFile(e.dataTransfer.files?.[0]); }}
        className={`relative rounded-2xl border-2 border-dashed p-8 text-center transition-all ${
          isDragging
            ? 'border-zinc-950 dark:border-white bg-zinc-100/80 dark:bg-zinc-800/60 scale-[1.01]'
            : resumeFile
            ? 'border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/30'
            : errorMsg && shake
            ? 'border-rose-500/80 bg-rose-500/5'
            : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-[#121214] hover:border-zinc-400'
        } ${shake ? 'animate-shake' : ''}`}
      >
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => processFile(e.target.files?.[0])}
          disabled={uploading}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full disabled:cursor-not-allowed"
        />

        {uploading ? (
          <div className="flex flex-col items-center justify-center py-2">
            <RiLoader4Line className="w-8 h-8 text-zinc-900 dark:text-white animate-spin mb-2" />
            <p className="text-xs font-semibold text-zinc-900 dark:text-white">Uploading résumé...</p>
          </div>
        ) : resumeFile ? (
          <div className="flex items-center justify-between p-3.5 bg-white dark:bg-[#18181b] rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm max-w-md mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center shrink-0">
                <RiFilePdfLine className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-zinc-900 dark:text-white truncate max-w-[200px] sm:max-w-xs">{resumeFile.name}</p>
                <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 mt-0.5">
                  <span>{formatSize(resumeFile.size)}</span>
                  <span>•</span>
                  <span className="text-emerald-500 flex items-center gap-0.5 font-semibold"><RiCheckLine className="w-3 h-3" /> Ready</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onRemoveFile(); }}
              title="Remove file"
              className="w-8 h-8 rounded-lg text-zinc-400 hover:text-rose-500 hover:bg-rose-500/10 flex items-center justify-center transition-colors z-10"
            >
              <RiDeleteBinLine className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-3">
            <div className="w-12 h-12 rounded-2xl bg-zinc-200/70 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center mb-3">
              <RiUploadCloud2Line className="w-6 h-6" />
            </div>
            <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
              Drag and drop your PDF résumé here, or <span className="underline">browse</span>
            </p>
            <p className="text-[11px] font-mono text-zinc-400 mt-1">Supports PDF format up to 10MB</p>
          </div>
        )}
      </div>

      {errorMsg && (
        <div className="flex items-center gap-2 p-2.5 bg-rose-500/10 border border-rose-500/20 rounded-lg text-xs text-rose-500">
          <RiAlertLine className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors"
        >
          <RiArrowLeftLine className="w-3.5 h-3.5" />
          <span>Back</span>
        </button>

        <button
          type="button"
          onClick={handleContinueClick}
          className={`px-5 py-2.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm ${
            !resumeFile
              ? 'opacity-40 cursor-not-allowed hover:bg-zinc-950 dark:hover:bg-white'
              : 'hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[1.01]'
          } ${shake ? 'animate-shake' : ''}`}
        >
          <span>Select Focus Areas</span>
          <RiArrowRightLine className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
