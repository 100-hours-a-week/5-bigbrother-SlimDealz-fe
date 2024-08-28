import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef
} from 'react';

const HeaderHeightContext = createContext<{
  height: number;
  setHeight: (height: number) => void;
}>({
  height: 120, // 기본값
  setHeight: () => {}
});

export const useHeaderHeight = () => useContext(HeaderHeightContext);

type HeaderHeightProviderProps = {
  children: React.ReactNode;
};

export const HeaderHeightProvider: React.FC<HeaderHeightProviderProps> = ({
  children
}) => {
  const [height, setHeight] = useState(120);

  return (
    <HeaderHeightContext.Provider value={{ height, setHeight }}>
      {children}
    </HeaderHeightContext.Provider>
  );
};
