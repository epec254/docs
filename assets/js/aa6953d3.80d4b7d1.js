"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4183],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,c(c({ref:n},l),{},{components:t})):r.createElement(m,c({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<a;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6138:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],s={},i="Connectors",u={unversionedId:"reference/how-does-natun-work/connectors",id:"reference/how-does-natun-work/connectors",title:"Connectors",description:"Connectors define how can your Features draw data from external data sources. These can be streaming sources, analytical databases, CRM systems, and others.",source:"@site/docs/reference/how-does-natun-work/connectors.md",sourceDirName:"reference/how-does-natun-work",slug:"/reference/how-does-natun-work/connectors",permalink:"/docs/reference/how-does-natun-work/connectors",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/how-does-natun-work/connectors.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"Digestion",permalink:"/docs/reference/how-does-natun-work/feature-builders/digestion"},next:{title:"Deployment",permalink:"/docs/reference/how-does-natun-work/deployment"}},l={},p=[],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connectors"},"Connectors"),(0,a.kt)("p",null,"Connectors define how can your Features draw data from external data sources. These can be streaming sources, analytical databases, CRM systems, and others. "),(0,a.kt)("p",null,"Connectors define engineering and production aspects of ingesting the data, and are usually defined by the DevOps or DataOps teams in an organization. "),(0,a.kt)("p",null,"Amongst others, connectors deal with:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Where to find the data source"),(0,a.kt)("li",{parentName:"ol"},"Authentication and authorization to data sources"),(0,a.kt)("li",{parentName:"ol"},"Schemas and parsing data items"),(0,a.kt)("li",{parentName:"ol"},"Ordering and parallel consumption options"),(0,a.kt)("li",{parentName:"ol"},"Rate Limiting / Throttling"),(0,a.kt)("li",{parentName:"ol"},"Error Handling"),(0,a.kt)("li",{parentName:"ol"},"PII masking")))}f.isMDXComponent=!0}}]);