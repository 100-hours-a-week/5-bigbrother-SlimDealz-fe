import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PopularSearch from '../../../components/searches/popularSearches';
import RecentSearches from '../../../components/searches/recentSearches';
import RecommendSearch from '../../../components/searches/recommendSearches';
import Divider from '@mui/material/Divider';
import Box from '../../../components/box/styles';
import { SearchContext } from '../../../components/utils/context/searchContext';
const SearchInitialPage = () => {
    const { searchQuery } = useContext(SearchContext);
    const navigate = useNavigate();
    const handleSearch = (word) => {
        console.log(`Selected search word: ${word}`);
    };
    useEffect(() => {
        navigate(location.pathname, { replace: true });
    }, [navigate]);
    return (_jsx(_Fragment, { children: searchQuery ? (_jsx(Box, { children: _jsx(RecommendSearch, { onSearch: handleSearch }) })) : (_jsxs(Box, { children: [_jsx(RecentSearches, {}), _jsx(Divider, { sx: {
                        my: 2,
                        borderColor: 'rgba(0, 0, 0, 0.1)',
                        width: '90%',
                        mx: 'auto'
                    } }), _jsx(PopularSearch, {})] })) }));
};
export default SearchInitialPage;
