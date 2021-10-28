var ue=Object.defineProperty;var H=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var J=(e,t,o)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))ce.call(t,o)&&J(e,o,t[o]);if(H)for(var o of H(t))de.call(t,o)&&J(e,o,t[o]);return e};import{d as F,u as pe,r as v,a as K,o as f,c as Y,w as d,b as l,e as a,N as me,f as ve,z as he,g as fe,h as ge,i as q,j as _e,k as ke,l as we,m as ye,n as Ne,p as xe,q as _,s as $e,t as Ee,v as be,x as k,y as L,A as Ce,B as Fe,C as b,D as Le,E as w,F as De,G as Ae,H as D,L as Be,I as G,J as Ie,K as Oe,M as Pe,O as Se,P as Te,Q as ze,R as Me,S as Re,T as Z,U as Ve,V as je,W as Ue,X as He,Y as Je,Z as We,_ as Ke,$ as Ye}from"./vendor.1a6f765c.js";const qe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}};qe();const Ge=F({setup(e){return window.$message=pe(),(t,o)=>null}}),Ze=F({setup(e){const t=v({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"}});return(o,r)=>{const s=K("router-view");return f(),Y(a(ge),{locale:a(he),"date-locale":a(fe),"theme-overrides":t.value},{default:d(()=>[l(a(ve),null,{default:d(()=>[l(a(me),null,{default:d(()=>[l(Ge),l(s)]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),Xe="modulepreload",X={},Qe="/pikpak/",x=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${Qe}${r}`,r in X)return;X[r]=!0;const s=r.endsWith(".css"),n=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":Xe,s||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),s)return new Promise((y,h)=>{u.addEventListener("load",y),u.addEventListener("error",h)})})).then(()=>t())};var et="/pikpak/assets/logo1.08eb9157.png";const p=q.create({});p.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");return(!t||!t.access_token)&&C.push("/login"),e.headers={Authorization:t.token_type+" "+t.access_token},((o=e.url)==null?void 0:o.indexOf("https://cors.z7.workers.dev"))===-1&&(e.url="https://cors.z7.workers.dev/"+e.url),e});let $=!1;p.interceptors.response.use(e=>e,e=>{const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const r=window.localStorage.getItem("pikpakLoginData"),s=r?JSON.parse(r):{};return s.username&&s.password&&!$?(console.log("wait",o.url),$=!0,p.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},s)).then(n=>(n.data&&n.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(n.data)),$=!1,p(o))).catch(()=>(C.push("/login"),!1))):s.username&&s.password&&$?new Promise((n,u)=>{const y=setInterval(()=>{$||(clearInterval(y),n(p(o)))},100)}):(C.push("/login"),!1);case 400:case 403:window.$message.error(t.data.error_description||"\u51FA\u9519\u4E86")}return console.log(o.url,111),Promise.reject(e)});const Q=q.create({});Q.interceptors.request.use(e=>{var t;return e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"},((t=e.url)==null?void 0:t.indexOf("https://cors.z7.workers.dev"))===-1&&(e.url="https://cors.z7.workers.dev/"+e.url),e});const kt=Q,ee=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let r=Math.floor(o/10);return e=e/Math.pow(2,10*r),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[r]};const tt=w("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[w("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),w("div",{class:"logo-box__text"},"PikPak")],-1),ot={key:0,class:"content-bottom"},st=k("\u4F1A\u5458\u7801"),at={class:"bottom-user-info"},rt={key:0,src:et,class:"user-info-avatar"},nt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},it={class:"user-info-name"},lt={key:0},ut=k(" \u4F1A\u5458\u65F6\u95F4 "),ct={class:"action"},dt=k(" \u9000\u51FA\u767B\u5F55 "),pt=k("\u6DFB\u52A0"),mt=F({setup(e){const t=v(!1),o=i=>()=>Z(D,null,{default:()=>Z(i)}),r=_e(),s=ke(),n=v([{label:"\u6587\u4EF6",key:"list",icon:o(He)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Ve)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(je)},{label:"\u8D44\u6E90\u5E93",key:"share",icon:o(Ue)}]),u=v(),y=()=>{p.get("https://user.mypikpak.com/v1/user/me").then(i=>{window.localStorage.setItem("pikpakUser",JSON.stringify(i.data)),u.value=i.data}).catch(i=>{console.log(i)})},h=v(),B=()=>{p.get("https://api-drive.mypikpak.com/drive/v1/about").then(i=>{h.value=i.data}).catch(i=>{console.log(i)})},g=v(),te=()=>{p.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(i=>{var c;g.value=(c=i.data)==null?void 0:c.data})},oe=(i,c)=>{console.log(c),r.push("/"+c.key)};we(()=>{y(),B(),te()});const E=v(),N=v(!1),se=()=>{p.post("https://api-drive.mypikpak.com/vip/v1/order/free",{activation_code:E.value}).then(i=>{window.$message.success("\u5151\u6362\u6210\u529F"),B()}).catch(i=>{console.log(i)}).finally(()=>{N.value=!1})},I=v(!1),ae=i=>{I.value=i<800,t.value||(t.value=i<800)};ye(s,()=>{I.value&&(t.value=!0)});const re=Ne(),ne=()=>{re.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{p.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(i=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),r.push("/login")}).catch(i=>{console.log(i)})}})};return(i,c)=>{const ie=K("router-view"),le=xe("resize");return f(),_(Re,null,[$e(l(a(G),{"has-sider":"",onResize:ae},{default:d(()=>[l(a(Ee),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:c[1]||(c[1]=m=>t.value=!0),onExpand:c[2]||(c[2]=m=>t.value=!1),bordered:""},{default:d(()=>{var m,O,P,S,T,z,M,R,V,j,U;return[tt,l(a(be),{options:n.value,value:String(a(s).name),"onUpdate:value":oe},null,8,["options","value"]),t.value?b("",!0):(f(),_("div",ot,[k(L(a(ee)((m=h.value)==null?void 0:m.quota.usage))+" / "+L(a(ee)((O=h.value)==null?void 0:O.quota.limit))+" ",1),l(a(Ce),{type:"primary",onClick:c[0]||(c[0]=ft=>N.value=!0)},{default:d(()=>[st]),_:1}),((P=h.value)==null?void 0:P.quota)?(f(),Y(a(Fe),{key:0,type:"line",percentage:Number((((S=h.value)==null?void 0:S.quota.usage)/((T=h.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((z=g.value)==null?void 0:z.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):b("",!0)])),t.value?b("",!0):(f(),_("div",{key:1,class:Le(["sider-bottom",{vip:((M=g.value)==null?void 0:M.status)==="ok"}])},[w("div",at,[((R=g.value)==null?void 0:R.status)==="ok"?(f(),_("img",rt)):(f(),_("img",nt)),w("div",it,[k(L((V=u.value)==null?void 0:V.name)+" ",1),((j=g.value)==null?void 0:j.status)==="ok"&&((U=g.value)==null?void 0:U.expire)?(f(),_("div",lt,[ut,l(a(De),{to:new Date().getTime(),time:new Date(g.value.expire).getTime(),type:"relative"},null,8,["to","time"])])):b("",!0)]),w("div",ct,[l(a(Ae),null,{trigger:d(()=>[l(a(D),{onClick:ne},{default:d(()=>[l(a(Be))]),_:1})]),default:d(()=>[dt]),_:1})])])],2))]}),_:1},8,["collapsed"]),l(a(G),null,{default:d(()=>[l(a(Ie),{style:{height:"100vh"}},{default:d(()=>[l(a(Oe),{style:{"max-height":"100vh"}},{default:d(()=>[l(ie)]),_:1})]),_:1})]),_:1})]),_:1},512),[[le]]),l(a(Me),{show:N.value,"onUpdate:show":c[5]||(c[5]=m=>N.value=m)},{default:d(()=>[l(a(Pe),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":d(()=>[l(a(D),{onClick:c[3]||(c[3]=m=>N.value=!1)},{default:d(()=>[l(a(Se))]),_:1})]),action:d(()=>[l(a(Te),{block:!0,type:"primary",disabled:!E.value,onClick:se},{default:d(()=>[pt]),_:1},8,["disabled"])]),default:d(()=>[l(a(ze),{placeholder:"\u4F1A\u5458\u7801",value:E.value,"onUpdate:value":c[4]||(c[4]=m=>E.value=m)},null,8,["value"])]),_:1})]),_:1},8,["show"])],64)}}}),vt=[{path:"/",name:"home",component:mt,redirect:"/list",children:[{path:"list/:id?",name:"list",component:()=>x(()=>import("./list.c321c330.js"),["assets/list.c321c330.js","assets/list.86f421a8.css","assets/vendor.1a6f765c.js"])},{path:"trash",name:"trash",component:()=>x(()=>import("./trash.05e514c6.js"),["assets/trash.05e514c6.js","assets/trash.99a3677d.css","assets/vendor.1a6f765c.js"])},{path:"setting",name:"setting",component:()=>x(()=>import("./setting.eec2eda1.js"),["assets/setting.eec2eda1.js","assets/setting.f947579c.css","assets/vendor.1a6f765c.js"])},{path:"share",name:"share",component:()=>x(()=>import("./share.13490647.js"),["assets/share.13490647.js","assets/vendor.1a6f765c.js"])}]},{path:"/login",name:"login",component:()=>x(()=>import("./login.717f5bc6.js"),["assets/login.717f5bc6.js","assets/login.4934f30b.css","assets/vendor.1a6f765c.js"])}],ht=Je({history:We(),routes:vt});var C=ht;const A=Ke(Ze);A.directive("resize",{mounted(e,t,o){e.$$erd=Ye({strategy:"scroll"}),e.$$erd.listenTo({},e,r=>{let s=r.offsetWidth,n=r.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var u;(u=o.props)==null||u.onResize(s,n)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});A.config.globalProperties.$http=p;A.use(C).mount("#app");export{ee as b,p as i,kt as n};
