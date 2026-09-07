'use client';

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import { products } from '@/lib/products';
import { useCartStore } from '@/store/cart';
import { ShoppingBag, Star, Check } from 'lucide-react';
import Image from 'next/image';

export default function ProductPage({ params }) {
  const unwrappedParams = use(params);
  const product = products.find((p) => p.slug === unwrappedParams.id);

  if (!product) {
    notFound();
  }

  const addItem = useCartStore((state) => state.addItem);

  const [quantity, setQuantity] = useState(1);
  const [line1, setLine1] = useState('Hi');
  const [line2, setLine2] = useState('Bye');
  const [selectedColor, setSelectedColor] = useState(product.colorOptions?.[0] || '');
  const [selectedDesign, setSelectedDesign] = useState(product.designOptions?.[0] || '');
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product, quantity, {
      line1,
      line2,
      color: selectedColor,
      design: selectedDesign,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Preview Box / Image Gallery */}
        <div className="bg-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center border border-gray-200">
          <div className="text-2xl font-bold tracking-tight mb-6 text-gray-800">
            {product.name} Preview
          </div>
          <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-md bg-white p-4 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            Custom text preview: <span className="font-semibold text-gray-900">{line1} / {line2}</span> ({selectedColor}, {selectedDesign})
          </div>
        </div>

        {/* Right Column: Options & Controls */}
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">{product.name}</h1>
          <div className="text-2xl font-bold text-emerald-600 mt-2">${product.price.toFixed(2)} USD</div>

          {/* Quantity Selector */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
            <div className="flex items-center border border-gray-300 rounded-lg w-32 justify-between px-3 py-1.5">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-gray-500 hover:text-black font-bold text-lg"
              >
                -
              </button>
              <span className="font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-gray-500 hover:text-black font-bold text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Personalization Inputs */}
          {product.personalizable && (
            <div className="mt-6 space-y-4 border-t border-gray-200 pt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Line 1</label>
                <input
                  type="text"
                  value={line1}
                  onChange={(e) => setLine1(e.target.value)}
                  maxLength={15}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Enter text for line 1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Line 2 (Optional)</label>
                <input
                  type="text"
                  value={line2}
                  onChange={(e) => setLine2(e.target.value)}
                  maxLength={15}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Enter text for line 2"
                />
              </div>

              {/* Color Options */}
              {product.colorOptions && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                  <div className="flex flex-wrap gap-2">
                    {product.colorOptions.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                          selectedColor === color
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500'
                            : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Design Options */}
              {product.designOptions && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Design</label>
                  <div className="grid grid-cols-2 gap-2">
                    {product.designOptions.map((design) => (
                      <button
                        key={design}
                        onClick={() => setSelectedDesign(design)}
                        className={`px-4 py-2.5 rounded-lg border text-left text-sm font-medium transition-all ${
                          selectedDesign === design
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500'
                            : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {design}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`mt-8 w-full py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-2 text-white transition-all shadow-lg ${
              added ? 'bg-emerald-700' : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            {added ? (
              <>
                <Check className="w-5 h-5" /> Added to Cart!
              </>
            ) : (
              <>
                <ShoppingBag className="w-5 h-5" /> Add to Cart — ${(product.price * quantity).toFixed(2)}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}