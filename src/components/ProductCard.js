import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

const BADGE_STYLES = {
  Bestseller: 'bg-mustard text-ink',
  New: 'bg-teal text-white',
};

export default function ProductCard({ product, rotate = false }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className={`card-sticker group block overflow-hidden ${rotate ? 'sm:-rotate-1 sm:hover:rotate-0' : ''}`}
    >
      <div className="relative aspect-square overflow-hidden rounded-t-sticker bg-kraft-light">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${
              BADGE_STYLES[product.badge] || 'bg-coral text-white'
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-dark">
          {product.category}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-ink">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-1 text-sm text-ink-soft">
          <Star size={14} className="fill-mustard text-mustard" />
          <span className="font-semibold">{product.rating}</span>
          <span>({product.reviews})</span>
        </div>

        <p className="mt-2 font-display text-lg font-bold text-coral-dark">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
