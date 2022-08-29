import{jsx as t}from"react/jsx-runtime";import{s as e}from"../../style-inject.es-1f59c1d0.js";import{_ as o,m as s,b as a,d as l,e as i,f as r,g as n,h as c,i as d,S as p,j as u,k as f}from"../../stateManager-845a3300.esm-05640828.js";import m,{Component as _}from"react";import"../../index-093ea0bc.js";import{n as b}from"../../createSelect-3d66330a.js";import"../../memoize-one.esm-8827f1ac.js";import"../../unitless.esm-d94354fa.js";import"../../index-dd80248b.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../objectWithoutProperties-90b89624.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../index-72b69d08.js";import"../../_commonjsHelpers-6e998e78.js";import"../../core.esm-a8712816.js";import"../../inheritsLoose-6fd5c6e3.js";var k,v,y,g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,s=String(t).toLowerCase(),a=String(o.getOptionValue(e)).toLowerCase(),l=String(o.getOptionLabel(e)).toLowerCase();return a===s||l===s},h=o({allowCreateWhileLoading:!1,createOptionPosition:"last"},{formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,e,o,s){return!(!t||e.some((function(e){return g(t,e,s)}))||o.some((function(e){return g(t,e,s)})))},getNewOptionData:function(t,e){return{label:e,value:t,__isNew__:!0}},getOptionValue:u,getOptionLabel:f}),w=(k=p,y=v=function(t){a(o,_);var e=l(o);function o(t){var s;i(this,o),(s=e.call(this,t)).select=void 0,s.onChange=function(t,e){var o=s.props,a=o.getNewOptionData,l=o.inputValue,i=o.isMulti,c=o.onChange,d=o.onCreateOption,p=o.value,u=o.name;if("select-option"!==e.action)return c(t,e);var f=s.state.newOption,m=Array.isArray(t)?t:[t];if(m[m.length-1]!==f)c(t,e);else if(d)d(l);else{var _=a(l,l),b={action:"create-option",name:u,option:_};c(i?[].concat(r(n(p)),[_]):_,b)}};var a=t.options||[];return s.state={newOption:void 0,options:a},s}return c(o,[{key:"focus",value:function(){this.select.focus()}},{key:"blur",value:function(){this.select.blur()}},{key:"render",value:function(){var t=this,e=this.state.options;return m.createElement(k,d({},this.props,{ref:function(e){t.select=e},options:e,onChange:this.onChange}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){var o=t.allowCreateWhileLoading,s=t.createOptionPosition,a=t.formatCreateLabel,l=t.getNewOptionData,i=t.inputValue,c=t.isLoading,d=t.isValidNewOption,p=t.value,u=t.getOptionValue,f=t.getOptionLabel,m=t.options||[],_=e.newOption;return{newOption:_=d(i,n(p),m,{getOptionValue:u,getOptionLabel:f})?l(i,a(i)):void 0,options:!o&&c||!_?m:"first"===s?[_].concat(r(m)):[].concat(r(m),[_])}}}]),o}(),v.defaultProps=h,y),j=b(s(w));e('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.styled-atlaskit-select div[class*=-control],.styled-atlaskit-select__control{background-color:transparent;border-color:#b8bfcd;border-radius:4px;border-width:1px}.styled-atlaskit-select div[class*=-control]:hover,.styled-atlaskit-select__control:hover{background-color:#f5f6f8;border-color:#687792}.styled-atlaskit-select div[class*=-control].styled-atlaskit-select__control--is-focused,.styled-atlaskit-select__control.styled-atlaskit-select__control--is-focused{border:2px solid #0b6cff}.styled-atlaskit-select div[class*=-control].styled-atlaskit-select__control--is-disabled,.styled-atlaskit-select__control.styled-atlaskit-select__control--is-disabled{background-color:#f5f6f8}.styled-atlaskit-select [class$=-menu]>div::-webkit-scrollbar{width:6px}.styled-atlaskit-select [class$=-menu]>div::-webkit-scrollbar-track{border-radius:10px}.styled-atlaskit-select [class$=-menu]>div::-webkit-scrollbar-thumb{background:#e1e4e9;border-radius:10px}.styled-atlaskit-select__menu-list:hover{background-color:#fff}.styled-atlaskit-select__option{color:#232831;height:36px;line-height:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.styled-atlaskit-select__option.styled-atlaskit-select__option--is-focused{background-color:#f5f6f8;box-shadow:none}.styled-atlaskit-select__option.styled-atlaskit-select__option--is-selected{background-color:#0b6cff;color:#fff}.styled-atlaskit-select div.styled-atlaskit-select__option,.styled-atlaskit-select__placeholder,.styled-atlaskit-select__value-container div{font-family:Roboto,sans-serif;font-size:16px}.styled-atlaskit-select__multi-value{background-color:#0b6cff!important}.styled-atlaskit-select__multi-value__label{color:#fff!important}.styled-atlaskit-select__multi-value__remove:hover{background-color:transparent!important}.styled-atlaskit-select__multi-value__remove span{--icon-primary-color:transparent;--icon-secondary-color:#fff!important}');const O=({isMulti:e=!1,onChange:o,...s})=>t(j,{className:"styled-atlaskit-select",classNamePrefix:"styled-atlaskit-select",isMulti:e,onChange:o?t=>o(t):void 0,...s});export{O as CreatableSelect};
