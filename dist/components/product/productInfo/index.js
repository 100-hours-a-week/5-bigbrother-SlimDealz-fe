import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import ProductBookmark from './infoUtils/productBookmark';
import ProductPrice from './infoUtils/productPrice';
import ProductUrl from './infoUtils/productUrl';
import { ProductInfoContainer, PriceInfoContainer, ProductInfoOptionContainer, ProductBookmarkContainer, ProductUrlContainer } from './styles';
import { useNavigate } from 'react-router-dom';
import LoginRequiredModal from '@/components/modal/logInModal';
const ProductInfo = ({ originalPrice, productName }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const jwtToken = localStorage.getItem('jwtToken');
        if (jwtToken) {
            setIsAuthenticated(true);
        }
    }, []);
    const handleBookmarkClick = () => {
        if (!isAuthenticated) {
            setIsModalOpen(true);
        }
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const goToLogin = () => {
        navigate('/signIn');
    };
    return (_jsxs(ProductInfoContainer, { children: [_jsxs(PriceInfoContainer, { children: [_jsx(ProductPrice, { originalPrice: originalPrice }), _jsxs(ProductInfoOptionContainer, { children: [_jsx(ProductBookmarkContainer, { onClick: handleBookmarkClick, children: _jsx(ProductBookmark, { productName: productName }) }), _jsx(ProductUrlContainer, { children: _jsx(ProductUrl, {}) })] })] }), _jsx(LoginRequiredModal, { open: isModalOpen, onClose: closeModal, onLogin: goToLogin })] }));
};
export default ProductInfo;
