import React, { useEffect, useState, useContext } from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import { useLocation, useNavigate } from 'react-router-dom';
import { AutoCompleteItem, AutoCompleteList, CustomInput } from './styles';
import { SearchContext } from '../../utils/context/searchContext';

const words = ['예제', '검색', '단어', '목록'];

const SearchBar: React.FC = () => {
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
    const cleanedValue = value.replace(/[a-zA-Z~!@#$%^&*()_+|<>?:{}]/g, ''); // 한글, 숫자, 공백만 허용하는 정규식

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

      navigate(`/searchResults/${encodeURIComponent(trimmedValue)}`, {
        state: { searchQuery: trimmedValue }
      });
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

  const handleInputClick = () => {
    setSearchQuery('');
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
            width: 300,
            height: 35,
            border: '0.1px solid #ccc',
            boxShadow: 'none',
            paddingLeft: '10px',
            borderRadius: '20px',
            backgroundColor: '#f5f5f5'
          }}
          onSubmit={(event) => {
            event.preventDefault();
            handleSearchClick();
          }}
        >
          <CustomInput
            id="search-input"
            placeholder="검색어를 입력하세요"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            onClick={handleInputClick}
          />
          <IconButton
            type="button"
            sx={{ p: '10px' }}
            aria-label="search"
            onClick={handleSearchClick}
          >
            <SearchIcon sx={{ color: '#999' }} />
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
