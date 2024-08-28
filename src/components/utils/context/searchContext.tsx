import React, { createContext, useState, ReactNode } from 'react';

interface SearchContextProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const defaultContextValue: SearchContextProps = {
  searchQuery: '',
  setSearchQuery: () => {}
};

export const SearchContext =
  createContext<SearchContextProps>(defaultContextValue);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
