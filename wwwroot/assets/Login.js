import{e as w,u as g,i as N,j as b,r as t,o as y,k as S,w as s,h as e,l as h,v as x,m as k}from"./vendor.js";import{u as C}from"./Index2.js";const V=w({__name:"Login",setup(q){const l=C(),p=g(),n=N(""),a=b({userId:0,userName:"",password:"",roles:""}),m=async _=>{try{await l.login(a.userName,a.password),p.go(0)}catch(o){n.value=o}};return(_,o)=>{const c=t("a-input"),r=t("a-form-item"),i=t("a-input-password"),d=t("a-alert"),f=t("a-button"),v=t("a-form");return y(),S(v,{model:a,"label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:m},{default:s(()=>[e(r,{label:"账号",name:"userName",rules:[{required:!0,message:"请输入账号"}]},{default:s(()=>[e(c,{value:a.userName,"onUpdate:value":o[0]||(o[0]=u=>a.userName=u)},null,8,["value"])]),_:1}),e(r,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}]},{default:s(()=>[e(i,{value:a.password,"onUpdate:value":o[1]||(o[1]=u=>a.password=u)},null,8,["value"])]),_:1}),h(e(r,{"wrapper-col":{offset:4,span:20}},{default:s(()=>[e(d,{message:n.value,type:"error"},null,8,["message"])]),_:1},512),[[x,n.value]]),e(r,{"wrapper-col":{offset:4,span:20}},{default:s(()=>[e(f,{type:"primary","html-type":"submit"},{default:s(()=>[k("登录")]),_:1})]),_:1})]),_:1},8,["model"])}}});export{V as _};
