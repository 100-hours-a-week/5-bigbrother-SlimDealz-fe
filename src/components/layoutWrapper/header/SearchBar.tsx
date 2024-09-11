import React, { useEffect, useState, useContext } from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useNavigate } from 'react-router-dom';
import { AutoCompleteItem, AutoCompleteList, CustomInput } from './styles';
import { SearchContext } from '../../utils/context/searchContext';

const words = ['example', 'search', 'terms', 'list', 'of', 'words']; // 검색어를 필터링하기 위한 단어 목록

const SearchBar: React.FC = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const [filteredWords, setFilteredWords] = useState<string[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.searchQuery) {
      setSearchQuery(location.state.searchQuery);
    }
  }, [location.state, setSearchQuery]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length <= 50) {
      setSearchQuery(value);

      if (value) {
        const filtered = words.filter((word) =>
          word.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredWords(filtered);
      } else {
        setFilteredWords([]);
      }
    }
  };

  const handleSearch = (value: string) => {
    setFilteredWords([]);

    if (value.trim() !== '') {
      const inputElement = document.getElementById('search-input');
      inputElement?.blur();

      navigate(`/searchResults/${encodeURIComponent(value)}`, {
        state: { searchQuery: value }
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
      <Paper
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 333,
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
          placeholder="검색어를 입력하세요"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
          onClick={handleInputClick}
        />
        <IconButton
          type="button"
          sx={{
            p: '7px',
            backgroundColor: '#FFAF00', // Background color of the button
            borderRadius: '6px', // Make sure it matches the border radius
            '&:hover': {
              backgroundColor: '#FFB000' // Slightly different on hover, optional
            }
          }}
          aria-label="search"
          onClick={handleSearchClick}
        >
          <SearchIcon sx={{ color: '#000000' }} /> {/* Adjust icon color */}
        </IconButton>
      </Paper>
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
