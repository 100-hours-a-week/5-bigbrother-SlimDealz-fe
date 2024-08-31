import{j as e,c as I,d as S,b,i as v,e as M,A as P,M as T}from"./mui-CcQhKvkX.js";import{r as u}from"./react-CcBtCB7v.js";import{a as f}from"./vendor-DsPaXkF5.js";import{d as n}from"./styledComponents-CoZbl3wq.js";import{L as _,g,d as $,b as R,r as y,c as D,e as z}from"./index-BKtPRGBx.js";import{u as B,c as U}from"./router-CK-IR3zP.js";import"./lottie-BbHPf8Bg.js";import"./swiper-DSaxWTil.js";const L=n.div`
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
  margin-top: 10px;
`,O=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0.6em 0.5em -0.4em #fdddff;
    transform: translateY(-0.25em);
    background: #fdddff;
  }
`,E=n.div`
  display: flex;
  align-items: center;
  max-width: 100px;
`,V=n.div`
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
`,F=n.button`
  padding: 10px;
  background-color: #1565c0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0d47a1;
  }
`,N=({productName:t})=>{const[o,r]=u.useState([]),[a,d]=u.useState(!0),[p,c]=u.useState(!1);if(u.useEffect(()=>{(async()=>{try{const l=await f.get("/api/v1/vendor-list",{params:{productName:t}});r(l.data)}catch(l){console.error("데이터를 불러오는 중 오류가 발생했습니다.",l)}finally{d(!1)}})()},[t]),a)return e.jsx(_,{});const i=p?o:o.slice(0,5);return e.jsxs(A,{children:[i.map((s,l)=>s.prices.map((x,h)=>e.jsxs(O,{onClick:()=>{x.vendor.vendorUrl&&window.open(x.vendor.vendorUrl,"_blank")},children:[e.jsx(E,{children:x.vendor.vendorName}),e.jsxs(V,{children:[`최저가 ${g(x.setPrice)}원`,e.jsx(q,{children:s.shippingFee?`배송비: ${g(s.shippingFee)}원`:"무료배송"})]})]},`${l}-${h}`))),o.length>5&&e.jsx(F,{onClick:()=>c(!p),children:p?"접기":"더보기"})]})},W=({productName:t})=>{const[o,r]=u.useState(0),a=(d,p)=>{r(p)};return e.jsxs("div",{style:{width:"100%",paddingBottom:"20px"},children:[e.jsx(I,{value:o,onChange:a,centered:!0,children:e.jsx(S,{label:"최저가 비교"})}),o===0&&e.jsx(N,{productName:t})]})},H=({src:t,alt:o,width:r,height:a})=>e.jsx("img",{src:t,alt:o,style:{width:r||"auto",height:a||"auto"}}),K=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,J=({src:t,alt:o})=>e.jsx(K,{children:e.jsx(H,{src:t,alt:o,width:"300px",height:"300px"})}),Y=({productName:t})=>{const[o,r]=u.useState(!1),a="http://localhost:8080";u.useEffect(()=>{(async()=>{const i=localStorage.getItem("jwtToken");if(!i)return;const s=d(i);if(!s){alert("Kakao_ID를 찾을 수 없습니다.");return}try{(await f.get(`${a}/v1/users/kakao/${encodeURIComponent(s)}/bookmarks/search`,{headers:{Authorization:`Bearer ${i}`},params:{productName:t}})).status===200?r(!0):r(!1)}catch(l){l.response&&l.response.status===404?r(!1):console.error("Error checking bookmark status:",l.message||l)}})()},[t,a]);const d=c=>{try{const s=c.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),l=decodeURIComponent(atob(s).split("").map(h=>"%"+("00"+h.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(l).kakao_Id||null}catch(i){return console.error("JWT token parsing error:",i.message||i),null}},p=async()=>{const c=localStorage.getItem("jwtToken");if(!c){alert("로그인이 필요합니다.");return}const i=d(c);if(!i){alert("Kakao_ID를 찾을 수 없습니다.");return}try{o?(await f.delete(`${a}/v1/users/kakao/${encodeURIComponent(i)}/bookmarks`,{headers:{Authorization:`Bearer ${c}`},params:{productName:t}}),r(!1),alert("북마크가 삭제되었습니다.")):(await f.post(`${a}/v1/users/kakao/${encodeURIComponent(i)}/bookmarks`,{productName:t},{headers:{Authorization:`Bearer ${c}`}}),r(!0),alert("북마크가 추가되었습니다."))}catch(s){console.error("Error handling bookmark:",s.message||s),alert("오류가 발생했습니다.")}};return e.jsx(b,{onClick:p,children:o?e.jsx($,{}):e.jsx(R,{})})},G=({originalPrice:t})=>e.jsx("div",{children:e.jsx("p",{children:e.jsxs("span",{style:{fontSize:"20px",fontWeight:"bold",padding:"10px"},children:[g(t),"  ","원"]})})});var m={},Q=v;Object.defineProperty(m,"__esModule",{value:!0});var w=m.default=void 0,X=Q(y()),Z=e;w=m.default=(0,X.default)((0,Z.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92"}),"Share");var k={},ee=v;Object.defineProperty(k,"__esModule",{value:!0});var C=k.default=void 0,te=ee(y()),oe=e;C=k.default=(0,te.default)((0,oe.jsx)("path",{d:"M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z"}),"ContentCopyRounded");const ne=()=>{const[t,o]=u.useState(!1),[r,a]=u.useState(!1),d=()=>{a(!0)},p=()=>{navigator.clipboard.writeText(window.location.href).then(()=>{o(!0),a(!1),setTimeout(()=>o(!1),2e3)}).catch(c=>{console.error("Failed to copy: ",c)})};return e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",position:"relative"},children:[e.jsx(M,{title:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(C,{fontSize:"small"}),e.jsx("span",{style:{marginLeft:"4px"},children:"URL복사"})]}),open:r,onOpen:d,onClose:()=>a(!1),placement:"top",arrow:!0,children:e.jsx(b,{onClick:p,style:{cursor:"pointer",color:"black"},disableRipple:!0,children:e.jsx(w,{})})}),t&&e.jsx(P,{severity:"success",style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:1e3},children:"      복사 완료!      "})]})},re=n.div`
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
`;const se=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  background-color: #f2f2f7;
  border-radius: 8px;
  height: 50px;
  padding: 0 10px;
`,ae=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`,ie=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  width: 35px;
  height: 30px;
  border-radius: 8px;
  padding-top: 4px;
`,ce=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  width: 35px;
  height: 30px;
  border-radius: 8px;
