# Quickstart (5 minutes)

## 1. Install Node.js

You need Node 18.17 or newer. Check with:

```bash
node --version
```

If you don't have it, download the LTS version from https://nodejs.org.

## 2. Install dependencies

From inside the `cricut-shop` folder:

```bash
npm install
```

## 3. Run it

```bash
npm run dev
```

Open http://localhost:3000 — the store is now running on your computer.

## 4. Make it yours

- Products: edit `src/lib/products.js`
- Shop name / logo text: `src/components/Header.js`
- Footer links & socials: `src/components/Footer.js`
- Colors: `tailwind.config.js` → `theme.extend.colors`

## 5. Put it on the internet

See `GITHUB_UPLOAD_GUIDE.md` for pushing to GitHub and deploying to Vercel
(free, ~15 minutes, no credit card required).

## 6. Before you take real orders

Read the "Important: this is a demo checkout" section in `README.md` —
the checkout and contact form need to be connected to a real payment
provider and email service first. `DEPLOYMENT.md` walks through both.
