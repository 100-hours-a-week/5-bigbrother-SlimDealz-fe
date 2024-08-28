import{d as n,j as e,c as I,e as S,b as k,i as j,g as P,A as T,M}from"./mui-C_CkU0iZ.js";import{r as p}from"./react-mdsbzbFi.js";import{a as x}from"./vendor-DsPaXkF5.js";import{c as _,g as f,d as $,e as R,r as v,u as z,f as D,L as U,h as B}from"./index-kNtBx-lW.js";const L=n.div`
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
`;const A=n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,O=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease; /* 호버 효과 전환 */

  &:hover {
    box-shadow: 0 0.6em 0.5em -0.4em #fdddff;
    transform: translateY(-0.25em);
    background: #fdddff;
  }
`,E=n.div`
  display: flex;
  align-items: center;
  max-width: 100px;
`;n.img`
  margin-right: 10px;
`;const V=n.div`
  display: flex;
  align-items: center;
  color: #1565c0;
  font-size: 18px;
  font-weight: bold;
`,q=n.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
  margin-left: 10px;
`,F=({productName:t})=>{const[o,r]=p.useState([]),[i,d]=p.useState(!0);return p.useEffect(()=>{(async()=>{try{const s=await x.get("/api/v1/vendor-list",{params:{productName:t}});r(s.data)}catch(s){console.error("데이터를 불러오는 중 오류가 발생했습니다.",s)}finally{d(!1)}})()},[t]),i?e.jsx(_,{}):e.jsx(A,{children:o.map((l,s)=>l.prices.map((a,c)=>e.jsxs(O,{onClick:()=>{a.vendor.vendorUrl&&window.open(a.vendor.vendorUrl,"_blank")},children:[e.jsx(E,{children:a.vendor.vendorName}),e.jsxs(V,{children:[`최저가 ${f(a.setPrice)}원`,e.jsx(q,{children:l.shippingFee?`배송비: ${f(l.shippingFee)}원`:"무료배송"})]})]},`${s}-${c}`)))})},N=({productName:t})=>{const[o,r]=p.useState(0),i=(d,l)=>{r(l)};return e.jsxs("div",{style:{width:"100%",paddingBottom:"20px"},children:[e.jsx(I,{value:o,onChange:i,centered:!0,children:e.jsx(S,{label:"최저가 비교"})}),o===0&&e.jsx(F,{productName:t})]})},W=({src:t,alt:o,width:r,height:i})=>e.jsx("img",{src:t,alt:o,style:{width:r||"auto",height:i||"auto"}}),H=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,J=({src:t,alt:o})=>e.jsx(H,{children:e.jsx(W,{src:t,alt:o,width:"300px",height:"300px"})}),K=({productName:t})=>{const[o,r]=p.useState(!1),i="http://localhost:8080";p.useEffect(()=>{(async()=>{const a=localStorage.getItem("jwtToken");if(!a){alert("JWT 토큰이 없습니다.");return}const c=d(a);if(!c){alert("Kakao_ID를 찾을 수 없습니다.");return}try{(await x.get(`${i}/api/v1/users/kakao/${encodeURIComponent(c)}/bookmarks/search`,{headers:{Authorization:`Bearer ${a}`},params:{productName:t}})).status===200?r(!0):r(!1)}catch(u){u.response&&u.response.status===404?r(!1):console.error("Error checking bookmark status:",u.message||u)}})()},[t,i]);const d=s=>{try{const c=s.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),u=decodeURIComponent(atob(c).split("").map(w=>"%"+("00"+w.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(u).kakao_Id||null}catch(a){return console.error("JWT token parsing error:",a.message||a),null}},l=async()=>{const s=localStorage.getItem("jwtToken");if(!s){alert("로그인이 필요합니다.");return}const a=d(s);if(!a){alert("Kakao_ID를 찾을 수 없습니다.");return}try{o?(await x.delete(`${i}/api/v1/users/kakao/${encodeURIComponent(a)}/bookmarks`,{headers:{Authorization:`Bearer ${s}`},params:{productName:t}}),r(!1),alert("북마크가 삭제되었습니다.")):(await x.post(`${i}/api/v1/users/kakao/${encodeURIComponent(a)}/bookmarks`,{productName:t},{headers:{Authorization:`Bearer ${s}`}}),r(!0),alert("북마크가 추가되었습니다."))}catch(c){console.error("Error handling bookmark:",c.message||c),alert("오류가 발생했습니다.")}};return e.jsx(k,{onClick:l,children:o?e.jsx($,{}):e.jsx(R,{})})},Y=({originalPrice:t})=>e.jsx("div",{children:e.jsx("p",{children:e.jsxs("span",{style:{fontSize:"20px",fontWeight:"bold",padding:"10px"},children:[f(t),"  ","원"]})})});var h={},G=j;Object.defineProperty(h,"__esModule",{value:!0});var b=h.default=void 0,Q=G(v()),X=e;b=h.default=(0,Q.default)((0,X.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92"}),"Share");var g={},Z=j;Object.defineProperty(g,"__esModule",{value:!0});var y=g.default=void 0,ee=Z(v()),te=e;y=g.default=(0,ee.default)((0,te.jsx)("path",{d:"M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z"}),"ContentCopyRounded");const oe=()=>{const[t,o]=p.useState(!1),[r,i]=p.useState(!1),d=()=>{i(!0)},l=()=>{navigator.clipboard.writeText(window.location.href).then(()=>{o(!0),i(!1),setTimeout(()=>o(!1),2e3)}).catch(s=>{console.error("Failed to copy: ",s)})};return e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",position:"relative"},children:[e.jsx(P,{title:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(y,{fontSize:"small"}),e.jsx("span",{style:{marginLeft:"4px"},children:"URL복사"})]}),open:r,onOpen:d,onClose:()=>i(!1),placement:"top",arrow:!0,children:e.jsx(k,{onClick:l,style:{cursor:"pointer",color:"black"},disableRipple:!0,children:e.jsx(b,{})})}),t&&e.jsx(T,{severity:"success",style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:1e3},children:"      복사 완료!      "})]})},ne=n.div`
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
`;const re=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  background-color: #f2f2f7;
  border-radius: 8px;
  height: 50px;
  padding: 0 10px;
