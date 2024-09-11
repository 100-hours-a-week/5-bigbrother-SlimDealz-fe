import React, { useEffect, useState, useRef } from 'react';
import ProductSlider from '../../components/product/productSlider';
import { Container } from './styles';
import Banner from '../../components/layoutWrapper/banner';
import { useProductStore } from '@/store/product';
import api from '@/axiosInstance';
import SliderName from '@/components/product/slider/name';
import DragSlider from '@/components/product/slider/dragSlider';
import ThirdSlider from '@/components/product/slider/thirdSlider';

const MainPage = () => {
  const {
    lowestProducts,
    randomProducts,
    setLowestProducts,
    setRandomProducts
  } = useProductStore();

  const lowestProductsLoadedRef = useRef(false);
  const randomProductsLoadedRef = useRef(false);

  useEffect(() => {
    const fetchLowestProducts = async () => {
      try {
        if (!lowestProductsLoadedRef.current) {
          const response = await api.get('/v1/today-lowest-products');
          const productData = response.data.map((product: any) => ({
            id: product.id,
            name: product.name,
            imageUrl: product.imageUrl,
            originalPrice: product.prices[0].setPrice
          }));
          setLowestProducts(productData);
          lowestProductsLoadedRef.current = true;
        }
      } catch (error) {
        console.error('Error fetching lowest products:', error);
      }
    };

    const fetchRandomProducts = async () => {
      try {
        if (!randomProductsLoadedRef.current) {
          const response = await api.get('/v1/random-products');
          const productData = response.data.map((product: any) => ({
            id: product.id,
            name: product.name,
            imageUrl: product.imageUrl,
            originalPrice: product.prices[0].setPrice
          }));
          setRandomProducts(productData);
          randomProductsLoadedRef.current = true;
        }
      } catch (error) {
        console.error('Error fetching random products:', error);
      }
    };

    if (!lowestProductsLoadedRef.current) {
      fetchLowestProducts();
    }

    if (!randomProductsLoadedRef.current) {
      fetchRandomProducts();
    }
  }, [setLowestProducts, setRandomProducts]);

  return (
    <>
      <Banner />
      <Container>
        <SliderName
          title="오늘의 최저가"
          showMoreButton={true}
          moreButtonLink="/popular"
        />
        <ProductSlider products={lowestProducts} />

        <SliderName
          title="인기급상승"
          showMoreButton={true}
          moreButtonLink="/popular"
        />
        <DragSlider products={lowestProducts} />
        <SliderName
          title="MD 추천 상품"
          showMoreButton={true}
          moreButtonLink="/popular"
        />
        <ThirdSlider items={randomProducts} />
      </Container>
    </>
  );
};

export default MainPage;
