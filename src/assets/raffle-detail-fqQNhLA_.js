import{x as Ie}from"./goods-CB7YWqUH.js";import{a1 as Ve,g as Le,a2 as we,a3 as ke}from"./promotion-ChRoyrm_.js";import{d as Q,a as B,U as Oe,h as te,E as he,r as p,o as c,c as h,k as y,A as C,u as a,Z as E,F as K,i as j,_ as se,p as Ae,n as Ce,af as G,b as v,e as n,w as o,f as g,j as T,s as _,q as Re,t as M,M as q}from"./index-C4AMdMz2.js";import{R as V}from"./validator-B8pIxTAL.js";import{I as De}from"./dist-PezRi_EG.js";import{g as le}from"./assetsImages-DUrhbhdO.js";const Ue={customClass:{type:[String,Object,Array],default:""},customStyle:{type:[String,Object,Array],default:""}};function $(R){return{type:[String,Number],default:R}}const ze={...Ue,styleOpt:{type:Object,default:()=>({itemStyle:{},startStyle:{},bgStyle:{background:"rgb(255, 231, 149)"}})},prizeList:{type:Array,required:!0},disabled:Boolean,prizeIndex:$(-1),speed:$(150),circle:$(30)},Me={click:()=>!0,startTurns:()=>!0,endTurns:()=>!0},qe={class:"gift-list"},Pe={class:"gift-img"},Ye=["src"],Fe=["innerHTML"],xe="marquee",He=Q({name:xe,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),Ee=Q({...He,props:ze,emits:Me,setup(R,{emit:P}){const S=R;let{prizeList:w,styleOpt:k}=B(S);function L(N,l,d){return[N.customClass,{[l]:!0},d]}const D=Oe(()=>L(S,"marquee"));te(()=>{}),he(()=>S.prizeList,(N,l)=>{w=N});const m=p(null),f=p(!1);p(0),p(0),p(+S.speed),p(S.circle),p(null);const U=k.bgStyle,Y=k.itemStyle,b=k.startStyle;return(N,l)=>(c(),h("view",{ref_key:"marqueeDom",ref:m,class:E(a(D)),style:C(N.customStyle)},[l[0]||(l[0]=y("view",{class:"bgContent"},null,-1)),y("view",{class:"marqueeBg",style:C(a(U))},null,4),y("view",{class:E(["start",[{disabledDraw:a(f)||S.disabled}]]),style:C(a(b))},null,6),y("ul",qe,[(c(!0),h(K,null,j(a(w),(d,z)=>(c(),h("li",{key:`luckmarquee${z}`,class:E(["gift-item",[`gift-${z+1}`]]),style:C(a(Y))},[y("div",Pe,[y("img",{"h-35px":"","w-35px":"",src:d.prizeImg},null,8,Ye)]),y("span",{class:"desc",innerHTML:d.prizeName},null,8,Fe)],6))),128))])],6))}}),Ge=se(Ee,[["__scopeId","data-v-96aadd7a"]]),$e={flex:"","gap-50px":"","flex-a-c":""},Be={"w-800px":""},Ke={class:"base-info-item"},je={class:"form-item-view"},Qe={class:"form-item-view"},Je=["model"],Ze={class:"model"},We={class:"bg","py-200px":""},Xe=Q({__name:"raffle-detail",setup(R){const P=p("https://img11.360buyimg.com/imagetools/jfs/t1/96116/38/15085/5181/5e6f15d1E48e31d30/71353b61dff705d4.png"),S=p(),w=p([]),k=p(),L=Ae(),D=Ce(),m=p(L.query.onlyView==="true"),f=p(L.query.status),U=p(null),Y=p([]),b=p(0),N=p([]),l=p({promotionName:"",rangeTime:[G().format("YYYY-MM-DD HH:mm:ss"),G().add(7,"day").format("YYYY-MM-DD HH:mm:ss")],scopeType:"PORTION_GOODS",quantityConstraint:!1,raffleItemList:[],restrictType:"DAY",activeType:"MARQUEE",pointsFlag:!0,points:""}),d=p(),z=p([{value:"GOODS",label:"商品"},{value:"COUPON",label:"优惠券"},{value:"POINT",label:"积分"},{value:"THANK",label:"谢谢惠顾"}]),oe=[{title:"序号",align:"center",slotName:"index"},{title:"奖品信息",slotName:"awardInfo"},{title:"中奖概率",dataIndex:"probability",width:150,align:"center",slotName:"probability"}],F=p([]);async function ie(){const t=await Ve(L.query.id);if(t.data.success){const e=t.data.result;e.fullMinusFlag?(e.discountType="fullMinusFlag",delete e.fullMinusFlag):(e.discountType="fullRateFlag",delete e.fullRateFlag),e.rangeTime=[],e.rangeTime.push(e.startTime,e.endTime),l.value=e,ue()}}function ue(){d.value=Array.from({length:8},()=>({id:"",prizeName:"",prizeImg:"",data:{}})),l.value.raffleItemList.forEach((t,e)=>{(t.awardType==="COUPON"||t.awardType==="POINT")&&X(t.awardType,e),t.awardType==="GOODS"&&(d.value[e].id="GOODS",d.value[e].prizeName=t.goodsName,d.value[e].prizeImg=t.image),t.awardType==="THANK"&&(d.value[e].id="THANK",d.value[e].prizeName="谢谢惠顾",d.value[e].prizeImg=P.value)})}async function J(t){const i=await Le({pageSize:10,pageNumber:0,getType:"ACTIVITY",storeId:"",couponName:t,promotionStatus:"START"});i.data.success&&(w.value=i.data.result.records)}function Z(){D.push({name:"raffle"})}function ne(t,e){N.value=e}function de(t){t||(N.value=[])}function re(t){if(!t)return!1;const e=N.value;if(e&&e.length){const i=e[0]&&Math.abs((new Date(t).getTime()-e[0].getTime())/864e5)>7;return e[1]&&Math.abs((new Date(t).getTime()-e[1].getTime())/(24*60*60*1e3))>6||i}return!1}async function me(){var e;if(!await((e=k.value)==null?void 0:e.validate())){const i=JSON.parse(JSON.stringify(l.value));if(i.startTime=l.value.rangeTime[0],i.endTime=l.value.rangeTime[1],i.scopeType==="ALL")i.number=-1;else{const r=[];i.number=1,i.scopeId=r.toString()}i.discountType==="fullMinusFlag"?i.fullMinusFlag=!0:i.fullRateFlag=!0,delete i.rangeTime,L.query.id?(delete i.updateTime,ke(i).then(r=>{r.data.success&&(q.success("编辑活动成功"),Z())})):(delete i.id,we(i).then(r=>{r&&r.data&&r.data.success&&(q.success("添加活动成功"),Z())}))}}function pe(t){b.value=t,U.value.modalData.visible=!0}function fe(t){l.value.raffleItemList[b.value].goodsId=t[0].goodsId||"",l.value.raffleItemList[b.value].goodsName=t[0].goodsName||"",l.value.raffleItemList[b.value].image=t[0].thumbnail||"",l.value.raffleItemList[b.value].skuId=t[0].id||"",l.value.raffleItemList[b.value].quantity=t[0].quantity||0,l.value.raffleItemList[b.value].publishNum=0,l.value.raffleItemList[b.value].limitNum=1,d.value[b.value].id="GOODS",d.value[b.value].prizeName=t[0].goodsName,d.value[b.value].prizeImg=t[0].thumbnail,d.value[b.value].data=l.value.raffleItemList[b.value]}function W(t){J(t)}function ce(t,e){var i;t>((i=l.value.raffleItemList[e])==null?void 0:i.quantity)&&(q.error("不可超过商品库存！"),l.value.raffleItemList[e].publishNum=l.value.raffleItemList[e].quantity)}function ye(t,e){var i;t>((i=l.value.raffleItemList[e])==null?void 0:i.publishNum)&&(q.error("限领数量不能大于发布数量"),l.value.raffleItemList[e].limitNum=l.value.raffleItemList[e].publishNum)}function be(t,e){const i=w.value.find(r=>r.id===t);l.value.raffleItemList[e].couponName=i.couponName,d.value[e].data=l.value.raffleItemList[e],d.value[e].id="COUPON",d.value[e].prizeName=i.couponName}te(async()=>{L.query.id?ie():d.value=Array.from({length:8},()=>({id:"THANK",prizeName:"谢谢惠顾",prizeImg:P.value,data:{}})),l.value.raffleItemList=B(Array.from({length:8},(e,i)=>({goodsId:"",skuId:"",goodsName:"",points:0,couponInfo:"",couponName:"",publishNum:0,limitNum:0,awardType:"THANK",probability:12.5,itemIndex:i}))),J();const t=G().format("YYYYMMDD HH:mm:ss");l.value.promotionName=`抽奖活动-${t}`});function X(t,e){t==="COUPON"&&(d.value[e].prizeImg=le("coupon.png","images"),d.value[e].prizeName="赠送优惠券"),t==="POINT"&&(d.value[e].prizeImg=le("point.png","images"),d.value[e].prizeName="赠送积分")}const ge=B({itemStyle:{},startStyle:{},bgStyle:{background:"rgb(255, 231, 149)"}}),Te=p(99);return(t,e)=>{const i=v("a-input"),r=v("a-form-item"),ve=v("a-range-picker"),O=v("a-radio"),x=v("a-radio-group"),A=v("a-input-number"),ee=v("a-option"),ae=v("a-select"),H=v("a-button"),_e=v("a-table"),Ne=v("a-form"),Se=v("a-card");return c(),h("div",null,[n(Se,{bordered:!1},{default:o(()=>[y("div",$e,[y("div",Be,[n(Ne,{ref_key:"modifyPriceForm",ref:k,model:a(l),layout:"horizontal","auto-label-width":""},{default:o(()=>[y("div",Ke,[e[20]||(e[20]=y("h4",null,"活动信息",-1)),y("div",je,[n(r,{field:"promotionName",label:"活动名称",rules:[a(V)]},{default:o(()=>[n(i,{modelValue:a(l).promotionName,"onUpdate:modelValue":e[0]||(e[0]=s=>a(l).promotionName=s),"allow-clear":"",style:{width:"400px"},disabled:a(m)||a(f)==="START"},null,8,["modelValue","disabled"])]),_:1},8,["rules"]),n(r,{field:"rangeTime",label:"活动时间",rules:[a(V)]},{default:o(()=>[n(ve,{modelValue:a(l).rangeTime,"onUpdate:modelValue":e[1]||(e[1]=s=>a(l).rangeTime=s),style:C([{width:"254px","margin-bottom":"20px"},{width:"400px"}]),disabled:a(m)||a(f)==="START","disabled-date":re,"show-time":"",format:"YYYY-MM-DD HH:mm:ss",onSelect:ne,onPopupVisibleChange:de},null,8,["modelValue","disabled"])]),_:1},8,["rules"])]),y("div",Qe,[n(r,{field:"pointsFlag",label:"消耗积分",rules:[a(V)]},{default:o(()=>[n(x,{modelValue:a(l).pointsFlag,"onUpdate:modelValue":e[2]||(e[2]=s=>a(l).pointsFlag=s)},{default:o(()=>[n(O,{value:!0,disabled:a(m)||a(f)==="START"},{default:o(()=>e[10]||(e[10]=[g(" 是 ")])),_:1},8,["disabled"]),n(O,{value:!1,disabled:a(m)||a(f)==="START"},{default:o(()=>e[11]||(e[11]=[g(" 否 ")])),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1},8,["rules"]),a(l).pointsFlag?(c(),T(r,{key:0,field:"points",label:"积分数量",rules:[a(V)]},{default:o(()=>[n(i,{modelValue:a(l).points,"onUpdate:modelValue":e[3]||(e[3]=s=>a(l).points=s),"allow-clear":"",style:{width:"400px"},disabled:a(m)||a(f)==="START"},null,8,["modelValue","disabled"])]),_:1},8,["rules"])):_("",!0),n(r,{field:"restrictType",label:"限制规则",rules:[a(V)]},{default:o(()=>[n(x,{modelValue:a(l).restrictType,"onUpdate:modelValue":e[4]||(e[4]=s=>a(l).restrictType=s)},{default:o(()=>[n(O,{value:"DAY",disabled:a(m)||a(f)==="START"},{default:o(()=>e[12]||(e[12]=[g(" 按日限制 ")])),_:1},8,["disabled"]),n(O,{value:"CYCLE",disabled:a(m)||a(f)==="START"},{default:o(()=>e[13]||(e[13]=[g(" 按活动周期限制 ")])),_:1},8,["disabled"]),n(O,{value:"ALL",disabled:a(m)||a(f)==="START"},{default:o(()=>e[14]||(e[14]=[g(" 按日+活动限制 ")])),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1},8,["rules"]),a(l).restrictType==="DAY"||a(l).restrictType==="ALL"?(c(),T(r,{key:1,field:"dailyLimit",label:"每日限制",rules:[a(V)]},{default:o(()=>[n(A,{modelValue:a(l).dailyLimit,"onUpdate:modelValue":e[5]||(e[5]=s=>a(l).dailyLimit=s),"allow-clear":"",style:{width:"400px"},disabled:a(m)||a(f)==="START"},null,8,["modelValue","disabled"])]),_:1},8,["rules"])):_("",!0),a(l).restrictType==="CYCLE"||a(l).restrictType==="ALL"?(c(),T(r,{key:2,field:"activityLimit",label:"活动内限制",rules:[a(V)]},{default:o(()=>[n(i,{modelValue:a(l).activityLimit,"onUpdate:modelValue":e[6]||(e[6]=s=>a(l).activityLimit=s),"allow-clear":"",style:{width:"400px"},disabled:a(m)||a(f)==="START"},null,8,["modelValue","disabled"])]),_:1},8,["rules"])):_("",!0),n(r,{field:"activeType",label:"活动样式",rules:[a(V)]},{default:o(()=>[n(x,{modelValue:a(l).activeType,"onUpdate:modelValue":e[7]||(e[7]=s=>a(l).activeType=s)},{default:o(()=>[n(O,{value:"MARQUEE",disabled:a(m)||a(f)==="START"},{default:o(()=>e[15]||(e[15]=[g(" 九宫格 ")])),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1},8,["rules"]),a(l).scopeType==="PORTION_GOODS"?(c(),T(r,{key:3},{default:o(()=>[n(_e,{"selected-keys":a(F),"onUpdate:selectedKeys":e[8]||(e[8]=s=>Re(F)?F.value=s:null),columns:oe,data:a(l).raffleItemList,"row-key":"skuId",pagination:!1,style:{width:"600px"}},{index:o(({rowIndex:s})=>[g(M(s+1),1)]),awardInfo:o(({record:s,rowIndex:I})=>[y("form",{ref_key:"modifyItemForm",ref:S,model:s},[n(ae,{modelValue:s.awardType,"onUpdate:modelValue":u=>s.awardType=u,"allow-search":"",style:{width:"340px"},"mb-4":"",disabled:a(m)||a(f)==="START",onSearch:W,onChange:u=>X(u,I)},{default:o(()=>[(c(!0),h(K,null,j(a(z),u=>(c(),T(ee,{key:u.value,value:u.value},{default:o(()=>[g(M(u.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","disabled","onChange"]),s.awardType==="COUPON"?(c(),T(r,{key:0,field:"couponId",label:"优惠券"},{default:o(()=>[n(ae,{modelValue:s.couponId,"onUpdate:modelValue":u=>s.couponId=u,"allow-search":"",style:{width:"242px"},disabled:a(m)||a(f)==="START",onSearch:W,onChange:u=>be(u,I)},{default:o(()=>[(c(!0),h(K,null,j(a(w),u=>(c(),T(ee,{key:u.id,value:u.id,label:u.couponName},{default:o(()=>[g(M(u.couponName),1)]),_:2},1032,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:2},1024)):_("",!0),s.awardType==="GOODS"?(c(),T(r,{key:1,label:"商品信息"},{default:o(()=>[y("span",null,M(s.goodsName),1)]),_:2},1024)):_("",!0),s.awardType==="COUPON"||s.awardType==="GOODS"?(c(),T(r,{key:2,field:"publishNum",label:"发放数量"},{default:o(()=>[n(A,{modelValue:s.publishNum,"onUpdate:modelValue":u=>s.publishNum=u,"allow-clear":"",style:{width:"242px"},disabled:a(m)||a(f)==="START",onChange:u=>ce(u,I)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:2},1024)):_("",!0),s.awardType==="COUPON"||s.awardType==="GOODS"?(c(),T(r,{key:3,field:"limitNum",label:"每人限领"},{default:o(()=>[n(A,{modelValue:s.limitNum,"onUpdate:modelValue":u=>s.limitNum=u,"allow-clear":"",style:{width:"242px"},disabled:a(m)||a(f)==="START",onChange:u=>ye(u,I)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:2},1024)):_("",!0),s.awardType==="POINT"?(c(),T(r,{key:4,field:"points",label:"积分数量"},{default:o(()=>[n(A,{modelValue:s.points,"onUpdate:modelValue":u=>s.points=u,"allow-clear":"",style:{width:"242px"},disabled:a(m)||a(f)==="START",onChange:u=>t.changePoint(u,I)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:2},1024)):_("",!0),s.awardType==="GOODS"&&!(a(m)||a(f)==="START")?(c(),T(H,{key:5,disabled:a(m)||a(f)==="START",type:"outline",onClick:u=>pe(I)},{default:o(()=>e[16]||(e[16]=[g(" 选择商品 ")])),_:2},1032,["disabled","onClick"])):_("",!0)],8,Je)]),probability:o(({record:s,rowIndex:I})=>[n(A,{modelValue:s.probability,"onUpdate:modelValue":u=>s.probability=u,max:100,disabled:a(m)||a(f)==="START",precision:2,min:.01,onInput:u=>a(l).raffleItemList[I].probability=s.probability},{suffix:o(()=>e[17]||(e[17]=[g(" % ")])),_:2},1032,["modelValue","onUpdate:modelValue","disabled","onInput"])]),_:1},8,["selected-keys","data"])]),_:1})):_("",!0),y("div",null,[n(H,{style:{"margin-right":"5px"},onClick:e[9]||(e[9]=s=>a(D).push({name:"raffle"}))},{default:o(()=>e[18]||(e[18]=[g(" 返回 ")])),_:1}),a(m)?_("",!0):(c(),T(H,{key:0,type:"primary",disabled:a(m),onClick:me},{default:o(()=>e[19]||(e[19]=[g(" 提交 ")])),_:1},8,["disabled"]))])])])]),_:1},8,["model"])]),y("div",Ze,[y("div",We,[n(Ge,{"prize-list":a(d),"prize-index":a(Te),speed:100,circle:40,"style-opt":a(ge)},null,8,["prize-list","prize-index","style-opt"])]),e[21]||(e[21]=y("div",{class:"extended"},null,-1))])])]),_:1}),n(a(De),{ref_key:"skuSelect",ref:U,"is-single":!0,api:a(Ie),"goods-or-sku":!0,"default-goods-selected-list":a(Y),onChange:fe},null,8,["api","default-goods-selected-list"])])}}}),ia=se(Xe,[["__scopeId","data-v-6fb8893d"]]);export{ia as default};
