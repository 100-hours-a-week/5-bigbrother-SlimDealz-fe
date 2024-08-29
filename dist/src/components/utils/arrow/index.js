import { jsx as _jsx } from "react/jsx-runtime";
import { ArrowButton } from './styles';
export const LeftArrow = ({ onClick }) => {
    return (_jsx(ArrowButton, { className: "arrow", onClick: onClick, style: { left: 0 }, children: "\u2190" }));
};
export const RightArrow = ({ onClick }) => {
    return (_jsx(ArrowButton, { className: "arrow", onClick: onClick, style: { right: 0 }, children: "\u2192" }));
};
