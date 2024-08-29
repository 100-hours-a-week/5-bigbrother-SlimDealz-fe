import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
const ModalOverlay = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const ModalContent = styled.div `
  background: #333;
  border-radius: 10px;
  width: 400px;
  padding: 30px;
  text-align: center;
  color: white;
`;
const ModalTitle = styled.h2 `
  margin-bottom: 20px;
  font-size: 24px;
`;
const ModalMessage = styled.p `
  font-size: 14px;
  margin-bottom: 30px;
`;
const HomeButton = styled.button `
  padding: 10px 20px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;
const PagePreparationModal = ({ onClose }) => {
    return (_jsx(ModalOverlay, { children: _jsxs(ModalContent, { children: [_jsx(ModalTitle, { children: "\uD398\uC774\uC9C0 \uC900\uBE44 \uC911" }), _jsx("hr", { style: { width: '50px', margin: '10px auto', borderColor: 'white' } }), _jsxs(ModalMessage, { children: ["\uD604\uC7AC \uD398\uC774\uC9C0 \uC624\uD508 \uC900\uBE44\uC911\uC785\uB2C8\uB2E4.", _jsx("br", {}), "\uCD5C\uB300\uD55C \uBE60\uB978 \uC2DC\uC77C \uB0B4\uC5D0 \uC811\uADFC \uAC00\uB2A5\uD558\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4."] }), _jsx(HomeButton, { onClick: onClose, children: "\uB3CC\uC544 \uAC00\uAE30" })] }) }));
};
export default PagePreparationModal;
