(function(){"use strict";var e={3059:function(e,t,n){var i=n(9242),o=n(3396);function a(e,t,n,a,r,u){const c=(0,o.up)("navigation"),l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),(0,o.Wm)(i.uT,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l)])),_:1})],64)}const r={class:"navigation-widget"};function u(e,t,n,i,a,u){const c=(0,o.up)("bubble-button");return(0,o.wg)(),(0,o.iD)("nav",r,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.navigationBarObjects,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e},[(0,o.Wm)(c,{isButton:!0,navigationName:e.title,navigationUrl:e.url},null,8,["navigationName","navigationUrl"])])))),128))])}var c=n(7139);const l={key:0,class:"button-text"},s={key:1,href:"resume.pdf"};function d(e,t,n,i,a,r){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",{class:"bubble-icon",style:(0,c.j5)(r.styleObj)},[n.isButton?((0,o.wg)(),(0,o.iD)("div",l,[r.isResume?((0,o.wg)(),(0,o.iD)("a",s,"Resume")):((0,o.wg)(),(0,o.j4)(u,{key:0,to:n.navigationUrl},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)(n.navigationName),1)])),_:1},8,["to"]))])):(0,o.kq)("",!0)],4)}var p={name:"bubble-button",props:{bubbleStyle:{type:Object},isButton:{type:Boolean,default:!1},navigationName:{type:String,default:""},navigationUrl:{type:String,default:""}},computed:{styleObj(){return this.bubbleStyle?{width:this.bubbleStyle.size,height:this.bubbleStyle.size,left:this.bubbleStyle.xValue,top:this.bubbleStyle.yValue,position:"absolute"}:{width:"100px",height:"100px"}},navLocation(){return"/"+this.navigationName},isResume(){return"Resume"==this.navigationName}}},f=n(89);const m=(0,f.Z)(p,[["render",d]]);var h=m,b={components:{BubbleButton:h},name:"navigation-bar",computed:{navigationBarObjects(){return[{title:"Home",url:"/"},{title:"Projects",url:"/projects"},{title:"About Me",url:"/aboutMe"},{title:"Resume",url:"/resume"}]},navigationObjectStyle(){return{size:"100px"}}}};const v=(0,f.Z)(b,[["render",u]]);var g=v,w={name:"App",components:{navigation:g}};const y=(0,f.Z)(w,[["render",a]]);var j=y,k=n(678),_=n.p+"img/linkedin_photo-removebg.5d0762ff.png";const O=e=>((0,o.dD)("data-v-3c406340"),e=e(),(0,o.Cn)(),e),S={class:"home"},C=O((()=>(0,o._)("div",{class:"pic_paragraph"},[(0,o._)("div",null,[(0,o._)("h1",null,"Welcome"),(0,o._)("img",{src:_,alt:"Varun profile photo"})]),(0,o._)("div")],-1)));function D(e,t,n,a,r,u){return(0,o.wg)(),(0,o.iD)("div",S,[(0,o.Wm)(i.uT,{name:"fade",appear:""},{default:(0,o.w5)((()=>[C])),_:1})])}var N={name:"HomeView",methods:{data(){return{show:!1}},mounted(){this.show=!0},social_media_click:function(e){"github"==e.target.id?window.location.assign("https://github.com/varunnar"):"linkedin"==e.target.id?window.location.assign("https://www.linkedin.com/in/varun-narayanswamy"):"instagram"==e.target.id?window.location.assign("https://www.instagram.com/varun.narayanswamy/?hl=en"):console.log("invalid url")}}};const T=(0,f.Z)(N,[["render",D],["__scopeId","data-v-3c406340"]]);var A=T;const B=[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,2863))},{path:"/projects",name:"projectView",component:()=>n.e(371).then(n.bind(n,371))},{path:"/resume",name:"resumeView",component:()=>n.e(14).then(n.bind(n,14))},{path:"/aboutMe",name:"aboutMeView",component:()=>n.e(443).then(n.bind(n,2863))},{path:"/storyglow",name:"individual-project/storyglow",component:()=>n.e(829).then(n.bind(n,3829))},{path:"/munchmaps",name:"individual-project/munchmaps",component:()=>n.e(829).then(n.bind(n,3829))},{path:"/fractal",name:"individual-project/fractal",component:()=>n.e(829).then(n.bind(n,3829))},{path:"/D3",name:"individual-project/D3",component:()=>n.e(829).then(n.bind(n,3829))},{path:"/alpaca",name:"individual-project/alpaca",component:()=>n.e(829).then(n.bind(n,3829))},{path:"/heartbeatChecker",name:"individual-project/heartbeatChecker",component:()=>n.e(829).then(n.bind(n,3829))},{path:"/seagate",name:"individual-project/seagate",component:()=>n.e(829).then(n.bind(n,3829))},{path:"/mhcid",name:"individual-project/mhcid",component:()=>n.e(829).then(n.bind(n,3829))}],E=(0,k.p7)({history:(0,k.PO)(""),routes:B});var x=E,P=n(65),M=(0,P.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),V=n(3095);(0,i.ri)(j).use(M).use(x).use(V.$I).mount("#app")}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,a){if(!i){var r=1/0;for(s=0;s<e.length;s++){i=e[s][0],o=e[s][1],a=e[s][2];for(var u=!0,c=0;c<i.length;c++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(u=!1,a<r&&(r=a));if(u){e.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[i,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{14:"5d3253df",371:"1a67fd65",443:"134a41d8",829:"33adcbd6"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{371:"b439ee86",443:"ac482033",829:"ce7c7b6b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="varun-website-updated:";n.l=function(i,o,a,r){if(e[i])e[i].push(o);else{var u,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=i),e[i]=[o];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(f);var o=e[i];if(delete e[i],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var r=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=u,o.parentNode.removeChild(o),i(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var o=n[i],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var r=document.getElementsByTagName("style");for(i=0;i<r.length;i++){o=r[i],a=o.getAttribute("data-href");if(a===e||a===t)return o}},i=function(i){return new Promise((function(o,a){var r=n.miniCssF(i),u=n.p+r;if(t(r,u))return o();e(i,u,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={371:1,443:1,829:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=i(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,i){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)i.push(o[2]);else{var a=new Promise((function(n,i){o=e[t]=[n,i]}));i.push(o[2]=a);var r=n.p+n.u(t),u=new Error,c=function(i){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,o[1](u)}};n.l(r,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,a,r=i[0],u=i[1],c=i[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var s=c(n)}for(t&&t(i);l<r.length;l++)a=r[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},i=self["webpackChunkvarun_website_updated"]=self["webpackChunkvarun_website_updated"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(3059)}));i=n.O(i)})();
//# sourceMappingURL=app.ed79db6c.js.map