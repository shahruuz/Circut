import Image from 'next/image';
import { Scissors, Package, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Our story',
  description: 'How CutSheet Co. started, and how every order still gets made.',
};

export default function AboutPage() {
  return (
    <div className="container-page py-14">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="section-label">Our story</p>
          <h1 className="mt-2 text-4xl font-bold">From one Cricut to a real little shop</h1>
          <p className="mt-5 text-ink-soft">
            CutSheet Co. began the way a lot of craft shops do — with one
            machine, a kitchen table, and an order from a stranger on the
            internet who wanted a keychain with her dog&apos;s name on it.
            That first order shipped in a hand-folded box with a sticker
            sealing the flap. Every order since has too.
          </p>
          <p className="mt-4 text-ink-soft">
            We now run a small line-up of cutting machines instead of just
            one, but nothing about the process changed much: each design is
            still set up, cut, weeded, and assembled one at a time, checked
            by hand before it goes in a box.
          </p>
        </div>
        <div className="card-sticker -rotate-1 overflow-hidden p-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[0.9rem]">
            <Image
              src="https://picsum.photos/seed/about-workshop/900/700"
              alt="A small home workshop with a cutting machine and finished keychains"
              fill
              sizes="(min-width: 1024px) 500px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          {
            icon: Scissors,
            title: 'Cut in small batches',
            copy: 'We rarely cut more than a day of orders ahead, so what ships is fresh, not warehoused.',
          },
          {
            icon: Package,
            title: 'Packed by hand',
            copy: 'Every box is folded, filled, and sealed by the same small team that runs the cutters.',
          },
          {
            icon: Sparkles,
            title: 'Made to be personal',
            copy: 'Most items take a name, date, or short message — that customization is the whole point.',
          },
        ].map(({ icon: Icon, title, copy }) => (
          <div key={title} className="cut-line rounded-sticker p-6">
            <Icon className="text-coral" size={28} />
            <p className="mt-3 font-display text-lg font-bold">{title}</p>
            <p className="mt-1 text-sm text-ink-soft">{copy}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
