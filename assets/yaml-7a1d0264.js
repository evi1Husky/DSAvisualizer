import{g as A}from"./index-a51ec9ca.js";function p(t,a){for(var n=0;n<a.length;n++){const e=a[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const i=Object.getOwnPropertyDescriptor(e,r);i&&Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var c,E;function T(){if(E)return c;E=1;function t(a){var n="true false yes no null",e="[\\w#;/?:@&=+$,.~*'()[\\]]+",r={className:"attr",variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ 	]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ 	]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ 	]|$)"}]},i={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},g={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[a.BACKSLASH_ESCAPE,i]},m=a.inherit(g,{variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),v="[0-9]{4}(-[0-9][0-9]){0,2}",u="([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?",N="(\\.[0-9]*)?",d="([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?",R={className:"number",begin:"\\b"+v+u+N+d+"\\b"},s={end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},_={begin:/\{/,end:/\}/,contains:[s],illegal:"\\n",relevance:0},y={begin:"\\[",end:"\\]",contains:[s],illegal:"\\n",relevance:0},b=[r,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+e},{className:"type",begin:"!<"+e+">"},{className:"type",begin:"!"+e},{className:"type",begin:"!!"+e},{className:"meta",begin:"&"+a.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+a.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},a.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},R,{className:"number",begin:a.C_NUMBER_RE+"\\b",relevance:0},_,y,g],l=[...b];return l.pop(),l.push(m),s.contains=l,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:b}}return c=t,c}var o=T();const f=A(o),O=p({__proto__:null,default:f},[o]);export{O as y};
