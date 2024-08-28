import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import {
  SwiperSlideStyled,
  ItemDetails,
  ItemImage,
  ItemName,
  OriginalPrice,
  DiscountRate,
  SalePrice,
  StyledSwiperContainer
} from './styles';
import { Title } from '../productSlider/styles';
import { useNavigate } from 'react-router-dom';
import { getNumberWithComma } from '@/components/utils/conversion';
import { LoadingSearch } from '@/components/loading';

interface ThirdSliderProps {
  items: {
    id: number;
    name: string;
    imageUrl: string;
    originalPrice: number;
  }[];
  title: string;
}

const ThirdSlider: React.FC<ThirdSliderProps> = ({ items, title }) => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    if (title === 'MY BOOKMARKS') {
      navigate(`/bookmark`);
    } else if (title === '최저가') {
      navigate(`/lowest-price`);
    } else if (title === '맞춤상품추천') {
      navigate(`/recommended`);
    }
  };

  const handleProductClick = (productName: string) => {
    navigate(`/product/${productName}`);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Title onClick={handleTitleClick}>{title}</Title>
      {items.length > 0 ? (
        <StyledSwiperContainer>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            style={{
              width: '280px',
              height: '350px'
            }}
          >
            {items.map((item) => (
              <SwiperSlide
                key={item.id}
                onClick={() => handleProductClick(item.name)}
              >
                <SwiperSlideStyled>
                  <ItemImage src={item.imageUrl} alt={item.name} />
                  <ItemDetails>
                    <ItemName>{item.name}</ItemName>
                    {/* <OriginalPrice>
                    원가: {getNumberWithComma(item.originalPrice)}원
                  </OriginalPrice>
                  <DiscountRate>할인율: {item.discountRate}%</DiscountRate> */}
                    <SalePrice>
                      판매가: {getNumberWithComma(item.originalPrice)}원
                    </SalePrice>
                  </ItemDetails>
                </SwiperSlideStyled>
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledSwiperContainer>
      ) : (
        <LoadingSearch />
      )}
    </div>
  );
};

export default ThirdSlider;
