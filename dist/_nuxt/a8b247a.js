(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,4,5,7,8,9,10],{201:function(t,e,n){var content=n(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("6e401757",content,!0,{sourceMap:!1})},202:function(t,e,n){var content=n(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("7c5dac3b",content,!0,{sourceMap:!1})},203:function(t,e,n){"use strict";n(201)},204:function(t,e,n){var o=n(34)(!1);o.push([t.i,".profile-balance{height:100%;display:flex;align-items:center;color:#dadada}.profile-balance--hide .profile-balance__visible{display:none}.profile-balance--hide .profile-balance__invisible{display:block;margin:auto 0;color:#dadada}.profile-balance--hide .profile-balance__invisible svg:not(:last-child){margin-right:4px}.profile-balance__invisible{display:none}.profile-balance span{font-size:42px;font-weight:100;margin-left:4px}",""]),t.exports=o},205:function(t,e,n){"use strict";n.r(e);var o=n(7),r=n(36);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={computed:{getVisibilityClass:function(){return{"profile-balance--hide":!this.$store.state.isShowData}}},methods:c(c({},Object(r.b)(["SHOW_DATA","HIDE_DATA","TOGGLE_DATA"])),{},{touchShow:function(){this.$store.state.isShowData||(this.isTouchShow=!0,this.SHOW_DATA())},touchHide:function(){this.isTouchShow&&(this.isTouchShow=!1,this.HIDE_DATA())}})},f=(n(203),n(29)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"profile-balance",class:t.getVisibilityClass,attrs:{type:"button"},on:{mousedown:t.touchShow,mouseleave:t.touchHide,mouseup:t.touchHide,touchstart:t.touchShow,touchend:t.touchHide,touchcancel:t.touchHide}},[t._m(0),t._m(1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile-balance__visible"},[t._v("$"),n("span",[t._v("0")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profile-balance__invisible"},[e("i",{staticClass:"fas fa-star-of-life"}),e("i",{staticClass:"fas fa-star-of-life"}),e("i",{staticClass:"fas fa-star-of-life"}),e("i",{staticClass:"fas fa-star-of-life"})])}],!1,null,null,null);e.default=component.exports},208:function(t,e,n){var content=n(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("1a2eed5f",content,!0,{sourceMap:!1})},209:function(t,e,n){var content=n(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("3ba433de",content,!0,{sourceMap:!1})},210:function(t,e,n){"use strict";n(202)},211:function(t,e,n){var o=n(34)(!1);o.push([t.i,'.base-switch{width:32px;height:18px;position:relative;display:inline-block}.base-switch__input{width:0;height:0;opacity:0}.base-switch__input:checked+.base-switch__slider{background-color:#f8880f}.base-switch__input:focus+.base-switch__slider{box-shadow:0 0 2px #f8880f}.base-switch__input:checked+.base-switch__slider:before{transform:translate(16px,-50%)}.base-switch__slider{cursor:pointer;background-color:#ccc;border-radius:34px;top:0;right:0;bottom:0}.base-switch__slider,.base-switch__slider:before{transition:transform .3s ease;position:absolute;left:0;z-index:0}.base-switch__slider:before{content:"";width:16px;height:16px;transform:translateY(-50%);top:50%;background-color:#fff;border-radius:50%}',""]),t.exports=o},212:function(t,e,n){var content=n(228);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("5365a4b1",content,!0,{sourceMap:!1})},213:function(t,e,n){var content=n(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("c493c29a",content,!0,{sourceMap:!1})},214:function(t,e,n){var content=n(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("daf8021e",content,!0,{sourceMap:!1})},215:function(t,e,n){"use strict";n.r(e);n(210);var o=n(29),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"base-switch"},[e("input",{staticClass:"base-switch__input",attrs:{type:"checkbox"}}),e("span",{staticClass:"base-switch__slider"})])}],!1,null,null,null);e.default=component.exports},216:function(t,e,n){t.exports=n.p+"img/arrow_line_up_right.addb26b.png"},217:function(t,e,n){t.exports=n.p+"img/arrow_line_down_left.47ac551.png"},222:function(t,e,n){t.exports=n.p+"img/logo.5bf961d.png"},223:function(t,e,n){"use strict";n(208)},224:function(t,e,n){var o=n(34)(!1);o.push([t.i,".layout-header{width:100%;display:flex;align-items:center;background-color:#141414;padding:24px;position:fixed;top:0;left:0;z-index:2}.layout-header__logo{display:flex;align-items:center;margin-right:auto}.layout-header__logo img{width:32px;height:32px}.layout-header__logo span{font-weight:500;color:#dadada}.layout-header__balance{position:absolute;top:50%;left:50%;z-index:0;transform:translate(-50%,-50%);transition:opacity .3s ease;pointer-events:none;opacity:0}.layout-header__balance--display{pointer-events:auto;opacity:1}.layout-header__button{color:#dadada;font-size:24px}.layout-header__button+.layout-header__button{margin-left:12px}",""]),t.exports=o},225:function(t,e,n){"use strict";n(209)},226:function(t,e,n){var o=n(34)(!1);o.push([t.i,".layout-sidebar{width:100%;min-height:100vh;background:#141414;transform:translateX(100%);transition:transform .3s ease;overflow-y:auto;position:fixed;top:0;right:0;z-index:3}.layout-sidebar::-webkit-scrollbar{width:4px;height:4px}.layout-sidebar::-webkit-scrollbar-thumb{border-radius:12px;background:linear-gradient(90deg,#f8880f,#ed5314)}.layout-sidebar--open{transform:translateX(0)}.layout-sidebar__head{display:flex;align-items:center;padding:24px;background-color:#2e2e2e;position:-webkit-sticky;position:sticky;top:0}.layout-sidebar__head-title{margin:0 auto;text-transform:uppercase;font-weight:500;color:#b8b8b8}.layout-sidebar__head-button{width:24px;margin-left:-24px;color:#dadada;font-size:24px}.layout-sidebar__content{display:flex;flex-direction:column;padding:0 12px}.layout-sidebar__content-title{margin-top:24px;margin-bottom:4px;margin-left:12px;text-transform:uppercase;font-size:14px;font-weight:500;color:#b8b8b8}.layout-sidebar__content-button{display:flex;align-items:center;flex-grow:1;padding:12px 0;font-size:16px}.layout-sidebar__content-button+.layout-sidebar__content-button{border-top:1px solid #252525}.layout-sidebar__content-button-icon{width:44px;height:44px;display:flex;justify-content:center;align-items:center;margin-right:12px;background-color:#252525;border-radius:50%;color:#dadada}.layout-sidebar__content-button-title{font-weight:500;color:#dadada;margin-right:auto}.layout-sidebar__content-button-title-state{margin-top:2px;text-align:left;font-size:10px;font-weight:700;color:#999}.layout-sidebar__content-button-action{color:#dadada}",""]),t.exports=o},227:function(t,e,n){"use strict";n(212)},228:function(t,e,n){var o=n(34)(!1);o.push([t.i,".card-profile{width:100%;height:128px;padding:16px;display:flex;justify-content:space-between;border-radius:12px;background:linear-gradient(45deg,#1e1e1e,#252525);color:#fff}.card-profile__balance,.card-profile__interactive{display:flex;flex-direction:column}.card-profile__balance-title{color:#dadada;font-weight:500}.card-profile__balance-date{color:#999;font-size:12px}.card-profile__interactive{justify-content:space-between;align-items:flex-end}.card-profile__interactive-append{font-size:10px;font-weight:700;text-transform:uppercase;border-radius:6px;border:1px solid #dadada;color:#dadada;padding:8px}.card-profile__interactive-hiding{width:32px;height:32px;display:flex;align-items:center;justify-content:center;color:#dadada;font-size:24px}.card-profile__interactive-hiding--hide .card-profile__interactive-hiding-icon:first-child{display:none}.card-profile__interactive-hiding--hide .card-profile__interactive-hiding-icon:last-child{display:block}.card-profile__interactive-hiding-icon:last-child{display:none}",""]),t.exports=o},229:function(t,e,n){"use strict";var o=n(13),r=n(4),l=n(63),c=n(16),d=n(15),f=n(30),h=n(146),_=n(62),v=n(6),m=n(64),y=n(100).f,w=n(37).f,x=n(18).f,C=n(230).trim,O="Number",A=r.Number,E=A.prototype,L=f(m(E))==O,$=function(t){var e,n,o,r,l,c,d,code,f=_(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=C(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>r)return NaN;return parseInt(l,o)}return+f};if(l(O,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var S,k=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof k&&(L?v((function(){E.valueOf.call(n)})):f(n)!=O)?h(new A($(e)),n,k):$(e)},j=o?y(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),P=0;j.length>P;P++)d(A,S=j[P])&&!d(k,S)&&x(k,S,w(A,S));k.prototype=E,E.constructor=k,c(r,O,k)}},230:function(t,e,n){var o=n(14),r="["+n(231)+"]",l=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},231:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},232:function(t,e,n){"use strict";n(213)},233:function(t,e,n){var o=n(34)(!1);o.push([t.i,'.card-coin{width:100%;height:105px;padding:16px;display:flex;align-items:center;border-radius:12px;background:linear-gradient(45deg,#1e1e1e,#252525);color:#fff}.card-coin--hide .card-coin__info-title-amount{display:none}.card-coin--hide .card-coin__info-title-hide{display:block;font-size:8px}.card-coin--hide .card-coin__info-title-hide svg:not(:last-child){margin-right:1px}.card-coin--hide .card-coin__info-subtitle-amount{display:none}.card-coin__logo{width:54px;height:54px;margin-right:12px}.card-coin__info{display:flex;flex-direction:column;flex-grow:1}.card-coin__info-course,.card-coin__info-subtitle,.card-coin__info-title{display:flex;justify-content:space-between;font-weight:500}.card-coin__info-title{color:#dadada}.card-coin__info-title-hide{display:none}.card-coin__info-subtitle{font-size:14px;padding-bottom:8px;margin-bottom:2px;border-bottom:1px solid #303030;color:#999}.card-coin__info-course{font-size:14px;color:#999}.card-coin__info-course-rate-arrow{margin-right:6px}.card-coin__info-course-rate-arrow--up{color:#64b180}.card-coin__info-course-rate-arrow--up:before{content:"\\2191"}.card-coin__info-course-rate-arrow--down{color:#b7637f}.card-coin__info-course-rate-arrow--down:before{content:"\\2193"}',""]),t.exports=o},234:function(t,e,n){"use strict";n(214)},235:function(t,e,n){var o=n(34)(!1);o.push([t.i,".layout-nav{width:100%;justify-content:space-between;background-color:#2e2e2e;padding:24px;position:fixed;bottom:0;left:0;z-index:2}.layout-nav,.layout-nav__link{display:flex;align-items:center}.layout-nav__link{flex-direction:column;color:#999}.layout-nav__link-icon{font-size:16px}.layout-nav__link-text{margin-top:4px;font-size:12px}.layout-nav__link.nuxt-link-exact-active{color:#f8880f}",""]),t.exports=o},237:function(t,e,n){var content=n(251);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("28f1127f",content,!0,{sourceMap:!1})},240:function(t,e,n){"use strict";n.r(e);var o=n(7),r=n(36);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{scrollY:0}},computed:{getDisplayClass:function(){return{"layout-header__balance--display":this.scrollY>140}}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:c(c({},Object(r.b)(["OPEN_SIDEBAR"])),{},{handleScroll:function(){this.scrollY=window.scrollY}})},f=(n(223),n(29)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"layout-header"},[o("nuxt-link",{staticClass:"layout-header__logo",attrs:{to:"/"}},[o("img",{attrs:{src:n(222)}}),o("span",[t._v("wapex")])]),o("ProfileBalance",{staticClass:"layout-header__balance",class:t.getDisplayClass}),t._m(0),o("button",{staticClass:"layout-header__button",attrs:{type:"button"},on:{click:t.OPEN_SIDEBAR}},[o("i",{staticClass:"fas fa-bars"})])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"layout-header__button",attrs:{type:"button"}},[e("i",{staticClass:"fab fa-telegram"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ProfileBalance:n(205).default})},241:function(t,e,n){"use strict";n.r(e);var o=n(7),r=n(36);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={computed:{getOpenClass:function(){return{"layout-sidebar--open":this.$store.state.isOpenSidebar}}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)(["CLOSE_SIDEBAR"]))},d=(n(225),n(29)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-sidebar",class:t.getOpenClass},[n("div",{staticClass:"layout-sidebar__head"},[n("span",{staticClass:"layout-sidebar__head-title"},[t._v("Настройки")]),n("button",{staticClass:"layout-sidebar__head-button",attrs:{type:"button"},on:{click:t.CLOSE_SIDEBAR}},[n("i",{staticClass:"fas fa-times"})])]),n("div",{staticClass:"layout-sidebar__content"},[n("div",{staticClass:"layout-sidebar__content-title"},[t._v("Профиль")]),t._m(0),t._m(1),t._m(2),n("div",{staticClass:"layout-sidebar__content-title"},[t._v("Безопасность")]),n("button",{staticClass:"layout-sidebar__content-button",attrs:{type:"button"}},[t._m(3),n("div",{staticClass:"layout-sidebar__content-button-title"},[t._v("PIN-код")]),n("div",{staticClass:"layout-sidebar__content-button-action"},[n("BaseSwitch")],1)]),n("div",{staticClass:"layout-sidebar__content-title"},[t._v("Другое")]),n("button",{staticClass:"layout-sidebar__content-button",attrs:{type:"button"}},[t._m(4),t._m(5),n("div",{staticClass:"layout-sidebar__content-button-action"},[n("BaseSwitch")],1)]),t._m(6)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"layout-sidebar__content-button",attrs:{type:"button"}},[n("div",{staticClass:"layout-sidebar__content-button-icon"},[n("i",{staticClass:"fas fa-user"})]),n("div",{staticClass:"layout-sidebar__content-button-title"},[t._v("Профиль")]),n("div",{staticClass:"layout-sidebar__content-button-action"},[n("i",{staticClass:"fas fa-chevron-right"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"layout-sidebar__content-button",attrs:{type:"button"}},[n("div",{staticClass:"layout-sidebar__content-button-icon"},[n("i",{staticClass:"fas fa-coins"})]),n("div",{staticClass:"layout-sidebar__content-button-title"},[t._v("Монеты")]),n("div",{staticClass:"layout-sidebar__content-button-action"},[n("i",{staticClass:"fas fa-chevron-right"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"layout-sidebar__content-button",attrs:{type:"button"}},[n("div",{staticClass:"layout-sidebar__content-button-icon"},[n("i",{staticClass:"fas fa-sign-out-alt"})]),n("div",{staticClass:"layout-sidebar__content-button-title"},[t._v("Выход")]),n("div",{staticClass:"layout-sidebar__content-button-action"},[n("i",{staticClass:"fas fa-chevron-right"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layout-sidebar__content-button-icon"},[e("i",{staticClass:"fas fa-lock"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layout-sidebar__content-button-icon"},[e("i",{staticClass:"fas fa-moon"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-sidebar__content-button-title"},[t._v("Темный режим"),n("div",{staticClass:"layout-sidebar__content-button-title-state"},[t._v("Включен")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"layout-sidebar__content-button",attrs:{type:"button"}},[n("div",{staticClass:"layout-sidebar__content-button-icon"},[n("i",{staticClass:"fas fa-language"})]),n("div",{staticClass:"layout-sidebar__content-button-title"},[t._v("Language"),n("div",{staticClass:"layout-sidebar__content-button-title-state"},[t._v("Русский")])]),n("div",{staticClass:"layout-sidebar__content-button-action"},[n("i",{staticClass:"fas fa-chevron-right"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseSwitch:n(215).default})},242:function(t,e,n){"use strict";n.r(e);var o=n(7),r=n(36);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={computed:{getClassIcon:function(){return{"card-profile__interactive-hiding--hide":!this.$store.state.isShowData}}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)(["TOGGLE_DATA"]))},d=(n(227),n(29)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-profile"},[n("div",{staticClass:"card-profile__balance"},[n("div",{staticClass:"card-profile__balance-title"},[t._v("Баланс")]),n("div",{staticClass:"card-profile__balance-date"},[t._v("Сегодня, 22 Февр.")]),n("ProfileBalance")],1),n("div",{staticClass:"card-profile__interactive"},[n("button",{staticClass:"card-profile__interactive-append",attrs:{type:"button"}},[t._v("+ Добавить актив")]),n("button",{staticClass:"card-profile__interactive-hiding",class:t.getClassIcon,attrs:{type:"button"},on:{click:t.TOGGLE_DATA}},[n("i",{staticClass:"card-profile__interactive-hiding-icon far fa-eye"}),n("i",{staticClass:"card-profile__interactive-hiding-icon far fa-eye-slash"})])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProfileBalance:n(205).default})},243:function(t,e,n){"use strict";n.r(e);n(229);var o={props:{logo:{type:String,required:!0},shortName:{type:String,required:!0},shortAmount:{type:Number,required:!0},fullName:{type:String,required:!0},fullAmount:{type:Number,required:!0},rate:{type:Number,required:!0},ratePercent:{type:Number,required:!0}},computed:{getVisibilityClass:function(){return{"card-coin--hide":!this.$store.state.isShowData}},getTrendClass:function(){return{"card-coin__info-course-rate-arrow--up":this.ratePercent>=0,"card-coin__info-course-rate-arrow--down":this.ratePercent<0}}}},r=(n(232),n(29)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-coin",class:t.getVisibilityClass},[n("img",{staticClass:"card-coin__logo",attrs:{src:"/images/crypto/png/"+t.logo}}),n("div",{staticClass:"card-coin__info"},[n("div",{staticClass:"card-coin__info-title"},[n("span",{staticClass:"card-coin__info-title-name"},[t._v(t._s(t.shortName))]),n("span",{staticClass:"card-coin__info-title-amount"},[t._v(t._s(t.shortAmount))]),t._m(0)]),n("div",{staticClass:"card-coin__info-subtitle"},[n("span",{staticClass:"card-coin__info-subtitle-name"},[t._v(t._s(t.fullName))]),n("span",{staticClass:"card-coin__info-subtitle-amount"},[t._v("$ "+t._s(t.fullAmount))])]),n("div",{staticClass:"card-coin__info-course"},[n("span",{staticClass:"card-coin__info-course-rate"},[n("i",{staticClass:"card-coin__info-course-rate-arrow",class:t.getTrendClass}),t._v("$ "+t._s(t.rate))]),n("span",{staticClass:"card-coin__info-course-percent"},[t._v(t._s(t.ratePercent)+" %")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"card-coin__info-title-hide"},[e("i",{staticClass:"fas fa-star-of-life"}),e("i",{staticClass:"fas fa-star-of-life"}),e("i",{staticClass:"fas fa-star-of-life"}),e("i",{staticClass:"fas fa-star-of-life"})])}],!1,null,null,null);e.default=component.exports},244:function(t,e,n){"use strict";n.r(e);n(234);var o=n(29),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"layout-nav"},[n("nuxt-link",{staticClass:"layout-nav__link",attrs:{to:"/buy"}},[n("i",{staticClass:"layout-nav__link-icon fas fa-shopping-cart"}),n("span",{staticClass:"layout-nav__link-text"},[t._v("Купить")])]),n("nuxt-link",{staticClass:"layout-nav__link",attrs:{to:"#"}},[n("i",{staticClass:"layout-nav__link-icon fas fa-sync-alt"}),n("span",{staticClass:"layout-nav__link-text"},[t._v("Обменять")])]),n("nuxt-link",{staticClass:"layout-nav__link",attrs:{to:"##"}},[n("i",{staticClass:"layout-nav__link-icon fas fa-money-bill-alt"}),n("span",{staticClass:"layout-nav__link-text"},[t._v("Продать")])]),n("nuxt-link",{staticClass:"layout-nav__link",attrs:{to:"###"}},[n("i",{staticClass:"layout-nav__link-icon far fa-window-restore"}),n("span",{staticClass:"layout-nav__link-text"},[t._v("Проверить")])])],1)}),[],!1,null,null,null);e.default=component.exports},248:function(t,e,n){var content=n(249);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("1a9ff9fe",content,!0,{sourceMap:!1})},249:function(t,e,n){var o=n(34)(!1);o.push([t.i,"/*!\n * vue-swipe-actions v2.0.0-beta.20\n * (c) 2016-present eCollect\n * Released under the MIT License.\n */.swipeout{position:relative;overflow:hidden;display:flex}.swipeout .swipeout-left,.swipeout .swipeout-right{position:absolute;height:100%;display:flex;z-index:1}.swipeout .swipeout-left{left:0;transform:translateX(-100%)}.swipeout .swipeout-right{right:0;transform:translateX(100%)}.swipeout .swipeout-action,.swipeout .swipeout-content{transition:transform .2s;will-change:transform}.swipeout.swipeout--no-transition .swipeout-action,.swipeout.swipeout--no-transition .swipeout-content{transition:none!important}.swipeout .swipeout-content{width:100%}.swipeout-non-selectable{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.swipeout-no-pointer-events{pointer-events:none!important}.swipeout-list{display:flex;flex-direction:column}.swipeout-list-item{flex:1}",""]),t.exports=o},250:function(t,e,n){"use strict";n(237)},251:function(t,e,n){var o=n(34)(!1);o.push([t.i,".index__content{margin:80px 0;padding:12px}.swipeout-list-item{margin-top:12px}.swipeout-left,.swipeout-right{display:flex;align-items:center}.swipeout-left .swipeout-action{margin-left:0}.swipeout-right .swipeout-action{margin-right:0}.swipeout-action{width:48px;height:48px;display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:#999;margin:12px;color:#fff}.swipeout-action__img{width:24px;height:24px;filter:invert(1)}",""]),t.exports=o},252:function(t,e,n){"use strict";n.r(e);n(60);const o={};function r(t){return 0===t.button}function l(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]&&(t=t.changedTouches[0]),{top:t.clientY,left:t.clientX}}Object.defineProperty(o,"passive",{configurable:!0,get(){let t;try{const e=Object.defineProperty({},"passive",{get(){t={passive:!0}}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch(t){}return o.passive=t,t},set(t){Object.defineProperty(this,"passive",{value:t})}});function c(t){void 0!==t.touchTargetObserver&&(t.touchTargetObserver.disconnect(),t.touchTargetObserver=void 0)}function d(t){const e=!0!==t.horizontal&&!0!==t.vertical,n={all:!0===e||!0===t.horizontal&&!0===t.vertical};return!0!==t.horizontal&&!0!==e||(n.horizontal=!0),!0!==t.vertical&&!0!==e||(n.vertical=!0),n}function f(t,e,n){const o=l(t);let r;const c=o.left-e.event.x,d=o.top-e.event.y,f=Math.abs(c),h=Math.abs(d);return r=e.direction.horizontal&&!e.direction.vertical?c<0?"left":"right":!e.direction.horizontal&&e.direction.vertical?d<0?"up":"down":f>=h?c<0?"left":"right":d<0?"up":"down",{evt:t,position:o,direction:r,isFirst:e.event.isFirst,isFinal:!0===n,isMouse:e.event.mouse,duration:(new Date).getTime()-e.event.time,distance:{x:f,y:h},offset:{x:c,y:d},delta:{x:o.left-e.event.lastX,y:o.top-e.event.lastY}}}function h(t){return 0===t?"":`translate3d(${t}px, 0, 0)`}function _(t){return t?t.clientWidth:0}var v={name:"SwipeOut",directives:{touchPan:{name:"touch-pan",bind(t,e){const n=!0===e.modifiers.mouse,h=!0!==e.modifiers.mouseMightPrevent&&!0!==e.modifiers.mousePrevent,_=void 0===o.passive||{passive:h,capture:!0},v=!0!==e.modifiers.mightPrevent&&!0!==e.modifiers.prevent?o.passive:null;function m(t,o){n&&o?(e.modifiers.mouseStop&&t.stopPropagation(),e.modifiers.mousePrevent&&t.preventDefault()):(e.modifiers.stop&&t.stopPropagation(),e.modifiers.prevent&&t.preventDefault())}const y={handler:e.value,direction:d(e.modifiers),mouseStart(t){r(t)&&(document.addEventListener("mousemove",y.move,_),document.addEventListener("mouseup",y.mouseEnd,_),y.start(t,!0))},mouseEnd(t){document.removeEventListener("mousemove",y.move,_),document.removeEventListener("mouseup",y.mouseEnd,_),y.end(t)},start(e,n){c(y),!0!==n&&function(t,e,n){const{target:o}=e;n.touchTargetObserver=new MutationObserver((()=>{!1===t.contains(o)&&n.end(e)})),n.touchTargetObserver.observe(t,{childList:!0,subtree:!0})}(t,e,y);const o=l(e);y.event={x:o.left,y:o.top,time:(new Date).getTime(),mouse:!0===n,detected:!1,abort:!1,isFirst:!0,isFinal:!1,lastX:o.left,lastY:o.top}},move(t){if(!y.event)return;if(!0===y.event.abort)return;if(!0===y.event.detected){m(t,y.event.mouse);const e=f(t,y,!1);return void(function(t,e){return!(!t.direction.horizontal||!t.direction.vertical)||(t.direction.horizontal&&!t.direction.vertical?Math.abs(e.delta.x)>0:!t.direction.horizontal&&t.direction.vertical?Math.abs(e.delta.y)>0:void 0)}(y,e)&&(y.handler(e),y.event.lastX=e.position.left,y.event.lastY=e.position.top,y.event.isFirst=!1))}const n=l(t),o=Math.abs(n.left-y.event.x),r=Math.abs(n.top-y.event.y);o!==r&&(y.event.detected=!0,!1!==y.direction.all||!1!==y.event.mouse&&!0===e.modifiers.mouseAllDir||(y.event.abort=y.direction.vertical?o>r:o<r),!0!==y.event.abort&&(document.documentElement.style.cursor="grabbing",document.body.classList.add("swipeout-no-pointer-events"),document.body.classList.add("swipeout-non-selectable")),y.move(t))},end(t){y.event&&(!0!==y.event.mouse&&c(y),document.documentElement.style.cursor="",document.body.classList.remove("swipeout-no-pointer-events"),document.body.classList.remove("swipeout-non-selectable"),!0!==y.event.abort&&!0===y.event.detected&&!0!==y.event.isFirst&&(m(t,y.event.mouse),y.handler(f(t,y,!0))))}};t.__qtouchpan&&(t.__qtouchpan_old=t.__qtouchpan),t.__qtouchpan=y,!0===n&&t.addEventListener("mousedown",y.mouseStart,_),t.addEventListener("touchstart",y.start,v),t.addEventListener("touchmove",y.move,v),t.addEventListener("touchcancel",y.end,v),t.addEventListener("touchend",y.end,v)},update(t,{oldValue:e,value:n,modifiers:o}){const r=t.__qtouchpan;e!==n&&(r.handler=n),o.horizontal===r.direction.horizontal&&o.vertical===r.direction.vertical||(r.direction=d(o))},unbind(t,e){const n=t.__qtouchpan_old||t.__qtouchpan;if(void 0!==n){c(n),document.documentElement.style.cursor="",document.body.classList.remove("swipeout-no-pointer-events"),document.body.classList.remove("swipeout-non-selectable");const r=!0===e.modifiers.mouse,l=!0!==e.modifiers.mouseMightPrevent&&!0!==e.modifiers.mousePrevent,d=void 0===o.passive||{passive:l,capture:!0},f=!0!==e.modifiers.mightPrevent&&!0!==e.modifiers.prevent?o.passive:null;!0===r&&(t.removeEventListener("mousedown",n.mouseStart,d),document.removeEventListener("mousemove",n.move,d),document.removeEventListener("mouseup",n.mouseEnd,d)),t.removeEventListener("touchstart",n.start,f),t.removeEventListener("touchmove",n.move,f),t.removeEventListener("touchcancel",n.end,f),t.removeEventListener("touchend",n.end,f),delete t[t.__qtouchpan_old?"__qtouchpan_old":"__qtouchpan"]}}}},props:{threshold:{type:Number,default:45},revealed:{type:[String,Boolean]},disabled:{type:Boolean,default:!1},passiveListeners:{type:Boolean,default:!1}},watch:{revealed(t){this.innerRevealed!==t&&this._reveal(t,!0)}},data(){return{innerRevealed:this.revealed||!1}},methods:{closeActions(){this.close()},close(){this._isActive||this._reveal(!1,!0)},revealLeft(){!this._isActive&&this.$refs.left&&this._reveal("left",!0)},revealRight(){!this._isActive&&this.$refs.right&&this._reveal("right",!0)},_distanceSwiped(){const t=this.$refs.content.getBoundingClientRect(),e=this.$el.getBoundingClientRect();return t.left-e.left-this.$el.clientLeft},_onPan(t){return this.disabled?null:t.isFirst?this._startListener(t):this._isActive?t.isFinal?this._stopListener(t):this._swipeListener(t):null},_startListener({distance:t}){this.$el.classList.add("swipeout--no-transition"),t.y<=5&&(this._leftActionsWidth=this.$refs.left?this.$refs.left.clientWidth:0,this._rightActionsWidth=this.$refs.right?this.$refs.right.clientWidth:0,this._startLeft=this._distanceSwiped(),this._isActive=!0,this.$emit("active",!0),clearTimeout(this._timer))},_swipeListener({offset:t}){const e=t.x+this._startLeft;return!this.$scopedSlots.left&&e>0||!this.$scopedSlots.right&&e<0?this._animateSlide(0):this._animateSlide(t.x+this._startLeft)},_stopListener({offset:t,distance:e}){this.$el.classList.remove("swipeout--no-transition"),this._isActive=!1,this.$emit("active",!1);const n=this._startLeft+t.x;return 0===this._startLeft&&Math.abs(n)<=this.threshold||e.x>=this.threshold&&(this._startLeft>0&&e.x<this._leftActionsWidth||this._startLeft<0&&e.x<this._rightActionsWidth)?this._reveal(!1):this._reveal(n>0?"left":"right")},_reveal(t,e){var a,b;if(!this._isActive||(a=this.innerRevealed,b=t,(a||b)&&a!==b))return t&&!this.$refs[t]&&(t=!1),this.innerRevealed=t,this.$emit("update:revealed",t),t?"left"===t&&this.$refs.left?(this._leftActionsWidth=e?_(this.$refs.left):this._leftActionsWidth,this._animateSlide(this._leftActionsWidth),this.$emit("revealed",{side:"left",close:this.closeActions}),void this.$emit("leftRevealed",{close:this.closeActions})):void("right"===t&&this.$refs.right&&(this._rightActionsWidth=e?_(this.$refs.right):this._rightActionsWidth,this._animateSlide(-this._rightActionsWidth),this.$emit("revealed",{side:"right",close:this.closeActions}),this.$emit("rightRevealed",{close:this.closeActions}))):(this._animateSlide(0),void this.$emit("closed"))},_shiftLeftActions(t){if(!this.$scopedSlots.left)return;t<0&&(t=0);const e=this.$refs.left,n=this._leftActionsWidth,progress=1-Math.min(t/n,1),o=Math.min(t,n),{children:r}=e,{length:l}=r;for(let i=0;i<l;i++){const t=r[i],e=n-t.offsetLeft-t.offsetWidth;t.style.transform=h(o+e*progress),l>1&&(t.style.zIndex=""+(l-i))}},_shiftRightActions(t){if(!this.$scopedSlots.right)return;t>0&&(t=0);const e=this.$refs.right,n=this._rightActionsWidth,progress=1+Math.max(t/n,-1),o=Math.max(t,-n),{children:r}=e;for(let i=0;i<r.length;i++){const t=r[i];t.style.transform=h(o-t.offsetLeft*progress)}},_animateSlide(t){cancelAnimationFrame(this._frame),this._frame=requestAnimationFrame((()=>{this.$refs.content.style.transform=h(t),this._shiftLeftActions(t),this._shiftRightActions(t)}))}},render(t){const content=[],{left:e,right:n,default:o}=this.$scopedSlots;return e&&content.push(t("div",{ref:"left",staticClass:"swipeout-left"},e({close:this.closeActions}))),n&&content.push(t("div",{ref:"right",staticClass:"swipeout-right"},n({close:this.closeActions}))),content.push(t("div",{ref:"content",staticClass:"swipeout-content",directives:this.disabled||!e&&!n?null:[{name:"touch-pan",value:this._onPan,modifiers:{horizontal:!0,mouse:!0,prevent:!this.passiveListeners,mousePrevent:!0}}]},o?o({revealLeft:this.revealLeft,revealRight:this.revealRight,disabled:this.disabled,close:this.closeActions,revealed:this.innerRevealed}):null)),t("div",{staticClass:"swipeout",class:{"swipeout--disabled":this.disabled}},content)},beforeDestroy(){clearTimeout(this._timer),cancelAnimationFrame(this._frame)}},m={name:"SwipeList",props:{items:{type:Array,required:!0},itemKey:{type:String},transitionKey:{type:String},threshold:{type:Number,default:45},revealed:{type:Object},disabled:{type:Boolean,default:!1},itemDisabled:{type:Function,default:()=>!1},passiveListeners:{type:Boolean,default:!1}},data(){return{innerRevealed:this.revealed||{},rev:this.items.map((()=>null))}},watch:{revealed(t){this.innerRevealed=t},items(){this._emitRevealed({})}},methods:{revealRight(t){this.$refs.items[t]&&this.$refs.items[t].revealRight()},revealLeft(t){this.$refs.items[t]&&this.$refs.items[t].revealLeft()},close(t){if(this.$refs.items){if(void 0===t)return this.$refs.items.forEach((i=>i.close()));if(this.$refs.items[t])return this.$refs.items[t].close()}},isRevealed(t){return this.innerRevealed[t]||!1},closeActions(t){this.close(t)},_onReveal(t,e,n){this.$emit("revealed",{index:e,item:t,side:n.side,close:n.close}),this._emitRevealed({...this.innerRevealed,[e]:n.side})},_onClose(t,e){this.$emit("closed",{index:e,item:t});const{[e]:n,...o}=this.innerRevealed;this._emitRevealed(o)},_getItemKey(t,e){return void 0!==(this.itemKey||this.transitionKey)?t[this.itemKey||this.transitionKey]:e},_emitRevealed(t){void 0===this.revealed?this.innerRevealed=t:this.$emit("update:revealed",t)},__renderItem(t,e,n){const{left:o,right:r,default:l}=this.$scopedSlots,c={};return o&&(c.left=({close:t})=>o({item:e,close:t,index:n})),r&&(c.right=({close:t})=>r({item:e,close:t,index:n})),c.default=({close:o,disabled:r,revealLeft:c,revealRight:d,revealed:f})=>t("div",{ref:"itemsContent",on:{click:()=>this.$emit("swipeout:click",e)}},l({item:e,index:n,close:o,disabled:r,revealed:f,revealLeft:c,revealRight:d})),t(v,{key:n,ref:"items",refInFor:!0,staticClass:"swipeout-list-item",props:{disabled:this.disabled||this.itemDisabled(e),threshold:this.threshold,revealed:this.innerRevealed[n],passiveListeners:this.passiveListeners},on:{revealed:t=>this._onReveal(e,n,t),leftRevealed:t=>this.$emit("leftRevealed",{index:n,item:e,close:t.close}),rightRevealed:t=>this.$emit("rightRevealed",{index:n,item:e,close:t.close}),closed:t=>this._onClose(e,n,t),active:t=>this.$emit("active",t)},scopedSlots:c})}},render(t){return t("div",{staticClass:"swipeout-list",class:{"swipeout--disabled":this.disabled}},this.items.map(((e,n)=>this.__renderItem(t,e,n))))}},y=(n(248),{components:{SwipeList:m},data:function(){return{coins:[{id:0,logo:"swapex.png",shortName:"SWX",shortAmount:0,fullName:"Swapex",fullAmount:0,rate:124,ratePercent:14.2},{id:1,logo:"btc.png",shortName:"BTC",shortAmount:0,fullName:"Bitcoin",fullAmount:0,rate:54284.73,ratePercent:1.7},{id:2,logo:"eth.png",shortName:"ETH",shortAmount:0,fullName:"Ethereum",fullAmount:0,rate:1793.28,ratePercent:-8.4},{id:3,logo:"xmr.png",shortName:"XMR",shortAmount:0,fullName:"Monero",fullAmount:0,rate:212.01,ratePercent:.24},{id:4,logo:"ltc.png",shortName:"LTC",shortAmount:0,fullName:"Litecoin",fullAmount:0,rate:202.19,ratePercent:-.9},{id:5,logo:"usdt.png",shortName:"USDT",shortAmount:0,fullName:"Tether OMNI",fullAmount:0,rate:1.01,ratePercent:.17}]}},methods:{removeCoin:function(t){this.coins=this.coins.filter((function(i){return i!==t}))},receiveCoin:function(t){console.log(t,"receive coin")},sendCoin:function(t){console.log(t,"send coin")},clickItem:function(t){console.log(t,"click item")}}}),w=(n(250),n(29)),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"index"},[o("LayoutHeader"),o("LayoutSidebar"),o("div",{staticClass:"index__content"},[o("CardProfile"),o("SwipeList",{attrs:{items:t.coins,"item-key":"id"},on:{"swipeout:click":t.clickItem},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.item;return[o("CardCoin",{attrs:{logo:e.logo,shortName:e.shortName,shortAmount:e.shortAmount,fullName:e.fullName,fullAmount:e.fullAmount,rate:e.rate,ratePercent:e.ratePercent}})]}},{key:"left",fn:function(e){var r=e.item;return[o("div",{staticClass:"swipeout-action",on:{click:function(e){return t.receiveCoin(r)}}},[o("img",{staticClass:"swipeout-action__img",attrs:{src:n(217)}})]),o("div",{staticClass:"swipeout-action",on:{click:function(e){return t.sendCoin(r)}}},[o("img",{staticClass:"swipeout-action__img",attrs:{src:n(216)}})])]}},{key:"right",fn:function(e){var n=e.item;return[o("div",{staticClass:"swipeout-action",on:{click:function(e){return t.removeCoin(n)}}},[o("i",{staticClass:"fas fa-minus"})])]}}])})],1),o("LayoutNav")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutHeader:n(240).default,LayoutSidebar:n(241).default,CardProfile:n(242).default,CardCoin:n(243).default,LayoutNav:n(244).default})}}]);