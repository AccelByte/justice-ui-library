import{jsx as r,jsxs as e,Fragment as t}from"react/jsx-runtime";import{s as a}from"../../style-inject.es-1f59c1d0.js";a('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.error-wrapper{align-items:center;color:#687792;display:flex;flex-direction:column;font-family:Roboto,sans-serif;justify-content:center;margin:0 auto;width:fit-content}.error-wrapper img,.error-wrapper__image{margin-bottom:25px;width:80px}.error-wrapper h3,.error-wrapper__title{font-size:20px;font-weight:500;margin:0}.error-wrapper h6,.error-wrapper__subtitle{font-size:14px;font-weight:400;margin-top:4px;text-transform:unset}.error-wrapper__subtitle,.error-wrapper__title{margin:0}');const o=({image:a,title:o,subTitle:i,customComponent:p,dataQa:s})=>p?r("div",{className:"error-wrapper error-wrapper__custom-component","data-qa-id":s,children:p}):e("div",{className:"error-wrapper","data-qa-id":s,children:[a&&r(t,{children:"string"==typeof a?r("img",{className:"error-wrapper__image",src:a,alt:o}):a}),r("h3",{className:"error-wrapper__title",children:o}),i&&r("h6",{className:"error-wrapper__subtitle",children:i})]});export{o as ErrorWrapper};