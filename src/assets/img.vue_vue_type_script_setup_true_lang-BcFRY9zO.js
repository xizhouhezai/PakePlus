import{u as V}from"./index--a7kHzzJ.js";import{J as j,M as x,d as R,r as b,b as r,v as I,o as f,c as C,k as d,e as t,w as a,f as T,t as h,x as A,u as l,j as D,s as U,q as P,U as F}from"./index-C4AMdMz2.js";import{c as B}from"./index-RdD_tp-0.js";import{_ as G}from"./open-oss.vue_vue_type_script_setup_true_lang-DOLIsmuy.js";const O=j.getAccessToken()||"",S=["jpg","jpeg","png","gif","bmp"];function Y(o){return o.response.success?(x.success("图片上传成功"),o.response.result):o.response.result||""}function q(){x.error("上传失败")}function z(o){return new Promise((e,c)=>{S.includes(o.name.split(".")[o.name.split(".").length-1])?o.size/1024>5120?(c(new Error("上传失败")),x.error("所选文件大小过大, 不得超过5M")):e(o):(c(new Error("上传失败")),x.error(`所选文件${o.name.slice(-3)}格式不正确, 请选择 .jpg .jpeg .png .gif .bmp格式文件`))})}const J=R({__name:"draw-upload",props:{limit:null},emits:["onChange"],setup(o,{expose:e,emit:c}){const u=o,_=c,g=b(""),s=b(!1);function w(){s.value=!0}function E(n){g.value=Y(n)}function i(){_("onChange",g.value)}return e({open:w}),(n,p)=>{const y=r("a-alert"),v=r("a-upload"),k=r("a-modal"),N=I("auto-animate");return f(),C("div",null,[d("div",null,[t(k,{visible:l(s),"onUpdate:visible":p[0]||(p[0]=m=>P(s)?s.value=m:null),title:"上传图片",onOk:i,onCancel:p[1]||(p[1]=m=>s.value=!1)},{default:a(()=>[t(y,{"mb-10px":""},{default:a(()=>[T(" 当前限制最多上传图片"+h(u.limit||1)+"张 ",1)]),_:1}),A((f(),C("div",null,[l(s)?(f(),D(v,{key:0,limit:u.limit||1,"list-type":"picture",draggable:"","image-preview":"",action:l(V),headers:{accessToken:l(O)},"on-success":E,"on-error":l(q),onBeforeUpload:l(z)},null,8,["limit","action","headers","on-error","onBeforeUpload"])):U("",!0)])),[[N]])]),_:1},8,["visible"])])])}}}),H={"border-b-1":"","py-30px":""},K={key:0},L={flex:"","items-end":"","gap-8px":""},ee=R({__name:"img",props:{res:null,item:null},setup(o){const e=o,c=F(()=>!!e.res),u=b(null),_=b(null);function g(){var i;(i=_.value)==null||i.open()}function s(i){i&&(e.item?e.item.img=i:e.res.data.list[0].img=i)}function w(){e.item?e.item.img=B.INVENT.EMPTY_IMAGE:e.res.data.list[0].img=B.INVENT.EMPTY_IMAGE}function E(){u.value.open()}return(i,n)=>{const p=r("a-image"),y=r("a-tooltip"),v=r("icon-image"),k=r("a-button"),N=r("a-space");return f(),C("div",H,[t(N,null,{default:a(()=>{var m,M;return[n[5]||(n[5]=d("div",{"w-90px":""}," 图片 ",-1)),d("div",null,[l(c)&&e.res.data.list[0].img||!l(c)&&((m=e.item)!=null&&m.img)?(f(),C("div",K,[t(p,{src:e.res?e.res.data.list[0].img:(M=e.item)==null?void 0:M.img,width:"100"},null,8,["src"]),t(y,{content:"清空图片"},{default:a(()=>[d("div",{"h-35px":"","cursor-pointer":"","text-center":"","color-gray":"","line-height-35px":"",onClick:n[0]||(n[0]=$=>w())}," 清空 ")]),_:1})])):U("",!0),d("div",L,[t(k,{"flex-1":"",onClick:n[1]||(n[1]=$=>E())},{icon:a(()=>[t(v)]),default:a(()=>[n[3]||(n[3]=T("本地上传 "))]),_:1}),t(k,{"flex-1":"",onClick:n[2]||(n[2]=$=>g())},{icon:a(()=>[t(v)]),default:a(()=>[n[4]||(n[4]=T("图库选择 "))]),_:1})])])]}),_:1}),t(J,{ref_key:"uploadRef",ref:u,limit:1,onOnChange:s},null,512),t(G,{ref_key:"ossRef",ref:_,onCallback:s},null,512)])}}});export{ee as _};
