import styled from 'styled-components';
import Skeleton from '@mui/material/Skeleton';
export const Container = styled.div `
  background-color: var(--background-color);
  position: relative;
`;
export const Title = styled.h2 `
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
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
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
export const ProductSliderContainer = styled.div `
  display: flex;
  align-items: center;
  position: relative;
  background-color: var(--background-color);

  &:hover .arrow {
    opacity: 1;
  }
`;
export const ProductsWrapper = styled.div `
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  scroll-snap-type: x mandatory;
`;
export const ProductItem = styled.div `
  flex: none;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
  transform-origin: top;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.05);
  }

  scroll-snap-align: start;
`;
export const ProductImage = styled.img `
  width: 100%;
  height: auto;
`;
export const PriceInfo = styled.div `
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  font-weight: bold;
`;
export const SkeletonWrapper = styled(Skeleton) `
  width: 150px;
  height: 150px;
`;
