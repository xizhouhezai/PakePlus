import{x as R,y as w}from"./shops-fXVW_gE8.js";import{R as M}from"./validator-B8pIxTAL.js";import{d as C,p as g,r as u,h as q,b as s,o as D,j as B,w as o,e as a,f as i,t as _,u as n,k as I,M as h}from"./index-C4AMdMz2.js";const j=C({__name:"subMerchantInformation",setup(E){const l=g(),y=u(l.query.id),v=u(l.query.name),f=u(l.query.type),t=u({userId:l.query.id,subMerchantId:"",paymentMethod:"WECHAT",subMerchantName:""}),V=u("");function c(){R(y.value,{paymentMethod:t.value.paymentMethod}).then(r=>{r.data.success&&(t.value.subMerchantId=r.data.result.subMerchantId,t.value.subMerchantName=r.data.result.subMerchantName)})}function x(){if(!t.value.subMerchantId){h.error("请输入二级商户ID");return}w(t.value.userId,t.value).then(r=>{r.data.success&&(h.success("保存成功！"),c())})}return q(()=>{c()}),(r,e)=>{const m=s("a-divider"),b=s("a-input"),p=s("a-form-item"),N=s("a-button"),k=s("a-form"),S=s("a-card");return D(),B(S,{style:{width:"100%"}},{default:o(()=>[a(m,{orientation:"left"},{default:o(()=>[e[3]||(e[3]=i(" 店铺信息 ")),a(m,{direction:"vertical"}),i(" "+_(n(f)==="shop"?"店铺":n(f)==="supplier"?"供应商":"分销员")+" ",1),a(m,{direction:"vertical"}),i(" "+_(n(v)),1)]),_:1}),a(k,{ref_key:"subMarchIdFormRef",ref:V,style:{width:"480px"},layout:"horizontal","auto-label-width":"","mt-50px":"",onSubmit:r.submit},{default:o(()=>[a(p,{"asterisk-position":"after",rules:[n(M)],label:"微信二级商户名称"},{extra:o(()=>e[4]||(e[4]=[I("div",null,"申请二级商户号的企业名称",-1)])),default:o(()=>[a(b,{modelValue:n(t).subMerchantName,"onUpdate:modelValue":e[0]||(e[0]=d=>n(t).subMerchantName=d)},null,8,["modelValue"])]),_:1},8,["rules"]),a(p,{"asterisk-position":"after",rules:[n(M)],label:"微信二级商户ID"},{extra:o(()=>e[5]||(e[5]=[I("div",null,"微信进件后成功后返回的唯一标识",-1)])),default:o(()=>[a(b,{modelValue:n(t).subMerchantId,"onUpdate:modelValue":e[1]||(e[1]=d=>n(t).subMerchantId=d)},null,8,["modelValue"])]),_:1},8,["rules"]),a(p,{label:""},{default:o(()=>[a(N,{type:"primary",onClick:e[2]||(e[2]=d=>x())},{default:o(()=>e[6]||(e[6]=[i(" 保存 ")])),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})}}});export{j as default};
