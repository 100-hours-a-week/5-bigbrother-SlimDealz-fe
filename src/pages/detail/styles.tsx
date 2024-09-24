import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 16px;
  padding-bottom: 40px;
  background-color: var(--background-color);
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 16px 0px;
  margin-top: -10px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 8px;
`;
