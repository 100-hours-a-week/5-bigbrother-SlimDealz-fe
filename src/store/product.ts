import { create } from 'zustand';

interface ProductState {
  lowestProducts: any[];
  randomProducts: any[];
  isLowestProductsLoaded: boolean;
  isRandomProductsLoaded: boolean;
  setLowestProducts: (products: any[]) => void;
  setRandomProducts: (products: any[]) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  lowestProducts: [],
  randomProducts: [],
  isLowestProductsLoaded: false,
  isRandomProductsLoaded: false,
  setLowestProducts: (products) =>
    set({ lowestProducts: products, isLowestProductsLoaded: true }),
  setRandomProducts: (products) =>
    set({ randomProducts: products, isRandomProductsLoaded: true })
}));
