(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Mr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Y={},Zt=[],ze=()=>{},Bl=()=>!1,Ns=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Lr=t=>t.startsWith("onUpdate:"),fe=Object.assign,xr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Vl=Object.prototype.hasOwnProperty,j=(t,e)=>Vl.call(t,e),P=Array.isArray,en=t=>Kn(t)==="[object Map]",gn=t=>Kn(t)==="[object Set]",gi=t=>Kn(t)==="[object Date]",M=t=>typeof t=="function",ae=t=>typeof t=="string",qe=t=>typeof t=="symbol",X=t=>t!==null&&typeof t=="object",ko=t=>(X(t)||M(t))&&M(t.then)&&M(t.catch),No=Object.prototype.toString,Kn=t=>No.call(t),jl=t=>Kn(t).slice(8,-1),Do=t=>Kn(t)==="[object Object]",Ur=t=>ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Sn=Mr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ds=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wl=/-(\w)/g,Ne=Ds(t=>t.replace(Wl,(e,n)=>n?n.toUpperCase():"")),Kl=/\B([A-Z])/g,qt=Ds(t=>t.replace(Kl,"-$1").toLowerCase()),Ms=Ds(t=>t.charAt(0).toUpperCase()+t.slice(1)),qs=Ds(t=>t?`on${Ms(t)}`:""),Bt=(t,e)=>!Object.is(t,e),cs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Mo=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},vs=t=>{const e=parseFloat(t);return isNaN(e)?t:e},zl=t=>{const e=ae(t)?Number(t):NaN;return isNaN(e)?t:e};let mi;const Ls=()=>mi||(mi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fr(t){if(P(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ae(s)?Yl(s):Fr(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ae(t)||X(t))return t}const Gl=/;(?![^(]*\))/g,ql=/:([^]+)/,Jl=/\/\*[^]*?\*\//g;function Yl(t){const e={};return t.replace(Jl,"").split(Gl).forEach(n=>{if(n){const s=n.split(ql);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function xs(t){let e="";if(ae(t))e=t;else if(P(t))for(let n=0;n<t.length;n++){const s=xs(t[n]);s&&(e+=s+" ")}else if(X(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Xl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ql=Mr(Xl);function Lo(t){return!!t||t===""}function Zl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Wt(t[s],e[s]);return n}function Wt(t,e){if(t===e)return!0;let n=gi(t),s=gi(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=qe(t),s=qe(e),n||s)return t===e;if(n=P(t),s=P(e),n||s)return n&&s?Zl(t,e):!1;if(n=X(t),s=X(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Wt(t[o],e[o]))return!1}}return String(t)===String(e)}function $r(t,e){return t.findIndex(n=>Wt(n,e))}const xo=t=>!!(t&&t.__v_isRef===!0),q=t=>ae(t)?t:t==null?"":P(t)||X(t)&&(t.toString===No||!M(t.toString))?xo(t)?q(t.value):JSON.stringify(t,Uo,2):String(t),Uo=(t,e)=>xo(e)?Uo(t,e.value):en(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Js(s,i)+" =>"]=r,n),{})}:gn(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Js(n))}:qe(e)?Js(e):X(e)&&!P(e)&&!Do(e)?String(e):e,Js=(t,e="")=>{var n;return qe(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ae;class ec{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ae,!e&&Ae&&(this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ae;try{return Ae=this,e()}finally{Ae=n}}}on(){Ae=this}off(){Ae=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function tc(){return Ae}let ee;const Ys=new WeakSet;class Fo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ae&&Ae.active&&Ae.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ys.has(this)&&(Ys.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ho(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_i(this),Bo(this);const e=ee,n=Me;ee=this,Me=!0;try{return this.fn()}finally{Vo(this),ee=e,Me=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vr(e);this.deps=this.depsTail=void 0,_i(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ys.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){hr(this)&&this.run()}get dirty(){return hr(this)}}let $o=0,Cn,An;function Ho(t,e=!1){if(t.flags|=8,e){t.next=An,An=t;return}t.next=Cn,Cn=t}function Hr(){$o++}function Br(){if(--$o>0)return;if(An){let e=An;for(An=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Cn;){let e=Cn;for(Cn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Bo(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vo(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Vr(s),nc(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function hr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(jo(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function jo(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Nn))return;t.globalVersion=Nn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!hr(t)){t.flags&=-3;return}const n=ee,s=Me;ee=t,Me=!0;try{Bo(t);const r=t.fn(t._value);(e.version===0||Bt(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{ee=n,Me=s,Vo(t),t.flags&=-3}}function Vr(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Vr(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function nc(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Me=!0;const Wo=[];function Et(){Wo.push(Me),Me=!1}function Tt(){const t=Wo.pop();Me=t===void 0?!0:t}function _i(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ee;ee=void 0;try{e()}finally{ee=n}}}let Nn=0;class sc{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ko{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ee||!Me||ee===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ee)n=this.activeLink=new sc(ee,this),ee.deps?(n.prevDep=ee.depsTail,ee.depsTail.nextDep=n,ee.depsTail=n):ee.deps=ee.depsTail=n,zo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ee.depsTail,n.nextDep=void 0,ee.depsTail.nextDep=n,ee.depsTail=n,ee.deps===n&&(ee.deps=s)}return n}trigger(e){this.version++,Nn++,this.notify(e)}notify(e){Hr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Br()}}}function zo(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)zo(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const pr=new WeakMap,Vt=Symbol(""),gr=Symbol(""),Dn=Symbol("");function ge(t,e,n){if(Me&&ee){let s=pr.get(t);s||pr.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Ko),r.map=s,r.key=n),r.track()}}function et(t,e,n,s,r,i){const o=pr.get(t);if(!o){Nn++;return}const a=l=>{l&&l.trigger()};if(Hr(),e==="clear")o.forEach(a);else{const l=P(t),c=l&&Ur(n);if(l&&n==="length"){const d=Number(s);o.forEach((p,_)=>{(_==="length"||_===Dn||!qe(_)&&_>=d)&&a(p)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Dn)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Vt)),en(t)&&a(o.get(gr)));break;case"delete":l||(a(o.get(Vt)),en(t)&&a(o.get(gr)));break;case"set":en(t)&&a(o.get(Vt));break}}Br()}function Jt(t){const e=z(t);return e===t?e:(ge(e,"iterate",Dn),Le(t)?e:e.map(we))}function Us(t){return ge(t=z(t),"iterate",Dn),t}const rc={__proto__:null,[Symbol.iterator](){return Xs(this,Symbol.iterator,we)},concat(...t){return Jt(this).concat(...t.map(e=>P(e)?Jt(e):e))},entries(){return Xs(this,"entries",t=>(t[1]=we(t[1]),t))},every(t,e){return Ye(this,"every",t,e,void 0,arguments)},filter(t,e){return Ye(this,"filter",t,e,n=>n.map(we),arguments)},find(t,e){return Ye(this,"find",t,e,we,arguments)},findIndex(t,e){return Ye(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ye(this,"findLast",t,e,we,arguments)},findLastIndex(t,e){return Ye(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ye(this,"forEach",t,e,void 0,arguments)},includes(...t){return Qs(this,"includes",t)},indexOf(...t){return Qs(this,"indexOf",t)},join(t){return Jt(this).join(t)},lastIndexOf(...t){return Qs(this,"lastIndexOf",t)},map(t,e){return Ye(this,"map",t,e,void 0,arguments)},pop(){return bn(this,"pop")},push(...t){return bn(this,"push",t)},reduce(t,...e){return vi(this,"reduce",t,e)},reduceRight(t,...e){return vi(this,"reduceRight",t,e)},shift(){return bn(this,"shift")},some(t,e){return Ye(this,"some",t,e,void 0,arguments)},splice(...t){return bn(this,"splice",t)},toReversed(){return Jt(this).toReversed()},toSorted(t){return Jt(this).toSorted(t)},toSpliced(...t){return Jt(this).toSpliced(...t)},unshift(...t){return bn(this,"unshift",t)},values(){return Xs(this,"values",we)}};function Xs(t,e,n){const s=Us(t),r=s[e]();return s!==t&&!Le(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const ic=Array.prototype;function Ye(t,e,n,s,r,i){const o=Us(t),a=o!==t&&!Le(t),l=o[e];if(l!==ic[e]){const p=l.apply(t,i);return a?we(p):p}let c=n;o!==t&&(a?c=function(p,_){return n.call(this,we(p),_,t)}:n.length>2&&(c=function(p,_){return n.call(this,p,_,t)}));const d=l.call(o,c,s);return a&&r?r(d):d}function vi(t,e,n,s){const r=Us(t);let i=n;return r!==t&&(Le(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,we(a),l,t)}),r[e](i,...s)}function Qs(t,e,n){const s=z(t);ge(s,"iterate",Dn);const r=s[e](...n);return(r===-1||r===!1)&&zr(n[0])?(n[0]=z(n[0]),s[e](...n)):r}function bn(t,e,n=[]){Et(),Hr();const s=z(t)[e].apply(t,n);return Br(),Tt(),s}const oc=Mr("__proto__,__v_isRef,__isVue"),Go=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qe));function ac(t){qe(t)||(t=String(t));const e=z(this);return ge(e,"has",t),e.hasOwnProperty(t)}class qo{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?_c:Qo:i?Xo:Yo).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=P(e);if(!r){let l;if(o&&(l=rc[n]))return l;if(n==="hasOwnProperty")return ac}const a=Reflect.get(e,n,ve(e)?e:s);return(qe(n)?Go.has(n):oc(n))||(r||ge(e,"get",n),i)?a:ve(a)?o&&Ur(n)?a:a.value:X(a)?r?Zo(a):Wr(a):a}}class Jo extends qo{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const l=un(i);if(!Le(s)&&!un(s)&&(i=z(i),s=z(s)),!P(e)&&ve(i)&&!ve(s))return l?!1:(i.value=s,!0)}const o=P(e)&&Ur(n)?Number(n)<e.length:j(e,n),a=Reflect.set(e,n,s,ve(e)?e:r);return e===z(r)&&(o?Bt(s,i)&&et(e,"set",n,s):et(e,"add",n,s)),a}deleteProperty(e,n){const s=j(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&et(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!qe(n)||!Go.has(n))&&ge(e,"has",n),s}ownKeys(e){return ge(e,"iterate",P(e)?"length":Vt),Reflect.ownKeys(e)}}class lc extends qo{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const cc=new Jo,uc=new lc,dc=new Jo(!0);const mr=t=>t,ss=t=>Reflect.getPrototypeOf(t);function fc(t,e,n){return function(...s){const r=this.__v_raw,i=z(r),o=en(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),d=n?mr:e?_r:we;return!e&&ge(i,"iterate",l?gr:Vt),{next(){const{value:p,done:_}=c.next();return _?{value:p,done:_}:{value:a?[d(p[0]),d(p[1])]:d(p),done:_}},[Symbol.iterator](){return this}}}}function rs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function hc(t,e){const n={get(r){const i=this.__v_raw,o=z(i),a=z(r);t||(Bt(r,a)&&ge(o,"get",r),ge(o,"get",a));const{has:l}=ss(o),c=e?mr:t?_r:we;if(l.call(o,r))return c(i.get(r));if(l.call(o,a))return c(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&ge(z(r),"iterate",Vt),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=z(i),a=z(r);return t||(Bt(r,a)&&ge(o,"has",r),ge(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=z(a),c=e?mr:t?_r:we;return!t&&ge(l,"iterate",Vt),a.forEach((d,p)=>r.call(i,c(d),c(p),o))}};return fe(n,t?{add:rs("add"),set:rs("set"),delete:rs("delete"),clear:rs("clear")}:{add(r){!e&&!Le(r)&&!un(r)&&(r=z(r));const i=z(this);return ss(i).has.call(i,r)||(i.add(r),et(i,"add",r,r)),this},set(r,i){!e&&!Le(i)&&!un(i)&&(i=z(i));const o=z(this),{has:a,get:l}=ss(o);let c=a.call(o,r);c||(r=z(r),c=a.call(o,r));const d=l.call(o,r);return o.set(r,i),c?Bt(i,d)&&et(o,"set",r,i):et(o,"add",r,i),this},delete(r){const i=z(this),{has:o,get:a}=ss(i);let l=o.call(i,r);l||(r=z(r),l=o.call(i,r)),a&&a.call(i,r);const c=i.delete(r);return l&&et(i,"delete",r,void 0),c},clear(){const r=z(this),i=r.size!==0,o=r.clear();return i&&et(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=fc(r,t,e)}),n}function jr(t,e){const n=hc(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(j(n,r)&&r in s?n:s,r,i)}const pc={get:jr(!1,!1)},gc={get:jr(!1,!0)},mc={get:jr(!0,!1)};const Yo=new WeakMap,Xo=new WeakMap,Qo=new WeakMap,_c=new WeakMap;function vc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yc(t){return t.__v_skip||!Object.isExtensible(t)?0:vc(jl(t))}function Wr(t){return un(t)?t:Kr(t,!1,cc,pc,Yo)}function bc(t){return Kr(t,!1,dc,gc,Xo)}function Zo(t){return Kr(t,!0,uc,mc,Qo)}function Kr(t,e,n,s,r){if(!X(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=yc(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function tn(t){return un(t)?tn(t.__v_raw):!!(t&&t.__v_isReactive)}function un(t){return!!(t&&t.__v_isReadonly)}function Le(t){return!!(t&&t.__v_isShallow)}function zr(t){return t?!!t.__v_raw:!1}function z(t){const e=t&&t.__v_raw;return e?z(e):t}function wc(t){return!j(t,"__v_skip")&&Object.isExtensible(t)&&Mo(t,"__v_skip",!0),t}const we=t=>X(t)?Wr(t):t,_r=t=>X(t)?Zo(t):t;function ve(t){return t?t.__v_isRef===!0:!1}function Ic(t){return ve(t)?t.value:t}const Ec={get:(t,e,n)=>e==="__v_raw"?t:Ic(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ve(r)&&!ve(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function ea(t){return tn(t)?t:new Proxy(t,Ec)}class Tc{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ko(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Nn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ee!==this)return Ho(this,!0),!0}get value(){const e=this.dep.track();return jo(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Sc(t,e,n=!1){let s,r;return M(t)?s=t:(s=t.get,r=t.set),new Tc(s,r,n)}const is={},ys=new WeakMap;let Ut;function Cc(t,e=!1,n=Ut){if(n){let s=ys.get(n);s||ys.set(n,s=[]),s.push(t)}}function Ac(t,e,n=Y){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,c=A=>r?A:Le(A)||r===!1||r===0?tt(A,1):tt(A);let d,p,_,I,O=!1,L=!1;if(ve(t)?(p=()=>t.value,O=Le(t)):tn(t)?(p=()=>c(t),O=!0):P(t)?(L=!0,O=t.some(A=>tn(A)||Le(A)),p=()=>t.map(A=>{if(ve(A))return A.value;if(tn(A))return c(A);if(M(A))return l?l(A,2):A()})):M(t)?e?p=l?()=>l(t,2):t:p=()=>{if(_){Et();try{_()}finally{Tt()}}const A=Ut;Ut=d;try{return l?l(t,3,[I]):t(I)}finally{Ut=A}}:p=ze,e&&r){const A=p,W=r===!0?1/0:r;p=()=>tt(A(),W)}const te=tc(),U=()=>{d.stop(),te&&te.active&&xr(te.effects,d)};if(i&&e){const A=e;e=(...W)=>{A(...W),U()}}let B=L?new Array(t.length).fill(is):is;const H=A=>{if(!(!(d.flags&1)||!d.dirty&&!A))if(e){const W=d.run();if(r||O||(L?W.some((oe,le)=>Bt(oe,B[le])):Bt(W,B))){_&&_();const oe=Ut;Ut=d;try{const le=[W,B===is?void 0:L&&B[0]===is?[]:B,I];l?l(e,3,le):e(...le),B=W}finally{Ut=oe}}}else d.run()};return a&&a(H),d=new Fo(p),d.scheduler=o?()=>o(H,!1):H,I=A=>Cc(A,!1,d),_=d.onStop=()=>{const A=ys.get(d);if(A){if(l)l(A,4);else for(const W of A)W();ys.delete(d)}},e?s?H(!0):B=d.run():o?o(H.bind(null,!0),!0):d.run(),U.pause=d.pause.bind(d),U.resume=d.resume.bind(d),U.stop=U,U}function tt(t,e=1/0,n){if(e<=0||!X(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ve(t))tt(t.value,e,n);else if(P(t))for(let s=0;s<t.length;s++)tt(t[s],e,n);else if(gn(t)||en(t))t.forEach(s=>{tt(s,e,n)});else if(Do(t)){for(const s in t)tt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&tt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zn(t,e,n,s){try{return s?t(...s):t()}catch(r){Fs(r,e,n)}}function Ue(t,e,n,s){if(M(t)){const r=zn(t,e,n,s);return r&&ko(r)&&r.catch(i=>{Fs(i,e,n)}),r}if(P(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Ue(t[i],e,n,s));return r}}function Fs(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Y;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const d=a.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,c)===!1)return}a=a.parent}if(i){Et(),zn(i,null,10,[t,l,c]),Tt();return}}Pc(t,n,r,s,o)}function Pc(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const _e=[];let je=-1;const nn=[];let ht=null,Yt=0;const ta=Promise.resolve();let bs=null;function na(t){const e=bs||ta;return t?e.then(this?t.bind(this):t):e}function Rc(t){let e=je+1,n=_e.length;for(;e<n;){const s=e+n>>>1,r=_e[s],i=Mn(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Gr(t){if(!(t.flags&1)){const e=Mn(t),n=_e[_e.length-1];!n||!(t.flags&2)&&e>=Mn(n)?_e.push(t):_e.splice(Rc(e),0,t),t.flags|=1,sa()}}function sa(){bs||(bs=ta.then(ia))}function Oc(t){P(t)?nn.push(...t):ht&&t.id===-1?ht.splice(Yt+1,0,t):t.flags&1||(nn.push(t),t.flags|=1),sa()}function yi(t,e,n=je+1){for(;n<_e.length;n++){const s=_e[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;_e.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ra(t){if(nn.length){const e=[...new Set(nn)].sort((n,s)=>Mn(n)-Mn(s));if(nn.length=0,ht){ht.push(...e);return}for(ht=e,Yt=0;Yt<ht.length;Yt++){const n=ht[Yt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ht=null,Yt=0}}const Mn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ia(t){try{for(je=0;je<_e.length;je++){const e=_e[je];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),zn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;je<_e.length;je++){const e=_e[je];e&&(e.flags&=-2)}je=-1,_e.length=0,ra(),bs=null,(_e.length||nn.length)&&ia()}}let Ee=null,oa=null;function ws(t){const e=Ee;return Ee=t,oa=t&&t.type.__scopeId||null,e}function qr(t,e=Ee,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Oi(-1);const i=ws(e);let o;try{o=t(...r)}finally{ws(i),s._d&&Oi(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ke(t,e){if(Ee===null)return t;const n=js(Ee),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,l=Y]=e[r];i&&(M(i)&&(i={mounted:i,updated:i}),i.deep&&tt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Dt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Et(),Ue(l,n,8,[t.el,a,t,e]),Tt())}}const kc=Symbol("_vte"),aa=t=>t.__isTeleport,pt=Symbol("_leaveCb"),os=Symbol("_enterCb");function Nc(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ga(()=>{t.isMounted=!0}),ma(()=>{t.isUnmounting=!0}),t}const Re=[Function,Array],la={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Re,onEnter:Re,onAfterEnter:Re,onEnterCancelled:Re,onBeforeLeave:Re,onLeave:Re,onAfterLeave:Re,onLeaveCancelled:Re,onBeforeAppear:Re,onAppear:Re,onAfterAppear:Re,onAppearCancelled:Re},ca=t=>{const e=t.subTree;return e.component?ca(e.component):e},Dc={name:"BaseTransition",props:la,setup(t,{slots:e}){const n=Ou(),s=Nc();return()=>{const r=e.default&&fa(e.default(),!0);if(!r||!r.length)return;const i=ua(r),o=z(t),{mode:a}=o;if(s.isLeaving)return Zs(i);const l=bi(i);if(!l)return Zs(i);let c=vr(l,o,s,n,p=>c=p);l.type!==Ie&&Ln(l,c);let d=n.subTree&&bi(n.subTree);if(d&&d.type!==Ie&&!$t(l,d)&&ca(n).type!==Ie){let p=vr(d,o,s,n);if(Ln(d,p),a==="out-in"&&l.type!==Ie)return s.isLeaving=!0,p.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},Zs(i);a==="in-out"&&l.type!==Ie?p.delayLeave=(_,I,O)=>{const L=da(s,d);L[String(d.key)]=d,_[pt]=()=>{I(),_[pt]=void 0,delete c.delayedLeave,d=void 0},c.delayedLeave=()=>{O(),delete c.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function ua(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ie){e=n;break}}return e}const Mc=Dc;function da(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function vr(t,e,n,s,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:_,onLeave:I,onAfterLeave:O,onLeaveCancelled:L,onBeforeAppear:te,onAppear:U,onAfterAppear:B,onAppearCancelled:H}=e,A=String(t.key),W=da(n,t),oe=(x,V)=>{x&&Ue(x,s,9,V)},le=(x,V)=>{const re=V[1];oe(x,V),P(x)?x.every(C=>C.length<=1)&&re():x.length<=1&&re()},he={mode:o,persisted:a,beforeEnter(x){let V=l;if(!n.isMounted)if(i)V=te||l;else return;x[pt]&&x[pt](!0);const re=W[A];re&&$t(t,re)&&re.el[pt]&&re.el[pt](),oe(V,[x])},enter(x){let V=c,re=d,C=p;if(!n.isMounted)if(i)V=U||c,re=B||d,C=H||p;else return;let ne=!1;const pe=x[os]=Je=>{ne||(ne=!0,Je?oe(C,[x]):oe(re,[x]),he.delayedLeave&&he.delayedLeave(),x[os]=void 0)};V?le(V,[x,pe]):pe()},leave(x,V){const re=String(t.key);if(x[os]&&x[os](!0),n.isUnmounting)return V();oe(_,[x]);let C=!1;const ne=x[pt]=pe=>{C||(C=!0,V(),pe?oe(L,[x]):oe(O,[x]),x[pt]=void 0,W[re]===t&&delete W[re])};W[re]=t,I?le(I,[x,ne]):ne()},clone(x){const V=vr(x,e,n,s,r);return r&&r(V),V}};return he}function Zs(t){if($s(t))return t=wt(t),t.children=null,t}function bi(t){if(!$s(t))return aa(t.type)&&t.children?ua(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&M(n.default))return n.default()}}function Ln(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ln(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function fa(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ue?(o.patchFlag&128&&r++,s=s.concat(fa(o.children,e,a))):(e||o.type!==Ie)&&s.push(a!=null?wt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function ha(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Is(t,e,n,s,r=!1){if(P(t)){t.forEach((O,L)=>Is(O,e&&(P(e)?e[L]:e),n,s,r));return}if(Pn(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Is(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?js(s.component):s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,d=a.refs===Y?a.refs={}:a.refs,p=a.setupState,_=z(p),I=p===Y?()=>!1:O=>j(_,O);if(c!=null&&c!==l&&(ae(c)?(d[c]=null,I(c)&&(p[c]=null)):ve(c)&&(c.value=null)),M(l))zn(l,a,12,[o,d]);else{const O=ae(l),L=ve(l);if(O||L){const te=()=>{if(t.f){const U=O?I(l)?p[l]:d[l]:l.value;r?P(U)&&xr(U,i):P(U)?U.includes(i)||U.push(i):O?(d[l]=[i],I(l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else O?(d[l]=o,I(l)&&(p[l]=o)):L&&(l.value=o,t.k&&(d[t.k]=o))};o?(te.id=-1,Ce(te,n)):te()}}}Ls().requestIdleCallback;Ls().cancelIdleCallback;const Pn=t=>!!t.type.__asyncLoader,$s=t=>t.type.__isKeepAlive;function Lc(t,e){pa(t,"a",e)}function xc(t,e){pa(t,"da",e)}function pa(t,e,n=de){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Hs(e,s,n),n){let r=n.parent;for(;r&&r.parent;)$s(r.parent.vnode)&&Uc(s,e,n,r),r=r.parent}}function Uc(t,e,n,s){const r=Hs(e,t,s,!0);_a(()=>{xr(s[e],r)},n)}function Hs(t,e,n=de,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Et();const a=Gn(n),l=Ue(e,n,t,o);return a(),Tt(),l});return s?r.unshift(i):r.push(i),i}}const ut=t=>(e,n=de)=>{(!Fn||t==="sp")&&Hs(t,(...s)=>e(...s),n)},Fc=ut("bm"),ga=ut("m"),$c=ut("bu"),Hc=ut("u"),ma=ut("bum"),_a=ut("um"),Bc=ut("sp"),Vc=ut("rtg"),jc=ut("rtc");function Wc(t,e=de){Hs("ec",t,e)}const Kc="components";function Ze(t,e){return Gc(Kc,t,!0,e)||t}const zc=Symbol.for("v-ndc");function Gc(t,e,n=!0,s=!1){const r=Ee||de;if(r){const i=r.type;{const a=Lu(i,!1);if(a&&(a===e||a===Ne(e)||a===Ms(Ne(e))))return i}const o=wi(r[t]||i[t],e)||wi(r.appContext[t],e);return!o&&s?i:o}}function wi(t,e){return t&&(t[e]||t[Ne(e)]||t[Ms(Ne(e))])}function jt(t,e,n,s){let r;const i=n,o=P(t);if(o||ae(t)){const a=o&&tn(t);let l=!1;a&&(l=!Le(t),t=Us(t)),r=new Array(t.length);for(let c=0,d=t.length;c<d;c++)r[c]=e(l?we(t[c]):t[c],c,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(X(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const d=a[l];r[l]=e(t[d],d,l,i)}}else r=[];return r}const yr=t=>t?$a(t)?js(t):yr(t.parent):null,Rn=fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yr(t.parent),$root:t=>yr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ya(t),$forceUpdate:t=>t.f||(t.f=()=>{Gr(t.update)}),$nextTick:t=>t.n||(t.n=na.bind(t.proxy)),$watch:t=>gu.bind(t)}),er=(t,e)=>t!==Y&&!t.__isScriptSetup&&j(t,e),qc={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const I=o[e];if(I!==void 0)switch(I){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(er(s,e))return o[e]=1,s[e];if(r!==Y&&j(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&j(c,e))return o[e]=3,i[e];if(n!==Y&&j(n,e))return o[e]=4,n[e];br&&(o[e]=0)}}const d=Rn[e];let p,_;if(d)return e==="$attrs"&&ge(t.attrs,"get",""),d(t);if((p=a.__cssModules)&&(p=p[e]))return p;if(n!==Y&&j(n,e))return o[e]=4,n[e];if(_=l.config.globalProperties,j(_,e))return _[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return er(r,e)?(r[e]=n,!0):s!==Y&&j(s,e)?(s[e]=n,!0):j(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Y&&j(t,o)||er(e,o)||(a=i[0])&&j(a,o)||j(s,o)||j(Rn,o)||j(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:j(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ii(t){return P(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let br=!0;function Jc(t){const e=ya(t),n=t.proxy,s=t.ctx;br=!1,e.beforeCreate&&Ei(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:d,beforeMount:p,mounted:_,beforeUpdate:I,updated:O,activated:L,deactivated:te,beforeDestroy:U,beforeUnmount:B,destroyed:H,unmounted:A,render:W,renderTracked:oe,renderTriggered:le,errorCaptured:he,serverPrefetch:x,expose:V,inheritAttrs:re,components:C,directives:ne,filters:pe}=e;if(c&&Yc(c,s,null),o)for(const ie in o){const Q=o[ie];M(Q)&&(s[ie]=Q.bind(n))}if(r){const ie=r.call(n,n);X(ie)&&(t.data=Wr(ie))}if(br=!0,i)for(const ie in i){const Q=i[ie],kt=M(Q)?Q.bind(n,n):M(Q.get)?Q.get.bind(n,n):ze,ts=!M(Q)&&M(Q.set)?Q.set.bind(n):ze,Nt=Uu({get:kt,set:ts});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:Fe=>Nt.value=Fe})}if(a)for(const ie in a)va(a[ie],s,n,ie);if(l){const ie=M(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(Q=>{nu(Q,ie[Q])})}d&&Ei(d,t,"c");function ce(ie,Q){P(Q)?Q.forEach(kt=>ie(kt.bind(n))):Q&&ie(Q.bind(n))}if(ce(Fc,p),ce(ga,_),ce($c,I),ce(Hc,O),ce(Lc,L),ce(xc,te),ce(Wc,he),ce(jc,oe),ce(Vc,le),ce(ma,B),ce(_a,A),ce(Bc,x),P(V))if(V.length){const ie=t.exposed||(t.exposed={});V.forEach(Q=>{Object.defineProperty(ie,Q,{get:()=>n[Q],set:kt=>n[Q]=kt})})}else t.exposed||(t.exposed={});W&&t.render===ze&&(t.render=W),re!=null&&(t.inheritAttrs=re),C&&(t.components=C),ne&&(t.directives=ne),x&&ha(t)}function Yc(t,e,n=ze){P(t)&&(t=wr(t));for(const s in t){const r=t[s];let i;X(r)?"default"in r?i=us(r.from||s,r.default,!0):i=us(r.from||s):i=us(r),ve(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Ei(t,e,n){Ue(P(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function va(t,e,n,s){let r=s.includes(".")?Da(n,s):()=>n[s];if(ae(t)){const i=e[t];M(i)&&nr(r,i)}else if(M(t))nr(r,t.bind(n));else if(X(t))if(P(t))t.forEach(i=>va(i,e,n,s));else{const i=M(t.handler)?t.handler.bind(n):e[t.handler];M(i)&&nr(r,i,t)}}function ya(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Es(l,c,o,!0)),Es(l,e,o)),X(e)&&i.set(e,l),l}function Es(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Es(t,i,n,!0),r&&r.forEach(o=>Es(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Xc[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Xc={data:Ti,props:Si,emits:Si,methods:In,computed:In,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:In,directives:In,watch:Zc,provide:Ti,inject:Qc};function Ti(t,e){return e?t?function(){return fe(M(t)?t.call(this,this):t,M(e)?e.call(this,this):e)}:e:t}function Qc(t,e){return In(wr(t),wr(e))}function wr(t){if(P(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function me(t,e){return t?[...new Set([].concat(t,e))]:e}function In(t,e){return t?fe(Object.create(null),t,e):e}function Si(t,e){return t?P(t)&&P(e)?[...new Set([...t,...e])]:fe(Object.create(null),Ii(t),Ii(e??{})):e}function Zc(t,e){if(!t)return e;if(!e)return t;const n=fe(Object.create(null),t);for(const s in e)n[s]=me(t[s],e[s]);return n}function ba(){return{app:null,config:{isNativeTag:Bl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eu=0;function tu(t,e){return function(s,r=null){M(s)||(s=fe({},s)),r!=null&&!X(r)&&(r=null);const i=ba(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:eu++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:$u,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&M(d.install)?(o.add(d),d.install(c,...p)):M(d)&&(o.add(d),d(c,...p))),c},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),c},component(d,p){return p?(i.components[d]=p,c):i.components[d]},directive(d,p){return p?(i.directives[d]=p,c):i.directives[d]},mount(d,p,_){if(!l){const I=c._ceVNode||se(s,r);return I.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),t(I,d,_),l=!0,c._container=d,d.__vue_app__=c,js(I.component)}},onUnmount(d){a.push(d)},unmount(){l&&(Ue(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(d,p){return i.provides[d]=p,c},runWithContext(d){const p=sn;sn=c;try{return d()}finally{sn=p}}};return c}}let sn=null;function nu(t,e){if(de){let n=de.provides;const s=de.parent&&de.parent.provides;s===n&&(n=de.provides=Object.create(s)),n[t]=e}}function us(t,e,n=!1){const s=de||Ee;if(s||sn){const r=sn?sn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&M(e)?e.call(s&&s.proxy):e}}const wa={},Ia=()=>Object.create(wa),Ea=t=>Object.getPrototypeOf(t)===wa;function su(t,e,n,s=!1){const r={},i=Ia();t.propsDefaults=Object.create(null),Ta(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:bc(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function ru(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=z(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let _=d[p];if(Bs(t.emitsOptions,_))continue;const I=e[_];if(l)if(j(i,_))I!==i[_]&&(i[_]=I,c=!0);else{const O=Ne(_);r[O]=Ir(l,a,O,I,t,!1)}else I!==i[_]&&(i[_]=I,c=!0)}}}else{Ta(t,e,r,i)&&(c=!0);let d;for(const p in a)(!e||!j(e,p)&&((d=qt(p))===p||!j(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(r[p]=Ir(l,a,p,void 0,t,!0)):delete r[p]);if(i!==a)for(const p in i)(!e||!j(e,p))&&(delete i[p],c=!0)}c&&et(t.attrs,"set","")}function Ta(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Sn(l))continue;const c=e[l];let d;r&&j(r,d=Ne(l))?!i||!i.includes(d)?n[d]=c:(a||(a={}))[d]=c:Bs(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=z(n),c=a||Y;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Ir(r,l,p,c[p],t,!j(c,p))}}return o}function Ir(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=j(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&M(l)){const{propsDefaults:c}=r;if(n in c)s=c[n];else{const d=Gn(r);s=c[n]=l.call(null,e),d()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===qt(n))&&(s=!0))}return s}const iu=new WeakMap;function Sa(t,e,n=!1){const s=n?iu:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!M(t)){const d=p=>{l=!0;const[_,I]=Sa(p,e,!0);fe(o,_),I&&a.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return X(t)&&s.set(t,Zt),Zt;if(P(i))for(let d=0;d<i.length;d++){const p=Ne(i[d]);Ci(p)&&(o[p]=Y)}else if(i)for(const d in i){const p=Ne(d);if(Ci(p)){const _=i[d],I=o[p]=P(_)||M(_)?{type:_}:fe({},_),O=I.type;let L=!1,te=!0;if(P(O))for(let U=0;U<O.length;++U){const B=O[U],H=M(B)&&B.name;if(H==="Boolean"){L=!0;break}else H==="String"&&(te=!1)}else L=M(O)&&O.name==="Boolean";I[0]=L,I[1]=te,(L||j(I,"default"))&&a.push(p)}}const c=[o,a];return X(t)&&s.set(t,c),c}function Ci(t){return t[0]!=="$"&&!Sn(t)}const Ca=t=>t[0]==="_"||t==="$stable",Jr=t=>P(t)?t.map(We):[We(t)],ou=(t,e,n)=>{if(e._n)return e;const s=qr((...r)=>Jr(e(...r)),n);return s._c=!1,s},Aa=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Ca(r))continue;const i=t[r];if(M(i))e[r]=ou(r,i,s);else if(i!=null){const o=Jr(i);e[r]=()=>o}}},Pa=(t,e)=>{const n=Jr(e);t.slots.default=()=>n},Ra=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},au=(t,e,n)=>{const s=t.slots=Ia();if(t.vnode.shapeFlag&32){const r=e._;r?(Ra(s,e,n),n&&Mo(s,"_",r,!0)):Aa(e,s)}else e&&Pa(t,e)},lu=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Y;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Ra(r,e,n):(i=!e.$stable,Aa(e,r)),o=e}else e&&(Pa(t,e),o={default:1});if(i)for(const a in r)!Ca(a)&&o[a]==null&&delete r[a]},Ce=Iu;function cu(t){return uu(t)}function uu(t,e){const n=Ls();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:d,parentNode:p,nextSibling:_,setScopeId:I=ze,insertStaticContent:O}=t,L=(u,f,g,y=null,m=null,v=null,T=void 0,E=null,w=!!f.dynamicChildren)=>{if(u===f)return;u&&!$t(u,f)&&(y=ns(u),Fe(u,m,v,!0),u=null),f.patchFlag===-2&&(w=!1,f.dynamicChildren=null);const{type:b,ref:k,shapeFlag:S}=f;switch(b){case Vs:te(u,f,g,y);break;case Ie:U(u,f,g,y);break;case ds:u==null&&B(f,g,y,T);break;case ue:C(u,f,g,y,m,v,T,E,w);break;default:S&1?W(u,f,g,y,m,v,T,E,w):S&6?ne(u,f,g,y,m,v,T,E,w):(S&64||S&128)&&b.process(u,f,g,y,m,v,T,E,w,vn)}k!=null&&m&&Is(k,u&&u.ref,v,f||u,!f)},te=(u,f,g,y)=>{if(u==null)s(f.el=a(f.children),g,y);else{const m=f.el=u.el;f.children!==u.children&&c(m,f.children)}},U=(u,f,g,y)=>{u==null?s(f.el=l(f.children||""),g,y):f.el=u.el},B=(u,f,g,y)=>{[u.el,u.anchor]=O(u.children,f,g,y,u.el,u.anchor)},H=({el:u,anchor:f},g,y)=>{let m;for(;u&&u!==f;)m=_(u),s(u,g,y),u=m;s(f,g,y)},A=({el:u,anchor:f})=>{let g;for(;u&&u!==f;)g=_(u),r(u),u=g;r(f)},W=(u,f,g,y,m,v,T,E,w)=>{f.type==="svg"?T="svg":f.type==="math"&&(T="mathml"),u==null?oe(f,g,y,m,v,T,E,w):x(u,f,m,v,T,E,w)},oe=(u,f,g,y,m,v,T,E)=>{let w,b;const{props:k,shapeFlag:S,transition:R,dirs:D}=u;if(w=u.el=o(u.type,v,k&&k.is,k),S&8?d(w,u.children):S&16&&he(u.children,w,null,y,m,tr(u,v),T,E),D&&Dt(u,null,y,"created"),le(w,u,u.scopeId,T,y),k){for(const Z in k)Z!=="value"&&!Sn(Z)&&i(w,Z,null,k[Z],v,y);"value"in k&&i(w,"value",null,k.value,v),(b=k.onVnodeBeforeMount)&&Ve(b,y,u)}D&&Dt(u,null,y,"beforeMount");const $=du(m,R);$&&R.beforeEnter(w),s(w,f,g),((b=k&&k.onVnodeMounted)||$||D)&&Ce(()=>{b&&Ve(b,y,u),$&&R.enter(w),D&&Dt(u,null,y,"mounted")},m)},le=(u,f,g,y,m)=>{if(g&&I(u,g),y)for(let v=0;v<y.length;v++)I(u,y[v]);if(m){let v=m.subTree;if(f===v||La(v.type)&&(v.ssContent===f||v.ssFallback===f)){const T=m.vnode;le(u,T,T.scopeId,T.slotScopeIds,m.parent)}}},he=(u,f,g,y,m,v,T,E,w=0)=>{for(let b=w;b<u.length;b++){const k=u[b]=E?gt(u[b]):We(u[b]);L(null,k,f,g,y,m,v,T,E)}},x=(u,f,g,y,m,v,T)=>{const E=f.el=u.el;let{patchFlag:w,dynamicChildren:b,dirs:k}=f;w|=u.patchFlag&16;const S=u.props||Y,R=f.props||Y;let D;if(g&&Mt(g,!1),(D=R.onVnodeBeforeUpdate)&&Ve(D,g,f,u),k&&Dt(f,u,g,"beforeUpdate"),g&&Mt(g,!0),(S.innerHTML&&R.innerHTML==null||S.textContent&&R.textContent==null)&&d(E,""),b?V(u.dynamicChildren,b,E,g,y,tr(f,m),v):T||Q(u,f,E,null,g,y,tr(f,m),v,!1),w>0){if(w&16)re(E,S,R,g,m);else if(w&2&&S.class!==R.class&&i(E,"class",null,R.class,m),w&4&&i(E,"style",S.style,R.style,m),w&8){const $=f.dynamicProps;for(let Z=0;Z<$.length;Z++){const K=$[Z],Te=S[K],be=R[K];(be!==Te||K==="value")&&i(E,K,Te,be,m,g)}}w&1&&u.children!==f.children&&d(E,f.children)}else!T&&b==null&&re(E,S,R,g,m);((D=R.onVnodeUpdated)||k)&&Ce(()=>{D&&Ve(D,g,f,u),k&&Dt(f,u,g,"updated")},y)},V=(u,f,g,y,m,v,T)=>{for(let E=0;E<f.length;E++){const w=u[E],b=f[E],k=w.el&&(w.type===ue||!$t(w,b)||w.shapeFlag&70)?p(w.el):g;L(w,b,k,null,y,m,v,T,!0)}},re=(u,f,g,y,m)=>{if(f!==g){if(f!==Y)for(const v in f)!Sn(v)&&!(v in g)&&i(u,v,f[v],null,m,y);for(const v in g){if(Sn(v))continue;const T=g[v],E=f[v];T!==E&&v!=="value"&&i(u,v,E,T,m,y)}"value"in g&&i(u,"value",f.value,g.value,m)}},C=(u,f,g,y,m,v,T,E,w)=>{const b=f.el=u?u.el:a(""),k=f.anchor=u?u.anchor:a("");let{patchFlag:S,dynamicChildren:R,slotScopeIds:D}=f;D&&(E=E?E.concat(D):D),u==null?(s(b,g,y),s(k,g,y),he(f.children||[],g,k,m,v,T,E,w)):S>0&&S&64&&R&&u.dynamicChildren?(V(u.dynamicChildren,R,g,m,v,T,E),(f.key!=null||m&&f===m.subTree)&&Oa(u,f,!0)):Q(u,f,g,k,m,v,T,E,w)},ne=(u,f,g,y,m,v,T,E,w)=>{f.slotScopeIds=E,u==null?f.shapeFlag&512?m.ctx.activate(f,g,y,T,w):pe(f,g,y,m,v,T,w):Je(u,f,w)},pe=(u,f,g,y,m,v,T)=>{const E=u.component=Ru(u,y,m);if($s(u)&&(E.ctx.renderer=vn),ku(E,!1,T),E.asyncDep){if(m&&m.registerDep(E,ce,T),!u.el){const w=E.subTree=se(Ie);U(null,w,f,g)}}else ce(E,u,f,g,m,v,T)},Je=(u,f,g)=>{const y=f.component=u.component;if(bu(u,f,g))if(y.asyncDep&&!y.asyncResolved){ie(y,f,g);return}else y.next=f,y.update();else f.el=u.el,y.vnode=f},ce=(u,f,g,y,m,v,T)=>{const E=()=>{if(u.isMounted){let{next:S,bu:R,u:D,parent:$,vnode:Z}=u;{const He=ka(u);if(He){S&&(S.el=Z.el,ie(u,S,T)),He.asyncDep.then(()=>{u.isUnmounted||E()});return}}let K=S,Te;Mt(u,!1),S?(S.el=Z.el,ie(u,S,T)):S=Z,R&&cs(R),(Te=S.props&&S.props.onVnodeBeforeUpdate)&&Ve(Te,$,S,Z),Mt(u,!0);const be=Pi(u),$e=u.subTree;u.subTree=be,L($e,be,p($e.el),ns($e),u,m,v),S.el=be.el,K===null&&wu(u,be.el),D&&Ce(D,m),(Te=S.props&&S.props.onVnodeUpdated)&&Ce(()=>Ve(Te,$,S,Z),m)}else{let S;const{el:R,props:D}=f,{bm:$,m:Z,parent:K,root:Te,type:be}=u,$e=Pn(f);Mt(u,!1),$&&cs($),!$e&&(S=D&&D.onVnodeBeforeMount)&&Ve(S,K,f),Mt(u,!0);{Te.ce&&Te.ce._injectChildStyle(be);const He=u.subTree=Pi(u);L(null,He,g,y,u,m,v),f.el=He.el}if(Z&&Ce(Z,m),!$e&&(S=D&&D.onVnodeMounted)){const He=f;Ce(()=>Ve(S,K,He),m)}(f.shapeFlag&256||K&&Pn(K.vnode)&&K.vnode.shapeFlag&256)&&u.a&&Ce(u.a,m),u.isMounted=!0,f=g=y=null}};u.scope.on();const w=u.effect=new Fo(E);u.scope.off();const b=u.update=w.run.bind(w),k=u.job=w.runIfDirty.bind(w);k.i=u,k.id=u.uid,w.scheduler=()=>Gr(k),Mt(u,!0),b()},ie=(u,f,g)=>{f.component=u;const y=u.vnode.props;u.vnode=f,u.next=null,ru(u,f.props,y,g),lu(u,f.children,g),Et(),yi(u),Tt()},Q=(u,f,g,y,m,v,T,E,w=!1)=>{const b=u&&u.children,k=u?u.shapeFlag:0,S=f.children,{patchFlag:R,shapeFlag:D}=f;if(R>0){if(R&128){ts(b,S,g,y,m,v,T,E,w);return}else if(R&256){kt(b,S,g,y,m,v,T,E,w);return}}D&8?(k&16&&_n(b,m,v),S!==b&&d(g,S)):k&16?D&16?ts(b,S,g,y,m,v,T,E,w):_n(b,m,v,!0):(k&8&&d(g,""),D&16&&he(S,g,y,m,v,T,E,w))},kt=(u,f,g,y,m,v,T,E,w)=>{u=u||Zt,f=f||Zt;const b=u.length,k=f.length,S=Math.min(b,k);let R;for(R=0;R<S;R++){const D=f[R]=w?gt(f[R]):We(f[R]);L(u[R],D,g,null,m,v,T,E,w)}b>k?_n(u,m,v,!0,!1,S):he(f,g,y,m,v,T,E,w,S)},ts=(u,f,g,y,m,v,T,E,w)=>{let b=0;const k=f.length;let S=u.length-1,R=k-1;for(;b<=S&&b<=R;){const D=u[b],$=f[b]=w?gt(f[b]):We(f[b]);if($t(D,$))L(D,$,g,null,m,v,T,E,w);else break;b++}for(;b<=S&&b<=R;){const D=u[S],$=f[R]=w?gt(f[R]):We(f[R]);if($t(D,$))L(D,$,g,null,m,v,T,E,w);else break;S--,R--}if(b>S){if(b<=R){const D=R+1,$=D<k?f[D].el:y;for(;b<=R;)L(null,f[b]=w?gt(f[b]):We(f[b]),g,$,m,v,T,E,w),b++}}else if(b>R)for(;b<=S;)Fe(u[b],m,v,!0),b++;else{const D=b,$=b,Z=new Map;for(b=$;b<=R;b++){const Se=f[b]=w?gt(f[b]):We(f[b]);Se.key!=null&&Z.set(Se.key,b)}let K,Te=0;const be=R-$+1;let $e=!1,He=0;const yn=new Array(be);for(b=0;b<be;b++)yn[b]=0;for(b=D;b<=S;b++){const Se=u[b];if(Te>=be){Fe(Se,m,v,!0);continue}let Be;if(Se.key!=null)Be=Z.get(Se.key);else for(K=$;K<=R;K++)if(yn[K-$]===0&&$t(Se,f[K])){Be=K;break}Be===void 0?Fe(Se,m,v,!0):(yn[Be-$]=b+1,Be>=He?He=Be:$e=!0,L(Se,f[Be],g,null,m,v,T,E,w),Te++)}const hi=$e?fu(yn):Zt;for(K=hi.length-1,b=be-1;b>=0;b--){const Se=$+b,Be=f[Se],pi=Se+1<k?f[Se+1].el:y;yn[b]===0?L(null,Be,g,pi,m,v,T,E,w):$e&&(K<0||b!==hi[K]?Nt(Be,g,pi,2):K--)}}},Nt=(u,f,g,y,m=null)=>{const{el:v,type:T,transition:E,children:w,shapeFlag:b}=u;if(b&6){Nt(u.component.subTree,f,g,y);return}if(b&128){u.suspense.move(f,g,y);return}if(b&64){T.move(u,f,g,vn);return}if(T===ue){s(v,f,g);for(let S=0;S<w.length;S++)Nt(w[S],f,g,y);s(u.anchor,f,g);return}if(T===ds){H(u,f,g);return}if(y!==2&&b&1&&E)if(y===0)E.beforeEnter(v),s(v,f,g),Ce(()=>E.enter(v),m);else{const{leave:S,delayLeave:R,afterLeave:D}=E,$=()=>s(v,f,g),Z=()=>{S(v,()=>{$(),D&&D()})};R?R(v,$,Z):Z()}else s(v,f,g)},Fe=(u,f,g,y=!1,m=!1)=>{const{type:v,props:T,ref:E,children:w,dynamicChildren:b,shapeFlag:k,patchFlag:S,dirs:R,cacheIndex:D}=u;if(S===-2&&(m=!1),E!=null&&Is(E,null,g,u,!0),D!=null&&(f.renderCache[D]=void 0),k&256){f.ctx.deactivate(u);return}const $=k&1&&R,Z=!Pn(u);let K;if(Z&&(K=T&&T.onVnodeBeforeUnmount)&&Ve(K,f,u),k&6)Hl(u.component,g,y);else{if(k&128){u.suspense.unmount(g,y);return}$&&Dt(u,null,f,"beforeUnmount"),k&64?u.type.remove(u,f,g,vn,y):b&&!b.hasOnce&&(v!==ue||S>0&&S&64)?_n(b,f,g,!1,!0):(v===ue&&S&384||!m&&k&16)&&_n(w,f,g),y&&di(u)}(Z&&(K=T&&T.onVnodeUnmounted)||$)&&Ce(()=>{K&&Ve(K,f,u),$&&Dt(u,null,f,"unmounted")},g)},di=u=>{const{type:f,el:g,anchor:y,transition:m}=u;if(f===ue){$l(g,y);return}if(f===ds){A(u);return}const v=()=>{r(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(u.shapeFlag&1&&m&&!m.persisted){const{leave:T,delayLeave:E}=m,w=()=>T(g,v);E?E(u.el,v,w):w()}else v()},$l=(u,f)=>{let g;for(;u!==f;)g=_(u),r(u),u=g;r(f)},Hl=(u,f,g)=>{const{bum:y,scope:m,job:v,subTree:T,um:E,m:w,a:b}=u;Ai(w),Ai(b),y&&cs(y),m.stop(),v&&(v.flags|=8,Fe(T,u,f,g)),E&&Ce(E,f),Ce(()=>{u.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},_n=(u,f,g,y=!1,m=!1,v=0)=>{for(let T=v;T<u.length;T++)Fe(u[T],f,g,y,m)},ns=u=>{if(u.shapeFlag&6)return ns(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const f=_(u.anchor||u.el),g=f&&f[kc];return g?_(g):f};let Gs=!1;const fi=(u,f,g)=>{u==null?f._vnode&&Fe(f._vnode,null,null,!0):L(f._vnode||null,u,f,null,null,null,g),f._vnode=u,Gs||(Gs=!0,yi(),ra(),Gs=!1)},vn={p:L,um:Fe,m:Nt,r:di,mt:pe,mc:he,pc:Q,pbc:V,n:ns,o:t};return{render:fi,hydrate:void 0,createApp:tu(fi)}}function tr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Mt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function du(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Oa(t,e,n=!1){const s=t.children,r=e.children;if(P(s)&&P(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=gt(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Oa(o,a)),a.type===Vs&&(a.el=o.el)}}function fu(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ka(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ka(e)}function Ai(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const hu=Symbol.for("v-scx"),pu=()=>us(hu);function nr(t,e,n){return Na(t,e,n)}function Na(t,e,n=Y){const{immediate:s,deep:r,flush:i,once:o}=n,a=fe({},n),l=e&&s||!e&&i!=="post";let c;if(Fn){if(i==="sync"){const I=pu();c=I.__watcherHandles||(I.__watcherHandles=[])}else if(!l){const I=()=>{};return I.stop=ze,I.resume=ze,I.pause=ze,I}}const d=de;a.call=(I,O,L)=>Ue(I,d,O,L);let p=!1;i==="post"?a.scheduler=I=>{Ce(I,d&&d.suspense)}:i!=="sync"&&(p=!0,a.scheduler=(I,O)=>{O?I():Gr(I)}),a.augmentJob=I=>{e&&(I.flags|=4),p&&(I.flags|=2,d&&(I.id=d.uid,I.i=d))};const _=Ac(t,e,a);return Fn&&(c?c.push(_):l&&_()),_}function gu(t,e,n){const s=this.proxy,r=ae(t)?t.includes(".")?Da(s,t):()=>s[t]:t.bind(s,s);let i;M(e)?i=e:(i=e.handler,n=e);const o=Gn(this),a=Na(r,i.bind(s),n);return o(),a}function Da(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const mu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ne(e)}Modifiers`]||t[`${qt(e)}Modifiers`];function _u(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Y;let r=n;const i=e.startsWith("update:"),o=i&&mu(s,e.slice(7));o&&(o.trim&&(r=n.map(d=>ae(d)?d.trim():d)),o.number&&(r=n.map(vs)));let a,l=s[a=qs(e)]||s[a=qs(Ne(e))];!l&&i&&(l=s[a=qs(qt(e))]),l&&Ue(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ue(c,t,6,r)}}function Ma(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!M(t)){const l=c=>{const d=Ma(c,e,!0);d&&(a=!0,fe(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(X(t)&&s.set(t,null),null):(P(i)?i.forEach(l=>o[l]=null):fe(o,i),X(t)&&s.set(t,o),o)}function Bs(t,e){return!t||!Ns(e)?!1:(e=e.slice(2).replace(/Once$/,""),j(t,e[0].toLowerCase()+e.slice(1))||j(t,qt(e))||j(t,e))}function Pi(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:d,props:p,data:_,setupState:I,ctx:O,inheritAttrs:L}=t,te=ws(t);let U,B;try{if(n.shapeFlag&4){const A=r||s,W=A;U=We(c.call(W,A,d,p,I,_,O)),B=a}else{const A=e;U=We(A.length>1?A(p,{attrs:a,slots:o,emit:l}):A(p,null)),B=e.props?a:vu(a)}}catch(A){On.length=0,Fs(A,t,1),U=se(Ie)}let H=U;if(B&&L!==!1){const A=Object.keys(B),{shapeFlag:W}=H;A.length&&W&7&&(i&&A.some(Lr)&&(B=yu(B,i)),H=wt(H,B,!1,!0))}return n.dirs&&(H=wt(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&Ln(H,n.transition),U=H,ws(te),U}const vu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ns(n))&&((e||(e={}))[n]=t[n]);return e},yu=(t,e)=>{const n={};for(const s in t)(!Lr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function bu(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Ri(s,o,c):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const _=d[p];if(o[_]!==s[_]&&!Bs(c,_))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ri(s,o,c):!0:!!o;return!1}function Ri(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Bs(n,i))return!0}return!1}function wu({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const La=t=>t.__isSuspense;function Iu(t,e){e&&e.pendingBranch?P(t)?e.effects.push(...t):e.effects.push(t):Oc(t)}const ue=Symbol.for("v-fgt"),Vs=Symbol.for("v-txt"),Ie=Symbol.for("v-cmt"),ds=Symbol.for("v-stc"),On=[];let Pe=null;function F(t=!1){On.push(Pe=t?null:[])}function Eu(){On.pop(),Pe=On[On.length-1]||null}let xn=1;function Oi(t,e=!1){xn+=t,t<0&&Pe&&e&&(Pe.hasOnce=!0)}function xa(t){return t.dynamicChildren=xn>0?Pe||Zt:null,Eu(),xn>0&&Pe&&Pe.push(t),t}function G(t,e,n,s,r,i){return xa(h(t,e,n,s,r,i,!0))}function Qt(t,e,n,s,r){return xa(se(t,e,n,s,r,!0))}function Ts(t){return t?t.__v_isVNode===!0:!1}function $t(t,e){return t.type===e.type&&t.key===e.key}const Ua=({key:t})=>t??null,fs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ae(t)||ve(t)||M(t)?{i:Ee,r:t,k:e,f:!!n}:t:null);function h(t,e=null,n=null,s=0,r=null,i=t===ue?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ua(e),ref:e&&fs(e),scopeId:oa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ee};return a?(Yr(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ae(n)?8:16),xn>0&&!o&&Pe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Pe.push(l),l}const se=Tu;function Tu(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===zc)&&(t=Ie),Ts(t)){const a=wt(t,e,!0);return n&&Yr(a,n),xn>0&&!i&&Pe&&(a.shapeFlag&6?Pe[Pe.indexOf(t)]=a:Pe.push(a)),a.patchFlag=-2,a}if(xu(t)&&(t=t.__vccOpts),e){e=Su(e);let{class:a,style:l}=e;a&&!ae(a)&&(e.class=xs(a)),X(l)&&(zr(l)&&!P(l)&&(l=fe({},l)),e.style=Fr(l))}const o=ae(t)?1:La(t)?128:aa(t)?64:X(t)?4:M(t)?2:0;return h(t,e,n,s,r,o,i,!0)}function Su(t){return t?zr(t)||Ea(t)?fe({},t):t:null}function wt(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?Cu(r||{},e):r,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ua(c),ref:e&&e.ref?n&&i?P(i)?i.concat(fs(e)):[i,fs(e)]:fs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ue?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wt(t.ssContent),ssFallback:t.ssFallback&&wt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Ln(d,l.clone(d)),d}function Kt(t=" ",e=0){return se(Vs,null,t,e)}function Fa(t,e){const n=se(ds,null,t);return n.staticCount=e,n}function Un(t="",e=!1){return e?(F(),Qt(Ie,null,t)):se(Ie,null,t)}function We(t){return t==null||typeof t=="boolean"?se(Ie):P(t)?se(ue,null,t.slice()):Ts(t)?gt(t):se(Vs,null,String(t))}function gt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:wt(t)}function Yr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(P(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Yr(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Ea(e)?e._ctx=Ee:r===3&&Ee&&(Ee.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else M(e)?(e={default:e,_ctx:Ee},n=32):(e=String(e),s&64?(n=16,e=[Kt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Cu(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=xs([e.class,s.class]));else if(r==="style")e.style=Fr([e.style,s.style]);else if(Ns(r)){const i=e[r],o=s[r];o&&i!==o&&!(P(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ve(t,e,n,s=null){Ue(t,e,7,[n,s])}const Au=ba();let Pu=0;function Ru(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Au,i={uid:Pu++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ec(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sa(s,r),emitsOptions:Ma(s,r),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:s.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=_u.bind(null,i),t.ce&&t.ce(i),i}let de=null;const Ou=()=>de||Ee;let Ss,Er;{const t=Ls(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Ss=e("__VUE_INSTANCE_SETTERS__",n=>de=n),Er=e("__VUE_SSR_SETTERS__",n=>Fn=n)}const Gn=t=>{const e=de;return Ss(t),t.scope.on(),()=>{t.scope.off(),Ss(e)}},ki=()=>{de&&de.scope.off(),Ss(null)};function $a(t){return t.vnode.shapeFlag&4}let Fn=!1;function ku(t,e=!1,n=!1){e&&Er(e);const{props:s,children:r}=t.vnode,i=$a(t);su(t,s,i,e),au(t,r,n);const o=i?Nu(t,e):void 0;return e&&Er(!1),o}function Nu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,qc);const{setup:s}=n;if(s){Et();const r=t.setupContext=s.length>1?Mu(t):null,i=Gn(t),o=zn(s,t,0,[t.props,r]),a=ko(o);if(Tt(),i(),(a||t.sp)&&!Pn(t)&&ha(t),a){if(o.then(ki,ki),e)return o.then(l=>{Ni(t,l)}).catch(l=>{Fs(l,t,0)});t.asyncDep=o}else Ni(t,o)}else Ha(t)}function Ni(t,e,n){M(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:X(e)&&(t.setupState=ea(e)),Ha(t)}function Ha(t,e,n){const s=t.type;t.render||(t.render=s.render||ze);{const r=Gn(t);Et();try{Jc(t)}finally{Tt(),r()}}}const Du={get(t,e){return ge(t,"get",""),t[e]}};function Mu(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Du),slots:t.slots,emit:t.emit,expose:e}}function js(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ea(wc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rn)return Rn[n](t)},has(e,n){return n in e||n in Rn}})):t.proxy}function Lu(t,e=!0){return M(t)?t.displayName||t.name:t.name||e&&t.__name}function xu(t){return M(t)&&"__vccOpts"in t}const Uu=(t,e)=>Sc(t,e,Fn);function Fu(t,e,n){const s=arguments.length;return s===2?X(e)&&!P(e)?Ts(e)?se(t,null,[e]):se(t,e):se(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ts(n)&&(n=[n]),se(t,e,n))}const $u="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tr;const Di=typeof window<"u"&&window.trustedTypes;if(Di)try{Tr=Di.createPolicy("vue",{createHTML:t=>t})}catch{}const Ba=Tr?t=>Tr.createHTML(t):t=>t,Hu="http://www.w3.org/2000/svg",Bu="http://www.w3.org/1998/Math/MathML",Qe=typeof document<"u"?document:null,Mi=Qe&&Qe.createElement("template"),Vu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Qe.createElementNS(Hu,t):e==="mathml"?Qe.createElementNS(Bu,t):n?Qe.createElement(t,{is:n}):Qe.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Qe.createTextNode(t),createComment:t=>Qe.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qe.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Mi.innerHTML=Ba(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Mi.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},dt="transition",wn="animation",$n=Symbol("_vtc"),Va={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ju=fe({},la,Va),Wu=t=>(t.displayName="Transition",t.props=ju,t),Ku=Wu((t,{slots:e})=>Fu(Mc,zu(t),e)),Lt=(t,e=[])=>{P(t)?t.forEach(n=>n(...e)):t&&t(...e)},Li=t=>t?P(t)?t.some(e=>e.length>1):t.length>1:!1;function zu(t){const e={};for(const C in t)C in Va||(e[C]=t[C]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:d=a,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:_=`${n}-leave-active`,leaveToClass:I=`${n}-leave-to`}=t,O=Gu(r),L=O&&O[0],te=O&&O[1],{onBeforeEnter:U,onEnter:B,onEnterCancelled:H,onLeave:A,onLeaveCancelled:W,onBeforeAppear:oe=U,onAppear:le=B,onAppearCancelled:he=H}=e,x=(C,ne,pe,Je)=>{C._enterCancelled=Je,xt(C,ne?d:a),xt(C,ne?c:o),pe&&pe()},V=(C,ne)=>{C._isLeaving=!1,xt(C,p),xt(C,I),xt(C,_),ne&&ne()},re=C=>(ne,pe)=>{const Je=C?le:B,ce=()=>x(ne,C,pe);Lt(Je,[ne,ce]),xi(()=>{xt(ne,C?l:i),Xe(ne,C?d:a),Li(Je)||Ui(ne,s,L,ce)})};return fe(e,{onBeforeEnter(C){Lt(U,[C]),Xe(C,i),Xe(C,o)},onBeforeAppear(C){Lt(oe,[C]),Xe(C,l),Xe(C,c)},onEnter:re(!1),onAppear:re(!0),onLeave(C,ne){C._isLeaving=!0;const pe=()=>V(C,ne);Xe(C,p),C._enterCancelled?(Xe(C,_),Hi()):(Hi(),Xe(C,_)),xi(()=>{C._isLeaving&&(xt(C,p),Xe(C,I),Li(A)||Ui(C,s,te,pe))}),Lt(A,[C,pe])},onEnterCancelled(C){x(C,!1,void 0,!0),Lt(H,[C])},onAppearCancelled(C){x(C,!0,void 0,!0),Lt(he,[C])},onLeaveCancelled(C){V(C),Lt(W,[C])}})}function Gu(t){if(t==null)return null;if(X(t))return[sr(t.enter),sr(t.leave)];{const e=sr(t);return[e,e]}}function sr(t){return zl(t)}function Xe(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[$n]||(t[$n]=new Set)).add(e)}function xt(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[$n];n&&(n.delete(e),n.size||(t[$n]=void 0))}function xi(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let qu=0;function Ui(t,e,n,s){const r=t._endId=++qu,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=Ju(t,e);if(!o)return s();const c=o+"end";let d=0;const p=()=>{t.removeEventListener(c,_),i()},_=I=>{I.target===t&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},a+1),t.addEventListener(c,_)}function Ju(t,e){const n=window.getComputedStyle(t),s=O=>(n[O]||"").split(", "),r=s(`${dt}Delay`),i=s(`${dt}Duration`),o=Fi(r,i),a=s(`${wn}Delay`),l=s(`${wn}Duration`),c=Fi(a,l);let d=null,p=0,_=0;e===dt?o>0&&(d=dt,p=o,_=i.length):e===wn?c>0&&(d=wn,p=c,_=l.length):(p=Math.max(o,c),d=p>0?o>c?dt:wn:null,_=d?d===dt?i.length:l.length:0);const I=d===dt&&/\b(transform|all)(,|$)/.test(s(`${dt}Property`).toString());return{type:d,timeout:p,propCount:_,hasTransform:I}}function Fi(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>$i(n)+$i(t[s])))}function $i(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Hi(){return document.body.offsetHeight}function Yu(t,e,n){const s=t[$n];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Bi=Symbol("_vod"),Xu=Symbol("_vsh"),Qu=Symbol(""),Zu=/(^|;)\s*display\s*:/;function ed(t,e,n){const s=t.style,r=ae(n);let i=!1;if(n&&!r){if(e)if(ae(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&hs(s,a,"")}else for(const o in e)n[o]==null&&hs(s,o,"");for(const o in n)o==="display"&&(i=!0),hs(s,o,n[o])}else if(r){if(e!==n){const o=s[Qu];o&&(n+=";"+o),s.cssText=n,i=Zu.test(n)}}else e&&t.removeAttribute("style");Bi in t&&(t[Bi]=i?s.display:"",t[Xu]&&(s.display="none"))}const Vi=/\s*!important$/;function hs(t,e,n){if(P(n))n.forEach(s=>hs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=td(t,e);Vi.test(n)?t.setProperty(qt(s),n.replace(Vi,""),"important"):t[s]=n}}const ji=["Webkit","Moz","ms"],rr={};function td(t,e){const n=rr[e];if(n)return n;let s=Ne(e);if(s!=="filter"&&s in t)return rr[e]=s;s=Ms(s);for(let r=0;r<ji.length;r++){const i=ji[r]+s;if(i in t)return rr[e]=i}return e}const Wi="http://www.w3.org/1999/xlink";function Ki(t,e,n,s,r,i=Ql(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Wi,e.slice(6,e.length)):t.setAttributeNS(Wi,e,n):n==null||i&&!Lo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":qe(n)?String(n):n)}function zi(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ba(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Lo(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function nt(t,e,n,s){t.addEventListener(e,n,s)}function nd(t,e,n,s){t.removeEventListener(e,n,s)}const Gi=Symbol("_vei");function sd(t,e,n,s,r=null){const i=t[Gi]||(t[Gi]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=rd(e);if(s){const c=i[e]=ad(s,r);nt(t,a,c,l)}else o&&(nd(t,a,o,l),i[e]=void 0)}}const qi=/(?:Once|Passive|Capture)$/;function rd(t){let e;if(qi.test(t)){e={};let s;for(;s=t.match(qi);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):qt(t.slice(2)),e]}let ir=0;const id=Promise.resolve(),od=()=>ir||(id.then(()=>ir=0),ir=Date.now());function ad(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ue(ld(s,n.value),e,5,[s])};return n.value=t,n.attached=od(),n}function ld(t,e){if(P(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Ji=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cd=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?Yu(t,s,o):e==="style"?ed(t,n,s):Ns(e)?Lr(e)||sd(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ud(t,e,s,o))?(zi(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ki(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ae(s))?zi(t,Ne(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ki(t,e,s,o))};function ud(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ji(e)&&M(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ji(e)&&ae(n)?!1:e in t}const It=t=>{const e=t.props["onUpdate:modelValue"]||!1;return P(e)?n=>cs(e,n):e};function dd(t){t.target.composing=!0}function Yi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ke=Symbol("_assign"),Hn={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[ke]=It(r);const i=s||r.props&&r.props.type==="number";nt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=vs(a)),t[ke](a)}),n&&nt(t,"change",()=>{t.value=t.value.trim()}),e||(nt(t,"compositionstart",dd),nt(t,"compositionend",Yi),nt(t,"change",Yi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[ke]=It(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?vs(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===l)||(t.value=l))}},fd={deep:!0,created(t,e,n){t[ke]=It(n),nt(t,"change",()=>{const s=t._modelValue,r=dn(t),i=t.checked,o=t[ke];if(P(s)){const a=$r(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(gn(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(ja(t,i))})},mounted:Xi,beforeUpdate(t,e,n){t[ke]=It(n),Xi(t,e,n)}};function Xi(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(P(e))r=$r(e,s.props.value)>-1;else if(gn(e))r=e.has(s.props.value);else{if(e===n)return;r=Wt(e,ja(t,!0))}t.checked!==r&&(t.checked=r)}const hd={created(t,{value:e},n){t.checked=Wt(e,n.props.value),t[ke]=It(n),nt(t,"change",()=>{t[ke](dn(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[ke]=It(s),e!==n&&(t.checked=Wt(e,s.props.value))}},Xt={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=gn(e);nt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?vs(dn(o)):dn(o));t[ke](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,na(()=>{t._assigning=!1})}),t[ke]=It(s)},mounted(t,{value:e}){Qi(t,e)},beforeUpdate(t,e,n){t[ke]=It(n)},updated(t,{value:e}){t._assigning||Qi(t,e)}};function Qi(t,e){const n=t.multiple,s=P(e);if(!(n&&!s&&!gn(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],a=dn(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=$r(e,a)>-1}else o.selected=e.has(a);else if(Wt(dn(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function dn(t){return"_value"in t?t._value:t.value}function ja(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Zi={created(t,e,n){as(t,e,n,null,"created")},mounted(t,e,n){as(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){as(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){as(t,e,n,s,"updated")}};function pd(t,e){switch(t){case"SELECT":return Xt;case"TEXTAREA":return Hn;default:switch(e){case"checkbox":return fd;case"radio":return hd;default:return Hn}}}function as(t,e,n,s,r){const o=pd(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const gd=["ctrl","shift","alt","meta"],md={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>gd.some(n=>t[`${n}Key`]&&!e.includes(n))},rn=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=md[e[o]];if(a&&a(r,e))return}return t(r,...i)})},_d=fe({patchProp:cd},Vu);let eo;function vd(){return eo||(eo=cu(_d))}const yd=(...t)=>{const e=vd().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=wd(s);if(!r)return;const i=e._component;!M(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,bd(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function bd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function wd(t){return ae(t)?document.querySelector(t):t}const St=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Id={props:{user:{type:Object,default:null}},methods:{logout(){this.$emit("logout")}}},Ed={class:"app-header"},Td={class:"container"},Sd={class:"nav"},Cd={key:0,class:"user-info"},Ad={class:"user-email"};function Pd(t,e,n,s,r,i){const o=Ze("router-link");return F(),G("header",Ed,[h("div",Td,[se(o,{to:"/",class:"logo"},{default:qr(()=>e[2]||(e[2]=[h("span",null,"🌍",-1),Kt(" TravelPlanner ")])),_:1}),h("nav",Sd,[n.user?(F(),G("div",Cd,[h("span",Ad,q(n.user.email),1),h("button",{onClick:e[0]||(e[0]=(...a)=>i.logout&&i.logout(...a)),class:"logout-button"},"Logout")])):(F(),G("button",{key:1,onClick:e[1]||(e[1]=a=>t.$emit("show-auth")),class:"auth-button"}," Login "))])])])}const Rd=St(Id,[["render",Pd],["__scopeId","data-v-01533a60"]]),Od={name:"HomePage",data(){return{showPlannedModal:!1,recommendedHotels:[{name:"Grand Plaza Hotel",rating:4,price:180,image:"https://source.unsplash.com/random/300x200/?hotel,1"},{name:"Seaside Resort",rating:5,price:250,image:"https://source.unsplash.com/random/300x200/?resort,1"},{name:"Urban Loft Apartments",rating:3,price:120,image:"https://source.unsplash.com/random/300x200/?apartment,1"}]}},methods:{selectTripType(t){t==="planned"?this.showPlannedModal=!0:this.$emit("select-unplanned")},closeModal(){this.showPlannedModal=!1}}},kd={class:"home-container"},Nd={class:"content"},Dd={class:"choice-container"},Md={class:"choice-buttons"},Ld={class:"planned-modal"},xd={class:"budget-section"},Ud={class:"budget-breakdown"},Fd={class:"budget-item"},$d={class:"budget-item"},Hd={class:"budget-item"},Bd={class:"hotels-section"},Vd=["src","alt"],jd={class:"hotel-info"},Wd={class:"hotel-rating"},Kd={class:"hotel-price"};function zd(t,e,n,s,r,i){const o=Ze("font-awesome-icon");return F(),G("div",kd,[e[18]||(e[18]=h("div",{class:"background-image"},null,-1)),e[19]||(e[19]=h("div",{class:"overlay"},null,-1)),h("div",Nd,[e[9]||(e[9]=h("h1",{class:"title"},"✈️ TravelPlanner",-1)),e[10]||(e[10]=h("p",{class:"subtitle"},"Where will your next adventure take you?",-1)),h("div",Dd,[e[8]||(e[8]=h("h2",null,"Plan your perfect trip",-1)),h("div",Md,[h("button",{onClick:e[0]||(e[0]=a=>i.selectTripType("planned")),class:"choice-btn planned"},[se(o,{icon:"calendar-check"}),e[4]||(e[4]=h("span",null,"Planned Trip",-1)),e[5]||(e[5]=h("p",null,"I know exactly what I want",-1))]),h("button",{onClick:e[1]||(e[1]=a=>i.selectTripType("unplanned")),class:"choice-btn unplanned"},[se(o,{icon:"compass"}),e[6]||(e[6]=h("span",null,"Unplanned Trip",-1)),e[7]||(e[7]=h("p",null,"Surprise me with ideas",-1))])])])]),r.showPlannedModal?(F(),G("div",{key:0,class:"modal-overlay",onClick:e[3]||(e[3]=rn((...a)=>i.closeModal&&i.closeModal(...a),["self"]))},[h("div",Ld,[h("button",{onClick:e[2]||(e[2]=(...a)=>i.closeModal&&i.closeModal(...a)),class:"close-btn"},"×"),e[17]||(e[17]=h("h3",null,"Your Planned Trip Details",-1)),h("div",xd,[e[14]||(e[14]=h("h4",null,[Kt(" Estimated Total Budget: "),h("span",{class:"budget-amount"},"$1,200 - $1,800")],-1)),h("div",Ud,[h("div",Fd,[se(o,{icon:"plane"}),e[11]||(e[11]=h("span",null,"Flights: $400-$600",-1))]),h("div",$d,[se(o,{icon:"hotel"}),e[12]||(e[12]=h("span",null,"Accommodation: $500-$800",-1))]),h("div",Hd,[se(o,{icon:"utensils"}),e[13]||(e[13]=h("span",null,"Food & Activities: $300-$400",-1))])])]),h("div",Bd,[e[16]||(e[16]=h("h4",null,"Recommended Hotels",-1)),(F(!0),G(ue,null,jt(r.recommendedHotels,(a,l)=>(F(),G("div",{class:"hotel-card",key:l},[h("img",{src:a.image,alt:a.name,class:"hotel-image"},null,8,Vd),h("div",jd,[h("h5",null,q(a.name),1),h("div",Wd,[(F(),G(ue,null,jt(5,c=>se(o,{icon:"star",key:c,class:xs({filled:c<=a.rating})},null,8,["class"])),64))]),h("p",Kd,"$"+q(a.price)+"/night",1),e[15]||(e[15]=h("button",{class:"book-btn"},"Book Now",-1))])]))),128))])])])):Un("",!0)])}const Gd=St(Od,[["render",zd],["__scopeId","data-v-3e57be76"]]),qd={props:{trip:{type:Object,required:!0}},methods:{closeModal(){this.$emit("close")},saveTrip(){this.$emit("save",this.trip),this.closeModal()},formatType(t){return{beach:"🏖️ Beach",mountain:"⛰️ Mountain",city:"🏙️ City",countryside:"🌄 Countryside",historical:"🏛️ Historical"}[t]||t},formatClimate(t){return{warm:"☀️ Warm Climate",temperate:"🌤️ Temperate Climate",cold:"❄️ Cold Climate"}[t]||t},formatBudget(t){return{low:"💰 Budget Friendly",medium:"💵 Mid-range",high:"💎 Luxury"}[t]||t}}},Jd={class:"modal-content"},Yd={class:"modal-header"},Xd={class:"trip-meta"},Qd={class:"trip-type"},Zd={class:"trip-climate"},ef={class:"trip-budget"},tf={class:"estimated-budget"},nf=["src","alt"],sf={class:"modal-body"},rf={class:"details-section"},of={class:"details-section"},af={class:"details-section"},lf={class:"details-section"},cf={class:"tips-list"},uf={class:"details-section"},df={class:"tips-list"},ff={class:"details-section"},hf={class:"tips-list"},pf={class:"action-buttons"};function gf(t,e,n,s,r,i){return F(),G("div",{class:"modal-overlay",onClick:e[3]||(e[3]=rn((...o)=>i.closeModal&&i.closeModal(...o),["self"]))},[h("div",Jd,[h("button",{class:"close-button",onClick:e[0]||(e[0]=(...o)=>i.closeModal&&i.closeModal(...o))},"×"),h("div",Yd,[h("h2",null,q(n.trip.name)+", "+q(n.trip.country),1),h("div",Xd,[h("span",Qd,q(i.formatType(n.trip.type)),1),h("span",Zd,q(i.formatClimate(n.trip.climate)),1),h("span",ef,q(i.formatBudget(n.trip.budget)),1)]),h("div",tf," Estimated Total Budget: "+q(n.trip.estimatedBudget),1)]),h("img",{src:n.trip.image,alt:n.trip.name,class:"modal-image"},null,8,nf),h("div",sf,[e[10]||(e[10]=h("h3",null,"About This Destination",-1)),h("p",null,q(n.trip.specialty),1),h("div",rf,[e[4]||(e[4]=h("h3",null,"Historical Significance",-1)),h("p",null,q(n.trip.historicalSignificance),1)]),h("div",of,[e[5]||(e[5]=h("h3",null,"Famous For",-1)),h("p",null,q(n.trip.famousFor),1)]),h("div",af,[e[6]||(e[6]=h("h3",null,"Must Try",-1)),h("p",null,q(n.trip.mustTry),1)]),h("div",lf,[e[7]||(e[7]=h("h3",null,"Nearby Places to Visit",-1)),h("ul",cf,[(F(!0),G(ue,null,jt(n.trip.nearbyPlaces,(o,a)=>(F(),G("li",{key:a},q(o),1))),128))])]),h("div",uf,[e[8]||(e[8]=h("h3",null,"Recommended Hostels",-1)),h("ul",df,[(F(!0),G(ue,null,jt(n.trip.hostels,(o,a)=>(F(),G("li",{key:"hostel"+a},q(o),1))),128))])]),h("div",ff,[e[9]||(e[9]=h("h3",null,"Top Restaurants",-1)),h("ul",hf,[(F(!0),G(ue,null,jt(n.trip.restaurants,(o,a)=>(F(),G("li",{key:"restaurant"+a},q(o),1))),128))])]),h("div",pf,[h("button",{class:"save-button",onClick:e[1]||(e[1]=(...o)=>i.saveTrip&&i.saveTrip(...o))},"Save This Trip"),h("button",{class:"close-modal-button",onClick:e[2]||(e[2]=(...o)=>i.closeModal&&i.closeModal(...o))},"Close")])])])])}const mf=St(qd,[["render",gf],["__scopeId","data-v-b75ae1fa"]]),_f={components:{TripModal:mf},data(){return{userPreferences:{country:"",budget:"",type:"",climate:"",duration:""},countries:[{name:"Italy",value:"italy"},{name:"Japan",value:"japan"},{name:"Thailand",value:"thailand"},{name:"France",value:"france"},{name:"USA",value:"usa"},{name:"India",value:"india"},{name:"Spain",value:"spain"},{name:"Greece",value:"greece"}],trips:[],selectedTrip:null,destinations:[{name:"Rome, Italy",specialty:"Eternal city with ancient ruins and vibrant culture",type:"historical",climate:"temperate",budget:"medium",duration:"medium",country:"Italy",image:"https://source.unsplash.com/random/800x600/?rome",estimatedBudget:"$800-$1200",historicalSignificance:"Founded in 753 BC, center of the Roman Empire",famousFor:"Colosseum, Vatican City, Roman Forum, Trevi Fountain",mustTry:"Authentic pasta carbonara, gelato, espresso",nearbyPlaces:["Florence","Pompeii","Amalfi Coast"],hostels:["The Yellow Hostel","Alessandro Downtown Hostel","Generator Rome"],restaurants:["Roscioli","Tonnarello","La Pergola (Michelin-starred)"]}],savedTrips:[]}},methods:{generateTrip(){this.trips=this.destinations.filter(t=>(!this.userPreferences.country||t.country.toLowerCase()===this.userPreferences.country.toLowerCase())&&(!this.userPreferences.budget||t.budget===this.userPreferences.budget)&&(!this.userPreferences.type||t.type===this.userPreferences.type)&&(!this.userPreferences.climate||t.climate===this.userPreferences.climate)&&(!this.userPreferences.duration||t.duration===this.userPreferences.duration)),this.trips.length===0&&(this.trips=[...this.destinations])},formatBudget(t){return{low:"$ Budget",medium:"$$ Mid-range",high:"$$$ Luxury"}[t]||t},formatClimate(t){return{warm:"☀️ Warm",temperate:"🌤 Temperate",cold:"❄️ Cold"}[t]||t},formatType(t){return{beach:"🏖️ Beach",mountain:"⛰️ Mountain",city:"🏙️ City",countryside:"🌄 Countryside",historical:"🏛️ Historical"}[t]||t},viewDetails(t){this.selectedTrip=t},saveTrip(t){this.savedTrips.push(t),alert(`${t.name} has been saved to your trips!`)}}},vf={class:"trip-generator"},yf={class:"preference-form"},bf={class:"filter-grid"},wf={class:"filter-group"},If=["value"],Ef={class:"filter-group"},Tf={class:"filter-group"},Sf={class:"filter-group"},Cf={class:"filter-group"},Af={key:0,class:"trip-results"},Pf={class:"trip-grid"},Rf={class:"trip-image-container"},Of=["src","alt"],kf={class:"trip-badge"},Nf={class:"country-badge"},Df={class:"trip-content"},Mf={class:"trip-description"},Lf={class:"trip-meta"},xf={class:"trip-type"},Uf={class:"trip-climate"},Ff={class:"estimated-budget"},$f=["onClick"];function Hf(t,e,n,s,r,i){const o=Ze("TripModal");return F(),G("div",vf,[e[19]||(e[19]=h("div",{class:"hero-section"},[h("h1",null,"Where to next?"),h("p",null,"Let us help you plan your perfect getaway")],-1)),h("div",yf,[e[17]||(e[17]=h("h2",null,"Your Travel Preferences",-1)),h("div",bf,[h("div",wf,[e[8]||(e[8]=h("label",{for:"country"},"Preferred Country",-1)),Ke(h("select",{id:"country","onUpdate:modelValue":e[0]||(e[0]=a=>r.userPreferences.country=a)},[e[7]||(e[7]=h("option",{value:""},"Any Country",-1)),(F(!0),G(ue,null,jt(r.countries,a=>(F(),G("option",{value:a.value,key:a.value},q(a.name),9,If))),128))],512),[[Xt,r.userPreferences.country]])]),h("div",Ef,[e[10]||(e[10]=h("label",{for:"budget"},"Budget",-1)),Ke(h("select",{id:"budget","onUpdate:modelValue":e[1]||(e[1]=a=>r.userPreferences.budget=a)},e[9]||(e[9]=[h("option",{value:""},"Any Budget",-1),h("option",{value:"low"},"Budget ($)",-1),h("option",{value:"medium"},"Mid-range ($$)",-1),h("option",{value:"high"},"Luxury ($$$)",-1)]),512),[[Xt,r.userPreferences.budget]])]),h("div",Tf,[e[12]||(e[12]=h("label",{for:"type"},"Destination Type",-1)),Ke(h("select",{id:"type","onUpdate:modelValue":e[2]||(e[2]=a=>r.userPreferences.type=a)},e[11]||(e[11]=[Fa('<option value="" data-v-a5e9d127>Any Type</option><option value="beach" data-v-a5e9d127>Beach</option><option value="mountain" data-v-a5e9d127>Mountain</option><option value="city" data-v-a5e9d127>City</option><option value="countryside" data-v-a5e9d127>Countryside</option><option value="historical" data-v-a5e9d127>Historical</option>',6)]),512),[[Xt,r.userPreferences.type]])]),h("div",Sf,[e[14]||(e[14]=h("label",{for:"climate"},"Preferred Climate",-1)),Ke(h("select",{id:"climate","onUpdate:modelValue":e[3]||(e[3]=a=>r.userPreferences.climate=a)},e[13]||(e[13]=[h("option",{value:""},"Any Climate",-1),h("option",{value:"warm"},"Warm",-1),h("option",{value:"temperate"},"Temperate",-1),h("option",{value:"cold"},"Cold",-1)]),512),[[Xt,r.userPreferences.climate]])]),h("div",Cf,[e[16]||(e[16]=h("label",{for:"duration"},"Trip Duration",-1)),Ke(h("select",{id:"duration","onUpdate:modelValue":e[4]||(e[4]=a=>r.userPreferences.duration=a)},e[15]||(e[15]=[h("option",{value:""},"Any Duration",-1),h("option",{value:"short"},"Weekend (2-3 days)",-1),h("option",{value:"medium"},"Week (5-7 days)",-1),h("option",{value:"long"},"Extended (10+ days)",-1)]),512),[[Xt,r.userPreferences.duration]])])]),h("button",{onClick:e[5]||(e[5]=(...a)=>i.generateTrip&&i.generateTrip(...a)),class:"generate-button"}," Generate Trip Ideas ")]),r.trips.length>0?(F(),G("div",Af,[e[18]||(e[18]=h("h2",null,"Recommended Trips",-1)),h("div",Pf,[(F(!0),G(ue,null,jt(r.trips,(a,l)=>(F(),G("div",{key:l,class:"trip-card"},[h("div",Rf,[h("img",{src:a.image,alt:a.name,class:"trip-image"},null,8,Of),h("div",kf,q(i.formatBudget(a.budget)),1),h("div",Nf,q(a.country),1)]),h("div",Df,[h("h3",null,q(a.name),1),h("p",Mf,q(a.specialty),1),h("div",Lf,[h("span",xf,q(i.formatType(a.type)),1),h("span",Uf,q(i.formatClimate(a.climate)),1)]),h("div",Ff," Estimated Budget: "+q(a.estimatedBudget),1),h("button",{onClick:c=>i.viewDetails(a),class:"details-button"}," View Details ",8,$f)])]))),128))])])):Un("",!0),r.selectedTrip?(F(),Qt(o,{key:1,trip:r.selectedTrip,onClose:e[6]||(e[6]=a=>r.selectedTrip=null),onSave:i.saveTrip},null,8,["trip","onSave"])):Un("",!0)])}const Bf=St(_f,[["render",Hf],["__scopeId","data-v-a5e9d127"]]),Vf={},jf={class:"travelplanner-footer"};function Wf(t,e){return F(),G("footer",jf,e[0]||(e[0]=[Fa('<div class="footer-container" data-v-4481b664><div class="footer-header" data-v-4481b664><h2 class="footer-title" data-v-4481b664><span class="logo-icon" data-v-4481b664>✈️</span> TravelPlanner </h2><p class="footer-subtitle" data-v-4481b664>Plan your perfect trip with ease</p></div><div class="footer-divider" data-v-4481b664></div><div class="footer-section" data-v-4481b664><h3 class="section-title" data-v-4481b664>Quick Links</h3><ul class="links-list" data-v-4481b664><li data-v-4481b664><span class="link-icon" data-v-4481b664>🏠</span> Home</li><li data-v-4481b664><span class="link-icon" data-v-4481b664>ℹ️</span> About</li><li data-v-4481b664><span class="link-icon" data-v-4481b664>✉️</span> Contact</li></ul></div><div class="footer-divider" data-v-4481b664></div><div class="footer-section" data-v-4481b664><h3 class="section-title" data-v-4481b664>Connect</h3><div class="social-icons" data-v-4481b664><span class="social-icon" data-v-4481b664>👍</span><span class="social-icon" data-v-4481b664>👍</span><span class="social-icon" data-v-4481b664>💤</span></div></div><div class="footer-copyright" data-v-4481b664> © 2023 TravelPlanner. All rights reserved. </div></div>',1)]))}const Kf=St(Vf,[["render",Wf],["__scopeId","data-v-4481b664"]]),zf=()=>{};var to={};/**
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
 */const Wa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Gf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ka={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,d=i>>2,p=(i&3)<<4|a>>4;let _=(a&15)<<2|c>>6,I=c&63;l||(I=64,o||(_=64)),s.push(n[d],n[p],n[_],n[I])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||p==null)throw new qf;const _=i<<2|a>>4;if(s.push(_),c!==64){const I=a<<4&240|c>>2;if(s.push(I),p!==64){const O=c<<6&192|p;s.push(O)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jf=function(t){const e=Wa(t);return Ka.encodeByteArray(e,!0)},za=function(t){return Jf(t).replace(/\./g,"")},Ga=function(t){try{return Ka.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xf=()=>Yf().__FIREBASE_DEFAULTS__,Qf=()=>{if(typeof process>"u"||typeof to>"u")return;const t=to.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ga(t[1]);return e&&JSON.parse(e)},Xr=()=>{try{return zf()||Xf()||Qf()||Zf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},eh=t=>{var e,n;return(n=(e=Xr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qa=()=>{var t;return(t=Xr())===null||t===void 0?void 0:t.config},Ja=t=>{var e;return(e=Xr())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class th{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function sh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ih(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oh(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ah(){try{return typeof indexedDB=="object"}catch{return!1}}function lh(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ch="FirebaseError";class Ct extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ch,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?uh(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ct(r,a,s)}}function uh(t,e){return t.replace(dh,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const dh=/\{\$([^}]+)}/g;function fh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(no(i)&&no(o)){if(!fn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function no(t){return t!==null&&typeof t=="object"}/**
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
 */function Jn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function En(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Tn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function hh(t,e){const n=new ph(t,e);return n.subscribe.bind(n)}class ph{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");gh(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=or),r.error===void 0&&(r.error=or),r.complete===void 0&&(r.complete=or);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function or(){}/**
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
 */function At(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ft="[DEFAULT]";/**
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
 */class mh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new th;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vh(e))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ft){return this.instances.has(e)}getOptions(e=Ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_h(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ft){return this.component?this.component.multipleInstances?e:Ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _h(t){return t===Ft?void 0:t}function vh(t){return t.instantiationMode==="EAGER"}/**
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
 */class yh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const bh={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},wh=J.INFO,Ih={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Eh=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Ih[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ya{constructor(e){this.name=e,this._logLevel=wh,this._logHandler=Eh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const Th=(t,e)=>e.some(n=>t instanceof n);let so,ro;function Sh(){return so||(so=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ch(){return ro||(ro=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xa=new WeakMap,Sr=new WeakMap,Qa=new WeakMap,ar=new WeakMap,Qr=new WeakMap;function Ah(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xa.set(n,t)}).catch(()=>{}),Qr.set(e,t),e}function Ph(t){if(Sr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sr.set(t,e)}let Cr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rh(t){Cr=t(Cr)}function Oh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(lr(this),e,...n);return Qa.set(s,e.sort?e.sort():[e]),yt(s)}:Ch().includes(t)?function(...e){return t.apply(lr(this),e),yt(Xa.get(this))}:function(...e){return yt(t.apply(lr(this),e))}}function kh(t){return typeof t=="function"?Oh(t):(t instanceof IDBTransaction&&Ph(t),Th(t,Sh())?new Proxy(t,Cr):t)}function yt(t){if(t instanceof IDBRequest)return Ah(t);if(ar.has(t))return ar.get(t);const e=kh(t);return e!==t&&(ar.set(t,e),Qr.set(e,t)),e}const lr=t=>Qr.get(t);function Nh(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=yt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(yt(o.result),l.oldVersion,l.newVersion,yt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Dh=["get","getKey","getAll","getAllKeys","count"],Mh=["put","add","delete","clear"],cr=new Map;function io(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cr.get(e))return cr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Mh.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Dh.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return cr.set(e,i),i}Rh(t=>({...t,get:(e,n,s)=>io(e,n)||t.get(e,n,s),has:(e,n)=>!!io(e,n)||t.has(e,n)}));/**
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
 */class Lh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ar="@firebase/app",oo="0.11.3";/**
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
 */const lt=new Ya("@firebase/app"),Uh="@firebase/app-compat",Fh="@firebase/analytics-compat",$h="@firebase/analytics",Hh="@firebase/app-check-compat",Bh="@firebase/app-check",Vh="@firebase/auth",jh="@firebase/auth-compat",Wh="@firebase/database",Kh="@firebase/data-connect",zh="@firebase/database-compat",Gh="@firebase/functions",qh="@firebase/functions-compat",Jh="@firebase/installations",Yh="@firebase/installations-compat",Xh="@firebase/messaging",Qh="@firebase/messaging-compat",Zh="@firebase/performance",ep="@firebase/performance-compat",tp="@firebase/remote-config",np="@firebase/remote-config-compat",sp="@firebase/storage",rp="@firebase/storage-compat",ip="@firebase/firestore",op="@firebase/vertexai",ap="@firebase/firestore-compat",lp="firebase",cp="11.5.0";/**
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
 */const Pr="[DEFAULT]",up={[Ar]:"fire-core",[Uh]:"fire-core-compat",[$h]:"fire-analytics",[Fh]:"fire-analytics-compat",[Bh]:"fire-app-check",[Hh]:"fire-app-check-compat",[Vh]:"fire-auth",[jh]:"fire-auth-compat",[Wh]:"fire-rtdb",[Kh]:"fire-data-connect",[zh]:"fire-rtdb-compat",[Gh]:"fire-fn",[qh]:"fire-fn-compat",[Jh]:"fire-iid",[Yh]:"fire-iid-compat",[Xh]:"fire-fcm",[Qh]:"fire-fcm-compat",[Zh]:"fire-perf",[ep]:"fire-perf-compat",[tp]:"fire-rc",[np]:"fire-rc-compat",[sp]:"fire-gcs",[rp]:"fire-gcs-compat",[ip]:"fire-fst",[ap]:"fire-fst-compat",[op]:"fire-vertex","fire-js":"fire-js",[lp]:"fire-js-all"};/**
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
 */const Cs=new Map,dp=new Map,Rr=new Map;function ao(t,e){try{t.container.addComponent(e)}catch(n){lt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bn(t){const e=t.name;if(Rr.has(e))return lt.debug(`There were multiple attempts to register component ${e}.`),!1;Rr.set(e,t);for(const n of Cs.values())ao(n,t);for(const n of dp.values())ao(n,t);return!0}function Za(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Oe(t){return t==null?!1:t.settings!==void 0}/**
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
 */const fp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bt=new qn("app","Firebase",fp);/**
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
 */class hp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
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
 */const Yn=cp;function el(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Pr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw bt.create("bad-app-name",{appName:String(r)});if(n||(n=qa()),!n)throw bt.create("no-options");const i=Cs.get(r);if(i){if(fn(n,i.options)&&fn(s,i.config))return i;throw bt.create("duplicate-app",{appName:r})}const o=new yh(r);for(const l of Rr.values())o.addComponent(l);const a=new hp(n,s,o);return Cs.set(r,a),a}function pp(t=Pr){const e=Cs.get(t);if(!e&&t===Pr&&qa())return el();if(!e)throw bt.create("no-app",{appName:t});return e}function on(t,e,n){var s;let r=(s=up[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lt.warn(a.join(" "));return}Bn(new hn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const gp="firebase-heartbeat-database",mp=1,Vn="firebase-heartbeat-store";let ur=null;function tl(){return ur||(ur=Nh(gp,mp,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vn)}catch(n){console.warn(n)}}}}).catch(t=>{throw bt.create("idb-open",{originalErrorMessage:t.message})})),ur}async function _p(t){try{const n=(await tl()).transaction(Vn),s=await n.objectStore(Vn).get(nl(t));return await n.done,s}catch(e){if(e instanceof Ct)lt.warn(e.message);else{const n=bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lt.warn(n.message)}}}async function lo(t,e){try{const s=(await tl()).transaction(Vn,"readwrite");await s.objectStore(Vn).put(e,nl(t)),await s.done}catch(n){if(n instanceof Ct)lt.warn(n.message);else{const s=bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});lt.warn(s.message)}}}function nl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vp=1024,yp=30;class bp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ip(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=co();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>yp){const o=Ep(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){lt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=co(),{heartbeatsToSend:s,unsentEntries:r}=wp(this._heartbeatsCache.heartbeats),i=za(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return lt.warn(n),""}}}function co(){return new Date().toISOString().substring(0,10)}function wp(t,e=vp){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),uo(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),uo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ip{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ah()?lh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _p(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return lo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return lo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function uo(t){return za(JSON.stringify({version:2,heartbeats:t})).length}function Ep(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function Tp(t){Bn(new hn("platform-logger",e=>new Lh(e),"PRIVATE")),Bn(new hn("heartbeat",e=>new bp(e),"PRIVATE")),on(Ar,oo,t),on(Ar,oo,"esm2017"),on("fire-js","")}Tp("");var Sp="firebase",Cp="11.5.0";/**
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
 */on(Sp,Cp,"app");function Zr(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function sl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ap=sl,rl=new qn("auth","Firebase",sl());/**
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
 */const As=new Ya("@firebase/auth");function Pp(t,...e){As.logLevel<=J.WARN&&As.warn(`Auth (${Yn}): ${t}`,...e)}function ps(t,...e){As.logLevel<=J.ERROR&&As.error(`Auth (${Yn}): ${t}`,...e)}/**
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
 */function De(t,...e){throw ti(t,...e)}function xe(t,...e){return ti(t,...e)}function ei(t,e,n){const s=Object.assign(Object.assign({},Ap()),{[e]:n});return new qn("auth","Firebase",s).create(e,{appName:t.name})}function at(t){return ei(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rp(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&De(t,"argument-error"),ei(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ti(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return rl.create(t,...e)}function N(t,e,...n){if(!t)throw ti(e,...n)}function rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ps(e),new Error(e)}function ct(t,e){t||rt(e)}/**
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
 */function Or(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Op(){return fo()==="http:"||fo()==="https:"}function fo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function kp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Op()||rh()||"connection"in navigator)?navigator.onLine:!0}function Np(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Xn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ct(n>e,"Short delay should be less than long delay!"),this.isMobile=nh()||ih()}get(){return kp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ni(t,e){ct(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class il{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Dp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Mp=new Xn(3e4,6e4);function Pt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rt(t,e,n,s,r={}){return ol(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Jn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return sh()||(c.referrerPolicy="no-referrer"),il.fetch()(al(t,t.config.apiHost,n,a),c)})}async function ol(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Dp),e);try{const r=new xp(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ls(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ls(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ls(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ls(t,"user-disabled",o);const d=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ei(t,d,c);De(t,d)}}catch(r){if(r instanceof Ct)throw r;De(t,"network-request-failed",{message:String(r)})}}async function Qn(t,e,n,s,r={}){const i=await Rt(t,e,n,s,r);return"mfaPendingCredential"in i&&De(t,"multi-factor-auth-required",{_serverResponse:i}),i}function al(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ni(t.config,r):`${t.config.apiScheme}://${r}`}function Lp(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(xe(this.auth,"network-request-failed")),Mp.get())})}}function ls(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=xe(t,e,s);return r.customData._tokenResponse=n,r}function ho(t){return t!==void 0&&t.enterprise!==void 0}class Up{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Lp(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Fp(t,e){return Rt(t,"GET","/v2/recaptchaConfig",Pt(t,e))}/**
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
 */async function $p(t,e){return Rt(t,"POST","/v1/accounts:delete",e)}async function ll(t,e){return Rt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function kn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hp(t,e=!1){const n=At(t),s=await n.getIdToken(e),r=si(s);N(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:kn(dr(r.auth_time)),issuedAtTime:kn(dr(r.iat)),expirationTime:kn(dr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function dr(t){return Number(t)*1e3}function si(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ps("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ga(n);return r?JSON.parse(r):(ps("Failed to decode base64 JWT payload"),null)}catch(r){return ps("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function po(t){const e=si(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function jn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ct&&Bp(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Bp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Vp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kn(this.lastLoginAt),this.creationTime=kn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ps(t){var e;const n=t.auth,s=await t.getIdToken(),r=await jn(t,ll(n,{idToken:s}));N(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?cl(i.providerUserInfo):[],a=Wp(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new kr(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function jp(t){const e=At(t);await Ps(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wp(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function cl(t){return t.map(e=>{var{providerId:n}=e,s=Zr(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Kp(t,e){const n=await ol(t,{},async()=>{const s=Jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=al(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",il.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zp(t,e){return Rt(t,"POST","/v2/accounts:revokeToken",Pt(t,e))}/**
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
 */class an{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):po(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){N(e.length!==0,"internal-error");const n=po(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Kp(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new an;return s&&(N(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(N(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(N(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new an,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
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
 */function ft(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class it{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Zr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await jn(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hp(this,e)}reload(){return jp(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new it(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ps(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Oe(this.auth.app))return Promise.reject(at(this.auth));const e=await this.getIdToken();return await jn(this,$p(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,d;const p=(s=n.displayName)!==null&&s!==void 0?s:void 0,_=(r=n.email)!==null&&r!==void 0?r:void 0,I=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,O=(o=n.photoURL)!==null&&o!==void 0?o:void 0,L=(a=n.tenantId)!==null&&a!==void 0?a:void 0,te=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,U=(c=n.createdAt)!==null&&c!==void 0?c:void 0,B=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:H,emailVerified:A,isAnonymous:W,providerData:oe,stsTokenManager:le}=n;N(H&&le,e,"internal-error");const he=an.fromJSON(this.name,le);N(typeof H=="string",e,"internal-error"),ft(p,e.name),ft(_,e.name),N(typeof A=="boolean",e,"internal-error"),N(typeof W=="boolean",e,"internal-error"),ft(I,e.name),ft(O,e.name),ft(L,e.name),ft(te,e.name),ft(U,e.name),ft(B,e.name);const x=new it({uid:H,auth:e,email:_,emailVerified:A,displayName:p,isAnonymous:W,photoURL:O,phoneNumber:I,tenantId:L,stsTokenManager:he,createdAt:U,lastLoginAt:B});return oe&&Array.isArray(oe)&&(x.providerData=oe.map(V=>Object.assign({},V))),te&&(x._redirectEventId=te),x}static async _fromIdTokenResponse(e,n,s=!1){const r=new an;r.updateFromServerResponse(n);const i=new it({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ps(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];N(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?cl(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new an;a.updateFromIdToken(s);const l=new it({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new kr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
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
 */const go=new Map;function ot(t){ct(t instanceof Function,"Expected a class definition");let e=go.get(t);return e?(ct(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,go.set(t,e),e)}/**
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
 */class ul{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ul.type="NONE";const mo=ul;/**
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
 */function gs(t,e,n){return`firebase:${t}:${e}:${n}`}class ln{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=gs(this.userKey,r.apiKey,i),this.fullPersistenceKey=gs("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?it._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ln(ot(mo),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||ot(mo);const o=gs(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const p=it._fromJSON(e,d);c!==i&&(a=p),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ln(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new ln(i,e,s))}}/**
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
 */function _o(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ml(e))return"Blackberry";if(_l(e))return"Webos";if(fl(e))return"Safari";if((e.includes("chrome/")||hl(e))&&!e.includes("edge/"))return"Chrome";if(gl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function dl(t=ye()){return/firefox\//i.test(t)}function fl(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hl(t=ye()){return/crios\//i.test(t)}function pl(t=ye()){return/iemobile/i.test(t)}function gl(t=ye()){return/android/i.test(t)}function ml(t=ye()){return/blackberry/i.test(t)}function _l(t=ye()){return/webos/i.test(t)}function ri(t=ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gp(t=ye()){var e;return ri(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qp(){return oh()&&document.documentMode===10}function vl(t=ye()){return ri(t)||gl(t)||_l(t)||ml(t)||/windows phone/i.test(t)||pl(t)}/**
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
 */function yl(t,e=[]){let n;switch(t){case"Browser":n=_o(ye());break;case"Worker":n=`${_o(ye())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yn}/${s}`}/**
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
 */class Jp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Yp(t,e={}){return Rt(t,"GET","/v2/passwordPolicy",Pt(t,e))}/**
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
 */const Xp=6;class Qp{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Xp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Zp{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vo(this),this.idTokenSubscription=new vo(this),this.beforeStateQueue=new Jp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ot(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ln.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ll(this,{idToken:e}),s=await it._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Oe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ps(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Np()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Oe(this.app))return Promise.reject(at(this));const n=e?At(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Oe(this.app)?Promise.reject(at(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Oe(this.app)?Promise.reject(at(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yp(this),n=new Qp(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await zp(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ot(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await ln.create(this,[ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Pp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ot(t){return At(t)}class vo{constructor(e){this.auth=e,this.observer=null,this.addObserver=hh(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ws={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eg(t){Ws=t}function bl(t){return Ws.loadJS(t)}function tg(){return Ws.recaptchaEnterpriseScript}function ng(){return Ws.gapiScript}function sg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class rg{constructor(){this.enterprise=new ig}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ig{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const og="recaptcha-enterprise",wl="NO_RECAPTCHA";class ag{constructor(e){this.type=og,this.auth=Ot(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Fp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Up(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;ho(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(wl)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new rg().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&ho(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=tg();l.length!==0&&(l+=a),bl(l).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function yo(t,e,n,s=!1,r=!1){const i=new ag(t);let o;if(r)o=wl;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Nr(t,e,n,s,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await yo(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await yo(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
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
 */function lg(t,e){const n=Za(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(fn(i,e??{}))return r;De(r,"already-initialized")}return n.initialize({options:e})}function cg(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ug(t,e,n){const s=Ot(t);N(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Il(e),{host:o,port:a}=dg(e),l=a===null?"":`:${a}`,c={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){N(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),N(fn(c,s.config.emulator)&&fn(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=c,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,fg()}function Il(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dg(t){const e=Il(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:bo(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:bo(o)}}}function bo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ii{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,n){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}}async function hg(t,e){return Rt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function pg(t,e){return Qn(t,"POST","/v1/accounts:signInWithPassword",Pt(t,e))}/**
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
 */async function gg(t,e){return Qn(t,"POST","/v1/accounts:signInWithEmailLink",Pt(t,e))}async function mg(t,e){return Qn(t,"POST","/v1/accounts:signInWithEmailLink",Pt(t,e))}/**
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
 */class Wn extends ii{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Wn(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Wn(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nr(e,n,"signInWithPassword",pg);case"emailLink":return gg(e,{email:this._email,oobCode:this._password});default:De(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nr(e,s,"signUpPassword",hg);case"emailLink":return mg(e,{idToken:n,email:this._email,oobCode:this._password});default:De(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function cn(t,e){return Qn(t,"POST","/v1/accounts:signInWithIdp",Pt(t,e))}/**
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
 */const _g="http://localhost";class zt extends ii{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):De("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Zr(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new zt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,cn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cn(e,n)}buildRequest(){const e={requestUri:_g,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jn(n)}return e}}/**
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
 */function vg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yg(t){const e=En(Tn(t)).link,n=e?En(Tn(e)).deep_link_id:null,s=En(Tn(t)).deep_link_id;return(s?En(Tn(s)).link:null)||s||n||e||t}class oi{constructor(e){var n,s,r,i,o,a;const l=En(Tn(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(s=l.oobCode)!==null&&s!==void 0?s:null,p=vg((r=l.mode)!==null&&r!==void 0?r:null);N(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=yg(e);try{return new oi(n)}catch{return null}}}/**
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
 */class mn{constructor(){this.providerId=mn.PROVIDER_ID}static credential(e,n){return Wn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=oi.parseLink(n);return N(s,"argument-error"),Wn._fromEmailAndCode(e,s.code,s.tenantId)}}mn.PROVIDER_ID="password";mn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ai{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zn extends ai{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mt extends Zn{constructor(){super("facebook.com")}static credential(e){return zt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
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
 */class st extends Zn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return st.credential(n,s)}catch{return null}}}st.GOOGLE_SIGN_IN_METHOD="google.com";st.PROVIDER_ID="google.com";/**
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
 */class _t extends Zn{constructor(){super("github.com")}static credential(e){return zt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
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
 */class vt extends Zn{constructor(){super("twitter.com")}static credential(e,n){return zt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return vt.credential(n,s)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
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
 */async function bg(t,e){return Qn(t,"POST","/v1/accounts:signUp",Pt(t,e))}/**
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
 */class Gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await it._fromIdTokenResponse(e,s,r),o=wo(s);return new Gt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=wo(s);return new Gt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function wo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Rs extends Ct{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Rs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Rs(e,n,s,r)}}function El(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Rs._fromErrorAndOperation(t,i,e,s):i})}async function wg(t,e,n=!1){const s=await jn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gt._forOperation(t,"link",s)}/**
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
 */async function Ig(t,e,n=!1){const{auth:s}=t;if(Oe(s.app))return Promise.reject(at(s));const r="reauthenticate";try{const i=await jn(t,El(s,r,e,t),n);N(i.idToken,s,"internal-error");const o=si(i.idToken);N(o,s,"internal-error");const{sub:a}=o;return N(t.uid===a,s,"user-mismatch"),Gt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&De(s,"user-mismatch"),i}}/**
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
 */async function Tl(t,e,n=!1){if(Oe(t.app))return Promise.reject(at(t));const s="signIn",r=await El(t,s,e),i=await Gt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Eg(t,e){return Tl(Ot(t),e)}/**
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
 */async function Sl(t){const e=Ot(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Tg(t,e,n){if(Oe(t.app))return Promise.reject(at(t));const s=Ot(t),o=await Nr(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",bg).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Sl(t),l}),a=await Gt._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function Sg(t,e,n){return Oe(t.app)?Promise.reject(at(t)):Eg(At(t),mn.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Sl(t),s})}function Cg(t,e,n,s){return At(t).onIdTokenChanged(e,n,s)}function Ag(t,e,n){return At(t).beforeAuthStateChanged(e,n)}function Pg(t,e,n,s){return At(t).onAuthStateChanged(e,n,s)}const Os="__sak";/**
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
 */class Cl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Os,"1"),this.storage.removeItem(Os),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Rg=1e3,Og=10;class Al extends Cl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);qp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Og):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Rg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Al.type="LOCAL";const kg=Al;/**
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
 */class Pl extends Cl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pl.type="SESSION";const Rl=Pl;/**
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
 */function Ng(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ks{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ks(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await Ng(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ks.receivers=[];/**
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
 */function li(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Dg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=li("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(p){const _=p;if(_.data.eventId===c)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(_.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ge(){return window}function Mg(t){Ge().location.href=t}/**
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
 */function Ol(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function Lg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ug(){return Ol()?self:null}/**
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
 */const kl="firebaseLocalStorageDb",Fg=1,ks="firebaseLocalStorage",Nl="fbase_key";class es{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zs(t,e){return t.transaction([ks],e?"readwrite":"readonly").objectStore(ks)}function $g(){const t=indexedDB.deleteDatabase(kl);return new es(t).toPromise()}function Dr(){const t=indexedDB.open(kl,Fg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ks,{keyPath:Nl})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ks)?e(s):(s.close(),await $g(),e(await Dr()))})})}async function Io(t,e,n){const s=zs(t,!0).put({[Nl]:e,value:n});return new es(s).toPromise()}async function Hg(t,e){const n=zs(t,!1).get(e),s=await new es(n).toPromise();return s===void 0?null:s.value}function Eo(t,e){const n=zs(t,!0).delete(e);return new es(n).toPromise()}const Bg=800,Vg=3;class Dl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Vg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ol()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ks._getInstance(Ug()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Lg(),!this.activeServiceWorker)return;this.sender=new Dg(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dr();return await Io(e,Os,"1"),await Eo(e,Os),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Io(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Hg(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Eo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=zs(r,!1).getAll();return new es(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dl.type="LOCAL";const jg=Dl;new Xn(3e4,6e4);/**
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
 */function Ml(t,e){return e?ot(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ci extends ii{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Wg(t){return Tl(t.auth,new ci(t),t.bypassAuthState)}function Kg(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),Ig(n,new ci(t),t.bypassAuthState)}async function zg(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),wg(n,new ci(t),t.bypassAuthState)}/**
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
 */class Ll{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wg;case"linkViaPopup":case"linkViaRedirect":return zg;case"reauthViaPopup":case"reauthViaRedirect":return Kg;default:De(this.auth,"internal-error")}}resolve(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gg=new Xn(2e3,1e4);async function xl(t,e,n){if(Oe(t.app))return Promise.reject(xe(t,"operation-not-supported-in-this-environment"));const s=Ot(t);Rp(t,e,ai);const r=Ml(s,n);return new Ht(s,"signInViaPopup",e,r).executeNotNull()}class Ht extends Ll{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ht.currentPopupAction&&Ht.currentPopupAction.cancel(),Ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const e=li();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gg.get())};e()}}Ht.currentPopupAction=null;/**
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
 */const qg="pendingRedirect",ms=new Map;class Jg extends Ll{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ms.get(this.auth._key());if(!e){try{const s=await Yg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ms.set(this.auth._key(),e)}return this.bypassAuthState||ms.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yg(t,e){const n=Zg(e),s=Qg(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Xg(t,e){ms.set(t._key(),e)}function Qg(t){return ot(t._redirectPersistence)}function Zg(t){return gs(qg,t.config.apiKey,t.name)}async function em(t,e,n=!1){if(Oe(t.app))return Promise.reject(at(t));const s=Ot(t),r=Ml(s,e),o=await new Jg(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const tm=10*60*1e3;class nm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ul(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(xe(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tm&&this.cachedEventUids.clear(),this.cachedEventUids.has(To(e))}saveEventToCache(e){this.cachedEventUids.add(To(e)),this.lastProcessedEventTime=Date.now()}}function To(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ul({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ul(t);default:return!1}}/**
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
 */async function rm(t,e={}){return Rt(t,"GET","/v1/projects",e)}/**
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
 */const im=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,om=/^https?/;async function am(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rm(t);for(const n of e)try{if(lm(n))return}catch{}De(t,"unauthorized-domain")}function lm(t){const e=Or(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!om.test(n))return!1;if(im.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const cm=new Xn(3e4,6e4);function So(){const t=Ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function um(t){return new Promise((e,n)=>{var s,r,i;function o(){So(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{So(),n(xe(t,"network-request-failed"))},timeout:cm.get()})}if(!((r=(s=Ge().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ge().gapi)===null||i===void 0)&&i.load)o();else{const a=sg("iframefcb");return Ge()[a]=()=>{gapi.load?o():n(xe(t,"network-request-failed"))},bl(`${ng()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw _s=null,e})}let _s=null;function dm(t){return _s=_s||um(t),_s}/**
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
 */const fm=new Xn(5e3,15e3),hm="__/auth/iframe",pm="emulator/auth/iframe",gm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _m(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ni(e,pm):`https://${t.config.authDomain}/${hm}`,s={apiKey:e.apiKey,appName:t.name,v:Yn},r=mm.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Jn(s).slice(1)}`}async function vm(t){const e=await dm(t),n=Ge().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:_m(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gm,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=xe(t,"network-request-failed"),a=Ge().setTimeout(()=>{i(o)},fm.get());function l(){Ge().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const ym={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bm=500,wm=600,Im="_blank",Em="http://localhost";class Co{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tm(t,e,n,s=bm,r=wm){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ym),{width:s.toString(),height:r.toString(),top:i,left:o}),c=ye().toLowerCase();n&&(a=hl(c)?Im:n),dl(c)&&(e=e||Em,l.scrollbars="yes");const d=Object.entries(l).reduce((_,[I,O])=>`${_}${I}=${O},`,"");if(Gp(c)&&a!=="_self")return Sm(e||"",a),new Co(null);const p=window.open(e||"",a,d);N(p,t,"popup-blocked");try{p.focus()}catch{}return new Co(p)}function Sm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Cm="__/auth/handler",Am="emulator/auth/handler",Pm=encodeURIComponent("fac");async function Ao(t,e,n,s,r,i){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Yn,eventId:r};if(e instanceof ai){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Zn){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${Pm}=${encodeURIComponent(l)}`:"";return`${Rm(t)}?${Jn(a).slice(1)}${c}`}function Rm({config:t}){return t.emulator?ni(t,Am):`https://${t.authDomain}/${Cm}`}/**
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
 */const fr="webStorageSupport";class Om{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rl,this._completeRedirectFn=em,this._overrideRedirectResult=Xg}async _openPopup(e,n,s,r){var i;ct((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ao(e,n,s,Or(),r);return Tm(e,o,li())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Ao(e,n,s,Or(),r);return Mg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ct(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await vm(e),s=new nm(e);return n.register("authEvent",r=>(N(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fr,{type:fr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[fr];o!==void 0&&n(!!o),De(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=am(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vl()||fl()||ri()}}const km=Om;var Po="@firebase/auth",Ro="1.9.1";/**
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
 */class Nm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Dm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Mm(t){Bn(new hn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yl(t)},c=new Zp(s,r,i,l);return cg(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Bn(new hn("auth-internal",e=>{const n=Ot(e.getProvider("auth").getImmediate());return(s=>new Nm(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(Po,Ro,Dm(t)),on(Po,Ro,"esm2017")}/**
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
 */const Lm=5*60,xm=Ja("authIdTokenMaxAge")||Lm;let Oo=null;const Um=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>xm)return;const r=n==null?void 0:n.token;Oo!==r&&(Oo=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Fm(t=pp()){const e=Za(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lg(t,{popupRedirectResolver:km,persistence:[jg,kg,Rl]}),s=Ja("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Um(i.toString());Ag(n,o,()=>o(n.currentUser)),Cg(n,a=>o(a))}}const r=eh("auth");return r&&ug(n,`http://${r}`),n}function $m(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}eg({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=xe("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",$m().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Mm("Browser");const Hm={apiKey:"AIzaSyDJlhGnVXf0AluCLE4k2TAONZMHaeOHrjw",authDomain:"trip-8dd24.firebaseapp.com",projectId:"trip-8dd24",storageBucket:"trip-8dd24.firebasestorage.app",messagingSenderId:"1073086034344",appId:"1:1073086034344:web:3e95b33869e7722346ed9d"},Bm=el(Hm),pn=Fm(Bm),ui=new st;ui.setCustomParameters({prompt:"select_account"});const Fl="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%234285F4'%20d='M22.56%2012.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26%201.37-1.04%202.53-2.21%203.31v2.77h3.57c2.08-1.92%203.28-4.74%203.28-8.09z'/%3e%3cpath%20fill='%2334A853'%20d='M12%2023c2.97%200%205.46-.98%207.28-2.66l-3.57-2.77c-.98.66-2.23%201.06-3.71%201.06-2.86%200-5.29-1.93-6.16-4.53H2.18v2.84C3.99%2020.53%207.7%2023%2012%2023z'/%3e%3cpath%20fill='%23FBBC05'%20d='M5.84%2014.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43%208.55%201%2010.22%201%2012s.43%203.45%201.18%204.93l2.85-2.22.81-.62z'/%3e%3cpath%20fill='%23EA4335'%20d='M12%205.38c1.62%200%203.06.56%204.21%201.64l3.15-3.15C17.45%202.09%2014.97%201%2012%201%207.7%201%203.99%203.47%202.18%207.07l3.66%202.84c.87-2.6%203.3-4.53%206.16-4.53z'/%3e%3cpath%20fill='none'%20d='M1%201h22v22H1z'/%3e%3c/svg%3e",Vm={data(){return{email:"",password:"",error:""}},methods:{async login(){try{await Sg(pn,this.email,this.password),this.$emit("login-success")}catch{this.error="Invalid email or password"}},async loginWithGoogle(){try{await xl(pn,ui),this.$emit("login-success")}catch{this.error="Google login failed"}}}},jm={class:"auth-container"},Wm={class:"auth-card"},Km={class:"form-group"},zm={class:"form-group"},Gm={class:"switch-auth"};function qm(t,e,n,s,r,i){return F(),G("div",jm,[h("div",Wm,[e[10]||(e[10]=h("div",{class:"auth-header"},[h("h2",null,"Welcome Back"),h("p",{class:"subtitle"},"Login to continue planning your trip")],-1)),h("form",{onSubmit:e[2]||(e[2]=rn((...o)=>i.login&&i.login(...o),["prevent"])),class:"auth-form"},[h("div",Km,[e[5]||(e[5]=h("label",{for:"email"},"Email",-1)),Ke(h("input",{id:"email","onUpdate:modelValue":e[0]||(e[0]=o=>r.email=o),type:"email",placeholder:"your@email.com",required:"",class:"form-input"},null,512),[[Hn,r.email]])]),h("div",zm,[e[6]||(e[6]=h("label",{for:"password"},"Password",-1)),Ke(h("input",{id:"password","onUpdate:modelValue":e[1]||(e[1]=o=>r.password=o),type:"password",placeholder:"••••••••",required:"",class:"form-input"},null,512),[[Hn,r.password]])]),e[7]||(e[7]=h("button",{type:"submit",class:"auth-button"},"Login",-1))],32),e[11]||(e[11]=h("div",{class:"divider"},[h("span",{class:"divider-line"}),h("span",{class:"divider-text"},"or"),h("span",{class:"divider-line"})],-1)),h("button",{onClick:e[3]||(e[3]=(...o)=>i.loginWithGoogle&&i.loginWithGoogle(...o)),class:"google-button"},e[8]||(e[8]=[h("img",{src:Fl,alt:"Google",class:"google-icon"},null,-1),Kt(" Continue with Google ")])),h("p",Gm,[e[9]||(e[9]=Kt(" Don't have an account? ")),h("a",{onClick:e[4]||(e[4]=o=>t.$emit("switch-view")),class:"switch-link"},"Sign up")])])])}const Jm=St(Vm,[["render",qm],["__scopeId","data-v-5652c2a4"]]),Ym={data(){return{email:"",password:"",confirmPassword:"",error:"",loading:!1,showPassword:!1,showConfirmPassword:!1}},methods:{async signup(){if(this.error="",!this.email||!this.password||!this.confirmPassword){this.error="Please fill in all fields";return}if(this.password!==this.confirmPassword){this.error="Passwords don't match";return}if(this.password.length<6){this.error="Password must be at least 6 characters";return}this.loading=!0;try{await Tg(pn,this.email,this.password),this.$emit("signup-success")}catch(t){this.error=this.getErrorMessage(t.code)}finally{this.loading=!1}},async signupWithGoogle(){try{await xl(pn,ui),this.$emit("signup-success")}catch(t){this.error=this.getErrorMessage(t.code)}},getErrorMessage(t){const e={"auth/email-already-in-use":"Email already in use","auth/invalid-email":"Please enter a valid email address","auth/weak-password":"Password must be at least 6 characters","auth/popup-closed-by-user":"Sign up cancelled",default:"Sign up failed. Please try again."};return e[t]||e.default}}},Xm={class:"signup-container"},Qm={class:"signup-card"},Zm={class:"form-group"},e_={class:"form-group"},t_={class:"password-input-container"},n_=["type"],s_={class:"form-group"},r_={class:"password-input-container"},i_=["type"],o_=["disabled"],a_={key:0},l_={key:1,class:"spinner"},c_={key:0,class:"error-message"},u_={class:"login-link"};function d_(t,e,n,s,r,i){return F(),G("div",Xm,[h("div",Qm,[e[14]||(e[14]=h("div",{class:"signup-header"},[h("h2",null,"Create Account"),h("p",{class:"subtitle"},"Start planning your perfect trip today")],-1)),h("form",{onSubmit:e[6]||(e[6]=rn((...o)=>i.signup&&i.signup(...o),["prevent"])),class:"signup-form"},[h("div",Zm,[e[9]||(e[9]=h("label",{for:"email"},"Email",-1)),Ke(h("input",{id:"email","onUpdate:modelValue":e[0]||(e[0]=o=>r.email=o),type:"email",placeholder:"your@email.com",required:"",class:"form-input"},null,512),[[Hn,r.email]])]),h("div",e_,[e[10]||(e[10]=h("label",{for:"password"},"Password",-1)),h("div",t_,[Ke(h("input",{id:"password","onUpdate:modelValue":e[1]||(e[1]=o=>r.password=o),type:r.showPassword?"text":"password",placeholder:"••••••••",required:"",class:"form-input"},null,8,n_),[[Zi,r.password]]),h("button",{onClick:e[2]||(e[2]=rn(o=>r.showPassword=!r.showPassword,["prevent"])),class:"toggle-password",type:"button"},q(r.showPassword?"👁️":"👁️‍🗨️"),1)])]),h("div",s_,[e[11]||(e[11]=h("label",{for:"confirmPassword"},"Confirm Password",-1)),h("div",r_,[Ke(h("input",{id:"confirmPassword","onUpdate:modelValue":e[3]||(e[3]=o=>r.confirmPassword=o),type:r.showConfirmPassword?"text":"password",placeholder:"••••••••",required:"",class:"form-input"},null,8,i_),[[Zi,r.confirmPassword]]),h("button",{onClick:e[4]||(e[4]=rn(o=>r.showConfirmPassword=!r.showConfirmPassword,["prevent"])),class:"toggle-password",type:"button"},q(r.showConfirmPassword?"👁️":"👁️‍🗨️"),1)])]),h("button",{type:"submit",class:"signup-button",disabled:r.loading},[r.loading?(F(),G("span",l_)):(F(),G("span",a_,"Sign Up"))],8,o_),r.error?(F(),G("div",c_,[h("p",null,q(r.error),1),h("button",{onClick:e[5]||(e[5]=o=>r.error=""),class:"dismiss-error"},"×")])):Un("",!0)],32),e[15]||(e[15]=h("div",{class:"divider"},[h("span",{class:"divider-line"}),h("span",{class:"divider-text"},"or"),h("span",{class:"divider-line"})],-1)),h("button",{onClick:e[7]||(e[7]=(...o)=>i.signupWithGoogle&&i.signupWithGoogle(...o)),class:"google-button"},e[12]||(e[12]=[h("img",{src:Fl,alt:"Google",class:"google-icon"},null,-1),Kt(" Continue with Google ")])),h("p",u_,[e[13]||(e[13]=Kt(" Already have an account? ")),h("a",{onClick:e[8]||(e[8]=o=>t.$emit("switch-view")),class:"login-text"},"Login")])])])}const f_=St(Ym,[["render",d_],["__scopeId","data-v-6a91fbe3"]]),h_={components:{Header:Rd,Home:Gd,TripGenerator:Bf,Footer:Kf,Login:Jm,Signup:f_},data(){return{user:null,authView:"login",showAuth:!1}},computed:{shouldShowHome(){return!this.user&&!this.showAuth}},created(){Pg(pn,t=>{this.user=t,t||(this.showAuth=!1)})},methods:{handleShowAuth(){this.showAuth=!0,this.authView="login"},closeAuth(){this.showAuth=!1},switchToSignup(){this.authView="signup"},switchToLogin(){this.authView="login"},handleAuthSuccess(){this.user=pn.currentUser,this.showAuth=!1},handleLogout(){this.user=null,this.authView="login",this.showAuth=!1},handleUnplannedTrip(){this.handleShowAuth()}}},p_={class:"travel-planner-app"},g_={class:"main-content"},m_={key:1};function __(t,e,n,s,r,i){const o=Ze("Header"),a=Ze("Home"),l=Ze("Login"),c=Ze("Signup"),d=Ze("TripGenerator"),p=Ze("Footer");return F(),G("div",p_,[se(o,{user:r.user,onShowAuth:i.handleShowAuth,onLogout:i.handleLogout},null,8,["user","onShowAuth","onLogout"]),h("main",g_,[i.shouldShowHome?(F(),Qt(a,{key:0,onShowAuth:i.handleShowAuth,onSelectUnplanned:i.handleUnplannedTrip},null,8,["onShowAuth","onSelectUnplanned"])):r.showAuth?(F(),G("div",m_,[se(Ku,{name:"fade",mode:"out-in"},{default:qr(()=>[r.authView==="login"?(F(),Qt(l,{key:0,onLoginSuccess:i.handleAuthSuccess,onSwitchView:i.switchToSignup,onClose:i.closeAuth},null,8,["onLoginSuccess","onSwitchView","onClose"])):(F(),Qt(c,{key:1,onSignupSuccess:i.handleAuthSuccess,onSwitchView:i.switchToLogin,onClose:i.closeAuth},null,8,["onSignupSuccess","onSwitchView","onClose"]))]),_:1})])):r.user?(F(),Qt(d,{key:2})):Un("",!0)]),se(p)])}const v_=St(h_,[["render",__]]),y_=yd(v_);y_.mount("#app");