`,le=({open:t,onClose:o,onLogin:r})=>e.jsx(T,{open:t,onClose:o,children:e.jsx(de,{children:e.jsxs(pe,{children:[e.jsx(ue,{children:"로그인이 필요합니다"}),e.jsx("hr",{style:{width:"50px",margin:"10px auto",borderColor:"white"}}),e.jsxs(xe,{children:["북마크는 로그인이 필요한 서비스입니다. ",e.jsx("br",{}),"로그인하시겠습니까?"]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(j,{onClick:o,children:"취소"}),e.jsx(j,{onClick:r,children:"로그인"})]})]})})}),de=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,pe=n.div`
  background: #333;
  border-radius: 10px;
  width: 400px;
  padding: 30px;
  text-align: center;
  color: white;
`,ue=n.h2`
  margin-bottom: 20px;
  font-size: 24px;
`,xe=n.p`
  font-size: 14px;
  margin-bottom: 30px;
`,j=n.button`
  padding: 10px 50px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`,fe=({originalPrice:t,productName:o})=>{const[r,a]=u.useState(!1),[d,p]=u.useState(!1),c=B();u.useEffect(()=>{localStorage.getItem("jwtToken")&&a(!0)},[]);const i=()=>{r||p(!0)},s=()=>{p(!1)},l=()=>{c("/signIn")};return e.jsxs(re,{children:[e.jsxs(se,{children:[e.jsx(G,{originalPrice:t}),e.jsxs(ae,{children:[e.jsx(ie,{onClick:i,children:e.jsx(Y,{productName:o})}),e.jsx(ce,{children:e.jsx(ne,{})})]})]}),e.jsx(le,{open:d,onClose:s,onLogin:l})]})},we=()=>{const{productName:t}=U(),[o,r]=u.useState(null);if(u.useEffect(()=>{(async()=>{try{const s=await f.get(`/api/v1/product-detail?productName=${encodeURIComponent(t)}`);r(s.data)}catch(s){s.response?s.response.status===404?console.log("Product not found"):console.log("Server error"):console.log("Network error")}})()},[t]),!o)return e.jsx(D,{});const{imageUrl:a,name:d,prices:p}=o,{setPrice:c}=p[0];return e.jsxs(L,{children:[e.jsx(J,{src:a,alt:d}),e.jsx(z,{children:e.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",width:"300px"},children:d})}),e.jsx(fe,{originalPrice:c,productName:d}),e.jsx(W,{productName:d})]})};export{we as default};
