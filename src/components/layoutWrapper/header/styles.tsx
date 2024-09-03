import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';

export const CustomInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    width: '255px',
    padding: '10px 15px',
    fontSize: '18px'
  }
}));

export const AutoCompleteList = styled.ul`
  margin-top: 10px;
  padding: 10px;
  list-style-type: none;
  position: absolute;
  width: 300px;
  height: auto;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
  background-color: #ffffff;
  border: 1px solid #eee;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const AutoCompleteItem = styled.li`
  padding: 10px;
  border-radius: 4px;
  background-color: #f9f9f9;
  margin-bottom: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e0e0e0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 3vh;
  height: auto;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  background-color: #ffffff;
`;

export const IconContainer = styled.div<{
  $isHidden: boolean;
  $isSpecialPage?: boolean;
}>`
  display: ${({ $isHidden }) => ($isHidden ? 'none' : 'flex')};
  align-items: center;
  justify-content: flex-start;
  margin: 5px;
  position: absolute;
  padding-top: 5px;
  left: ${({ $isSpecialPage }) => ($isSpecialPage ? '20px' : '10px')};
  top: 15px;
`;

export const LogoContainer = styled.div<{
  $isCentered: boolean;
  $isSpecialPage: boolean;
  $isSimplePage: boolean;
}>`
  display: ${({ $isSpecialPage, $isSimplePage }) =>
    $isSpecialPage || $isSimplePage ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 5px;

  img {
    width: 200px;
    height: auto;
  }
`;

export const SearchContainer = styled.div<{
  $isSpecialPage: boolean;
  $isSimplePage: boolean;
}>`
  display: ${({ $isSimplePage }) => ($isSimplePage ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin-top: 5px;

  ${({ $isSpecialPage }) =>
    $isSpecialPage &&
    `
      margin-left: auto; /* DetailPage에서 검색 버튼 위치 조정 */
    `}
`;

export const PageTitle = styled.div<{
  $isSpecialPage: boolean;
  $isSimplePage: boolean;
}>`
  display: ${({ $isSimplePage, $isSpecialPage }) =>
    $isSimplePage ? 'flex' : $isSpecialPage ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 380px;
  height: 60px;
  font-size: 30px;
  font-weight: bold;
  margin: 5px;

  ${({ $isSimplePage }) =>
    $isSimplePage &&
    `
      display: flex;
      justify-content: center;
    `}
`;

export const MenuItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 390px;
  background-color: #ffffff;
  z-index: 999;
  padding: 15px;

  &.fixed {
    position: fixed;
    top: 0;
    left: 50%; /* 부모 요소의 중앙에 고정하기 위해 */
    transform: translateX(-50%); /* 가운데 정렬 */
    z-index: 1000;
  }
`;

export const MenuItem = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;
