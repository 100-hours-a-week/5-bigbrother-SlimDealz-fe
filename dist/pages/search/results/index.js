import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import PageNameTag from '../../../components/tag/pageNameTag';
import CategoryList from '../../../components/list/categoryList';
import { SearchContext } from '../../../components/utils/context/searchContext';
import { useParams, Link } from 'react-router-dom';
import NoResultsSpinner from '@/components/utils/noResultsSpinner';
import { LoadingProduct } from '@/components/loading';
const SearchResultsPage = () => {
    const { keyword } = useParams();
    const { setSearchQuery } = useContext(SearchContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (keyword) {
            setSearchQuery(keyword);
            setData([]);
            setLoading(true);
        }
    }, [keyword, setSearchQuery]);
    useEffect(() => {
        if (!keyword)
            return;
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/v1/search', {
                    params: { keyword }
                });
                if (response.status === 200) {
                    setData(response.data);
                }
            }
            catch (err) {
                console.log('An error occurred:', err.message);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [keyword]);
    return (_jsxs(Container, { children: [_jsx(PageNameTag, { pageName: "Search Results" }), loading ? (_jsx(LoadingProduct, {})) : data.length > 0 ? (data.map((item, index) => (_jsx(Link, { to: `/product/${encodeURIComponent(item.name)}`, style: { textDecoration: 'none', color: 'inherit' }, children: _jsx(CategoryList, { id: item.id, image: item.imageUrl, name: item.name, shipping: item.shippingFee, price: item.prices[0]?.setPrice }) }, index)))) : (_jsx(NoResultsSpinner, {}))] }));
};
export default SearchResultsPage;
