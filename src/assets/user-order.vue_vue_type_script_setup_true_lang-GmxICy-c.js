import{d as g}from"./vuedraggable.umd-Ck4RHsgF.js";import{d as v,r as y,b as d,o as s,c as i,e as c,w as a,k as e,j as b,t as u,f as k,s as _,u as w}from"./index-C4AMdMz2.js";const B={"my-4px":""},C={"w-120px":"",flex:"","cursor-pointer":"","flex-j-sb":"","flex-a-c":"",rounded:"","bg-bluegray-100":"","px-18px":"","py-12px":"","text-12px":""},N={key:0},V={"color-bluegray-400":"","font-bold":""},E=v({__name:"user-order",props:{res:null},setup(f){const n=f,r=y(!1);return(h,t)=>{const m=d("a-tooltip"),x=d("a-space");return s(),i("div",null,[c(x,{"py-22px":""},{default:a(()=>{var l;return[t[2]||(t[2]=e("div",{"w-90px":""}," 订单列表 ",-1)),e("div",null,[(l=n.res.data.list)!=null&&l.length?(s(),b(w(g),{key:0,list:n.res.data.list,class:"list-group","ghost-class":"ghost","item-key":"id",onStart:t[0]||(t[0]=o=>r.value=!0),onEnd:t[1]||(t[1]=o=>r.value=!1)},{item:a(({element:o,index:p})=>[e("div",B,[e("div",C,[o?(s(),i("div",N,[c(m,{content:`当前菜单排序展示为第${p+1}位`},{default:a(()=>[e("span",V,u(p+1),1)]),_:2},1032,["content"]),k(" "+u(o.title),1)])):_("",!0)])])]),_:1},8,["list"])):_("",!0)])]}),_:1})])}}});export{E as _};
