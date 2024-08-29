import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal } from '@mui/material';
import styled from 'styled-components';
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
const LogoutModal = ({ onClose, onLogout }) => {
    return (_jsx(Modal, { open: true, onClose: onClose, children: _jsx(ModalOverlay, { children: _jsxs(ModalContent, { children: [_jsx(ModalTitle, { children: "\uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?" }), _jsx("hr", { style: { width: '50px', margin: '10px auto', borderColor: 'white' } }), _jsx(ModalMessage, { children: "\uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uB824\uBA74 \uD655\uC778\uC744 \uB204\uB974\uC138\uC694." }), _jsxs("div", { style: { display: 'flex', justifyContent: 'space-between' }, children: [_jsx(ActionButton, { onClick: onClose, children: "\uCDE8\uC18C" }), _jsx(ActionButton, { onClick: onLogout, children: "\uD655\uC778" })] })] }) }) }));
};
export default LogoutModal;
