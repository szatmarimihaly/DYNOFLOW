import { create } from 'zustand'

export type CartItem = {
    id: number;
    name: string;
    slug: string;
    price: number;
    quantity: number;
}

type CartState = {
    items: CartItem[];
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    getItemCount: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
  
    addToCart: (item) => {
      const existing = get().items.find((i) => i.id === item.id);
      if (existing) {
        set({
          items: get().items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        });
      } else {
        set({
          items: [...get().items, { ...item, quantity: 1 }],
        });
      }
    },
  
    removeFromCart: (id) =>
      set({
        items: get().items.filter((item) => item.id !== id),
      }),
  
    clearCart: () => set({ items: [] }),
  
    getItemCount: () =>
      get().items.reduce((count, item) => count + item.quantity, 0),
  }));