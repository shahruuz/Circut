'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);

    // -----------------------------------------------------------------
    // No backend is wired up by default. To actually deliver messages,
    // point this at a form endpoint (Formspree, Resend, a Vercel
    // serverless function, etc.) and POST the form data there — see
    // DEPLOYMENT.md → "Wire up the contact form".
    // -----------------------------------------------------------------
    await new Promise((resolve) => setTimeout(resolve, 500));

    setSending(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="cut-line flex flex-col items-center gap-3 rounded-sticker p-10 text-center">
        <CheckCircle2 className="text-teal" size={40} />
        <p className="font-display text-xl font-bold">Message sent</p>
        <p className="text-ink-soft">Thanks for reaching out — we&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="cut-line flex flex-col gap-4 rounded-sticker p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm font-semibold">
          Name
          <input required name="name" className="rounded-lg border-2 border-ink px-4 py-2 font-normal" />
        </label>
        <label className="flex flex-col gap-1 text-sm font-semibold">
          Email
          <input required type="email" name="email" className="rounded-lg border-2 border-ink px-4 py-2 font-normal" />
        </label>
      </div>
      <label className="flex flex-col gap-1 text-sm font-semibold">
        Order number (optional)
        <input name="order" className="rounded-lg border-2 border-ink px-4 py-2 font-normal" />
      </label>
      <label className="flex flex-col gap-1 text-sm font-semibold">
        Message
        <textarea required name="message" rows={5} className="rounded-lg border-2 border-ink px-4 py-2 font-normal" />
      </label>
      <button type="submit" disabled={sending} className="btn-primary self-start disabled:opacity-60">
        {sending ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
