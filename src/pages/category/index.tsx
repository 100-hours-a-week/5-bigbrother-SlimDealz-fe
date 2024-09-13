import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useProductStore } from '@/store/product';
import { LoadingProduct } from '@/components/loading';
import ProductCard from '@/components/list/productCard';

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  originalPrice: number;
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
    const fetchedProducts = await fetchPopularProducts(page);
    if (fetchedProducts.length === 0) {
      setHasMore(false);
    }
    setLoading(false);
  }, [fetchPopularProducts, page]);

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
