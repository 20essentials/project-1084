(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Gf={exports:{}},Ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function uS(){if(a_)return Ao;a_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Ao.Fragment=t,Ao.jsx=i,Ao.jsxs=i,Ao}var r_;function fS(){return r_||(r_=1,Gf.exports=uS()),Gf.exports}var ci=fS(),Vf={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function dS(){if(s_)return le;s_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function y(U,J,gt){this.props=U,this.context=J,this.refs=w,this.updater=gt||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function B(U,J,gt){this.props=U,this.context=J,this.refs=w,this.updater=gt||M}var O=B.prototype=new _;O.constructor=B,T(O,y.prototype),O.isPureReactComponent=!0;var D=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function H(U,J,gt,dt,Y,ht){return gt=ht.ref,{$$typeof:s,type:U,key:J,ref:gt!==void 0?gt:null,props:ht}}function F(U,J){return H(U.type,J,void 0,void 0,void 0,U.props)}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function R(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(gt){return J[gt]})}var k=/\/+/g;function ot(U,J){return typeof U=="object"&&U!==null&&U.key!=null?R(""+U.key):J.toString(36)}function K(){}function ut(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(K,K):(U.status="pending",U.then(function(J){U.status==="pending"&&(U.status="fulfilled",U.value=J)},function(J){U.status==="pending"&&(U.status="rejected",U.reason=J)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function lt(U,J,gt,dt,Y){var ht=typeof U;(ht==="undefined"||ht==="boolean")&&(U=null);var Mt=!1;if(U===null)Mt=!0;else switch(ht){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(U.$$typeof){case s:case t:Mt=!0;break;case g:return Mt=U._init,lt(Mt(U._payload),J,gt,dt,Y)}}if(Mt)return Y=Y(U),Mt=dt===""?"."+ot(U,0):dt,D(Y)?(gt="",Mt!=null&&(gt=Mt.replace(k,"$&/")+"/"),lt(Y,J,gt,"",function(Zt){return Zt})):Y!=null&&(C(Y)&&(Y=F(Y,gt+(Y.key==null||U&&U.key===Y.key?"":(""+Y.key).replace(k,"$&/")+"/")+Mt)),J.push(Y)),1;Mt=0;var ct=dt===""?".":dt+":";if(D(U))for(var At=0;At<U.length;At++)dt=U[At],ht=ct+ot(dt,At),Mt+=lt(dt,J,gt,ht,Y);else if(At=x(U),typeof At=="function")for(U=At.call(U),At=0;!(dt=U.next()).done;)dt=dt.value,ht=ct+ot(dt,At++),Mt+=lt(dt,J,gt,ht,Y);else if(ht==="object"){if(typeof U.then=="function")return lt(ut(U),J,gt,dt,Y);throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function L(U,J,gt){if(U==null)return U;var dt=[],Y=0;return lt(U,dt,"","",function(ht){return J.call(gt,ht,Y++)}),dt}function q(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(gt){(U._status===0||U._status===-1)&&(U._status=1,U._result=gt)},function(gt){(U._status===0||U._status===-1)&&(U._status=2,U._result=gt)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var z=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function yt(){}return le.Children={map:L,forEach:function(U,J,gt){L(U,function(){J.apply(this,arguments)},gt)},count:function(U){var J=0;return L(U,function(){J++}),J},toArray:function(U){return L(U,function(J){return J})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},le.Component=y,le.Fragment=i,le.Profiler=l,le.PureComponent=B,le.StrictMode=r,le.Suspense=p,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,le.__COMPILER_RUNTIME={__proto__:null,c:function(U){return G.H.useMemoCache(U)}},le.cache=function(U){return function(){return U.apply(null,arguments)}},le.cloneElement=function(U,J,gt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var dt=T({},U.props),Y=U.key,ht=void 0;if(J!=null)for(Mt in J.ref!==void 0&&(ht=void 0),J.key!==void 0&&(Y=""+J.key),J)!I.call(J,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&J.ref===void 0||(dt[Mt]=J[Mt]);var Mt=arguments.length-2;if(Mt===1)dt.children=gt;else if(1<Mt){for(var ct=Array(Mt),At=0;At<Mt;At++)ct[At]=arguments[At+2];dt.children=ct}return H(U.type,Y,void 0,void 0,ht,dt)},le.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},le.createElement=function(U,J,gt){var dt,Y={},ht=null;if(J!=null)for(dt in J.key!==void 0&&(ht=""+J.key),J)I.call(J,dt)&&dt!=="key"&&dt!=="__self"&&dt!=="__source"&&(Y[dt]=J[dt]);var Mt=arguments.length-2;if(Mt===1)Y.children=gt;else if(1<Mt){for(var ct=Array(Mt),At=0;At<Mt;At++)ct[At]=arguments[At+2];Y.children=ct}if(U&&U.defaultProps)for(dt in Mt=U.defaultProps,Mt)Y[dt]===void 0&&(Y[dt]=Mt[dt]);return H(U,ht,void 0,void 0,null,Y)},le.createRef=function(){return{current:null}},le.forwardRef=function(U){return{$$typeof:h,render:U}},le.isValidElement=C,le.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:q}},le.memo=function(U,J){return{$$typeof:m,type:U,compare:J===void 0?null:J}},le.startTransition=function(U){var J=G.T,gt={};G.T=gt;try{var dt=U(),Y=G.S;Y!==null&&Y(gt,dt),typeof dt=="object"&&dt!==null&&typeof dt.then=="function"&&dt.then(yt,z)}catch(ht){z(ht)}finally{G.T=J}},le.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},le.use=function(U){return G.H.use(U)},le.useActionState=function(U,J,gt){return G.H.useActionState(U,J,gt)},le.useCallback=function(U,J){return G.H.useCallback(U,J)},le.useContext=function(U){return G.H.useContext(U)},le.useDebugValue=function(){},le.useDeferredValue=function(U,J){return G.H.useDeferredValue(U,J)},le.useEffect=function(U,J,gt){var dt=G.H;if(typeof gt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return dt.useEffect(U,J)},le.useId=function(){return G.H.useId()},le.useImperativeHandle=function(U,J,gt){return G.H.useImperativeHandle(U,J,gt)},le.useInsertionEffect=function(U,J){return G.H.useInsertionEffect(U,J)},le.useLayoutEffect=function(U,J){return G.H.useLayoutEffect(U,J)},le.useMemo=function(U,J){return G.H.useMemo(U,J)},le.useOptimistic=function(U,J){return G.H.useOptimistic(U,J)},le.useReducer=function(U,J,gt){return G.H.useReducer(U,J,gt)},le.useRef=function(U){return G.H.useRef(U)},le.useState=function(U){return G.H.useState(U)},le.useSyncExternalStore=function(U,J,gt){return G.H.useSyncExternalStore(U,J,gt)},le.useTransition=function(){return G.H.useTransition()},le.version="19.1.0",le}var o_;function vh(){return o_||(o_=1,Vf.exports=dS()),Vf.exports}var Ai=vh(),kf={exports:{}},Ro={},Xf={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function hS(){return l_||(l_=1,function(s){function t(L,q){var z=L.length;L.push(q);t:for(;0<z;){var yt=z-1>>>1,U=L[yt];if(0<l(U,q))L[yt]=q,L[z]=U,z=yt;else break t}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var q=L[0],z=L.pop();if(z!==q){L[0]=z;t:for(var yt=0,U=L.length,J=U>>>1;yt<J;){var gt=2*(yt+1)-1,dt=L[gt],Y=gt+1,ht=L[Y];if(0>l(dt,z))Y<U&&0>l(ht,dt)?(L[yt]=ht,L[Y]=z,yt=Y):(L[yt]=dt,L[gt]=z,yt=gt);else if(Y<U&&0>l(ht,z))L[yt]=ht,L[Y]=z,yt=Y;else break t}}return q}function l(L,q){var z=L.sortIndex-q.sortIndex;return z!==0?z:L.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var p=[],m=[],g=1,v=null,x=3,M=!1,T=!1,w=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(L){for(var q=i(m);q!==null;){if(q.callback===null)r(m);else if(q.startTime<=L)r(m),q.sortIndex=q.expirationTime,t(p,q);else break;q=i(m)}}function G(L){if(w=!1,D(L),!T)if(i(p)!==null)T=!0,I||(I=!0,ot());else{var q=i(m);q!==null&&lt(G,q.startTime-L)}}var I=!1,H=-1,F=5,C=-1;function R(){return y?!0:!(s.unstable_now()-C<F)}function k(){if(y=!1,I){var L=s.unstable_now();C=L;var q=!0;try{t:{T=!1,w&&(w=!1,B(H),H=-1),M=!0;var z=x;try{e:{for(D(L),v=i(p);v!==null&&!(v.expirationTime>L&&R());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,x=v.priorityLevel;var U=yt(v.expirationTime<=L);if(L=s.unstable_now(),typeof U=="function"){v.callback=U,D(L),q=!0;break e}v===i(p)&&r(p),D(L)}else r(p);v=i(p)}if(v!==null)q=!0;else{var J=i(m);J!==null&&lt(G,J.startTime-L),q=!1}}break t}finally{v=null,x=z,M=!1}q=void 0}}finally{q?ot():I=!1}}}var ot;if(typeof O=="function")ot=function(){O(k)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ut=K.port2;K.port1.onmessage=k,ot=function(){ut.postMessage(null)}}else ot=function(){_(k,0)};function lt(L,q){H=_(function(){L(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(L){L.callback=null},s.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<L?Math.floor(1e3/L):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(L){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var z=x;x=q;try{return L()}finally{x=z}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var z=x;x=L;try{return q()}finally{x=z}},s.unstable_scheduleCallback=function(L,q,z){var yt=s.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?yt+z:yt):z=yt,L){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=z+U,L={id:g++,callback:q,priorityLevel:L,startTime:z,expirationTime:U,sortIndex:-1},z>yt?(L.sortIndex=z,t(m,L),i(p)===null&&L===i(m)&&(w?(B(H),H=-1):w=!0,lt(G,z-yt))):(L.sortIndex=U,t(p,L),T||M||(T=!0,I||(I=!0,ot()))),L},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(L){var q=x;return function(){var z=x;x=q;try{return L.apply(this,arguments)}finally{x=z}}}}(Wf)),Wf}var c_;function pS(){return c_||(c_=1,Xf.exports=hS()),Xf.exports}var qf={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function mS(){if(u_)return Cn;u_=1;var s=vh();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(p,m,null,g)},Cn.flushSync=function(p){var m=d.T,g=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=m,r.p=g,r.d.f()}},Cn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Cn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Cn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=h(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Cn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Cn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=h(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Cn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Cn.requestFormReset=function(p){r.d.r(p)},Cn.unstable_batchedUpdates=function(p,m){return p(m)},Cn.useFormState=function(p,m,g){return d.H.useFormState(p,m,g)},Cn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var f_;function gS(){if(f_)return qf.exports;f_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),qf.exports=mS(),qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function _S(){if(d_)return Ro;d_=1;var s=pS(),t=vh(),i=gS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),e;if(f===o)return h(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var S=!1,b=c.child;b;){if(b===a){S=!0,a=c,o=f;break}if(b===o){S=!0,o=c,a=f;break}b=b.sibling}if(!S){for(b=f.child;b;){if(b===a){S=!0,a=f,o=c;break}if(b===o){S=!0,o=f,a=c;break}b=b.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function ot(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var K=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===K?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case y:return"Profiler";case w:return"StrictMode";case G:return"Suspense";case I:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case O:return(e.displayName||"Context")+".Provider";case B:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:ut(e.type)||"Memo";case F:n=e._payload,e=e._init;try{return ut(e(n))}catch{}}return null}var lt=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},yt=[],U=-1;function J(e){return{current:e}}function gt(e){0>U||(e.current=yt[U],yt[U]=null,U--)}function dt(e,n){U++,yt[U]=e.current,e.current=n}var Y=J(null),ht=J(null),Mt=J(null),ct=J(null);function At(e,n){switch(dt(Mt,n),dt(ht,e),dt(Y,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Lg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Lg(n),e=Ng(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}gt(Y),dt(Y,e)}function Zt(){gt(Y),gt(ht),gt(Mt)}function It(e){e.memoizedState!==null&&dt(ct,e);var n=Y.current,a=Ng(n,e.type);n!==a&&(dt(ht,e),dt(Y,a))}function oe(e){ht.current===e&&(gt(Y),gt(ht)),ct.current===e&&(gt(ct),yo._currentValue=z)}var ge=Object.prototype.hasOwnProperty,ye=s.unstable_scheduleCallback,V=s.unstable_cancelCallback,yn=s.unstable_shouldYield,Ae=s.unstable_requestPaint,_e=s.unstable_now,Xt=s.unstable_getCurrentPriorityLevel,Me=s.unstable_ImmediatePriority,Qt=s.unstable_UserBlockingPriority,se=s.unstable_NormalPriority,$e=s.unstable_LowPriority,N=s.unstable_IdlePriority,E=s.log,nt=s.unstable_setDisableYieldValue,mt=null,vt=null;function ft(e){if(typeof E=="function"&&nt(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(mt,e)}catch{}}var Ot=Math.clz32?Math.clz32:Wt,Dt=Math.log,kt=Math.LN2;function Wt(e){return e>>>=0,e===0?32:31-(Dt(e)/kt|0)|0}var Et=256,Pt=4194304;function jt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Kt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?c=jt(o):(S&=b,S!==0?c=jt(S):a||(a=b&~e,a!==0&&(c=jt(a))))):(b=o&~f,b!==0?c=jt(b):S!==0?c=jt(S):a||(a=o&~e,a!==0&&(c=jt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function wt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var e=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),e}function Ut(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function bt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Rt(e,n,a,o,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,P=e.expirationTimes,tt=e.hiddenUpdates;for(a=S&~a;0<a;){var pt=31-Ot(a),xt=1<<pt;b[pt]=0,P[pt]=-1;var it=tt[pt];if(it!==null)for(tt[pt]=null,pt=0;pt<it.length;pt++){var at=it[pt];at!==null&&(at.lane&=-536870913)}a&=~xt}o!==0&&St(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function St(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ot(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Ft(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ot(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Re(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Jg(e.type))}function kn(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var pn=Math.random().toString(36).slice(2),on="__reactFiber$"+pn,Mn="__reactProps$"+pn,Pn="__reactContainer$"+pn,Ya="__reactEvents$"+pn,Zo="__reactListeners$"+pn,jo="__reactHandles$"+pn,Za="__reactResources$"+pn,ca="__reactMarker$"+pn;function ua(e){delete e[on],delete e[Mn],delete e[Ya],delete e[Zo],delete e[jo]}function Oi(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pn]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Bg(e);e!==null;){if(a=e[on])return a;e=Bg(e)}return n}e=a,a=e.parentNode}return null}function Pi(e){if(e=e[on]||e[Pn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ja(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function fa(e){var n=e[Za];return n||(n=e[Za]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(e){e[ca]=!0}var Ko=new Set,Qo={};function zi(e,n){A(e,n),A(e+"Capture",n)}function A(e,n){for(Qo[e]=n,e=0;e<n.length;e++)Ko.add(n[e])}var j=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},st={};function Q(e){return ge.call(st,e)?!0:ge.call(rt,e)?!1:j.test(e)?st[e]=!0:(rt[e]=!0,!1)}function Tt(e,n,a){if(Q(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ct(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Bt,ne;function $t(e){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",ne=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+e+ne}var qt=!1;function ue(e,n){if(!e||qt)return"";qt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(at){var it=at}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(at){it=at}e.call(xt.prototype)}}else{try{throw Error()}catch(at){it=at}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(at){if(at&&it&&typeof at.stack=="string")return[at.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],b=f[1];if(S&&b){var P=S.split(`
`),tt=b.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===tt.length)for(o=P.length-1,c=tt.length-1;1<=o&&0<=c&&P[o]!==tt[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==tt[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==tt[c]){var pt=`
`+P[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=c);break}}}finally{qt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?$t(a):""}function Le(e){switch(e.tag){case 26:case 27:case 5:return $t(e.type);case 16:return $t("Lazy");case 13:return $t("Suspense");case 19:return $t("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return $t("Activity");default:return""}}function Ye(e){try{var n="";do n+=Le(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function pe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(e){var n=Ne(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Be(e){e._valueTracker||(e._valueTracker=Jt(e))}function Ee(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ne(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var da=/[\n"\\]/g;function We(e){return e.replace(da,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bi(e,n,a,o,c,f,S,b){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+pe(n)):e.value!==""+pe(n)&&(e.value=""+pe(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Rn(e,S,pe(n)):a!=null?Rn(e,S,pe(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+pe(b):e.removeAttribute("name")}function ke(e,n,a,o,c,f,S,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+pe(a):"",n=n!=null?""+pe(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Rn(e,n,a){n==="number"&&mn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ln(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+pe(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function gn(e,n,a){if(n!=null&&(n=""+pe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+pe(a):""}function En(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(lt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=pe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Si(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ii=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lh(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ii.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Nh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Lh(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Lh(e,f,n[f])}function Fc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var l0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),c0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jo(e){return c0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Hc=null;function Gc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cr=null,Dr=null;function Oh(e){var n=Pi(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Bi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+We(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[Mn]||null;if(!c)throw Error(r(90));Bi(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ee(o)}break t;case"textarea":gn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ln(e,!!a.multiple,n,!1)}}}var Vc=!1;function Ph(e,n,a){if(Vc)return e(n,a);Vc=!0;try{var o=e(n);return o}finally{if(Vc=!1,(Cr!==null||Dr!==null)&&(Bl(),Cr&&(n=Cr,e=Dr,Dr=Cr=null,Oh(n),e)))for(n=0;n<e.length;n++)Oh(e[n])}}function Ns(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=!1;if(Fi)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){kc=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{kc=!1}var ha=null,Xc=null,$o=null;function zh(){if($o)return $o;var e,n=Xc,a=n.length,o,c="value"in ha?ha.value:ha.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===c[f-o];o++);return $o=c.slice(e,1<o?1-o:void 0)}function tl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function Bh(){return!1}function zn(e){function n(a,o,c,f,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?el:Bh,this.isPropagationStopped=Bh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=zn(Ka),Ps=g({},Ka,{view:0,detail:0}),u0=zn(Ps),Wc,qc,zs,il=g({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zs&&(zs&&e.type==="mousemove"?(Wc=e.screenX-zs.screenX,qc=e.screenY-zs.screenY):qc=Wc=0,zs=e),Wc)},movementY:function(e){return"movementY"in e?e.movementY:qc}}),Ih=zn(il),f0=g({},il,{dataTransfer:0}),d0=zn(f0),h0=g({},Ps,{relatedTarget:0}),Yc=zn(h0),p0=g({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),m0=zn(p0),g0=g({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_0=zn(g0),v0=g({},Ka,{data:0}),Fh=zn(v0),x0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=y0[e])?!!n[e]:!1}function Zc(){return M0}var E0=g({},Ps,{key:function(e){if(e.key){var n=x0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?S0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),b0=zn(E0),T0=g({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hh=zn(T0),A0=g({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),R0=zn(A0),w0=g({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),C0=zn(w0),D0=g({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),U0=zn(D0),L0=g({},Ka,{newState:0,oldState:0}),N0=zn(L0),O0=[9,13,27,32],jc=Fi&&"CompositionEvent"in window,Bs=null;Fi&&"documentMode"in document&&(Bs=document.documentMode);var P0=Fi&&"TextEvent"in window&&!Bs,Gh=Fi&&(!jc||Bs&&8<Bs&&11>=Bs),Vh=" ",kh=!1;function Xh(e,n){switch(e){case"keyup":return O0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function z0(e,n){switch(e){case"compositionend":return Wh(n);case"keypress":return n.which!==32?null:(kh=!0,Vh);case"textInput":return e=n.data,e===Vh&&kh?null:e;default:return null}}function B0(e,n){if(Ur)return e==="compositionend"||!jc&&Xh(e,n)?(e=zh(),$o=Xc=ha=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gh&&n.locale!=="ko"?null:n.data;default:return null}}var I0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!I0[e.type]:n==="textarea"}function Yh(e,n,a,o){Cr?Dr?Dr.push(o):Dr=[o]:Cr=o,n=kl(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Is=null,Fs=null;function F0(e){Rg(e,0)}function al(e){var n=ja(e);if(Ee(n))return e}function Zh(e,n){if(e==="change")return n}var jh=!1;if(Fi){var Kc;if(Fi){var Qc="oninput"in document;if(!Qc){var Kh=document.createElement("div");Kh.setAttribute("oninput","return;"),Qc=typeof Kh.oninput=="function"}Kc=Qc}else Kc=!1;jh=Kc&&(!document.documentMode||9<document.documentMode)}function Qh(){Is&&(Is.detachEvent("onpropertychange",Jh),Fs=Is=null)}function Jh(e){if(e.propertyName==="value"&&al(Fs)){var n=[];Yh(n,Fs,e,Gc(e)),Ph(F0,n)}}function H0(e,n,a){e==="focusin"?(Qh(),Is=n,Fs=a,Is.attachEvent("onpropertychange",Jh)):e==="focusout"&&Qh()}function G0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Fs)}function V0(e,n){if(e==="click")return al(n)}function k0(e,n){if(e==="input"||e==="change")return al(n)}function X0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xn=typeof Object.is=="function"?Object.is:X0;function Hs(e,n){if(Xn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!ge.call(n,c)||!Xn(e[c],n[c]))return!1}return!0}function $h(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tp(e,n){var a=$h(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=$h(a)}}function ep(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ep(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function np(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=mn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=mn(e.document)}return n}function Jc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var W0=Fi&&"documentMode"in document&&11>=document.documentMode,Lr=null,$c=null,Gs=null,tu=!1;function ip(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tu||Lr==null||Lr!==mn(o)||(o=Lr,"selectionStart"in o&&Jc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Gs&&Hs(Gs,o)||(Gs=o,o=kl($c,"onSelect"),0<o.length&&(n=new nl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Lr)))}function Qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Nr={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},eu={},ap={};Fi&&(ap=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function Ja(e){if(eu[e])return eu[e];if(!Nr[e])return e;var n=Nr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in ap)return eu[e]=n[a];return e}var rp=Ja("animationend"),sp=Ja("animationiteration"),op=Ja("animationstart"),q0=Ja("transitionrun"),Y0=Ja("transitionstart"),Z0=Ja("transitioncancel"),lp=Ja("transitionend"),cp=new Map,nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nu.push("scrollEnd");function ui(e,n){cp.set(e,n),zi(n,[e])}var up=new WeakMap;function ti(e,n){if(typeof e=="object"&&e!==null){var a=up.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ye(n)},up.set(e,n),n)}return{value:e,source:n,stack:Ye(n)}}var ei=[],Or=0,iu=0;function rl(){for(var e=Or,n=iu=Or=0;n<e;){var a=ei[n];ei[n++]=null;var o=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}f!==0&&fp(a,c,f)}}function sl(e,n,a,o){ei[Or++]=e,ei[Or++]=n,ei[Or++]=a,ei[Or++]=o,iu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function au(e,n,a,o){return sl(e,n,a,o),ol(e)}function Pr(e,n){return sl(e,null,null,n),ol(e)}function fp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ot(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function ol(e){if(50<ho)throw ho=0,ff=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function j0(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(e,n,a,o){return new j0(e,n,a,o)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,n){var a=e.alternate;return a===null?(a=Wn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function dp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ll(e,n,a,o,c,f){var S=0;if(o=e,typeof e=="function")ru(e)&&(S=1);else if(typeof e=="string")S=Qx(e,a,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Wn(31,a,n,c),e.elementType=C,e.lanes=f,e;case T:return $a(a.children,c,f,n);case w:S=8,c|=24;break;case y:return e=Wn(12,a,n,c|2),e.elementType=y,e.lanes=f,e;case G:return e=Wn(13,a,n,c),e.elementType=G,e.lanes=f,e;case I:return e=Wn(19,a,n,c),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case O:S=10;break t;case B:S=9;break t;case D:S=11;break t;case H:S=14;break t;case F:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Wn(S,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function $a(e,n,a,o){return e=Wn(7,e,o,n),e.lanes=a,e}function su(e,n,a){return e=Wn(6,e,null,n),e.lanes=a,e}function ou(e,n,a){return n=Wn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Br=[],Ir=0,cl=null,ul=0,ni=[],ii=0,tr=null,Gi=1,Vi="";function er(e,n){Br[Ir++]=ul,Br[Ir++]=cl,cl=e,ul=n}function hp(e,n,a){ni[ii++]=Gi,ni[ii++]=Vi,ni[ii++]=tr,tr=e;var o=Gi;e=Vi;var c=32-Ot(o)-1;o&=~(1<<c),a+=1;var f=32-Ot(n)+c;if(30<f){var S=c-c%5;f=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Gi=1<<32-Ot(n)+c|a<<c|o,Vi=f+e}else Gi=1<<f|a<<c|o,Vi=e}function lu(e){e.return!==null&&(er(e,1),hp(e,1,0))}function cu(e){for(;e===cl;)cl=Br[--Ir],Br[Ir]=null,ul=Br[--Ir],Br[Ir]=null;for(;e===tr;)tr=ni[--ii],ni[ii]=null,Vi=ni[--ii],ni[ii]=null,Gi=ni[--ii],ni[ii]=null}var Ln=null,Qe=null,Ue=!1,nr=null,yi=!1,uu=Error(r(519));function ir(e){var n=Error(r(418,""));throw Xs(ti(n,e)),uu}function pp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[Mn]=o,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)xe(mo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),ke(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Be(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),En(n,o.value,o.defaultValue,o.children),Be(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ug(n.textContent,a)?(o.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),o.onScroll!=null&&xe("scroll",n),o.onScrollEnd!=null&&xe("scrollend",n),o.onClick!=null&&(n.onclick=Xl),n=!0):n=!1,n||ir(e)}function mp(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:Ln=Ln.return}}function Vs(e){if(e!==Ln)return!1;if(!Ue)return mp(e),Ue=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Rf(e.type,e.memoizedProps)),a=!a),a&&Qe&&ir(e),mp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Qe=di(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Qe=null}}else n===27?(n=Qe,Ca(e.type)?(e=Uf,Uf=null,Qe=e):Qe=n):Qe=Ln?di(e.stateNode.nextSibling):null;return!0}function ks(){Qe=Ln=null,Ue=!1}function gp(){var e=nr;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),nr=null),e}function Xs(e){nr===null?nr=[e]:nr.push(e)}var fu=J(null),ar=null,ki=null;function pa(e,n,a){dt(fu,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=fu.current,gt(fu)}function du(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function hu(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var P=0;P<n.length;P++)if(b.context===n[P]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),du(f.return,a,e),o||(S=null);break t}f=b.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),du(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Ws(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var b=c.type;Xn(c.pendingProps.value,S.value)||(e!==null?e.push(b):e=[b])}}else if(c===ct.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(yo):e=[yo])}c=c.return}e!==null&&hu(n,e,a,o),n.flags|=262144}function fl(e){for(e=e.firstContext;e!==null;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function rr(e){ar=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return _p(ar,e)}function dl(e,n){return ar===null&&rr(e),_p(e,n)}function _p(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(r(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var K0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Q0=s.unstable_scheduleCallback,J0=s.unstable_NormalPriority,cn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pu(){return{controller:new K0,data:new Map,refCount:0}}function qs(e){e.refCount--,e.refCount===0&&Q0(J0,function(){e.controller.abort()})}var Ys=null,mu=0,Fr=0,Hr=null;function $0(e,n){if(Ys===null){var a=Ys=[];mu=0,Fr=vf(),Hr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return mu++,n.then(vp,vp),n}function vp(){if(--mu===0&&Ys!==null){Hr!==null&&(Hr.status="fulfilled");var e=Ys;Ys=null,Fr=0,Hr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function tx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var xp=L.S;L.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&$0(e,n),xp!==null&&xp(e,n)};var sr=J(null);function gu(){var e=sr.current;return e!==null?e:qe.pooledCache}function hl(e,n){n===null?dt(sr,sr.current):dt(sr,n.pool)}function Sp(){var e=gu();return e===null?null:{parent:cn._currentValue,pool:e}}var Zs=Error(r(460)),yp=Error(r(474)),pl=Error(r(542)),_u={then:function(){}};function Mp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ml(){}function Ep(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ml,ml),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tp(e),e;default:if(typeof n.status=="string")n.then(ml,ml);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tp(e),e}throw js=n,Zs}}var js=null;function bp(){if(js===null)throw Error(r(459));var e=js;return js=null,e}function Tp(e){if(e===Zs||e===pl)throw Error(r(483))}var ma=!1;function vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ol(e),fp(e,null,a),n}return sl(e,o,n,a),ol(e)}function Ks(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ft(e,a)}}function Su(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var yu=!1;function Qs(){if(yu){var e=Hr;if(e!==null)throw e}}function Js(e,n,a,o){yu=!1;var c=e.updateQueue;ma=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var P=b,tt=P.next;P.next=null,S===null?f=tt:S.next=tt,S=P;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,b=pt.lastBaseUpdate,b!==S&&(b===null?pt.firstBaseUpdate=tt:b.next=tt,pt.lastBaseUpdate=P))}if(f!==null){var xt=c.baseState;S=0,pt=tt=P=null,b=f;do{var it=b.lane&-536870913,at=it!==b.lane;if(at?(Te&it)===it:(o&it)===it){it!==0&&it===Fr&&(yu=!0),pt!==null&&(pt=pt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ie=e,te=b;it=n;var He=a;switch(te.tag){case 1:if(ie=te.payload,typeof ie=="function"){xt=ie.call(He,xt,it);break t}xt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=te.payload,it=typeof ie=="function"?ie.call(He,xt,it):ie,it==null)break t;xt=g({},xt,it);break t;case 2:ma=!0}}it=b.callback,it!==null&&(e.flags|=64,at&&(e.flags|=8192),at=c.callbacks,at===null?c.callbacks=[it]:at.push(it))}else at={lane:it,tag:b.tag,payload:b.payload,callback:b.callback,next:null},pt===null?(tt=pt=at,P=xt):pt=pt.next=at,S|=it;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;at=b,b=at.next,at.next=null,c.lastBaseUpdate=at,c.shared.pending=null}}while(!0);pt===null&&(P=xt),c.baseState=P,c.firstBaseUpdate=tt,c.lastBaseUpdate=pt,f===null&&(c.shared.lanes=0),Ta|=S,e.lanes=S,e.memoizedState=xt}}function Ap(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Rp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ap(a[e],n)}var Gr=J(null),gl=J(0);function wp(e,n){e=Qi,dt(gl,e),dt(Gr,n),Qi=e|n.baseLanes}function Mu(){dt(gl,Qi),dt(Gr,Gr.current)}function Eu(){Qi=gl.current,gt(Gr),gt(gl)}var va=0,de=null,Ie=null,an=null,_l=!1,Vr=!1,or=!1,vl=0,$s=0,kr=null,ex=0;function tn(){throw Error(r(321))}function bu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Xn(e[a],n[a]))return!1;return!0}function Tu(e,n,a,o,c,f){return va=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?fm:dm,or=!1,f=a(o,c),or=!1,Vr&&(f=Dp(n,a,o,c)),Cp(e),f}function Cp(e){L.H=bl;var n=Ie!==null&&Ie.next!==null;if(va=0,an=Ie=de=null,_l=!1,$s=0,kr=null,n)throw Error(r(300));e===null||_n||(e=e.dependencies,e!==null&&fl(e)&&(_n=!0))}function Dp(e,n,a,o){de=e;var c=0;do{if(Vr&&(kr=null),$s=0,Vr=!1,25<=c)throw Error(r(301));if(c+=1,an=Ie=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=lx,f=n(a,o)}while(Vr);return f}function nx(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?to(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(de.flags|=1024),n}function Au(){var e=vl!==0;return vl=0,e}function Ru(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function wu(e){if(_l){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}_l=!1}va=0,an=Ie=de=null,Vr=!1,$s=vl=0,kr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?de.memoizedState=an=e:an=an.next=e,an}function rn(){if(Ie===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=an===null?de.memoizedState:an.next;if(n!==null)an=n,Ie=e;else{if(e===null)throw de.alternate===null?Error(r(467)):Error(r(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},an===null?de.memoizedState=an=e:an=an.next=e}return an}function Cu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(e){var n=$s;return $s+=1,kr===null&&(kr=[]),e=Ep(kr,e,n),n=de,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?fm:dm),e}function xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return to(e);if(e.$$typeof===O)return wn(e)}throw Error(r(438,String(e)))}function Du(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Cu(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=R;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function Sl(e){var n=rn();return Uu(n,Ie,e)}function Uu(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var b=S=null,P=null,tt=n,pt=!1;do{var xt=tt.lane&-536870913;if(xt!==tt.lane?(Te&xt)===xt:(va&xt)===xt){var it=tt.revertLane;if(it===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),xt===Fr&&(pt=!0);else if((va&it)===it){tt=tt.next,it===Fr&&(pt=!0);continue}else xt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},P===null?(b=P=xt,S=f):P=P.next=xt,de.lanes|=it,Ta|=it;xt=tt.action,or&&a(f,xt),f=tt.hasEagerState?tt.eagerState:a(f,xt)}else it={lane:xt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},P===null?(b=P=it,S=f):P=P.next=it,de.lanes|=xt,Ta|=xt;tt=tt.next}while(tt!==null&&tt!==n);if(P===null?S=f:P.next=b,!Xn(f,e.memoizedState)&&(_n=!0,pt&&(a=Hr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=P,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Lu(e){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);Xn(f,n.memoizedState)||(_n=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Up(e,n,a){var o=de,c=rn(),f=Ue;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Xn((Ie||c).memoizedState,a);S&&(c.memoizedState=a,_n=!0),c=c.queue;var b=Op.bind(null,o,c,e);if(eo(2048,8,b,[e]),c.getSnapshot!==n||S||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,Xr(9,yl(),Np.bind(null,o,c,a,n),null),qe===null)throw Error(r(349));f||(va&124)!==0||Lp(o,n,a)}return a}function Lp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Cu(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Np(e,n,a,o){n.value=a,n.getSnapshot=o,Pp(n)&&zp(e)}function Op(e,n,a){return a(function(){Pp(n)&&zp(e)})}function Pp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Xn(e,a)}catch{return!0}}function zp(e){var n=Pr(e,2);n!==null&&Kn(n,e,2)}function Nu(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),or){ft(!0);try{a()}finally{ft(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function Bp(e,n,a,o){return e.baseState=a,Uu(e,Ie,typeof o=="function"?o:Wi)}function ix(e,n,a,o,c){if(El(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};L.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Ip(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Ip(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=L.T,S={};L.T=S;try{var b=a(c,o),P=L.S;P!==null&&P(S,b),Fp(e,n,b)}catch(tt){Ou(e,n,tt)}finally{L.T=f}}else try{f=a(c,o),Fp(e,n,f)}catch(tt){Ou(e,n,tt)}}function Fp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Hp(e,n,o)},function(o){return Ou(e,n,o)}):Hp(e,n,a)}function Hp(e,n,a){n.status="fulfilled",n.value=a,Gp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Ip(e,a)))}function Ou(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Gp(n),n=n.next;while(n!==o)}e.action=null}function Gp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Vp(e,n){return n}function kp(e,n){if(Ue){var a=qe.formState;if(a!==null){t:{var o=de;if(Ue){if(Qe){e:{for(var c=Qe,f=yi;c.nodeType!==8;){if(!f){c=null;break e}if(c=di(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Qe=di(c.nextSibling),o=c.data==="F!";break t}}ir(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vp,lastRenderedState:n},a.queue=o,a=lm.bind(null,de,o),o.dispatch=a,o=Nu(!1),f=Fu.bind(null,de,!1,o.queue),o=Bn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=ix.bind(null,de,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Xp(e){var n=rn();return Wp(n,Ie,e)}function Wp(e,n,a){if(n=Uu(e,n,Vp)[0],e=Sl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=to(n)}catch(S){throw S===Zs?pl:S}else o=n;n=rn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Xr(9,yl(),ax.bind(null,c,a),null)),[o,f,e]}function ax(e,n){e.action=n}function qp(e){var n=rn(),a=Ie;if(a!==null)return Wp(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Xr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=de.updateQueue,n===null&&(n=Cu(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function yl(){return{destroy:void 0,resource:void 0}}function Yp(){return rn().memoizedState}function Ml(e,n,a,o){var c=Bn();o=o===void 0?null:o,de.flags|=e,c.memoizedState=Xr(1|n,yl(),a,o)}function eo(e,n,a,o){var c=rn();o=o===void 0?null:o;var f=c.memoizedState.inst;Ie!==null&&o!==null&&bu(o,Ie.memoizedState.deps)?c.memoizedState=Xr(n,f,a,o):(de.flags|=e,c.memoizedState=Xr(1|n,f,a,o))}function Zp(e,n){Ml(8390656,8,e,n)}function jp(e,n){eo(2048,8,e,n)}function Kp(e,n){return eo(4,2,e,n)}function Qp(e,n){return eo(4,4,e,n)}function Jp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function $p(e,n,a){a=a!=null?a.concat([e]):null,eo(4,4,Jp.bind(null,n,e),a)}function Pu(){}function tm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&bu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function em(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&bu(n,o[1]))return o[0];if(o=e(),or){ft(!0);try{e()}finally{ft(!1)}}return a.memoizedState=[o,n],o}function zu(e,n,a){return a===void 0||(va&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=ag(),de.lanes|=e,Ta|=e,a)}function nm(e,n,a,o){return Xn(a,n)?a:Gr.current!==null?(e=zu(e,a,o),Xn(e,n)||(_n=!0),e):(va&42)===0?(_n=!0,e.memoizedState=a):(e=ag(),de.lanes|=e,Ta|=e,n)}function im(e,n,a,o,c){var f=q.p;q.p=f!==0&&8>f?f:8;var S=L.T,b={};L.T=b,Fu(e,!1,n,a);try{var P=c(),tt=L.S;if(tt!==null&&tt(b,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var pt=tx(P,o);no(e,n,pt,jn(e))}else no(e,n,o,jn(e))}catch(xt){no(e,n,{then:function(){},status:"rejected",reason:xt},jn())}finally{q.p=f,L.T=S}}function rx(){}function Bu(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=am(e).queue;im(e,c,n,z,a===null?rx:function(){return rm(e),a(o)})}function am(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function rm(e){var n=am(e).next.queue;no(e,n,{},jn())}function Iu(){return wn(yo)}function sm(){return rn().memoizedState}function om(){return rn().memoizedState}function sx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();e=ga(a);var o=_a(n,e,a);o!==null&&(Kn(o,n,a),Ks(o,n,a)),n={cache:pu()},e.payload=n;return}n=n.return}}function ox(e,n,a){var o=jn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},El(e)?cm(n,a):(a=au(e,n,a,o),a!==null&&(Kn(a,e,o),um(a,n,o)))}function lm(e,n,a){var o=jn();no(e,n,a,o)}function no(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(El(e))cm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,b=f(S,a);if(c.hasEagerState=!0,c.eagerState=b,Xn(b,S))return sl(e,n,c,0),qe===null&&rl(),!1}catch{}finally{}if(a=au(e,n,c,o),a!==null)return Kn(a,e,o),um(a,n,o),!0}return!1}function Fu(e,n,a,o){if(o={lane:2,revertLane:vf(),action:o,hasEagerState:!1,eagerState:null,next:null},El(e)){if(n)throw Error(r(479))}else n=au(e,a,o,2),n!==null&&Kn(n,e,2)}function El(e){var n=e.alternate;return e===de||n!==null&&n===de}function cm(e,n){Vr=_l=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function um(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ft(e,a)}}var bl={readContext:wn,use:xl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},fm={readContext:wn,use:xl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:Zp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ml(4194308,4,Jp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ml(4194308,4,e,n)},useInsertionEffect:function(e,n){Ml(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(or){ft(!0);try{e()}finally{ft(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var c=a(n);if(or){ft(!0);try{a(n)}finally{ft(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=ox.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=Nu(e);var n=e.queue,a=lm.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Pu,useDeferredValue:function(e,n){var a=Bn();return zu(a,e,n)},useTransition:function(){var e=Nu(!1);return e=im.bind(null,de,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=de,c=Bn();if(Ue){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qe===null)throw Error(r(349));(Te&124)!==0||Lp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Zp(Op.bind(null,o,f,e),[e]),o.flags|=2048,Xr(9,yl(),Np.bind(null,o,f,a,n),null),a},useId:function(){var e=Bn(),n=qe.identifierPrefix;if(Ue){var a=Vi,o=Gi;a=(o&~(1<<32-Ot(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=vl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=ex++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Iu,useFormState:kp,useActionState:kp,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Fu.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:Du,useCacheRefresh:function(){return Bn().memoizedState=sx.bind(null,de)}},dm={readContext:wn,use:xl,useCallback:tm,useContext:wn,useEffect:jp,useImperativeHandle:$p,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:em,useReducer:Sl,useRef:Yp,useState:function(){return Sl(Wi)},useDebugValue:Pu,useDeferredValue:function(e,n){var a=rn();return nm(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Sl(Wi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:Up,useId:sm,useHostTransitionStatus:Iu,useFormState:Xp,useActionState:Xp,useOptimistic:function(e,n){var a=rn();return Bp(a,Ie,e,n)},useMemoCache:Du,useCacheRefresh:om},lx={readContext:wn,use:xl,useCallback:tm,useContext:wn,useEffect:jp,useImperativeHandle:$p,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:em,useReducer:Lu,useRef:Yp,useState:function(){return Lu(Wi)},useDebugValue:Pu,useDeferredValue:function(e,n){var a=rn();return Ie===null?zu(a,e,n):nm(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Lu(Wi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:Up,useId:sm,useHostTransitionStatus:Iu,useFormState:qp,useActionState:qp,useOptimistic:function(e,n){var a=rn();return Ie!==null?Bp(a,Ie,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Du,useCacheRefresh:om},Wr=null,io=0;function Tl(e){var n=io;return io+=1,Wr===null&&(Wr=[]),Ep(Wr,e,n)}function ao(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Al(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function hm(e){var n=e._init;return n(e._payload)}function pm(e){function n(Z,X){if(e){var $=Z.deletions;$===null?(Z.deletions=[X],Z.flags|=16):$.push(X)}}function a(Z,X){if(!e)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function o(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function c(Z,X){return Z=Hi(Z,X),Z.index=0,Z.sibling=null,Z}function f(Z,X,$){return Z.index=$,e?($=Z.alternate,$!==null?($=$.index,$<X?(Z.flags|=67108866,X):$):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function S(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function b(Z,X,$,_t){return X===null||X.tag!==6?(X=su($,Z.mode,_t),X.return=Z,X):(X=c(X,$),X.return=Z,X)}function P(Z,X,$,_t){var Ht=$.type;return Ht===T?pt(Z,X,$.props.children,_t,$.key):X!==null&&(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===F&&hm(Ht)===X.type)?(X=c(X,$.props),ao(X,$),X.return=Z,X):(X=ll($.type,$.key,$.props,null,Z.mode,_t),ao(X,$),X.return=Z,X)}function tt(Z,X,$,_t){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=ou($,Z.mode,_t),X.return=Z,X):(X=c(X,$.children||[]),X.return=Z,X)}function pt(Z,X,$,_t,Ht){return X===null||X.tag!==7?(X=$a($,Z.mode,_t,Ht),X.return=Z,X):(X=c(X,$),X.return=Z,X)}function xt(Z,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=su(""+X,Z.mode,$),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case x:return $=ll(X.type,X.key,X.props,null,Z.mode,$),ao($,X),$.return=Z,$;case M:return X=ou(X,Z.mode,$),X.return=Z,X;case F:var _t=X._init;return X=_t(X._payload),xt(Z,X,$)}if(lt(X)||ot(X))return X=$a(X,Z.mode,$,null),X.return=Z,X;if(typeof X.then=="function")return xt(Z,Tl(X),$);if(X.$$typeof===O)return xt(Z,dl(Z,X),$);Al(Z,X)}return null}function it(Z,X,$,_t){var Ht=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ht!==null?null:b(Z,X,""+$,_t);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===Ht?P(Z,X,$,_t):null;case M:return $.key===Ht?tt(Z,X,$,_t):null;case F:return Ht=$._init,$=Ht($._payload),it(Z,X,$,_t)}if(lt($)||ot($))return Ht!==null?null:pt(Z,X,$,_t,null);if(typeof $.then=="function")return it(Z,X,Tl($),_t);if($.$$typeof===O)return it(Z,X,dl(Z,$),_t);Al(Z,$)}return null}function at(Z,X,$,_t,Ht){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Z=Z.get($)||null,b(X,Z,""+_t,Ht);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case x:return Z=Z.get(_t.key===null?$:_t.key)||null,P(X,Z,_t,Ht);case M:return Z=Z.get(_t.key===null?$:_t.key)||null,tt(X,Z,_t,Ht);case F:var me=_t._init;return _t=me(_t._payload),at(Z,X,$,_t,Ht)}if(lt(_t)||ot(_t))return Z=Z.get($)||null,pt(X,Z,_t,Ht,null);if(typeof _t.then=="function")return at(Z,X,$,Tl(_t),Ht);if(_t.$$typeof===O)return at(Z,X,$,dl(X,_t),Ht);Al(X,_t)}return null}function ie(Z,X,$,_t){for(var Ht=null,me=null,Yt=X,ee=X=0,xn=null;Yt!==null&&ee<$.length;ee++){Yt.index>ee?(xn=Yt,Yt=null):xn=Yt.sibling;var we=it(Z,Yt,$[ee],_t);if(we===null){Yt===null&&(Yt=xn);break}e&&Yt&&we.alternate===null&&n(Z,Yt),X=f(we,X,ee),me===null?Ht=we:me.sibling=we,me=we,Yt=xn}if(ee===$.length)return a(Z,Yt),Ue&&er(Z,ee),Ht;if(Yt===null){for(;ee<$.length;ee++)Yt=xt(Z,$[ee],_t),Yt!==null&&(X=f(Yt,X,ee),me===null?Ht=Yt:me.sibling=Yt,me=Yt);return Ue&&er(Z,ee),Ht}for(Yt=o(Yt);ee<$.length;ee++)xn=at(Yt,Z,ee,$[ee],_t),xn!==null&&(e&&xn.alternate!==null&&Yt.delete(xn.key===null?ee:xn.key),X=f(xn,X,ee),me===null?Ht=xn:me.sibling=xn,me=xn);return e&&Yt.forEach(function(Oa){return n(Z,Oa)}),Ue&&er(Z,ee),Ht}function te(Z,X,$,_t){if($==null)throw Error(r(151));for(var Ht=null,me=null,Yt=X,ee=X=0,xn=null,we=$.next();Yt!==null&&!we.done;ee++,we=$.next()){Yt.index>ee?(xn=Yt,Yt=null):xn=Yt.sibling;var Oa=it(Z,Yt,we.value,_t);if(Oa===null){Yt===null&&(Yt=xn);break}e&&Yt&&Oa.alternate===null&&n(Z,Yt),X=f(Oa,X,ee),me===null?Ht=Oa:me.sibling=Oa,me=Oa,Yt=xn}if(we.done)return a(Z,Yt),Ue&&er(Z,ee),Ht;if(Yt===null){for(;!we.done;ee++,we=$.next())we=xt(Z,we.value,_t),we!==null&&(X=f(we,X,ee),me===null?Ht=we:me.sibling=we,me=we);return Ue&&er(Z,ee),Ht}for(Yt=o(Yt);!we.done;ee++,we=$.next())we=at(Yt,Z,ee,we.value,_t),we!==null&&(e&&we.alternate!==null&&Yt.delete(we.key===null?ee:we.key),X=f(we,X,ee),me===null?Ht=we:me.sibling=we,me=we);return e&&Yt.forEach(function(cS){return n(Z,cS)}),Ue&&er(Z,ee),Ht}function He(Z,X,$,_t){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:t:{for(var Ht=$.key;X!==null;){if(X.key===Ht){if(Ht=$.type,Ht===T){if(X.tag===7){a(Z,X.sibling),_t=c(X,$.props.children),_t.return=Z,Z=_t;break t}}else if(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===F&&hm(Ht)===X.type){a(Z,X.sibling),_t=c(X,$.props),ao(_t,$),_t.return=Z,Z=_t;break t}a(Z,X);break}else n(Z,X);X=X.sibling}$.type===T?(_t=$a($.props.children,Z.mode,_t,$.key),_t.return=Z,Z=_t):(_t=ll($.type,$.key,$.props,null,Z.mode,_t),ao(_t,$),_t.return=Z,Z=_t)}return S(Z);case M:t:{for(Ht=$.key;X!==null;){if(X.key===Ht)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(Z,X.sibling),_t=c(X,$.children||[]),_t.return=Z,Z=_t;break t}else{a(Z,X);break}else n(Z,X);X=X.sibling}_t=ou($,Z.mode,_t),_t.return=Z,Z=_t}return S(Z);case F:return Ht=$._init,$=Ht($._payload),He(Z,X,$,_t)}if(lt($))return ie(Z,X,$,_t);if(ot($)){if(Ht=ot($),typeof Ht!="function")throw Error(r(150));return $=Ht.call($),te(Z,X,$,_t)}if(typeof $.then=="function")return He(Z,X,Tl($),_t);if($.$$typeof===O)return He(Z,X,dl(Z,$),_t);Al(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(Z,X.sibling),_t=c(X,$),_t.return=Z,Z=_t):(a(Z,X),_t=su($,Z.mode,_t),_t.return=Z,Z=_t),S(Z)):a(Z,X)}return function(Z,X,$,_t){try{io=0;var Ht=He(Z,X,$,_t);return Wr=null,Ht}catch(Yt){if(Yt===Zs||Yt===pl)throw Yt;var me=Wn(29,Yt,null,Z.mode);return me.lanes=_t,me.return=Z,me}finally{}}}var qr=pm(!0),mm=pm(!1),ai=J(null),Mi=null;function xa(e){var n=e.alternate;dt(un,un.current&1),dt(ai,e),Mi===null&&(n===null||Gr.current!==null||n.memoizedState!==null)&&(Mi=e)}function gm(e){if(e.tag===22){if(dt(un,un.current),dt(ai,e),Mi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Mi=e)}}else Sa()}function Sa(){dt(un,un.current),dt(ai,ai.current)}function qi(e){gt(ai),Mi===e&&(Mi=null),gt(un)}var un=J(0);function Rl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Df(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Hu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gu={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=jn(),c=ga(o);c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,o),n!==null&&(Kn(n,e,o),Ks(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=jn(),c=ga(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,o),n!==null&&(Kn(n,e,o),Ks(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=jn(),o=ga(a);o.tag=2,n!=null&&(o.callback=n),n=_a(e,o,a),n!==null&&(Kn(n,e,a),Ks(n,e,a))}};function _m(e,n,a,o,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Hs(a,o)||!Hs(c,f):!0}function vm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Gu.enqueueReplaceState(n,n.state,null)}function lr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function xm(e){wl(e)}function Sm(e){console.error(e)}function ym(e){wl(e)}function Cl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Mm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Vu(e,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(e,n)},a}function Em(e){return e=ga(e),e.tag=3,e}function bm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){Mm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Mm(n,a,o),typeof c!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function cx(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ws(n,a,c,!0),a=ai.current,a!==null){switch(a.tag){case 13:return Mi===null?hf():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===_u?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),mf(e,o,c)),!1;case 22:return a.flags|=65536,o===_u?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),mf(e,o,c)),!1}throw Error(r(435,a.tag))}return mf(e,o,c),hf(),!1}if(Ue)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==uu&&(e=Error(r(422),{cause:o}),Xs(ti(e,a)))):(o!==uu&&(n=Error(r(423),{cause:o}),Xs(ti(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ti(o,a),c=Vu(e.stateNode,o,c),Su(e,c),Je!==4&&(Je=2)),!1;var f=Error(r(520),{cause:o});if(f=ti(f,a),fo===null?fo=[f]:fo.push(f),Je!==4&&(Je=2),n===null)return!0;o=ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Vu(a.stateNode,o,e),Su(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Em(c),bm(c,e,a,o),Su(a,c),!1}a=a.return}while(a!==null);return!1}var Tm=Error(r(461)),_n=!1;function bn(e,n,a,o){n.child=e===null?mm(n,null,a,o):qr(n,e.child,a,o)}function Am(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var b in o)b!=="ref"&&(S[b]=o[b])}else S=o;return rr(n),o=Tu(e,n,a,S,f,c),b=Au(),e!==null&&!_n?(Ru(e,n,c),Yi(e,n,c)):(Ue&&b&&lu(n),n.flags|=1,bn(e,n,o,c),n.child)}function Rm(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!ru(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,wm(e,n,f,o,c)):(e=ll(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ku(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Hs,a(S,o)&&e.ref===n.ref)return Yi(e,n,c)}return n.flags|=1,e=Hi(f,o),e.ref=n.ref,e.return=n,n.child=e}function wm(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(Hs(f,o)&&e.ref===n.ref)if(_n=!1,n.pendingProps=o=f,Ku(e,c))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,Yi(e,n,c)}return ku(e,n,a,o,c)}function Cm(e,n,a){var o=n.pendingProps,c=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Dm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hl(n,f!==null?f.cachePool:null),f!==null?wp(n,f):Mu(),gm(n);else return n.lanes=n.childLanes=536870912,Dm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(hl(n,f.cachePool),wp(n,f),Sa(),n.memoizedState=null):(e!==null&&hl(n,null),Mu(),Sa());return bn(e,n,c,a),n.child}function Dm(e,n,a,o){var c=gu();return c=c===null?null:{parent:cn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&hl(n,null),Mu(),gm(n),e!==null&&Ws(e,n,o,!0),null}function Dl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ku(e,n,a,o,c){return rr(n),a=Tu(e,n,a,o,void 0,c),o=Au(),e!==null&&!_n?(Ru(e,n,c),Yi(e,n,c)):(Ue&&o&&lu(n),n.flags|=1,bn(e,n,a,c),n.child)}function Um(e,n,a,o,c,f){return rr(n),n.updateQueue=null,a=Dp(n,o,a,c),Cp(e),o=Au(),e!==null&&!_n?(Ru(e,n,f),Yi(e,n,f)):(Ue&&o&&lu(n),n.flags|=1,bn(e,n,a,f),n.child)}function Lm(e,n,a,o,c){if(rr(n),n.stateNode===null){var f=zr,S=a.contextType;typeof S=="object"&&S!==null&&(f=wn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Gu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},vu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?wn(S):zr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Hu(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Gu.enqueueReplaceState(f,f.state,null),Js(n,o,f,c),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,P=lr(a,b);f.props=P;var tt=f.context,pt=a.contextType;S=zr,typeof pt=="object"&&pt!==null&&(S=wn(pt));var xt=a.getDerivedStateFromProps;pt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||tt!==S)&&vm(n,f,o,S),ma=!1;var it=n.memoizedState;f.state=it,Js(n,o,f,c),Qs(),tt=n.memoizedState,b||it!==tt||ma?(typeof xt=="function"&&(Hu(n,a,xt,o),tt=n.memoizedState),(P=ma||_m(n,a,P,o,it,tt,S))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),f.props=o,f.state=tt,f.context=S,o=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,xu(e,n),S=n.memoizedProps,pt=lr(a,S),f.props=pt,xt=n.pendingProps,it=f.context,tt=a.contextType,P=zr,typeof tt=="object"&&tt!==null&&(P=wn(tt)),b=a.getDerivedStateFromProps,(tt=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==xt||it!==P)&&vm(n,f,o,P),ma=!1,it=n.memoizedState,f.state=it,Js(n,o,f,c),Qs();var at=n.memoizedState;S!==xt||it!==at||ma||e!==null&&e.dependencies!==null&&fl(e.dependencies)?(typeof b=="function"&&(Hu(n,a,b,o),at=n.memoizedState),(pt=ma||_m(n,a,pt,o,it,at,P)||e!==null&&e.dependencies!==null&&fl(e.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,at,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,at,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=at),f.props=o,f.state=at,f.context=P,o=pt):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Dl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=qr(n,e.child,null,c),n.child=qr(n,null,a,c)):bn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Yi(e,n,c),e}function Nm(e,n,a,o){return ks(),n.flags|=256,bn(e,n,a,o),n.child}var Xu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wu(e){return{baseLanes:e,cachePool:Sp()}}function qu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function Om(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ue){if(c?xa(n):Sa(),Ue){var b=Qe,P;if(P=b){t:{for(P=b,b=yi;P.nodeType!==8;){if(!b){b=null;break t}if(P=di(P.nextSibling),P===null){b=null;break t}}b=P}b!==null?(n.memoizedState={dehydrated:b,treeContext:tr!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},P=Wn(18,null,null,0),P.stateNode=b,P.return=n,n.child=P,Ln=n,Qe=null,P=!0):P=!1}P||ir(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Df(b)?n.lanes=32:n.lanes=536870912,null;qi(n)}return b=o.children,o=o.fallback,c?(Sa(),c=n.mode,b=Ul({mode:"hidden",children:b},c),o=$a(o,c,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,c=n.child,c.memoizedState=Wu(a),c.childLanes=qu(e,S,a),n.memoizedState=Xu,o):(xa(n),Yu(n,b))}if(P=e.memoizedState,P!==null&&(b=P.dehydrated,b!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=Zu(e,n,a)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),c=o.fallback,b=n.mode,o=Ul({mode:"visible",children:o.children},b),c=$a(c,b,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,qr(n,e.child,null,a),o=n.child,o.memoizedState=Wu(a),o.childLanes=qu(e,S,a),n.memoizedState=Xu,n=c);else if(xa(n),Df(b)){if(S=b.nextSibling&&b.nextSibling.dataset,S)var tt=S.dgst;S=tt,o=Error(r(419)),o.stack="",o.digest=S,Xs({value:o,source:null,stack:null}),n=Zu(e,n,a)}else if(_n||Ws(e,n,a,!1),S=(a&e.childLanes)!==0,_n||S){if(S=qe,S!==null&&(o=a&-a,o=(o&42)!==0?1:ae(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Pr(e,o),Kn(S,e,o),Tm;b.data==="$?"||hf(),n=Zu(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Qe=di(b.nextSibling),Ln=n,Ue=!0,nr=null,yi=!1,e!==null&&(ni[ii++]=Gi,ni[ii++]=Vi,ni[ii++]=tr,Gi=e.id,Vi=e.overflow,tr=n),n=Yu(n,o.children),n.flags|=4096);return n}return c?(Sa(),c=o.fallback,b=n.mode,P=e.child,tt=P.sibling,o=Hi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,tt!==null?c=Hi(tt,c):(c=$a(c,b,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,b=e.child.memoizedState,b===null?b=Wu(a):(P=b.cachePool,P!==null?(tt=cn._currentValue,P=P.parent!==tt?{parent:tt,pool:tt}:P):P=Sp(),b={baseLanes:b.baseLanes|a,cachePool:P}),c.memoizedState=b,c.childLanes=qu(e,S,a),n.memoizedState=Xu,o):(xa(n),a=e.child,e=a.sibling,a=Hi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Yu(e,n){return n=Ul({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ul(e,n){return e=Wn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Zu(e,n,a){return qr(n,e.child,null,a),e=Yu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Pm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),du(e.return,n,a)}function ju(e,n,a,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function zm(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(bn(e,n,o.children,a),o=un.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pm(e,a,n);else if(e.tag===19)Pm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(dt(un,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Rl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ju(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Rl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}ju(n,!0,a,null,f);break;case"together":ju(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ta|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ws(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Hi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Hi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ku(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fl(e)))}function ux(e,n,a){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),pa(n,cn,e.memoizedState.cache),ks();break;case 27:case 5:It(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Om(e,n,a):(xa(n),e=Yi(e,n,a),e!==null?e.sibling:null);xa(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ws(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return zm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),dt(un,un.current),o)break;return null;case 22:case 23:return n.lanes=0,Cm(e,n,a);case 24:pa(n,cn,e.memoizedState.cache)}return Yi(e,n,a)}function Bm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!Ku(e,a)&&(n.flags&128)===0)return _n=!1,ux(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Ue&&(n.flags&1048576)!==0&&hp(n,ul,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")ru(o)?(e=lr(o,e),n.tag=1,n=Lm(null,n,o,e,a)):(n.tag=0,n=ku(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===D){n.tag=11,n=Am(null,n,o,e,a);break t}else if(c===H){n.tag=14,n=Rm(null,n,o,e,a);break t}}throw n=ut(o)||o,Error(r(306,n,""))}}return n;case 0:return ku(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=lr(o,n.pendingProps),Lm(e,n,o,c,a);case 3:t:{if(At(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,xu(e,n),Js(n,o,null,a);var S=n.memoizedState;if(o=S.cache,pa(n,cn,o),o!==f.cache&&hu(n,[cn],a,!0),Qs(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Nm(e,n,o,a);break t}else if(o!==c){c=ti(Error(r(424)),n),Xs(c),n=Nm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=di(e.firstChild),Ln=n,Ue=!0,nr=null,yi=!0,a=mm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ks(),o===c){n=Yi(e,n,a);break t}bn(e,n,o,a)}n=n.child}return n;case 26:return Dl(e,n),e===null?(a=Gg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ue||(a=n.type,e=n.pendingProps,o=Wl(Mt.current).createElement(a),o[on]=n,o[Mn]=e,An(o,a,e),nn(o),n.stateNode=o):n.memoizedState=Gg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return It(n),e===null&&Ue&&(o=n.stateNode=Ig(n.type,n.pendingProps,Mt.current),Ln=n,yi=!0,c=Qe,Ca(n.type)?(Uf=c,Qe=di(o.firstChild)):Qe=c),bn(e,n,n.pendingProps.children,a),Dl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ue&&((c=o=Qe)&&(o=Ix(o,n.type,n.pendingProps,yi),o!==null?(n.stateNode=o,Ln=n,Qe=di(o.firstChild),yi=!1,c=!0):c=!1),c||ir(n)),It(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,Rf(c,f)?o=null:S!==null&&Rf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Tu(e,n,nx,null,null,a),yo._currentValue=c),Dl(e,n),bn(e,n,o,a),n.child;case 6:return e===null&&Ue&&((e=a=Qe)&&(a=Fx(a,n.pendingProps,yi),a!==null?(n.stateNode=a,Ln=n,Qe=null,e=!0):e=!1),e||ir(n)),null;case 13:return Om(e,n,a);case 4:return At(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=qr(n,null,o,a):bn(e,n,o,a),n.child;case 11:return Am(e,n,n.type,n.pendingProps,a);case 7:return bn(e,n,n.pendingProps,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,pa(n,n.type,o.value),bn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,rr(n),c=wn(c),o=o(c),n.flags|=1,bn(e,n,o,a),n.child;case 14:return Rm(e,n,n.type,n.pendingProps,a);case 15:return wm(e,n,n.type,n.pendingProps,a);case 19:return zm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Ul(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Hi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Cm(e,n,a);case 24:return rr(n),o=wn(cn),e===null?(c=gu(),c===null&&(c=qe,f=pu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},vu(n),pa(n,cn,c)):((e.lanes&a)!==0&&(xu(e,n),Js(n,null,null,a),Qs()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,cn,o)):(o=f.cache,pa(n,cn,o),o!==c.cache&&hu(n,[cn],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Zi(e){e.flags|=4}function Im(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qg(n)){if(n=ai.current,n!==null&&((Te&4194048)===Te?Mi!==null:(Te&62914560)!==Te&&(Te&536870912)===0||n!==Mi))throw js=_u,yp;e.flags|=8192}}function Ll(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ut():536870912,e.lanes|=n,Kr|=n)}function ro(e,n){if(!Ue)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function fx(e,n,a){var o=n.pendingProps;switch(cu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Xi(cn),Zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vs(n)?Zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gp())),je(n),null;case 26:return a=n.memoizedState,e===null?(Zi(n),a!==null?(je(n),Im(n,a)):(je(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Zi(n),je(n),Im(n,a)):(je(n),n.flags&=-16777217):(e.memoizedProps!==o&&Zi(n),je(n),n.flags&=-16777217),null;case 27:oe(n),a=Mt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return je(n),null}e=Y.current,Vs(n)?pp(n):(e=Ig(c,o,a),n.stateNode=e,Zi(n))}return je(n),null;case 5:if(oe(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return je(n),null}if(e=Y.current,Vs(n))pp(n);else{switch(c=Wl(Mt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[on]=n,e[Mn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(An(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Zi(n)}}return je(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Mt.current,Vs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Ln,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ug(e.nodeValue,a)),e||ir(n)}else e=Wl(e).createTextNode(o),e[on]=n,n.stateNode=e}return je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Vs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else ks(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),c=!1}else c=gp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(qi(n),n):(qi(n),null)}if(qi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),je(n),null;case 4:return Zt(),e===null&&Mf(n.stateNode.containerInfo),je(n),null;case 10:return Xi(n.type),je(n),null;case 19:if(gt(un),c=n.memoizedState,c===null)return je(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)ro(c,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Rl(e),f!==null){for(n.flags|=128,ro(c,!1),e=f.updateQueue,n.updateQueue=e,Ll(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)dp(a,e),a=a.sibling;return dt(un,un.current&1|2),n.child}e=e.sibling}c.tail!==null&&_e()>Pl&&(n.flags|=128,o=!0,ro(c,!1),n.lanes=4194304)}else{if(!o)if(e=Rl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Ll(n,e),ro(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ue)return je(n),null}else 2*_e()-c.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,o=!0,ro(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=_e(),n.sibling=null,e=un.current,dt(un,o?e&1|2:e&1),n):(je(n),null);case 22:case 23:return qi(n),Eu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&gt(sr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(cn),je(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function dx(e,n){switch(cu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(cn),Zt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return oe(n),null;case 13:if(qi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ks()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return gt(un),null;case 4:return Zt(),null;case 10:return Xi(n.type),null;case 22:case 23:return qi(n),Eu(),e!==null&&gt(sr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(cn),null;case 25:return null;default:return null}}function Fm(e,n){switch(cu(n),n.tag){case 3:Xi(cn),Zt();break;case 26:case 27:case 5:oe(n);break;case 4:Zt();break;case 13:qi(n);break;case 19:gt(un);break;case 10:Xi(n.type);break;case 22:case 23:qi(n),Eu(),e!==null&&gt(sr);break;case 24:Xi(cn)}}function so(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==c)}}catch(b){Xe(n,n.return,b)}}function ya(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var S=o.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,c=n;var P=a,tt=b;try{tt()}catch(pt){Xe(c,P,pt)}}}o=o.next}while(o!==f)}}catch(pt){Xe(n,n.return,pt)}}function Hm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Rp(n,a)}catch(o){Xe(e,e.return,o)}}}function Gm(e,n,a){a.props=lr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Xe(e,n,o)}}function oo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Xe(e,n,c)}}function Ei(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Xe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Xe(e,n,c)}else a.current=null}function Vm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Xe(e,e.return,c)}}function Qu(e,n,a){try{var o=e.stateNode;Nx(o,e.type,a,n),o[Mn]=n}catch(c){Xe(e,e.return,c)}}function km(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function Ju(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||km(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $u(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xl));else if(o!==4&&(o===27&&Ca(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for($u(e,n,a),e=e.sibling;e!==null;)$u(e,n,a),e=e.sibling}function Nl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Nl(e,n,a),e=e.sibling;e!==null;)Nl(e,n,a),e=e.sibling}function Xm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);An(n,o,a),n[on]=e,n[Mn]=a}catch(f){Xe(e,e.return,f)}}var ji=!1,en=!1,tf=!1,Wm=typeof WeakSet=="function"?WeakSet:Set,vn=null;function hx(e,n){if(e=e.containerInfo,Tf=Ql,e=np(e),Jc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,b=-1,P=-1,tt=0,pt=0,xt=e,it=null;e:for(;;){for(var at;xt!==a||c!==0&&xt.nodeType!==3||(b=S+c),xt!==f||o!==0&&xt.nodeType!==3||(P=S+o),xt.nodeType===3&&(S+=xt.nodeValue.length),(at=xt.firstChild)!==null;)it=xt,xt=at;for(;;){if(xt===e)break e;if(it===a&&++tt===c&&(b=S),it===f&&++pt===o&&(P=S),(at=xt.nextSibling)!==null)break;xt=it,it=xt.parentNode}xt=at}a=b===-1||P===-1?null:{start:b,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Af={focusedElem:e,selectionRange:a},Ql=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ie=lr(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ie,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Xe(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Cf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function qm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(e,a),o&4&&so(5,a);break;case 1:if(Ma(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Xe(a,a.return,S)}else{var c=lr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Xe(a,a.return,S)}}o&64&&Hm(a),o&512&&oo(a,a.return);break;case 3:if(Ma(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Rp(e,n)}catch(S){Xe(a,a.return,S)}}break;case 27:n===null&&o&4&&Xm(a);case 26:case 5:Ma(e,a),n===null&&o&4&&Vm(a),o&512&&oo(a,a.return);break;case 12:Ma(e,a);break;case 13:Ma(e,a),o&4&&jm(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Mx.bind(null,a),Hx(e,a))));break;case 22:if(o=a.memoizedState!==null||ji,!o){n=n!==null&&n.memoizedState!==null||en,c=ji;var f=en;ji=o,(en=n)&&!f?Ea(e,a,(a.subtreeFlags&8772)!==0):Ma(e,a),ji=c,en=f}break;case 30:break;default:Ma(e,a)}}function Ym(e){var n=e.alternate;n!==null&&(e.alternate=null,Ym(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ua(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,In=!1;function Ki(e,n,a){for(a=a.child;a!==null;)Zm(e,n,a),a=a.sibling}function Zm(e,n,a){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(mt,a)}catch{}switch(a.tag){case 26:en||Ei(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||Ei(a,n);var o=Ze,c=In;Ca(a.type)&&(Ze=a.stateNode,In=!1),Ki(e,n,a),_o(a.stateNode),Ze=o,In=c;break;case 5:en||Ei(a,n);case 6:if(o=Ze,c=In,Ze=null,Ki(e,n,a),Ze=o,In=c,Ze!==null)if(In)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Xe(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Xe(a,n,f)}break;case 18:Ze!==null&&(In?(e=Ze,zg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),To(e)):zg(Ze,a.stateNode));break;case 4:o=Ze,c=In,Ze=a.stateNode.containerInfo,In=!0,Ki(e,n,a),Ze=o,In=c;break;case 0:case 11:case 14:case 15:en||ya(2,a,n),en||ya(4,a,n),Ki(e,n,a);break;case 1:en||(Ei(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Gm(a,n,o)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:en=(o=en)||a.memoizedState!==null,Ki(e,n,a),en=o;break;default:Ki(e,n,a)}}function jm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{To(e)}catch(a){Xe(n,n.return,a)}}function px(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Wm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Wm),n;default:throw Error(r(435,e.tag))}}function ef(e,n){var a=px(e);n.forEach(function(o){var c=Ex.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function qn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,S=n,b=S;t:for(;b!==null;){switch(b.tag){case 27:if(Ca(b.type)){Ze=b.stateNode,In=!1;break t}break;case 5:Ze=b.stateNode,In=!1;break t;case 3:case 4:Ze=b.stateNode.containerInfo,In=!0;break t}b=b.return}if(Ze===null)throw Error(r(160));Zm(f,S,c),Ze=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Km(n,e),n=n.sibling}var fi=null;function Km(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(n,e),Yn(e),o&4&&(ya(3,e,e.return),so(3,e),ya(5,e,e.return));break;case 1:qn(n,e),Yn(e),o&512&&(en||a===null||Ei(a,a.return)),o&64&&ji&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=fi;if(qn(n,e),Yn(e),o&512&&(en||a===null||Ei(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ca]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),An(f,o,a),f[on]=e,nn(f),o=f;break t;case"link":var S=Xg("link","href",c).get(o+(a.href||""));if(S){for(var b=0;b<S.length;b++)if(f=S[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(b,1);break e}}f=c.createElement(o),An(f,o,a),c.head.appendChild(f);break;case"meta":if(S=Xg("meta","content",c).get(o+(a.content||""))){for(b=0;b<S.length;b++)if(f=S[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(b,1);break e}}f=c.createElement(o),An(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[on]=e,nn(f),o=f}e.stateNode=o}else Wg(c,e.type,e.stateNode);else e.stateNode=kg(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Wg(c,e.type,e.stateNode):kg(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Qu(e,e.memoizedProps,a.memoizedProps)}break;case 27:qn(n,e),Yn(e),o&512&&(en||a===null||Ei(a,a.return)),a!==null&&o&4&&Qu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,e),Yn(e),o&512&&(en||a===null||Ei(a,a.return)),e.flags&32){c=e.stateNode;try{Si(c,"")}catch(at){Xe(e,e.return,at)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Qu(e,c,a!==null?a.memoizedProps:c)),o&1024&&(tf=!0);break;case 6:if(qn(n,e),Yn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(at){Xe(e,e.return,at)}}break;case 3:if(Zl=null,c=fi,fi=ql(n.containerInfo),qn(n,e),fi=c,Yn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{To(n.containerInfo)}catch(at){Xe(e,e.return,at)}tf&&(tf=!1,Qm(e));break;case 4:o=fi,fi=ql(e.stateNode.containerInfo),qn(n,e),Yn(e),fi=o;break;case 12:qn(n,e),Yn(e);break;case 13:qn(n,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(lf=_e()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ef(e,o)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,tt=ji,pt=en;if(ji=tt||c,en=pt||P,qn(n,e),en=pt,ji=tt,Yn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||ji||en||cr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{b=P.stateNode;var xt=P.memoizedProps.style,it=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;b.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(at){Xe(P,P.return,at)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(at){Xe(P,P.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ef(e,a))));break;case 19:qn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ef(e,o)));break;case 30:break;case 21:break;default:qn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(km(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Ju(e);Nl(e,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(Si(S,""),a.flags&=-33);var b=Ju(e);Nl(e,b,S);break;case 3:case 4:var P=a.stateNode.containerInfo,tt=Ju(e);$u(e,tt,P);break;default:throw Error(r(161))}}catch(pt){Xe(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Qm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Qm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)qm(e,n.alternate,n),n=n.sibling}function cr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),cr(n);break;case 1:Ei(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Gm(n,n.return,a),cr(n);break;case 27:_o(n.stateNode);case 26:case 5:Ei(n,n.return),cr(n);break;case 22:n.memoizedState===null&&cr(n);break;case 30:cr(n);break;default:cr(n)}e=e.sibling}}function Ea(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Ea(c,f,a),so(4,f);break;case 1:if(Ea(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){Xe(o,o.return,tt)}if(o=f,c=o.updateQueue,c!==null){var b=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Ap(P[c],b)}catch(tt){Xe(o,o.return,tt)}}a&&S&64&&Hm(f),oo(f,f.return);break;case 27:Xm(f);case 26:case 5:Ea(c,f,a),a&&o===null&&S&4&&Vm(f),oo(f,f.return);break;case 12:Ea(c,f,a);break;case 13:Ea(c,f,a),a&&S&4&&jm(c,f);break;case 22:f.memoizedState===null&&Ea(c,f,a),oo(f,f.return);break;case 30:break;default:Ea(c,f,a)}n=n.sibling}}function nf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&qs(a))}function af(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qs(e))}function bi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jm(e,n,a,o),n=n.sibling}function Jm(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,o),c&2048&&so(9,n);break;case 1:bi(e,n,a,o);break;case 3:bi(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qs(e)));break;case 12:if(c&2048){bi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,b=f.onPostCommit;typeof b=="function"&&b(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Xe(n,n.return,P)}}else bi(e,n,a,o);break;case 13:bi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?bi(e,n,a,o):lo(e,n):f._visibility&2?bi(e,n,a,o):(f._visibility|=2,Yr(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&nf(S,n);break;case 24:bi(e,n,a,o),c&2048&&af(n.alternate,n);break;default:bi(e,n,a,o)}}function Yr(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,b=a,P=o,tt=S.flags;switch(S.tag){case 0:case 11:case 15:Yr(f,S,b,P,c),so(8,S);break;case 23:break;case 22:var pt=S.stateNode;S.memoizedState!==null?pt._visibility&2?Yr(f,S,b,P,c):lo(f,S):(pt._visibility|=2,Yr(f,S,b,P,c)),c&&tt&2048&&nf(S.alternate,S);break;case 24:Yr(f,S,b,P,c),c&&tt&2048&&af(S.alternate,S);break;default:Yr(f,S,b,P,c)}n=n.sibling}}function lo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:lo(a,o),c&2048&&nf(o.alternate,o);break;case 24:lo(a,o),c&2048&&af(o.alternate,o);break;default:lo(a,o)}n=n.sibling}}var co=8192;function Zr(e){if(e.subtreeFlags&co)for(e=e.child;e!==null;)$m(e),e=e.sibling}function $m(e){switch(e.tag){case 26:Zr(e),e.flags&co&&e.memoizedState!==null&&$x(fi,e.memoizedState,e.memoizedProps);break;case 5:Zr(e);break;case 3:case 4:var n=fi;fi=ql(e.stateNode.containerInfo),Zr(e),fi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=co,co=16777216,Zr(e),co=n):Zr(e));break;default:Zr(e)}}function tg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function uo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,ng(o,e)}tg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)eg(e),e=e.sibling}function eg(e){switch(e.tag){case 0:case 11:case 15:uo(e),e.flags&2048&&ya(9,e,e.return);break;case 3:uo(e);break;case 12:uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ol(e)):uo(e);break;default:uo(e)}}function Ol(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,ng(o,e)}tg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}e=e.sibling}}function ng(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:qs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else t:for(a=e;vn!==null;){o=vn;var c=o.sibling,f=o.return;if(Ym(o),o===a){vn=null;break t}if(c!==null){c.return=f,vn=c;break t}vn=f}}}var mx={getCacheForType:function(e){var n=wn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},gx=typeof WeakMap=="function"?WeakMap:Map,Pe=0,qe=null,ve=null,Te=0,ze=0,Zn=null,ba=!1,jr=!1,rf=!1,Qi=0,Je=0,Ta=0,ur=0,sf=0,ri=0,Kr=0,fo=null,Fn=null,of=!1,lf=0,Pl=1/0,zl=null,Aa=null,Tn=0,Ra=null,Qr=null,Jr=0,cf=0,uf=null,ig=null,ho=0,ff=null;function jn(){if((Pe&2)!==0&&Te!==0)return Te&-Te;if(L.T!==null){var e=Fr;return e!==0?e:vf()}return Re()}function ag(){ri===0&&(ri=(Te&536870912)===0||Ue?W():536870912);var e=ai.current;return e!==null&&(e.flags|=32),ri}function Kn(e,n,a){(e===qe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&($r(e,0),wa(e,Te,ri,!1)),zt(e,a),((Pe&2)===0||e!==qe)&&(e===qe&&((Pe&2)===0&&(ur|=a),Je===4&&wa(e,Te,ri,!1)),Ti(e))}function rg(e,n,a){if((Pe&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||wt(e,n),c=o?xx(e,n):pf(e,n,!0),f=o;do{if(c===0){jr&&!o&&wa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!_x(a)){c=pf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var b=e;c=fo;var P=b.current.memoizedState.isDehydrated;if(P&&($r(b,S).flags|=256),S=pf(b,S,!1),S!==2){if(rf&&!P){b.errorRecoveryDisabledLanes|=f,ur|=f,c=4;break t}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){$r(e,0),wa(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:wa(o,n,ri,!ba);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=lf+300-_e(),10<c)){if(wa(o,n,ri,!ba),Kt(o,0,!0)!==0)break t;o.timeoutHandle=Og(sg.bind(null,o,a,Fn,zl,of,n,ri,ur,Kr,ba,f,2,-0,0),c);break t}sg(o,a,Fn,zl,of,n,ri,ur,Kr,ba,f,0,-0,0)}}break}while(!0);Ti(e)}function sg(e,n,a,o,c,f,S,b,P,tt,pt,xt,it,at){if(e.timeoutHandle=-1,xt=n.subtreeFlags,(xt&8192||(xt&16785408)===16785408)&&(So={stylesheets:null,count:0,unsuspend:Jx},$m(n),xt=tS(),xt!==null)){e.cancelPendingCommit=xt(hg.bind(null,e,n,f,a,o,c,S,b,P,pt,1,it,at)),wa(e,f,S,!tt);return}hg(e,n,f,a,o,c,S,b,P)}function _x(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Xn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(e,n,a,o){n&=~sf,n&=~ur,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Ot(c),S=1<<f;o[f]=-1,c&=~S}a!==0&&St(e,a,n)}function Bl(){return(Pe&6)===0?(po(0),!1):!0}function df(){if(ve!==null){if(ze===0)var e=ve.return;else e=ve,ki=ar=null,wu(e),Wr=null,io=0,e=ve;for(;e!==null;)Fm(e.alternate,e),e=e.return;ve=null}}function $r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Px(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),df(),qe=e,ve=a=Hi(e.current,null),Te=n,ze=0,Zn=null,ba=!1,jr=wt(e,n),rf=!1,Kr=ri=sf=ur=Ta=Je=0,Fn=fo=null,of=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Ot(o),f=1<<c;n|=e[c],o&=~f}return Qi=n,rl(),a}function og(e,n){de=null,L.H=bl,n===Zs||n===pl?(n=bp(),ze=3):n===yp?(n=bp(),ze=4):ze=n===Tm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,ve===null&&(Je=1,Cl(e,ti(n,e.current)))}function lg(){var e=L.H;return L.H=bl,e===null?bl:e}function cg(){var e=L.A;return L.A=mx,e}function hf(){Je=4,ba||(Te&4194048)!==Te&&ai.current!==null||(jr=!0),(Ta&134217727)===0&&(ur&134217727)===0||qe===null||wa(qe,Te,ri,!1)}function pf(e,n,a){var o=Pe;Pe|=2;var c=lg(),f=cg();(qe!==e||Te!==n)&&(zl=null,$r(e,n)),n=!1;var S=Je;t:do try{if(ze!==0&&ve!==null){var b=ve,P=Zn;switch(ze){case 8:df(),S=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var tt=ze;if(ze=0,Zn=null,ts(e,b,P,tt),a&&jr){S=0;break t}break;default:tt=ze,ze=0,Zn=null,ts(e,b,P,tt)}}vx(),S=Je;break}catch(pt){og(e,pt)}while(!0);return n&&e.shellSuspendCounter++,ki=ar=null,Pe=o,L.H=c,L.A=f,ve===null&&(qe=null,Te=0,rl()),S}function vx(){for(;ve!==null;)ug(ve)}function xx(e,n){var a=Pe;Pe|=2;var o=lg(),c=cg();qe!==e||Te!==n?(zl=null,Pl=_e()+500,$r(e,n)):jr=wt(e,n);t:do try{if(ze!==0&&ve!==null){n=ve;var f=Zn;e:switch(ze){case 1:ze=0,Zn=null,ts(e,n,f,1);break;case 2:case 9:if(Mp(f)){ze=0,Zn=null,fg(n);break}n=function(){ze!==2&&ze!==9||qe!==e||(ze=7),Ti(e)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Mp(f)?(ze=0,Zn=null,fg(n)):(ze=0,Zn=null,ts(e,n,f,7));break;case 5:var S=null;switch(ve.tag){case 26:S=ve.memoizedState;case 5:case 27:var b=ve;if(!S||qg(S)){ze=0,Zn=null;var P=b.sibling;if(P!==null)ve=P;else{var tt=b.return;tt!==null?(ve=tt,Il(tt)):ve=null}break e}}ze=0,Zn=null,ts(e,n,f,5);break;case 6:ze=0,Zn=null,ts(e,n,f,6);break;case 8:df(),Je=6;break t;default:throw Error(r(462))}}Sx();break}catch(pt){og(e,pt)}while(!0);return ki=ar=null,L.H=o,L.A=c,Pe=a,ve!==null?0:(qe=null,Te=0,rl(),Je)}function Sx(){for(;ve!==null&&!yn();)ug(ve)}function ug(e){var n=Bm(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Il(e):ve=n}function fg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Um(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=Um(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:wu(n);default:Fm(a,n),n=ve=dp(n,Qi),n=Bm(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Il(e):ve=n}function ts(e,n,a,o){ki=ar=null,wu(n),Wr=null,io=0;var c=n.return;try{if(cx(e,c,n,a,Te)){Je=1,Cl(e,ti(a,e.current)),ve=null;return}}catch(f){if(c!==null)throw ve=c,f;Je=1,Cl(e,ti(a,e.current)),ve=null;return}n.flags&32768?(Ue||o===1?e=!0:jr||(Te&536870912)!==0?e=!1:(ba=e=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),dg(n,e)):Il(n)}function Il(e){var n=e;do{if((n.flags&32768)!==0){dg(n,ba);return}e=n.return;var a=fx(n.alternate,n,Qi);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);Je===0&&(Je=5)}function dg(e,n){do{var a=dx(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);Je=6,ve=null}function hg(e,n,a,o,c,f,S,b,P){e.cancelPendingCommit=null;do Fl();while(Tn!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=iu,Rt(e,a,f,S,b,P),e===qe&&(ve=qe=null,Te=0),Qr=n,Ra=e,Jr=a,cf=f,uf=c,ig=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bx(se,function(){return vg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,c=q.p,q.p=2,S=Pe,Pe|=4;try{hx(e,n,a)}finally{Pe=S,q.p=c,L.T=o}}Tn=1,pg(),mg(),gg()}}function pg(){if(Tn===1){Tn=0;var e=Ra,n=Qr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=q.p;q.p=2;var c=Pe;Pe|=4;try{Km(n,e);var f=Af,S=np(e.containerInfo),b=f.focusedElem,P=f.selectionRange;if(S!==b&&b&&b.ownerDocument&&ep(b.ownerDocument.documentElement,b)){if(P!==null&&Jc(b)){var tt=P.start,pt=P.end;if(pt===void 0&&(pt=tt),"selectionStart"in b)b.selectionStart=tt,b.selectionEnd=Math.min(pt,b.value.length);else{var xt=b.ownerDocument||document,it=xt&&xt.defaultView||window;if(it.getSelection){var at=it.getSelection(),ie=b.textContent.length,te=Math.min(P.start,ie),He=P.end===void 0?te:Math.min(P.end,ie);!at.extend&&te>He&&(S=He,He=te,te=S);var Z=tp(b,te),X=tp(b,He);if(Z&&X&&(at.rangeCount!==1||at.anchorNode!==Z.node||at.anchorOffset!==Z.offset||at.focusNode!==X.node||at.focusOffset!==X.offset)){var $=xt.createRange();$.setStart(Z.node,Z.offset),at.removeAllRanges(),te>He?(at.addRange($),at.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),at.addRange($))}}}}for(xt=[],at=b;at=at.parentNode;)at.nodeType===1&&xt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<xt.length;b++){var _t=xt[b];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Ql=!!Tf,Af=Tf=null}finally{Pe=c,q.p=o,L.T=a}}e.current=n,Tn=2}}function mg(){if(Tn===2){Tn=0;var e=Ra,n=Qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=q.p;q.p=2;var c=Pe;Pe|=4;try{qm(e,n.alternate,n)}finally{Pe=c,q.p=o,L.T=a}}Tn=3}}function gg(){if(Tn===4||Tn===3){Tn=0,Ae();var e=Ra,n=Qr,a=Jr,o=ig;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,Qr=Ra=null,_g(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Aa=null),Oe(a),n=n.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(mt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,c=q.p,q.p=2,L.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var b=o[S];f(b.value,{componentStack:b.stack})}}finally{L.T=n,q.p=c}}(Jr&3)!==0&&Fl(),Ti(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===ff?ho++:(ho=0,ff=e):ho=0,po(0)}}function _g(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,qs(n)))}function Fl(e){return pg(),mg(),gg(),vg()}function vg(){if(Tn!==5)return!1;var e=Ra,n=cf;cf=0;var a=Oe(Jr),o=L.T,c=q.p;try{q.p=32>a?32:a,L.T=null,a=uf,uf=null;var f=Ra,S=Jr;if(Tn=0,Qr=Ra=null,Jr=0,(Pe&6)!==0)throw Error(r(331));var b=Pe;if(Pe|=4,eg(f.current),Jm(f,f.current,S,a),Pe=b,po(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(mt,f)}catch{}return!0}finally{q.p=c,L.T=o,_g(e,n)}}function xg(e,n,a){n=ti(a,n),n=Vu(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(zt(e,2),Ti(e))}function Xe(e,n,a){if(e.tag===3)xg(e,e,a);else for(;n!==null;){if(n.tag===3){xg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))){e=ti(a,e),a=Em(2),o=_a(n,a,2),o!==null&&(bm(a,o,n,e),zt(o,2),Ti(o));break}}n=n.return}}function mf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new gx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(rf=!0,c.add(a),e=yx.bind(null,e,n,a),n.then(e,e))}function yx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(Te&a)===a&&(Je===4||Je===3&&(Te&62914560)===Te&&300>_e()-lf?(Pe&2)===0&&$r(e,0):sf|=a,Kr===Te&&(Kr=0)),Ti(e)}function Sg(e,n){n===0&&(n=Ut()),e=Pr(e,n),e!==null&&(zt(e,n),Ti(e))}function Mx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Sg(e,a)}function Ex(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Sg(e,a)}function bx(e,n){return ye(e,n)}var Hl=null,es=null,gf=!1,Gl=!1,_f=!1,fr=0;function Ti(e){e!==es&&e.next===null&&(es===null?Hl=es=e:es=es.next=e),Gl=!0,gf||(gf=!0,Ax())}function po(e,n){if(!_f&&Gl){_f=!0;do for(var a=!1,o=Hl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var S=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=c&~(S&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,bg(o,f))}else f=Te,f=Kt(o,o===qe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||wt(o,f)||(a=!0,bg(o,f));o=o.next}while(a);_f=!1}}function Tx(){yg()}function yg(){Gl=gf=!1;var e=0;fr!==0&&(Ox()&&(e=fr),fr=0);for(var n=_e(),a=null,o=Hl;o!==null;){var c=o.next,f=Mg(o,n);f===0?(o.next=null,a===null?Hl=c:a.next=c,c===null&&(es=a)):(a=o,(e!==0||(f&3)!==0)&&(Gl=!0)),o=c}po(e)}function Mg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Ot(f),b=1<<S,P=c[S];P===-1?((b&a)===0||(b&o)!==0)&&(c[S]=re(b,n)):P<=n&&(e.expiredLanes|=b),f&=~b}if(n=qe,a=Te,a=Kt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&V(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||wt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&V(o),Oe(a)){case 2:case 8:a=Qt;break;case 32:a=se;break;case 268435456:a=N;break;default:a=se}return o=Eg.bind(null,e),a=ye(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&V(o),e.callbackPriority=2,e.callbackNode=null,2}function Eg(e,n){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Fl()&&e.callbackNode!==a)return null;var o=Te;return o=Kt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(rg(e,o,n),Mg(e,_e()),e.callbackNode!=null&&e.callbackNode===a?Eg.bind(null,e):null)}function bg(e,n){if(Fl())return null;rg(e,n,!0)}function Ax(){zx(function(){(Pe&6)!==0?ye(Me,Tx):yg()})}function vf(){return fr===0&&(fr=W()),fr}function Tg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jo(""+e)}function Ag(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Rx(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Tg((c[Mn]||null).action),S=o.submitter;S&&(n=(n=S[Mn]||null)?Tg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var b=new nl("action","action",null,o,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(fr!==0){var P=S?Ag(c,S):new FormData(c);Bu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(b.preventDefault(),P=S?Ag(c,S):new FormData(c),Bu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var xf=0;xf<nu.length;xf++){var Sf=nu[xf],wx=Sf.toLowerCase(),Cx=Sf[0].toUpperCase()+Sf.slice(1);ui(wx,"on"+Cx)}ui(rp,"onAnimationEnd"),ui(sp,"onAnimationIteration"),ui(op,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(q0,"onTransitionRun"),ui(Y0,"onTransitionStart"),ui(Z0,"onTransitionCancel"),ui(lp,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zi("onBeforeInput",["compositionend","keypress","textInput","paste"]),zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function Rg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var b=o[S],P=b.instance,tt=b.currentTarget;if(b=b.listener,P!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=tt;try{f(c)}catch(pt){wl(pt)}c.currentTarget=null,f=P}else for(S=0;S<o.length;S++){if(b=o[S],P=b.instance,tt=b.currentTarget,b=b.listener,P!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=tt;try{f(c)}catch(pt){wl(pt)}c.currentTarget=null,f=P}}}}function xe(e,n){var a=n[Ya];a===void 0&&(a=n[Ya]=new Set);var o=e+"__bubble";a.has(o)||(wg(n,e,2,!1),a.add(o))}function yf(e,n,a){var o=0;n&&(o|=4),wg(a,e,o,n)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Mf(e){if(!e[Vl]){e[Vl]=!0,Ko.forEach(function(a){a!=="selectionchange"&&(Dx.has(a)||yf(a,!1,e),yf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vl]||(n[Vl]=!0,yf("selectionchange",!1,n))}}function wg(e,n,a,o){switch(Jg(n)){case 2:var c=iS;break;case 8:c=aS;break;default:c=zf}a=c.bind(null,n,a,e),c=void 0,!kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Ef(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var b=o.stateNode.containerInfo;if(b===c)break;if(S===4)for(S=o.return;S!==null;){var P=S.tag;if((P===3||P===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;b!==null;){if(S=Oi(b),S===null)return;if(P=S.tag,P===5||P===6||P===26||P===27){o=f=S;continue t}b=b.parentNode}}o=o.return}Ph(function(){var tt=f,pt=Gc(a),xt=[];t:{var it=cp.get(e);if(it!==void 0){var at=nl,ie=e;switch(e){case"keypress":if(tl(a)===0)break t;case"keydown":case"keyup":at=b0;break;case"focusin":ie="focus",at=Yc;break;case"focusout":ie="blur",at=Yc;break;case"beforeblur":case"afterblur":at=Yc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=d0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=R0;break;case rp:case sp:case op:at=m0;break;case lp:at=C0;break;case"scroll":case"scrollend":at=u0;break;case"wheel":at=U0;break;case"copy":case"cut":case"paste":at=_0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Hh;break;case"toggle":case"beforetoggle":at=N0}var te=(n&4)!==0,He=!te&&(e==="scroll"||e==="scrollend"),Z=te?it!==null?it+"Capture":null:it;te=[];for(var X=tt,$;X!==null;){var _t=X;if($=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||$===null||Z===null||(_t=Ns(X,Z),_t!=null&&te.push(go(X,_t,$))),He)break;X=X.return}0<te.length&&(it=new at(it,ie,null,a,pt),xt.push({event:it,listeners:te}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",it&&a!==Hc&&(ie=a.relatedTarget||a.fromElement)&&(Oi(ie)||ie[Pn]))break t;if((at||it)&&(it=pt.window===pt?pt:(it=pt.ownerDocument)?it.defaultView||it.parentWindow:window,at?(ie=a.relatedTarget||a.toElement,at=tt,ie=ie?Oi(ie):null,ie!==null&&(He=u(ie),te=ie.tag,ie!==He||te!==5&&te!==27&&te!==6)&&(ie=null)):(at=null,ie=tt),at!==ie)){if(te=Ih,_t="onMouseLeave",Z="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(te=Hh,_t="onPointerLeave",Z="onPointerEnter",X="pointer"),He=at==null?it:ja(at),$=ie==null?it:ja(ie),it=new te(_t,X+"leave",at,a,pt),it.target=He,it.relatedTarget=$,_t=null,Oi(pt)===tt&&(te=new te(Z,X+"enter",ie,a,pt),te.target=$,te.relatedTarget=He,_t=te),He=_t,at&&ie)e:{for(te=at,Z=ie,X=0,$=te;$;$=ns($))X++;for($=0,_t=Z;_t;_t=ns(_t))$++;for(;0<X-$;)te=ns(te),X--;for(;0<$-X;)Z=ns(Z),$--;for(;X--;){if(te===Z||Z!==null&&te===Z.alternate)break e;te=ns(te),Z=ns(Z)}te=null}else te=null;at!==null&&Cg(xt,it,at,te,!1),ie!==null&&He!==null&&Cg(xt,He,ie,te,!0)}}t:{if(it=tt?ja(tt):window,at=it.nodeName&&it.nodeName.toLowerCase(),at==="select"||at==="input"&&it.type==="file")var Ht=Zh;else if(qh(it))if(jh)Ht=k0;else{Ht=G0;var me=H0}else at=it.nodeName,!at||at.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?tt&&Fc(tt.elementType)&&(Ht=Zh):Ht=V0;if(Ht&&(Ht=Ht(e,tt))){Yh(xt,Ht,a,pt);break t}me&&me(e,it,tt),e==="focusout"&&tt&&it.type==="number"&&tt.memoizedProps.value!=null&&Rn(it,"number",it.value)}switch(me=tt?ja(tt):window,e){case"focusin":(qh(me)||me.contentEditable==="true")&&(Lr=me,$c=tt,Gs=null);break;case"focusout":Gs=$c=Lr=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,ip(xt,a,pt);break;case"selectionchange":if(W0)break;case"keydown":case"keyup":ip(xt,a,pt)}var Yt;if(jc)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Ur?Xh(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(Gh&&a.locale!=="ko"&&(Ur||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Ur&&(Yt=zh()):(ha=pt,Xc="value"in ha?ha.value:ha.textContent,Ur=!0)),me=kl(tt,ee),0<me.length&&(ee=new Fh(ee,e,null,a,pt),xt.push({event:ee,listeners:me}),Yt?ee.data=Yt:(Yt=Wh(a),Yt!==null&&(ee.data=Yt)))),(Yt=P0?z0(e,a):B0(e,a))&&(ee=kl(tt,"onBeforeInput"),0<ee.length&&(me=new Fh("onBeforeInput","beforeinput",null,a,pt),xt.push({event:me,listeners:ee}),me.data=Yt)),Rx(xt,e,tt,a,pt)}Rg(xt,n)})}function go(e,n,a){return{instance:e,listener:n,currentTarget:a}}function kl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ns(e,a),c!=null&&o.unshift(go(e,c,f)),c=Ns(e,n),c!=null&&o.push(go(e,c,f))),e.tag===3)return o;e=e.return}return[]}function ns(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Cg(e,n,a,o,c){for(var f=n._reactName,S=[];a!==null&&a!==o;){var b=a,P=b.alternate,tt=b.stateNode;if(b=b.tag,P!==null&&P===o)break;b!==5&&b!==26&&b!==27||tt===null||(P=tt,c?(tt=Ns(a,f),tt!=null&&S.unshift(go(a,tt,P))):c||(tt=Ns(a,f),tt!=null&&S.push(go(a,tt,P)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Ux=/\r\n?/g,Lx=/\u0000|\uFFFD/g;function Dg(e){return(typeof e=="string"?e:""+e).replace(Ux,`
`).replace(Lx,"")}function Ug(e,n){return n=Dg(n),Dg(e)===n}function Xl(){}function Fe(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Si(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Si(e,""+o);break;case"className":Ct(e,"class",o);break;case"tabIndex":Ct(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(e,a,o);break;case"style":Nh(e,o,f);break;case"data":if(n!=="object"){Ct(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Jo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Fe(e,n,"name",c.name,c,null),Fe(e,n,"formEncType",c.formEncType,c,null),Fe(e,n,"formMethod",c.formMethod,c,null),Fe(e,n,"formTarget",c.formTarget,c,null)):(Fe(e,n,"encType",c.encType,c,null),Fe(e,n,"method",c.method,c,null),Fe(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Jo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Xl);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Jo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Tt(e,"popover",o);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Tt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=l0.get(a)||a,Tt(e,a,o))}}function bf(e,n,a,o,c,f){switch(a){case"style":Nh(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Si(e,o):(typeof o=="number"||typeof o=="bigint")&&Si(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Xl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Tt(e,a,o)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(e,n,f,S,a,null)}}c&&Fe(e,n,"srcSet",a.srcSet,a,null),o&&Fe(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var b=f=S=c=null,P=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":c=pt;break;case"type":S=pt;break;case"checked":P=pt;break;case"defaultChecked":tt=pt;break;case"value":f=pt;break;case"defaultValue":b=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:Fe(e,n,o,pt,a,null)}}ke(e,f,b,P,tt,S,c,!1),Be(e);return;case"select":xe("invalid",e),o=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":S=b;break;case"multiple":o=b;default:Fe(e,n,c,b,a,null)}n=f,a=S,e.multiple=!!o,n!=null?ln(e,!!o,n,!1):a!=null&&ln(e,!!o,a,!0);return;case"textarea":xe("invalid",e),f=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(b=a[S],b!=null))switch(S){case"value":o=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Fe(e,n,S,b,a,null)}En(e,o,c,f),Be(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Fe(e,n,P,o,a,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<mo.length;o++)xe(mo[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(e,n,tt,o,a,null)}return;default:if(Fc(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&bf(e,n,pt,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Fe(e,n,b,o,a,null))}function Nx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,b=null,P=null,tt=null,pt=null;for(at in a){var xt=a[at];if(a.hasOwnProperty(at)&&xt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":P=xt;default:o.hasOwnProperty(at)||Fe(e,n,at,null,o,xt)}}for(var it in o){var at=o[it];if(xt=a[it],o.hasOwnProperty(it)&&(at!=null||xt!=null))switch(it){case"type":f=at;break;case"name":c=at;break;case"checked":tt=at;break;case"defaultChecked":pt=at;break;case"value":S=at;break;case"defaultValue":b=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==xt&&Fe(e,n,it,at,o,xt)}}Bi(e,S,b,P,tt,pt,f,c);return;case"select":at=S=b=it=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":at=P;default:o.hasOwnProperty(f)||Fe(e,n,f,null,o,P)}for(c in o)if(f=o[c],P=a[c],o.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":it=f;break;case"defaultValue":b=f;break;case"multiple":S=f;default:f!==P&&Fe(e,n,c,f,o,P)}n=b,a=S,o=at,it!=null?ln(e,!!a,it,!1):!!o!=!!a&&(n!=null?ln(e,!!a,n,!0):ln(e,!!a,a?[]:"",!1));return;case"textarea":at=it=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Fe(e,n,b,null,o,c)}for(S in o)if(c=o[S],f=a[S],o.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":it=c;break;case"defaultValue":at=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Fe(e,n,S,c,o,f)}gn(e,it,at);return;case"option":for(var ie in a)if(it=a[ie],a.hasOwnProperty(ie)&&it!=null&&!o.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Fe(e,n,ie,null,o,it)}for(P in o)if(it=o[P],at=a[P],o.hasOwnProperty(P)&&it!==at&&(it!=null||at!=null))switch(P){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Fe(e,n,P,it,o,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)it=a[te],a.hasOwnProperty(te)&&it!=null&&!o.hasOwnProperty(te)&&Fe(e,n,te,null,o,it);for(tt in o)if(it=o[tt],at=a[tt],o.hasOwnProperty(tt)&&it!==at&&(it!=null||at!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Fe(e,n,tt,it,o,at)}return;default:if(Fc(n)){for(var He in a)it=a[He],a.hasOwnProperty(He)&&it!==void 0&&!o.hasOwnProperty(He)&&bf(e,n,He,void 0,o,it);for(pt in o)it=o[pt],at=a[pt],!o.hasOwnProperty(pt)||it===at||it===void 0&&at===void 0||bf(e,n,pt,it,o,at);return}}for(var Z in a)it=a[Z],a.hasOwnProperty(Z)&&it!=null&&!o.hasOwnProperty(Z)&&Fe(e,n,Z,null,o,it);for(xt in o)it=o[xt],at=a[xt],!o.hasOwnProperty(xt)||it===at||it==null&&at==null||Fe(e,n,xt,it,o,at)}var Tf=null,Af=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function Lg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ng(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Rf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wf=null;function Ox(){var e=window.event;return e&&e.type==="popstate"?e===wf?!1:(wf=e,!0):(wf=null,!1)}var Og=typeof setTimeout=="function"?setTimeout:void 0,Px=typeof clearTimeout=="function"?clearTimeout:void 0,Pg=typeof Promise=="function"?Promise:void 0,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof Pg<"u"?function(e){return Pg.resolve(null).then(e).catch(Bx)}:Og;function Bx(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function zg(e,n){var a=n,o=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&_o(S.documentElement),a&2&&_o(S.body),a&4)for(a=S.head,_o(a),S=a.firstChild;S;){var b=S.nextSibling,P=S.nodeName;S[ca]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=b}}if(c===0){e.removeChild(f),To(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);To(n)}function Cf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cf(a),ua(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ix(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ca])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function Fx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=di(e.nextSibling),e===null))return null;return e}function Df(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Hx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function di(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Uf=null;function Bg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Ig(e,n,a){switch(n=Wl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function _o(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ua(e)}var si=new Map,Fg=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=q.d;q.d={f:Gx,r:Vx,D:kx,C:Xx,L:Wx,m:qx,X:Zx,S:Yx,M:jx};function Gx(){var e=Ji.f(),n=Bl();return e||n}function Vx(e){var n=Pi(e);n!==null&&n.tag===5&&n.type==="form"?rm(n):Ji.r(e)}var is=typeof document>"u"?null:document;function Hg(e,n,a){var o=is;if(o&&typeof n=="string"&&n){var c=We(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Fg.has(c)||(Fg.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),An(n,"link",e),nn(n),o.head.appendChild(n)))}}function kx(e){Ji.D(e),Hg("dns-prefetch",e,null)}function Xx(e,n){Ji.C(e,n),Hg("preconnect",e,n)}function Wx(e,n,a){Ji.L(e,n,a);var o=is;if(o&&e&&n){var c='link[rel="preload"][as="'+We(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+We(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+We(a.imageSizes)+'"]')):c+='[href="'+We(e)+'"]';var f=c;switch(n){case"style":f=as(e);break;case"script":f=rs(e)}si.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),si.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(vo(f))||n==="script"&&o.querySelector(xo(f))||(n=o.createElement("link"),An(n,"link",e),nn(n),o.head.appendChild(n)))}}function qx(e,n){Ji.m(e,n);var a=is;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+We(o)+'"][href="'+We(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=rs(e)}if(!si.has(f)&&(e=g({rel:"modulepreload",href:e},n),si.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(f)))return}o=a.createElement("link"),An(o,"link",e),nn(o),a.head.appendChild(o)}}}function Yx(e,n,a){Ji.S(e,n,a);var o=is;if(o&&e){var c=fa(o).hoistableStyles,f=as(e);n=n||"default";var S=c.get(f);if(!S){var b={loading:0,preload:null};if(S=o.querySelector(vo(f)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=si.get(f))&&Lf(e,a);var P=S=o.createElement("link");nn(P),An(P,"link",e),P._p=new Promise(function(tt,pt){P.onload=tt,P.onerror=pt}),P.addEventListener("load",function(){b.loading|=1}),P.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Yl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:b},c.set(f,S)}}}function Zx(e,n){Ji.X(e,n);var a=is;if(a&&e){var o=fa(a).hoistableScripts,c=rs(e),f=o.get(c);f||(f=a.querySelector(xo(c)),f||(e=g({src:e,async:!0},n),(n=si.get(c))&&Nf(e,n),f=a.createElement("script"),nn(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function jx(e,n){Ji.M(e,n);var a=is;if(a&&e){var o=fa(a).hoistableScripts,c=rs(e),f=o.get(c);f||(f=a.querySelector(xo(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=si.get(c))&&Nf(e,n),f=a.createElement("script"),nn(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Gg(e,n,a,o){var c=(c=Mt.current)?ql(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=as(a.href),a=fa(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=as(a.href);var f=fa(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(vo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),si.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},si.set(e,a),f||Kx(c,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rs(a),a=fa(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function as(e){return'href="'+We(e)+'"'}function vo(e){return'link[rel="stylesheet"]['+e+"]"}function Vg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Kx(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),nn(n),e.head.appendChild(n))}function rs(e){return'[src="'+We(e)+'"]'}function xo(e){return"script[async]"+e}function kg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+We(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nn(o),An(o,"style",c),Yl(o,a.precedence,e),n.instance=o;case"stylesheet":c=as(a.href);var f=e.querySelector(vo(c));if(f)return n.state.loading|=4,n.instance=f,nn(f),f;o=Vg(a),(c=si.get(c))&&Lf(o,c),f=(e.ownerDocument||e).createElement("link"),nn(f);var S=f;return S._p=new Promise(function(b,P){S.onload=b,S.onerror=P}),An(f,"link",o),n.state.loading|=4,Yl(f,a.precedence,e),n.instance=f;case"script":return f=rs(a.src),(c=e.querySelector(xo(f)))?(n.instance=c,nn(c),c):(o=a,(c=si.get(f))&&(o=g({},a),Nf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),nn(c),An(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Yl(o,a.precedence,e));return n.instance}function Yl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,S=0;S<o.length;S++){var b=o[S];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Lf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Nf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zl=null;function Xg(e,n,a){if(Zl===null){var o=new Map,c=Zl=new Map;c.set(a,o)}else c=Zl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ca]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var b=o.get(S);b?b.push(f):o.set(S,[f])}}return o}function Wg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Qx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function qg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var So=null;function Jx(){}function $x(e,n,a){if(So===null)throw Error(r(475));var o=So;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=as(a.href),f=e.querySelector(vo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=jl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,nn(f);return}f=e.ownerDocument||e,a=Vg(a),(c=si.get(c))&&Lf(a,c),f=f.createElement("link"),nn(f);var S=f;S._p=new Promise(function(b,P){S.onload=b,S.onerror=P}),An(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=jl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function tS(){if(So===null)throw Error(r(475));var e=So;return e.stylesheets&&e.count===0&&Of(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Of(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function jl(){if(this.count--,this.count===0){if(this.stylesheets)Of(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kl=null;function Of(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kl=new Map,n.forEach(eS,e),Kl=null,jl.call(e))}function eS(e,n){if(!(n.state.loading&4)){var a=Kl.get(e);if(a)var o=a.get(null);else{a=new Map,Kl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,c),a.set(S,c),this.count++,o=jl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var yo={$$typeof:O,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function nS(e,n,a,o,c,f,S,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Yg(e,n,a,o,c,f,S,b,P,tt,pt,xt){return e=new nS(e,n,a,S,b,P,tt,xt),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),e.current=f,f.stateNode=e,n=pu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},vu(f),e}function Zg(e){return e?(e=zr,e):zr}function jg(e,n,a,o,c,f){c=Zg(c),o.context===null?o.context=c:o.pendingContext=c,o=ga(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=_a(e,o,n),a!==null&&(Kn(a,e,n),Ks(a,e,n))}function Kg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Pf(e,n){Kg(e,n),(e=e.alternate)&&Kg(e,n)}function Qg(e){if(e.tag===13){var n=Pr(e,67108864);n!==null&&Kn(n,e,67108864),Pf(e,67108864)}}var Ql=!0;function iS(e,n,a,o){var c=L.T;L.T=null;var f=q.p;try{q.p=2,zf(e,n,a,o)}finally{q.p=f,L.T=c}}function aS(e,n,a,o){var c=L.T;L.T=null;var f=q.p;try{q.p=8,zf(e,n,a,o)}finally{q.p=f,L.T=c}}function zf(e,n,a,o){if(Ql){var c=Bf(o);if(c===null)Ef(e,n,o,Jl,a),$g(e,o);else if(sS(c,e,n,a,o))o.stopPropagation();else if($g(e,o),n&4&&-1<rS.indexOf(e)){for(;c!==null;){var f=Pi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=jt(f.pendingLanes);if(S!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var P=1<<31-Ot(S);b.entanglements[1]|=P,S&=~P}Ti(f),(Pe&6)===0&&(Pl=_e()+500,po(0))}}break;case 13:b=Pr(f,2),b!==null&&Kn(b,f,2),Bl(),Pf(f,2)}if(f=Bf(o),f===null&&Ef(e,n,o,Jl,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Ef(e,n,o,null,a)}}function Bf(e){return e=Gc(e),If(e)}var Jl=null;function If(e){if(Jl=null,e=Oi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jl=e,null}function Jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xt()){case Me:return 2;case Qt:return 8;case se:case $e:return 32;case N:return 268435456;default:return 32}default:return 32}}var Ff=!1,Da=null,Ua=null,La=null,Mo=new Map,Eo=new Map,Na=[],rS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $g(e,n){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(n.pointerId)}}function bo(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Pi(n),n!==null&&Qg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function sS(e,n,a,o,c){switch(n){case"focusin":return Da=bo(Da,e,n,a,o,c),!0;case"dragenter":return Ua=bo(Ua,e,n,a,o,c),!0;case"mouseover":return La=bo(La,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Mo.set(f,bo(Mo.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Eo.set(f,bo(Eo.get(f)||null,e,n,a,o,c)),!0}return!1}function t_(e){var n=Oi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,kn(e.priority,function(){if(a.tag===13){var o=jn();o=ae(o);var c=Pr(a,o);c!==null&&Kn(c,a,o),Pf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Bf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Hc=o,a.target.dispatchEvent(o),Hc=null}else return n=Pi(a),n!==null&&Qg(n),e.blockedOn=a,!1;n.shift()}return!0}function e_(e,n,a){$l(e)&&a.delete(n)}function oS(){Ff=!1,Da!==null&&$l(Da)&&(Da=null),Ua!==null&&$l(Ua)&&(Ua=null),La!==null&&$l(La)&&(La=null),Mo.forEach(e_),Eo.forEach(e_)}function tc(e,n){e.blockedOn===n&&(e.blockedOn=null,Ff||(Ff=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,oS)))}var ec=null;function n_(e){ec!==e&&(ec=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ec===e&&(ec=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(If(o||a)===null)continue;break}var f=Pi(a);f!==null&&(e.splice(n,3),n-=3,Bu(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function To(e){function n(P){return tc(P,e)}Da!==null&&tc(Da,e),Ua!==null&&tc(Ua,e),La!==null&&tc(La,e),Mo.forEach(n),Eo.forEach(n);for(var a=0;a<Na.length;a++){var o=Na[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)t_(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],S=c[Mn]||null;if(typeof f=="function")S||n_(a);else if(S){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Mn]||null)b=S.formAction;else if(If(c)!==null)continue}else b=S.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),n_(a)}}}function Hf(e){this._internalRoot=e}nc.prototype.render=Hf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=jn();jg(a,o,e,n,null,null)},nc.prototype.unmount=Hf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jg(e.current,2,null,e,null,null),Bl(),n[Pn]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Re();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Na.length&&n!==0&&n<Na[a].priority;a++);Na.splice(a,0,e),a===0&&t_(e)}};var i_=t.version;if(i_!=="19.1.0")throw Error(r(527,i_,"19.1.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var lS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{mt=ic.inject(lS),vt=ic}catch{}}return Ro.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=xm,f=Sm,S=ym,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=Yg(e,1,!1,null,null,a,o,c,f,S,b,null),e[Pn]=n.current,Mf(e),new Hf(n)},Ro.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",f=xm,S=Sm,b=ym,P=null,tt=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(tt=a.formState)),n=Yg(e,1,!0,n,a??null,o,c,f,S,b,P,tt),n.context=Zg(null),a=n.current,o=jn(),o=ae(o),c=ga(o),c.callback=null,_a(a,c,o),a=o,n.current.lanes=a,zt(n,a),Ti(n),e[Pn]=n.current,Mf(e),new nc(n)},Ro.version="19.1.0",Ro}var h_;function vS(){if(h_)return kf.exports;h_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),kf.exports=_S(),kf.exports}var xS=vS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xh="178",SS=0,p_=1,yS=2,yv=1,MS=2,ra=3,Wa=0,Gn=1,wi=2,Ui=0,ka=1,m_=2,g_=3,__=4,ES=5,yr=100,bS=101,TS=102,AS=103,RS=104,wS=200,CS=201,DS=202,US=203,wd=204,Cd=205,LS=206,NS=207,OS=208,PS=209,zS=210,BS=211,IS=212,FS=213,HS=214,Dd=0,Ud=1,Ld=2,bs=3,Nd=4,Od=5,Pd=6,zd=7,Sh=0,GS=1,VS=2,Xa=0,kS=1,XS=2,WS=3,qS=4,YS=5,ZS=6,jS=7,Mv=300,Ts=301,As=302,Bd=303,Id=304,Bc=306,Fd=1e3,Er=1001,Hd=1002,vi=1003,KS=1004,ac=1005,Ci=1006,Yf=1007,br=1008,Ni=1009,Ev=1010,bv=1011,Bo=1012,yh=1013,Ar=1014,sa=1015,Go=1016,Mh=1017,Eh=1018,Io=1020,Tv=35902,Av=1021,Rv=1022,_i=1023,Fo=1026,Ho=1027,wv=1028,bh=1029,Cv=1030,Th=1031,Ah=1033,wc=33776,Cc=33777,Dc=33778,Uc=33779,Gd=35840,Vd=35841,kd=35842,Xd=35843,Wd=36196,qd=37492,Yd=37496,Zd=37808,jd=37809,Kd=37810,Qd=37811,Jd=37812,$d=37813,th=37814,eh=37815,nh=37816,ih=37817,ah=37818,rh=37819,sh=37820,oh=37821,Lc=36492,lh=36494,ch=36495,Dv=36283,uh=36284,fh=36285,dh=36286,QS=3200,JS=3201,Uv=0,$S=1,Va="",li="srgb",Rs="srgb-linear",Oc="linear",Ge="srgb",ss=7680,v_=519,ty=512,ey=513,ny=514,Lv=515,iy=516,ay=517,ry=518,sy=519,x_=35044,S_="300 es",oa=2e3,Pc=2001;class Cs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zf=Math.PI/180,hh=180/Math.PI;function Vo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function be(s,t,i){return Math.max(t,Math.min(i,s))}function oy(s,t){return(s%t+t)%t}function jf(s,t,i){return(1-i)*s+i*t}function wo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Hn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class De{constructor(t=0,i=0){De.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(be(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ko{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let p=r[l+0],m=r[l+1],g=r[l+2],v=r[l+3];const x=u[d+0],M=u[d+1],T=u[d+2],w=u[d+3];if(h===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v;return}if(h===1){t[i+0]=x,t[i+1]=M,t[i+2]=T,t[i+3]=w;return}if(v!==w||p!==x||m!==M||g!==T){let y=1-h;const _=p*x+m*M+g*T+v*w,B=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const G=Math.sqrt(O),I=Math.atan2(G,_*B);y=Math.sin(y*I)/G,h=Math.sin(h*I)/G}const D=h*B;if(p=p*y+x*D,m=m*y+M*D,g=g*y+T*D,v=v*y+w*D,y===1-h){const G=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=G,m*=G,g*=G,v*=G}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],p=r[l+1],m=r[l+2],g=r[l+3],v=u[d],x=u[d+1],M=u[d+2],T=u[d+3];return t[i]=h*T+g*v+p*M-m*x,t[i+1]=p*T+g*x+m*v-h*M,t[i+2]=m*T+g*M+h*x-p*v,t[i+3]=g*T-h*v-p*x-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,p=Math.sin,m=h(r/2),g=h(l/2),v=h(u/2),x=p(r/2),M=p(l/2),T=p(u/2);switch(d){case"XYZ":this._x=x*g*v+m*M*T,this._y=m*M*v-x*g*T,this._z=m*g*T+x*M*v,this._w=m*g*v-x*M*T;break;case"YXZ":this._x=x*g*v+m*M*T,this._y=m*M*v-x*g*T,this._z=m*g*T-x*M*v,this._w=m*g*v+x*M*T;break;case"ZXY":this._x=x*g*v-m*M*T,this._y=m*M*v+x*g*T,this._z=m*g*T+x*M*v,this._w=m*g*v-x*M*T;break;case"ZYX":this._x=x*g*v-m*M*T,this._y=m*M*v+x*g*T,this._z=m*g*T-x*M*v,this._w=m*g*v+x*M*T;break;case"YZX":this._x=x*g*v+m*M*T,this._y=m*M*v+x*g*T,this._z=m*g*T-x*M*v,this._w=m*g*v-x*M*T;break;case"XZY":this._x=x*g*v-m*M*T,this._y=m*M*v-x*g*T,this._z=m*g*T+x*M*v,this._w=m*g*v+x*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],g=i[6],v=i[10],x=r+h+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(d-l)*M}else if(r>h&&r>v){const M=2*Math.sqrt(1+r-h-v);this._w=(g-p)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+m)/M}else if(h>v){const M=2*Math.sqrt(1+h-r-v);this._w=(u-m)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+v-r-h);this._w=(d-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+d*h+l*m-u*p,this._y=l*g+d*p+u*h-r*m,this._z=u*g+d*m+r*p-l*h,this._w=d*g-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),v=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=d*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,i=0,r=0){et.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(y_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(y_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,p=t.w,m=2*(d*l-h*r),g=2*(h*i-u*l),v=2*(u*r-d*i);return this.x=i+p*m+d*v-h*g,this.y=r+p*g+h*m-u*v,this.z=l+p*v+u*g-d*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-r*p,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Kf.copy(this).projectOnVector(t),this.sub(Kf)}reflect(t){return this.sub(Kf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(be(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kf=new et,y_=new ko;class ce{constructor(t,i,r,l,u,d,h,p,m){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,p,m)}set(t,i,r,l,u,d,h,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],g=r[4],v=r[7],x=r[2],M=r[5],T=r[8],w=l[0],y=l[3],_=l[6],B=l[1],O=l[4],D=l[7],G=l[2],I=l[5],H=l[8];return u[0]=d*w+h*B+p*G,u[3]=d*y+h*O+p*I,u[6]=d*_+h*D+p*H,u[1]=m*w+g*B+v*G,u[4]=m*y+g*O+v*I,u[7]=m*_+g*D+v*H,u[2]=x*w+M*B+T*G,u[5]=x*y+M*O+T*I,u[8]=x*_+M*D+T*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return i*d*g-i*h*m-r*u*g+r*h*p+l*u*m-l*d*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],m=t[7],g=t[8],v=g*d-h*m,x=h*p-g*u,M=m*u-d*p,T=i*v+r*x+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=v*w,t[1]=(l*m-g*r)*w,t[2]=(h*r-l*d)*w,t[3]=x*w,t[4]=(g*i-l*p)*w,t[5]=(l*u-h*i)*w,t[6]=M*w,t[7]=(r*p-m*i)*w,t[8]=(d*i-r*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*h)+d+t,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Qf.makeScale(t,i)),this}rotate(t){return this.premultiply(Qf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Qf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new ce;function Nv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function zc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ly(){const s=zc("canvas");return s.style.display="block",s}const M_={};function Ms(s){s in M_||(M_[s]=!0,console.warn(s))}function cy(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function uy(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fy(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const E_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dy(){const s={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ge&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ge&&(l.r=Es(l.r),l.g=Es(l.g),l.b=Es(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?Oc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Rs]:{primaries:t,whitePoint:r,transfer:Oc,toXYZ:E_,fromXYZ:b_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:E_,fromXYZ:b_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),s}const Ce=dy();function la(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let os;class hy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{os===void 0&&(os=zc("canvas")),os.width=t.width,os.height=t.height;const l=os.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=os}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=zc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=la(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(la(i[r]/255)*255):i[r]=la(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let py=0;class Rh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Vo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Jf(l[d].image)):u.push(Jf(l[d]))}else u=Jf(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Jf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let my=0;const $f=new et;class Vn extends Cs{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=Er,l=Er,u=Ci,d=br,h=_i,p=Ni,m=Vn.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Vo(),this.name="",this.source=new Rh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($f).x}get height(){return this.source.getSize($f).y}get depth(){return this.source.getSize($f).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fd:t.x=t.x-Math.floor(t.x);break;case Er:t.x=t.x<0?0:1;break;case Hd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fd:t.y=t.y-Math.floor(t.y);break;case Er:t.y=t.y<0?0:1;break;case Hd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Mv;Vn.DEFAULT_ANISOTROPY=1;class Ve{constructor(t=0,i=0,r=0,l=1){Ve.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const p=t.elements,m=p[0],g=p[4],v=p[8],x=p[1],M=p[5],T=p[9],w=p[2],y=p[6],_=p[10];if(Math.abs(g-x)<.01&&Math.abs(v-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+w)<.1&&Math.abs(T+y)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,D=(M+1)/2,G=(_+1)/2,I=(g+x)/4,H=(v+w)/4,F=(T+y)/4;return O>D&&O>G?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=I/r,u=H/r):D>G?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=I/l,u=F/l):G<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(G),r=H/u,l=F/u),this.set(r,l,u,i),this}let B=Math.sqrt((y-T)*(y-T)+(v-w)*(v-w)+(x-g)*(x-g));return Math.abs(B)<.001&&(B=1),this.x=(y-T)/B,this.y=(v-w)/B,this.z=(x-g)/B,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this.w=be(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this.w=be(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gy extends Cs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Ve(0,0,t,i),this.scissorTest=!1,this.viewport=new Ve(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Vn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Rh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends gy{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Ov extends Vn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _y extends Vn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(hi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(hi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=hi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,hi):hi.fromBufferAttribute(u,d),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rc.copy(r.boundingBox)),rc.applyMatrix4(t.matrixWorld),this.union(rc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Co),sc.subVectors(this.max,Co),ls.subVectors(t.a,Co),cs.subVectors(t.b,Co),us.subVectors(t.c,Co),Pa.subVectors(cs,ls),za.subVectors(us,cs),dr.subVectors(ls,us);let i=[0,-Pa.z,Pa.y,0,-za.z,za.y,0,-dr.z,dr.y,Pa.z,0,-Pa.x,za.z,0,-za.x,dr.z,0,-dr.x,-Pa.y,Pa.x,0,-za.y,za.x,0,-dr.y,dr.x,0];return!td(i,ls,cs,us,sc)||(i=[1,0,0,0,1,0,0,0,1],!td(i,ls,cs,us,sc))?!1:(oc.crossVectors(Pa,za),i=[oc.x,oc.y,oc.z],td(i,ls,cs,us,sc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $i=[new et,new et,new et,new et,new et,new et,new et,new et],hi=new et,rc=new Xo,ls=new et,cs=new et,us=new et,Pa=new et,za=new et,dr=new et,Co=new et,sc=new et,oc=new et,hr=new et;function td(s,t,i,r,l){for(let u=0,d=s.length-3;u<=d;u+=3){hr.fromArray(s,u);const h=l.x*Math.abs(hr.x)+l.y*Math.abs(hr.y)+l.z*Math.abs(hr.z),p=t.dot(hr),m=i.dot(hr),g=r.dot(hr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const vy=new Xo,Do=new et,ed=new et;class wh{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):vy.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Do.subVectors(t,this.center);const i=Do.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Do,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ed.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Do.copy(t.center).add(ed)),this.expandByPoint(Do.copy(t.center).sub(ed))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ta=new et,nd=new et,lc=new et,Ba=new et,id=new et,cc=new et,ad=new et;class xy{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){nd.copy(t).add(i).multiplyScalar(.5),lc.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(nd);const u=t.distanceTo(i)*.5,d=-this.direction.dot(lc),h=Ba.dot(this.direction),p=-Ba.dot(lc),m=Ba.lengthSq(),g=Math.abs(1-d*d);let v,x,M,T;if(g>0)if(v=d*p-h,x=d*h-p,T=u*g,v>=0)if(x>=-T)if(x<=T){const w=1/g;v*=w,x*=w,M=v*(v+d*x+2*h)+x*(d*v+x+2*p)+m}else x=u,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*p)+m;else x<=-T?(v=Math.max(0,-(-d*u+h)),x=v>0?-u:Math.min(Math.max(-u,-p),u),M=-v*v+x*(x+2*p)+m):x<=T?(v=0,x=Math.min(Math.max(-u,-p),u),M=x*(x+2*p)+m):(v=Math.max(0,-(d*u+h)),x=v>0?u:Math.min(Math.max(-u,-p),u),M=-v*v+x*(x+2*p)+m);else x=d>0?-u:u,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(nd).addScaledVector(lc,x),M}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(t.min.x-x.x)*m,l=(t.max.x-x.x)*m):(r=(t.max.x-x.x)*m,l=(t.min.x-x.x)*m),g>=0?(u=(t.min.y-x.y)*g,d=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,d=(t.min.y-x.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),v>=0?(h=(t.min.z-x.z)*v,p=(t.max.z-x.z)*v):(h=(t.max.z-x.z)*v,p=(t.min.z-x.z)*v),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,r,l,u){id.subVectors(i,t),cc.subVectors(r,t),ad.crossVectors(id,cc);let d=this.direction.dot(ad),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ba.subVectors(this.origin,t);const p=h*this.direction.dot(cc.crossVectors(Ba,cc));if(p<0)return null;const m=h*this.direction.dot(id.cross(Ba));if(m<0||p+m>d)return null;const g=-h*Ba.dot(ad);return g<0?null:this.at(g/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(t,i,r,l,u,d,h,p,m,g,v,x,M,T,w,y){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,p,m,g,v,x,M,T,w,y)}set(t,i,r,l,u,d,h,p,m,g,v,x,M,T,w,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=T,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/fs.setFromMatrixColumn(t,0).length(),u=1/fs.setFromMatrixColumn(t,1).length(),d=1/fs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=d*g,M=d*v,T=h*g,w=h*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=M+T*m,i[5]=x-w*m,i[9]=-h*p,i[2]=w-x*m,i[6]=T+M*m,i[10]=d*p}else if(t.order==="YXZ"){const x=p*g,M=p*v,T=m*g,w=m*v;i[0]=x+w*h,i[4]=T*h-M,i[8]=d*m,i[1]=d*v,i[5]=d*g,i[9]=-h,i[2]=M*h-T,i[6]=w+x*h,i[10]=d*p}else if(t.order==="ZXY"){const x=p*g,M=p*v,T=m*g,w=m*v;i[0]=x-w*h,i[4]=-d*v,i[8]=T+M*h,i[1]=M+T*h,i[5]=d*g,i[9]=w-x*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(t.order==="ZYX"){const x=d*g,M=d*v,T=h*g,w=h*v;i[0]=p*g,i[4]=T*m-M,i[8]=x*m+w,i[1]=p*v,i[5]=w*m+x,i[9]=M*m-T,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(t.order==="YZX"){const x=d*p,M=d*m,T=h*p,w=h*m;i[0]=p*g,i[4]=w-x*v,i[8]=T*v+M,i[1]=v,i[5]=d*g,i[9]=-h*g,i[2]=-m*g,i[6]=M*v+T,i[10]=x-w*v}else if(t.order==="XZY"){const x=d*p,M=d*m,T=h*p,w=h*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=x*v+w,i[5]=d*g,i[9]=M*v-T,i[2]=T*v-M,i[6]=h*g,i[10]=w*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sy,t,yy)}lookAt(t,i,r){const l=this.elements;return Qn.subVectors(t,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Ia.crossVectors(r,Qn),Ia.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Ia.crossVectors(r,Qn)),Ia.normalize(),uc.crossVectors(Qn,Ia),l[0]=Ia.x,l[4]=uc.x,l[8]=Qn.x,l[1]=Ia.y,l[5]=uc.y,l[9]=Qn.y,l[2]=Ia.z,l[6]=uc.z,l[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],g=r[1],v=r[5],x=r[9],M=r[13],T=r[2],w=r[6],y=r[10],_=r[14],B=r[3],O=r[7],D=r[11],G=r[15],I=l[0],H=l[4],F=l[8],C=l[12],R=l[1],k=l[5],ot=l[9],K=l[13],ut=l[2],lt=l[6],L=l[10],q=l[14],z=l[3],yt=l[7],U=l[11],J=l[15];return u[0]=d*I+h*R+p*ut+m*z,u[4]=d*H+h*k+p*lt+m*yt,u[8]=d*F+h*ot+p*L+m*U,u[12]=d*C+h*K+p*q+m*J,u[1]=g*I+v*R+x*ut+M*z,u[5]=g*H+v*k+x*lt+M*yt,u[9]=g*F+v*ot+x*L+M*U,u[13]=g*C+v*K+x*q+M*J,u[2]=T*I+w*R+y*ut+_*z,u[6]=T*H+w*k+y*lt+_*yt,u[10]=T*F+w*ot+y*L+_*U,u[14]=T*C+w*K+y*q+_*J,u[3]=B*I+O*R+D*ut+G*z,u[7]=B*H+O*k+D*lt+G*yt,u[11]=B*F+O*ot+D*L+G*U,u[15]=B*C+O*K+D*q+G*J,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],p=t[9],m=t[13],g=t[2],v=t[6],x=t[10],M=t[14],T=t[3],w=t[7],y=t[11],_=t[15];return T*(+u*p*v-l*m*v-u*h*x+r*m*x+l*h*M-r*p*M)+w*(+i*p*M-i*m*x+u*d*x-l*d*M+l*m*g-u*p*g)+y*(+i*m*v-i*h*M-u*d*v+r*d*M+u*h*g-r*m*g)+_*(-l*h*g-i*p*v+i*h*x+l*d*v-r*d*x+r*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],m=t[7],g=t[8],v=t[9],x=t[10],M=t[11],T=t[12],w=t[13],y=t[14],_=t[15],B=v*y*m-w*x*m+w*p*M-h*y*M-v*p*_+h*x*_,O=T*x*m-g*y*m-T*p*M+d*y*M+g*p*_-d*x*_,D=g*w*m-T*v*m+T*h*M-d*w*M-g*h*_+d*v*_,G=T*v*p-g*w*p-T*h*x+d*w*x+g*h*y-d*v*y,I=i*B+r*O+l*D+u*G;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/I;return t[0]=B*H,t[1]=(w*x*u-v*y*u-w*l*M+r*y*M+v*l*_-r*x*_)*H,t[2]=(h*y*u-w*p*u+w*l*m-r*y*m-h*l*_+r*p*_)*H,t[3]=(v*p*u-h*x*u-v*l*m+r*x*m+h*l*M-r*p*M)*H,t[4]=O*H,t[5]=(g*y*u-T*x*u+T*l*M-i*y*M-g*l*_+i*x*_)*H,t[6]=(T*p*u-d*y*u-T*l*m+i*y*m+d*l*_-i*p*_)*H,t[7]=(d*x*u-g*p*u+g*l*m-i*x*m-d*l*M+i*p*M)*H,t[8]=D*H,t[9]=(T*v*u-g*w*u-T*r*M+i*w*M+g*r*_-i*v*_)*H,t[10]=(d*w*u-T*h*u+T*r*m-i*w*m-d*r*_+i*h*_)*H,t[11]=(g*h*u-d*v*u-g*r*m+i*v*m+d*r*M-i*h*M)*H,t[12]=G*H,t[13]=(g*w*l-T*v*l+T*r*x-i*w*x-g*r*y+i*v*y)*H,t[14]=(T*h*l-d*w*l-T*r*p+i*w*p+d*r*y-i*h*y)*H,t[15]=(d*v*l-g*h*l+g*r*p-i*v*p-d*r*x+i*h*x)*H,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,p=t.z,m=u*d,g=u*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+r,g*p-l*d,0,m*p-l*h,g*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,g=d+d,v=h+h,x=u*m,M=u*g,T=u*v,w=d*g,y=d*v,_=h*v,B=p*m,O=p*g,D=p*v,G=r.x,I=r.y,H=r.z;return l[0]=(1-(w+_))*G,l[1]=(M+D)*G,l[2]=(T-O)*G,l[3]=0,l[4]=(M-D)*I,l[5]=(1-(x+_))*I,l[6]=(y+B)*I,l[7]=0,l[8]=(T+O)*H,l[9]=(y-B)*H,l[10]=(1-(x+w))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=fs.set(l[0],l[1],l[2]).length();const d=fs.set(l[4],l[5],l[6]).length(),h=fs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],pi.copy(this);const m=1/u,g=1/d,v=1/h;return pi.elements[0]*=m,pi.elements[1]*=m,pi.elements[2]*=m,pi.elements[4]*=g,pi.elements[5]*=g,pi.elements[6]*=g,pi.elements[8]*=v,pi.elements[9]*=v,pi.elements[10]*=v,i.setFromRotationMatrix(pi),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=oa){const p=this.elements,m=2*u/(i-t),g=2*u/(r-l),v=(i+t)/(i-t),x=(r+l)/(r-l);let M,T;if(h===oa)M=-(d+u)/(d-u),T=-2*d*u/(d-u);else if(h===Pc)M=-d/(d-u),T=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=oa){const p=this.elements,m=1/(i-t),g=1/(r-l),v=1/(d-u),x=(i+t)*m,M=(r+l)*g;let T,w;if(h===oa)T=(d+u)*v,w=-2*v;else if(h===Pc)T=u*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=w,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const fs=new et,pi=new Ke,Sy=new et(0,0,0),yy=new et(1,1,1),Ia=new et,uc=new et,Qn=new et,T_=new Ke,A_=new ko;class xi{constructor(t=0,i=0,r=0,l=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(be(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-be(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return T_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(T_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return A_.setFromEuler(this),this.setFromQuaternion(A_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Pv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let My=0;const R_=new et,ds=new ko,ea=new Ke,fc=new et,Uo=new et,Ey=new et,by=new ko,w_=new et(1,0,0),C_=new et(0,1,0),D_=new et(0,0,1),U_={type:"added"},Ty={type:"removed"},hs={type:"childadded",child:null},rd={type:"childremoved",child:null};class On extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const t=new et,i=new xi,r=new ko,l=new et(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new ce}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(w_,t)}rotateY(t){return this.rotateOnAxis(C_,t)}rotateZ(t){return this.rotateOnAxis(D_,t)}translateOnAxis(t,i){return R_.copy(t).applyQuaternion(this.quaternion),this.position.add(R_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(w_,t)}translateY(t){return this.translateOnAxis(C_,t)}translateZ(t){return this.translateOnAxis(D_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?fc.copy(t):fc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Uo,fc,this.up):ea.lookAt(fc,Uo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),ds.setFromRotationMatrix(ea),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(U_),hs.child=t,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Ty),rd.child=t,this.dispatchEvent(rd),rd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(U_),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,t,Ey),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,by,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];u(t.shapes,v)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(t.materials,this.material[p]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(t.animations,p))}}if(i){const h=d(t.geometries),p=d(t.materials),m=d(t.textures),g=d(t.images),v=d(t.shapes),x=d(t.skeletons),M=d(t.animations),T=d(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}On.DEFAULT_UP=new et(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new et,na=new et,sd=new et,ia=new et,ps=new et,ms=new et,L_=new et,od=new et,ld=new et,cd=new et,ud=new Ve,fd=new Ve,dd=new Ve;class gi{constructor(t=new et,i=new et,r=new et){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),mi.subVectors(t,i),l.cross(mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){mi.subVectors(l,i),na.subVectors(r,i),sd.subVectors(t,i);const d=mi.dot(mi),h=mi.dot(na),p=mi.dot(sd),m=na.dot(na),g=na.dot(sd),v=d*m-h*h;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(m*p-h*g)*x,T=(d*g-h*p)*x;return u.set(1-M-T,T,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,r,l,u,d,h,p){return this.getBarycoord(t,i,r,l,ia)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ia.x),p.addScaledVector(d,ia.y),p.addScaledVector(h,ia.z),p)}static getInterpolatedAttribute(t,i,r,l,u,d){return ud.setScalar(0),fd.setScalar(0),dd.setScalar(0),ud.fromBufferAttribute(t,i),fd.fromBufferAttribute(t,r),dd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(ud,u.x),d.addScaledVector(fd,u.y),d.addScaledVector(dd,u.z),d}static isFrontFacing(t,i,r,l){return mi.subVectors(r,i),na.subVectors(t,i),mi.cross(na).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),mi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return gi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;ps.subVectors(l,r),ms.subVectors(u,r),od.subVectors(t,r);const p=ps.dot(od),m=ms.dot(od);if(p<=0&&m<=0)return i.copy(r);ld.subVectors(t,l);const g=ps.dot(ld),v=ms.dot(ld);if(g>=0&&v<=g)return i.copy(l);const x=p*v-g*m;if(x<=0&&p>=0&&g<=0)return d=p/(p-g),i.copy(r).addScaledVector(ps,d);cd.subVectors(t,u);const M=ps.dot(cd),T=ms.dot(cd);if(T>=0&&M<=T)return i.copy(u);const w=M*m-p*T;if(w<=0&&m>=0&&T<=0)return h=m/(m-T),i.copy(r).addScaledVector(ms,h);const y=g*T-M*v;if(y<=0&&v-g>=0&&M-T>=0)return L_.subVectors(u,l),h=(v-g)/(v-g+(M-T)),i.copy(l).addScaledVector(L_,h);const _=1/(y+w+x);return d=w*_,h=x*_,i.copy(r).addScaledVector(ps,d).addScaledVector(ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},dc={h:0,s:0,l:0};function hd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Se{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ce.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ce.workingColorSpace){if(t=oy(t,1),i=be(i,0,1),r=be(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=hd(d,u,t+1/3),this.g=hd(d,u,t),this.b=hd(d,u,t-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(t,i=li){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=li){const r=zv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return Ce.workingToColorSpace(Un.copy(this),t),Math.round(be(Un.r*255,0,255))*65536+Math.round(be(Un.g*255,0,255))*256+Math.round(be(Un.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const g=(h+d)/2;if(h===d)p=0,m=0;else{const v=d-h;switch(m=g<=.5?v/(d+h):v/(2-d-h),d){case r:p=(l-u)/v+(l<u?6:0);break;case l:p=(u-r)/v+2;break;case u:p=(r-l)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Ce.workingColorSpace){return Ce.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=li){Ce.workingToColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,l=Un.b;return t!==li?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+i,Fa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Fa),t.getHSL(dc);const r=jf(Fa.h,dc.h,i),l=jf(Fa.s,dc.s,i),u=jf(Fa.l,dc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Se;Se.NAMES=zv;let Ay=0;class Wo extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=ka,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wd,this.blendDst=Cd,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ka&&(r.blending=this.blending),this.side!==Wa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==wd&&(r.blendSrc=this.blendSrc),this.blendDst!==Cd&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Bv extends Wo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new et,hc=new De;let Ry=0;class Li{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ry++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=x_,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)hc.fromBufferAttribute(this,i),hc.applyMatrix3(t),this.setXY(i,hc.x,hc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=wo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=wo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=wo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=wo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=wo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==x_&&(t.usage=this.usage),t}}class Iv extends Li{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Fv extends Li{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Tr extends Li{constructor(t,i,r){super(new Float32Array(t),i,r)}}let wy=0;const oi=new Ke,pd=new On,gs=new et,Jn=new Xo,Lo=new Xo,Sn=new et;class wr extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nv(t)?Fv:Iv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ce().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,i,r){return oi.makeTranslation(t,i,r),this.applyMatrix4(oi),this}scale(t,i,r){return oi.makeScale(t,i,r),this.applyMatrix4(oi),this}lookAt(t){return pd.lookAt(t),pd.updateMatrix(),this.applyMatrix4(pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Tr(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Jn.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Lo.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(Jn.min,Lo.min),Jn.expandByPoint(Sn),Sn.addVectors(Jn.max,Lo.max),Jn.expandByPoint(Sn)):(Jn.expandByPoint(Lo.min),Jn.expandByPoint(Lo.max))}Jn.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)Sn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)Sn.fromBufferAttribute(h,m),p&&(gs.fromBufferAttribute(t,m),Sn.add(gs)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let F=0;F<r.count;F++)h[F]=new et,p[F]=new et;const m=new et,g=new et,v=new et,x=new De,M=new De,T=new De,w=new et,y=new et;function _(F,C,R){m.fromBufferAttribute(r,F),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,R),x.fromBufferAttribute(u,F),M.fromBufferAttribute(u,C),T.fromBufferAttribute(u,R),g.sub(m),v.sub(m),M.sub(x),T.sub(x);const k=1/(M.x*T.y-T.x*M.y);isFinite(k)&&(w.copy(g).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(k),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(k),h[F].add(w),h[C].add(w),h[R].add(w),p[F].add(y),p[C].add(y),p[R].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let F=0,C=B.length;F<C;++F){const R=B[F],k=R.start,ot=R.count;for(let K=k,ut=k+ot;K<ut;K+=3)_(t.getX(K+0),t.getX(K+1),t.getX(K+2))}const O=new et,D=new et,G=new et,I=new et;function H(F){G.fromBufferAttribute(l,F),I.copy(G);const C=h[F];O.copy(C),O.sub(G.multiplyScalar(G.dot(C))).normalize(),D.crossVectors(I,C);const k=D.dot(p[F])<0?-1:1;d.setXYZW(F,O.x,O.y,O.z,k)}for(let F=0,C=B.length;F<C;++F){const R=B[F],k=R.start,ot=R.count;for(let K=k,ut=k+ot;K<ut;K+=3)H(t.getX(K+0)),H(t.getX(K+1)),H(t.getX(K+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new et,u=new et,d=new et,h=new et,p=new et,m=new et,g=new et,v=new et;if(t)for(let x=0,M=t.count;x<M;x+=3){const T=t.getX(x+0),w=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),g.subVectors(d,u),v.subVectors(l,u),g.cross(v),h.fromBufferAttribute(r,T),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,y),h.add(g),p.add(g),m.add(g),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,v=h.normalized,x=new m.constructor(p.length*g);let M=0,T=0;for(let w=0,y=p.length;w<y;w++){h.isInterleavedBufferAttribute?M=p[w]*h.data.stride+h.offset:M=p[w]*g;for(let _=0;_<g;_++)x[T++]=m[M++]}return new Li(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wr,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let g=0,v=m.length;g<v;g++){const x=m[g],M=t(x,r);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,x=m.length;v<x;v++){const M=m[v];g.push(M.toJSON(t.data))}g.length>0&&(l[p]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=t.morphAttributes;for(const m in u){const g=[],v=u[m];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let m=0,g=d.length;m<g;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const N_=new Ke,pr=new xy,pc=new wh,O_=new et,mc=new et,gc=new et,_c=new et,md=new et,vc=new et,P_=new et,xc=new et;class Di extends On{constructor(t=new wr,i=new Bv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){vc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=h[p],v=u[p];g!==0&&(md.fromBufferAttribute(v,t),d?vc.addScaledVector(md,g):vc.addScaledVector(md.sub(i),g))}i.add(vc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pc.copy(r.boundingSphere),pc.applyMatrix4(u),pr.copy(t.ray).recast(t.near),!(pc.containsPoint(pr.origin)===!1&&(pr.intersectSphere(pc,O_)===null||pr.origin.distanceToSquared(O_)>(t.far-t.near)**2))&&(N_.copy(u).invert(),pr.copy(t.ray).applyMatrix4(N_),!(r.boundingBox!==null&&pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,pr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,w=x.length;T<w;T++){const y=x[T],_=d[y.materialIndex],B=Math.max(y.start,M.start),O=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let D=B,G=O;D<G;D+=3){const I=h.getX(D),H=h.getX(D+1),F=h.getX(D+2);l=Sc(this,_,t,r,m,g,v,I,H,F),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let y=T,_=w;y<_;y+=3){const B=h.getX(y),O=h.getX(y+1),D=h.getX(y+2);l=Sc(this,d,t,r,m,g,v,B,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,w=x.length;T<w;T++){const y=x[T],_=d[y.materialIndex],B=Math.max(y.start,M.start),O=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let D=B,G=O;D<G;D+=3){const I=D,H=D+1,F=D+2;l=Sc(this,_,t,r,m,g,v,I,H,F),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let y=T,_=w;y<_;y+=3){const B=y,O=y+1,D=y+2;l=Sc(this,d,t,r,m,g,v,B,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Cy(s,t,i,r,l,u,d,h){let p;if(t.side===Gn?p=r.intersectTriangle(d,u,l,!0,h):p=r.intersectTriangle(l,u,d,t.side===Wa,h),p===null)return null;xc.copy(h),xc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(xc);return m<i.near||m>i.far?null:{distance:m,point:xc.clone(),object:s}}function Sc(s,t,i,r,l,u,d,h,p,m){s.getVertexPosition(h,mc),s.getVertexPosition(p,gc),s.getVertexPosition(m,_c);const g=Cy(s,t,i,r,mc,gc,_c,P_);if(g){const v=new et;gi.getBarycoord(P_,mc,gc,_c,v),l&&(g.uv=gi.getInterpolatedAttribute(l,h,p,m,v,new De)),u&&(g.uv1=gi.getInterpolatedAttribute(u,h,p,m,v,new De)),d&&(g.normal=gi.getInterpolatedAttribute(d,h,p,m,v,new et),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:p,c:m,normal:new et,materialIndex:0};gi.getNormal(mc,gc,_c,x.normal),g.face=x,g.barycoord=v}return g}class qo extends wr{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],g=[],v=[];let x=0,M=0;T("z","y","x",-1,-1,r,i,t,d,u,0),T("z","y","x",1,-1,r,i,-t,d,u,1),T("x","z","y",1,1,t,r,i,l,d,2),T("x","z","y",1,-1,t,r,-i,l,d,3),T("x","y","z",1,-1,t,i,r,l,u,4),T("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Tr(m,3)),this.setAttribute("normal",new Tr(g,3)),this.setAttribute("uv",new Tr(v,2));function T(w,y,_,B,O,D,G,I,H,F,C){const R=D/H,k=G/F,ot=D/2,K=G/2,ut=I/2,lt=H+1,L=F+1;let q=0,z=0;const yt=new et;for(let U=0;U<L;U++){const J=U*k-K;for(let gt=0;gt<lt;gt++){const dt=gt*R-ot;yt[w]=dt*B,yt[y]=J*O,yt[_]=ut,m.push(yt.x,yt.y,yt.z),yt[w]=0,yt[y]=0,yt[_]=I>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(gt/H),v.push(1-U/F),q+=1}}for(let U=0;U<F;U++)for(let J=0;J<H;J++){const gt=x+J+lt*U,dt=x+J+lt*(U+1),Y=x+(J+1)+lt*(U+1),ht=x+(J+1)+lt*U;p.push(gt,dt,ht),p.push(dt,Y,ht),z+=6}h.addGroup(M,z,C),M+=z,x+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(s){const t={};for(let i=0;i<s.length;i++){const r=ws(s[i]);for(const l in r)t[l]=r[l]}return t}function Dy(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Hv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const Uy={clone:ws,merge:Nn};var Ly=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ny=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends Wo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ly,this.fragmentShader=Ny,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=Dy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Gv extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=oa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new et,z_=new De,B_=new De;class $n extends Gv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=hh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hh*2*Math.atan(Math.tan(Zf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,i){return this.getViewBounds(t,z_,B_),i.subVectors(B_,z_)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Zf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _s=-90,vs=1;class Oy extends On{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new $n(_s,vs,t,i);l.layers=this.layers,this.add(l);const u=new $n(_s,vs,t,i);u.layers=this.layers,this.add(u);const d=new $n(_s,vs,t,i);d.layers=this.layers,this.add(d);const h=new $n(_s,vs,t,i);h.layers=this.layers,this.add(h);const p=new $n(_s,vs,t,i);p.layers=this.layers,this.add(p);const m=new $n(_s,vs,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(t===oa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Pc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=w,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,x,M),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Vv extends Vn{constructor(t=[],i=Ts,r,l,u,d,h,p,m,g){super(t,i,r,l,u,d,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Py extends Rr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Vv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new qo(5,5,5),u=new qa({name:"CubemapFromEquirect",uniforms:ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Ui});u.uniforms.tEquirect.value=i;const d=new Di(l,u),h=i.minFilter;return i.minFilter===br&&(i.minFilter=Ci),new Oy(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class yc extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zy={type:"move"};class gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){d=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,r),_=this._getHandJoint(m,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,T=.005;m.inputState.pinching&&x>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&x<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(zy)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new yc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class By extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const _d=new et,Iy=new et,Fy=new ce;class xr{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=_d.subVectors(r,i).cross(Iy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(_d),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Fy.getNormalMatrix(t),l=this.coplanarPoint(_d).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new wh,Hy=new De(.5,.5),Mc=new et;class Ch{constructor(t=new xr,i=new xr,r=new xr,l=new xr,u=new xr,d=new xr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=oa){const r=this.planes,l=t.elements,u=l[0],d=l[1],h=l[2],p=l[3],m=l[4],g=l[5],v=l[6],x=l[7],M=l[8],T=l[9],w=l[10],y=l[11],_=l[12],B=l[13],O=l[14],D=l[15];if(r[0].setComponents(p-u,x-m,y-M,D-_).normalize(),r[1].setComponents(p+u,x+m,y+M,D+_).normalize(),r[2].setComponents(p+d,x+g,y+T,D+B).normalize(),r[3].setComponents(p-d,x-g,y-T,D-B).normalize(),r[4].setComponents(p-h,x-v,y-w,D-O).normalize(),i===oa)r[5].setComponents(p+h,x+v,y+w,D+O).normalize();else if(i===Pc)r[5].setComponents(h,v,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){mr.center.set(0,0,0);const i=Hy.distanceTo(t.center);return mr.radius=.7071067811865476+i,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Mc.x=l.normal.x>0?t.max.x:t.min.x,Mc.y=l.normal.y>0?t.max.y:t.min.y,Mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kv extends Vn{constructor(t,i,r=Ar,l,u,d,h=vi,p=vi,m,g=Fo,v=1){if(g!==Fo&&g!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,u,d,h,p,g,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Yo extends wr{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,g=p+1,v=t/h,x=i/p,M=[],T=[],w=[],y=[];for(let _=0;_<g;_++){const B=_*x-d;for(let O=0;O<m;O++){const D=O*v-u;T.push(D,-B,0),w.push(0,0,1),y.push(O/h),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let B=0;B<h;B++){const O=B+m*_,D=B+m*(_+1),G=B+1+m*(_+1),I=B+1+m*_;M.push(O,D,I),M.push(D,G,I)}this.setIndex(M),this.setAttribute("position",new Tr(T,3)),this.setAttribute("normal",new Tr(w,3)),this.setAttribute("uv",new Tr(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Gy extends Wo{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uv,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vy extends Wo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ky extends Wo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Xv extends On{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const vd=new Ke,I_=new et,F_=new et;class Xy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ch,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;I_.setFromMatrixPosition(t.matrixWorld),i.position.copy(I_),F_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(F_),i.updateMatrixWorld(),vd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(vd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const H_=new Ke,No=new et,xd=new et;class Wy extends Xy{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new et(1,0,0),new et(-1,0,0),new et(0,0,1),new et(0,0,-1),new et(0,1,0),new et(0,-1,0)],this._cubeUps=[new et(0,1,0),new et(0,1,0),new et(0,1,0),new et(0,1,0),new et(0,0,1),new et(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,u=t.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),No.setFromMatrixPosition(t.matrixWorld),r.position.copy(No),xd.copy(r.position),xd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(xd),r.updateMatrixWorld(),l.makeTranslation(-No.x,-No.y,-No.z),H_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(H_)}}class G_ extends Xv{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new Wy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class qy extends Gv{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Yy extends Xv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zy extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function V_(s,t,i,r){const l=jy(r);switch(i){case Av:return s*t;case wv:return s*t/l.components*l.byteLength;case bh:return s*t/l.components*l.byteLength;case Cv:return s*t*2/l.components*l.byteLength;case Th:return s*t*2/l.components*l.byteLength;case Rv:return s*t*3/l.components*l.byteLength;case _i:return s*t*4/l.components*l.byteLength;case Ah:return s*t*4/l.components*l.byteLength;case wc:case Cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Dc:case Uc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vd:case Xd:return Math.max(s,16)*Math.max(t,8)/4;case Gd:case kd:return Math.max(s,8)*Math.max(t,8)/2;case Wd:case qd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Yd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Kd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Jd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case $d:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case th:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case eh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case nh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ih:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ah:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case rh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case sh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case oh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Lc:case lh:case ch:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Dv:case uh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case fh:case dh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function jy(s){switch(s){case Ni:case Ev:return{byteLength:1,components:1};case Bo:case bv:case Go:return{byteLength:2,components:1};case Mh:case Eh:return{byteLength:2,components:4};case Ar:case yh:case sa:return{byteLength:4,components:1};case Tv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wv(){let s=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function Ky(s){const t=new WeakMap;function i(h,p){const m=h.array,g=h.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,g),h.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,p,m){const g=p.array,v=p.updateRanges;if(s.bindBuffer(m,h),v.length===0)s.bufferSubData(m,0,g);else{v.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<v.length;M++){const T=v[x],w=v[M];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++x,v[x]=w)}v.length=x+1;for(let M=0,T=v.length;M<T;M++){const w=v[M];s.bufferSubData(m,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:d}}var Qy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,SM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,MM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,EM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RM="gl_FragColor = linearToOutputTexel( gl_FragColor );",wM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,KM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$M=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ME=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ib=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ab=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ob=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ub=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_b=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ab=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:Qy,alphahash_pars_fragment:Jy,alphamap_fragment:$y,alphamap_pars_fragment:tM,alphatest_fragment:eM,alphatest_pars_fragment:nM,aomap_fragment:iM,aomap_pars_fragment:aM,batching_pars_vertex:rM,batching_vertex:sM,begin_vertex:oM,beginnormal_vertex:lM,bsdfs:cM,iridescence_fragment:uM,bumpmap_pars_fragment:fM,clipping_planes_fragment:dM,clipping_planes_pars_fragment:hM,clipping_planes_pars_vertex:pM,clipping_planes_vertex:mM,color_fragment:gM,color_pars_fragment:_M,color_pars_vertex:vM,color_vertex:xM,common:SM,cube_uv_reflection_fragment:yM,defaultnormal_vertex:MM,displacementmap_pars_vertex:EM,displacementmap_vertex:bM,emissivemap_fragment:TM,emissivemap_pars_fragment:AM,colorspace_fragment:RM,colorspace_pars_fragment:wM,envmap_fragment:CM,envmap_common_pars_fragment:DM,envmap_pars_fragment:UM,envmap_pars_vertex:LM,envmap_physical_pars_fragment:kM,envmap_vertex:NM,fog_vertex:OM,fog_pars_vertex:PM,fog_fragment:zM,fog_pars_fragment:BM,gradientmap_pars_fragment:IM,lightmap_pars_fragment:FM,lights_lambert_fragment:HM,lights_lambert_pars_fragment:GM,lights_pars_begin:VM,lights_toon_fragment:XM,lights_toon_pars_fragment:WM,lights_phong_fragment:qM,lights_phong_pars_fragment:YM,lights_physical_fragment:ZM,lights_physical_pars_fragment:jM,lights_fragment_begin:KM,lights_fragment_maps:QM,lights_fragment_end:JM,logdepthbuf_fragment:$M,logdepthbuf_pars_fragment:tE,logdepthbuf_pars_vertex:eE,logdepthbuf_vertex:nE,map_fragment:iE,map_pars_fragment:aE,map_particle_fragment:rE,map_particle_pars_fragment:sE,metalnessmap_fragment:oE,metalnessmap_pars_fragment:lE,morphinstance_vertex:cE,morphcolor_vertex:uE,morphnormal_vertex:fE,morphtarget_pars_vertex:dE,morphtarget_vertex:hE,normal_fragment_begin:pE,normal_fragment_maps:mE,normal_pars_fragment:gE,normal_pars_vertex:_E,normal_vertex:vE,normalmap_pars_fragment:xE,clearcoat_normal_fragment_begin:SE,clearcoat_normal_fragment_maps:yE,clearcoat_pars_fragment:ME,iridescence_pars_fragment:EE,opaque_fragment:bE,packing:TE,premultiplied_alpha_fragment:AE,project_vertex:RE,dithering_fragment:wE,dithering_pars_fragment:CE,roughnessmap_fragment:DE,roughnessmap_pars_fragment:UE,shadowmap_pars_fragment:LE,shadowmap_pars_vertex:NE,shadowmap_vertex:OE,shadowmask_pars_fragment:PE,skinbase_vertex:zE,skinning_pars_vertex:BE,skinning_vertex:IE,skinnormal_vertex:FE,specularmap_fragment:HE,specularmap_pars_fragment:GE,tonemapping_fragment:VE,tonemapping_pars_fragment:kE,transmission_fragment:XE,transmission_pars_fragment:WE,uv_pars_fragment:qE,uv_pars_vertex:YE,uv_vertex:ZE,worldpos_vertex:jE,background_vert:KE,background_frag:QE,backgroundCube_vert:JE,backgroundCube_frag:$E,cube_vert:tb,cube_frag:eb,depth_vert:nb,depth_frag:ib,distanceRGBA_vert:ab,distanceRGBA_frag:rb,equirect_vert:sb,equirect_frag:ob,linedashed_vert:lb,linedashed_frag:cb,meshbasic_vert:ub,meshbasic_frag:fb,meshlambert_vert:db,meshlambert_frag:hb,meshmatcap_vert:pb,meshmatcap_frag:mb,meshnormal_vert:gb,meshnormal_frag:_b,meshphong_vert:vb,meshphong_frag:xb,meshphysical_vert:Sb,meshphysical_frag:yb,meshtoon_vert:Mb,meshtoon_frag:Eb,points_vert:bb,points_frag:Tb,shadow_vert:Ab,shadow_frag:Rb,sprite_vert:wb,sprite_frag:Cb},Lt={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Ri={basic:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Se(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Nn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Nn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Se(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Nn([Lt.points,Lt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Nn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Nn([Lt.common,Lt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Nn([Lt.sprite,Lt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Nn([Lt.common,Lt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Nn([Lt.lights,Lt.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ri.physical={uniforms:Nn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Ec={r:0,b:0,g:0},gr=new xi,Db=new Ke;function Ub(s,t,i,r,l,u,d){const h=new Se(0);let p=u===!0?0:1,m,g,v=null,x=0,M=null;function T(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function w(O){let D=!1;const G=T(O);G===null?_(h,p):G&&G.isColor&&(_(G,1),D=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,d):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(O,D){const G=T(D);G&&(G.isCubeTexture||G.mapping===Bc)?(g===void 0&&(g=new Di(new qo(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:ws(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,H,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),gr.copy(D.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Db.makeRotationFromEuler(gr)),g.material.toneMapped=Ce.getTransfer(G.colorSpace)!==Ge,(v!==G||x!==G.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,v=G,x=G.version,M=s.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new Di(new Yo(2,2),new qa({name:"BackgroundMaterial",uniforms:ws(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Ce.getTransfer(G.colorSpace)!==Ge,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||x!==G.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,v=G,x=G.version,M=s.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function _(O,D){O.getRGB(Ec,Hv(s)),r.buffers.color.setClear(Ec.r,Ec.g,Ec.b,D,d)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,D=1){h.set(O),p=D,_(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,_(h,p)},render:w,addToRenderList:y,dispose:B}}function Lb(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,d=!1;function h(R,k,ot,K,ut){let lt=!1;const L=v(K,ot,k);u!==L&&(u=L,m(u.object)),lt=M(R,K,ot,ut),lt&&T(R,K,ot,ut),ut!==null&&t.update(ut,s.ELEMENT_ARRAY_BUFFER),(lt||d)&&(d=!1,D(R,k,ot,K),ut!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function v(R,k,ot){const K=ot.wireframe===!0;let ut=r[R.id];ut===void 0&&(ut={},r[R.id]=ut);let lt=ut[k.id];lt===void 0&&(lt={},ut[k.id]=lt);let L=lt[K];return L===void 0&&(L=x(p()),lt[K]=L),L}function x(R){const k=[],ot=[],K=[];for(let ut=0;ut<i;ut++)k[ut]=0,ot[ut]=0,K[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ot,attributeDivisors:K,object:R,attributes:{},index:null}}function M(R,k,ot,K){const ut=u.attributes,lt=k.attributes;let L=0;const q=ot.getAttributes();for(const z in q)if(q[z].location>=0){const U=ut[z];let J=lt[z];if(J===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;L++}return u.attributesNum!==L||u.index!==K}function T(R,k,ot,K){const ut={},lt=k.attributes;let L=0;const q=ot.getAttributes();for(const z in q)if(q[z].location>=0){let U=lt[z];U===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(U=R.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),ut[z]=J,L++}u.attributes=ut,u.attributesNum=L,u.index=K}function w(){const R=u.newAttributes;for(let k=0,ot=R.length;k<ot;k++)R[k]=0}function y(R){_(R,0)}function _(R,k){const ot=u.newAttributes,K=u.enabledAttributes,ut=u.attributeDivisors;ot[R]=1,K[R]===0&&(s.enableVertexAttribArray(R),K[R]=1),ut[R]!==k&&(s.vertexAttribDivisor(R,k),ut[R]=k)}function B(){const R=u.newAttributes,k=u.enabledAttributes;for(let ot=0,K=k.length;ot<K;ot++)k[ot]!==R[ot]&&(s.disableVertexAttribArray(ot),k[ot]=0)}function O(R,k,ot,K,ut,lt,L){L===!0?s.vertexAttribIPointer(R,k,ot,ut,lt):s.vertexAttribPointer(R,k,ot,K,ut,lt)}function D(R,k,ot,K){w();const ut=K.attributes,lt=ot.getAttributes(),L=k.defaultAttributeValues;for(const q in lt){const z=lt[q];if(z.location>=0){let yt=ut[q];if(yt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),yt!==void 0){const U=yt.normalized,J=yt.itemSize,gt=t.get(yt);if(gt===void 0)continue;const dt=gt.buffer,Y=gt.type,ht=gt.bytesPerElement,Mt=Y===s.INT||Y===s.UNSIGNED_INT||yt.gpuType===yh;if(yt.isInterleavedBufferAttribute){const ct=yt.data,At=ct.stride,Zt=yt.offset;if(ct.isInstancedInterleavedBuffer){for(let It=0;It<z.locationSize;It++)_(z.location+It,ct.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let It=0;It<z.locationSize;It++)y(z.location+It);s.bindBuffer(s.ARRAY_BUFFER,dt);for(let It=0;It<z.locationSize;It++)O(z.location+It,J/z.locationSize,Y,U,At*ht,(Zt+J/z.locationSize*It)*ht,Mt)}else{if(yt.isInstancedBufferAttribute){for(let ct=0;ct<z.locationSize;ct++)_(z.location+ct,yt.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ct=0;ct<z.locationSize;ct++)y(z.location+ct);s.bindBuffer(s.ARRAY_BUFFER,dt);for(let ct=0;ct<z.locationSize;ct++)O(z.location+ct,J/z.locationSize,Y,U,J*ht,J/z.locationSize*ct*ht,Mt)}}else if(L!==void 0){const U=L[q];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(z.location,U);break;case 3:s.vertexAttrib3fv(z.location,U);break;case 4:s.vertexAttrib4fv(z.location,U);break;default:s.vertexAttrib1fv(z.location,U)}}}}B()}function G(){F();for(const R in r){const k=r[R];for(const ot in k){const K=k[ot];for(const ut in K)g(K[ut].object),delete K[ut];delete k[ot]}delete r[R]}}function I(R){if(r[R.id]===void 0)return;const k=r[R.id];for(const ot in k){const K=k[ot];for(const ut in K)g(K[ut].object),delete K[ut];delete k[ot]}delete r[R.id]}function H(R){for(const k in r){const ot=r[k];if(ot[R.id]===void 0)continue;const K=ot[R.id];for(const ut in K)g(K[ut].object),delete K[ut];delete ot[R.id]}}function F(){C(),d=!0,u!==l&&(u=l,m(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:F,resetDefaultState:C,dispose:G,releaseStatesOfGeometry:I,releaseStatesOfProgram:H,initAttributes:w,enableAttribute:y,disableUnusedAttributes:B}}function Nb(s,t,i){let r;function l(m){r=m}function u(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function d(m,g,v){v!==0&&(s.drawArraysInstanced(r,m,g,v),i.update(g,r,v))}function h(m,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T];i.update(M,r,1)}function p(m,g,v,x){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)d(m[T],g[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,v);let T=0;for(let w=0;w<v;w++)T+=g[w]*x[w];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Ob(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(H){return!(H!==_i&&r.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(H){const F=H===Go&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Ni&&r.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==sa&&!F)}function p(H){if(H==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),B=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=T>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:B,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:G,maxSamples:I}}function Pb(s){const t=this;let i=null,r=0,l=!1,u=!1;const d=new xr,h=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const T=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!l||T===null||T.length===0||u&&!y)u?g(null):m();else{const B=u?0:r,O=B*4;let D=_.clippingState||null;p.value=D,D=g(T,x,O,M);for(let G=0;G!==O;++G)D[G]=i[G];_.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=B}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,x,M,T){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=p.value,T!==!0||y===null){const _=M+w*4,B=x.matrixWorldInverse;h.getNormalMatrix(B),(y===null||y.length<_)&&(y=new Float32Array(_));for(let O=0,D=M;O!==w;++O,D+=4)d.copy(v[O]).applyMatrix4(B,h),d.normal.toArray(y,D),y[D+3]=d.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}function zb(s){let t=new WeakMap;function i(d,h){return h===Bd?d.mapping=Ts:h===Id&&(d.mapping=As),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Bd||h===Id)if(t.has(d)){const p=t.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new Py(p.height);return m.fromEquirectangularTexture(s,d),t.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const ys=4,k_=[.125,.215,.35,.446,.526,.582],Mr=20,Sd=new qy,X_=new Se;let yd=null,Md=0,Ed=0,bd=!1;const Sr=(1+Math.sqrt(5))/2,xs=1/Sr,W_=[new et(-Sr,xs,0),new et(Sr,xs,0),new et(-xs,0,Sr),new et(xs,0,Sr),new et(0,Sr,-xs),new et(0,Sr,xs),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)],Bb=new et;class q_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=Bb}=u;yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=j_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Z_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yd,Md,Ed),this._renderer.xr.enabled=bd,t.scissorTest=!1,bc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ts||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Go,format:_i,colorSpace:Rs,depthBuffer:!1},l=Y_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y_(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ib(u)),this._blurMaterial=Fb(u,t,i)}return l}_compileMaterial(t){const i=new Di(this._lodPlanes[0],t);this._renderer.compile(i,Sd)}_sceneToCubeUV(t,i,r,l,u){const p=new $n(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(X_),v.toneMapping=Xa,v.autoClear=!1;const T=new Bv({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),w=new Di(new qo,T);let y=!1;const _=t.background;_?_.isColor&&(T.color.copy(_),t.background=null,y=!0):(T.color.copy(X_),y=!0);for(let B=0;B<6;B++){const O=B%3;O===0?(p.up.set(0,m[B],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[B],u.y,u.z)):O===1?(p.up.set(0,0,m[B]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[B],u.z)):(p.up.set(0,m[B],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[B]));const D=this._cubeSize;bc(l,O*D,B>2?D:0,D,D),v.setRenderTarget(l),y&&v.render(w,p),v.render(t,p)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=M,v.autoClear=x,t.background=_}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ts||t.mapping===As;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=j_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Z_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Di(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const p=this._cubeSize;bc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,Sd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=W_[(l-u-1)%W_.length];this._blur(t,u-1,u,d,h)}i.autoClear=r}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Di(this._lodPlanes[l],m),x=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Mr-1),w=u/T,y=isFinite(u)?1+Math.floor(g*w):Mr;y>Mr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Mr}`);const _=[];let B=0;for(let H=0;H<Mr;++H){const F=H/w,C=Math.exp(-F*F/2);_.push(C),H===0?B+=C:H<y&&(B+=2*C)}for(let H=0;H<_.length;H++)_[H]=_[H]/B;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:O}=this;x.dTheta.value=T,x.mipInt.value=O-r;const D=this._sizeLods[l],G=3*D*(l>O-ys?l-O+ys:0),I=4*(this._cubeSize-D);bc(i,G,I,3*D,2*D),p.setRenderTarget(i),p.render(v,Sd)}}function Ib(s){const t=[],i=[],r=[];let l=s;const u=s-ys+1+k_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let p=1/h;d>s-ys?p=k_[d-s+ys-1]:d===0&&(p=0),r.push(p);const m=1/(h-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,T=6,w=3,y=2,_=1,B=new Float32Array(w*T*M),O=new Float32Array(y*T*M),D=new Float32Array(_*T*M);for(let I=0;I<M;I++){const H=I%3*2/3-1,F=I>2?0:-1,C=[H,F,0,H+2/3,F,0,H+2/3,F+1,0,H,F,0,H+2/3,F+1,0,H,F+1,0];B.set(C,w*T*I),O.set(x,y*T*I);const R=[I,I,I,I,I,I];D.set(R,_*T*I)}const G=new wr;G.setAttribute("position",new Li(B,w)),G.setAttribute("uv",new Li(O,y)),G.setAttribute("faceIndex",new Li(D,_)),t.push(G),l>ys&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function Y_(s,t,i){const r=new Rr(s,t,i);return r.texture.mapping=Bc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function Fb(s,t,i){const r=new Float32Array(Mr),l=new et(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Z_(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function j_(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Dh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hb(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===Bd||p===Id,g=p===Ts||p===As;if(m||g){let v=t.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new q_(s)),v=m?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const M=h.image;return m&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new q_(s)),v=m?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Gb(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ms("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function Vb(s,t,i,r){const l={},u=new WeakMap;function d(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const T in x.attributes)t.remove(x.attributes[T]);x.removeEventListener("dispose",d),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(v,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function p(v){const x=v.attributes;for(const M in x)t.update(x[M],s.ARRAY_BUFFER)}function m(v){const x=[],M=v.index,T=v.attributes.position;let w=0;if(M!==null){const B=M.array;w=M.version;for(let O=0,D=B.length;O<D;O+=3){const G=B[O+0],I=B[O+1],H=B[O+2];x.push(G,I,I,H,H,G)}}else if(T!==void 0){const B=T.array;w=T.version;for(let O=0,D=B.length/3-1;O<D;O+=3){const G=O+0,I=O+1,H=O+2;x.push(G,I,I,H,H,G)}}else return;const y=new(Nv(x)?Fv:Iv)(x,1);y.version=w;const _=u.get(v);_&&t.remove(_),u.set(v,y)}function g(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&m(v)}else m(v);return u.get(v)}return{get:h,update:p,getWireframeAttribute:g}}function kb(s,t,i){let r;function l(x){r=x}let u,d;function h(x){u=x.type,d=x.bytesPerElement}function p(x,M){s.drawElements(r,M,u,x*d),i.update(M,r,1)}function m(x,M,T){T!==0&&(s.drawElementsInstanced(r,M,u,x*d,T),i.update(M,r,T))}function g(x,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,T);let y=0;for(let _=0;_<T;_++)y+=M[_];i.update(y,r,1)}function v(x,M,T,w){if(T===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)m(x[_]/d,M[_],w[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,w,0,T);let _=0;for(let B=0;B<T;B++)_+=M[B]*w[B];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function Xb(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(u/3);break;case s.LINES:i.lines+=h*(u/2);break;case s.LINE_STRIP:i.lines+=h*(u-1);break;case s.LINE_LOOP:i.lines+=h*u;break;case s.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Wb(s,t,i){const r=new WeakMap,l=new Ve;function u(d,h,p){const m=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==v){let R=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const T=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],B=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let D=0;T===!0&&(D=1),w===!0&&(D=2),y===!0&&(D=3);let G=h.attributes.position.count*D,I=1;G>t.maxTextureSize&&(I=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const H=new Float32Array(G*I*4*v),F=new Ov(H,G,I,v);F.type=sa,F.needsUpdate=!0;const C=D*4;for(let k=0;k<v;k++){const ot=_[k],K=B[k],ut=O[k],lt=G*I*4*k;for(let L=0;L<ot.count;L++){const q=L*C;T===!0&&(l.fromBufferAttribute(ot,L),H[lt+q+0]=l.x,H[lt+q+1]=l.y,H[lt+q+2]=l.z,H[lt+q+3]=0),w===!0&&(l.fromBufferAttribute(K,L),H[lt+q+4]=l.x,H[lt+q+5]=l.y,H[lt+q+6]=l.z,H[lt+q+7]=0),y===!0&&(l.fromBufferAttribute(ut,L),H[lt+q+8]=l.x,H[lt+q+9]=l.y,H[lt+q+10]=l.z,H[lt+q+11]=ut.itemSize===4?l.w:1)}}x={count:v,texture:F,size:new De(G,I)},r.set(h,x),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const w=h.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",w),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function qb(s,t,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,v=t.get(p,g);if(l.get(v)!==m&&(t.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return v}function d(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:d}}const qv=new Vn,K_=new kv(1,1),Yv=new Ov,Zv=new _y,jv=new Vv,Q_=[],J_=[],$_=new Float32Array(16),tv=new Float32Array(9),ev=new Float32Array(4);function Ds(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=Q_[l];if(u===void 0&&(u=new Float32Array(l),Q_[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,s[d].toArray(u,h)}return u}function dn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function hn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Ic(s,t){let i=J_[t];i===void 0&&(i=new Int32Array(t),J_[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function Yb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function Zb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2fv(this.addr,t),hn(i,t)}}function jb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(dn(i,t))return;s.uniform3fv(this.addr,t),hn(i,t)}}function Kb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4fv(this.addr,t),hn(i,t)}}function Qb(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(dn(i,r))return;ev.set(r),s.uniformMatrix2fv(this.addr,!1,ev),hn(i,r)}}function Jb(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(dn(i,r))return;tv.set(r),s.uniformMatrix3fv(this.addr,!1,tv),hn(i,r)}}function $b(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(dn(i,r))return;$_.set(r),s.uniformMatrix4fv(this.addr,!1,$_),hn(i,r)}}function tT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function eT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2iv(this.addr,t),hn(i,t)}}function nT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;s.uniform3iv(this.addr,t),hn(i,t)}}function iT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4iv(this.addr,t),hn(i,t)}}function aT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function rT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2uiv(this.addr,t),hn(i,t)}}function sT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;s.uniform3uiv(this.addr,t),hn(i,t)}}function oT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4uiv(this.addr,t),hn(i,t)}}function lT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(K_.compareFunction=Lv,u=K_):u=qv,i.setTexture2D(t||u,l)}function cT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Zv,l)}function uT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||jv,l)}function fT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Yv,l)}function dT(s){switch(s){case 5126:return Yb;case 35664:return Zb;case 35665:return jb;case 35666:return Kb;case 35674:return Qb;case 35675:return Jb;case 35676:return $b;case 5124:case 35670:return tT;case 35667:case 35671:return eT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return aT;case 36294:return rT;case 36295:return sT;case 36296:return oT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return cT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return fT}}function hT(s,t){s.uniform1fv(this.addr,t)}function pT(s,t){const i=Ds(t,this.size,2);s.uniform2fv(this.addr,i)}function mT(s,t){const i=Ds(t,this.size,3);s.uniform3fv(this.addr,i)}function gT(s,t){const i=Ds(t,this.size,4);s.uniform4fv(this.addr,i)}function _T(s,t){const i=Ds(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function vT(s,t){const i=Ds(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function xT(s,t){const i=Ds(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function ST(s,t){s.uniform1iv(this.addr,t)}function yT(s,t){s.uniform2iv(this.addr,t)}function MT(s,t){s.uniform3iv(this.addr,t)}function ET(s,t){s.uniform4iv(this.addr,t)}function bT(s,t){s.uniform1uiv(this.addr,t)}function TT(s,t){s.uniform2uiv(this.addr,t)}function AT(s,t){s.uniform3uiv(this.addr,t)}function RT(s,t){s.uniform4uiv(this.addr,t)}function wT(s,t,i){const r=this.cache,l=t.length,u=Ic(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||qv,u[d])}function CT(s,t,i){const r=this.cache,l=t.length,u=Ic(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Zv,u[d])}function DT(s,t,i){const r=this.cache,l=t.length,u=Ic(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||jv,u[d])}function UT(s,t,i){const r=this.cache,l=t.length,u=Ic(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Yv,u[d])}function LT(s){switch(s){case 5126:return hT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return _T;case 35675:return vT;case 35676:return xT;case 5124:case 35670:return ST;case 35667:case 35671:return yT;case 35668:case 35672:return MT;case 35669:case 35673:return ET;case 5125:return bT;case 36294:return TT;case 36295:return AT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return wT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return UT}}class NT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=dT(i.type)}}class OT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=LT(i.type)}}class PT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function nv(s,t){s.seq.push(t),s.map[t.id]=t}function zT(s,t,i){const r=s.name,l=r.length;for(Td.lastIndex=0;;){const u=Td.exec(r),d=Td.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){nv(i,m===void 0?new NT(h,s,t):new OT(h,s,t));break}else{let v=i.map[h];v===void 0&&(v=new PT(h),nv(i,v)),i=v}}}class Nc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);zT(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function iv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const BT=37297;let IT=0;function FT(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const av=new ce;function HT(s){Ce._getMatrix(av,Ce.workingColorSpace,s);const t=`mat3( ${av.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(s)){case Oc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function rv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+FT(s.getShaderSource(t),d)}else return l}function GT(s,t){const i=HT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function VT(s,t){let i;switch(t){case kS:i="Linear";break;case XS:i="Reinhard";break;case WS:i="Cineon";break;case qS:i="ACESFilmic";break;case ZS:i="AgX";break;case jS:i="Neutral";break;case YS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Tc=new et;function kT(){Ce.getLuminanceCoefficients(Tc);const s=Tc.x.toFixed(4),t=Tc.y.toFixed(4),i=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function WT(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function qT(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),d=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:s.getAttribLocation(t,d),locationSize:h}}return i}function zo(s){return s!==""}function sv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ov(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const YT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(s){return s.replace(YT,jT)}const ZT=new Map;function jT(s,t){let i=fe[t];if(i===void 0){const r=ZT.get(t);if(r!==void 0)i=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return ph(i)}const KT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lv(s){return s.replace(KT,QT)}function QT(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function cv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function JT(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===yv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===MS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function $T(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ts:case As:t="ENVMAP_TYPE_CUBE";break;case Bc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function eA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Sh:t="ENVMAP_BLENDING_MULTIPLY";break;case GS:t="ENVMAP_BLENDING_MIX";break;case VS:t="ENVMAP_BLENDING_ADD";break}return t}function nA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function iA(s,t,i,r){const l=s.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=JT(i),m=$T(i),g=tA(i),v=eA(i),x=nA(i),M=XT(i),T=WT(u),w=l.createProgram();let y,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(zo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(zo).join(`
`),_.length>0&&(_+=`
`)):(y=[cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),_=[cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?fe.tonemapping_pars_fragment:"",i.toneMapping!==Xa?VT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,GT("linearToOutputTexel",i.outputColorSpace),kT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(zo).join(`
`)),d=ph(d),d=sv(d,i),d=ov(d,i),h=ph(h),h=sv(h,i),h=ov(h,i),d=lv(d),h=lv(h),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===S_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===S_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=B+y+d,D=B+_+h,G=iv(l,l.VERTEX_SHADER,O),I=iv(l,l.FRAGMENT_SHADER,D);l.attachShader(w,G),l.attachShader(w,I),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function H(k){if(s.debug.checkShaderErrors){const ot=l.getProgramInfoLog(w).trim(),K=l.getShaderInfoLog(G).trim(),ut=l.getShaderInfoLog(I).trim();let lt=!0,L=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(lt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,G,I);else{const q=rv(l,G,"vertex"),z=rv(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ot+`
`+q+`
`+z)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(K===""||ut==="")&&(L=!1);L&&(k.diagnostics={runnable:lt,programLog:ot,vertexShader:{log:K,prefix:y},fragmentShader:{log:ut,prefix:_}})}l.deleteShader(G),l.deleteShader(I),F=new Nc(l,w),C=qT(l,w)}let F;this.getUniforms=function(){return F===void 0&&H(this),F};let C;this.getAttributes=function(){return C===void 0&&H(this),C};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(w,BT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=IT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=G,this.fragmentShader=I,this}let aA=0;class rA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new sA(t),i.set(t,r)),r}}class sA{constructor(t){this.id=aA++,this.code=t,this.usedTimes=0}}function oA(s,t,i,r,l,u,d){const h=new Pv,p=new rA,m=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return m.add(C),C===0?"uv":`uv${C}`}function y(C,R,k,ot,K){const ut=ot.fog,lt=K.geometry,L=C.isMeshStandardMaterial?ot.environment:null,q=(C.isMeshStandardMaterial?i:t).get(C.envMap||L),z=q&&q.mapping===Bc?q.image.height:null,yt=T[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const U=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,J=U!==void 0?U.length:0;let gt=0;lt.morphAttributes.position!==void 0&&(gt=1),lt.morphAttributes.normal!==void 0&&(gt=2),lt.morphAttributes.color!==void 0&&(gt=3);let dt,Y,ht,Mt;if(yt){const Re=Ri[yt];dt=Re.vertexShader,Y=Re.fragmentShader}else dt=C.vertexShader,Y=C.fragmentShader,p.update(C),ht=p.getVertexShaderID(C),Mt=p.getFragmentShaderID(C);const ct=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),Zt=K.isInstancedMesh===!0,It=K.isBatchedMesh===!0,oe=!!C.map,ge=!!C.matcap,ye=!!q,V=!!C.aoMap,yn=!!C.lightMap,Ae=!!C.bumpMap,_e=!!C.normalMap,Xt=!!C.displacementMap,Me=!!C.emissiveMap,Qt=!!C.metalnessMap,se=!!C.roughnessMap,$e=C.anisotropy>0,N=C.clearcoat>0,E=C.dispersion>0,nt=C.iridescence>0,mt=C.sheen>0,vt=C.transmission>0,ft=$e&&!!C.anisotropyMap,Ot=N&&!!C.clearcoatMap,Dt=N&&!!C.clearcoatNormalMap,kt=N&&!!C.clearcoatRoughnessMap,Wt=nt&&!!C.iridescenceMap,Et=nt&&!!C.iridescenceThicknessMap,Pt=mt&&!!C.sheenColorMap,jt=mt&&!!C.sheenRoughnessMap,Kt=!!C.specularMap,wt=!!C.specularColorMap,re=!!C.specularIntensityMap,W=vt&&!!C.transmissionMap,Ut=vt&&!!C.thicknessMap,bt=!!C.gradientMap,zt=!!C.alphaMap,Rt=C.alphaTest>0,St=!!C.alphaHash,Ft=!!C.extensions;let ae=Xa;C.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ae=s.toneMapping);const Oe={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:dt,fragmentShader:Y,defines:C.defines,customVertexShaderID:ht,customFragmentShaderID:Mt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:It,batchingColor:It&&K._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&K.instanceColor!==null,instancingMorph:Zt&&K.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Rs,alphaToCoverage:!!C.alphaToCoverage,map:oe,matcap:ge,envMap:ye,envMapMode:ye&&q.mapping,envMapCubeUVHeight:z,aoMap:V,lightMap:yn,bumpMap:Ae,normalMap:_e,displacementMap:x&&Xt,emissiveMap:Me,normalMapObjectSpace:_e&&C.normalMapType===$S,normalMapTangentSpace:_e&&C.normalMapType===Uv,metalnessMap:Qt,roughnessMap:se,anisotropy:$e,anisotropyMap:ft,clearcoat:N,clearcoatMap:Ot,clearcoatNormalMap:Dt,clearcoatRoughnessMap:kt,dispersion:E,iridescence:nt,iridescenceMap:Wt,iridescenceThicknessMap:Et,sheen:mt,sheenColorMap:Pt,sheenRoughnessMap:jt,specularMap:Kt,specularColorMap:wt,specularIntensityMap:re,transmission:vt,transmissionMap:W,thicknessMap:Ut,gradientMap:bt,opaque:C.transparent===!1&&C.blending===ka&&C.alphaToCoverage===!1,alphaMap:zt,alphaTest:Rt,alphaHash:St,combine:C.combine,mapUv:oe&&w(C.map.channel),aoMapUv:V&&w(C.aoMap.channel),lightMapUv:yn&&w(C.lightMap.channel),bumpMapUv:Ae&&w(C.bumpMap.channel),normalMapUv:_e&&w(C.normalMap.channel),displacementMapUv:Xt&&w(C.displacementMap.channel),emissiveMapUv:Me&&w(C.emissiveMap.channel),metalnessMapUv:Qt&&w(C.metalnessMap.channel),roughnessMapUv:se&&w(C.roughnessMap.channel),anisotropyMapUv:ft&&w(C.anisotropyMap.channel),clearcoatMapUv:Ot&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:jt&&w(C.sheenRoughnessMap.channel),specularMapUv:Kt&&w(C.specularMap.channel),specularColorMapUv:wt&&w(C.specularColorMap.channel),specularIntensityMapUv:re&&w(C.specularIntensityMap.channel),transmissionMapUv:W&&w(C.transmissionMap.channel),thicknessMapUv:Ut&&w(C.thicknessMap.channel),alphaMapUv:zt&&w(C.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(_e||$e),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!lt.attributes.uv&&(oe||zt),fog:!!ut,useFog:C.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:At,skinning:K.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:gt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:oe&&C.map.isVideoTexture===!0&&Ce.getTransfer(C.map.colorSpace)===Ge,decodeVideoTextureEmissive:Me&&C.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(C.emissiveMap.colorSpace)===Ge,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===wi,flipSided:C.side===Gn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ft&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&C.extensions.multiDraw===!0||It)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Oe.vertexUv1s=m.has(1),Oe.vertexUv2s=m.has(2),Oe.vertexUv3s=m.has(3),m.clear(),Oe}function _(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)R.push(k),R.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(B(R,C),O(R,C),R.push(s.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function B(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function O(C,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),C.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),C.push(h.mask)}function D(C){const R=T[C.type];let k;if(R){const ot=Ri[R];k=Uy.clone(ot.uniforms)}else k=C.uniforms;return k}function G(C,R){let k;for(let ot=0,K=g.length;ot<K;ot++){const ut=g[ot];if(ut.cacheKey===R){k=ut,++k.usedTimes;break}}return k===void 0&&(k=new iA(s,R,C,u),g.push(k)),k}function I(C){if(--C.usedTimes===0){const R=g.indexOf(C);g[R]=g[g.length-1],g.pop(),C.destroy()}}function H(C){p.remove(C)}function F(){p.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:D,acquireProgram:G,releaseProgram:I,releaseShaderCache:H,programs:g,dispose:F}}function lA(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,p){s.get(d)[h]=p}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function cA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function uv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function fv(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(v,x,M,T,w,y){let _=s[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:T,renderOrder:v.renderOrder,z:w,group:y},s[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=w,_.group=y),t++,_}function h(v,x,M,T,w,y){const _=d(v,x,M,T,w,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function p(v,x,M,T,w,y){const _=d(v,x,M,T,w,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function m(v,x){i.length>1&&i.sort(v||cA),r.length>1&&r.sort(x||uv),l.length>1&&l.sort(x||uv)}function g(){for(let v=t,x=s.length;v<x;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:p,finish:g,sort:m}}function uA(){let s=new WeakMap;function t(r,l){const u=s.get(r);let d;return u===void 0?(d=new fv,s.set(r,[d])):l>=u.length?(d=new fv,u.push(d)):d=u[l],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function fA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new et,color:new Se};break;case"SpotLight":i={position:new et,direction:new et,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Se,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":i={color:new Se,position:new et,halfWidth:new et,halfHeight:new et};break}return s[t.id]=i,i}}}function dA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let hA=0;function pA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function mA(s){const t=new fA,i=dA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new et);const l=new et,u=new Ke,d=new Ke;function h(m){let g=0,v=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,T=0,w=0,y=0,_=0,B=0,O=0,D=0,G=0,I=0,H=0;m.sort(pA);for(let C=0,R=m.length;C<R;C++){const k=m[C],ot=k.color,K=k.intensity,ut=k.distance,lt=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=ot.r*K,v+=ot.g*K,x+=ot.b*K;else if(k.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(k.sh.coefficients[L],K);H++}else if(k.isDirectionalLight){const L=t.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const q=k.shadow,z=i.get(k);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,r.directionalShadow[M]=z,r.directionalShadowMap[M]=lt,r.directionalShadowMatrix[M]=k.shadow.matrix,B++}r.directional[M]=L,M++}else if(k.isSpotLight){const L=t.get(k);L.position.setFromMatrixPosition(k.matrixWorld),L.color.copy(ot).multiplyScalar(K),L.distance=ut,L.coneCos=Math.cos(k.angle),L.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),L.decay=k.decay,r.spot[w]=L;const q=k.shadow;if(k.map&&(r.spotLightMap[G]=k.map,G++,q.updateMatrices(k),k.castShadow&&I++),r.spotLightMatrix[w]=q.matrix,k.castShadow){const z=i.get(k);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,r.spotShadow[w]=z,r.spotShadowMap[w]=lt,D++}w++}else if(k.isRectAreaLight){const L=t.get(k);L.color.copy(ot).multiplyScalar(K),L.halfWidth.set(k.width*.5,0,0),L.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=L,y++}else if(k.isPointLight){const L=t.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),L.distance=k.distance,L.decay=k.decay,k.castShadow){const q=k.shadow,z=i.get(k);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,z.shadowCameraNear=q.camera.near,z.shadowCameraFar=q.camera.far,r.pointShadow[T]=z,r.pointShadowMap[T]=lt,r.pointShadowMatrix[T]=k.shadow.matrix,O++}r.point[T]=L,T++}else if(k.isHemisphereLight){const L=t.get(k);L.skyColor.copy(k.color).multiplyScalar(K),L.groundColor.copy(k.groundColor).multiplyScalar(K),r.hemi[_]=L,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const F=r.hash;(F.directionalLength!==M||F.pointLength!==T||F.spotLength!==w||F.rectAreaLength!==y||F.hemiLength!==_||F.numDirectionalShadows!==B||F.numPointShadows!==O||F.numSpotShadows!==D||F.numSpotMaps!==G||F.numLightProbes!==H)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=y,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=D+G-I,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=H,F.directionalLength=M,F.pointLength=T,F.spotLength=w,F.rectAreaLength=y,F.hemiLength=_,F.numDirectionalShadows=B,F.numPointShadows=O,F.numSpotShadows=D,F.numSpotMaps=G,F.numLightProbes=H,r.version=hA++)}function p(m,g){let v=0,x=0,M=0,T=0,w=0;const y=g.matrixWorldInverse;for(let _=0,B=m.length;_<B;_++){const O=m[_];if(O.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),v++}else if(O.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const D=r.rectArea[T];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),d.identity(),u.copy(O.matrixWorld),u.premultiply(y),d.extractRotation(u),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),T++}else if(O.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),x++}else if(O.isHemisphereLight){const D=r.hemi[w];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(y),w++}}}return{setup:h,setupView:p,state:r}}function dv(s){const t=new mA(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function d(g){r.push(g)}function h(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:d}}function gA(s){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new dv(s),t.set(l,[h])):u>=d.length?(h=new dv(s),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const _A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xA(s,t,i){let r=new Ch;const l=new De,u=new De,d=new Ve,h=new Vy({depthPacking:JS}),p=new ky,m={},g=i.maxTextureSize,v={[Wa]:Gn,[Gn]:Wa,[wi]:wi},x=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:_A,fragmentShader:vA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new wr;T.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Di(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yv;let _=this.type;this.render=function(I,H,F){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const C=s.getRenderTarget(),R=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ot=s.state;ot.setBlending(Ui),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const K=_!==ra&&this.type===ra,ut=_===ra&&this.type!==ra;for(let lt=0,L=I.length;lt<L;lt++){const q=I[lt],z=q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const yt=z.getFrameExtents();if(l.multiply(yt),u.copy(z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/yt.x),l.x=u.x*yt.x,z.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/yt.y),l.y=u.y*yt.y,z.mapSize.y=u.y)),z.map===null||K===!0||ut===!0){const J=this.type!==ra?{minFilter:vi,magFilter:vi}:{};z.map!==null&&z.map.dispose(),z.map=new Rr(l.x,l.y,J),z.map.texture.name=q.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const U=z.getViewportCount();for(let J=0;J<U;J++){const gt=z.getViewport(J);d.set(u.x*gt.x,u.y*gt.y,u.x*gt.z,u.y*gt.w),ot.viewport(d),z.updateMatrices(q,J),r=z.getFrustum(),D(H,F,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===ra&&B(z,F),z.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(C,R,k)};function B(I,H){const F=t.update(w);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Rr(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(H,null,F,x,w,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(H,null,F,M,w,null)}function O(I,H,F,C){let R=null;const k=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)R=k;else if(R=F.isPointLight===!0?p:h,s.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const ot=R.uuid,K=H.uuid;let ut=m[ot];ut===void 0&&(ut={},m[ot]=ut);let lt=ut[K];lt===void 0&&(lt=R.clone(),ut[K]=lt,H.addEventListener("dispose",G)),R=lt}if(R.visible=H.visible,R.wireframe=H.wireframe,C===ra?R.side=H.shadowSide!==null?H.shadowSide:H.side:R.side=H.shadowSide!==null?H.shadowSide:v[H.side],R.alphaMap=H.alphaMap,R.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,R.map=H.map,R.clipShadows=H.clipShadows,R.clippingPlanes=H.clippingPlanes,R.clipIntersection=H.clipIntersection,R.displacementMap=H.displacementMap,R.displacementScale=H.displacementScale,R.displacementBias=H.displacementBias,R.wireframeLinewidth=H.wireframeLinewidth,R.linewidth=H.linewidth,F.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ot=s.properties.get(R);ot.light=F}return R}function D(I,H,F,C,R){if(I.visible===!1)return;if(I.layers.test(H.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===ra)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const K=t.update(I),ut=I.material;if(Array.isArray(ut)){const lt=K.groups;for(let L=0,q=lt.length;L<q;L++){const z=lt[L],yt=ut[z.materialIndex];if(yt&&yt.visible){const U=O(I,yt,C,R);I.onBeforeShadow(s,I,H,F,K,U,z),s.renderBufferDirect(F,null,K,U,I,z),I.onAfterShadow(s,I,H,F,K,U,z)}}}else if(ut.visible){const lt=O(I,ut,C,R);I.onBeforeShadow(s,I,H,F,K,lt,null),s.renderBufferDirect(F,null,K,lt,I,null),I.onAfterShadow(s,I,H,F,K,lt,null)}}const ot=I.children;for(let K=0,ut=ot.length;K<ut;K++)D(ot[K],H,F,C,R)}function G(I){I.target.removeEventListener("dispose",G);for(const F in m){const C=m[F],R=I.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const SA={[Dd]:Ud,[Ld]:Pd,[Nd]:zd,[bs]:Od,[Ud]:Dd,[Pd]:Ld,[zd]:Nd,[Od]:bs};function yA(s,t){function i(){let W=!1;const Ut=new Ve;let bt=null;const zt=new Ve(0,0,0,0);return{setMask:function(Rt){bt!==Rt&&!W&&(s.colorMask(Rt,Rt,Rt,Rt),bt=Rt)},setLocked:function(Rt){W=Rt},setClear:function(Rt,St,Ft,ae,Oe){Oe===!0&&(Rt*=ae,St*=ae,Ft*=ae),Ut.set(Rt,St,Ft,ae),zt.equals(Ut)===!1&&(s.clearColor(Rt,St,Ft,ae),zt.copy(Ut))},reset:function(){W=!1,bt=null,zt.set(-1,0,0,0)}}}function r(){let W=!1,Ut=!1,bt=null,zt=null,Rt=null;return{setReversed:function(St){if(Ut!==St){const Ft=t.get("EXT_clip_control");St?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Ut=St;const ae=Rt;Rt=null,this.setClear(ae)}},getReversed:function(){return Ut},setTest:function(St){St?ct(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(St){bt!==St&&!W&&(s.depthMask(St),bt=St)},setFunc:function(St){if(Ut&&(St=SA[St]),zt!==St){switch(St){case Dd:s.depthFunc(s.NEVER);break;case Ud:s.depthFunc(s.ALWAYS);break;case Ld:s.depthFunc(s.LESS);break;case bs:s.depthFunc(s.LEQUAL);break;case Nd:s.depthFunc(s.EQUAL);break;case Od:s.depthFunc(s.GEQUAL);break;case Pd:s.depthFunc(s.GREATER);break;case zd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}zt=St}},setLocked:function(St){W=St},setClear:function(St){Rt!==St&&(Ut&&(St=1-St),s.clearDepth(St),Rt=St)},reset:function(){W=!1,bt=null,zt=null,Rt=null,Ut=!1}}}function l(){let W=!1,Ut=null,bt=null,zt=null,Rt=null,St=null,Ft=null,ae=null,Oe=null;return{setTest:function(Re){W||(Re?ct(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(Re){Ut!==Re&&!W&&(s.stencilMask(Re),Ut=Re)},setFunc:function(Re,kn,pn){(bt!==Re||zt!==kn||Rt!==pn)&&(s.stencilFunc(Re,kn,pn),bt=Re,zt=kn,Rt=pn)},setOp:function(Re,kn,pn){(St!==Re||Ft!==kn||ae!==pn)&&(s.stencilOp(Re,kn,pn),St=Re,Ft=kn,ae=pn)},setLocked:function(Re){W=Re},setClear:function(Re){Oe!==Re&&(s.clearStencil(Re),Oe=Re)},reset:function(){W=!1,Ut=null,bt=null,zt=null,Rt=null,St=null,Ft=null,ae=null,Oe=null}}}const u=new i,d=new r,h=new l,p=new WeakMap,m=new WeakMap;let g={},v={},x=new WeakMap,M=[],T=null,w=!1,y=null,_=null,B=null,O=null,D=null,G=null,I=null,H=new Se(0,0,0),F=0,C=!1,R=null,k=null,ot=null,K=null,ut=null;const lt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,q=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(z)[1]),L=q>=1):z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),L=q>=2);let yt=null,U={};const J=s.getParameter(s.SCISSOR_BOX),gt=s.getParameter(s.VIEWPORT),dt=new Ve().fromArray(J),Y=new Ve().fromArray(gt);function ht(W,Ut,bt,zt){const Rt=new Uint8Array(4),St=s.createTexture();s.bindTexture(W,St),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<bt;Ft++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ut,0,s.RGBA,1,1,zt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(Ut+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return St}const Mt={};Mt[s.TEXTURE_2D]=ht(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=ht(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=ht(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=ht(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ct(s.DEPTH_TEST),d.setFunc(bs),Ae(!1),_e(p_),ct(s.CULL_FACE),V(Ui);function ct(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function At(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function Zt(W,Ut){return v[W]!==Ut?(s.bindFramebuffer(W,Ut),v[W]=Ut,W===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ut),W===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ut),!0):!1}function It(W,Ut){let bt=M,zt=!1;if(W){bt=x.get(Ut),bt===void 0&&(bt=[],x.set(Ut,bt));const Rt=W.textures;if(bt.length!==Rt.length||bt[0]!==s.COLOR_ATTACHMENT0){for(let St=0,Ft=Rt.length;St<Ft;St++)bt[St]=s.COLOR_ATTACHMENT0+St;bt.length=Rt.length,zt=!0}}else bt[0]!==s.BACK&&(bt[0]=s.BACK,zt=!0);zt&&s.drawBuffers(bt)}function oe(W){return T!==W?(s.useProgram(W),T=W,!0):!1}const ge={[yr]:s.FUNC_ADD,[bS]:s.FUNC_SUBTRACT,[TS]:s.FUNC_REVERSE_SUBTRACT};ge[AS]=s.MIN,ge[RS]=s.MAX;const ye={[wS]:s.ZERO,[CS]:s.ONE,[DS]:s.SRC_COLOR,[wd]:s.SRC_ALPHA,[zS]:s.SRC_ALPHA_SATURATE,[OS]:s.DST_COLOR,[LS]:s.DST_ALPHA,[US]:s.ONE_MINUS_SRC_COLOR,[Cd]:s.ONE_MINUS_SRC_ALPHA,[PS]:s.ONE_MINUS_DST_COLOR,[NS]:s.ONE_MINUS_DST_ALPHA,[BS]:s.CONSTANT_COLOR,[IS]:s.ONE_MINUS_CONSTANT_COLOR,[FS]:s.CONSTANT_ALPHA,[HS]:s.ONE_MINUS_CONSTANT_ALPHA};function V(W,Ut,bt,zt,Rt,St,Ft,ae,Oe,Re){if(W===Ui){w===!0&&(At(s.BLEND),w=!1);return}if(w===!1&&(ct(s.BLEND),w=!0),W!==ES){if(W!==y||Re!==C){if((_!==yr||D!==yr)&&(s.blendEquation(s.FUNC_ADD),_=yr,D=yr),Re)switch(W){case ka:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case m_:s.blendFunc(s.ONE,s.ONE);break;case g_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case __:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ka:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case m_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case g_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case __:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}B=null,O=null,G=null,I=null,H.set(0,0,0),F=0,y=W,C=Re}return}Rt=Rt||Ut,St=St||bt,Ft=Ft||zt,(Ut!==_||Rt!==D)&&(s.blendEquationSeparate(ge[Ut],ge[Rt]),_=Ut,D=Rt),(bt!==B||zt!==O||St!==G||Ft!==I)&&(s.blendFuncSeparate(ye[bt],ye[zt],ye[St],ye[Ft]),B=bt,O=zt,G=St,I=Ft),(ae.equals(H)===!1||Oe!==F)&&(s.blendColor(ae.r,ae.g,ae.b,Oe),H.copy(ae),F=Oe),y=W,C=!1}function yn(W,Ut){W.side===wi?At(s.CULL_FACE):ct(s.CULL_FACE);let bt=W.side===Gn;Ut&&(bt=!bt),Ae(bt),W.blending===ka&&W.transparent===!1?V(Ui):V(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),u.setMask(W.colorWrite);const zt=W.stencilWrite;h.setTest(zt),zt&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Me(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(W){R!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),R=W)}function _e(W){W!==SS?(ct(s.CULL_FACE),W!==k&&(W===p_?s.cullFace(s.BACK):W===yS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),k=W}function Xt(W){W!==ot&&(L&&s.lineWidth(W),ot=W)}function Me(W,Ut,bt){W?(ct(s.POLYGON_OFFSET_FILL),(K!==Ut||ut!==bt)&&(s.polygonOffset(Ut,bt),K=Ut,ut=bt)):At(s.POLYGON_OFFSET_FILL)}function Qt(W){W?ct(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function se(W){W===void 0&&(W=s.TEXTURE0+lt-1),yt!==W&&(s.activeTexture(W),yt=W)}function $e(W,Ut,bt){bt===void 0&&(yt===null?bt=s.TEXTURE0+lt-1:bt=yt);let zt=U[bt];zt===void 0&&(zt={type:void 0,texture:void 0},U[bt]=zt),(zt.type!==W||zt.texture!==Ut)&&(yt!==bt&&(s.activeTexture(bt),yt=bt),s.bindTexture(W,Ut||Mt[W]),zt.type=W,zt.texture=Ut)}function N(){const W=U[yt];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function mt(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function vt(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ot(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Dt(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function kt(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Wt(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Et(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pt(W){dt.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),dt.copy(W))}function jt(W){Y.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Y.copy(W))}function Kt(W,Ut){let bt=m.get(Ut);bt===void 0&&(bt=new WeakMap,m.set(Ut,bt));let zt=bt.get(W);zt===void 0&&(zt=s.getUniformBlockIndex(Ut,W.name),bt.set(W,zt))}function wt(W,Ut){const zt=m.get(Ut).get(W);p.get(Ut)!==zt&&(s.uniformBlockBinding(Ut,zt,W.__bindingPointIndex),p.set(Ut,zt))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},yt=null,U={},v={},x=new WeakMap,M=[],T=null,w=!1,y=null,_=null,B=null,O=null,D=null,G=null,I=null,H=new Se(0,0,0),F=0,C=!1,R=null,k=null,ot=null,K=null,ut=null,dt.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ct,disable:At,bindFramebuffer:Zt,drawBuffers:It,useProgram:oe,setBlending:V,setMaterial:yn,setFlipSided:Ae,setCullFace:_e,setLineWidth:Xt,setPolygonOffset:Me,setScissorTest:Qt,activeTexture:se,bindTexture:$e,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:nt,texImage2D:Wt,texImage3D:Et,updateUBOMapping:Kt,uniformBlockBinding:wt,texStorage2D:Dt,texStorage3D:kt,texSubImage2D:mt,texSubImage3D:vt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Ot,scissor:Pt,viewport:jt,reset:re}}function MA(s,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new De,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,E){return M?new OffscreenCanvas(N,E):zc("canvas")}function w(N,E,nt){let mt=1;const vt=$e(N);if((vt.width>nt||vt.height>nt)&&(mt=nt/Math.max(vt.width,vt.height)),mt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ft=Math.floor(mt*vt.width),Ot=Math.floor(mt*vt.height);v===void 0&&(v=T(ft,Ot));const Dt=E?T(ft,Ot):v;return Dt.width=ft,Dt.height=Ot,Dt.getContext("2d").drawImage(N,0,0,ft,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ft+"x"+Ot+")."),Dt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),N;return N}function y(N){return N.generateMipmaps}function _(N){s.generateMipmap(N)}function B(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(N,E,nt,mt,vt=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ft=E;if(E===s.RED&&(nt===s.FLOAT&&(ft=s.R32F),nt===s.HALF_FLOAT&&(ft=s.R16F),nt===s.UNSIGNED_BYTE&&(ft=s.R8)),E===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.R8UI),nt===s.UNSIGNED_SHORT&&(ft=s.R16UI),nt===s.UNSIGNED_INT&&(ft=s.R32UI),nt===s.BYTE&&(ft=s.R8I),nt===s.SHORT&&(ft=s.R16I),nt===s.INT&&(ft=s.R32I)),E===s.RG&&(nt===s.FLOAT&&(ft=s.RG32F),nt===s.HALF_FLOAT&&(ft=s.RG16F),nt===s.UNSIGNED_BYTE&&(ft=s.RG8)),E===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.RG8UI),nt===s.UNSIGNED_SHORT&&(ft=s.RG16UI),nt===s.UNSIGNED_INT&&(ft=s.RG32UI),nt===s.BYTE&&(ft=s.RG8I),nt===s.SHORT&&(ft=s.RG16I),nt===s.INT&&(ft=s.RG32I)),E===s.RGB_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.RGB8UI),nt===s.UNSIGNED_SHORT&&(ft=s.RGB16UI),nt===s.UNSIGNED_INT&&(ft=s.RGB32UI),nt===s.BYTE&&(ft=s.RGB8I),nt===s.SHORT&&(ft=s.RGB16I),nt===s.INT&&(ft=s.RGB32I)),E===s.RGBA_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.RGBA8UI),nt===s.UNSIGNED_SHORT&&(ft=s.RGBA16UI),nt===s.UNSIGNED_INT&&(ft=s.RGBA32UI),nt===s.BYTE&&(ft=s.RGBA8I),nt===s.SHORT&&(ft=s.RGBA16I),nt===s.INT&&(ft=s.RGBA32I)),E===s.RGB&&nt===s.UNSIGNED_INT_5_9_9_9_REV&&(ft=s.RGB9_E5),E===s.RGBA){const Ot=vt?Oc:Ce.getTransfer(mt);nt===s.FLOAT&&(ft=s.RGBA32F),nt===s.HALF_FLOAT&&(ft=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(ft=Ot===Ge?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT_4_4_4_4&&(ft=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(ft=s.RGB5_A1)}return(ft===s.R16F||ft===s.R32F||ft===s.RG16F||ft===s.RG32F||ft===s.RGBA16F||ft===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function D(N,E){let nt;return N?E===null||E===Ar||E===Io?nt=s.DEPTH24_STENCIL8:E===sa?nt=s.DEPTH32F_STENCIL8:E===Bo&&(nt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ar||E===Io?nt=s.DEPTH_COMPONENT24:E===sa?nt=s.DEPTH_COMPONENT32F:E===Bo&&(nt=s.DEPTH_COMPONENT16),nt}function G(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==vi&&N.minFilter!==Ci?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function I(N){const E=N.target;E.removeEventListener("dispose",I),F(E),E.isVideoTexture&&g.delete(E)}function H(N){const E=N.target;E.removeEventListener("dispose",H),R(E)}function F(N){const E=r.get(N);if(E.__webglInit===void 0)return;const nt=N.source,mt=x.get(nt);if(mt){const vt=mt[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&C(N),Object.keys(mt).length===0&&x.delete(nt)}r.remove(N)}function C(N){const E=r.get(N);s.deleteTexture(E.__webglTexture);const nt=N.source,mt=x.get(nt);delete mt[E.__cacheKey],d.memory.textures--}function R(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(E.__webglFramebuffer[mt]))for(let vt=0;vt<E.__webglFramebuffer[mt].length;vt++)s.deleteFramebuffer(E.__webglFramebuffer[mt][vt]);else s.deleteFramebuffer(E.__webglFramebuffer[mt]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[mt])}else{if(Array.isArray(E.__webglFramebuffer))for(let mt=0;mt<E.__webglFramebuffer.length;mt++)s.deleteFramebuffer(E.__webglFramebuffer[mt]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let mt=0;mt<E.__webglColorRenderbuffer.length;mt++)E.__webglColorRenderbuffer[mt]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[mt]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const nt=N.textures;for(let mt=0,vt=nt.length;mt<vt;mt++){const ft=r.get(nt[mt]);ft.__webglTexture&&(s.deleteTexture(ft.__webglTexture),d.memory.textures--),r.remove(nt[mt])}r.remove(N)}let k=0;function ot(){k=0}function K(){const N=k;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),k+=1,N}function ut(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function lt(N,E){const nt=r.get(N);if(N.isVideoTexture&&Qt(N),N.isRenderTargetTexture===!1&&N.version>0&&nt.__version!==N.version){const mt=N.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(nt,N,E);return}}i.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+E)}function L(N,E){const nt=r.get(N);if(N.version>0&&nt.__version!==N.version){Mt(nt,N,E);return}i.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+E)}function q(N,E){const nt=r.get(N);if(N.version>0&&nt.__version!==N.version){Mt(nt,N,E);return}i.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+E)}function z(N,E){const nt=r.get(N);if(N.version>0&&nt.__version!==N.version){ct(nt,N,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+E)}const yt={[Fd]:s.REPEAT,[Er]:s.CLAMP_TO_EDGE,[Hd]:s.MIRRORED_REPEAT},U={[vi]:s.NEAREST,[KS]:s.NEAREST_MIPMAP_NEAREST,[ac]:s.NEAREST_MIPMAP_LINEAR,[Ci]:s.LINEAR,[Yf]:s.LINEAR_MIPMAP_NEAREST,[br]:s.LINEAR_MIPMAP_LINEAR},J={[ty]:s.NEVER,[sy]:s.ALWAYS,[ey]:s.LESS,[Lv]:s.LEQUAL,[ny]:s.EQUAL,[ry]:s.GEQUAL,[iy]:s.GREATER,[ay]:s.NOTEQUAL};function gt(N,E){if(E.type===sa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ci||E.magFilter===Yf||E.magFilter===ac||E.magFilter===br||E.minFilter===Ci||E.minFilter===Yf||E.minFilter===ac||E.minFilter===br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,yt[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,yt[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,yt[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,U[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vi||E.minFilter!==ac&&E.minFilter!==br||E.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function dt(N,E){let nt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",I));const mt=E.source;let vt=x.get(mt);vt===void 0&&(vt={},x.set(mt,vt));const ft=ut(E);if(ft!==N.__cacheKey){vt[ft]===void 0&&(vt[ft]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,nt=!0),vt[ft].usedTimes++;const Ot=vt[N.__cacheKey];Ot!==void 0&&(vt[N.__cacheKey].usedTimes--,Ot.usedTimes===0&&C(E)),N.__cacheKey=ft,N.__webglTexture=vt[ft].texture}return nt}function Y(N,E,nt){return Math.floor(Math.floor(N/nt)/E)}function ht(N,E,nt,mt){const ft=N.updateRanges;if(ft.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,nt,mt,E.data);else{ft.sort((Et,Pt)=>Et.start-Pt.start);let Ot=0;for(let Et=1;Et<ft.length;Et++){const Pt=ft[Ot],jt=ft[Et],Kt=Pt.start+Pt.count,wt=Y(jt.start,E.width,4),re=Y(Pt.start,E.width,4);jt.start<=Kt+1&&wt===re&&Y(jt.start+jt.count-1,E.width,4)===wt?Pt.count=Math.max(Pt.count,jt.start+jt.count-Pt.start):(++Ot,ft[Ot]=jt)}ft.length=Ot+1;const Dt=s.getParameter(s.UNPACK_ROW_LENGTH),kt=s.getParameter(s.UNPACK_SKIP_PIXELS),Wt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Et=0,Pt=ft.length;Et<Pt;Et++){const jt=ft[Et],Kt=Math.floor(jt.start/4),wt=Math.ceil(jt.count/4),re=Kt%E.width,W=Math.floor(Kt/E.width),Ut=wt,bt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,re),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,re,W,Ut,bt,nt,mt,E.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Dt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,kt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Wt)}}function Mt(N,E,nt){let mt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(mt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(mt=s.TEXTURE_3D);const vt=dt(N,E),ft=E.source;i.bindTexture(mt,N.__webglTexture,s.TEXTURE0+nt);const Ot=r.get(ft);if(ft.version!==Ot.__version||vt===!0){i.activeTexture(s.TEXTURE0+nt);const Dt=Ce.getPrimaries(Ce.workingColorSpace),kt=E.colorSpace===Va?null:Ce.getPrimaries(E.colorSpace),Wt=E.colorSpace===Va||Dt===kt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Et=w(E.image,!1,l.maxTextureSize);Et=se(E,Et);const Pt=u.convert(E.format,E.colorSpace),jt=u.convert(E.type);let Kt=O(E.internalFormat,Pt,jt,E.colorSpace,E.isVideoTexture);gt(mt,E);let wt;const re=E.mipmaps,W=E.isVideoTexture!==!0,Ut=Ot.__version===void 0||vt===!0,bt=ft.dataReady,zt=G(E,Et);if(E.isDepthTexture)Kt=D(E.format===Ho,E.type),Ut&&(W?i.texStorage2D(s.TEXTURE_2D,1,Kt,Et.width,Et.height):i.texImage2D(s.TEXTURE_2D,0,Kt,Et.width,Et.height,0,Pt,jt,null));else if(E.isDataTexture)if(re.length>0){W&&Ut&&i.texStorage2D(s.TEXTURE_2D,zt,Kt,re[0].width,re[0].height);for(let Rt=0,St=re.length;Rt<St;Rt++)wt=re[Rt],W?bt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,wt.width,wt.height,Pt,jt,wt.data):i.texImage2D(s.TEXTURE_2D,Rt,Kt,wt.width,wt.height,0,Pt,jt,wt.data);E.generateMipmaps=!1}else W?(Ut&&i.texStorage2D(s.TEXTURE_2D,zt,Kt,Et.width,Et.height),bt&&ht(E,Et,Pt,jt)):i.texImage2D(s.TEXTURE_2D,0,Kt,Et.width,Et.height,0,Pt,jt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Ut&&i.texStorage3D(s.TEXTURE_2D_ARRAY,zt,Kt,re[0].width,re[0].height,Et.depth);for(let Rt=0,St=re.length;Rt<St;Rt++)if(wt=re[Rt],E.format!==_i)if(Pt!==null)if(W){if(bt)if(E.layerUpdates.size>0){const Ft=V_(wt.width,wt.height,E.format,E.type);for(const ae of E.layerUpdates){const Oe=wt.data.subarray(ae*Ft/wt.data.BYTES_PER_ELEMENT,(ae+1)*Ft/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,ae,wt.width,wt.height,1,Pt,Oe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,wt.width,wt.height,Et.depth,Pt,wt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Rt,Kt,wt.width,wt.height,Et.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?bt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,wt.width,wt.height,Et.depth,Pt,jt,wt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Rt,Kt,wt.width,wt.height,Et.depth,0,Pt,jt,wt.data)}else{W&&Ut&&i.texStorage2D(s.TEXTURE_2D,zt,Kt,re[0].width,re[0].height);for(let Rt=0,St=re.length;Rt<St;Rt++)wt=re[Rt],E.format!==_i?Pt!==null?W?bt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Rt,0,0,wt.width,wt.height,Pt,wt.data):i.compressedTexImage2D(s.TEXTURE_2D,Rt,Kt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?bt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,wt.width,wt.height,Pt,jt,wt.data):i.texImage2D(s.TEXTURE_2D,Rt,Kt,wt.width,wt.height,0,Pt,jt,wt.data)}else if(E.isDataArrayTexture)if(W){if(Ut&&i.texStorage3D(s.TEXTURE_2D_ARRAY,zt,Kt,Et.width,Et.height,Et.depth),bt)if(E.layerUpdates.size>0){const Rt=V_(Et.width,Et.height,E.format,E.type);for(const St of E.layerUpdates){const Ft=Et.data.subarray(St*Rt/Et.data.BYTES_PER_ELEMENT,(St+1)*Rt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,St,Et.width,Et.height,1,Pt,jt,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Pt,jt,Et.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Kt,Et.width,Et.height,Et.depth,0,Pt,jt,Et.data);else if(E.isData3DTexture)W?(Ut&&i.texStorage3D(s.TEXTURE_3D,zt,Kt,Et.width,Et.height,Et.depth),bt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Pt,jt,Et.data)):i.texImage3D(s.TEXTURE_3D,0,Kt,Et.width,Et.height,Et.depth,0,Pt,jt,Et.data);else if(E.isFramebufferTexture){if(Ut)if(W)i.texStorage2D(s.TEXTURE_2D,zt,Kt,Et.width,Et.height);else{let Rt=Et.width,St=Et.height;for(let Ft=0;Ft<zt;Ft++)i.texImage2D(s.TEXTURE_2D,Ft,Kt,Rt,St,0,Pt,jt,null),Rt>>=1,St>>=1}}else if(re.length>0){if(W&&Ut){const Rt=$e(re[0]);i.texStorage2D(s.TEXTURE_2D,zt,Kt,Rt.width,Rt.height)}for(let Rt=0,St=re.length;Rt<St;Rt++)wt=re[Rt],W?bt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Pt,jt,wt):i.texImage2D(s.TEXTURE_2D,Rt,Kt,Pt,jt,wt);E.generateMipmaps=!1}else if(W){if(Ut){const Rt=$e(Et);i.texStorage2D(s.TEXTURE_2D,zt,Kt,Rt.width,Rt.height)}bt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Pt,jt,Et)}else i.texImage2D(s.TEXTURE_2D,0,Kt,Pt,jt,Et);y(E)&&_(mt),Ot.__version=ft.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ct(N,E,nt){if(E.image.length!==6)return;const mt=dt(N,E),vt=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+nt);const ft=r.get(vt);if(vt.version!==ft.__version||mt===!0){i.activeTexture(s.TEXTURE0+nt);const Ot=Ce.getPrimaries(Ce.workingColorSpace),Dt=E.colorSpace===Va?null:Ce.getPrimaries(E.colorSpace),kt=E.colorSpace===Va||Ot===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const Wt=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,Pt=[];for(let St=0;St<6;St++)!Wt&&!Et?Pt[St]=w(E.image[St],!0,l.maxCubemapSize):Pt[St]=Et?E.image[St].image:E.image[St],Pt[St]=se(E,Pt[St]);const jt=Pt[0],Kt=u.convert(E.format,E.colorSpace),wt=u.convert(E.type),re=O(E.internalFormat,Kt,wt,E.colorSpace),W=E.isVideoTexture!==!0,Ut=ft.__version===void 0||mt===!0,bt=vt.dataReady;let zt=G(E,jt);gt(s.TEXTURE_CUBE_MAP,E);let Rt;if(Wt){W&&Ut&&i.texStorage2D(s.TEXTURE_CUBE_MAP,zt,re,jt.width,jt.height);for(let St=0;St<6;St++){Rt=Pt[St].mipmaps;for(let Ft=0;Ft<Rt.length;Ft++){const ae=Rt[Ft];E.format!==_i?Kt!==null?W?bt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ft,0,0,ae.width,ae.height,Kt,ae.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ft,re,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ft,0,0,ae.width,ae.height,Kt,wt,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ft,re,ae.width,ae.height,0,Kt,wt,ae.data)}}}else{if(Rt=E.mipmaps,W&&Ut){Rt.length>0&&zt++;const St=$e(Pt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,zt,re,St.width,St.height)}for(let St=0;St<6;St++)if(Et){W?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Pt[St].width,Pt[St].height,Kt,wt,Pt[St].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,re,Pt[St].width,Pt[St].height,0,Kt,wt,Pt[St].data);for(let Ft=0;Ft<Rt.length;Ft++){const Oe=Rt[Ft].image[St].image;W?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ft+1,0,0,Oe.width,Oe.height,Kt,wt,Oe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ft+1,re,Oe.width,Oe.height,0,Kt,wt,Oe.data)}}else{W?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Kt,wt,Pt[St]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,re,Kt,wt,Pt[St]);for(let Ft=0;Ft<Rt.length;Ft++){const ae=Rt[Ft];W?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ft+1,0,0,Kt,wt,ae.image[St]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ft+1,re,Kt,wt,ae.image[St])}}}y(E)&&_(s.TEXTURE_CUBE_MAP),ft.__version=vt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function At(N,E,nt,mt,vt,ft){const Ot=u.convert(nt.format,nt.colorSpace),Dt=u.convert(nt.type),kt=O(nt.internalFormat,Ot,Dt,nt.colorSpace),Wt=r.get(E),Et=r.get(nt);if(Et.__renderTarget=E,!Wt.__hasExternalTextures){const Pt=Math.max(1,E.width>>ft),jt=Math.max(1,E.height>>ft);vt===s.TEXTURE_3D||vt===s.TEXTURE_2D_ARRAY?i.texImage3D(vt,ft,kt,Pt,jt,E.depth,0,Ot,Dt,null):i.texImage2D(vt,ft,kt,Pt,jt,0,Ot,Dt,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),Me(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,vt,Et.__webglTexture,0,Xt(E)):(vt===s.TEXTURE_2D||vt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,mt,vt,Et.__webglTexture,ft),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(N,E,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer){const mt=E.depthTexture,vt=mt&&mt.isDepthTexture?mt.type:null,ft=D(E.stencilBuffer,vt),Ot=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=Xt(E);Me(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,ft,E.width,E.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,ft,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ft,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ot,s.RENDERBUFFER,N)}else{const mt=E.textures;for(let vt=0;vt<mt.length;vt++){const ft=mt[vt],Ot=u.convert(ft.format,ft.colorSpace),Dt=u.convert(ft.type),kt=O(ft.internalFormat,Ot,Dt,ft.colorSpace),Wt=Xt(E);nt&&Me(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,kt,E.width,E.height):Me(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt,kt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,kt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=r.get(E.depthTexture);mt.__renderTarget=E,(!mt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),lt(E.depthTexture,0);const vt=mt.__webglTexture,ft=Xt(E);if(E.depthTexture.format===Fo)Me(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,vt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,vt,0);else if(E.depthTexture.format===Ho)Me(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,vt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function oe(N){const E=r.get(N),nt=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const mt=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),mt){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,mt.removeEventListener("dispose",vt)};mt.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=mt}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const mt=N.texture.mipmaps;mt&&mt.length>0?It(E.__webglFramebuffer[0],N):It(E.__webglFramebuffer,N)}else if(nt){E.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[mt]),E.__webglDepthbuffer[mt]===void 0)E.__webglDepthbuffer[mt]=s.createRenderbuffer(),Zt(E.__webglDepthbuffer[mt],N,!1);else{const vt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[mt];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,ft)}}else{const mt=N.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Zt(E.__webglDepthbuffer,N,!1);else{const vt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,ft)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(N,E,nt){const mt=r.get(N);E!==void 0&&At(mt.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&oe(N)}function ye(N){const E=N.texture,nt=r.get(N),mt=r.get(E);N.addEventListener("dispose",H);const vt=N.textures,ft=N.isWebGLCubeRenderTarget===!0,Ot=vt.length>1;if(Ot||(mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture()),mt.__version=E.version,d.memory.textures++),ft){nt.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer[Dt]=[];for(let kt=0;kt<E.mipmaps.length;kt++)nt.__webglFramebuffer[Dt][kt]=s.createFramebuffer()}else nt.__webglFramebuffer[Dt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)nt.__webglFramebuffer[Dt]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(Ot)for(let Dt=0,kt=vt.length;Dt<kt;Dt++){const Wt=r.get(vt[Dt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),d.memory.textures++)}if(N.samples>0&&Me(N)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Dt=0;Dt<vt.length;Dt++){const kt=vt[Dt];nt.__webglColorRenderbuffer[Dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[Dt]);const Wt=u.convert(kt.format,kt.colorSpace),Et=u.convert(kt.type),Pt=O(kt.internalFormat,Wt,Et,kt.colorSpace,N.isXRRenderTarget===!0),jt=Xt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,Pt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,nt.__webglColorRenderbuffer[Dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),Zt(nt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){i.bindTexture(s.TEXTURE_CUBE_MAP,mt.__webglTexture),gt(s.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)At(nt.__webglFramebuffer[Dt][kt],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,kt);else At(nt.__webglFramebuffer[Dt],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(E)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let Dt=0,kt=vt.length;Dt<kt;Dt++){const Wt=vt[Dt],Et=r.get(Wt);i.bindTexture(s.TEXTURE_2D,Et.__webglTexture),gt(s.TEXTURE_2D,Wt),At(nt.__webglFramebuffer,N,Wt,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,0),y(Wt)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Dt=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Dt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Dt,mt.__webglTexture),gt(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)At(nt.__webglFramebuffer[kt],N,E,s.COLOR_ATTACHMENT0,Dt,kt);else At(nt.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,Dt,0);y(E)&&_(Dt),i.unbindTexture()}N.depthBuffer&&oe(N)}function V(N){const E=N.textures;for(let nt=0,mt=E.length;nt<mt;nt++){const vt=E[nt];if(y(vt)){const ft=B(N),Ot=r.get(vt).__webglTexture;i.bindTexture(ft,Ot),_(ft),i.unbindTexture()}}}const yn=[],Ae=[];function _e(N){if(N.samples>0){if(Me(N)===!1){const E=N.textures,nt=N.width,mt=N.height;let vt=s.COLOR_BUFFER_BIT;const ft=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ot=r.get(N),Dt=E.length>1;if(Dt)for(let Wt=0;Wt<E.length;Wt++)i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const kt=N.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Wt=0;Wt<E.length;Wt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(vt|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(vt|=s.STENCIL_BUFFER_BIT)),Dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ot.__webglColorRenderbuffer[Wt]);const Et=r.get(E[Wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Et,0)}s.blitFramebuffer(0,0,nt,mt,0,0,nt,mt,vt,s.NEAREST),p===!0&&(yn.length=0,Ae.length=0,yn.push(s.COLOR_ATTACHMENT0+Wt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(yn.push(ft),Ae.push(ft),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ae)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,yn))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Dt)for(let Wt=0;Wt<E.length;Wt++){i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.RENDERBUFFER,Ot.__webglColorRenderbuffer[Wt]);const Et=r.get(E[Wt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.TEXTURE_2D,Et,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const E=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Xt(N){return Math.min(l.maxSamples,N.samples)}function Me(N){const E=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Qt(N){const E=d.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function se(N,E){const nt=N.colorSpace,mt=N.format,vt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||nt!==Rs&&nt!==Va&&(Ce.getTransfer(nt)===Ge?(mt!==_i||vt!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),E}function $e(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=K,this.resetTextureUnits=ot,this.setTexture2D=lt,this.setTexture2DArray=L,this.setTexture3D=q,this.setTextureCube=z,this.rebindTextures=ge,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Me}function EA(s,t){function i(r,l=Va){let u;const d=Ce.getTransfer(l);if(r===Ni)return s.UNSIGNED_BYTE;if(r===Mh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Eh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Tv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Ev)return s.BYTE;if(r===bv)return s.SHORT;if(r===Bo)return s.UNSIGNED_SHORT;if(r===yh)return s.INT;if(r===Ar)return s.UNSIGNED_INT;if(r===sa)return s.FLOAT;if(r===Go)return s.HALF_FLOAT;if(r===Av)return s.ALPHA;if(r===Rv)return s.RGB;if(r===_i)return s.RGBA;if(r===Fo)return s.DEPTH_COMPONENT;if(r===Ho)return s.DEPTH_STENCIL;if(r===wv)return s.RED;if(r===bh)return s.RED_INTEGER;if(r===Cv)return s.RG;if(r===Th)return s.RG_INTEGER;if(r===Ah)return s.RGBA_INTEGER;if(r===wc||r===Cc||r===Dc||r===Uc)if(d===Ge)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===wc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===wc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Uc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gd||r===Vd||r===kd||r===Xd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Gd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wd||r===qd||r===Yd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Wd||r===qd)return d===Ge?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Yd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zd||r===jd||r===Kd||r===Qd||r===Jd||r===$d||r===th||r===eh||r===nh||r===ih||r===ah||r===rh||r===sh||r===oh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Zd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$d)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===th)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===eh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ih)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ah)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===rh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===sh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===oh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lc||r===lh||r===ch)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Lc)return d===Ge?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===lh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ch)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dv||r===uh||r===fh||r===dh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Lc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===uh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===dh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Io?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const bA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class AA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Vn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new qa({vertexShader:bA,fragmentShader:TA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Di(new Yo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RA extends Cs{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,g=null,v=null,x=null,M=null,T=null;const w=new AA,y=i.getContextAttributes();let _=null,B=null;const O=[],D=[],G=new De;let I=null;const H=new $n;H.viewport=new Ve;const F=new $n;F.viewport=new Ve;const C=[H,F],R=new Zy;let k=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ht=O[Y];return ht===void 0&&(ht=new gd,O[Y]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(Y){let ht=O[Y];return ht===void 0&&(ht=new gd,O[Y]=ht),ht.getGripSpace()},this.getHand=function(Y){let ht=O[Y];return ht===void 0&&(ht=new gd,O[Y]=ht),ht.getHandSpace()};function K(Y){const ht=D.indexOf(Y.inputSource);if(ht===-1)return;const Mt=O[ht];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,m||d),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ut(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",ut),l.removeEventListener("inputsourceschange",lt);for(let Y=0;Y<O.length;Y++){const ht=D[Y];ht!==null&&(D[Y]=null,O[Y].disconnect(ht))}k=null,ot=null,w.reset(),t.setRenderTarget(_),M=null,x=null,v=null,l=null,B=null,dt.stop(),r.isPresenting=!1,t.setPixelRatio(I),t.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){h=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",ut),l.addEventListener("inputsourceschange",lt),y.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,ct=null,At=null;y.depth&&(At=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=y.stencil?Ho:Fo,ct=y.stencil?Io:Ar);const Zt={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(Zt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),B=new Rr(x.textureWidth,x.textureHeight,{format:_i,type:Ni,depthTexture:new kv(x.textureWidth,x.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new Rr(M.framebufferWidth,M.framebufferHeight,{format:_i,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),dt.setContext(l),dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function lt(Y){for(let ht=0;ht<Y.removed.length;ht++){const Mt=Y.removed[ht],ct=D.indexOf(Mt);ct>=0&&(D[ct]=null,O[ct].disconnect(Mt))}for(let ht=0;ht<Y.added.length;ht++){const Mt=Y.added[ht];let ct=D.indexOf(Mt);if(ct===-1){for(let Zt=0;Zt<O.length;Zt++)if(Zt>=D.length){D.push(Mt),ct=Zt;break}else if(D[Zt]===null){D[Zt]=Mt,ct=Zt;break}if(ct===-1)break}const At=O[ct];At&&At.connect(Mt)}}const L=new et,q=new et;function z(Y,ht,Mt){L.setFromMatrixPosition(ht.matrixWorld),q.setFromMatrixPosition(Mt.matrixWorld);const ct=L.distanceTo(q),At=ht.projectionMatrix.elements,Zt=Mt.projectionMatrix.elements,It=At[14]/(At[10]-1),oe=At[14]/(At[10]+1),ge=(At[9]+1)/At[5],ye=(At[9]-1)/At[5],V=(At[8]-1)/At[0],yn=(Zt[8]+1)/Zt[0],Ae=It*V,_e=It*yn,Xt=ct/(-V+yn),Me=Xt*-V;if(ht.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Me),Y.translateZ(Xt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),At[10]===-1)Y.projectionMatrix.copy(ht.projectionMatrix),Y.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Qt=It+Xt,se=oe+Xt,$e=Ae-Me,N=_e+(ct-Me),E=ge*oe/se*Qt,nt=ye*oe/se*Qt;Y.projectionMatrix.makePerspective($e,N,E,nt,Qt,se),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function yt(Y,ht){ht===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ht.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let ht=Y.near,Mt=Y.far;w.texture!==null&&(w.depthNear>0&&(ht=w.depthNear),w.depthFar>0&&(Mt=w.depthFar)),R.near=F.near=H.near=ht,R.far=F.far=H.far=Mt,(k!==R.near||ot!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,ot=R.far),H.layers.mask=Y.layers.mask|2,F.layers.mask=Y.layers.mask|4,R.layers.mask=H.layers.mask|F.layers.mask;const ct=Y.parent,At=R.cameras;yt(R,ct);for(let Zt=0;Zt<At.length;Zt++)yt(At[Zt],ct);At.length===2?z(R,H,F):R.projectionMatrix.copy(H.projectionMatrix),U(Y,R,ct)};function U(Y,ht,Mt){Mt===null?Y.matrix.copy(ht.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ht.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ht.projectionMatrix),Y.projectionMatrixInverse.copy(ht.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=hh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(Y){p=Y,x!==null&&(x.fixedFoveation=Y),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Y)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let J=null;function gt(Y,ht){if(g=ht.getViewerPose(m||d),T=ht,g!==null){const Mt=g.views;M!==null&&(t.setRenderTargetFramebuffer(B,M.framebuffer),t.setRenderTarget(B));let ct=!1;Mt.length!==R.cameras.length&&(R.cameras.length=0,ct=!0);for(let It=0;It<Mt.length;It++){const oe=Mt[It];let ge=null;if(M!==null)ge=M.getViewport(oe);else{const V=v.getViewSubImage(x,oe);ge=V.viewport,It===0&&(t.setRenderTargetTextures(B,V.colorTexture,V.depthStencilTexture),t.setRenderTarget(B))}let ye=C[It];ye===void 0&&(ye=new $n,ye.layers.enable(It),ye.viewport=new Ve,C[It]=ye),ye.matrix.fromArray(oe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(oe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(ge.x,ge.y,ge.width,ge.height),It===0&&(R.matrix.copy(ye.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ct===!0&&R.cameras.push(ye)}const At=l.enabledFeatures;if(At&&At.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const It=v.getDepthInformation(Mt[0]);It&&It.isValid&&It.texture&&w.init(t,It,l.renderState)}}for(let Mt=0;Mt<O.length;Mt++){const ct=D[Mt],At=O[Mt];ct!==null&&At!==void 0&&At.update(ct,ht,m||d)}J&&J(Y,ht),ht.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ht}),T=null}const dt=new Wv;dt.setAnimationLoop(gt),this.setAnimationLoop=function(Y){J=Y},this.dispose=function(){}}}const _r=new xi,wA=new Ke;function CA(s,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,Hv(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,B,O,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,D)):_.isMeshMatcapMaterial?(u(y,_),T(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),w(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(d(y,_),_.isLineDashedMaterial&&h(y,_)):_.isPointsMaterial?p(y,_,B,O):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Gn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Gn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const B=t.get(_),O=B.envMap,D=B.envMapRotation;O&&(y.envMap.value=O,_r.copy(D),_r.x*=-1,_r.y*=-1,_r.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),y.envMapRotation.value.setFromMatrix4(wA.makeRotationFromEuler(_r)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function h(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,B,O){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*B,y.scale.value=O*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,B){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Gn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const B=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function DA(s,t,i,r){let l={},u={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(B,O){const D=O.program;r.uniformBlockBinding(B,D)}function m(B,O){let D=l[B.id];D===void 0&&(T(B),D=g(B),l[B.id]=D,B.addEventListener("dispose",y));const G=O.program;r.updateUBOMapping(B,G);const I=t.render.frame;u[B.id]!==I&&(x(B),u[B.id]=I)}function g(B){const O=v();B.__bindingPointIndex=O;const D=s.createBuffer(),G=B.__size,I=B.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,G,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,D),D}function v(){for(let B=0;B<h;B++)if(d.indexOf(B)===-1)return d.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(B){const O=l[B.id],D=B.uniforms,G=B.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let I=0,H=D.length;I<H;I++){const F=Array.isArray(D[I])?D[I]:[D[I]];for(let C=0,R=F.length;C<R;C++){const k=F[C];if(M(k,I,C,G)===!0){const ot=k.__offset,K=Array.isArray(k.value)?k.value:[k.value];let ut=0;for(let lt=0;lt<K.length;lt++){const L=K[lt],q=w(L);typeof L=="number"||typeof L=="boolean"?(k.__data[0]=L,s.bufferSubData(s.UNIFORM_BUFFER,ot+ut,k.__data)):L.isMatrix3?(k.__data[0]=L.elements[0],k.__data[1]=L.elements[1],k.__data[2]=L.elements[2],k.__data[3]=0,k.__data[4]=L.elements[3],k.__data[5]=L.elements[4],k.__data[6]=L.elements[5],k.__data[7]=0,k.__data[8]=L.elements[6],k.__data[9]=L.elements[7],k.__data[10]=L.elements[8],k.__data[11]=0):(L.toArray(k.__data,ut),ut+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ot,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(B,O,D,G){const I=B.value,H=O+"_"+D;if(G[H]===void 0)return typeof I=="number"||typeof I=="boolean"?G[H]=I:G[H]=I.clone(),!0;{const F=G[H];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return G[H]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function T(B){const O=B.uniforms;let D=0;const G=16;for(let H=0,F=O.length;H<F;H++){const C=Array.isArray(O[H])?O[H]:[O[H]];for(let R=0,k=C.length;R<k;R++){const ot=C[R],K=Array.isArray(ot.value)?ot.value:[ot.value];for(let ut=0,lt=K.length;ut<lt;ut++){const L=K[ut],q=w(L),z=D%G,yt=z%q.boundary,U=z+yt;D+=yt,U!==0&&G-U<q.storage&&(D+=G-U),ot.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=D,D+=q.storage}}}const I=D%G;return I>0&&(D+=G-I),B.__size=D,B.__cache={},this}function w(B){const O={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(O.boundary=4,O.storage=4):B.isVector2?(O.boundary=8,O.storage=8):B.isVector3||B.isColor?(O.boundary=16,O.storage=12):B.isVector4?(O.boundary=16,O.storage=16):B.isMatrix3?(O.boundary=48,O.storage=48):B.isMatrix4?(O.boundary=64,O.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),O}function y(B){const O=B.target;O.removeEventListener("dispose",y);const D=d.indexOf(O.__bindingPointIndex);d.splice(D,1),s.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function _(){for(const B in l)s.deleteBuffer(l[B]);d=[],l={},u={}}return{bind:p,update:m,dispose:_}}class UA{constructor(t={}){const{canvas:i=ly(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const T=new Uint32Array(4),w=new Int32Array(4);let y=null,_=null;const B=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let G=!1;this._outputColorSpace=li;let I=0,H=0,F=null,C=-1,R=null;const k=new Ve,ot=new Ve;let K=null;const ut=new Se(0);let lt=0,L=i.width,q=i.height,z=1,yt=null,U=null;const J=new Ve(0,0,L,q),gt=new Ve(0,0,L,q);let dt=!1;const Y=new Ch;let ht=!1,Mt=!1;const ct=new Ke,At=new Ke,Zt=new et,It=new Ve,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function ye(){return F===null?z:1}let V=r;function yn(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xh}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",Rt,!1),i.addEventListener("webglcontextcreationerror",St,!1),V===null){const j="webgl2";if(V=yn(j,A),V===null)throw yn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ae,_e,Xt,Me,Qt,se,$e,N,E,nt,mt,vt,ft,Ot,Dt,kt,Wt,Et,Pt,jt,Kt,wt,re,W;function Ut(){Ae=new Gb(V),Ae.init(),wt=new EA(V,Ae),_e=new Ob(V,Ae,t,wt),Xt=new yA(V,Ae),_e.reverseDepthBuffer&&x&&Xt.buffers.depth.setReversed(!0),Me=new Xb(V),Qt=new lA,se=new MA(V,Ae,Xt,Qt,_e,wt,Me),$e=new zb(D),N=new Hb(D),E=new Ky(V),re=new Lb(V,E),nt=new Vb(V,E,Me,re),mt=new qb(V,nt,E,Me),Pt=new Wb(V,_e,se),kt=new Pb(Qt),vt=new oA(D,$e,N,Ae,_e,re,kt),ft=new CA(D,Qt),Ot=new uA,Dt=new gA(Ae),Et=new Ub(D,$e,N,Xt,mt,M,p),Wt=new xA(D,mt,_e),W=new DA(V,Me,_e,Xt),jt=new Nb(V,Ae,Me),Kt=new kb(V,Ae,Me),Me.programs=vt.programs,D.capabilities=_e,D.extensions=Ae,D.properties=Qt,D.renderLists=Ot,D.shadowMap=Wt,D.state=Xt,D.info=Me}Ut();const bt=new RA(D,V);this.xr=bt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=Ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(L,q,!1))},this.getSize=function(A){return A.set(L,q)},this.setSize=function(A,j,rt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,q=j,i.width=Math.floor(A*z),i.height=Math.floor(j*z),rt===!0&&(i.style.width=A+"px",i.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(L*z,q*z).floor()},this.setDrawingBufferSize=function(A,j,rt){L=A,q=j,z=rt,i.width=Math.floor(A*rt),i.height=Math.floor(j*rt),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,j,rt,st){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,j,rt,st),Xt.viewport(k.copy(J).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(gt)},this.setScissor=function(A,j,rt,st){A.isVector4?gt.set(A.x,A.y,A.z,A.w):gt.set(A,j,rt,st),Xt.scissor(ot.copy(gt).multiplyScalar(z).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(A){Xt.setScissorTest(dt=A)},this.setOpaqueSort=function(A){yt=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,rt=!0){let st=0;if(A){let Q=!1;if(F!==null){const Tt=F.texture.format;Q=Tt===Ah||Tt===Th||Tt===bh}if(Q){const Tt=F.texture.type,Ct=Tt===Ni||Tt===Ar||Tt===Bo||Tt===Io||Tt===Mh||Tt===Eh,Nt=Et.getClearColor(),Bt=Et.getClearAlpha(),ne=Nt.r,$t=Nt.g,qt=Nt.b;Ct?(T[0]=ne,T[1]=$t,T[2]=qt,T[3]=Bt,V.clearBufferuiv(V.COLOR,0,T)):(w[0]=ne,w[1]=$t,w[2]=qt,w[3]=Bt,V.clearBufferiv(V.COLOR,0,w))}else st|=V.COLOR_BUFFER_BIT}j&&(st|=V.DEPTH_BUFFER_BIT),rt&&(st|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",Rt,!1),i.removeEventListener("webglcontextcreationerror",St,!1),Et.dispose(),Ot.dispose(),Dt.dispose(),Qt.dispose(),$e.dispose(),N.dispose(),mt.dispose(),re.dispose(),W.dispose(),vt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",on),bt.removeEventListener("sessionend",Mn),Pn.stop()};function zt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=Me.autoReset,j=Wt.enabled,rt=Wt.autoUpdate,st=Wt.needsUpdate,Q=Wt.type;Ut(),Me.autoReset=A,Wt.enabled=j,Wt.autoUpdate=rt,Wt.needsUpdate=st,Wt.type=Q}function St(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ft(A){const j=A.target;j.removeEventListener("dispose",Ft),ae(j)}function ae(A){Oe(A),Qt.remove(A)}function Oe(A){const j=Qt.get(A).programs;j!==void 0&&(j.forEach(function(rt){vt.releaseProgram(rt)}),A.isShaderMaterial&&vt.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,rt,st,Q,Tt){j===null&&(j=oe);const Ct=Q.isMesh&&Q.matrixWorld.determinant()<0,Nt=ja(A,j,rt,st,Q);Xt.setMaterial(st,Ct);let Bt=rt.index,ne=1;if(st.wireframe===!0){if(Bt=nt.getWireframeAttribute(rt),Bt===void 0)return;ne=2}const $t=rt.drawRange,qt=rt.attributes.position;let ue=$t.start*ne,Le=($t.start+$t.count)*ne;Tt!==null&&(ue=Math.max(ue,Tt.start*ne),Le=Math.min(Le,(Tt.start+Tt.count)*ne)),Bt!==null?(ue=Math.max(ue,0),Le=Math.min(Le,Bt.count)):qt!=null&&(ue=Math.max(ue,0),Le=Math.min(Le,qt.count));const Ye=Le-ue;if(Ye<0||Ye===1/0)return;re.setup(Q,st,Nt,rt,Bt);let pe,Ne=jt;if(Bt!==null&&(pe=E.get(Bt),Ne=Kt,Ne.setIndex(pe)),Q.isMesh)st.wireframe===!0?(Xt.setLineWidth(st.wireframeLinewidth*ye()),Ne.setMode(V.LINES)):Ne.setMode(V.TRIANGLES);else if(Q.isLine){let Jt=st.linewidth;Jt===void 0&&(Jt=1),Xt.setLineWidth(Jt*ye()),Q.isLineSegments?Ne.setMode(V.LINES):Q.isLineLoop?Ne.setMode(V.LINE_LOOP):Ne.setMode(V.LINE_STRIP)}else Q.isPoints?Ne.setMode(V.POINTS):Q.isSprite&&Ne.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))Ne.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Jt=Q._multiDrawStarts,Be=Q._multiDrawCounts,Ee=Q._multiDrawCount,mn=Bt?E.get(Bt).bytesPerElement:1,da=Qt.get(st).currentProgram.getUniforms();for(let We=0;We<Ee;We++)da.setValue(V,"_gl_DrawID",We),Ne.render(Jt[We]/mn,Be[We])}else if(Q.isInstancedMesh)Ne.renderInstances(ue,Ye,Q.count);else if(rt.isInstancedBufferGeometry){const Jt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Be=Math.min(rt.instanceCount,Jt);Ne.renderInstances(ue,Ye,Be)}else Ne.render(ue,Ye)};function Re(A,j,rt){A.transparent===!0&&A.side===wi&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,ua(A,j,rt),A.side=Wa,A.needsUpdate=!0,ua(A,j,rt),A.side=wi):ua(A,j,rt)}this.compile=function(A,j,rt=null){rt===null&&(rt=A),_=Dt.get(rt),_.init(j),O.push(_),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),A!==rt&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),_.setupLights();const st=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Tt=Q.material;if(Tt)if(Array.isArray(Tt))for(let Ct=0;Ct<Tt.length;Ct++){const Nt=Tt[Ct];Re(Nt,rt,Q),st.add(Nt)}else Re(Tt,rt,Q),st.add(Tt)}),_=O.pop(),st},this.compileAsync=function(A,j,rt=null){const st=this.compile(A,j,rt);return new Promise(Q=>{function Tt(){if(st.forEach(function(Ct){Qt.get(Ct).currentProgram.isReady()&&st.delete(Ct)}),st.size===0){Q(A);return}setTimeout(Tt,10)}Ae.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let kn=null;function pn(A){kn&&kn(A)}function on(){Pn.stop()}function Mn(){Pn.start()}const Pn=new Wv;Pn.setAnimationLoop(pn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(A){kn=A,bt.setAnimationLoop(A),A===null?Pn.stop():Pn.start()},bt.addEventListener("sessionstart",on),bt.addEventListener("sessionend",Mn),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(j),j=bt.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,j,F),_=Dt.get(A,O.length),_.init(j),O.push(_),At.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Y.setFromProjectionMatrix(At),Mt=this.localClippingEnabled,ht=kt.init(this.clippingPlanes,Mt),y=Ot.get(A,B.length),y.init(),B.push(y),bt.enabled===!0&&bt.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&Ya(Tt,j,-1/0,D.sortObjects)}Ya(A,j,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(yt,U),ge=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ge&&Et.addToRenderList(y,A),this.info.render.frame++,ht===!0&&kt.beginShadows();const rt=_.state.shadowsArray;Wt.render(rt,A,j),ht===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,Q=y.transmissive;if(_.setupLights(),j.isArrayCamera){const Tt=j.cameras;if(Q.length>0)for(let Ct=0,Nt=Tt.length;Ct<Nt;Ct++){const Bt=Tt[Ct];jo(st,Q,A,Bt)}ge&&Et.render(A);for(let Ct=0,Nt=Tt.length;Ct<Nt;Ct++){const Bt=Tt[Ct];Zo(y,A,Bt,Bt.viewport)}}else Q.length>0&&jo(st,Q,A,j),ge&&Et.render(A),Zo(y,A,j);F!==null&&H===0&&(se.updateMultisampleRenderTarget(F),se.updateRenderTargetMipmap(F)),A.isScene===!0&&A.onAfterRender(D,A,j),re.resetDefaultState(),C=-1,R=null,O.pop(),O.length>0?(_=O[O.length-1],ht===!0&&kt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?y=B[B.length-1]:y=null};function Ya(A,j,rt,st){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){st&&It.setFromMatrixPosition(A.matrixWorld).applyMatrix4(At);const Ct=mt.update(A),Nt=A.material;Nt.visible&&y.push(A,Ct,Nt,rt,It.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const Ct=mt.update(A),Nt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),It.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),It.copy(Ct.boundingSphere.center)),It.applyMatrix4(A.matrixWorld).applyMatrix4(At)),Array.isArray(Nt)){const Bt=Ct.groups;for(let ne=0,$t=Bt.length;ne<$t;ne++){const qt=Bt[ne],ue=Nt[qt.materialIndex];ue&&ue.visible&&y.push(A,Ct,ue,rt,It.z,qt)}}else Nt.visible&&y.push(A,Ct,Nt,rt,It.z,null)}}const Tt=A.children;for(let Ct=0,Nt=Tt.length;Ct<Nt;Ct++)Ya(Tt[Ct],j,rt,st)}function Zo(A,j,rt,st){const Q=A.opaque,Tt=A.transmissive,Ct=A.transparent;_.setupLightsView(rt),ht===!0&&kt.setGlobalState(D.clippingPlanes,rt),st&&Xt.viewport(k.copy(st)),Q.length>0&&Za(Q,j,rt),Tt.length>0&&Za(Tt,j,rt),Ct.length>0&&Za(Ct,j,rt),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function jo(A,j,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[st.id]===void 0&&(_.state.transmissionRenderTarget[st.id]=new Rr(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?Go:Ni,minFilter:br,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[st.id],Ct=st.viewport||k;Tt.setSize(Ct.z*D.transmissionResolutionScale,Ct.w*D.transmissionResolutionScale);const Nt=D.getRenderTarget(),Bt=D.getActiveCubeFace(),ne=D.getActiveMipmapLevel();D.setRenderTarget(Tt),D.getClearColor(ut),lt=D.getClearAlpha(),lt<1&&D.setClearColor(16777215,.5),D.clear(),ge&&Et.render(rt);const $t=D.toneMapping;D.toneMapping=Xa;const qt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),_.setupLightsView(st),ht===!0&&kt.setGlobalState(D.clippingPlanes,st),Za(A,rt,st),se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Le=0,Ye=j.length;Le<Ye;Le++){const pe=j[Le],Ne=pe.object,Jt=pe.geometry,Be=pe.material,Ee=pe.group;if(Be.side===wi&&Ne.layers.test(st.layers)){const mn=Be.side;Be.side=Gn,Be.needsUpdate=!0,ca(Ne,rt,st,Jt,Be,Ee),Be.side=mn,Be.needsUpdate=!0,ue=!0}}ue===!0&&(se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Nt,Bt,ne),D.setClearColor(ut,lt),qt!==void 0&&(st.viewport=qt),D.toneMapping=$t}function Za(A,j,rt){const st=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,Tt=A.length;Q<Tt;Q++){const Ct=A[Q],Nt=Ct.object,Bt=Ct.geometry,ne=Ct.group;let $t=Ct.material;$t.allowOverride===!0&&st!==null&&($t=st),Nt.layers.test(rt.layers)&&ca(Nt,j,rt,Bt,$t,ne)}}function ca(A,j,rt,st,Q,Tt){A.onBeforeRender(D,j,rt,st,Q,Tt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(D,j,rt,st,A,Tt),Q.transparent===!0&&Q.side===wi&&Q.forceSinglePass===!1?(Q.side=Gn,Q.needsUpdate=!0,D.renderBufferDirect(rt,j,st,Q,A,Tt),Q.side=Wa,Q.needsUpdate=!0,D.renderBufferDirect(rt,j,st,Q,A,Tt),Q.side=wi):D.renderBufferDirect(rt,j,st,Q,A,Tt),A.onAfterRender(D,j,rt,st,Q,Tt)}function ua(A,j,rt){j.isScene!==!0&&(j=oe);const st=Qt.get(A),Q=_.state.lights,Tt=_.state.shadowsArray,Ct=Q.state.version,Nt=vt.getParameters(A,Q.state,Tt,j,rt),Bt=vt.getProgramCacheKey(Nt);let ne=st.programs;st.environment=A.isMeshStandardMaterial?j.environment:null,st.fog=j.fog,st.envMap=(A.isMeshStandardMaterial?N:$e).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,ne===void 0&&(A.addEventListener("dispose",Ft),ne=new Map,st.programs=ne);let $t=ne.get(Bt);if($t!==void 0){if(st.currentProgram===$t&&st.lightsStateVersion===Ct)return Pi(A,Nt),$t}else Nt.uniforms=vt.getUniforms(A),A.onBeforeCompile(Nt,D),$t=vt.acquireProgram(Nt,Bt),ne.set(Bt,$t),st.uniforms=Nt.uniforms;const qt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qt.clippingPlanes=kt.uniform),Pi(A,Nt),st.needsLights=nn(A),st.lightsStateVersion=Ct,st.needsLights&&(qt.ambientLightColor.value=Q.state.ambient,qt.lightProbe.value=Q.state.probe,qt.directionalLights.value=Q.state.directional,qt.directionalLightShadows.value=Q.state.directionalShadow,qt.spotLights.value=Q.state.spot,qt.spotLightShadows.value=Q.state.spotShadow,qt.rectAreaLights.value=Q.state.rectArea,qt.ltc_1.value=Q.state.rectAreaLTC1,qt.ltc_2.value=Q.state.rectAreaLTC2,qt.pointLights.value=Q.state.point,qt.pointLightShadows.value=Q.state.pointShadow,qt.hemisphereLights.value=Q.state.hemi,qt.directionalShadowMap.value=Q.state.directionalShadowMap,qt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qt.spotShadowMap.value=Q.state.spotShadowMap,qt.spotLightMatrix.value=Q.state.spotLightMatrix,qt.spotLightMap.value=Q.state.spotLightMap,qt.pointShadowMap.value=Q.state.pointShadowMap,qt.pointShadowMatrix.value=Q.state.pointShadowMatrix),st.currentProgram=$t,st.uniformsList=null,$t}function Oi(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Nc.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Pi(A,j){const rt=Qt.get(A);rt.outputColorSpace=j.outputColorSpace,rt.batching=j.batching,rt.batchingColor=j.batchingColor,rt.instancing=j.instancing,rt.instancingColor=j.instancingColor,rt.instancingMorph=j.instancingMorph,rt.skinning=j.skinning,rt.morphTargets=j.morphTargets,rt.morphNormals=j.morphNormals,rt.morphColors=j.morphColors,rt.morphTargetsCount=j.morphTargetsCount,rt.numClippingPlanes=j.numClippingPlanes,rt.numIntersection=j.numClipIntersection,rt.vertexAlphas=j.vertexAlphas,rt.vertexTangents=j.vertexTangents,rt.toneMapping=j.toneMapping}function ja(A,j,rt,st,Q){j.isScene!==!0&&(j=oe),se.resetTextureUnits();const Tt=j.fog,Ct=st.isMeshStandardMaterial?j.environment:null,Nt=F===null?D.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Rs,Bt=(st.isMeshStandardMaterial?N:$e).get(st.envMap||Ct),ne=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,$t=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),qt=!!rt.morphAttributes.position,ue=!!rt.morphAttributes.normal,Le=!!rt.morphAttributes.color;let Ye=Xa;st.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ye=D.toneMapping);const pe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ne=pe!==void 0?pe.length:0,Jt=Qt.get(st),Be=_.state.lights;if(ht===!0&&(Mt===!0||A!==R)){const gn=A===R&&st.id===C;kt.setState(st,A,gn)}let Ee=!1;st.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Be.state.version||Jt.outputColorSpace!==Nt||Q.isBatchedMesh&&Jt.batching===!1||!Q.isBatchedMesh&&Jt.batching===!0||Q.isBatchedMesh&&Jt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Jt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Jt.instancing===!1||!Q.isInstancedMesh&&Jt.instancing===!0||Q.isSkinnedMesh&&Jt.skinning===!1||!Q.isSkinnedMesh&&Jt.skinning===!0||Q.isInstancedMesh&&Jt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Jt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Jt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Jt.instancingMorph===!1&&Q.morphTexture!==null||Jt.envMap!==Bt||st.fog===!0&&Jt.fog!==Tt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==kt.numPlanes||Jt.numIntersection!==kt.numIntersection)||Jt.vertexAlphas!==ne||Jt.vertexTangents!==$t||Jt.morphTargets!==qt||Jt.morphNormals!==ue||Jt.morphColors!==Le||Jt.toneMapping!==Ye||Jt.morphTargetsCount!==Ne)&&(Ee=!0):(Ee=!0,Jt.__version=st.version);let mn=Jt.currentProgram;Ee===!0&&(mn=ua(st,j,Q));let da=!1,We=!1,Bi=!1;const ke=mn.getUniforms(),Rn=Jt.uniforms;if(Xt.useProgram(mn.program)&&(da=!0,We=!0,Bi=!0),st.id!==C&&(C=st.id,We=!0),da||R!==A){Xt.buffers.depth.getReversed()?(ct.copy(A.projectionMatrix),uy(ct),fy(ct),ke.setValue(V,"projectionMatrix",ct)):ke.setValue(V,"projectionMatrix",A.projectionMatrix),ke.setValue(V,"viewMatrix",A.matrixWorldInverse);const En=ke.map.cameraPosition;En!==void 0&&En.setValue(V,Zt.setFromMatrixPosition(A.matrixWorld)),_e.logarithmicDepthBuffer&&ke.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ke.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,We=!0,Bi=!0)}if(Q.isSkinnedMesh){ke.setOptional(V,Q,"bindMatrix"),ke.setOptional(V,Q,"bindMatrixInverse");const gn=Q.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),ke.setValue(V,"boneTexture",gn.boneTexture,se))}Q.isBatchedMesh&&(ke.setOptional(V,Q,"batchingTexture"),ke.setValue(V,"batchingTexture",Q._matricesTexture,se),ke.setOptional(V,Q,"batchingIdTexture"),ke.setValue(V,"batchingIdTexture",Q._indirectTexture,se),ke.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ke.setValue(V,"batchingColorTexture",Q._colorsTexture,se));const ln=rt.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Pt.update(Q,rt,mn),(We||Jt.receiveShadow!==Q.receiveShadow)&&(Jt.receiveShadow=Q.receiveShadow,ke.setValue(V,"receiveShadow",Q.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Rn.envMap.value=Bt,Rn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&j.environment!==null&&(Rn.envMapIntensity.value=j.environmentIntensity),We&&(ke.setValue(V,"toneMappingExposure",D.toneMappingExposure),Jt.needsLights&&fa(Rn,Bi),Tt&&st.fog===!0&&ft.refreshFogUniforms(Rn,Tt),ft.refreshMaterialUniforms(Rn,st,z,q,_.state.transmissionRenderTarget[A.id]),Nc.upload(V,Oi(Jt),Rn,se)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Nc.upload(V,Oi(Jt),Rn,se),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ke.setValue(V,"center",Q.center),ke.setValue(V,"modelViewMatrix",Q.modelViewMatrix),ke.setValue(V,"normalMatrix",Q.normalMatrix),ke.setValue(V,"modelMatrix",Q.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const gn=st.uniformsGroups;for(let En=0,Si=gn.length;En<Si;En++){const Ii=gn[En];W.update(Ii,mn),W.bind(Ii,mn)}}return mn}function fa(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function nn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(A,j,rt){const st=Qt.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Qt.get(A.texture).__webglTexture=j,Qt.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const rt=Qt.get(A);rt.__webglFramebuffer=j,rt.__useDefaultFramebuffer=j===void 0};const Ko=V.createFramebuffer();this.setRenderTarget=function(A,j=0,rt=0){F=A,I=j,H=rt;let st=!0,Q=null,Tt=!1,Ct=!1;if(A){const Bt=Qt.get(A);if(Bt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(V.FRAMEBUFFER,null),st=!1;else if(Bt.__webglFramebuffer===void 0)se.setupRenderTarget(A);else if(Bt.__hasExternalTextures)se.rebindTextures(A,Qt.get(A.texture).__webglTexture,Qt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const qt=A.depthTexture;if(Bt.__boundDepthTexture!==qt){if(qt!==null&&Qt.has(qt)&&(A.width!==qt.image.width||A.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(A)}}const ne=A.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Ct=!0);const $t=Qt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[j])?Q=$t[j][rt]:Q=$t[j],Tt=!0):A.samples>0&&se.useMultisampledRTT(A)===!1?Q=Qt.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?Q=$t[rt]:Q=$t,k.copy(A.viewport),ot.copy(A.scissor),K=A.scissorTest}else k.copy(J).multiplyScalar(z).floor(),ot.copy(gt).multiplyScalar(z).floor(),K=dt;if(rt!==0&&(Q=Ko),Xt.bindFramebuffer(V.FRAMEBUFFER,Q)&&st&&Xt.drawBuffers(A,Q),Xt.viewport(k),Xt.scissor(ot),Xt.setScissorTest(K),Tt){const Bt=Qt.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Bt.__webglTexture,rt)}else if(Ct){const Bt=Qt.get(A.texture),ne=j;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Bt.__webglTexture,rt,ne)}else if(A!==null&&rt!==0){const Bt=Qt.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Bt.__webglTexture,rt)}C=-1},this.readRenderTargetPixels=function(A,j,rt,st,Q,Tt,Ct,Nt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Qt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Bt=Bt[Ct]),Bt){Xt.bindFramebuffer(V.FRAMEBUFFER,Bt);try{const ne=A.textures[Nt],$t=ne.format,qt=ne.type;if(!_e.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-st&&rt>=0&&rt<=A.height-Q&&(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Nt),V.readPixels(j,rt,st,Q,wt.convert($t),wt.convert(qt),Tt))}finally{const ne=F!==null?Qt.get(F).__webglFramebuffer:null;Xt.bindFramebuffer(V.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(A,j,rt,st,Q,Tt,Ct,Nt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Qt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Bt=Bt[Ct]),Bt)if(j>=0&&j<=A.width-st&&rt>=0&&rt<=A.height-Q){Xt.bindFramebuffer(V.FRAMEBUFFER,Bt);const ne=A.textures[Nt],$t=ne.format,qt=ne.type;if(!_e.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ue),V.bufferData(V.PIXEL_PACK_BUFFER,Tt.byteLength,V.STREAM_READ),A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Nt),V.readPixels(j,rt,st,Q,wt.convert($t),wt.convert(qt),0);const Le=F!==null?Qt.get(F).__webglFramebuffer:null;Xt.bindFramebuffer(V.FRAMEBUFFER,Le);const Ye=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await cy(V,Ye,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ue),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Tt),V.deleteBuffer(ue),V.deleteSync(Ye),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,rt=0){const st=Math.pow(2,-rt),Q=Math.floor(A.image.width*st),Tt=Math.floor(A.image.height*st),Ct=j!==null?j.x:0,Nt=j!==null?j.y:0;se.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,rt,0,0,Ct,Nt,Q,Tt),Xt.unbindTexture()};const Qo=V.createFramebuffer(),zi=V.createFramebuffer();this.copyTextureToTexture=function(A,j,rt=null,st=null,Q=0,Tt=null){Tt===null&&(Q!==0?(Ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Q,Q=0):Tt=0);let Ct,Nt,Bt,ne,$t,qt,ue,Le,Ye;const pe=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(rt!==null)Ct=rt.max.x-rt.min.x,Nt=rt.max.y-rt.min.y,Bt=rt.isBox3?rt.max.z-rt.min.z:1,ne=rt.min.x,$t=rt.min.y,qt=rt.isBox3?rt.min.z:0;else{const ln=Math.pow(2,-Q);Ct=Math.floor(pe.width*ln),Nt=Math.floor(pe.height*ln),A.isDataArrayTexture?Bt=pe.depth:A.isData3DTexture?Bt=Math.floor(pe.depth*ln):Bt=1,ne=0,$t=0,qt=0}st!==null?(ue=st.x,Le=st.y,Ye=st.z):(ue=0,Le=0,Ye=0);const Ne=wt.convert(j.format),Jt=wt.convert(j.type);let Be;j.isData3DTexture?(se.setTexture3D(j,0),Be=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(se.setTexture2DArray(j,0),Be=V.TEXTURE_2D_ARRAY):(se.setTexture2D(j,0),Be=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const Ee=V.getParameter(V.UNPACK_ROW_LENGTH),mn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),da=V.getParameter(V.UNPACK_SKIP_PIXELS),We=V.getParameter(V.UNPACK_SKIP_ROWS),Bi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,pe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,pe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ne),V.pixelStorei(V.UNPACK_SKIP_ROWS,$t),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qt);const ke=A.isDataArrayTexture||A.isData3DTexture,Rn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const ln=Qt.get(A),gn=Qt.get(j),En=Qt.get(ln.__renderTarget),Si=Qt.get(gn.__renderTarget);Xt.bindFramebuffer(V.READ_FRAMEBUFFER,En.__webglFramebuffer),Xt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Ii=0;Ii<Bt;Ii++)ke&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Qt.get(A).__webglTexture,Q,qt+Ii),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Qt.get(j).__webglTexture,Tt,Ye+Ii)),V.blitFramebuffer(ne,$t,Ct,Nt,ue,Le,Ct,Nt,V.DEPTH_BUFFER_BIT,V.NEAREST);Xt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||Qt.has(A)){const ln=Qt.get(A),gn=Qt.get(j);Xt.bindFramebuffer(V.READ_FRAMEBUFFER,Qo),Xt.bindFramebuffer(V.DRAW_FRAMEBUFFER,zi);for(let En=0;En<Bt;En++)ke?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ln.__webglTexture,Q,qt+En):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ln.__webglTexture,Q),Rn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,gn.__webglTexture,Tt,Ye+En):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,gn.__webglTexture,Tt),Q!==0?V.blitFramebuffer(ne,$t,Ct,Nt,ue,Le,Ct,Nt,V.COLOR_BUFFER_BIT,V.NEAREST):Rn?V.copyTexSubImage3D(Be,Tt,ue,Le,Ye+En,ne,$t,Ct,Nt):V.copyTexSubImage2D(Be,Tt,ue,Le,ne,$t,Ct,Nt);Xt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Rn?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Be,Tt,ue,Le,Ye,Ct,Nt,Bt,Ne,Jt,pe.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Be,Tt,ue,Le,Ye,Ct,Nt,Bt,Ne,pe.data):V.texSubImage3D(Be,Tt,ue,Le,Ye,Ct,Nt,Bt,Ne,Jt,pe):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Tt,ue,Le,Ct,Nt,Ne,Jt,pe.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Tt,ue,Le,pe.width,pe.height,Ne,pe.data):V.texSubImage2D(V.TEXTURE_2D,Tt,ue,Le,Ct,Nt,Ne,Jt,pe);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ee),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,mn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,da),V.pixelStorei(V.UNPACK_SKIP_ROWS,We),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Bi),Tt===0&&j.generateMipmaps&&V.generateMipmap(Be),Xt.unbindTexture()},this.copyTextureToTexture3D=function(A,j,rt=null,st=null,Q=0){return Ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,rt,st,Q)},this.initRenderTarget=function(A){Qt.get(A).__webglFramebuffer===void 0&&se.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?se.setTextureCube(A,0):A.isData3DTexture?se.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?se.setTexture2DArray(A,0):se.setTexture2D(A,0),Xt.unbindTexture()},this.resetState=function(){I=0,H=0,F=null,Xt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const Kv=Math.sqrt(3),LA=.5*(Kv-1),Oo=(3-Kv)/6,hv=s=>Math.floor(s)|0,pv=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function NA(s=Math.random){const t=OA(s),i=new Float64Array(t).map(l=>pv[l%12*2]),r=new Float64Array(t).map(l=>pv[l%12*2+1]);return function(u,d){let h=0,p=0,m=0;const g=(u+d)*LA,v=hv(u+g),x=hv(d+g),M=(v+x)*Oo,T=v-M,w=x-M,y=u-T,_=d-w;let B,O;y>_?(B=1,O=0):(B=0,O=1);const D=y-B+Oo,G=_-O+Oo,I=y-1+2*Oo,H=_-1+2*Oo,F=v&255,C=x&255;let R=.5-y*y-_*_;if(R>=0){const K=F+t[C],ut=i[K],lt=r[K];R*=R,h=R*R*(ut*y+lt*_)}let k=.5-D*D-G*G;if(k>=0){const K=F+B+t[C+O],ut=i[K],lt=r[K];k*=k,p=k*k*(ut*D+lt*G)}let ot=.5-I*I-H*H;if(ot>=0){const K=F+1+t[C+1],ut=i[K],lt=r[K];ot*=ot,m=ot*ot*(ut*I+lt*H)}return 70*(h+p+m)}}function OA(s){const i=new Uint8Array(512);for(let r=0;r<512/2;r++)i[r]=r;for(let r=0;r<512/2-1;r++){const l=r+~~(s()*(256-r)),u=i[r];i[r]=i[l],i[l]=u}for(let r=256;r<512;r++)i[r]=i[r-256];return i}function Qv(s){var t,i,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var l=s.length;for(t=0;t<l;t++)s[t]&&(i=Qv(s[t]))&&(r&&(r+=" "),r+=i)}else for(i in s)s[i]&&(r&&(r+=" "),r+=i);return r}function PA(){for(var s,t,i=0,r="",l=arguments.length;i<l;i++)(s=arguments[i])&&(t=Qv(s))&&(r&&(r+=" "),r+=t);return r}const Uh="-",zA=s=>{const t=IA(s),{conflictingClassGroups:i,conflictingClassGroupModifiers:r}=s;return{getClassGroupId:d=>{const h=d.split(Uh);return h[0]===""&&h.length!==1&&h.shift(),Jv(h,t)||BA(d)},getConflictingClassGroupIds:(d,h)=>{const p=i[d]||[];return h&&r[d]?[...p,...r[d]]:p}}},Jv=(s,t)=>{var d;if(s.length===0)return t.classGroupId;const i=s[0],r=t.nextPart.get(i),l=r?Jv(s.slice(1),r):void 0;if(l)return l;if(t.validators.length===0)return;const u=s.join(Uh);return(d=t.validators.find(({validator:h})=>h(u)))==null?void 0:d.classGroupId},mv=/^\[(.+)\]$/,BA=s=>{if(mv.test(s)){const t=mv.exec(s)[1],i=t==null?void 0:t.substring(0,t.indexOf(":"));if(i)return"arbitrary.."+i}},IA=s=>{const{theme:t,classGroups:i}=s,r={nextPart:new Map,validators:[]};for(const l in i)mh(i[l],r,l,t);return r},mh=(s,t,i,r)=>{s.forEach(l=>{if(typeof l=="string"){const u=l===""?t:gv(t,l);u.classGroupId=i;return}if(typeof l=="function"){if(FA(l)){mh(l(r),t,i,r);return}t.validators.push({validator:l,classGroupId:i});return}Object.entries(l).forEach(([u,d])=>{mh(d,gv(t,u),i,r)})})},gv=(s,t)=>{let i=s;return t.split(Uh).forEach(r=>{i.nextPart.has(r)||i.nextPart.set(r,{nextPart:new Map,validators:[]}),i=i.nextPart.get(r)}),i},FA=s=>s.isThemeGetter,HA=s=>{if(s<1)return{get:()=>{},set:()=>{}};let t=0,i=new Map,r=new Map;const l=(u,d)=>{i.set(u,d),t++,t>s&&(t=0,r=i,i=new Map)};return{get(u){let d=i.get(u);if(d!==void 0)return d;if((d=r.get(u))!==void 0)return l(u,d),d},set(u,d){i.has(u)?i.set(u,d):l(u,d)}}},gh="!",_h=":",GA=_h.length,VA=s=>{const{prefix:t,experimentalParseClassName:i}=s;let r=l=>{const u=[];let d=0,h=0,p=0,m;for(let T=0;T<l.length;T++){let w=l[T];if(d===0&&h===0){if(w===_h){u.push(l.slice(p,T)),p=T+GA;continue}if(w==="/"){m=T;continue}}w==="["?d++:w==="]"?d--:w==="("?h++:w===")"&&h--}const g=u.length===0?l:l.substring(p),v=kA(g),x=v!==g,M=m&&m>p?m-p:void 0;return{modifiers:u,hasImportantModifier:x,baseClassName:v,maybePostfixModifierPosition:M}};if(t){const l=t+_h,u=r;r=d=>d.startsWith(l)?u(d.substring(l.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:d,maybePostfixModifierPosition:void 0}}if(i){const l=r;r=u=>i({className:u,parseClassName:l})}return r},kA=s=>s.endsWith(gh)?s.substring(0,s.length-1):s.startsWith(gh)?s.substring(1):s,XA=s=>{const t=Object.fromEntries(s.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const l=[];let u=[];return r.forEach(d=>{d[0]==="["||t[d]?(l.push(...u.sort(),d),u=[]):u.push(d)}),l.push(...u.sort()),l}},WA=s=>({cache:HA(s.cacheSize),parseClassName:VA(s),sortModifiers:XA(s),...zA(s)}),qA=/\s+/,YA=(s,t)=>{const{parseClassName:i,getClassGroupId:r,getConflictingClassGroupIds:l,sortModifiers:u}=t,d=[],h=s.trim().split(qA);let p="";for(let m=h.length-1;m>=0;m-=1){const g=h[m],{isExternal:v,modifiers:x,hasImportantModifier:M,baseClassName:T,maybePostfixModifierPosition:w}=i(g);if(v){p=g+(p.length>0?" "+p:p);continue}let y=!!w,_=r(y?T.substring(0,w):T);if(!_){if(!y){p=g+(p.length>0?" "+p:p);continue}if(_=r(T),!_){p=g+(p.length>0?" "+p:p);continue}y=!1}const B=u(x).join(":"),O=M?B+gh:B,D=O+_;if(d.includes(D))continue;d.push(D);const G=l(_,y);for(let I=0;I<G.length;++I){const H=G[I];d.push(O+H)}p=g+(p.length>0?" "+p:p)}return p};function ZA(){let s=0,t,i,r="";for(;s<arguments.length;)(t=arguments[s++])&&(i=$v(t))&&(r&&(r+=" "),r+=i);return r}const $v=s=>{if(typeof s=="string")return s;let t,i="";for(let r=0;r<s.length;r++)s[r]&&(t=$v(s[r]))&&(i&&(i+=" "),i+=t);return i};function jA(s,...t){let i,r,l,u=d;function d(p){const m=t.reduce((g,v)=>v(g),s());return i=WA(m),r=i.cache.get,l=i.cache.set,u=h,h(p)}function h(p){const m=r(p);if(m)return m;const g=YA(p,i);return l(p,g),g}return function(){return u(ZA.apply(null,arguments))}}const fn=s=>{const t=i=>i[s]||[];return t.isThemeGetter=!0,t},t0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,e0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,KA=/^\d+\/\d+$/,QA=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,JA=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,$A=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,t1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,e1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ss=s=>KA.test(s),he=s=>!!s&&!Number.isNaN(Number(s)),Ga=s=>!!s&&Number.isInteger(Number(s)),Ad=s=>s.endsWith("%")&&he(s.slice(0,-1)),aa=s=>QA.test(s),n1=()=>!0,i1=s=>JA.test(s)&&!$A.test(s),n0=()=>!1,a1=s=>t1.test(s),r1=s=>e1.test(s),s1=s=>!Gt(s)&&!Vt(s),o1=s=>Us(s,r0,n0),Gt=s=>t0.test(s),vr=s=>Us(s,s0,i1),Rd=s=>Us(s,d1,he),_v=s=>Us(s,i0,n0),l1=s=>Us(s,a0,r1),Ac=s=>Us(s,o0,a1),Vt=s=>e0.test(s),Po=s=>Ls(s,s0),c1=s=>Ls(s,h1),vv=s=>Ls(s,i0),u1=s=>Ls(s,r0),f1=s=>Ls(s,a0),Rc=s=>Ls(s,o0,!0),Us=(s,t,i)=>{const r=t0.exec(s);return r?r[1]?t(r[1]):i(r[2]):!1},Ls=(s,t,i=!1)=>{const r=e0.exec(s);return r?r[1]?t(r[1]):i:!1},i0=s=>s==="position"||s==="percentage",a0=s=>s==="image"||s==="url",r0=s=>s==="length"||s==="size"||s==="bg-size",s0=s=>s==="length",d1=s=>s==="number",h1=s=>s==="family-name",o0=s=>s==="shadow",p1=()=>{const s=fn("color"),t=fn("font"),i=fn("text"),r=fn("font-weight"),l=fn("tracking"),u=fn("leading"),d=fn("breakpoint"),h=fn("container"),p=fn("spacing"),m=fn("radius"),g=fn("shadow"),v=fn("inset-shadow"),x=fn("text-shadow"),M=fn("drop-shadow"),T=fn("blur"),w=fn("perspective"),y=fn("aspect"),_=fn("ease"),B=fn("animate"),O=()=>["auto","avoid","all","avoid-page","page","left","right","column"],D=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],G=()=>[...D(),Vt,Gt],I=()=>["auto","hidden","clip","visible","scroll"],H=()=>["auto","contain","none"],F=()=>[Vt,Gt,p],C=()=>[Ss,"full","auto",...F()],R=()=>[Ga,"none","subgrid",Vt,Gt],k=()=>["auto",{span:["full",Ga,Vt,Gt]},Ga,Vt,Gt],ot=()=>[Ga,"auto",Vt,Gt],K=()=>["auto","min","max","fr",Vt,Gt],ut=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],lt=()=>["start","end","center","stretch","center-safe","end-safe"],L=()=>["auto",...F()],q=()=>[Ss,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...F()],z=()=>[s,Vt,Gt],yt=()=>[...D(),vv,_v,{position:[Vt,Gt]}],U=()=>["no-repeat",{repeat:["","x","y","space","round"]}],J=()=>["auto","cover","contain",u1,o1,{size:[Vt,Gt]}],gt=()=>[Ad,Po,vr],dt=()=>["","none","full",m,Vt,Gt],Y=()=>["",he,Po,vr],ht=()=>["solid","dashed","dotted","double"],Mt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ct=()=>[he,Ad,vv,_v],At=()=>["","none",T,Vt,Gt],Zt=()=>["none",he,Vt,Gt],It=()=>["none",he,Vt,Gt],oe=()=>[he,Vt,Gt],ge=()=>[Ss,"full",...F()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[aa],breakpoint:[aa],color:[n1],container:[aa],"drop-shadow":[aa],ease:["in","out","in-out"],font:[s1],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[aa],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[aa],shadow:[aa],spacing:["px",he],text:[aa],"text-shadow":[aa],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ss,Gt,Vt,y]}],container:["container"],columns:[{columns:[he,Gt,Vt,h]}],"break-after":[{"break-after":O()}],"break-before":[{"break-before":O()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:G()}],overflow:[{overflow:I()}],"overflow-x":[{"overflow-x":I()}],"overflow-y":[{"overflow-y":I()}],overscroll:[{overscroll:H()}],"overscroll-x":[{"overscroll-x":H()}],"overscroll-y":[{"overscroll-y":H()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:C()}],"inset-x":[{"inset-x":C()}],"inset-y":[{"inset-y":C()}],start:[{start:C()}],end:[{end:C()}],top:[{top:C()}],right:[{right:C()}],bottom:[{bottom:C()}],left:[{left:C()}],visibility:["visible","invisible","collapse"],z:[{z:[Ga,"auto",Vt,Gt]}],basis:[{basis:[Ss,"full","auto",h,...F()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[he,Ss,"auto","initial","none",Gt]}],grow:[{grow:["",he,Vt,Gt]}],shrink:[{shrink:["",he,Vt,Gt]}],order:[{order:[Ga,"first","last","none",Vt,Gt]}],"grid-cols":[{"grid-cols":R()}],"col-start-end":[{col:k()}],"col-start":[{"col-start":ot()}],"col-end":[{"col-end":ot()}],"grid-rows":[{"grid-rows":R()}],"row-start-end":[{row:k()}],"row-start":[{"row-start":ot()}],"row-end":[{"row-end":ot()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":K()}],"auto-rows":[{"auto-rows":K()}],gap:[{gap:F()}],"gap-x":[{"gap-x":F()}],"gap-y":[{"gap-y":F()}],"justify-content":[{justify:[...ut(),"normal"]}],"justify-items":[{"justify-items":[...lt(),"normal"]}],"justify-self":[{"justify-self":["auto",...lt()]}],"align-content":[{content:["normal",...ut()]}],"align-items":[{items:[...lt(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...lt(),{baseline:["","last"]}]}],"place-content":[{"place-content":ut()}],"place-items":[{"place-items":[...lt(),"baseline"]}],"place-self":[{"place-self":["auto",...lt()]}],p:[{p:F()}],px:[{px:F()}],py:[{py:F()}],ps:[{ps:F()}],pe:[{pe:F()}],pt:[{pt:F()}],pr:[{pr:F()}],pb:[{pb:F()}],pl:[{pl:F()}],m:[{m:L()}],mx:[{mx:L()}],my:[{my:L()}],ms:[{ms:L()}],me:[{me:L()}],mt:[{mt:L()}],mr:[{mr:L()}],mb:[{mb:L()}],ml:[{ml:L()}],"space-x":[{"space-x":F()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":F()}],"space-y-reverse":["space-y-reverse"],size:[{size:q()}],w:[{w:[h,"screen",...q()]}],"min-w":[{"min-w":[h,"screen","none",...q()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[d]},...q()]}],h:[{h:["screen","lh",...q()]}],"min-h":[{"min-h":["screen","lh","none",...q()]}],"max-h":[{"max-h":["screen","lh",...q()]}],"font-size":[{text:["base",i,Po,vr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Vt,Rd]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ad,Gt]}],"font-family":[{font:[c1,Gt,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,Vt,Gt]}],"line-clamp":[{"line-clamp":[he,"none",Vt,Rd]}],leading:[{leading:[u,...F()]}],"list-image":[{"list-image":["none",Vt,Gt]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Vt,Gt]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:z()}],"text-color":[{text:z()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ht(),"wavy"]}],"text-decoration-thickness":[{decoration:[he,"from-font","auto",Vt,vr]}],"text-decoration-color":[{decoration:z()}],"underline-offset":[{"underline-offset":[he,"auto",Vt,Gt]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Vt,Gt]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Vt,Gt]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:yt()}],"bg-repeat":[{bg:U()}],"bg-size":[{bg:J()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Ga,Vt,Gt],radial:["",Vt,Gt],conic:[Ga,Vt,Gt]},f1,l1]}],"bg-color":[{bg:z()}],"gradient-from-pos":[{from:gt()}],"gradient-via-pos":[{via:gt()}],"gradient-to-pos":[{to:gt()}],"gradient-from":[{from:z()}],"gradient-via":[{via:z()}],"gradient-to":[{to:z()}],rounded:[{rounded:dt()}],"rounded-s":[{"rounded-s":dt()}],"rounded-e":[{"rounded-e":dt()}],"rounded-t":[{"rounded-t":dt()}],"rounded-r":[{"rounded-r":dt()}],"rounded-b":[{"rounded-b":dt()}],"rounded-l":[{"rounded-l":dt()}],"rounded-ss":[{"rounded-ss":dt()}],"rounded-se":[{"rounded-se":dt()}],"rounded-ee":[{"rounded-ee":dt()}],"rounded-es":[{"rounded-es":dt()}],"rounded-tl":[{"rounded-tl":dt()}],"rounded-tr":[{"rounded-tr":dt()}],"rounded-br":[{"rounded-br":dt()}],"rounded-bl":[{"rounded-bl":dt()}],"border-w":[{border:Y()}],"border-w-x":[{"border-x":Y()}],"border-w-y":[{"border-y":Y()}],"border-w-s":[{"border-s":Y()}],"border-w-e":[{"border-e":Y()}],"border-w-t":[{"border-t":Y()}],"border-w-r":[{"border-r":Y()}],"border-w-b":[{"border-b":Y()}],"border-w-l":[{"border-l":Y()}],"divide-x":[{"divide-x":Y()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Y()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ht(),"hidden","none"]}],"divide-style":[{divide:[...ht(),"hidden","none"]}],"border-color":[{border:z()}],"border-color-x":[{"border-x":z()}],"border-color-y":[{"border-y":z()}],"border-color-s":[{"border-s":z()}],"border-color-e":[{"border-e":z()}],"border-color-t":[{"border-t":z()}],"border-color-r":[{"border-r":z()}],"border-color-b":[{"border-b":z()}],"border-color-l":[{"border-l":z()}],"divide-color":[{divide:z()}],"outline-style":[{outline:[...ht(),"none","hidden"]}],"outline-offset":[{"outline-offset":[he,Vt,Gt]}],"outline-w":[{outline:["",he,Po,vr]}],"outline-color":[{outline:z()}],shadow:[{shadow:["","none",g,Rc,Ac]}],"shadow-color":[{shadow:z()}],"inset-shadow":[{"inset-shadow":["none",v,Rc,Ac]}],"inset-shadow-color":[{"inset-shadow":z()}],"ring-w":[{ring:Y()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:z()}],"ring-offset-w":[{"ring-offset":[he,vr]}],"ring-offset-color":[{"ring-offset":z()}],"inset-ring-w":[{"inset-ring":Y()}],"inset-ring-color":[{"inset-ring":z()}],"text-shadow":[{"text-shadow":["none",x,Rc,Ac]}],"text-shadow-color":[{"text-shadow":z()}],opacity:[{opacity:[he,Vt,Gt]}],"mix-blend":[{"mix-blend":[...Mt(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Mt()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[he]}],"mask-image-linear-from-pos":[{"mask-linear-from":ct()}],"mask-image-linear-to-pos":[{"mask-linear-to":ct()}],"mask-image-linear-from-color":[{"mask-linear-from":z()}],"mask-image-linear-to-color":[{"mask-linear-to":z()}],"mask-image-t-from-pos":[{"mask-t-from":ct()}],"mask-image-t-to-pos":[{"mask-t-to":ct()}],"mask-image-t-from-color":[{"mask-t-from":z()}],"mask-image-t-to-color":[{"mask-t-to":z()}],"mask-image-r-from-pos":[{"mask-r-from":ct()}],"mask-image-r-to-pos":[{"mask-r-to":ct()}],"mask-image-r-from-color":[{"mask-r-from":z()}],"mask-image-r-to-color":[{"mask-r-to":z()}],"mask-image-b-from-pos":[{"mask-b-from":ct()}],"mask-image-b-to-pos":[{"mask-b-to":ct()}],"mask-image-b-from-color":[{"mask-b-from":z()}],"mask-image-b-to-color":[{"mask-b-to":z()}],"mask-image-l-from-pos":[{"mask-l-from":ct()}],"mask-image-l-to-pos":[{"mask-l-to":ct()}],"mask-image-l-from-color":[{"mask-l-from":z()}],"mask-image-l-to-color":[{"mask-l-to":z()}],"mask-image-x-from-pos":[{"mask-x-from":ct()}],"mask-image-x-to-pos":[{"mask-x-to":ct()}],"mask-image-x-from-color":[{"mask-x-from":z()}],"mask-image-x-to-color":[{"mask-x-to":z()}],"mask-image-y-from-pos":[{"mask-y-from":ct()}],"mask-image-y-to-pos":[{"mask-y-to":ct()}],"mask-image-y-from-color":[{"mask-y-from":z()}],"mask-image-y-to-color":[{"mask-y-to":z()}],"mask-image-radial":[{"mask-radial":[Vt,Gt]}],"mask-image-radial-from-pos":[{"mask-radial-from":ct()}],"mask-image-radial-to-pos":[{"mask-radial-to":ct()}],"mask-image-radial-from-color":[{"mask-radial-from":z()}],"mask-image-radial-to-color":[{"mask-radial-to":z()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":D()}],"mask-image-conic-pos":[{"mask-conic":[he]}],"mask-image-conic-from-pos":[{"mask-conic-from":ct()}],"mask-image-conic-to-pos":[{"mask-conic-to":ct()}],"mask-image-conic-from-color":[{"mask-conic-from":z()}],"mask-image-conic-to-color":[{"mask-conic-to":z()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:yt()}],"mask-repeat":[{mask:U()}],"mask-size":[{mask:J()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Vt,Gt]}],filter:[{filter:["","none",Vt,Gt]}],blur:[{blur:At()}],brightness:[{brightness:[he,Vt,Gt]}],contrast:[{contrast:[he,Vt,Gt]}],"drop-shadow":[{"drop-shadow":["","none",M,Rc,Ac]}],"drop-shadow-color":[{"drop-shadow":z()}],grayscale:[{grayscale:["",he,Vt,Gt]}],"hue-rotate":[{"hue-rotate":[he,Vt,Gt]}],invert:[{invert:["",he,Vt,Gt]}],saturate:[{saturate:[he,Vt,Gt]}],sepia:[{sepia:["",he,Vt,Gt]}],"backdrop-filter":[{"backdrop-filter":["","none",Vt,Gt]}],"backdrop-blur":[{"backdrop-blur":At()}],"backdrop-brightness":[{"backdrop-brightness":[he,Vt,Gt]}],"backdrop-contrast":[{"backdrop-contrast":[he,Vt,Gt]}],"backdrop-grayscale":[{"backdrop-grayscale":["",he,Vt,Gt]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[he,Vt,Gt]}],"backdrop-invert":[{"backdrop-invert":["",he,Vt,Gt]}],"backdrop-opacity":[{"backdrop-opacity":[he,Vt,Gt]}],"backdrop-saturate":[{"backdrop-saturate":[he,Vt,Gt]}],"backdrop-sepia":[{"backdrop-sepia":["",he,Vt,Gt]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":F()}],"border-spacing-x":[{"border-spacing-x":F()}],"border-spacing-y":[{"border-spacing-y":F()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Vt,Gt]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[he,"initial",Vt,Gt]}],ease:[{ease:["linear","initial",_,Vt,Gt]}],delay:[{delay:[he,Vt,Gt]}],animate:[{animate:["none",B,Vt,Gt]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[w,Vt,Gt]}],"perspective-origin":[{"perspective-origin":G()}],rotate:[{rotate:Zt()}],"rotate-x":[{"rotate-x":Zt()}],"rotate-y":[{"rotate-y":Zt()}],"rotate-z":[{"rotate-z":Zt()}],scale:[{scale:It()}],"scale-x":[{"scale-x":It()}],"scale-y":[{"scale-y":It()}],"scale-z":[{"scale-z":It()}],"scale-3d":["scale-3d"],skew:[{skew:oe()}],"skew-x":[{"skew-x":oe()}],"skew-y":[{"skew-y":oe()}],transform:[{transform:[Vt,Gt,"","none","gpu","cpu"]}],"transform-origin":[{origin:G()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ge()}],"translate-x":[{"translate-x":ge()}],"translate-y":[{"translate-y":ge()}],"translate-z":[{"translate-z":ge()}],"translate-none":["translate-none"],accent:[{accent:z()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:z()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Vt,Gt]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Vt,Gt]}],fill:[{fill:["none",...z()]}],"stroke-w":[{stroke:[he,Po,vr,Rd]}],stroke:[{stroke:["none",...z()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},m1=jA(p1);function g1(...s){return m1(PA(s))}const _1=()=>({screenWidth:()=>Math.max(0,window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0),screenHeight:()=>Math.max(0,window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0),screenRatio:function(){return this.screenWidth()/this.screenHeight()},screenCenterX:function(){return this.screenWidth()/2},screenCenterY:function(){return this.screenHeight()/2},mouseCenterX:function(s){return s.clientX-this.screenCenterX()},mouseCenterY:function(s){return s.clientY-this.screenCenterY()}}),xv=(s,t,i)=>{s.x+=(t.x-s.x)/i,s.y+=(t.y-s.y)/i,s.z+=(t.z-s.z)/i},v1=s=>{let t=s;for(;t;){const r=getComputedStyle(t).backgroundColor;if(r&&r!=="rgba(0, 0, 0, 0)"&&r!=="transparent")return r;t=t.parentElement}return null},Sv=s=>{try{return new Se(s)}catch{if(s.startsWith("rgb")){const i=s.match(/\d+/g);if(i&&i.length>=3)return new Se(parseInt(i[0])/255,parseInt(i[1])/255,parseInt(i[2])/255)}return console.warn(`Could not parse color: ${s}. Falling back to white.`),new Se(16777215)}},x1=s=>.299*s.r+.587*s.g+.114*s.b<.5,S1=({className:s,speed:t=.015,amplitude:i=30,smoothness:r=300,wireframe:l=!0,waveColor:u,opacity:d=1,mouseInteraction:h=!0,quality:p="medium",fov:m=60,waveOffsetY:g=-300,waveRotation:v=29.8,cameraDistance:x=-1e3,autoDetectBackground:M=!0,backgroundColor:T,ease:w=12,mouseDistortionStrength:y=.5,mouseDistortionSmoothness:_=100,mouseDistortionDecay:B=5e-4,mouseShrinkScaleStrength:O=.7,mouseShrinkScaleRadius:D=200})=>{const G=Ai.useRef(null),I=Ai.useRef({scene:null,camera:null,renderer:null,groundPlain:null,animationFrameId:null,mouse:{x:0,y:0}}),[H,F]=Ai.useState(!1),C=Ai.useCallback(K=>{switch(K){case"low":return{width:64,height:32};case"high":return{width:256,height:128};default:return{width:128,height:64}}},[]),R=Ai.useCallback(()=>{if(u)return Sv(u);if(M&&G.current){const K=v1(G.current);if(K){const ut=Sv(K);return x1(ut)?new Se(16777215):new Se(0)}}return new Se(0)},[u,M]),k=Ai.useCallback(()=>{const{width:K,height:ut}=C(p);return{group:null,geometry:null,material:null,plane:null,simplex:null,factor:r,scale:i,speed:t,cycle:0,ease:w,move:new et(0,g,x),look:new xi(v*Math.PI/180,0,0,"XYZ"),mouseDistortionStrength:y,mouseDistortionSmoothness:_,mouseDistortionDecay:B,distortionTime:0,mouseShrinkScaleStrength:O,mouseShrinkScaleRadius:D,_originalPositions:new Float32Array,create:function(L){this.group=new On,this.group.position.copy(this.move),this.group.rotation.copy(this.look),this.geometry=new Yo(4e3,2e3,K,ut),this._originalPositions=new Float32Array(this.geometry.attributes.position.array);const q=R();this.material=new Gy({color:q,opacity:d,blending:d<1?ka:Ui,side:wi,transparent:d<1,depthWrite:!(d<1),wireframe:l}),this.plane=new Di(this.geometry,this.material),this.plane.position.set(0,0,0),this.simplex=NA(),this.moveNoise({x:0,y:0}),this.group.add(this.plane),L.add(this.group)},moveNoise:function(L){if(!this.geometry||!this.simplex||!this._originalPositions)return;const q=this.geometry.attributes.position,z=h?L.x:0,yt=h?L.y:0;this.distortionTime+=this.mouseDistortionDecay;for(let U=0;U<q.count;U++){const J=this._originalPositions[U*3],gt=this._originalPositions[U*3+1];let dt=J,Y=gt;const ht=J/this.factor,Mt=gt/this.factor+this.cycle;let ct=this.simplex(ht,Mt)*this.scale;if(h&&this.mouseDistortionStrength>0){const At=J-z*.5,Zt=gt-yt*.5,It=Math.sqrt(At*At+Zt*Zt),oe=this.simplex(At/this.mouseDistortionSmoothness,Zt/this.mouseDistortionSmoothness,this.distortionTime)*this.mouseDistortionStrength,ge=Math.max(0,1-It/(this.mouseShrinkScaleRadius*2));ct+=oe*this.scale*ge}if(h&&this.mouseShrinkScaleStrength>0){const At=J-z,Zt=gt-yt,It=Math.sqrt(At*At+Zt*Zt);let oe=0;It<this.mouseShrinkScaleRadius&&(oe=1-It/this.mouseShrinkScaleRadius,oe=Math.pow(oe,2));const ge=this.mouseShrinkScaleStrength*oe;dt=J-At*ge,Y=gt-Zt*ge}q.setXYZ(U,dt,Y,ct)}q.needsUpdate=!0,this.cycle+=this.speed},update:function(L){this.moveNoise(L),h&&this.group&&(this.move.x=-(L.x*.04),this.move.y=g+L.y*.04,xv(this.group.position,this.move,this.ease),xv(this.group.rotation,this.look,this.ease))},dispose:function(){var L,q,z;(L=this.geometry)==null||L.dispose(),(q=this.material)==null||q.dispose(),(z=this.group)==null||z.remove(this.plane),this.plane=null,this.geometry=null,this.material=null,this.simplex=null,this.group=null,this._originalPositions=new Float32Array}}},[p,r,i,t,w,g,x,v,R,d,l,h,C,y,_,B,O,D]),ot=Ai.useCallback(()=>{var ht,Mt;if(!G.current){console.warn("Container ref not available, cannot setup scene.");return}I.current.renderer&&(console.log("Cleaning up existing Three.js scene before re-setup."),I.current.animationFrameId&&cancelAnimationFrame(I.current.animationFrameId),(ht=I.current.groundPlain)==null||ht.dispose(),I.current.renderer.dispose(),(Mt=I.current.scene)==null||Mt.clear(),G.current.contains(I.current.renderer.domElement)&&G.current.removeChild(I.current.renderer.domElement),I.current={scene:null,camera:null,renderer:null,groundPlain:null,animationFrameId:null,mouse:{x:0,y:0}});const K=G.current,ut=_1(),lt=new By,L=new $n(m,ut.screenRatio(),.1,2e4);let q;try{q=new UA({alpha:!0,antialias:!0,precision:"mediump"}),q.setSize(ut.screenWidth(),ut.screenHeight()),q.setPixelRatio(window.devicePixelRatio),q.setClearColor(0,0),K.appendChild(q.domElement),F(!1)}catch(ct){console.error("Failed to create WebGL context:",ct),F(!0);return}const z=R(),yt=new G_(z,4,1e3);yt.position.set(0,200,-500),lt.add(yt);const U=new Yy(16777215,.5);lt.add(U);const J=k();J.create(lt),I.current={scene:lt,camera:L,renderer:q,groundPlain:J,animationFrameId:null,mouse:{x:ut.screenCenterX(),y:ut.screenCenterY()}};const gt=ct=>{h&&I.current&&(I.current.mouse.x=ut.mouseCenterX(ct),I.current.mouse.y=ut.mouseCenterY(ct))};h&&window.addEventListener("mousemove",gt);const dt=()=>{const ct=I.current;!ct||!ct.camera||!ct.renderer||(ct.camera.aspect=ut.screenRatio(),ct.camera.updateProjectionMatrix(),ct.renderer.setSize(ut.screenWidth(),ut.screenHeight()))};window.addEventListener("resize",dt);const Y=()=>{const ct=I.current;!ct||!ct.scene||!ct.camera||!ct.renderer||!ct.groundPlain||(ct.groundPlain.update(ct.mouse),ct.renderer.render(ct.scene,ct.camera),ct.animationFrameId=requestAnimationFrame(Y))};return Y(),()=>{var At,Zt,It,oe;h&&window.removeEventListener("mousemove",gt),window.removeEventListener("resize",dt);const ct=I.current;ct&&(ct.animationFrameId&&cancelAnimationFrame(ct.animationFrameId),(At=ct.groundPlain)==null||At.dispose(),(Zt=ct.renderer)==null||Zt.dispose(),(It=ct.scene)==null||It.clear(),(oe=G.current)!=null&&oe.contains(ct.renderer.domElement)&&G.current.removeChild(ct.renderer.domElement)),I.current={scene:null,camera:null,renderer:null,groundPlain:null,animationFrameId:null,mouse:{x:0,y:0}}}},[m,R,k,h]);return Ai.useEffect(()=>{const K=ot();return()=>{K==null||K()}},[ot]),Ai.useEffect(()=>{const K=I.current;if(!K.groundPlain||!K.groundPlain.material||!K.scene)return;const ut=R();K.groundPlain.material.color.copy(ut),K.groundPlain.material.wireframe=l,K.groundPlain.material.opacity=d,K.groundPlain.material.transparent=d<1,K.groundPlain.material.depthWrite=!(d<1),K.groundPlain.material.blending=d<1?ka:Ui,K.groundPlain.material.needsUpdate=!0;const lt=K.scene.children.find(L=>L instanceof G_);lt&&lt.color.copy(ut)},[R,l,d]),ci.jsx("div",{style:{perspective:"900px"},children:ci.jsx("div",{ref:G,className:g1("relative inset-0 w-full h-screen z-10 overflow-hidden",s),style:{pointerEvents:"none",backgroundColor:T||"transparent"},children:H&&ci.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",backgroundColor:"rgba(0,0,0,0.7)",padding:"20px",borderRadius:"8px",zIndex:100,textAlign:"center"},children:[ci.jsx("p",{children:"🚫 WebGL Error: Unable to render animated wave."}),ci.jsx("p",{children:"Please ensure your browser and graphics drivers are up to date and hardware acceleration is enabled."})]})})})},y1=()=>ci.jsxs("div",{className:"background-effect",children:[ci.jsx(S1,{smoothness:500}),";"]}),M1=()=>ci.jsx(ci.Fragment,{children:ci.jsx(y1,{})});xS.createRoot(document.getElementById("root")).render(ci.jsx(Ai.StrictMode,{children:ci.jsx(M1,{})}));
