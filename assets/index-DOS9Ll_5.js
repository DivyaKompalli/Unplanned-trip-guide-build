const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-Db8hO_fB.js","assets/google-icon-B_HcY57n.js","assets/Login-vWEEYzsX.css","assets/SignUp-BWsVppUH.js","assets/SignUp-Cw3u7oUo.css","assets/Home-BJtXjwVO.js","assets/Home-CrccywDI.css","assets/Planned-DfyX5nJ-.js","assets/Planned-C5LDZq5p.css","assets/TripGenerator-ATOXd_Bq.js","assets/TripGenerator-tZXMRKvY.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ti(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const se={},ln=[],Qe=()=>{},Wl=()=>!1,zr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ni=t=>t.startsWith("onUpdate:"),pe=Object.assign,ri=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kl=Object.prototype.hasOwnProperty,Z=(t,e)=>Kl.call(t,e),x=Array.isArray,un=t=>rr(t)==="[object Map]",Sn=t=>rr(t)==="[object Set]",$i=t=>rr(t)==="[object Date]",j=t=>typeof t=="function",le=t=>typeof t=="string",et=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",ya=t=>(ie(t)||j(t))&&j(t.then)&&j(t.catch),ba=Object.prototype.toString,rr=t=>ba.call(t),zl=t=>rr(t).slice(8,-1),Ea=t=>rr(t)==="[object Object]",si=t=>le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ln=ti(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ql=/-(\w)/g,Ue=qr(t=>t.replace(ql,(e,n)=>n?n.toUpperCase():"")),Gl=/\B([A-Z])/g,nn=qr(t=>t.replace(Gl,"-$1").toLowerCase()),Gr=qr(t=>t.charAt(0).toUpperCase()+t.slice(1)),cs=qr(t=>t?`on${Gr(t)}`:""),Ot=(t,e)=>!Object.is(t,e),br=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ia=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},kr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Jl=t=>{const e=le(t)?Number(t):NaN;return isNaN(e)?t:e};let Hi;const Jr=()=>Hi||(Hi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ii(t){if(x(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=le(r)?Zl(r):ii(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(le(t)||ie(t))return t}const Yl=/;(?![^(]*\))/g,Xl=/:([^]+)/,Ql=/\/\*[^]*?\*\//g;function Zl(t){const e={};return t.replace(Ql,"").split(Yl).forEach(n=>{if(n){const r=n.split(Xl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function oi(t){let e="";if(le(t))e=t;else if(x(t))for(let n=0;n<t.length;n++){const r=oi(t[n]);r&&(e+=r+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const eu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tu=ti(eu);function wa(t){return!!t||t===""}function nu(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Qt(t[r],e[r]);return n}function Qt(t,e){if(t===e)return!0;let n=$i(t),r=$i(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=et(t),r=et(e),n||r)return t===e;if(n=x(t),r=x(e),n||r)return n&&r?nu(t,e):!1;if(n=ie(t),r=ie(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Qt(t[o],e[o]))return!1}}return String(t)===String(e)}function ai(t,e){return t.findIndex(n=>Qt(n,e))}const Sa=t=>!!(t&&t.__v_isRef===!0),Ta=t=>le(t)?t:t==null?"":x(t)||ie(t)&&(t.toString===ba||!j(t.toString))?Sa(t)?Ta(t.value):JSON.stringify(t,Ca,2):String(t),Ca=(t,e)=>Sa(e)?Ca(t,e.value):un(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ls(r,i)+" =>"]=s,n),{})}:Sn(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ls(n))}:et(e)?ls(e):ie(e)&&!x(e)&&!Ea(e)?String(e):e,ls=(t,e="")=>{var n;return et(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class ru{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Oe,!e&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Oe;try{return Oe=this,e()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function su(){return Oe}let ce;const us=new WeakSet;class Aa{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&Oe.active&&Oe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,us.has(this)&&(us.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bi(this),Oa(this);const e=ce,n=He;ce=this,He=!0;try{return this.fn()}finally{ka(this),ce=e,He=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ui(e);this.deps=this.depsTail=void 0,Bi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?us.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ps(this)&&this.run()}get dirty(){return Ps(this)}}let Ra=0,Mn,xn;function Pa(t,e=!1){if(t.flags|=8,e){t.next=xn,xn=t;return}t.next=Mn,Mn=t}function ci(){Ra++}function li(){if(--Ra>0)return;if(xn){let e=xn;for(xn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Mn;){let e=Mn;for(Mn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Oa(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ka(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ui(r),iu(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ps(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Na(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Na(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===jn))return;t.globalVersion=jn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ps(t)){t.flags&=-3;return}const n=ce,r=He;ce=t,He=!0;try{Oa(t);const s=t.fn(t._value);(e.version===0||Ot(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ce=n,He=r,ka(t),t.flags&=-3}}function ui(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ui(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function iu(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let He=!0;const Da=[];function Mt(){Da.push(He),He=!1}function xt(){const t=Da.pop();He=t===void 0?!0:t}function Bi(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ce;ce=void 0;try{e()}finally{ce=n}}}let jn=0;class ou{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fi{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ce||!He||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new ou(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,La(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=r)}return n}trigger(e){this.version++,jn++,this.notify(e)}notify(e){ci();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{li()}}}function La(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)La(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Os=new WeakMap,Yt=Symbol(""),ks=Symbol(""),Wn=Symbol("");function me(t,e,n){if(He&&ce){let r=Os.get(t);r||Os.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new fi),s.map=r,s.key=n),s.track()}}function ot(t,e,n,r,s,i){const o=Os.get(t);if(!o){jn++;return}const a=c=>{c&&c.trigger()};if(ci(),e==="clear")o.forEach(a);else{const c=x(t),l=c&&si(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,p)=>{(p==="length"||p===Wn||!et(p)&&p>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Wn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Yt)),un(t)&&a(o.get(ks)));break;case"delete":c||(a(o.get(Yt)),un(t)&&a(o.get(ks)));break;case"set":un(t)&&a(o.get(Yt));break}}li()}function on(t){const e=J(t);return e===t?e:(me(e,"iterate",Wn),Me(t)?e:e.map(_e))}function Yr(t){return me(t=J(t),"iterate",Wn),t}const au={__proto__:null,[Symbol.iterator](){return fs(this,Symbol.iterator,_e)},concat(...t){return on(this).concat(...t.map(e=>x(e)?on(e):e))},entries(){return fs(this,"entries",t=>(t[1]=_e(t[1]),t))},every(t,e){return nt(this,"every",t,e,void 0,arguments)},filter(t,e){return nt(this,"filter",t,e,n=>n.map(_e),arguments)},find(t,e){return nt(this,"find",t,e,_e,arguments)},findIndex(t,e){return nt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return nt(this,"findLast",t,e,_e,arguments)},findLastIndex(t,e){return nt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return nt(this,"forEach",t,e,void 0,arguments)},includes(...t){return ds(this,"includes",t)},indexOf(...t){return ds(this,"indexOf",t)},join(t){return on(this).join(t)},lastIndexOf(...t){return ds(this,"lastIndexOf",t)},map(t,e){return nt(this,"map",t,e,void 0,arguments)},pop(){return An(this,"pop")},push(...t){return An(this,"push",t)},reduce(t,...e){return Vi(this,"reduce",t,e)},reduceRight(t,...e){return Vi(this,"reduceRight",t,e)},shift(){return An(this,"shift")},some(t,e){return nt(this,"some",t,e,void 0,arguments)},splice(...t){return An(this,"splice",t)},toReversed(){return on(this).toReversed()},toSorted(t){return on(this).toSorted(t)},toSpliced(...t){return on(this).toSpliced(...t)},unshift(...t){return An(this,"unshift",t)},values(){return fs(this,"values",_e)}};function fs(t,e,n){const r=Yr(t),s=r[e]();return r!==t&&!Me(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const cu=Array.prototype;function nt(t,e,n,r,s,i){const o=Yr(t),a=o!==t&&!Me(t),c=o[e];if(c!==cu[e]){const f=c.apply(t,i);return a?_e(f):f}let l=n;o!==t&&(a?l=function(f,p){return n.call(this,_e(f),p,t)}:n.length>2&&(l=function(f,p){return n.call(this,f,p,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function Vi(t,e,n,r){const s=Yr(t);let i=n;return s!==t&&(Me(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,_e(a),c,t)}),s[e](i,...r)}function ds(t,e,n){const r=J(t);me(r,"iterate",Wn);const s=r[e](...n);return(s===-1||s===!1)&&pi(n[0])?(n[0]=J(n[0]),r[e](...n)):s}function An(t,e,n=[]){Mt(),ci();const r=J(t)[e].apply(t,n);return li(),xt(),r}const lu=ti("__proto__,__v_isRef,__isVue"),Ma=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(et));function uu(t){et(t)||(t=String(t));const e=J(this);return me(e,"has",t),e.hasOwnProperty(t)}class xa{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?bu:Ha:i?$a:Fa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=x(e);if(!s){let c;if(o&&(c=au[n]))return c;if(n==="hasOwnProperty")return uu}const a=Reflect.get(e,n,ve(e)?e:r);return(et(n)?Ma.has(n):lu(n))||(s||me(e,"get",n),i)?a:ve(a)?o&&si(n)?a:a.value:ie(a)?s?Va(a):Xr(a):a}}class Ua extends xa{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Zt(i);if(!Me(r)&&!Zt(r)&&(i=J(i),r=J(r)),!x(e)&&ve(i)&&!ve(r))return c?!1:(i.value=r,!0)}const o=x(e)&&si(n)?Number(n)<e.length:Z(e,n),a=Reflect.set(e,n,r,ve(e)?e:s);return e===J(s)&&(o?Ot(r,i)&&ot(e,"set",n,r):ot(e,"add",n,r)),a}deleteProperty(e,n){const r=Z(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ot(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!et(n)||!Ma.has(n))&&me(e,"has",n),r}ownKeys(e){return me(e,"iterate",x(e)?"length":Yt),Reflect.ownKeys(e)}}class fu extends xa{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const du=new Ua,hu=new fu,pu=new Ua(!0);const Ns=t=>t,pr=t=>Reflect.getPrototypeOf(t);function gu(t,e,n){return function(...r){const s=this.__v_raw,i=J(s),o=un(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ns:e?Ds:_e;return!e&&me(i,"iterate",c?ks:Yt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function gr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function mu(t,e){const n={get(s){const i=this.__v_raw,o=J(i),a=J(s);t||(Ot(s,a)&&me(o,"get",s),me(o,"get",a));const{has:c}=pr(o),l=e?Ns:t?Ds:_e;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&me(J(s),"iterate",Yt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=J(i),a=J(s);return t||(Ot(s,a)&&me(o,"has",s),me(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=J(a),l=e?Ns:t?Ds:_e;return!t&&me(c,"iterate",Yt),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return pe(n,t?{add:gr("add"),set:gr("set"),delete:gr("delete"),clear:gr("clear")}:{add(s){!e&&!Me(s)&&!Zt(s)&&(s=J(s));const i=J(this);return pr(i).has.call(i,s)||(i.add(s),ot(i,"add",s,s)),this},set(s,i){!e&&!Me(i)&&!Zt(i)&&(i=J(i));const o=J(this),{has:a,get:c}=pr(o);let l=a.call(o,s);l||(s=J(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Ot(i,u)&&ot(o,"set",s,i):ot(o,"add",s,i),this},delete(s){const i=J(this),{has:o,get:a}=pr(i);let c=o.call(i,s);c||(s=J(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&ot(i,"delete",s,void 0),l},clear(){const s=J(this),i=s.size!==0,o=s.clear();return i&&ot(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=gu(s,t,e)}),n}function di(t,e){const n=mu(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const _u={get:di(!1,!1)},vu={get:di(!1,!0)},yu={get:di(!0,!1)};const Fa=new WeakMap,$a=new WeakMap,Ha=new WeakMap,bu=new WeakMap;function Eu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Iu(t){return t.__v_skip||!Object.isExtensible(t)?0:Eu(zl(t))}function Xr(t){return Zt(t)?t:hi(t,!1,du,_u,Fa)}function Ba(t){return hi(t,!1,pu,vu,$a)}function Va(t){return hi(t,!0,hu,yu,Ha)}function hi(t,e,n,r,s){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Iu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function fn(t){return Zt(t)?fn(t.__v_raw):!!(t&&t.__v_isReactive)}function Zt(t){return!!(t&&t.__v_isReadonly)}function Me(t){return!!(t&&t.__v_isShallow)}function pi(t){return t?!!t.__v_raw:!1}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function wu(t){return!Z(t,"__v_skip")&&Object.isExtensible(t)&&Ia(t,"__v_skip",!0),t}const _e=t=>ie(t)?Xr(t):t,Ds=t=>ie(t)?Va(t):t;function ve(t){return t?t.__v_isRef===!0:!1}function Su(t){return ja(t,!1)}function Tu(t){return ja(t,!0)}function ja(t,e){return ve(t)?t:new Cu(t,e)}class Cu{constructor(e,n){this.dep=new fi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:J(e),this._value=n?e:_e(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Me(e)||Zt(e);e=r?e:J(e),Ot(e,n)&&(this._rawValue=e,this._value=r?e:_e(e),this.dep.trigger())}}function dn(t){return ve(t)?t.value:t}const Au={get:(t,e,n)=>e==="__v_raw"?t:dn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ve(s)&&!ve(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Wa(t){return fn(t)?t:new Proxy(t,Au)}class Ru{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new fi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=jn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return Pa(this,!0),!0}get value(){const e=this.dep.track();return Na(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Pu(t,e,n=!1){let r,s;return j(t)?r=t:(r=t.get,s=t.set),new Ru(r,s,n)}const mr={},Nr=new WeakMap;let zt;function Ou(t,e=!1,n=zt){if(n){let r=Nr.get(n);r||Nr.set(n,r=[]),r.push(t)}}function ku(t,e,n=se){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=O=>s?O:Me(O)||s===!1||s===0?at(O,1):at(O);let u,f,p,m,I=!1,A=!1;if(ve(t)?(f=()=>t.value,I=Me(t)):fn(t)?(f=()=>l(t),I=!0):x(t)?(A=!0,I=t.some(O=>fn(O)||Me(O)),f=()=>t.map(O=>{if(ve(O))return O.value;if(fn(O))return l(O);if(j(O))return c?c(O,2):O()})):j(t)?e?f=c?()=>c(t,2):t:f=()=>{if(p){Mt();try{p()}finally{xt()}}const O=zt;zt=u;try{return c?c(t,3,[m]):t(m)}finally{zt=O}}:f=Qe,e&&s){const O=f,W=s===!0?1/0:s;f=()=>at(O(),W)}const H=su(),L=()=>{u.stop(),H&&H.active&&ri(H.effects,u)};if(i&&e){const O=e;e=(...W)=>{O(...W),L()}}let k=A?new Array(t.length).fill(mr):mr;const D=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const W=u.run();if(s||I||(A?W.some((q,G)=>Ot(q,k[G])):Ot(W,k))){p&&p();const q=zt;zt=u;try{const G=[W,k===mr?void 0:A&&k[0]===mr?[]:k,m];c?c(e,3,G):e(...G),k=W}finally{zt=q}}}else u.run()};return a&&a(D),u=new Aa(f),u.scheduler=o?()=>o(D,!1):D,m=O=>Ou(O,!1,u),p=u.onStop=()=>{const O=Nr.get(u);if(O){if(c)c(O,4);else for(const W of O)W();Nr.delete(u)}},e?r?D(!0):k=u.run():o?o(D.bind(null,!0),!0):u.run(),L.pause=u.pause.bind(u),L.resume=u.resume.bind(u),L.stop=L,L}function at(t,e=1/0,n){if(e<=0||!ie(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ve(t))at(t.value,e,n);else if(x(t))for(let r=0;r<t.length;r++)at(t[r],e,n);else if(Sn(t)||un(t))t.forEach(r=>{at(r,e,n)});else if(Ea(t)){for(const r in t)at(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&at(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sr(t,e,n,r){try{return r?t(...r):t()}catch(s){Qr(s,e,n)}}function Ve(t,e,n,r){if(j(t)){const s=sr(t,e,n,r);return s&&ya(s)&&s.catch(i=>{Qr(i,e,n)}),s}if(x(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ve(t[i],e,n,r));return s}}function Qr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||se;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){Mt(),sr(i,null,10,[t,c,l]),xt();return}}Nu(t,n,s,r,o)}function Nu(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const be=[];let Je=-1;const hn=[];let It=null,an=0;const Ka=Promise.resolve();let Dr=null;function gi(t){const e=Dr||Ka;return t?e.then(this?t.bind(this):t):e}function Du(t){let e=Je+1,n=be.length;for(;e<n;){const r=e+n>>>1,s=be[r],i=Kn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function mi(t){if(!(t.flags&1)){const e=Kn(t),n=be[be.length-1];!n||!(t.flags&2)&&e>=Kn(n)?be.push(t):be.splice(Du(e),0,t),t.flags|=1,za()}}function za(){Dr||(Dr=Ka.then(Ga))}function Lu(t){x(t)?hn.push(...t):It&&t.id===-1?It.splice(an+1,0,t):t.flags&1||(hn.push(t),t.flags|=1),za()}function ji(t,e,n=Je+1){for(;n<be.length;n++){const r=be[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;be.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function qa(t){if(hn.length){const e=[...new Set(hn)].sort((n,r)=>Kn(n)-Kn(r));if(hn.length=0,It){It.push(...e);return}for(It=e,an=0;an<It.length;an++){const n=It[an];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}It=null,an=0}}const Kn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ga(t){try{for(Je=0;Je<be.length;Je++){const e=be[Je];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),sr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Je<be.length;Je++){const e=be[Je];e&&(e.flags&=-2)}Je=-1,be.length=0,qa(),Dr=null,(be.length||hn.length)&&Ga()}}let Te=null,Ja=null;function Lr(t){const e=Te;return Te=t,Ja=t&&t.type.__scopeId||null,e}function zn(t,e=Te,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&eo(-1);const i=Lr(e);let o;try{o=t(...s)}finally{Lr(i),r._d&&eo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function V_(t,e){if(Te===null)return t;const n=rs(Te),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=se]=e[s];i&&(j(i)&&(i={mounted:i,updated:i}),i.deep&&at(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Vt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Mt(),Ve(c,n,8,[t.el,a,t,e]),xt())}}const Mu=Symbol("_vte"),Ya=t=>t.__isTeleport,wt=Symbol("_leaveCb"),_r=Symbol("_enterCb");function xu(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ic(()=>{t.isMounted=!0}),oc(()=>{t.isUnmounting=!0}),t}const De=[Function,Array],Xa={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:De,onEnter:De,onAfterEnter:De,onEnterCancelled:De,onBeforeLeave:De,onLeave:De,onAfterLeave:De,onLeaveCancelled:De,onBeforeAppear:De,onAppear:De,onAfterAppear:De,onAppearCancelled:De},Qa=t=>{const e=t.subTree;return e.component?Qa(e.component):e},Uu={name:"BaseTransition",props:Xa,setup(t,{slots:e}){const n=Df(),r=xu();return()=>{const s=e.default&&tc(e.default(),!0);if(!s||!s.length)return;const i=Za(s),o=J(t),{mode:a}=o;if(r.isLeaving)return hs(i);const c=Wi(i);if(!c)return hs(i);let l=Ls(c,o,r,n,f=>l=f);c.type!==Se&&qn(c,l);let u=n.subTree&&Wi(n.subTree);if(u&&u.type!==Se&&!Gt(c,u)&&Qa(n).type!==Se){let f=Ls(u,o,r,n);if(qn(u,f),a==="out-in"&&c.type!==Se)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},hs(i);a==="in-out"&&c.type!==Se?f.delayLeave=(p,m,I)=>{const A=ec(r,u);A[String(u.key)]=u,p[wt]=()=>{m(),p[wt]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{I(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function Za(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Se){e=n;break}}return e}const Fu=Uu;function ec(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ls(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:I,onLeaveCancelled:A,onBeforeAppear:H,onAppear:L,onAfterAppear:k,onAppearCancelled:D}=e,O=String(t.key),W=ec(n,t),q=(B,z)=>{B&&Ve(B,r,9,z)},G=(B,z)=>{const oe=z[1];q(B,z),x(B)?B.every(N=>N.length<=1)&&oe():B.length<=1&&oe()},de={mode:o,persisted:a,beforeEnter(B){let z=c;if(!n.isMounted)if(i)z=H||c;else return;B[wt]&&B[wt](!0);const oe=W[O];oe&&Gt(t,oe)&&oe.el[wt]&&oe.el[wt](),q(z,[B])},enter(B){let z=l,oe=u,N=f;if(!n.isMounted)if(i)z=L||l,oe=k||u,N=D||f;else return;let Y=!1;const he=B[_r]=Ce=>{Y||(Y=!0,Ce?q(N,[B]):q(oe,[B]),de.delayedLeave&&de.delayedLeave(),B[_r]=void 0)};z?G(z,[B,he]):he()},leave(B,z){const oe=String(t.key);if(B[_r]&&B[_r](!0),n.isUnmounting)return z();q(p,[B]);let N=!1;const Y=B[wt]=he=>{N||(N=!0,z(),he?q(A,[B]):q(I,[B]),B[wt]=void 0,W[oe]===t&&delete W[oe])};W[oe]=t,m?G(m,[B,Y]):Y()},clone(B){const z=Ls(B,e,n,r,s);return s&&s(z),z}};return de}function hs(t){if(Zr(t))return t=Dt(t),t.children=null,t}function Wi(t){if(!Zr(t))return Ya(t.type)&&t.children?Za(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&j(n.default))return n.default()}}function qn(t,e){t.shapeFlag&6&&t.component?(t.transition=e,qn(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function tc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ye?(o.patchFlag&128&&s++,r=r.concat(tc(o.children,e,a))):(e||o.type!==Se)&&r.push(a!=null?Dt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function nc(t,e){return j(t)?pe({name:t.name},e,{setup:t}):t}function rc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Mr(t,e,n,r,s=!1){if(x(t)){t.forEach((I,A)=>Mr(I,e&&(x(e)?e[A]:e),n,r,s));return}if(Un(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Mr(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?rs(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===se?a.refs={}:a.refs,f=a.setupState,p=J(f),m=f===se?()=>!1:I=>Z(p,I);if(l!=null&&l!==c&&(le(l)?(u[l]=null,m(l)&&(f[l]=null)):ve(l)&&(l.value=null)),j(c))sr(c,a,12,[o,u]);else{const I=le(c),A=ve(c);if(I||A){const H=()=>{if(t.f){const L=I?m(c)?f[c]:u[c]:c.value;s?x(L)&&ri(L,i):x(L)?L.includes(i)||L.push(i):I?(u[c]=[i],m(c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else I?(u[c]=o,m(c)&&(f[c]=o)):A&&(c.value=o,t.k&&(u[t.k]=o))};o?(H.id=-1,Pe(H,n)):H()}}}Jr().requestIdleCallback;Jr().cancelIdleCallback;const Un=t=>!!t.type.__asyncLoader,Zr=t=>t.type.__isKeepAlive;function $u(t,e){sc(t,"a",e)}function Hu(t,e){sc(t,"da",e)}function sc(t,e,n=ge){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(es(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Zr(s.parent.vnode)&&Bu(r,e,n,s),s=s.parent}}function Bu(t,e,n,r){const s=es(e,t,r,!0);ac(()=>{ri(r[e],s)},n)}function es(t,e,n=ge,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Mt();const a=ir(n),c=Ve(e,n,t,o);return a(),xt(),c});return r?s.unshift(i):s.push(i),i}}const _t=t=>(e,n=ge)=>{(!Jn||t==="sp")&&es(t,(...r)=>e(...r),n)},Vu=_t("bm"),ic=_t("m"),ju=_t("bu"),Wu=_t("u"),oc=_t("bum"),ac=_t("um"),Ku=_t("sp"),zu=_t("rtg"),qu=_t("rtc");function Gu(t,e=ge){es("ec",t,e)}const cc="components";function Er(t,e){return uc(cc,t,!0,e)||t}const lc=Symbol.for("v-ndc");function Ju(t){return le(t)?uc(cc,t,!1)||t:t||lc}function uc(t,e,n=!0,r=!1){const s=Te||ge;if(s){const i=s.type;{const a=Ff(i,!1);if(a&&(a===e||a===Ue(e)||a===Gr(Ue(e))))return i}const o=Ki(s[t]||i[t],e)||Ki(s.appContext[t],e);return!o&&r?i:o}}function Ki(t,e){return t&&(t[e]||t[Ue(e)]||t[Gr(Ue(e))])}function j_(t,e,n,r){let s;const i=n,o=x(t);if(o||le(t)){const a=o&&fn(t);let c=!1;a&&(c=!Me(t),t=Yr(t)),s=new Array(t.length);for(let l=0,u=t.length;l<u;l++)s[l]=e(c?_e(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(ie(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(t[u],u,c,i)}}else s=[];return s}const Ms=t=>t?kc(t)?rs(t):Ms(t.parent):null,Fn=pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ms(t.parent),$root:t=>Ms(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>dc(t),$forceUpdate:t=>t.f||(t.f=()=>{mi(t.update)}),$nextTick:t=>t.n||(t.n=gi.bind(t.proxy)),$watch:t=>_f.bind(t)}),ps=(t,e)=>t!==se&&!t.__isScriptSetup&&Z(t,e),Yu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ps(r,e))return o[e]=1,r[e];if(s!==se&&Z(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Z(l,e))return o[e]=3,i[e];if(n!==se&&Z(n,e))return o[e]=4,n[e];xs&&(o[e]=0)}}const u=Fn[e];let f,p;if(u)return e==="$attrs"&&me(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==se&&Z(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Z(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ps(s,e)?(s[e]=n,!0):r!==se&&Z(r,e)?(r[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==se&&Z(t,o)||ps(e,o)||(a=i[0])&&Z(a,o)||Z(r,o)||Z(Fn,o)||Z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function zi(t){return x(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let xs=!0;function Xu(t){const e=dc(t),n=t.proxy,r=t.ctx;xs=!1,e.beforeCreate&&qi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:I,activated:A,deactivated:H,beforeDestroy:L,beforeUnmount:k,destroyed:D,unmounted:O,render:W,renderTracked:q,renderTriggered:G,errorCaptured:de,serverPrefetch:B,expose:z,inheritAttrs:oe,components:N,directives:Y,filters:he}=e;if(l&&Qu(l,r,null),o)for(const te in o){const X=o[te];j(X)&&(r[te]=X.bind(n))}if(s){const te=s.call(n,n);ie(te)&&(t.data=Xr(te))}if(xs=!0,i)for(const te in i){const X=i[te],tt=j(X)?X.bind(n,n):j(X.get)?X.get.bind(n,n):Qe,vt=!j(X)&&j(X.set)?X.set.bind(n):Qe,We=$e({get:tt,set:vt});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>We.value,set:Ie=>We.value=Ie})}if(a)for(const te in a)fc(a[te],r,n,te);if(c){const te=j(c)?c.call(n):c;Reflect.ownKeys(te).forEach(X=>{Ir(X,te[X])})}u&&qi(u,t,"c");function ue(te,X){x(X)?X.forEach(tt=>te(tt.bind(n))):X&&te(X.bind(n))}if(ue(Vu,f),ue(ic,p),ue(ju,m),ue(Wu,I),ue($u,A),ue(Hu,H),ue(Gu,de),ue(qu,q),ue(zu,G),ue(oc,k),ue(ac,O),ue(Ku,B),x(z))if(z.length){const te=t.exposed||(t.exposed={});z.forEach(X=>{Object.defineProperty(te,X,{get:()=>n[X],set:tt=>n[X]=tt})})}else t.exposed||(t.exposed={});W&&t.render===Qe&&(t.render=W),oe!=null&&(t.inheritAttrs=oe),N&&(t.components=N),Y&&(t.directives=Y),B&&rc(t)}function Qu(t,e,n=Qe){x(t)&&(t=Us(t));for(const r in t){const s=t[r];let i;ie(s)?"default"in s?i=ht(s.from||r,s.default,!0):i=ht(s.from||r):i=ht(s),ve(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function qi(t,e,n){Ve(x(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function fc(t,e,n,r){let s=r.includes(".")?Cc(n,r):()=>n[r];if(le(t)){const i=e[t];j(i)&&wr(s,i)}else if(j(t))wr(s,t.bind(n));else if(ie(t))if(x(t))t.forEach(i=>fc(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&wr(s,i,t)}}function dc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>xr(c,l,o,!0)),xr(c,e,o)),ie(e)&&i.set(e,c),c}function xr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&xr(t,i,n,!0),s&&s.forEach(o=>xr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Zu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Zu={data:Gi,props:Ji,emits:Ji,methods:kn,computed:kn,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:kn,directives:kn,watch:tf,provide:Gi,inject:ef};function Gi(t,e){return e?t?function(){return pe(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function ef(t,e){return kn(Us(t),Us(e))}function Us(t){if(x(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ye(t,e){return t?[...new Set([].concat(t,e))]:e}function kn(t,e){return t?pe(Object.create(null),t,e):e}function Ji(t,e){return t?x(t)&&x(e)?[...new Set([...t,...e])]:pe(Object.create(null),zi(t),zi(e??{})):e}function tf(t,e){if(!t)return e;if(!e)return t;const n=pe(Object.create(null),t);for(const r in e)n[r]=ye(t[r],e[r]);return n}function hc(){return{app:null,config:{isNativeTag:Wl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nf=0;function rf(t,e){return function(r,s=null){j(r)||(r=pe({},r)),s!=null&&!ie(s)&&(s=null);const i=hc(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:nf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hf,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&j(u.install)?(o.add(u),u.install(l,...f)):j(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,p){if(!c){const m=l._ceVNode||fe(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(m,u,p),c=!0,l._container=u,u.__vue_app__=l,rs(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Ve(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=pn;pn=l;try{return u()}finally{pn=f}}};return l}}let pn=null;function Ir(t,e){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[t]=e}}function ht(t,e,n=!1){const r=ge||Te;if(r||pn){const s=pn?pn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}const pc={},gc=()=>Object.create(pc),mc=t=>Object.getPrototypeOf(t)===pc;function sf(t,e,n,r=!1){const s={},i=gc();t.propsDefaults=Object.create(null),_c(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ba(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function of(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=J(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(ts(t.emitsOptions,p))continue;const m=e[p];if(c)if(Z(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const I=Ue(p);s[I]=Fs(c,a,I,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{_c(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!Z(e,f)&&((u=nn(f))===f||!Z(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Fs(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!Z(e,f))&&(delete i[f],l=!0)}l&&ot(t.attrs,"set","")}function _c(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ln(c))continue;const l=e[c];let u;s&&Z(s,u=Ue(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ts(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=J(n),l=a||se;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Fs(s,c,f,l[f],t,!Z(l,f))}}return o}function Fs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&j(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=ir(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===nn(n))&&(r=!0))}return r}const af=new WeakMap;function vc(t,e,n=!1){const r=n?af:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const u=f=>{c=!0;const[p,m]=vc(f,e,!0);pe(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ie(t)&&r.set(t,ln),ln;if(x(i))for(let u=0;u<i.length;u++){const f=Ue(i[u]);Yi(f)&&(o[f]=se)}else if(i)for(const u in i){const f=Ue(u);if(Yi(f)){const p=i[u],m=o[f]=x(p)||j(p)?{type:p}:pe({},p),I=m.type;let A=!1,H=!0;if(x(I))for(let L=0;L<I.length;++L){const k=I[L],D=j(k)&&k.name;if(D==="Boolean"){A=!0;break}else D==="String"&&(H=!1)}else A=j(I)&&I.name==="Boolean";m[0]=A,m[1]=H,(A||Z(m,"default"))&&a.push(f)}}const l=[o,a];return ie(t)&&r.set(t,l),l}function Yi(t){return t[0]!=="$"&&!Ln(t)}const yc=t=>t[0]==="_"||t==="$stable",_i=t=>x(t)?t.map(Xe):[Xe(t)],cf=(t,e,n)=>{if(e._n)return e;const r=zn((...s)=>_i(e(...s)),n);return r._c=!1,r},bc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(yc(s))continue;const i=t[s];if(j(i))e[s]=cf(s,i,r);else if(i!=null){const o=_i(i);e[s]=()=>o}}},Ec=(t,e)=>{const n=_i(e);t.slots.default=()=>n},Ic=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},lf=(t,e,n)=>{const r=t.slots=gc();if(t.vnode.shapeFlag&32){const s=e._;s?(Ic(r,e,n),n&&Ia(r,"_",s,!0)):bc(e,r)}else e&&Ec(t,e)},uf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=se;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Ic(s,e,n):(i=!e.$stable,bc(e,s)),o=e}else e&&(Ec(t,e),o={default:1});if(i)for(const a in s)!yc(a)&&o[a]==null&&delete s[a]},Pe=Sf;function ff(t){return df(t)}function df(t,e){const n=Jr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=Qe,insertStaticContent:I}=t,A=(d,h,g,_=null,b=null,y=null,T=void 0,S=null,w=!!h.dynamicChildren)=>{if(d===h)return;d&&!Gt(d,h)&&(_=v(d),Ie(d,b,y,!0),d=null),h.patchFlag===-2&&(w=!1,h.dynamicChildren=null);const{type:E,ref:F,shapeFlag:R}=h;switch(E){case ns:H(d,h,g,_);break;case Se:L(d,h,g,_);break;case Sr:d==null&&k(h,g,_,T);break;case Ye:N(d,h,g,_,b,y,T,S,w);break;default:R&1?W(d,h,g,_,b,y,T,S,w):R&6?Y(d,h,g,_,b,y,T,S,w):(R&64||R&128)&&E.process(d,h,g,_,b,y,T,S,w,M)}F!=null&&b&&Mr(F,d&&d.ref,y,h||d,!h)},H=(d,h,g,_)=>{if(d==null)r(h.el=a(h.children),g,_);else{const b=h.el=d.el;h.children!==d.children&&l(b,h.children)}},L=(d,h,g,_)=>{d==null?r(h.el=c(h.children||""),g,_):h.el=d.el},k=(d,h,g,_)=>{[d.el,d.anchor]=I(d.children,h,g,_,d.el,d.anchor)},D=({el:d,anchor:h},g,_)=>{let b;for(;d&&d!==h;)b=p(d),r(d,g,_),d=b;r(h,g,_)},O=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),s(d),d=g;s(h)},W=(d,h,g,_,b,y,T,S,w)=>{h.type==="svg"?T="svg":h.type==="math"&&(T="mathml"),d==null?q(h,g,_,b,y,T,S,w):B(d,h,b,y,T,S,w)},q=(d,h,g,_,b,y,T,S)=>{let w,E;const{props:F,shapeFlag:R,transition:U,dirs:V}=d;if(w=d.el=o(d.type,y,F&&F.is,F),R&8?u(w,d.children):R&16&&de(d.children,w,null,_,b,gs(d,y),T,S),V&&Vt(d,null,_,"created"),G(w,d,d.scopeId,T,_),F){for(const ae in F)ae!=="value"&&!Ln(ae)&&i(w,ae,null,F[ae],y,_);"value"in F&&i(w,"value",null,F.value,y),(E=F.onVnodeBeforeMount)&&Ge(E,_,d)}V&&Vt(d,null,_,"beforeMount");const K=hf(b,U);K&&U.beforeEnter(w),r(w,h,g),((E=F&&F.onVnodeMounted)||K||V)&&Pe(()=>{E&&Ge(E,_,d),K&&U.enter(w),V&&Vt(d,null,_,"mounted")},b)},G=(d,h,g,_,b)=>{if(g&&m(d,g),_)for(let y=0;y<_.length;y++)m(d,_[y]);if(b){let y=b.subTree;if(h===y||Rc(y.type)&&(y.ssContent===h||y.ssFallback===h)){const T=b.vnode;G(d,T,T.scopeId,T.slotScopeIds,b.parent)}}},de=(d,h,g,_,b,y,T,S,w=0)=>{for(let E=w;E<d.length;E++){const F=d[E]=S?St(d[E]):Xe(d[E]);A(null,F,h,g,_,b,y,T,S)}},B=(d,h,g,_,b,y,T)=>{const S=h.el=d.el;let{patchFlag:w,dynamicChildren:E,dirs:F}=h;w|=d.patchFlag&16;const R=d.props||se,U=h.props||se;let V;if(g&&jt(g,!1),(V=U.onVnodeBeforeUpdate)&&Ge(V,g,h,d),F&&Vt(h,d,g,"beforeUpdate"),g&&jt(g,!0),(R.innerHTML&&U.innerHTML==null||R.textContent&&U.textContent==null)&&u(S,""),E?z(d.dynamicChildren,E,S,g,_,gs(h,b),y):T||X(d,h,S,null,g,_,gs(h,b),y,!1),w>0){if(w&16)oe(S,R,U,g,b);else if(w&2&&R.class!==U.class&&i(S,"class",null,U.class,b),w&4&&i(S,"style",R.style,U.style,b),w&8){const K=h.dynamicProps;for(let ae=0;ae<K.length;ae++){const ee=K[ae],Ae=R[ee],we=U[ee];(we!==Ae||ee==="value")&&i(S,ee,Ae,we,b,g)}}w&1&&d.children!==h.children&&u(S,h.children)}else!T&&E==null&&oe(S,R,U,g,b);((V=U.onVnodeUpdated)||F)&&Pe(()=>{V&&Ge(V,g,h,d),F&&Vt(h,d,g,"updated")},_)},z=(d,h,g,_,b,y,T)=>{for(let S=0;S<h.length;S++){const w=d[S],E=h[S],F=w.el&&(w.type===Ye||!Gt(w,E)||w.shapeFlag&70)?f(w.el):g;A(w,E,F,null,_,b,y,T,!0)}},oe=(d,h,g,_,b)=>{if(h!==g){if(h!==se)for(const y in h)!Ln(y)&&!(y in g)&&i(d,y,h[y],null,b,_);for(const y in g){if(Ln(y))continue;const T=g[y],S=h[y];T!==S&&y!=="value"&&i(d,y,S,T,b,_)}"value"in g&&i(d,"value",h.value,g.value,b)}},N=(d,h,g,_,b,y,T,S,w)=>{const E=h.el=d?d.el:a(""),F=h.anchor=d?d.anchor:a("");let{patchFlag:R,dynamicChildren:U,slotScopeIds:V}=h;V&&(S=S?S.concat(V):V),d==null?(r(E,g,_),r(F,g,_),de(h.children||[],g,F,b,y,T,S,w)):R>0&&R&64&&U&&d.dynamicChildren?(z(d.dynamicChildren,U,g,b,y,T,S),(h.key!=null||b&&h===b.subTree)&&wc(d,h,!0)):X(d,h,g,F,b,y,T,S,w)},Y=(d,h,g,_,b,y,T,S,w)=>{h.slotScopeIds=S,d==null?h.shapeFlag&512?b.ctx.activate(h,g,_,T,w):he(h,g,_,b,y,T,w):Ce(d,h,w)},he=(d,h,g,_,b,y,T)=>{const S=d.component=Nf(d,_,b);if(Zr(d)&&(S.ctx.renderer=M),Lf(S,!1,T),S.asyncDep){if(b&&b.registerDep(S,ue,T),!d.el){const w=S.subTree=fe(Se);L(null,w,h,g)}}else ue(S,d,h,g,b,y,T)},Ce=(d,h,g)=>{const _=h.component=d.component;if(If(d,h,g))if(_.asyncDep&&!_.asyncResolved){te(_,h,g);return}else _.next=h,_.update();else h.el=d.el,_.vnode=h},ue=(d,h,g,_,b,y,T)=>{const S=()=>{if(d.isMounted){let{next:R,bu:U,u:V,parent:K,vnode:ae}=d;{const ze=Sc(d);if(ze){R&&(R.el=ae.el,te(d,R,T)),ze.asyncDep.then(()=>{d.isUnmounted||S()});return}}let ee=R,Ae;jt(d,!1),R?(R.el=ae.el,te(d,R,T)):R=ae,U&&br(U),(Ae=R.props&&R.props.onVnodeBeforeUpdate)&&Ge(Ae,K,R,ae),jt(d,!0);const we=Qi(d),Ke=d.subTree;d.subTree=we,A(Ke,we,f(Ke.el),v(Ke),d,b,y),R.el=we.el,ee===null&&wf(d,we.el),V&&Pe(V,b),(Ae=R.props&&R.props.onVnodeUpdated)&&Pe(()=>Ge(Ae,K,R,ae),b)}else{let R;const{el:U,props:V}=h,{bm:K,m:ae,parent:ee,root:Ae,type:we}=d,Ke=Un(h);jt(d,!1),K&&br(K),!Ke&&(R=V&&V.onVnodeBeforeMount)&&Ge(R,ee,h),jt(d,!0);{Ae.ce&&Ae.ce._injectChildStyle(we);const ze=d.subTree=Qi(d);A(null,ze,g,_,d,b,y),h.el=ze.el}if(ae&&Pe(ae,b),!Ke&&(R=V&&V.onVnodeMounted)){const ze=h;Pe(()=>Ge(R,ee,ze),b)}(h.shapeFlag&256||ee&&Un(ee.vnode)&&ee.vnode.shapeFlag&256)&&d.a&&Pe(d.a,b),d.isMounted=!0,h=g=_=null}};d.scope.on();const w=d.effect=new Aa(S);d.scope.off();const E=d.update=w.run.bind(w),F=d.job=w.runIfDirty.bind(w);F.i=d,F.id=d.uid,w.scheduler=()=>mi(F),jt(d,!0),E()},te=(d,h,g)=>{h.component=d;const _=d.vnode.props;d.vnode=h,d.next=null,of(d,h.props,_,g),uf(d,h.children,g),Mt(),ji(d),xt()},X=(d,h,g,_,b,y,T,S,w=!1)=>{const E=d&&d.children,F=d?d.shapeFlag:0,R=h.children,{patchFlag:U,shapeFlag:V}=h;if(U>0){if(U&128){vt(E,R,g,_,b,y,T,S,w);return}else if(U&256){tt(E,R,g,_,b,y,T,S,w);return}}V&8?(F&16&&Ne(E,b,y),R!==E&&u(g,R)):F&16?V&16?vt(E,R,g,_,b,y,T,S,w):Ne(E,b,y,!0):(F&8&&u(g,""),V&16&&de(R,g,_,b,y,T,S,w))},tt=(d,h,g,_,b,y,T,S,w)=>{d=d||ln,h=h||ln;const E=d.length,F=h.length,R=Math.min(E,F);let U;for(U=0;U<R;U++){const V=h[U]=w?St(h[U]):Xe(h[U]);A(d[U],V,g,null,b,y,T,S,w)}E>F?Ne(d,b,y,!0,!1,R):de(h,g,_,b,y,T,S,w,R)},vt=(d,h,g,_,b,y,T,S,w)=>{let E=0;const F=h.length;let R=d.length-1,U=F-1;for(;E<=R&&E<=U;){const V=d[E],K=h[E]=w?St(h[E]):Xe(h[E]);if(Gt(V,K))A(V,K,g,null,b,y,T,S,w);else break;E++}for(;E<=R&&E<=U;){const V=d[R],K=h[U]=w?St(h[U]):Xe(h[U]);if(Gt(V,K))A(V,K,g,null,b,y,T,S,w);else break;R--,U--}if(E>R){if(E<=U){const V=U+1,K=V<F?h[V].el:_;for(;E<=U;)A(null,h[E]=w?St(h[E]):Xe(h[E]),g,K,b,y,T,S,w),E++}}else if(E>U)for(;E<=R;)Ie(d[E],b,y,!0),E++;else{const V=E,K=E,ae=new Map;for(E=K;E<=U;E++){const Re=h[E]=w?St(h[E]):Xe(h[E]);Re.key!=null&&ae.set(Re.key,E)}let ee,Ae=0;const we=U-K+1;let Ke=!1,ze=0;const Cn=new Array(we);for(E=0;E<we;E++)Cn[E]=0;for(E=V;E<=R;E++){const Re=d[E];if(Ae>=we){Ie(Re,b,y,!0);continue}let qe;if(Re.key!=null)qe=ae.get(Re.key);else for(ee=K;ee<=U;ee++)if(Cn[ee-K]===0&&Gt(Re,h[ee])){qe=ee;break}qe===void 0?Ie(Re,b,y,!0):(Cn[qe-K]=E+1,qe>=ze?ze=qe:Ke=!0,A(Re,h[qe],g,null,b,y,T,S,w),Ae++)}const Ui=Ke?pf(Cn):ln;for(ee=Ui.length-1,E=we-1;E>=0;E--){const Re=K+E,qe=h[Re],Fi=Re+1<F?h[Re+1].el:_;Cn[E]===0?A(null,qe,g,Fi,b,y,T,S,w):Ke&&(ee<0||E!==Ui[ee]?We(qe,g,Fi,2):ee--)}}},We=(d,h,g,_,b=null)=>{const{el:y,type:T,transition:S,children:w,shapeFlag:E}=d;if(E&6){We(d.component.subTree,h,g,_);return}if(E&128){d.suspense.move(h,g,_);return}if(E&64){T.move(d,h,g,M);return}if(T===Ye){r(y,h,g);for(let R=0;R<w.length;R++)We(w[R],h,g,_);r(d.anchor,h,g);return}if(T===Sr){D(d,h,g);return}if(_!==2&&E&1&&S)if(_===0)S.beforeEnter(y),r(y,h,g),Pe(()=>S.enter(y),b);else{const{leave:R,delayLeave:U,afterLeave:V}=S,K=()=>r(y,h,g),ae=()=>{R(y,()=>{K(),V&&V()})};U?U(y,K,ae):ae()}else r(y,h,g)},Ie=(d,h,g,_=!1,b=!1)=>{const{type:y,props:T,ref:S,children:w,dynamicChildren:E,shapeFlag:F,patchFlag:R,dirs:U,cacheIndex:V}=d;if(R===-2&&(b=!1),S!=null&&Mr(S,null,g,d,!0),V!=null&&(h.renderCache[V]=void 0),F&256){h.ctx.deactivate(d);return}const K=F&1&&U,ae=!Un(d);let ee;if(ae&&(ee=T&&T.onVnodeBeforeUnmount)&&Ge(ee,h,d),F&6)hr(d.component,g,_);else{if(F&128){d.suspense.unmount(g,_);return}K&&Vt(d,null,h,"beforeUnmount"),F&64?d.type.remove(d,h,g,M,_):E&&!E.hasOnce&&(y!==Ye||R>0&&R&64)?Ne(E,h,g,!1,!0):(y===Ye&&R&384||!b&&F&16)&&Ne(w,h,g),_&&rn(d)}(ae&&(ee=T&&T.onVnodeUnmounted)||K)&&Pe(()=>{ee&&Ge(ee,h,d),K&&Vt(d,null,h,"unmounted")},g)},rn=d=>{const{type:h,el:g,anchor:_,transition:b}=d;if(h===Ye){sn(g,_);return}if(h===Sr){O(d);return}const y=()=>{s(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:T,delayLeave:S}=b,w=()=>T(g,y);S?S(d.el,y,w):w()}else y()},sn=(d,h)=>{let g;for(;d!==h;)g=p(d),s(d),d=g;s(h)},hr=(d,h,g)=>{const{bum:_,scope:b,job:y,subTree:T,um:S,m:w,a:E}=d;Xi(w),Xi(E),_&&br(_),b.stop(),y&&(y.flags|=8,Ie(T,d,h,g)),S&&Pe(S,h),Pe(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ne=(d,h,g,_=!1,b=!1,y=0)=>{for(let T=y;T<d.length;T++)Ie(d[T],h,g,_,b)},v=d=>{if(d.shapeFlag&6)return v(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),g=h&&h[Mu];return g?p(g):h};let P=!1;const C=(d,h,g)=>{d==null?h._vnode&&Ie(h._vnode,null,null,!0):A(h._vnode||null,d,h,null,null,null,g),h._vnode=d,P||(P=!0,ji(),qa(),P=!1)},M={p:A,um:Ie,m:We,r:rn,mt:he,mc:de,pc:X,pbc:z,n:v,o:t};return{render:C,hydrate:void 0,createApp:rf(C)}}function gs({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function jt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function hf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wc(t,e,n=!1){const r=t.children,s=e.children;if(x(r)&&x(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=St(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&wc(o,a)),a.type===ns&&(a.el=o.el)}}function pf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Sc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Sc(e)}function Xi(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const gf=Symbol.for("v-scx"),mf=()=>ht(gf);function wr(t,e,n){return Tc(t,e,n)}function Tc(t,e,n=se){const{immediate:r,deep:s,flush:i,once:o}=n,a=pe({},n),c=e&&r||!e&&i!=="post";let l;if(Jn){if(i==="sync"){const m=mf();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Qe,m.resume=Qe,m.pause=Qe,m}}const u=ge;a.call=(m,I,A)=>Ve(m,u,I,A);let f=!1;i==="post"?a.scheduler=m=>{Pe(m,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,I)=>{I?m():mi(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const p=ku(t,e,a);return Jn&&(l?l.push(p):c&&p()),p}function _f(t,e,n){const r=this.proxy,s=le(t)?t.includes(".")?Cc(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=ir(this),a=Tc(s,i.bind(r),n);return o(),a}function Cc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const vf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ue(e)}Modifiers`]||t[`${nn(e)}Modifiers`];function yf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||se;let s=n;const i=e.startsWith("update:"),o=i&&vf(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>le(u)?u.trim():u)),o.number&&(s=n.map(kr)));let a,c=r[a=cs(e)]||r[a=cs(Ue(e))];!c&&i&&(c=r[a=cs(nn(e))]),c&&Ve(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ve(l,t,6,s)}}function Ac(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const u=Ac(l,e,!0);u&&(a=!0,pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ie(t)&&r.set(t,null),null):(x(i)?i.forEach(c=>o[c]=null):pe(o,i),ie(t)&&r.set(t,o),o)}function ts(t,e){return!t||!zr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,nn(e))||Z(t,e))}function Qi(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:p,setupState:m,ctx:I,inheritAttrs:A}=t,H=Lr(t);let L,k;try{if(n.shapeFlag&4){const O=s||r,W=O;L=Xe(l.call(W,O,u,f,m,p,I)),k=a}else{const O=e;L=Xe(O.length>1?O(f,{attrs:a,slots:o,emit:c}):O(f,null)),k=e.props?a:bf(a)}}catch(O){$n.length=0,Qr(O,t,1),L=fe(Se)}let D=L;if(k&&A!==!1){const O=Object.keys(k),{shapeFlag:W}=D;O.length&&W&7&&(i&&O.some(ni)&&(k=Ef(k,i)),D=Dt(D,k,!1,!0))}return n.dirs&&(D=Dt(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&qn(D,n.transition),L=D,Lr(H),L}const bf=t=>{let e;for(const n in t)(n==="class"||n==="style"||zr(n))&&((e||(e={}))[n]=t[n]);return e},Ef=(t,e)=>{const n={};for(const r in t)(!ni(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function If(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Zi(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!ts(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Zi(r,o,l):!0:!!o;return!1}function Zi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ts(n,i))return!0}return!1}function wf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Rc=t=>t.__isSuspense;function Sf(t,e){e&&e.pendingBranch?x(t)?e.effects.push(...t):e.effects.push(t):Lu(t)}const Ye=Symbol.for("v-fgt"),ns=Symbol.for("v-txt"),Se=Symbol.for("v-cmt"),Sr=Symbol.for("v-stc"),$n=[];let ke=null;function Xt(t=!1){$n.push(ke=t?null:[])}function Tf(){$n.pop(),ke=$n[$n.length-1]||null}let Gn=1;function eo(t,e=!1){Gn+=t,t<0&&ke&&e&&(ke.hasOnce=!0)}function Pc(t){return t.dynamicChildren=Gn>0?ke||ln:null,Tf(),Gn>0&&ke&&ke.push(t),t}function Ur(t,e,n,r,s,i){return Pc(Ct(t,e,n,r,s,i,!0))}function vi(t,e,n,r,s){return Pc(fe(t,e,n,r,s,!0))}function Fr(t){return t?t.__v_isVNode===!0:!1}function Gt(t,e){return t.type===e.type&&t.key===e.key}const Oc=({key:t})=>t??null,Tr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?le(t)||ve(t)||j(t)?{i:Te,r:t,k:e,f:!!n}:t:null);function Ct(t,e=null,n=null,r=0,s=null,i=t===Ye?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Oc(e),ref:e&&Tr(e),scopeId:Ja,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Te};return a?(yi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=le(n)?8:16),Gn>0&&!o&&ke&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ke.push(c),c}const fe=Cf;function Cf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===lc)&&(t=Se),Fr(t)){const a=Dt(t,e,!0);return n&&yi(a,n),Gn>0&&!i&&ke&&(a.shapeFlag&6?ke[ke.indexOf(t)]=a:ke.push(a)),a.patchFlag=-2,a}if($f(t)&&(t=t.__vccOpts),e){e=Af(e);let{class:a,style:c}=e;a&&!le(a)&&(e.class=oi(a)),ie(c)&&(pi(c)&&!x(c)&&(c=pe({},c)),e.style=ii(c))}const o=le(t)?1:Rc(t)?128:Ya(t)?64:ie(t)?4:j(t)?2:0;return Ct(t,e,n,r,s,o,i,!0)}function Af(t){return t?pi(t)||mc(t)?pe({},t):t:null}function Dt(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Pf(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Oc(l),ref:e&&e.ref?n&&i?x(i)?i.concat(Tr(e)):[i,Tr(e)]:Tr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ye?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Dt(t.ssContent),ssFallback:t.ssFallback&&Dt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&qn(u,c.clone(u)),u}function $s(t=" ",e=0){return fe(ns,null,t,e)}function Rf(t,e){const n=fe(Sr,null,t);return n.staticCount=e,n}function W_(t="",e=!1){return e?(Xt(),vi(Se,null,t)):fe(Se,null,t)}function Xe(t){return t==null||typeof t=="boolean"?fe(Se):x(t)?fe(Ye,null,t.slice()):Fr(t)?St(t):fe(ns,null,String(t))}function St(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Dt(t)}function yi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(x(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),yi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!mc(e)?e._ctx=Te:s===3&&Te&&(Te.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:Te},n=32):(e=String(e),r&64?(n=16,e=[$s(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=oi([e.class,r.class]));else if(s==="style")e.style=ii([e.style,r.style]);else if(zr(s)){const i=e[s],o=r[s];o&&i!==o&&!(x(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ge(t,e,n,r=null){Ve(t,e,7,[n,r])}const Of=hc();let kf=0;function Nf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Of,i={uid:kf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ru(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vc(r,s),emitsOptions:Ac(r,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:r.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=yf.bind(null,i),t.ce&&t.ce(i),i}let ge=null;const Df=()=>ge||Te;let $r,Hs;{const t=Jr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};$r=e("__VUE_INSTANCE_SETTERS__",n=>ge=n),Hs=e("__VUE_SSR_SETTERS__",n=>Jn=n)}const ir=t=>{const e=ge;return $r(t),t.scope.on(),()=>{t.scope.off(),$r(e)}},to=()=>{ge&&ge.scope.off(),$r(null)};function kc(t){return t.vnode.shapeFlag&4}let Jn=!1;function Lf(t,e=!1,n=!1){e&&Hs(e);const{props:r,children:s}=t.vnode,i=kc(t);sf(t,r,i,e),lf(t,s,n);const o=i?Mf(t,e):void 0;return e&&Hs(!1),o}function Mf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Yu);const{setup:r}=n;if(r){Mt();const s=t.setupContext=r.length>1?Uf(t):null,i=ir(t),o=sr(r,t,0,[t.props,s]),a=ya(o);if(xt(),i(),(a||t.sp)&&!Un(t)&&rc(t),a){if(o.then(to,to),e)return o.then(c=>{no(t,c)}).catch(c=>{Qr(c,t,0)});t.asyncDep=o}else no(t,o)}else Nc(t)}function no(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=Wa(e)),Nc(t)}function Nc(t,e,n){const r=t.type;t.render||(t.render=r.render||Qe);{const s=ir(t);Mt();try{Xu(t)}finally{xt(),s()}}}const xf={get(t,e){return me(t,"get",""),t[e]}};function Uf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,xf),slots:t.slots,emit:t.emit,expose:e}}function rs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Wa(wu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fn)return Fn[n](t)},has(e,n){return n in e||n in Fn}})):t.proxy}function Ff(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function $f(t){return j(t)&&"__vccOpts"in t}const $e=(t,e)=>Pu(t,e,Jn);function bi(t,e,n){const r=arguments.length;return r===2?ie(e)&&!x(e)?Fr(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Fr(n)&&(n=[n]),fe(t,e,n))}const Hf="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bs;const ro=typeof window<"u"&&window.trustedTypes;if(ro)try{Bs=ro.createPolicy("vue",{createHTML:t=>t})}catch{}const Dc=Bs?t=>Bs.createHTML(t):t=>t,Bf="http://www.w3.org/2000/svg",Vf="http://www.w3.org/1998/Math/MathML",it=typeof document<"u"?document:null,so=it&&it.createElement("template"),jf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?it.createElementNS(Bf,t):e==="mathml"?it.createElementNS(Vf,t):n?it.createElement(t,{is:n}):it.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>it.createTextNode(t),createComment:t=>it.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>it.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{so.innerHTML=Dc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=so.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},yt="transition",Rn="animation",Yn=Symbol("_vtc"),Lc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Wf=pe({},Xa,Lc),Kf=t=>(t.displayName="Transition",t.props=Wf,t),zf=Kf((t,{slots:e})=>bi(Fu,qf(t),e)),Wt=(t,e=[])=>{x(t)?t.forEach(n=>n(...e)):t&&t(...e)},io=t=>t?x(t)?t.some(e=>e.length>1):t.length>1:!1;function qf(t){const e={};for(const N in t)N in Lc||(e[N]=t[N]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,I=Gf(s),A=I&&I[0],H=I&&I[1],{onBeforeEnter:L,onEnter:k,onEnterCancelled:D,onLeave:O,onLeaveCancelled:W,onBeforeAppear:q=L,onAppear:G=k,onAppearCancelled:de=D}=e,B=(N,Y,he,Ce)=>{N._enterCancelled=Ce,Kt(N,Y?u:a),Kt(N,Y?l:o),he&&he()},z=(N,Y)=>{N._isLeaving=!1,Kt(N,f),Kt(N,m),Kt(N,p),Y&&Y()},oe=N=>(Y,he)=>{const Ce=N?G:k,ue=()=>B(Y,N,he);Wt(Ce,[Y,ue]),oo(()=>{Kt(Y,N?c:i),rt(Y,N?u:a),io(Ce)||ao(Y,r,A,ue)})};return pe(e,{onBeforeEnter(N){Wt(L,[N]),rt(N,i),rt(N,o)},onBeforeAppear(N){Wt(q,[N]),rt(N,c),rt(N,l)},onEnter:oe(!1),onAppear:oe(!0),onLeave(N,Y){N._isLeaving=!0;const he=()=>z(N,Y);rt(N,f),N._enterCancelled?(rt(N,p),uo()):(uo(),rt(N,p)),oo(()=>{N._isLeaving&&(Kt(N,f),rt(N,m),io(O)||ao(N,r,H,he))}),Wt(O,[N,he])},onEnterCancelled(N){B(N,!1,void 0,!0),Wt(D,[N])},onAppearCancelled(N){B(N,!0,void 0,!0),Wt(de,[N])},onLeaveCancelled(N){z(N),Wt(W,[N])}})}function Gf(t){if(t==null)return null;if(ie(t))return[ms(t.enter),ms(t.leave)];{const e=ms(t);return[e,e]}}function ms(t){return Jl(t)}function rt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Yn]||(t[Yn]=new Set)).add(e)}function Kt(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Yn];n&&(n.delete(e),n.size||(t[Yn]=void 0))}function oo(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Jf=0;function ao(t,e,n,r){const s=t._endId=++Jf,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Yf(t,e);if(!o)return r();const l=o+"end";let u=0;const f=()=>{t.removeEventListener(l,p),i()},p=m=>{m.target===t&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),t.addEventListener(l,p)}function Yf(t,e){const n=window.getComputedStyle(t),r=I=>(n[I]||"").split(", "),s=r(`${yt}Delay`),i=r(`${yt}Duration`),o=co(s,i),a=r(`${Rn}Delay`),c=r(`${Rn}Duration`),l=co(a,c);let u=null,f=0,p=0;e===yt?o>0&&(u=yt,f=o,p=i.length):e===Rn?l>0&&(u=Rn,f=l,p=c.length):(f=Math.max(o,l),u=f>0?o>l?yt:Rn:null,p=u?u===yt?i.length:c.length:0);const m=u===yt&&/\b(transform|all)(,|$)/.test(r(`${yt}Property`).toString());return{type:u,timeout:f,propCount:p,hasTransform:m}}function co(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>lo(n)+lo(t[r])))}function lo(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function uo(){return document.body.offsetHeight}function Xf(t,e,n){const r=t[Yn];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const fo=Symbol("_vod"),Qf=Symbol("_vsh"),Zf=Symbol(""),ed=/(^|;)\s*display\s*:/;function td(t,e,n){const r=t.style,s=le(n);let i=!1;if(n&&!s){if(e)if(le(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Cr(r,a,"")}else for(const o in e)n[o]==null&&Cr(r,o,"");for(const o in n)o==="display"&&(i=!0),Cr(r,o,n[o])}else if(s){if(e!==n){const o=r[Zf];o&&(n+=";"+o),r.cssText=n,i=ed.test(n)}}else e&&t.removeAttribute("style");fo in t&&(t[fo]=i?r.display:"",t[Qf]&&(r.display="none"))}const ho=/\s*!important$/;function Cr(t,e,n){if(x(n))n.forEach(r=>Cr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=nd(t,e);ho.test(n)?t.setProperty(nn(r),n.replace(ho,""),"important"):t[r]=n}}const po=["Webkit","Moz","ms"],_s={};function nd(t,e){const n=_s[e];if(n)return n;let r=Ue(e);if(r!=="filter"&&r in t)return _s[e]=r;r=Gr(r);for(let s=0;s<po.length;s++){const i=po[s]+r;if(i in t)return _s[e]=i}return e}const go="http://www.w3.org/1999/xlink";function mo(t,e,n,r,s,i=tu(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(go,e.slice(6,e.length)):t.setAttributeNS(go,e,n):n==null||i&&!wa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":et(n)?String(n):n)}function _o(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Dc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=wa(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ct(t,e,n,r){t.addEventListener(e,n,r)}function rd(t,e,n,r){t.removeEventListener(e,n,r)}const vo=Symbol("_vei");function sd(t,e,n,r,s=null){const i=t[vo]||(t[vo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=id(e);if(r){const l=i[e]=cd(r,s);ct(t,a,l,c)}else o&&(rd(t,a,o,c),i[e]=void 0)}}const yo=/(?:Once|Passive|Capture)$/;function id(t){let e;if(yo.test(t)){e={};let r;for(;r=t.match(yo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nn(t.slice(2)),e]}let vs=0;const od=Promise.resolve(),ad=()=>vs||(od.then(()=>vs=0),vs=Date.now());function cd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ve(ld(r,n.value),e,5,[r])};return n.value=t,n.attached=ad(),n}function ld(t,e){if(x(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const bo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ud=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Xf(t,r,o):e==="style"?td(t,n,r):zr(e)?ni(e)||sd(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fd(t,e,r,o))?(_o(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&mo(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!le(r))?_o(t,Ue(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),mo(t,e,r,o))};function fd(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&bo(e)&&j(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return bo(e)&&le(n)?!1:e in t}const Lt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return x(e)?n=>br(e,n):e};function dd(t){t.target.composing=!0}function Eo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xe=Symbol("_assign"),Io={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[xe]=Lt(s);const i=r||s.props&&s.props.type==="number";ct(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=kr(a)),t[xe](a)}),n&&ct(t,"change",()=>{t.value=t.value.trim()}),e||(ct(t,"compositionstart",dd),ct(t,"compositionend",Eo),ct(t,"change",Eo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[xe]=Lt(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?kr(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},hd={deep:!0,created(t,e,n){t[xe]=Lt(n),ct(t,"change",()=>{const r=t._modelValue,s=yn(t),i=t.checked,o=t[xe];if(x(r)){const a=ai(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Sn(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Mc(t,i))})},mounted:wo,beforeUpdate(t,e,n){t[xe]=Lt(n),wo(t,e,n)}};function wo(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(x(e))s=ai(e,r.props.value)>-1;else if(Sn(e))s=e.has(r.props.value);else{if(e===n)return;s=Qt(e,Mc(t,!0))}t.checked!==s&&(t.checked=s)}const pd={created(t,{value:e},n){t.checked=Qt(e,n.props.value),t[xe]=Lt(n),ct(t,"change",()=>{t[xe](yn(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[xe]=Lt(r),e!==n&&(t.checked=Qt(e,r.props.value))}},gd={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Sn(e);ct(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?kr(yn(o)):yn(o));t[xe](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,gi(()=>{t._assigning=!1})}),t[xe]=Lt(r)},mounted(t,{value:e}){So(t,e)},beforeUpdate(t,e,n){t[xe]=Lt(n)},updated(t,{value:e}){t._assigning||So(t,e)}};function So(t,e){const n=t.multiple,r=x(e);if(!(n&&!r&&!Sn(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=yn(o);if(n)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(l=>String(l)===String(a)):o.selected=ai(e,a)>-1}else o.selected=e.has(a);else if(Qt(yn(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function yn(t){return"_value"in t?t._value:t.value}function Mc(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const K_={created(t,e,n){vr(t,e,n,null,"created")},mounted(t,e,n){vr(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){vr(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){vr(t,e,n,r,"updated")}};function md(t,e){switch(t){case"SELECT":return gd;case"TEXTAREA":return Io;default:switch(e){case"checkbox":return hd;case"radio":return pd;default:return Io}}}function vr(t,e,n,r,s){const o=md(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const _d=["ctrl","shift","alt","meta"],vd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>_d.some(n=>t[`${n}Key`]&&!e.includes(n))},z_=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=vd[e[o]];if(a&&a(s,e))return}return t(s,...i)})},yd=pe({patchProp:ud},jf);let To;function bd(){return To||(To=ff(yd))}const Ed=(...t)=>{const e=bd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=wd(r);if(!s)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Id(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Id(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function wd(t){return le(t)?document.querySelector(t):t}const Sd=()=>{};var Co={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Td=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Uc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[f],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Td(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new Cd;const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const I=l<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Cd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ad=function(t){const e=xc(t);return Uc.encodeByteArray(e,!0)},Fc=function(t){return Ad(t).replace(/\./g,"")},$c=function(t){try{return Uc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=()=>Rd().__FIREBASE_DEFAULTS__,Od=()=>{if(typeof process>"u"||typeof Co>"u")return;const t=Co.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$c(t[1]);return e&&JSON.parse(e)},Ei=()=>{try{return Sd()||Pd()||Od()||kd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Nd=t=>{var e,n;return(n=(e=Ei())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Hc=()=>{var t;return(t=Ei())===null||t===void 0?void 0:t.config},Bc=t=>{var e;return(e=Ei())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ld(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Md(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ud(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fd(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $d(){try{return typeof indexedDB=="object"}catch{return!1}}function Hd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="FirebaseError";class Ut extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Bd,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,or.prototype.create)}}class or{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Vd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ut(s,a,r)}}function Vd(t,e){return t.replace(jd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const jd=/\{\$([^}]+)}/g;function Wd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ao(i)&&Ao(o)){if(!bn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ao(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Nn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Dn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Kd(t,e){const n=new zd(t,e);return n.subscribe.bind(n)}class zd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ys),s.error===void 0&&(s.error=ys),s.complete===void 0&&(s.complete=ys);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ys(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t){return t&&t._delegate?t._delegate:t}class En{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Dd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yd(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jd(t){return t===qt?void 0:t}function Yd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Qd={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Zd=re.INFO,eh={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},th=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=eh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vc{constructor(e){this.name=e,this._logLevel=Zd,this._logHandler=th,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const nh=(t,e)=>e.some(n=>t instanceof n);let Ro,Po;function rh(){return Ro||(Ro=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sh(){return Po||(Po=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jc=new WeakMap,Vs=new WeakMap,Wc=new WeakMap,bs=new WeakMap,Ii=new WeakMap;function ih(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(kt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jc.set(n,t)}).catch(()=>{}),Ii.set(e,t),e}function oh(t){if(Vs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Vs.set(t,e)}let js={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ah(t){js=t(js)}function ch(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Es(this),e,...n);return Wc.set(r,e.sort?e.sort():[e]),kt(r)}:sh().includes(t)?function(...e){return t.apply(Es(this),e),kt(jc.get(this))}:function(...e){return kt(t.apply(Es(this),e))}}function lh(t){return typeof t=="function"?ch(t):(t instanceof IDBTransaction&&oh(t),nh(t,rh())?new Proxy(t,js):t)}function kt(t){if(t instanceof IDBRequest)return ih(t);if(bs.has(t))return bs.get(t);const e=lh(t);return e!==t&&(bs.set(t,e),Ii.set(e,t)),e}const Es=t=>Ii.get(t);function uh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=kt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(kt(o.result),c.oldVersion,c.newVersion,kt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const fh=["get","getKey","getAll","getAllKeys","count"],dh=["put","add","delete","clear"],Is=new Map;function Oo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Is.get(e))return Is.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=dh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Is.set(e,i),i}ah(t=>({...t,get:(e,n,r)=>Oo(e,n)||t.get(e,n,r),has:(e,n)=>!!Oo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ph(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ph(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ws="@firebase/app",ko="0.11.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=new Vc("@firebase/app"),gh="@firebase/app-compat",mh="@firebase/analytics-compat",_h="@firebase/analytics",vh="@firebase/app-check-compat",yh="@firebase/app-check",bh="@firebase/auth",Eh="@firebase/auth-compat",Ih="@firebase/database",wh="@firebase/data-connect",Sh="@firebase/database-compat",Th="@firebase/functions",Ch="@firebase/functions-compat",Ah="@firebase/installations",Rh="@firebase/installations-compat",Ph="@firebase/messaging",Oh="@firebase/messaging-compat",kh="@firebase/performance",Nh="@firebase/performance-compat",Dh="@firebase/remote-config",Lh="@firebase/remote-config-compat",Mh="@firebase/storage",xh="@firebase/storage-compat",Uh="@firebase/firestore",Fh="@firebase/vertexai",$h="@firebase/firestore-compat",Hh="firebase",Bh="11.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="[DEFAULT]",Vh={[Ws]:"fire-core",[gh]:"fire-core-compat",[_h]:"fire-analytics",[mh]:"fire-analytics-compat",[yh]:"fire-app-check",[vh]:"fire-app-check-compat",[bh]:"fire-auth",[Eh]:"fire-auth-compat",[Ih]:"fire-rtdb",[wh]:"fire-data-connect",[Sh]:"fire-rtdb-compat",[Th]:"fire-fn",[Ch]:"fire-fn-compat",[Ah]:"fire-iid",[Rh]:"fire-iid-compat",[Ph]:"fire-fcm",[Oh]:"fire-fcm-compat",[kh]:"fire-perf",[Nh]:"fire-perf-compat",[Dh]:"fire-rc",[Lh]:"fire-rc-compat",[Mh]:"fire-gcs",[xh]:"fire-gcs-compat",[Uh]:"fire-fst",[$h]:"fire-fst-compat",[Fh]:"fire-vertex","fire-js":"fire-js",[Hh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Map,jh=new Map,zs=new Map;function No(t,e){try{t.container.addComponent(e)}catch(n){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xn(t){const e=t.name;if(zs.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;zs.set(e,t);for(const n of Hr.values())No(n,t);for(const n of jh.values())No(n,t);return!0}function Kc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Le(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new or("app","Firebase",Wh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=Bh;function zc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ks,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Nt.create("bad-app-name",{appName:String(s)});if(n||(n=Hc()),!n)throw Nt.create("no-options");const i=Hr.get(s);if(i){if(bn(n,i.options)&&bn(r,i.config))return i;throw Nt.create("duplicate-app",{appName:s})}const o=new Xd(s);for(const c of zs.values())o.addComponent(c);const a=new Kh(n,r,o);return Hr.set(s,a),a}function zh(t=Ks){const e=Hr.get(t);if(!e&&t===Ks&&Hc())return zc();if(!e)throw Nt.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let s=(r=Vh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(a.join(" "));return}Xn(new En(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="firebase-heartbeat-database",Gh=1,Qn="firebase-heartbeat-store";let ws=null;function qc(){return ws||(ws=uh(qh,Gh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nt.create("idb-open",{originalErrorMessage:t.message})})),ws}async function Jh(t){try{const n=(await qc()).transaction(Qn),r=await n.objectStore(Qn).get(Gc(t));return await n.done,r}catch(e){if(e instanceof Ut)gt.warn(e.message);else{const n=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gt.warn(n.message)}}}async function Do(t,e){try{const r=(await qc()).transaction(Qn,"readwrite");await r.objectStore(Qn).put(e,Gc(t)),await r.done}catch(n){if(n instanceof Ut)gt.warn(n.message);else{const r=Nt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gt.warn(r.message)}}}function Gc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=1024,Xh=30;class Qh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ep(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lo();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Xh){const o=tp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){gt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lo(),{heartbeatsToSend:r,unsentEntries:s}=Zh(this._heartbeatsCache.heartbeats),i=Fc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return gt.warn(n),""}}}function Lo(){return new Date().toISOString().substring(0,10)}function Zh(t,e=Yh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Mo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Mo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ep{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $d()?Hd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Jh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Do(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Do(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Mo(t){return Fc(JSON.stringify({version:2,heartbeats:t})).length}function tp(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t){Xn(new En("platform-logger",e=>new hh(e),"PRIVATE")),Xn(new En("heartbeat",e=>new Qh(e),"PRIVATE")),gn(Ws,ko,t),gn(Ws,ko,"esm2017"),gn("fire-js","")}np("");var rp="firebase",sp="11.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn(rp,sp,"app");function wi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Jc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ip=Jc,Yc=new or("auth","Firebase",Jc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Vc("@firebase/auth");function op(t,...e){Br.logLevel<=re.WARN&&Br.warn(`Auth (${cr}): ${t}`,...e)}function Ar(t,...e){Br.logLevel<=re.ERROR&&Br.error(`Auth (${cr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t,...e){throw Ti(t,...e)}function Be(t,...e){return Ti(t,...e)}function Si(t,e,n){const r=Object.assign(Object.assign({},ip()),{[e]:n});return new or("auth","Firebase",r).create(e,{appName:t.name})}function pt(t){return Si(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ap(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Fe(t,"argument-error"),Si(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ti(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Yc.create(t,...e)}function $(t,e,...n){if(!t)throw Ti(e,...n)}function ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ar(e),new Error(e)}function mt(t,e){t||ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cp(){return xo()==="http:"||xo()==="https:"}function xo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cp()||xd()||"connection"in navigator)?navigator.onLine:!0}function up(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){this.shortDelay=e,this.longDelay=n,mt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ld()||Ud()}get(){return lp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t,e){mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=new lr(3e4,6e4);function $t(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ht(t,e,n,r,s={}){return Qc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ar(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return Md()||(l.referrerPolicy="no-referrer"),Xc.fetch()(Zc(t,t.config.apiHost,n,a),l)})}async function Qc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fp),e);try{const s=new pp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw yr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw yr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw yr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw yr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Si(t,u,l);Fe(t,u)}}catch(s){if(s instanceof Ut)throw s;Fe(t,"network-request-failed",{message:String(s)})}}async function ur(t,e,n,r,s={}){const i=await Ht(t,e,n,r,s);return"mfaPendingCredential"in i&&Fe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Zc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ci(t.config,s):`${t.config.apiScheme}://${s}`}function hp(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"network-request-failed")),dp.get())})}}function yr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Be(t,e,r);return s.customData._tokenResponse=n,s}function Uo(t){return t!==void 0&&t.enterprise!==void 0}class gp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return hp(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function mp(t,e){return Ht(t,"GET","/v2/recaptchaConfig",$t(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(t,e){return Ht(t,"POST","/v1/accounts:delete",e)}async function el(t,e){return Ht(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vp(t,e=!1){const n=Ft(t),r=await n.getIdToken(e),s=Ai(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Hn(Ss(s.auth_time)),issuedAtTime:Hn(Ss(s.iat)),expirationTime:Hn(Ss(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ss(t){return Number(t)*1e3}function Ai(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ar("JWT malformed, contained fewer than 3 sections"),null;try{const s=$c(n);return s?JSON.parse(s):(Ar("Failed to decode base64 JWT payload"),null)}catch(s){return Ar("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Fo(t){const e=Ai(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ut&&yp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hn(this.lastLoginAt),this.creationTime=Hn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Zn(t,el(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?tl(i.providerUserInfo):[],a=Ip(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Gs(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Ep(t){const e=Ft(t);await Vr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ip(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function tl(t){return t.map(e=>{var{providerId:n}=e,r=wi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(t,e){const n=await Qc(t,{},async()=>{const r=ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Zc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Sp(t,e){return Ht(t,"POST","/v2/accounts:revokeToken",$t(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=Fo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await wp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new mn;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mn,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ft{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=wi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Gs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zn(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vp(this,e)}reload(){return Ep(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(pt(this.auth));const e=await this.getIdToken();return await Zn(this,_p(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,H=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,L=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:O,isAnonymous:W,providerData:q,stsTokenManager:G}=n;$(D&&G,e,"internal-error");const de=mn.fromJSON(this.name,G);$(typeof D=="string",e,"internal-error"),bt(f,e.name),bt(p,e.name),$(typeof O=="boolean",e,"internal-error"),$(typeof W=="boolean",e,"internal-error"),bt(m,e.name),bt(I,e.name),bt(A,e.name),bt(H,e.name),bt(L,e.name),bt(k,e.name);const B=new ft({uid:D,auth:e,email:p,emailVerified:O,displayName:f,isAnonymous:W,photoURL:I,phoneNumber:m,tenantId:A,stsTokenManager:de,createdAt:L,lastLoginAt:k});return q&&Array.isArray(q)&&(B.providerData=q.map(z=>Object.assign({},z))),H&&(B._redirectEventId=H),B}static async _fromIdTokenResponse(e,n,r=!1){const s=new mn;s.updateFromServerResponse(n);const i=new ft({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Vr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];$(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?tl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new mn;a.updateFromIdToken(r);const c=new ft({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Gs(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=new Map;function dt(t){mt(t instanceof Function,"Expected a class definition");let e=$o.get(t);return e?(mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$o.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nl.type="NONE";const Ho=nl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t,e,n){return`firebase:${t}:${e}:${n}`}class _n{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Rr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Rr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _n(dt(Ho),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||dt(Ho);const o=Rr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=ft._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new _n(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new _n(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ol(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cl(e))return"Blackberry";if(ll(e))return"Webos";if(sl(e))return"Safari";if((e.includes("chrome/")||il(e))&&!e.includes("edge/"))return"Chrome";if(al(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rl(t=Ee()){return/firefox\//i.test(t)}function sl(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function il(t=Ee()){return/crios\//i.test(t)}function ol(t=Ee()){return/iemobile/i.test(t)}function al(t=Ee()){return/android/i.test(t)}function cl(t=Ee()){return/blackberry/i.test(t)}function ll(t=Ee()){return/webos/i.test(t)}function Ri(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Tp(t=Ee()){var e;return Ri(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Cp(){return Fd()&&document.documentMode===10}function ul(t=Ee()){return Ri(t)||al(t)||ll(t)||cl(t)||/windows phone/i.test(t)||ol(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t,e=[]){let n;switch(t){case"Browser":n=Bo(Ee());break;case"Worker":n=`${Bo(Ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(t,e={}){return Ht(t,"GET","/v2/passwordPolicy",$t(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=6;class Op{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Pp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vo(this),this.idTokenSubscription=new Vo(this),this.beforeStateQueue=new Ap(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await _n.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await el(this,{idToken:e}),r=await ft._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Le(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=up()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Le(this.app))return Promise.reject(pt(this));const n=e?Ft(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(pt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Le(this.app)?Promise.reject(pt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Rp(this),n=new Op(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new or("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Sp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&op(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Bt(t){return Ft(t)}class Vo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kd(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Np(t){ss=t}function dl(t){return ss.loadJS(t)}function Dp(){return ss.recaptchaEnterpriseScript}function Lp(){return ss.gapiScript}function Mp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class xp{constructor(){this.enterprise=new Up}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Up{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Fp="recaptcha-enterprise",hl="NO_RECAPTCHA";class $p{constructor(e){this.type=Fp,this.auth=Bt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{mp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new gp(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Uo(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(hl)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new xp().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Uo(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Dp();c.length!==0&&(c+=a),dl(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function jo(t,e,n,r=!1,s=!1){const i=new $p(t);let o;if(s)o=hl;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Js(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await jo(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await jo(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t,e){const n=Kc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(bn(i,e??{}))return s;Fe(s,"already-initialized")}return n.initialize({options:e})}function Bp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Vp(t,e,n){const r=Bt(t);$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=pl(e),{host:o,port:a}=jp(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(bn(l,r.config.emulator)&&bn(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,Wp()}function pl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jp(t){const e=pl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Wo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Wo(o)}}}function Wo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Wp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,n){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}async function Kp(t,e){return Ht(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zp(t,e){return ur(t,"POST","/v1/accounts:signInWithPassword",$t(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qp(t,e){return ur(t,"POST","/v1/accounts:signInWithEmailLink",$t(t,e))}async function Gp(t,e){return ur(t,"POST","/v1/accounts:signInWithEmailLink",$t(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Pi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new er(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new er(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Js(e,n,"signInWithPassword",zp);case"emailLink":return qp(e,{email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Js(e,r,"signUpPassword",Kp);case"emailLink":return Gp(e,{idToken:n,email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(t,e){return ur(t,"POST","/v1/accounts:signInWithIdp",$t(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp="http://localhost";class en extends Pi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new en(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Fe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=wi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new en(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vn(e,n)}buildRequest(){const e={requestUri:Jp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ar(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xp(t){const e=Nn(Dn(t)).link,n=e?Nn(Dn(e)).deep_link_id:null,r=Nn(Dn(t)).deep_link_id;return(r?Nn(Dn(r)).link:null)||r||n||e||t}class Oi{constructor(e){var n,r,s,i,o,a;const c=Nn(Dn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Yp((s=c.mode)!==null&&s!==void 0?s:null);$(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Xp(e);try{return new Oi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.providerId=Tn.PROVIDER_ID}static credential(e,n){return er._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Oi.parseLink(n);return $(r,"argument-error"),er._fromEmailAndCode(e,r.code,r.tenantId)}}Tn.PROVIDER_ID="password";Tn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Tn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends ki{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends fr{constructor(){super("facebook.com")}static credential(e){return en._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com";At.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return en._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends fr{constructor(){super("github.com")}static credential(e){return en._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends fr{constructor(){super("twitter.com")}static credential(e,n){return en._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qp(t,e){return ur(t,"POST","/v1/accounts:signUp",$t(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ft._fromIdTokenResponse(e,r,s),o=Ko(r);return new tn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ko(r);return new tn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ko(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Ut{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,jr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new jr(e,n,r,s)}}function gl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?jr._fromErrorAndOperation(t,i,e,r):i})}async function Zp(t,e,n=!1){const r=await Zn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eg(t,e,n=!1){const{auth:r}=t;if(Le(r.app))return Promise.reject(pt(r));const s="reauthenticate";try{const i=await Zn(t,gl(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=Ai(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),tn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Fe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(t,e,n=!1){if(Le(t.app))return Promise.reject(pt(t));const r="signIn",s=await gl(t,r,e),i=await tn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function tg(t,e){return ml(Bt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(t){const e=Bt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function q_(t,e,n){if(Le(t.app))return Promise.reject(pt(t));const r=Bt(t),o=await Js(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Qp).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&_l(t),c}),a=await tn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function G_(t,e,n){return Le(t.app)?Promise.reject(pt(t)):tg(Ft(t),Tn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_l(t),r})}function ng(t,e,n,r){return Ft(t).onIdTokenChanged(e,n,r)}function rg(t,e,n){return Ft(t).beforeAuthStateChanged(e,n)}function sg(t,e,n,r){return Ft(t).onAuthStateChanged(e,n,r)}const Wr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wr,"1"),this.storage.removeItem(Wr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=1e3,og=10;class yl extends vl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ul(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Cp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,og):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ig)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yl.type="LOCAL";const ag=yl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends vl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bl.type="SESSION";const El=bl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new is(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await cg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}is.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ni("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return window}function ug(t){Ze().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function fg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hg(){return Il()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="firebaseLocalStorageDb",pg=1,Kr="firebaseLocalStorage",Sl="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function os(t,e){return t.transaction([Kr],e?"readwrite":"readonly").objectStore(Kr)}function gg(){const t=indexedDB.deleteDatabase(wl);return new dr(t).toPromise()}function Ys(){const t=indexedDB.open(wl,pg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kr,{keyPath:Sl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kr)?e(r):(r.close(),await gg(),e(await Ys()))})})}async function zo(t,e,n){const r=os(t,!0).put({[Sl]:e,value:n});return new dr(r).toPromise()}async function mg(t,e){const n=os(t,!1).get(e),r=await new dr(n).toPromise();return r===void 0?null:r.value}function qo(t,e){const n=os(t,!0).delete(e);return new dr(n).toPromise()}const _g=800,vg=3;class Tl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ys(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Il()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=is._getInstance(hg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fg(),!this.activeServiceWorker)return;this.sender=new lg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ys();return await zo(e,Wr,"1"),await qo(e,Wr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=os(s,!1).getAll();return new dr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_g)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tl.type="LOCAL";const yg=Tl;new lr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t,e){return e?dt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends Pi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bg(t){return ml(t.auth,new Di(t),t.bypassAuthState)}function Eg(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),eg(n,new Di(t),t.bypassAuthState)}async function Ig(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Zp(n,new Di(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bg;case"linkViaPopup":case"linkViaRedirect":return Ig;case"reauthViaPopup":case"reauthViaRedirect":return Eg;default:Fe(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=new lr(2e3,1e4);async function J_(t,e,n){if(Le(t.app))return Promise.reject(Be(t,"operation-not-supported-in-this-environment"));const r=Bt(t);ap(t,e,ki);const s=Cl(r,n);return new Jt(r,"signInViaPopup",e,s).executeNotNull()}class Jt extends Al{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=Ni();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wg.get())};e()}}Jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="pendingRedirect",Pr=new Map;class Tg extends Al{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Pr.get(this.auth._key());if(!e){try{const r=await Cg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Pr.set(this.auth._key(),e)}return this.bypassAuthState||Pr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cg(t,e){const n=Pg(e),r=Rg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Ag(t,e){Pr.set(t._key(),e)}function Rg(t){return dt(t._redirectPersistence)}function Pg(t){return Rr(Sg,t.config.apiKey,t.name)}async function Og(t,e,n=!1){if(Le(t.app))return Promise.reject(pt(t));const r=Bt(t),s=Cl(r,e),o=await new Tg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=10*60*1e3;class Ng{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Rl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Be(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Go(e))}saveEventToCache(e){this.cachedEventUids.add(Go(e)),this.lastProcessedEventTime=Date.now()}}function Go(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lg(t,e={}){return Ht(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xg=/^https?/;async function Ug(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Lg(t);for(const n of e)try{if(Fg(n))return}catch{}Fe(t,"unauthorized-domain")}function Fg(t){const e=qs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xg.test(n))return!1;if(Mg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=new lr(3e4,6e4);function Jo(){const t=Ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Hg(t){return new Promise((e,n)=>{var r,s,i;function o(){Jo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jo(),n(Be(t,"network-request-failed"))},timeout:$g.get()})}if(!((s=(r=Ze().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ze().gapi)===null||i===void 0)&&i.load)o();else{const a=Mp("iframefcb");return Ze()[a]=()=>{gapi.load?o():n(Be(t,"network-request-failed"))},dl(`${Lp()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Or=null,e})}let Or=null;function Bg(t){return Or=Or||Hg(t),Or}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=new lr(5e3,15e3),jg="__/auth/iframe",Wg="emulator/auth/iframe",Kg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qg(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ci(e,Wg):`https://${t.config.authDomain}/${jg}`,r={apiKey:e.apiKey,appName:t.name,v:cr},s=zg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ar(r).slice(1)}`}async function Gg(t){const e=await Bg(t),n=Ze().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:qg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Be(t,"network-request-failed"),a=Ze().setTimeout(()=>{i(o)},Vg.get());function c(){Ze().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yg=500,Xg=600,Qg="_blank",Zg="http://localhost";class Yo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function em(t,e,n,r=Yg,s=Xg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Jg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ee().toLowerCase();n&&(a=il(l)?Qg:n),rl(l)&&(e=e||Zg,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,I])=>`${p}${m}=${I},`,"");if(Tp(l)&&a!=="_self")return tm(e||"",a),new Yo(null);const f=window.open(e||"",a,u);$(f,t,"popup-blocked");try{f.focus()}catch{}return new Yo(f)}function tm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="__/auth/handler",rm="emulator/auth/handler",sm=encodeURIComponent("fac");async function Xo(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cr,eventId:s};if(e instanceof ki){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof fr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${sm}=${encodeURIComponent(c)}`:"";return`${im(t)}?${ar(a).slice(1)}${l}`}function im({config:t}){return t.emulator?Ci(t,rm):`https://${t.authDomain}/${nm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="webStorageSupport";class om{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=El,this._completeRedirectFn=Og,this._overrideRedirectResult=Ag}async _openPopup(e,n,r,s){var i;mt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Xo(e,n,r,qs(),s);return em(e,o,Ni())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Xo(e,n,r,qs(),s);return ug(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Gg(e),r=new Ng(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ts,{type:Ts},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ts];o!==void 0&&n(!!o),Fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ug(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ul()||sl()||Ri()}}const am=om;var Qo="@firebase/auth",Zo="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function um(t){Xn(new En("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fl(t)},l=new kp(r,s,i,c);return Bp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xn(new En("auth-internal",e=>{const n=Bt(e.getProvider("auth").getImmediate());return(r=>new cm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(Qo,Zo,lm(t)),gn(Qo,Zo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=5*60,dm=Bc("authIdTokenMaxAge")||fm;let ea=null;const hm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dm)return;const s=n==null?void 0:n.token;ea!==s&&(ea=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pm(t=zh()){const e=Kc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Hp(t,{popupRedirectResolver:am,persistence:[yg,ag,El]}),r=Bc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=hm(i.toString());rg(n,o,()=>o(n.currentUser)),ng(n,a=>o(a))}}const s=Nd("auth");return s&&Vp(n,`http://${s}`),n}function gm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Np({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Be("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",gm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});um("Browser");const mm={apiKey:"AIzaSyDJlhGnVXf0AluCLE4k2TAONZMHaeOHrjw",authDomain:"trip-8dd24.firebaseapp.com",projectId:"trip-8dd24",storageBucket:"trip-8dd24.firebasestorage.app",messagingSenderId:"1073086034344",appId:"1:1073086034344:web:3e95b33869e7722346ed9d"},_m=zc(mm),Xs=pm(_m),vm=new lt;vm.setCustomParameters({prompt:"select_account"});const Li=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},ym={props:{user:{type:Object,default:null}},methods:{logout(){this.$emit("logout")}}},bm={class:"app-header"},Em={class:"container"},Im={class:"nav"},wm={key:0,class:"user-info"},Sm={class:"user-email"};function Tm(t,e,n,r,s,i){const o=Er("router-link");return Xt(),Ur("header",bm,[Ct("div",Em,[fe(o,{to:"/home",class:"logo"},{default:zn(()=>e[1]||(e[1]=[Ct("span",null,"🌍",-1),$s(" TravelPlanner ")])),_:1}),Ct("nav",Im,[n.user?(Xt(),Ur("div",wm,[Ct("span",Sm,Ta(n.user.email),1),Ct("button",{onClick:e[0]||(e[0]=(...a)=>i.logout&&i.logout(...a)),class:"logout-button"},"Logout")])):(Xt(),vi(o,{key:1,to:"/",class:"auth-button"},{default:zn(()=>e[2]||(e[2]=[$s(" Login ")])),_:1}))])])])}const Cm=Li(ym,[["render",Tm],["__scopeId","data-v-b5f32070"]]),Am={},Rm={class:"travelplanner-footer"};function Pm(t,e){return Xt(),Ur("footer",Rm,e[0]||(e[0]=[Rf('<div class="footer-container" data-v-4481b664><div class="footer-header" data-v-4481b664><h2 class="footer-title" data-v-4481b664><span class="logo-icon" data-v-4481b664>✈️</span> TravelPlanner </h2><p class="footer-subtitle" data-v-4481b664>Plan your perfect trip with ease</p></div><div class="footer-divider" data-v-4481b664></div><div class="footer-section" data-v-4481b664><h3 class="section-title" data-v-4481b664>Quick Links</h3><ul class="links-list" data-v-4481b664><li data-v-4481b664><span class="link-icon" data-v-4481b664>🏠</span> Home</li><li data-v-4481b664><span class="link-icon" data-v-4481b664>ℹ️</span> About</li><li data-v-4481b664><span class="link-icon" data-v-4481b664>✉️</span> Contact</li></ul></div><div class="footer-divider" data-v-4481b664></div><div class="footer-section" data-v-4481b664><h3 class="section-title" data-v-4481b664>Connect</h3><div class="social-icons" data-v-4481b664><span class="social-icon" data-v-4481b664>👍</span><span class="social-icon" data-v-4481b664>👍</span><span class="social-icon" data-v-4481b664>💤</span></div></div><div class="footer-copyright" data-v-4481b664> © 2023 TravelPlanner. All rights reserved. </div></div>',1)]))}const Om=Li(Am,[["render",Pm],["__scopeId","data-v-4481b664"]]),km={components:{Header:Cm,Footer:Om},data(){return{user:null}},created(){sg(Xs,t=>{this.user=t,!t&&this.$route.meta.requiresAuth&&this.$router.push("/")})},methods:{handleLogout(){Xs.signOut().then(()=>{this.$router.push("/")})}}},Nm={class:"travel-planner-app"},Dm={class:"main-content"};function Lm(t,e,n,r,s,i){const o=Er("Header"),a=Er("router-view"),c=Er("Footer");return Xt(),Ur("div",Nm,[fe(o,{user:s.user,onLogout:i.handleLogout},null,8,["user","onLogout"]),Ct("main",Dm,[fe(a,null,{default:zn(({Component:l})=>[fe(zf,{name:"fade",mode:"out-in"},{default:zn(()=>[(Xt(),vi(Ju(l)))]),_:2},1024)]),_:1})]),fe(c)])}const Mm=Li(km,[["render",Lm]]),xm="modulepreload",Um=function(t){return"/"+t},ta={},Pn=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=Um(c),c in ta)return;ta[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":xm,l||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),l)return new Promise((p,m)=>{f.addEventListener("load",p),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const cn=typeof document<"u";function Pl(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Fm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Pl(t.default)}const Q=Object.assign;function Cs(t,e){const n={};for(const r in e){const s=e[r];n[r]=je(s)?s.map(t):t(s)}return n}const Bn=()=>{},je=Array.isArray,Ol=/#/g,$m=/&/g,Hm=/\//g,Bm=/=/g,Vm=/\?/g,kl=/\+/g,jm=/%5B/g,Wm=/%5D/g,Nl=/%5E/g,Km=/%60/g,Dl=/%7B/g,zm=/%7C/g,Ll=/%7D/g,qm=/%20/g;function Mi(t){return encodeURI(""+t).replace(zm,"|").replace(jm,"[").replace(Wm,"]")}function Gm(t){return Mi(t).replace(Dl,"{").replace(Ll,"}").replace(Nl,"^")}function Qs(t){return Mi(t).replace(kl,"%2B").replace(qm,"+").replace(Ol,"%23").replace($m,"%26").replace(Km,"`").replace(Dl,"{").replace(Ll,"}").replace(Nl,"^")}function Jm(t){return Qs(t).replace(Bm,"%3D")}function Ym(t){return Mi(t).replace(Ol,"%23").replace(Vm,"%3F")}function Xm(t){return t==null?"":Ym(t).replace(Hm,"%2F")}function tr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Qm=/\/$/,Zm=t=>t.replace(Qm,"");function As(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=r_(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:tr(o)}}function e_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function na(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function t_(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&In(e.matched[r],n.matched[s])&&Ml(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function In(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ml(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!n_(t[n],e[n]))return!1;return!0}function n_(t,e){return je(t)?ra(t,e):je(e)?ra(e,t):t===e}function ra(t,e){return je(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function r_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var nr;(function(t){t.pop="pop",t.push="push"})(nr||(nr={}));var Vn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Vn||(Vn={}));function s_(t){if(!t)if(cn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Zm(t)}const i_=/^[^#]+#/;function o_(t,e){return t.replace(i_,"#")+e}function a_(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const as=()=>({left:window.scrollX,top:window.scrollY});function c_(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=a_(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function sa(t,e){return(history.state?history.state.position-e:-1)+t}const Zs=new Map;function l_(t,e){Zs.set(t,e)}function u_(t){const e=Zs.get(t);return Zs.delete(t),e}let f_=()=>location.protocol+"//"+location.host;function xl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),na(c,"")}return na(n,t)+r+s}function d_(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=xl(t,location),I=n.value,A=e.value;let H=0;if(p){if(n.value=m,e.value=p,o&&o===I){o=null;return}H=A?p.position-A.position:0}else r(m);s.forEach(L=>{L(n.value,I,{delta:H,type:nr.pop,direction:H?H>0?Vn.forward:Vn.back:Vn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const I=s.indexOf(p);I>-1&&s.splice(I,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(Q({},p.state,{scroll:as()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function ia(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?as():null}}function h_(t){const{history:e,location:n}=window,r={value:xl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:f_()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=Q({},e.state,ia(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Q({},s.value,e.state,{forward:c,scroll:as()});i(u.current,u,!0);const f=Q({},ia(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function p_(t){t=s_(t);const e=h_(t),n=d_(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:o_.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function g_(t){return typeof t=="string"||t&&typeof t=="object"}function Ul(t){return typeof t=="string"||typeof t=="symbol"}const Fl=Symbol("");var oa;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(oa||(oa={}));function wn(t,e){return Q(new Error,{type:t,[Fl]:!0},e)}function st(t,e){return t instanceof Error&&Fl in t&&(e==null||!!(t.type&e))}const aa="[^/]+?",m_={sensitive:!1,strict:!1,start:!0,end:!0},__=/[.+*?^${}()[\]/\\]/g;function v_(t,e){const n=Q({},m_,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let m=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(__,"\\$&"),m+=40;else if(p.type===1){const{value:I,repeatable:A,optional:H,regexp:L}=p;i.push({name:I,repeatable:A,optional:H});const k=L||aa;if(k!==aa){m+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${I}" (${k}): `+O.message)}}let D=A?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(D=H&&l.length<2?`(?:/${D})`:"/"+D),H&&(D+="?"),s+=D,m+=20,H&&(m+=-8),A&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",I=i[p-1];f[I.name]=m&&I.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:I,repeatable:A,optional:H}=m,L=I in l?l[I]:"";if(je(L)&&!A)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const k=je(L)?L.join("/"):L;if(!k)if(H)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${I}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function y_(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $l(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=y_(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ca(r))return 1;if(ca(s))return-1}return s.length-r.length}function ca(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const b_={type:0,value:""},E_=/[a-zA-Z0-9_]/;function I_(t){if(!t)return[[]];if(t==="/")return[[b_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:E_.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function w_(t,e,n){const r=v_(I_(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function S_(t,e){const n=[],r=new Map;e=da({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,m){const I=!m,A=ua(f);A.aliasOf=m&&m.record;const H=da(e,f),L=[A];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const W of O)L.push(ua(Q({},A,{components:m?m.record.components:A.components,path:W,aliasOf:m?m.record:A})))}let k,D;for(const O of L){const{path:W}=O;if(p&&W[0]!=="/"){const q=p.record.path,G=q[q.length-1]==="/"?"":"/";O.path=p.record.path+(W&&G+W)}if(k=w_(O,p,H),m?m.alias.push(k):(D=D||k,D!==k&&D.alias.push(k),I&&f.name&&!fa(k)&&o(f.name)),Hl(k)&&c(k),A.children){const q=A.children;for(let G=0;G<q.length;G++)i(q[G],k,m&&m.children[G])}m=m||k}return D?()=>{o(D)}:Bn}function o(f){if(Ul(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const p=A_(f,n);n.splice(p,0,f),f.record.name&&!fa(f)&&r.set(f.record.name,f)}function l(f,p){let m,I={},A,H;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw wn(1,{location:f});H=m.record.name,I=Q(la(p.params,m.keys.filter(D=>!D.optional).concat(m.parent?m.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),f.params&&la(f.params,m.keys.map(D=>D.name))),A=m.stringify(I)}else if(f.path!=null)A=f.path,m=n.find(D=>D.re.test(A)),m&&(I=m.parse(A),H=m.record.name);else{if(m=p.name?r.get(p.name):n.find(D=>D.re.test(p.path)),!m)throw wn(1,{location:f,currentLocation:p});H=m.record.name,I=Q({},p.params,f.params),A=m.stringify(I)}const L=[];let k=m;for(;k;)L.unshift(k.record),k=k.parent;return{name:H,path:A,params:I,matched:L,meta:C_(L)}}t.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function la(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ua(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:T_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function T_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function fa(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function C_(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function da(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function A_(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;$l(t,e[i])<0?r=i:n=i+1}const s=R_(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function R_(t){let e=t;for(;e=e.parent;)if(Hl(e)&&$l(t,e)===0)return e}function Hl({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function P_(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(kl," "),o=i.indexOf("="),a=tr(o<0?i:i.slice(0,o)),c=o<0?null:tr(i.slice(o+1));if(a in e){let l=e[a];je(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ha(t){let e="";for(let n in t){const r=t[n];if(n=Jm(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(je(r)?r.map(i=>i&&Qs(i)):[r&&Qs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function O_(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=je(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const k_=Symbol(""),pa=Symbol(""),xi=Symbol(""),Bl=Symbol(""),ei=Symbol("");function On(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Tt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(wn(4,{from:n,to:e})):p instanceof Error?c(p):g_(p)?c(wn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(p=>c(p))})}function Rs(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Pl(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Tt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Fm(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&Tt(m,n,r,o,a,s)()}))}}return i}function ga(t){const e=ht(xi),n=ht(Bl),r=$e(()=>{const c=dn(t.to);return e.resolve(c)}),s=$e(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(In.bind(null,u));if(p>-1)return p;const m=ma(c[l-2]);return l>1&&ma(u)===m&&f[f.length-1].path!==m?f.findIndex(In.bind(null,c[l-2])):p}),i=$e(()=>s.value>-1&&x_(n.params,r.value.params)),o=$e(()=>s.value>-1&&s.value===n.matched.length-1&&Ml(n.params,r.value.params));function a(c={}){if(M_(c)){const l=e[dn(t.replace)?"replace":"push"](dn(t.to)).catch(Bn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:$e(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function N_(t){return t.length===1?t[0]:t}const D_=nc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ga,setup(t,{slots:e}){const n=Xr(ga(t)),{options:r}=ht(xi),s=$e(()=>({[_a(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_a(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&N_(e.default(n));return t.custom?i:bi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),L_=D_;function M_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function x_(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!je(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ma(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _a=(t,e,n)=>t??e??n,U_=nc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ht(ei),s=$e(()=>t.route||r.value),i=ht(pa,0),o=$e(()=>{let l=dn(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=$e(()=>s.value.matched[o.value]);Ir(pa,$e(()=>o.value+1)),Ir(k_,a),Ir(ei,s);const c=Su();return wr(()=>[c.value,a.value,t.name],([l,u,f],[p,m,I])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!In(u,m)||!p)&&(u.enterCallbacks[f]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return va(n.default,{Component:p,route:l});const m=f.props[u],I=m?m===!0?l.params:typeof m=="function"?m(l):m:null,H=bi(p,Q({},I,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return va(n.default,{Component:H,route:l})||H}}});function va(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const F_=U_;function $_(t){const e=S_(t.routes,t),n=t.parseQuery||P_,r=t.stringifyQuery||ha,s=t.history,i=On(),o=On(),a=On(),c=Tu(Et);let l=Et;cn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Cs.bind(null,v=>""+v),f=Cs.bind(null,Xm),p=Cs.bind(null,tr);function m(v,P){let C,M;return Ul(v)?(C=e.getRecordMatcher(v),M=P):M=v,e.addRoute(M,C)}function I(v){const P=e.getRecordMatcher(v);P&&e.removeRoute(P)}function A(){return e.getRoutes().map(v=>v.record)}function H(v){return!!e.getRecordMatcher(v)}function L(v,P){if(P=Q({},P||c.value),typeof v=="string"){const g=As(n,v,P.path),_=e.resolve({path:g.path},P),b=s.createHref(g.fullPath);return Q(g,_,{params:p(_.params),hash:tr(g.hash),redirectedFrom:void 0,href:b})}let C;if(v.path!=null)C=Q({},v,{path:As(n,v.path,P.path).path});else{const g=Q({},v.params);for(const _ in g)g[_]==null&&delete g[_];C=Q({},v,{params:f(g)}),P.params=f(P.params)}const M=e.resolve(C,P),ne=v.hash||"";M.params=u(p(M.params));const d=e_(r,Q({},v,{hash:Gm(ne),path:M.path})),h=s.createHref(d);return Q({fullPath:d,hash:ne,query:r===ha?O_(v.query):v.query||{}},M,{redirectedFrom:void 0,href:h})}function k(v){return typeof v=="string"?As(n,v,c.value.path):Q({},v)}function D(v,P){if(l!==v)return wn(8,{from:P,to:v})}function O(v){return G(v)}function W(v){return O(Q(k(v),{replace:!0}))}function q(v){const P=v.matched[v.matched.length-1];if(P&&P.redirect){const{redirect:C}=P;let M=typeof C=="function"?C(v):C;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=k(M):{path:M},M.params={}),Q({query:v.query,hash:v.hash,params:M.path!=null?{}:v.params},M)}}function G(v,P){const C=l=L(v),M=c.value,ne=v.state,d=v.force,h=v.replace===!0,g=q(C);if(g)return G(Q(k(g),{state:typeof g=="object"?Q({},ne,g.state):ne,force:d,replace:h}),P||C);const _=C;_.redirectedFrom=P;let b;return!d&&t_(r,M,C)&&(b=wn(16,{to:_,from:M}),We(M,M,!0,!1)),(b?Promise.resolve(b):z(_,M)).catch(y=>st(y)?st(y,2)?y:vt(y):X(y,_,M)).then(y=>{if(y){if(st(y,2))return G(Q({replace:h},k(y.to),{state:typeof y.to=="object"?Q({},ne,y.to.state):ne,force:d}),P||_)}else y=N(_,M,!0,h,ne);return oe(_,M,y),y})}function de(v,P){const C=D(v,P);return C?Promise.reject(C):Promise.resolve()}function B(v){const P=sn.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(v):v()}function z(v,P){let C;const[M,ne,d]=H_(v,P);C=Rs(M.reverse(),"beforeRouteLeave",v,P);for(const g of M)g.leaveGuards.forEach(_=>{C.push(Tt(_,v,P))});const h=de.bind(null,v,P);return C.push(h),Ne(C).then(()=>{C=[];for(const g of i.list())C.push(Tt(g,v,P));return C.push(h),Ne(C)}).then(()=>{C=Rs(ne,"beforeRouteUpdate",v,P);for(const g of ne)g.updateGuards.forEach(_=>{C.push(Tt(_,v,P))});return C.push(h),Ne(C)}).then(()=>{C=[];for(const g of d)if(g.beforeEnter)if(je(g.beforeEnter))for(const _ of g.beforeEnter)C.push(Tt(_,v,P));else C.push(Tt(g.beforeEnter,v,P));return C.push(h),Ne(C)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),C=Rs(d,"beforeRouteEnter",v,P,B),C.push(h),Ne(C))).then(()=>{C=[];for(const g of o.list())C.push(Tt(g,v,P));return C.push(h),Ne(C)}).catch(g=>st(g,8)?g:Promise.reject(g))}function oe(v,P,C){a.list().forEach(M=>B(()=>M(v,P,C)))}function N(v,P,C,M,ne){const d=D(v,P);if(d)return d;const h=P===Et,g=cn?history.state:{};C&&(M||h?s.replace(v.fullPath,Q({scroll:h&&g&&g.scroll},ne)):s.push(v.fullPath,ne)),c.value=v,We(v,P,C,h),vt()}let Y;function he(){Y||(Y=s.listen((v,P,C)=>{if(!hr.listening)return;const M=L(v),ne=q(M);if(ne){G(Q(ne,{replace:!0,force:!0}),M).catch(Bn);return}l=M;const d=c.value;cn&&l_(sa(d.fullPath,C.delta),as()),z(M,d).catch(h=>st(h,12)?h:st(h,2)?(G(Q(k(h.to),{force:!0}),M).then(g=>{st(g,20)&&!C.delta&&C.type===nr.pop&&s.go(-1,!1)}).catch(Bn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),X(h,M,d))).then(h=>{h=h||N(M,d,!1),h&&(C.delta&&!st(h,8)?s.go(-C.delta,!1):C.type===nr.pop&&st(h,20)&&s.go(-1,!1)),oe(M,d,h)}).catch(Bn)}))}let Ce=On(),ue=On(),te;function X(v,P,C){vt(v);const M=ue.list();return M.length?M.forEach(ne=>ne(v,P,C)):console.error(v),Promise.reject(v)}function tt(){return te&&c.value!==Et?Promise.resolve():new Promise((v,P)=>{Ce.add([v,P])})}function vt(v){return te||(te=!v,he(),Ce.list().forEach(([P,C])=>v?C(v):P()),Ce.reset()),v}function We(v,P,C,M){const{scrollBehavior:ne}=t;if(!cn||!ne)return Promise.resolve();const d=!C&&u_(sa(v.fullPath,0))||(M||!C)&&history.state&&history.state.scroll||null;return gi().then(()=>ne(v,P,d)).then(h=>h&&c_(h)).catch(h=>X(h,v,P))}const Ie=v=>s.go(v);let rn;const sn=new Set,hr={currentRoute:c,listening:!0,addRoute:m,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:H,getRoutes:A,resolve:L,options:t,push:O,replace:W,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ue.add,isReady:tt,install(v){const P=this;v.component("RouterLink",L_),v.component("RouterView",F_),v.config.globalProperties.$router=P,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>dn(c)}),cn&&!rn&&c.value===Et&&(rn=!0,O(s.location).catch(ne=>{}));const C={};for(const ne in Et)Object.defineProperty(C,ne,{get:()=>c.value[ne],enumerable:!0});v.provide(xi,P),v.provide(Bl,Ba(C)),v.provide(ei,c);const M=v.unmount;sn.add(v),v.unmount=function(){sn.delete(v),sn.size<1&&(l=Et,Y&&Y(),Y=null,c.value=Et,rn=!1,te=!1),M()}}};function Ne(v){return v.reduce((P,C)=>P.then(()=>B(C)),Promise.resolve())}return hr}function H_(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>In(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>In(l,c))||s.push(c))}return[n,r,s]}const B_=[{path:"/",name:"Login",component:()=>Pn(()=>import("./Login-Db8hO_fB.js"),__vite__mapDeps([0,1,2])),meta:{requiresAuth:!1}},{path:"/signup",name:"Signup",component:()=>Pn(()=>import("./SignUp-BWsVppUH.js"),__vite__mapDeps([3,1,4])),meta:{requiresAuth:!1}},{path:"/home",name:"Home",component:()=>Pn(()=>import("./Home-BJtXjwVO.js"),__vite__mapDeps([5,6])),meta:{requiresAuth:!0}},{path:"/planned",name:"Planned",component:()=>Pn(()=>import("./Planned-DfyX5nJ-.js"),__vite__mapDeps([7,8])),meta:{requiresAuth:!0}},{path:"/trip-generator",name:"TripGenerator",component:()=>Pn(()=>import("./TripGenerator-ATOXd_Bq.js"),__vite__mapDeps([9,10])),meta:{requiresAuth:!0}}],Vl=$_({history:p_(),routes:B_});Vl.beforeEach(async(t,e,n)=>{const r=t.matched.some(i=>i.meta.requiresAuth),s=Xs.currentUser;r&&!s?n("/"):(t.path==="/"||t.path==="/signup")&&s?n("/home"):n()});const jl=Ed(Mm);jl.use(Vl);jl.mount("#app");export{Ye as F,zf as T,Li as _,Ct as a,V_ as b,Ur as c,$s as d,fe as e,zn as f,Xs as g,vm as h,G_ as i,W_ as j,K_ as k,q_ as l,j_ as m,oi as n,Xt as o,vi as p,gd as q,Er as r,J_ as s,Ta as t,Rf as u,Io as v,z_ as w};
