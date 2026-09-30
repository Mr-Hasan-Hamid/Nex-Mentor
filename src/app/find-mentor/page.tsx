'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/navigation/Navbar';
import { SupabaseStyleFooter } from '@/components/landing/SupabaseStyleFooter';
import { AlumniMentorCard, AlumniCardData } from '@/components/landing/AlumniMentorCard';
import BookingFlow from '@/components/booking/BookingFlow';
import { DirectoryPagination } from '@/components/directory/DirectoryPagination';
import { ALL_ALUMNI } from '@/data/alumniDirectoryData';
import { RiSearchLine, RiUserSearchLine } from '@remixicon/react';

const DOMAINS = ['All Domains', 'System Design', 'DSA', 'Cloud', 'Web Dev', 'Java', 'Machine Learning'];
const PAGE_SIZE = 24;

export default function FindMentorPage() {
  const [search, setSearch] = useState('');
  const [activeDomain, setActiveDomain] = useState('All Domains');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMentor, setSelectedMentor] = useState<AlumniCardData | null>(null);

  const filtered = useMemo(() => {
    return ALL_ALUMNI.filter((m) => {
      const matchSearch =
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.company.toLowerCase().includes(search.toLowerCase()) ||
        m.jobTitle.toLowerCase().includes(search.toLowerCase());
      const matchDomain =
        activeDomain === 'All Domains' ||
        m.expertise.some((e) => e.toLowerCase().includes(activeDomain.toLowerCase())) ||
        m.domain.toLowerCase().includes(activeDomain.toLowerCase());
      return matchSearch && matchDomain;
    });
  }, [search, activeDomain]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE) || 1;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginated = filtered.slice(startIndex, startIndex + PAGE_SIZE);

  const handleDomainSelect = (dom: string) => {
    setActiveDomain(dom);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearch(val);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-[11px] font-mono font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">
            // ALUMNI DIRECTORY
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Explore Alumni Mentors
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2">
            Schedule 30-minute mock interviews with verified campus graduates at global engineering companies.
          </p>
        </div>

        {/* Search & Domain Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-10 p-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-[#0c0c0e]">
          <div className="relative w-full sm:w-80">
            <RiSearchLine className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, company, or role..."
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {DOMAINS.map((dom) => (
              <button
                key={dom}
                type="button"
                onClick={() => handleDomainSelect(dom)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                  activeDomain === dom
                    ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold'
                    : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400'
                }`}
              >
                {dom}
              </button>
            ))}
          </div>
        </div>

        {/* 4x6 (24 Cards) Grid of Paginated Alumni */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginated.map((mentor) => (
              <AlumniMentorCard
                key={mentor.id}
                mentor={mentor}
                onSelectMentor={setSelectedMentor}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl p-8">
            <RiUserSearchLine className="w-10 h-10 text-zinc-400 mx-auto mb-2" />
            <p className="text-sm font-bold text-zinc-900 dark:text-white">No mentors found</p>
            <p className="text-xs text-zinc-500 mt-1">Try clearing your search query or selecting &quot;All Domains&quot;.</p>
            <button
              onClick={() => { setSearch(''); setActiveDomain('All Domains'); }}
              className="mt-4 px-4 py-2 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Interactive Pagination with Counter */}
        <DirectoryPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filtered.length}
          startIndex={startIndex}
          endIndex={startIndex + paginated.length}
          onPageChange={(p) => {
            setCurrentPage(p);
            window.scrollTo({ top: 180, behavior: 'smooth' });
          }}
        />
      </main>

      <SupabaseStyleFooter />

      {/* Booking Popup */}
      {selectedMentor && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedMentor(null)}
        >
          <div
            className="relative w-full max-w-2xl sm:max-w-3xl my-8 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <BookingFlow
              mentor={{
                id: selectedMentor.id,
                name: selectedMentor.name,
                company: selectedMentor.company,
                jobTitle: selectedMentor.jobTitle,
                domain: selectedMentor.domain,
                expertise: selectedMentor.expertise,
                calUsername: (selectedMentor as any).calUsername,
              }}
              onClose={() => setSelectedMentor(null)}
              onSuccess={() => setTimeout(() => setSelectedMentor(null), 2000)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
