import React, { useContext, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import { useLocation, useNavigate } from 'react-router-dom';
import { AutoCompleteItem, AutoCompleteList, CustomInput } from './styles';
import { SearchContext } from '../../utils/context/searchContext';

const words = ['예제', '검색', '단어', '목록'];

const SearchBar: React.FC<{ isSpecialPage: boolean }> = ({ isSpecialPage }) => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const [filteredWords, setFilteredWords] = useState<string[]>([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.searchQuery) {
      setSearchQuery(location.state.searchQuery);
    }
  }, [location.state, setSearchQuery]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const cleanedValue = value.replace(
      /[a-zA-Z~!@#$%^&*()_+|₩<>?:{}\[\]\\;'",./`=<>№$%^\[\]_|-]/g,
      ''
    );

    if (value !== cleanedValue) {
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
    }

    if (cleanedValue.length <= 50) {
      setSearchQuery(cleanedValue);

      if (cleanedValue) {
        const filtered = words.filter((word) =>
          word.toLowerCase().includes(cleanedValue.toLowerCase())
        );
        setFilteredWords(filtered);
      } else {
        setFilteredWords([]);
      }
    }
  };

  const handleSearch = (value: string) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      setShowTooltip(true);
      return;
    }

    setFilteredWords([]);

    if (trimmedValue !== '') {
      const inputElement = document.getElementById('search-input');
      inputElement?.blur();

      const searchHistory = JSON.parse(
        localStorage.getItem('searchHistory') || '[]'
      );

      if (!searchHistory.includes(value)) {
        searchHistory.push(value);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
      }

      const currentUrl = `/searchResults/${encodeURIComponent(value)}`;

      if (location.pathname === currentUrl) {
        navigate(currentUrl, { state: { searchQuery: value }, replace: true });
      } else {
        navigate(currentUrl, { state: { searchQuery: value } });
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch(searchQuery);
    }
  };

  const handleSearchClick = () => {
    handleSearch(searchQuery);
  };

  return (
    <>
      <Tooltip
        title="영어, 특수문자, 공백은 입력불가합니다."
        open={showTooltip}
        placement="top"
        arrow
        disableHoverListener
      >
        <Paper
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: isSpecialPage ? 320 : 333,
            height: 50,
            boxShadow: 'none',
            borderRadius: '6px',
            border: '1px solid #FFAF00'
          }}
          onSubmit={(event) => {
            event.preventDefault();
            handleSearchClick();
          }}
        >
          <CustomInput
            id="search-input"
            placeholder="원하는 제품를 검색해보세요 🔍"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            $isSpecialPage={isSpecialPage}
          />
          <IconButton
            type="button"
            sx={{
              p: '7px',
              backgroundColor: '#FFAF00',
              borderRadius: '6px',
              '&:hover': {
                backgroundColor: '#FFB000'
              }
            }}
            aria-label="search"
            onClick={handleSearchClick}
          >
            <SearchIcon sx={{ color: '#000000' }} />
          </IconButton>
        </Paper>
      </Tooltip>
      {filteredWords.length > 0 && (
        <AutoCompleteList>
          {filteredWords.map((word, index) => (
            <AutoCompleteItem key={index} onClick={() => handleSearch(word)}>
              {word}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      )}
    </>
  );
};

export default SearchBar;
