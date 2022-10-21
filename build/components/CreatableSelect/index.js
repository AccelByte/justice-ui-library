import{jsx as t}from"react/jsx-runtime";import{s as e}from"../../style-inject.es-1f59c1d0.js";import{DropdownIndicator as o}from"../Select/reactSelectComponents.js";import{_ as s,b as a,d as l,e as i,j as r,k as n,l as c}from"../../index-4bd03571.esm-7ee3114b.js";import{m as d,_ as p,S as u,g as f,b as m}from"../../stateManager-845a3300.esm-0fca7fe6.js";import _,{Component as b}from"react";import"../../index-5032cf6a.js";import{n as k}from"../../createSelect-74d50d4f.js";import"../../unitless.esm-d94354fa.js";import"../../index-dd80248b.js";import"../../memoize-one.esm-8827f1ac.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../objectWithoutProperties-90b89624.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../index-72b69d08.js";import"../../_commonjsHelpers-6e998e78.js";import"../../core.esm-a8712816.js";import"../../inheritsLoose-6fd5c6e3.js";var v,y,g,h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,s=String(t).toLowerCase(),a=String(o.getOptionValue(e)).toLowerCase(),l=String(o.getOptionLabel(e)).toLowerCase();return a===s||l===s},w=s({allowCreateWhileLoading:!1,createOptionPosition:"last"},{formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,e,o,s){return!(!t||e.some((function(e){return h(t,e,s)}))||o.some((function(e){return h(t,e,s)})))},getNewOptionData:function(t,e){return{label:e,value:t,__isNew__:!0}},getOptionValue:f,getOptionLabel:m}),j=(v=u,g=y=function(t){a(o,b);var e=l(o);function o(t){var s;i(this,o),(s=e.call(this,t)).select=void 0,s.onChange=function(t,e){var o=s.props,a=o.getNewOptionData,l=o.inputValue,i=o.isMulti,n=o.onChange,c=o.onCreateOption,d=o.value,u=o.name;if("select-option"!==e.action)return n(t,e);var f=s.state.newOption,m=Array.isArray(t)?t:[t];if(m[m.length-1]!==f)n(t,e);else if(c)c(l);else{var _=a(l,l),b={action:"create-option",name:u,option:_};n(i?[].concat(p(r(d)),[_]):_,b)}};var a=t.options||[];return s.state={newOption:void 0,options:a},s}return n(o,[{key:"focus",value:function(){this.select.focus()}},{key:"blur",value:function(){this.select.blur()}},{key:"render",value:function(){var t=this,e=this.state.options;return _.createElement(v,c({},this.props,{ref:function(e){t.select=e},options:e,onChange:this.onChange}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){var o=t.allowCreateWhileLoading,s=t.createOptionPosition,a=t.formatCreateLabel,l=t.getNewOptionData,i=t.inputValue,n=t.isLoading,c=t.isValidNewOption,d=t.value,u=t.getOptionValue,f=t.getOptionLabel,m=t.options||[],_=e.newOption;return{newOption:_=c(i,r(d),m,{getOptionValue:u,getOptionLabel:f})?l(i,a(i)):void 0,options:!o&&n||!_?m:"first"===s?[_].concat(p(m)):[].concat(p(m),[_])}}}]),o}(),y.defaultProps=w,g),x=k(d(j));e('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.styled-atlaskit-select div[class*=-control],.styled-atlaskit-select__control{background-color:transparent;border-color:#b8bfcd;border-radius:4px;border-width:1px}.styled-atlaskit-select div[class*=-control]:hover,.styled-atlaskit-select__control:hover{background-color:#f5f6f8;border-color:#687792}.styled-atlaskit-select div[class*=-control].styled-atlaskit-select__control--is-focused,.styled-atlaskit-select__control.styled-atlaskit-select__control--is-focused{border:2px solid #0b6cff}.styled-atlaskit-select div[class*=-control].styled-atlaskit-select__control--is-disabled,.styled-atlaskit-select__control.styled-atlaskit-select__control--is-disabled{background-color:#f5f6f8}.styled-atlaskit-select [class$=-menu]>div::-webkit-scrollbar{width:6px}.styled-atlaskit-select [class$=-menu]>div::-webkit-scrollbar-track{border-radius:10px}.styled-atlaskit-select [class$=-menu]>div::-webkit-scrollbar-thumb{background:#e1e4e9;border-radius:10px}.styled-atlaskit-select__menu-list:hover{background-color:#fff}.styled-atlaskit-select__option{color:#232831;height:36px;line-height:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.styled-atlaskit-select__option.styled-atlaskit-select__option--is-focused{background-color:#f5f6f8;box-shadow:none}.styled-atlaskit-select__option.styled-atlaskit-select__option--is-selected{background-color:#0b6cff;color:#fff}.styled-atlaskit-select div.styled-atlaskit-select__option,.styled-atlaskit-select__placeholder,.styled-atlaskit-select__value-container div{font-family:Roboto,sans-serif;font-size:16px}.styled-atlaskit-select__single-value{line-height:20px!important}.styled-atlaskit-select__placeholder{color:#b8bfcd!important}.styled-atlaskit-select__multi-value{background-color:#0b6cff!important}.styled-atlaskit-select__multi-value__label{color:#fff!important}.styled-atlaskit-select__multi-value__remove:hover{background-color:transparent!important}.styled-atlaskit-select__multi-value__remove span{--icon-primary-color:transparent;--icon-secondary-color:#fff!important}.styled-atlaskit-select__multi-value-unremovable{background-color:#687792!important;border-radius:2px;padding-right:6px}.styled-atlaskit-select__multi-value-unremovable+.styled-atlaskit-select__multi-value__remove{display:none}.styled-atlaskit-select__indicators .icon-chevron-down{color:#687792;margin-right:8px}');const O=({isMulti:e=!1,onChange:s,...a})=>t(x,{className:"styled-atlaskit-select",classNamePrefix:"styled-atlaskit-select",components:{DropdownIndicator:o},isMulti:e,onChange:s?t=>s(t):void 0,...a});export{O as CreatableSelect};
