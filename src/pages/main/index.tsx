import React, { useEffect, useState } from 'react';
import IconCategory from '../../components/icon/iconCategory';
import ProductSlider from '../../components/product/productSlider';
import { Container, ChickenChestWrapper } from './styles';
import Banner from '../../components/layoutWrapper/banner';
import ThirdSlider from '@/components/product/slider/thirdSlider';
import { useProductStore } from '@/store/product';
import api from '@/axiosInstance';

const MainPage = () => {
  const {
    lowestProducts,
    randomProducts,
    isLowestProductsLoaded,
    isRandomProductsLoaded,
    setLowestProducts,
    setRandomProducts
  } = useProductStore();

  const [bookmarkProducts, setBookmarkProducts] = useState([]);

  // 쿠키에서 특정 값을 가져오는 함수
  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  };

  useEffect(() => {
    // 쿠키에서 refreshToken 가져와 로컬 스토리지에 저장
    const refreshToken = getCookie('refreshToken'); // 쿠키에서 refreshToken을 가져옴
    if (refreshToken) {
      console.log('Refresh Token from cookie:', refreshToken);
      localStorage.setItem('refreshToken', refreshToken); // 로컬 스토리지에 저장
    } else {
      console.warn('쿠키에 refreshToken이 없습니다.');
    }
  }, []);

  useEffect(() => {
    const fetchBookmarkProducts = async () => {
      try {
        const response = await api.get('/v1/users/bookmarks');  // JWT 토큰이 자동으로 전송됨
        const bookmarkData = response.data.map((product: any) => ({
          id: product.productId,
          name: product.productName,
          imageUrl: product.image,
          originalPrice: product.prices[0]?.setPrice,
          salePrice: product.prices[0]?.discountedPrice,
          discountRate: product.discountRate
        }));
        setBookmarkProducts(bookmarkData);
      } catch (error) {
        console.error('Error fetching bookmarks:', error);
      }
    };

    fetchBookmarkProducts();
  }, []);

  useEffect(() => {
    const fetchLowestProducts = async () => {
      try {
        const response = await api.get('/v1/today-lowest-products');
        const productData = response.data.map((product: any) => ({
          id: product.id,
          name: product.name,
          imageUrl: product.imageUrl,
          originalPrice: product.prices[0].setPrice,
          salePrice: product.prices[0].discountedPrice,
          discountRate: Math.round(
            ((product.prices[0].setPrice - product.prices[0].discountedPrice) /
              product.prices[0].setPrice) *
              100
          )
        }));
        setLowestProducts(productData);
      } catch (error) {
        console.error('Error fetching lowest products:', error);
      }
    };

    const fetchRandomProducts = async () => {
      try {
        if (!isRandomProductsLoaded) {
          const response = await api.get('/v1/random-products');
          const productData = response.data.map((product: any) => ({
            id: product.id,
            name: product.name,
            imageUrl: product.imageUrl,
            originalPrice: product.prices[0].setPrice,
            salePrice: product.prices[0].discountedPrice,
            discountRate: Math.round(
              ((product.prices[0].setPrice -
                product.prices[0].discountedPrice) /
                product.prices[0].setPrice) *
                100
            )
          }));
          setRandomProducts(productData);
        }
      } catch (error) {
        console.error('Error fetching random products:', error);
      }
    };

    fetchLowestProducts();
    fetchRandomProducts();
  }, [
    isLowestProductsLoaded,
    isRandomProductsLoaded,
    setLowestProducts,
    setRandomProducts
  ]);

  return (
    <>
      <Banner />
      <Container>
        <ChickenChestWrapper>
          <IconCategory />
        </ChickenChestWrapper>
        {bookmarkProducts.length > 0 && (
          <ProductSlider title="MY BOOKMARKS" products={bookmarkProducts} />
        )}
        <ProductSlider title="오늘의 최저가" products={lowestProducts} />
        <ThirdSlider items={randomProducts} title="MD 추천 상품" />
      </Container>
    </>
  );
};

export default MainPage;
