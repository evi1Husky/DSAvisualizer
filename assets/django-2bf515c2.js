import{g as c}from"./index-a51ec9ca.js";function d(n,e){for(var t=0;t<e.length;t++){const a=e[t];if(typeof a!="string"&&!Array.isArray(a)){for(const r in a)if(r!=="default"&&!(r in n)){const i=Object.getOwnPropertyDescriptor(a,r);i&&Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:()=>a[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var s,o;function u(){if(o)return s;o=1;function n(e){const t={begin:/\|[A-Za-z]+:?/,keywords:{name:"truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone"},contains:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE]};return{name:"Django",aliases:["jinja"],case_insensitive:!0,subLanguage:"xml",contains:[e.COMMENT(/\{%\s*comment\s*%\}/,/\{%\s*endcomment\s*%\}/),e.COMMENT(/\{#/,/#\}/),{className:"template-tag",begin:/\{%/,end:/%\}/,contains:[{className:"name",begin:/\w+/,keywords:{name:"comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim"},starts:{endsWithParent:!0,keywords:"in by as",contains:[t],relevance:0}}]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[t]}]}}return s=n,s}var l=u();const g=c(l),m=d({__proto__:null,default:g},[l]);export{m as d};
