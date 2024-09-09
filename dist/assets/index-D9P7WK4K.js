import{j as e,c as C,d as I,b as k,i as j,e as S,A as _}from"./mui-CBnthf5k.js";import{r as l}from"./react-MtzkCgoa.js";import{d as c}from"./styledComponents-1o1C33xj.js";import{L as P,g,a as x,d as D,c as T,r as b,e as R,f as $,h as M}from"./index-CmDNw6Sw.js";import{u as B,c as U}from"./router-Cdb7tpuz.js";import"./lottie-mCH_PnFD.js";import"./swiper-D1z_ESSC.js";import"./vendor-DQF1Fin4.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="3123e76d-966d-4199-9dbb-00791c256a34",t._sentryDebugIdIdentifier="sentry-dbid-3123e76d-966d-4199-9dbb-00791c256a34")}catch{}})();const L=c.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 16px;
  background-color: var(--background-color);
`;c.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-top: 32px;
  margin-bottom: 16px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 8px;
`;const z=c.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`,A=c.div`
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
`,E=c.div`
  display: flex;
  align-items: center;
  max-width: 100px;
`,O=c.div`
  display: flex;
  align-items: center;
  color: #1565c0;
  font-size: 18px;
  font-weight: bold;
`,V=c.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
  margin-left: 10px;
`,q=c.button`
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
`,F=({productName:t})=>{const[o,a]=l.useState([]),[i,d]=l.useState(!0),[n,r]=l.useState(!1);if(l.useEffect(()=>{(async()=>{try{const u=await x.get("/v1/vendor-list",{params:{productName:t}});a(u.data)}catch(u){console.error("데이터를 불러오는 중 오류가 발생했습니다.",u)}finally{d(!1)}})()},[t]),i)return e.jsx(P,{});const p=n?o:o.slice(0,5);return e.jsxs(z,{children:[p.map((s,u)=>s.prices.map((f,w)=>e.jsxs(A,{onClick:()=>{f.vendor.vendorUrl&&window.open(f.vendor.vendorUrl,"_blank")},children:[e.jsx(E,{children:f.vendor.vendorName}),e.jsxs(O,{children:[`최저가 ${g(f.setPrice)}원`,e.jsx(V,{children:s.shippingFee?`배송비: ${g(s.shippingFee)}원`:"무료배송"})]})]},`${u}-${w}`))),o.length>5&&e.jsx(q,{onClick:()=>r(!n),children:n?"접기":"더보기"})]})},N=({productName:t})=>{const[o,a]=l.useState(0),i=(d,n)=>{a(n)};return e.jsxs("div",{style:{width:"100%",paddingBottom:"20px"},children:[e.jsx(C,{value:o,onChange:i,centered:!0,children:e.jsx(I,{label:"최저가 비교"})}),o===0&&e.jsx(F,{productName:t})]})},W=({src:t,alt:o,width:a,height:i})=>e.jsx("img",{src:t,alt:o,style:{width:a||"auto",height:i||"auto"}}),H=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,K=({src:t,alt:o})=>e.jsx(H,{children:e.jsx(W,{src:t,alt:o,width:"300px",height:"300px"})}),J=({productName:t})=>{const[o,a]=l.useState(!1);l.useEffect(()=>{(async()=>{const r=localStorage.getItem("jwtToken");if(!r)return;const p=i(r);if(!p){alert("Kakao_ID를 찾을 수 없습니다.");return}try{(await x.get(`/v1/users/kakao/${encodeURIComponent(p)}/bookmarks/search`,{headers:{Authorization:`Bearer ${r}`},params:{productName:t}})).status===200?a(!0):a(!1)}catch(s){s.response&&s.response.status===404?a(!1):console.error("Error checking bookmark status:",s.message||s)}})()},[t]);const i=n=>{try{const p=n.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(atob(p).split("").map(f=>"%"+("00"+f.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(s).kakao_Id||null}catch(r){return console.error("JWT token parsing error:",r.message||r),null}},d=async()=>{const n=localStorage.getItem("jwtToken");if(!n)return;const r=i(n);if(!r){alert("Kakao_ID를 찾을 수 없습니다.");return}try{o?(await x.delete(`/v1/users/kakao/${encodeURIComponent(r)}/bookmarks`,{headers:{Authorization:`Bearer ${n}`},params:{productName:t}}),a(!1),alert("북마크가 삭제되었습니다.")):(await x.post(`/v1/users/kakao/${encodeURIComponent(r)}/bookmarks`,{productName:t},{headers:{Authorization:`Bearer ${n}`}}),a(!0),alert("북마크가 추가되었습니다."))}catch(p){console.error("Error handling bookmark:",p.message||p),alert("오류가 발생했습니다.")}};return e.jsx(k,{onClick:d,children:o?e.jsx(D,{}):e.jsx(T,{})})},Y=({originalPrice:t})=>e.jsx("div",{children:e.jsx("p",{children:e.jsxs("span",{style:{fontSize:"20px",fontWeight:"bold",padding:"10px"},children:[g(t),"  ","원"]})})});var h={},G=j;Object.defineProperty(h,"__esModule",{value:!0});var v=h.default=void 0,Q=G(b()),X=e;v=h.default=(0,Q.default)((0,X.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92"}),"Share");var m={},Z=j;Object.defineProperty(m,"__esModule",{value:!0});var y=m.default=void 0,ee=Z(b()),te=e;y=m.default=(0,ee.default)((0,te.jsx)("path",{d:"M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z"}),"ContentCopyRounded");const oe=()=>{const[t,o]=l.useState(!1),[a,i]=l.useState(!1),d=()=>{i(!0)},n=()=>{navigator.clipboard.writeText(window.location.href).then(()=>{o(!0),i(!1),setTimeout(()=>o(!1),2e3)}).catch(r=>{console.error("Failed to copy: ",r)})};return e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",position:"relative"},children:[e.jsx(S,{title:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(y,{fontSize:"small"}),e.jsx("span",{style:{marginLeft:"4px"},children:"URL복사"})]}),open:a,onOpen:d,onClose:()=>i(!1),placement:"top",arrow:!0,children:e.jsx(k,{onClick:n,style:{cursor:"pointer",color:"black"},disableRipple:!0,children:e.jsx(v,{})})}),t&&e.jsx(_,{severity:"success",style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:1e3},children:"      복사 완료!      "})]})},ne=c.div`
  justify-content: left;
  align-items: center;
`;c.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  background-color: #f2f2f7;
  border-radius: 8px;
  height: 30px;
