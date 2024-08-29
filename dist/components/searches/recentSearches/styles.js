import { styled } from 'styled-components';
export const RecentSearchesContainer = styled.div `
  width: 390px;
  height: 100px;
  padding: 10px 5px 20px 5px;
  overflow: hidden;
`;
export const NameContainer = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`;
export const SearchWordsContainer = styled.div `
  display: flex;
  margin: 15px 5px 10px 5px;
  overflow-x: auto; /* 가로 스크롤 활성화 */
  white-space: nowrap; /* 자식 요소들이 한 줄에 나열되도록 설정 */
  width: 100%; /* 부모 컨테이너의 너비에 맞춤 */
  box-sizing: border-box; /* 패딩이 너비에 포함되도록 설정 */
  gap: 5px; /* SearchWord들 사이에 5px 간격 추가 */

  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 엣지에서 스크롤바 숨기기 */
  }
  -ms-overflow-style: none; /* IE 및 Edge에서 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
`;
export const NoSearchWordsText = styled.div `
  width: 100%;
  text-align: center;
  font-size: 16px;
`;
