import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductStore } from '@/store/product';
import { LoadingProduct } from '@/components/loading';
import ProductCard from '@/components/list/productList';

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  originalPrice: number;
  // rating: number;  // 주석 처리
  // reviews: number; // 주석 처리
};

const CategoryPage = () => {
  const { categoryType } = useParams<{ categoryType: string }>();

  const {
    lowestProducts,
    randomProducts,
    fetchLowestProducts,
    fetchRandomProducts
  } = useProductStore();

  const [loading, setLoading] = useState(true);

  const getProducts = () => {
    if (categoryType === 'today') {
      return lowestProducts;
    } else if (categoryType === 'popular' || categoryType === 'recommend') {
      return randomProducts;
    }
    return [];
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        if (categoryType === 'today' && lowestProducts.length === 0) {
          await fetchLowestProducts();
        } else if (
          (categoryType === 'popular' || categoryType === 'recommend') &&
          randomProducts.length === 0
        ) {
          await fetchRandomProducts();
        }
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    if (getProducts().length === 0) {
      fetchProducts();
    } else {
      setLoading(false);
    }
  }, [
    categoryType,
    fetchLowestProducts,
    fetchRandomProducts,
    lowestProducts,
    randomProducts
  ]);

  const products = getProducts();

  return loading || products.length === 0 ? (
    <LoadingProduct />
  ) : (
    <ProductCard products={products} />
  );
};

export default CategoryPage;
