import{jsxs as t,jsx as i}from"react/jsx-runtime";import{s as e}from"../../style-inject.es-1f59c1d0.js";import s from"classnames";e('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.emptyResultsWithIcon{color:#687792;font-family:Roboto,sans-serif;font-style:normal;letter-spacing:.02em;margin:0 auto;max-width:531px;padding-bottom:60px;padding-top:60px;text-align:center}.emptyResultsWithIcon.taller{padding-bottom:125px;padding-top:125px}.emptyResultsWithIconTitle{font-size:18px;font-weight:500;line-height:32px;margin-top:8px}.emptyResultsWithIconDescription{color:#909bb0;font-size:14px;margin-bottom:16px}');const o=({imgSrc:e,title:o,description:a,children:l,isTaller:n,dataQa:p,className:m})=>t("div",{className:s("emptyResultsWithIcon",m,{taller:n}),"data-qa-id":p,children:[i("img",{src:e}),i("div",{className:"emptyResultsWithIconTitle",children:o}),a&&i("div",{className:"emptyResultsWithIconDescription",children:a}),l&&i("div",{children:l})]});export{o as EmptyResultsWithIcon};
