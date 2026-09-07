import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold">CutSheet Co.</p>
          <p className="mt-3 text-sm text-paper/70">
            Every piece is cut, weeded, and assembled by hand on a Cricut Maker —
            no two batches are ever quite identical.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="CutSheet Co. on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/30 hover:border-coral hover:text-coral"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="CutSheet Co. on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/30 hover:border-coral hover:text-coral"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="section-label text-mustard">Shop</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/shop" className="hover:text-coral">All products</Link></li>
            <li><Link href="/shop?category=Keychains" className="hover:text-coral">Keychains</Link></li>
            <li><Link href="/shop?category=Pet+Tags" className="hover:text-coral">Pet tags</Link></li>
            <li><Link href="/shop?category=Wedding" className="hover:text-coral">Wedding</Link></li>
          </ul>
        </div>

        <div>
          <p className="section-label text-mustard">Help</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/faq" className="hover:text-coral">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-coral">Shipping</Link></li>
            <li><Link href="/returns" className="hover:text-coral">Returns</Link></li>
            <li><Link href="/contact" className="hover:text-coral">Contact us</Link></li>
          </ul>
        </div>

        <div>
          <p className="section-label text-mustard">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-coral">Our story</Link></li>
            <li><Link href="/privacy" className="hover:text-coral">Privacy policy</Link></li>
            <li><Link href="/terms" className="hover:text-coral">Terms & conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/15 py-5">
        <p className="container-page text-center text-xs text-paper/60">
          © {year} CutSheet Co. All rights reserved. Made with a Cricut Maker and a lot of vinyl scraps.
        </p>
      </div>
    </footer>
  );
}
