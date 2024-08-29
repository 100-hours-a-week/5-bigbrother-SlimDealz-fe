import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState, useContext } from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useNavigate } from 'react-router-dom';
import { AutoCompleteItem, AutoCompleteList, CustomInput } from './styles';
import { SearchContext } from '../../utils/context/searchContext';
const words = ['example', 'search', 'terms', 'list', 'of', 'words'];
const SearchBar = () => {
    const { searchQuery, setSearchQuery } = useContext(SearchContext);
    const [filteredWords, setFilteredWords] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (location.state?.searchQuery) {
            setSearchQuery(location.state.searchQuery);
        }
    }, [location.state, setSearchQuery]);
    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchQuery(value);
        if (value) {
            const filtered = words.filter((word) => word.toLowerCase().includes(value.toLowerCase()));
            setFilteredWords(filtered);
        }
        else {
            setFilteredWords([]);
        }
    };
    const handleSearch = (value) => {
        setFilteredWords([]);
        if (value.trim() !== '') {
            const inputElement = document.getElementById('search-input');
            inputElement?.blur();
            navigate(`/searchResults/${encodeURIComponent(value)}`, {
                state: { searchQuery: value }
            });
        }
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch(searchQuery);
        }
    };
    const handleSearchClick = () => {
        handleSearch(searchQuery);
    };
    const handleInputClick = () => {
        setSearchQuery('');
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Paper, { component: "form", sx: {
                    display: 'flex',
                    alignItems: 'center',
                    width: 300,
                    height: 35,
                    border: '0.1px solid #ccc',
                    boxShadow: 'none',
                    paddingLeft: '10px',
                    borderRadius: '20px',
                    backgroundColor: '#f5f5f5'
                }, onSubmit: (event) => {
                    event.preventDefault();
                    handleSearchClick();
                }, children: [_jsx(CustomInput, { id: "search-input", placeholder: "\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694", value: searchQuery, onChange: handleSearchChange, onKeyPress: handleKeyPress, onClick: handleInputClick }), _jsxs(IconButton, { type: "button", sx: { p: '10px' }, "aria-label": "search", onClick: handleSearchClick, children: [_jsx(SearchIcon, { sx: { color: '#999' } }), " "] })] }), filteredWords.length > 0 && (_jsx(AutoCompleteList, { children: filteredWords.map((word, index) => (_jsx(AutoCompleteItem, { onClick: () => handleSearch(word), children: word }, index))) }))] }));
};
export default SearchBar;
