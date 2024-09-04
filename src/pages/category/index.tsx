import React, { useState, useEffect, useCallback } from 'react';
import { Container } from './styles';
import CategoryList from '../../components/list/categoryList';
import { ChickenChestWrapper } from '../main/styles';
import IconCategory from '../../components/icon/iconCategory';
import PageNameTag from '../../components/tag/pageNameTag';
import { LoadingProduct } from '@/components/loading';
import api from '@/axiosInstance';

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  shippingFee: string;
  prices: { setPrice: number }[];
};

const CategoryPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await api.get('/v1/products', {
        params: { category: '닭가슴살', page, limit: 10 }
      });
      const newProducts = response.data;
      if (Array.isArray(newProducts) && newProducts.length > 0) {
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      } else {
        setHasMore(false);
      }
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      if (err.response) {
        if (err.response.status === 404) {
          console.log('Products not found');
        } else {
          console.log('Server error');
        }
      } else {
        console.log('Network error');
      }
    }
  }, [page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        loading ||
        !hasMore
      )
        return;
      setPage((prevPage) => prevPage + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <Container>
      {/* <ChickenChestWrapper>
        <IconCategory />
      </ChickenChestWrapper> */}
      <PageNameTag pageName="추천 페이지" />
      {loading && page === 1 ? (
        <LoadingProduct />
      ) : (
        <>
          {products.map((product: any, index: number) => (
            <div key={`${product.id}-${index}`}>
              <CategoryList
                id={product.id}
                image={product.imageUrl}
                name={product.name}
                shipping={product.shippingFee}
                price={product.prices?.[0]?.setPrice || '가격 없음'}
              />
            </div>
          ))}
          {loading && <LoadingProduct />}
        </>
      )}
    </Container>
  );
};

export default CategoryPage;
