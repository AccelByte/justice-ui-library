import{S as t}from"./react-select.esm-f0e5f793.js";import{n as e}from"./createSelect-dfa42dfe.js";import{_ as n}from"./objectWithoutPropertiesLoose-982ef579.js";import{_ as r,a}from"./setPrototypeOf-c6ba02e6.js";import{_ as o}from"./objectWithoutProperties-90b89624.js";import c,{useContext as i,useRef as s,useEffect as u,Component as l,useCallback as f,useMemo as p,forwardRef as y}from"react";import{_ as v,a as d}from"./get-ae46b391.js";import{_ as h,a as O,b,c as m,e as g,d as j}from"./inherits-d3723d19.js";import{P as A}from"./index-3f17275b.js";import{A as P}from"./context-f854a00e.js";import{u as E}from"./use-memo-one.esm-19c0a4a5.js";function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w=function(){function t(e){var n=this;b(this,t),r(this,"_isAnalyticsEvent",!0),r(this,"clone",(function(){return new t({payload:x({},n.payload)})})),this.payload=e.payload}return h(t,[{key:"update",value:function(t){return"function"==typeof t&&(this.payload=t(this.payload)),"object"===O(t)&&(this.payload=x(x({},this.payload),t)),this}}]),t}();function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=g(t);if(e){var a=g(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j(this,n)}}var N=function(t){m(n,w);var e=C(n);function n(t){var o;return b(this,n),o=e.call(this,t),r(a(o),"_isUIAnalyticsEvent",!0),r(a(o),"clone",(function(){return o.hasFired?null:new n({context:v(o.context),handlers:v(o.handlers),payload:JSON.parse(JSON.stringify(o.payload))})})),r(a(o),"fire",(function(t){o.hasFired||(o.handlers.forEach((function(e){return e(a(o),t)})),o.hasFired=!0)})),o.context=t.context||[],o.handlers=t.handlers||[],o.hasFired=!1,o}return h(n,[{key:"update",value:function(t){return this.hasFired?this:d(g(n.prototype),"update",this).call(this,t)}}]),n}(),D=function(){return i(P)};function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=g(t);if(e){var a=g(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j(this,n)}}var R={getAtlaskitAnalyticsContext:A.func,getAtlaskitAnalyticsEventHandlers:A.func},_=function(){return[]},H=function(t){m(n,l);var e=S(n);function n(t){var o;return b(this,n),o=e.call(this,t),r(a(o),"getChildContext",(function(){return{getAtlaskitAnalyticsContext:o.getAnalyticsContext}})),r(a(o),"getAnalyticsContext",(function(){var t=o.props.data,e=o.context.getAtlaskitAnalyticsContext;return[].concat(v((void 0===e?_:e)()),[t])})),r(a(o),"getAnalyticsEventHandlers",(function(){var t=o.context.getAtlaskitAnalyticsEventHandlers;return(void 0===t?_:t)()})),o.contextValue={getAtlaskitAnalyticsContext:o.getAnalyticsContext,getAtlaskitAnalyticsEventHandlers:o.getAnalyticsEventHandlers},o}return h(n,[{key:"render",value:function(){var t=this.props.children;return c.createElement(P.Provider,{value:this.contextValue},t)}}]),n}();r(H,"contextTypes",R),r(H,"childContextTypes",R);var T=H,V=function(t){var e=t.data,n=t.children,r=function(t){var e=s(t);return u((function(){e.current=t}),[t]),e}(e),a=D(),o=f((function(){return[].concat(v(a.getAtlaskitAnalyticsContext()),[r.current])}),[a,r]),i=p((function(){return{getAtlaskitAnalyticsContext:o,getAtlaskitAnalyticsEventHandlers:a.getAtlaskitAnalyticsEventHandlers}}),[a,o]);return c.createElement(P.Provider,{value:i},n)},F="undefined"!=typeof process&&process.env.ANALYTICS_NEXT_MODERN_CONTEXT?V:T;function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var I=function(t){return function(e){var r=y((function(r,a){var i=r.analyticsContext,s=o(r,["analyticsContext"]),u=p((function(){return W(W({},t),i)}),[i]);return c.createElement(F,{data:u},c.createElement(e,n({},s,{ref:a})))}));return r.displayName="WithAnalyticsContext(".concat(e.displayName||e.name,")"),r}};function J(){var t=D();return{createAnalyticsEvent:E((function(e){return new N({context:t.getAtlaskitAnalyticsContext(),handlers:t.getAtlaskitAnalyticsEventHandlers(),payload:e})}),[t])}}function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function X(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function M(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=J(),a=n.createAnalyticsEvent,o=s({}),c=p((function(){var n=o.current;return Object.keys(n).filter((function(e){return!(e in t)})).forEach((function(t){return delete n[t]})),Object.keys(t).reduce((function(o,c){var i=t[c];if(!["object","function"].includes(O(i)))return o;var s=e[c];if(c in n&&n[c].eventCreator===i&&n[c].propValue===s)return X(X({},o),{},r({},c,n[c].wrappedCallback));var u=function(){var t="function"==typeof i?i(a,e):a(i);if(s&&"function"==typeof s){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];s.apply(void 0,r.concat([t]))}};return n[c]={eventCreator:i,wrappedCallback:u,propValue:s},X(X({},o),{},r({},c,u))}),{})}),[t,e,a,o]);return{patchedEventProps:c}}var U,Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(e){var r=y((function(r,a){var o=M(t,r).patchedEventProps,i=J().createAnalyticsEvent;return c.createElement(e,n({},r,o,{createAnalyticsEvent:i,ref:a}))}));return r.displayName="WithAnalyticsEvents(".concat(e.displayName||e.name,")"),r}},q=e(t),z=(U="atlaskit",function(t){return function(e){var n=e(t),r=n.clone();return r&&r.fire(U),n}}),G=I({componentName:"select",packageName:"@atlaskit/select",packageVersion:"15.2.13"})(Y({onChange:z({action:"changed",actionSubject:"option",attributes:{componentName:"select",packageName:"@atlaskit/select",packageVersion:"15.2.13"}})})(q));export{G as S};
