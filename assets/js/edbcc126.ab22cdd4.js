"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5596],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=l(r),f=a,d=g["".concat(c,".").concat(f)]||g[f]||p[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9272:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="Aggregations",s={unversionedId:"reference/how-does-raptor-work/features/aggregations",id:"reference/how-does-raptor-work/features/aggregations",title:"Aggregations",description:"Often the Feature we want to calculate is an aggregate of multiple events, for example - the sum number of visits to a product page, the average time per slide, or the variance of the length of interactions with the user.",source:"@site/docs/reference/how-does-raptor-work/features/aggregations.md",sourceDirName:"reference/how-does-raptor-work/features",slug:"/reference/how-does-raptor-work/features/aggregations",permalink:"/docs/reference/how-does-raptor-work/features/aggregations",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/reference/how-does-raptor-work/features/aggregations.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"Features",permalink:"/docs/reference/how-does-raptor-work/features/"},next:{title:"Feature Definitions",permalink:"/docs/reference/how-does-raptor-work/features/feature-definitions"}},c={},l=[],u={toc:l};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aggregations"},"Aggregations"),(0,a.kt)("p",null,"Often the Feature we want to calculate is an aggregate of multiple events, for example - the sum number of visits to a product page, the average time per slide, or the variance of the length of interactions with the user."),(0,a.kt)("p",null,"Calculating aggregations in real-time in production requires careful balancing between resources - storage (state), computation, and connections. Raptor walks this balance ensuring that operational systems are not overloaded with queries, that data is fresh and precise (to reduce drift), and storage is reasonable."),(0,a.kt)("p",null,"When creating a ",(0,a.kt)("a",{parentName:"p",href:"./"},"Feature Definition"),", you can select the aggregation type and the time length of the bucket to aggregate on. Future versions might also offer buckets capped with a number of items or spanning user sessions. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Raptor intenal aggregation algorithm",src:r(7719).Z,width:"490",height:"178"})),(0,a.kt)("p",null,"Internally, Raptor applies a sliding window and incrementally caches the incoming results to calculate aggregations."))}p.isMDXComponent=!0},7719:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/counters.drawio-d5ba5d3533405a97c953f109407ad961.png"}}]);