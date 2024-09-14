import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 0 0 0 -10px;
`;

export const Slider = styled.div`
  display: flex;
  cursor: grab;
  overflow-x: scroll;
  width: 100%;
  height: auto;
  user-select: none;
  padding: 5px 5px 15px 5px;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const ProductCard = styled.div`
  flex: 0 0 auto;
  width: 200px;
  margin-right: 16px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;

  img {
    width: 100%;
    height: 80px;
    object-fit: contain;
    border-radius: 8px;
    pointer-events: none;
  }

  h3 {
    margin-top: 8px;
    font-size: 14px;
  }

  p {
    margin: 10px;
    font-size: 16px;
    color: #5ca65e;
  }
`;
