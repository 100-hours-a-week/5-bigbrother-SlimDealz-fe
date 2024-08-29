import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from 'react';
const defaultContextValue = {
    searchQuery: '',
    setSearchQuery: () => { }
};
export const SearchContext = createContext(defaultContextValue);
export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    return (_jsx(SearchContext.Provider, { value: { searchQuery, setSearchQuery }, children: children }));
};
