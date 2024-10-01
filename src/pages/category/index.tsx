import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useProductStore } from '@/store/product';
import { LoadingProduct } from '@/components/loading';
import ProductCard from '@/components/list/productCard';

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
  category: string;
  prices: Price[];
  imageUrl: string;
};

const CategoryPage = () => {
  const { categoryType } = useParams<{ categoryType: string }>();
  const {
    lowestProducts,
    randomProducts,
    popularProducts,
    fetchLowestProducts,
    fetchRandomProducts,
    fetchPopularProducts
  } = useProductStore();

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const fetchPopularProductsCallback = useCallback(async () => {
    setLoading(true); // 추가
    try {
      const fetchedProducts = await fetchPopularProducts();
      if (fetchedProducts.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('인기 상품을 불러오는 중 오류가 발생했습니다:', error);
      setHasMore(false); // 에러 발생 시에도 더 이상 불러올 데이터가 없다고 처리
    } finally {
      setLoading(false); // 데이터를 불러오거나 에러가 발생한 후 로딩 상태 해제
    }
  }, [fetchPopularProducts]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        if (categoryType === 'today' && lowestProducts.length === 0) {
          await fetchLowestProducts();
        } else if (categoryType === 'popular') {
          if (page === 1 && popularProducts.length === 0) {
            await fetchPopularProductsCallback();
          }
        } else if (
          categoryType === 'recommend' &&
          randomProducts.length === 0
        ) {
          await fetchRandomProducts();
        }
      } catch (err) {
        console.error('상품을 불러오는 중 오류가 발생했습니다:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [
    categoryType,
    fetchLowestProducts,
    fetchRandomProducts,
    fetchPopularProductsCallback,
    lowestProducts,
    randomProducts,
    popularProducts,
    page
  ]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        loading ||
        !hasMore
      ) {
        return;
      }
      setPage((prevPage) => prevPage + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  const getProducts = () => {
    if (categoryType === 'today') {
      return lowestProducts;
    } else if (categoryType === 'popular') {
      return popularProducts;
    } else if (categoryType === 'recommend') {
      return randomProducts;
    }
    return [];
  };

  const products = getProducts();

  return loading || products.length === 0 ? (
    <LoadingProduct />
  ) : (
    <ProductCard products={products} />
  );
};

export default CategoryPage;
