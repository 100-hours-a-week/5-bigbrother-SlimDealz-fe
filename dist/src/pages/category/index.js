import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Container } from './styles';
import CategoryList from '../../components/list/categoryList';
import { ChickenChestWrapper } from '../main/styles';
import IconCategory from '../../components/icon/iconCategory';
import PageNameTag from '../../components/tag/pageNameTag';
import { Link } from 'react-router-dom';
import { LoadingProduct } from '@/components/loading';
const CategoryPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const fetchProducts = useCallback(async () => {
        try {
            const response = await axios.get('/api/v1/products', {
                params: { category: '닭가슴살', page, limit: 10 }
            });
            const newProducts = response.data;
            if (Array.isArray(newProducts) && newProducts.length > 0) {
                setProducts((prevProducts) => [...prevProducts, ...newProducts]);
            }
            else {
                setHasMore(false);
            }
            setLoading(false);
        }
        catch (err) {
            setLoading(false);
            if (err.response) {
                if (err.response.status === 404) {
                    console.log('Products not found');
                }
                else {
                    console.log('Server error');
                }
            }
            else {
                console.log('Network error');
            }
        }
    }, [page]);
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !==
                document.documentElement.offsetHeight ||
                loading ||
                !hasMore)
                return;
            setPage((prevPage) => prevPage + 1);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore]);
    return (_jsxs(Container, { children: [_jsx(ChickenChestWrapper, { children: _jsx(IconCategory, {}) }), _jsx(PageNameTag, { pageName: "\uCD94\uCC9C \uD398\uC774\uC9C0" }), loading && page === 1 ? (_jsx(LoadingProduct, {})) : (_jsxs(_Fragment, { children: [products.map((product, index) => (_jsx(Link, { to: `/product/${encodeURIComponent(product.name)}`, children: _jsx(CategoryList, { id: product.id, image: product.imageUrl, name: product.name, shipping: product.shippingFee, price: product.prices?.[0]?.setPrice || '가격 없음' }) }, `${product.id}-${index}`))), loading && _jsx(LoadingProduct, {})] }))] }));
};
export default CategoryPage;
