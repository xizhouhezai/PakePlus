import{u as l}from"./useDrag-BGaSN1AF.js";import{d as g,as as m,U as p,o as u,c as f,t as y,u as a,_}from"./index-C4AMdMz2.js";const x=["style:any","data-id"],b=g({__name:"drag",props:{result:null,index:null},setup(t){const r=t,s={border:"1px dashed gray",backgroundColor:"white",padding:"0.5rem 1rem",marginRight:"1.5rem",marginBottom:"1.5rem",cursor:"move",float:"left"},[n,c]=l(()=>({type:"box",item:JSON.parse(JSON.stringify({...r.result})),options:{dropEffect:"move"},end:(e,o)=>{o.getDropResult()},collect:e=>({isDragging:e.isDragging(),handlerId:e.getHandlerId()})})),{isDragging:d}=m(n),i=p(()=>a(d)?.4:1);return(e,o)=>(u(),f("div",{ref:a(c),role:"Box","style:any":{...s,opacity:a(i)},"data-id":`box-${t.result.type}`},y(t.result.name),9,x))}}),v=_(b,[["__scopeId","data-v-73abbfa4"]]);export{v as default};
