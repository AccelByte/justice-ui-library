import{jsxs as i,jsx as t}from"react/jsx-runtime";import{c as e}from"../../index-6ea95111.js";import{translation as a}from"../../utils/i18n/index.js";import{Select as n}from"../Select/index.js";import{s as o}from"../../style-inject.es-1f59c1d0.js";import"../../fa_icons-aa14317c.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";import"react";import"../Select/reactSelectComponents.js";import"../../index-4bd03571.esm-7ee3114b.js";import"../../unitless.esm-d94354fa.js";import"../../index-5032cf6a.js";import"../../index-dd80248b.js";import"../../Select-ee89da99.js";import"../../react-select.esm-c8af6be9.js";import"../../stateManager-845a3300.esm-0fca7fe6.js";import"../../memoize-one.esm-8827f1ac.js";import"../../createSelect-74d50d4f.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../objectWithoutProperties-90b89624.js";import"../../index-72b69d08.js";import"../../_commonjsHelpers-6e998e78.js";import"../../core.esm-a8712816.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../get-ae46b391.js";import"../../context-f854a00e.js";import"../../use-memo-one.esm-19c0a4a5.js";o('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.pagination{font-family:Roboto,sans-serif}.pagination.with-limit{display:flex;flex-wrap:wrap;justify-content:space-between}@media screen and (max-width:576px){.pagination.with-limit{justify-content:center}.pagination.with-limit .limit-wrapper,.pagination.with-limit .paging-wrapper{margin-bottom:12px}}.pagination.with-limit .limit-wrapper{align-items:center;color:#687792;display:flex;font-size:14px}.pagination.with-limit .limit-wrapper .limit-prefix,.pagination.with-limit .limit-wrapper .styled-atlaskit-select{margin-right:12px}.pagination.with-limit .limit-wrapper .styled-atlaskit-select .styled-atlaskit-select__control{min-width:72px}.pagination.without-limit{display:flex;justify-content:center}.pagination.without-limit .paging-wrapper{align-items:center;justify-content:center}.pagination .paging-wrapper{display:flex;font-size:14px;font-weight:500;line-height:20px;padding:25px}.pagination .paging-wrapper a{align-items:center;display:flex;margin:0 10px}.pagination .paging-wrapper a.disabled{color:#b8bfcd;cursor:not-allowed;pointer-events:none}.pagination .paging-wrapper a.navigation{color:#687792;cursor:pointer}');const r=o=>{const{paging:r,changePage:p,limit:s,prevDataQa:m="pagination_prev",nextDataQa:l="pagination_next"}=o;return i("div",{className:e("pagination",{"without-limit":!s,"with-limit":!!s}),children:[!!s&&i("div",{className:"limit-wrapper",children:[t("span",{className:"limit-prefix",children:a("pagination.limit.prefix")}),t(n,{...s}),t("span",{className:"limit-suffix",children:a("pagination.limit.suffix")})]}),i("div",{className:"paging-wrapper",children:[(()=>{const e=r.previous?"navigation":"disabled";return i("a",{className:e,onClick:()=>p(r.previous),"data-qa-id":m,children:[t("i",{className:"icon-chevron-left page-icon"})," ",a("pagination.prev")]})})(),(()=>{const e=r.next?"navigation":"disabled";return i("a",{className:e,onClick:()=>p(r.next),"data-qa-id":l,children:[a("pagination.next")," ",t("i",{className:"icon-chevron-right page-icon"})]})})()]})]})};export{r as Pagination};
