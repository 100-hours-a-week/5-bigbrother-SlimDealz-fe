import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import MallList from '../list/mallList';
const TabsComponent = ({ productName }) => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (_jsxs("div", { style: { width: '100%', paddingBottom: '20px' }, children: [_jsx(Tabs, { value: value, onChange: handleChange, centered: true, children: _jsx(Tab, { label: "\uCD5C\uC800\uAC00 \uBE44\uAD50" }) }), value === 0 && _jsx(MallList, { productName: productName })] }));
};
export default TabsComponent;
