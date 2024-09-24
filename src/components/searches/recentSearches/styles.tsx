import styled from 'styled-components';

export const RecentSearchesContainer = styled.div`
  width: 100%;
  padding: 30px 10px 0px 10px;
  overflow: hidden;
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchWordsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 16px 0px 0px 10px;
`;

export const NoSearchWordsText = styled.div`
  width: 100%;
  text-align: center;
  padding: 16px;
  font-size: 16px;
`;

export const ClearButton = styled.button`
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  font-size: 13px;
  &:hover {
    text-decoration: underline;
  }
`;
