import{d as g,U as y,b as s,o as C,c as b,e as t,w as a,k as d,u as l,f as i,t as _,_ as k}from"./index-C4AMdMz2.js";const U={"border-b-1":"","py-16px":"",class:"search"},B={"w-90px":""},N={"w-90px":""},$=g({__name:"text",props:{res:null,text:null},emits:["update:res"],setup(x,{emit:f}){const r=x,c=f,o=y({get:()=>r.res,set:m=>{c("update:res",m)}});return(m,e)=>{const p=s("a-radio"),v=s("a-radio-group"),u=s("a-space"),V=s("a-input"),w=s("t-color-picker");return C(),b("div",U,[t(u,{"py-22px":""},{default:a(()=>[e[7]||(e[7]=d("div",{"w-90px":""}," 文本位置 ",-1)),d("div",null,[t(v,{modelValue:l(o).data.align,"onUpdate:modelValue":e[0]||(e[0]=n=>l(o).data.align=n),type:"button"},{default:a(()=>[t(p,{value:"left"},{default:a(()=>e[4]||(e[4]=[i(" 左 ")])),_:1}),t(p,{value:"center"},{default:a(()=>e[5]||(e[5]=[i(" 中 ")])),_:1}),t(p,{value:"right"},{default:a(()=>e[6]||(e[6]=[i(" 右 ")])),_:1})]),_:1},8,["modelValue"])])]),_:1}),t(u,{"py-22px":""},{default:a(()=>[d("div",B,_(r.text),1),d("div",null,[t(V,{modelValue:l(o).data.text,"onUpdate:modelValue":e[1]||(e[1]=n=>l(o).data.text=n),"allow-clear":"","hide-button":"",style:{width:"150px"},placeholder:`请输入${r.text}`,min:0,max:100,onClear:e[2]||(e[2]=n=>l(o).data.text="")},null,8,["modelValue","placeholder"])])]),_:1}),t(u,null,{default:a(()=>[d("div",N,_(`${r.text}颜色`),1),d("div",null,[t(w,{modelValue:l(o).data.textColor,"onUpdate:modelValue":e[3]||(e[3]=n=>l(o).data.textColor=n),format:"HEX","color-modes":["monochrome"],"show-primary-color-preview":!1},null,8,["modelValue"])])]),_:1})])}}}),D=k($,[["__scopeId","data-v-aff79e83"]]);export{D as default};
