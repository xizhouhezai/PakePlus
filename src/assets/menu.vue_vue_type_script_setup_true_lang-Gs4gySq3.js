import{d as c,b as t,o as s,c as l,k as r,e as n,w as d,F as v,i as x,f,t as b}from"./index-C4AMdMz2.js";const V={"border-b-1":"","py-16px":""},g={"mt-20px":""},y=c({__name:"menu",props:{res:null},setup(p){const o=p,u=[{label:"图文导航",value:"default"},{label:"文字导航",value:"text"}];return(k,e)=>{const m=t("a-radio"),i=t("a-radio-group");return s(),l("div",V,[e[1]||(e[1]=r("div",{"w-80px":""}," 选择模板 ",-1)),r("div",g,[n(i,{modelValue:o.res.data.model,"onUpdate:modelValue":e[0]||(e[0]=a=>o.res.data.model=a)},{default:d(()=>[(s(),l(v,null,x(u,(a,_)=>n(m,{key:_,value:a.value},{default:d(()=>[f(b(a.label),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])])])}}});export{y as _};
