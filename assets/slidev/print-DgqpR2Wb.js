import{d,_ as u,y as h,b as a,e as t,x as s,A as c,F as f,Z as v,o as n,$ as g,l as x,g as b}from"../modules/vue-DA7ZT_zT.js";import{e as y,h as N,c as m,b as k}from"../index-CMZIkJRH.js";import{N as C}from"./NoteDisplay-88PY8ECh.js";import"../modules/shiki-CUMx7AeU.js";const w={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},D={class:"text-lg"},H={class:"font-bold flex gap-2"},S={class:"opacity-50"},A=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-main mb-8"},M=d({__name:"print",setup(P){const{slides:_,total:p}=y();u(`
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
`),N({title:`Notes - ${m.title}`});const i=h(()=>_.value.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),a("div",w,[t("div",L,[t("div",T,[t("h1",V,s(c(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(n(!0),a(f,null,v(i.value,(e,r)=>(n(),a("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",D,[t("div",H,[t("div",S,s(e==null?void 0:e.no)+"/"+s(c(p)),1),g(" "+s(e==null?void 0:e.title)+" ",1),A])]),x(C,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<i.value.length-1?(n(),a("hr",F)):b("v-if",!0)]))),128))])]))}}),E=k(M,[["__file","/home/runner/work/YCC_Portfolio/YCC_Portfolio/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{E as default};
