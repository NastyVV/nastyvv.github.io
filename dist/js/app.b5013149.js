(function(t){function e(e){for(var a,i,l=e[0],c=e[1],o=e[2],v=0,p=[];v<l.length;v++)i=l[v],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b28":function(t,e,n){},1395:function(t,e,n){},"1dc3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Menu"),n("div",{staticClass:"content"},[n("router-view")],1)],1)},s=[],i=(n("b059"),n("1dc3"),n("9217"),n("1395"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-menu"},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"logo"})]),n("div",{staticClass:"menu"},[n("ul",[n("li",[n("router-link",{attrs:{to:"/theory"}},[t._v("Теория")])],1),n("li",[n("router-link",{attrs:{to:"/practice"}},[t._v("Практика")])],1),n("li",[n("router-link",{attrs:{to:"/testik"}},[t._v("Тесты")])],1),n("li",[n("router-link",{attrs:{to:"/library"}},[t._v("Медиатека")])],1)])])],1)}),l=[],c={name:"Menu"},o=c,u=n("2877"),v=Object(u["a"])(o,i,l,!1,null,null,null),p=v.exports,_={components:{Menu:p}},d=_,f=Object(u["a"])(d,r,s,!1,null,null,null),m=f.exports,h=n("8c4f"),b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page"},[n("div",{staticClass:"home-wrapper"},[n("div",{staticClass:"home-offer"},[n("div",{staticClass:"title"},[t._v(" Физика "),n("br"),t._v(" это просто ")]),n("div",{staticClass:"sub-title"},[t._v(" Бесплатный курс по физике ")])]),n("div",{staticClass:"home-items"},[n("div",{staticClass:"home-item"},[n("div",{staticClass:"icon"}),n("div",{staticClass:"right"},[n("div",{staticClass:"name"},[t._v(" 90 минут ")]),n("div",{staticClass:"sub-name"},[t._v(" краткий курс для подготовки к ЕГЭ")])])]),n("div",{staticClass:"home-item"},[n("div",{staticClass:"icon"}),n("div",{staticClass:"right"},[n("div",{staticClass:"name"},[t._v(" МКТ ")]),n("div",{staticClass:"sub-name"},[t._v(" все самое важное и полезное")])])]),n("div",{staticClass:"home-item"},[n("div",{staticClass:"icon"}),n("div",{staticClass:"right"},[n("div",{staticClass:"name"},[t._v(" 90 минут ")]),n("div",{staticClass:"sub-name"},[t._v(" краткий курс для подготовки к ЕГЭ")])])])])])])}],y=(n("0b28"),{name:"Home"}),g=y,x=Object(u["a"])(g,b,C,!1,null,null,null),O=x.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"high-category"},[n("div",{staticClass:"text"},[t._v(" Дополнительный материал ")])])])}],$={name:"Dopmaterial"},w=$,E=Object(u["a"])(w,j,k,!1,null,null,null),P=E.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"high-category"},[n("div",{staticClass:"text"},[t._v(" Практика ")])])])}],T={name:"Practik"},D=T,H=Object(u["a"])(D,M,S,!1,null,null,null),J=H.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"high-category"},[n("div",{staticClass:"text"},[t._v(" Тесты ")])])])}],A={name:"Testik"},B=A,F=Object(u["a"])(B,q,z,!1,null,null,null),G=F.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"high-category"},[n("div",{staticClass:"text"},[t._v(" Теория ")])])])}],L={name:"Teoriya"},N=L,Q=Object(u["a"])(N,I,K,!1,null,null,null),R=Q.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"high-category"},[n("div",{staticClass:"text"},[t._v(" Структура ЕГЭ по физике ")])]),n("div",{staticClass:"text-document"},[n("div",{staticClass:"struktura-document"}),n("p",[t._v("Экзаминационная работа состоит из двух частей, включающих в себя "),n("span",[t._v("32 задания.")])]),n("p",[n("span",[t._v("Часть 1")]),t._v(" содержит 26 заданий.")]),n("p",[t._v("В заданиях 1-4, 8-10, 14, 15, 20, 26-26 ответом является целое число или конечная десятичная дробь")]),n("p",[t._v("Ответом к заданиям 5-7, 11, 12, 16-18, 21, 23 и 24 является последовательность двух цифр")]),n("p",[t._v("Ответом к заданию 13 является слово")]),n("p",[t._v("Ответом к заданиям 19 и 22 являются два числа")]),n("p",[n("span",[t._v("Часть 2")]),t._v(" содержит 6 записей. Ответ к заданиям 27-32 включает в себя подробное описание всего хода выполнения задания. Вторая часть заданий (с развернутым ответом) оцениваются экспертной комиссией на основе "),n("span",[t._v("критериев")])]),n("br"),n("br"),n("p",[n("span",[t._v("1. Механика")]),t._v(" (кинематика, динамика, статика, законы сохраниения в механике, механические колебания и волны).")]),n("p",[n("span",[t._v("2. Молекулярная физика")]),t._v(" (молекулярно-кинетическая теория, термодинамика).")]),n("p",[n("span",[t._v("3. Электродинамика и основы СТО")]),t._v(" (электрическое поле, постоянный ток, мангитное поле, электромагнитная индукция, электромагнитные колебания и волны, оптика, основы СТО).")]),n("p",[n("span",[t._v("4. Квантовая физика и элементы астрофизики")]),t._v(" (корпускулярноволновой дуализм, физика атома, физика атомного ядра, элементы астрофизики).")]),n("br"),n("br"),n("p",[t._v("Продолжительность ЕГЭ по физике")]),n("p",[t._v("На выполнение всей экзаменационной работы отводится "),n("span",[t._v("235 минут")])]),n("p",[t._v("Примерное время на выполнение заданий различных частей работы составляет:")]),n("p",[n("span")])])])}],W={name:"Struktura"},X=W,Y=Object(u["a"])(X,U,V,!1,null,null,null),Z=Y.exports;a["a"].use(h["a"]);var tt=[{path:"/",name:"Home",component:O},{path:"/library",name:"Dopmat",component:P},{path:"/practice",name:"Practic",component:J},{path:"/testik",name:"Testik",component:G},{path:"/theory",name:"Teoriya",component:R},{path:"/struktura",name:"Strukura",component:Z}],et=new h["a"]({routes:tt}),nt=et;a["a"].config.productionTip=!1,new a["a"]({router:nt,render:function(t){return t(m)}}).$mount("#app")},9217:function(t,e,n){},b059:function(t,e,n){}});
//# sourceMappingURL=app.b5013149.js.map