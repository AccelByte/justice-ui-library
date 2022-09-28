import{jsxs as e,Fragment as t,jsx as s}from"react/jsx-runtime";import*as r from"react";import{ValidFieldText as n}from"./ValidFieldText.js";import{c as a}from"../../index-6ea95111.js";import{R as o}from"../../index.es-62933797.js";import{s as i}from"../../style-inject.es-1f59c1d0.js";import{Button as c}from"../Button/index.js";import{translation as l}from"../../utils/i18n/index.js";import"../../fa_icons-aa14317c.js";import{p as h}from"../../purify.es-49746c08.js";import{debounce as d}from"../../utils/common.js";import{generatePassword as u}from"../../utils/password.js";import{PASSWORD_STRENGTH_METER as p}from"../../constants/password.js";import{DEFAULT_PASSWORD_AND_SECRET_REGEX as g}from"../../constants/common.js";import"../../index-a6f5f6a1.js";import"../../objectWithoutPropertiesLoose-1e1a7051.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"styled-components";import"../../objectWithoutProperties-ff712cd0.js";import"../../get-ae46b391.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../index-3f17275b.js";import"../../index-dd80248b.js";import"../../context-f854a00e.js";import"../../use-memo-one.esm-19c0a4a5.js";import"../../Label-958d94a9.js";import"../../core.esm-ab7112b3.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../index-23fbd8ab.js";import"../../noop-2d37c277.js";import"../../slicedToArray-a622878d.js";import"../../nonIterableRest-e93b6547.js";import"../../index-72b69d08.js";import"../../index-72ec35ef.js";import"../../server-d796a789.js";import"stream";import"../Spinner/index.js";import"../../utils/typography.js";import"../../types/enum.js";import"../Select/index.js";import"../../createSelect-617ff574.js";import"../../memoize-one.esm-8827f1ac.js";import"../../Select-4a98500c.js";import"../InlinePopover/index.js";import"../../math-bf9ecd01.js";import"../../elevation-6b1ae944.js";import"../../Popper-914da2a0.js";import"../../utils/input.js";import"../../utils/i18n/loadLanguages.js";import"../../objectSpread-31108fba.js";import"crypto";i('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.valid-field-password{font-family:Roboto,sans-serif;position:relative}.valid-field-password .password-field-text input{padding-right:24px}.valid-field-password .password-field-text .password-eye-icon{color:#687792;cursor:pointer}.valid-field-password .password-field-text .password-eye-icon:hover{color:#232831}.valid-field-password .generate-password{color:#0b6cff;cursor:pointer;display:inline-block;padding:0;text-decoration:none}.valid-field-password .generate-password>span>span{font-size:12px}.valid-field-password .generate-password :focus{outline:none}.valid-field-password .password-strength-meter .strength-meter-bar{grid-gap:5px;border-radius:4px;display:grid;grid-auto-flow:column;height:5px;margin:10px 0}.valid-field-password .password-strength-meter .strength-meter-bar .bar{background-color:#e1e4e9;border-radius:4px}.valid-field-password .password-strength-meter .strength-meter-bar.veryWeak .fill{background-color:#ac1616}.valid-field-password .password-strength-meter .strength-meter-bar.weak .fill{background-color:#e32626}.valid-field-password .password-strength-meter .strength-meter-bar.fair .fill{background-color:#f1a20a}.valid-field-password .password-strength-meter .strength-meter-bar.strong .fill{background-color:#008940}.valid-field-password .password-strength-meter .strength-meter-bar.veryStrong .fill{background-color:#00642e}.valid-field-password .password-strength-meter .strength-meter-label{color:#687792;font-size:12px}.valid-field-password .password-strength-meter .strength-meter-level{font-size:12px}.valid-field-password .password-strength-meter .strength-meter-level.veryWeak,.valid-field-password .password-strength-meter .strength-meter-level.weak{color:#e32626}.valid-field-password .password-strength-meter .strength-meter-level.fair{color:#d18c09}.valid-field-password .password-strength-meter .strength-meter-level.strong,.valid-field-password .password-strength-meter .strength-meter-level.veryStrong{color:#008940}');const m=(e,t)=>e.push.apply(e,t),f=(e,t)=>e.split("").map((e=>t[e]||e)).join(""),b=e=>e.sort(((e,t)=>e.i-t.i||e.j-t.j)),w=e=>{const t={};let s=1;return e.forEach((e=>{t[e]=s,s+=1})),t};const y={4:[[1,2],[2,3]],5:[[1,3],[2,3],[2,4]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]},k=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,j=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,v=/^[A-Z\xbf-\xdf]+$/,x=/^[^a-z\xdf-\xff]+$/,M=/^[a-z\xdf-\xff]+$/,T=/^[^A-Z\xbf-\xdf]+$/,I=/[a-z\xdf-\xff]/,S=/[A-Z\xbf-\xdf]/,E=/[^A-Za-z\xbf-\xdf]/gi,A=/^\d+$/,D=(new Date).getFullYear(),P={recentYear:/19\d\d|200\d|201\d|202\d/g};class C{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],s=this.filterNoise(t);return b(s)}getMatchesWithSeparator(e){const t=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let r=0;r<=Math.abs(e.length-6);r+=1)for(let n=r+5;n<=r+9&&!(n>=e.length);n+=1){const a=e.slice(r,+n+1||9e9),o=s.exec(a);if(null!=o){const e=this.mapIntegersToDayMonthYear([parseInt(o[1],10),parseInt(o[3],10),parseInt(o[4],10)]);null!=e&&t.push({pattern:"date",token:a,i:r,j:n,separator:o[2],year:e.year,month:e.month,day:e.day})}}return t}getMatchesWithoutSeparator(e){const t=[],s=/^\d{4,8}$/,r=e=>Math.abs(e.year-D);for(let n=0;n<=Math.abs(e.length-4);n+=1)for(let a=n+3;a<=n+7&&!(a>=e.length);a+=1){const o=e.slice(n,+a+1||9e9);if(s.exec(o)){const e=[],s=o.length;if(y[s].forEach((([t,s])=>{const r=this.mapIntegersToDayMonthYear([parseInt(o.slice(0,t),10),parseInt(o.slice(t,s),10),parseInt(o.slice(s),10)]);null!=r&&e.push(r)})),e.length>0){let s=e[0],i=r(e[0]);e.slice(1).forEach((e=>{const t=r(e);t<i&&(s=e,i=t)})),t.push({pattern:"date",token:o,i:n,j:a,separator:"",year:s.year,month:s.month,day:s.day})}}}return t}filterNoise(e){return e.filter((t=>{let s=!1;const r=e.length;for(let n=0;n<r;n+=1){const r=e[n];if(t!==r&&r.i<=t.i&&r.j>=t.j){s=!0;break}}return!s}))}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,s=0,r=0;for(let n=0,a=e.length;n<a;n+=1){const a=e[n];if(a>99&&a<1e3||a>2050)return null;a>31&&(s+=1),a>12&&(t+=1),a<=0&&(r+=1)}return s>=2||3===t||r>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],s=t.length;for(let e=0;e<s;e+=1){const[s,r]=t[e];if(1e3<=s&&s<=2050){const e=this.mapIntegersToDayMonth(r);return null!=e?{year:s,month:e.month,day:e.day}:null}}for(let e=0;e<s;e+=1){const[s,r]=t[e],n=this.mapIntegersToDayMonth(r);if(null!=n)return{year:this.twoToFourDigitYear(s),month:n.month,day:n.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let e=0;e<t.length;e+=1){const s=t[e],r=s[0],n=s[1];if(r>=1&&r<=31&&n>=1&&n<=12)return{day:r,month:n}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}const O=new Uint32Array(65536),L=(e,t)=>{if(e.length<t.length){const s=t;t=e,e=s}return 0===t.length?e.length:e.length<=32?((e,t)=>{const s=e.length,r=t.length,n=1<<s-1;let a=-1,o=0,i=s,c=s;for(;c--;)O[e.charCodeAt(c)]|=1<<c;for(c=0;c<r;c++){let e=O[t.charCodeAt(c)];const s=e|o;e|=(e&a)+a^a,o|=~(e|a),a&=e,o&n&&i++,a&n&&i--,o=o<<1|1,a=a<<1|~(s|o),o&=s}for(c=s;c--;)O[e.charCodeAt(c)]=0;return i})(e,t):((e,t)=>{const s=t.length,r=e.length,n=[],a=[],o=Math.ceil(s/32),i=Math.ceil(r/32);for(let e=0;e<o;e++)a[e]=-1,n[e]=0;let c=0;for(;c<i-1;c++){let o=0,i=-1;const l=32*c,h=Math.min(32,r)+l;for(let t=l;t<h;t++)O[e.charCodeAt(t)]|=1<<t;for(let e=0;e<s;e++){const s=O[t.charCodeAt(e)],r=a[e/32|0]>>>e%32&1,c=n[e/32|0]>>>e%32&1,l=s|o,h=((s|c)&i)+i^i|s|c;let d=o|~(h|i),u=i&h;d>>>31^r&&(a[e/32|0]^=1<<e%32),u>>>31^c&&(n[e/32|0]^=1<<e%32),d=d<<1|r,u=u<<1|c,i=u|~(l|d),o=d&l}for(let t=l;t<h;t++)O[e.charCodeAt(t)]=0}let l=0,h=-1;const d=32*c,u=Math.min(32,r-d)+d;for(let t=d;t<u;t++)O[e.charCodeAt(t)]|=1<<t;let p=r;for(let e=0;e<s;e++){const s=O[t.charCodeAt(e)],o=a[e/32|0]>>>e%32&1,i=n[e/32|0]>>>e%32&1,c=s|l,d=((s|i)&h)+h^h|s|i;let u=l|~(d|h),g=h&d;p+=u>>>r%32-1&1,p-=g>>>r%32-1&1,u>>>31^o&&(a[e/32|0]^=1<<e%32),g>>>31^i&&(n[e/32|0]^=1<<e%32),u=u<<1|o,g=g<<1|i,h=g|~(c|u),l=u&c}for(let t=d;t<u;t++)O[e.charCodeAt(t)]=0;return p})(e,t)},N=(e,t,s)=>{let r=0;const n=Object.keys(t).find((t=>{const n=((e,t,s)=>{const r=e.length<=t.length,n=e.length<=s;return r||n?Math.ceil(e.length/4):s})(e,t,s),a=L(e,t),o=a<=n;return o&&(r=a),o}));return n?{levenshteinDistance:r,levenshteinDistanceEntry:n}:{}};var q={a:["4","@"],b:["8"],c:["(","{","[","<"],e:["3"],g:["6","9"],i:["1","!","|"],l:["1","|","7"],o:["0"],s:["$","5"],t:["+","7"],x:["%"],z:["2"]},G={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs",pwned:"pwned"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed",pwned:"pwned"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};const R=new class{constructor(){this.matchers={},this.l33tTable=q,this.dictionary={userInputs:[]},this.rankedDictionaries={},this.translations=G,this.graphs={},this.availableGraphs=[],this.useLevenshteinDistance=!1,this.levenshteinThreshold=2,this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs),void 0!==e.useLevenshteinDistance&&(this.useLevenshteinDistance=e.useLevenshteinDistance),void 0!==e.levenshteinThreshold&&(this.levenshteinThreshold=e.levenshteinThreshold)}setTranslations(e){if(!this.checkCustomTranslations(e))throw new Error("Invalid translations object fallback to keys");this.translations=e}checkCustomTranslations(e){let t=!0;return Object.keys(G).forEach((s=>{if(s in e){const r=s;Object.keys(G[r]).forEach((s=>{s in e[r]||(t=!1)}))}else t=!1})),t}setRankedDictionaries(){const e={};Object.keys(this.dictionary).forEach((t=>{e[t]=this.getRankedDictionary(t)})),this.rankedDictionaries=e}getRankedDictionary(e){const t=this.dictionary[e];if("userInputs"===e){const e=[];return t.forEach((t=>{const s=typeof t;"string"!==s&&"number"!==s&&"boolean"!==s||e.push(t.toString().toLowerCase())})),w(e)}return w(t)}extendUserInputsDictionary(e){this.dictionary.userInputs?this.dictionary.userInputs=[...this.dictionary.userInputs,...e]:this.dictionary.userInputs=e,this.rankedDictionaries.userInputs=this.getRankedDictionary("userInputs")}addMatcher(e,t){this.matchers[e]?console.info("Matcher already exists"):this.matchers[e]=t}};class W{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map((t=>({...t,token:t.token.split("").reverse().join(""),reversed:!0,i:e.length-1-t.j,j:e.length-1-t.i})))}}class F{constructor(e){this.defaultMatch=e}match({password:e}){const t=[],s=this.enumerateL33tSubs(this.relevantL33tSubtable(e,R.l33tTable));for(let n=0;n<s.length;n+=1){const a=s[n];if(r=a,0===Object.keys(r).length)break;const o=f(e,a);this.defaultMatch({password:o}).forEach((s=>{const r=e.slice(s.i,+s.j+1||9e9);if(r.toLowerCase()!==s.matchedWord){const e={};Object.keys(a).forEach((t=>{const s=a[t];-1!==r.indexOf(t)&&(e[t]=s)}));const n=Object.keys(e).map((t=>`${t} -> ${e[t]}`)).join(", ");t.push({...s,l33t:!0,token:r,sub:e,subDisplay:n})}}))}var r;return t.filter((e=>e.token.length>1))}relevantL33tSubtable(e,t){const s={},r={};return e.split("").forEach((e=>{s[e]=!0})),Object.keys(t).forEach((e=>{const n=t[e].filter((e=>e in s));n.length>0&&(r[e]=n)})),r}enumerateL33tSubs(e){const t=Object.keys(e);return this.getSubs(t,[[]],e).map((e=>{const t={};return e.forEach((([e,s])=>{t[e]=s})),t}))}getSubs(e,t,s){if(!e.length)return t;const r=e[0],n=e.slice(1),a=[];s[r].forEach((e=>{t.forEach((t=>{let s=-1;for(let r=0;r<t.length;r+=1)if(t[r][0]===e){s=r;break}if(-1===s){const s=t.concat([[e,r]]);a.push(s)}else{const n=t.slice(0);n.splice(s,1),n.push([e,r]),a.push(t),a.push(n)}}))}));const o=this.dedup(a);return n.length?this.getSubs(n,o,s):o}dedup(e){const t=[],s={};return e.forEach((e=>{const r=e.map(((e,t)=>[e,t]));r.sort();const n=r.map((([e,t])=>`${e},${t}`)).join("-");n in s||(s[n]=!0,t.push(e))})),t}}class Y{constructor(){this.l33t=new F(this.defaultMatch),this.reverse=new W(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return b(t)}defaultMatch({password:e}){const t=[],s=e.length,r=e.toLowerCase();return Object.keys(R.rankedDictionaries).forEach((n=>{const a=R.rankedDictionaries[n];for(let o=0;o<s;o+=1)for(let i=o;i<s;i+=1){const c=r.slice(o,+i+1||9e9),l=c in a;let h={};const d=0===o&&i===s-1;R.useLevenshteinDistance&&d&&!l&&(h=N(c,a,R.levenshteinThreshold));const u=0!==Object.keys(h).length;if(l||u){const s=a[u?h.levenshteinDistanceEntry:c];t.push({pattern:"dictionary",i:o,j:i,token:e.slice(o,+i+1||9e9),matchedWord:c,rank:s,dictionaryName:n,reversed:!1,l33t:!1,...h})}}})),t}}class ${match({password:e,regexes:t=P}){const s=[];return Object.keys(t).forEach((r=>{const n=t[r];n.lastIndex=0;const a=n.exec(e);if(a){const e=a[0];s.push({pattern:"regex",token:e,i:a.index,j:a.index+a[0].length-1,regexName:r,regexMatch:a})}})),b(s)}}var z={nCk(e,t){let s=e;if(t>s)return 0;if(0===t)return 1;let r=1;for(let e=1;e<=t;e+=1)r*=s,r/=e,s-=1;return r},log10:e=>Math.log(e)/Math.log(10),log2:e=>Math.log(e)/Math.log(2),factorial(e){let t=1;for(let s=2;s<=e;s+=1)t*=s;return t}};var B=e=>{const t=e.replace(E,"");if(t.match(T)||t.toLowerCase()===t)return 1;const s=[k,j,x],r=s.length;for(let e=0;e<r;e+=1){const r=s[e];if(t.match(r))return 2}return(e=>{const t=e.split(""),s=t.filter((e=>e.match(S))).length,r=t.filter((e=>e.match(I))).length;let n=0;const a=Math.min(s,r);for(let e=1;e<=a;e+=1)n+=z.nCk(s+r,e);return n})(t)};const U=({token:e,graph:t,turns:s})=>{const r=Object.keys(R.graphs[t]).length,n=(e=>{let t=0;return Object.keys(e).forEach((s=>{const r=e[s];t+=r.filter((e=>!!e)).length})),t/=Object.entries(e).length,t})(R.graphs[t]);let a=0;const o=e.length;for(let e=2;e<=o;e+=1){const t=Math.min(s,e-1);for(let s=1;s<=t;s+=1)a+=z.nCk(e-1,s-1)*r*n**s}return a};const _={bruteforce:({token:e})=>{let t,s=10**e.length;return s===Number.POSITIVE_INFINITY&&(s=Number.MAX_VALUE),t=1===e.length?11:51,Math.max(s,t)},date:({year:e,separator:t})=>{let s=365*Math.max(Math.abs(e-D),20);return t&&(s*=4),s},dictionary:({rank:e,reversed:t,l33t:s,sub:r,token:n})=>{const a=e,o=B(n),i=(({l33t:e,sub:t,token:s})=>{if(!e)return 1;let r=1;const n=t;return Object.keys(n).forEach((e=>{const{subbedCount:t,unsubbedCount:a}=(({subs:e,subbed:t,token:s})=>{const r=e[t],n=s.toLowerCase().split("");return{subbedCount:n.filter((e=>e===t)).length,unsubbedCount:n.filter((e=>e===r)).length}})({subs:n,subbed:e,token:s});if(0===t||0===a)r*=2;else{const e=Math.min(a,t);let s=0;for(let r=1;r<=e;r+=1)s+=z.nCk(a+t,r);r*=s}})),r})({l33t:s,sub:r,token:n});return{baseGuesses:a,uppercaseVariations:o,l33tVariations:i,calculation:a*o*i*(t?2:1)}},regex:({regexName:e,regexMatch:t,token:s})=>{const r={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};return e in r?r[e]**s.length:"recentYear"===e?Math.max(Math.abs(parseInt(t[0],10)-D),20):0},repeat:({baseGuesses:e,repeatCount:t})=>e*t,sequence:({token:e,ascending:t})=>{const s=e.charAt(0);let r=0;return r=["a","A","z","Z","0","1","9"].includes(s)?4:s.match(/\d/)?10:26,t||(r*=2),r*e.length},spatial:({graph:e,token:t,shiftedCount:s,turns:r})=>{let n=U({token:t,graph:e,turns:r});if(s){const e=t.length-s;if(0===s||0===e)n*=2;else{let t=0;for(let r=1;r<=Math.min(s,e);r+=1)t+=z.nCk(s+e,r);n*=t}}return Math.round(n)}};var H=(e,t)=>{const s={};if("guesses"in e&&null!=e.guesses)return e;const r=((e,t)=>{let s=1;return e.token.length<t.length&&(s=1===e.token.length?10:50),s})(e,t),n=((e,t)=>_[e]?_[e](t):R.matchers[e]&&"scoring"in R.matchers[e]?R.matchers[e].scoring(t):0)(e.pattern,e);let a=0;"number"==typeof n?a=n:"dictionary"===e.pattern&&(a=n.calculation,s.baseGuesses=n.baseGuesses,s.uppercaseVariations=n.uppercaseVariations,s.l33tVariations=n.l33tVariations);const o=Math.max(a,r);return{...e,...s,guesses:o,guessesLog10:z.log10(o)}};const V={password:"",optimal:{},excludeAdditive:!1,fillArray(e,t){const s=[];for(let r=0;r<e;r+=1){let e=[];"object"===t&&(e={}),s.push(e)}return s},makeBruteforceMatch(e,t){return{pattern:"bruteforce",token:this.password.slice(e,+t+1||9e9),i:e,j:t}},update(e,t){const s=e.j,r=H(e,this.password);let n=r.guesses;t>1&&(n*=this.optimal.pi[r.i-1][t-1]);let a=z.factorial(t)*n;this.excludeAdditive||(a+=1e4**(t-1));let o=!1;Object.keys(this.optimal.g[s]).forEach((e=>{const r=this.optimal.g[s][e];parseInt(e,10)<=t&&r<=a&&(o=!0)})),o||(this.optimal.g[s][t]=a,this.optimal.m[s][t]=r,this.optimal.pi[s][t]=n)},bruteforceUpdate(e){let t=this.makeBruteforceMatch(0,e);this.update(t,1);for(let s=1;s<=e;s+=1){t=this.makeBruteforceMatch(s,e);const r=this.optimal.m[s-1];Object.keys(r).forEach((e=>{"bruteforce"!==r[e].pattern&&this.update(t,parseInt(e,10)+1)}))}},unwind(e){const t=[];let s=e-1,r=0,n=Infinity;const a=this.optimal.g[s];for(a&&Object.keys(a).forEach((e=>{const t=a[e];t<n&&(r=parseInt(e,10),n=t)}));s>=0;){const e=this.optimal.m[s][r];t.unshift(e),s=e.i-1,r-=1}return t}};var Z={mostGuessableMatchSequence(e,t,s=!1){V.password=e,V.excludeAdditive=s;const r=e.length;let n=V.fillArray(r,"array");t.forEach((e=>{n[e.j].push(e)})),n=n.map((e=>e.sort(((e,t)=>e.i-t.i)))),V.optimal={m:V.fillArray(r,"object"),pi:V.fillArray(r,"object"),g:V.fillArray(r,"object")};for(let e=0;e<r;e+=1)n[e].forEach((e=>{e.i>0?Object.keys(V.optimal.m[e.i-1]).forEach((t=>{V.update(e,parseInt(t,10)+1)})):V.update(e,1)})),V.bruteforceUpdate(e);const a=V.unwind(r),o=a.length,i=this.getGuesses(e,o);return{password:e,guesses:i,guessesLog10:z.log10(i),sequence:a}},getGuesses(e,t){const s=e.length;let r=0;return r=0===e.length?1:V.optimal.g[s-1][t],r}};class X{match({password:e,omniMatch:t}){const s=[];let r=0;for(;r<e.length;){const n=this.getGreedyMatch(e,r),a=this.getLazyMatch(e,r);if(null==n)break;const{match:o,baseToken:i}=this.setMatchToken(n,a);if(o){const e=o.index+o[0].length-1,n=this.getBaseGuesses(i,t);s.push(this.normalizeMatch(i,e,o,n)),r=e+1}}return s.some((e=>e instanceof Promise))?Promise.all(s):s}normalizeMatch(e,t,s,r){const n={pattern:"repeat",i:s.index,j:t,token:s[0],baseToken:e,baseGuesses:0,repeatCount:s[0].length/e.length};return r instanceof Promise?r.then((e=>({...n,baseGuesses:e}))):{...n,baseGuesses:r}}getGreedyMatch(e,t){const s=/(.+)\1+/g;return s.lastIndex=t,s.exec(e)}getLazyMatch(e,t){const s=/(.+?)\1+/g;return s.lastIndex=t,s.exec(e)}setMatchToken(e,t){const s=/^(.+?)\1+$/;let r,n="";if(t&&e[0].length>t[0].length){r=e;const t=s.exec(r[0]);t&&(n=t[1])}else r=t,r&&(n=r[1]);return{match:r,baseToken:n}}getBaseGuesses(e,t){const s=t.match(e);if(s instanceof Promise)return s.then((t=>Z.mostGuessableMatchSequence(e,t).guesses));return Z.mostGuessableMatchSequence(e,s).guesses}}class K{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(1===e.length)return[];let s=0,r=null;const n=e.length;for(let a=1;a<n;a+=1){const n=e.charCodeAt(a)-e.charCodeAt(a-1);if(null==r&&(r=n),n!==r){const o=a-1;this.update({i:s,j:o,delta:r,password:e,result:t}),s=o,r=n}}return this.update({i:s,j:n-1,delta:r,password:e,result:t}),t}update({i:e,j:t,delta:s,password:r,result:n}){if(t-e>1||1===Math.abs(s)){const a=Math.abs(s);if(a>0&&a<=this.MAX_DELTA){const a=r.slice(e,+t+1||9e9),{sequenceName:o,sequenceSpace:i}=this.getSequence(a);return n.push({pattern:"sequence",i:e,j:t,token:r.slice(e,+t+1||9e9),sequenceName:o,sequenceSpace:i,ascending:s>0})}}return null}getSequence(e){let t="unicode",s=26;return M.test(e)?(t="lower",s=26):v.test(e)?(t="upper",s=26):A.test(e)&&(t="digits",s=10),{sequenceName:t,sequenceSpace:s}}}class Q{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(R.graphs).forEach((s=>{const r=R.graphs[s];m(t,this.helper(e,r,s))})),b(t)}checkIfShifted(e,t,s){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(s))?1:0}helper(e,t,s){let r;const n=[];let a=0;const o=e.length;for(;a<o-1;){let i=a+1,c=0,l=0;for(r=this.checkIfShifted(s,e,a);;){const h=t[e.charAt(i-1)]||[];let d=!1,u=-1,p=-1;if(i<o){const t=e.charAt(i),s=h.length;for(let e=0;e<s;e+=1){const s=h[e];if(p+=1,s){const e=s.indexOf(t);if(-1!==e){d=!0,u=p,1===e&&(r+=1),c!==u&&(l+=1,c=u);break}}}}if(!d){i-a>2&&n.push({pattern:"spatial",i:a,j:i-1,token:e.slice(a,i),graph:s,turns:l,shiftedCount:r}),a=i;break}i+=1}}return n}}class J{constructor(){this.matchers={date:C,dictionary:Y,regex:$,repeat:X,sequence:K,spatial:Q}}match(e){const t=[],s=[];return[...Object.keys(this.matchers),...Object.keys(R.matchers)].forEach((r=>{if(!this.matchers[r]&&!R.matchers[r])return;const n=(new(this.matchers[r]?this.matchers[r]:R.matchers[r].Matching)).match({password:e,omniMatch:this});n instanceof Promise?(n.then((e=>{m(t,e)})),s.push(n)):m(t,n)})),s.length>0?new Promise((e=>{Promise.all(s).then((()=>{e(b(t))}))})):b(t)}}const ee={second:1,minute:60,hour:3600,day:86400,month:2678400,year:32140800,century:321408e4};class te{translate(e,t){let s=e;void 0!==t&&1!==t&&(s+="s");const{timeEstimation:r}=R.translations;return r[s].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/(100/3600),onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(t).forEach((e=>{const r=t[e];s[e]=this.displayTime(r)})),{crackTimesSeconds:t,crackTimesDisplay:s,score:this.guessesToScore(e)}}guessesToScore(e){return e<1005?0:e<1000005?1:e<100000005?2:e<10000000005?3:4}displayTime(e){let t,s="centuries";const r=Object.keys(ee),n=r.findIndex((t=>e<ee[t]));return n>-1&&(s=r[n-1],0!==n?t=Math.round(e/ee[s]):s="ltSecond"),this.translate(s,t)}}var se=()=>null,re=()=>({warning:R.translations.warnings.dates,suggestions:[R.translations.suggestions.dates]});const ne=(e,t)=>{let s="";const r=e.dictionaryName,n="lastnames"===r||r.toLowerCase().includes("firstnames");return"passwords"===r?s=((e,t)=>{let s="";return!t||e.l33t||e.reversed?e.guessesLog10<=4&&(s=R.translations.warnings.similarToCommon):s=e.rank<=10?R.translations.warnings.topTen:e.rank<=100?R.translations.warnings.topHundred:R.translations.warnings.common,s})(e,t):r.includes("wikipedia")?s=((e,t)=>{let s="";return t&&(s=R.translations.warnings.wordByItself),s})(0,t):n?s=((e,t)=>t?R.translations.warnings.namesByThemselves:R.translations.warnings.commonNames)(0,t):"userInputs"===r&&(s=R.translations.warnings.userInputs),s};var ae=(e,t)=>{const s=ne(e,t),r=[],n=e.token;return n.match(k)?r.push(R.translations.suggestions.capitalization):n.match(x)&&n.toLowerCase()!==n&&r.push(R.translations.suggestions.allUppercase),e.reversed&&e.token.length>=4&&r.push(R.translations.suggestions.reverseWords),e.l33t&&r.push(R.translations.suggestions.l33t),{warning:s,suggestions:r}},oe=e=>"recentYear"===e.regexName?{warning:R.translations.warnings.recentYears,suggestions:[R.translations.suggestions.recentYears,R.translations.suggestions.associatedYears]}:{warning:"",suggestions:[]},ie=e=>{let t=R.translations.warnings.extendedRepeat;return 1===e.baseToken.length&&(t=R.translations.warnings.simpleRepeat),{warning:t,suggestions:[R.translations.suggestions.repeated]}},ce=()=>({warning:R.translations.warnings.sequences,suggestions:[R.translations.suggestions.sequences]}),le=e=>{let t=R.translations.warnings.keyPattern;return 1===e.turns&&(t=R.translations.warnings.straightRow),{warning:t,suggestions:[R.translations.suggestions.longerKeyboardPattern]}};const he={warning:"",suggestions:[]};class de{constructor(){this.matchers={bruteforce:se,date:re,dictionary:ae,regex:oe,repeat:ie,sequence:ce,spatial:le},this.defaultFeedback={warning:"",suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(R.translations.suggestions.useWords,R.translations.suggestions.noNeed)}getFeedback(e,t){if(0===t.length)return this.defaultFeedback;if(e>2)return he;const s=R.translations.suggestions.anotherWord,r=this.getLongestMatch(t);let n=this.getMatchFeedback(r,1===t.length);return null!=n?(n.suggestions.unshift(s),null==n.warning&&(n.warning="")):n={warning:"",suggestions:[s]},n}getLongestMatch(e){let t=e[0];return e.slice(1).forEach((e=>{e.token.length>t.token.length&&(t=e)})),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):R.matchers[e.pattern]&&"feedback"in R.matchers[e.pattern]?R.matchers[e.pattern].feedback(e,t):he}}const ue=()=>(new Date).getTime(),pe=(e,t)=>{const s=ue(),r=((e,t)=>(t&&R.extendUserInputsDictionary(t),(new J).match(e)))(e,t);if(r instanceof Promise)throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");return((e,t,s)=>{const r=new de,n=new te,a=Z.mostGuessableMatchSequence(t,e),o=ue()-s,i=n.estimateAttackTimes(a.guesses);return{calcTime:o,...a,...i,feedback:r.getFeedback(i.score,a.sequence)}})(r,e,s)};class ge extends r.Component{constructor(e){super(e),this.state={isIconEyeOff:!0,passwordStrengthScore:0}}toolTipIconEye=r.createRef();componentDidMount(){setTimeout((()=>{o.rebuild()}),100);const{zxcvbnOption:e}=this.props;R.setOptions(e)}componentWillUnmount(){this.hideTooltip()}componentDidUpdate(e){const{hasPasswordStrengthMeter:t,value:s}=this.props;if(s&&s!==e.value||t!==e.hasPasswordStrengthMeter){if(!t)return;this.debounceCalculatePasswordStrength(s)}}toggleIconEyeOff=()=>{this.setState((e=>({isIconEyeOff:!e.isIconEyeOff})),(()=>this.resetTooltipIconEye()))};resetTooltipIconEye=()=>{this.toolTipIconEye&&this.toolTipIconEye.current&&(o.hide(this.toolTipIconEye.current),o.show(this.toolTipIconEye.current))};hideTooltip=()=>{this.toolTipIconEye&&this.toolTipIconEye.current&&o.hide(this.toolTipIconEye.current)};handleEyeIcon=()=>{const{isIconEyeOff:r}=this.state;return e(t,{children:[s("i",{ref:this.toolTipIconEye,"data-for":"eyeInfo__tooltip","data-tip":h.sanitize(l(r?"password.viewPassword":"password.hiddenPassword")),"data-html":!0,"data-place":"top",className:a("password-eye-icon",{"icon-eye":!r,"icon-eye-off":r}),onClick:this.toggleIconEyeOff}),s(o,{effect:"solid",id:"eyeInfo__tooltip"})]})};handleFieldType=()=>this.state.isIconEyeOff?"password":"text";handleGeneratePassword=()=>{const{customPattern:e,onChange:t,name:s}=this.props;if(!t)return;t({target:{name:s,value:u(e||g)}})};handleGenerateText=()=>{const{hasGeneratePassword:r,customField:n,hasPasswordStrengthMeter:o,passwordStrengthDataQa:i}=this.props,{passwordStrengthScore:h}=this.state,d=this.getStrengthLevelBasedOnScore(h);return e(t,{children:[o&&null!==h&&e("div",{className:"password-strength-meter",children:[s("div",{className:a("strength-meter-bar",d),"data-qa-id":i?.bar,children:Object.keys(p).map(((e,t)=>s("div",{className:a("bar",{fill:t<=h}),"data-qa-props":i?.barProps&&`${i.barProps}-${t}`},`bar-${e}`)))}),s("span",{className:a("strength-meter-label"),children:l("password.strength.label")}),s("span",{className:a("strength-meter-level",d),"data-qa-id":i?.label,children:l(`password.strength.level.${d}`)})]}),r&&s(c,{appearance:"link",spacing:"none",className:"generate-password",onClick:this.handleGeneratePassword,children:l("password.generateNew")}),n]})};getStrengthLevelBasedOnScore=e=>{switch(e){case 0:return p.veryWeak;case 1:return p.weak;case 2:return p.fair;case 3:return p.strong;case 4:return p.veryStrong}};calculatePasswordStrength=e=>{if(!e)return this.setState({passwordStrengthScore:null});const{score:t}=pe(e);this.setState({passwordStrengthScore:t})};debounceCalculatePasswordStrength=d(this.calculatePasswordStrength,100);render(){return s("div",{className:"valid-field-password",children:s(n,{...this.props,rightIcon:this.handleEyeIcon(),type:this.handleFieldType(),className:a(this.props.className,"password-field-text"),customField:this.handleGenerateText()})})}}export{ge as ValidFieldPassword};
