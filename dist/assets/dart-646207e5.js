import{g as u}from"./index-3a86124e.js";function g(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in i)){const a=Object.getOwnPropertyDescriptor(n,r);a&&Object.defineProperty(i,r,a.get?a:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var o,s;function b(){if(s)return o;s=1;function i(e){const t={className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"}]},n={className:"subst",variants:[{begin:/\$\{/,end:/\}/}],keywords:"true false null this is new super"},r={className:"string",variants:[{begin:"r'''",end:"'''"},{begin:'r"""',end:'"""'},{begin:"r'",end:"'",illegal:"\\n"},{begin:'r"',end:'"',illegal:"\\n"},{begin:"'''",end:"'''",contains:[e.BACKSLASH_ESCAPE,t,n]},{begin:'"""',end:'"""',contains:[e.BACKSLASH_ESCAPE,t,n]},{begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE,t,n]},{begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE,t,n]}]};n.contains=[e.C_NUMBER_MODE,r];const a=["Comparable","DateTime","Duration","Function","Iterable","Iterator","List","Map","Match","Object","Pattern","RegExp","Set","Stopwatch","String","StringBuffer","StringSink","Symbol","Type","Uri","bool","double","int","num","Element","ElementList"],l=a.map(d=>`${d}?`);return{name:"Dart",keywords:{keyword:"abstract as assert async await break case catch class const continue covariant default deferred do dynamic else enum export extends extension external factory false final finally for Function get hide if implements import in inferface is late library mixin new null on operator part required rethrow return set show static super switch sync this throw true try typedef var void while with yield",built_in:a.concat(l).concat(["Never","Null","dynamic","print","document","querySelector","querySelectorAll","window"]),$pattern:/[A-Za-z][A-Za-z0-9_]*\??/},contains:[r,e.COMMENT(/\/\*\*(?!\/)/,/\*\//,{subLanguage:"markdown",relevance:0}),e.COMMENT(/\/{3,} ?/,/$/,{contains:[{subLanguage:"markdown",begin:".",end:"$",relevance:0}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"class",beginKeywords:"class interface",end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},e.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"},{begin:"=>"}]}}return o=i,o}var c=b();const E=u(c),m=g({__proto__:null,default:E},[c]);export{m as d};