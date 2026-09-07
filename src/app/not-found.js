import Link from 'next/link';
import { Scissors } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center py-24 text-center">
      <Scissors size={40} className="text-coral" />
      <h1 className="mt-5 text-3xl font-bold">This page got cut out</h1>
      <p className="mt-3 max-w-sm text-ink-soft">
        We couldn&apos;t find what you&apos;re looking for. It may have been
        moved or the link might be off.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </div>
  );
}
