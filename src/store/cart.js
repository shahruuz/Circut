'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, options = {}) => {
        const { quantity = 1, personalization = '' } = options;
        const lineId = `${product.id}::${personalization}`;

        set((state) => {
          const existing = state.items.find((item) => item.lineId === lineId);
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.lineId === lineId
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          return {
            items: [
              ...state.items,
              {
                lineId,
                id: product.id,
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.image,
                personalization,
                quantity,
              },
            ],
          };
        });
      },

      removeItem: (lineId) => {
        set((state) => ({
          items: state.items.filter((item) => item.lineId !== lineId),
        }));
      },

      updateQuantity: (lineId, quantity) => {
        if (quantity < 1) {
          get().removeItem(lineId);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.lineId === lineId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getSubtotal: () => {
        return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },

      getItemCount: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },
    }),
    {
      name: 'cutsheet-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
