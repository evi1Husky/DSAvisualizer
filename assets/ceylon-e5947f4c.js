import{g as u}from"./index-a51ec9ca.js";function f(s,r){for(var t=0;t<r.length;t++){const e=r[t];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in s)){const a=Object.getOwnPropertyDescriptor(e,n);a&&Object.defineProperty(s,n,a.get?a:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var o,i;function d(){if(i)return o;i=1;function s(r){const t="assembly module package import alias class interface object given value assign void function new of extends satisfies abstracts in out return break continue throw assert dynamic if else switch case for while try catch finally then let this outer super is exists nonempty",e="shared abstract formal default actual variable late native deprecated final sealed annotation suppressWarnings small",n="doc by license see throws tagged",a={className:"subst",excludeBegin:!0,excludeEnd:!0,begin:/``/,end:/``/,keywords:t,relevance:10},c=[{className:"string",begin:'"""',end:'"""',relevance:10},{className:"string",begin:'"',end:'"',contains:[a]},{className:"string",begin:"'",end:"'"},{className:"number",begin:"#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?",relevance:0}];return a.contains=c,{name:"Ceylon",keywords:{keyword:t+" "+e,meta:n},illegal:"\\$[^01]|#[^0-9a-fA-F]",contains:[r.C_LINE_COMMENT_MODE,r.COMMENT("/\\*","\\*/",{contains:["self"]}),{className:"meta",begin:'@[a-z]\\w*(?::"[^"]*")?'}].concat(c)}}return o=s,o}var l=d();const g=u(l),y=f({__proto__:null,default:g},[l]);export{y as c};
