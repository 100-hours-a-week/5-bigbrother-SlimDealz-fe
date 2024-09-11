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

  &::-webkit-scrollbar {
    display: none;
  }

  scroll-snap-type: x mandatory;
`;

export const ProductItem = styled.div`
  flex: none;
  width: 140px;
  height: 170px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s;
  transform-origin: top;
  margin: 5px 0 20px 10px;
  padding: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
  }

  scroll-snap-align: start;
  background-color: #fff5f5;
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

  h3 {
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .price-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    margin-top: 5px;

    .price-value {
      color: #5ca65e;
    }
  }

  .rating {
    font-size: 8px;
    color: #888;
  }
`;

export const SkeletonWrapper = styled(Skeleton)`
  width: 140px;
  height: 140px;
`;
