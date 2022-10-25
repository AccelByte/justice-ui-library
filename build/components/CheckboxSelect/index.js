import{jsxs as e,jsx as t}from"react/jsx-runtime";import{c as s}from"../../index-6ea95111.js";import{DropdownIndicator as o}from"../Select/reactSelectComponents.js";import{s as r}from"../../style-inject.es-1f59c1d0.js";import{_ as c}from"../../objectWithoutPropertiesLoose-982ef579.js";import{_ as a,a as i}from"../../setPrototypeOf-c6ba02e6.js";import{_ as n}from"../../objectWithoutProperties-90b89624.js";import l,{Component as d}from"react";import{S as u}from"../../Select-695bcfd1.js";import{_ as p}from"../../slicedToArray-a622878d.js";import{c as b,e as f,d as h,b as k,_ as v}from"../../inherits-d3723d19.js";import{j as m}from"../../core.esm-a8712816.js";import{C as g,T as y,D as x,r as _,B as j,a as O,N as w,b as S,c as P,d as D,e as C,f as M,g as A,h as I,i as R,j as L,k as N,l as z,m as E}from"../../createSelect-ef7b8e23.js";import"../../index-4bd03571.esm-18f73ce7.js";import"../../unitless.esm-d94354fa.js";import"../../index-bffd2e22.js";import"../../index-dd80248b.js";import"../../react-select.esm-29861e31.js";import"../../stateManager-845a3300.esm-4b89d3f6.js";import"../../memoize-one.esm-8827f1ac.js";import"../../get-ae46b391.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../context-f854a00e.js";import"../../use-memo-one.esm-19c0a4a5.js";import"../../nonIterableRest-e93b6547.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../index-72b69d08.js";import"../../_commonjsHelpers-6e998e78.js";function B(e,t){if("string"==typeof e)return s=e,o=t,function(e){var t=F(e);if(e&&e[s]&&o){var r=o[e[s]];if(r&&r[t.mode]){var c=r[t.mode];if(c)return c}}return""};var s,o,r=e;return function(e){var t=F(e);if(t.mode in r){var s=r[t.mode];if(s)return s}return""}}function F(e){if(e&&e.theme){if(g in e.theme)return e.theme[g];if("mode"in e.theme&&y.includes(e.theme.mode))return e.theme}return{mode:x}}var T={};Object.defineProperty(T,"__esModule",{value:!0});var Q,U=T.default=void 0,W=(Q=l)&&Q.__esModule?Q:{default:Q},$=_;const G=e=>W.default.createElement($.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill-rule="evenodd"><rect fill="currentColor" x="6" y="6" width="12" height="12" rx="2"/><path d="M9.707 11.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 12.586l-1.293-1.293z" fill="inherit"/></g></svg>'},e));G.displayName="CheckboxIcon";var H=G;U=T.default=H;var V=["isActive","isDisabled","isFocused","isSelected"],X=["isActive","isDisabled","isSelected"],q=["isActive","isDisabled","isFocused","isSelected"],J=["getStyles","Icon","children","innerProps","innerRef"];function K(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,o=f(e);if(t){var r=f(this).constructor;s=Reflect.construct(o,arguments,r)}else s=o.apply(this,arguments);return h(this,s)}}function Y(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function Z(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):Y(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var ee=B({light:"var(--ds-background-neutral, ".concat(C,")"),dark:"var(--ds-background-neutral, ".concat(S,")")}),te=B({light:"transparent",dark:"transparent"}),se=function(e){var t=e.isActive,s=e.isDisabled,o=e.isFocused,r=e.isSelected,c=n(e,V),a=ee;return s&&r?a=B({light:"var(--ds-background-disabled, ".concat(j,")"),dark:"var(--ds-background-disabled, ".concat(O,")")}):s?a=B({light:"var(--ds-background-disabled, ".concat(w,")"),dark:"var(--ds-background-disabled, ".concat(S,")")}):r&&t?a=B({light:"var(--ds-background-selected-bold-pressed, ".concat(j,")"),dark:"var(--ds-background-selected-bold-pressed, ".concat(P,")")}):t?a=B({light:"var(--ds-background-selected-pressed, ".concat(j,")"),dark:"var(--ds-background-selected-pressed, ".concat(P,")")}):o&&r?a=B({light:"var(--ds-background-selected-bold-hovered, ".concat(D,")"),dark:"var(--ds-background-selected-bold-hovered, ".concat(j,")")}):o?a=B({light:"var(--ds-surface, ".concat(C,")"),dark:"var(--ds-surface, ".concat(M,")")}):r&&(a=B({light:"var(--ds-background-selected-bold, ".concat(A,")"),dark:"var(--ds-background-selected-bold, ".concat(I,")")})),a(c)},oe=function(e){var t=e.isActive,s=e.isDisabled,o=e.isSelected,r=n(e,X),c=B({light:"var(--ds-surface, ".concat(C,")"),dark:"var(--ds-surface, ".concat(S,")")});return s&&o?c=B({light:"var(--ds-text-disabled, ".concat(R,")"),dark:"var(--ds-text-disabled, ".concat(S,")")}):t&&o&&!s?c=B({light:"var(--ds-surface, ".concat(A,")"),dark:"var(--ds-surface, ".concat(S,")")}):o||(c=te),c(r)},re=function(e){b(s,d);var t=K(s);function s(){var e;k(this,s);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r)),a(i(e),"state",{isActive:!1}),a(i(e),"onMouseDown",(function(){return e.setState({isActive:!0})})),a(i(e),"onMouseUp",(function(){return e.setState({isActive:!1})})),a(i(e),"onMouseLeave",(function(){return e.setState({isActive:!1})})),e}return v(s,[{key:"render",value:function(){var e,t,s,o,r,a=this.props,i=a.getStyles,l=a.Icon,d=a.children,u=a.innerProps,b=a.innerRef,f=n(a,J),h=Z(Z({},u),{},{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave}),k=function(e){var t=e.cx,s=e.className,o=e.getStyles,r=e.isDisabled,c=e.isFocused,a=e.isSelected,i={alignItems:"center",backgroundColor:c?"var(--ds-background-neutral-subtle-hovered, ".concat(N,")"):"transparent",color:r?"var(--ds-text-disabled, inherit)":"inherit",display:"flex ",paddingBottom:4,paddingLeft:"".concat(2*z(),"px"),paddingTop:4,boxShadow:c?"inset 2px 0px 0px ".concat("var(--ds-border-focused, ".concat(A,")"),";"):"",":active":{backgroundColor:"var(--ds-background-neutral-subtle-pressed, ".concat(E,")")},"@media screen and (-ms-high-contrast: active)":{borderLeft:c?"2px solid transparent":""}};return[Z(Z({},o("option",e)),i),t({option:!0,"option--is-disabled":r,"option--is-focused":c,"option--is-selected":a},s)]}(Z({getStyles:i},f)),v=p(k,2),g=v[0],y=v[1];return m("div",c({css:g,className:y,ref:b},h),m("div",{css:{alignItems:"center",display:"flex ",flexShrink:0,paddingRight:"4px","& svg rect, & svg circle:first-of-type":{stroke:(e=Z(Z({},this.props),this.state),t=e.isActive,s=e.isDisabled,o=e.isFocused,r=e.isSelected,n(e,q),s&&r?"var(--ds-background-disabled, ".concat(A,")"):s?"var(--ds-background-disabled, ".concat(L,")"):r&&t?"var(--ds-background-selected-bold-pressed, ".concat(A,")"):t?"var(--ds-background-selected-bold, ".concat(A,")"):o&&r?"var(--ds-background-selected-bold-hovered, ".concat(A,")"):o?"var(--ds-border, ".concat(L,")"):r?"var(--ds-background-selected-bold, ".concat(A,")"):"var(--ds-border, ".concat(L,")")),strokeWidth:"2px",strokeLinejoin:"round"}}},l?m(l,{label:"",primaryColor:se(Z(Z({},this.props),this.state)),secondaryColor:oe(Z(Z({},this.props),this.state))}):null),m("div",{css:{textOverflow:"ellipsis",overflowX:"hidden",flexGrow:1,whiteSpace:"nowrap"}},d))}}]),s}(),ce=function(e){return m(re,c({Icon:U},e))},ae=["components"];function ie(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function ne(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):ie(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var le=function(e){var t=e.components,s=n(e,ae),o=ne(ne({},t),{},{Option:ce});return l.createElement(u,c({closeMenuOnSelect:!1,hideSelectedOptions:!1,isMulti:!0,components:o},s))},de="checkboxSelectContainer___Qz2Ii";r('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.checkboxSelectContainer___Qz2Ii{font-family:Roboto,sans-serif;position:relative}.checkboxSelectContainer___Qz2Ii .value-replacement{left:12px;pointer-events:none;position:absolute;top:10px}.styled-atlaskit-checkbox-select div[class*=-control],.styled-atlaskit-checkbox-select__control{background-color:transparent;border:1px solid #b8bfcd;border-radius:4px}.styled-atlaskit-checkbox-select div[class*=-control]:hover,.styled-atlaskit-checkbox-select__control:hover{background-color:#f5f6f8;border-color:#687792}.styled-atlaskit-checkbox-select div[class*=-control].styled-atlaskit-checkbox-select__control--is-focused,.styled-atlaskit-checkbox-select__control.styled-atlaskit-checkbox-select__control--is-focused{border:2px solid #0b6cff}.styled-atlaskit-checkbox-select [class$=-menu]>div::-webkit-scrollbar{width:6px}.styled-atlaskit-checkbox-select [class$=-menu]>div::-webkit-scrollbar-track{border-radius:10px}.styled-atlaskit-checkbox-select [class$=-menu]>div::-webkit-scrollbar-thumb{background:#e1e4e9;border-radius:10px}.styled-atlaskit-checkbox-select__option{color:#232831;height:36px;line-height:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.styled-atlaskit-checkbox-select__option.styled-atlaskit-checkbox-select__option--is-focused{background-color:#f5f6f8;box-shadow:none}.styled-atlaskit-checkbox-select div.styled-atlaskit-checkbox-select__option,.styled-atlaskit-checkbox-select__placeholder,.styled-atlaskit-checkbox-select__value-container div{font-family:Roboto,sans-serif;font-size:14px}.styled-atlaskit-checkbox-select__placeholder{color:#b8bfcd!important}.styled-atlaskit-checkbox-select .styled-atlaskit-checkbox-select__multi-value{background-color:#0b6cff}.styled-atlaskit-checkbox-select .styled-atlaskit-checkbox-select__multi-value__label{color:#fff}.styled-atlaskit-checkbox-select .styled-atlaskit-checkbox-select__multi-value__remove{fill:#fff}.styled-atlaskit-checkbox-select .styled-atlaskit-checkbox-select__multi-value__remove:hover{background-color:#4c93ff}.styled-atlaskit-checkbox-select__menu-list span[role=presentation]{font-family:feather;font-size:16px;margin-right:8px;position:relative}.styled-atlaskit-checkbox-select__menu-list span[role=presentation]:before{color:#fff;content:"\\e92d";left:2px;position:absolute;top:2px}.styled-atlaskit-checkbox-select__menu-list span[role=presentation] svg{height:20px;width:20px}.styled-atlaskit-checkbox-select__menu-list span[role=presentation] svg rect{x:0;y:0;height:100%;width:100%}.styled-atlaskit-checkbox-select__menu-list span[role=presentation] svg path{display:none}.styled-atlaskit-checkbox-select__menu-list span[role=presentation]:hover{cursor:pointer}.styled-atlaskit-checkbox-select__indicators .icon-chevron-down{color:#687792;margin-right:8px}.styled-atlaskit-checkbox-select.value-hidden .styled-atlaskit-checkbox-select__multi-value,.styled-atlaskit-checkbox-select.value-hidden .styled-atlaskit-checkbox-select__placeholder{display:none}');const ue=({onChange:r,value:c,className:a,isValueHidden:i=!1,isClearable:n=!1,replacementText:l,...d})=>{const u=()=>t(le,{className:s("styled-atlaskit-checkbox-select",a,{"value-hidden":i}),classNamePrefix:"styled-atlaskit-checkbox-select",components:{DropdownIndicator:o},onChange:r?e=>r(e):void 0,value:c,isClearable:n,isSearchable:!i,...d});return i?e("div",{className:de,children:[u(),t("span",{className:"value-replacement",children:l})]}):u()};export{ue as CheckboxSelect};
