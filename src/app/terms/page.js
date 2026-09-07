export const metadata = {
  title: 'Terms & conditions',
  description: 'The terms that apply when you shop with CutSheet Co.',
};

export default function TermsPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <p className="section-label">Legal</p>
      <h1 className="mt-2 text-4xl font-bold">Terms & conditions</h1>
      <p className="mt-4 text-sm text-ink-soft">Last updated: {new Date().getFullYear()}</p>

      <div className="mt-8 flex flex-col gap-6 text-ink-soft">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Orders</h2>
          <p className="mt-2">
            Placing an order is an offer to buy. We&apos;ll confirm your
            order by email once it&apos;s accepted. Prices are shown in US
            dollars and don&apos;t include tax or shipping until checkout.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Personalization content</h2>
          <p className="mt-2">
            You&apos;re responsible for the accuracy of any text you submit
            for personalization. We reserve the right to decline requests
            containing offensive, infringing, or unlawful content.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Intellectual property</h2>
          <p className="mt-2">
            Designs, photos, and site content belong to CutSheet Co. unless
            otherwise noted. Please don&apos;t reproduce our designs for
            resale without permission.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Limitation of liability</h2>
          <p className="mt-2">
            Products are intended for their described use. CutSheet Co. is
            not liable for damages arising from misuse or improper
            installation of decals, signs, or other items.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Changes</h2>
          <p className="mt-2">
            We may update these terms occasionally. Continued use of the
            site after changes means you accept the updated terms.
          </p>
        </section>
      </div>
    </div>
  );
}
