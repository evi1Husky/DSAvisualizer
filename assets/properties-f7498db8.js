import{g}from"./index-a51ec9ca.js";function f(a,s){for(var r=0;r<s.length;r++){const t=s[r];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in a)){const n=Object.getOwnPropertyDescriptor(t,e);n&&Object.defineProperty(a,e,n.get?n:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var c,u;function b(){if(u)return c;u=1;function a(s){var r="[ \\t\\f]*",t="[ \\t\\f]+",e=r+"[:=]"+r,n=t,p="("+e+"|"+n+")",i="([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",o="([^\\\\:= \\t\\f\\n]|\\\\.)+",l={end:p,relevance:0,starts:{className:"string",end:/$/,relevance:0,contains:[{begin:"\\\\\\\\"},{begin:"\\\\\\n"}]}};return{name:".properties",case_insensitive:!0,illegal:/\S/,contains:[s.COMMENT("^\\s*[!#]","$"),{returnBegin:!0,variants:[{begin:i+e,relevance:1},{begin:i+n,relevance:0}],contains:[{className:"attr",begin:i,endsParent:!0,relevance:0}],starts:l},{begin:o+p,returnBegin:!0,relevance:0,contains:[{className:"meta",begin:o,endsParent:!0,relevance:0}],starts:l},{className:"attr",relevance:0,begin:o+r+"$"}]}}return c=a,c}var v=b();const _=g(v),E=f({__proto__:null,default:_},[v]);export{E as p};
