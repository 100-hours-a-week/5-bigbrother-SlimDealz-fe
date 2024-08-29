import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled, { keyframes, css } from 'styled-components';
const bounce = (i) => keyframes `
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(${8 + i}px);
    opacity: ${i / 16};
  }
  100% {
    transform: translateY(0);
  }
`;
const Header = styled.header `
  width: 100%;
  height: 86vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #7bc6cc, #be93c5);
`;
const Title = styled.h1 `
  color: white;
  font-family: 'Oswald', sans-serif;
  font-size: 48px;
  text-align: center;
  div {
    display: inline-block;
    text-shadow: 2px 2px 3px #3d6366;
  }

  ${Array.from({ length: 11 }).map((_, i) => css `
      div:nth-child(${i + 1}) {
        animation: ${bounce(i + 1)} 3s ease-in-out ${i * 0.2}s infinite;
      }
    `)}
`;
const ComingSoon = () => {
    return (_jsx(Header, { children: _jsxs(Title, { children: [_jsx("div", { children: "C" }), _jsx("div", { children: "O" }), _jsx("div", { children: "M" }), _jsx("div", { children: "I" }), _jsx("div", { children: "N" }), _jsx("div", { children: "G" }), _jsx("div", { children: "\u00A0\u00A0" }), _jsx("div", { children: "S" }), _jsx("div", { children: "O" }), _jsx("div", { children: "O" }), _jsx("div", { children: "N" })] }) }));
};
export default ComingSoon;
