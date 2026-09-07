import FaqAccordion from './FaqAccordion';

export const metadata = {
  title: 'FAQ',
  description: 'Answers to the questions we hear most about ordering, personalizing, and shipping.',
};

const FAQS = [
  {
    q: 'How long does an order take to make?',
    a: 'Most items are cut and assembled within 2–4 business days of ordering, since nothing is pre-made. Wedding and wall art pieces can take up to a week during busy seasons — the product page will note it if so.',
  },
  {
    q: 'Can I change the personalization after ordering?',
    a: "Yes, as long as cutting hasn't started yet. Message us through the contact page with your order number within a few hours of ordering and we'll update it.",
  },
  {
    q: 'What if my item arrives damaged?',
    a: "Send a photo through the contact page and we'll send a free replacement or refund — no return shipping needed.",
  },
  {
    q: 'Do you ship internationally?',
    a: 'Currently we ship within the United States and Canada. We\'re working on expanding — join the newsletter in the footer for updates.',
  },
  {
    q: 'Are the acrylic and vinyl materials safe for kids?',
    a: 'Yes. All acrylic pieces have sanded, rounded edges, and our vinyl is non-toxic and safe for indoor use, including nurseries.',
  },
  {
    q: 'Can I order a custom design that\'s not in the shop?',
    a: 'Often, yes. Send a description or reference photo through the contact page and we\'ll let you know if it\'s possible and what it would cost.',
  },
  {
    q: 'How do I care for a vinyl decal?',
    a: 'Apply to a clean, dry, smooth surface and avoid pressing on it for 24 hours. Hand wash items with permanent vinyl rather than running them through a dishwasher unless the listing says dishwasher-safe.',
  },
  {
    q: 'Do you offer wholesale or bulk pricing?',
    a: 'We do for orders of 20+ of the same design. Reach out through the contact page with quantities and we\'ll send a quote.',
  },
];

export default function FaqPage() {
  return (
    <div className="container-page py-14">
      <p className="section-label">Questions</p>
      <h1 className="mt-2 text-4xl font-bold">Frequently asked</h1>
      <p className="mt-4 max-w-xl text-ink-soft">
        Can&apos;t find what you&apos;re looking for? <a href="/contact" className="font-semibold text-teal-dark hover:underline">Send us a message</a>.
      </p>

      <div className="mt-10 max-w-2xl">
        <FaqAccordion faqs={FAQS} />
      </div>
    </div>
  );
}
