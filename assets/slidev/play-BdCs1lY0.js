function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-Y94H3wu6.js","assets/modules/unplugin-icons-B1zEtaLA.js","assets/modules/vue-DA7ZT_zT.js","assets/modules/shiki-CUMx7AeU.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-BpRM1Fey.js","assets/index-CMZIkJRH.js","assets/index-B2yZvhDo.css","assets/slidev/bottom-B9yWdpba.js","assets/bottom-DbIWt59F.css","assets/slidev/SlidesShow-C1OdnB0G.js","assets/SlidesShow-DZAAkYiM.css","assets/DrawingControls-C5T1oZL5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{b as w,c as g,e as E,_ as I}from"../index-CMZIkJRH.js";import{d as y,a7 as M,o as s,c as d,A as e,b as h,e as t,f as z,i as S,g as n,a8 as B,y as N,k as D,a6 as _,$ as O,M as C,l as u,F as $,t as R,h as A}from"../modules/vue-DA7ZT_zT.js";import{b,e as x,f as P,h as T,j as Y,w as U,k as H,l as L}from"./bottom-B9yWdpba.js";import{Q as j,G as F,r as G,u as Q,S as W,a as K,N as X}from"./SlidesShow-C1OdnB0G.js";import{P as q}from"./PrintStyle-DchGoK-V.js";import{u as J}from"./DrawingPreview-BpRM1Fey.js";import"../modules/shiki-CUMx7AeU.js";import"../modules/unplugin-icons-B1zEtaLA.js";const Z="/YCC_Portfolio/assets/logo-BYkHSa_O.png",ee={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},oe=y({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:a}){const i=c,o=M(i,"modelValue",a);function l(){o.value=!1}return(m,r)=>(s(),d(B,null,[e(o)?(s(),h("div",ee,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=f=>l())}),t("div",{class:S(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[z(m.$slots,"default")],2)])):n("v-if",!0)],1024))}}),le=w(oe,[["__file","/home/runner/work/YCC_Portfolio/YCC_Portfolio/node_modules/@slidev/client/internals/Modal.vue"]]),te={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},se=["innerHTML"],ae=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:Z,alt:"Slidev logo"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),O("dev ")])])],-1),ie=y({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:a}){const o=M(c,"modelValue",a),l=N(()=>typeof g.info=="string");return(m,r)=>(s(),d(le,{modelValue:e(o),"onUpdate:modelValue":r[0]||(r[0]=f=>_(o)?o.value=f:null),class:"px-6 py-4"},{default:D(()=>[t("div",te,[l.value?(s(),h("div",{key:0,class:"mb-4",innerHTML:e(g).info},null,8,se)):n("v-if",!0),ae])]),_:1},8,["modelValue"]))}}),ne=w(ie,[["__file","/home/runner/work/YCC_Portfolio/YCC_Portfolio/node_modules/@slidev/client/internals/InfoDialog.vue"]]),re=y({__name:"Controls",setup(c){const a=C(),i=C();return(v,o)=>(s(),h($,null,[u(j,{modelValue:e(b),"onUpdate:modelValue":o[0]||(o[0]=l=>_(b)?b.value=l:null)},null,8,["modelValue"]),u(F),a.value?(s(),d(e(a),{key:0})):n("v-if",!0),i.value?(s(),d(e(i),{key:1,modelValue:e(x),"onUpdate:modelValue":o[1]||(o[1]=l=>_(x)?x.value=l:null)},null,8,["modelValue"])):n("v-if",!0),e(g).info?(s(),d(ne,{key:2,modelValue:e(P),"onUpdate:modelValue":o[2]||(o[2]=l=>_(P)?P.value=l:null)},null,8,["modelValue"])):n("v-if",!0)],64))}}),de=w(re,[["__file","/home/runner/work/YCC_Portfolio/YCC_Portfolio/node_modules/@slidev/client/internals/Controls.vue"]]),ue=y({__name:"play",setup(c){G();const{next:a,prev:i,isEmbedded:v,isPrintMode:o}=E(),{isDrawing:l}=J(),m=R();function r(p){var V;Y.value||((V=p.target)==null?void 0:V.id)==="slide-container"&&(p.screenX/window.innerWidth>.6?a():i())}Q(m);const f=N(()=>T.value||Y.value);C();const k=C();return I(()=>import("./DrawingControls-Y94H3wu6.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])).then(p=>k.value=p.default),(p,V)=>(s(),h($,null,[e(o)?(s(),d(q,{key:0})):n("v-if",!0),t("div",{id:"page-root",ref_key:"root",ref:m,class:S(["grid",e(L)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[u(W,{class:"w-full h-full",style:A({background:"var(--slidev-slide-container-background, black)"}),width:e(o)?e(U).width.value:void 0,scale:e(H),"is-main":!0,onPointerdown:r},{default:D(()=>[u(K,{"render-context":"slide"})]),controls:D(()=>[t("div",{class:S(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[f.value?"!opacity-100 right-0":"opacity-0 p-2",e(l)?"pointer-events-none":""]])},[u(X,{class:"m-auto",persist:f.value},null,8,["persist"])],2),!e(g).drawings.presenterOnly&&!e(v)&&k.value?(s(),d(e(k),{key:0,class:"ml-0"})):n("v-if",!0)]),_:1},8,["style","width","scale"]),n("v-if",!0)],2),u(de)],64))}}),we=w(ue,[["__file","/home/runner/work/YCC_Portfolio/YCC_Portfolio/node_modules/@slidev/client/pages/play.vue"]]);export{we as default};
