import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PopularSearch from '../../../components/searches/popularSearches';
import RecentSearches from '../../../components/searches/recentSearches';
import RecommendSearch from '../../../components/searches/recommendSearches';
import Divider from '@mui/material/Divider';
import Box from '../../../components/box/styles';
import { SearchContext } from '../../../components/utils/context/searchContext'; // SearchContext import

const SearchInitialPage: React.FC = () => {
  const { searchQuery } = useContext(SearchContext); // searchQuery 전역 상태로 사용
  const navigate = useNavigate();

  const handleSearch = (word: string) => {
    console.log(`Selected search word: ${word}`);
  };

  useEffect(() => {
    navigate(location.pathname, { replace: true });
  }, [navigate]);

  return (
    <>
      {searchQuery ? (
        <Box>
          <RecommendSearch onSearch={handleSearch} />
        </Box>
      ) : (
        <Box>
          <RecentSearches />
          <Divider
            sx={{
              my: 2,
              borderColor: 'rgba(0, 0, 0, 0.1)', // 색상 연하게 설정
              width: '90%', // 길이 95%로 설정
              mx: 'auto' // 가운데 정렬
            }}
          />
          <PopularSearch />
        </Box>
      )}
    </>
  );
};

export default SearchInitialPage;
