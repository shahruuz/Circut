# CutSheet Co. — a Cricut-made goods shop

A complete, ready-to-deploy Next.js e-commerce storefront for selling
personalized items cut on a Cricut machine — keychains, pet tags, decals,
signs, and more.

> **A note on the name:** the store is branded "CutSheet Co." rather than
> using "Cricut" in the shop name. Cricut® is a trademark of Cricut, Inc.
> Using it in your own store's brand name could imply an affiliation that
> doesn't exist. It's completely fine (and normal, see turtletags.com and
> most Etsy shops) to say your products are *made with* a Cricut machine —
> just avoid putting "Cricut" in your own logo or business name. Feel free
> to rename the shop again to whatever you like in [`src/lib/products.js`](./src/lib/products.js),
> [`src/components/Header.js`](./src/components/Header.js) and [`src/components/Footer.js`](./src/components/Footer.js).

## What's included

- **Home page** — hero, value props, category browser, featured products
- **Shop page** — search, category filter, price filter, sorting
- **Product pages** — gallery, personalization field, quantity, related products
- **Cart** — persistent (survives a refresh), quantity editing, free-shipping progress
- **Checkout** — shipping + payment form and order review (demo — see below)
- **About, FAQ, Contact, Shipping, Returns, Privacy, Terms** pages
- Fully responsive, keyboard-accessible, and built with a distinct
  hand-cut / sticker-sheet visual style instead of a generic template look

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| UI | React 18 + Tailwind CSS |
| Cart state | Zustand, persisted to `localStorage` |
| Icons | lucide-react |
| Hosting | Any Next.js host — Vercel is the easiest |

No database and no paid services are required to run this as-is. Product
data lives in a plain JS file.

## Quick start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project structure

```
src/
├── app/                    # Pages (Next.js App Router)
│   ├── page.js             # Home
│   ├── shop/                # Shop grid + filters
│   ├── product/[id]/        # Product detail (id is the product's slug)
│   ├── cart/                # Cart page
│   ├── checkout/            # Checkout form (demo, see note below)
│   ├── about/  faq/  contact/
│   ├── shipping/  returns/  privacy/  terms/
│   ├── layout.js            # Root layout, fonts, header/footer
│   └── globals.css
├── components/              # Header, Footer, ProductCard
├── lib/
│   ├── products.js          # ← Edit this to change what's for sale
│   └── utils.js              # Price/shipping/tax helpers
└── store/
    └── cart.js               # Zustand cart store
```

## Editing your product catalog

Everything for sale lives in one file: `src/lib/products.js`. Each product
is a plain object:

```js
{
  id: 15,
  slug: 'my-new-item',          // used in the URL: /product/my-new-item
  name: 'My New Item',
  category: 'Keychains',        // must match an entry in `categories`
  price: 12.99,
  rating: 4.8,
  reviews: 10,
  image: 'https://...',         // main image
  gallery: ['https://...'],      // 1+ images shown on the product page
  badge: 'New',                  // optional: 'New' | 'Bestseller' | omit
  description: '...',
  details: ['bullet one', 'bullet two'],
  personalizable: true,          // shows a text field on the product page
}
```

Swap the `picsum.photos` placeholder image URLs for real product photos —
any HTTPS image URL works. If you host images on a domain other than
`picsum.photos` or `images.unsplash.com`, add it to `next.config.js` under
`images.remotePatterns`.

## Important: this is a demo checkout

To keep this free and dependency-free out of the box, **the checkout page
does not process real payments** and **the contact form does not send real
emails**. Both are fully built UIs with working client-side state — you
just need to connect them to a real service before taking live orders:

- **Payments:** wire `src/app/checkout/page.js` to
  [Stripe Checkout](https://docs.stripe.com/checkout/quickstart) (simplest)
  or Payment Intents. Only clear the cart after the payment provider
  confirms success.
- **Contact form:** point `src/app/contact/ContactForm.js` at a form
  endpoint like [Formspree](https://formspree.io) or a serverless function
  that sends email via [Resend](https://resend.com).

See `DEPLOYMENT.md` for step-by-step instructions on both.

## License

MIT — see `LICENSE`. Use it, change it, sell things with it.
