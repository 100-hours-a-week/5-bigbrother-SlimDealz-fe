import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, ProductSliderContainer, Title, ProductsWrapper, ProductItem, ProductImage, PriceInfo } from './styles';
import { LeftArrow, RightArrow } from '../../../components/utils/arrow';
import Skeleton from '@mui/material/Skeleton';
import { LoadingSearch } from '@/components/loading';
const ProductSlider = ({ title, products = [] }) => {
    const scrollRef = useRef(null);
    const navigate = useNavigate();
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };
    const handleTitleClick = () => {
        if (title === 'MY BOOKMARKS') {
            navigate(`/bookmark`);
        }
        else if (title === '최저가') {
            navigate(`/lowest-price`);
        }
        else if (title === '맞춤상품추천') {
            navigate(`/recommended`);
        }
    };
    const handleProductClick = (productName) => {
        navigate(`/product/${productName}`);
    };
    return (_jsxs(Container, { children: [_jsx(Title, { onClick: handleTitleClick, children: title }), products.length > 0 ? (_jsxs(ProductSliderContainer, { children: [_jsx(LeftArrow, { onClick: scrollLeft }), _jsxs(ProductsWrapper, { ref: scrollRef, children: [products.map((product) => (_jsxs(ProductItem, { onClick: () => handleProductClick(product.name), children: [_jsx(ImageWithSkeleton, { src: product.imageUrl, alt: `Product ${product.name}` }), _jsx(PriceInfo, { children: _jsxs("div", { children: ["\uD310\uB9E4\uAC00: ", product.originalPrice.toLocaleString(), "\uC6D0"] }) })] }, product.id))), _jsx(RightArrow, { onClick: scrollRight })] })] })) : (_jsx(LoadingSearch, {}))] }));
};
const ImageWithSkeleton = ({ src, alt }) => {
    const [loaded, setLoaded] = useState(false);
    return (_jsxs(_Fragment, { children: [!loaded && (_jsx(Skeleton, { variant: "rectangular", width: 200, height: 200, animation: "wave" })), _jsx(ProductImage, { src: src, alt: alt, style: { display: loaded ? 'block' : 'none' }, onLoad: () => setLoaded(true), onError: () => setLoaded(true), width: 150, height: 150 })] }));
};
export default ProductSlider;
