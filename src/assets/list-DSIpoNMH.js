import{h as Y,j as Z,k as ee,l as te,m as A,n as le}from"./goods-CB7YWqUH.js";import{_ as ae}from"./index.vue_vue_type_script_setup_true_lang-DsrWKjKu.js";import{u as oe}from"./useCurrentInstance-BLlvmEjv.js";import{d as ne}from"./tools-BfzgO_2s.js";import{R as B,V as se}from"./validator-B8pIxTAL.js";import{U as ie,V as re}from"./dist-PezRi_EG.js";import{d as de,r as f,a as ue,b as r,o as _,c as fe,e as o,w as a,u as s,f as u,j as w,s as me,t as ce,k as g,q as M,F as pe,M as b}from"./index-C4AMdMz2.js";import"./index-CzBKN9cw.js";import"./index--a7kHzzJ.js";import"./extra-5DUayDl9.js";const ge=["src"],be=["src"],ve={style:{"text-align":"right"}},Ae=de({__name:"list",setup(_e){var V;const c=f({}),p=f(!1),m=f(),y=f(""),d=f(!1),x=f(),v=(V=oe().globalProperties)==null?void 0:V.$modal,O=f(),D=[{label:"品牌名称",model:"name",disabled:!1,input:!0}],U=[{title:"品牌名称",dataIndex:"name",width:150},{title:"品牌图标",dataIndex:"logo",width:150,slot:!0,slotTemplate:"logo"},{title:"状态",dataIndex:"deleteFlag",width:150,slot:!0,slotData:{badge:ne}}],E={title:"操作",width:250,fixed:"right",methods:[{title:"编辑",callback:"editor",type:"text",status:"warning"},{slot:!0,slotTemplate:"btnList"},{title:"删除",callback:"delete",type:"text",status:"danger"}]},l=ue({enableAddModal:!1,formLoading:!1,fid:"",form:{name:"",logo:""}});function I(){l.enableAddModal=!0,y.value="添加",l.fid="",Object.keys(l.form).forEach(n=>{l.form[n]=""})}async function S(){var e;if(!await((e=O.value)==null?void 0:e.validate())){let i;l.fid?i=await ee(l.fid,l.form):i=await Z(l.form),i.data.success&&(b.success(`${l.fid?"修改":"添加"}成功!`),l.enableAddModal=!1,m.value.init())}}function F(n){y.value="编辑",n&&(Object.keys(n.record).forEach(e=>{l.form.hasOwnProperty(e)&&(l.form[e]=n.record[e])}),l.fid=n.record.id,l.enableAddModal=!0)}function P(n){v.confirm({title:"确认删除",content:`您确认要删除${n.record.name}品牌?`,alignCenter:!1,onOk:async()=>{(await te(n.record.id)).data.success&&(b.success("品牌删除成功"),m.value.init())}})}function j(n){v.confirm({title:"确认禁用",content:`您确认要禁用品牌${n.name}品牌?`,alignCenter:!1,onOk:async()=>{(await A(n.id,{disable:!0})).data.success&&(b.success("操作成功"),m.value.init())}})}function L(n){v.confirm({title:"确认禁用",content:`强制禁用会自动解除分类关联，您确认要强制禁用品牌${n.name}品牌?`,alignCenter:!1,onOk:async()=>{(await le(n.id)).data.success&&(b.success("操作成功"),m.value.init())}})}function N(n){v.confirm({title:"确认启用",content:`您确认要启用品牌${n.name}品牌?`,alignCenter:!1,onOk:async()=>{(await A(n.id,{disable:!1})).data.success&&(b.success("操作成功"),m.value.init())}})}function T(){d.value=!1}function H(){d.value=!1}function q(){d.value=!0}function G(){d.value=!1,l.form.logo=x.value}function Q(n){x.value=n.url}return(n,e)=>{const i=r("a-button"),$=r("a-space"),z=r("a-image"),h=r("a-input"),k=r("a-form-item"),J=r("icon-eye"),K=r("a-tooltip"),W=r("a-form"),C=r("a-modal"),X=r("a-card");return _(),fe(pe,null,[o(X,{class:"general-card",title:"品牌列表",bordered:!1},{default:a(()=>[o(s(ie),{columns:D,onReset:e[0]||(e[0]=t=>{c.value={...s(c),...t}}),onSearch:e[1]||(e[1]=t=>{c.value={...s(c),...t}})}),o($,{style:{"margin-bottom":"16px"}},{default:a(()=>[o(i,{type:"primary",onClick:I},{default:a(()=>e[10]||(e[10]=[u(" 添加 ")])),_:1})]),_:1}),o(s(re),{ref_key:"tablePageRef",ref:m,columns:U,methods:E,api:s(Y),"api-params":s(c),bordered:!0,onDelete:P,onEditor:F},{logo:a(({data:t})=>[o(z,{width:"50",height:"50",src:t.logo},null,8,["src"])]),btnList:a(({data:t})=>[o($,null,{default:a(()=>[(t==null?void 0:t.deleteFlag)===!1?(_(),w(i,{key:0,type:"text",status:"danger",onClick:R=>j(t)},{default:a(()=>e[11]||(e[11]=[u(" 禁用 ")])),_:2},1032,["onClick"])):me("",!0),(t==null?void 0:t.deleteFlag)===!1?(_(),w(i,{key:1,type:"text",status:"danger",onClick:R=>L(t)},{default:a(()=>e[12]||(e[12]=[u(" 强制禁用 ")])),_:2},1032,["onClick"])):(_(),w(i,{key:2,type:"text",status:"success",onClick:R=>N(t)},{default:a(()=>e[13]||(e[13]=[u(" 启用 ")])),_:2},1032,["onClick"]))]),_:2},1024)]),_:1},8,["api","api-params"]),o(C,{visible:s(l).enableAddModal,"onUpdate:visible":e[5]||(e[5]=t=>s(l).enableAddModal=t),"align-center":!1,footer:!1},{title:a(()=>[u(ce(s(y)),1)]),default:a(()=>[o(W,{ref_key:"formRef",ref:O,model:s(l).form,onSubmit:S},{default:a(()=>[o(k,{field:"name",label:"品牌名称",rules:[s(B),s(se)],"validate-trigger":["change"]},{default:a(()=>[o(h,{modelValue:s(l).form.name,"onUpdate:modelValue":e[2]||(e[2]=t=>s(l).form.name=t)},null,8,["modelValue"])]),_:1},8,["rules"]),o(k,{field:"logo",label:"品牌图标",rules:[s(B)],"validate-trigger":["change"],"validate-phone":""},{default:a(()=>[o(h,{modelValue:s(l).form.logo,"onUpdate:modelValue":e[3]||(e[3]=t=>s(l).form.logo=t),readonly:""},null,8,["modelValue"]),o(K,null,{content:a(()=>[g("div",null,[g("img",{src:s(l).form.logo,alt:"该资源不存在",style:{width:"100%",margin:"0 auto"}},null,8,ge),g("a",{style:{"margin-top":"5px","text-align":"right",cursor:"pointer"},onClick:e[4]||(e[4]=t=>p.value=!0)},"查看大图")])]),default:a(()=>[o(i,null,{default:a(()=>[o(J)]),_:1})]),_:1}),o(i,{type:"primary",onClick:q},{default:a(()=>e[14]||(e[14]=[u(" 上传图片 ")])),_:1})]),_:1},8,["rules"]),o(k,{label:"操作"},{default:a(()=>[o(i,{loading:s(l).formLoading,"html-type":"submit",type:"primary"},{default:a(()=>e[15]||(e[15]=[u(" 保存 ")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])]),_:1}),o(C,{visible:s(d),"onUpdate:visible":e[6]||(e[6]=t=>M(d)?d.value=t:null),width:1100,title:"oss资源管理",onOk:G,onCancel:e[7]||(e[7]=t=>d.value=!1)},{default:a(()=>[o(ae,{"is-single":!0,onSelected:Q})]),_:1},8,["visible"]),o(C,{visible:s(p),"onUpdate:visible":e[9]||(e[9]=t=>M(p)?p.value=t:null),width:1100,onOk:T,onCancel:H},{footer:a(()=>[g("div",ve,[o(i,{type:"text",status:"danger",onClick:e[8]||(e[8]=t=>p.value=!1)},{default:a(()=>e[16]||(e[16]=[u(" 关闭 ")])),_:1})])]),default:a(()=>[g("img",{src:s(l).form.logo,alt:"该资源不存在",style:{width:"100%",margin:"0 auto",display:"block"}},null,8,be)]),_:1},8,["visible"])],64)}}});export{Ae as default};
