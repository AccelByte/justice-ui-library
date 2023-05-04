import{jsx as t}from"react/jsx-runtime";import*as e from"react";import{c as s}from"../../index-6ea95111.js";import{debounce as o}from"../../utils/common.js";import{s as i}from"../../style-inject.es-1f59c1d0.js";i('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.scrollSpyContainer{background-color:#fff;border-radius:4px;box-shadow:0 1px 2px rgba(0,0,0,.25);display:block;height:fit-content;list-style-type:none;padding:8px;position:sticky;top:0;width:240px}.scrollSpyContainer li{align-items:center;border-radius:4px;display:flex;font-family:Roboto,sans-serif;height:40px;padding:0 24px}.scrollSpyContainer li.active,.scrollSpyContainer li:hover{background-color:#eff5ff;color:#0b6cff;cursor:pointer;font-weight:500}');class n extends e.Component{constructor(t){super(t),this.state={activeSessionId:null,scrollTarget:t.scrollTarget||window}}componentDidMount(){this.setActiveSection(),this.state.scrollTarget.addEventListener("scroll",this.debounceSetActiveSession)}componentWillUnmount(){this.state.scrollTarget.removeEventListener("scroll",this.debounceSetActiveSession)}getElements=()=>{const{items:t}=this.props;return t.map((t=>document.getElementById(t.elementId))).filter(Boolean)};setActiveSection=()=>{const{items:t,offset:e}=this.props;if(t.length<=0)return;let s=this.props.items[0].elementId;const o=e||100;for(let e=0;e<t.length;e++){const t=this.getElements()[e],i=this.state.scrollTarget instanceof Element?this.state.scrollTarget.scrollTop:window.scrollY;if(!t)return;i+o>t.offsetTop&&(s=t.id)}this.setState({activeSessionId:s})};debounceSetActiveSession=o(this.setActiveSection,100);scrollTo=t=>{const e=document.getElementById(t);e&&e.scrollIntoView({behavior:"smooth"})};render(){const{className:e}=this.props,{activeSessionId:o}=this.state;return t("ul",{className:s("scrollSpyContainer",e),children:this.props.items.map(((e,i)=>t("li",{className:s({active:o===e.elementId}),onClick:()=>this.scrollTo(e.elementId),"data-qa-id":e.dataQa,children:e.text},`${e.elementId}-${i}`)))})}}export{n as ScrollSpy};