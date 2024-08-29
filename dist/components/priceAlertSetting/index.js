import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { TextField, Typography, Switch, IconButton } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Container } from './styles';
import PriceAlertModal from '../modal/priceAlertModal';
const PriceAlertSetting = () => {
    const [price, setPrice] = useState('');
    const [isAlertEnabled, setIsAlertEnabled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const formatPrice = (value) => {
        return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    const handlePriceChange = (event) => {
        const rawValue = event.target.value.replace(/,/g, '');
        const numericValue = rawValue.replace(/[^0-9]/g, '');
        if (numericValue) {
            setPrice(formatPrice(numericValue));
        }
        else {
            setPrice('');
        }
    };
    const handleToggleChange = () => {
        if (!isAlertEnabled) {
            setIsModalOpen(true);
        }
        setIsAlertEnabled(!isAlertEnabled);
    };
    const handleIconClick = () => {
        handleToggleChange();
    };
    return (_jsxs(Container, { children: [_jsx(TextField, { value: price, onChange: handlePriceChange, variant: "outlined", placeholder: "\uD76C\uB9DD \uAC00\uACA9", sx: {
                    width: '100px',
                    height: '30px',
                    '& .MuiInputBase-root': {
                        height: '30px'
                    }
                } }), _jsx(Typography, { children: "\uC6D0 \uC5D0 \uC54C\uB824 \uC8FC\uC138\uC694!" }), _jsx(IconButton, { onClick: handleIconClick, sx: { marginLeft: 'auto', marginRight: '-15px' }, children: _jsx(NotificationsActiveIcon, { sx: {
                        color: isAlertEnabled ? '#1565C0' : '#ccc',
                        fontSize: '20px'
                    } }) }), _jsx(Switch, { checked: isAlertEnabled, onChange: handleToggleChange, color: "primary" }), _jsx(PriceAlertModal, { open: isModalOpen, onClose: () => setIsModalOpen(false) })] }));
};
export default PriceAlertSetting;
