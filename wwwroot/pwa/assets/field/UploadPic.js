import{d as x,s as c,A as h,h as j,e as d,b as k,q as B,F as D,i as v,H as E,r as V,o as L}from"../vendor.js";import{K as A}from"../KVUpload.js";import{S as F}from"../Scan.js";import{$ as _}from"../axiosExt.js";import{v as p}from"../lang.js";import"../pinia.js";import"../storage.js";import"../json-data.js";const G=x({__name:"UploadPic",setup(K){const{showError:s}=v("alert"),{lang:n}=v("lang"),g=v("loading"),l=c(null);let f="";const y=c(""),r=h([]),m=c(!1);let i=!1;const w={sn:[a=>a?(C(a),!0):n.value.validate.不能为空]},U=async()=>l.value?f!==l.value?(s(p.属性已变更(n.value.validate,"sn")),!1):!0:(s(p.属性不能为空(n.value.validate,"sn")),!1),b=async()=>l.value?f!==l.value?(s(p.属性已变更(n.value.validate,"sn")),!1):!0:(s(p.属性不能为空(n.value.validate,"sn")),!1),N=(a,e)=>{a.fileName=e.record,i||(i=!0,S())},P=(a,e)=>{i||(i=!0,S())},S=async()=>{if(l.value)try{const e=(await _.post("/api/fieldPic/log",l.value,{headers:{"Content-Type":"application/json"}})).data;if(!e.isSuccess)throw e.message}catch(a){s(a)}},C=a=>{a&&(l.value=a,$(a))},$=async a=>{g.value=!0;try{const o=(await _.post("/api/fieldPic/pics/",a,{headers:{"Content-Type":"application/json"}})).data;if(o.isSuccess)y.value=o.message,f=a,o.records?r.value=E(o.records.map(u=>({fileName:u,src:`/files/field/${o.message}/${u}`,state:"success"})),["fileName"],["desc"]):r.value=[];else throw o.message}catch(e){s(e)}finally{g.value=!1}};return(a,e)=>{const o=V("v-text-field"),u=V("v-form");return L(),j(D,null,[d(u,{onSubmit:e[2]||(e[2]=B(()=>{},["prevent"])),"validate-on":"submit",class:"ma-4"},{default:k(()=>[d(o,{clearable:!0,label:"SN",modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t),color:"primary","base-color":"primary","append-icon":"fas fa-barcode",rules:w.sn,"onClick:append":e[1]||(e[1]=t=>m.value=!0)},null,8,["modelValue","rules"])]),_:1}),d(F,{options:{formats:["EAN-13","QRCode","Code128","Code39"]},modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=t=>m.value=t),onChange:C},null,8,["modelValue"]),d(A,{"up-url":"/api/fieldPic/upload","del-url":"/api/fieldPic/del","del-data":t=>`${y.value}/${t.fileName}`,"up-data":t=>({sn:l.value}),"pre-upload":U,"pre-delete":b,onPostUpload:N,onPostDelete:P,modelValue:r.value,"onUpdate:modelValue":e[4]||(e[4]=t=>r.value=t)},null,8,["del-data","up-data","modelValue"])],64)}}});export{G as default};
