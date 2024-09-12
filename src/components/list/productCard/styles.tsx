import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ImagePlaceholder = styled.div`
  height: 150px;
  border-radius: 8px;
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
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const BookmarkIcon = styled.div`
  margin-top: 10px;
  text-align: right;
  font-size: 20px;
  cursor: pointer;
`;
