import{d as p,j as e}from"./mui-C_CkU0iZ.js";import{r as a}from"./react-mdsbzbFi.js";import{a as u}from"./vendor-DsPaXkF5.js";import{f as x,S as g,P as h,L as m,a as f,b as y}from"./index-kNtBx-lW.js";const j=p.div`
  padding: 20px;
  background-color: var(--background-color);
`,S=()=>e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"70vh"},children:[e.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,style:{width:"50%"},children:[e.jsx("source",{src:"/public/assets/noResults.webm",type:"video/webm"}),"Your browser does not support the video tag."]}),e.jsxs("div",{style:{textAlign:"center",marginTop:"20px"},children:[e.jsx("p",{style:{fontWeight:"bold",fontSize:"18px",margin:0},children:"검색 결과가 없습니다."}),e.jsx("p",{style:{color:"#666",fontSize:"14px",marginTop:"5px"},children:"다른 검색어를 입력해 보세요."})]})]}),C=()=>{const{keyword:s}=x(),{setSearchQuery:o}=a.useContext(g),[n,i]=a.useState([]),[d,c]=a.useState(!0);return a.useEffect(()=>{s&&(o(s),i([]),c(!0))},[s,o]),a.useEffect(()=>{if(!s)return;(async()=>{try{const r=await u.get("/api/v1/search",{params:{keyword:s}});r.status===200&&i(r.data)}catch(r){console.log("An error occurred:",r.message)}finally{c(!1)}})()},[s]),e.jsxs(j,{children:[e.jsx(h,{pageName:"Search Results"}),d?e.jsx(m,{}):n.length>0?n.map((t,r)=>{var l;return e.jsx(f,{to:`/product/${encodeURIComponent(t.name)}`,style:{textDecoration:"none",color:"inherit"},children:e.jsx(y,{id:t.id,image:t.imageUrl,name:t.name,shipping:t.shippingFee,price:(l=t.prices[0])==null?void 0:l.setPrice})},r)}):e.jsx(S,{})]})};export{C as default};
