import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Scissors, Truck, Heart, PenLine } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/products';

const FEATURED_SLUGS = [
  'motel-acrylic-keychain',
  'pet-name-tag-set',
  'monogram-wall-art',
  'wedding-cake-topper',
];

const CATEGORY_IMAGES = {
  Keychains: 'https://picsum.photos/seed/cat-keychains/500/500',
  'Pet Tags': 'https://picsum.photos/seed/cat-pettags/500/500',
  'Decals & Stickers': 'https://picsum.photos/seed/cat-decals/500/500',
  'Home Signs': 'https://picsum.photos/seed/cat-signs/500/500',
  Wedding: 'https://picsum.photos/seed/cat-wedding/500/500',
  'Wall Art': 'https://picsum.photos/seed/cat-wallart/500/500',
  Tumblers: 'https://picsum.photos/seed/cat-tumblers/500/500',
};

export default function HomePage() {
  const featured = products.filter((p) => FEATURED_SLUGS.includes(p.slug));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-kraft-light">
        <div className="absolute inset-x-0 bottom-0 h-2 bg-perf" aria-hidden="true" />
        <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="section-label">Cut to order, one sheet at a time</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.1] text-ink sm:text-5xl">
              Little things,
              <br />
              cut just for you.
            </h1>
            <p className="mt-5 max-w-md text-lg text-ink-soft">
              Acrylic keychains, pet tags, decals, and signs — designed and cut
              to order on a Cricut Maker, then assembled by hand before they
              ship.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/shop" className="btn-primary">
                Shop everything
                <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="btn-outline">
                How it&apos;s made
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="card-sticker rotate-2 overflow-hidden p-3">
              <div className="relative aspect-square overflow-hidden rounded-[0.9rem]">
                <Image
                  src="https://picsum.photos/seed/hero-keychain/700/700"
                  alt="A personalized acrylic keychain fresh off the cutting mat"
                  fill
                  priority
                  sizes="(min-width: 1024px) 384px, 80vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="card-sticker absolute -bottom-6 -left-8 hidden -rotate-6 p-2 shadow-cut-coral sm:block">
              <div className="relative h-28 w-28 overflow-hidden rounded-xl">
                <Image
                  src="https://picsum.photos/seed/hero-tag/300/300"
                  alt="A pet name tag detail"
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-y-2 border-ink bg-paper">
        <div className="container-page grid grid-cols-1 divide-y-2 divide-ink sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0">
          {[
            { icon: Scissors, title: 'Made to order', copy: 'Every item is cut after you order — nothing sits pre-made on a shelf.' },
            { icon: PenLine, title: 'Truly personal', copy: 'Add a name, a date, or a phone number right on the product page.' },
            { icon: Truck, title: 'Ships in 2–4 days', copy: 'Small batches, packed by hand, out the door within days.' },
          ].map(({ icon: Icon, title, copy }) => (
            <div key={title} className="flex items-start gap-4 px-2 py-6 sm:px-8">
              <Icon className="mt-1 shrink-0 text-coral" size={28} />
              <div>
                <p className="font-display text-lg font-bold">{title}</p>
                <p className="mt-1 text-sm text-ink-soft">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container-page py-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="section-label">Browse by kind</p>
            <h2 className="mt-2 text-3xl font-bold">Find your shape</h2>
          </div>
          <Link href="/shop" className="hidden font-semibold text-teal-dark hover:underline sm:block">
            View all products
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/shop?category=${encodeURIComponent(cat)}`}
              className="group text-center"
            >
              <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-full border-2 border-ink">
                <Image
                  src={CATEGORY_IMAGES[cat]}
                  alt={cat}
                  fill
                  sizes="150px"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="mt-3 font-semibold text-ink-soft group-hover:text-coral-dark">{cat}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-teal-light/40 py-16">
        <div className="container-page">
          <p className="section-label">Shopper favorites</p>
          <h2 className="mt-2 text-3xl font-bold">Most-cut this month</h2>

          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} rotate={i % 2 === 0} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/shop" className="btn-secondary">
              See the full shop
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust / story snippet */}
      <section className="container-page py-16">
        <div className="cut-line flex flex-col items-center gap-6 rounded-sticker p-10 text-center sm:p-14">
          <Heart className="text-coral" size={32} />
          <h2 className="max-w-xl text-2xl font-bold sm:text-3xl">
            A one-person cutting table that grew into a small shop
          </h2>
          <p className="max-w-lg text-ink-soft">
            CutSheet Co. started on a kitchen table with a single Cricut Maker
            and a stack of vinyl scraps. Every order still gets opened,
            weeded, and packed by hand — we just have more mats going at once now.
          </p>
          <Link href="/about" className="font-semibold text-teal-dark hover:underline">
            Read the full story →
          </Link>
        </div>
      </section>
    </>
  );
}
