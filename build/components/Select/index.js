import{jsx as t}from"react/jsx-runtime";import{DropdownIndicator as e,Option as s,MultiValueLabel as o}from"./reactSelectComponents.js";import{translation as l}from"../../utils/i18n/index.js";import{s as a}from"../../style-inject.es-1f59c1d0.js";import{S as i}from"../../Select-a793a68a.js";import{c as r}from"../../index-4bd03571.esm-c4a0d41b.js";import"react";import"../../index.es-62933797.js";import"../../utils/dom.js";import"../../unitless.esm-d94354fa.js";import"../../index-d0edc839.js";import"../../index-dd80248b.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";import"../../react-select.esm-7da0a2c7.js";import"../../stateManager-845a3300.esm-bbeab66c.js";import"../../memoize-one.esm-8827f1ac.js";import"../../createSelect-5fdfb246.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../objectWithoutProperties-90b89624.js";import"../../index-72b69d08.js";import"../../_commonjsHelpers-6e998e78.js";import"../../core.esm-a8712816.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../get-ae46b391.js";import"../../context-f854a00e.js";import"../../use-memo-one.esm-19c0a4a5.js";a('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.styled-atlaskit-select{font-family:Roboto,sans-serif!important}.styled-atlaskit-select div[class*=-control],.styled-atlaskit-select__control{background-color:transparent;border-color:#b8bfcd;border-radius:4px;border-width:1px}.styled-atlaskit-select div[class*=-control]:hover,.styled-atlaskit-select__control:hover{background-color:#f5f6f8;border-color:#687792}.styled-atlaskit-select div[class*=-control].styled-atlaskit-select__control--is-focused,.styled-atlaskit-select__control.styled-atlaskit-select__control--is-focused{border:2px solid #0b6cff}.styled-atlaskit-select div[class*=-control].styled-atlaskit-select__control--is-disabled,.styled-atlaskit-select__control.styled-atlaskit-select__control--is-disabled{background-color:#f5f6f8}.styled-atlaskit-select [class$=-menu]>div::-webkit-scrollbar{width:6px}.styled-atlaskit-select [class$=-menu]>div::-webkit-scrollbar-track{border-radius:10px}.styled-atlaskit-select [class$=-menu]>div::-webkit-scrollbar-thumb{background:#e1e4e9;border-radius:10px}.styled-atlaskit-select__menu-list:hover{background-color:#fff}.styled-atlaskit-select__option{color:#232831;height:36px;line-height:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.styled-atlaskit-select__option--is-disabled{color:#a5adba!important}.styled-atlaskit-select__option.styled-atlaskit-select__option--is-focused{background-color:#f5f6f8;box-shadow:none}.styled-atlaskit-select__option.styled-atlaskit-select__option--is-selected{background-color:#0b6cff;color:#fff}.styled-atlaskit-select div.styled-atlaskit-select__option,.styled-atlaskit-select__placeholder,.styled-atlaskit-select__value-container div{font-family:Roboto,sans-serif;font-size:16px}.styled-atlaskit-select__single-value{line-height:20px!important}.styled-atlaskit-select__placeholder{color:#b8bfcd!important}.styled-atlaskit-select__multi-value{background-color:#0b6cff!important}.styled-atlaskit-select__multi-value__label{color:#fff!important}.styled-atlaskit-select__multi-value__remove:hover{background-color:transparent!important}.styled-atlaskit-select__multi-value__remove span{--icon-primary-color:transparent;--icon-secondary-color:#fff!important}.styled-atlaskit-select__multi-value-unremovable{background-color:#687792!important;border-radius:2px;padding-right:6px}.styled-atlaskit-select__multi-value-unremovable+.styled-atlaskit-select__multi-value__remove{display:none}.styled-atlaskit-select__indicators .icon-chevron-down{color:#687792;margin-right:8px}');const c=({isMulti:a=!1,onChange:c,dataQa:d=null,dataQaProps:n=null,noOptionsMessage:p=(()=>l("common.select.noResults")),...m})=>{const _=()=>t(i,{className:"styled-atlaskit-select",classNamePrefix:"styled-atlaskit-select",noOptionsMessage:p,components:{DropdownIndicator:e,Option:m.formatOptionLabel?r.Option:s,MultiValueLabel:({...t})=>o(t)},isMulti:a,onChange:c?t=>c(t):void 0,...m});return d?t("div",{"data-qa-id":d,"data-qa-props":n,children:_()}):_()};export{c as Select};
