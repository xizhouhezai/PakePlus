import{d as _,r as g,h as v,o as t,c as s,k as e,F as i,i as n,t as d,f as y,A as b,aX as h}from"./index-C4AMdMz2.js";const k="/assets/zhizhao-ByslSd5z.jpg",w={class:"icon-row mx-auto h-[71px] flex border-b border-gray-200 border-solid"},z={class:"footer-icon-text ml-3 text-base"},j={class:"mt-6 border-t border-gray-200"},B={class:"mx-auto mt-6 flex justify-between"},S={"mb-20px":"","text-14px":""},C={class:"mt-6 flex flex justify-center border-gray-200 border-t-solid pt-4"},N={class:"flex"},F=_({__name:"tpl_bottom",props:{res:null},setup(x){const l=x,u=g({});async function p(){const c=await h();if(c.data.success){const r=c.data.result.settingValue;r&&(u.value=JSON.parse(r))}}return v(()=>{p()}),(c,r)=>(t(),s("footer",{"overflow-hidden":"",class:"w-full",style:b({backgroundColor:l.res.data.background,color:l.res.data.color})},[e("div",w,[(t(!0),s(i,null,n(l.res.data.guide,(o,a)=>(t(),s("div",{key:a,"flex-1":"","flex-j-c":"","text-center":"",class:"footer-icon flex items-center"},[e("span",z,d(o.title),1)]))),128))]),e("div",j,[e("div",B,[(t(!0),s(i,null,n(l.res.data.list,(o,a)=>(t(),s("div",{key:a,"flex-1":"","text-center":""},[e("div",null,[e("div",S,d(o.title),1),(t(!0),s(i,null,n(o.list,(f,m)=>(t(),s("div",{key:m,class:"my-16px cursor-pointer overflow-hidden text-center text-12px leading-4"},d(f.title),1))),128))])]))),128))]),e("div",C,[e("ul",N,[(t(!0),s(i,null,n(l.res.data.service,(o,a)=>(t(),s("li",{key:a,class:"mr-6 cursor-pointer last:mr-0"},d(o.title),1))),128))])]),r[0]||(r[0]=e("div",{"mt-23px":"",flex:"","flex-j-c":""},[e("div",{flex:"","gap-20px":"","flex-a-c":"","color-blue-6":""},[e("div",null," ICP信息 "),e("div",{flex:"","gap-8px":"","flex-a-c":""},[e("img",{"h-20px":"","w-20px":"","rounded-100px":"",class:"zhizhao",src:k,mode:""}),y(" 公司信息 ")])])],-1)),r[1]||(r[1]=e("div",{"text-center":""},[e("p",null,"Copyright © 网站信息")],-1))])],4))}});export{F as _};
