import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal, Typography, Button } from '@mui/material';
import { ModalBox } from './styles';
const PriceAlertModal = ({ open, onClose, type = 'limit' }) => {
    const modalContent = type === 'limit'
        ? '알림은 최대 3개까지 설정 가능합니다!'
        : '로그인이 필요한 서비스 입니다!';
    return (_jsx(Modal, { open: open, onClose: onClose, children: _jsxs(ModalBox, { children: [_jsx(Typography, { variant: "h6", component: "h2", children: modalContent }), _jsx(Button, { variant: "contained", onClick: onClose, sx: { mt: 2 }, children: "\uD655\uC778" })] }) }));
};
export default PriceAlertModal;
