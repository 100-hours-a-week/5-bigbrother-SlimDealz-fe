import{d as r,j as e,c as P,e as $,b as y,i as w,g as M,A as T,M as _}from"./mui-BKwklMrZ.js";import{r as i}from"./react-mdsbzbFi.js";import{a as h}from"./vendor-DsPaXkF5.js";import{g as z,d as R,c as D,r as I,u as U,e as A,L as B,f as L}from"./index-B0180FzU.js";const O=r.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 16px;
  background-color: var(--background-color);
`;r.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-top: 32px;
  margin-bottom: 16px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 8px;
`;const E=r.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,N=r.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;r.img`
  width: 80px;
  height: 50px;
  object-fit: contain;
  margin-right: 10px;
`;const V=r.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`,q=r.div`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;r.div`
  font-size: 12px;
  color: #ffffff;
  background-color: #ff6b6b;
  padding: 5px 10px;
  border-radius: 4px;
`;const W=({productData:o})=>{const{name:t,prices:n}=o,[s,c]=i.useState([]),[a,l]=i.useState(!0);return i.useEffect(()=>{(async()=>{try{const d=await h.get("/api/v1/vendor-list",{params:{productName:t}});c(d.data)}catch{console.log("데이터를 불러오는 중 오류가 발생했습니다.")}finally{l(!1)}})()},[t]),a?e.jsx("div",{children:"로딩 중..."}):e.jsx(E,{children:s.map(u=>e.jsx(N,{children:e.jsxs(V,{children:[e.jsx("div",{children:t}),e.jsx(q,{children:n&&n.length>0?`${z(n[0].setPrice)}원`:"가격 없음"})]})},t))})},F=({productData:o})=>{const[t,n]=i.useState(0),s=(c,a)=>{n(a)};return e.jsxs("div",{style:{width:"100%",paddingBottom:"20px"},children:[e.jsx(P,{value:t,onChange:s,centered:!0,children:e.jsx($,{label:"최저가 비교"})}),t===0&&e.jsx(W,{productData:o})]})},H=({src:o,alt:t,width:n,height:s})=>e.jsx("img",{src:o,alt:t,style:{width:n||"auto",height:s||"auto"}}),J=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,K=({src:o,alt:t})=>e.jsx(J,{children:e.jsx(H,{src:o,alt:t,width:"300px",height:"300px"})}),G=({productName:o})=>{const[t,n]=i.useState(!1),[s,c]=i.useState(null),a=void 0,l=encodeURIComponent(o);i.useEffect(()=>{(async()=>{const p=localStorage.getItem("jwtToken");if(!p){alert("JWT 토큰이 없습니다.");return}const g=u(p);if(!g){alert("Kakao_ID를 찾을 수 없습니다.");return}try{const f=await h.get(`${a}/api/v1/users/kakao/${g}/id`,{headers:{Authorization:`Bearer ${p}`}});if(f.status===200){const m=f.data;c(m),localStorage.setItem("userId",m);const j=await h.get(`${a}/api/v1/users/${m}/bookmarks`,{headers:{Authorization:`Bearer ${p}`}});j.status===200&&n(j.data.bookmarked)}else throw new Error("User ID를 가져오는 데 실패했습니다.")}catch(f){console.error("Error fetching user ID or bookmark status:",f)}})()},[l,a]);const u=x=>{try{const g=x.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),f=decodeURIComponent(atob(g).split("").map(j=>"%"+("00"+j.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(f).kakao_Id||null}catch(p){return console.error("JWT token parsing error:",p),null}},d=async()=>{try{if(!s){alert("로그인이 필요합니다.");return}t?(await h.delete(`${a}/api/v1/users/${s}/bookmarks/${l}`,{headers:{Authorization:`Bearer ${localStorage.getItem("jwtToken")}`}}),n(!1),alert("북마크가 삭제되었습니다.")):(await h.post(`${a}/api/v1/users/${s}/bookmarks/${l}`,{productName:o},{headers:{Authorization:`Bearer ${localStorage.getItem("jwtToken")}`}}),n(!0),alert("북마크가 추가되었습니다."))}catch(x){console.error("Error handling bookmark:",x),alert("오류가 발생했습니다.")}};return e.jsx(y,{onClick:d,children:t?e.jsx(R,{}):e.jsx(D,{})})},Q=({originalPrice:o})=>e.jsx("div",{children:e.jsx("p",{children:e.jsxs("span",{style:{fontSize:"20px",fontWeight:"bold",padding:"10px"},children:[o,"  ","원"]})})});var k={},X=w;Object.defineProperty(k,"__esModule",{value:!0});var C=k.default=void 0,Y=X(I()),Z=e;C=k.default=(0,Y.default)((0,Z.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92"}),"Share");var b={},ee=w;Object.defineProperty(b,"__esModule",{value:!0});var S=b.default=void 0,te=ee(I()),oe=e;S=b.default=(0,te.default)((0,oe.jsx)("path",{d:"M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z"}),"ContentCopyRounded");const re=()=>{const[o,t]=i.useState(!1),[n,s]=i.useState(!1),c=()=>{s(!0)},a=()=>{navigator.clipboard.writeText(window.location.href).then(()=>{t(!0),s(!1),setTimeout(()=>t(!1),2e3)}).catch(l=>{console.error("Failed to copy: ",l)})};return e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",position:"relative"},children:[e.jsx(M,{title:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(S,{fontSize:"small"}),e.jsx("span",{style:{marginLeft:"4px"},children:"URL복사"})]}),open:n,onOpen:c,onClose:()=>s(!1),placement:"top",arrow:!0,children:e.jsx(y,{onClick:a,style:{cursor:"pointer",color:"black"},disableRipple:!0,children:e.jsx(C,{})})}),o&&e.jsx(T,{severity:"success",style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:1e3},children:"      복사 완료!      "})]})},ne=r.div`
  justify-content: left;
  align-items: center;
`;r.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  background-color: #f2f2f7;
  border-radius: 8px;
  height: 30px;
