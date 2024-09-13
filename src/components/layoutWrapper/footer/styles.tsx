import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  max-width: 390px;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  z-index: 800;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const StyledNavAction = styled.div<{ $active: boolean }>`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  color: ${({ $active }) => ($active ? '#FFAF00' : '#888888')};
  font-size: 12px;
  cursor: pointer;
  transition: color 0.3s ease;

  & svg {
    font-size: 22px;
    margin-bottom: 4px;
  }

  & span {
    font-size: 10px;
  }
`;

export const CenterIconWrapper = styled.div<{ $active: boolean }>`
  position: relative;
  background-color: ${({ $active }) => ($active ? '#FFAF00' : '#f0a500')};
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  transform: rotate(45deg);
  margin-top: -30px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffaf00;
  }

  & svg {
    transform: rotate(-45deg);
    color: #ffffff;
    font-size: 28px;
  }
`;
