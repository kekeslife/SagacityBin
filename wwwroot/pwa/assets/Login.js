import{d as k,y as C,s as f,c as q,b as n,i as B,z as j,r as t,o as z,e as l,k as v,x as p,j as u,q as M,t as R}from"./vendor.js";import{u as U}from"./storage.js";const A=k({__name:"Login",setup(D){const e=C({userName:"",password:""}),{lang:r}=B("lang"),g=U(),b=j(),d=f(!1),c=f(""),w=async()=>{d.value=!0;try{await g.login(e.userName,e.password),b.go(0)}catch(i){c.value=i}d.value=!1};return(i,a)=>{const x=t("v-card-title"),m=t("v-text-field"),V=t("v-btn"),N=t("v-form"),y=t("v-card-text"),S=t("v-card");return z(),q(S,null,{default:n(()=>[l(x,null,{default:n(()=>{var s;return[v("span",null,p((s=u(r))==null?void 0:s.app.登录),1)]}),_:1}),l(y,null,{default:n(()=>[l(N,{"fast-fail":"",onSubmit:a[2]||(a[2]=M(()=>{},["prevent"]))},{default:n(()=>{var s,_;return[l(m,{modelValue:e.userName,"onUpdate:modelValue":a[0]||(a[0]=o=>e.userName=o),label:(s=u(r))==null?void 0:s.app.账号,required:"",name:"userName",autocomplete:"off"},null,8,["modelValue","label"]),l(m,{modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=o=>e.password=o),label:(_=u(r))==null?void 0:_.app.密码,required:"",type:"password",clearable:!0},null,8,["modelValue","label"]),v("div",null,p(c.value),1),l(V,{onClick:w,loading:d.value,type:"submit",color:"primary",rounded:"0",block:"",class:"mt-2",size:"large"},{default:n(()=>{var o;return[R(p((o=u(r))==null?void 0:o.app.登录),1)]}),_:1},8,["loading"])]}),_:1})]),_:1})]),_:1})}}});export{A as _};
