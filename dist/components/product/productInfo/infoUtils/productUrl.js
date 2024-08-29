import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';
const ProductUrl = () => {
    const [copySuccess, setCopySuccess] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const handleTooltipOpen = () => {
        setTooltipOpen(true);
    };
    const handleCopyClick = () => {
        navigator.clipboard
            .writeText(window.location.href)
            .then(() => {
            setCopySuccess(true);
            setTooltipOpen(false);
            setTimeout(() => setCopySuccess(false), 2000);
        })
            .catch((err) => {
            console.error('Failed to copy: ', err);
        });
    };
    return (_jsxs("div", { style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            position: 'relative'
        }, children: [_jsx(Tooltip, { title: _jsxs("div", { style: { display: 'flex', alignItems: 'center' }, children: [_jsx(ContentCopyRoundedIcon, { fontSize: "small" }), _jsx("span", { style: { marginLeft: '4px' }, children: "URL\uBCF5\uC0AC" })] }), open: tooltipOpen, onOpen: handleTooltipOpen, onClose: () => setTooltipOpen(false), placement: "top", arrow: true, children: _jsx(IconButton, { onClick: handleCopyClick, style: { cursor: 'pointer', color: 'black' }, disableRipple: true, children: _jsx(ShareIcon, {}) }) }), copySuccess && (_jsx(Alert, { severity: "success", style: {
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1000
                }, children: '      복사 완료!      ' }))] }));
};
export default ProductUrl;
