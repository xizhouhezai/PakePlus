import{d as v,o,c as a,F as i,i as y,k as t,Z as c,A as p,f as x,s as r,t as n,_ as k}from"./index-C4AMdMz2.js";const T={key:0,flex:"","flex-a-c":"","overflow-x-auto":"","p-16px":""},b={key:0,"mt-13px":"",class:"dashed"},C={key:1,flex:"","flex-a-c":"","overflow-x-auto":"","p-16px":""},g={key:0,"text-22px":"","font-bold":""},w={key:1,"text-22px":"","font-bold":""},N={"mt-5px":"","text-10px":""},$={key:2,"mt-13px":"",class:"dashed"},B=v({__name:"tpl_promotion_coupon",props:{res:null},setup(m){const e=m,h={yellow:"#ffe9b7",red:"#e74c2c",white:"#fff",black:"#000",green:"#e0f4e4"},f={black:"#fff",white:"#d45134",red:"#fff",yellow:"#f39343",green:"#4cac5a"};function d(u){return h[u]}return(u,l)=>(o(),a("div",null,[e.res.data.list.length?r("",!0):(o(),a("div",T,[(o(),a(i,null,y(4,s=>t("div",{key:s},[t("div",{class:c([e.res.data.styles,e.res.data.styles==="style-3"?"h-113px":"h-84px",`${e.res.data.styles}-${e.res.data.couponTheme}`]),"mb-12px":"","mr-12px":"","w-132px":"",flex:"","flex-col":"","flex-j-c":"","flex-a-c":"",style:p({background:s<2?d(e.res.data.couponTheme):"#a8a29e",color:s<2?f[e.res.data.couponTheme]:"#fff"})},[l[0]||(l[0]=t("div",{"text-22px":"","font-bold":""},[x(" 150.88 "),t("span",{"text-12px":""},"元")],-1)),l[1]||(l[1]=t("div",{"mt-5px":"","text-10px":""}," 无门槛全商品可用 ",-1)),e.res.data.styles==="style-3"?(o(),a("div",b,[t("div",{"mt-12px":"",style:p({borderColor:d(e.res.data.couponTheme)})}," 领取 ",4)])):r("",!0)],6)])),64))])),e.res.data.list.length?(o(),a("div",C,[(o(!0),a(i,null,y(e.res.data.list,(s,_)=>(o(),a("div",{key:_,class:c([e.res.data.styles,e.res.data.styles==="style-3"?"h-113px":"h-84px",`${e.res.data.styles}-${e.res.data.couponTheme}`])},[t("div",{class:c(e.res.data.styles),"mb-12px":"","mr-12px":"","h-full":"","w-132px":"",flex:"","flex-col":"","flex-j-c":"","flex-a-c":"",style:p({background:d(e.res.data.couponTheme),color:f[e.res.data.couponTheme]})},[s.couponType==="PRICE"?(o(),a("div",g,[x(n(s.price)+" ",1),l[2]||(l[2]=t("span",{"text-24rpx":""},"元",-1))])):r("",!0),s.couponType==="DISCOUNT"?(o(),a("div",w,[x(n(s.couponDiscount)+" ",1),l[3]||(l[3]=t("span",{"text-24rpx":""},"折",-1))])):r("",!0),t("div",N," 满"+n(s.consumeThreshold)+"元,"+n(s.scopeType==="ALL"?"全场通用":"指定商品可用"),1),e.res.data.styles==="style-3"?(o(),a("div",$,[t("div",{"mt-12px":"",style:p({borderColor:d(e.res.data.couponTheme)})}," 领取 ",4)])):r("",!0)],6)],2))),128))])):r("",!0)]))}}),I=k(B,[["__scopeId","data-v-fef698f9"]]);export{I as default};
