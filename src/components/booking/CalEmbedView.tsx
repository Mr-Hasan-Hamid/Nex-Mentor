'use client';

import React, { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

interface Props {
  calLink?: string | null;
  onBookingSuccessful?: (eventData: any) => void;
}

export function CalEmbedView({ calLink, onBookingSuccessful }: Props) {
  const link = calLink || 'peer/30min';

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();
        cal('ui', {
          theme: 'dark',
          styles: {
            branding: {
              brandColor: '#000000',
            },
          },
          hideEventTypeDetails: false,
          layout: 'month_view',
        });

        if (onBookingSuccessful) {
          cal('on', {
            action: 'bookingSuccessful',
            callback: (e: any) => {
              onBookingSuccessful(e.detail?.data);
            },
          });
        }
      } catch (err) {
        console.warn('Cal.com embed initialization notice:', err);
      }
    })();
  }, [onBookingSuccessful]);

  return (
    <div className="w-full min-h-[460px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e]">
      <Cal
        calLink={link}
        style={{ width: '100%', height: '100%', minHeight: '460px', overflow: 'scroll' }}
        config={{ layout: 'month_view' }}
      />
    </div>
  );
}
