import{d as y,r as v,E as f,b as D,v as h,x as _,o as n,c as r,u as o,s as x,k as u,e as w,F as M,i as B,A,j as $,Z as N,_ as V}from"./index-C4AMdMz2.js";import{_ as j}from"./minimap.vue_vue_type_script_setup_true_lang-DHNhEzEb.js";import{u as z}from"./index-B0S7r7AY.js";import"./useDrag-BGaSN1AF.js";import"./useDrop-BbPs1LL9.js";const E={key:1},F={flex:"","flex-j-sb":"","flex-a-c":"","border-b-1":""},P={"mt-10px":""},U=y({__name:"pc-minimap",setup(L){const s=v([]),c=z(),a=v(!1),p=v("");f(()=>c.pc,t=>{s.value=t}),f(()=>c.indexOfPc,t=>{p.value=t,a.value=!1});function k(t,e){p.value=e,c.setPcActiveIndex(e)}function b(t){s.value.splice(t.index,1)}function C(){}function g(t,e){const m=s.value[t];s.value.splice(t,1),s.value.splice(e,0,m),p.value=e,c.setAppActiveIndex(e)}return(t,e)=>{const m=D("icon-plus"),d=h("auto-animate");return _((n(),r("div",{class:"mini-map","p-10px":"",style:A({"background-color":o(a)?"#f7f7f7":"#fff"})},[o(a)?(n(),r("div",{key:0,"mr-10px":"","mt-20px":"","h-35px":"","cursor-pointer":"",rounded:"","bg-white":"","text-center":"","line-height-35px":"","drop-shadow-xl":"","duration-200":"","ease-in":"","hover:bg-gray-100":"",onClick:e[0]||(e[0]=i=>a.value=!o(a))}," 组件管理 ")):x("",!0),o(a)?x("",!0):(n(),r("div",E,[u("div",F,[e[2]||(e[2]=u("div",null,[u("div",null,"组件管理"),u("div",{"mt-5px":"","text-12px":"","color-gray":""}," 可拖动调整组件顺序 ")],-1)),w(m,{rotate:45,"cursor-pointer":"",onClick:e[1]||(e[1]=i=>a.value=!o(a))})]),_((n(),r("div",P,[(n(!0),r(M,null,B(o(s),(i,l)=>(n(),$(j,{id:l,key:l,class:N(["mini-item card",{active:o(p)===l}]),res:i,index:l,text:i.name,"move-card":g,onDelete:b,onUpdate:C,onClick:O=>k(i,l)},null,8,["id","class","res","index","text","onClick"]))),128))])),[[d]])]))],4)),[[d]])}}}),I=V(U,[["__scopeId","data-v-0bbf35a1"]]);export{I as default};
