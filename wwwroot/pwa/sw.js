if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const t=e=>a(e,r),f={module:{uri:r},exports:n,require:t};s[r]=Promise.all(i.map((e=>f[e]||t(e)))).then((e=>(c(...e),n)))}}define(["./workbox-00d167b2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"sagacity-pwa"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axiosExt.js",revision:"c271d9cb3d8538ca72beb175e6864cef"},{url:"assets/cn.js",revision:"b202fd0d7df7ca8b41dd22e147b3b856"},{url:"assets/en.js",revision:"969256e4aa6616086ecadfeab0083953"},{url:"assets/field/UploadPic.js",revision:"b1f320dec0b1314fb252a8305a559659"},{url:"assets/index.js",revision:"37da6c3faff8e33e3747c56736a61230"},{url:"assets/json-data.js",revision:"ae1a43898ad8e815dec2e0bfb6edf460"},{url:"assets/KVDate.js",revision:"7f3e191f712ba1706772f644479bb866"},{url:"assets/KVUpload.css",revision:"f41c1136a827095199138145ba03a888"},{url:"assets/KVUpload.js",revision:"c49b779f8a9f2e8189bebbb1df6cfcee"},{url:"assets/lang.js",revision:"8d57404adf30051b7a80353004b8cc30"},{url:"assets/Login.js",revision:"b8c722657518d78f3ae7c650cc441ff8"},{url:"assets/Menu.js",revision:"2c12fe480a09251a64c935c4509ed34a"},{url:"assets/pinia.js",revision:"3879d26ab5420e87bf9ddd89c9297448"},{url:"assets/router-config.js",revision:"a8684e1e885d96d3da9a57ccb13a7d3f"},{url:"assets/Scan.css",revision:"16705d129a3fe6f41537a95ef1768eb2"},{url:"assets/Scan.js",revision:"57e12122fe10f5e628cccc29ca632f60"},{url:"assets/storage.js",revision:"4b0b025ae34b2a36259c6d43714e20ce"},{url:"assets/Test.js",revision:"8a71b3052dadf453d125b2cf1f615314"},{url:"assets/util.js",revision:"96a6a6c784ce90bc2e628ffb3f8c33c7"},{url:"assets/vendor.css",revision:"ca084e2ffb7e0bf1bfae1422aa2f905d"},{url:"assets/vendor.js",revision:"99413d0b66a16f4010e6c835b73780aa"},{url:"index.html",revision:"58198f286af97082b9b53b14d6bcef00"},{url:"registerSW.js",revision:"36a8c3eb862bdcf4382e8845651d1c5f"},{url:"manifest.webmanifest",revision:"f70f316c734493ddc470ab4b7e72c55f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\/api\//,new e.NetworkOnly({cacheName:"sagacity-api",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/\/files\//,new e.NetworkOnly({cacheName:"sagacity-files",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/\.(?:js|css|html)$/,new e.StaleWhileRevalidate({cacheName:"sagacity-html",plugins:[new e.ExpirationPlugin({maxEntries:30})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|ttf|woff2)$/,new e.CacheFirst({cacheName:"sagacity-images",plugins:[new e.ExpirationPlugin({maxEntries:30})]}),"GET")}));
