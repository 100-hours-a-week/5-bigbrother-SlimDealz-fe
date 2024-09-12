import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  padding-bottom: 50px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000000;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  cursor: pointer;
`;

export const ImagePlaceholder = styled.div`
  height: 160px;
  border-radius: 8px;
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const ProductInfo = styled.div`
  margin-top: 10px;
`;

export const ProductTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const BookmarkIcon = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  font-size: 20px;
  cursor: pointer;
`;
