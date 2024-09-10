import React, { useEffect, useState } from 'react';
import IconCategory from '../../components/icon/iconCategory';
import ProductSlider from '../../components/product/productSlider';
import { Container, ChickenChestWrapper } from './styles';
import Banner from '../../components/layoutWrapper/banner';
import ThirdSlider from '@/components/product/slider/thirdSlider';
import { useProductStore } from '@/store/product';
import api from '@/axiosInstance';
import { deleteCookie, getCookie } from '@/components/utils/cookieUtils';

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

  // 쿠키에서 refreshToken 가져와 로컬 스토리지에 저장
  const refreshToken = getCookie('refreshToken');
  if (refreshToken) {
    localStorage.setItem('refreshToken', refreshToken);
    deleteCookie('refreshToken');
  }

  useEffect(() => {
    const fetchBookmarkProducts = async () => {
      const jwtToken = getCookie('jwtToken');
      if (!jwtToken) {
        console.log('JWT 토큰이 없으므로 북마크 API 요청을 건너뜁니다.');
        return;
      }

      try {
        const response = await api.get('/v1/users/bookmarks');
        const bookmarkData = response.data.map((product: any) => ({
          id: product.id,
          name: product.name,
          imageUrl: product.imageUrl,
          originalPrice: product.prices[0]?.setPrice || 0,
          discountRate: product.discountRate || 0
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
        if (Array.isArray(response.data)) {
          const productData = response.data.map((product: any) => ({
            id: product.id,
            name: product.name,
            imageUrl: product.imageUrl,
            originalPrice: product.prices[0]?.setPrice || 0,
            discountRate: product.prices[0]?.promotion
              ? Math.round(
                  ((product.prices[0]?.setPrice -
                    product.prices[0]?.promotion) /
                    product.prices[0]?.setPrice) *
                    100
                )
              : 0
          }));
          setLowestProducts(productData);
        } else {
          console.error('Error: response.data is not an array');
        }
      } catch (error) {
        console.error('Error fetching lowest products:', error);
      }
    };

    const fetchRandomProducts = async () => {
      try {
        if (!isRandomProductsLoaded) {
          const response = await api.get('/v1/random-products');
          if (Array.isArray(response.data)) {
            const productData = response.data.map((product: any) => ({
              id: product.id,
              name: product.name,
              imageUrl: product.imageUrl,
              originalPrice: product.prices[0]?.setPrice || 0,
              discountRate: product.prices[0]?.promotion
                ? Math.round(
                    ((product.prices[0]?.setPrice -
                      product.prices[0]?.promotion) /
                      product.prices[0]?.setPrice) *
                      100
                  )
                : 0
            }));
            setRandomProducts(productData);
          } else {
            console.error('Error: response.data is not an array');
          }
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
