import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PopularSearch from '../../../components/searches/popularSearches';
import RecentSearches from '../../../components/searches/recentSearches';
import RecommendSearch from '../../../components/searches/recommendSearches';
import Divider from '@mui/material/Divider';
import Box from '../../../components/box/styles';
import { SearchContext } from '../../../components/utils/context/searchContext';

const SearchInitialPage: React.FC = () => {
  const { searchQuery } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = (word: string) => {
    navigate(`/searchResults/${encodeURIComponent(word)}`);
  };

  useEffect(() => {
    navigate(location.pathname, { replace: true });
  }, [navigate]);

  return (
    <>
      {/* {searchQuery ? (
        <Box>
          <RecommendSearch onSearch={handleSearch} />
        </Box>
      ) : ( */}
      <Box>
        <RecentSearches />
        <Divider
          sx={{
            my: 2,
            borderColor: 'rgba(0, 0, 0, 0.1)',
            width: '90%',
            mx: 'auto'
          }}
        />
        <PopularSearch onSearch={handleSearch} />
      </Box>
    </>
  );
};

export default SearchInitialPage;
