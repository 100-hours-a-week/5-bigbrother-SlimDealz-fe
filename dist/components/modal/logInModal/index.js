import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal } from '@mui/material';
import styled from 'styled-components';
const LoginRequiredModal = ({ open, onClose, onLogin }) => {
    return (_jsx(Modal, { open: open, onClose: onClose, children: _jsx(ModalOverlay, { children: _jsxs(ModalContent, { children: [_jsx(ModalTitle, { children: "\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4" }), _jsx("hr", { style: { width: '50px', margin: '10px auto', borderColor: 'white' } }), _jsxs(ModalMessage, { children: ["\uBD81\uB9C8\uD06C\uB294 \uB85C\uADF8\uC778\uC774 \uD544\uC694\uD55C \uC11C\uBE44\uC2A4\uC785\uB2C8\uB2E4. ", _jsx("br", {}), "\uB85C\uADF8\uC778\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"] }), _jsxs("div", { style: { display: 'flex', justifyContent: 'space-between' }, children: [_jsx(ActionButton, { onClick: onClose, children: "\uCDE8\uC18C" }), _jsx(ActionButton, { onClick: onLogin, children: "\uB85C\uADF8\uC778" })] })] }) }) }));
};
export default LoginRequiredModal;
const ModalOverlay = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
const ActionButton = styled.button `
  padding: 10px 50px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;
