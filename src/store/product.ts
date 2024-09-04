import { create } from 'zustand';

interface ProductState {
  lowestProducts: any[];
  randomProducts: any[];
  setLowestProducts: (products: any[]) => void;
  setRandomProducts: (products: any[]) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  lowestProducts: [],
  randomProducts: [],
  setLowestProducts: (products) => set({ lowestProducts: products }),
  setRandomProducts: (products) => set({ randomProducts: products })
}));
