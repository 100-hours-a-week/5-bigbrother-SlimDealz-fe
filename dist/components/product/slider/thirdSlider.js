import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { SwiperSlideStyled, ItemDetails, ItemImage, ItemName, SalePrice, StyledSwiperContainer } from './styles';
import { Title } from '../productSlider/styles';
import { useNavigate } from 'react-router-dom';
import { getNumberWithComma } from '@/components/utils/conversion';
import { LoadingSearch } from '@/components/loading';
const ThirdSlider = ({ items, title }) => {
    const navigate = useNavigate();
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
    return (_jsxs("div", { style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }, children: [_jsx(Title, { onClick: handleTitleClick, children: title }), items.length > 0 ? (_jsx(StyledSwiperContainer, { children: _jsx(Swiper, { effect: 'cards', grabCursor: true, modules: [EffectCards], style: {
                        width: '280px',
                        height: '350px'
                    }, children: items.map((item) => (_jsx(SwiperSlide, { onClick: () => handleProductClick(item.name), children: _jsxs(SwiperSlideStyled, { children: [_jsx(ItemImage, { src: item.imageUrl, alt: item.name }), _jsxs(ItemDetails, { children: [_jsx(ItemName, { children: item.name }), _jsxs(SalePrice, { children: ["\uD310\uB9E4\uAC00: ", getNumberWithComma(item.originalPrice), "\uC6D0"] })] })] }) }, item.id))) }) })) : (_jsx(LoadingSearch, {}))] }));
};
export default ThirdSlider;
