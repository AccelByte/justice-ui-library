import{jsxs as e,jsx as t}from"react/jsx-runtime";import{c as s}from"../../index-6ea95111.js";import{FieldLabel as o,FieldErrorMessage as i,FieldHelperText as a}from"../Form/utility/FormUtility.js";import{s as r}from"../../style-inject.es-1f59c1d0.js";import{Enum as m}from"../../types/enum.js";import{Select as p}from"../Select/Select.js";import"react";import"../../index.es-62933797.js";import"../../server-d796a789.js";import"../../index-dd80248b.js";import"stream";import"../../utils/i18n/index.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";import"../../fa_icons-aa14317c.js";import"../../purify.es-49746c08.js";import"../../constants/common.js";import"../../utils/typography.js";import"../Select/reactSelectComponents.js";import"../../utils/dom.js";import"../../index-4bd03571.esm-6be7d487.js";import"../../unitless.esm-d94354fa.js";import"../../index-1b214abf.js";import"../../Select-0356574f.js";import"../../react-select.esm-30756303.js";import"../../stateManager-845a3300.esm-91ad6ca5.js";import"../../memoize-one.esm-8827f1ac.js";import"../../createSelect-e4a1e993.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../objectWithoutProperties-90b89624.js";import"../../index-72b69d08.js";import"../../_commonjsHelpers-6e998e78.js";import"../../core.esm-a8712816.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../get-ae46b391.js";import"../../context-f854a00e.js";import"../../use-memo-one.esm-19c0a4a5.js";r('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");:root{--modal-page-close-btn-top:32px;--modal-page-close-btn-right:32px}.valid-select-input .field-label{font-size:14px;padding-bottom:4px}');const l=m("LOADING","FAILED","SUCCESS"),n=({label:r,placeholder:m,options:l=[],name:n,value:c,onChange:d,errMessage:j,optionalLabel:b,isInvalid:u,isDisabled:f=!1,isRequired:g=!0,isClearable:x,tooltip:h,selectDataQa:y,selectDataQaProps:S,isMulti:v=!1,className:C,dataQa:L,helperText:D,...I})=>e("div",{className:s("valid-select-input",C),"data-qa-id":L,children:[!!r&&t(o,{label:r,optionalLabel:b,isRequired:g,tooltip:h}),t(p,{...I,options:l,placeholder:m,name:n,value:c,onChange:d,isDisabled:f,isClearable:x,isMulti:v,dataQa:y,dataQaProps:S}),u&&t(i,{message:j}),D&&t(a,{message:D})]});export{l as RELOADSTATUS,n as ValidSelect};
