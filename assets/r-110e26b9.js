import{g as b}from"./index-a51ec9ca.js";function d(r,s){for(var a=0;a<s.length;a++){const i=s[a];if(typeof i!="string"&&!Array.isArray(i)){for(const e in i)if(e!=="default"&&!(e in r)){const t=Object.getOwnPropertyDescriptor(i,e);t&&Object.defineProperty(r,e,t.get?t:{enumerable:!0,get:()=>i[e]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var l,g;function f(){if(g)return l;g=1;function r(e){return e?typeof e=="string"?e:e.source:null}function s(e){return a("(?=",e,")")}function a(...e){return e.map(o=>r(o)).join("")}function i(e){const t=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,o=/[a-zA-Z][a-zA-Z_0-9]*/;return{name:"R",illegal:/->/,keywords:{$pattern:t,keyword:"function if in break next repeat else for while",literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"},compilerExtensions:[(n,A)=>{if(!n.beforeMatch)return;if(n.starts)throw new Error("beforeMatch cannot be used with starts");const c=Object.assign({},n);Object.keys(n).forEach(u=>{delete n[u]}),n.begin=a(c.beforeMatch,s(c.begin)),n.starts={relevance:0,contains:[Object.assign(c,{endsParent:!0})]},n.relevance=0,delete c.beforeMatch}],contains:[e.COMMENT(/#'/,/$/,{contains:[{className:"doctag",begin:"@examples",starts:{contains:[{begin:/\n/},{begin:/#'\s*(?=@[a-zA-Z]+)/,endsParent:!0},{begin:/#'/,end:/$/,excludeBegin:!0}]}},{className:"doctag",begin:"@param",end:/$/,contains:[{className:"variable",variants:[{begin:t},{begin:/`(?:\\.|[^`\\])+`/}],endsParent:!0}]},{className:"doctag",begin:/@[a-zA-Z]+/},{className:"meta-keyword",begin:/\\[a-zA-Z]+/}]}),e.HASH_COMMENT_MODE,{className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',relevance:0},{begin:"'",end:"'",relevance:0}]},{className:"number",relevance:0,beforeMatch:/([^a-zA-Z0-9._])/,variants:[{match:/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/},{match:/0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/},{match:/(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/}]},{begin:"%",end:"%"},{begin:a(o,"\\s+<-\\s+")},{begin:"`",end:"`",contains:[{begin:/\\./}]}]}}return l=i,l}var m=f();const _=b(m),E=d({__proto__:null,default:_},[m]);export{E as r};
