import{j as e,r as n,u as c}from"./index-f6ad4f7c.js";import{c as x,B as g,_ as o}from"./index-b0d96481.js";const m={info:"bg-blue-100 text-gray-800",danger:"bg-red-100 text-gray-800",done:"bg-green-100 text-gray-800"},u={sm:"h-5 p-2 text-xs font-medium",md:"h-6 p-2 text-sm font-normal",lg:"h-8 py-2 px-3 text-base font-medium"},f=({size:t="md",variant:s="info",text:r})=>e.jsx("div",{className:x("inline-flex shrink-0 items-center justify-center gap-x-1 rounded-md",u[t],m[s]),children:r}),h=({active:t=!1,children:s,...r})=>e.jsx("div",{className:`cursor-default rounded-full border border-gray-500 ${t?"border-hidden bg-gray-900 text-white":"bg-white text-gray-800"} px-4 py-1 text-sm font-semibold hover:border-[#67A0F0] active:border-hidden active:bg-gray-900 active:text-white`,...r,children:s}),p=t=>n.createElement("svg",{width:22,height:22,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("g",{id:"menu"},n.createElement("path",{id:"coolicon",d:"M10.9999 18.1114C10.0181 18.1114 9.22217 17.3154 9.22217 16.3336C9.22217 15.3518 10.0181 14.5558 10.9999 14.5558C11.9818 14.5558 12.7777 15.3518 12.7777 16.3336C12.7777 17.3154 11.9818 18.1114 10.9999 18.1114ZM10.9999 12.778C10.0181 12.778 9.22217 11.9821 9.22217 11.0003C9.22217 10.0184 10.0181 9.22249 10.9999 9.22249C11.9818 9.22249 12.7777 10.0184 12.7777 11.0003C12.7777 11.4718 12.5904 11.924 12.257 12.2573C11.9236 12.5907 11.4714 12.778 10.9999 12.778ZM10.9999 7.44472C10.0181 7.44472 9.22217 6.64878 9.22217 5.66694C9.22217 4.6851 10.0181 3.88916 10.9999 3.88916C11.9818 3.88916 12.7777 4.6851 12.7777 5.66694C12.7777 6.13843 12.5904 6.59062 12.257 6.92402C11.9236 7.25742 11.4714 7.44472 10.9999 7.44472Z",fill:"#4E4E54"}))),b=({date:t,time:s,author:r,title:i,tag:a,description:l})=>e.jsxs("div",{className:"relative flex w-full cursor-default flex-col gap-y-3 rounded-lg border border-gray-100 bg-white p-3 pb-5 hover:border-[#CACACD] active:border-2 active:border-[#99999B]",children:[e.jsxs("div",{className:"flex gap-x-1 text-xs text-gray-800",children:[t,e.jsx("span",{className:"text-gray-400",children:"@"}),s,e.jsx("span",{className:"text-gray-400",children:"by"}),r]}),e.jsxs("div",{className:"flex gap-x-2",children:[e.jsx("div",{className:"text-lg font-bold leading-6",children:i}),a&&e.jsx(f,{...a})]}),e.jsx("div",{className:"text-sm leading-4",children:l}),e.jsx(p,{className:" absolute right-3 top-3"})]}),v=t=>{const s=t.map(({tag:{text:a}})=>a),r={};let i=0;return s.forEach(a=>{r[a]?r[a]=r[a]+1:r[a]=1,i++}),Object.entries({All:i,...r})},j=()=>{const t=c(),s=n.useCallback(()=>t("new"),[t]);return e.jsxs("div",{className:"flex h-full flex-col items-center justify-center gap-3 rounded-xl bg-gray-50",children:[e.jsx("div",{className:" text-2xl font-normal text-[#99999B]",children:"No note added to this device yet"}),e.jsx(g,{leftIcon:!0,onClick:s,children:"Add Note"})]})},C=()=>{const[t]=o("note-list",[]),[s,r]=n.useState("All"),[i,a]=n.useState(t);return n.useEffect(()=>{a(s==="All"?t:t.filter(({tag:{text:l}})=>s===l))},[s,t]),e.jsxs("div",{children:[e.jsx("div",{className:"flex gap-x-3",children:v(t).map(([l,d])=>e.jsx(h,{active:l===s,onClick:()=>r(l),children:`${l} (${d})`}))}),i.map(l=>e.jsx(b,{...l}))]})},w=()=>{const[t]=o("note-list",[]);return e.jsx(e.Fragment,{children:t.length===0?e.jsx(j,{}):e.jsx(C,{})})};export{w as default};