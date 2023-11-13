import{jsxs as t,jsx as a}from"react/jsx-runtime";import{DynamicTableStateless as l}from"@atlaskit/dynamic-table";import i from"classnames";import e from"./DynamicTablePagination.js";import{s as o}from"../../style-inject.es-1f59c1d0.js";import"../Select/Select.js";import"@atlaskit/select";import"../Select/reactSelectComponents.js";import"react";import"react-tooltip";import"../../utils/dom.js";import"../../index-4bd03571.esm-89a49e92.js";import"../../index-dd80248b.js";import"../../utils/i18n/index.js";import"../../utils/i18n/loadLanguages.js";import"../Pagination/Pagination.js";import"../../fa_icons-aa14317c.js";o('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.styled-atlaskit-table{font-family:Roboto,sans-serif;padding-bottom:16px}.styled-atlaskit-table>div{margin-bottom:0}.styled-atlaskit-table.no-padding{padding-bottom:0}.styled-atlaskit-table.no-padding tbody td:first-child,.styled-atlaskit-table.no-padding thead th:first-child{padding-left:0}.styled-atlaskit-table.no-padding tbody td:last-child,.styled-atlaskit-table.no-padding thead th:last-child{padding-right:0}.styled-atlaskit-table thead{background-color:#f5f6f8;border-bottom:1px solid #e1e4e9}.styled-atlaskit-table thead>tr th>span:before{border-bottom-width:6px;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid transparent;bottom:10px;display:block;height:0;position:absolute;right:-15px;width:0}.styled-atlaskit-table thead>tr th:hover>span:before{border:6px solid transparent;border-bottom-color:#dfe1e6;bottom:10px;display:block;height:0;position:absolute;right:-15px;width:0}.styled-atlaskit-table thead>tr th>span:after{border-bottom:6px solid transparent;border-left:6px solid transparent;border-right:6px solid transparent;border-top-width:6px;bottom:-4px;display:block;height:0;position:absolute;right:-15px;width:0}.styled-atlaskit-table thead>tr th:hover>span:after{border:6px solid transparent;border-top-color:#dfe1e6;bottom:-4px;display:block;height:0;position:absolute;right:-15px;width:0}.styled-atlaskit-table tbody,.styled-atlaskit-table tfoot{border-bottom:0}.styled-atlaskit-table thead th{color:#4c576b;font-size:14px;font-weight:500;height:48px;text-align:left;vertical-align:middle}.styled-atlaskit-table thead th:first-child{padding-left:30px}.styled-atlaskit-table thead th:last-child{padding-right:30px}.styled-atlaskit-table tbody[data-rbd-droppable-id] tr[draggable] td{max-width:unset}.styled-atlaskit-table tbody td{border-bottom:1px solid #e1e4e9;box-sizing:border-box;color:#232831;font-size:14px;height:44px;max-width:320px;text-align:left;vertical-align:middle;word-break:break-word}.styled-atlaskit-table tbody td .elipsis{overflow:hidden;text-overflow:ellipsis}.styled-atlaskit-table tbody td>a{color:#232831}.styled-atlaskit-table tbody td:first-child{padding-left:30px}.styled-atlaskit-table tbody td:last-child{padding-right:30px}.styled-atlaskit-table tbody td .faint-color{color:#687792}.styled-atlaskit-table .action-wrap{font-size:14px;font-weight:400}.styled-atlaskit-table .action-wrap button{transform:translateX(10px)}.styled-atlaskit-table .action-wrap button.plain-button{padding:0;transform:translateX(0)}.styled-atlaskit-table .action-wrap button:not(:first-child){margin-left:10px}.styled-atlaskit-table .action-wrap a{color:#0b6cff;cursor:pointer}.styled-atlaskit-table .action-wrap a:hover{color:#0b6cff}.styled-atlaskit-table .action-wrap a.disabled{color:#b8bfcd;cursor:not-allowed}.styled-atlaskit-table .action-wrap .delete-button{color:#687792!important;height:auto;line-height:24px;padding:0;text-decoration:none;transform:translateX(0)}.styled-atlaskit-table .action-wrap .delete-button:not(:first-child){margin-left:21px}.styled-atlaskit-table .actions-dropdown-wrap{color:#687792}.styled-atlaskit-table .actions-dropdown-wrap .active{color:#0b6cff}.styled-atlaskit-table .actions-dropdown-wrap .disabled{color:#b8bfcd;cursor:not-allowed}.styled-atlaskit-table .actions-dropdown-wrap .actions-dropdown-wrap-link,.styled-atlaskit-table .actions-dropdown-wrap>span{cursor:pointer;margin-right:10px}.styled-atlaskit-table .actions-dropdown-wrap>div{display:inline}.styled-atlaskit-table .active{color:#0b6cff}.styled-atlaskit-table.last-td-align-right tbody td:last-child,.styled-atlaskit-table.last-td-align-right thead th:last-child{text-align:right}.styled-atlaskit-table.last-td-align-right thead th:last-child{padding-right:40px}.styled-atlaskit-table div[class^=Droplist-]:hover{cursor:pointer}.styled-atlaskit-table .styled-atlaskit-button.link{font-size:14px}');const d=({className:o,children:d,customContent:s=null,dataQa:r=null,noPadding:n=!1,pagination:p,minWidth:b,...c})=>t("div",{className:i("styled-atlaskit-table",{"no-padding":n},o),"data-qa-id":r,style:{minWidth:b},children:[s,a(l,{...c}),!!p&&a(e,{...p}),d]});export{d as DynamicTable};
