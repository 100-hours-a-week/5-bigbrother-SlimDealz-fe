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
  const [bookmarkProducts, setBookmarkProducts] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('jwtToken');
    const refreshToken = urlParams.get('refreshToken');

    if (token && refreshToken) {
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('refreshToken', refreshToken);
      setJwtToken(token);
      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState(null, '', newUrl);
    } else {
      const storedToken = localStorage.getItem('jwtToken');
      if (storedToken) {
        setJwtToken(storedToken);
      }
    }
  }, []);

  useEffect(() => {
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

    fetchLowestProducts();
    fetchRandomProducts();
  }, [
    isLowestProductsLoaded,
    isRandomProductsLoaded,
    setLowestProducts,
    setRandomProducts
  ]);

  useEffect(() => {
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

    fetchBookmarkProducts();
  }, [jwtToken]);

  return (
    <>
      <Banner />
      <Container>
        <ChickenChestWrapper>
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
