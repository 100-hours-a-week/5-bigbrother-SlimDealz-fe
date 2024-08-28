import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IconCategory from '../../components/icon/iconCategory';
import ProductSlider from '../../components/product/productSlider';
import { Container, ChickenChestWrapper } from './styles';
import Banner from '../../components/layoutWrapper/banner';
import ThirdSlider from '@/components/product/slider/thirdSlider';
import { useProductStore } from '@/store/product';

const MainPage = () => {
  const {
    lowestProducts,
    randomProducts,
    isLowestProductsLoaded,
    isRandomProductsLoaded,
    setLowestProducts,
    setRandomProducts
  } = useProductStore();

  const [jwtToken, setJwtToken] = useState<string | null>(null);
  const [kakaoId, setKakaoId] = useState<string | null>(null);
  const [bookmarkProducts, setBookmarkProducts] = useState([]);
  const serverUri = import.meta.env.VITE_SERVER_URI;

  useEffect(() => {
    const extractKakaoIdFromToken = (token: string): string | null => {
      try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
        );
        const parsedToken = JSON.parse(jsonPayload);
        return parsedToken.kakao_Id || null;
      } catch (error) {
        console.error('JWT token parsing error:', error);
        return null;
      }
    };
    const fetchBookmarkProducts = async (kakaoId: string) => {
      try {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) return;

        const response = await axios.get(
          `${serverUri}/api/v1/users/kakao/${encodeURIComponent(kakaoId)}/bookmarks`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`
            }
          }
        );
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
    // URL에서 jwtToken과 refreshToken 추출
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('jwtToken');
    const refreshToken = urlParams.get('refreshToken');

    if (token && refreshToken) {
      // 토큰을 localStorage에 저장
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('refreshToken', refreshToken);
      setJwtToken(token);

        const parsedToken = JSON.parse(jsonPayload);
        return parsedToken.kakao_Id || null;
      } catch (error) {
        console.error('JWT token parsing error:', error);
        return null;
      }
    }

    if (jwtToken) {
      const kakaoId = extractKakaoIdFromToken(jwtToken);
      if (kakaoId) {
        setKakaoId(kakaoId);
        fetchBookmarkProducts(kakaoId);
      }
    }
  }, [jwtToken]);

    const fetchLowestProducts = async () => {
      try {
        if (!isLowestProductsLoaded) {
          const response = await axios.get('/api/v1/today-lowest-products');
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
          setLowestProducts(productData);
        }
      } catch (error) {
        console.error('Error fetching lowest products:', error);
      }
    };

    const fetchRandomProducts = async () => {
      try {
        if (!isRandomProductsLoaded) {
          const response = await axios.get('/api/v1/random-products');
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

    if (jwtToken) {
      const kakaoId = extractKakaoIdFromToken(jwtToken);
      if (kakaoId) {
        setKakaoId(kakaoId);
        fetchBookmarkProducts(kakaoId);
      }
    }

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
        {kakaoId && (
          <ProductSlider title="MY BOOKMARKS" products={bookmarkProducts} />
        )}
        <ProductSlider title="오늘의 최저가" products={lowestProducts} />
        <ThirdSlider items={randomProducts} title="MD 추천 상품" />
      </Container>
    </>
  );
};

export default MainPage;
