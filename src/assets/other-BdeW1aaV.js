import{I as j}from"./all-BUr7x5Dn.js";import{d as U,p as I,r as f,E as N,h as T,b as _,o as i,c as s,k as a,e as p,w as z,F as h,i as E,u as n,q as w,s as b,Z as F,j as R,t as $,_ as q}from"./index-C4AMdMz2.js";const D=["onClick"],L={key:0},M={"w-300px":"",flex:"","cursor-pointer":"","flex-a-c":""},O={key:1},P={"w-300px":"",flex:"","cursor-pointer":"","flex-a-c":""},S=U({__name:"other",props:{res:null},emits:["selectTableChange"],setup(y,{emit:C}){const V=y,x=C,c=I(),l=f(""),v=f("");N(()=>V.res,o=>{var e,u,r;o.url&&((e=o.url)==null?void 0:e.___value)==="other"&&((u=o.url)==null?void 0:u.title.indexOf("自定义链接-"))!==-1&&(l.value=(r=o.url)==null?void 0:r.title.split("自定义链接-")[1])},{deep:!0,immediate:!0});const d=f([{label:"首页",icon:"home",value:"home"},{label:"购物车",icon:"shopping-cart",value:"cart"},{label:"收藏商品",icon:"weixin-favorites",value:"collection"},{label:"我的订单",icon:"order",value:"order"},{label:"个人中心",icon:"user",value:"user"},{label:"拼团频道",icon:"group",value:"group"},{label:"秒杀频道",icon:"buy",value:"seckill"},{label:"领券中心",icon:"coupon",value:"coupon"},{label:"签到",icon:"push-door",value:"sign"},{label:"砍价",icon:"user-to-user-transmission",value:"kanjia"},{label:"积分商城",icon:"mall-bag",value:"point"},{label:"付费会员",icon:"vip",value:"vip"},{label:"会员等级",icon:"level",value:"level"},{label:"抽奖",icon:"gift",value:"gift"}]);function g(){v.value="",x("selectTableChange",{label:`自定义链接-${l.value}`,___type:"other",value:"custom",___url:l.value})}function B(o,e){v.value=e,l.value="",x("selectTableChange",{...o,___type:"other"})}return T(()=>{if(c.name==="pc-invent"){const o=["point","kanjia","sign","group","coupon","vip","level","gift"];d.value=d.value.filter(e=>!o.includes(e.value))}}),(o,e)=>{const u=_("a-space"),r=_("a-divider"),k=_("a-input");return i(),s(h,null,[e[6]||(e[6]=a("div",{"mb-10px":""}," 程序内部跳转 ",-1)),p(u,{wrap:""},{default:z(()=>[(i(!0),s(h,null,E(n(d),(t,m)=>(i(),s("div",{key:m,class:F({active:m===n(v)}),"h-80px":"","w-80px":"",flex:"","flex-col":"","cursor-pointer":"","flex-j-c":"","flex-a-c":"","bg-gray-100":"","text-center":"","text-12px":"","hover:bg-gray-3":"",onClick:Z=>B(t,m)},[t.icon?(i(),R(n(j),{key:0,type:t.icon,"mb-8px":"",size:"22",fill:"#666"},null,8,["type"])):b("",!0),a("div",null,$(t.label),1)],10,D))),128))]),_:1}),p(r),n(c).name==="app-invent"?(i(),s("div",L,[e[3]||(e[3]=a("div",{"mb-10px":""}," 程序内部自定义跳转 ",-1)),a("div",M,[e[2]||(e[2]=a("div",{"w-100px":""}," 链接地址： ",-1)),p(k,{modelValue:n(l),"onUpdate:modelValue":e[0]||(e[0]=t=>w(l)?l.value=t:null),placeholder:"例如：pages/index",onBlur:g},null,8,["modelValue"])])])):b("",!0),n(c).name==="pc-invent"?(i(),s("div",O,[e[5]||(e[5]=a("div",{"mb-10px":""}," 自定义跳转 ",-1)),a("div",P,[e[4]||(e[4]=a("div",{"w-100px":""}," 链接地址： ",-1)),p(k,{modelValue:n(l),"onUpdate:modelValue":e[1]||(e[1]=t=>w(l)?l.value=t:null),placeholder:"例如：https://www.example.com",onBlur:g},null,8,["modelValue"])])])):b("",!0)],64)}}}),H=q(S,[["__scopeId","data-v-288eea02"]]);export{H as default};
