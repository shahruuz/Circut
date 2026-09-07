import { Suspense } from 'react';
import ShopContent from './ShopContent';

export const metadata = {
  title: 'Shop all products',
  description: 'Browse every handmade, Cricut-cut item in the CutSheet Co. shop.',
};

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="container-page py-16">Loading shop…</div>}>
      <ShopContent />
    </Suspense>
  );
}
