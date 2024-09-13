import { create } from 'zustand';
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
  popularProducts: Product[];
  fetchLowestProducts: () => Promise<void>;
  fetchRandomProducts: () => Promise<void>;
  fetchPopularProducts: (page: number) => Promise<Product[]>;
};

export const useProductStore = create<ProductState>((set) => ({
  lowestProducts: [],
  randomProducts: [],
  popularProducts: [],

  fetchLowestProducts: async () => {
    try {
      const response = await api.get('/v1/today-lowest-products');
      set({ lowestProducts: response.data });
    } catch (error) {
      console.error('최저가 상품을 불러오는 중 오류가 발생했습니다:', error);
    }
  },

  fetchRandomProducts: async () => {
    try {
      const response = await api.get('/v1/random-products');
      set({ randomProducts: response.data });
    } catch (error) {
      console.error('랜덤 상품을 불러오는 중 오류가 발생했습니다:', error);
    }
  },

  fetchPopularProducts: async (page: number): Promise<Product[]> => {
    try {
      const response = await api.get('/v1/products', {
        params: { category: 'popular', page, limit: 10 }
      });
      const newProducts = response.data;

      set((state) => ({
        popularProducts: [...state.popularProducts, ...newProducts]
      }));

      return newProducts;
    } catch (error) {
      console.error('인기 상품을 불러오는 중 오류가 발생했습니다:', error);
      return [];
    }
  }
}));
