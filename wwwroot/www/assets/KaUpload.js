import{$ as _}from"./axiosExt.js";import{i as m,a as h,d as g,b as l,o as w,c as C,w as P,e as U,f as y,u as p,P as j,m as R}from"./vendor.js";import{M as c,A as k}from"./ant-design-vue.js";import{_ as x}from"./Home.js";const A=(s,e,a)=>{c.confirm({...a,title:e,onOk(){s(!0)},onCancel(){s(!1)}})},b=s=>{c.error({title:m(s)?s:s.message})},E=(s,e)=>{c.info({title:m(s)?s:s.message,onOk(){}})},M=async(s,e)=>e==null||m(e)&&e.trim()===""||h(e)&&e.length===0?Promise.reject(s==null?void 0:s.不能为空):Promise.resolve(),B=g({__name:"KaUpload",props:{removeData:{type:Function},removeUrl:{}},emits:["postUpload","postRemove"],setup(s,{emit:e}){const{lang:a}=l("lang"),o=s,u=e;async function f(r){if(r.status==="error")return!0;if(!o.removeUrl||!await new Promise((n,D)=>{A(n,a.value.util.确认删除)}))return!1;r.status="uploading",r.percent=50;try{var i=await _.post(o.removeUrl,o.removeData?o.removeData(r):r.name,{headers:{"Content-Type":"application/json"}});if(i.data.isSuccess)r.status="removed",r.percent=0,u("postRemove",r,i.data);else{const n=i.data.message;throw new Error(n)}}catch{return r.status="done",!1}return!0}function d(r){if(r.file.status==="done"){var t=r.file.response;t.isSuccess?(r.file.name=t.record,u("postUpload",r.file,t)):(r.file.status="error",r.file.response=t.message)}}return(r,t)=>(w(),C(p(k),R(r.$attrs,{accept:"image/*","list-type":"picture-card",class:"upload-list",onRemove:f,onChange:d}),{default:P(()=>[U("div",null,[y(p(j))])]),_:1},16))}}),N=x(B,[["__scopeId","data-v-3c74645c"]]);export{N as K,A as a,E as b,b as s,M as v};
