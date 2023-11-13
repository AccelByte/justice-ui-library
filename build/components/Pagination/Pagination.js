import{jsxs as i,jsx as t}from"react/jsx-runtime";import a from"classnames";import{translation as n}from"../../utils/i18n/index.js";import{Select as e}from"../Select/Select.js";import{s as p}from"../../style-inject.es-1f59c1d0.js";import"../../fa_icons-aa14317c.js";import"../../utils/i18n/loadLanguages.js";import"react";import"@atlaskit/select";import"../Select/reactSelectComponents.js";import"react-tooltip";import"../../utils/dom.js";import"../../index-4bd03571.esm-89a49e92.js";import"../../index-dd80248b.js";p('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.pagination{font-family:Roboto,sans-serif}.pagination.with-limit{display:flex;flex-wrap:wrap;justify-content:space-between}@media screen and (max-width:576px){.pagination.with-limit{justify-content:center}.pagination.with-limit .limit-wrapper,.pagination.with-limit .paging-wrapper{margin-bottom:12px}}.pagination.with-limit .limit-wrapper{align-items:center;color:#687792;display:flex;font-size:14px}.pagination.with-limit .limit-wrapper .limit-prefix,.pagination.with-limit .limit-wrapper .styled-atlaskit-select{margin-right:12px}.pagination.with-limit .limit-wrapper .styled-atlaskit-select .styled-atlaskit-select__control{min-width:72px}.pagination.without-limit{display:flex;justify-content:center}.pagination.without-limit .paging-wrapper{align-items:center;justify-content:center}.pagination .paging-wrapper{display:flex;font-size:14px;font-weight:500;line-height:20px;padding:25px}.pagination .paging-wrapper a{align-items:center;display:flex;margin:0 10px}.pagination .paging-wrapper a.disabled{color:#b8bfcd;cursor:not-allowed;pointer-events:none}.pagination .paging-wrapper a.navigation{color:#687792;cursor:pointer}');const o=p=>{const{paging:o,changePage:r,limit:l,prevDataQa:s="pagination_prev",nextDataQa:m="pagination_next"}=p;return i("div",{className:a("pagination",{"without-limit":!l,"with-limit":!!l}),children:[!!l&&i("div",{className:"limit-wrapper",children:[t("span",{className:"limit-prefix",children:n("pagination.limit.prefix")}),t(e,{...l}),t("span",{className:"limit-suffix",children:n("pagination.limit.suffix")})]}),i("div",{className:"paging-wrapper",children:[i("a",{className:o?.previous?"navigation":"disabled",onClick:()=>r(o?.previous),"data-qa-id":s,children:[t("i",{className:"icon-chevron-left page-icon"})," ",n("pagination.prev")]}),i("a",{className:o?.next?"navigation":"disabled",onClick:()=>r(o?.next),"data-qa-id":m,children:[n("pagination.next")," ",t("i",{className:"icon-chevron-right page-icon"})]})]})]})};export{o as Pagination};
