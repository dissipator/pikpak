var ue=Object.defineProperty;var H=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var J=(e,t,o)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))ce.call(t,o)&&J(e,o,t[o]);if(H)for(var o of H(t))de.call(t,o)&&J(e,o,t[o]);return e};import{d as F,u as pe,r as v,a as K,o as h,c as Y,w as u,b as l,e as a,N as me,f as ve,g as fe,z as he,h as ge,i as _e,j as q,k as ke,l as we,m as ye,n as Ne,p as xe,q as $e,s as _,t as Ee,v as be,x as Ce,y as k,A as L,B as Fe,C as Le,D as b,E as De,F as w,G as Ae,H as Ie,I as D,L as Be,J as G,K as Pe,M as Se,O as Te,P as Oe,Q as Me,R as Re,S as ze,T as Ve,U as Z,V as je,W as Ue,X as He,Y as Je,Z as We,_ as Ke,$ as Ye,a0 as qe}from"./vendor.7c36a120.js";const Ge=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};Ge();const Ze=F({setup(e){return window.$message=pe(),(t,o)=>null}}),Xe=F({setup(e){const t=v({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"}});return(o,n)=>{const s=K("router-view");return h(),Y(a(_e),{locale:a(he),"date-locale":a(ge),"theme-overrides":t.value},{default:u(()=>[l(a(fe),null,{default:u(()=>[l(a(me),null,{default:u(()=>[l(a(ve),null,{default:u(()=>[l(Ze),l(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),Qe="modulepreload",X={},et="/pikpak/",x=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${et}${n}`,n in X)return;X[n]=!0;const s=n.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":Qe,s||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),s)return new Promise((y,f)=>{c.addEventListener("load",y),c.addEventListener("error",f)})})).then(()=>t())};var tt="/pikpak/assets/logo1.08eb9157.png";const p=q.create({});p.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");return(!t||!t.access_token)&&C.push("/login"),e.headers={Authorization:t.token_type+" "+t.access_token},((o=e.url)==null?void 0:o.indexOf("https://pik.luoml.workers.dev"))===-1&&(e.url="https://pik.luoml.workers.dev/"+e.url),e});let $=!1;p.interceptors.response.use(e=>e,e=>{const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const n=window.localStorage.getItem("pikpakLoginData"),s=n?JSON.parse(n):{};return s.username&&s.password&&!$?(console.log("wait",o.url),$=!0,p.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},s)).then(r=>(r.data&&r.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(r.data)),$=!1,p(o))).catch(()=>(C.push("/login"),!1))):s.username&&s.password&&$?new Promise((r,c)=>{const y=setInterval(()=>{$||(clearInterval(y),r(p(o)))},100)}):(C.push("/login"),!1);case 400:case 403:window.$message.error(t.data.error_description||"\u51FA\u9519\u4E86")}return console.log(o.url,111),Promise.reject(e)});const Q=q.create({});Q.interceptors.request.use(e=>{var t;return e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"},((t=e.url)==null?void 0:t.indexOf("https://pik.luoml.workers.dev"))===-1&&(e.url="https://pik.luoml.workers.dev/"+e.url),e});const wt=Q,ee=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let n=Math.floor(o/10);return e=e/Math.pow(2,10*n),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[n]};const ot=w("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[w("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),w("div",{class:"logo-box__text"},"PikPak")],-1),st={key:0,class:"content-bottom"},at=k("\u4F1A\u5458\u7801"),nt={class:"bottom-user-info"},rt={key:0,src:tt,class:"user-info-avatar"},it={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},lt={class:"user-info-name"},ut={key:0},ct=k(" \u4F1A\u5458\u65F6\u95F4 "),dt={class:"action"},pt=k(" \u9000\u51FA\u767B\u5F55 "),mt=k("\u6DFB\u52A0"),vt=F({setup(e){const t=v(!1),o=i=>()=>Z(D,null,{default:()=>Z(i)}),n=ke(),s=we(),r=v([{label:"\u6587\u4EF6",key:"list",icon:o(Je)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(je)},{label:"\u8D44\u6E90\u5E93",key:"share",icon:o(Ue)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(He)}]),c=v(),y=()=>{p.get("https://user.mypikpak.com/v1/user/me").then(i=>{window.localStorage.setItem("pikpakUser",JSON.stringify(i.data)),c.value=i.data}).catch(i=>{console.log(i)})},f=v(),I=()=>{p.get("https://api-drive.mypikpak.com/drive/v1/about").then(i=>{f.value=i.data}).catch(i=>{console.log(i)})},g=v(),te=()=>{p.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(i=>{var d;g.value=(d=i.data)==null?void 0:d.data})},oe=(i,d)=>{console.log(d),n.push("/"+d.key)};ye(()=>{y(),I(),te()});const E=v(),N=v(!1),se=()=>{p.post("https://api-drive.mypikpak.com/vip/v1/order/free",{activation_code:E.value}).then(i=>{window.$message.success("\u5151\u6362\u6210\u529F"),I()}).catch(i=>{console.log(i)}).finally(()=>{N.value=!1})},B=v(!1),ae=i=>{B.value=i<800,t.value||(t.value=i<800)};Ne(s,()=>{B.value&&(t.value=!0)});const ne=xe(),re=()=>{ne.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{p.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(i=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),n.push("/login")}).catch(i=>{console.log(i)})}})};return(i,d)=>{const ie=K("router-view"),le=$e("resize");return h(),_(Ve,null,[Ee(l(a(G),{"has-sider":"",onResize:ae},{default:u(()=>[l(a(be),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:d[1]||(d[1]=m=>t.value=!0),onExpand:d[2]||(d[2]=m=>t.value=!1),bordered:""},{default:u(()=>{var m,P,S,T,O,M,R,z,V,j,U;return[ot,l(a(Ce),{options:r.value,value:String(a(s).name),"onUpdate:value":oe},null,8,["options","value"]),t.value?b("",!0):(h(),_("div",st,[k(L(a(ee)((m=f.value)==null?void 0:m.quota.usage))+" / "+L(a(ee)((P=f.value)==null?void 0:P.quota.limit))+" ",1),l(a(Fe),{type:"primary",onClick:d[0]||(d[0]=gt=>N.value=!0)},{default:u(()=>[at]),_:1}),((S=f.value)==null?void 0:S.quota)?(h(),Y(a(Le),{key:0,type:"line",percentage:Number((((T=f.value)==null?void 0:T.quota.usage)/((O=f.value)==null?void 0:O.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((M=g.value)==null?void 0:M.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):b("",!0)])),t.value?b("",!0):(h(),_("div",{key:1,class:De(["sider-bottom",{vip:((R=g.value)==null?void 0:R.status)==="ok"}])},[w("div",nt,[((z=g.value)==null?void 0:z.status)==="ok"?(h(),_("img",rt)):(h(),_("img",it)),w("div",lt,[k(L((V=c.value)==null?void 0:V.name)+" ",1),((j=g.value)==null?void 0:j.status)==="ok"&&((U=g.value)==null?void 0:U.expire)?(h(),_("div",ut,[ct,l(a(Ae),{to:new Date().getTime(),time:new Date(g.value.expire).getTime(),type:"relative"},null,8,["to","time"])])):b("",!0)]),w("div",dt,[l(a(Ie),null,{trigger:u(()=>[l(a(D),{onClick:re},{default:u(()=>[l(a(Be))]),_:1})]),default:u(()=>[pt]),_:1})])])],2))]}),_:1},8,["collapsed"]),l(a(G),null,{default:u(()=>[l(a(Pe),{style:{height:"100vh"}},{default:u(()=>[l(a(Se),{style:{"max-height":"100vh"}},{default:u(()=>[l(ie)]),_:1})]),_:1})]),_:1})]),_:1},512),[[le]]),l(a(ze),{show:N.value,"onUpdate:show":d[5]||(d[5]=m=>N.value=m)},{default:u(()=>[l(a(Te),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":u(()=>[l(a(D),{onClick:d[3]||(d[3]=m=>N.value=!1)},{default:u(()=>[l(a(Oe))]),_:1})]),action:u(()=>[l(a(Me),{block:!0,type:"primary",disabled:!E.value,onClick:se},{default:u(()=>[mt]),_:1},8,["disabled"])]),default:u(()=>[l(a(Re),{placeholder:"\u4F1A\u5458\u7801",value:E.value,"onUpdate:value":d[4]||(d[4]=m=>E.value=m)},null,8,["value"])]),_:1})]),_:1},8,["show"])],64)}}}),ft=[{path:"/",name:"home",component:vt,redirect:"/list",children:[{path:"list/:id?",name:"list",component:()=>x(()=>import("./list.2ed9a0d2.js"),["assets/list.2ed9a0d2.js","assets/list.86f421a8.css","assets/vendor.7c36a120.js"])},{path:"trash",name:"trash",component:()=>x(()=>import("./trash.f06f1632.js"),["assets/trash.f06f1632.js","assets/trash.99a3677d.css","assets/vendor.7c36a120.js"])},{path:"setting",name:"setting",component:()=>x(()=>import("./setting.7a109263.js"),["assets/setting.7a109263.js","assets/setting.f947579c.css","assets/vendor.7c36a120.js"])},{path:"share",name:"share",component:()=>x(()=>import("./share.9356b5a2.js"),["assets/share.9356b5a2.js","assets/vendor.7c36a120.js"])}]},{path:"/login",name:"login",component:()=>x(()=>import("./login.986ba89d.js"),["assets/login.986ba89d.js","assets/login.4934f30b.css","assets/vendor.7c36a120.js"])}],ht=We({history:Ke(),routes:ft});var C=ht;const A=Ye(Xe);A.directive("resize",{mounted(e,t,o){e.$$erd=qe({strategy:"scroll"}),e.$$erd.listenTo({},e,n=>{let s=n.offsetWidth,r=n.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var c;(c=o.props)==null||c.onResize(s,r)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});A.config.globalProperties.$http=p;A.use(C).mount("#app");export{ee as b,p as i,wt as n};
