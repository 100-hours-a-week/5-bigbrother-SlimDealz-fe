import React, { useEffect } from 'react';
import ProductSlider from '../../components/product/productSlider';
import { Container } from './styles';
import Banner from '../../components/layoutWrapper/banner';
import SliderName from '@/components/product/slider/name';
import DragSlider from '@/components/product/slider/dragSlider';
import ThirdSlider from '@/components/product/slider/thirdSlider';
import { deleteCookie, getCookie } from '@/components/utils/cookieUtils';
import { useProductStore } from '@/store/product';

const MainPage = () => {
  const {
    lowestProducts,
    randomProducts,
    fetchLowestProducts,
    fetchRandomProducts
  } = useProductStore();

  useEffect(() => {
    fetchLowestProducts();
    fetchRandomProducts();
  }, [fetchLowestProducts, fetchRandomProducts]);

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
        <DragSlider products={lowestProducts} />
        <SliderName
          title="MD 추천 상품"
          showMoreButton={true}
          moreButtonLink="/category/recommend"
        />
        <ThirdSlider items={randomProducts} />
      </Container>
    </>
  );
};

export default MainPage;
