import{g as b}from"./index-98816979.js";function A(r,e){for(var a=0;a<e.length;a++){const o=e[a];if(typeof o!="string"&&!Array.isArray(o)){for(const n in o)if(n!=="default"&&!(n in r)){const t=Object.getOwnPropertyDescriptor(o,n);t&&Object.defineProperty(r,n,t.get?t:{enumerable:!0,get:()=>o[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var c,i;function f(){if(i)return c;i=1;function r(e){const a={begin:/[a-z][A-Za-z0-9_]*/,relevance:0},o={className:"symbol",variants:[{begin:/[A-Z][a-zA-Z0-9_]*/},{begin:/_[A-Za-z0-9_]*/}],relevance:0},n={begin:/\(/,end:/\)/,relevance:0},t={begin:/\[/,end:/\]/},_={className:"comment",begin:/%/,end:/$/,contains:[e.PHRASAL_WORDS_MODE]},l={className:"string",begin:/`/,end:/`/,contains:[e.BACKSLASH_ESCAPE]},E={className:"string",begin:/0'(\\'|.)/},O={className:"string",begin:/0'\\s/},s=[a,o,n,{begin:/:-/},t,_,e.C_BLOCK_COMMENT_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,l,E,O,e.C_NUMBER_MODE];return n.contains=s,t.contains=s,{name:"Prolog",contains:s.concat([{begin:/\.$/}])}}return c=r,c}var g=f();const p=b(g),P=A({__proto__:null,default:p},[g]);export{P as p};