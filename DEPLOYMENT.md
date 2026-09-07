# Deployment guide

## Option A: Vercel (recommended)

Vercel is built by the Next.js team and needs zero configuration for this
project.

1. Push the code to GitHub (see `GITHUB_UPLOAD_GUIDE.md`).
2. Go to https://vercel.com/signup and sign up with GitHub.
3. Click **Add New → Project**, select your repo, and click **Deploy**.
4. Vercel auto-detects Next.js — no settings to change.
5. Every future `git push` to `main` auto-deploys.

Free tier covers a store like this comfortably.

## Option B: Netlify

1. Push to GitHub.
2. https://app.netlify.com → **Add new site → Import an existing project**.
3. Pick your repo. Build command: `npm run build`. Publish directory:
   `.next` (Netlify's Next.js runtime handles the rest automatically).
4. Deploy.

## Option C: Any Node host (Railway, Render, Fly.io, a VPS)

```bash
npm install
npm run build
npm start
```

`npm start` serves the production build on port 3000 (override with the
`PORT` env variable). Point your host's build command at `npm run build`
and start command at `npm start`.

## Custom domain

On Vercel: **Project → Settings → Domains → Add**, then update your
registrar's DNS records the way Vercel shows you (usually one `A` record
for the apex domain and one `CNAME` for `www`). DNS changes can take up to
48 hours to propagate.

Cheap registrars: Namecheap, Porkbun. Avoid registrars that auto-renew at a
much higher price after year one — read the renewal price, not just the
first-year price.

## Add real payments (Stripe)

The checkout page (`src/app/checkout/page.js`) currently just shows a
confirmation screen and clears the cart — it does not charge a card. The
most reliable way to add real payments without handling card data
yourself is **Stripe Checkout**:

1. Create a Stripe account at https://dashboard.stripe.com/register.
2. Install the Stripe SDK:
   ```bash
   npm install stripe
   ```
3. Add your secret key to Vercel's environment variables (Project →
   Settings → Environment Variables): `STRIPE_SECRET_KEY=sk_live_...`.
4. Create an API route, e.g. `src/app/api/checkout/route.js`, that takes
   the cart items and creates a Stripe Checkout Session server-side (see
   https://docs.stripe.com/checkout/quickstart — the "Next.js" tab matches
   this project's App Router structure).
5. In `checkout/page.js`, replace the `handlePlaceOrder` function's demo
   logic with a `fetch('/api/checkout', ...)` call, then redirect the
   browser to the `url` Stripe returns.
6. Only call `clearCart()` after the customer is redirected back to a
   success page — add one at `src/app/checkout/success/page.js`.

Stripe handles all card storage and PCI compliance; your app never
touches raw card numbers.

## Wire up the contact form

`src/app/contact/ContactForm.js` currently just shows a success message
locally — no message is actually sent anywhere. Two easy options:

**Formspree (no backend code needed):**
1. Create a form at https://formspree.io and copy its endpoint URL.
2. In `ContactForm.js`, change the `handleSubmit` function to `fetch` that
   URL with the form data instead of the `setTimeout` placeholder.

**Resend + a Next.js API route (more control):**
1. `npm install resend`, get an API key from https://resend.com.
2. Add `RESEND_API_KEY` to your host's environment variables.
3. Create `src/app/api/contact/route.js` that calls the Resend SDK to send
   yourself an email with the submitted fields.
4. Point `ContactForm.js`'s `fetch` at `/api/contact`.

## Analytics, uptime, and error tracking (optional)

- **Analytics:** Vercel Analytics (one click in the dashboard) or Google
  Analytics (https://analytics.google.com).
- **Uptime alerts:** https://uptimerobot.com — free tier is enough for a
  small store.
- **Error tracking:** https://sentry.io has an official Next.js
  integration (`npx @sentry/wizard@latest -i nextjs`).

## Troubleshooting

**Build fails on the host but works locally**
Run `rm -rf node_modules package-lock.json && npm install && npm run
build` locally to confirm it's not a stale lockfile, then check the host's
Node version matches `engines.node` in `package.json` (18.17+).

**Images don't load in production**
Any external image domain must be listed in `next.config.js` under
`images.remotePatterns`, or the build/runtime will reject it.

**Cart appears empty right after deploying**
That's expected the first time — the cart is stored in each visitor's own
browser (`localStorage`), not on the server, so it starts empty for
everyone until they add something.
