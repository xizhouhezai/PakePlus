import{x as j}from"./goods-CB7YWqUH.js";import{J as O,C as z}from"./promotion-ChRoyrm_.js";import{u as J}from"./useCurrentInstance-BLlvmEjv.js";import{d as x}from"./filters-D05Q2eUM.js";import{I as K}from"./dist-PezRi_EG.js";import{d as Q,n as W,r as c,a as X,h as Z,b as u,o as v,c as S,e as l,w as i,u as o,k as p,f as m,F as ee,i as te,M as f,j as oe,t as ae,_ as ne}from"./index-C4AMdMz2.js";const se={class:"wrapper"},le={class:"base-info-item"},ie={class:"form-item-view"},de={style:{margin:"10px"}},re=Q({__name:"points-goods-add",setup(ue){var b;const k=W(),w=[{title:"商品名称",dataIndex:"goodsName"},{title:"SKU编码",dataIndex:"skuId"},{title:"店铺名称",dataIndex:"storeName"},{title:"商品价格",dataIndex:"price"},{title:"库存",dataIndex:"quantity"},{title:"结算价格",dataIndex:"settlementPrice",slotName:"settlementPrice"},{title:"分类",dataIndex:"pointsGoodsCategory",slotName:"pointsGoodsCategory"},{title:"活动库存",dataIndex:"activeStock",slotName:"activeStock"},{title:"兑换积分",dataIndex:"points",slotName:"points"},{title:"操作",dataIndex:"action",slotName:"action"}],G=(b=J().globalProperties)==null?void 0:b.$modal,C=c(null),r=c({promotionGoodsList:[],startTime:"",endTime:""}),y=c(!1),I=X({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),V=c([]),s=c([]),_=c([]),N={marketEnable:"UPPER",authFlag:"PASS",order:"desc",sort:"createTime",scene:"STORE"};function P(t){const e=[];t.forEach(a=>{const g={settlementPrice:a.settlementPrice||0,pointsGoodsCategoryId:a.pointsGoodsCategoryId||0,pointsGoodsCategoryName:a.pointsGoodsCategoryName||"",activeStock:a.activeStock||0,points:a.points||0,skuId:a.id,goodsId:a.goodsId,originalPrice:a.price||0,thumbnail:a.thumbnail||"",goodsName:a.goodsName||"",quantity:a.quantity||"",storeName:a.storeName||"",price:a.price||""};e.push(g)}),s.value=e}function T(){C.value.modalData.visible=!0}function U(t){_.value=t}function M(t){s.value.splice(t,1)}function L(){if(_.value.length<=0){f.warning("您还未选择要删除的数据");return}G.confirm({title:"确认删除",content:"您确认要删除所选商品吗?",alignCenter:!1,onOk:async()=>{s.value=s.value.filter(t=>!_.value.includes(t.skuId))}})}function Y(){let t=s.value;if(!t||t.length===0){f.warning("请选择指定商品");return}for(let e=0;e<t.length;e++){if(!t[e].activeStock){f.warning("请填写活动库存");return}if(!t[e].points){f.warning("请填写兑换积分");return}}if(!r.value.startTime||!r.value.endTime){f.warning("请选择兑换时间");return}y.value=!0,t=t.map(e=>({...e,startTime:x(r.value.startTime),endTime:x(r.value.endTime)})),O(t).then(e=>{y.value=!1,e.data.success&&(f.success("积分商品创建成功"),k.push({name:"integrate-goods"}))})}function D(t,e){s.value[e].pointsGoodsCategoryName=t.name,s.value[e].pointsGoodsCategoryId=t.id}async function H(){const t=await z();t.data.success&&(V.value=t.data.result.records)}function E(){k.push({name:"integrate-goods"})}return Z(()=>{H()}),(t,e)=>{const a=u("a-button"),g=u("a-input-number"),B=u("a-option"),F=u("a-select"),q=u("a-table"),h=u("a-date-picker"),A=u("a-form-item"),R=u("a-form"),$=u("a-card");return v(),S("div",se,[l($,{bordered:!1},{default:i(()=>[l(R,{model:o(r),style:{width:"100%"},layout:"horizontal","auto-label-width":""},{default:i(()=>[p("div",le,[e[9]||(e[9]=p("h4",null,"添加积分商品",-1)),p("div",ie,[p("div",de,[l(a,{type:"outline",onClick:T},{default:i(()=>e[2]||(e[2]=[m(" 选择商品 ")])),_:1}),l(a,{style:{"margin-left":"10px"},type:"outline",status:"danger",onClick:L},{default:i(()=>e[3]||(e[3]=[m(" 批量删除 ")])),_:1})]),l(q,{"row-key":"skuId",columns:w,data:o(s),"row-selection":o(I),bordered:!0,onSelectionChange:U},{action:i(({rowIndex:n})=>[l(a,{type:"text",status:"danger",onClick:d=>M(n)},{default:i(()=>e[4]||(e[4]=[m(" 删除 ")])),_:2},1032,["onClick"])]),settlementPrice:i(({rowIndex:n})=>[l(g,{modelValue:o(s)[n].settlementPrice,"onUpdate:modelValue":d=>o(s)[n].settlementPrice=d,style:{width:"100px"}},null,8,["modelValue","onUpdate:modelValue"])]),pointsGoodsCategory:i(({rowIndex:n})=>[l(F,{modelValue:o(s)[n].pointsGoodsCategory,"onUpdate:modelValue":d=>o(s)[n].pointsGoodsCategory=d,style:{width:"100px"}},{default:i(()=>[(v(!0),S(ee,null,te(o(V),d=>(v(),oe(B,{key:d.id,value:d.id,onClick:me=>D(d,n)},{default:i(()=>[m(ae(d.name),1)]),_:2},1032,["value","onClick"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),activeStock:i(({rowIndex:n})=>[l(g,{modelValue:o(s)[n].activeStock,"onUpdate:modelValue":d=>o(s)[n].activeStock=d,style:{width:"100px"}},null,8,["modelValue","onUpdate:modelValue"])]),points:i(({rowIndex:n})=>[l(g,{modelValue:o(s)[n].points,"onUpdate:modelValue":d=>o(s)[n].points=d,style:{width:"100px"}},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["data","row-selection"]),e[8]||(e[8]=p("div",{style:{height:"20px"}},null,-1)),l(A,{label:"兑换时间"},{default:i(()=>[l(h,{modelValue:o(r).startTime,"onUpdate:modelValue":e[0]||(e[0]=n=>o(r).startTime=n),style:{width:"200px"},format:"YYYY-MM-DD HH:mm:ss","show-time":""},null,8,["modelValue"]),e[5]||(e[5]=m(" - ")),l(h,{modelValue:o(r).endTime,"onUpdate:modelValue":e[1]||(e[1]=n=>o(r).endTime=n),style:{width:"200px"},format:"YYYY-MM-DD HH:mm:ss","show-time":""},null,8,["modelValue"])]),_:1}),p("div",null,[l(a,{style:{"margin-right":"5px"},onClick:E},{default:i(()=>e[6]||(e[6]=[m(" 返回 ")])),_:1}),l(a,{type:"primary",loading:o(y),onClick:Y},{default:i(()=>e[7]||(e[7]=[m(" 提交 ")])),_:1},8,["loading"])])])])]),_:1},8,["model"])]),_:1}),l(o(K),{ref_key:"skuSelect",ref:C,api:o(j),"goods-or-sku":!0,"api-params":N,"default-goods-selected-list":o(s),onChange:P},null,8,["api","default-goods-selected-list"])])}}}),ve=ne(re,[["__scopeId","data-v-0e5464c6"]]);export{ve as default};
