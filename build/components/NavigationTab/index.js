import{jsx as t,jsxs as i}from"react/jsx-runtime";import*as a from"react";import{c as e}from"../../index-6ea95111.js";import{DropdownMenu as n,DropdownItemGroup as r,DropdownItem as o}from"../Dropdown/index.js";import{s}from"../../style-inject.es-1f59c1d0.js";import{translation as c}from"../../utils/i18n/index.js";import"../../fa_icons-e535ff8d.js";import{CONTAINER_SIZE as p}from"../../constants/containerSize.js";import"../../index-1901cda4.js";import"../../index-dd80248b.js";import"../../Transition-90804357.js";import"../../_commonjsHelpers-6e998e78.js";import"../../math-a65253e9.js";import"../../context-f854a00e.js";import"styled-components";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../Icon-dd328385.js";import"../../core.esm-a8712816.js";import"../../unitless.esm-d94354fa.js";import"crypto";import"../../memoize-one.esm-8827f1ac.js";import"../../inherits-d3723d19.js";import"../../objectSpread-31108fba.js";import"../../index-7f436594.js";import"../../Popper-97f606ed.js";import"../../objectWithoutProperties-90b89624.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";import"../../types/enum.js";s('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.tab-navigation,.tab-navigation--vertical{background-color:#fff;font-family:Roboto,sans-serif;height:60px;margin:0 0 30px}.tab-navigation--vertical>.wrapper,.tab-navigation>.wrapper{display:flex;padding:0 15px}.tab-navigation--full>.wrapper,.tab-navigation--large>.wrapper,.tab-navigation--small>.wrapper{margin:0 auto;padding:0 30px}.tab-navigation--full>.wrapper.no-padding,.tab-navigation--large>.wrapper.no-padding,.tab-navigation--small>.wrapper.no-padding{padding:0}.tab-navigation--large>.wrapper{max-width:1024px}.tab-navigation--small>.wrapper{max-width:768px}.tab-navigation--full>.wrapper{max-width:100%}.tab-navigation .tab-item,.tab-navigation--vertical .tab-item{color:#687792;cursor:pointer;font-size:16px;padding:19px 15px 15px;white-space:nowrap}.tab-navigation .tab-item.tab-active,.tab-navigation--vertical .tab-item.tab-active{border-bottom:3.75px solid #0b6cff;color:#232831}.tab-navigation .tab-item .icon-chevron-down,.tab-navigation--vertical .tab-item .icon-chevron-down{margin-left:4px}.tab-navigation--vertical{border-radius:4px;flex-direction:column;height:100%;justify-content:center;padding:0}.tab-navigation--vertical .wrapper{display:block;padding:0}.tab-navigation--vertical .tab-item{border-bottom:1px solid #e1e4e9}.tab-navigation--vertical .tab-item.tab-active{border-bottom:1px solid #e1e4e9;border-left:5px solid #0b6cff;color:#0b6cff}');const l=({isVertical:s,isChangeRoute:l=!0,containerSize:d="FULLWIDTH",noPadding:m=!1,config:g,changePageKey:b,changePage:f})=>{const[v,u]=a.useState(g),[h,j]=a.useState([]),[x,w]=a.useState([]),[y,L]=a.useState(g.length),[N,R]=a.useState(0),S=a.useRef(null),I=a.useRef(null),P=()=>{if(S.current){const{clientWidth:t}=S.current;R(t)}},E=(t,i)=>{t?f&&f(i):b&&b(i)},W=(t=y)=>{setTimeout((()=>{const i=[...g],a=i.findIndex((t=>t.isActive));if(a>=t&&t>0){const e=i[a];i.splice(a,1),i.splice(t-1,0,e)}if(u(i.slice(0,t)),j(i.slice(t)),S.current&&I.current){const i=S.current.getBoundingClientRect().right;I.current.getBoundingClientRect().right>i&&W(t-1)}}),10)};a.useEffect((()=>{if(!s)return(()=>{const t=setInterval((()=>{if(S.current){const{clientWidth:i}=S.current;R(i),i&&clearInterval(t)}}),100)})(),window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)}),[]),a.useEffect((()=>{s?u(g):W()}),[g]),a.useEffect((()=>{if(!s&&(N&&!x.length&&(()=>{if(S.current&&!s){const t=Array.from(S.current.children),i=[];t.forEach(((t,a)=>{const e=a?i[a-1]:0,n=t.clientWidth+e;i.push(n)})),w(i)}})(),x.length)){const t=x.filter((t=>t+100<N)).length;L(t),W(t)}}),[N,x]);const z=v.map((i=>t("div",{className:e("tab-item",{"tab-active":i.isActive}),onClick:()=>E(l,i.url),"data-qa-id":i.dataQa,"data-qa-props":i.dataQaProps,id:i.id,children:i.tabName},i.url)));return t("div",{className:e(s?"tab-navigation--vertical":"tab-navigation",d===p.SMALL&&"tab-navigation--small",d===p.LARGE&&"tab-navigation--large",d===p.FULLWIDTH&&"tab-navigation--full"),children:i("div",{className:e("wrapper",{"no-padding":m}),ref:S,children:[z,!!h.length&&t("div",{className:"tab-item",ref:I,children:t(n,{position:"bottom right",trigger:i("span",{className:"d-flex align-items-center",children:[c("common.more"),t("i",{className:"icon-chevron-down"})]}),children:t(r,{children:h.map(((i,a)=>t(o,{onClick:()=>E(l,i.url),children:i.tabName},`${i.tabName}-${a}`)))})})})]})})};export{l as NavigationTab};
