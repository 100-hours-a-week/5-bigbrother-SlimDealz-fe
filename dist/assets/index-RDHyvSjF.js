import{j as e,c as S,d as I,b as v,i as b,e as M,A as P,M as $}from"./mui-CcQhKvkX.js";import{r as i}from"./react-CcBtCB7v.js";import{a as x}from"./vendor-DsPaXkF5.js";import{d as n}from"./styledComponents-CoZbl3wq.js";import{L as T,g as h,d as _,b as z,r as k,c as B,e as D}from"./index-BDHF3RPN.js";import{u as L,c as R}from"./router-CK-IR3zP.js";import"./lottie-BbHPf8Bg.js";import"./swiper-DSaxWTil.js";const O=n.div`
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
`;const E=n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,A=n.div`
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
`,U=n.div`
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
`,N=({productName:t})=>{const[o,s]=i.useState([]),[r,c]=i.useState(!0),[a,l]=i.useState(!1);if(i.useEffect(()=>{(async()=>{try{const p=await x.get("/api/v1/vendor-list",{params:{productName:t}});s(p.data)}catch(p){console.error("데이터를 불러오는 중 오류가 발생했습니다.",p)}finally{c(!1)}})()},[t]),r)return e.jsx(T,{});const f=a?o:o.slice(0,5);return e.jsxs(E,{children:[f.map((d,p)=>d.prices.map((u,C)=>e.jsxs(A,{onClick:()=>{u.vendor.vendorUrl&&window.open(u.vendor.vendorUrl,"_blank")},children:[e.jsx(U,{children:u.vendor.vendorName}),e.jsxs(V,{children:[`최저가 ${h(u.setPrice)}원`,e.jsx(q,{children:d.shippingFee?`배송비: ${h(d.shippingFee)}원`:"무료배송"})]})]},`${p}-${C}`))),o.length>5&&e.jsx(F,{onClick:()=>l(!a),children:a?"접기":"더보기"})]})},H=({productName:t})=>{const[o,s]=i.useState(0),r=(c,a)=>{s(a)};return e.jsxs("div",{style:{width:"100%",paddingBottom:"20px"},children:[e.jsx(S,{value:o,onChange:r,centered:!0,children:e.jsx(I,{label:"최저가 비교"})}),o===0&&e.jsx(N,{productName:t})]})},W=({src:t,alt:o,width:s,height:r})=>e.jsx("img",{src:t,alt:o,style:{width:s||"auto",height:r||"auto"}}),Y=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,G=({src:t,alt:o})=>e.jsx(Y,{children:e.jsx(W,{src:t,alt:o,width:"300px",height:"300px"})}),J=({productName:t})=>{const[o,s]=i.useState(!1),r=localStorage.getItem("userId");i.useEffect(()=>{r&&(async()=>{try{const l=await x.get(`/api/v1/users/${r}/bookmarks/${t}`,{headers:{Authorization:`Bearer ${localStorage.getItem("jwtToken")}`}});s(l.data.bookmarked)}catch(l){console.error("Error fetching bookmark status:",l)}})()},[t,r]);const c=async()=>{try{o?(await x.delete(`/api/v1/users/${r}/bookmarks/${t}`,{headers:{Authorization:`Bearer ${localStorage.getItem("jwtToken")}`}}),s(!1),alert("북마크가 삭제되었습니다.")):(await x.post(`/api/v1/users/${r}/bookmarks`,{productName:t},{headers:{Authorization:`Bearer ${localStorage.getItem("jwtToken")}`}}),s(!0),alert("북마크가 추가되었습니다."))}catch(a){console.error("Error handling bookmark:",a),alert("오류가 발생했습니다.")}};return e.jsx(v,{onClick:c,children:o?e.jsx(_,{}):e.jsx(z,{})})},K=({originalPrice:t})=>e.jsx("div",{children:e.jsx("p",{children:e.jsxs("span",{style:{fontSize:"20px",fontWeight:"bold",padding:"10px"},children:[h(t),"  ","원"]})})});var g={},Q=b;Object.defineProperty(g,"__esModule",{value:!0});var y=g.default=void 0,X=Q(k()),Z=e;y=g.default=(0,X.default)((0,Z.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92"}),"Share");var m={},ee=b;Object.defineProperty(m,"__esModule",{value:!0});var w=m.default=void 0,te=ee(k()),oe=e;w=m.default=(0,te.default)((0,oe.jsx)("path",{d:"M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z"}),"ContentCopyRounded");const ne=()=>{const[t,o]=i.useState(!1),[s,r]=i.useState(!1),c=()=>{r(!0)},a=()=>{navigator.clipboard.writeText(window.location.href).then(()=>{o(!0),r(!1),setTimeout(()=>o(!1),2e3)}).catch(l=>{console.error("Failed to copy: ",l)})};return e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",position:"relative"},children:[e.jsx(M,{title:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(w,{fontSize:"small"}),e.jsx("span",{style:{marginLeft:"4px"},children:"URL복사"})]}),open:s,onOpen:c,onClose:()=>r(!1),placement:"top",arrow:!0,children:e.jsx(v,{onClick:a,style:{cursor:"pointer",color:"black"},disableRipple:!0,children:e.jsx(y,{})})}),t&&e.jsx(P,{severity:"success",style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:1e3},children:"      복사 완료!      "})]})},re=n.div`
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
`,le=({open:t,onClose:o,onLogin:s})=>e.jsx($,{open:t,onClose:o,children:e.jsx(de,{children:e.jsxs(pe,{children:[e.jsx(ue,{children:"로그인이 필요합니다"}),e.jsx("hr",{style:{width:"50px",margin:"10px auto",borderColor:"white"}}),e.jsxs(xe,{children:["북마크는 로그인이 필요한 서비스입니다. ",e.jsx("br",{}),"로그인하시겠습니까?"]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(j,{onClick:o,children:"취소"}),e.jsx(j,{onClick:s,children:"로그인"})]})]})})}),de=n.div`
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
`,fe=({originalPrice:t,productName:o})=>{const[s,r]=i.useState(!1),[c,a]=i.useState(!1),l=L();i.useEffect(()=>{localStorage.getItem("jwtToken")&&r(!0)},[]);const f=()=>{s||a(!0)},d=()=>{a(!1)},p=()=>{l("/signIn")};return e.jsxs(re,{children:[e.jsxs(se,{children:[e.jsx(K,{originalPrice:t}),e.jsxs(ae,{children:[e.jsx(ie,{onClick:f,children:e.jsx(J,{productName:o})}),e.jsx(ce,{children:e.jsx(ne,{})})]})]}),e.jsx(le,{open:c,onClose:d,onLogin:p})]})},we=()=>{const{productName:t}=R(),[o,s]=i.useState(null);if(i.useEffect(()=>{(async()=>{try{const d=await x.get(`/api/v1/product-detail?productName=${encodeURIComponent(t)}`);s(d.data)}catch(d){d.response?d.response.status===404?console.log("Product not found"):console.log("Server error"):console.log("Network error")}})()},[t]),!o)return e.jsx(B,{});const{imageUrl:r,name:c,prices:a}=o,{setPrice:l}=a[0];return e.jsxs(O,{children:[e.jsx(G,{src:r,alt:c}),e.jsx(D,{children:e.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",width:"300px"},children:c})}),e.jsx(fe,{originalPrice:l,productName:c}),e.jsx(H,{productName:c})]})};export{we as default};
