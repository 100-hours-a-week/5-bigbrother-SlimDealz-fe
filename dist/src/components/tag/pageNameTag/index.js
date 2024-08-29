import { jsx as _jsx } from "react/jsx-runtime";
import { PageNameContainer } from './styles';
const PageNameTag = ({ pageName }) => {
    return (_jsx(PageNameContainer, { children: _jsx("div", { children: pageName }) }));
};
export default PageNameTag;
