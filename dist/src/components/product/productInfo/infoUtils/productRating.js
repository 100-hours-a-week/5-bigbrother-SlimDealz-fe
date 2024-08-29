import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const ProductRating = () => {
    const [value] = React.useState(2.5);
    return (_jsxs("div", { style: {
            display: 'flex',
            width: 'auto',
        }, children: [_jsx(Rating, { name: "read-only", value: value, precision: 0.1, readOnly: true, emptyIcon: _jsx(StarIcon, { style: { opacity: 1, fontSize: 23.5 }, fontSize: "inherit" }) }), value !== null && (_jsx("div", { style: {
                    marginLeft: '0.5rem',
                    fontSize: 12,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }, children: value }))] }));
};
export default ProductRating;