`;const re=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  background-color: #f2f2f7;
  border-radius: 8px;
  height: 50px;
  padding: 0 10px;
`,se=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`,ae=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  width: 35px;
  height: 30px;
  border-radius: 8px;
  padding-top: 4px;
`,ie=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  width: 35px;
  height: 30px;
  border-radius: 8px;
`,ce=({originalPrice:t,productName:o})=>{const[a,i]=l.useState(!1),[d,n]=l.useState(!1),r=B();l.useEffect(()=>{const f=localStorage.getItem("jwtToken");i(!!f)},[]);const p=()=>{a||n(!0)},s=()=>{n(!1)},u=()=>{r("/signIn")};return e.jsxs(ne,{children:[e.jsxs(re,{children:[e.jsx(Y,{originalPrice:t}),e.jsxs(se,{children:[e.jsx(ae,{onClick:p,children:e.jsx(J,{productName:o})}),e.jsx(ie,{children:e.jsx(oe,{})})]})]}),e.jsx(R,{open:d,onClose:s,onLogin:u})]})},me=()=>{const{productName:t}=U(),[o,a]=l.useState(null);if(l.useEffect(()=>{(async()=>{try{const s=await x.get(`/v1/product-detail?productName=${encodeURIComponent(t)}`);a(s.data)}catch(s){s.response?s.response.status===404?console.log("Product not found"):console.log("Server error"):console.log("Network error")}})()},[t]),!o)return e.jsx($,{});const{imageUrl:i,name:d,prices:n}=o,{setPrice:r}=n[0];return e.jsxs(L,{children:[e.jsx(K,{src:i,alt:d}),e.jsx(M,{children:e.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",width:"300px"},children:d})}),e.jsx(ce,{originalPrice:r,productName:d}),e.jsx(N,{productName:d})]})};export{me as default};
