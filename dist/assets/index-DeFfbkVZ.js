import{j as t,i as j,f as y,D as S}from"./mui-CBnthf5k.js";import{r as i}from"./react-MtzkCgoa.js";import{d as r}from"./styledComponents-1o1C33xj.js";import{r as v,S as w}from"./index-CmDNw6Sw.js";import{u as C}from"./router-Cdb7tpuz.js";import"./lottie-mCH_PnFD.js";import"./swiper-D1z_ESSC.js";import"./vendor-DQF1Fin4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f7cb43dd-2ab3-4f69-b9d8-b28907cd46ac",e._sentryDebugIdIdentifier="sentry-dbid-f7cb43dd-2ab3-4f69-b9d8-b28907cd46ac")}catch{}})();const W=r.div`
  width: 390px;
  height: 100px;
  padding: 10px 5px 20px 5px;
  overflow: hidden;
`,p=r.div`
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
`,I=r.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
`,x=({searchName:e})=>t.jsx(R,{children:t.jsx(D,{children:e})}),R=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: auto;
  padding: 8px;
  border-radius: 20px;
  background-color: #f2f2f7;
`,D=r.div`
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  color: black;
`;var d={},E=j;Object.defineProperty(d,"__esModule",{value:!0});var h=d.default=void 0,N=E(v()),_=t;h=d.default=(0,N.default)((0,_.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"ClearRounded");const u=({searchWord:e,isPopular:n=!1,showClearIcon:o=!1})=>{const[a,c]=i.useState(!0),[s,G]=i.useState(e),g=()=>{c(!1)};if(!a)return null;const b=s.length>16?s.slice(0,16)+"...":s,m=n?$:f;return t.jsxs(m,{children:[t.jsx(L,{children:b}),o&&t.jsx(z,{onClick:g,children:t.jsx(h,{sx:{fontSize:15}})})]})},f=r.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 30px;
  padding: 5px 10px 5px 15px;
  border-radius: 10px;
  background-color: #f2f2f7;
`,$=r(f)`
  width: 140px;
  background-color: #f2f2f7;
`,L=r.div`
  text-align: left;
  font-size: 12px;
  color: black;
`,z=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,A=r.div`
  align-items: center;
  justify-content: center;
  padding: 10px;
`;r.div`
  display: flex;
  position: relative;
  justify-content: left;
  margin-bottom: 10px;
`;const P=r.div`
  display: flex;
  width: 310px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 10px 0 10px;
`,T=()=>{const e=["1. 닭가슴살 요리법","6. 닭가슴살 샐러드","2. 닭가슴살 칼로리","7. 닭가슴살 다이어트","3. 닭가슴살 소스","8. 닭가슴살 배달","4. 닭가슴살 영양성분","9. 닭가슴살 요리 추천","5. 닭가슴살 도시락","10. 닭가슴살 구매처"];return t.jsxs(A,{children:[t.jsx(p,{children:t.jsx(x,{searchName:"인기 검색어"})}),t.jsx(P,{children:e.map((n,o)=>t.jsx(u,{searchWord:n,isPopular:!0},o))})]})},M=()=>{const e=["React","JavaScript","TypeScript","CSS","HTML","Node.js","Express","MongoDB","GraphQL","Redux","MUI","styled-components","Webpack","Babel","REST API","Axios","Jest","Next.js","Gatsby","ESLint"],[n,o]=i.useState(e),a=()=>{o([])};return t.jsxs(W,{children:[t.jsxs(p,{children:[t.jsx(x,{searchName:"최근 검색어"}),n.length>0&&t.jsx(y,{variant:"contained",sx:{backgroundColor:"#f2f2f7",textAlign:"center",fontSize:"13px",fontWeight:"bold",color:"black",padding:"5px",borderRadius:"15px",boxShadow:"none","&:hover":{backgroundColor:"#e0e0e0"}},onClick:a,children:"전체 삭제"})]}),t.jsx(k,{children:n.length>0?n.map((c,s)=>t.jsx(u,{searchWord:c,showClearIcon:!0},s)):t.jsx(I,{children:"최근 검색어가 존재하지 않습니다."})})]})},B=r.ul`
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
`,F=({onSearch:e})=>{const n=["닭가슴살","닭가슴살 샐러드","닭가슴살 요리법","닭가슴살 도시락","닭가슴살 칼로리","닭가슴살 다이어트","닭가슴살 구매처","닭가슴살 영양성분","닭가슴살 소스","닭가슴살 배달"];return t.jsx(t.Fragment,{children:n.length>0&&t.jsx(B,{children:n.map((o,a)=>t.jsx(q,{onClick:()=>e(o),children:o},a))})})},l=r.div`
  display: ${({display:e})=>e||"block"};
  width: ${({width:e})=>e||"auto"};
  height: ${({height:e})=>e||"auto"};
  justify-content: ${({justifyContent:e})=>e||"flex-start"};
  align-items: ${({alignItems:e})=>e||"flex-start"};
  flex-direction: ${({flexDirection:e})=>e||"row"};
  padding: ${({padding:e})=>e||"0"};
  margin: ${({margin:e})=>e||"0"};
  background-color: ${({backgroundColor:e})=>e||"transparent"};
`,Y=()=>{const{searchQuery:e}=i.useContext(w),n=C(),o=a=>{console.log(`Selected search word: ${a}`)};return i.useEffect(()=>{n(location.pathname,{replace:!0})},[n]),t.jsx(t.Fragment,{children:e?t.jsx(l,{children:t.jsx(F,{onSearch:o})}):t.jsxs(l,{children:[t.jsx(M,{}),t.jsx(S,{sx:{my:2,borderColor:"rgba(0, 0, 0, 0.1)",width:"90%",mx:"auto"}}),t.jsx(T,{})]})})};export{Y as default};
