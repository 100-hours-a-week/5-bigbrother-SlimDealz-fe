import{d as h,j as s}from"./mui-BKwklMrZ.js";import{r as o}from"./react-mdsbzbFi.js";import{a as x}from"./vendor-DsPaXkF5.js";import{C as j,I as w,P as C,L as p,a as P,b as y}from"./index-BHZqvDrh.js";const E=h.div`
  padding: 20px;
  background-color: var(--background-color);
`,b=()=>{const[g,m]=o.useState([]),[r,i]=o.useState(!0),[a,u]=o.useState(1),[c,f]=o.useState(!0),l=o.useCallback(async()=>{try{const t=(await x.get("/api/v1/products",{params:{category:"닭가슴살",page:a,limit:10}})).data;Array.isArray(t)&&t.length>0?m(n=>[...n,...t]):f(!1),i(!1)}catch(e){i(!1),e.response?e.response.status===404?console.log("Products not found"):console.log("Server error"):console.log("Network error")}},[a]);return o.useEffect(()=>{l()},[l]),o.useEffect(()=>{const e=()=>{window.innerHeight+document.documentElement.scrollTop!==document.documentElement.offsetHeight||r||!c||u(t=>t+1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[r,c]),s.jsxs(E,{children:[s.jsx(j,{children:s.jsx(w,{})}),s.jsx(C,{pageName:"추천 페이지"}),r&&a===1?s.jsx(p,{}):s.jsxs(s.Fragment,{children:[g.map((e,t)=>{var n,d;return s.jsx(P,{to:`/product/${encodeURIComponent(e.name)}`,children:s.jsx(y,{id:e.id,name:e.name,shipping:e.shippingFee,price:((d=(n=e.prices)==null?void 0:n[0])==null?void 0:d.setPrice)||"가격 없음"})},`${e.id}-${t}`)}),r&&s.jsx(p,{})," "]})]})};export{b as default};