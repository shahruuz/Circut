export const metadata = {
  title: 'Shipping',
  description: 'Processing times, shipping speeds, and rates for CutSheet Co. orders.',
};

export default function ShippingPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <p className="section-label">Good to know</p>
      <h1 className="mt-2 text-4xl font-bold">Shipping</h1>

      <div className="prose-sm mt-8 flex flex-col gap-6 text-ink-soft">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Processing time</h2>
          <p className="mt-2">
            Everything is made to order. Most items are cut, assembled, and
            packed within 2–4 business days. Wedding and large wall art
            pieces can take up to 7 business days, especially in spring and
            around the holidays — check the product page for specifics.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Shipping rates</h2>
          <ul className="mt-2 list-disc pl-5">
            <li>Standard shipping (3–6 business days): $4.50 flat rate</li>
            <li>Orders of $45 or more: free standard shipping</li>
            <li>Expedited shipping is available at checkout on select orders</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Tracking</h2>
          <p className="mt-2">
            You&apos;ll get a tracking link by email as soon as your order
            ships. If it hasn&apos;t arrived within the expected window,{' '}
            <a href="/contact" className="font-semibold text-teal-dark hover:underline">
              contact us
            </a>{' '}
            and we&apos;ll look into it right away.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Where we ship</h2>
          <p className="mt-2">
            Currently the United States and Canada. International shipping
            is on the roadmap.
          </p>
        </section>
      </div>
    </div>
  );
}
