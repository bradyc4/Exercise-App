(function(e){function t(t){for(var r,c,a=t[0],s=t[1],u=t[2],l=0,d=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==i[a]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},c={app:0},i={app:0},o=[];function a(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0c929946":"10260ed4","chunk-12455e66":"4263d47f","chunk-1295fafc":"6ab07c6d","chunk-2d217357":"ec8249b0","chunk-3608e139":"b94cb404","chunk-7b609bb8":"52e55b72","chunk-eb477602":"f6b5434e"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0c929946":1,"chunk-3608e139":1,"chunk-7b609bb8":1,"chunk-eb477602":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0c929946":"c3207029","chunk-12455e66":"31d6cfe0","chunk-1295fafc":"31d6cfe0","chunk-2d217357":"31d6cfe0","chunk-3608e139":"362c7d28","chunk-7b609bb8":"c3207029","chunk-eb477602":"31078a2b"}[e]+".css",i=s.p+r,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var u=o[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],l=u.getAttribute("data-href");if(l===r||l===i)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],b.parentNode.removeChild(b),n(o)},b.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){c[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,n[1](d)}i[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var b=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"11af":function(e,t,n){"use strict";var r=[[{label:"Walking",pic:"https://www.stylist.co.uk/images/app/uploads/2020/11/26091747/walking-traienrs-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress",description:"Put your right foot forward, then your left."},{label:"Running",pic:"https://www.stylist.co.uk/images/app/uploads/2021/04/28101832/strength-training-for-running-better-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress",description:"Move quickly, and make your heart race."},{label:"Dancing",pic:"https://d10j3mvrs1suex.cloudfront.net/u/392667/e16321c46135decda790ad4093dc373878ab94f3/large/moondancing.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",description:"Have fun moving your body to the rhythm."},{label:"Cycling",pic:"https://is1-ssl.mzstatic.com/image/thumb/Purple117/v4/d6/c3/c4/d6c3c458-10d5-68cf-9557-e009de4b1a40/source/256x256bb.jpg",description:"Get on a bike or something like it and pedal."},{label:"Swimming",pic:"https://is5-ssl.mzstatic.com/image/thumb/Purple71/v4/53/0b/c9/530bc945-155c-b577-61f8-8ece41d49abc/source/256x256bb.jpg",description:"Make sure you stay afloat!"}],[{label:"Climbing Stairs",pic:"https://b3h2.scene7.com/is/image/BedBathandBeyond/20329073258979m?$imagePLP$&wid=256&hei=256",description:"Put your right foot forward, then your left."},{label:"Weight Lifting",pic:"https://www.stylist.co.uk/images/app/uploads/2021/06/16092643/lift-heavier1-crop-1637055333-1280x1280.jpg?w=256&h=256&fit=max&auto=format%2Ccompress",description:"Put your right foot forward, then your left."},{label:"Push Ups",pic:"https://luzmod.com/image/chris-hemsworth/exercises/push-ups.jpg",description:"Put your right foot forward, then your left."},{label:"Sit Ups",pic:"https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/d8/ae/ca/d8aeca91-0435-cdab-e045-0ef03deef710/source/256x256bb.jpg",description:"Put your right foot forward, then your left."}],[{label:"Weight shifts",pic:"https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/11/19/10/16/sm00049-weight-shifts.jpg",description:"Put your right foot forward, then your left."},{label:"Single-leg balance",pic:"https://moriartypt.com/wp-content/uploads/2018/01/Single-Leg-Balance.jpg",description:"Put your right foot forward, then your left."},{label:"Biceps curls",pic:"https://43nnuk1fz4a72826eo14gwfb-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/Blog_Balance_Photos_Single_Leg_Bicep_Curl.jpg",description:"Put your right foot forward, then your left."},{label:"Tai chi",pic:"https://static.wixstatic.com/media/9a213b_b50a033f5cb646bdb4f0e616896fc2bd~mv2.jpg/v1/fill/w_256,h_256,al_c,lg_1,q_80/images.webp",description:"Put your right foot forward, then your left."}],[{label:"Forward Lunges",pic:"https://www.stylist.co.uk/images/app/uploads/2020/03/16154557/gettyimages-1134446737-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress",description:"Put your right foot forward, then your left."},{label:"Side Lunges",pic:"https://www.stylist.co.uk/images/app/uploads/2021/03/16122734/screen-shot-2021-03-16-at-12-27-19-crop-1615897688-503x503.png?w=256&h=256&fit=max&auto=format%2Ccompress",description:"Put your right foot forward, then your left."},{label:"Standing Quad Stretch",pic:"https://topfitnesshome.com/wp-content/uploads/Standing-Quad-Stretch-min.jpg",description:"Put your right foot forward, then your left."},{label:"Seat Straddle Lotus",pic:"https://i.pinimg.com/originals/b6/82/3b/b6823b86ba3657f2e100561e495ba68f.jpg",description:"Put your right foot forward, then your left."}]];t["a"]=r},"2f79":function(e,t,n){"use strict";n("c2b7")},"3b42":function(e,t,n){"use strict";var r=n("1da1"),c=(n("96cf"),n("a18c")),i=n("5b34"),o={user:null,messages:[],toRoute:"/feed",Login:function(e,t){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(i["g"])(e,t);case 3:o=r.sent,n.user=o.user,c["a"].push(n.toRoute),r.next=11;break;case 8:return r.prev=8,r.t0=r["catch"](0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},Error:function(e){console.error(e)}};t["a"]=o},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"container"},i={class:"router"};function o(e,t,n,o,a,s){var u=Object(r["y"])("Navbar"),l=Object(r["y"])("router-view");return Object(r["t"])(),Object(r["f"])("div",{class:"fill-height",style:Object(r["p"])({"background-image":"url(https://coastalcreative.com/wp-content/uploads/2018/03/2-Gym.jpg)"}),id:"wrapper"},[Object(r["g"])("div",c,[Object(r["g"])("div",null,[Object(r["i"])(u)]),Object(r["g"])("div",i,[Object(r["i"])(l)])])],4)}var a={class:"navbar is-info",role:"navigation","aria-label":"main navigation"},s={class:"navbar-brand"},u=Object(r["g"])("a",{class:"navbar-item",href:"https://bulma.io"},[Object(r["g"])("img",{src:"https://www.clipartmax.com/png/small/190-1907892_clipart-of-the-man-running-icon-running-man-icon-png.png",alt:"Clipart Of The Man Running Icon - Running Man Icon Png @clipartmax.com"})],-1),l=Object(r["g"])("span",{"aria-hidden":"true"},null,-1),d=Object(r["g"])("span",{"aria-hidden":"true"},null,-1),b=Object(r["g"])("span",{"aria-hidden":"true"},null,-1),f=[l,d,b],p={class:"navbar-start"},h=Object(r["h"])(" Home "),g=Object(r["h"])(" Feed "),m=Object(r["h"])(" Friends "),j=Object(r["h"])(" Schedule "),O=Object(r["h"])(" Exercises "),v=Object(r["h"])(" About "),w=Object(r["h"])(" Admin "),y={class:"navbar-end"},k={class:"navbar-item"};function x(e,t,n,c,i,o){var l=Object(r["y"])("router-link"),d=Object(r["y"])("login-badge");return Object(r["t"])(),Object(r["f"])("div",null,[Object(r["g"])("nav",a,[Object(r["g"])("div",s,[u,Object(r["g"])("a",{id:"burger",role:"button",class:Object(r["o"])(["navbar-burger",{"is-active":i.isActive}]),"aria-label":"menu","aria-expanded":"false",onClick:t[0]||(t[0]=function(e){i.isActive=!i.isActive,o.activateBurger()})},f,2)]),Object(r["g"])("div",{id:"navbarBasicExample",class:Object(r["o"])(["navbar-menu",{"is-active":i.activator}])},[Object(r["g"])("div",p,[Object(r["i"])(l,{class:"navbar-item",to:"/","active-class":"is-active",exact:""},{default:Object(r["E"])((function(){return[h]})),_:1}),Object(r["i"])(l,{class:"navbar-item",to:"/feed","active-class":"is-active"},{default:Object(r["E"])((function(){return[g]})),_:1}),Object(r["i"])(l,{class:"navbar-item",to:"/friends","active-class":"is-active"},{default:Object(r["E"])((function(){return[m]})),_:1}),Object(r["i"])(l,{class:"navbar-item",to:"/schedule","active-class":"is-active"},{default:Object(r["E"])((function(){return[j]})),_:1}),Object(r["i"])(l,{class:"navbar-item",to:"/exercises","active-class":"is-active"},{default:Object(r["E"])((function(){return[O]})),_:1}),Object(r["i"])(l,{class:"navbar-item",to:"/about","active-class":"is-active"},{default:Object(r["E"])((function(){return[v]})),_:1}),i.session.user&&i.session.user.isAdmin?(Object(r["t"])(),Object(r["d"])(l,{key:0,class:"navbar-item",to:"/admin","active-class":"is-active"},{default:Object(r["E"])((function(){return[w]})),_:1})):Object(r["e"])("",!0)]),Object(r["g"])("div",y,[Object(r["g"])("div",k,[Object(r["i"])(d)])])],2)])])}var _=n("3b42"),S=(n("b0c0"),{key:0,class:"buttons"}),P=Object(r["g"])("strong",null,"Sign up",-1),A=Object(r["h"])(" Log in "),C={key:1},E={class:"button is-link","aria-haspopup":"true","aria-controls":"dropdown-menu"},B=Object(r["g"])("span",{class:"icon is-small"},[Object(r["g"])("i",{class:"fas fa-angle-down","aria-hidden":"true"})],-1),L={class:"dropdown-menu",id:"dropdown-menu",role:"menu"},R={class:"dropdown-content"},T={class:"dropdown-item"},N=Object(r["h"])(" Profile ");function F(e,t,n,c,i,o){var a=Object(r["y"])("router-link");return i.Session.user?(Object(r["t"])(),Object(r["f"])("div",C,[Object(r["g"])("div",{class:Object(r["o"])(["dropdown is-right",{"is-active":i.isActive}])},[Object(r["g"])("div",{class:"dropdown-trigger",onClick:t[0]||(t[0]=function(e){return i.isActive=!i.isActive})},[Object(r["g"])("button",E,[Object(r["g"])("span",null,Object(r["A"])(o.name),1),B])]),Object(r["g"])("div",L,[Object(r["g"])("div",R,[Object(r["g"])("a",T,[Object(r["g"])("a",{class:"button is-light",onClick:t[1]||(t[1]=function(){return o.logout&&o.logout.apply(o,arguments)})}," Log Out "),Object(r["i"])(a,{class:"button is-light",to:"/profile"},{default:Object(r["E"])((function(){return[N]})),_:1})])])])],2)])):(Object(r["t"])(),Object(r["f"])("div",S,[Object(r["i"])(a,{class:"button is-primary",to:"/signup"},{default:Object(r["E"])((function(){return[P]})),_:1}),Object(r["i"])(a,{class:"button is-light",to:"/login"},{default:Object(r["E"])((function(){return[A]})),_:1})]))}var U={data:function(){return{Session:_["a"],isActive:!1}},methods:{login:function(){this.$router.push("/login")},signup:function(){this.$router.push("/signup")},logout:function(){this.Session.user=null,this.$router.push("/")},test:function(){console.log(_["a"].user.firstName)}},computed:{name:function(){return this.Session.user.firstName+" "+this.Session.user.lastName}}},$=n("6b0d"),q=n.n($);const H=q()(U,[["render",F]]);var M=H,D={data:function(){return{isActive:!1,activator:!1,session:_["a"]}},components:{LoginBadge:M},methods:{home:function(){this.$router.push("/")},feed:function(){null===_["a"].user?this.$router.push("/login"):this.$router.push("/feed")},friends:function(){null===_["a"].user?this.$router.push("/login"):this.$router.push("/friends")},about:function(){this.$router.push("/about")},activateBurger:function(){return this.activator=!this.activator,this.activator}},computed:{adminBool:function(){return _["a"].user.isAdmin}}};const z=q()(D,[["render",x]]);var W=z,J={components:{Navbar:W},data:function(){return{myStyle:{}}}};n("2f79");const Q=q()(J,[["render",o]]);var G=Q,I=n("a18c");n("054d");Object(r["c"])(G).use(I["a"]).mount("#app")},"5b34":function(e,t,n){"use strict";n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"j",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return g})),n.d(t,"c",(function(){return m})),n.d(t,"i",(function(){return j}));var r,c=n("1da1"),i=(n("96cf"),n("d3b7"),n("3b42")),o=null!==(r="/")&&void 0!==r?r:"http://localhost:3100/";function a(e){return s.apply(this,arguments)}function s(){return s=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,r,c,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=a.length>1&&void 0!==a[1]?a[1]:null,r=a.length>2&&void 0!==a[2]?a[2]:null,e.prev=2,!n){e.next=10;break}return console.log(n),e.next=7,fetch(o+t,{method:null!==r&&void 0!==r?r:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 7:c=e.sent,e.next=13;break;case 10:return e.next=12,fetch(o+t);case 12:c=e.sent;case 13:if(c.ok){e.next=17;break}return e.next=16,c.json();case 16:throw e.sent;case 17:return e.next=19,c.json();case 19:return e.abrupt("return",e.sent);case 22:e.prev=22,e.t0=e["catch"](2),i["a"].Error(e.t0);case 25:case"end":return e.stop()}}),e,null,[[2,22]])}))),s.apply(this,arguments)}function u(){return a("users")}function l(e){return a("users/"+e)}function d(e){return a("users/byhandle/"+e)}function b(e){return a("users/register",e)}function f(e,t){return a("users/"+e,t,"PATCH")}function p(e){return a("users/"+e,{},"DELETE")}function h(e,t){return a("users/login",{handle:e,password:t})}function g(e){return a("users/search/"+e)}function m(e,t){return a("users/"+e+"/follow/"+t,{},"POST")}function j(e,t){return a("users/"+e+"/follow/"+t,{},"DELETE")}},"6e34":function(e,t,n){"use strict";n("da77")},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var r=n("6c02"),c=n("3b42"),i=(n("b0c0"),n("7a23")),o={class:"container",style:{"text-align":"center",width:"50%"}},a={key:0},s=Object(i["g"])("h1",null,"Hello ! Welcome to Fitness Tracker!",-1),u=Object(i["g"])("p",null,"You can get started by creating an account. Click the Sign Up button at the top right of the screen. Then you are well on your way to becoming ripped!",-1),l=[s,u],d={key:1},b=Object(i["g"])("p",null,"You can get started by adding some exercises to your schedule! Click the Schedule button on the navigation bar above. Then you are well on your way to becoming ripped!",-1);function f(e,t,n,r,c,s){return Object(i["t"])(),Object(i["f"])("div",o,[c.Session.user?(Object(i["t"])(),Object(i["f"])("div",d,[Object(i["g"])("h1",null,"Hello "+Object(i["A"])(s.name)+"! Welcome to Fitness Tracker!",1),b])):(Object(i["t"])(),Object(i["f"])("div",a,l))])}var p={name:"Home",components:{},data:function(){return{Session:c["a"],user:c["a"].user}},computed:{name:function(){return this.user.firstName}}},h=n("6b0d"),g=n.n(h);const m=g()(p,[["render",f]]);var j=m,O={class:"columns"},v={class:"column is-one-third is-offset-one-third"};function w(e,t,n,r,c,o){return Object(i["t"])(),Object(i["f"])("div",null,[Object(i["g"])("div",O,[Object(i["g"])("div",v,[(Object(i["t"])(!0),Object(i["f"])(i["a"],null,Object(i["x"])(c.feed,(function(e,t){return Object(i["t"])(),Object(i["f"])("div",{class:"card",style:{padding:"10px"},key:e},[Object(i["g"])("p",null,"Handle: "+Object(i["A"])(c.handles[t]),1),Object(i["g"])("p",null,"Type: "+Object(i["A"])(c.ar_type[e.type]),1),Object(i["g"])("p",null,"exercise: "+Object(i["A"])(c.list[e.type][e.exercise].label),1),Object(i["g"])("p",null,"From: "+Object(i["A"])(e.from),1),Object(i["g"])("p",null,"To: "+Object(i["A"])(e.to),1),Object(i["g"])("p",null,"Notes: "+Object(i["A"])(e.notes),1)])})),128))])])])}var y=n("1da1"),k=(n("96cf"),n("11af")),x=n("5b34"),_=["Endurance","Strength","Balance","Flexibility"],S={data:function(){return{session:c["a"],user:c["a"].user,schedule:c["a"].user.schedule,following:c["a"].user.following,ar_type:_,list:k["a"],feed:[],handles:[]}},methods:{updateFeed:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n=0;n<e.user.following.length;n++)Object(x["f"])(e.user.following[n].handle).then((function(t){for(var n=0;n<t.schedule.length;n++)e.feed.push(t.schedule[n]),e.handles.push(t.handle)}));case 1:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.updateFeed();case 1:case"end":return t.stop()}}),t)})))()}};n("6e34");const P=g()(S,[["render",w]]);var A=P,C={class:"columns"},E={class:"column is-one-third"},B={class:"tabs"},L=Object(i["g"])("button",{class:"button is-info"},"Search",-1),R=[L],T=Object(i["g"])("button",{class:"button is-info"},"Following",-1),N=[T],F=Object(i["g"])("button",{class:"button is-info"},"Followers",-1),U=[F],$={key:0},q={class:"level"},H={class:"level-item"},M={class:"field has-addons"},D={class:"control"},z={class:"control"},W=Object(i["g"])("strong",null,"search",-1),J=[W],Q=["onClick"],G={key:1},I=["onClick"],Z={class:"column is-two-thirds",style:{"text-align":"center"}},X={class:"card"},Y={class:"card-image"},K=["src"],V={key:0,class:"card-content"},ee={class:"media"},te={class:"media-content"},ne={class:"title is-4"},re={class:"subtitle is-6"},ce={class:"content"};function ie(e,t,n,r,c,o){var a=this;return Object(i["t"])(),Object(i["f"])("div",null,[Object(i["g"])("div",C,[Object(i["g"])("div",E,[Object(i["g"])("div",B,[Object(i["g"])("ul",null,[Object(i["g"])("li",{onClick:t[0]||(t[0]=function(e){return c.index=0})},R),Object(i["g"])("li",{onClick:t[1]||(t[1]=function(e){return c.index=1})},N),Object(i["g"])("li",{onClick:t[2]||(t[2]=function(e){return c.index=2})},U)])]),0===c.index?(Object(i["t"])(),Object(i["f"])("div",$,[Object(i["g"])("nav",q,[Object(i["g"])("div",H,[Object(i["g"])("div",M,[Object(i["g"])("p",D,[Object(i["F"])(Object(i["g"])("input",{class:"input",type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.username=e})},null,512),[[i["C"],c.username]])]),Object(i["g"])("p",z,[Object(i["g"])("button",{class:"button is-primary",onClick:t[4]||(t[4]=function(e){return o.searchforuser(c.username)})},J)])])])]),(Object(i["t"])(!0),Object(i["f"])(i["a"],null,Object(i["x"])(c.userlist,(function(e){return Object(i["t"])(),Object(i["f"])("div",{key:e._id,style:{padding:"3px"}},[a.ourid!=e._id?(Object(i["t"])(),Object(i["f"])("a",{key:0,class:"button is-primary",onClick:function(t){return o.selectUser(e)}},[Object(i["g"])("strong",null,Object(i["A"])(e.handle),1)],8,Q)):Object(i["e"])("",!0)])})),128))])):Object(i["e"])("",!0),1===c.index?(Object(i["t"])(),Object(i["f"])("div",G,[(Object(i["t"])(!0),Object(i["f"])(i["a"],null,Object(i["x"])(c.ourfollowers,(function(e){return Object(i["t"])(),Object(i["f"])("div",{key:e.handle,style:{padding:"3px"}},[Object(i["g"])("a",{class:"button is-primary",onClick:function(t){return o.selectFollower(e)}},[Object(i["g"])("strong",null,Object(i["A"])(e.handle),1)],8,I)])})),128))])):Object(i["e"])("",!0)]),Object(i["g"])("div",Z,[Object(i["g"])("div",X,[Object(i["g"])("div",Y,[Object(i["g"])("img",{src:c.p_pic,alt:"Placeholder image",style:{width:"50%",height:"50%",align:"center"}},null,8,K)]),c.p_user?(Object(i["t"])(),Object(i["f"])("div",V,[Object(i["g"])("div",ee,[Object(i["g"])("div",te,[Object(i["g"])("p",ne,Object(i["A"])(c.fullname),1),Object(i["g"])("p",re,Object(i["A"])(c.user.handle),1)])]),Object(i["g"])("div",ce,Object(i["A"])(c.bio),1),c.followBool?(Object(i["t"])(),Object(i["f"])("button",{key:0,onClick:t[5]||(t[5]=function(e){return o.unfollowUser(a.p_user)})},"Unfollow")):(Object(i["t"])(),Object(i["f"])("button",{key:1,onClick:t[6]||(t[6]=function(e){return o.followUser(a.p_user)})},"Follow"))])):Object(i["e"])("",!0)])])])])}var oe=[],ae={data:function(){return{testuser:null,p_user:null,pid:null,ourid:c["a"].user._id,ourfollowers:c["a"].user.following,username:null,userlist:oe,user:{handle:"",isApproved:!1},fullname:null,bio:null,followBool:!1,p_pic:"https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png",index:0,GetByHandle:x["f"]}},methods:{searchforuser:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(x["h"])(e);case 2:t.userlist=n.sent;case 3:case"end":return n.stop()}}),n)})))()},selectUser:function(e){this.p_user=e,this.pid=e._id,this.followBool=!1,this.user.handle=e.handle,this.fullname=e.firstName+" "+e.lastName,this.bio=e.bio,this.p_pic=e.pic;for(var t=0;t<this.ourfollowers.length;t++)this.ourfollowers[t].handle===e.handle&&(this.followBool=!0)},selectFollower:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:Object(x["f"])(e.handle).then((function(e){t.p_user=e,t.pid=e._id,t.followBool=!0,t.user.handle=e.handle,t.fullname=e.firstName+" "+e.lastName,t.bio=e.bio,t.p_pic=e.pic}));case 1:case"end":return n.stop()}}),n)})))()},followUser:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:Object(x["c"])(c["a"].user.handle,e.handle).then(function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.followBool=n.success,e.next=3,Object(x["d"])(t.ourid).then((function(e){t.ourfollowers=e.following}));case 3:t.testuser=e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return n.stop()}}),n)})))()},unfollowUser:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:Object(x["i"])(c["a"].user.handle,e.handle).then(function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.followBool=!n.success,e.next=3,Object(x["d"])(t.ourid).then((function(e){t.ourfollowers=e.following}));case 3:t.testuser=e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return n.stop()}}),n)})))()}}};n("b27a");const se=g()(ae,[["render",ie]]);var ue=se,le=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return n.e("chunk-12455e66").then(n.bind(null,"f820"))}},{path:"/signup",name:"Signup",component:function(){return n.e("chunk-7b609bb8").then(n.bind(null,"34c3"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-0c929946").then(n.bind(null,"a55b"))}},{path:"/profile",name:"Profile",component:function(){return n.e("chunk-2d217357").then(n.bind(null,"c66d"))}},{path:"/schedule",name:"Schedule",component:function(){return n.e("chunk-3608e139").then(n.bind(null,"6b7b"))},meta:{requiresLogin:!0}},{path:"/admin",name:"Admin",component:function(){return n.e("chunk-eb477602").then(n.bind(null,"3530"))},meta:{requiresLogin:!0}},{path:"/exercises",name:"Exercises",component:function(){return n.e("chunk-1295fafc").then(n.bind(null,"b280"))},meta:{requiresLogin:!0}},{path:"/feed",component:A,meta:{requiresLogin:!0}},{path:"/friends",component:ue,meta:{requiresLogin:!0}}],de=Object(r["a"])({history:Object(r["b"])("/"),routes:le});de.beforeEach((function(e,t,n){e.meta.requiresLogin&&!c["a"].user?n("/login"):n()}));t["a"]=de},b27a:function(e,t,n){"use strict";n("d78a")},c2b7:function(e,t,n){},d78a:function(e,t,n){},da77:function(e,t,n){}});
//# sourceMappingURL=app.8517aa73.js.map