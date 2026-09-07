import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star, Truck, ShieldCheck } from 'lucide-react';
import { getProductBySlug, getRelatedProducts, products } from '@/lib/products';
import { formatPrice } from '@/lib/utils';
import ProductCard from '@/components/ProductCard';
import AddToCartForm from './AddToCartForm';

export function generateStaticParams() {
  return products.map((p) => ({ id: p.slug }));
}

export function generateMetadata({ params }) {
  const product = getProductBySlug(params.id);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.id);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <div className="container-page py-10">
      <nav className="mb-6 text-sm text-ink-soft">
        <Link href="/shop" className="hover:underline">Shop</Link>
        <span className="mx-2">/</span>
        <Link href={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:underline">
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="card-sticker overflow-hidden p-3">
            <div className="relative aspect-square overflow-hidden rounded-[0.9rem] bg-kraft-light">
              <Image
                src={product.gallery[0]}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              {product.badge && (
                <span className="absolute left-4 top-4 rounded-full bg-mustard px-3 py-1 text-xs font-bold text-ink">
                  {product.badge}
                </span>
              )}
            </div>
          </div>
          {product.gallery.length > 1 && (
            <div className="mt-3 grid grid-cols-4 gap-3">
              {product.gallery.slice(1).map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-xl border-2 border-ink">
                  <Image src={src} alt={product.name} fill sizes="120px" className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details + purchase */}
        <div>
          <p className="section-label">{product.category}</p>
          <h1 className="mt-1 text-3xl font-bold sm:text-4xl">{product.name}</h1>

          <div className="mt-3 flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1 text-mustard-dark">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.round(product.rating) ? 'fill-mustard text-mustard' : 'text-kraft-dark'}
                />
              ))}
            </div>
            <span className="font-semibold text-ink-soft">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="mt-5 font-display text-3xl font-bold text-coral-dark">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 text-ink-soft">{product.description}</p>

          <ul className="mt-5 space-y-2 text-sm text-ink-soft">
            {product.details.map((detail) => (
              <li key={detail} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <AddToCartForm product={product} />
          </div>

          <div className="mt-8 grid gap-3 border-t-2 border-kraft pt-6 sm:grid-cols-2">
            <div className="flex items-start gap-3 text-sm text-ink-soft">
              <Truck size={20} className="shrink-0 text-teal" />
              Ships in 2–4 business days. Free shipping over $45.
            </div>
            <div className="flex items-start gap-3 text-sm text-ink-soft">
              <ShieldCheck size={20} className="shrink-0 text-teal" />
              Arrived damaged or wrong? We reprint or refund, no questions asked.
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold">You might also like</h2>
          <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
