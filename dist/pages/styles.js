import styled from 'styled-components';
export const styles = {
    Container: styled.div `
    width: 390px;
    height: auto;
    min-height: 100dvh;
    margin: 0 auto;
    padding-top: ${({ $paddingTop }) => `${$paddingTop}px`};
    padding-bottom: 50px;
    box-sizing: border-box;
    overflow-x: hidden;
    background-color: var(--background-color);
  `
};
