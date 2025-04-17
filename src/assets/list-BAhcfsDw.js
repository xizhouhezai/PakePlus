import{k as N,l as A}from"./promotion-ChRoyrm_.js";import{u as D}from"./useCurrentInstance-BLlvmEjv.js";import{u as F}from"./filters-D05Q2eUM.js";import{ae as V,af as h,G as P}from"./tools-BfzgO_2s.js";import{V as R}from"./dist-PezRi_EG.js";import{d as B,r as _,n as M,b as r,o as s,j as y,w as t,e as a,f as n,u as c,c as l,t as p,k as $,s as O,M as W}from"./index-C4AMdMz2.js";const j={key:0},G={key:1},H={key:2},K={key:3},Z=B({__name:"list",setup(L){var f;const k=_({sort:"createTime"}),m=_(),d=M(),b=(f=D().globalProperties)==null?void 0:f.$modal,T=[{title:"活动名称",dataIndex:"promotionName"},{title:"活动类型",dataIndex:"couponActivityType",slot:!0,slotData:{badge:V}},{title:"活动范围",dataIndex:"activityScope",slot:!0,slotData:{badge:h}},{title:"领取频率",dataIndex:"couponFrequencyEnum",slot:!0,slotTemplate:"couponFrequencyEnum"},{title:"活动时间",width:400,ellipsis:!1,dataIndex:"startTime",slot:!0,slotTemplate:"time"},{title:"状态",dataIndex:"promotionStatus",slot:!0,slotData:{badge:P}}],g={title:"操作",width:200,methods:[{title:"查看",callback:"see",slot:!0,slotTemplate:"see"},{title:"关闭",callback:"close",slot:!0,slotTemplate:"close"}]};function x(){d.push({name:"add-coupon-activity"})}function C(i){d.push({name:"coupon-info",query:{id:i.id}})}function v(i){b.confirm({title:"确认关闭",content:"确认要关闭此优惠券活动么?关闭活动只能重新创建",alignCenter:!1,onOk:async()=>{(await A(i.id)).data.success&&(W.success("优惠券活动已关闭"),m.value.init())}})}return(i,o)=>{const u=r("a-button"),E=r("a-space"),S=r("a-col"),q=r("a-row"),w=r("a-card");return s(),y(w,{class:"general-card",title:"券活动",bordered:!1},{default:t(()=>[a(q,{style:{"margin-bottom":"16px"}},{default:t(()=>[a(S,{span:16},{default:t(()=>[a(E,null,{default:t(()=>[a(u,{type:"primary",onClick:x},{default:t(()=>o[0]||(o[0]=[n(" 添加活动 ")])),_:1})]),_:1})]),_:1})]),_:1}),a(c(R),{ref_key:"tablePageRef",ref:m,columns:T,methods:g,api:c(N),"api-params":c(k),bordered:!0},{couponFrequencyEnum:t(({data:e})=>[e.couponFrequencyEnum==="DAY"?(s(),l("span",j,"每日")):e.couponFrequencyEnum==="WEEK"?(s(),l("span",G,"每周")):e.couponFrequencyEnum==="MONTH"?(s(),l("span",H,"每月")):(s(),l("span",K," / "))]),price:t(({data:e})=>[n(p(e.price?c(F)(e.price,"¥"):`${e.couponDiscount||0}折`),1)]),time:t(({data:e})=>[n(p(e.startTime),1),o[1]||(o[1]=$("span",{style:{margin:"0 10px"}},"-",-1)),n(p(e.endTime),1)]),see:t(({data:e})=>[a(u,{type:"text",status:"success",onClick:I=>C(e)},{default:t(()=>o[2]||(o[2]=[n(" 查看 ")])),_:2},1032,["onClick"])]),close:t(({data:e})=>[e.promotionStatus==="START"||e.promotionStatus==="NEW"?(s(),y(u,{key:0,type:"text",status:"danger",onClick:I=>v(e)},{default:t(()=>o[3]||(o[3]=[n(" 关闭 ")])),_:2},1032,["onClick"])):O("",!0)]),_:1},8,["api","api-params"])]),_:1})}}});export{Z as default};
