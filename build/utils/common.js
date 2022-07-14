const e=(e,t=500)=>{let o;return(...r)=>{clearTimeout(o),o=setTimeout((()=>e(...r)),t)}};export{e as debounce};
