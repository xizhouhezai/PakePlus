import{g as R,s as P}from"./operation-CQQGRn8-.js";import{_ as q}from"./index.vue_vue_type_script_setup_true_lang-DsrWKjKu.js";import{d as W,Y,r as c,h as D,b as s,o as p,c as L,e as o,w as t,u as n,j as x,f as r,F as H,i as J,k as u,s as y,q as K,M as V,bF as Q,bG as X}from"./index-C4AMdMz2.js";const Z={style:{"background-color":"#fff"}},ee={"my-20px":"",flex:"","flex-col":"","flex-j-c":"","flex-a-c":""},oe={"min-h-150px":"",flex:"","flex-a-c":""},ae={"my-20px":"",flex:"","flex-col":"","flex-j-c":"","flex-a-c":""},te={"min-h-150px":"",flex:"","flex-a-c":""},le={"my-20px":""},ue=W({__name:"base",setup(ne){const $=Y("reload"),m=c(!1),b=c(),w=c(),S=c(),v=c(!1),C=[{label:"运营后台",value:"domain"},{label:"店铺后台",value:"storeSide"},{label:"买家端",value:"buyerSide"}],a=c({form:{companyName:"",siteName:"",icp:"",staticPageAddress:"",staticPageWapAddress:"",domainLogo:"",storeSideLogo:"",buyerSideLogo:"",domainIcon:"",storeSideIcon:"",buyerSideIcon:""}});async function k(){try{const i=await R("BASE_SETTING");a.value.form=i.data.result,v.value=!0}catch(i){console.warn(i),v.value=!0}}async function T(){var e;if(!await((e=S.value)==null?void 0:e.validate()))if((await P("BASE_SETTING",a.value.form)).data.success){V.success("设置成功!");const d=Q(),f=X();localStorage.setItem("manager_site_name",a.value.form.siteName),localStorage.setItem("manager_logo",a.value.form.domainLogo),localStorage.setItem("manager_icon",a.value.form.domainLogo),d.value=a.value.form.domainIcon,f.value=`${a.value.form.siteName} - 运营后台`,k(),$()}else V.error("保存失败！")}function I(i){m.value=!0,w.value=i}function B(){m.value=!1,a.value.form[w.value]=b.value}function h(i){b.value=i.url}return D(()=>{k()}),(i,e)=>{const _=s("a-input"),d=s("a-form-item"),f=s("a-divider"),E=s("a-alert"),N=s("a-image"),g=s("a-button"),U=s("a-card"),j=s("a-space"),A=s("a-col"),F=s("a-row"),M=s("a-form"),O=s("a-modal");return p(),L("div",Z,[o(M,{ref_key:"formRef",ref:S,style:{padding:"30px"},model:n(a).form,layout:"horizontal","auto-label-width":""},{default:t(()=>[n(v)?(p(),x(F,{key:0},{default:t(()=>[o(A,null,{default:t(()=>[o(d,{field:"siteName",label:"站点名称","validate-trigger":["change"]},{default:t(()=>[o(_,{modelValue:n(a).form.siteName,"onUpdate:modelValue":e[0]||(e[0]=l=>n(a).form.siteName=l),"allow-clear":"","w-300px":""},null,8,["modelValue"])]),_:1}),o(d,{field:"icp",label:"icp","validate-trigger":["change"]},{default:t(()=>[o(_,{modelValue:n(a).form.icp,"onUpdate:modelValue":e[1]||(e[1]=l=>n(a).form.icp=l),"allow-clear":"","w-300px":""},null,8,["modelValue"])]),_:1}),o(d,{field:"companyName",label:"公司名称","validate-trigger":["change"]},{default:t(()=>[o(_,{modelValue:n(a).form.companyName,"onUpdate:modelValue":e[2]||(e[2]=l=>n(a).form.companyName=l),"allow-clear":"","w-300px":""},null,8,["modelValue"])]),_:1}),o(f,{orientation:"left"},{default:t(()=>e[5]||(e[5]=[r(" Logo设置 ")])),_:1}),o(E,{"my-20px":""},{default:t(()=>e[6]||(e[6]=[r(" 修改店铺端Logo以及Icon信息会有1个小时的缓存时间，默认情况下需要您清空浏览器缓存才能及时看到修改后的效果。 ")])),_:1}),o(j,null,{default:t(()=>[(p(),L(H,null,J(C,(l,z)=>o(U,{key:z,"min-h-300px":"","w-320px":"",title:l.label},{default:t(()=>[o(f,{orientation:"left"},{default:t(()=>e[7]||(e[7]=[r(" Logo设置 ")])),_:1}),u("div",ee,[u("div",oe,[n(a).form[`${l.value}Logo`]?(p(),x(N,{key:0,"max-h-150px":"","max-w-100px":"",src:n(a).form[`${l.value}Logo`]},null,8,["src"])):y("",!0)]),u("div",null,[o(g,{size:"mini",onClick:G=>I(`${l.value}Logo`)},{default:t(()=>e[8]||(e[8]=[r(" 选择图片 ")])),_:2},1032,["onClick"])])]),o(f,{orientation:"left"},{default:t(()=>e[9]||(e[9]=[r(" Icon设置 ")])),_:1}),u("div",ae,[u("div",te,[n(a).form[`${l.value}Icon`]?(p(),x(N,{key:0,"max-h-150px":"","max-w-100px":"",src:n(a).form[`${l.value}Icon`]},null,8,["src"])):y("",!0)]),u("div",null,[o(g,{size:"mini",onClick:G=>I(`${l.value}Icon`)},{default:t(()=>e[10]||(e[10]=[r(" 选择图片 ")])),_:2},1032,["onClick"])])])]),_:2},1032,["title"])),64))]),_:1})]),_:1})]),_:1})):y("",!0),o(d,null,{default:t(()=>[u("div",le,[o(g,{type:"primary",onClick:T},{default:t(()=>e[11]||(e[11]=[r(" 保存 ")])),_:1})])]),_:1})]),_:1},8,["model"]),o(O,{visible:n(m),"onUpdate:visible":e[3]||(e[3]=l=>K(m)?m.value=l:null),width:1100,title:"oss资源管理",onOk:B,onCancel:e[4]||(e[4]=l=>m.value=!1)},{default:t(()=>[o(q,{"is-single":!0,onSelected:h})]),_:1},8,["visible"])])}}});export{ue as _};
