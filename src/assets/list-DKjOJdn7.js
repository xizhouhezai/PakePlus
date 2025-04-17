import{_ as E,$ as A,a0 as x}from"./promotion-ChRoyrm_.js";import{u as F}from"./useCurrentInstance-BLlvmEjv.js";import{ah as S}from"./tools-BfzgO_2s.js";import{U as L,V as U}from"./dist-PezRi_EG.js";import{d as W,n as j,r as R,b as i,o as n,j as r,w as s,e as m,u,f as l,t as N,k as H,c as V,F as z,i as G,s as _,M as b}from"./index-C4AMdMz2.js";const ee=W({__name:"list",setup(J){var T;const f=(T=F().globalProperties)==null?void 0:T.$modal,g=j(),p=R(),c=R({sort:"startTime"}),$=[{label:"活动名称",model:"promotionName",disabled:!1,input:!0},{label:"活动状态",model:"promotionStatus",disabled:!1,select:{options:S}},{label:"活动时间",model:"selectDate",disabled:!1,datePicker:{type:"range"}}],D=[{title:"活动名称",dataIndex:"promotionName"},{title:"活动时间",dataIndex:"time",width:400,slot:!0,slotTemplate:"time"},{title:"活动状态",dataIndex:"promotionStatus",slot:!0,slotData:{badge:S}}],P={title:"操作",width:240,methods:[{title:"查看",callback:"view",slot:!0,slotTemplate:"view"},{title:"关闭",callback:"close",slot:!0,slotTemplate:"close"},{title:"删除",callback:"delete",slot:!0,slotTemplate:"delete"}]};function I(a){f.confirm({title:"确认删除",content:"确认删除此活动吗?",alignCenter:!1,onOk:async()=>{A(a.id).then(e=>{e.data.success&&(b.success("删除成功"),p.value.init())})}})}function w(a,e){const o=e?{onlyView:!0,id:a.id}:{id:a.id,status:a.promotionStatus};g.push({name:"raffle-detail",query:o})}function M(){g.push({name:"raffle-detail"})}function B(a){const e={id:a.id};g.push({name:"raffle-logs",query:e})}function O(a){let e="开启";if(a.promotionStatus==="START")e="关闭",f.confirm({title:"提示",content:`确认${e}此活动吗?需要一定时间才能生效，请耐心等待`,alignCenter:!1,onOk:async()=>{(await x(a.id)).data.success&&(b.success(`${e}成功`),p.value.init())}});else{const o=new Date;o.setMinutes(o.getMinutes()+10);const y=new Date(new Date().setHours(0,0,0,0)+24*60*60*1e3-1),k={startTime:o.getTime(),endTime:y.getTime()};f.confirm({title:"确认开启(默认为当前时间的十分钟之后)",content:"您确认要开启此拼团活动?",alignCenter:!1,onOk:async()=>{(await x(a.id,k)).data.success&&(b.success("开启活动成功"),p.value.init())}})}}return(a,e)=>{const o=i("a-button"),y=i("a-space"),k=i("a-col"),C=i("a-row"),h=i("a-image"),q=i("a-card");return n(),r(q,{class:"general-card",title:"抽奖活动",bordered:!1},{default:s(()=>[m(u(L),{columns:$,"time-type":"timestamp",onReset:e[0]||(e[0]=t=>{c.value={...u(c),...t}}),onSearch:e[1]||(e[1]=t=>{c.value={...u(c),...t}})}),m(C,{style:{"margin-bottom":"16px"}},{default:s(()=>[m(k,{span:16},{default:s(()=>[m(y,null,{default:s(()=>[m(o,{type:"primary",onClick:M},{default:s(()=>e[2]||(e[2]=[l(" 新增 ")])),_:1})]),_:1})]),_:1})]),_:1}),m(u(U),{ref_key:"tablePageRef",ref:p,columns:D,methods:P,api:u(E),"api-params":u(c),bordered:!0,onDelete:I},{time:s(({data:t})=>[l(N(t.startTime),1),e[3]||(e[3]=H("span",{style:{margin:"0 10px"}},"-",-1)),l(N(t.endTime),1)]),goods:s(({data:t})=>[(n(!0),V(z,null,G(t.groupImages.split(","),(d,v)=>(n(),V("span",{key:v},[v<5?(n(),r(h,{key:0,width:"50",height:"50",src:d,"show-loader":"",style:{"margin-right":"5px"}},null,8,["src"])):_("",!0)]))),128))]),view:s(({data:t})=>[t.promotionStatus==="NEW"?(n(),r(o,{key:0,type:"text",status:"warning",onClick:d=>w(t)},{default:s(()=>e[4]||(e[4]=[l(" 编辑 ")])),_:2},1032,["onClick"])):(n(),r(o,{key:1,type:"text",status:"success",onClick:d=>w(t,"onlyView")},{default:s(()=>e[5]||(e[5]=[l(" 查看 ")])),_:2},1032,["onClick"])),t.promotionStatus!=="NEW"?(n(),r(o,{key:2,type:"text",status:"primary",onClick:d=>B(t)},{default:s(()=>e[6]||(e[6]=[l(" 记录 ")])),_:2},1032,["onClick"])):_("",!0)]),close:s(({data:t})=>[t.promotionStatus==="START"?(n(),r(o,{key:0,type:"text",status:"danger",onClick:d=>O(t)},{default:s(()=>e[7]||(e[7]=[l(" 关闭 ")])),_:2},1032,["onClick"])):_("",!0)]),_:1},8,["api","api-params"])]),_:1})}}});export{ee as default};
