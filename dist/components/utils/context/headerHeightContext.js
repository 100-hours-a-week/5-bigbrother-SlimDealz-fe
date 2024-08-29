import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
const HeaderHeightContext = createContext({
    height: 120,
    setHeight: () => { }
});
export const useHeaderHeight = () => useContext(HeaderHeightContext);
export const HeaderHeightProvider = ({ children }) => {
    const [height, setHeight] = useState(120);
    return (_jsx(HeaderHeightContext.Provider, { value: { height, setHeight }, children: children }));
};
