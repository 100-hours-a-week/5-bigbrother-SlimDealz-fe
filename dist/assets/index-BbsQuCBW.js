import{d as n,j as e,c as y,e as w,b as g,i as m,g as C,A as I,M as S}from"./mui-C_CkU0iZ.js";import{r as i}from"./react-mdsbzbFi.js";import{a as p}from"./vendor-DsPaXkF5.js";import{g as P,d as M,c as $,r as j,u as T,e as z,L as _,f as B}from"./index-B0ggh6J5.js";const D=n.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 16px;
  background-color: var(--background-color);
`;n.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-top: 32px;
  margin-bottom: 16px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 8px;
`;const R=n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,L=n.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;n.img`
  width: 80px;
  height: 50px;
  object-fit: contain;
  margin-right: 10px;
`;const O=n.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`,E=n.div`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;n.div`
  font-size: 12px;
  color: #ffffff;
  background-color: #ff6b6b;
  padding: 5px 10px;
  border-radius: 4px;
`;const A=({productData:o})=>{const{name:t,prices:r}=o,[s,c]=i.useState([]),[a,l]=i.useState(!0);return i.useEffect(()=>{(async()=>{try{const d=await p.get("/api/v1/vendor-list",{params:{productName:t}});c(d.data)}catch{console.log("데이터를 불러오는 중 오류가 발생했습니다.")}finally{l(!1)}})()},[t]),a?e.jsx("div",{children:"로딩 중..."}):e.jsx(R,{children:s.map(u=>e.jsx(L,{children:e.jsxs(O,{children:[e.jsx("div",{children:t}),e.jsx(E,{children:r&&r.length>0?`${P(r[0].setPrice)}원`:"가격 없음"})]})},t))})},V=({productData:o})=>{const[t,r]=i.useState(0),s=(c,a)=>{r(a)};return e.jsxs("div",{style:{width:"100%",paddingBottom:"20px"},children:[e.jsx(y,{value:t,onChange:s,centered:!0,children:e.jsx(w,{label:"최저가 비교"})}),t===0&&e.jsx(A,{productData:o})]})},q=({src:o,alt:t,width:r,height:s})=>e.jsx("img",{src:o,alt:t,style:{width:r||"auto",height:s||"auto"}}),N=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,U=({src:o,alt:t})=>e.jsx(N,{children:e.jsx(q,{src:o,alt:t,width:"300px",height:"300px"})}),H=({productName:o})=>{const[t,r]=i.useState(!1),s=localStorage.getItem("userId");i.useEffect(()=>{s&&(async()=>{try{const l=await p.get(`/api/v1/users/${s}/bookmarks/${o}`,{headers:{Authorization:`Bearer ${localStorage.getItem("jwtToken")}`}});r(l.data.bookmarked)}catch(l){console.error("Error fetching bookmark status:",l)}})()},[o,s]);const c=async()=>{try{t?(await p.delete(`/api/v1/users/${s}/bookmarks/${o}`,{headers:{Authorization:`Bearer ${localStorage.getItem("jwtToken")}`}}),r(!1),alert("북마크가 삭제되었습니다.")):(await p.post(`/api/v1/users/${s}/bookmarks`,{productName:o},{headers:{Authorization:`Bearer ${localStorage.getItem("jwtToken")}`}}),r(!0),alert("북마크가 추가되었습니다."))}catch(a){console.error("Error handling bookmark:",a),alert("오류가 발생했습니다.")}};return e.jsx(g,{onClick:c,children:t?e.jsx(M,{}):e.jsx($,{})})},W=({originalPrice:o})=>e.jsx("div",{children:e.jsx("p",{children:e.jsxs("span",{style:{fontSize:"20px",fontWeight:"bold",padding:"10px"},children:[o,"  ","원"]})})});var x={},F=m;Object.defineProperty(x,"__esModule",{value:!0});var v=x.default=void 0,G=F(j()),J=e;v=x.default=(0,G.default)((0,J.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92"}),"Share");var f={},K=m;Object.defineProperty(f,"__esModule",{value:!0});var b=f.default=void 0,Q=K(j()),X=e;b=f.default=(0,Q.default)((0,X.jsx)("path",{d:"M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z"}),"ContentCopyRounded");const Y=()=>{const[o,t]=i.useState(!1),[r,s]=i.useState(!1),c=()=>{s(!0)},a=()=>{navigator.clipboard.writeText(window.location.href).then(()=>{t(!0),s(!1),setTimeout(()=>t(!1),2e3)}).catch(l=>{console.error("Failed to copy: ",l)})};return e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",position:"relative"},children:[e.jsx(C,{title:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(b,{fontSize:"small"}),e.jsx("span",{style:{marginLeft:"4px"},children:"URL복사"})]}),open:r,onOpen:c,onClose:()=>s(!1),placement:"top",arrow:!0,children:e.jsx(g,{onClick:a,style:{cursor:"pointer",color:"black"},disableRipple:!0,children:e.jsx(v,{})})}),o&&e.jsx(I,{severity:"success",style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:1e3},children:"      복사 완료!      "})]})},Z=n.div`
  justify-content: left;
  align-items: center;
`;n.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  background-color: #f2f2f7;
  border-radius: 8px;
  height: 30px;
