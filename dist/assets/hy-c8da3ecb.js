import{g as E}from"./index-a51ec9ca.js";function O(i,r){for(var t=0;t<r.length;t++){const e=r[t];if(typeof e!="string"&&!Array.isArray(e)){for(const a in e)if(a!=="default"&&!(a in i)){const n=Object.getOwnPropertyDescriptor(e,a);n&&Object.defineProperty(i,a,n.get?n:{enumerable:!0,get:()=>e[a]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var c,h;function T(){if(h)return c;h=1;function i(r){var t="a-zA-Z_\\-!.?+*=<>&#'",e="["+t+"]["+t+"0-9/;:]*",a={$pattern:e,"builtin-name":"!= % %= & &= * ** **= *= *map + += , --build-class-- --import-- -= . / // //= /= < << <<= <= = > >= >> >>= @ @= ^ ^= abs accumulate all and any ap-compose ap-dotimes ap-each ap-each-while ap-filter ap-first ap-if ap-last ap-map ap-map-when ap-pipe ap-reduce ap-reject apply as-> ascii assert assoc bin break butlast callable calling-module-name car case cdr chain chr coll? combinations compile compress cond cons cons? continue count curry cut cycle dec def default-method defclass defmacro defmacro-alias defmacro/g! defmain defmethod defmulti defn defn-alias defnc defnr defreader defseq del delattr delete-route dict-comp dir disassemble dispatch-reader-macro distinct divmod do doto drop drop-last drop-while empty? end-sequence eval eval-and-compile eval-when-compile even? every? except exec filter first flatten float? fn fnc fnr for for* format fraction genexpr gensym get getattr global globals group-by hasattr hash hex id identity if if* if-not if-python2 import in inc input instance? integer integer-char? integer? interleave interpose is is-coll is-cons is-empty is-even is-every is-float is-instance is-integer is-integer-char is-iterable is-iterator is-keyword is-neg is-none is-not is-numeric is-odd is-pos is-string is-symbol is-zero isinstance islice issubclass iter iterable? iterate iterator? keyword keyword? lambda last len let lif lif-not list* list-comp locals loop macro-error macroexpand macroexpand-1 macroexpand-all map max merge-with method-decorator min multi-decorator multicombinations name neg? next none? nonlocal not not-in not? nth numeric? oct odd? open or ord partition permutations pos? post-route postwalk pow prewalk print product profile/calls profile/cpu put-route quasiquote quote raise range read read-str recursive-replace reduce remove repeat repeatedly repr require rest round route route-with-methods rwm second seq set-comp setattr setv some sorted string string? sum switch symbol? take take-nth take-while tee try unless unquote unquote-splicing vars walk when while with with* with-decorator with-gensyms xi xor yield yield-from zero? zip zip-longest | |= ~"},n="[-+]?\\d+(\\.\\d+)?",w={begin:e,relevance:0},d={className:"number",begin:n,relevance:0},p=r.inherit(r.QUOTE_STRING_MODE,{illegal:null}),m=r.COMMENT(";","$",{relevance:0}),u={className:"literal",begin:/\b([Tt]rue|[Ff]alse|nil|None)\b/},o={begin:"[\\[\\{]",end:"[\\]\\}]"},f={className:"comment",begin:"\\^"+e},g=r.COMMENT("\\^\\{","\\}"),y={className:"symbol",begin:"[:]{1,2}"+e},s={begin:"\\(",end:"\\)"},l={endsWithParent:!0,relevance:0},N={className:"name",relevance:0,keywords:a,begin:e,starts:l},v=[s,p,f,g,m,y,o,d,u,w];return s.contains=[r.COMMENT("comment",""),N,l],l.contains=v,o.contains=v,{name:"Hy",aliases:["hylang"],illegal:/\S/,contains:[r.SHEBANG(),s,p,f,g,m,y,o,d,u]}}return c=i,c}var b=T();const M=E(b),_=O({__proto__:null,default:M},[b]);export{_ as h};