`,se=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`,ae=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  width: 35px;
  height: 30px;
  border-radius: 8px;
  padding-top: 4px;
`,ie=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  width: 35px;
  height: 30px;
  border-radius: 8px;
`,ce=({open:t,onClose:o,onLogin:r})=>e.jsx(M,{open:t,onClose:o,children:e.jsx(le,{children:e.jsxs(de,{children:[e.jsx(pe,{children:"로그인이 필요합니다"}),e.jsx("hr",{style:{width:"50px",margin:"10px auto",borderColor:"white"}}),e.jsxs(ue,{children:["북마크는 로그인이 필요한 서비스입니다. ",e.jsx("br",{}),"로그인하시겠습니까?"]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(m,{onClick:o,children:"취소"}),e.jsx(m,{onClick:r,children:"로그인"})]})]})})}),le=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,de=n.div`
  background: #333;
  border-radius: 10px;
  width: 400px;
  padding: 30px;
  text-align: center;
  color: white;
`,pe=n.h2`
  margin-bottom: 20px;
  font-size: 24px;
`,ue=n.p`
  font-size: 14px;
  margin-bottom: 30px;
`,m=n.button`
  padding: 10px 50px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`,xe=({originalPrice:t,productName:o})=>{const[r,i]=p.useState(!1),[d,l]=p.useState(!1),s=z();p.useEffect(()=>{localStorage.getItem("jwtToken")&&i(!0)},[]);const a=()=>{r||l(!0)},c=()=>{l(!1)},u=()=>{s("/signIn")};return e.jsxs(ne,{children:[e.jsxs(re,{children:[e.jsx(Y,{originalPrice:t}),e.jsxs(se,{children:[e.jsx(ae,{onClick:a,children:e.jsx(K,{productName:o})}),e.jsx(ie,{children:e.jsx(oe,{})})]})]}),e.jsx(ce,{open:d,onClose:c,onLogin:u})]})},ke=()=>{const{productName:t}=D(),[o,r]=p.useState(null);if(p.useEffect(()=>{(async()=>{try{const c=await x.get(`/api/v1/product-detail?productName=${encodeURIComponent(t)}`);r(c.data)}catch(c){c.response?c.response.status===404?console.log("Product not found"):console.log("Server error"):console.log("Network error")}})()},[t]),!o)return e.jsx(U,{});const{imageUrl:i,name:d,prices:l}=o,{setPrice:s}=l[0];return e.jsxs(L,{children:[e.jsx(J,{src:i,alt:d}),e.jsx(B,{children:e.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",width:"300px"},children:d})}),e.jsx(xe,{originalPrice:s,productName:d}),e.jsx(N,{productName:d})]})};export{ke as default};
