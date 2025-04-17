import{s as J,ab as K,ac as X,a9 as Z}from"./promotion-ChRoyrm_.js";import{u as tt}from"./useCurrentInstance-BLlvmEjv.js";import{R as w}from"./validator-B8pIxTAL.js";import{V as N}from"./dist-PezRi_EG.js";import{d as et,r as d,p as ot,h as at,b as u,o as r,c as p,e as a,w as e,u as l,F as T,i as st,f as n,s as f,t as L,j as b,k as lt,q as nt,M as c,b9 as it,_ as rt}from"./index-C4AMdMz2.js";const ut={class:"seckill-goods"},dt={key:0},pt={key:1},mt={key:2},ft={key:3},ct=["onClick"],gt=et({__name:"seckill-goods",setup(yt){var P;const v=d(),U=(P=tt().globalProperties)==null?void 0:P.$modal,x=ot(),F={seckillId:x.query.id,sort:"",order:""},S=d(""),g=d([]),y=d(!1),i=d({promotionApplyStatus:"PASS",seckillId:x.query.id,failReason:"",ids:""}),A=d(!1),D=d(""),I=d([]),M=[{title:"活动名称",dataIndex:"promotionName"},{title:"活动开始时间",dataIndex:"startTime"},{title:"报名截止时间",dataIndex:"applyEndTime"},{title:"时间场次",dataIndex:"hours",slot:!0,slotTemplate:"hours"},{title:"活动状态",dataIndex:"promotionStatuS",slot:!0,slotTemplate:"promotionStatuS"}],q=[{title:"商品名称",dataIndex:"goodsName"},{title:"商品价格",dataIndex:"originalPrice",currency:!0},{title:"库存",dataIndex:"quantity"},{title:"活动价格",dataIndex:"price",currency:!0},{title:"商家名称",dataIndex:"storeName"},{title:"活动场次",dataIndex:"time",slot:!0,slotTemplate:"time"},{title:"状态",dataIndex:"promotionApplyStatus",slot:!0,slotTemplate:"promotionApplyStatus",width:180},{title:"操作",dataIndex:"action",slot:!0,slotTemplate:"action"}];function G(){Z(x.query.id).then(s=>{s.data.result&&(S.value=s.data.result.promotionStatus,I.value=[],I.value.push({...s.data.result,hours:s.data.result.hours.split(",")}))})}function C(){G()}at(()=>{C()});function $(s){U.confirm({title:"确认删除",content:"您确认要删除该商品吗?删除后不可恢复",alignCenter:!1,onOk:async()=>{const t={seckillId:s.seckillId,id:s.id};(await K(t)).data.success&&(c.success("删除成功！"),v.value.init())}})}function B(s){g.value=s}function O(){if(g.value<=0){c.warning("您还未选择要审核的商品");return}y.value=!0}function h(){if(g.value.length<=0){c.warning("您还未选择要审核的商品");return}if(i.value.ids=g.value.filter(s=>s.promotionApplyStatus==="APPLY").map(s=>s.id),i.value.ids.length<=0){c.warning("当前没有可审核的商品");return}if(i.value.promotionApplyStatus==="REFUSE"&&i.value.failReason===""){c.warning("审核拒绝理由不能为空");return}A.value=!0,X(i.value).then(s=>{A.value=!1,s.data.success&&(y.value=!1,c.success("操作成功"),g.value=[],v.value.init(),C())})}function Y(s){it.info({title:"拒绝原因",content:s.failReason})}return(s,t)=>{const m=u("a-tag"),k=u("a-badge"),R=u("a-button"),j=u("a-card"),V=u("a-radio"),Q=u("a-radio-group"),E=u("a-form-item"),W=u("a-textarea"),z=u("a-form"),H=u("a-modal");return r(),p("div",ut,[a(j,{bordered:!1},{default:e(()=>[a(l(N),{columns:M,"data-list":l(I),"enable-pagination":!1,bordered:!0},{hours:e(({data:o})=>[(r(!0),p(T,null,st(o.hours,_=>(r(),b(m,{key:_},{default:e(()=>[n(L(`${_}:00`),1)]),_:2},1024))),128))]),promotionStatuS:e(({data:o})=>[o.promotionStatus==="NEW"?(r(),p("span",dt,[a(k,{status:"success",style:{"margin-right":"10px"}}),t[3]||(t[3]=n("新建"))])):f("",!0),o.promotionStatus==="success"?(r(),p("span",pt,[a(k,{status:"danger",style:{"margin-right":"10px"}}),t[4]||(t[4]=n("开始"))])):f("",!0),o.promotionStatus==="END"?(r(),p("span",mt,[a(k,{status:"danger",style:{"margin-right":"10px"}}),t[5]||(t[5]=n("结束"))])):f("",!0),o.promotionStatus==="CLOSE"?(r(),p("span",ft,[a(k,{status:"danger",style:{"margin-right":"10px"}}),t[6]||(t[6]=n("废弃"))])):f("",!0)]),_:1},8,["data-list"]),a(R,{type:"primary","mt-20px":"",disabled:l(S)==="END"||l(S)==="CLOSE",onClick:O},{default:e(()=>t[7]||(t[7]=[n(" 批量审核 ")])),_:1},8,["disabled"]),a(l(N),{ref_key:"tablePageRef",ref:v,checkbox:!0,columns:q,api:l(J),"api-params":F,style:{"margin-top":"20px"},bordered:!0,onSelectTableChange:B},{time:e(({data:o})=>[a(m,null,{default:e(()=>[n(L(`${o.timeLine}:00`),1)]),_:2},1024)]),promotionApplyStatus:e(({data:o})=>[o.promotionApplyStatus==="APPLY"?(r(),b(m,{key:0,color:"orange"},{default:e(()=>t[8]||(t[8]=[n(" 待审核 ")])),_:1})):o.promotionApplyStatus==="PASS"?(r(),b(m,{key:1,color:"green"},{default:e(()=>t[9]||(t[9]=[n(" 通过 ")])),_:1})):o.promotionApplyStatus==="REFUSE"?(r(),p(T,{key:2},[a(m,{color:"red"},{default:e(()=>t[10]||(t[10]=[n(" 拒绝 ")])),_:1}),lt("span",{class:"reason",onClick:_=>Y(o)},"（拒绝原因）",8,ct)],64)):f("",!0)]),action:e(({data:o,rowIndex:_})=>[a(R,{type:"text",status:"danger",disabled:l(S)==="END",onClick:_t=>$(o,_)},{default:e(()=>t[11]||(t[11]=[n(" 删除 ")])),_:2},1032,["disabled","onClick"])]),_:1},8,["api"])]),_:1}),a(H,{visible:l(y),"onUpdate:visible":t[2]||(t[2]=o=>nt(y)?y.value=o:null),"align-center":!1,footer:!1},{title:e(()=>t[12]||(t[12]=[n(" 审核商品 ")])),default:e(()=>[a(z,{ref_key:"formRef",ref:D,model:l(i),onSubmit:h},{default:e(()=>[a(E,{field:"promotionApplyStatus",label:"审核状态",rules:[l(w)],"validate-trigger":["change"]},{default:e(()=>[a(Q,{modelValue:l(i).promotionApplyStatus,"onUpdate:modelValue":t[0]||(t[0]=o=>l(i).promotionApplyStatus=o),type:"button"},{default:e(()=>[a(V,{value:"PASS"},{default:e(()=>t[13]||(t[13]=[n(" 通过 ")])),_:1}),a(V,{value:"REFUSE"},{default:e(()=>t[14]||(t[14]=[n(" 拒绝 ")])),_:1})]),_:1},8,["modelValue"])]),_:1},8,["rules"]),l(i).promotionApplyStatus==="REFUSE"?(r(),b(E,{key:0,field:"failReason",label:"拒绝原因",rules:[l(w)]},{default:e(()=>[a(W,{modelValue:l(i).failReason,"onUpdate:modelValue":t[1]||(t[1]=o=>l(i).failReason=o),"allow-clear":"",style:{width:"260px"}},null,8,["modelValue"])]),_:1},8,["rules"])):f("",!0),a(E,{label:"操作"},{default:e(()=>[a(R,{loading:l(A),"html-type":"submit",type:"primary"},{default:e(()=>t[15]||(t[15]=[n(" 保存 ")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])])}}}),At=rt(gt,[["__scopeId","data-v-1ab8defd"]]);export{At as default};
