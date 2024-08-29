import { create } from 'zustand';
export const useProductStore = create((set) => ({
    lowestProducts: [],
    randomProducts: [],
    isLowestProductsLoaded: false,
    isRandomProductsLoaded: false,
    setLowestProducts: (products) => set({ lowestProducts: products, isLowestProductsLoaded: true }),
    setRandomProducts: (products) => set({ randomProducts: products, isRandomProductsLoaded: true })
}));
