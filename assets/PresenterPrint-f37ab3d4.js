import{f as _,h as d,j as p,ag as h,c as m,ah as u,l as n,ai as t,aj as o,y as s,F as f,ak as g,al as v,am as x,n as i,an as y,ao as b,m as N,ap as k,aq as w,_ as P}from"./nav-fcd12e62.js";import{N as V}from"./NoteViewer-8a431c9f.js";import{u as j}from"./index-c1a67263.js";import"./_commonjsHelpers-725317a4.js";const S={class:"m-4"},z={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},H={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=_({__name:"PresenterPrint",setup(q){d(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),j({title:`Notes - ${m.title}`});const l=u(()=>x.slice(0,-1).map(a=>{var r;return(r=a.meta)==null?void 0:r.slide}).filter(a=>a!==void 0&&a.notesHTML!==""));return(a,r)=>(i(),n("div",{id:"page-root",style:v(s(w))},[t("div",S,[t("div",z,[t("h1",L,o(s(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(i(!0),n(f,null,g(s(l),(e,c)=>(i(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",H,o(e==null?void 0:e.no)+"/"+o(s(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),D])]),N(V,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(l).length-1?(i(),n("hr",F)):k("v-if",!0)]))),128))])],4))}}),W=P(M,[["__file","/Users/tzyito/tzyito/slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};
