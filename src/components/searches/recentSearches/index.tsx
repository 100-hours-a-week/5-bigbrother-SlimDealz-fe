import React, { useEffect, useState } from 'react';
import SearchName from '../searchUtils/searchName';
import SearchWord from '../searchUtils/searchWord';
import {
  NameContainer,
  RecentSearchesContainer,
  SearchWordsContainer,
  NoSearchWordsText,
  ClearButton
} from './styles';

const RecentSearches = () => {
  const [searchWords, setSearchWords] = useState<string[]>([]);

  const loadRecentSearches = () => {
    const savedSearchWords = localStorage.getItem('recentSearchWords');
    if (savedSearchWords) {
      setSearchWords(JSON.parse(savedSearchWords));
    }
  };

  useEffect(() => {
    loadRecentSearches();
  }, []);

  const handleDeleteAll = () => {
    setSearchWords([]);
    localStorage.removeItem('recentSearchWords');
  };

  return (
    <RecentSearchesContainer>
      <NameContainer>
        <SearchName searchName="최근 검색어" />
        {searchWords.length > 0 && (
          <ClearButton onClick={handleDeleteAll}>전체 삭제</ClearButton>
        )}
      </NameContainer>
      <SearchWordsContainer>
        {searchWords.length > 0 ? (
          searchWords.map((word, index) => (
            <SearchWord key={index} searchWord={word} showClearIcon={true} /> // 각각의 검색어 렌더링
          ))
        ) : (
          <NoSearchWordsText>
            최근 검색어가 존재하지 않습니다.
          </NoSearchWordsText>
        )}
      </SearchWordsContainer>
    </RecentSearchesContainer>
  );
};

export default RecentSearches;
