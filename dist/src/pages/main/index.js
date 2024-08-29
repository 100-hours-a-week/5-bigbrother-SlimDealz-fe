import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import axios from 'axios';
import IconCategory from '../../components/icon/iconCategory';
import ProductSlider from '../../components/product/productSlider';
import { Container, ChickenChestWrapper } from './styles';
import Banner from '../../components/layoutWrapper/banner';
import ThirdSlider from '@/components/product/slider/thirdSlider';
import { useProductStore } from '@/store/product';
const MainPage = () => {
    const { lowestProducts, randomProducts, isLowestProductsLoaded, isRandomProductsLoaded, setLowestProducts, setRandomProducts } = useProductStore();
    const [jwtToken, setJwtToken] = useState(null);
    const [kakaoId, setKakaoId] = useState(null);
    const [bookmarkProducts, setBookmarkProducts] = useState([]);
    const serverUri = import.meta.env.VITE_SERVER_URI;
    useEffect(() => {
        const extractKakaoIdFromToken = (token) => {
            try {
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                const jsonPayload = decodeURIComponent(atob(base64)
                    .split('')
                    .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                    .join(''));
                const parsedToken = JSON.parse(jsonPayload);
                return parsedToken.kakao_Id || null;
            }
            catch (error) {
                console.error('JWT token parsing error:', error);
                return null;
            }
        };
        const fetchBookmarkProducts = async (kakaoId) => {
            try {
                const jwtToken = localStorage.getItem('jwtToken');
                if (!jwtToken)
                    return;
                const response = await axios.get(`${serverUri}/api/v1/users/kakao/${encodeURIComponent(kakaoId)}/bookmarks`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });
                const bookmarkData = response.data.map((product) => ({
                    id: product.productId,
                    name: product.name,
                    imageUrl: product.imageUrl,
                    originalPrice: product.prices[0]?.setPrice,
                    salePrice: product.prices[0]?.discountedPrice,
                    discountRate: product.discountRate
                }));
                setBookmarkProducts(bookmarkData);
            }
            catch (error) {
                console.error('Error fetching bookmarks:', error);
            }
        };
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('jwtToken');
        const refreshToken = urlParams.get('refreshToken');
        if (token && refreshToken) {
            localStorage.setItem('jwtToken', token);
            localStorage.setItem('refreshToken', refreshToken);
            setJwtToken(token);
            const newUrl = window.location.origin + window.location.pathname;
            window.history.replaceState(null, '', newUrl);
        }
        else {
            const storedToken = localStorage.getItem('jwtToken');
            if (storedToken) {
                setJwtToken(storedToken);
            }
        }
        if (jwtToken) {
            const kakaoId = extractKakaoIdFromToken(jwtToken);
            if (kakaoId) {
                setKakaoId(kakaoId);
                fetchBookmarkProducts(kakaoId);
            }
        }
    }, [jwtToken, serverUri]);
    useEffect(() => {
        const fetchLowestProducts = async () => {
            try {
                if (!isLowestProductsLoaded) {
                    const response = await axios.get('/api/v1/today-lowest-products');
                    const productData = response.data.map((product) => ({
                        id: product.id,
                        name: product.name,
                        imageUrl: product.imageUrl,
                        originalPrice: product.prices[0].setPrice,
                        salePrice: product.prices[0].discountedPrice,
                        discountRate: Math.round(((product.prices[0].setPrice -
                            product.prices[0].discountedPrice) /
                            product.prices[0].setPrice) *
                            100)
                    }));
                    setLowestProducts(productData);
                }
            }
            catch (error) {
                console.error('Error fetching lowest products:', error);
            }
        };
        const fetchRandomProducts = async () => {
            try {
                if (!isRandomProductsLoaded) {
                    const response = await axios.get('/api/v1/random-products');
                    const productData = response.data.map((product) => ({
                        id: product.id,
                        name: product.name,
                        imageUrl: product.imageUrl,
                        originalPrice: product.prices[0].setPrice,
                        salePrice: product.prices[0].discountedPrice,
                        discountRate: Math.round(((product.prices[0].setPrice -
                            product.prices[0].discountedPrice) /
                            product.prices[0].setPrice) *
                            100)
                    }));
                    setRandomProducts(productData);
                }
            }
            catch (error) {
                console.error('Error fetching random products:', error);
            }
        };
        fetchLowestProducts();
        fetchRandomProducts();
    }, [
        isLowestProductsLoaded,
        isRandomProductsLoaded,
        setLowestProducts,
        setRandomProducts
    ]);
    return (_jsxs(_Fragment, { children: [_jsx(Banner, {}), _jsxs(Container, { children: [_jsx(ChickenChestWrapper, { children: _jsx(IconCategory, {}) }), kakaoId && (_jsx(ProductSlider, { title: "MY BOOKMARKS", products: bookmarkProducts })), _jsx(ProductSlider, { title: "\uC624\uB298\uC758 \uCD5C\uC800\uAC00", products: lowestProducts }), _jsx(ThirdSlider, { items: randomProducts, title: "MD \uCD94\uCC9C \uC0C1\uD488" })] })] }));
};
export default MainPage;
