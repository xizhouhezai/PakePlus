import{R as y,S as C}from"./order-HsmDfkng.js";import{u as k}from"./useCurrentInstance-BLlvmEjv.js";import{ab as d}from"./tools-BfzgO_2s.js";import{U as R,V as S}from"./dist-PezRi_EG.js";import{d as h,r as i,b as u,o as c,j as m,w as o,e as p,u as s,f as v,s as N,M as V}from"./index-C4AMdMz2.js";const U=h({__name:"index",setup(B){var r;const a=i({}),n=i(),b=(r=k().globalProperties)==null?void 0:r.$modal,f=[{label:"补差单号",model:"outSubsidyNo",disabled:!1,input:!0},{label:"流水单号",model:"storeFlowId",disabled:!1,input:!0},{label:"补差单结果",model:"result",disabled:!1,select:{options:d}}],I=[{title:"补差单号",dataIndex:"outSubsidyNo"},{title:"流水单号ID",dataIndex:"storeFlowId"},{title:"微信订单号",dataIndex:"transactionId"},{title:"电商平台二级商户号",dataIndex:"subMchId"},{title:"补差金额",dataIndex:"amount",currency:!0},{title:"分账单状态",width:120,dataIndex:"result",slot:!0,slotData:{badge:d}},{title:"错误消息",width:200,dataIndex:"message"}],x={title:"操作",width:100,methods:[{title:"补差",slot:!0,slotTemplate:"subsidiesBtn"}]};function _(l){b.confirm({title:"进行补差",content:"确定进行补差吗？",alignCenter:!1,onOk:async()=>{(await C(l)).data.success&&(V.success("补差成功!"),n.value.init())}})}return(l,e)=>{const g=u("a-button"),w=u("a-card");return c(),m(w,{class:"general-card",title:"补差记录",bordered:!1},{default:o(()=>[p(s(R),{columns:f,onReset:e[0]||(e[0]=t=>{a.value={...s(a),...t}}),onSearch:e[1]||(e[1]=t=>{a.value={...s(a),...t}})}),p(s(S),{ref_key:"tablePageRef",ref:n,columns:I,methods:x,api:s(y),"api-params":s(a),bordered:!0},{subsidiesBtn:o(({data:t})=>[t.result==="ERROR"?(c(),m(g,{key:0,type:"primary",onClick:M=>_(t.id)},{default:o(()=>e[2]||(e[2]=[v(" 补差 ")])),_:2},1032,["onClick"])):N("",!0)]),_:1},8,["api","api-params"])]),_:1})}}});export{U as default};
