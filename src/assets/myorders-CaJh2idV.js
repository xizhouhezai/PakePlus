import{a as q}from"./order-HsmDfkng.js";import{u as b}from"./filters-D05Q2eUM.js";import{l as u,n as w,p as x,q as I,t as L,u as R}from"./tools-BfzgO_2s.js";import{U as D}from"./dist-PezRi_EG.js";import{d as E,p as F,n as M,r as _,h as U,E as $,b as h,o as d,c as r,e as p,u as a,k as e,ah as j,F as S,i as k,f as c,w as y,t as i,_ as A}from"./index-C4AMdMz2.js";const G={class:"order-box"},H={class:"order-lists"},J={class:"header"},K={style:{color:"#333"}},Q={style:{color:"#333"}},W={class:"body"},X={style:{width:"30%"}},Y={class:"goods"},Z=["src"],ee={class:"goods-info"},te={style:{width:"100%"},class:"hover-color"},se={class:"goods-num"},ae={class:"global_color"},oe={style:{color:"red"}},ie={style:{width:"10%","line-height":"32px"}},le={style:{width:"10%","line-height":"32px"}},ne={style:{width:"10%","line-height":"32px"}},de={style:{width:"10%","line-height":"32px"}},re={style:{width:"10%","line-height":"32px"}},pe={style:{width:"10%","line-height":"32px"}},ce={style:{width:"10%"}},ue={class:"paginationBox"},_e=E({__name:"myorders",setup(he){const N=F(),T=M(),z=[{label:"订单号",model:"orderSn",disabled:!1,input:!0},{label:"订单状态",model:"orderStatus",disabled:!1,select:{options:x}},{label:"支付状态",model:"payStatus",disabled:!1,select:{options:L}},{label:"订单类型",model:"orderType",disabled:!1,select:{options:R}},{label:"订单来源",model:"clientType",disabled:!1,select:{options:w}},{label:"下单时间",model:"payStatus",disabled:!1,datePicker:{type:"range"}}],o=_({pageNumber:1,pageSize:10,buyerId:N.query.id}),m=_(),v=_({total:0});async function f(){const l=await q(o.value);l.data.success&&(m.value=l.data.result.records,v.value=l.data.result)}function C(l){const t=T.resolve({name:"order-detail",query:{id:l.sn}});window.open(t.href,"_blank")}return U(()=>{f()}),$(()=>[o.value],()=>{f()},{deep:!0}),(l,t)=>{const g=h("a-typography-text"),P=h("a-button"),O=h("a-pagination");return d(),r("div",null,[p(a(D),{columns:z,onReset:t[0]||(t[0]=s=>{o.value={...a(o),...s}}),onSearch:t[1]||(t[1]=s=>{o.value={...a(o),...s}})}),e("div",G,[t[7]||(t[7]=j('<div class="order-tab" data-v-3008fe8e><p style="width:30%;" data-v-3008fe8e> 订单详情 </p><p style="width:10%;" data-v-3008fe8e> 订单来源 </p><p style="width:10%;" data-v-3008fe8e> 店铺名称 </p><p style="width:10%;" data-v-3008fe8e> 应付 </p><p style="width:10%;" data-v-3008fe8e> 买家/收货人 </p><p style="width:10%;" data-v-3008fe8e> 订单状态 </p><p style="width:10%;" data-v-3008fe8e> 支付状态 </p><p style="width:10%;" data-v-3008fe8e> 操作 </p></div>',1)),e("div",H,[(d(!0),r(S,null,k(a(m),(s,B)=>(d(),r("div",{key:B,class:"order-item"},[e("div",J,[e("p",null,[t[4]||(t[4]=c(" 订单编号：")),p(g,{copyable:"",bold:""},{default:y(()=>[e("span",K,i(s.sn),1)]),_:2},1024)]),e("p",null,[t[5]||(t[5]=c("下单时间：")),e("span",Q,i(s.createTime),1)])]),e("div",W,[e("div",X,[e("div",Y,[(d(!0),r(S,null,k(s.orderItems,(n,V)=>(d(),r("div",{key:V},[e("img",{class:"hover-color",src:n.image,alt:""},null,8,Z),e("div",ee,[e("div",te,[p(g,{copyable:"",bold:""},{default:y(()=>[c(i(n.name),1)]),_:2},1024)])]),e("div",se,[e("span",ae,i(a(b)(n.goodsPrice,"￥")),1),e("span",oe," x"+i(n.num),1)])]))),128))])]),e("div",ie,i(a(u)(a(w),s.clientType)),1),e("div",le,i(s.storeName),1),e("div",ne,i(a(b)(s.flowPrice,"￥")),1),e("div",de,i(s.nickname),1),e("div",re,i(a(u)(a(x),s.orderStatus)),1),e("div",pe,i(a(u)(a(I),s.payStatus)),1),e("div",ce,[p(P,{type:"text",status:"success",onClick:n=>C(s)},{default:y(()=>t[6]||(t[6]=[c(" 查看 ")])),_:2},1032,["onClick"])])])]))),128))])]),e("div",ue,[p(O,{total:a(v).total,"show-page-size":"",current:a(o).pageNumber,"page-size":a(o).pageSize,onChange:t[2]||(t[2]=s=>{a(o).pageNumber=s}),onPageSizeChange:t[3]||(t[3]=s=>{a(o).pageSize=s,a(o).pageNumber=1})},null,8,["total","current","page-size"])])])}}}),be=A(_e,[["__scopeId","data-v-3008fe8e"]]);export{be as default};
