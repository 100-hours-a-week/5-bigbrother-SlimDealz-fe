import { jsx as _jsx } from "react/jsx-runtime";
import { BlockContainer } from './styles';
const Block = ({ itemId, children }) => {
    return _jsx(BlockContainer, { children: children });
};
export default Block;
