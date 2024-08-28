import{j as e,i as b,f as S,D as v}from"./mui-CcQhKvkX.js";import{r as s}from"./react-CcBtCB7v.js";import{d as r}from"./styledComponents-CoZbl3wq.js";import{r as w,S as y}from"./index-BDHF3RPN.js";import{u as C}from"./router-CK-IR3zP.js";import"./vendor-DsPaXkF5.js";import"./lottie-BbHPf8Bg.js";import"./swiper-DSaxWTil.js";const W=r.div`
  width: 390px;
  height: 100px;
  padding: 10px 5px 20px 5px;
  overflow: hidden;
`,x=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`,k=r.div`
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
`,R=r.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
`,p=({searchName:t})=>e.jsx(I,{children:e.jsx(N,{children:t})}),I=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: auto;
  padding: 8px;
  border-radius: 20px;
  background-color: #f2f2f7;
`,N=r.div`
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  color: black;
`;var d={},$=b;Object.defineProperty(d,"__esModule",{value:!0});var h=d.default=void 0,E=$(w()),L=e;h=d.default=(0,E.default)((0,L.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"ClearRounded");const u=({searchWord:t,isPopular:n=!1,showClearIcon:o=!1})=>{const[a,c]=s.useState(!0),[i,G]=s.useState(t),g=()=>{c(!1)};if(!a)return null;const m=i.length>16?i.slice(0,16)+"...":i,j=n?z:f;return e.jsxs(j,{children:[e.jsx(A,{children:m}),o&&e.jsx(D,{onClick:g,children:e.jsx(h,{sx:{fontSize:15}})})]})},f=r.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 30px;
  padding: 5px 10px 5px 15px;
  border-radius: 10px;
  background-color: #f2f2f7;
`,z=r(f)`
  width: 140px;
  background-color: #f2f2f7;
`,A=r.div`
  text-align: left;
  font-size: 12px;
  color: black;
`,D=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,P=r.div`
  align-items: center;
  justify-content: center;
  padding: 10px;
`;r.div`
  display: flex;
  position: relative;
  justify-content: left;
  margin-bottom: 10px;
`;const T=r.div`
  display: flex;
  width: 310px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 10px 0 10px;
`,_=()=>{const t=["1. 닭가슴살 요리법","6. 닭가슴살 샐러드","2. 닭가슴살 칼로리","7. 닭가슴살 다이어트","3. 닭가슴살 소스","8. 닭가슴살 배달","4. 닭가슴살 영양성분","9. 닭가슴살 요리 추천","5. 닭가슴살 도시락","10. 닭가슴살 구매처"];return e.jsxs(P,{children:[e.jsx(x,{children:e.jsx(p,{searchName:"인기 검색어"})}),e.jsx(T,{children:t.map((n,o)=>e.jsx(u,{searchWord:n,isPopular:!0},o))})]})},M=()=>{const t=["React","JavaScript","TypeScript","CSS","HTML","Node.js","Express","MongoDB","GraphQL","Redux","MUI","styled-components","Webpack","Babel","REST API","Axios","Jest","Next.js","Gatsby","ESLint"],[n,o]=s.useState(t),a=()=>{o([])};return e.jsxs(W,{children:[e.jsxs(x,{children:[e.jsx(p,{searchName:"최근 검색어"}),n.length>0&&e.jsx(S,{variant:"contained",sx:{backgroundColor:"#f2f2f7",textAlign:"center",fontSize:"13px",fontWeight:"bold",color:"black",padding:"5px",borderRadius:"15px",boxShadow:"none","&:hover":{backgroundColor:"#e0e0e0"}},onClick:a,children:"전체 삭제"})]}),e.jsx(k,{children:n.length>0?n.map((c,i)=>e.jsx(u,{searchWord:c,showClearIcon:!0},i)):e.jsx(R,{children:"최근 검색어가 존재하지 않습니다."})})]})},B=r.ul`
  margin-top: 100px;
  padding: 10px;
  list-style-type: none;
  position: absolute;
  width: 390px;
  height: auto;
  overflow-y: auto;
  z-index: 1;
`,q=r.li`
  padding: 10px;
  border-radius: 25px;
  margin-bottom: 10px;
  font-size: 12px;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
`,F=({onSearch:t})=>{const n=["닭가슴살","닭가슴살 샐러드","닭가슴살 요리법","닭가슴살 도시락","닭가슴살 칼로리","닭가슴살 다이어트","닭가슴살 구매처","닭가슴살 영양성분","닭가슴살 소스","닭가슴살 배달"];return e.jsx(e.Fragment,{children:n.length>0&&e.jsx(B,{children:n.map((o,a)=>e.jsx(q,{onClick:()=>t(o),children:o},a))})})},l=r.div`
  display: ${({display:t})=>t||"block"};
  width: ${({width:t})=>t||"auto"};
  height: ${({height:t})=>t||"auto"};
  justify-content: ${({justifyContent:t})=>t||"flex-start"};
  align-items: ${({alignItems:t})=>t||"flex-start"};
  flex-direction: ${({flexDirection:t})=>t||"row"};
  padding: ${({padding:t})=>t||"0"};
  margin: ${({margin:t})=>t||"0"};
  background-color: ${({backgroundColor:t})=>t||"transparent"};
`,Y=()=>{const{searchQuery:t}=s.useContext(y),n=C(),o=a=>{console.log(`Selected search word: ${a}`)};return s.useEffect(()=>{n(location.pathname,{replace:!0})},[n]),e.jsx(e.Fragment,{children:t?e.jsx(l,{children:e.jsx(F,{onSearch:o})}):e.jsxs(l,{children:[e.jsx(M,{}),e.jsx(v,{sx:{my:2,borderColor:"rgba(0, 0, 0, 0.1)",width:"90%",mx:"auto"}}),e.jsx(_,{})]})})};export{Y as default};
