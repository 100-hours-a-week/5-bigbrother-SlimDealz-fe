import styled from 'styled-components';
import Skeleton from '@mui/material/Skeleton';

export const Container = styled.div`
  background-color: var(--background-color);
  position: relative;
  margin-right: -20px;
  margin-left: -10px;
`;

export const ProductSliderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: var(--background-color);

  &:hover .arrow {
    opacity: 1;
  }
`;

export const ProductsWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  scroll-snap-type: x mandatory;
`;

export const ProductItem = styled.div`
  flex: none;
  width: 140px;
  height: 140px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  cursor: pointer;
  transition: transform 0.2s;
  transform-origin: top;
  margin-bottom: 20px;
  padding: 8px;
  margin-right: 10px;

  &:hover {
    transform: scale(1.05);
  }

  scroll-snap-align: start;
  background-color: #f5f5f5;
`;

export const ProductImage = styled.img`
  width: 125px;
  height: 90px;
  object-fit: cover;
  border-radius: 12px;
`;

export const PriceInfo = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 7px;

  .price-row {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: bold;

    .price-label {
      color: #333;
    }
  }

  /* 평점 텍스트 */
  .rating {
    font-size: 8px;
    color: #888;
  }
`;

export const SkeletonWrapper = styled(Skeleton)`
  width: 140px;
  height: 140px;
`;