`;const ee=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  background-color: #f2f2f7;
  border-radius: 8px;
  height: 50px;
  padding: 0 10px;
`,te=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`,oe=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  width: 35px;
  height: 30px;
  border-radius: 8px;
  padding-top: 4px;
`,ne=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  width: 35px;
  height: 30px;
  border-radius: 8px;
`,re=({open:o,onClose:t,onLogin:r})=>e.jsx(S,{open:o,onClose:t,children:e.jsx(se,{children:e.jsxs(ae,{children:[e.jsx(ie,{children:"로그인이 필요합니다"}),e.jsx("hr",{style:{width:"50px",margin:"10px auto",borderColor:"white"}}),e.jsxs(ce,{children:["북마크는 로그인이 필요한 서비스입니다. ",e.jsx("br",{}),"로그인하시겠습니까?"]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(h,{onClick:t,children:"취소"}),e.jsx(h,{onClick:r,children:"로그인"})]})]})})}),se=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,ae=n.div`
  background: #333;
  border-radius: 10px;
  width: 400px;
  padding: 30px;
  text-align: center;
  color: white;
`,ie=n.h2`
  margin-bottom: 20px;
  font-size: 24px;
`,ce=n.p`
  font-size: 14px;
  margin-bottom: 30px;
`,h=n.button`
  padding: 10px 50px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`,le=({originalPrice:o,productName:t})=>{const[r,s]=i.useState(!1),[c,a]=i.useState(!1),l=T();i.useEffect(()=>{localStorage.getItem("jwtToken")&&s(!0)},[]);const u=()=>{r||a(!0)},d=()=>{a(!1)},k=()=>{l("/signIn")};return e.jsxs(Z,{children:[e.jsxs(ee,{children:[e.jsx(W,{originalPrice:o}),e.jsxs(te,{children:[e.jsx(oe,{onClick:u,children:e.jsx(H,{productName:t})}),e.jsx(ne,{children:e.jsx(Y,{})})]})]}),e.jsx(re,{open:c,onClose:d,onLogin:k})]})},he=()=>{const{productName:o}=z(),[t,r]=i.useState(null);if(i.useEffect(()=>{(async()=>{try{const d=await p.get(`/api/v1/product-detail?productName=${encodeURIComponent(o)}`);r(d.data)}catch(d){d.response?d.response.status===404?console.log("Product not found"):console.log("Server error"):console.log("Network error")}})()},[o]),!t)return e.jsx(_,{});const{image:s,name:c,prices:a}=t,{setPrice:l}=a[0];return e.jsxs(D,{children:[e.jsx(U,{src:s,alt:c}),e.jsx(B,{children:e.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",width:"300px"},children:c})}),e.jsx(le,{originalPrice:l,productName:c}),e.jsx(V,{productData:t})]})};export{he as default};