`;const se=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  background-color: #f2f2f7;
  border-radius: 8px;
  height: 50px;
  padding: 0 10px;
`,ae=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`,ie=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  width: 35px;
  height: 30px;
  border-radius: 8px;
  padding-top: 4px;
`,ce=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  width: 35px;
  height: 30px;
  border-radius: 8px;
`,le=({open:o,onClose:t,onLogin:n})=>e.jsx(_,{open:o,onClose:t,children:e.jsx(de,{children:e.jsxs(pe,{children:[e.jsx(ue,{children:"로그인이 필요합니다"}),e.jsx("hr",{style:{width:"50px",margin:"10px auto",borderColor:"white"}}),e.jsxs(xe,{children:["북마크는 로그인이 필요한 서비스입니다. ",e.jsx("br",{}),"로그인하시겠습니까?"]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(v,{onClick:t,children:"취소"}),e.jsx(v,{onClick:n,children:"로그인"})]})]})})}),de=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,pe=r.div`
  background: #333;
  border-radius: 10px;
  width: 400px;
  padding: 30px;
  text-align: center;
  color: white;
`,ue=r.h2`
  margin-bottom: 20px;
  font-size: 24px;
`,xe=r.p`
  font-size: 14px;
  margin-bottom: 30px;
`,v=r.button`
  padding: 10px 50px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`,fe=({originalPrice:o,productName:t})=>{const[n,s]=i.useState(!1),[c,a]=i.useState(!1),l=U();i.useEffect(()=>{localStorage.getItem("jwtToken")&&s(!0)},[]);const u=()=>{n||a(!0)},d=()=>{a(!1)},x=()=>{l("/signIn")};return e.jsxs(ne,{children:[e.jsxs(se,{children:[e.jsx(Q,{originalPrice:o}),e.jsxs(ae,{children:[e.jsx(ie,{onClick:u,children:e.jsx(G,{productName:t})}),e.jsx(ce,{children:e.jsx(re,{})})]})]}),e.jsx(le,{open:c,onClose:d,onLogin:x})]})},ke=()=>{const{productName:o}=A(),[t,n]=i.useState(null);if(i.useEffect(()=>{(async()=>{try{const d=await h.get(`/api/v1/product-detail?productName=${encodeURIComponent(o)}`);n(d.data)}catch(d){d.response?d.response.status===404?console.log("Product not found"):console.log("Server error"):console.log("Network error")}})()},[o]),!t)return e.jsx(B,{});const{image:s,name:c,prices:a}=t,{setPrice:l}=a[0];return e.jsxs(O,{children:[e.jsx(K,{src:s,alt:c}),e.jsx(L,{children:e.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",width:"300px"},children:c})}),e.jsx(fe,{originalPrice:l,productName:c}),e.jsx(F,{productData:t})]})};export{ke as default};
