import { Baloo_2, Work_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-baloo',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-work',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'CutSheet Co. — Handmade Cricut-Cut Keepsakes',
    template: '%s · CutSheet Co.',
  },
  description:
    'Personalized acrylic keychains, pet tags, decals, and signs — designed and cut one order at a time on a Cricut Maker.',
  openGraph: {
    title: 'CutSheet Co. — Handmade Cricut-Cut Keepsakes',
    description:
      'Personalized acrylic keychains, pet tags, decals, and signs — designed and cut one order at a time.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${baloo.variable} ${workSans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
