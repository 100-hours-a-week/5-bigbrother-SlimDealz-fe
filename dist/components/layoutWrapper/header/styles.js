import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';
export const CustomInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        width: '250px'
    }
}));
export const AutoCompleteList = styled.ul `
  margin-top: 10px;
  padding: 10px;
  list-style-type: none;
  position: absolute;
  width: 300px;
  height: auto;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
  background-color: #f9f9f9;
  border: 1px solid #f8ebeb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
export const AutoCompleteItem = styled.li `
  padding: 10px;
  border-radius: 4px;
  background-color: #f2f2f7;
  margin-bottom: 5px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
export const HeaderContainer = styled.div `
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 390px;
  min-height: 8vh;
  height: auto;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  background-color: #f3e6e6;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding-bottom: ${({ $hasLogo }) => ($hasLogo ? '10px' : '0')};
`;
export const IconContainer = styled.div `
  display: ${({ $isHidden }) => ($isHidden ? 'none' : 'flex')};
  align-items: center;
  justify-content: flex-start;
  margin: 5px;
  position: absolute;
  padding-top: 5px;
  left: ${({ $isSpecialPage }) => ($isSpecialPage ? '20px' : '10px')};
  top: 15px;
`;
export const LogoContainer = styled.div `
  display: ${({ $isSpecialPage, $isSimplePage }) => $isSpecialPage || $isSimplePage ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  img {
    width: 200px;
    height: auto;
  }
`;
export const SearchContainer = styled.div `
  display: ${({ $isSimplePage }) => ($isSimplePage ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 20px 0px;
  box-sizing: border-box;
  margin-top: 10px;

  ${({ $isSpecialPage }) => $isSpecialPage &&
    `
      margin-left: auto; /* DetailPage에서 검색 버튼 위치 조정 */
    `}
`;
export const PageTitle = styled.div `
  display: ${({ $isSimplePage, $isSpecialPage }) => $isSimplePage ? 'flex' : $isSpecialPage ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 380px;
  height: 60px;
  font-size: 30px;
  font-weight: bold;
  margin: 5px;

  ${({ $isSimplePage }) => $isSimplePage &&
    `
      display: flex;
      justify-content: center;
    `}
`;
