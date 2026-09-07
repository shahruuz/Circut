export const metadata = {
  title: 'Privacy policy',
  description: 'What information CutSheet Co. collects and how it is used.',
};

export default function PrivacyPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <p className="section-label">Legal</p>
      <h1 className="mt-2 text-4xl font-bold">Privacy policy</h1>
      <p className="mt-4 text-sm text-ink-soft">Last updated: {new Date().getFullYear()}</p>

      <div className="mt-8 flex flex-col gap-6 text-ink-soft">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">What we collect</h2>
          <p className="mt-2">
            When you place an order or send a message, we collect the
            information you provide directly — name, email, shipping
            address, and any personalization text or files you send us. We
            also use basic, privacy-respecting analytics to understand which
            pages get visited.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">How it&apos;s used</h2>
          <p className="mt-2">
            Order information is used only to make, ship, and support your
            order. We don&apos;t sell customer information to third parties.
            Email addresses are used for order updates and, only if you
            opt in, occasional shop news.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Payment information</h2>
          <p className="mt-2">
            Payments are processed by a third-party payment provider. We
            never see or store your full card number on our own servers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Cart data</h2>
          <p className="mt-2">
            Items you add to your cart are stored in your browser&apos;s
            local storage so your cart persists between visits. This data
            stays on your device until you check out or clear your browser
            storage.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Your choices</h2>
          <p className="mt-2">
            You can ask us to see, correct, or delete the personal
            information we hold about you at any time by{' '}
            <a href="/contact" className="font-semibold text-teal-dark hover:underline">
              contacting us
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
