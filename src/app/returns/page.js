export const metadata = {
  title: 'Returns & exchanges',
  description: 'Our policy for damaged items, mistakes, and personalized-product returns.',
};

export default function ReturnsPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <p className="section-label">Good to know</p>
      <h1 className="mt-2 text-4xl font-bold">Returns & exchanges</h1>

      <div className="mt-8 flex flex-col gap-6 text-ink-soft">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Damaged or incorrect items</h2>
          <p className="mt-2">
            If something arrives broken, defective, or different from what
            you ordered, contact us within 14 days with a photo. We&apos;ll
            send a free replacement or a full refund — no need to ship
            anything back.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Personalized items</h2>
          <p className="mt-2">
            Because most products are custom-cut with your text or design,
            we can&apos;t accept returns for a simple change of mind once
            cutting has started. If you catch a mistake fast, we can often
            fix it before it ships — reach out as soon as possible.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Non-personalized items</h2>
          <p className="mt-2">
            Unpersonalized items (like sticker sheets or unfinished gift
            tags) can be returned unused within 30 days for a refund of the
            item price. You&apos;ll cover return shipping unless the item
            arrived damaged.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">How to start a return</h2>
          <p className="mt-2">
            Message us through the{' '}
            <a href="/contact" className="font-semibold text-teal-dark hover:underline">
              contact page
            </a>{' '}
            with your order number and we&apos;ll walk you through the next
            step.
          </p>
        </section>
      </div>
    </div>
  );
}
