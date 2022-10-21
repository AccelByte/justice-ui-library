import{jsx as t}from"react/jsx-runtime";import e,{Component as s}from"react";import{DropdownIndicator as o}from"../Select/reactSelectComponents.js";import{s as a}from"../../style-inject.es-1f59c1d0.js";import{b as l,d as i,e as n,Q as r,_ as c,R as d,k as u,o as p,l as f,c as m}from"../../index-4bd03571.esm-7ee3114b.js";import{m as _,S as y}from"../../stateManager-845a3300.esm-0fca7fe6.js";import"../../index-5032cf6a.js";import{n as h}from"../../createSelect-74d50d4f.js";import"../../unitless.esm-d94354fa.js";import"../../index-dd80248b.js";import"../../memoize-one.esm-8827f1ac.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../objectWithoutProperties-90b89624.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../index-72b69d08.js";import"../../_commonjsHelpers-6e998e78.js";import"../../core.esm-a8712816.js";import"../../inheritsLoose-6fd5c6e3.js";var v,k,b,O={cacheOptions:!1,defaultOptions:!1,filterOption:null,isLoading:!1},g=_(y),j=h((v=g,b=k=function(t){l(a,s);var o=i(a);function a(t){var e;return n(this,a),(e=o.call(this)).select=void 0,e.lastRequest=void 0,e.mounted=!1,e.handleInputChange=function(t,s){var o=e.props,a=o.cacheOptions,l=o.onInputChange,i=r(t,s,l);if(!i)return delete e.lastRequest,void e.setState({inputValue:"",loadedInputValue:"",loadedOptions:[],isLoading:!1,passEmptyOptions:!1});if(a&&e.state.optionsCache[i])e.setState({inputValue:i,loadedInputValue:i,loadedOptions:e.state.optionsCache[i],isLoading:!1,passEmptyOptions:!1});else{var n=e.lastRequest={};e.setState({inputValue:i,isLoading:!0,passEmptyOptions:!e.state.loadedInputValue},(function(){e.loadOptions(i,(function(t){e.mounted&&n===e.lastRequest&&(delete e.lastRequest,e.setState((function(e){return{isLoading:!1,loadedInputValue:i,loadedOptions:t||[],passEmptyOptions:!1,optionsCache:t?c(c({},e.optionsCache),{},d({},i,t)):e.optionsCache}})))}))}))}return i},e.state={defaultOptions:Array.isArray(t.defaultOptions)?t.defaultOptions:void 0,inputValue:void 0!==t.inputValue?t.inputValue:"",isLoading:!0===t.defaultOptions,loadedOptions:[],passEmptyOptions:!1,optionsCache:{},prevDefaultOptions:void 0,prevCacheOptions:void 0},e}return u(a,[{key:"componentDidMount",value:function(){var t=this;this.mounted=!0;var e=this.props.defaultOptions,s=this.state.inputValue;!0===e&&this.loadOptions(s,(function(e){if(t.mounted){var s=!!t.lastRequest;t.setState({defaultOptions:e||[],isLoading:s})}}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"focus",value:function(){this.select.focus()}},{key:"blur",value:function(){this.select.blur()}},{key:"loadOptions",value:function(t,e){var s=this.props.loadOptions;if(!s)return e();var o=s(t,e);o&&"function"==typeof o.then&&o.then(e,(function(){return e()}))}},{key:"render",value:function(){var t=this,s=this.props;s.loadOptions;var o=s.isLoading,a=p(s,["loadOptions","isLoading"]),l=this.state,i=l.defaultOptions,n=l.inputValue,r=l.isLoading,c=l.loadedInputValue,d=l.loadedOptions,u=l.passEmptyOptions?[]:n&&c?d:i||[];return e.createElement(v,f({},a,{ref:function(e){t.select=e},options:u,isLoading:r||o,onInputChange:this.handleInputChange}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){var s=t.cacheOptions!==e.prevCacheOptions?{prevCacheOptions:t.cacheOptions,optionsCache:{}}:{},o=t.defaultOptions!==e.prevDefaultOptions?{prevDefaultOptions:t.defaultOptions,defaultOptions:Array.isArray(t.defaultOptions)?t.defaultOptions:void 0}:{};return c(c({},s),o)}}]),a}(),k.defaultProps=O,b));a('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.styled-atlaskit-select div[class*=-control],.styled-atlaskit-select__control{background-color:transparent;border-color:#b8bfcd;border-radius:4px;border-width:1px}.styled-atlaskit-select div[class*=-control]:hover,.styled-atlaskit-select__control:hover{background-color:#f5f6f8;border-color:#687792}.styled-atlaskit-select div[class*=-control].styled-atlaskit-select__control--is-focused,.styled-atlaskit-select__control.styled-atlaskit-select__control--is-focused{border:2px solid #0b6cff}.styled-atlaskit-select div[class*=-control].styled-atlaskit-select__control--is-disabled,.styled-atlaskit-select__control.styled-atlaskit-select__control--is-disabled{background-color:#f5f6f8}.styled-atlaskit-select [class$=-menu]>div::-webkit-scrollbar{width:6px}.styled-atlaskit-select [class$=-menu]>div::-webkit-scrollbar-track{border-radius:10px}.styled-atlaskit-select [class$=-menu]>div::-webkit-scrollbar-thumb{background:#e1e4e9;border-radius:10px}.styled-atlaskit-select__menu-list:hover{background-color:#fff}.styled-atlaskit-select__option{color:#232831;height:36px;line-height:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.styled-atlaskit-select__option.styled-atlaskit-select__option--is-focused{background-color:#f5f6f8;box-shadow:none}.styled-atlaskit-select__option.styled-atlaskit-select__option--is-selected{background-color:#0b6cff;color:#fff}.styled-atlaskit-select div.styled-atlaskit-select__option,.styled-atlaskit-select__placeholder,.styled-atlaskit-select__value-container div{font-family:Roboto,sans-serif;font-size:16px}.styled-atlaskit-select__single-value{line-height:20px!important}.styled-atlaskit-select__placeholder{color:#b8bfcd!important}.styled-atlaskit-select__multi-value{background-color:#0b6cff!important}.styled-atlaskit-select__multi-value__label{color:#fff!important}.styled-atlaskit-select__multi-value__remove:hover{background-color:transparent!important}.styled-atlaskit-select__multi-value__remove span{--icon-primary-color:transparent;--icon-secondary-color:#fff!important}.styled-atlaskit-select__multi-value-unremovable{background-color:#687792!important;border-radius:2px;padding-right:6px}.styled-atlaskit-select__multi-value-unremovable+.styled-atlaskit-select__multi-value__remove{display:none}.styled-atlaskit-select__indicators .icon-chevron-down{color:#687792;margin-right:8px}');const x=m,L=e=>t("div",{className:"styled-atlaskit-select__menu",children:t(m.MenuList,{className:"styled-atlaskit-select__menu-list",...e,children:e.children})}),C=({isMulti:s=!1,onChange:a,dataQa:l=null,dataQaProps:i=null,loadOptions:n,onLoadMoreOptions:r,...c})=>{const d=e.useRef(),u=e.useRef();return e.useLayoutEffect((()=>{r&&(()=>{if(!d.current)return;const t=d.current.select.select.select.controlRef,e=t.parentElement.parentElement;let s=e.querySelector(".styled-atlaskit-select__menu"),o=s?s.querySelector(".styled-atlaskit-select__menu-list"):null;const a=()=>{s=e.querySelector(".styled-atlaskit-select__menu"),o=s?s.querySelector(".styled-atlaskit-select__menu-list"):null,o&&o.addEventListener("scroll",(t=>{const{scrollHeight:e,scrollTop:s,offsetHeight:o}=t.currentTarget,a=d.current.select.state,l=a.loadedOptions.length>0?a.loadedOptions:a.defaultOptions,i=a.loadedOptions.length>0?"loadedOptions":"defaultOptions";s>=e-(o+30)&&(u.current&&clearTimeout(u.current),u.current=setTimeout((async()=>{if(!r)return;d.current.select.setState({isLoading:!0});const t=await r(a.inputValue,l.length);d.current&&d.current.select&&d.current.select.setState({isLoading:!1,[`${i}`]:[...l,...t]})}),500))}))};o?a():t.onclick=a})()}),[r,d]),t(j,{className:"styled-atlaskit-select",classNamePrefix:"styled-atlaskit-select",components:{DropdownIndicator:o,MenuList:L},loadOptions:n,isMulti:s,onChange:a?t=>a(t):void 0,...c,ref:d})},S=({dataQa:e=null,dataQaProps:s=null,...o})=>e?t("div",{"data-qa-id":e,"data-qa-props":s,children:t(C,{...o})}):t(C,{...o});export{S as SelectAsync,x as reactSelectComponents};
