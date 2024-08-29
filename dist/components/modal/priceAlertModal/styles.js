import styled from 'styled-components';
import Box from '../../box/styles';
export const ModalBox = styled(Box) `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background-color: #fff; /* 직접 배경색 지정 */
  box-shadow: 24;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;
