import React from 'react';
import { Container, Title } from './styles';
import { useParams } from 'react-router-dom';
import PriceAlertSetting from '../../components/priceAlertSetting';
import TabsComponent from '../../components/tab';
import ReviewList from '../../components/list/reviewList';
import ImageView from '../../components/image/productImage';
import ProductInfo from '../../components/product/productInfo';
import { InfoContainer } from '../../components/list/categoryList/styles';
import {
  HeaderContainer,
  IconContainer,
  SearchContainer
} from '../../components/layoutWrapper/header/styles';

const DetailPage = () => {
  const { productId } = useParams<{ productId: string }>();

  return (
    <>
      <HeaderContainer>
        <IconContainer $isHidden={false} $isSpecialPage={true}>
          {/* 뒤로가기 버튼 */}
        </IconContainer>
        <SearchContainer $isSpecialPage={true} $isSimplePage={false}>
          {/* 검색 버튼 */}
        </SearchContainer>
      </HeaderContainer>

      <Container>
        <ImageView />
        <InfoContainer>
          <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
            바르닭 5가지맛
          </div>
        </InfoContainer>
        <ProductInfo />
        <PriceAlertSetting />
        <TabsComponent />
        <Title>리뷰</Title>
        <ReviewList />
      </Container>
    </>
  );
};

export default DetailPage;
