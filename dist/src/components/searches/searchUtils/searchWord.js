import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { styled } from 'styled-components';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
const SearchWord = ({ searchWord: initialSearchWord, isPopular = false, showClearIcon = false }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [searchWord, setSearchWord] = useState(initialSearchWord);
    const handleClear = () => {
        setIsVisible(false);
    };
    if (!isVisible)
        return null;
    const displayedWord = searchWord.length > 16 ? searchWord.slice(0, 16) + '...' : searchWord;
    const Container = isPopular ? RankWordContainer : SearchWordContainer;
    return (_jsxs(Container, { children: [_jsx(WordTextContainer, { children: displayedWord }), showClearIcon && (_jsx(IconContainer, { onClick: handleClear, children: _jsx(ClearRoundedIcon, { sx: { fontSize: 15 } }) }))] }));
};
export default SearchWord;
export const SearchWordContainer = styled.div `
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 30px;
  padding: 5px 10px 5px 15px;
  border-radius: 10px;
  background-color: #f2f2f7;
`;
const RankWordContainer = styled(SearchWordContainer) `
  width: 140px;
  background-color: #f2f2f7;
`;
const WordTextContainer = styled.div `
  text-align: left;
  font-size: 12px;
  color: black;
`;
const IconContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
