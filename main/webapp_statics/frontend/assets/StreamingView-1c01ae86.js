import{s as _,L as f}from"./LoadingSpinner-0643c70d.js";import{d as v,r,o as x,c,a as e,b as d,u as t,g,s as u,l as o,e as b,f as p}from"./index-90d3d32d.js";const h={class:"flex justify-center"},V={class:"flex flex-col max-w-[45rem]"},w={class:"pt-8"},y={class:"p-float-label"},S=e("label",{for:"prompt"},"Prompt",-1),k={class:"pt-5 text-center"},B=["disabled"],L={key:0},R=["innerHTML"],j=v({__name:"StreamingView",setup(C){const s=r(""),l=r("");async function m(){u.value="",o.isRunning=!0;const n=await b.post("/api/llm/inferstream",{prompt:s.value});console.log(n.data),l.value=n.data.text}return x(()=>l.value=""),(n,a)=>(p(),c("div",h,[e("div",V,[e("div",w,[e("span",y,[d(t(_),{id:"prompt",modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=i=>s.value=i),rows:"5",cols:"65",autoResize:""},null,8,["modelValue"]),S])]),e("div",k,[e("button",{class:"w-full btn secondary",onClick:a[1]||(a[1]=i=>m()),disabled:t(o).isRunning==!0&&s.value.length>0},"Submit",8,B)]),t(o).isRunning==!0&&t(o).isStreaming==!1?(p(),c("div",L,[d(f,{class:"pt-16 text-6xl txt-lighter"})])):g("",!0),e("div",{class:"mt-8 text-justify",innerHTML:t(u).replace(`
`,"<br />")},null,8,R)])]))}});export{j as default};