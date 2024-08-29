import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import SearchName from '../searchUtils/searchName';
import SearchWord from '../searchUtils/searchWord';
import Button from '@mui/material/Button';
import { NameContainer, RecentSearchesContainer, SearchWordsContainer, NoSearchWordsText } from './styles';
const RecentSearches = () => {
    const initialSearchWords = [
        'React',
        'JavaScript',
        'TypeScript',
        'CSS',
        'HTML',
        'Node.js',
        'Express',
        'MongoDB',
        'GraphQL',
        'Redux',
        'MUI',
        'styled-components',
        'Webpack',
        'Babel',
        'REST API',
        'Axios',
        'Jest',
        'Next.js',
        'Gatsby',
        'ESLint'
    ];
    const [searchWords, setSearchWords] = useState(initialSearchWords);
    const handleDeleteAll = () => {
        setSearchWords([]);
    };
    return (_jsxs(RecentSearchesContainer, { children: [_jsxs(NameContainer, { children: [_jsx(SearchName, { searchName: "\uCD5C\uADFC \uAC80\uC0C9\uC5B4" }), searchWords.length > 0 && (_jsx(Button, { variant: "contained", sx: {
                            backgroundColor: '#f2f2f7',
                            textAlign: 'center',
                            fontSize: '13px',
                            fontWeight: 'bold',
                            color: 'black',
                            padding: '5px',
                            borderRadius: '15px',
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: '#e0e0e0'
                            }
                        }, onClick: handleDeleteAll, children: "\uC804\uCCB4 \uC0AD\uC81C" }))] }), _jsx(SearchWordsContainer, { children: searchWords.length > 0 ? (searchWords.map((word, index) => (_jsx(SearchWord, { searchWord: word, showClearIcon: true }, index)))) : (_jsx(NoSearchWordsText, { children: "\uCD5C\uADFC \uAC80\uC0C9\uC5B4\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." })) })] }));
};
export default RecentSearches;
