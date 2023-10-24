import{j as h}from"./jsx-runtime-ffb262ed.js";import{r as j}from"./index-76fb7be0.js";import{P as B}from"./index-8d47fad6.js";import{B as me}from"./Button-d99210dc.js";import{L as it}from"./LinksSection-54cf0099.js";import"./_commonjsHelpers-de833af9.js";function qe(e,t){return function(){return e.apply(t,arguments)}}const{toString:at}=Object.prototype,{getPrototypeOf:ce}=Object,V=(e=>t=>{const n=at.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>V(t)===e),K=e=>t=>typeof t===e,{isArray:F}=Array,D=K("undefined");function ct(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const He=A("ArrayBuffer");function lt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&He(e.buffer),t}const ut=K("string"),O=K("function"),ze=K("number"),W=e=>e!==null&&typeof e=="object",dt=e=>e===!0||e===!1,z=e=>{if(V(e)!=="object")return!1;const t=ce(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ft=A("Date"),pt=A("File"),ht=A("Blob"),mt=A("FileList"),yt=e=>W(e)&&O(e.pipe),gt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=V(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},bt=A("URLSearchParams"),wt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function k(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),F(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Me(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Je=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),$e=e=>!D(e)&&e!==Je;function re(){const{caseless:e}=$e(this)&&this||{},t={},n=(r,s)=>{const o=e&&Me(t,s)||s;z(t[o])&&z(r)?t[o]=re(t[o],r):z(r)?t[o]=re({},r):F(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&k(arguments[r],n);return t}const Et=(e,t,n,{allOwnKeys:r}={})=>(k(t,(s,o)=>{n&&O(s)?e[o]=qe(s,n):e[o]=s},{allOwnKeys:r}),e),St=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),xt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ot=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ce(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Rt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},At=e=>{if(!e)return null;if(F(e))return e;let t=e.length;if(!ze(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Tt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ce(Uint8Array)),Ct=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Nt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},jt=A("HTMLFormElement"),Pt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ye=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ft=A("RegExp"),Ve=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};k(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Bt=e=>{Ve(e,(t,n)=>{if(O(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(O(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_t=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return F(e)?r(e):r(String(e).split(t)),n},Dt=()=>{},kt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Y="abcdefghijklmnopqrstuvwxyz",ge="0123456789",Ke={DIGIT:ge,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+ge},Lt=(e=16,t=Ke.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ut(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const It=e=>{const t=new Array(10),n=(r,s)=>{if(W(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=F(r)?[]:{};return k(r,(i,l)=>{const d=n(i,s+1);!D(d)&&(o[l]=d)}),t[s]=void 0,o}}return r};return n(e,0)},vt=A("AsyncFunction"),qt=e=>e&&(W(e)||O(e))&&O(e.then)&&O(e.catch),a={isArray:F,isArrayBuffer:He,isBuffer:ct,isFormData:gt,isArrayBufferView:lt,isString:ut,isNumber:ze,isBoolean:dt,isObject:W,isPlainObject:z,isUndefined:D,isDate:ft,isFile:pt,isBlob:ht,isRegExp:Ft,isFunction:O,isStream:yt,isURLSearchParams:bt,isTypedArray:Tt,isFileList:mt,forEach:k,merge:re,extend:Et,trim:wt,stripBOM:St,inherits:xt,toFlatObject:Ot,kindOf:V,kindOfTest:A,endsWith:Rt,toArray:At,forEachEntry:Ct,matchAll:Nt,isHTMLForm:jt,hasOwnProperty:ye,hasOwnProp:ye,reduceDescriptors:Ve,freezeMethods:Bt,toObjectSet:_t,toCamelCase:Pt,noop:Dt,toFiniteNumber:kt,findKey:Me,global:Je,isContextDefined:$e,ALPHABET:Ke,generateString:Lt,isSpecCompliantForm:Ut,toJSONObject:It,isAsyncFn:vt,isThenable:qt};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const We=y.prototype,Ge={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ge[e]={value:e}});Object.defineProperties(y,Ge);Object.defineProperty(We,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(We);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Ht=null;function se(e){return a.isPlainObject(e)||a.isArray(e)}function Xe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function be(e,t,n){return e?e.concat(t).map(function(s,o){return s=Xe(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function zt(e){return a.isArray(e)&&!e.some(se)}const Mt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function G(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,b){return!a.isUndefined(b[m])});const r=n.metaTokens,s=n.visitor||c,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function f(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!d&&a.isBlob(u))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?d&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function c(u,m,b){let x=u;if(u&&!b&&typeof u=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&zt(u)||(a.isFileList(u)||a.endsWith(m,"[]"))&&(x=a.toArray(u)))return m=Xe(m),x.forEach(function(N,U){!(a.isUndefined(N)||N===null)&&t.append(i===!0?be([m],U,o):i===null?m:m+"[]",f(N))}),!1}return se(u)?!0:(t.append(be(b,m,o),f(u)),!1)}const p=[],w=Object.assign(Mt,{defaultVisitor:c,convertValue:f,isVisitable:se});function S(u,m){if(!a.isUndefined(u)){if(p.indexOf(u)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(u),a.forEach(u,function(x,g){(!(a.isUndefined(x)||x===null)&&s.call(t,x,a.isString(g)?g.trim():g,m,w))===!0&&S(x,m?m.concat(g):[g])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return S(e),t}function we(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function le(e,t){this._pairs=[],e&&G(e,this,t)}const Qe=le.prototype;Qe.append=function(t,n){this._pairs.push([t,n])};Qe.toString=function(t){const n=t?function(r){return t.call(this,r,we)}:we;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Jt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ze(e,t,n){if(!t)return e;const r=n&&n.encode||Jt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new le(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class $t{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ee=$t,Ye={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Vt=typeof URLSearchParams<"u"?URLSearchParams:le,Kt=typeof FormData<"u"?FormData:null,Wt=typeof Blob<"u"?Blob:null,Gt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Xt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),R={isBrowser:!0,classes:{URLSearchParams:Vt,FormData:Kt,Blob:Wt},isStandardBrowserEnv:Gt,isStandardBrowserWebWorkerEnv:Xt,protocols:["http","https","file","blob","url","data"]};function Qt(e,t){return G(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Zt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Yt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function et(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Yt(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Zt(r),s,n,0)}),n}return null}function en(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ue={transitional:Ye,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(et(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Qt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return G(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),en(t)):t}],transformResponse:[function(t){const n=this.transitional||ue.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?y.from(l,y.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ue.headers[e]={}});const de=ue,tn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&tn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Se=Symbol("internals");function _(e){return e&&String(e).trim().toLowerCase()}function M(e){return e===!1||e==null?e:a.isArray(e)?e.map(M):String(e)}function rn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const sn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ee(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function on(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function an(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class X{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,d,f){const c=_(d);if(!c)throw new Error("header name must be a non-empty string");const p=a.findKey(s,c);(!p||s[p]===void 0||f===!0||f===void 0&&s[p]!==!1)&&(s[p||d]=M(l))}const i=(l,d)=>a.forEach(l,(f,c)=>o(f,c,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!sn(t)?i(nn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=_(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return rn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=_(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ee(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=_(i),i){const l=a.findKey(r,i);l&&(!n||ee(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ee(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=M(s),delete n[o];return}const l=t?on(o):String(o).trim();l!==o&&delete n[o],n[l]=M(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Se]=this[Se]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=_(i);r[l]||(an(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}X.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(X.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(X);const T=X;function te(e,t){const n=this||de,r=t||n,s=T.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function tt(e){return!!(e&&e.__CANCEL__)}function L(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(L,y,{__CANCEL__:!0});function cn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const ln=R.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function un(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function dn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function nt(e,t){return e&&!un(t)?dn(e,t):t}const fn=R.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function pn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function hn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),c=r[o];i||(i=f),n[s]=d,r[s]=f;let p=o,w=0;for(;p!==s;)w+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),f-i<t)return;const S=c&&f-c;return S?Math.round(w*1e3/S):void 0}}function xe(e,t){let n=0;const r=hn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,d=r(l),f=o<=i;n=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&f?(i-o)/d:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const mn=typeof XMLHttpRequest<"u",yn=mn&&function(e){return new Promise(function(n,r){let s=e.data;const o=T.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let f;a.isFormData(s)&&(R.isStandardBrowserEnv||R.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?a.isString(f=o.getContentType())&&o.setContentType(f.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const u=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(u+":"+m))}const p=nt(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ze(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function w(){if(!c)return;const u=T.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),b={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:u,config:e,request:c};cn(function(g){n(g),d()},function(g){r(g),d()},b),c=null}if("onloadend"in c?c.onloadend=w:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(w)},c.onabort=function(){c&&(r(new y("Request aborted",y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||Ye;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),r(new y(m,b.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,c)),c=null},R.isStandardBrowserEnv){const u=(e.withCredentials||fn(p))&&e.xsrfCookieName&&ln.read(e.xsrfCookieName);u&&o.set(e.xsrfHeaderName,u)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(m,b){c.setRequestHeader(b,m)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",xe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",xe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=u=>{c&&(r(!u||u.type?new L(null,e,c):u),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const S=pn(p);if(S&&R.protocols.indexOf(S)===-1){r(new y("Unsupported protocol "+S+":",y.ERR_BAD_REQUEST,e));return}c.send(s||null)})},oe={http:Ht,xhr:yn};a.forEach(oe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Oe=e=>`- ${e}`,gn=e=>a.isFunction(e)||e===null||e===!1,rt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!gn(n)&&(r=oe[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Oe).join(`
`):" "+Oe(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:oe};function ne(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new L(null,e)}function Re(e){return ne(e),e.headers=T.from(e.headers),e.data=te.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),rt.getAdapter(e.adapter||de.adapter)(e).then(function(r){return ne(e),r.data=te.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return tt(r)||(ne(e),r&&r.response&&(r.response.data=te.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const Ae=e=>e instanceof T?e.toJSON():e;function P(e,t){t=t||{};const n={};function r(f,c,p){return a.isPlainObject(f)&&a.isPlainObject(c)?a.merge.call({caseless:p},f,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(f,c,p){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f,p)}else return r(f,c,p)}function o(f,c){if(!a.isUndefined(c))return r(void 0,c)}function i(f,c){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,c)}function l(f,c,p){if(p in t)return r(f,c);if(p in e)return r(void 0,f)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(f,c)=>s(Ae(f),Ae(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const p=d[c]||s,w=p(e[c],t[c],c);a.isUndefined(w)&&p!==l||(n[c]=w)}),n}const st="1.5.1",fe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Te={};fe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+st+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Te[i]&&(Te[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function bn(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],d=l===void 0||i(l,o,e);if(d!==!0)throw new y("option "+o+" must be "+d,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const ie={assertOptions:bn,validators:fe},C=ie.validators;class ${constructor(t){this.defaults=t,this.interceptors={request:new Ee,response:new Ee}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=P(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ie.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ie.assertOptions(s,{encode:C.function,serialize:C.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete o[u]}),n.headers=T.concat(i,o);const l=[];let d=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(d=d&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const f=[];this.interceptors.response.forEach(function(m){f.push(m.fulfilled,m.rejected)});let c,p=0,w;if(!d){const u=[Re.bind(this),void 0];for(u.unshift.apply(u,l),u.push.apply(u,f),w=u.length,c=Promise.resolve(n);p<w;)c=c.then(u[p++],u[p++]);return c}w=l.length;let S=n;for(p=0;p<w;){const u=l[p++],m=l[p++];try{S=u(S)}catch(b){m.call(this,b);break}}try{c=Re.call(this,S)}catch(u){return Promise.reject(u)}for(p=0,w=f.length;p<w;)c=c.then(f[p++],f[p++]);return c}getUri(t){t=P(this.defaults,t);const n=nt(t.baseURL,t.url);return Ze(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){$.prototype[t]=function(n,r){return this.request(P(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(P(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}$.prototype[t]=n(),$.prototype[t+"Form"]=n(!0)});const J=$;class pe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new L(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new pe(function(s){t=s}),cancel:t}}}const wn=pe;function En(e){return function(n){return e.apply(null,n)}}function Sn(e){return a.isObject(e)&&e.isAxiosError===!0}const ae={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ae).forEach(([e,t])=>{ae[t]=e});const xn=ae;function ot(e){const t=new J(e),n=qe(J.prototype.request,t);return a.extend(n,J.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ot(P(e,s))},n}const E=ot(de);E.Axios=J;E.CanceledError=L;E.CancelToken=wn;E.isCancel=tt;E.VERSION=st;E.toFormData=G;E.AxiosError=y;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=En;E.isAxiosError=Sn;E.mergeConfig=P;E.AxiosHeaders=T;E.formToJSON=e=>et(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=rt.getAdapter;E.HttpStatusCode=xn;E.default=E;const Ce=E;async function On(e,t,n,r,s){const o="https://api.oneai.com/agent/v1";console.log(n);const i={accept:"application/json","api-key":t,"Content-Type":"application/json"},l=`${o}/list/documents?agent_id=${e}`;try{const d=await Ce.get(l,{headers:i});console.log(d.data);let f=[];for(const b of d.data){let x={url:b.url,agentId:b.agent_id,documentId:b.document_id,status:b.status};f.push(x)}const c=f.filter(b=>b.status==="completed"),p=f.filter(b=>b.status!=="completed"),w=c.concat(p),S=`${o}/agent/${e}`,u=await Ce.get(S,{headers:i});console.log(u.data);let m=u.data.public_name;s(m),console.log(typeof w),console.log(w),r(w)}catch(d){console.error("Axios error:",d)}}const Q=()=>{const[e,t]=j.useState(""),[n,r]=j.useState(""),[s,o]=j.useState("production"),[i,l]=j.useState("completed"),[d,f]=j.useState([]),[c,p]=j.useState([]);function w(){console.log("working working in checkStates:"),console.log(e,n,s),On(e,n,s,f,p)}function S(){f([])}const u=g=>{console.log("calling"),console.log(e),t(g.target.value)},m=g=>{r(g.target.value)},b=g=>{o(g.target.value)},x=g=>{console.log(d),console.log(g.target.value),l(g.target.value);let N=d.filter(Z=>Z.status==g.target.value),U=d.filter(Z=>Z.status!=g.target.value),he=[...N,...U];console.log(N),console.log(U),console.log("new data"),console.log(he),f(he)};return d.length===0?h.jsx("div",{children:h.jsxs("div",{className:"form-container",children:[h.jsxs("div",{children:[h.jsx("label",{htmlFor:"agentId",className:"label-myForm",children:"Agent ID:"}),h.jsx("input",{type:"text",id:"agentId",className:"input-myForm",value:e,onChange:u})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"apiKey",className:"label-myForm",children:"API Key:"}),h.jsx("input",{type:"text",id:"apiKey",className:"input-myForm",value:n,onChange:m})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"environment",className:"label-myForm",children:"Environment:"}),h.jsxs("select",{id:"environment",className:"input-select-myForm",value:s,onChange:b,children:[h.jsx("option",{value:"production",children:"Production"}),h.jsx("option",{value:"staging",children:"Staging"})]})]}),h.jsx(me,{primary:!0,label:"Get Agent Data",backgroundColor:"#4d4dff",size:"large",onClick:()=>w()})]})}):h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx(me,{primary:!0,label:"Back",backgroundColor:"#4d4dff",size:"small",onClick:()=>S()}),h.jsxs("h2",{children:["agent: ",c]})]}),h.jsxs("div",{className:"header",children:[h.jsx("div",{className:"table-sec",children:h.jsx("table",{className:"data-table",children:h.jsxs("tbody",{children:[h.jsxs("tr",{children:[h.jsx("td",{children:"Completed"}),h.jsx("td",{children:d.filter(g=>g.status==="completed").length})]}),h.jsxs("tr",{children:[h.jsx("td",{children:"Failed"}),h.jsx("td",{children:d.filter(g=>g.status==="failed").length})]}),d.filter(g=>g.status==="processing").length>0?h.jsxs("tr",{children:[h.jsx("td",{children:"Processing"}),h.jsx("td",{children:d.filter(g=>g.status==="processing").length})]}):null,h.jsxs("tr",{children:[h.jsxs("td",{children:[" ",h.jsx("b",{children:" Total "})]}),h.jsxs("td",{children:[" ",h.jsxs("b",{children:[d.length," "]})]})]})]})})}),h.jsxs("div",{className:"sorting-div",children:[h.jsx("label",{htmlFor:"sorting",children:"See By:"}),h.jsxs("select",{id:"sorting",className:"input-select-myForm-2",value:i,onChange:x,children:[h.jsx("option",{value:"completed",children:"Completed"}),h.jsx("option",{value:"failed",children:"Failed"}),h.jsx("option",{value:"processing",children:"Processing"})]})]})]})]}),h.jsx(it,{urls:d,children:" "})]})};Q.propTypes={primary:B.bool,backgroundColor:B.string,size:B.oneOf(["small","medium","large"]),label:B.string.isRequired,onClick:B.func};Q.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};Q.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MyForm",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:"What background color to use"},primary:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Is this the principal call to action on the page?"},size:{defaultValue:{value:"'medium'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1,description:"How large should the button be?"},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:"Optional click handler"},label:{type:{name:"string"},required:!0,description:"Button contents"}}};const Pn={title:"Example/MyForm",component:Q,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},I={args:{primary:!0,label:"Button"}},v={args:{label:"Button"}},q={args:{size:"large",label:"Button"}},H={args:{size:"small",label:"Button"}};var Ne,je,Pe;I.parameters={...I.parameters,docs:{...(Ne=I.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(Pe=(je=I.parameters)==null?void 0:je.docs)==null?void 0:Pe.source}}};var Fe,Be,_e;v.parameters={...v.parameters,docs:{...(Fe=v.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(_e=(Be=v.parameters)==null?void 0:Be.docs)==null?void 0:_e.source}}};var De,ke,Le;q.parameters={...q.parameters,docs:{...(De=q.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(Le=(ke=q.parameters)==null?void 0:ke.docs)==null?void 0:Le.source}}};var Ue,Ie,ve;H.parameters={...H.parameters,docs:{...(Ue=H.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(ve=(Ie=H.parameters)==null?void 0:Ie.docs)==null?void 0:ve.source}}};const Fn=["Primary","Secondary","Large","Small"];export{q as Large,I as Primary,v as Secondary,H as Small,Fn as __namedExportsOrder,Pn as default};
//# sourceMappingURL=Form.stories-9725d8ed.js.map