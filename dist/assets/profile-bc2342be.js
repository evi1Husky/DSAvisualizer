import{g as f}from"./index-a51ec9ca.js";function u(r,e){for(var o=0;o<e.length;o++){const t=e[o];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in r)){const i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var a,c;function s(){if(c)return a;c=1;function r(e){return{name:"Python profiler",contains:[e.C_NUMBER_MODE,{begin:"[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",end:":",excludeEnd:!0},{begin:"(ncalls|tottime|cumtime)",end:"$",keywords:"ncalls tottime|10 cumtime|10 filename",relevance:10},{begin:"function calls",end:"$",contains:[e.C_NUMBER_MODE],relevance:10},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",begin:"\\(",end:"\\)$",excludeBegin:!0,excludeEnd:!0,relevance:0}]}}return a=r,a}var l=s();const d=f(l),_=u({__proto__:null,default:d},[l]);export{_ as p};
