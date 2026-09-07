'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className="cut-line overflow-hidden rounded-sticker">
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display font-semibold"
              aria-expanded={isOpen}
            >
              {item.q}
              <ChevronDown
                size={20}
                className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <p className="border-t-2 border-ink/10 px-5 py-4 text-sm text-ink-soft">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
