import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { getNumberWithComma } from '@/components/utils/conversion';
const ProductPrice = ({ originalPrice }) => {
    return (_jsx("div", { children: _jsx("p", { children: _jsxs("span", { style: { fontSize: '20px', fontWeight: 'bold', padding: '10px' }, children: [getNumberWithComma(originalPrice), '  ', "\uC6D0"] }) }) }));
};
export default ProductPrice;
