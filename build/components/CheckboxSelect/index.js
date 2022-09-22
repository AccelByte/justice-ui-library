import{jsxs as e,jsx as t}from"react/jsx-runtime";import{c as s}from"../../index-6ea95111.js";import{s as o}from"../../style-inject.es-1f59c1d0.js";import{_ as r}from"../../objectWithoutPropertiesLoose-982ef579.js";import{_ as c,a}from"../../setPrototypeOf-c6ba02e6.js";import{_ as i}from"../../objectWithoutProperties-90b89624.js";import n,{Component as l}from"react";import{A as d}from"../../Select-6162430e.js";import{_ as u}from"../../slicedToArray-a622878d.js";import{c as p,e as b,d as f,b as h,_ as k}from"../../inherits-d3723d19.js";import{j as v}from"../../core.esm-a8712816.js";import{C as m,T as g,D as y,r as x,B as _,a as j,N as O,b as w,c as S,d as P,e as D,f as M,g as A,h as C,i as I,j as R,k as N,l as L,m as z}from"../../createSelect-6c6f682a.js";import"../../react-select.esm-463d764a.js";import"../../stateManager-845a3300.esm-64c877f4.js";import"../../memoize-one.esm-8827f1ac.js";import"../../unitless.esm-d94354fa.js";import"../../index-3f17275b.js";import"../../index-dd80248b.js";import"../../get-ae46b391.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../context-f854a00e.js";import"../../use-memo-one.esm-19c0a4a5.js";import"../../nonIterableRest-e93b6547.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../index-72b69d08.js";import"../../_commonjsHelpers-6e998e78.js";function E(e,t){if("string"==typeof e)return s=e,o=t,function(e){var t=B(e);if(e&&e[s]&&o){var r=o[e[s]];if(r&&r[t.mode]){var c=r[t.mode];if(c)return c}}return""};var s,o,r=e;return function(e){var t=B(e);if(t.mode in r){var s=r[t.mode];if(s)return s}return""}}function B(e){if(e&&e.theme){if(m in e.theme)return e.theme[m];if("mode"in e.theme&&g.includes(e.theme.mode))return e.theme}return{mode:y}}var F={};Object.defineProperty(F,"__esModule",{value:!0});var T,Q=F.default=void 0,U=(T=n)&&T.__esModule?T:{default:T},W=x;const $=e=>U.default.createElement(W.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill-rule="evenodd"><rect fill="currentColor" x="6" y="6" width="12" height="12" rx="2"/><path d="M9.707 11.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 12.586l-1.293-1.293z" fill="inherit"/></g></svg>'},e));$.displayName="CheckboxIcon";var G=$;Q=F.default=G;var H=["isActive","isDisabled","isFocused","isSelected"],V=["isActive","isDisabled","isSelected"],X=["isActive","isDisabled","isFocused","isSelected"],q=["getStyles","Icon","children","innerProps","innerRef"];function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,o=b(e);if(t){var r=b(this).constructor;s=Reflect.construct(o,arguments,r)}else s=o.apply(this,arguments);return f(this,s)}}function K(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function Y(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?K(Object(s),!0).forEach((function(t){c(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):K(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var Z=E({light:"var(--ds-background-neutral, ".concat(D,")"),dark:"var(--ds-background-neutral, ".concat(w,")")}),ee=E({light:"transparent",dark:"transparent"}),te=function(e){var t=e.isActive,s=e.isDisabled,o=e.isFocused,r=e.isSelected,c=i(e,H),a=Z;return s&&r?a=E({light:"var(--ds-background-disabled, ".concat(_,")"),dark:"var(--ds-background-disabled, ".concat(j,")")}):s?a=E({light:"var(--ds-background-disabled, ".concat(O,")"),dark:"var(--ds-background-disabled, ".concat(w,")")}):r&&t?a=E({light:"var(--ds-background-selected-bold-pressed, ".concat(_,")"),dark:"var(--ds-background-selected-bold-pressed, ".concat(S,")")}):t?a=E({light:"var(--ds-background-selected-pressed, ".concat(_,")"),dark:"var(--ds-background-selected-pressed, ".concat(S,")")}):o&&r?a=E({light:"var(--ds-background-selected-bold-hovered, ".concat(P,")"),dark:"var(--ds-background-selected-bold-hovered, ".concat(_,")")}):o?a=E({light:"var(--ds-surface, ".concat(D,")"),dark:"var(--ds-surface, ".concat(M,")")}):r&&(a=E({light:"var(--ds-background-selected-bold, ".concat(A,")"),dark:"var(--ds-background-selected-bold, ".concat(C,")")})),a(c)},se=function(e){var t=e.isActive,s=e.isDisabled,o=e.isSelected,r=i(e,V),c=E({light:"var(--ds-surface, ".concat(D,")"),dark:"var(--ds-surface, ".concat(w,")")});return s&&o?c=E({light:"var(--ds-text-disabled, ".concat(I,")"),dark:"var(--ds-text-disabled, ".concat(w,")")}):t&&o&&!s?c=E({light:"var(--ds-surface, ".concat(A,")"),dark:"var(--ds-surface, ".concat(w,")")}):o||(c=ee),c(r)},oe=function(e){p(s,l);var t=J(s);function s(){var e;h(this,s);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),c(a(e),"state",{isActive:!1}),c(a(e),"onMouseDown",(function(){return e.setState({isActive:!0})})),c(a(e),"onMouseUp",(function(){return e.setState({isActive:!1})})),c(a(e),"onMouseLeave",(function(){return e.setState({isActive:!1})})),e}return k(s,[{key:"render",value:function(){var e,t,s,o,c,a=this.props,n=a.getStyles,l=a.Icon,d=a.children,p=a.innerProps,b=a.innerRef,f=i(a,q),h=Y(Y({},p),{},{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave}),k=function(e){var t=e.cx,s=e.className,o=e.getStyles,r=e.isDisabled,c=e.isFocused,a=e.isSelected,i={alignItems:"center",backgroundColor:c?"var(--ds-background-neutral-subtle-hovered, ".concat(N,")"):"transparent",color:r?"var(--ds-text-disabled, inherit)":"inherit",display:"flex ",paddingBottom:4,paddingLeft:"".concat(2*L(),"px"),paddingTop:4,boxShadow:c?"inset 2px 0px 0px ".concat("var(--ds-border-focused, ".concat(A,")"),";"):"",":active":{backgroundColor:"var(--ds-background-neutral-subtle-pressed, ".concat(z,")")},"@media screen and (-ms-high-contrast: active)":{borderLeft:c?"2px solid transparent":""}};return[Y(Y({},o("option",e)),i),t({option:!0,"option--is-disabled":r,"option--is-focused":c,"option--is-selected":a},s)]}(Y({getStyles:n},f)),m=u(k,2),g=m[0],y=m[1];return v("div",r({css:g,className:y,ref:b},h),v("div",{css:{alignItems:"center",display:"flex ",flexShrink:0,paddingRight:"4px","& svg rect, & svg circle:first-of-type":{stroke:(e=Y(Y({},this.props),this.state),t=e.isActive,s=e.isDisabled,o=e.isFocused,c=e.isSelected,i(e,X),s&&c?"var(--ds-background-disabled, ".concat(A,")"):s?"var(--ds-background-disabled, ".concat(R,")"):c&&t?"var(--ds-background-selected-bold-pressed, ".concat(A,")"):t?"var(--ds-background-selected-bold, ".concat(A,")"):o&&c?"var(--ds-background-selected-bold-hovered, ".concat(A,")"):o?"var(--ds-border, ".concat(R,")"):c?"var(--ds-background-selected-bold, ".concat(A,")"):"var(--ds-border, ".concat(R,")")),strokeWidth:"2px",strokeLinejoin:"round"}}},l?v(l,{label:"",primaryColor:te(Y(Y({},this.props),this.state)),secondaryColor:se(Y(Y({},this.props),this.state))}):null),v("div",{css:{textOverflow:"ellipsis",overflowX:"hidden",flexGrow:1,whiteSpace:"nowrap"}},d))}}]),s}(),re=function(e){return v(oe,r({Icon:Q},e))},ce=["components"];function ae(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function ie(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(s),!0).forEach((function(t){c(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):ae(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var ne=function(e){var t=e.components,s=i(e,ce),o=ie(ie({},t),{},{Option:re});return n.createElement(d,r({closeMenuOnSelect:!1,hideSelectedOptions:!1,isMulti:!0,components:o},s))},le="checkboxSelectContainer___Qz2Ii";o('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.checkboxSelectContainer___Qz2Ii{font-family:Roboto,sans-serif;position:relative}.checkboxSelectContainer___Qz2Ii .value-replacement{left:12px;pointer-events:none;position:absolute;top:10px}.styled-atlaskit-checkbox-select div[class*=-control],.styled-atlaskit-checkbox-select__control{background-color:transparent;border:1px solid #b8bfcd;border-radius:4px}.styled-atlaskit-checkbox-select div[class*=-control]:hover,.styled-atlaskit-checkbox-select__control:hover{background-color:#f5f6f8;border-color:#687792}.styled-atlaskit-checkbox-select div[class*=-control].styled-atlaskit-checkbox-select__control--is-focused,.styled-atlaskit-checkbox-select__control.styled-atlaskit-checkbox-select__control--is-focused{border:2px solid #0b6cff}.styled-atlaskit-checkbox-select [class$=-menu]>div::-webkit-scrollbar{width:6px}.styled-atlaskit-checkbox-select [class$=-menu]>div::-webkit-scrollbar-track{border-radius:10px}.styled-atlaskit-checkbox-select [class$=-menu]>div::-webkit-scrollbar-thumb{background:#e1e4e9;border-radius:10px}.styled-atlaskit-checkbox-select__option{color:#232831;height:36px;line-height:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.styled-atlaskit-checkbox-select__option.styled-atlaskit-checkbox-select__option--is-focused{background-color:#f5f6f8;box-shadow:none}.styled-atlaskit-checkbox-select div.styled-atlaskit-checkbox-select__option,.styled-atlaskit-checkbox-select__placeholder,.styled-atlaskit-checkbox-select__value-container div{font-family:Roboto,sans-serif;font-size:14px}.styled-atlaskit-checkbox-select__placeholder{color:#b8bfcd!important}.styled-atlaskit-checkbox-select .styled-atlaskit-checkbox-select__multi-value{background-color:#0b6cff}.styled-atlaskit-checkbox-select .styled-atlaskit-checkbox-select__multi-value__label{color:#fff}.styled-atlaskit-checkbox-select .styled-atlaskit-checkbox-select__multi-value__remove{fill:#fff}.styled-atlaskit-checkbox-select .styled-atlaskit-checkbox-select__multi-value__remove:hover{background-color:#4c93ff}.styled-atlaskit-checkbox-select__menu-list span[role=presentation]{font-family:feather;font-size:16px;margin-right:8px;position:relative}.styled-atlaskit-checkbox-select__menu-list span[role=presentation]:before{color:#fff;content:"\\e92d";left:2px;position:absolute;top:2px}.styled-atlaskit-checkbox-select__menu-list span[role=presentation] svg{height:20px;width:20px}.styled-atlaskit-checkbox-select__menu-list span[role=presentation] svg rect{x:0;y:0;height:100%;width:100%}.styled-atlaskit-checkbox-select__menu-list span[role=presentation] svg path{display:none}.styled-atlaskit-checkbox-select__menu-list span[role=presentation]:hover{cursor:pointer}.styled-atlaskit-checkbox-select__indicators .icon-chevron-down{color:#687792;margin-right:8px}.styled-atlaskit-checkbox-select.value-hidden .styled-atlaskit-checkbox-select__multi-value,.styled-atlaskit-checkbox-select.value-hidden .styled-atlaskit-checkbox-select__placeholder{display:none}');const de=()=>t("i",{className:"icon-chevron-down"}),ue=({onChange:o,value:r,className:c,isValueHidden:a=!1,isClearable:i=!1,replacementText:n,...l})=>{const d=()=>t(ne,{className:s("styled-atlaskit-checkbox-select",c,{"value-hidden":a}),classNamePrefix:"styled-atlaskit-checkbox-select",components:{DropdownIndicator:de},onChange:o?e=>o(e):void 0,value:r,isClearable:i,isSearchable:!a,...l});return a?e("div",{className:le,children:[d(),t("span",{className:"value-replacement",children:n})]}):d()};export{ue as CheckboxSelect};
