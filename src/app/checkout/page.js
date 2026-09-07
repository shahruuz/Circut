'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Lock } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { formatPrice, calculateShipping, calculateTax } from '@/lib/utils';

export default function CheckoutPage() {
  const [mounted, setMounted] = useState(false);
  const [placed, setPlaced] = useState(false);
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => setMounted(true), []);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = calculateShipping(subtotal);
  const tax = calculateTax(subtotal);
  const total = subtotal + shipping + tax;

  function handlePlaceOrder(e) {
    e.preventDefault();
    // ---------------------------------------------------------------
    // This demo checkout does not process real payments. To accept
    // real orders, wire this handler to a payment provider (Stripe
    // Checkout or Payment Intents is the most common choice) and
    // only clear the cart after that call confirms success.
    // See DEPLOYMENT.md → "Add real payments" for the exact steps.
    // ---------------------------------------------------------------
    setPlaced(true);
    clearCart();
  }

  if (!mounted) return <div className="container-page py-16" />;

  if (placed) {
    return (
      <div className="container-page flex flex-col items-center py-24 text-center">
        <CheckCircle2 size={56} className="text-teal" />
        <h1 className="mt-5 text-3xl font-bold">Order received!</h1>
        <p className="mt-3 max-w-md text-ink-soft">
          Thanks for your order — a confirmation would normally land in your
          inbox here. We&apos;ll start cutting shortly.
        </p>
        <Link href="/shop" className="btn-primary mt-8">
          Keep shopping
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="text-3xl font-bold">Nothing to check out</h1>
        <p className="mt-3 text-ink-soft">Your cart is empty right now.</p>
        <Link href="/shop" className="btn-primary mt-6 inline-flex">
          Browse the shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold">Checkout</h1>

      <form onSubmit={handlePlaceOrder} className="mt-8 grid gap-10 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-8">
          <fieldset className="cut-line rounded-sticker p-5">
            <legend className="px-1 font-display text-lg font-bold">Shipping to</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Street address" name="address" required className="sm:col-span-2" />
              <Field label="City" name="city" required />
              <Field label="State" name="state" required />
              <Field label="ZIP code" name="zip" required />
              <Field label="Country" name="country" required defaultValue="United States" />
            </div>
          </fieldset>

          <fieldset className="cut-line rounded-sticker p-5">
            <legend className="px-1 font-display text-lg font-bold">Payment</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Card number" name="card" required className="sm:col-span-2" placeholder="4242 4242 4242 4242" />
              <Field label="Expiry" name="expiry" required placeholder="MM/YY" />
              <Field label="CVC" name="cvc" required placeholder="123" />
            </div>
            <p className="mt-3 flex items-center gap-2 text-xs text-ink-soft">
              <Lock size={14} /> This demo form does not transmit or store real card details.
            </p>
          </fieldset>
        </div>

        <aside className="h-fit rounded-sticker border-2 border-ink p-6">
          <h2 className="font-display text-xl font-bold">Order summary</h2>
          <ul className="mt-4 flex flex-col gap-2 border-b-2 border-kraft pb-4 text-sm">
            {items.map((item) => (
              <li key={item.lineId} className="flex justify-between gap-3">
                <span className="text-ink-soft">
                  {item.quantity}× {item.name}
                </span>
                <span className="shrink-0 font-semibold">{formatPrice(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
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

          <button type="submit" className="btn-primary mt-6 w-full">
            Place order
          </button>
        </aside>
      </form>
    </div>
  );
}

function Field({ label, name, type = 'text', required, defaultValue, placeholder, className = '' }) {
  return (
    <label className={`flex flex-col gap-1 text-sm font-semibold ${className}`}>
      {label}
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="rounded-lg border-2 border-ink px-4 py-2 font-normal focus:outline-none"
      />
    </label>
  );
}
