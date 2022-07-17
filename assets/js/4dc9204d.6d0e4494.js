"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9430],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3226:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const a={},c="Connectors",s={unversionedId:"reference/how-does-raptor-work/connectors",id:"reference/how-does-raptor-work/connectors",title:"Connectors",description:"Connectors define how can your Features draw data from external data sources. These can be streaming sources,",source:"@site/docs/reference/how-does-raptor-work/connectors.md",sourceDirName:"reference/how-does-raptor-work",slug:"/reference/how-does-raptor-work/connectors",permalink:"/docs/reference/how-does-raptor-work/connectors",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/reference/how-does-raptor-work/connectors.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"Digestion",permalink:"/docs/reference/how-does-raptor-work/feature-builders/digestion"},next:{title:"Deployment",permalink:"/docs/reference/how-does-raptor-work/deployment"}},i={},l=[],p={toc:l};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connectors"},"Connectors"),(0,o.kt)("p",null,"Connectors define how can your Features draw data from external data sources. These can be streaming sources,\nanalytical databases, CRM systems, and others. "),(0,o.kt)("p",null,"Connectors define engineering and production aspects of ingesting the data, and are usually defined by the DevOps or\nDataOps teams in an organization. "),(0,o.kt)("p",null,"Amongst others, connectors deal with:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Where to find the data source"),(0,o.kt)("li",{parentName:"ol"},"Authentication and authorization to data sources"),(0,o.kt)("li",{parentName:"ol"},"Schemas and parsing data items"),(0,o.kt)("li",{parentName:"ol"},"Ordering and parallel consumption options"),(0,o.kt)("li",{parentName:"ol"},"Rate Limiting / Throttling"),(0,o.kt)("li",{parentName:"ol"},"Error Handling"),(0,o.kt)("li",{parentName:"ol"},"PII masking")))}d.isMDXComponent=!0}}]);