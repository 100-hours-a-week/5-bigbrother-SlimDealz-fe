import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IconCategory from '../../components/icon/iconCategory';
import ProductSlider from '../../components/product/productSlider';
import { Container, ChickenChestWrapper } from './styles';
import Banner from '../../components/layoutWrapper/banner';
import ThirdSlider from '@/components/product/slider/thirdSlider';

const MainPage = () => {
  const [jwtToken, setJwtToken] = useState<string | null>(null);
  const [lowestProducts, setLowestProducts] = useState([]);
  const [bookmarkProducts, setBookmarkProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    // URL에서 jwtToken과 refreshToken 추출
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('jwtToken');
    const refreshToken = urlParams.get('refreshToken');

    if (token && refreshToken) {
      // 토큰을 localStorage에 저장
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('refreshToken', refreshToken);
      setJwtToken(token);

      // 토큰이 URL에 있을 경우, URL을 정리 (토큰이 없는 상태로 URL을 유지)
      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState(null, '', newUrl);
    } else {
      // 만약 localStorage에 토큰이 있으면 설정
      const storedToken = localStorage.getItem('jwtToken');
      if (storedToken) {
        setJwtToken(storedToken);
      }
    }
  }, []);

  useEffect(() => {
    const fetchLowestProducts = async () => {
      try {
        const response = await axios.get('/api/v1/today-lowest-products');
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
      } catch (error: any) {
        if (error.response) {
          if (error.response.status === 404) {
            console.error('Product not found', error.response.data.message);
          } else if (error.response.status === 500) {
            console.error('Server error', error.response.data.message);
          } else {
            console.error('An unexpected error occurred:', error.response.data);
          }
        } else if (error.request) {
          console.error('No response received from server', error.request);
        } else {
          console.error('Error setting up the request:', error.message);
        }
      }
    };

    const fetchBookmarkProducts = async () => {
      try {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) return;

        const response = await axios.get('/api/v1/users/bookmarks', {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        });
        const bookmarkData = response.data.map((product: any) => ({
          id: product.productId,
          name: product.name,
          imageUrl: product.imageUrl,
          originalPrice: product.prices[0]?.setPrice,
          salePrice: product.prices[0]?.discountedPrice,
          discountRate: product.discountRate
        }));
        setBookmarkProducts(bookmarkData);
      } catch (error) {
        console.error('Error fetching bookmarks:', error);
      }
    };

    const fetchRandomProducts = async () => {
      try {
        const response = await axios.get('/api/v1/random-products');
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
        setRandomProducts(productData);
      } catch (error: any) {
        if (error.response) {
          if (error.response.status === 404) {
            console.error('Product not found', error.response.data.message);
          } else if (error.response.status === 500) {
            console.error('Server error', error.response.data.message);
          } else {
            console.error('An unexpected error occurred:', error.response.data);
          }
        } else if (error.request) {
          console.error('No response received from server', error.request);
        } else {
          console.error('Error setting up the request:', error.message);
        }
      }
    };

    fetchLowestProducts();
    fetchBookmarkProducts();
    fetchRandomProducts();
  }, []);

  return (
    <>
      <Banner />
      <Container>
        <ChickenChestWrapper>
          {/* 나중에 map을 통해 IconCategory 컴포넌트를 4개로 늘릴 수 있음 */}
          <IconCategory />
        </ChickenChestWrapper>
        {jwtToken && (
          <ProductSlider title="MY BOOKMARKS" products={bookmarkProducts} />
        )}
        <ProductSlider title="오늘의 최저가" products={lowestProducts} />
        <ThirdSlider items={randomProducts} title="MD 추천 상품" />
      </Container>
    </>
  );
};

export default MainPage;
