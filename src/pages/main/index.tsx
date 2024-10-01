import React, { useEffect } from 'react';
import ProductSlider from '../../components/product/productSlider';
import { Container } from './styles';
import Banner from '../../components/layoutWrapper/banner';
import SliderName from '@/components/product/slider/name';
import DragSlider from '@/components/product/slider/dragSlider';
import ThirdSlider from '@/components/product/slider/thirdSlider';
import { useProductStore } from '@/store/product';

const MainPage = () => {
  const {
    lowestProducts,
    randomProducts,
    popularProducts,
    fetchLowestProducts,
    fetchRandomProducts,
    fetchPopularProducts
  } = useProductStore();

  useEffect(() => {
    fetchLowestProducts();
    if (randomProducts.length === 0) {
      fetchRandomProducts();
    }
    if (popularProducts.length === 0) {
      fetchPopularProducts();
    }
  }, [
    fetchLowestProducts,
    fetchRandomProducts,
    fetchPopularProducts,
    randomProducts.length,
    popularProducts.length
  ]);

  return (
    <>
      <Banner />
      <Container>
        <SliderName
          title="오늘의 최저가"
          showMoreButton={true}
          moreButtonLink="/category/today"
        />
        <ProductSlider products={lowestProducts} />

        <SliderName
          title="인기급상승"
          showMoreButton={true}
          moreButtonLink="/category/popular"
        />
        <DragSlider products={popularProducts} />
        <SliderName
          title="SLIMDEALZ 추천 상품"
          showMoreButton={true}
          moreButtonLink="/category/recommend"
        />
        <ThirdSlider items={randomProducts} />
      </Container>
    </>
  );
};

export default MainPage;
