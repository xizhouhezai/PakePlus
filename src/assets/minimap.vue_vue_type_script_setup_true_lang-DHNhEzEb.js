import{d as Y,r as y,as as C,U as j,b as a,v as z,o as p,c as f,u as _,A as F,x as H,k as v,e as i,t as q,w as D,av as G,s as J}from"./index-C4AMdMz2.js";import{u as L}from"./useDrag-BGaSN1AF.js";import{u as P}from"./useDrop-BbPs1LL9.js";import{u as Q}from"./index-B0S7r7AY.js";const T={key:0},W=["data-handler-id"],X={flex:"","flex-a-c":""},Z={"mr-5px":""},$={"text-13px":""},ee={key:1},ie=Y({__name:"minimap",props:{id:null,text:null,index:null,res:null,moveCard:{type:Function}},emits:["update","delete"],setup(r,{emit:k}){const e=r,g=k,c=y(!1),b=Q();function w(){c.value=!1}function B(){g("delete",{data:e.res,index:e.index})}function I(){c.value=!1}function V(){c.value=!0,g("update",{data:e.res,index:e.index})}const x=y(""),[N,O]=P({accept:"mini-map",collect(t){return{handlerId:t.getHandlerId()}},hover(t,d){var m;if(!x.value)return;const o=t.index,n=e.index;if(o===n)return;const s=(m=x.value)==null?void 0:m.getBoundingClientRect(),l=(s.bottom-s.top)/2,u=d.getClientOffset().y-s.top;o<n&&u<l||o>n&&u>l||(e.moveCard(o,n),t.index=n)}}),[R,A]=L({type:"mini-map",item:()=>(b.setAppActiveIndex(e.index),{id:e.id,index:e.index}),collect:t=>({isDragging:t.isDragging()})}),{handlerId:M}=C(N),{isDragging:E}=C(R),K=j(()=>_(E)?0:1),S=t=>{x.value=A(O(t))};return(t,d)=>{const o=a("icon-drag-arrow"),n=a("icon-edit"),s=a("icon-delete"),l=a("a-popconfirm"),h=a("icon-check"),u=a("a-input"),m=z("auto-animate");return e.res.type!=="systemNavbar"?(p(),f("div",T,[_(c)?(p(),f("div",ee,[i(u,{modelValue:r.res.name,"onUpdate:modelValue":d[0]||(d[0]=U=>r.res.name=U),"show-word-limit":"","max-length":6,onKeyup:G(I,["enter"])},{append:D(()=>[i(h,{onClick:w})]),_:1},8,["modelValue"])])):(p(),f("div",{key:0,ref:S,"my-5px":"","h-31px":"",flex:"","cursor-move":"","flex-j-sb":"","flex-a-c":"",rounded:"","bg-gray-100":"","p-6px":"","hover:bg-gray-300":"",class:"card",style:F({opacity:_(K)}),"data-handler-id":_(M)},[H((p(),f("div",null,[v("div",X,[v("div",Z,[i(o,{class:"no-border","color-gray":""})]),v("div",$,q(r.res.name),1)])])),[[m]]),v("div",null,[i(n,{"mr-2px":"",onClick:V}),i(l,{content:"是否删除该组件?",onOk:B},{default:D(()=>[i(s)]),_:1})])],12,W))])):J("",!0)}}});export{ie as _};
