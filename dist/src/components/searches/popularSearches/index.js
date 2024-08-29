import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NameContainer } from '../recentSearches/styles';
import SearchName from '../searchUtils/searchName';
import SearchWord from '../searchUtils/searchWord';
import { PopularSearchContainer, WordsListContainer } from './styles';
const PopularSearch = () => {
    const searchWords = [
        '1. 닭가슴살 요리법',
        '6. 닭가슴살 샐러드',
        '2. 닭가슴살 칼로리',
        '7. 닭가슴살 다이어트',
        '3. 닭가슴살 소스',
        '8. 닭가슴살 배달',
        '4. 닭가슴살 영양성분',
        '9. 닭가슴살 요리 추천',
        '5. 닭가슴살 도시락',
        '10. 닭가슴살 구매처'
    ];
    return (_jsxs(PopularSearchContainer, { children: [_jsx(NameContainer, { children: _jsx(SearchName, { searchName: "\uC778\uAE30 \uAC80\uC0C9\uC5B4" }) }), _jsx(WordsListContainer, { children: searchWords.map((word, index) => (_jsx(SearchWord, { searchWord: word, isPopular: true }, index))) })] }));
};
export default PopularSearch;
