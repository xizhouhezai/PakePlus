import{d as h,e as D,h as L,i as B}from"./order-HsmDfkng.js";import{u as $}from"./useCurrentInstance-BLlvmEjv.js";import{R as j,V as Y}from"./validator-B8pIxTAL.js";import{V as G}from"./dist-PezRi_EG.js";import{d as H,r as c,a as R,E as Q,b as r,o as q,j as z,w as s,e as o,u as n,f as m,M as v}from"./index-C4AMdMz2.js";const ee=H({__name:"index",setup(F){var _;const i=c(""),d=c("RETURN_MONEY"),p=c(),k=(_=$().globalProperties)==null?void 0:_.$modal,A=[{title:"创建人",dataIndex:"createBy"},{title:"原因",dataIndex:"reason"},{title:"时间",dataIndex:"createTime"}],T={title:"操作",width:300,methods:[{title:"编辑",callback:"update",type:"text",status:"warning"},{title:"删除",callback:"delete",type:"text",status:"danger"}]},e=R({enableAddModal:!1,formLoading:!1,fid:"",form:{reason:"",serviceType:""}});function x(t){e.form.serviceType=t,e.enableAddModal=!0,e.fid="",e.form.reason=""}function M(t){t&&(Object.keys(t.record).forEach(a=>{e.form[a]=t.record[a]??""}),e.form.serviceType=t.record.serviceType,e.form.reason=t.record.reason,e.fid=t.record.id,e.enableAddModal=!0)}async function w(){var l;const t=await((l=p.value)==null?void 0:l.validate()),a={reason:e.form.reason,serviceType:e.form.serviceType};t||(e.fid?await D(e.fid,a):await L(a)).data.success&&(v.success(`${e.fid?"修改":"添加"}成功!`),e.enableAddModal=!1,i.value.init())}function C(t){k.confirm({title:"确认删除",content:"确认要删除此售后原因",alignCenter:!1,onOk:async()=>{(await B(t.record.id)).data.success&&(v.success("删除成功！"),i.value.init())}})}const u=R({serviceType:d});function E(t){d.value=t}return Q(d,t=>{u.serviceType=t,i.value.init()}),(t,a)=>{const l=r("a-tab-pane"),b=r("a-tabs"),y=r("a-button"),N=r("a-space"),V=r("a-col"),O=r("a-row"),U=r("a-input"),g=r("a-form-item"),I=r("a-form"),P=r("a-modal"),S=r("a-card");return q(),z(S,{class:"general-card",title:"售后原因",bordered:!1},{default:s(()=>[o(b,{"default-active-key":n(d),onChange:E},{default:s(()=>[o(l,{key:"RETURN_MONEY",title:"退款"}),o(l,{key:"CANCEL",title:"取消"}),o(l,{key:"RETURN_GOODS",title:"退货"}),o(l,{key:"COMPLAIN",title:"投诉"})]),_:1},8,["default-active-key"]),o(O,{style:{"margin-bottom":"16px"}},{default:s(()=>[o(V,{span:16,style:{"margin-bottom":"10px"}},{default:s(()=>[o(N,null,{default:s(()=>[o(y,{type:"primary",onClick:a[0]||(a[0]=f=>x(n(d)))},{default:s(()=>a[3]||(a[3]=[m(" 添加 ")])),_:1})]),_:1})]),_:1}),o(n(G),{ref_key:"tablePageRef",ref:i,columns:A,methods:T,api:n(h),"api-params":n(u),bordered:!0,onDelete:C,onUpdate:M},null,8,["api","api-params"])]),_:1}),o(P,{visible:n(e).enableAddModal,"onUpdate:visible":a[2]||(a[2]=f=>n(e).enableAddModal=f),"align-center":!1,footer:!1},{title:s(()=>a[4]||(a[4]=[m(" 售后原因 ")])),default:s(()=>[o(I,{ref_key:"formRef",ref:p,model:n(e).form,onSubmit:w},{default:s(()=>[o(g,{field:"reason",label:"售后原因",rules:[n(j),n(Y)],"validate-trigger":["change"]},{default:s(()=>[o(U,{modelValue:n(e).form.reason,"onUpdate:modelValue":a[1]||(a[1]=f=>n(e).form.reason=f)},null,8,["modelValue"])]),_:1},8,["rules"]),o(g,{label:"操作"},{default:s(()=>[o(y,{loading:n(e).formLoading,"html-type":"submit",type:"primary"},{default:s(()=>a[5]||(a[5]=[m(" 保存 ")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])]),_:1})}}});export{ee as default};
