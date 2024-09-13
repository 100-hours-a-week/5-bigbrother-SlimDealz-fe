import styled from 'styled-components';

export const MenuItemsContainerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 390px;
  background-color: #ffffff;
  z-index: 999;
  padding: 10px;

  &.fixed {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
  }
`;

export const MenuItem = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-style: normal;

  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;
