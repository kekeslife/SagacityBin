import{d as I,m as $,u as F,c as g,b as o,i as q,z,r as c,o as u,h,l as k,F as x,e as a,k as A,t as C,x as D,j as e,a as y,n as E,v as S}from"./vendor.js";import{E as s}from"./lang.js";import{u as P}from"./storage.js";const R={class:"d-flex justify-center",style:{gap:"2rem"}},K=I({__name:"Menu",props:$({programList:{type:Array,required:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(d){const V=F(d,"modelValue"),L=d,{lang:l,changeLang:_}=q("lang"),M=P(),w=z(),B=m=>{w.push({name:m.programNo}),V.value=m},N=()=>{M.logout(),location.href="/pwa"};return(m,p)=>{const r=c("v-list-item"),b=c("v-list-group"),v=c("v-btn"),f=c("v-list"),j=c("v-menu");return u(),g(f,null,{default:o(()=>[(u(!0),h(x,null,k(L.programList,t=>(u(),g(b,{key:t.programId,value:t.programId},{activator:o(({props:n})=>{var i;return[a(r,y({ref_for:!0},n,{title:((i=e(l))==null?void 0:i.lang)===e(s).chinese?t.programDesc:t.programDescEn??t.programDesc}),null,16,["title"])]}),default:o(()=>[(u(!0),h(x,null,k(t.children,n=>{var i;return u(),g(r,{key:n.programId,onClick:T=>B(n),title:((i=e(l))==null?void 0:i.lang)===e(s).chinese?n.programDesc:n.programDescEn??n.programDesc},null,8,["onClick","title"])}),128))]),_:2},1032,["value"]))),128)),a(r,null,{default:o(()=>[A("div",R,[a(v,{variant:"text",onClick:N},{default:o(()=>{var t;return[C(D((t=e(l))==null?void 0:t.app.登出),1)]}),_:1}),a(j,null,{activator:o(({props:t})=>[a(v,y({variant:"text"},t,{"prepend-icon":"fas fa-language"}),{default:o(()=>{var n;return[C(D((n=e(l))==null?void 0:n.lang),1)]}),_:2},1040)]),default:o(()=>[a(f,null,{default:o(()=>[E(a(r,{onClick:p[0]||(p[0]=t=>e(_)(e(s).chinese)),title:"中文"},null,512),[[S,e(l).lang!==e(s).chinese]]),E(a(r,{onClick:p[1]||(p[1]=t=>e(_)(e(s).english)),title:"English"},null,512),[[S,e(l).lang!==e(s).english]])]),_:1})]),_:1})])]),_:1})]),_:1})}}});export{K as _};
