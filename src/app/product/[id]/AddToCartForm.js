'use client';

import { useState } from 'react';
import { Minus, Plus, Check } from 'lucide-react';
import { useCartStore } from '@/store/cart';

export default function AddToCartForm({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [personalization, setPersonalization] = useState('');
  const [justAdded, setJustAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  function handleAdd() {
    addItem(product, { quantity, personalization: personalization.trim() });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  }

  return (
    <div className="cut-line rounded-sticker p-5">
      {product.personalizable && (
        <div className="mb-5">
          <label htmlFor="personalization" className="font-display font-bold">
            Personalize it
          </label>
          <input
            id="personalization"
            type="text"
            maxLength={30}
            value={personalization}
            onChange={(e) => setPersonalization(e.target.value)}
            placeholder="Name, initials, or short text"
            className="mt-2 w-full rounded-lg border-2 border-ink bg-paper px-4 py-2 focus:outline-none"
          />
          <p className="mt-1 text-xs text-ink-soft">Up to 30 characters. Leave blank for the design as shown.</p>
        </div>
      )}

      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-full border-2 border-ink">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex h-11 w-11 items-center justify-center"
          >
            <Minus size={16} />
          </button>
          <span className="w-8 text-center font-semibold">{quantity}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQuantity((q) => Math.min(20, q + 1))}
            className="flex h-11 w-11 items-center justify-center"
          >
            <Plus size={16} />
          </button>
        </div>

        <button type="button" onClick={handleAdd} className="btn-primary flex-1">
          {justAdded ? (
            <>
              <Check size={18} /> Added to cart
            </>
          ) : (
            'Add to cart'
          )}
        </button>
      </div>
    </div>
  );
}
