import styled from 'styled-components';
export const AutoCompleteList = styled.ul `
  margin-top: 100px;
  padding: 10px;
  list-style-type: none;
  position: absolute;
  width: 390px;
  height: auto;
  overflow-y: auto;
  z-index: 1;
`;
export const AutoCompleteItem = styled.li `
  padding: 10px;
  border-radius: 25px;
  margin-bottom: 10px;
  font-size: 12px;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
`;
