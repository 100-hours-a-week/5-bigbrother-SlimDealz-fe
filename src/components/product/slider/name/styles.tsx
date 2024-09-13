import styled from 'styled-components';

export const SliderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0px 15px 0px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const MoreButton = styled.button`
  font-size: 14px;
  color: #888;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #000;
  }
`;
