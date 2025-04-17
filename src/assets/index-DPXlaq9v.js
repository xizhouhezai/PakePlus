import{d as xe,r as u,a as Ve,h as he,b as i,o as c,j as v,w as n,e as s,u as l,f as d,bH as Te,k,s as D,t as L,c as Ue,F as Me,i as Oe,q as P,bI as B,M as f,bJ as j,bK as Re,bf as Ae,be as Se,bL as $e,bM as Ne,_ as Ee}from"./index-C4AMdMz2.js";import{_ as De}from"./index.vue_vue_type_script_setup_true_lang-DsrWKjKu.js";import{u as Le}from"./useCurrentInstance-BLlvmEjv.js";import{am as Pe}from"./tools-BfzgO_2s.js";import{R as V,V as J,M as Be}from"./validator-B8pIxTAL.js";import{U as je,V as Je}from"./dist-PezRi_EG.js";import{C as Fe}from"./index-DUU-x9KJ.js";import"./index-CzBKN9cw.js";import"./index--a7kHzzJ.js";import"./extra-5DUayDl9.js";const He=["src"],qe=["src"],ze=["src"],Ge={style:{"text-align":"right"}},Ke=xe({__name:"index",setup(Qe){var N;const T=u(!0),g=u(""),y=u(!1),p=u(!1),O=u(),R=u([]),A=u([]),U=u(""),C=u(0),S=u(),m=u([]),b=u(""),I=(N=Le().globalProperties)==null?void 0:N.$modal,F=[{label:"用户名",model:"username",disabled:!1,input:!0},{label:"联系方式",model:"mobile",disabled:!1,input:!0}],H=[{title:"用户名",dataIndex:"username"},{title:"头像",dataIndex:"face",slot:!0,slotTemplate:"face"},{title:"手机",dataIndex:"mobile",sortable:{sortDirections:["ascend","descend"]}},{title:"部门",dataIndex:"departmentTitle"},{title:"是否超级管理员",dataIndex:"isSuper",width:100,slot:!0,slotData:{badge:Pe}},{title:"状态",dataIndex:"status",slot:!0,slotTemplate:"status"},{title:"创建时间",dataIndex:"createTime"}],q={title:"操作",width:300,fixed:"right",methods:[{title:"编辑",callback:"editor",slot:!0,slotTemplate:"editor"},{title:"禁用",callback:"forbidden",slot:!0,slotTemplate:"forbidden"},{title:"删除",callback:"remove",slot:!0,slotTemplate:"remove"}]},o=Ve({enableAddModal:!1,formLoading:!1,fid:"",form:{mobile:"",username:"",password:"",email:"",roleIds:[],face:"",nickName:"",departmentTitle:"",departmentId:""}});function z(t){m.value=t}function G(){if(C.value===0){const t=JSON.parse(JSON.stringify(o.form));if(t.departmentId=t.departmentId||0,delete t.id,delete t.status,(t.password===""||t.password===void 0)&&f.error("密码不能为空"),t.password.length<6)return f.error("密码长度不得少于6位"),!1;t.password=Fe.MD5(t.password).toString(),t.roleIds||(t.roleIds=[]),$e(t).then(e=>{e.data.success&&(f.success("操作成功"),g.value.init(),o.enableAddModal=!1)})}else Ne(o.form).then(t=>{t.data.success&&(f.success("操作成功"),g.value.init(),o.enableAddModal=!1)})}async function K(){var e;await((e=S.value)==null?void 0:e.validate())||G()}function Q(){C.value=0,o.enableAddModal=!0,U.value="添加管理员",o.fid="",Object.keys(o.form).forEach(t=>{o.form[t]=""})}function W(t){I.confirm({title:"确认删除",content:"您确认要删除此用户",alignCenter:!1,onOk:async()=>{(await B(t.id)).data.success&&(f.success("删除成功"),m.value=[],$())}})}function X(t){C.value=1,t&&(U.value="编辑用户",o.form=t);const e=[];o.form.roleIds&&(typeof o.form.roleIds=="string"?o.form.roleIds.split(",").forEach(r=>{e.push(r)}):o.form.roleIds.forEach(r=>{e.push(r)})),o.form.roleIds=e,o.enableAddModal=!0}function Y(t){I.confirm({title:"确认禁用",content:"您确认要禁用此用户",alignCenter:!1,onOk:async()=>{const e={userIds:[t.id],enable:!1};(await j(e)).data.success&&(f.success("禁用成功"),g.value.init())}})}function Z(t){I.confirm({title:"确认启用",content:"您确认要启用此用户",alignCenter:!1,onOk:async()=>{const e={userIds:[t.id],enable:!0};(await j(e)).data.success&&(f.success("操作成功"),g.value.init())}})}const w=u({scene:"MANAGER"});function ee(){if(m.value.length<=0){f.error("请选中数据后重试");return}b.value="",m.value.forEach(e=>{b.value+=`${e.id},`});const t=b.value.substring(0,b.value.length-1);I.confirm({title:"确认重置",content:`您确认要重置所选的${m.value.length}条用户数据密码为【123456a】?`,alignCenter:!1,onOk:async()=>{(await Re("manager",t)).data.success&&(f.success("操作成功"),g.value.init())}})}function te(t){typeof t>"u"?(o.form.departmentId="",o.form.departmentTitle=""):(o.form.departmentId=t.value,o.form.departmentTitle=t.label)}function ae(){if(m.value.length<=0){f.error("您还未选择要删除的数据");return}b.value="",m.value.forEach(e=>{b.value+=`${e.id},`});const t=b.value.substring(0,b.value.length-1);I.confirm({title:"确认删除",content:`您确认要删除所选的${m.value.length}条数据?`,alignCenter:!1,onOk:async()=>{(await B(t)).data.success&&(f.success("删除成功"),m.value=[],$())}})}function $(){T.value=!1,setTimeout(()=>{T.value=!0,g.value.init()},100)}function le(){Ae({pageNumber:1,pageSize:1e4}).then(t=>{t.data.success&&(R.value=t.data.result.records)})}function oe(){Se().then(t=>{t.data.success&&(A.value=t.data.result)})}function ne(t,e){return e.title.toLowerCase().includes(t.toLowerCase())}function se(){p.value=!1}function re(){p.value=!1}function ie(){p.value=!0}function de(){p.value=!1,o.form.face=O.value}function ue(t){O.value=t.url}function fe(t){o.form.roleIds=t.filter(e=>e.length>0)}return he(()=>{le(),oe()}),(t,e)=>{const r=i("a-button"),me=i("a-space"),ce=i("a-col"),pe=i("a-row"),be=i("a-avatar"),E=i("a-badge"),h=i("a-input"),_=i("a-form-item"),ve=i("a-input-password"),ge=i("icon-eye"),_e=i("a-tooltip"),ke=i("a-tree-select"),ye=i("a-option"),Ce=i("a-select"),Ie=i("a-form"),M=i("a-modal"),we=i("a-card");return c(),v(we,{title:"用户设置",class:"general-card",bordered:!1},{default:n(()=>[s(l(je),{columns:F,onReset:e[0]||(e[0]=a=>{w.value={...l(w),...a}}),onSearch:e[1]||(e[1]=a=>{w.value={...l(w),...a}})}),s(pe,{style:{"margin-bottom":"16px"}},{default:n(()=>[s(ce,{span:16},{default:n(()=>[s(me,null,{default:n(()=>[s(r,{type:"primary",onClick:Q},{default:n(()=>e[16]||(e[16]=[d(" 添加管理员 ")])),_:1}),s(r,{onClick:ae},{default:n(()=>e[17]||(e[17]=[d(" 批量删除 ")])),_:1}),s(r,{onClick:ee},{default:n(()=>e[18]||(e[18]=[d(" 重置密码 ")])),_:1})]),_:1})]),_:1})]),_:1}),l(T)?(c(),v(l(Je),{key:0,ref_key:"tablePageRef",ref:g,columns:H,methods:q,api:l(Te),"api-params":l(w),checkbox:!0,bordered:!0,onSelectTableChange:z},{face:n(({data:a})=>[s(be,null,{default:n(()=>[k("img",{alt:"face",src:a.face},null,8,He)]),_:2},1024)]),status:n(({data:a})=>[a.enable?(c(),v(E,{key:0,color:"green",text:"启用"})):(c(),v(E,{key:1,color:"red",text:"禁用"}))]),editor:n(({data:a})=>[s(r,{type:"text",status:"warning",onClick:x=>X(a)},{default:n(()=>e[19]||(e[19]=[d(" 编辑 ")])),_:2},1032,["onClick"])]),forbidden:n(({data:a})=>[a.enable?(c(),v(r,{key:0,type:"text",status:"danger",onClick:x=>Y(a)},{default:n(()=>e[20]||(e[20]=[d(" 禁用 ")])),_:2},1032,["onClick"])):(c(),v(r,{key:1,type:"text",status:"success",onClick:x=>Z(a)},{default:n(()=>e[21]||(e[21]=[d(" 启用 ")])),_:2},1032,["onClick"]))]),remove:n(({data:a})=>[s(r,{type:"text",status:"danger",onClick:x=>W(a)},{default:n(()=>e[22]||(e[22]=[d(" 删除 ")])),_:2},1032,["onClick"])]),_:1},8,["api","api-params"])):D("",!0),s(M,{visible:l(o).enableAddModal,"onUpdate:visible":e[11]||(e[11]=a=>l(o).enableAddModal=a),"align-center":!1,"ok-text":"提交","mask-closable":!1},{title:n(()=>[d(L(l(U)),1)]),footer:n(()=>[s(r,{onClick:e[10]||(e[10]=a=>l(o).enableAddModal=!1)},{default:n(()=>e[25]||(e[25]=[d(" 取消 ")])),_:1}),s(r,{type:"primary",onClick:K},{default:n(()=>e[26]||(e[26]=[d(" 提交 ")])),_:1})]),default:n(()=>[s(Ie,{ref_key:"formRef",ref:S,model:l(o).form},{default:n(()=>[s(_,{field:"username",label:"用户名",rules:[l(V),l(J)],"validate-trigger":["change"],disabled:l(C)===1},{default:n(()=>[s(h,{modelValue:l(o).form.username,"onUpdate:modelValue":e[2]||(e[2]=a=>l(o).form.username=a)},null,8,["modelValue"])]),_:1},8,["rules","disabled"]),s(_,{field:"nickName",label:"昵称",rules:[l(V),l(J)],"validate-trigger":["change"]},{default:n(()=>[s(h,{modelValue:l(o).form.nickName,"onUpdate:modelValue":e[3]||(e[3]=a=>l(o).form.nickName=a)},null,8,["modelValue"])]),_:1},8,["rules"]),l(C)===0?(c(),v(_,{key:0,field:"password",label:"密码",rules:[l(V)],"validate-trigger":["change"]},{default:n(()=>[s(ve,{modelValue:l(o).form.password,"onUpdate:modelValue":e[4]||(e[4]=a=>l(o).form.password=a)},null,8,["modelValue"])]),_:1},8,["rules"])):D("",!0),s(_,{field:"mobile",label:"手机号码",rules:[l(Be),l(V)],"validate-trigger":["change"],"validate-phone":""},{default:n(()=>[s(h,{modelValue:l(o).form.mobile,"onUpdate:modelValue":e[5]||(e[5]=a=>l(o).form.mobile=a),"max-length":11},{prepend:n(()=>e[23]||(e[23]=[d(" +86 ")])),_:1},8,["modelValue"])]),_:1},8,["rules"]),s(_,{field:"face",label:"头像",rules:[l(V)],"validate-trigger":["change"],"validate-phone":""},{default:n(()=>[s(h,{modelValue:l(o).form.face,"onUpdate:modelValue":e[6]||(e[6]=a=>l(o).form.face=a)},null,8,["modelValue"]),s(_e,null,{content:n(()=>[k("div",null,[k("img",{src:l(o).form.face,alt:"该资源不存在",style:{width:"100%",margin:"0 auto"}},null,8,qe),k("a",{style:{"margin-top":"5px","text-align":"right",cursor:"pointer"},onClick:e[7]||(e[7]=a=>y.value=!0)},"查看大图")])]),default:n(()=>[s(r,null,{default:n(()=>[s(ge)]),_:1})]),_:1}),s(r,{type:"primary",onClick:ie},{default:n(()=>e[24]||(e[24]=[d(" 上传图片 ")])),_:1})]),_:1},8,["rules"]),s(_,{field:"departmentTitle",label:"所属部门"},{default:n(()=>[s(ke,{"model-value":l(o).form.departmentTitle,"onUpdate:modelValue":e[8]||(e[8]=a=>l(o).form.departmentTitle=a),"field-names":{children:"children",title:"title",key:"id"},"allow-search":!0,"allow-clear":!0,data:l(A),placeholder:"选择所属部门","filter-tree-node":ne,"label-in-value":!0,onChange:te},null,8,["model-value","data"])]),_:1}),s(_,{field:"roleIds",label:"选择角色"},{default:n(()=>[s(Ce,{modelValue:l(o).form.roleIds,"onUpdate:modelValue":e[9]||(e[9]=a=>l(o).form.roleIds=a),placeholder:"选择角色",multiple:"",onChange:fe},{default:n(()=>[(c(!0),Ue(Me,null,Oe(l(R),(a,x)=>(c(),v(ye,{key:x,value:a.id},{default:n(()=>[d(L(a.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"]),s(M,{visible:l(p),"onUpdate:visible":e[12]||(e[12]=a=>P(p)?p.value=a:null),width:1100,title:"oss资源管理",onOk:de,onCancel:e[13]||(e[13]=a=>p.value=!1)},{default:n(()=>[s(De,{"is-single":!0,onSelected:ue})]),_:1},8,["visible"]),s(M,{visible:l(y),"onUpdate:visible":e[15]||(e[15]=a=>P(y)?y.value=a:null),width:1100,onOk:se,onCancel:re},{footer:n(()=>[k("div",Ge,[s(r,{type:"text",onClick:e[14]||(e[14]=a=>y.value=!1)},{default:n(()=>e[27]||(e[27]=[d(" 关闭 ")])),_:1})])]),default:n(()=>[k("img",{src:l(o).form.face,alt:"该资源不存在",style:{width:"100%",margin:"0 auto",display:"block"}},null,8,ze)]),_:1},8,["visible"])]),_:1})}}}),st=Ee(Ke,[["__scopeId","data-v-b2a3b7fd"]]);export{st as default};
