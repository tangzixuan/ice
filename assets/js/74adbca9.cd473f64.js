"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[5415],{4852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,b=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(2203),o=(n(9231),n(4852));const i={title:"\u7ec4\u4ef6\u4f7f\u7528",order:4},a=void 0,p={unversionedId:"guide/miniapp/component-use",id:"guide/miniapp/component-use",title:"\u7ec4\u4ef6\u4f7f\u7528",description:"ice.js \u5c0f\u7a0b\u5e8f\u652f\u6301\u4ee5\u4e0b\u96c6\u4e2d\u7c7b\u578b\u7684\u7ec4\u4ef6\u7684\u4f7f\u7528\uff1a",source:"@site/docs/guide/miniapp/component-use.md",sourceDirName:"guide/miniapp",slug:"/guide/miniapp/component-use",permalink:"/docs/guide/miniapp/component-use",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/miniapp/component-use.md",tags:[],version:"current",frontMatter:{title:"\u7ec4\u4ef6\u4f7f\u7528",order:4},sidebar:"docs",previous:{title:"\u8def\u7531",permalink:"/docs/guide/miniapp/router"},next:{title:"\u4f7f\u7528 HTML \u6807\u7b7e",permalink:"/docs/guide/miniapp/use-html"}},c={},l=[{value:"\u5c0f\u7a0b\u5e8f\u5185\u7f6e\u7ec4\u4ef6",id:"\u5c0f\u7a0b\u5e8f\u5185\u7f6e\u7ec4\u4ef6",level:2},{value:"HTML \u6807\u7b7e",id:"html-\u6807\u7b7e",level:2},{value:"\u5c0f\u7a0b\u5e8f\u539f\u751f\u81ea\u5b9a\u4e49\u7ec4\u4ef6",id:"\u5c0f\u7a0b\u5e8f\u539f\u751f\u81ea\u5b9a\u4e49\u7ec4\u4ef6",level:2}],u={toc:l};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ice.js \u5c0f\u7a0b\u5e8f\u652f\u6301\u4ee5\u4e0b\u96c6\u4e2d\u7c7b\u578b\u7684\u7ec4\u4ef6\u7684\u4f7f\u7528\uff1a"),(0,o.kt)("h2",{id:"\u5c0f\u7a0b\u5e8f\u5185\u7f6e\u7ec4\u4ef6"},"\u5c0f\u7a0b\u5e8f\u5185\u7f6e\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u6240\u6709\u5c0f\u7a0b\u5e8f\u5185\u7f6e\u7ec4\u4ef6\u53ef\u5728 ice.js \u4e2d\u76f4\u63a5\u4f7f\u7528\uff0c\u4f46\u662f\u9700\u8981\u6ce8\u610f\u6309\u7167 JSX \u8bed\u6cd5\u7f16\u5199\u4ee3\u7801\u3002\u4f8b\u5982\uff0c\u5728\u5c0f\u7a0b\u5e8f\u539f\u751f\u9879\u76ee\u4e2d\u6309\u7167\u4ee5\u4e0b\u65b9\u5f0f\u4f7f\u7528\u7684\u7ec4\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- \u963f\u91cc\u5c0f\u7a0b\u5e8f --\x3e\n<button type="{{customType}}" onTap="clickMe">\u6211\u662f\u6309\u94ae</button>\n\n\x3c!-- \u5fae\u4fe1\u5c0f\u7a0b\u5e8f --\x3e\n<button type="{{customType}}" bindtap="clickMe" bindgetphonenumber="handleGetPhoneNumber">\u6211\u662f\u6309\u94ae</button>\n')),(0,o.kt)("p",null,"\u5bf9\u5e94\u5728 ice.js JSX \u4e2d\u5e94\u8be5\u8fd9\u6837\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<button type={customType} onClick={clickMe} onGetPhoneNumber={handleGetPhoneNumber}>\u6211\u662f\u6309\u94ae</button>\n")),(0,o.kt)("p",null,"\u7279\u522b\u6ce8\u610f\uff0c\u5728\u5fae\u4fe1\u7b49\u5c0f\u7a0b\u5e8f\u7aef\u901a\u8fc7 bind \u524d\u7f00\u7ed1\u5b9a\u4e8b\u4ef6\uff0c\u5728 JSX \u4e2d\u9700\u8981\u5904\u7406\u4e3a on \u524d\u7f00\uff0c\u5e76\u9075\u5faa\u9a7c\u5cf0\u5f0f\u547d\u540d\u89c4\u5219\uff0c\u5982\u4e0a\u9762\u793a\u4f8b\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"bindgetphonenumber")," \u9700\u8981\u5904\u7406\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"onGetPhoneNumber"),"\u3002"),(0,o.kt)("h2",{id:"html-\u6807\u7b7e"},"HTML \u6807\u7b7e"),(0,o.kt)("p",null,"\u8be6\u89c1",(0,o.kt)("a",{parentName:"p",href:"./use-html"},"\u4f7f\u7528 HTML \u6807\u7b7e"),"\u3002"),(0,o.kt)("h2",{id:"\u5c0f\u7a0b\u5e8f\u539f\u751f\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},"\u5c0f\u7a0b\u5e8f\u539f\u751f\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u5373\u5c06\u652f\u6301\uff0c\u656c\u8bf7\u671f\u5f85\u3002"))}s.isMDXComponent=!0}}]);