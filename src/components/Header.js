'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag, Scissors } from 'lucide-react';
import { useCartStore } from '@/store/cart';

const NAV_LINKS = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'Our Story' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const itemCount = useCartStore((state) => state.getItemCount());

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-coral text-white">
            <Scissors size={16} strokeWidth={2.5} />
          </span>
          CutSheet Co.
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold text-ink-soft transition-colors hover:text-coral-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/cart"
            aria-label="View cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <ShoppingBag size={20} />
            {mounted && itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-coral px-1 text-xs font-bold text-white">
                {itemCount}
              </span>
            )}
          </Link>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t-2 border-ink bg-paper md:hidden">
          <div className="container-page flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-kraft py-3 font-semibold text-ink-soft last:border-none"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
