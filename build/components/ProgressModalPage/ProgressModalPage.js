import{jsxs as e,jsx as t}from"react/jsx-runtime";import{c as r}from"../../index-6ea95111.js";import{s as i}from"../../style-inject.es-1f59c1d0.js";import{ModalPage as o}from"../ModalPage/ModalPage.js";import"react";import"../../utils/i18n/index.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";var a="modalWrapper___tV0rg",_="progressIndicator___ml98U",n="title___-qlv5",s="subtitle___VBVDf",l="wrapper___QXkuD",p="indicatorItem___uEnm-",d="iconIndicator___lnLsZ",c="visited___2-Fga",m="contentContainer___7HaiO",g="contentWrapper___0t84H";i('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.modalWrapper___tV0rg{background:#fff;display:flex;height:100%;left:0;position:fixed;top:0;width:100%;z-index:509}.progressIndicator___ml98U{background-color:#f5f6f8;font-family:Roboto,sans-serif;max-width:400px;padding:80px 48px;width:28%}.progressIndicator___ml98U .title___-qlv5{color:#4c576b;font-size:24px;font-weight:500;line-height:36px;margin-bottom:8px}.progressIndicator___ml98U .subtitle___VBVDf{color:#687792;font-size:14px;font-weight:400;margin-top:0;text-transform:none}.progressIndicator___ml98U .wrapper___QXkuD{margin-top:32px}.progressIndicator___ml98U .wrapper___QXkuD>.indicatorItem___uEnm-{display:flex;margin-bottom:20px;margin-left:12px}.progressIndicator___ml98U .wrapper___QXkuD>.indicatorItem___uEnm->.iconIndicator___lnLsZ{align-items:center;background-color:#e1e4e9;border:4px solid #e1e4e9;border-radius:50%;color:#a4adbe;display:flex;font-size:12px;font-weight:500;height:28px;justify-content:center;line-height:22px;text-align:center;width:28px}.progressIndicator___ml98U .wrapper___QXkuD>.indicatorItem___uEnm->label{color:#a4adbe;font-size:12px;font-weight:500;height:28px;line-height:28px;margin-bottom:0;margin-left:12px}.progressIndicator___ml98U .wrapper___QXkuD .visited___2-Fga>.iconIndicator___lnLsZ{background-color:#0b6cff;border:4px solid #8dbaff;border-radius:50%;color:#fff}.progressIndicator___ml98U .wrapper___QXkuD .visited___2-Fga>label{color:#0b6cff}.contentContainer___7HaiO{overflow-y:auto;padding-top:80px;width:100%}.contentContainer___7HaiO .contentWrapper___0t84H{margin:auto;max-width:540px;width:100%}');const f=({title:i,subtitle:f,step:h,stepLabels:x,className:u,children:b,isFullWidth:w=!0,...I})=>e(o,{className:r(a,u),isFlex:!0,isFullWidth:w,...I,children:[e("aside",{className:_,children:[t("h1",{className:n,children:i}),f&&t("h6",{className:s,children:f}),t("div",{className:l,children:x.map(((i,o)=>e("div",{className:r(p,{[c]:h>=o+1}),children:[t("div",{className:d,children:o+1}),t("label",{children:i})]},o)))})]}),t("section",{className:m,children:t("div",{className:g,children:b})})]});export{f as ProgressModalPage};