(function(e){function t(t){for(var i,n,o=t[0],l=t[1],c=t[2],d=0,f=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&f.push(a[n][0]),a[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],i=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(i=!1)}i&&(r.splice(t--,1),e=n(n.s=s[0]))}return e}var i={},a={app:0},r=[];function n(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=i,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0021":function(e,t,s){e.exports=s.p+"img/logo-transparent.ab11c38e.png"},"00fc":function(e,t,s){},"0fc8":function(e,t,s){"use strict";s("92d1")},"126e":function(e,t,s){},"26a7":function(e,t,s){},"28a5":function(e,t,s){"use strict";s("972e")},"2dc5":function(e,t,s){"use strict";s("26a7")},"4ffd":function(e,t,s){e.exports=s.p+"img/logo.44b4a4f9.png"},"56d7":function(e,t,s){"use strict";s.r(t),s.d(t,"EventService",(function(){return ce}));s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"abso",staticStyle:{position:"absolute",top:"0"}},[e.successMessage?s("div",{staticClass:"success-message"},[s("i",{class:e.successImage}),s("div",{staticClass:"message-container"},[s("span",{staticClass:"detail-title"},[e._v(e._s(e.successTitle))]),s("span",{staticClass:"detail-message"},[e._v(e._s(e.successMessage))])])]):e._e(),e.warningMessage?s("div",{staticClass:"success-message warning"},[s("i",{class:e.warningImage}),s("div",{staticClass:"message-container"},[s("span",{staticClass:"detail-title"},[e._v(e._s(e.warningTitle))]),s("span",{staticClass:"detail-message"},[e._v(e._s(e.warningMessage))])])]):e._e(),e.errorMessage?s("div",{staticClass:"success-message error"},[s("i",{class:e.errorImage}),s("div",{staticClass:"message-container"},[s("span",{staticClass:"detail-title"},[e._v(e._s(e.errorTitle))]),s("span",{staticClass:"detail-message"},[e._v(e._s(e.errorMessage))])])]):e._e(),e.infoMessage?s("div",{staticClass:"success-message info"},[s("i",{class:e.infoImage}),s("div",{staticClass:"message-container"},[s("span",{staticClass:"detail-title"},[e._v(e._s(e.infoTitle))]),s("span",{staticClass:"detail-message"},[e._v(e._s(e.infoMessage))])])]):e._e()]),e.loading>0?s("div",{staticClass:"loading"},[s("svg",{staticClass:"loader",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200"}},[s("circle",{attrs:{cx:"100",cy:"100",r:"80",stroke:"#1976d2"}}),s("circle",{attrs:{cx:"100",cy:"100",r:"68",stroke:"lightgrey"}}),s("circle",{attrs:{cx:"100",cy:"100",r:"55",stroke:"#1976d2"}}),s("circle",{attrs:{cx:"100",cy:"100",r:"43",stroke:"darkgray"}})])]):e._e(),e.displaySidebar?s("sidebar",{staticClass:"side-nav",class:{"side-bar-open":e.sidebarMinimized},attrs:{"selected-link":e.currentPageTitle}}):e._e(),s("div",{class:{"main-content":e.displaySidebar,"main-content-login":!e.displaySidebar}},[e.displayNavbar?s("navbar",{staticClass:"navbar",attrs:{"page-title":e.currentPageTitle}}):e._e(),s("router-view",{staticClass:"main-content-view"})],1)],1)},r=[],n=s("bd86"),o=(s("7f7f"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"navbar"},[s("div",{staticClass:"navbar-right"},[s("div",{staticClass:"navbar-profile"},[s("el-popover",{staticClass:"profile-popover",attrs:{width:"200",placement:"bottom",trigger:"click"}},[s("div",{staticClass:"navbar-profile-wrapper",attrs:{slot:"reference"},slot:"reference"},[e.currentUser.userImage?e._e():s("div",{staticClass:"profile-image",style:{background:e.generateColor()}},[s("span",{staticClass:"initials"},[e._v("A")])]),s("span",{staticClass:"profile-caret"},[s("i",{staticClass:"profile-caret fas fa-caret-down"})])]),s("div",{staticClass:"profile-popover-content"},[s("div",{staticClass:"profile-popover-item",on:{click:e.logout}},[s("i",{staticClass:"item-icon fas fa-sign-out-alt"}),e._v("Logout ")])])])],1)])])}),l=[],c={name:"navbar",props:["pageTitle"],components:{},data:function(){return{showMenu:!1,currentUser:{userImage:""},isDisplayed:!1}},computed:{},methods:{toggleMenu:function(){this.isDisplayed=!1,this.showMenu=!this.showMenu},hideMenu:function(){this.isDisplayed=!1,this.showMenu=!1},handleMenuClicks:function(e){if("/userList"==e){var t=e+"/"+this.currentUser.userId;"/userList"!=this.$router.currentRoute.path.substr(0,9)?this.$router.push(t):ce.$emit("selectUser",this.currentUser)}else"logout"==e&&this.logout()},logout:function(){ce.$emit("successMessage","Logged Out"),localStorage.removeItem("authUser"),this.$router.push("/login")},generateColor:function(){return"#65615B"}}},u=c,d=(s("2dc5"),s("2877")),f=Object(d["a"])(u,o,l,!1,null,"2e1a4e86",null),g=f.exports,p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sidebar-container"},[i("el-menu",{staticClass:"sidebar-menu",attrs:{"default-active":"0",collapse:e.isCollapsed,"collapse-transition":!0,router:!0}},[e.isCollapsed?e._e():i("span",{staticClass:"navbar-logo",on:{click:function(t){return e.followLink("/dashboard")}}},[i("div",{staticClass:"horizontal-centered"},[i("img",{attrs:{src:s("0021"),alt:"Viteapp"}})])]),e.isCollapsed?i("span",{staticClass:"navbar-logo-collapsed horizontal-centered",on:{click:function(t){return e.followLink("/dashboard")}}},[i("router-link",{staticClass:"horizontal-centered",attrs:{to:"/dashboard"}},[i("img",{attrs:{height:"40",src:s("0021"),alt:"Viteapp Icon"}})])],1):e._e(),e._l(e.links,(function(t,s){return i("el-menu-item",{key:s,class:["sidebar-link",{"is-active":e.checkActivePath(t)}],attrs:{index:e.currentUrl},on:{click:function(s){return e.followLink(t.targetPage)}}},[i("i",{staticClass:"spaced",class:t.icon}),i("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.displayName))])])}))],2),i("div",{staticClass:"sidebar-toggle",class:{},on:{click:function(t){return e.toggleSideBar()}}},[e.isCollapsed?e._e():i("i",{staticClass:"arrow fal fa-angle-left"}),e.isCollapsed?i("i",{staticClass:"arrow fal fa-angle-right"}):e._e()]),i("div",{staticClass:"sidebar-hamburger",on:{click:e.mobileSidebarToggle}},[i("i",{staticClass:"fal fa-bars"})])],1)},h=[],m={name:"sidebar",props:["selectedLink"],data:function(){return{isClicked:!0,intViewportWidth:window.innerWidth,isCollapsed:!1,links:[{name:"Dashboard",displayName:"Dashboard",targetPage:"/dashboard",icon:"fal fa-th-large"}],filteredLinks:[],userRole:null,currentUrl:"/dashboard"}},computed:{isTablet:function(){return this.intViewportWidth<=1200}},mounted:function(){this.handleWidthSize()},created:function(){window.innerWidth<1600&&(this.isCollapsed=!0),this.checkRoute()},watch:{$route:"checkRoute"},methods:{mobileSidebarToggle:function(){var e=document.getElementsByClassName("sidebar-menu");document.getElementsByClassName("sidebar-menu");this.isClicked?(e[0].style.display="block",this.isClicked=!1):(e[0].style.display="none",this.isClicked=!0)},checkRoute:function(){this.currentUrl=this.$route.path},checkActivePath:function(e){return this.currentUrl==e.targetPage},handleWidthSize:function(){var e=this;window.addEventListener("resize",(function(){e.intViewportWidth=window.innerWidth,e.isTablet||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?e.isCollapsed=!0:e.isCollapsed=!1}))},toggleSideBar:function(){this.isCollapsed=!this.isCollapsed,ce.$emit("sidebarChange")},followLink:function(e){this.$router.push(e)}}},v=m,b=(s("8db3"),Object(d["a"])(v,p,h,!1,null,"13196713",null)),w=b.exports,C=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app-footer"}},[i("div",{staticClass:"footer-links"}),i("a",[i("img",{attrs:{width:"90px",src:s("4ffd"),alt:"logo"},on:{click:function(t){return e.$router.push("/dashboard")}}})]),i("div",{staticClass:"all-rights"},[e._v("© "+e._s(e.currentYear)+" Viteapp. All Rights Reserved.")])])},y=[],_={name:"appFooter",data:function(){return{currentYear:(new Date).getFullYear()}},methods:{}},k=_,M=(s("28a5"),Object(d["a"])(k,C,y,!1,null,"714bae13",null)),S=M.exports,T=Object(n["a"])({name:"index",components:{navbar:g,sidebar:w,appFooter:S},data:function(){return{sidebarMinimized:!1,currentPageTitle:"Login",successTitle:"Success",errorTitle:"Error",warningTitle:"Warning",infoTitle:"Info",successMessage:"",errorMessage:"",warningMessage:"",infoMessage:"",successImage:"far fa-check",errorImage:"fal fa-exclamation-circle",warningImage:"fal fa-exclamation-triangle",infoImage:"fal fa-info-circle",duplicate:!1,loading:0,hideSidebarPages:["Login"],hideNavbarPages:["Login"],hideFooterPages:["Login"]}},computed:{displaySidebar:function(){return-1==this.hideSidebarPages.indexOf(this.currentPageTitle)},displayNavbar:function(){return-1==this.hideNavbarPages.indexOf(this.currentPageTitle)},displayFooter:function(){return-1==this.hideFooterPages.indexOf(this.currentPageTitle)}},watch:{$route:function(e,t){ce.$emit("loading","hide")}},created:function(){this.getUser(),this.currentPageTitle=this.$route.name,ce.$on("successMessage",this.displaySuccessMessage),ce.$on("errorMessage",this.displayErrorMessage),ce.$on("infoMessage",this.displayInfoMessage),ce.$on("warningMessage",this.displayWarningMessage),ce.$on("loading",this.displayLoading),ce.$on("sidebarChange",this.toggleSidebar)},methods:{toggleSidebar:function(){0==this.sidebarMinimized?this.sidebarMinimized=!0:1==this.sidebarMinimized&&(this.sidebarMinimized=!1)},getUser:function(){var e=JSON.parse(localStorage.getItem("authAdmin"));null==e&&this.$router.push("/login")},displaySuccessMessage:function(e,t){var s=this;this.successMessage=e,t&&(this.successTitle=t),setTimeout((function(){s.successMessage="",s.successTitle="Success",s.duplicate=!1}),3e3)},displayErrorMessage:function(e,t){var s=this;this.errorMessage=e,t&&(this.errorTitle=t),setTimeout((function(){s.errorMessage="",s.errorTitle="Error"}),3e3)},displayInfoMessage:function(e,t){var s=this;this.infoMessage=e,t&&(this.infoTitle=t),setTimeout((function(){s.infoMessage="",s.infoTitle="Info"}),3e3)},displayWarningMessage:function(e,t){var s=this;this.warningMessage=e,t&&(this.warningTitle=t),setTimeout((function(){s.warningMessage="",s.warningTitle="Warning"}),3e3)},displayLoading:function(e){var t=0;return"show"==e&&++t,"hide"==e&&t--,this.loading=t}}},"watch",{$route:function(e,t){this.currentPageTitle=e.name}}),x=T,E=(s("0fc8"),Object(d["a"])(x,a,r,!1,null,null,null)),O=E.exports,P=s("260b"),$=(s("e71f"),s("ea7b"),{apiKey:"AIzaSyBPs5Eyo9b6Gz-v0Xu2ivojwtQY6Xqx8iY",authDomain:"vite-application.firebaseapp.com",databaseURL:"https://vite-application.firebaseio.com",projectId:"vite-application",storageBucket:"gs://vite-application.appspot.com",messagingSenderId:"713446169049",appId:"1:713446169049:web:fa719d28aaf766568821c8",measurementId:"G-3F0DMYJ1D7"});P["a"].apps.length||P["a"].initializeApp($);var I=P["a"],L=P["a"].firestore,R=(L.Timestamp,L.GeoPoint,s("2f62"));i["default"].use(R["a"]);var z=new R["a"].Store({state:{Sidebar_drawer:null,Customizer_drawer:!1,SidebarColor:"white",SidebarBg:"",navbarColor:"primary",setHorizontalLayout:!1,notify:{color:"green",message:"",display:""},showOverlay:!1},mutations:{SET_SIDEBAR_DRAWER:function(e,t){e.Sidebar_drawer=t},SET_CUSTOMIZER_DRAWER:function(e,t){e.Customizer_drawer=t},SET_SIDEBAR_COLOR:function(e,t){e.SidebarColor=t},SET_NAVBAR_COLOR:function(e,t){e.navbarColor=t},SET_LAYOUT:function(e,t){e.setHorizontalLayout=t},setNotifyMessage:function(e,t){e.notify={display:!0,color:"green",message:t}},setNotifyError:function(e,t){e.notify={display:!0,color:"red",message:t}},setShowOverlay:function(e,t){e.showOverlay=t}},actions:{},getters:{getNotifyMessage:function(e){return e.notify},getShowOverLay:function(e){return e.showOverlay}}}),U=s("8c4f"),W=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"dashboard-container"}},[s("h2",{attrs:{align:"center"}},[e._v("We Are Working on it")]),s("h4",{attrs:{align:"center"}},[e._v("Sorry For Inconvenience")])])}],D={name:"dashboard"},j=D,N=Object(d["a"])(j,W,A,!1,null,"14e7bf6e",null),V=N.exports,F=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login-wrapper"},[i("div",{staticClass:"content"},[i("div",{staticClass:"header"},[i("img",{staticClass:"header-image",attrs:{src:s("0021"),width:"100",alt:"Opiniion"}}),i("div",{staticClass:"header-link-wrapper"},[i("el-link",{staticClass:"header-link",attrs:{href:"http://viteadmin.site/",type:"#FFFFFF",target:"_blank",icon:"fa fa-angle-left"}},[e._v(" Go back to Home")])],1)]),i("el-card",{staticClass:"absolute-centered login-card"},[i("span",{staticClass:"login-header horizontal-centered"},[e._v("Login")]),i("el-input",{attrs:{rules:e.requiredRules,"prefix-icon":"fal fa-mobile",placeholder:"Phone Number (+2301111111111)"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doLogin()}},model:{value:e.formValues.phone_number,callback:function(t){e.$set(e.formValues,"phone_number",t)},expression:"formValues.phone_number"}}),i("el-input",{attrs:{"prefix-icon":"fal fa-key",placeholder:"Password",rules:e.requiredRules,type:"password","show-password":""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doLogin()}},model:{value:e.formValues.password,callback:function(t){e.$set(e.formValues,"password",t)},expression:"formValues.password"}}),e.loginError?i("div",{staticClass:"error-message"},[e._v(e._s(e.loginError))]):e._e(),i("div",{staticClass:"remember-container flex-space-between"},[i("el-checkbox",{attrs:{checked:e.remember},model:{value:e.remember,callback:function(t){e.remember=t},expression:"remember"}},[e._v("Remember Me")])],1),i("el-button",{staticClass:"login-button",attrs:{type:"primary",round:""},on:{click:e.doLogin}},[e._v("Login")])],1)],1),i("footer",{staticClass:"footer"},[i("div",{staticClass:"login-bottom-nav flex-center"},[i("div",[i("div",{staticClass:"credits ml-auto"},[i("div",{staticClass:"copyright"},[e._v(" © "+e._s((new Date).getFullYear())+" Viteapp. All Rights Reserved ")])])])])])])},B=[],Y=(s("6762"),s("2fdb"),P["a"].firestore()),q=Y.collection("drivers"),J={name:"login",data:function(){return{error:"",show:!1,valid:!0,lazy:!0,loading:!1,selectedCountry:{name:"Mauritius",dial_code:"+230",code:"MU"},formValues:{},requiredRules:[function(e){return!!e||"This is required"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],password:"",loginError:null,logoutReason:null,remember:!1}},created:function(){var e=localStorage.getItem("authUser")?JSON.parse(localStorage.getItem("authUser")):null;e&&(["incomplete","pending"].includes(e.driverStatus),this.$router.push("/dashboard"))},methods:{doLogin:function(){var e=this,t=this;ce.$emit("loading","show"),t.loginError=null;var s={phone_number:this.formValues.phone_number,password:this.formValues.password};q.doc(s.phone_number).get().then((function(i){var a=i.data();a?P["a"].auth().signInWithEmailAndPassword(a.driverEmail,s.password).then((function(t){ce.$emit("successMessage","Login Successful"),localStorage.setItem("authUser",JSON.stringify(a)),ce.$emit("loading","hide"),["incomplete","pending"].includes(a.driverStatus)?window.open("/registration/additional-details","_self"):e.$router.push("/dashboard")})).catch((function(e){console.error("Error",e),ce.$emit("errorMessage","Something Went Wrong"),ce.$emit("loading","hide")})):(ce.$emit("loading","hide"),void 0==s.phone_number?t.loginError="Please Enter Phone Number":void 0==s.password?t.loginError="Please Enter Password":ce.$emit("errorMessage","User Not Found"))}))},isMobile:function(){var e=[window.screen.availHeight*window.devicePixelRatio,window.screen.availWidth*window.devicePixelRatio];return e[0]<1e3&&e[1]<800},setCookie:function(){var e=31536e6,t=new Date,s=t.getTime()+e;this.remember&&(document.cookie="email=".concat(this.email,"; expires=").concat(new Date(s),";"),document.cookie="remember=true; expires=".concat(new Date(s),";")),this.remember||(document.cookie="email=; expires=".concat(new Date(t.getTime()-e),";"),document.cookie="remember=; expires=-1;")}}},G=J,H=(s("d7da"),Object(d["a"])(G,F,B,!1,null,"d745b6b0",null)),X=H.exports;i["default"].use(U["a"]);var K=new U["a"]({mode:"history",routes:[{path:"/dashboard",name:"Dashboard",component:V},{path:"/login/:reason?",name:"Login",component:X},{path:"/*",redirect:"/login"}]}),Q=s("5c96"),Z=s.n(Q),ee=(s("126e"),s("b2d6")),te=s.n(ee),se=s("4897"),ie=s.n(se),ae=s("0ff2"),re=s("bc3a"),ne=s.n(re),oe=s("2106"),le=s.n(oe);i["default"].use(ae["a"]),i["default"].use(Z.a),ie.a.use(te.a),i["default"].use(le.a,ne.a);var ce=new i["default"];i["default"].config.productionTip=!1;var ue=new i["default"]({router:K,db:I,store:z,components:{},render:function(e){return e(O)}});ue.$mount("#app")},"8db3":function(e,t,s){"use strict";s("00fc")},"90fd":function(e,t,s){},"92d1":function(e,t,s){},"972e":function(e,t,s){},d7da:function(e,t,s){"use strict";s("90fd")}});
//# sourceMappingURL=app.156458a2.js.map