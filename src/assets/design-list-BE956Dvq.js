import{d as se,r,p as ie,U as pe,n as re,h as ue,b as l,o as i,j as u,w as a,u as s,e as o,f as p,t as B,s as m,q as x,k as S,an as de,c as H,ao as ce,M as me,ap as fe,_ as _e}from"./index-C4AMdMz2.js";import{V as ge}from"./dist-PezRi_EG.js";const be="/assets/exam-pc-8Egfp7cy.png",ye="/assets/exam-CbaE4MPk.png",Te={"w-100px":""},ve={flex:"","flex-j-c":"","flex-a-c":""},Ce={key:0,"w-full":"",src:be,alt:""},ke={key:1,"max-h-600px":"",src:ye,alt:""},Ee=se({__name:"design-list",props:{templateModel:{type:String,default:"normal"},pageClientType:{type:String,default:"H5"},pageType:{type:String,default:""}},emits:["callback","selectTableChange"],setup(D,{expose:L,emit:$}){const d=D,q=$,N=r(""),y=r(!1),C=ie(),k=r({}),f=r(!1),_=d.templateModel==="normal",E=r(!1),w=r(""),P=pe(()=>C.name==="toc-web"?"INDEX_WAP":C.name==="toc-pc"?"INDEX_PC":C.name==="tob-pc"?"INDEX_2B_PC":""),T=re(),g=r(_?P.value:"SPECIAL"),I=r(!0),X={[P.value]:"首页",USER_CENTER_WAP:"个人中心",GOODS_DETAIL_TEMPLATE:"商品详情页模版",LOGIN_PC:"登录页",BOTTOM_AUTH:"首页底部授权",BOTTOM_SUPPLIER_AUTH:"供应商底部授权"},c={pageClientType:d.pageClientType,useScene:d.pageType==="INDEX_PC"?"MEMBER":"STORE",pageType:`${d.pageType}`},G=[{title:"页面名称",width:300,dataIndex:"name"},{title:"页面状态",width:100,dataIndex:"enable",slot:!0,slotTemplate:"enable"}];let v=[{title:"页面名称",width:300,dataIndex:"name"},{title:"页面状态",dataIndex:"enable",slot:!0,width:100,slotTemplate:"enable"}];const M={title:"操作",width:100,fixed:"right",methods:[{title:"修改",callback:"update",slot:!0},{title:"删除",callback:"delete",slot:!0}]};function W(t){let e;d.pageClientType==="H5"?e=T.resolve({path:"/app-invent",query:{id:t.record.id,moduleName:t.record.name,pageType:c.pageType}}):e=T.resolve({path:"/pc-invent",query:{id:t.record.id,moduleName:t.record.name,pageType:c.pageType}}),window.open(e.href,"_blank")}async function j(){(await ce(k.value.id)).data.success&&(me.success("删除成功"),w.value.init())}async function J(t){k.value=t.record,f.value=!0}function z(t){g.value=t,c.pageType=t,["SPECIAL"].includes(t)?v.splice(1,1):v=JSON.parse(JSON.stringify(G)),U()}async function F(t){E.value=!0;const e=await fe(t.id,{enable:t.enable});E.value=!1,e.data.success&&U()}function O(t){N.value=t,y.value=!0}function K(t){q("selectTableChange",{...t[0],___type:"special"})}function Q(){let t;d.pageClientType==="H5"?t=T.resolve({path:"/app-invent",query:{pageType:c.pageType}}):t=T.resolve({path:"/pc-invent",query:{pageType:c.pageType}}),window.open(t.href,"_blank")}function U(t){w.value.init()}return ue(()=>{_||v.splice(1,1)}),L({selectedMember:I,sortMethods:M}),(t,e)=>{const Y=l("icon-plus"),Z=l("a-button"),ee=l("a-space"),te=l("a-col"),ae=l("a-row"),b=l("a-tab-pane"),R=l("a-link"),V=l("a-alert"),ne=l("a-tabs"),oe=l("a-switch"),A=l("a-modal"),le=l("a-card");return i(),u(le,{class:"general-card",bordered:!1},{default:a(()=>[s(I)?(i(),u(ae,{key:0,style:{"margin-bottom":"16px"}},{default:a(()=>[o(te,{span:16},{default:a(()=>[o(ee,null,{default:a(()=>[o(Z,{type:"primary",onClick:Q},{icon:a(()=>[o(Y)]),default:a(()=>[p(" 添加页面-"+B(X[s(g)]),1)]),_:1})]),_:1})]),_:1})]),_:1})):m("",!0),o(ne,{modelValue:s(g),"onUpdate:modelValue":e[2]||(e[2]=n=>x(g)?g.value=n:null),onChange:e[3]||(e[3]=n=>z(n))},{default:a(()=>[_?(i(),u(b,{key:s(P),title:"首页"})):m("",!0),t.$route.name==="toc-web"?(i(),u(b,{key:"USER_CENTER_WAP",title:"个人中心"},{default:a(()=>[o(V,{"mb-10px":"",title:"提示"},{default:a(()=>[e[8]||(e[8]=p(" 若个人中心未进行店铺装修的设置，将会自动呈现默认样式： ")),o(R,{onClick:e[0]||(e[0]=n=>O())},{default:a(()=>e[7]||(e[7]=[p(" 查看示例 ")])),_:1})]),_:1})]),_:1})):m("",!0),t.$route.name==="toc-pc"?(i(),u(b,{key:"LOGIN_PC",title:"登录页"},{default:a(()=>[o(V,{"mb-10px":"",title:"提示"},{default:a(()=>[e[10]||(e[10]=p(" 若登录未进行店铺装修的设置，将会自动呈现默认样式： ")),o(R,{onClick:e[1]||(e[1]=n=>O("pc"))},{default:a(()=>e[9]||(e[9]=[p(" 查看示例 ")])),_:1})]),_:1})]),_:1})):m("",!0),t.$route.name==="toc-pc"?(i(),u(b,{key:"BOTTOM_AUTH",title:"首页底部授权"})):m("",!0),t.$route.name==="tob-pc"?(i(),u(b,{key:"BOTTOM_SUPPLIER_AUTH",title:"供应商底部授权"})):m("",!0)]),_:1},8,["modelValue"]),o(s(ge),{ref_key:"tablePageRef",ref:w,checkbox:!_,radio:!_,columns:s(v),methods:M,api:s(de),"api-params":c,onUpdate:W,onDelete:J,onSelectTableChange:K},{enable:a(({data:n})=>[S("div",Te,[o(oe,{modelValue:n.enable,"onUpdate:modelValue":h=>n.enable=h,loading:s(E),onChange:h=>F(n)},{checked:a(()=>e[11]||(e[11]=[p(" 开 ")])),unchecked:a(()=>e[12]||(e[12]=[p(" 关 ")])),_:2},1032,["modelValue","onUpdate:modelValue","loading","onChange"])])]),_:1},8,["checkbox","radio","columns","api"]),o(A,{visible:s(f),"onUpdate:visible":e[4]||(e[4]=n=>x(f)?f.value=n:null),"on-before-ok":j,"unmount-on-close":"",onCancel:e[5]||(e[5]=n=>f.value=!1)},{title:a(()=>e[13]||(e[13]=[p(" 提示 ")])),default:a(()=>[S("div",null," 确定要删除当前 "+B(s(k).name)+" ? ",1)]),_:1},8,["visible"]),o(A,{visible:s(y),"onUpdate:visible":e[6]||(e[6]=n=>x(y)?y.value=n:null),width:"auto"},{title:a(()=>e[14]||(e[14]=[p(" 示例图 ")])),footer:a(()=>e[15]||(e[15]=[])),default:a(()=>[S("div",ve,[s(N)==="pc"?(i(),H("img",Ce)):(i(),H("img",ke))])]),_:1},8,["visible"])]),_:1})}}}),xe=_e(Ee,[["__scopeId","data-v-c0a409b3"]]);export{xe as default};
