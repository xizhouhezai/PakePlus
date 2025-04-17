import{v as le,w as se,x as oe,j as ne,y as de,t as re}from"./member-B0DkAxtf.js";import{u as ie}from"./useCurrentInstance-BLlvmEjv.js";import{R as L,V as ue,M as me,a as fe}from"./validator-B8pIxTAL.js";import{U as pe,V as be}from"./dist-PezRi_EG.js";import{C as ce}from"./index-DUU-x9KJ.js";import{d as ge,r as m,n as _e,a as ye,h as ke,E as U,b as u,o as b,c as g,e as s,w as o,u as a,V as xe,f as r,t as T,k as ve,F as Ie,i as Le,M as w,j as we,_ as Me}from"./index-C4AMdMz2.js";import Ce from"./index-B2X1kTmN.js";import"./index.vue_vue_type_script_setup_true_lang-DsrWKjKu.js";import"./index-CzBKN9cw.js";import"./index--a7kHzzJ.js";import"./extra-5DUayDl9.js";const Ve={key:0},Fe={key:1},Ne={key:0},Se={key:1},De={key:2},Re={class:"paginationBox"},Ue=ge({__name:"list",props:{selectedList:{type:null,default:()=>[]}},emits:["callback"],setup(E,{expose:h,emit:A}){var N;const $=E,O=A,z=m(""),B=_e(),M=m(),J=m(),I=m(null),P=(N=ie().globalProperties)==null?void 0:N.$modal,y=m(!0),f=m({pageNumber:1,pageSize:10,order:"desc",username:"",mobile:"",labelId:"",extendId:"",enable:!0}),n=ye({enableAddModal:!1,labelFlag:!1,formLoading:!1,fid:"",form:{mobile:"",username:"",password:""},updateLabelForm:{userId:"",labelIds:"",scene:"MEMBER"},labelIdWay:{}}),C=[{label:"会员ID",model:"id",disabled:!1,input:!0},{label:"会员名称",model:"username",disabled:!1,input:!0},{label:"会员昵称",model:"nickName",disabled:!1,input:!0},{label:"联系方式",model:"mobile",disabled:!1,input:!0},{label:"会员标签",model:"labelId",disabled:!1,select:{options:[]}}],W=[{title:"会员ID",dataIndex:"id"},{title:"会员名称",dataIndex:"username"},{title:"会员昵称",dataIndex:"nickName",member:!0},{title:"会员标签",dataIndex:"labelNames",slot:!0,slotTemplate:"label"},{title:"性别",dataIndex:"sex",slot:!0,slotTemplate:"sex"},{title:"联系方式",dataIndex:"mobile"},{title:"注册时间",dataIndex:"createTime"},{title:"最后登录时间",dataIndex:"lastLoginDate"}],V={title:"操作",width:300,fixed:"right",methods:[{title:"查看",callback:"orderDetail",slot:!0,slotTemplate:"orderDetail"},{title:"编辑",callback:"editor",slot:!0,slotTemplate:"editor"},{title:"标签",callback:"tag",slot:!0,slotTemplate:"tag"},{title:"禁用",callback:"forbidden",slot:!0,slotTemplate:"forbidden"},{title:"选择",callback:"change",slot:!0,slotTemplate:"change"}]},k=m({total:0}),x=m([]),c=m([]);function F(l){x.value=l.map(e=>(e.___selected=!1,c.value.length!==0?c.value.map(d=>(d.id===e.id&&(e.___selected=!0),d)):e.___selected=!1,e))}function p(){le(f.value).then(l=>{l.data.success&&(k.value=l.data.result,F(l.data.result.records))}),se().then(l=>{l.data.success&&(C.forEach(e=>{e.model==="labelId"&&(e.select.options=l.data.result.map(d=>({value:d.id,label:d.labelName,color:""})))}),n.labelIdWay=l.data.result)})}async function j(){var d;const l={...n.form,password:ce.MD5(n.form.password).toString()};if(!await((d=M.value)==null?void 0:d.validate())){const i=n.fid?"":await oe(JSON.parse(JSON.stringify(l)));i&&i.data.success&&(w.success(`${n.fid?"修改":"添加"}成功!`),n.enableAddModal=!1,p())}}function H(l){ne(l.id).then(e=>{e.data.code===200&&(I.value.editMemberModal.data=e.data.result)}),I.value.descFlag=!0}function q(l){n.labelFlag=!0,n.updateLabelForm.labelIds=l.labelIds?l.labelIds.split(","):[],n.updateLabelForm.userId=l.id}function Q(){de(n.updateLabelForm).then(l=>{l.data.success&&(w.success("修改成功!"),n.labelFlag=!1,p())})}function G(l){const e={userIds:[l.id],enable:!1};P.confirm({title:"提示",content:"确认禁用此会员？",alignCenter:!1,onOk:async()=>{(await re(e)).data.success&&(w.success("禁用成功"),x.value=[],p())}})}function K(l){B.push({name:"member-detail",query:{id:l.id}}),localStorage.setItem("memberID",l.id)}function X(l){l.___selected=!l.___selected;const e=c.value.find(d=>d.id===l.id);e&&e.id?c.value.forEach((d,i)=>{d.id===e.id&&c.value.splice(i,1)}):c.value.push(l),O("callback",l)}return h({selectedMember:y,sortMethods:V}),ke(()=>{p()}),U(()=>[$.selectedList],l=>{c.value=JSON.parse(JSON.stringify(l))[0],F(x.value)},{deep:!0}),U(()=>[f],()=>{p()},{deep:!0}),(l,e)=>{const d=u("a-badge"),i=u("a-button"),Y=u("a-pagination"),S=u("a-input"),_=u("a-form-item"),Z=u("a-input-password"),D=u("a-form"),R=u("a-modal"),ee=u("a-option"),te=u("a-select"),ae=u("a-card");return b(),g("div",null,[s(ae,{class:"general-card",title:"会员列表",bordered:!1},{default:o(()=>[s(a(pe),{columns:C,onReset:e[0]||(e[0]=t=>{f.value={...a(f),...t}}),onSearch:e[1]||(e[1]=t=>{f.value={...a(f),...t}})}),s(a(be),{ref_key:"tablePageRef",ref:z,"data-list":a(x),columns:W,methods:V,bordered:!0,"enable-pagination":!1},xe({label:o(({data:t})=>[t.labelNames!==""?(b(),g("span",Ve,[s(d,{color:"blue",style:{"margin-right":"5px"}}),r(T(t.labelNames),1)])):(b(),g("span",Fe,[s(d,{color:"gray",style:{"margin-right":"5px"}}),e[10]||(e[10]=r("未设"))]))]),sex:o(({data:t})=>[t.sex===1?(b(),g("span",Ne,[s(d,{color:"blue",style:{"margin-right":"5px"}}),e[11]||(e[11]=r("男"))])):t.sex===0?(b(),g("span",Se,[s(d,{color:"magenta",style:{"margin-right":"5px"}}),e[12]||(e[12]=r("女"))])):(b(),g("span",De,[s(d,{color:"gray",style:{"margin-right":"5px"}}),e[13]||(e[13]=r("未设"))]))]),_:2},[a(y)?{name:"orderDetail",fn:o(({data:t})=>[s(i,{type:"text",status:"success",onClick:v=>K(t)},{default:o(()=>e[14]||(e[14]=[r(" 查看 ")])),_:2},1032,["onClick"])]),key:"0"}:void 0,a(y)?{name:"editor",fn:o(({data:t})=>[s(i,{type:"text",status:"warning",onClick:v=>H(t)},{default:o(()=>e[15]||(e[15]=[r(" 编辑 ")])),_:2},1032,["onClick"])]),key:"1"}:void 0,a(y)?{name:"tag",fn:o(({data:t})=>[s(i,{type:"text",onClick:v=>q(t)},{default:o(()=>e[16]||(e[16]=[r(" 标签 ")])),_:2},1032,["onClick"])]),key:"2"}:void 0,a(y)?{name:"forbidden",fn:o(({data:t})=>[s(i,{type:"text",status:"danger",onClick:v=>G(t)},{default:o(()=>e[17]||(e[17]=[r(" 禁用 ")])),_:2},1032,["onClick"])]),key:"3"}:{name:"change",fn:o(({data:t})=>[s(i,{type:"text",status:t.___selected?"danger":"",onClick:v=>X(t)},{default:o(()=>[r(T(t.___selected?"已选择":"选择"),1)]),_:2},1032,["status","onClick"])]),key:"4"}]),1032,["data-list"]),ve("div",Re,[s(Y,{total:a(k).total,current:a(k).number,"page-size":a(k).size,"show-page-size":"",onChange:e[2]||(e[2]=t=>{a(f).pageNumber=t,p()}),onPageSizeChange:e[3]||(e[3]=t=>{a(f).pageSize=t,p()})},null,8,["total","current","page-size"])]),s(R,{visible:a(n).enableAddModal,"onUpdate:visible":e[7]||(e[7]=t=>a(n).enableAddModal=t),"align-center":!1,footer:!1},{title:o(()=>e[18]||(e[18]=[r(" 添加会员 ")])),default:o(()=>[s(D,{ref_key:"formRef",ref:M,model:a(n).form,onSubmit:j},{default:o(()=>[s(_,{field:"username",label:"会员名称",rules:[a(L),a(ue)],"validate-trigger":["change"]},{default:o(()=>[s(S,{modelValue:a(n).form.username,"onUpdate:modelValue":e[4]||(e[4]=t=>a(n).form.username=t)},null,8,["modelValue"])]),_:1},8,["rules"]),s(_,{field:"mobile",label:"手机号码",rules:[a(L),a(me)],"validate-phone":""},{default:o(()=>[s(S,{modelValue:a(n).form.mobile,"onUpdate:modelValue":e[5]||(e[5]=t=>a(n).form.mobile=t),"max-length":11},{prepend:o(()=>e[19]||(e[19]=[r(" +86 ")])),_:1},8,["modelValue"])]),_:1},8,["rules"]),s(_,{field:"password",label:"会员密码",rules:[a(L),a(fe)]},{default:o(()=>[s(Z,{modelValue:a(n).form.password,"onUpdate:modelValue":e[6]||(e[6]=t=>a(n).form.password=t),"allow-clear":"","default-visibility":!1},null,8,["modelValue"])]),_:1},8,["rules"]),s(_,{label:"操作"},{default:o(()=>[s(i,{loading:a(n).formLoading,"html-type":"submit",type:"primary"},{default:o(()=>e[20]||(e[20]=[r(" 保存 ")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"]),s(Ce,{ref_key:"show",ref:I,onInit:p},null,512),s(R,{visible:a(n).labelFlag,"onUpdate:visible":e[9]||(e[9]=t=>a(n).labelFlag=t),footer:!1},{title:o(()=>e[21]||(e[21]=[r(" 修改会员标签 ")])),default:o(()=>[s(D,{ref_key:"updateLabelFormRef",ref:J,model:a(n).updateLabelForm,onSubmit:Q},{default:o(()=>[s(_,{field:"labelIds",label:"会员标签"},{default:o(()=>[s(te,{modelValue:a(n).updateLabelForm.labelIds,"onUpdate:modelValue":e[8]||(e[8]=t=>a(n).updateLabelForm.labelIds=t),style:{width:"280px"},"allow-clear":""},{default:o(()=>[(b(!0),g(Ie,null,Le(a(n).labelIdWay,t=>(b(),we(ee,{key:t.id,value:t.id,label:`${t.labelName} - ${t.extendName}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(_,{label:"操作"},{default:o(()=>[s(i,{loading:a(n).formLoading,"html-type":"submit",type:"primary"},{default:o(()=>e[22]||(e[22]=[r(" 保存 ")])),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])]),_:1})])}}}),je=Me(Ue,[["__scopeId","data-v-f830c4e4"]]);export{je as default};
