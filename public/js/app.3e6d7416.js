(function(t){function e(e){for(var n,l,i=e[0],u=e[1],s=e[2],p=0,f=[];p<i.length;p++)l=i[p],a[l]&&f.push(a[l][0]),a[l]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=r[0]))}return t}var n={},a={app:0},o=[];function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var c=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("bb71");r("da64");n["a"].use(a["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-toolbar",{attrs:{app:""}},[r("v-toolbar-title",{staticClass:"headline"},[r("span",[t._v("NiceDrive")]),r("span",{staticClass:"font-weight-light ml-3"},[t._v("Driver UI")])]),r("v-spacer"),r("span",{staticClass:"mr-2"},[t._v("IDF")])],1),r("v-content",[r("DriverForm")],1)],1)},l=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",[r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[r("v-text-field",{attrs:{label:"Driver ID"}})],1)],1),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[r("v-text-field",{attrs:{label:"Driver name"}})],1)],1),r("v-layout",[r("v-checkbox",{attrs:{label:"Water"}})],1),r("v-layout",[r("v-checkbox",{attrs:{label:"Oil"}})],1),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[r("v-text-field",{attrs:{label:"Tire Pressure"}})],1)],1)],1)],1)},u=[],s={},c=s,p=r("2877"),f=r("6544"),v=r.n(f),d=r("ac7c"),b=r("a523"),m=r("0e8f"),h=r("4bd4"),x=r("a722"),y=r("2677"),w=Object(p["a"])(c,i,u,!1,null,null,null),g=w.exports;v()(w,{VCheckbox:d["a"],VContainer:b["a"],VFlex:m["a"],VForm:h["a"],VLayout:x["a"],VTextField:y["a"]});var _={name:"App",components:{DriverForm:g},data:function(){return{}}},O=_,V=r("7496"),j=r("549c"),D=r("9910"),T=r("71d9"),P=r("2a7f"),k=Object(p["a"])(O,o,l,!1,null,null,null),C=k.exports;v()(k,{VApp:V["a"],VContent:j["a"],VSpacer:D["a"],VToolbar:T["a"],VToolbarTitle:P["a"]}),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(C)}}).$mount("#app")}});
//# sourceMappingURL=app.3e6d7416.js.map