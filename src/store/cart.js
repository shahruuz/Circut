import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1, customizations = {}) => {
        set((state) => {
          // Check if item with the exact same ID and customizations already exists
          const existingIndex = state.items.findIndex(
            (item) =>
              item.id === product.id &&
              JSON.stringify(item.customizations || {}) === JSON.stringify(customizations)
          );

          if (existingIndex > -1) {
            const newItems = [...state.items];
            newItems[existingIndex].quantity += quantity;
            return { items: newItems };
          }

          return {
            items: [...state.items, { ...product, quantity, customizations }],
          };
        });
      },
      removeItem: (index) => {
        set((state) => ({
          items: state.items.filter((_, i) => i !== index),
        }));
      },
      updateQuantity: (index, quantity) => {
        set((state) => {
          const newItems = [...state.items];
          if (quantity <= 0) {
            return { items: newItems.filter((_, i) => i !== index) };
          }
          newItems[index].quantity = quantity;
          return { items: newItems };
        });
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cricut-cart-storage',
    }
  )
);