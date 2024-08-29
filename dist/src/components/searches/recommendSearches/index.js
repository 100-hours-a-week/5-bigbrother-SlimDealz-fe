import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { AutoCompleteItem, AutoCompleteList } from './styles';
const RecommendSearch = ({ onSearch }) => {
    const words = [
        '닭가슴살',
        '닭가슴살 샐러드',
        '닭가슴살 요리법',
        '닭가슴살 도시락',
        '닭가슴살 칼로리',
        '닭가슴살 다이어트',
        '닭가슴살 구매처',
        '닭가슴살 영양성분',
        '닭가슴살 소스',
        '닭가슴살 배달'
    ];
    return (_jsx(_Fragment, { children: words.length > 0 && (_jsx(AutoCompleteList, { children: words.map((word, index) => (_jsx(AutoCompleteItem, { onClick: () => onSearch(word), children: word }, index))) })) }));
};
export default RecommendSearch;
