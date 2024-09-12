import create from 'zustand';
import api from '@/axiosInstance';

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  originalPrice: number;
};

type ProductState = {
  lowestProducts: Product[];
  randomProducts: Product[];
  fetchLowestProducts: () => Promise<void>;
  fetchRandomProducts: () => Promise<void>;
};

export const useProductStore = create<ProductState>((set, get) => ({
  lowestProducts: [],
  randomProducts: [],

  fetchLowestProducts: async () => {
    try {
      const response = await api.get('/v1/today-lowest-products');
      const productData = response.data.map((product: any) => ({
        id: product.id,
        name: product.name,
        imageUrl: product.imageUrl,
        originalPrice: product.prices[0].setPrice
      }));

      const { lowestProducts } = get();
      if (JSON.stringify(lowestProducts) !== JSON.stringify(productData)) {
        set({ lowestProducts: productData });
      }
    } catch (error) {
      console.error('Error fetching lowest products:', error);
    }
  },

  fetchRandomProducts: async () => {
    const { randomProducts } = get();

    if (randomProducts.length > 0) {
      return;
    }

    try {
      const response = await api.get('/v1/random-products');
      const productData = response.data.map((product: any) => ({
        id: product.id,
        name: product.name,
        imageUrl: product.imageUrl,
        originalPrice: product.prices[0].setPrice
      }));

      set({ randomProducts: productData });
    } catch (error) {
      console.error('Error fetching random products:', error);
    }
  }
}));
