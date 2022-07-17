"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5076],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(r),f=a,m=c["".concat(u,".").concat(f)]||c[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={title:"Derived feature (or How to do Joins?)"},i=void 0,s={unversionedId:"guides/labsdk/derived",id:"guides/labsdk/derived",title:"Derived feature (or How to do Joins?)",description:'Raptor is introducing a new way to join between pieces of data - "dependencies".',source:"@site/docs/guides/labsdk/4-derived.md",sourceDirName:"guides/labsdk",slug:"/guides/labsdk/derived",permalink:"/docs/guides/labsdk/derived",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/guides/labsdk/4-derived.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Derived feature (or How to do Joins?)"},sidebar:"guides",previous:{title:"Counters",permalink:"/docs/guides/labsdk/simple-counter"},next:{title:"Feature Set",permalink:"/docs/guides/labsdk/featureset"}},u={},d=[],l={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Raptor is introducing a new way to join between pieces of data - "dependencies".'),(0,a.kt)("p",null,"As explained ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/labsdk/basics"},"earlier"),', we write features as functions and working in the context of a "row-level"\napproach.'),(0,a.kt)("p",null,'To implement a feature that "joins" a data from two different sources, we just need to call another feature that\ncalculates the data we need.'),(0,a.kt)("h1",{id:"rate-of-two-features"},"Rate of two features"),(0,a.kt)("p",null,'A relatively simple example for this is the following "rate" feature:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'@raptor.register(float, freshness=\'1m\', staleness=\'10h\')\ndef views_purchases_rate(**req: RaptorRequest):\n    """rate of two features"""\n    views, ts = get_feature("views.default[count], req["entity_id"])\n    purchases, ts = get_feature("purchases.default[count], req["entity_id"])\n    return views / purchases\n')),(0,a.kt)("p",null,"In this code, we're using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/pyexp/raptor-built-ins#get-feature"},(0,a.kt)("inlineCode",{parentName:"a"},"feature_get()"))," function to request\nthe values of ",(0,a.kt)("inlineCode",{parentName:"p"},"views.default[count]")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"purchases.default[count]")," for our ",(0,a.kt)("inlineCode",{parentName:"p"},"entity_id"),". Then, we are returning the rate\nof the two. Simple right?"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Shorthand for ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"feature_get")),(0,a.kt)("p",{parentName:"admonition"},"You can use the function ",(0,a.kt)("inlineCode",{parentName:"p"},"f()")," as an alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"feature_get()"))))}p.isMDXComponent=!0}}]);