import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const MallItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0.6em 0.5em -0.4em #fdddff;
    transform: translateY(-0.25em);
    background: #fdddff;
  }
`;

export const MallInfo = styled.div`
  display: flex;
  align-items: center;
  max-width: 80px;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  color: #1565c0;
  font-size: 18px;
  font-weight: bold;
`;

export const ShippingFeeContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
  margin-left: 10px;
`;

export const ShowMoreButton = styled.button`
  padding: 10px;
  background-color: #1565c0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0d47a1;
  }
`;
