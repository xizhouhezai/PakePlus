import{l as S,m as B,p as V,n as E}from"./shops-fXVW_gE8.js";import{d as j,r as l,p as L,n as O,h as P,b as m,o as u,j as r,w as _,e as t,u as o,k as $,f as k,M as f,_ as Y}from"./index-C4AMdMz2.js";import{_ as G}from"./Businessdata.vue_vue_type_script_setup_true_lang-BhyOD4cp.js";import H from"./Main-Cz4fadve.js";import{_ as J}from"./MainData.vue_vue_type_script_setup_true_lang-247itJ-d.js";import K from"./Settlementbankaccount-sy3-seI2.js";import{_ as Q}from"./Superinformation.vue_vue_type_script_setup_true_lang-Cq7jspzH.js";import U from"./Supplementarymaterials-CFtEB4xt.js";import"./index.vue_vue_type_script_setup_true_lang-DsrWKjKu.js";import"./index-CzBKN9cw.js";import"./index--a7kHzzJ.js";import"./useCurrentInstance-BLlvmEjv.js";import"./validator-B8pIxTAL.js";import"./dist-PezRi_EG.js";import"./extra-5DUayDl9.js";import"./tools-BfzgO_2s.js";const W={class:"btn flex"},X={flex:""},Z=j({__name:"tabApplication",setup(ee){const h=l(""),C=l(""),R=l(""),w=l(""),z=l(""),a=l(!1),p=L(),g=O(),c=l(1),x=l(),e=l({organization_type:"",finance_institution:!1,business_license_info:{business_license_copy:"",business_license_number:"",merchant_name:"",legal_person:"",company_address:"",business_time:"",business_time_startTime:"",business_time_endTime:""},legal_person_commitment:"",legal_person_video:"",business_addition_msg:"",business_addition_pics:"",qualifications:"",sales_scene_info:{merchant_shortname:"",store_url:"",store_qr_code:""},account_info:{bank_account_type:"",merchant_shortname:"",account_bank:"",bank_address_code:"",bank_branch_id:"",bank_name:"",account_number:"",account_name:"",account_cert_info:{settlement_cert_pic:"",relation_cert_pic:"",other_cert_pics:[]}},contact_info:{contact_type:"",contact_name:"",contact_id_doc_type:"",contact_id_card_number:"",contact_id_doc_copy:"",contact_id_doc_copy_back:"",contact_id_doc_period_begin:"",contact_id_doc_period_end:"",business_authorization_letter:"",openid:"",mobile_phone:"",contact_email:""},certificate_info:{cert_copy:"",cert_type:"",cert_number:"",merchant_name:"",company_address:"",legal_person:"",period_begin:"",period_end:""},certificate_letter_copy:"",finance_institution_info:{cert_copy:"",finance_type:"",finance_license_pics:""},id_holder_type:"",authorize_letter_copy:null,owner:!0,id_doc_type:"",id_card_info:{id_card_copy:"",id_card_national:"",id_card_name:"",id_card_number:"",id_card_address:"",card_period_begin:"",card_period_end:""},id_doc_info:{id_doc_copy:"",id_doc_copy_back:"",id_doc_name:"",id_doc_number:"",id_doc_address:"",doc_period_begin:"",doc_period_end:""},ubo_info_list:[{ubo_id_doc_type:"",ubo_id_doc_copy:"",ubo_id_doc_copy_back:"",ubo_id_doc_name:"",ubo_id_doc_number:"",ubo_id_doc_address:"",ubo_period_begin:"",ubo_period_end:""}]});function D(i){x.value=i,c.value=2}function b(i){c.value=i}async function I(){var n,d,v,y;if(!e.value.id_card_info.id_card_valid_time&&e.value.id_card_info.id_card_valid_time2&&(e.value.id_card_info.id_card_valid_time=e.value.id_card_info.id_card_valid_time2),delete e.value.id_card_info.id_card_valid_time2,e.value.business_license_info.business_time_endTime&&e.value.business_license_info.business_time_endTime==="长期"?e.value.business_license_info.business_time=`${e.value.business_license_info.business_time_startTime},${e.value.business_license_info.business_time_endTime}`:e.value.business_license_info.business_time_endTime2&&(e.value.business_license_info.business_time=`${e.value.business_license_info.business_time_startTime},${e.value.business_license_info.business_time_endTime2}`),delete e.value.business_license_info.business_time_endTime2,!e.value.contact_info.contact_id_doc_period_end&&e.value.contact_info.contact_id_doc_period_end2&&(e.value.contact_info.contact_id_doc_period_end=e.value.contact_info.contact_id_doc_period_end2),delete e.value.contact_info.contact_id_doc_period_end2,await((n=h.value)==null?void 0:n.checkoutForm()))if(await((d=C.value)==null?void 0:d.checkoutForm()))if(await((v=R.value)==null?void 0:v.checkoutForm())){if(!await((y=w.value)==null?void 0:y.checkoutForm()))return f.error("请填写结算账户信息必填项"),!1}else return f.error("请填写店铺信息必填项"),!1;else return f.error("请填写超级管理员信息必填项"),!1;else return f.error("请填写主体资料必填项"),!1;const i={...e.value};i.finance_institution||delete i.finance_institution_info,i.owner&&delete i.ubo_info_list,i.id_doc_type==="IDENTIFICATION_TYPE_MAINLAND_IDCARD"?delete i.id_doc_info:delete i.id_card_info,i.contact_info.contact_type==="65"&&(delete i.contact_info.contact_id_doc_copy,delete i.contact_info.contact_id_doc_copy_back,delete i.contact_info.contact_id_doc_period_begin,delete i.contact_info.contact_id_doc_period_end,delete i.contact_info.business_authorization_letter,delete i.contact_info.contact_id_doc_type),(i.organization_type==="2401"||i.organization_type==="2500")&&(delete i.business_license_info,delete i.sales_scene_info.mini_program_sub_appid),i.organization_type!=="2"&&delete i.id_card_info.id_card_address,a.value=!0,p.query.id?B(p.query.id,i).then(s=>{a.value=!1,s.data.success&&(f.success("编辑成功！"),g.push({name:"progress-form-list"}))}).catch(s=>{a.value=!1,console.warn(s)}):V(i).then(s=>{a.value=!1,s.data.success&&(f.success("保存成功！"),g.push({name:"progress-form-list"}))}).catch(s=>{console.warn(s),a.value=!1})}async function N(){!e.value.id_card_info.id_card_valid_time&&e.value.id_card_info.id_card_valid_time2&&(e.value.id_card_info.id_card_valid_time=e.value.id_card_info.id_card_valid_time2),delete e.value.id_card_info.id_card_valid_time2,!e.value.business_license_info.business_time_endTime&&e.value.business_license_info.business_time_endTime2&&(e.value.business_license_info.business_time_endTime=e.value.business_license_info.business_time_endTime2),delete e.value.business_license_info.business_time_endTime2,!e.value.contact_info.contact_id_doc_period_end&&e.value.contact_info.contact_id_doc_period_end2&&(e.value.contact_info.contact_id_doc_period_end=e.value.contact_info.contact_id_doc_period_end2),delete e.value.contact_info.contact_id_doc_period_end2,e.value.business_license_info&&e.value.business_license_info.business_time&&delete e.value.business_license_info.business_time,a.value=!0;try{const i=await E(e.value);a.value=!1,i.data.success&&(f.success("暂存成功！"),g.push({name:"progress-form-list"}))}catch(i){console.warn(i),a.value=!1}}function q(){c.value+=1,c.value>6&&(c.value=1)}function A(){c.value-=1,c.value<1&&(c.value=6)}return P(()=>{p.query.id&&S(p.query.id).then(i=>{i.data.result&&(e.value=i.data.result,e.value.business_license_info.business_time?(e.value.business_license_info.business_time=e.value.business_license_info.business_time.split(","),e.value.business_license_info.business_time_startTime=e.value.business_license_info.business_time[0],e.value.business_license_info.business_time_endTime2=e.value.business_license_info.business_time[1]):e.value.business_license_info.business_time=["",""])})}),(i,n)=>{const d=m("a-tab-pane"),v=m("a-tabs"),y=m("a-spin"),s=m("a-button"),F=m("a-button-group"),M=m("a-card");return u(),r(M,{class:"general-card",title:"微信进件",bordered:!1},{default:_(()=>[t(y,{style:{display:"block"},loading:o(a)},{default:_(()=>[t(v,{"pb-100px":"","active-key":o(c),onChange:n[0]||(n[0]=T=>{c.value=T})},{default:_(()=>[(u(),r(d,{key:1,title:"主体类型"},{default:_(()=>[t(H,{"submit-from":o(e),onCallback:D},null,8,["submit-from"])]),_:1})),(u(),r(d,{key:2,title:"主体资料"},{default:_(()=>[t(J,{ref_key:"mainDataRef",ref:h,"main-type":o(x),"submit-from":o(e),onCallbackTab:b},null,8,["main-type","submit-from"])]),_:1})),(u(),r(d,{key:3,title:"超级管理员信息"},{default:_(()=>[t(Q,{ref_key:"superinformationRef",ref:C,"submit-from":o(e),onCallbackTab:b},null,8,["submit-from"])]),_:1})),(u(),r(d,{key:4,title:"店铺信息"},{default:_(()=>[t(G,{ref_key:"businessdataRef",ref:R,"submit-from":o(e),onCallbackTab:b},null,8,["submit-from"])]),_:1})),(u(),r(d,{key:5,title:"结算账户信息"},{default:_(()=>[t(K,{ref_key:"settlementbankaccountRef",ref:w,"submit-from":o(e),onCallbackTab:b},null,8,["submit-from"])]),_:1})),(u(),r(d,{key:6,title:"补充材料"},{default:_(()=>[t(U,{ref_key:"supplementarymaterialsRef",ref:z,"submit-from":o(e),onCallbackTab:b},null,8,["submit-from"])]),_:1}))]),_:1},8,["active-key"])]),_:1},8,["loading"]),$("div",W,[$("div",X,[t(F,null,{default:_(()=>[t(s,{"mr-10px":"",type:"outline",onClick:n[1]||(n[1]=T=>A())},{default:_(()=>n[3]||(n[3]=[k(" 上一步 ")])),_:1}),t(s,{"mr-10px":"",type:"outline",onClick:n[2]||(n[2]=T=>q())},{default:_(()=>n[4]||(n[4]=[k(" 下一步 ")])),_:1})]),_:1}),t(s,{"mr-10px":"",type:"primary",loading:o(a),onClick:I},{default:_(()=>n[5]||(n[5]=[k(" 提交 ")])),_:1},8,["loading"]),t(s,{type:"outline",loading:o(a),onClick:N},{default:_(()=>n[6]||(n[6]=[k(" 暂存 ")])),_:1},8,["loading"])])])]),_:1})}}}),ve=Y(Z,[["__scopeId","data-v-04ffb44a"]]);export{ve as default};
