import styled from 'styled-components';
const Box = styled.div `
  display: ${({ display }) => display || 'block'};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin || '0'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
`;
export default Box;
