import{I as Re,v as Ie}from"./member-B0DkAxtf.js";import{Q as K,R as W}from"./operation-CQQGRn8-.js";import{d as Ee,n as Ue,r as k,a as I,h as $e,b as d,o as u,j as S,w as l,e as o,f as r,u as m,aY as Ae,c,s as y,k as p,t as g,F as v,i as N,Z as De,M as _,aZ as Be,a_ as Le,a$ as ze,b0 as Oe,b1 as Ge,b2 as Qe,b3 as Ze,_ as je}from"./index-C4AMdMz2.js";import{u as qe}from"./useCurrentInstance-BLlvmEjv.js";import{R as h}from"./validator-B8pIxTAL.js";import{V as E}from"./dist-PezRi_EG.js";const Ye={key:0},He={key:1},Je={key:2},Ke={key:0},We={key:1},Xe={key:2},et={class:"send-setting"},tt={class:"left-show"},at={class:"send-form"},st={style:{margin:"0 0 4px 0","line-height":"32px"}},lt={style:{color:"#f56c1d"}},ot={style:{color:"#f56c1d"}},mt={key:0,class:"choose-member"},nt={class:"source-member",style:{marginBottom:"5px"}},it={class:"scroll-card"},rt={key:0},dt={key:0,class:"mobile"},ut={class:"traget-member",style:{overflow:"auto"}},pt={class:"list-item-span"},ct=Ee({__name:"index",setup(ft){var O;const U=Ue(),$=(O=qe().globalProperties)==null?void 0:O.$modal,x=k(!1),X=k(!0),M=k(),A=k(),ee=[{title:"模板名称",dataIndex:"smsName"},{title:"签名",dataIndex:"signName"},{title:"短信内容",dataIndex:"context"},{title:"预计发送条数",dataIndex:"num"}],te={title:"操作",width:250,methods:[{title:"详细",callback:"detailTemplate",slot:!0,slotTemplate:"detailTemplate"}]},e=I({sendSmsModal:!1,smsSigns:[],smsTemplates:[],signSearchForm:{pageNumber:1,pageSize:10},templateSearchForm:{pageNumber:1,pageSize:10},smsForm:{smsName:"",signName:"",messageCode:"",context:"",smsRange:"1",num:0},memberNum:0,memberSearchParam:{pageNumber:1,pageSize:8,disabled:"OPEN"},memberSearchFrom:{disabled:"OPEN"},memberPage:0,members:[],alreadyCheck:[],alreadyCheckShow:[],smsTemplateContent:"",smsApiParams:{sort:"createTime",order:"desc",pageNumber:1,pageSize:10},smsData:[],smsTotal:0,smsContent:"效果预览"}),C=k(),D=k(),ae=[{title:"模板code",dataIndex:"templateCode"},{title:"模板名称",dataIndex:"templateName"},{title:"模板内容",dataIndex:"templateContent"},{title:"状态",dataIndex:"templateStatus",slot:!0,slotTemplate:"templateStatus"}],se={title:"操作",width:250,methods:[{title:"编辑",callback:"editTemplate",slot:!0,slotTemplate:"editTemplate"},{title:"删除",callback:"deleteTemplate",slot:!0,slotTemplate:"deleteTemplate"}]},i=I({templateApiParams:{sort:"",order:""},templateModalVisible:!1,templateModalTitle:"添加短信模板",templateModalType:"add",templateForm:{}}),T=k(),le=[{title:"签名名称",dataIndex:"signName"},{title:"申请说明",dataIndex:"remark"},{title:"状态",dataIndex:"signStatus",slot:!0,slotTemplate:"signStatus"}],oe={title:"操作",methods:[{title:"编辑",callback:"editSign",slot:!0,slotTemplate:"editSign"},{title:"删除",callback:"deleteSign",slot:!0,slotTemplate:"deleteSign"}]},me=I({signApiParams:{sort:"",order:""}});function B(){Re(e.memberSearchFrom).then(s=>{s.data.success&&(e.memberNum=s.data.result,e.smsForm.num=e.memberNum)})}function V(){Ie(e.memberSearchParam).then(s=>{s.data.success&&(s.data.result.records.forEach(t=>{t.selected=!1,e.members.push(t)}),e.memberPage=s.data.result.pages,s.data.result.current*s.data.result.pages>=s.data.result.total&&(x.value=!0))})}function ne(){e.sendSmsModal=!0,e.signSearchForm.signStatus=1,W(e.signSearchForm).then(s=>{s.data.success&&(e.smsSigns=s.data.result.records)}),e.templateSearchForm.templateStatus=1,K(e.templateSearchForm).then(s=>{s.data.success&&(e.smsTemplates=s.data.result.records)}),B()}function L(s){s&&s!==""?e.smsContent=s+e.smsTemplateContent:e.smsContent=`效果预览${e.smsTemplateContent}`}function z(){e.smsTemplates.forEach(s=>{e.smsForm.messageCode===s.templateCode&&(e.smsTemplateContent=s.templateContent,e.smsForm.smsName=s.templateName),e.smsForm.signName&&e.smsForm.signName!==""?e.smsContent=e.smsForm.signName+e.smsTemplateContent:e.smsContent=e.smsTemplateContent,e.smsForm.context=e.smsTemplateContent})}function ie(s){e.memberNum=0,e.smsForm.num=0,e.alreadyCheck=[],e.alreadyCheckShow=[],s===1?B():s===2&&(V(),e.members&&e.members.length&&e.members.forEach(t=>{t.selected=!1}))}function re(){e.memberSearchParam.pageNumber=1,e.members=[],V()}function de(){window.setTimeout(()=>{e.memberPage!==e.memberSearchParam.pageNumber?(e.memberSearchParam.pageNumber+=1,V()):x.value=!0},2e3)}function ue(s){s.mobile?(s.selected=!0,e.alreadyCheck.length===0?(e.alreadyCheck.push(s.mobile),e.alreadyCheckShow.push(s),e.smsForm.num+=1,e.memberNum+=1):e.alreadyCheck.indexOf(s.mobile)<0&&(e.smsForm.num+=1,e.memberNum+=1,e.alreadyCheck.push(s.mobile),e.alreadyCheckShow.push(s))):_.error("当前用户暂无手机号绑定")}function pe(s,t){e.alreadyCheck.splice(t,1),e.alreadyCheckShow.splice(t,1),e.members.forEach(n=>{n.selected&&n.mobile===s.mobile&&(n.selected=!1)}),e.smsForm.num-=1,e.memberNum-=1}function ce(s){e.smsForm=s,e.alreadyCheck=s.mobile,L(s.signName),z(),e.sendSmsModal=!0}async function fe(){var n;const s=await((n=A.value)==null?void 0:n.validate()),t=e.alreadyCheck;e.smsForm.mobile=t,s||Be(e.smsForm).then(F=>{F.data.success&&(_.success("发送成功！"),M.value.init(),e.sendSmsModal=!1)})}function be(){i.templateModalVisible=!0,i.templateModalTitle="添加短信模板",i.templateModalType="add",i.templateForm={}}function ge(s){i.templateModalVisible=!0,i.templateModalTitle="修改短信模板",i.templateModalType="edit",i.templateForm=s}async function _e(){var t;await((t=D.value)==null?void 0:t.validate())||(i.templateModalType==="add"?Le(i.templateForm).then(n=>{n.data.success&&(_.success("添加成功！"),i.templateModalVisible=!1,C.value.init())}):i.templateModalType==="edit"&&ze(i.templateForm).then(n=>{n.data.success&&(_.success("修改成功！"),i.templateModalVisible=!1,C.value.init())}))}function Ce(s){$.confirm({title:"确认删除",content:"您确认要删除次短信签名？",alignCenter:!1,onOk:async()=>{const t={templateCode:s.templateCode};Oe(t).then(n=>{n.data.success&&(_.success("删除成功！"),C.value.init())})}})}function ke(){Ge().then(s=>{s.data.success&&(_.success("同步成功！"),C.value.init())})}function Se(){U.push({name:"add-sms-sign"})}function ye(s){U.push({name:"add-sms-sign",query:{id:s.id}})}function he(s){$.confirm({title:"确认删除",content:"您确认要删除此短信签名？",alignCenter:!1,onOk:async()=>{Qe(s.id).then(t=>{t.data.success&&(_.success("删除成功！"),T.value.init())})}})}function Te(){Ze().then(s=>{s.data.success&&(_.success("同步成功！"),T.value.init())})}function Fe(s){s==="LIST"||(s==="TEMPLATE"?C.value.init():s==="SIGN"&&T.value.init())}return $e(()=>{M.value.init(),C.value.init(),T.value.init()}),(s,t)=>{const n=d("a-button"),F=d("a-space"),P=d("a-col"),w=d("a-tab-pane"),ve=d("a-popover"),Ne=d("a-tabs"),G=d("a-input"),f=d("a-form-item"),R=d("a-textarea"),Q=d("a-form"),Z=d("a-modal"),j=d("a-option"),q=d("a-select"),Y=d("a-radio"),xe=d("a-radio-group"),Me=d("a-spin"),H=d("a-list-item"),J=d("a-list"),Ve=d("icon-close"),Pe=d("a-card");return u(),S(Pe,{class:"general-card",title:"短信",bordered:!1},{default:l(()=>[o(Ne,{"default-active-key":"LIST",onChange:Fe},{default:l(()=>[o(w,{key:"LIST",title:"发送任务列表"},{default:l(()=>[o(P,{span:16,style:{"margin-bottom":"10px"}},{default:l(()=>[o(F,null,{default:l(()=>[o(n,{type:"primary",onClick:ne},{default:l(()=>t[11]||(t[11]=[r(" 发送短信 ")])),_:1})]),_:1})]),_:1}),o(m(E),{ref_key:"smsTablePageRef",ref:M,columns:ee,methods:te,api:m(Ae),"api-params":m(e).smsApiParams,bordered:!0},{detailTemplate:l(({data:a})=>[o(n,{type:"text",status:"success",onClick:b=>ce(a)},{default:l(()=>t[12]||(t[12]=[r(" 详细 ")])),_:2},1032,["onClick"])]),_:1},8,["api","api-params"])]),_:1}),o(w,{key:"TEMPLATE",title:"短信模板"},{default:l(()=>[o(P,{span:16,style:{"margin-bottom":"10px"}},{default:l(()=>[o(F,null,{default:l(()=>[o(n,{type:"primary",onClick:be},{default:l(()=>t[13]||(t[13]=[r(" 添加短信模板 ")])),_:1}),o(n,{onClick:ke},{default:l(()=>t[14]||(t[14]=[r(" 同步 ")])),_:1})]),_:1})]),_:1}),o(m(E),{ref_key:"templateTablePageRef",ref:C,columns:ae,methods:se,api:m(K),"api-params":m(i).templateApiParams,bordered:!0},{templateStatus:l(({data:a})=>[a.templateStatus===0?(u(),c("span",Ye,"审核中")):a.templateStatus===1?(u(),c("span",He,"审核通过")):a.templateStatus===2?(u(),c("span",Je,"审核失败")):y("",!0)]),editTemplate:l(({data:a})=>[o(n,{disabled:a.templateStatus!==2,type:"text",status:"warning",onClick:b=>ge(a)},{default:l(()=>t[15]||(t[15]=[r(" 编辑 ")])),_:2},1032,["disabled","onClick"])]),deleteTemplate:l(({data:a})=>[o(n,{disabled:a.templateStatus===0,type:"text",status:"danger",onClick:b=>Ce(a)},{default:l(()=>t[16]||(t[16]=[r(" 删除 ")])),_:2},1032,["disabled","onClick"])]),_:1},8,["api","api-params"])]),_:1}),o(w,{key:"SIGN",title:"短信签名"},{default:l(()=>[o(P,{span:16,style:{"margin-bottom":"10px"}},{default:l(()=>[o(F,null,{default:l(()=>[o(n,{type:"primary",onClick:Se},{default:l(()=>t[17]||(t[17]=[r(" 添加短信签名 ")])),_:1}),o(n,{onClick:Te},{default:l(()=>t[18]||(t[18]=[r(" 同步 ")])),_:1})]),_:1})]),_:1}),o(m(E),{ref_key:"signTablePageRef",ref:T,columns:le,methods:oe,api:m(W),"api-params":m(me).signApiParams,bordered:!0},{signStatus:l(({data:a})=>[a.signStatus===0?(u(),c("span",Ke,"审核中")):y("",!0),a.signStatus===1?(u(),c("span",We,"审核通过")):y("",!0),a.signStatus===2?(u(),c("span",Xe,[t[20]||(t[20]=r("审核拒绝 ")),o(ve,null,{content:l(()=>[p("p",null,g(a.reason),1)]),default:l(()=>[o(n,{type:"text"},{default:l(()=>t[19]||(t[19]=[r("【原因】")])),_:1})]),_:2},1024)])):y("",!0)]),editSign:l(({data:a})=>[o(n,{disabled:a.signStatus!==2,type:"text",status:"warning",onClick:b=>ye(a)},{default:l(()=>t[21]||(t[21]=[r(" 编辑 ")])),_:2},1032,["disabled","onClick"])]),deleteSign:l(({data:a})=>[o(n,{disabled:a.signStatus!==2,type:"text",status:"danger",onClick:b=>he(a)},{default:l(()=>t[22]||(t[22]=[r(" 删除 ")])),_:2},1032,["disabled","onClick"])]),_:1},8,["api","api-params"])]),_:1})]),_:1}),o(Z,{visible:m(i).templateModalVisible,"onUpdate:visible":t[4]||(t[4]=a=>m(i).templateModalVisible=a),"align-center":!1,footer:!1},{title:l(()=>[r(g(m(i).templateModalTitle),1)]),default:l(()=>[o(Q,{ref_key:"templateFormRef",ref:D,model:m(i).templateForm,"auto-label-width":""},{default:l(()=>[o(f,{field:"templateName",label:"模板名称",rules:[m(h)]},{default:l(()=>[o(G,{modelValue:m(i).templateForm.templateName,"onUpdate:modelValue":t[0]||(t[0]=a=>m(i).templateForm.templateName=a),placeholder:"请输入模板名称，不超过30字符","max-length":30},null,8,["modelValue"])]),_:1},8,["rules"]),o(f,{field:"templateContent",label:"模板内容",rules:[m(h)]},{default:l(()=>[o(R,{modelValue:m(i).templateForm.templateContent,"onUpdate:modelValue":t[1]||(t[1]=a=>m(i).templateForm.templateContent=a),"allow-clear":"","max-length":500,placeholder:"请输入短信内容，不超过500字符，不支持【】、★、 ※、 →、 ●等特殊符号；"},null,8,["modelValue"])]),_:1},8,["rules"]),o(f,{field:"remark",label:"申请说明",rules:[m(h)]},{default:l(()=>[o(R,{modelValue:m(i).templateForm.remark,"onUpdate:modelValue":t[2]||(t[2]=a=>m(i).templateForm.remark=a),"allow-clear":"","max-length":100,placeholder:"请描述您的页数使用场景，不超过100字符，如：用于春节集五福"},null,8,["modelValue"])]),_:1},8,["rules"]),o(f,{label:""},{default:l(()=>[o(n,{type:"primary",onClick:t[3]||(t[3]=a=>_e())},{default:l(()=>t[23]||(t[23]=[r(" 提交 ")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"]),o(Z,{visible:m(e).sendSmsModal,"onUpdate:visible":t[10]||(t[10]=a=>m(e).sendSmsModal=a),"align-center":!1,footer:!1,width:900},{title:l(()=>t[24]||(t[24]=[r(" 短信发送 ")])),default:l(()=>[p("div",et,[p("div",tt,g(m(e).smsContent),1),p("div",at,[o(Q,{ref_key:"smsFormRef",ref:A,model:m(e).smsForm},{default:l(()=>[o(f,{field:"signName",label:"短信签名",rules:[m(h)]},{default:l(()=>[o(q,{modelValue:m(e).smsForm.signName,"onUpdate:modelValue":t[5]||(t[5]=a=>m(e).smsForm.signName=a),style:{width:"260px"},onChange:L},{default:l(()=>[(u(!0),c(v,null,N(m(e).smsSigns,a=>(u(),S(j,{key:a.signName,value:a.signName,label:a.signName},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["rules"]),o(f,{field:"messageCode",label:"短信模板",rules:[m(h)]},{default:l(()=>[o(q,{modelValue:m(e).smsForm.messageCode,"onUpdate:modelValue":t[6]||(t[6]=a=>m(e).smsForm.messageCode=a),style:{width:"260px"},onChange:z},{default:l(()=>[(u(!0),c(v,null,N(m(e).smsTemplates,a=>(u(),S(j,{key:a.templateCode,value:a.templateCode,label:a.templateName},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["rules"]),o(f,{field:"context",label:"短信内容",rules:[m(h)]},{default:l(()=>[o(R,{modelValue:m(e).smsForm.context,"onUpdate:modelValue":t[7]||(t[7]=a=>m(e).smsForm.context=a),"max-length":"50","auto-size":{maxRows:3,minRows:3},"allow-clear":"",disabled:"","show-word-limit":""},null,8,["modelValue"])]),_:1},8,["rules"]),o(f,{field:"smsRange",label:"接收人"},{default:l(()=>[p("div",null,[p("p",st,[t[25]||(t[25]=r(" 已选")),p("span",lt,g(m(e).memberNum),1),t[26]||(t[26]=r("人，预计耗费条数")),p("span",ot,g(m(e).smsForm.num),1),t[27]||(t[27]=r("条 "))]),o(xe,{modelValue:m(e).smsForm.smsRange,"onUpdate:modelValue":t[8]||(t[8]=a=>m(e).smsForm.smsRange=a),type:"button",onChange:ie},{default:l(()=>[o(Y,{value:"1"},{default:l(()=>t[28]||(t[28]=[r(" 全部会员 ")])),_:1}),o(Y,{value:"2"},{default:l(()=>t[29]||(t[29]=[r(" 自定义选择 ")])),_:1})]),_:1},8,["modelValue"])])]),_:1}),o(f,null,{default:l(()=>[m(e).smsForm.smsRange==="2"?(u(),c("div",mt,[p("div",nt,[o(G,{modelValue:m(e).memberSearchParam.mobile,"onUpdate:modelValue":t[9]||(t[9]=a=>m(e).memberSearchParam.mobile=a),placeholder:"请输入手机号码",onChange:re},null,8,["modelValue"])]),p("div",it,[o(J,{"max-height":300,scrollbar:m(X),onReachBottom:de},{"scroll-loading":l(()=>[m(x)?(u(),c("div",rt," 暂无更多会员 ")):(u(),S(Me,{key:1}))]),default:l(()=>[(u(!0),c(v,null,N(m(e).members,(a,b)=>(u(),S(H,{key:b,class:De(["list-item-members",{active:a.selected}]),onClick:we=>ue(a)},{default:l(()=>[a.mobile?(u(),c("span",dt,g(a.mobile),1)):y("",!0),p("span",null,g(a.nickName),1)]),_:2},1032,["class","onClick"]))),128))]),_:1},8,["scrollbar"]),p("div",ut,[o(J,{"max-height":300},{default:l(()=>[(u(!0),c(v,null,N(m(e).alreadyCheckShow,(a,b)=>(u(),S(H,{key:b,class:"list-item-members"},{default:l(()=>[p("span",pt,[p("span",null,g(a.mobile||a.nickName),1),o(Ve,{onClick:we=>pe(a,b)},null,8,["onClick"])])]),_:2},1024))),128))]),_:1})])])])):y("",!0)]),_:1}),o(f,{label:"操作"},{default:l(()=>[o(n,{type:"primary",onClick:fe},{default:l(()=>t[30]||(t[30]=[r(" 发送 ")])),_:1})]),_:1})]),_:1},8,["model"])])])]),_:1},8,["visible"])]),_:1})}}}),yt=je(ct,[["__scopeId","data-v-6c0412c1"]]);export{yt as default};
