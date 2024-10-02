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
  SalePrice,
  StyledSwiperContainer
} from './styles';
import { useNavigate } from 'react-router-dom';
import {
  getNumberWithComma,
  truncateString
} from '@/components/utils/conversion';
import { LoadingSearch } from '@/components/loading';

interface ThirdSliderProps {
  items: {
    id: number;
    productName: string;
    imageUrl: string;
    prices: { setPrice: number }[];
  }[];
}

const ThirdSlider: React.FC<ThirdSliderProps> = ({ items }) => {
  const navigate = useNavigate();

  const handleProductClick = (productName: string, id: number) => {
    navigate(`/product/${productName}/${id}`);
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
      {items.length > 0 ? (
        <StyledSwiperContainer>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            style={{
              width: '230px',
              height: '300px'
            }}
          >
            {items.map((item, index) => (
              <SwiperSlide
                key={`${item.id}-${index}`}
                onClick={() => handleProductClick(item.productName, item.id)}
              >
                <SwiperSlideStyled>
                  <ItemImage src={item.imageUrl} alt={item.productName} />
                  <ItemDetails>
                    <ItemName>{truncateString(item.productName, 13)}</ItemName>
                    <SalePrice>
                      판매가: {getNumberWithComma(item.prices[0].setPrice)}원
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
