var fu=Object.create;var ze=Object.defineProperty;var ou=Object.getOwnPropertyDescriptor;var su=Object.getOwnPropertyNames;var cu=Object.getPrototypeOf,lu=Object.prototype.hasOwnProperty;var $r=i=>ze(i,"__esModule",{value:!0});var ln=(i,l)=>()=>(l||i((l={exports:{}}).exports,l),l.exports),vu=(i,l)=>{$r(i);for(var p in l)ze(i,p,{get:l[p],enumerable:!0})},hu=(i,l,p)=>{if(l&&typeof l=="object"||typeof l=="function")for(let g of su(l))!lu.call(i,g)&&g!=="default"&&ze(i,g,{get:()=>l[g],enumerable:!(p=ou(l,g))||p.enumerable});return i},vn=i=>hu($r(ze(i!=null?fu(cu(i)):{},"default",i&&i.__esModule&&"default"in i?{get:()=>i.default,enumerable:!0}:{value:i,enumerable:!0})),i);var Br=ln((Ge,z)=>{(function(i,l){typeof Ge=="object"&&typeof z!="undefined"?l(Ge):typeof define=="function"&&define.amd?define(["exports"],l):l(i.async=i.async||{})})(Ge,function(i){"use strict";function l(e,n){n=n|0;for(var r=Math.max(e.length-n,0),t=Array(r),a=0;a<r;a++)t[a]=e[n+a];return t}var p=function(e){var n=l(arguments,1);return function(){var r=l(arguments);return e.apply(null,n.concat(r))}},g=function(e){return function(){var n=l(arguments),r=n.pop();e.call(this,n,r)}};function j(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var P=typeof setImmediate=="function"&&setImmediate,b=typeof process=="object"&&typeof process.nextTick=="function";function $(e){setTimeout(e,0)}function C(e){return function(n){var r=l(arguments,1);e(function(){n.apply(null,r)})}}var F;P?F=setImmediate:b?F=process.nextTick:F=$;var D=C(F);function G(e){return g(function(n,r){var t;try{t=e.apply(this,n)}catch(a){return r(a)}j(t)&&typeof t.then=="function"?t.then(function(a){me(r,null,a)},function(a){me(r,a.message?a:new Error(a))}):r(null,t)})}function me(e,n,r){try{e(n,r)}catch(t){D(ge,t)}}function ge(e){throw e}var We=typeof Symbol=="function";function d(e){return We&&e[Symbol.toStringTag]==="AsyncFunction"}function v(e){return d(e)?G(e):e}function A(e){return function(n){var r=l(arguments,1),t=g(function(a,u){var f=this;return e(n,function(o,s){v(o).apply(f,a.concat(s))},u)});return r.length?t.apply(this,r):t}}var _=typeof global=="object"&&global&&global.Object===Object&&global,pe=typeof self=="object"&&self&&self.Object===Object&&self,pn=_||pe||Function("return this")(),K=pn.Symbol,yn=Object.prototype,Wr=yn.hasOwnProperty,Qr=yn.toString,re=K?K.toStringTag:void 0;function Hr(e){var n=Wr.call(e,re),r=e[re];try{e[re]=void 0;var t=!0}catch(u){}var a=Qr.call(e);return t&&(n?e[re]=r:delete e[re]),a}var Jr=Object.prototype,Kr=Jr.toString;function Xr(e){return Kr.call(e)}var Zr="[object Null]",Yr="[object Undefined]",dn=K?K.toStringTag:void 0;function ye(e){return e==null?e===void 0?Yr:Zr:dn&&dn in Object(e)?Hr(e):Xr(e)}var xr="[object AsyncFunction]",kr="[object Function]",et="[object GeneratorFunction]",nt="[object Proxy]";function rt(e){if(!j(e))return!1;var n=ye(e);return n==kr||n==et||n==xr||n==nt}var tt=9007199254740991;function Sn(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=tt}function te(e){return e!=null&&Sn(e.length)&&!rt(e)}var Qe={};function y(){}function W(e){return function(){if(e!==null){var n=e;e=null,n.apply(this,arguments)}}}var He=typeof Symbol=="function"&&Symbol.iterator,it=function(e){return He&&e[He]&&e[He]()};function ut(e,n){for(var r=-1,t=Array(e);++r<e;)t[r]=n(r);return t}function de(e){return e!=null&&typeof e=="object"}var at="[object Arguments]";function Tn(e){return de(e)&&ye(e)==at}var jn=Object.prototype,ft=jn.hasOwnProperty,ot=jn.propertyIsEnumerable,st=Tn(function(){return arguments}())?Tn:function(e){return de(e)&&ft.call(e,"callee")&&!ot.call(e,"callee")},M=Array.isArray;function ct(){return!1}var wn=typeof i=="object"&&i&&!i.nodeType&&i,Ln=wn&&typeof z=="object"&&z&&!z.nodeType&&z,lt=Ln&&Ln.exports===wn,bn=lt?pn.Buffer:void 0,vt=bn?bn.isBuffer:void 0,ht=vt||ct,mt=9007199254740991,gt=/^(?:0|[1-9]\d*)$/;function pt(e,n){var r=typeof e;return n=n??mt,!!n&&(r=="number"||r!="symbol"&&gt.test(e))&&e>-1&&e%1==0&&e<n}var yt="[object Arguments]",dt="[object Array]",St="[object Boolean]",Tt="[object Date]",jt="[object Error]",wt="[object Function]",Lt="[object Map]",bt="[object Number]",At="[object Object]",Ot="[object RegExp]",Et="[object Set]",_t="[object String]",It="[object WeakMap]",Pt="[object ArrayBuffer]",$t="[object DataView]",Bt="[object Float32Array]",Ct="[object Float64Array]",Dt="[object Int8Array]",Mt="[object Int16Array]",Rt="[object Int32Array]",Ft="[object Uint8Array]",Vt="[object Uint8ClampedArray]",qt="[object Uint16Array]",Ut="[object Uint32Array]",S={};S[Bt]=S[Ct]=S[Dt]=S[Mt]=S[Rt]=S[Ft]=S[Vt]=S[qt]=S[Ut]=!0,S[yt]=S[dt]=S[Pt]=S[St]=S[$t]=S[Tt]=S[jt]=S[wt]=S[Lt]=S[bt]=S[At]=S[Ot]=S[Et]=S[_t]=S[It]=!1;function zt(e){return de(e)&&Sn(e.length)&&!!S[ye(e)]}function Gt(e){return function(n){return e(n)}}var An=typeof i=="object"&&i&&!i.nodeType&&i,ie=An&&typeof z=="object"&&z&&!z.nodeType&&z,Nt=ie&&ie.exports===An,Je=Nt&&_.process,On=function(){try{var e=ie&&ie.require&&ie.require("util").types;return e||Je&&Je.binding&&Je.binding("util")}catch(n){}}(),En=On&&On.isTypedArray,Wt=En?Gt(En):zt,Qt=Object.prototype,Ht=Qt.hasOwnProperty;function Jt(e,n){var r=M(e),t=!r&&st(e),a=!r&&!t&&ht(e),u=!r&&!t&&!a&&Wt(e),f=r||t||a||u,o=f?ut(e.length,String):[],s=o.length;for(var h in e)(n||Ht.call(e,h))&&!(f&&(h=="length"||a&&(h=="offset"||h=="parent")||u&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||pt(h,s)))&&o.push(h);return o}var Kt=Object.prototype;function Xt(e){var n=e&&e.constructor,r=typeof n=="function"&&n.prototype||Kt;return e===r}function Zt(e,n){return function(r){return e(n(r))}}var Yt=Zt(Object.keys,Object),xt=Object.prototype,kt=xt.hasOwnProperty;function ei(e){if(!Xt(e))return Yt(e);var n=[];for(var r in Object(e))kt.call(e,r)&&r!="constructor"&&n.push(r);return n}function Ke(e){return te(e)?Jt(e):ei(e)}function ni(e){var n=-1,r=e.length;return function(){return++n<r?{value:e[n],key:n}:null}}function ri(e){var n=-1;return function(){var t=e.next();return t.done?null:(n++,{value:t.value,key:n})}}function ti(e){var n=Ke(e),r=-1,t=n.length;return function(){var u=n[++r];return r<t?{value:e[u],key:u}:null}}function ii(e){if(te(e))return ni(e);var n=it(e);return n?ri(n):ti(e)}function V(e){return function(){if(e===null)throw new Error("Callback was already called.");var n=e;e=null,n.apply(this,arguments)}}function Se(e){return function(n,r,t){if(t=W(t||y),e<=0||!n)return t(null);var a=ii(n),u=!1,f=0,o=!1;function s(c,m){if(f-=1,c)u=!0,t(c);else{if(m===Qe||u&&f<=0)return u=!0,t(null);o||h()}}function h(){for(o=!0;f<e&&!u;){var c=a();if(c===null){u=!0,f<=0&&t(null);return}f+=1,r(c.value,c.key,V(s))}o=!1}h()}}function J(e,n,r,t){Se(n)(e,v(r),t)}function E(e,n){return function(r,t,a){return e(r,n,t,a)}}function ui(e,n,r){r=W(r||y);var t=0,a=0,u=e.length;u===0&&r(null);function f(o,s){o?r(o):(++a===u||s===Qe)&&r(null)}for(;t<u;t++)n(e[t],t,V(f))}var ai=E(J,1/0),Q=function(e,n,r){var t=te(e)?ui:ai;t(e,v(n),r)};function X(e){return function(n,r,t){return e(Q,n,v(r),t)}}function _n(e,n,r,t){t=t||y,n=n||[];var a=[],u=0,f=v(r);e(n,function(o,s,h){var c=u++;f(o,function(m,T){a[c]=T,h(m)})},function(o){t(o,a)})}var Te=X(_n),In=A(Te);function Z(e){return function(n,r,t,a){return e(Se(r),n,v(t),a)}}var Y=Z(_n),Xe=E(Y,1),Pn=A(Xe);function je(e,n){for(var r=-1,t=e==null?0:e.length;++r<t&&n(e[r],r,e)!==!1;);return e}function fi(e){return function(n,r,t){for(var a=-1,u=Object(n),f=t(n),o=f.length;o--;){var s=f[e?o:++a];if(r(u[s],s,u)===!1)break}return n}}var oi=fi();function ue(e,n){return e&&oi(e,n,Ke)}function si(e,n,r,t){for(var a=e.length,u=r+(t?1:-1);t?u--:++u<a;)if(n(e[u],u,e))return u;return-1}function ci(e){return e!==e}function li(e,n,r){for(var t=r-1,a=e.length;++t<a;)if(e[t]===n)return t;return-1}function we(e,n,r){return n===n?li(e,n,r):si(e,ci,r)}var Ze=function(e,n,r){typeof n=="function"&&(r=n,n=null),r=W(r||y);var t=Ke(e),a=t.length;if(!a)return r(null);n||(n=a);var u={},f=0,o=!1,s=Object.create(null),h=[],c=[],m={};ue(e,function(w,L){if(!M(w)){T(L,[w]),c.push(L);return}var O=w.slice(0,w.length-1),N=O.length;if(N===0){T(L,w),c.push(L);return}m[L]=N,je(O,function(ne){if(!e[ne])throw new Error("async.auto task `"+L+"` has a non-existent dependency `"+ne+"` in "+O.join(", "));q(ne,function(){N--,N===0&&T(L,w)})})}),tu(),I();function T(w,L){h.push(function(){U(w,L)})}function I(){if(h.length===0&&f===0)return r(null,u);for(;h.length&&f<n;){var w=h.shift();w()}}function q(w,L){var O=s[w];O||(O=s[w]=[]),O.push(L)}function B(w){var L=s[w]||[];je(L,function(O){O()}),I()}function U(w,L){if(!o){var O=V(function(ne,sn){if(f--,arguments.length>2&&(sn=l(arguments,1)),ne){var cn={};ue(u,function(uu,au){cn[au]=uu}),cn[w]=sn,o=!0,s=Object.create(null),r(ne,cn)}else u[w]=sn,B(w)});f++;var N=v(L[L.length-1]);L.length>1?N(u,O):N(O)}}function tu(){for(var w,L=0;c.length;)w=c.pop(),L++,je(iu(w),function(O){--m[O]==0&&c.push(O)});if(L!==a)throw new Error("async.auto cannot execute tasks due to a recursive dependency")}function iu(w){var L=[];return ue(e,function(O,N){M(O)&&we(O,w,0)>=0&&L.push(N)}),L}};function x(e,n){for(var r=-1,t=e==null?0:e.length,a=Array(t);++r<t;)a[r]=n(e[r],r,e);return a}var vi="[object Symbol]";function hi(e){return typeof e=="symbol"||de(e)&&ye(e)==vi}var mi=1/0,$n=K?K.prototype:void 0,Bn=$n?$n.toString:void 0;function Ye(e){if(typeof e=="string")return e;if(M(e))return x(e,Ye)+"";if(hi(e))return Bn?Bn.call(e):"";var n=e+"";return n=="0"&&1/e==-mi?"-0":n}function gi(e,n,r){var t=-1,a=e.length;n<0&&(n=-n>a?0:a+n),r=r>a?a:r,r<0&&(r+=a),a=n>r?0:r-n>>>0,n>>>=0;for(var u=Array(a);++t<a;)u[t]=e[t+n];return u}function pi(e,n,r){var t=e.length;return r=r===void 0?t:r,!n&&r>=t?e:gi(e,n,r)}function yi(e,n){for(var r=e.length;r--&&we(n,e[r],0)>-1;);return r}function di(e,n){for(var r=-1,t=e.length;++r<t&&we(n,e[r],0)>-1;);return r}function Si(e){return e.split("")}var Ti="\\ud800-\\udfff",ji="\\u0300-\\u036f",wi="\\ufe20-\\ufe2f",Li="\\u20d0-\\u20ff",bi=ji+wi+Li,Ai="\\ufe0e\\ufe0f",Oi="\\u200d",Ei=RegExp("["+Oi+Ti+bi+Ai+"]");function _i(e){return Ei.test(e)}var Cn="\\ud800-\\udfff",Ii="\\u0300-\\u036f",Pi="\\ufe20-\\ufe2f",$i="\\u20d0-\\u20ff",Bi=Ii+Pi+$i,Ci="\\ufe0e\\ufe0f",Di="["+Cn+"]",xe="["+Bi+"]",ke="\\ud83c[\\udffb-\\udfff]",Mi="(?:"+xe+"|"+ke+")",Dn="[^"+Cn+"]",Mn="(?:\\ud83c[\\udde6-\\uddff]){2}",Rn="[\\ud800-\\udbff][\\udc00-\\udfff]",Ri="\\u200d",Fn=Mi+"?",Vn="["+Ci+"]?",Fi="(?:"+Ri+"(?:"+[Dn,Mn,Rn].join("|")+")"+Vn+Fn+")*",Vi=Vn+Fn+Fi,qi="(?:"+[Dn+xe+"?",xe,Mn,Rn,Di].join("|")+")",Ui=RegExp(ke+"(?="+ke+")|"+qi+Vi,"g");function zi(e){return e.match(Ui)||[]}function qn(e){return _i(e)?zi(e):Si(e)}function Gi(e){return e==null?"":Ye(e)}var Ni=/^\s+|\s+$/g;function Wi(e,n,r){if(e=Gi(e),e&&(r||n===void 0))return e.replace(Ni,"");if(!e||!(n=Ye(n)))return e;var t=qn(e),a=qn(n),u=di(t,a),f=yi(t,a)+1;return pi(t,u,f).join("")}var Qi=/^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m,Hi=/,/,Ji=/(=.+)?(\s*)$/,Ki=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;function Xi(e){return e=e.toString().replace(Ki,""),e=e.match(Qi)[2].replace(" ",""),e=e?e.split(Hi):[],e=e.map(function(n){return Wi(n.replace(Ji,""))}),e}function Un(e,n){var r={};ue(e,function(t,a){var u,f=d(t),o=!f&&t.length===1||f&&t.length===0;if(M(t))u=t.slice(0,-1),t=t[t.length-1],r[a]=u.concat(u.length>0?s:t);else if(o)r[a]=t;else{if(u=Xi(t),t.length===0&&!f&&u.length===0)throw new Error("autoInject task functions require explicit parameters.");f||u.pop(),r[a]=u.concat(s)}function s(h,c){var m=x(u,function(T){return h[T]});m.push(c),v(t).apply(null,m)}}),Ze(r,n)}function R(){this.head=this.tail=null,this.length=0}function zn(e,n){e.length=1,e.head=e.tail=n}R.prototype.removeLink=function(e){return e.prev?e.prev.next=e.next:this.head=e.next,e.next?e.next.prev=e.prev:this.tail=e.prev,e.prev=e.next=null,this.length-=1,e},R.prototype.empty=function(){for(;this.head;)this.shift();return this},R.prototype.insertAfter=function(e,n){n.prev=e,n.next=e.next,e.next?e.next.prev=n:this.tail=n,e.next=n,this.length+=1},R.prototype.insertBefore=function(e,n){n.prev=e.prev,n.next=e,e.prev?e.prev.next=n:this.head=n,e.prev=n,this.length+=1},R.prototype.unshift=function(e){this.head?this.insertBefore(this.head,e):zn(this,e)},R.prototype.push=function(e){this.tail?this.insertAfter(this.tail,e):zn(this,e)},R.prototype.shift=function(){return this.head&&this.removeLink(this.head)},R.prototype.pop=function(){return this.tail&&this.removeLink(this.tail)},R.prototype.toArray=function(){for(var e=Array(this.length),n=this.head,r=0;r<this.length;r++)e[r]=n.data,n=n.next;return e},R.prototype.remove=function(e){for(var n=this.head;n;){var r=n.next;e(n)&&this.removeLink(n),n=r}return this};function Gn(e,n,r){if(n==null)n=1;else if(n===0)throw new Error("Concurrency must not be zero");var t=v(e),a=0,u=[],f=!1;function o(m,T,I){if(I!=null&&typeof I!="function")throw new Error("task callback must be a function");if(c.started=!0,M(m)||(m=[m]),m.length===0&&c.idle())return D(function(){c.drain()});for(var q=0,B=m.length;q<B;q++){var U={data:m[q],callback:I||y};T?c._tasks.unshift(U):c._tasks.push(U)}f||(f=!0,D(function(){f=!1,c.process()}))}function s(m){return function(T){a-=1;for(var I=0,q=m.length;I<q;I++){var B=m[I],U=we(u,B,0);U===0?u.shift():U>0&&u.splice(U,1),B.callback.apply(B,arguments),T!=null&&c.error(T,B.data)}a<=c.concurrency-c.buffer&&c.unsaturated(),c.idle()&&c.drain(),c.process()}}var h=!1,c={_tasks:new R,concurrency:n,payload:r,saturated:y,unsaturated:y,buffer:n/4,empty:y,drain:y,error:y,started:!1,paused:!1,push:function(m,T){o(m,!1,T)},kill:function(){c.drain=y,c._tasks.empty()},unshift:function(m,T){o(m,!0,T)},remove:function(m){c._tasks.remove(m)},process:function(){if(!h){for(h=!0;!c.paused&&a<c.concurrency&&c._tasks.length;){var m=[],T=[],I=c._tasks.length;c.payload&&(I=Math.min(I,c.payload));for(var q=0;q<I;q++){var B=c._tasks.shift();m.push(B),u.push(B),T.push(B.data)}a+=1,c._tasks.length===0&&c.empty(),a===c.concurrency&&c.saturated();var U=V(s(m));t(T,U)}h=!1}},length:function(){return c._tasks.length},running:function(){return a},workersList:function(){return u},idle:function(){return c._tasks.length+a===0},pause:function(){c.paused=!0},resume:function(){c.paused!==!1&&(c.paused=!1,D(c.process))}};return c}function Nn(e,n){return Gn(e,1,n)}var k=E(J,1);function H(e,n,r,t){t=W(t||y);var a=v(r);k(e,function(u,f,o){a(n,u,function(s,h){n=h,o(s)})},function(u){t(u,n)})}function en(){var e=x(arguments,v);return function(){var n=l(arguments),r=this,t=n[n.length-1];typeof t=="function"?n.pop():t=y,H(e,n,function(a,u,f){u.apply(r,a.concat(function(o){var s=l(arguments,1);f(o,s)}))},function(a,u){t.apply(r,[a].concat(u))})}}var Wn=function(){return en.apply(null,l(arguments).reverse())},Zi=Array.prototype.concat,Le=function(e,n,r,t){t=t||y;var a=v(r);Y(e,n,function(u,f){a(u,function(o){return o?f(o):f(null,l(arguments,1))})},function(u,f){for(var o=[],s=0;s<f.length;s++)f[s]&&(o=Zi.apply(o,f[s]));return t(u,o)})},Qn=E(Le,1/0),Hn=E(Le,1),Jn=function(){var e=l(arguments),n=[null].concat(e);return function(){var r=arguments[arguments.length-1];return r.apply(this,n)}};function ae(e){return e}function ee(e,n){return function(r,t,a,u){u=u||y;var f=!1,o;r(t,function(s,h,c){a(s,function(m,T){m?c(m):e(T)&&!o?(f=!0,o=n(!0,s),c(null,Qe)):c()})},function(s){s?u(s):u(null,f?o:n(!1))})}}function Kn(e,n){return n}var be=X(ee(ae,Kn)),fe=Z(ee(ae,Kn)),Ae=E(fe,1);function Xn(e){return function(n){var r=l(arguments,1);r.push(function(t){var a=l(arguments,1);typeof console=="object"&&(t?console.error&&console.error(t):console[e]&&je(a,function(u){console[e](u)}))}),v(n).apply(null,r)}}var Zn=Xn("dir");function Yn(e,n,r){r=V(r||y);var t=v(e),a=v(n);function u(o){if(o)return r(o);var s=l(arguments,1);s.push(f),a.apply(this,s)}function f(o,s){if(o)return r(o);if(!s)return r(null);t(u)}f(null,!0)}function nn(e,n,r){r=V(r||y);var t=v(e),a=function(u){if(u)return r(u);var f=l(arguments,1);if(n.apply(this,f))return t(a);r.apply(null,[null].concat(f))};t(a)}function xn(e,n,r){nn(e,function(){return!n.apply(this,arguments)},r)}function kn(e,n,r){r=V(r||y);var t=v(n),a=v(e);function u(o){if(o)return r(o);a(f)}function f(o,s){if(o)return r(o);if(!s)return r(null);t(u)}a(f)}function er(e){return function(n,r,t){return e(n,t)}}function Oe(e,n,r){Q(e,er(v(n)),r)}function oe(e,n,r,t){Se(n)(e,er(v(r)),t)}var se=E(oe,1);function rn(e){return d(e)?e:g(function(n,r){var t=!0;n.push(function(){var a=arguments;t?D(function(){r.apply(null,a)}):r.apply(null,a)}),e.apply(this,n),t=!1})}function Ee(e){return!e}var _e=X(ee(Ee,Ee)),ce=Z(ee(Ee,Ee)),Ie=E(ce,1);function nr(e){return function(n){return n==null?void 0:n[e]}}function Yi(e,n,r,t){var a=new Array(n.length);e(n,function(u,f,o){r(u,function(s,h){a[f]=!!h,o(s)})},function(u){if(u)return t(u);for(var f=[],o=0;o<n.length;o++)a[o]&&f.push(n[o]);t(null,f)})}function xi(e,n,r,t){var a=[];e(n,function(u,f,o){r(u,function(s,h){s?o(s):(h&&a.push({index:f,value:u}),o())})},function(u){u?t(u):t(null,x(a.sort(function(f,o){return f.index-o.index}),nr("value")))})}function tn(e,n,r,t){var a=te(n)?Yi:xi;a(e,n,v(r),t||y)}var Pe=X(tn),le=Z(tn),$e=E(le,1);function rr(e,n){var r=V(n||y),t=v(rn(e));function a(u){if(u)return r(u);t(a)}a()}var Be=function(e,n,r,t){t=t||y;var a=v(r);Y(e,n,function(u,f){a(u,function(o,s){return o?f(o):f(null,{key:s,val:u})})},function(u,f){for(var o={},s=Object.prototype.hasOwnProperty,h=0;h<f.length;h++)if(f[h]){var c=f[h].key,m=f[h].val;s.call(o,c)?o[c].push(m):o[c]=[m]}return t(u,o)})},tr=E(Be,1/0),ir=E(Be,1),ur=Xn("log");function Ce(e,n,r,t){t=W(t||y);var a={},u=v(r);J(e,n,function(f,o,s){u(f,o,function(h,c){if(h)return s(h);a[o]=c,s()})},function(f){t(f,a)})}var ar=E(Ce,1/0),fr=E(Ce,1);function or(e,n){return n in e}function sr(e,n){var r=Object.create(null),t=Object.create(null);n=n||ae;var a=v(e),u=g(function(o,s){var h=n.apply(null,o);or(r,h)?D(function(){s.apply(null,r[h])}):or(t,h)?t[h].push(s):(t[h]=[s],a.apply(null,o.concat(function(){var c=l(arguments);r[h]=c;var m=t[h];delete t[h];for(var T=0,I=m.length;T<I;T++)m[T].apply(null,c)})))});return u.memo=r,u.unmemoized=e,u}var De;b?De=process.nextTick:P?De=setImmediate:De=$;var cr=C(De);function un(e,n,r){r=r||y;var t=te(n)?[]:{};e(n,function(a,u,f){v(a)(function(o,s){arguments.length>2&&(s=l(arguments,1)),t[u]=s,f(o)})},function(a){r(a,t)})}function lr(e,n){un(Q,e,n)}function vr(e,n,r){un(Se(n),e,r)}var an=function(e,n){var r=v(e);return Gn(function(t,a){r(t[0],a)},n,1)},hr=function(e,n){var r=an(e,n);return r.push=function(t,a,u){if(u==null&&(u=y),typeof u!="function")throw new Error("task callback must be a function");if(r.started=!0,M(t)||(t=[t]),t.length===0)return D(function(){r.drain()});a=a||0;for(var f=r._tasks.head;f&&a>=f.priority;)f=f.next;for(var o=0,s=t.length;o<s;o++){var h={data:t[o],priority:a,callback:u};f?r._tasks.insertBefore(f,h):r._tasks.push(h)}D(r.process)},delete r.unshift,r};function mr(e,n){if(n=W(n||y),!M(e))return n(new TypeError("First argument to race must be an array of functions"));if(!e.length)return n();for(var r=0,t=e.length;r<t;r++)v(e[r])(n)}function Me(e,n,r,t){var a=l(e).reverse();H(a,n,r,t)}function Re(e){var n=v(e);return g(function(t,a){return t.push(function(f,o){if(f)a(null,{error:f});else{var s;arguments.length<=2?s=o:s=l(arguments,1),a(null,{value:s})}}),n.apply(this,t)})}function gr(e){var n;return M(e)?n=x(e,Re):(n={},ue(e,function(r,t){n[t]=Re.call(this,r)})),n}function pr(e,n,r,t){tn(e,n,function(a,u){r(a,function(f,o){u(f,!o)})},t)}var yr=X(pr),fn=Z(pr),dr=E(fn,1);function Sr(e){return function(){return e}}function Fe(e,n,r){var t=5,a=0,u={times:t,intervalFunc:Sr(a)};function f(c,m){if(typeof m=="object")c.times=+m.times||t,c.intervalFunc=typeof m.interval=="function"?m.interval:Sr(+m.interval||a),c.errorFilter=m.errorFilter;else if(typeof m=="number"||typeof m=="string")c.times=+m||t;else throw new Error("Invalid arguments for async.retry")}if(arguments.length<3&&typeof e=="function"?(r=n||y,n=e):(f(u,e),r=r||y),typeof n!="function")throw new Error("Invalid arguments for async.retry");var o=v(n),s=1;function h(){o(function(c){c&&s++<u.times&&(typeof u.errorFilter!="function"||u.errorFilter(c))?setTimeout(h,u.intervalFunc(s)):r.apply(null,arguments)})}h()}var Tr=function(e,n){n||(n=e,e=null);var r=v(n);return g(function(t,a){function u(f){r.apply(null,t.concat(f))}e?Fe(e,u,a):Fe(u,a)})};function jr(e,n){un(k,e,n)}var Ve=X(ee(Boolean,ae)),ve=Z(ee(Boolean,ae)),qe=E(ve,1);function wr(e,n,r){var t=v(n);Te(e,function(u,f){t(u,function(o,s){if(o)return f(o);f(null,{value:u,criteria:s})})},function(u,f){if(u)return r(u);r(null,x(f.sort(a),nr("value")))});function a(u,f){var o=u.criteria,s=f.criteria;return o<s?-1:o>s?1:0}}function Lr(e,n,r){var t=v(e);return g(function(a,u){var f=!1,o;function s(){var h=e.name||"anonymous",c=new Error('Callback function "'+h+'" timed out.');c.code="ETIMEDOUT",r&&(c.info=r),f=!0,u(c)}a.push(function(){f||(u.apply(null,arguments),clearTimeout(o))}),o=setTimeout(s,n),t.apply(null,a)})}var ki=Math.ceil,eu=Math.max;function nu(e,n,r,t){for(var a=-1,u=eu(ki((n-e)/(r||1)),0),f=Array(u);u--;)f[t?u:++a]=e,e+=r;return f}function Ue(e,n,r,t){var a=v(r);Y(nu(0,e,1),n,a,t)}var br=E(Ue,1/0),Ar=E(Ue,1);function Or(e,n,r,t){arguments.length<=3&&(t=r,r=n,n=M(e)?[]:{}),t=W(t||y);var a=v(r);Q(e,function(u,f,o){a(n,u,f,o)},function(u){t(u,n)})}function Er(e,n){var r=null,t;n=n||y,se(e,function(a,u){v(a)(function(f,o){arguments.length>2?t=l(arguments,1):t=o,r=f,u(!f)})},function(){n(r,t)})}function _r(e){return function(){return(e.unmemoized||e).apply(null,arguments)}}function on(e,n,r){r=V(r||y);var t=v(n);if(!e())return r(null);var a=function(u){if(u)return r(u);if(e())return t(a);var f=l(arguments,1);r.apply(null,[null].concat(f))};t(a)}function Ir(e,n,r){on(function(){return!e.apply(this,arguments)},n,r)}var Pr=function(e,n){if(n=W(n||y),!M(e))return n(new Error("First argument to waterfall must be an array of functions"));if(!e.length)return n();var r=0;function t(u){var f=v(e[r++]);u.push(V(a)),f.apply(null,u)}function a(u){if(u||r===e.length)return n.apply(null,arguments);t(l(arguments,1))}t([])},ru={apply:p,applyEach:In,applyEachSeries:Pn,asyncify:G,auto:Ze,autoInject:Un,cargo:Nn,compose:Wn,concat:Qn,concatLimit:Le,concatSeries:Hn,constant:Jn,detect:be,detectLimit:fe,detectSeries:Ae,dir:Zn,doDuring:Yn,doUntil:xn,doWhilst:nn,during:kn,each:Oe,eachLimit:oe,eachOf:Q,eachOfLimit:J,eachOfSeries:k,eachSeries:se,ensureAsync:rn,every:_e,everyLimit:ce,everySeries:Ie,filter:Pe,filterLimit:le,filterSeries:$e,forever:rr,groupBy:tr,groupByLimit:Be,groupBySeries:ir,log:ur,map:Te,mapLimit:Y,mapSeries:Xe,mapValues:ar,mapValuesLimit:Ce,mapValuesSeries:fr,memoize:sr,nextTick:cr,parallel:lr,parallelLimit:vr,priorityQueue:hr,queue:an,race:mr,reduce:H,reduceRight:Me,reflect:Re,reflectAll:gr,reject:yr,rejectLimit:fn,rejectSeries:dr,retry:Fe,retryable:Tr,seq:en,series:jr,setImmediate:D,some:Ve,someLimit:ve,someSeries:qe,sortBy:wr,timeout:Lr,times:br,timesLimit:Ue,timesSeries:Ar,transform:Or,tryEach:Er,unmemoize:_r,until:Ir,waterfall:Pr,whilst:on,all:_e,allLimit:ce,allSeries:Ie,any:Ve,anyLimit:ve,anySeries:qe,find:be,findLimit:fe,findSeries:Ae,forEach:Oe,forEachSeries:se,forEachLimit:oe,forEachOf:Q,forEachOfSeries:k,forEachOfLimit:J,inject:H,foldl:H,foldr:Me,select:Pe,selectLimit:le,selectSeries:$e,wrapSync:G};i.default=ru,i.apply=p,i.applyEach=In,i.applyEachSeries=Pn,i.asyncify=G,i.auto=Ze,i.autoInject=Un,i.cargo=Nn,i.compose=Wn,i.concat=Qn,i.concatLimit=Le,i.concatSeries=Hn,i.constant=Jn,i.detect=be,i.detectLimit=fe,i.detectSeries=Ae,i.dir=Zn,i.doDuring=Yn,i.doUntil=xn,i.doWhilst=nn,i.during=kn,i.each=Oe,i.eachLimit=oe,i.eachOf=Q,i.eachOfLimit=J,i.eachOfSeries=k,i.eachSeries=se,i.ensureAsync=rn,i.every=_e,i.everyLimit=ce,i.everySeries=Ie,i.filter=Pe,i.filterLimit=le,i.filterSeries=$e,i.forever=rr,i.groupBy=tr,i.groupByLimit=Be,i.groupBySeries=ir,i.log=ur,i.map=Te,i.mapLimit=Y,i.mapSeries=Xe,i.mapValues=ar,i.mapValuesLimit=Ce,i.mapValuesSeries=fr,i.memoize=sr,i.nextTick=cr,i.parallel=lr,i.parallelLimit=vr,i.priorityQueue=hr,i.queue=an,i.race=mr,i.reduce=H,i.reduceRight=Me,i.reflect=Re,i.reflectAll=gr,i.reject=yr,i.rejectLimit=fn,i.rejectSeries=dr,i.retry=Fe,i.retryable=Tr,i.seq=en,i.series=jr,i.setImmediate=D,i.some=Ve,i.someLimit=ve,i.someSeries=qe,i.sortBy=wr,i.timeout=Lr,i.times=br,i.timesLimit=Ue,i.timesSeries=Ar,i.transform=Or,i.tryEach=Er,i.unmemoize=_r,i.until=Ir,i.waterfall=Pr,i.whilst=on,i.all=_e,i.allLimit=ce,i.allSeries=Ie,i.any=Ve,i.anyLimit=ve,i.anySeries=qe,i.find=be,i.findLimit=fe,i.findSeries=Ae,i.forEach=Oe,i.forEachSeries=se,i.forEachLimit=oe,i.forEachOf=Q,i.forEachOfSeries=k,i.forEachOfLimit=J,i.inject=H,i.foldl=H,i.foldr=Me,i.select=Pe,i.selectLimit=le,i.selectSeries=$e,i.wrapSync=G,Object.defineProperty(i,"__esModule",{value:!0})})});var Rr=ln((du,Mr)=>{var Ne=Br(),Cr=function(i,l,p){var g=[],j=function(P,b){~l.indexOf(P)&&g.push(P),b&&typeof b=="function"&&b(null)};if(p)Ne.forEach(i,j,function(){p(null,g)});else return i.forEach(j),g},Dr=function(i,l,p){var g=[],j=function($,C){~g.indexOf($)||g.push($),C&&typeof C=="function"&&C(null)};if(p){var P=2,b=function(){--P==0&&p(null,g)};Ne.forEach(i,j,b),Ne.forEach(l,j,b)}else return i.forEach(j),l.forEach(j),g},hn=function(i,l,p){if(p)Ne.parallel({intersection:function(g){Cr(i,l,g)},union:function(g){Dr(i,l,g)}},function(g,j){p(j.intersection.length/j.union.length)});else return Cr(i,l).length/Dr(i,l).length},mu=function(i,l,p){if(p)p(1-hn(i,l));else return 1-hn(i,l)};Mr.exports={index:hn,distance:mu}});var Vr=ln((Su,Fr)=>{Fr.exports=({dataset:i,epsilon:l,epsilonCompare:p,minimumPoints:g,distanceFunction:j})=>{l=l||1,p=p||((d,v)=>d<v),g=g||2,j=j||((d,v)=>Math.abs(d-v));var P={};isVisited=d=>P[d],markVisited=d=>{P[d]=!0};var b={};isClustered=d=>b[d],markClustered=d=>{b[d]=!0};var $=(d,v)=>{for(var A=0;A<v.length;A+=1){var _=v[A];d.indexOf(_)<0&&d.push(_)}},C=d=>{for(var v=[],A=0;A<i.length;A+=1){var _=j(i[d],i[A]);p(_,l)&&v.push(A)}return v},F=[],D=d=>F.push(d),G=[],me=()=>G.push([])-1,ge=(d,v)=>{G[d].push(v),markClustered(v)},We=(d,v)=>{for(var A=0;A<v.length;A+=1){var _=v[A];if(!isVisited(_)){markVisited(_);var pe=C(_);pe.length>=g&&$(v,pe)}isClustered(_)||ge(d,_)}};return i.forEach((d,v)=>{if(!isVisited(v)){markVisited(v);var A=C(v);if(A.length<g)F.push(v);else{var _=me();ge(_,v),We(_,A)}}}),{clusters:G,noise:F}}});vu(exports,{default:()=>gn});var Nr=vn(require("obsidian"));var zr=vn(Rr());var qr=vn(Vr());function Ur(i,l,p){function g(b){return b.map($=>i[$])}let j=(0,qr.default)({dataset:i,epsilon:l,distanceFunction:p});return{clusters:j.clusters.map(b=>g(b)),noise:g(j.noise)}}function he(i){return[...new Set(i)]}function mn(i,l){return i.filter(p=>!l.contains(p))}function gu(i){let l=i.reduce((p,g)=>p.filter(j=>g.includes(j)));return he(l)}function pu(i,l){let p=i.map(P=>P.file.etags),g=he(gu(p));return mn(g,l)}function Gr(i,l,p){p=he(p);function g(b,$){let C=mn(he(b.file.etags),p),F=mn(he($.file.etags),p);return zr.default.distance(C,F)}return Ur(i,l,g).clusters.map(b=>({tags:pu(b,p),pages:b,links:b.map($=>$.file.link)}))}var gn=class extends Nr.Plugin{async onload(){}async onunload(){}async loadSettings(){}async saveSettings(){}clusterByTags(l,p,g){return Gr(l,p,g)}};0&&(module.exports={});
