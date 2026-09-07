'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { formatPrice, calculateShipping, calculateTax, FREE_SHIPPING_THRESHOLD } from '@/lib/utils';

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  useEffect(() => setMounted(true), []);

  const subtotal = mounted ? items.reduce((sum, item) => sum + item.price * item.quantity, 0) : 0;
  const shipping = calculateShipping(subtotal);
  const tax = calculateTax(subtotal);
  const total = subtotal + shipping + tax;
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  if (!mounted) {
    return <div className="container-page py-16" />;
  }

  if (items.length === 0) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="text-3xl font-bold">Your cart is empty</h1>
        <p className="mt-3 text-ink-soft">Nothing cut yet — let&apos;s find something worth making.</p>
        <Link href="/shop" className="btn-primary mt-6 inline-flex">
          Browse the shop
          <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">Your cart</h1>

      {remainingForFreeShipping > 0 ? (
        <p className="mt-2 text-sm text-teal-dark">
          Add {formatPrice(remainingForFreeShipping)} more for free shipping.
        </p>
      ) : (
        <p className="mt-2 text-sm text-teal-dark">You&apos;ve unlocked free shipping 🎉</p>
      )}

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_320px]">
        <ul className="flex flex-col gap-4">
          {items.map((item) => (
            <li key={item.lineId} className="cut-line flex gap-4 rounded-sticker p-4">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-kraft-light">
                <Image src={item.image} alt={item.name} fill sizes="96px" className="object-cover" />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <p className="font-display font-bold">{item.name}</p>
                  {item.personalization && (
                    <p className="text-sm text-ink-soft">Personalized: &ldquo;{item.personalization}&rdquo;</p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center rounded-full border-2 border-ink">
                    <button
                      aria-label="Decrease quantity"
                      onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                      className="flex h-9 w-9 items-center justify-center"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                    <button
                      aria-label="Increase quantity"
                      onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                      className="flex h-9 w-9 items-center justify-center"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-display font-bold">{formatPrice(item.price * item.quantity)}</span>
                    <button
                      aria-label={`Remove ${item.name}`}
                      onClick={() => removeItem(item.lineId)}
                      className="text-ink-soft hover:text-coral-dark"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-sticker border-2 border-ink p-6">
          <h2 className="font-display text-xl font-bold">Order summary</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-ink-soft">Subtotal</dt>
              <dd className="font-semibold">{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink-soft">Shipping</dt>
              <dd className="font-semibold">{shipping === 0 ? 'Free' : formatPrice(shipping)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink-soft">Estimated tax</dt>
              <dd className="font-semibold">{formatPrice(tax)}</dd>
            </div>
          </dl>
          <div className="mt-4 flex justify-between border-t-2 border-kraft pt-4 font-display text-lg font-bold">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>

          <Link href="/checkout" className="btn-primary mt-6 w-full">
            Checkout
            <ArrowRight size={18} />
          </Link>
          <Link href="/shop" className="mt-3 block text-center text-sm font-semibold text-teal-dark hover:underline">
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
