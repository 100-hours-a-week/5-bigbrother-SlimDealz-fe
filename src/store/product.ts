import { create } from 'zustand';
import api from '@/axiosInstance';
import { AxiosError } from 'axios'; // Axios 에러 타입을 추가로 가져옴

type Price = {
  id: number;
  setPrice: number;
  promotion: string | null;
  productId: number;
  vendorId: number;
};

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  originalPrice: number;
  prices: Price[];
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
      if (error instanceof AxiosError) {
        console.error('최저가 상품을 불러오는 중 오류가 발생했습니다:', {
          message: error.message,
          code: error.code,
          status: error.response?.status,
          responseData: error.response?.data
        });
      } else {
        console.error(
          '최저가 상품을 불러오는 중 알 수 없는 오류가 발생했습니다:',
          error
        );
      }
    }
  },

  fetchRandomProducts: async () => {
    try {
      const response = await api.get('/v1/random-products');
      set({ randomProducts: response.data });
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error('랜덤 상품을 불러오는 중 오류가 발생했습니다:', {
          message: error.message,
          code: error.code,
          status: error.response?.status,
          responseData: error.response?.data
        });
      } else {
        console.error(
          '랜덤 상품을 불러오는 중 알 수 없는 오류가 발생했습니다:',
          error
        );
      }
    }
  },

  fetchPopularProducts: async (size: number): Promise<Product[]> => {
    try {
      const response = await api.get('/v1/products', {
        params: { category: '닭가슴살', size }
      });
      const newProducts = response.data;

      set((state) => ({
        popularProducts: [...state.popularProducts, ...newProducts]
      }));

      return newProducts;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error('인기 상품을 불러오는 중 오류가 발생했습니다:', {
          message: error.message,
          code: error.code,
          status: error.response?.status,
          responseData: error.response?.data
        });
      } else {
        console.error(
          '인기 상품을 불러오는 중 알 수 없는 오류가 발생했습니다:',
          error
        );
      }
      return [];
    }
  }
}));
