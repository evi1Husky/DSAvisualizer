import{g as _}from"./index-a51ec9ca.js";function g(r,s){for(var a=0;a<s.length;a++){const e=s[a];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const n=Object.getOwnPropertyDescriptor(e,t);n&&Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o,i;function p(){if(i)return o;i=1;function r(s){const a="primitive rsc_template",e="group clone ms master location colocation order fencing_topology rsc_ticket acl_target acl_group user role tag xml",t="property rsc_defaults op_defaults",n="params meta operations op rule attributes utilization",l="read write deny defined not_defined in_range date spec in ref reference attribute type xpath version and or lt gt tag lte gte eq ne \\",m="number string",d="Master Started Slave Stopped start promote demote stop monitor true false";return{name:"crmsh",aliases:["crm","pcmk"],case_insensitive:!0,keywords:{keyword:n+" "+l+" "+m,literal:d},contains:[s.HASH_COMMENT_MODE,{beginKeywords:"node",starts:{end:"\\s*([\\w_-]+:)?",starts:{className:"title",end:"\\s*[\\$\\w_][\\w_-]*"}}},{beginKeywords:a,starts:{className:"title",end:"\\s*[\\$\\w_][\\w_-]*",starts:{end:"\\s*@?[\\w_][\\w_\\.:-]*"}}},{begin:"\\b("+e.split(" ").join("|")+")\\s+",keywords:e,starts:{className:"title",end:"[\\$\\w_][\\w_-]*"}},{beginKeywords:t,starts:{className:"title",end:"\\s*([\\w_-]+:)?"}},s.QUOTE_STRING_MODE,{className:"meta",begin:"(ocf|systemd|service|lsb):[\\w_:-]+",relevance:0},{className:"number",begin:"\\b\\d+(\\.\\d+)?(ms|s|h|m)?",relevance:0},{className:"literal",begin:"[-]?(infinity|inf)",relevance:0},{className:"attr",begin:/([A-Za-z$_#][\w_-]+)=/,relevance:0},{className:"tag",begin:"</?",end:"/?>",relevance:0}]}}return o=r,o}var c=p();const u=_(c),b=g({__proto__:null,default:u},[c]);export{b as c};
