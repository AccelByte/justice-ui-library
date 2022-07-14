const e=(...e)=>Object.freeze(e.reduce(((e,c)=>({...e,[c]:c})),Object.create(null))),c=(e,c)=>!!Object.values(c).find((c=>c===e));export{e as Enum,c as isKeyOfEnum};
