import{DEFAULT_MIN_VALUE as n}from"../constants/common.js";function o(o,t,r){const m=!isNaN(Number(o)),s=!!r&&"."===o,c=!!t&&t<n&&"-"===o,e=o.length>1;return!(m||s||c||e)}export{o as isForbiddenKey};
