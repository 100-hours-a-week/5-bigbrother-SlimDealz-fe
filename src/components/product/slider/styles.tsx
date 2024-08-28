import styled from 'styled-components';

export const SwiperSlideStyled = styled.div`
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fcf6ff;
  border-radius: 18px;
  border: 5px solid #fdf9ff;
`;

export const StyledSwiperContainer = styled.div`
  .swiper-slide-shadow {
    border-radius: 18px;
  }
`;

export const ItemImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 18px;
  margin-bottom: 15px;
`;

export const ItemDetails = styled.div`
  text-align: center;
  font-size: 16px;
  width: 100%;
`;

export const ItemName = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
  height: 55px;
`;

export const OriginalPrice = styled.div`
  text-decoration: line-through;
  color: grey;
  margin-bottom: 5px;
`;

export const DiscountRate = styled.div`
  color: red;
  margin-bottom: 5px;
`;

export const SalePrice = styled.div`
  color: green;
  font-weight: bold;
  font-size: 18px;
`;

export const Title = styled.h2`
  color: #efcaca;
  transition: all 0.3s;
  position: relative;
  line-height: 50px;
  height: 50px;
  text-align: center;
  width: 250px;
  cursor: pointer;
  font-family: 'Open Sans Condensed', sans-serif;
  text-transform: uppercase;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    transition: all 0.3s;
    display: inline-block;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: rgba(239, 202, 202, 0.7);
    border-bottom-color: rgba(239, 202, 202, 0.7);
    transform: scale(0.1, 1);
  }

  &:hover span {
    letter-spacing: 2px;
    color: #d4b0b0;
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1, 1);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    background-color: rgba(239, 202, 202, 0.1);
  }

  &:hover::after {
    opacity: 0;
    transform: scale(0.1, 1);
  }
`;
