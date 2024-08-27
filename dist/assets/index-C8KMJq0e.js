import{d as n,j as e,i as b,h as S,D as v}from"./mui-BKwklMrZ.js";import{r as i}from"./react-mdsbzbFi.js";import{r as w,S as y,u as C}from"./index-B0180FzU.js";import"./vendor-DsPaXkF5.js";const W=n.div`
  width: 390px;
  height: 100px;
  padding: 10px 5px 20px 5px;
  overflow: hidden;
`,x=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`,k=n.div`
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
`,R=n.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
`,p=({searchName:t})=>e.jsx(I,{children:e.jsx(N,{children:t})}),I=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: auto;
  padding: 8px;
  border-radius: 20px;
  background-color: #f2f2f7;
`,N=n.div`
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  color: black;
`;var d={},$=b;Object.defineProperty(d,"__esModule",{value:!0});var h=d.default=void 0,E=$(w()),L=e;h=d.default=(0,E.default)((0,L.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"ClearRounded");const u=({searchWord:t,isPopular:r=!1,showClearIcon:o=!1})=>{const[a,c]=i.useState(!0),[s,G]=i.useState(t),g=()=>{c(!1)};if(!a)return null;const m=s.length>16?s.slice(0,16)+"...":s,j=r?z:f;return e.jsxs(j,{children:[e.jsx(A,{children:m}),o&&e.jsx(D,{onClick:g,children:e.jsx(h,{sx:{fontSize:15}})})]})},f=n.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 30px;
  padding: 5px 10px 5px 15px;
  border-radius: 10px;
  background-color: #f2f2f7;
`,z=n(f)`
  width: 140px;
  background-color: #f2f2f7;
`,A=n.div`
  text-align: left;
  font-size: 12px;
  color: black;
`,D=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,P=n.div`
  align-items: center;
  justify-content: center;
  padding: 10px;
`;n.div`
  display: flex;
  position: relative;
  justify-content: left;
  margin-bottom: 10px;
`;const T=n.div`
  display: flex;
  width: 310px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 10px 0 10px;
`,_=()=>{const t=["1. 닭가슴살 요리법","6. 닭가슴살 샐러드","2. 닭가슴살 칼로리","7. 닭가슴살 다이어트","3. 닭가슴살 소스","8. 닭가슴살 배달","4. 닭가슴살 영양성분","9. 닭가슴살 요리 추천","5. 닭가슴살 도시락","10. 닭가슴살 구매처"];return e.jsxs(P,{children:[e.jsx(x,{children:e.jsx(p,{searchName:"인기 검색어"})}),e.jsx(T,{children:t.map((r,o)=>e.jsx(u,{searchWord:r,isPopular:!0},o))})]})},M=()=>{const t=["React","JavaScript","TypeScript","CSS","HTML","Node.js","Express","MongoDB","GraphQL","Redux","MUI","styled-components","Webpack","Babel","REST API","Axios","Jest","Next.js","Gatsby","ESLint"],[r,o]=i.useState(t),a=()=>{o([])};return e.jsxs(W,{children:[e.jsxs(x,{children:[e.jsx(p,{searchName:"최근 검색어"}),r.length>0&&e.jsx(S,{variant:"contained",sx:{backgroundColor:"#f2f2f7",textAlign:"center",fontSize:"13px",fontWeight:"bold",color:"black",padding:"5px",borderRadius:"15px",boxShadow:"none","&:hover":{backgroundColor:"#e0e0e0"}},onClick:a,children:"전체 삭제"})]}),e.jsx(k,{children:r.length>0?r.map((c,s)=>e.jsx(u,{searchWord:c,showClearIcon:!0},s)):e.jsx(R,{children:"최근 검색어가 존재하지 않습니다."})})]})},B=n.ul`
  margin-top: 100px;
  padding: 10px;
  list-style-type: none;
  position: absolute;
  width: 390px;
  height: auto;
  overflow-y: auto;
  z-index: 1;
`,q=n.li`
  padding: 10px;
  border-radius: 25px;
  margin-bottom: 10px;
  font-size: 12px;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
`,F=({onSearch:t})=>{const r=["닭가슴살","닭가슴살 샐러드","닭가슴살 요리법","닭가슴살 도시락","닭가슴살 칼로리","닭가슴살 다이어트","닭가슴살 구매처","닭가슴살 영양성분","닭가슴살 소스","닭가슴살 배달"];return e.jsx(e.Fragment,{children:r.length>0&&e.jsx(B,{children:r.map((o,a)=>e.jsx(q,{onClick:()=>t(o),children:o},a))})})},l=n.div`
  display: ${({display:t})=>t||"block"};
  width: ${({width:t})=>t||"auto"};
  height: ${({height:t})=>t||"auto"};
  justify-content: ${({justifyContent:t})=>t||"flex-start"};
  align-items: ${({alignItems:t})=>t||"flex-start"};
  flex-direction: ${({flexDirection:t})=>t||"row"};
  padding: ${({padding:t})=>t||"0"};
  margin: ${({margin:t})=>t||"0"};
  background-color: ${({backgroundColor:t})=>t||"transparent"};
`,O=()=>{const{searchQuery:t}=i.useContext(y),r=C(),o=a=>{console.log(`Selected search word: ${a}`)};return i.useEffect(()=>{r(location.pathname,{replace:!0})},[r]),e.jsx(e.Fragment,{children:t?e.jsx(l,{children:e.jsx(F,{onSearch:o})}):e.jsxs(l,{children:[e.jsx(M,{}),e.jsx(v,{sx:{my:2,borderColor:"rgba(0, 0, 0, 0.1)",width:"90%",mx:"auto"}}),e.jsx(_,{})]})})};export{O as default};
