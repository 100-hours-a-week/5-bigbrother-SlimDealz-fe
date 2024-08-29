import styled from 'styled-components';
import Box from '../box/styles';
export const Container = styled(Box) `
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
  position: relative;
  height: 50px;
`;
