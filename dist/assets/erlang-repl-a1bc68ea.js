import{g as s}from"./index-a51ec9ca.js";function u(r,o){for(var t=0;t<o.length;t++){const e=o[t];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in r)){const a=Object.getOwnPropertyDescriptor(e,n);a&&Object.defineProperty(r,n,a.get?a:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i,l;function f(){if(l)return i;l=1;function r(e){return e?typeof e=="string"?e:e.source:null}function o(...e){return e.map(a=>r(a)).join("")}function t(e){return{name:"Erlang REPL",keywords:{built_in:"spawn spawn_link self",keyword:"after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"},contains:[{className:"meta",begin:"^[0-9]+> ",relevance:10},e.COMMENT("%","$"),{className:"number",begin:"\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",relevance:0},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{begin:o(/\?(::)?/,/([A-Z]\w*)/,/((::)[A-Z]\w*)*/)},{begin:"->"},{begin:"ok"},{begin:"!"},{begin:"(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",relevance:0},{begin:"[A-Z][a-zA-Z0-9_']*",relevance:0}]}}return i=t,i}var c=f();const g=s(c),d=u({__proto__:null,default:g},[c]);export{d as e};
