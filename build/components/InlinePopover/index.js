import{jsx as e}from"react/jsx-runtime";import{s as t}from"../../style-inject.es-1f59c1d0.js";import{c as o}from"../../index-6ea95111.js";import*as n from"react";import i,{Component as r}from"react";import{N as a}from"../../index-23fbd8ab.js";import p from"styled-components";import{b as s,O as d,g as l,a2 as c,Z as f,x as u,_ as m,ag as v,$ as b,H as h,I as g,J as x}from"../../math-bf9ecd01.js";import{a as w}from"../../elevation-6b1ae944.js";import{M as y,s as k,b as P,w as I,u as O,a as j,c as C}from"../../Popper-914da2a0.js";import{_ as R}from"../../objectWithoutPropertiesLoose-1e1a7051.js";import{_,a as E}from"../../setPrototypeOf-c6ba02e6.js";import{_ as N}from"../../inheritsLoose-6fd5c6e3.js";import{Enum as z}from"../../types/enum.js";import"../../index-3f17275b.js";import"../../index-dd80248b.js";import"../../context-f854a00e.js";import"../../memoize-one.esm-8827f1ac.js";var L=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return t=e.call.apply(e,[this].concat(n))||this,_(E(t),"refHandler",(function(e){k(t.props.innerRef,e),P(t.props.setReferenceNode,e)})),t}N(t,e);var o=t.prototype;return o.componentWillUnmount=function(){k(this.props.innerRef,null)},o.render=function(){return I(Boolean(this.props.setReferenceNode)),O(this.props.children)({ref:this.refHandler})},t}(n.Component);function D(e){return n.createElement(y.Consumer,null,(function(t){return n.createElement(L,R({setReferenceNode:t},e))}))}t('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.inline-popover{font-family:Roboto,sans-serif}.inline-popover>div[data-testid~=InlinePopover]{word-wrap:break-word;background-color:#fff;box-shadow:0 0 8px rgba(0,0,0,.2);color:#687792;font-size:12px;letter-spacing:.03em;line-height:16px;margin:8px;max-width:290px;overflow-wrap:break-word;padding:16px}.inline-popover>div[data-testid~=InlinePopover] a{color:#0b6cff}.inline-popover>div[data-testid~=InlinePopover] a:hover{color:#4c93ff}.inline-popover>div[data-testid~=InlinePopover]:before{border-color:transparent #fff #fff transparent;border-style:solid;border-width:6px;box-shadow:2px 2px 4px 0 rgba(0,0,0,.1);content:"";height:0;position:absolute;transform-origin:0 0;width:0}.inline-popover>div[data-testid~=InlinePopover][data-testid*=right]:before{left:10px;top:50%;transform:rotate(135deg)}.inline-popover>div[data-testid~=InlinePopover][data-testid*=left]:before{right:-2px;top:50%;transform:rotate(315deg)}.inline-popover>div[data-testid~=InlinePopover][data-testid*=bottom]:before{left:50%;top:10px;transform:rotate(225deg)}.inline-popover>div[data-testid~=InlinePopover][data-testid*=bottom][data-testid*=start]:before{left:10%}.inline-popover>div[data-testid~=InlinePopover][data-testid*=bottom][data-testid*=end]:before{left:90%}.inline-popover>div[data-testid~=InlinePopover][data-testid*=top]:before{bottom:-1px;left:50%;transform:rotate(45deg)}.inline-popover>div[data-testid~=InlinePopover][data-testid*=top][data-testid*=start]:before{left:10%}.inline-popover>div[data-testid~=InlinePopover][data-testid*=top][data-testid*=end]:before{left:90%}.inline-popover>div[data-testid~=InlinePopover][data-testid*=auto]:before{border:0;box-shadow:none}.inline-popover>div[data-testid~=InlinePopover] ul{margin:0;padding-left:16px}.inline-popover>div[data-testid~=InlinePopover] ul li+li{margin-top:8px}.inline-popover>div[data-testid~=InlinePopover] code{font-size:14px;font-weight:500}.inline-popover>div[data-testid~=InlinePopover] code.allow{color:#0b6cff}.inline-popover>div[data-testid~=InlinePopover] code.not-allow{color:#cb1a1a}.inline-popover.dark>div[data-testid~=InlinePopover]{background-color:#232831;color:#fff}.inline-popover.dark>div[data-testid~=InlinePopover]:before{border-color:transparent #232831 #232831 transparent}');var B=function(e,t){return B=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])},B(e,t)};var F,H,U,W="@atlaskit/inline-dialog",A=f({light:u,dark:m}),M=f({light:v,dark:b}),V=p.div(U||(F=["\n  background: ",";\n  border-radius: ","px;\n  box-sizing: content-box; /* do not set this to border-box or it will break the overflow handling */\n  color: ",";\n  max-height: ","px;\n  max-width: ","px;\n  padding: ","px ","px;\n  z-index: ",";\n\n  ",";\n\n  &:focus {\n    outline: none;\n  }\n"],H=["\n  background: ",";\n  border-radius: ","px;\n  box-sizing: content-box; /* do not set this to border-box or it will break the overflow handling */\n  color: ",";\n  max-height: ","px;\n  max-width: ","px;\n  padding: ","px ","px;\n  z-index: ",";\n\n  ",";\n\n  &:focus {\n    outline: none;\n  }\n"],Object.defineProperty?Object.defineProperty(F,"raw",{value:H}):F.raw=H,U=F),A,s,M,d(l,56),d(l,56),d(l,2),d(l,3),c.dialog,w),J=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClickOutside=function(e){var o=t.props,n=o.isOpen,i=o.onClose;if(!e.defaultPrevented){var r=t.containerRef,a=t.triggerRef,p=e.target;a&&a.contains(p)||n&&r&&!r.contains(p)&&i&&i({isOpen:!1,event:e})}},t}return function(e,t){function o(){this.constructor=e}B(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}(t,e),t.prototype.componentDidUpdate=function(e){"undefined"!=typeof window&&(!e.isOpen&&this.props.isOpen?window.addEventListener("click",this.handleClickOutside,!0):e.isOpen&&!this.props.isOpen&&window.removeEventListener("click",this.handleClickOutside,!0))},t.prototype.componentDidMount=function(){"undefined"!=typeof window&&this.props.isOpen&&window.addEventListener("click",this.handleClickOutside,!0)},t.prototype.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("click",this.handleClickOutside,!0)},t.prototype.render=function(){var e=this,t=this.props,o=t.children,n=t.placement,r=t.isOpen,p=t.content,s=t.onContentBlur,d=t.onContentFocus,l=t.onContentClick,c=t.testId,f=r?i.createElement(j,{placement:n},(function(t){var o=t.ref,n=t.style;return i.createElement(V,{onBlur:s,onFocus:d,onClick:l,innerRef:function(t){e.containerRef=t,"function"==typeof o?o(t):o.current=t},style:n,"data-testid":c},p)})):null;return i.createElement(C,null,i.createElement(D,null,(function(t){var n=t.ref;return i.createElement(a,{innerRef:function(t){e.triggerRef=t,"function"==typeof n?n(t):n.current=t}},o)})),f)},t.defaultProps={isOpen:!1,onContentBlur:function(){},onContentClick:function(){},onContentFocus:function(){},onClose:function(){},placement:"bottom-start"},t}(r),S=x("atlaskit"),Z=h({componentName:"inlineDialog",packageName:W,packageVersion:"12.1.14"})(g({onClose:S({action:"closed",actionSubject:"inlineDialog",attributes:{componentName:"inlineDialog",packageName:W,packageVersion:"12.1.14"}})})(J));const $=z("light","dark"),q=({placement:t="right",...n})=>{const{content:i,children:r,isOpen:a,type:p}=n;return e("div",{className:o("inline-popover",p),children:e(Z,{...n,isOpen:!!i&&a,placement:t,testId:o("InlinePopover",t),children:r})})};export{$ as INLINE_POPOVER_TYPE,q as InlinePopover};
