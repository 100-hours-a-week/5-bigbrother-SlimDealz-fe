import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const ReviewContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    border-radius: 8px;
  }

  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }

  p {
    margin: 4px 0;
    font-size: 14px;
    white-space: pre-wrap;
  }

  small {
    display: block;
    color: #757575;
    font-size: 12px;
    margin-top: 4px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  padding: 16px 0;
  border-top: 1px solid #e0e0e0;
`;
