var Ff=Object.defineProperty,Bf=Object.defineProperties;var jf=Object.getOwnPropertyDescriptors;var Fa=Object.getOwnPropertySymbols;var Hf=Object.prototype.hasOwnProperty,xf=Object.prototype.propertyIsEnumerable;var Ba=(t,e,n)=>e in t?Ff(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Qt=(t,e)=>{for(var n in e||(e={}))Hf.call(e,n)&&Ba(t,n,e[n]);if(Fa)for(var n of Fa(e))xf.call(e,n)&&Ba(t,n,e[n]);return t},ja=(t,e)=>Bf(t,jf(e));function me(){}const Su=t=>t;function $s(t,e){for(const n in e)t[n]=e[n];return t}function ku(t){return t()}function Ha(){return Object.create(null)}function it(t){t.forEach(ku)}function An(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Wf(t){return Object.keys(t).length===0}function qf(t,...e){if(t==null)return me;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Kw(t,e,n){t.$$.on_destroy.push(qf(e,n))}function Oo(t,e,n,i){if(t){const s=Au(t,e,n,i);return t[0](s)}}function Au(t,e,n,i){return t[1]&&i?$s(n.ctx.slice(),t[1](i(e))):n.ctx}function No(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|s[a];return r}return e.dirty|s}return e.dirty}function Ro(t,e,n,i,s,r){if(s){const o=Au(e,n,i,r);t.p(o,s)}}function Do(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function lt(t){return t==null?"":t}const Cu=typeof window!="undefined";let Gf=Cu?()=>window.performance.now():()=>Date.now(),Lo=Cu?t=>requestAnimationFrame(t):me;const Rn=new Set;function Ou(t){Rn.forEach(e=>{e.c(t)||(Rn.delete(e),e.f())}),Rn.size!==0&&Lo(Ou)}function Kf(t){let e;return Rn.size===0&&Lo(Ou),{promise:new Promise(n=>{Rn.add(e={c:t,f:n})}),abort(){Rn.delete(e)}}}let er=!1;function zf(){er=!0}function Xf(){er=!1}function Yf(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Jf(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const h=e[u];h.claim_order!==void 0&&l.push(h)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,h=(s>0&&e[n[s]].claim_order<=u?s+1:Yf(1,s,f=>e[n[f]].claim_order,u))-1;i[l]=n[h]+1;const c=h+1;n[c]=l,s=Math.max(c,s)}const r=[],o=[];let a=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(r.push(e[l-1]);a>=l;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);r.reverse(),o.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<o.length;l++){for(;u<r.length&&o[l].claim_order>=r[u].claim_order;)u++;const h=u<r.length?r[u]:null;t.insertBefore(o[l],h)}}function Nu(t,e){t.appendChild(e)}function Ru(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Qf(t){const e=ee("style");return Zf(Ru(t),e),e.sheet}function Zf(t,e){Nu(t.head||t,e)}function $(t,e){if(er){for(Jf(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function $f(t,e,n){t.insertBefore(e,n||null)}function K(t,e,n){er&&!n?$(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function A(t){t.parentNode.removeChild(t)}function Po(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ee(t){return document.createElement(t)}function Tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function jt(t){return document.createTextNode(t)}function Ce(){return jt(" ")}function ue(){return jt("")}function ie(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ed(t){return function(e){return e.preventDefault(),t.call(this,e)}}function v(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function xa(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:v(t,i,e[i])}function to(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:v(t,e,n)}function zw(t){return t===""?null:+t}function J(t){return Array.from(t.childNodes)}function Du(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Lu(t,e,n,i,s=!1){Du(t);const r=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,s||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function Pu(t,e,n,i){return Lu(t,s=>s.nodeName===e,s=>{const r=[];for(let o=0;o<s.attributes.length;o++){const a=s.attributes[o];n[a.name]||r.push(a.name)}r.forEach(o=>s.removeAttribute(o))},()=>i(e))}function se(t,e,n){return Pu(t,e,n,ee)}function Ht(t,e,n){return Pu(t,e,n,Tt)}function Vn(t,e){return Lu(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>jt(e),!0)}function Oe(t){return Vn(t," ")}function Wa(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function td(t){const e=Wa(t,"HTML_TAG_START",0),n=Wa(t,"HTML_TAG_END",e);if(e===n)return new no;Du(t);const i=t.splice(e,n-e+1);A(i[0]),A(i[i.length-1]);const s=i.slice(1,i.length-1);for(const r of s)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new no(s)}function ks(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function qa(t,e){t.value=e==null?"":e}function Sn(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Xw(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function Yw(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let cs;function nd(){if(cs===void 0){cs=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{cs=!0}}return cs}function id(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=ee("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=nd();let r;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=ie(window,"message",o=>{o.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{r=ie(i.contentWindow,"resize",e)}),Nu(t,i),()=>{(s||r&&i.contentWindow)&&r(),A(i)}}function he(t,e,n){t.classList[n?"add":"remove"](e)}function Mu(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function Jw(t,e=document.body){return Array.from(e.querySelectorAll(t))}class sd{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.e=ee(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)$f(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(A)}}class no extends sd{constructor(e){super();this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)K(this.t,this.n[n],e)}}const As=new Map;let Cs=0;function rd(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function od(t,e){const n={stylesheet:Qf(e),rules:{}};return As.set(t,n),n}function Ga(t,e,n,i,s,r,o,a=0){const l=16.666/i;let u=`{
`;for(let D=0;D<=1;D+=l){const x=e+(n-e)*r(D);u+=D*100+`%{${o(x,1-x)}}
`}const h=u+`100% {${o(n,1-n)}}
}`,c=`__svelte_${rd(h)}_${a}`,f=Ru(t),{stylesheet:g,rules:p}=As.get(f)||od(f,t);p[c]||(p[c]=!0,g.insertRule(`@keyframes ${c} ${h}`,g.cssRules.length));const w=t.style.animation||"";return t.style.animation=`${w?`${w}, `:""}${c} ${i}ms linear ${s}ms 1 both`,Cs+=1,c}function ad(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),Cs-=s,Cs||ld())}function ld(){Lo(()=>{Cs||(As.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),As.clear())})}let yi;function hi(t){yi=t}function pn(){if(!yi)throw new Error("Function called outside component initialization");return yi}function Uu(t){pn().$$.before_update.push(t)}function tr(t){pn().$$.on_mount.push(t)}function Qw(t){pn().$$.after_update.push(t)}function Vu(t){pn().$$.on_destroy.push(t)}function Pi(){const t=pn();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=Mu(e,n);i.slice().forEach(r=>{r.call(t,s)})}}}function ud(t,e){pn().$$.context.set(t,e)}function Zw(t){return pn().$$.context.get(t)}const ai=[],$e=[],_s=[],io=[],Fu=Promise.resolve();let so=!1;function Bu(){so||(so=!0,Fu.then(ju))}function vs(){return Bu(),Fu}function sn(t){_s.push(t)}function cd(t){io.push(t)}const Ur=new Set;let hs=0;function ju(){const t=yi;do{for(;hs<ai.length;){const e=ai[hs];hs++,hi(e),hd(e.$$)}for(hi(null),ai.length=0,hs=0;$e.length;)$e.pop()();for(let e=0;e<_s.length;e+=1){const n=_s[e];Ur.has(n)||(Ur.add(n),n())}_s.length=0}while(ai.length);for(;io.length;)io.pop()();so=!1,Ur.clear(),hi(t)}function hd(t){if(t.fragment!==null){t.update(),it(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(sn)}}let ri;function fd(){return ri||(ri=Promise.resolve(),ri.then(()=>{ri=null})),ri}function Vr(t,e,n){t.dispatchEvent(Mu(`${e?"intro":"outro"}${n}`))}const ws=new Set;let wt;function de(){wt={r:0,c:[],p:wt}}function ge(){wt.r||it(wt.c),wt=wt.p}function L(t,e){t&&t.i&&(ws.delete(t),t.i(e))}function F(t,e,n,i){if(t&&t.o){if(ws.has(t))return;ws.add(t),wt.c.push(()=>{ws.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const dd={duration:0};function fs(t,e,n,i){let s=e(t,n),r=i?0:1,o=null,a=null,l=null;function u(){l&&ad(t,l)}function h(f,g){const p=f.b-r;return g*=Math.abs(p),{a:r,b:f.b,d:p,duration:g,start:f.start,end:f.start+g,group:f.group}}function c(f){const{delay:g=0,duration:p=300,easing:w=Su,tick:D=me,css:x}=s||dd,C={start:Gf()+g,b:f};f||(C.group=wt,wt.r+=1),o||a?a=C:(x&&(u(),l=Ga(t,r,f,p,g,w,x)),f&&D(0,1),o=h(C,p),sn(()=>Vr(t,f,"start")),Kf(O=>{if(a&&O>a.start&&(o=h(a,p),a=null,Vr(t,o.b,"start"),x&&(u(),l=Ga(t,r,o.b,o.duration,0,w,s.css))),o){if(O>=o.end)D(r=o.b,1-r),Vr(t,o.b,"end"),a||(o.b?u():--o.group.r||it(o.group.c)),o=null;else if(O>=o.start){const m=O-o.start;r=o.a+o.d*w(m/o.duration),D(r,1-r)}}return!!(o||a)}))}return{run(f){An(s)?fd().then(()=>{s=s(),c(f)}):c(f)},end(){u(),o=a=null}}}const gd=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function md(t,e){F(t,1,1,()=>{e.delete(t.key)})}function pd(t,e,n,i,s,r,o,a,l,u,h,c){let f=t.length,g=r.length,p=f;const w={};for(;p--;)w[t[p].key]=p;const D=[],x=new Map,C=new Map;for(p=g;p--;){const _=c(s,r,p),G=n(_);let P=o.get(G);P?i&&P.p(_,e):(P=u(G,_),P.c()),x.set(G,D[p]=P),G in w&&C.set(G,Math.abs(p-w[G]))}const O=new Set,m=new Set;function S(_){L(_,1),_.m(a,h),o.set(_.key,_),h=_.first,g--}for(;f&&g;){const _=D[g-1],G=t[f-1],P=_.key,B=G.key;_===G?(h=_.first,f--,g--):x.has(B)?!o.has(P)||O.has(P)?S(_):m.has(B)?f--:C.get(P)>C.get(B)?(m.add(P),S(_)):(O.add(B),f--):(l(G,o),f--)}for(;f--;){const _=t[f];x.has(_.key)||l(_,o)}for(;g;)S(D[g-1]);return D}function Mo(t,e){const n={},i={},s={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(n[l]=a[l],s[l]=1);t[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in n||(n[o]=void 0);return n}function Hu(t){return typeof t=="object"&&t!==null?t:{}}function Ka(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ve(t){t&&t.c()}function mt(t,e){t&&t.l(e)}function pe(t,e,n,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=t.$$;s&&s.m(e,n),i||sn(()=>{const l=r.map(ku).filter(An);o?o.push(...l):it(l),t.$$.on_mount=[]}),a.forEach(sn)}function ye(t,e){const n=t.$$;n.fragment!==null&&(it(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yd(t,e){t.$$.dirty[0]===-1&&(ai.push(t),Bu(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ct(t,e,n,i,s,r,o,a=[-1]){const l=yi;hi(t);const u=t.$$={fragment:null,ctx:null,props:r,update:me,not_equal:s,bound:Ha(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Ha(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(u.root);let h=!1;if(u.ctx=n?n(t,e.props||{},(c,f,...g)=>{const p=g.length?g[0]:f;return u.ctx&&s(u.ctx[c],u.ctx[c]=p)&&(!u.skip_bound&&u.bound[c]&&u.bound[c](p),h&&yd(t,c)),f}):[],u.update(),h=!0,it(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){zf();const c=J(e.target);u.fragment&&u.fragment.l(c),c.forEach(A)}else u.fragment&&u.fragment.c();e.intro&&L(t.$$.fragment),pe(t,e.target,e.anchor,e.customElement),Xf(),ju()}hi(l)}class Ot{$destroy(){ye(this,1),this.$destroy=me}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Wf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const kn=[];function $w(t,e=me){let n;const i=new Set;function s(a){if(gt(t,a)&&(t=a,n)){const l=!kn.length;for(const u of i)u[1](),kn.push(u,t);if(l){for(let u=0;u<kn.length;u+=2)kn[u][0](kn[u+1]);kn.length=0}}}function r(a){s(a(t))}function o(a,l=me){const u=[a,l];return i.add(u),i.size===1&&(n=e(s)||me),a(t),()=>{i.delete(u),i.size===0&&(n(),n=null)}}return{set:s,update:r,subscribe:o}}const _d=t=>({loading:t&1,success:t&8,error:t&2,notSupported:t&16,coords:t&4}),za=t=>({loading:t[0],success:t[3],error:t[1],notSupported:t[4],coords:t[2]});function vd(t){let e;const n=t[14].default,i=Oo(n,t,t[13],za);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,[r]){i&&i.p&&(!e||r&8223)&&Ro(i,n,s,s[13],e?No(n,s[13],r,_d):Do(s[13]),za)},i(s){e||(L(i,s),e=!0)},o(s){F(i,s),e=!1},d(s){i&&i.d(s)}}}function wd(t,e,n){let{$$slots:i={},$$scope:s}=e,{coords:r=[-1,-1]}=e,{position:o={}}=e,{options:a={}}=e,{getPosition:l=!1}=e,{watch:u=!1}=e,{loading:h=!1}=e,{success:c=!1}=e,{error:f=!1}=e,{notSupported:g=!1}=e;async function p(_){if(n(4,g=!1),n(0,h=!0),n(1,f=!1),!("geolocation"in navigator))n(4,g=!0);else return C&&await D(C),n(12,C=navigator.geolocation.watchPosition(m,S,_)),C}async function w(_){n(4,g=!1),n(0,h=!0),n(1,f=!1),"geolocation"in navigator?navigator.geolocation.getCurrentPosition(m,S,_):n(4,g=!0)}async function D(_){"geolocation"in navigator?(navigator.geolocation.clearWatch(_),_=void 0):n(4,g=!0)}const x=Pi();let C,O;function m(_){n(2,r=[_.coords.longitude,_.coords.latitude]),n(5,o={coords:{accuracy:_.coords.accuracy,altitude:_.coords.altitude,altitudeAccuracy:_.coords.altitudeAccuracy,heading:_.coords.heading,latitude:_.coords.latitude,longitude:_.coords.longitude,speed:_.coords.speed},timestamp:_.timestamp}),(!O||O.coords.latitude!==_.coords.latitude||O.coords.longitude!==_.coords.longitude)&&(O=_,x("position",o)),n(0,h=!1)}function S(_){x("error",_),n(1,f=_),n(0,h=!1)}return Vu(()=>{C&&D(C)}),t.$$set=_=>{"coords"in _&&n(2,r=_.coords),"position"in _&&n(5,o=_.position),"options"in _&&n(6,a=_.options),"getPosition"in _&&n(7,l=_.getPosition),"watch"in _&&n(8,u=_.watch),"loading"in _&&n(0,h=_.loading),"success"in _&&n(3,c=_.success),"error"in _&&n(1,f=_.error),"notSupported"in _&&n(4,g=_.notSupported),"$$scope"in _&&n(13,s=_.$$scope)},t.$$.update=()=>{t.$$.dirty&448&&typeof window!="undefined"&&l&&u&&p(a),t.$$.dirty&448&&typeof window!="undefined"&&l&&!u&&w(a),t.$$.dirty&131&&n(3,c=l&&!h&&!f),t.$$.dirty&4480&&(!l||!u)&&C&&D(C)},[h,f,r,c,g,o,a,l,u,p,w,D,C,s,i]}class e0 extends Ot{constructor(e){super();Ct(this,e,wd,vd,gt,{coords:2,position:5,options:6,getPosition:7,watch:8,loading:0,success:3,error:1,notSupported:4,watchPosition:9,getGeolocationPosition:10,clearWatcher:11})}get watchPosition(){return this.$$.ctx[9]}get getGeolocationPosition(){return this.$$.ctx[10]}get clearWatcher(){return this.$$.ctx[11]}}/**
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
 *//**
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
 */const xu=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Id=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Wu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=r>>2,c=(r&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),i.push(n[h],n[c],n[f],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Id(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const c=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||u==null||c==null)throw Error();const f=r<<2|a>>4;if(i.push(f),u!==64){const g=a<<4&240|u>>2;if(i.push(g),c!==64){const p=u<<6&192|c;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},qu=function(t){const e=xu(t);return Wu.encodeByteArray(e,!0)},Ed=function(t){try{return Wu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class bd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Se(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Ku(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Td(){return Se().indexOf("Electron/")>=0}function Xu(){const t=Se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sd(){return Se().indexOf("MSAppHost/")>=0}function kd(){return typeof indexedDB=="object"}function Ad(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Cd="FirebaseError";class yn extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=Cd,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mi.prototype.create)}}class Mi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Od(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new yn(s,a,i)}}function Od(t,e){return t.replace(Nd,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Nd=/\{\$([^}]+)}/g;function Rd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Os(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Xa(r)&&Xa(o)){if(!Os(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Xa(t){return t!==null&&typeof t=="object"}/**
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
 */function Ui(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function li(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function ui(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dd(t,e){const n=new Ld(t,e);return n.subscribe.bind(n)}class Ld{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Pd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Fr),s.error===void 0&&(s.error=Fr),s.complete===void 0&&(s.complete=Fr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fr(){}/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class rn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zt="[DEFAULT]";/**
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
 */class Md{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new bd;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vd(e))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zt){return this.instances.has(e)}getOptions(e=Zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ud(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Zt){return this.component?this.component.multipleInstances?e:Zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ud(t){return t===Zt?void 0:t}function Vd(t){return t.instantiationMode==="EAGER"}/**
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
 */class Fd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Md(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Bd={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},jd=ne.INFO,Hd={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},xd=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Hd[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uo{constructor(e){this.name=e,this._logLevel=jd,this._logHandler=xd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}function Wd(t){return Array.prototype.slice.call(t)}function Yu(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function Vo(t,e,n){var i,s=new Promise(function(r,o){i=t[e].apply(t,n),Yu(i).then(r,o)});return s.request=i,s}function qd(t,e,n){var i=Vo(t,e,n);return i.then(function(s){if(!!s)return new _i(s,i.request)})}function Gn(t,e,n){n.forEach(function(i){Object.defineProperty(t.prototype,i,{get:function(){return this[e][i]},set:function(s){this[e][i]=s}})})}function Fo(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return Vo(this[e],s,arguments)})})}function nr(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return this[e][s].apply(this[e],arguments)})})}function Ju(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return qd(this[e],s,arguments)})})}function _n(t){this._index=t}Gn(_n,"_index",["name","keyPath","multiEntry","unique"]);Fo(_n,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);Ju(_n,"_index",IDBIndex,["openCursor","openKeyCursor"]);function _i(t,e){this._cursor=t,this._request=e}Gn(_i,"_cursor",["direction","key","primaryKey","value"]);Fo(_i,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(_i.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),Yu(e._request).then(function(i){if(!!i)return new _i(i,e._request)})})})});function pt(t){this._store=t}pt.prototype.createIndex=function(){return new _n(this._store.createIndex.apply(this._store,arguments))};pt.prototype.index=function(){return new _n(this._store.index.apply(this._store,arguments))};Gn(pt,"_store",["name","keyPath","indexNames","autoIncrement"]);Fo(pt,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);Ju(pt,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);nr(pt,"_store",IDBObjectStore,["deleteIndex"]);function Vi(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}Vi.prototype.objectStore=function(){return new pt(this._tx.objectStore.apply(this._tx,arguments))};Gn(Vi,"_tx",["objectStoreNames","mode"]);nr(Vi,"_tx",IDBTransaction,["abort"]);function ir(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new Vi(n)}ir.prototype.createObjectStore=function(){return new pt(this._db.createObjectStore.apply(this._db,arguments))};Gn(ir,"_db",["name","version","objectStoreNames"]);nr(ir,"_db",IDBDatabase,["deleteObjectStore","close"]);function sr(t){this._db=t}sr.prototype.transaction=function(){return new Vi(this._db.transaction.apply(this._db,arguments))};Gn(sr,"_db",["name","version","objectStoreNames"]);nr(sr,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[pt,_n].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=Wd(arguments),i=n[n.length-1],s=this._store||this._index,r=s[t].apply(s,n.slice(0,-1));r.onsuccess=function(){i(r.result)}})})});[_n,pt].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var i=this,s=[];return new Promise(function(r){i.iterateCursor(e,function(o){if(!o){r(s);return}if(s.push(o.value),n!==void 0&&s.length==n){r(s);return}o.continue()})})})});function Gd(t,e,n){var i=Vo(indexedDB,"open",[t,e]),s=i.request;return s&&(s.onupgradeneeded=function(r){n&&n(new ir(s.result,r.oldVersion,s.transaction))}),i.then(function(r){return new sr(r)})}/**
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
 */class Kd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zd(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function zd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ro="@firebase/app",Ya="0.7.18";/**
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
 */const Bo=new Uo("@firebase/app"),Xd="@firebase/app-compat",Yd="@firebase/analytics-compat",Jd="@firebase/analytics",Qd="@firebase/app-check-compat",Zd="@firebase/app-check",$d="@firebase/auth",eg="@firebase/auth-compat",tg="@firebase/database",ng="@firebase/database-compat",ig="@firebase/functions",sg="@firebase/functions-compat",rg="@firebase/installations",og="@firebase/installations-compat",ag="@firebase/messaging",lg="@firebase/messaging-compat",ug="@firebase/performance",cg="@firebase/performance-compat",hg="@firebase/remote-config",fg="@firebase/remote-config-compat",dg="@firebase/storage",gg="@firebase/storage-compat",mg="@firebase/firestore",pg="@firebase/firestore-compat",yg="firebase",_g="9.6.8";/**
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
 */const Qu="[DEFAULT]",vg={[ro]:"fire-core",[Xd]:"fire-core-compat",[Jd]:"fire-analytics",[Yd]:"fire-analytics-compat",[Zd]:"fire-app-check",[Qd]:"fire-app-check-compat",[$d]:"fire-auth",[eg]:"fire-auth-compat",[tg]:"fire-rtdb",[ng]:"fire-rtdb-compat",[ig]:"fire-fn",[sg]:"fire-fn-compat",[rg]:"fire-iid",[og]:"fire-iid-compat",[ag]:"fire-fcm",[lg]:"fire-fcm-compat",[ug]:"fire-perf",[cg]:"fire-perf-compat",[hg]:"fire-rc",[fg]:"fire-rc-compat",[dg]:"fire-gcs",[gg]:"fire-gcs-compat",[mg]:"fire-fst",[pg]:"fire-fst-compat","fire-js":"fire-js",[yg]:"fire-js-all"};/**
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
 */const Ns=new Map,oo=new Map;function wg(t,e){try{t.container.addComponent(e)}catch(n){Bo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fn(t){const e=t.name;if(oo.has(e))return Bo.debug(`There were multiple attempts to register component ${e}.`),!1;oo.set(e,t);for(const n of Ns.values())wg(n,t);return!0}function jo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ig={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},xt=new Mi("app","Firebase",Ig);/**
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
 */class Eg{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
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
 */const Fi=_g;function t0(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Qu,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw xt.create("bad-app-name",{appName:String(i)});const s=Ns.get(i);if(s){if(Os(t,s.options)&&Os(n,s.config))return s;throw xt.create("duplicate-app",{appName:i})}const r=new Fd(i);for(const a of oo.values())r.addComponent(a);const o=new Eg(t,n,r);return Ns.set(i,o),o}function Zu(t=Qu){const e=Ns.get(t);if(!e)throw xt.create("no-app",{appName:t});return e}function Ft(t,e,n){var i;let s=(i=vg[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bo.warn(a.join(" "));return}Fn(new rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const bg="firebase-heartbeat-database",Tg=1,on="firebase-heartbeat-store";let Br=null;function Ho(){return Br||(Br=Gd(bg,Tg,t=>{switch(t.oldVersion){case 0:t.createObjectStore(on)}}).catch(t=>{throw xt.create("storage-open",{originalErrorMessage:t.message})})),Br}async function Sg(t){try{return(await Ho()).transaction(on).objectStore(on).get(xo(t))}catch(e){throw xt.create("storage-get",{originalErrorMessage:e.message})}}async function jr(t,e){try{const i=(await Ho()).transaction(on,"readwrite");return await i.objectStore(on).put(e,xo(t)),i.complete}catch(n){throw xt.create("storage-set",{originalErrorMessage:n.message})}}async function kg(t){try{const n=(await Ho()).transaction(on,"readwrite");return await n.objectStore(on).delete(xo(t)),n.complete}catch(e){throw xt.create("storage-delete",{originalErrorMessage:e.message})}}function xo(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ag=1024,Cg=30*24*60*60*1e3;class Og{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dg(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ng();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(s=>s.date===i))return this._heartbeatsCache.push({date:i,userAgent:n}),this._heartbeatsCache=this._heartbeatsCache.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Cg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:n}=Rg(this._heartbeatsCache),i=qu(JSON.stringify({version:2,heartbeats:e}));return n.length>0?(this._heartbeatsCache=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),i}}function Ng(){return new Date().toISOString().substring(0,10)}function Rg(t,e=Ag){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.userAgent===s.userAgent);if(r){if(r.dates.push(s.date),Ja(n)>e){r.dates.pop();break}}else if(n.push({userAgent:s.userAgent,dates:[s.date]}),Ja(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Dg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kd()?Ad().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Sg(this.app);return(n==null?void 0:n.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return jr(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return jr(this.app,{heartbeats:[...i,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return jr(this.app,{heartbeats:i.filter(s=>!e.includes(s))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return kg(this.app)}}function Ja(t){return qu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Lg(t){Fn(new rn("platform-logger",e=>new Kd(e),"PRIVATE")),Fn(new rn("heartbeat",e=>new Og(e),"PRIVATE")),Ft(ro,Ya,t),Ft(ro,Ya,"esm2017"),Ft("fire-js","")}Lg("");var Pg="firebase",Mg="9.6.8";/**
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
 */Ft(Pg,Mg,"app");var Ug=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},N,Wo=Wo||{},H=Ug||self;function Rs(){}function ao(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Bi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Vg(t){return Object.prototype.hasOwnProperty.call(t,Hr)&&t[Hr]||(t[Hr]=++Fg)}var Hr="closure_uid_"+(1e9*Math.random()>>>0),Fg=0;function Bg(t,e,n){return t.call.apply(t.bind,arguments)}function jg(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function De(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?De=Bg:De=jg,De.apply(null,arguments)}function ds(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Pe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function qt(){this.s=this.s,this.o=this.o}var Hg=0,xg={};qt.prototype.s=!1;qt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Hg!=0)){var t=Vg(this);delete xg[t]}};qt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const $u=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},ec=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function Wg(t){e:{var e=Pm;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Qa(t){return Array.prototype.concat.apply([],arguments)}function qo(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Ds(t){return/^[\s\xa0]*$/.test(t)}var Za=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ve(t,e){return t.indexOf(e)!=-1}function xr(t,e){return t<e?-1:t>e?1:0}var Fe;e:{var $a=H.navigator;if($a){var el=$a.userAgent;if(el){Fe=el;break e}}Fe=""}function Go(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function tc(t){const e={};for(const n in t)e[n]=t[n];return e}var tl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nc(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<tl.length;r++)n=tl[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ko(t){return Ko[" "](t),t}Ko[" "]=Rs;function qg(t){var e=zg;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Gg=Ve(Fe,"Opera"),Bn=Ve(Fe,"Trident")||Ve(Fe,"MSIE"),ic=Ve(Fe,"Edge"),lo=ic||Bn,sc=Ve(Fe,"Gecko")&&!(Ve(Fe.toLowerCase(),"webkit")&&!Ve(Fe,"Edge"))&&!(Ve(Fe,"Trident")||Ve(Fe,"MSIE"))&&!Ve(Fe,"Edge"),Kg=Ve(Fe.toLowerCase(),"webkit")&&!Ve(Fe,"Edge");function rc(){var t=H.document;return t?t.documentMode:void 0}var Ls;e:{var Wr="",qr=function(){var t=Fe;if(sc)return/rv:([^\);]+)(\)|;)/.exec(t);if(ic)return/Edge\/([\d\.]+)/.exec(t);if(Bn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Kg)return/WebKit\/(\S+)/.exec(t);if(Gg)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(qr&&(Wr=qr?qr[1]:""),Bn){var Gr=rc();if(Gr!=null&&Gr>parseFloat(Wr)){Ls=String(Gr);break e}}Ls=Wr}var zg={};function Xg(){return qg(function(){let t=0;const e=Za(String(Ls)).split("."),n=Za("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=xr(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||xr(s[2].length==0,r[2].length==0)||xr(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var uo;if(H.document&&Bn){var nl=rc();uo=nl||parseInt(Ls,10)||void 0}else uo=void 0;var Yg=uo,Jg=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",Rs,e),H.removeEventListener("test",Rs,e)}catch{}return t}();function Ue(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};function vi(t,e){if(Ue.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(sc){e:{try{Ko(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Qg[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vi.Z.h.call(this)}}Pe(vi,Ue);var Qg={2:"touch",3:"pen",4:"mouse"};vi.prototype.h=function(){vi.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ji="closure_listenable_"+(1e6*Math.random()|0),Zg=0;function $g(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++Zg,this.ca=this.fa=!1}function rr(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function or(t){this.src=t,this.g={},this.h=0}or.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ho(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new $g(e,this.src,r,!!i,s),e.fa=n,t.push(e)),e};function co(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=$u(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(rr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ho(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}var zo="closure_lm_"+(1e6*Math.random()|0),Kr={};function oc(t,e,n,i,s){if(i&&i.once)return lc(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)oc(t,e[r],n,i,s);return null}return n=Jo(n),t&&t[ji]?t.N(e,n,Bi(i)?!!i.capture:!!i,s):ac(t,e,n,!1,i,s)}function ac(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Bi(s)?!!s.capture:!!s,a=Yo(t);if(a||(t[zo]=a=new or(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=em(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Jg||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(cc(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function em(){function t(n){return e.call(t.src,t.listener,n)}var e=tm;return t}function lc(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)lc(t,e[r],n,i,s);return null}return n=Jo(n),t&&t[ji]?t.O(e,n,Bi(i)?!!i.capture:!!i,s):ac(t,e,n,!0,i,s)}function uc(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)uc(t,e[r],n,i,s);else i=Bi(i)?!!i.capture:!!i,n=Jo(n),t&&t[ji]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ho(r,n,i,s),-1<n&&(rr(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Yo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ho(e,n,i,s)),(n=-1<t?e[t]:null)&&Xo(n))}function Xo(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ji])co(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(cc(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Yo(e))?(co(n,t),n.h==0&&(n.src=null,e[zo]=null)):rr(t)}}}function cc(t){return t in Kr?Kr[t]:Kr[t]="on"+t}function tm(t,e){if(t.ca)t=!0;else{e=new vi(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Xo(t),t=n.call(i,e)}return t}function Yo(t){return t=t[zo],t instanceof or?t:null}var zr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jo(t){return typeof t=="function"?t:(t[zr]||(t[zr]=function(e){return t.handleEvent(e)}),t[zr])}function ke(){qt.call(this),this.i=new or(this),this.P=this,this.I=null}Pe(ke,qt);ke.prototype[ji]=!0;ke.prototype.removeEventListener=function(t,e,n,i){uc(this,t,e,n,i)};function Le(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new Ue(e,t);else if(e instanceof Ue)e.target=e.target||t;else{var s=e;e=new Ue(i,t),nc(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=gs(o,i,!0,e)&&s}if(o=e.g=t,s=gs(o,i,!0,e)&&s,s=gs(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=gs(o,i,!1,e)&&s}ke.prototype.M=function(){if(ke.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)rr(n[i]);delete t.g[e],t.h--}}this.I=null};ke.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};ke.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function gs(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&co(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Qo=H.JSON.stringify;function nm(){var t=fc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class im{constructor(){this.h=this.g=null}add(e,n){const i=hc.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var hc=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new sm,t=>t.reset());class sm{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function rm(t){H.setTimeout(()=>{throw t},0)}function Zo(t,e){fo||om(),go||(fo(),go=!0),fc.add(t,e)}var fo;function om(){var t=H.Promise.resolve(void 0);fo=function(){t.then(am)}}var go=!1,fc=new im;function am(){for(var t;t=nm();){try{t.h.call(t.g)}catch(n){rm(n)}var e=hc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}go=!1}function ar(t,e){ke.call(this),this.h=t||1,this.g=e||H,this.j=De(this.kb,this),this.l=Date.now()}Pe(ar,ke);N=ar.prototype;N.da=!1;N.S=null;N.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Le(this,"tick"),this.da&&($o(this),this.start()))}};N.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $o(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}N.M=function(){ar.Z.M.call(this),$o(this),delete this.g};function ea(t,e,n){if(typeof t=="function")n&&(t=De(t,n));else if(t&&typeof t.handleEvent=="function")t=De(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function dc(t){t.g=ea(()=>{t.g=null,t.i&&(t.i=!1,dc(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class lm extends qt{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:dc(this)}M(){super.M(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wi(t){qt.call(this),this.h=t,this.g={}}Pe(wi,qt);var il=[];function gc(t,e,n,i){Array.isArray(n)||(n&&(il[0]=n.toString()),n=il);for(var s=0;s<n.length;s++){var r=oc(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function mc(t){Go(t.g,function(e,n){this.g.hasOwnProperty(n)&&Xo(e)},t),t.g={}}wi.prototype.M=function(){wi.Z.M.call(this),mc(this)};wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function lr(){this.g=!0}lr.prototype.Aa=function(){this.g=!1};function um(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");o=2<=c.length&&c[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function cm(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Cn(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+fm(t,n)+(i?" "+i:"")})}function hm(t,e){t.info(function(){return"TIMEOUT: "+e})}lr.prototype.info=function(){};function fm(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Qo(n)}catch{return e}}var vn={},sl=null;function ur(){return sl=sl||new ke}vn.Ma="serverreachability";function pc(t){Ue.call(this,vn.Ma,t)}Pe(pc,Ue);function Ii(t){const e=ur();Le(e,new pc(e,t))}vn.STAT_EVENT="statevent";function yc(t,e){Ue.call(this,vn.STAT_EVENT,t),this.stat=e}Pe(yc,Ue);function Be(t){const e=ur();Le(e,new yc(e,t))}vn.Na="timingevent";function _c(t,e){Ue.call(this,vn.Na,t),this.size=e}Pe(_c,Ue);function Hi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var cr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},vc={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ta(){}ta.prototype.h=null;function rl(t){return t.h||(t.h=t.i())}function wc(){}var xi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function na(){Ue.call(this,"d")}Pe(na,Ue);function ia(){Ue.call(this,"c")}Pe(ia,Ue);var mo;function hr(){}Pe(hr,ta);hr.prototype.g=function(){return new XMLHttpRequest};hr.prototype.i=function(){return{}};mo=new hr;function Wi(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new wi(this),this.P=dm,t=lo?125:void 0,this.W=new ar(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ic}function Ic(){this.i=null,this.g="",this.h=!1}var dm=45e3,po={},Ps={};N=Wi.prototype;N.setTimeout=function(t){this.P=t};function yo(t,e,n){t.K=1,t.v=dr(St(e)),t.s=n,t.U=!0,Ec(t,null)}function Ec(t,e){t.F=Date.now(),qi(t),t.A=St(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Oc(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Ic,t.g=Yc(t.l,n?e:null,!t.s),0<t.O&&(t.L=new lm(De(t.Ia,t,t.g),t.O)),gc(t.V,t.g,"readystatechange",t.gb),e=t.H?tc(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ii(1),um(t.j,t.u,t.A,t.m,t.X,t.s)}N.gb=function(t){t=t.target;const e=this.L;e&&It(t)==3?e.l():this.Ia(t)};N.Ia=function(t){try{if(t==this.g)e:{const h=It(this.g);var e=this.g.Da();const c=this.g.ba();if(!(3>h)&&(h!=3||lo||this.g&&(this.h.h||this.g.ga()||ul(this.g)))){this.I||h!=4||e==7||(e==8||0>=c?Ii(3):Ii(2)),fr(this);var n=this.g.ba();this.N=n;t:if(bc(this)){var i=ul(this.g);t="";var s=i.length,r=It(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){$t(this),fi(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,cm(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ds(a)){var u=a;break t}}u=null}if(n=u)Cn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,_o(this,n);else{this.i=!1,this.o=3,Be(12),$t(this),fi(this);break e}}this.U?(Tc(this,h,o),lo&&this.i&&h==3&&(gc(this.V,this.W,"tick",this.fb),this.W.start())):(Cn(this.j,this.m,o,null),_o(this,o)),h==4&&$t(this),this.i&&!this.I&&(h==4?Gc(this.l,this):(this.i=!1,qi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Be(12)):(this.o=0,Be(13)),$t(this),fi(this)}}}catch{}finally{}};function bc(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Tc(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=gm(t,n),s==Ps){e==4&&(t.o=4,Be(14),i=!1),Cn(t.j,t.m,null,"[Incomplete Response]");break}else if(s==po){t.o=4,Be(15),Cn(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Cn(t.j,t.m,s,null),_o(t,s);bc(t)&&s!=Ps&&s!=po&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Be(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),fa(e),e.L=!0,Be(11))):(Cn(t.j,t.m,n,"[Invalid Chunked Response]"),$t(t),fi(t))}N.fb=function(){if(this.g){var t=It(this.g),e=this.g.ga();this.C<e.length&&(fr(this),Tc(this,t,e),this.i&&t!=4&&qi(this))}};function gm(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Ps:(n=Number(e.substring(n,i)),isNaN(n)?po:(i+=1,i+n>e.length?Ps:(e=e.substr(i,n),t.C=i+n,e)))}N.cancel=function(){this.I=!0,$t(this)};function qi(t){t.Y=Date.now()+t.P,Sc(t,t.P)}function Sc(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Hi(De(t.eb,t),e)}function fr(t){t.B&&(H.clearTimeout(t.B),t.B=null)}N.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(hm(this.j,this.A),this.K!=2&&(Ii(3),Be(17)),$t(this),this.o=2,fi(this)):Sc(this,this.Y-t)};function fi(t){t.l.G==0||t.I||Gc(t.l,t)}function $t(t){fr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,$o(t.W),mc(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function _o(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||vo(n.i,t))){if(n.I=t.N,!t.J&&vo(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Fs(n),pr(n);else break e;ha(n),Be(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Hi(De(n.ab,n),6e3));if(1>=Dc(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else en(n,11)}else if((t.J||n.g==t)&&Fs(n),!Ds(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const h=u[3];h!=null&&(n.ma=h,n.h.info("VER="+n.ma));const c=u[4];c!=null&&(n.za=c,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const g=t.g;if(g){const p=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.i;!r.g&&(Ve(p,"spdy")||Ve(p,"quic")||Ve(p,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(oa(r,r.h),r.h=null))}if(i.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(i.sa=w,le(i.F,i.D,w))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=Xc(i,i.H?i.la:null,i.W),o.J){Lc(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(fr(a),qi(a)),i.g=o}else Wc(i);0<n.l.length&&yr(n)}else u[0]!="stop"&&u[0]!="close"||en(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?en(n,7):ca(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Ii(4)}catch{}}function mm(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(ao(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function sa(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ao(t)||typeof t=="string")ec(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(ao(t)||typeof t=="string"){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=mm(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function Kn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Kn)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}N=Kn.prototype;N.R=function(){ra(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};N.T=function(){return ra(this),this.g.concat()};function ra(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];an(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)i=t.g[e],an(s,i)||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}N.get=function(t,e){return an(this.h,t)?this.h[t]:e};N.set=function(t,e){an(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};N.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};function an(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var kc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function pm(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ln(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ln){this.g=e!==void 0?e:t.g,Ms(this,t.j),this.s=t.s,Us(this,t.i),Vs(this,t.m),this.l=t.l,e=t.h;var n=new Ei;n.i=e.i,e.g&&(n.g=new Kn(e.g),n.h=e.h),ol(this,n),this.o=t.o}else t&&(n=String(t).match(kc))?(this.g=!!e,Ms(this,n[1]||"",!0),this.s=di(n[2]||""),Us(this,n[3]||"",!0),Vs(this,n[4]),this.l=di(n[5]||"",!0),ol(this,n[6]||"",!0),this.o=di(n[7]||"")):(this.g=!!e,this.h=new Ei(null,this.g))}ln.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ci(e,al,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ci(e,al,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ci(n,n.charAt(0)=="/"?Im:wm,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ci(n,bm)),t.join("")};function St(t){return new ln(t)}function Ms(t,e,n){t.j=n?di(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Us(t,e,n){t.i=n?di(e,!0):e}function Vs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ol(t,e,n){e instanceof Ei?(t.h=e,Tm(t.h,t.g)):(n||(e=ci(e,Em)),t.h=new Ei(e,t.g))}function le(t,e,n){t.h.set(e,n)}function dr(t){return le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ym(t){return t instanceof ln?St(t):new ln(t,void 0)}function _m(t,e,n,i){var s=new ln(null,void 0);return t&&Ms(s,t),e&&Us(s,e),n&&Vs(s,n),i&&(s.l=i),s}function di(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ci(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,vm),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vm(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var al=/[#\/\?@]/g,wm=/[#\?:]/g,Im=/[#\?]/g,Em=/[#\?@]/g,bm=/#/g;function Ei(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gt(t){t.g||(t.g=new Kn,t.h=0,t.i&&pm(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Ei.prototype;N.add=function(t,e){Gt(this),this.i=null,t=zn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ac(t,e){Gt(t),e=zn(t,e),an(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,an(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ra(t)))}function Cc(t,e){return Gt(t),e=zn(t,e),an(t.g.h,e)}N.forEach=function(t,e){Gt(this),this.g.forEach(function(n,i){ec(n,function(s){t.call(e,s,i,this)},this)},this)};N.T=function(){Gt(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n};N.R=function(t){Gt(this);var e=[];if(typeof t=="string")Cc(this,t)&&(e=Qa(e,this.g.get(zn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Qa(e,t[n])}return e};N.set=function(t,e){return Gt(this),this.i=null,t=zn(this,t),Cc(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Oc(t,e,n){Ac(t,e),0<n.length&&(t.i=null,t.g.set(zn(t,e),qo(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;i[r]!==""&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function zn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Tm(t,e){e&&!t.j&&(Gt(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Ac(this,i),Oc(this,s,n))},t)),t.j=e}var Sm=class{constructor(t,e){this.h=t,this.g=e}};function Nc(t){this.l=t||km,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ea&&H.g.Ea()&&H.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var km=10;function Rc(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Dc(t){return t.h?1:t.g?t.g.size:0}function vo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function oa(t,e){t.g?t.g.add(e):t.h=e}function Lc(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Nc.prototype.cancel=function(){if(this.i=Pc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Pc(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return qo(t.i)}function aa(){}aa.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)};aa.prototype.parse=function(t){return H.JSON.parse(t,void 0)};function Am(){this.g=new aa}function Cm(t,e,n){const i=n||"";try{sa(t,function(s,r){let o=s;Bi(s)&&(o=Qo(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function Om(t,e){const n=new lr;if(H.Image){const i=new Image;i.onload=ds(ms,n,i,"TestLoadImage: loaded",!0,e),i.onerror=ds(ms,n,i,"TestLoadImage: error",!1,e),i.onabort=ds(ms,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=ds(ms,n,i,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function ms(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Gi(t){this.l=t.$b||null,this.j=t.ib||!1}Pe(Gi,ta);Gi.prototype.g=function(){return new gr(this.l,this.j)};Gi.prototype.i=function(t){return function(){return t}}({});function gr(t,e){ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=la,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pe(gr,ke);var la=0;N=gr.prototype;N.open=function(t,e){if(this.readyState!=la)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bi(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||H).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ki(this)),this.readyState=la};N.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof H.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Mc(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Mc(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}N.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ki(this):bi(this),this.readyState==3&&Mc(this)}};N.Ua=function(t){this.g&&(this.response=this.responseText=t,Ki(this))};N.Ta=function(t){this.g&&(this.response=t,Ki(this))};N.ha=function(){this.g&&Ki(this)};function Ki(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bi(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(gr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Nm=H.JSON.parse;function we(t){ke.call(this),this.headers=new Kn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Uc,this.K=this.L=!1}Pe(we,ke);var Uc="",Rm=/^https?$/i,Dm=["POST","PUT"];N=we.prototype;N.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mo.g(),this.C=this.u?rl(this.u):rl(mo),this.g.onreadystatechange=De(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){ll(this,r);return}t=n||"";const s=new Kn(this.headers);i&&sa(i,function(r,o){s.set(o,r)}),i=Wg(s.T()),n=H.FormData&&t instanceof H.FormData,!(0<=$u(Dm,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Bc(this),0<this.B&&((this.K=Lm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=De(this.pa,this)):this.A=ea(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){ll(this,r)}};function Lm(t){return Bn&&Xg()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Pm(t){return t.toLowerCase()=="content-type"}N.pa=function(){typeof Wo!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Le(this,"timeout"),this.abort(8))};function ll(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Vc(t),mr(t)}function Vc(t){t.D||(t.D=!0,Le(t,"complete"),Le(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Le(this,"complete"),Le(this,"abort"),mr(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),mr(this,!0)),we.Z.M.call(this)};N.Fa=function(){this.s||(this.F||this.v||this.l?Fc(this):this.cb())};N.cb=function(){Fc(this)};function Fc(t){if(t.h&&typeof Wo!="undefined"&&(!t.C[1]||It(t)!=4||t.ba()!=2)){if(t.v&&It(t)==4)ea(t.Fa,0,t);else if(Le(t,"readystatechange"),It(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(kc)[1]||null;if(!s&&H.self&&H.self.location){var r=H.self.location.protocol;s=r.substr(0,r.length-1)}i=!Rm.test(s?s.toLowerCase():"")}n=i}if(n)Le(t,"complete"),Le(t,"success");else{t.m=6;try{var o=2<It(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Vc(t)}}finally{mr(t)}}}}function mr(t,e){if(t.g){Bc(t);const n=t.g,i=t.C[0]?Rs:null;t.g=null,t.C=null,e||Le(t,"ready");try{n.onreadystatechange=i}catch{}}}function Bc(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function It(t){return t.g?t.g.readyState:0}N.ba=function(){try{return 2<It(this)?this.g.status:-1}catch{return-1}};N.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Nm(e)}};function ul(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Uc:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Da=function(){return this.m};N.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Mm(t){let e="";return Go(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function ua(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Mm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):le(t,e,n))}function oi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function jc(t){this.za=0,this.l=[],this.h=new lr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=oi("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=oi("baseRetryDelayMs",5e3,t),this.$a=oi("retryDelaySeedMs",1e4,t),this.Ya=oi("forwardChannelMaxRetries",2,t),this.ra=oi("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Nc(t&&t.concurrentRequestLimit),this.Ca=new Am,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}N=jc.prototype;N.ma=8;N.G=1;function ca(t){if(Hc(t),t.G==3){var e=t.V++,n=St(t.F);le(n,"SID",t.J),le(n,"RID",e),le(n,"TYPE","terminate"),zi(t,n),e=new Wi(t,t.h,e,void 0),e.K=2,e.v=dr(St(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=Yc(e.l,null),e.g.ea(e.v)),e.F=Date.now(),qi(e)}zc(t)}N.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function pr(t){t.g&&(fa(t),t.g.cancel(),t.g=null)}function Hc(t){pr(t),t.u&&(H.clearTimeout(t.u),t.u=null),Fs(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function Xr(t,e){t.l.push(new Sm(t.Za++,e)),t.G==3&&yr(t)}function yr(t){Rc(t.i)||t.m||(t.m=!0,Zo(t.Ha,t),t.C=0)}function Um(t,e){return Dc(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Hi(De(t.Ha,t,e),Kc(t,t.C)),t.C++,!0)}N.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Wi(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=tc(r),nc(r,this.P)):r=this.P),this.o===null&&(s.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xc(this,s,e),n=St(this.F),le(n,"RID",t),le(n,"CVER",22),this.D&&le(n,"X-HTTP-Session-Id",this.D),zi(this,n),this.o&&r&&ua(n,this.o,r),oa(this.i,s),this.Ra&&le(n,"TYPE","init"),this.ja?(le(n,"$req",e),le(n,"SID","null"),s.$=!0,yo(s,n,null)):yo(s,n,e),this.G=2}}else this.G==3&&(t?cl(this,t):this.l.length==0||Rc(this.i)||cl(this))};function cl(t,e){var n;e?n=e.m:n=t.V++;const i=St(t.F);le(i,"SID",t.J),le(i,"RID",n),le(i,"AID",t.U),zi(t,i),t.o&&t.s&&ua(i,t.o,t.s),n=new Wi(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=xc(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),oa(t.i,n),yo(n,i,e)}function zi(t,e){t.j&&sa({},function(n,i){le(e,i,n)})}function xc(t,e,n){n=Math.min(t.l.length,n);var i=t.j?De(t.j.Oa,t.j,t):null;e:{var s=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let u=s[l].h;const h=s[l].g;if(u-=r,0>u)r=Math.max(0,s[l].h-100),a=!1;else try{Cm(h,o,"req"+u+"_")}catch{i&&i(h)}}if(a){i=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function Wc(t){t.g||t.u||(t.Y=1,Zo(t.Ga,t),t.A=0)}function ha(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Hi(De(t.Ga,t),Kc(t,t.A)),t.A++,!0)}N.Ga=function(){if(this.u=null,qc(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Hi(De(this.bb,this),t)}};N.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Be(10),pr(this),qc(this))};function fa(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function qc(t){t.g=new Wi(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=St(t.oa);le(e,"RID","rpc"),le(e,"SID",t.J),le(e,"CI",t.N?"0":"1"),le(e,"AID",t.U),zi(t,e),le(e,"TYPE","xmlhttp"),t.o&&t.s&&ua(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=dr(St(e)),n.s=null,n.U=!0,Ec(n,t)}N.ab=function(){this.v!=null&&(this.v=null,pr(this),ha(this),Be(19))};function Fs(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function Gc(t,e){var n=null;if(t.g==e){Fs(t),fa(t),t.g=null;var i=2}else if(vo(t.i,e))n=e.D,Lc(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=ur(),Le(i,new _c(i,n,e,s)),yr(t)}else Wc(t);else if(s=e.o,s==3||s==0&&0<t.I||!(i==1&&Um(t,e)||i==2&&ha(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:en(t,5);break;case 4:en(t,10);break;case 3:en(t,6);break;default:en(t,2)}}}function Kc(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function en(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=De(t.jb,t);n||(n=new ln("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Ms(n,"https"),dr(n)),Om(n.toString(),i)}else Be(2);t.G=0,t.j&&t.j.va(e),zc(t),Hc(t)}N.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Be(2)):(this.h.info("Failed to ping google.com"),Be(1))};function zc(t){t.G=0,t.I=-1,t.j&&((Pc(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,qo(t.l),t.l.length=0),t.j.ua())}function Xc(t,e,n){let i=ym(n);if(i.i!="")e&&Us(i,e+"."+i.i),Vs(i,i.m);else{const s=H.location;i=_m(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Go(t.aa,function(s,r){le(i,r,s)}),e=t.D,n=t.sa,e&&n&&le(i,e,n),le(i,"VER",t.ma),zi(t,i),i}function Yc(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new we(new Gi({ib:!0})):new we(t.qa),e.L=t.H,e}function Jc(){}N=Jc.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Oa=function(){};function Bs(){if(Bn&&!(10<=Number(Yg)))throw Error("Environmental error: no available transport.")}Bs.prototype.g=function(t,e){return new Ye(t,e)};function Ye(t,e){ke.call(this),this.g=new jc(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ds(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ds(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xn(this)}Pe(Ye,ke);Ye.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Zo(De(t.hb,t,e))),Be(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Xc(t,null,t.W),yr(t)};Ye.prototype.close=function(){ca(this.g)};Ye.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Xr(this.g,e)}else this.v?(e={},e.__data__=Qo(t),Xr(this.g,e)):Xr(this.g,t)};Ye.prototype.M=function(){this.g.j=null,delete this.j,ca(this.g),delete this.g,Ye.Z.M.call(this)};function Qc(t){na.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Pe(Qc,na);function Zc(){ia.call(this),this.status=1}Pe(Zc,ia);function Xn(t){this.g=t}Pe(Xn,Jc);Xn.prototype.xa=function(){Le(this.g,"a")};Xn.prototype.wa=function(t){Le(this.g,new Qc(t))};Xn.prototype.va=function(t){Le(this.g,new Zc(t))};Xn.prototype.ua=function(){Le(this.g,"b")};Bs.prototype.createWebChannel=Bs.prototype.g;Ye.prototype.send=Ye.prototype.u;Ye.prototype.open=Ye.prototype.m;Ye.prototype.close=Ye.prototype.close;cr.NO_ERROR=0;cr.TIMEOUT=8;cr.HTTP_ERROR=6;vc.COMPLETE="complete";wc.EventType=xi;xi.OPEN="a";xi.CLOSE="b";xi.ERROR="c";xi.MESSAGE="d";ke.prototype.listen=ke.prototype.N;we.prototype.listenOnce=we.prototype.O;we.prototype.getLastError=we.prototype.La;we.prototype.getLastErrorCode=we.prototype.Da;we.prototype.getStatus=we.prototype.ba;we.prototype.getResponseJson=we.prototype.Qa;we.prototype.getResponseText=we.prototype.ga;we.prototype.send=we.prototype.ea;var Vm=function(){return new Bs},Fm=function(){return ur()},Yr=cr,Bm=vc,jm=vn,hl={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Hm=Gi,ps=wc,xm=we;const fl="@firebase/firestore";/**
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
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
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
 */let Yn="9.6.7";/**
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
 */const un=new Uo("@firebase/firestore");function dl(){return un.logLevel}function U(t,...e){if(un.logLevel<=ne.DEBUG){const n=e.map(da);un.debug(`Firestore (${Yn}): ${t}`,...n)}}function cn(t,...e){if(un.logLevel<=ne.ERROR){const n=e.map(da);un.error(`Firestore (${Yn}): ${t}`,...n)}}function gl(t,...e){if(un.logLevel<=ne.WARN){const n=e.map(da);un.warn(`Firestore (${Yn}): ${t}`,...n)}}function da(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${Yn}) INTERNAL ASSERTION FAILED: `+t;throw cn(e),new Error(e)}function Ie(t,e){t||te()}function ae(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Wm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class Gm{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new tn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new tn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ie(typeof i.accessToken=="string"),new Wm(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new He(e)}}class Km{constructor(e,n,i){this.type="FirstParty",this.user=He.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class zm{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new Km(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ym{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const i=r=>{r.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?s(r):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.p=n.token,new Xm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class $c{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.I(i),this.T=i=>n.writeSequenceNumber(i))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function Jm(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */$c.A=-1;class eh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=Jm(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function oe(t,e){return t<e?-1:t>e?1:0}function jn(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
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
 */class et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new et(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Te(e)}static min(){return new Te(new et(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function ml(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function th(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ti{constructor(e,n,i){n===void 0?n=0:n>e.length&&te(),i===void 0?i=e.length-n:i>e.length-n&&te(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Ti.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ti?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends Ti{construct(e,n,i){return new fe(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new q(T.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const Qm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xe extends Ti{construct(e,n,i){return new xe(e,n,i)}static isValidIdentifier(e){return Qm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xe(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new q(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new q(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new q(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xe(n)}static emptyPath(){return new xe([])}}/**
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
 */class wo{constructor(e){this.fields=e,e.sort(xe.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return jn(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new kt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const Zm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hn(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=Zm.exec(t);if(Ie(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Si(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
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
 */function $m(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function js(t){const e=hn(t.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
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
 */class ep{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ki{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ki("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ki&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Yi(t){return t==null}function Hs(t){return t===0&&1/t==-1/0}function tp(t){return typeof t=="number"&&Number.isInteger(t)&&!Hs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(fe.fromString(e))}static fromName(e){return new Y(fe.fromString(e).popFirst(5))}static empty(){return new Y(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new fe(e.slice()))}}function Hn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$m(t)?4:10:te()}function dt(t,e){if(t===e)return!0;const n=Hn(t);if(n!==Hn(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return js(t).isEqual(js(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=hn(i.timestampValue),o=hn(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Si(i.bytesValue).isEqual(Si(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ne(i.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(i.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ne(i.integerValue)===Ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=Ne(i.doubleValue),o=Ne(s.doubleValue);return r===o?Hs(r)===Hs(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return jn(t.arrayValue.values||[],e.arrayValue.values||[],dt);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(ml(r)!==ml(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!dt(r[a],o[a])))return!1;return!0}(t,e);default:return te()}}function Ai(t,e){return(t.values||[]).find(n=>dt(n,e))!==void 0}function xn(t,e){if(t===e)return 0;const n=Hn(t),i=Hn(e);if(n!==i)return oe(n,i);switch(n){case 0:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=Ne(s.integerValue||s.doubleValue),a=Ne(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return pl(t.timestampValue,e.timestampValue);case 4:return pl(js(t),js(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,r){const o=Si(s),a=Si(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=oe(o[l],a[l]);if(u!==0)return u}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=oe(Ne(s.latitude),Ne(r.latitude));return o!==0?o:oe(Ne(s.longitude),Ne(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=xn(o[l],a[l]);if(u)return u}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){const o=s.fields||{},a=Object.keys(o),l=r.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const c=oe(a[h],u[h]);if(c!==0)return c;const f=xn(o[a[h]],l[u[h]]);if(f!==0)return f}return oe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw te()}}function pl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=hn(t),i=hn(e),s=oe(n.seconds,i.seconds);return s!==0?s:oe(n.nanos,i.nanos)}function Dn(t){return Io(t)}function Io(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=hn(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Si(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Y.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Io(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Io(i.fields[a])}`;return r+"}"}(t.mapValue):te();var e,n}function Eo(t){return!!t&&"integerValue"in t}function ga(t){return!!t&&"arrayValue"in t}function Is(t){return!!t&&"mapValue"in t}function gi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xi(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=gi(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gi(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Is(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gi(n)}setAll(e){let n=xe.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=gi(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Is(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Is(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Xi(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new ut(gi(this.value))}}function nh(t){const e=[];return Xi(t.fields,(n,i)=>{const s=new xe([n]);if(Is(i)){const r=nh(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new wo(e)}/**
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
 */class tt{constructor(e,n,i,s,r,o){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.data=r,this.documentState=o}static newInvalidDocument(e){return new tt(e,0,Te.min(),Te.min(),ut.empty(),0)}static newFoundDocument(e,n,i){return new tt(e,1,n,Te.min(),i,0)}static newNoDocument(e,n){return new tt(e,2,n,Te.min(),ut.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,Te.min(),ut.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class np{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function yl(t,e=null,n=[],i=[],s=null,r=null,o=null){return new np(t,e,n,i,s,r,o)}function ma(t){const e=ae(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>{return(s=i).field.canonicalString()+s.op.toString()+Dn(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Yi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Dn(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Dn(i)).join(",")),e.P=n}return e.P}function ip(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${Dn(i.value)}`;var i}).join(", ")}]`),Yi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Dn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Dn(n)).join(",")),`Target(${e})`}function pa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!hp(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!dt(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vl(t.startAt,e.startAt)&&vl(t.endAt,e.endAt)}class We extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.v(e,n,i):new sp(e,n,i):n==="array-contains"?new ap(e,i):n==="in"?new lp(e,i):n==="not-in"?new up(e,i):n==="array-contains-any"?new cp(e,i):new We(e,n,i)}static v(e,n,i){return n==="in"?new rp(e,i):new op(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.V(xn(n,this.value)):n!==null&&Hn(this.value)===Hn(n)&&this.V(xn(n,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class sp extends We{constructor(e,n,i){super(e,n,i),this.key=Y.fromName(i.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.V(n)}}class rp extends We{constructor(e,n){super(e,"in",n),this.keys=ih("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class op extends We{constructor(e,n){super(e,"not-in",n),this.keys=ih("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ih(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>Y.fromName(i.referenceValue))}class ap extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ga(n)&&Ai(n.arrayValue,this.value)}}class lp extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ai(this.value.arrayValue,n)}}class up extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ai(this.value.arrayValue,n)}}class cp extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ga(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Ai(this.value.arrayValue,i))}}class xs{constructor(e,n){this.position=e,this.inclusive=n}}class mi{constructor(e,n="asc"){this.field=e,this.dir=n}}function hp(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function _l(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=Y.comparator(Y.fromName(o.referenceValue),n.key):i=xn(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function vl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class _r{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.D=null,this.C=null,this.startAt,this.endAt}}function fp(t,e,n,i,s,r,o,a){return new _r(t,e,n,i,s,r,o,a)}function dp(t){return new _r(t)}function gp(t){return!Yi(t.limit)&&t.limitType==="F"}function mp(t){return!Yi(t.limit)&&t.limitType==="L"}function pp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function yp(t){for(const e of t.filters)if(e.S())return e.field;return null}function _p(t){return t.collectionGroup!==null}function Ci(t){const e=ae(t);if(e.D===null){e.D=[];const n=yp(e),i=pp(e);if(n!==null&&i===null)n.isKeyField()||e.D.push(new mi(n)),e.D.push(new mi(xe.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.D.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new mi(xe.keyField(),r))}}}return e.D}function Ws(t){const e=ae(t);if(!e.C)if(e.limitType==="F")e.C=yl(e.path,e.collectionGroup,Ci(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Ci(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new mi(r.field,o))}const i=e.endAt?new xs(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new xs(e.startAt.position,!e.startAt.inclusive):null;e.C=yl(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.C}function vp(t,e,n){return new _r(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sh(t,e){return pa(Ws(t),Ws(e))&&t.limitType===e.limitType}function rh(t){return`${ma(Ws(t))}|lt:${t.limitType}`}function wl(t){return`Query(target=${ip(Ws(t))}; limitType=${t.limitType})`}function oh(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Y.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=_l(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,Ci(n),i)||n.endAt&&!function(s,r,o){const a=_l(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,Ci(n),i))}(t,e)}function wp(t){return(e,n)=>{let i=!1;for(const s of Ci(t)){const r=Ip(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function Ip(t,e,n){const i=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?xn(a,l):te()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return te()}}/**
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
 */function ah(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hs(e)?"-0":e}}function lh(t){return{integerValue:""+t}}function Ep(t,e){return tp(e)?lh(e):ah(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class vr{constructor(){this._=void 0}}function bp(t,e,n){return t instanceof qs?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof Oi?ch(t,e):t instanceof Ni?hh(t,e):function(i,s){const r=uh(i,s),o=Il(r)+Il(i.k);return Eo(r)&&Eo(i.k)?lh(o):ah(i.O,o)}(t,e)}function Tp(t,e,n){return t instanceof Oi?ch(t,e):t instanceof Ni?hh(t,e):n}function uh(t,e){return t instanceof Gs?Eo(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class qs extends vr{}class Oi extends vr{constructor(e){super(),this.elements=e}}function ch(t,e){const n=fh(e);for(const i of t.elements)n.some(s=>dt(s,i))||n.push(i);return{arrayValue:{values:n}}}class Ni extends vr{constructor(e){super(),this.elements=e}}function hh(t,e){let n=fh(e);for(const i of t.elements)n=n.filter(s=>!dt(s,i));return{arrayValue:{values:n}}}class Gs extends vr{constructor(e,n){super(),this.O=e,this.k=n}}function Il(t){return Ne(t.integerValue||t.doubleValue)}function fh(t){return ga(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Sp(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Oi&&i instanceof Oi||n instanceof Ni&&i instanceof Ni?jn(n.elements,i.elements,dt):n instanceof Gs&&i instanceof Gs?dt(n.k,i.k):n instanceof qs&&i instanceof qs}(t.transform,e.transform)}class kp{constructor(e,n){this.version=e,this.transformResults=n}}class Ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Es(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wr{}function Ap(t,e,n){t instanceof Ir?function(i,s,r){const o=i.value.clone(),a=Tl(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ji?function(i,s,r){if(!Es(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Tl(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(dh(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function bo(t,e,n){t instanceof Ir?function(i,s,r){if(!Es(i.precondition,s))return;const o=i.value.clone(),a=Sl(i.fieldTransforms,r,s);o.setAll(a),s.convertToFoundDocument(bl(s),o).setHasLocalMutations()}(t,e,n):t instanceof Ji?function(i,s,r){if(!Es(i.precondition,s))return;const o=Sl(i.fieldTransforms,r,s),a=s.data;a.setAll(dh(i)),a.setAll(o),s.convertToFoundDocument(bl(s),a).setHasLocalMutations()}(t,e,n):function(i,s){Es(i.precondition,s)&&s.convertToNoDocument(Te.min())}(t,e)}function Cp(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=uh(i.transform,s||null);r!=null&&(n==null&&(n=ut.empty()),n.set(i.field,r))}return n||null}function El(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&jn(n,i,(s,r)=>Sp(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function bl(t){return t.isFoundDocument()?t.version:Te.min()}class Ir extends wr{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}}class Ji extends wr{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}}function dh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Tl(t,e,n){const i=new Map;Ie(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,Tp(o,a,n[s]))}return i}function Sl(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,bp(r,o,e))}return i}class Op extends wr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Np extends wr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */var _e,Z;function Rp(t){switch(t){default:return te();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Dp(t){if(t===void 0)return cn("GRPC error has no .code"),T.UNKNOWN;switch(t){case _e.OK:return T.OK;case _e.CANCELLED:return T.CANCELLED;case _e.UNKNOWN:return T.UNKNOWN;case _e.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case _e.INTERNAL:return T.INTERNAL;case _e.UNAVAILABLE:return T.UNAVAILABLE;case _e.UNAUTHENTICATED:return T.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case _e.NOT_FOUND:return T.NOT_FOUND;case _e.ALREADY_EXISTS:return T.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return T.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case _e.ABORTED:return T.ABORTED;case _e.OUT_OF_RANGE:return T.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return T.UNIMPLEMENTED;case _e.DATA_LOSS:return T.DATA_LOSS;default:return te()}}(Z=_e||(_e={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Je{constructor(e,n){this.comparator=e,this.root=n||Re.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Re.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ys(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ys(this.root,e,this.comparator,!1)}getReverseIterator(){return new ys(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ys(this.root,e,this.comparator,!0)}}class ys{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Re{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:Re.RED,this.left=s!=null?s:Re.EMPTY,this.right=r!=null?r:Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Re(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Re.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Re(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Xe{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kl(this.data.getIterator())}getIteratorFrom(e){return new kl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class kl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const Lp=new Je(Y.comparator);function Al(){return Lp}const Pp=new Je(Y.comparator);function Cl(){return Pp}const Mp=new Je(Y.comparator),Up=new Xe(Y.comparator);function fn(...t){let e=Up;for(const n of t)e=e.add(n);return e}const Vp=new Xe(oe);function Fp(){return Vp}class Bp{constructor(e,n){this.databaseId=e,this.N=n}}function To(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jp(t,e){return t.N?e.toBase64():e.toUint8Array()}function Hp(t,e){return To(t,e.toTimestamp())}function Pn(t){return Ie(!!t),Te.fromTimestamp(function(e){const n=hn(e);return new et(n.seconds,n.nanos)}(t))}function gh(t,e){return function(n){return new fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function xp(t){const e=fe.fromString(t);return Ie(Zp(e)),e}function So(t,e){return gh(t.databaseId,e.path)}function Wp(t){const e=xp(t);return e.length===4?fe.emptyPath():Gp(e)}function qp(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gp(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ol(t,e,n){return{name:So(t,e),fields:n.value.mapValue.fields}}function Kp(t,e){let n;if(e instanceof Ir)n={update:Ol(t,e.key,e.value)};else if(e instanceof Op)n={delete:So(t,e.key)};else if(e instanceof Ji)n={update:Ol(t,e.key,e.data),updateMask:Qp(e.fieldMask)};else{if(!(e instanceof Np))return te();n={verify:So(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof qs)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Oi)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ni)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Gs)return{fieldPath:r.field.canonicalString(),increment:o.k};throw te()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Hp(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:te()}(t,e.precondition)),n}function zp(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?Pn(i.updateTime):Pn(s);return r.isEqual(Te.min())&&(r=Pn(s)),new kp(r,i.transformResults||[])}(n,e))):[]}function Xp(t){let e=Wp(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Ie(i===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=mh(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(c){return new mi(On(c.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(c.direction))}(h)));let a=null;n.limit&&(a=function(h){let c;return c=typeof h=="object"?h.value:h,Yi(c)?null:c}(n.limit));let l=null;n.startAt&&(l=function(h){const c=!!h.before,f=h.values||[];return new xs(f,c)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const c=!h.before,f=h.values||[];return new xs(f,c)}(n.endAt)),fp(e,s,o,r,a,"F",l,u)}function mh(t){return t?t.unaryFilter!==void 0?[Jp(t)]:t.fieldFilter!==void 0?[Yp(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>mh(e)).reduce((e,n)=>e.concat(n)):te():[]}function On(t){return xe.fromServerFormat(t.fieldPath)}function Yp(t){return We.create(On(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(t.fieldFilter.op),t.fieldFilter.value)}function Jp(t){switch(t.unaryFilter.op){case"IS_NAN":const e=On(t.unaryFilter.field);return We.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=On(t.unaryFilter.field);return We.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=On(t.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=On(t.unaryFilter.field);return We.create(s,"!=",{nullValue:"NULL_VALUE"});default:return te()}}function Qp(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Zp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */const $p="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ey{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,i)=>{n(e)})}static reject(e){return new k((n,i)=>{i(e)})}static waitFor(e){return new k((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=k.resolve(!1);for(const i of e)n=n.next(s=>s?k.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}}function Er(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ty{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&Ap(r,e,i[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&bo(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&bo(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const i=e.get(n.key),s=i;this.applyToLocalView(s),i.isValidDocument()||s.convertToNoDocument(Te.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fn())}isEqual(e){return this.batchId===e.batchId&&jn(this.mutations,e.mutations,(n,i)=>El(n,i))&&jn(this.baseMutations,e.baseMutations,(n,i)=>El(n,i))}}class ya{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){Ie(e.mutations.length===i.length);let s=Mp;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new ya(e,n,i,s)}}/**
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
 */class ny{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class iy{constructor(e){this.Ht=e}}function sy(t){const e=Xp({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vp(e,e.limit,"L"):e}/**
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
 */class ry{constructor(){this.xe=new oy}addToCollectionParentIndex(e,n){return this.xe.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.xe.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n,i){return k.resolve(fn())}getFieldIndex(e,n){return k.resolve(null)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}updateCollectionGroup(e,n,i){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class oy{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Xe(fe.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Xe(fe.comparator)).toArray()}}/**
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
 */class Wn{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new Wn(0)}static Je(){return new Wn(-1)}}/**
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
 */async function ph(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==$p)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Qi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s!==void 0){for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n])}else this.inner[i]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),!0;return!1}forEach(e){Xi(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return th(this.inner)}}/**
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
 */class ay{constructor(){this.changes=new Qi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?k.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ly{constructor(e,n,i){this.qn=e,this.gs=n,this.indexManager=i}ys(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,n).next(i=>this.ps(e,n,i))}ps(e,n,i){return this.qn.getEntry(e,n).next(s=>{for(const r of i)r.applyToLocalView(s);return s})}Is(e,n){e.forEach((i,s)=>{for(const r of n)r.applyToLocalView(s)})}Es(e,n){return this.qn.getEntries(e,n).next(i=>this.Ts(e,i).next(()=>i))}Ts(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(i=>this.Is(n,i))}As(e,n,i){return function(s){return Y.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Rs(e,n.path):_p(n)?this.Ps(e,n,i):this.bs(e,n,i)}Rs(e,n){return this.ys(e,new Y(n)).next(i=>{let s=Cl();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}Ps(e,n,i){const s=n.collectionGroup;let r=Cl();return this.indexManager.getCollectionParents(e,s).next(o=>k.forEach(o,a=>{const l=function(u,h){return new _r(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.bs(e,l,i).next(u=>{u.forEach((h,c)=>{r=r.insert(h,c)})})}).next(()=>r))}bs(e,n,i){let s;return this.qn.getAll(e,n.path,i).next(r=>(s=r,this.gs.getAllMutationBatchesAffectingQuery(e,n))).next(r=>{for(const o of r)for(const a of o.mutations){const l=a.key;let u=s.get(l);u==null&&(u=tt.newInvalidDocument(l),s=s.insert(l,u)),bo(a,u,o.localWriteTime),u.isFoundDocument()||(s=s.remove(l))}}).next(()=>(s.forEach((r,o)=>{oh(n,o)||(s=s.remove(r))}),s))}}/**
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
 */class _a{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.vs=i,this.Vs=s}static Ss(e,n){let i=fn(),s=fn();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new _a(e,n.fromCache,i,s)}}/**
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
 */class uy{Ds(e){this.Cs=e}As(e,n,i,s){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||i.isEqual(Te.min())?this.Ns(e,n):this.Cs.Es(e,s).next(r=>{const o=this.xs(n,r);return(gp(n)||mp(n))&&this.ks(n.limitType,o,s,i)?this.Ns(e,n):(dl()<=ne.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wl(n)),this.Cs.As(e,n,i).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}xs(e,n){let i=new Xe(wp(e));return n.forEach((s,r)=>{oh(e,r)&&(i=i.add(r))}),i}ks(e,n,i,s){if(i.size!==n.size)return!0;const r=e==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Ns(e,n){return dl()<=ne.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",wl(n)),this.Cs.As(e,n,Te.min())}}/**
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
 */class cy{constructor(e,n,i,s){this.persistence=e,this.Os=n,this.O=s,this.Ms=new Je(oe),this.$s=new Qi(r=>ma(r),pa),this.Fs=Te.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(i)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new ly(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function hy(t,e,n,i){return new cy(t,e,n,i)}async function yh(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.gs.getAllMutationBatches(i).next(r=>(s=r,n.Ls(e),n.gs.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=fn();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.Us.Es(i,l).next(u=>({qs:u,removedBatchIds:o,addedBatchIds:a}))})})}function fy(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Bs.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const h=l.batch,c=h.keys();let f=k.resolve();return c.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(p=>{const w=l.docVersions.get(g);Ie(w!==null),p.version.compareTo(w)<0&&(h.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),u.addEntry(p)))})}),f.next(()=>o.gs.removeMutationBatch(a,h))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.gs.performConsistencyCheck(i)).next(()=>n.Us.Es(i,s))})}function dy(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Un.getLastRemoteSnapshotVersion(n))}function gy(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.gs.getNextMutationBatchAfterBatchId(i,e)))}/**
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
 */class my{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,n){return k.resolve(this.Ws.get(n))}saveBundleMetadata(e,n){var i;return this.Ws.set(n.id,{id:(i=n).id,version:i.version,createTime:Pn(i.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.zs.get(n))}saveNamedQuery(e,n){return this.zs.set(n.name,function(i){return{name:i.name,query:sy(i.bundledQuery),readTime:Pn(i.readTime)}}(n)),k.resolve()}}/**
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
 */class py{constructor(){this.overlays=new Je(Y.comparator),this.Hs=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}saveOverlays(e,n,i){return i.forEach(s=>{this.Yt(e,n,s)}),k.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.Hs.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.Hs.delete(i)),k.resolve()}getOverlaysForCollection(e,n,i){const s=new Map,r=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return k.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new Je((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let h=r.get(u.largestBatchId);h===null&&(h=new Map,r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=new Map,l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(h,u)),!(a.size>=s)););return k.resolve(a)}Yt(e,n,i){if(i===null)return;const s=this.overlays.get(i.key);s!==null&&this.Hs.get(s.largestBatchId).delete(i.key),this.overlays=this.overlays.insert(i.key,new ny(n,i));let r=this.Hs.get(n);r===void 0&&(r=new Set,this.Hs.set(n,r)),r.add(i.key)}}/**
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
 */class va{constructor(){this.Js=new Xe(be.Ys),this.Xs=new Xe(be.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,n){const i=new be(e,n);this.Js=this.Js.add(i),this.Xs=this.Xs.add(i)}ti(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.ei(new be(e,n))}ni(e,n){e.forEach(i=>this.removeReference(i,n))}si(e){const n=new Y(new fe([])),i=new be(n,e),s=new be(n,e+1),r=[];return this.Xs.forEachInRange([i,s],o=>{this.ei(o),r.push(o.key)}),r}ii(){this.Js.forEach(e=>this.ei(e))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const n=new Y(new fe([])),i=new be(n,e),s=new be(n,e+1);let r=fn();return this.Xs.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new be(e,0),i=this.Js.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class be{constructor(e,n){this.key=e,this.oi=n}static Ys(e,n){return Y.comparator(e.key,n.key)||oe(e.oi,n.oi)}static Zs(e,n){return oe(e.oi,n.oi)||Y.comparator(e.key,n.key)}}/**
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
 */class yy{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.gs=[],this.ci=1,this.ui=new Xe(be.Ys)}checkEmpty(e){return k.resolve(this.gs.length===0)}addMutationBatch(e,n,i,s){const r=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new ty(r,n,i,s);this.gs.push(o);for(const a of s)this.ui=this.ui.add(new be(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.ai(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.hi(i),r=s<0?0:s;return k.resolve(this.gs.length>r?this.gs[r]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.gs.length===0?-1:this.ci-1)}getAllMutationBatches(e){return k.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new be(n,0),s=new be(n,Number.POSITIVE_INFINITY),r=[];return this.ui.forEachInRange([i,s],o=>{const a=this.ai(o.oi);r.push(a)}),k.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Xe(oe);return n.forEach(s=>{const r=new be(s,0),o=new be(s,Number.POSITIVE_INFINITY);this.ui.forEachInRange([r,o],a=>{i=i.add(a.oi)})}),k.resolve(this.li(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;Y.isDocumentKey(r)||(r=r.child(""));const o=new be(new Y(r),0);let a=new Xe(oe);return this.ui.forEachWhile(l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.oi)),!0)},o),k.resolve(this.li(a))}li(e){const n=[];return e.forEach(i=>{const s=this.ai(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ie(this.fi(n.batchId,"removed")===0),this.gs.shift();let i=this.ui;return k.forEach(n.mutations,s=>{const r=new be(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ui=i})}Qe(e){}containsKey(e,n){const i=new be(n,0),s=this.ui.firstAfterOrEqual(i);return k.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.gs.length,k.resolve()}fi(e,n){return this.hi(e)}hi(e){return this.gs.length===0?0:e-this.gs[0].batchId}ai(e){const n=this.hi(e);return n<0||n>=this.gs.length?null:this.gs[n]}}/**
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
 */class _y{constructor(e){this.di=e,this.docs=new Je(Y.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.di(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return k.resolve(i?i.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let i=Al();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():tt.newInvalidDocument(s))}),k.resolve(i)}getAll(e,n,i){let s=Al();const r=new Y(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||l.readTime.compareTo(i)<=0||(s=s.insert(l.key,l.mutableCopy()))}return k.resolve(s)}_i(e,n){return k.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new vy(this)}getSize(e){return k.resolve(this.size)}}class vy extends ay{constructor(e){super(),this.Tn=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Tn.addEntry(e,s)):this.Tn.removeEntry(i)}),k.waitFor(n)}getFromCache(e,n){return this.Tn.getEntry(e,n)}getAllFromCache(e,n){return this.Tn.getEntries(e,n)}}/**
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
 */class wy{constructor(e){this.persistence=e,this.wi=new Qi(n=>ma(n),pa),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.mi=0,this.gi=new va,this.targetCount=0,this.yi=Wn.He()}forEachTarget(e,n){return this.wi.forEach((i,s)=>n(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.mi&&(this.mi=n),k.resolve()}Ze(e){this.wi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.yi=new Wn(n),this.highestTargetId=n),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,n){return this.Ze(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Ze(n),k.resolve()}removeTargetData(e,n){return this.wi.delete(n.target),this.gi.si(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.wi.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.wi.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),k.waitFor(r).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const i=this.wi.get(n)||null;return k.resolve(i)}addMatchingKeys(e,n,i){return this.gi.ti(n,i),k.resolve()}removeMatchingKeys(e,n,i){this.gi.ni(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),k.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.gi.si(n),k.resolve()}getMatchingKeysForTargetId(e,n){const i=this.gi.ri(n);return k.resolve(i)}containsKey(e,n){return k.resolve(this.gi.containsKey(n))}}/**
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
 */class Iy{constructor(e,n){this.pi={},this.overlays={},this.Nn=new $c(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new wy(this),this.indexManager=new ry,this.qn=function(i){return new _y(i)}(i=>this.referenceDelegate.Ii(i)),this.O=new iy(n),this.Kn=new my(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new py,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.pi[e.toKey()];return i||(i=new yy(n,this.referenceDelegate),this.pi[e.toKey()]=i),i}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,n,i){U("MemoryPersistence","Starting transaction:",e);const s=new Ey(this.Nn.next());return this.referenceDelegate.Ei(),i(s).next(r=>this.referenceDelegate.Ti(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ai(e,n){return k.or(Object.values(this.pi).map(i=>()=>i.containsKey(e,n)))}}class Ey extends ey{constructor(e){super(),this.currentSequenceNumber=e}}class wa{constructor(e){this.persistence=e,this.Ri=new va,this.Pi=null}static bi(e){return new wa(e)}get vi(){if(this.Pi)return this.Pi;throw te()}addReference(e,n,i){return this.Ri.addReference(i,n),this.vi.delete(i.toString()),k.resolve()}removeReference(e,n,i){return this.Ri.removeReference(i,n),this.vi.add(i.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.vi.add(n.toString()),k.resolve()}removeTarget(e,n){this.Ri.si(n.targetId).forEach(s=>this.vi.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.vi.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Ei(){this.Pi=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.vi,i=>{const s=Y.fromPath(i);return this.Vi(e,s).next(r=>{r||n.removeEntry(s,Te.min())})}).next(()=>(this.Pi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Vi(e,n).next(i=>{i?this.vi.delete(n.toString()):this.vi.add(n.toString())})}Ii(e){return 0}Vi(e,n){return k.or([()=>k.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Nl{constructor(){this.activeTargetIds=Fp()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class by{constructor(){this._r=new Nl,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,n,i){this.wr[e]=n}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new Nl,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class Ty{mr(e){}shutdown(){}}/**
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
 */class Rl{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Sy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class ky{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}/**
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
 */class Ay extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.kr=n+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,n,i,s,r){const o=this.$r(e,n);U("RestConnection","Sending: ",o,i);const a={};return this.Fr(a,s,r),this.Br(e,o,a,i).then(l=>(U("RestConnection","Received: ",l),l),l=>{throw gl("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",i),l})}Lr(e,n,i,s,r){return this.Mr(e,n,i,s,r)}Fr(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+Yn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}$r(e,n){const i=Sy[e];return`${this.kr}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,n,i,s){return new Promise((r,o)=>{const a=new xm;a.listenOnce(Bm.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Yr.NO_ERROR:const u=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(u)),r(u);break;case Yr.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new q(T.DEADLINE_EXCEEDED,"Request time out"));break;case Yr.HTTP_ERROR:const h=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const c=a.getResponseJson().error;if(c&&c.status&&c.message){const f=function(g){const p=g.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(p)>=0?p:T.UNKNOWN}(c.status);o(new q(f,c.message))}else o(new q(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new q(T.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);a.send(n,"POST",l,i,15)})}Ur(e,n,i){const s=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Vm(),o=Fm(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Hm({})),this.Fr(a.initMessageHeaders,n,i),Gu()||zu()||Td()||Xu()||Sd()||Ku()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=s.join("");U("Connection","Creating WebChannel: "+l,a);const u=r.createWebChannel(l,a);let h=!1,c=!1;const f=new ky({Ar:p=>{c?U("Connection","Not sending because WebChannel is closed:",p):(h||(U("Connection","Opening WebChannel transport."),u.open(),h=!0),U("Connection","WebChannel sending:",p),u.send(p))},Rr:()=>u.close()}),g=(p,w,D)=>{p.listen(w,x=>{try{D(x)}catch(C){setTimeout(()=>{throw C},0)}})};return g(u,ps.EventType.OPEN,()=>{c||U("Connection","WebChannel transport opened.")}),g(u,ps.EventType.CLOSE,()=>{c||(c=!0,U("Connection","WebChannel transport closed"),f.Cr())}),g(u,ps.EventType.ERROR,p=>{c||(c=!0,gl("Connection","WebChannel transport errored:",p),f.Cr(new q(T.UNAVAILABLE,"The operation could not be completed")))}),g(u,ps.EventType.MESSAGE,p=>{var w;if(!c){const D=p.data[0];Ie(!!D);const x=D,C=x.error||((w=x[0])===null||w===void 0?void 0:w.error);if(C){U("Connection","WebChannel received error:",C);const O=C.status;let m=function(_){const G=_e[_];if(G!==void 0)return Dp(G)}(O),S=C.message;m===void 0&&(m=T.INTERNAL,S="Unknown error status: "+O+" with message "+C.message),c=!0,f.Cr(new q(m,S)),u.close()}else U("Connection","WebChannel received:",D),f.Nr(D)}}),g(o,jm.STAT_EVENT,p=>{p.stat===hl.PROXY?U("Connection","Detected buffering proxy"):p.stat===hl.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Dr()},0),f}}function Jr(){return typeof document!="undefined"?document:null}/**
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
 */function br(t){return new Bp(t,!0)}class _h{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Sn=e,this.timerId=n,this.qr=i,this.Kr=s,this.Gr=r,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const n=Math.floor(this.jr+this.Jr()),i=Math.max(0,Date.now()-this.Wr),s=Math.max(0,n-i);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.jr} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,s,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
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
 */class Cy{constructor(e,n,i,s,r,o,a,l){this.Sn=e,this.Xr=i,this.Zr=s,this.eo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new _h(e,n)}oo(){return this.state===1||this.state===5||this.co()}co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&this.so===null&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,n){this._o(),this.wo(),this.ro.cancel(),this.no++,e!==4?this.ro.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(cn(n.toString()),cn("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(n)}mo(){}auth(){this.state=1;const e=this.yo(this.no),n=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.no===n&&this.po(i,s)},i=>{e(()=>{const s=new q(T.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Io(s)})})}po(e,n){const i=this.yo(this.no);this.stream=this.Eo(e,n),this.stream.Pr(()=>{i(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(s=>{i(()=>this.Io(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return n=>{this.Sn.enqueueAndForget(()=>this.no===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Oy extends Cy{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.O=r,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,n){return this.eo.Ur("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const n=zp(e.writeResults,e.commitTime),i=Pn(e.commitTime);return this.listener.Vo(i,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.Po=!0,this.listener.So()}Do(){const e={};e.database=qp(this.O),this.fo(e)}vo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>Kp(this.O,i))};this.fo(n)}}/**
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
 */class Ny extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.eo=i,this.O=s,this.Co=!1}No(){if(this.Co)throw new q(T.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,n,i){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.eo.Mr(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(T.UNKNOWN,s.toString())})}Lr(e,n,i){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.eo.Lr(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(T.UNKNOWN,s.toString())})}terminate(){this.Co=!0}}class Ry{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){this.xo===0&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(e){this.state==="Online"?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,e==="Online"&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(cn(n),this.Oo=!1):U("OnlineStateTracker",n)}Lo(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}}/**
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
 */class Dy{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=r,this.jo.mr(o=>{i.enqueueAndForget(async()=>{$i(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ae(a);l.Ko.add(4),await Zi(l),l.Qo.set("Unknown"),l.Ko.delete(4),await Tr(l)}(this))})}),this.Qo=new Ry(i,s)}}async function Tr(t){if($i(t))for(const e of t.Go)await e(!0)}async function Zi(t){for(const e of t.Go)await e(!1)}function $i(t){return ae(t).Ko.size===0}async function vh(t,e,n){if(!Er(e))throw e;t.Ko.add(1),await Zi(t),t.Qo.set("Offline"),n||(n=()=>dy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.Ko.delete(1),await Tr(t)})}function wh(t,e){return e().catch(n=>vh(t,n,e))}async function Sr(t){const e=ae(t),n=Wt(e);let i=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;Ly(e);)try{const s=await gy(e.localStore,i);if(s===null){e.Uo.length===0&&n.ho();break}i=s.batchId,Py(e,s)}catch(s){await vh(e,s)}Ih(e)&&Eh(e)}function Ly(t){return $i(t)&&t.Uo.length<10}function Py(t,e){t.Uo.push(e);const n=Wt(t);n.co()&&n.bo&&n.vo(e.mutations)}function Ih(t){return $i(t)&&!Wt(t).oo()&&t.Uo.length>0}function Eh(t){Wt(t).start()}async function My(t){Wt(t).Do()}async function Uy(t){const e=Wt(t);for(const n of t.Uo)e.vo(n.mutations)}async function Vy(t,e,n){const i=t.Uo.shift(),s=ya.from(i,e,n);await wh(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Sr(t)}async function Fy(t,e){e&&Wt(t).bo&&await async function(n,i){if(s=i.code,Rp(s)&&s!==T.ABORTED){const r=n.Uo.shift();Wt(n).ao(),await wh(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Sr(n)}var s}(t,e),Ih(t)&&Eh(t)}async function Dl(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const i=$i(n);n.Ko.add(3),await Zi(n),i&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ko.delete(3),await Tr(n)}async function By(t,e){const n=ae(t);e?(n.Ko.delete(2),await Tr(n)):e||(n.Ko.add(2),await Zi(n),n.Qo.set("Unknown"))}function Wt(t){return t.Ho||(t.Ho=function(e,n,i){const s=ae(e);return s.No(),new Oy(n,s.eo,s.authCredentials,s.appCheckCredentials,s.O,i)}(t.datastore,t.asyncQueue,{Pr:My.bind(null,t),vr:Fy.bind(null,t),So:Uy.bind(null,t),Vo:Vy.bind(null,t)}),t.Go.push(async e=>{e?(t.Ho.ao(),await Sr(t)):(await t.Ho.stop(),t.Uo.length>0&&(U("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))})),t.Ho}/**
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
 */class Ia{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Ia(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bh(t,e){if(cn("AsyncQueue",`${e}: ${t}`),Er(t))return new q(T.UNAVAILABLE,`${e}: ${t}`);throw t}class jy{constructor(){this.queries=new Qi(e=>rh(e),sh),this.onlineState="Unknown",this.Zo=new Set}}function Hy(t){t.Zo.forEach(e=>{e.next()})}class xy{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new Qi(a=>rh(a),sh),this.Nc=new Map,this.xc=new Set,this.kc=new Je(Y.comparator),this.Oc=new Map,this.Mc=new va,this.$c={},this.Fc=new Map,this.Bc=Wn.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return this.Lc===!0}}async function Wy(t,e,n){const i=zy(t);try{const s=await function(r,o){const a=ae(r),l=et.now(),u=o.reduce((c,f)=>c.add(f.key),fn());let h;return a.persistence.runTransaction("Locally write mutations","readwrite",c=>a.Us.Es(c,u).next(f=>{h=f;const g=[];for(const p of o){const w=Cp(p,h.get(p.key));w!=null&&g.push(new Ji(p.key,w,nh(w.value.mapValue),Ln.exists(!0)))}return a.gs.addMutationBatch(c,l,g,o)})).then(c=>(c.applyToLocalDocumentSet(h),{batchId:c.batchId,changes:h}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.$c[r.currentUser.toKey()];l||(l=new Je(oe)),l=l.insert(o,a),r.$c[r.currentUser.toKey()]=l}(i,s.batchId,n),await kr(i,s.changes),await Sr(i.remoteStore)}catch(s){const r=bh(s,"Failed to persist write");n.reject(r)}}function Ll(t,e,n){const i=ae(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Cc.forEach((r,o)=>{const a=o.view.tc(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=ae(r);a.onlineState=o;let l=!1;a.queries.forEach((u,h)=>{for(const c of h.listeners)c.tc(o)&&(l=!0)}),l&&Hy(a)}(i.eventManager,e),s.length&&i.Dc.To(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function qy(t,e){const n=ae(t),i=e.batch.batchId;try{const s=await fy(n.localStore,e);Sh(n,i,null),Th(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await kr(n,s)}catch(s){await ph(s)}}async function Gy(t,e,n){const i=ae(t);try{const s=await function(r,o){const a=ae(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.gs.lookupMutationBatch(l,o).next(h=>(Ie(h!==null),u=h.keys(),a.gs.removeMutationBatch(l,h))).next(()=>a.gs.performConsistencyCheck(l)).next(()=>a.Us.Es(l,u))})}(i.localStore,e);Sh(i,e,n),Th(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await kr(i,s)}catch(s){await ph(s)}}function Th(t,e){(t.Fc.get(e)||[]).forEach(n=>{n.resolve()}),t.Fc.delete(e)}function Sh(t,e,n){const i=ae(t);let s=i.$c[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.$c[i.currentUser.toKey()]=s}}async function kr(t,e,n){const i=ae(t),s=[],r=[],o=[];i.Cc.isEmpty()||(i.Cc.forEach((a,l)=>{o.push(i.Uc(l,e,n).then(u=>{if(u){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),s.push(u);const h=_a.Ss(l.targetId,u);r.push(h)}}))}),await Promise.all(o),i.Dc.To(s),await async function(a,l){const u=ae(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>k.forEach(l,c=>k.forEach(c.vs,f=>u.persistence.referenceDelegate.addReference(h,c.targetId,f)).next(()=>k.forEach(c.Vs,f=>u.persistence.referenceDelegate.removeReference(h,c.targetId,f)))))}catch(h){if(!Er(h))throw h;U("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const c=h.targetId;if(!h.fromCache){const f=u.Ms.get(c),g=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(g);u.Ms=u.Ms.insert(c,p)}}}(i.localStore,r))}async function Ky(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const i=await yh(n.localStore,e);n.currentUser=e,function(s,r){s.Fc.forEach(o=>{o.forEach(a=>{a.reject(new q(T.CANCELLED,r))})}),s.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await kr(n,i.qs)}}function zy(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gy.bind(null,e),e}class Xy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=br(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return hy(this.persistence,new uy,e.initialUser,this.O)}jc(e){return new Iy(wa.bi,this.O)}Gc(e){return new by}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ll(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ky.bind(null,this.syncEngine),await By(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new jy}createDatastore(e){const n=br(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new Ay(s));var s;return function(r,o,a,l){return new Ny(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>Ll(this.syncEngine,a,0),o=Rl.Vt()?new Rl:new Ty,new Dy(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,u){const h=new xy(i,s,r,o,a,l);return u&&(h.Lc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ae(e);U("RemoteStore","RemoteStore shutting down."),n.Ko.add(5),await Zi(n),n.jo.shutdown(),n.Qo.set("Unknown")}(this.remoteStore)}}/**
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
 */class Jy{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=He.UNAUTHENTICATED,this.clientId=eh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{U("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(U("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=bh(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Qy(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await yh(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Zy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $y(t);U("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>Dl(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Dl(e.remoteStore,r)),t.onlineComponents=e}async function $y(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await Qy(t,new Xy)),t.offlineComponents}async function e_(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await Zy(t,new Yy)),t.onlineComponents}function t_(t){return e_(t).then(e=>e.syncEngine)}const Pl=new Map;/**
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
 */function kh(t,e,n){if(!n)throw new q(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function n_(t,e,n,i){if(e===!0&&i===!0)throw new q(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ml(t){if(!Y.isDocumentKey(t))throw new q(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ul(t){if(Y.isDocumentKey(t))throw new q(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ea(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function Vl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ea(t);throw new q(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Fl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,n_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ba{constructor(e,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fl({}),this._settingsFrozen=!1,e instanceof ki?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new q(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ki(s.options.projectId)}(e))}get app(){if(!this._app)throw new q(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new qm;switch(n.type){case"gapi":const i=n.client;return Ie(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new zm(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new q(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Pl.get(e);n&&(U("ComponentProvider","Removing Datastore"),Pl.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class ct{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class Ta{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ta(this.firestore,e,this._query)}}class Bt extends Ta{constructor(e,n,i){super(e,n,dp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new Y(e))}withConverter(e){return new Bt(this.firestore,e,this._path)}}function n0(t,e,...n){if(t=je(t),kh("collection","path",e),t instanceof ba){const i=fe.fromString(e,...n);return Ul(i),new Bt(t,null,i)}{if(!(t instanceof ct||t instanceof Bt))throw new q(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(fe.fromString(e,...n));return Ul(i),new Bt(t.firestore,null,i)}}function i0(t,e,...n){if(t=je(t),arguments.length===1&&(e=eh.R()),kh("doc","path",e),t instanceof ba){const i=fe.fromString(e,...n);return Ml(i),new ct(t,null,new Y(i))}{if(!(t instanceof ct||t instanceof Bt))throw new q(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(fe.fromString(e,...n));return Ml(i),new ct(t.firestore,t instanceof Bt?t.converter:null,new Y(i))}}/**
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
 */class i_{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new _h(this,"async_queue_retry"),this.yu=()=>{const n=Jr();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ro.Yr()};const e=Jr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const n=Jr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const n=new tn;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!Er(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const n=this.hu.then(()=>(this.wu=!0,e().catch(i=>{this._u=i,this.wu=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw cn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.wu=!1,i))));return this.hu=n,n}enqueueAfterDelay(e,n,i){this.pu(),this.gu.indexOf(e)>-1&&(n=0);const s=Ia.createAndSchedule(this,e,n,i,r=>this.Tu(r));return this.du.push(s),s}pu(){this._u&&te()}verifyOperationInProgress(){}async Au(){let e;do e=this.hu,await e;while(e!==this.hu)}Ru(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class Ah extends ba{constructor(e,n,i){super(e,n,i),this.type="firestore",this._queue=new i_,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Ch(this),this._firestoreClient.terminate()}}function s0(t=Zu()){return jo(t,"firestore").getImmediate()}function s_(t){return t._firestoreClient||Ch(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ch(t){var e;const n=t._freezeSettings(),i=function(s,r,o,a){return new ep(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Jy(t._authCredentials,t._appCheckCredentials,t._queue,i)}/**
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
 *//**
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
 */class Oh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ri{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ri(kt.fromBase64String(e))}catch(n){throw new q(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ri(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Nh{constructor(e){this._methodName=e}}/**
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
 */class Rh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const r_=/^__.*__$/;class o_{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Ji(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ir(e,this.data,n,this.fieldTransforms)}}function Dh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class Sa{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.O=i,this.ignoreUndefinedProperties=s,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new Sa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:i,Cu:!1});return s.Nu(e),s}xu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:i,Cu:!1});return s.vu(),s}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return Ks(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(e.length===0)throw this.Ou("Document fields must not be empty");if(Dh(this.Vu)&&r_.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class a_{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.O=i||br(e)}Fu(e,n,i,s=!1){return new Sa({Vu:e,methodName:n,$u:i,path:xe.emptyPath(),Cu:!1,Mu:s},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function l_(t){const e=t._freezeSettings(),n=br(t._databaseId);return new a_(t._databaseId,!!e.ignoreUndefinedProperties,n)}function u_(t,e,n,i,s,r={}){const o=t.Fu(r.merge||r.mergeFields?2:0,e,n,s);Uh("Data must be an object, but it was:",o,i);const a=Ph(i,o);let l,u;if(r.merge)l=new wo(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const c of r.mergeFields){const f=c_(e,c,n);if(!o.contains(f))throw new q(T.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);d_(h,f)||h.push(f)}l=new wo(h),u=o.fieldTransforms.filter(c=>l.covers(c.field))}else l=null,u=o.fieldTransforms;return new o_(new ut(a),l,u)}function Lh(t,e){if(Mh(t=je(t)))return Uh("Unsupported field value:",e,t),Ph(t,e);if(t instanceof Nh)return function(n,i){if(!Dh(i.Vu))throw i.Ou(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Ou(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&e.Vu!==4)throw e.Ou("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=Lh(o,i.ku(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=je(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ep(i.O,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=et.fromDate(n);return{timestampValue:To(i.O,s)}}if(n instanceof et){const s=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:To(i.O,s)}}if(n instanceof Rh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ri)return{bytesValue:jp(i.O,n._byteString)};if(n instanceof ct){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.Ou(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gh(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Ou(`Unsupported field value: ${Ea(n)}`)}(t,e)}function Ph(t,e){const n={};return th(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xi(t,(i,s)=>{const r=Lh(s,e.Du(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function Mh(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof Rh||t instanceof Ri||t instanceof ct||t instanceof Nh)}function Uh(t,e,n){if(!Mh(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Ea(n);throw i==="an object"?e.Ou(t+" a custom object"):e.Ou(t+" "+i)}}function c_(t,e,n){if((e=je(e))instanceof Oh)return e._internalPath;if(typeof e=="string")return f_(t,e);throw Ks("Field path arguments must be of type string or ",t,!1,void 0,n)}const h_=new RegExp("[~\\*/\\[\\]]");function f_(t,e,n){if(e.search(h_)>=0)throw Ks(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Oh(...e.split("."))._internalPath}catch{throw Ks(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ks(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new q(T.INVALID_ARGUMENT,a+t+l)}function d_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function g_(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}function r0(t,e,n){t=Vl(t,ct);const i=Vl(t.firestore,Ah),s=g_(t.converter,e,n);return m_(i,[u_(l_(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ln.none())])}function m_(t,e){return function(n,i){const s=new tn;return n.asyncQueue.enqueueAndForget(async()=>Wy(await t_(n),i,s)),s.promise}(s_(t),e)}(function(t,e=!0){(function(n){Yn=n})(Fi),Fn(new rn("firestore",(n,{options:i})=>{const s=n.getProvider("app").getImmediate(),r=new Ah(s,new Gm(n.getProvider("auth-internal")),new Ym(n.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r},"PUBLIC")),Ft(fl,"3.4.5",t),Ft(fl,"3.4.5","esm2017")})();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function ka(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Vh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const p_=Vh,Fh=new Mi("auth","Firebase",Vh());/**
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
 */const Bl=new Uo("@firebase/auth");function bs(t,...e){Bl.logLevel<=ne.ERROR&&Bl.error(`Auth (${Fi}): ${t}`,...e)}/**
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
 */function nt(t,...e){throw Aa(t,...e)}function ht(t,...e){return Aa(t,...e)}function y_(t,e,n){const i=Object.assign(Object.assign({},p_()),{[e]:n});return new Mi("auth","Firebase",i).create(e,{appName:t.name})}function Aa(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Fh.create(t,...e)}function V(t,e,...n){if(!t)throw Aa(e,...n)}function Et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bs(e),new Error(e)}function At(t,e){t||Et(e)}/**
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
 */const jl=new Map;function bt(t){At(t instanceof Function,"Expected a class definition");let e=jl.get(t);return e?(At(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jl.set(t,e),e)}/**
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
 */function __(t,e){const n=jo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Os(r,e!=null?e:{}))return s;nt(s,"already-initialized")}return n.initialize({options:e})}function v_(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(bt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function ko(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function w_(){return Hl()==="http:"||Hl()==="https:"}function Hl(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function I_(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(w_()||Ku()||"connection"in navigator)?navigator.onLine:!0}function E_(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class es{constructor(e,n){this.shortDelay=e,this.longDelay=n,At(n>e,"Short delay should be less than long delay!"),this.isMobile=Gu()||zu()}get(){return I_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ca(t,e){At(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Bh{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const b_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const T_=new es(3e4,6e4);function Jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wn(t,e,n,i,s={}){return jh(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Ui(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Bh.fetch()(Hh(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function jh(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},b_),e);try{const s=new S_(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Qr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Qr(t,"email-already-in-use",o);const h=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw y_(t,h,u);nt(t,h)}}catch(s){if(s instanceof yn)throw s;nt(t,"network-request-failed")}}async function ts(t,e,n,i,s={}){const r=await wn(t,e,n,i,s);return"mfaPendingCredential"in r&&nt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Hh(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Ca(t.config,s):`${t.config.apiScheme}://${s}`}class S_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ht(this.auth,"network-request-failed")),T_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qr(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=ht(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function k_(t,e){return wn(t,"POST","/v1/accounts:delete",e)}async function A_(t,e){return wn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function pi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
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
 */function o0(t,e=!1){return je(t).getIdToken(e)}async function C_(t,e=!1){const n=je(t),i=await n.getIdToken(e),s=Oa(i);V(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:pi(Zr(s.auth_time)),issuedAtTime:pi(Zr(s.iat)),expirationTime:pi(Zr(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Zr(t){return Number(t)*1e3}function Oa(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return bs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ed(n);return s?JSON.parse(s):(bs("Failed to decode base64 JWT payload"),null)}catch(s){return bs("Caught error parsing JWT payload as JSON",s),null}}function O_(t){const e=Oa(t);return V(e,"internal-error"),V(typeof e.exp!="undefined","internal-error"),V(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qn(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof yn&&N_(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function N_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class R_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pi(this.lastLoginAt),this.creationTime=pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zs(t){var e;const n=t.auth,i=await t.getIdToken(),s=await qn(t,A_(n,{idToken:i}));V(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?P_(r.providerUserInfo):[],a=L_(t.providerData,o),l=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a==null?void 0:a.length),h=l?u:!1,c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new xh(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,c)}async function D_(t){const e=je(t);await zs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function L_(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function P_(t){return t.map(e=>{var{providerId:n}=e,i=ka(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function M_(t,e){const n=await jh(t,{},async()=>{const i=Ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Hh(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bh.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken!="undefined","internal-error"),V(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):O_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await M_(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Di;return i&&(V(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(V(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(V(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Di,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
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
 */function Lt(t,e){V(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class nn{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=ka(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new R_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new xh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await qn(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return C_(this,e)}reload(){return D_(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await zs(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qn(this,k_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,u,h;const c=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,C=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:O,emailVerified:m,isAnonymous:S,providerData:_,stsTokenManager:G}=n;V(O&&G,e,"internal-error");const P=Di.fromJSON(this.name,G);V(typeof O=="string",e,"internal-error"),Lt(c,e.name),Lt(f,e.name),V(typeof m=="boolean",e,"internal-error"),V(typeof S=="boolean",e,"internal-error"),Lt(g,e.name),Lt(p,e.name),Lt(w,e.name),Lt(D,e.name),Lt(x,e.name),Lt(C,e.name);const B=new nn({uid:O,auth:e,email:f,emailVerified:m,displayName:c,isAnonymous:S,photoURL:p,phoneNumber:g,tenantId:w,stsTokenManager:P,createdAt:x,lastLoginAt:C});return _&&Array.isArray(_)&&(B.providerData=_.map(R=>Object.assign({},R))),D&&(B._redirectEventId=D),B}static async _fromIdTokenResponse(e,n,i=!1){const s=new Di;s.updateFromServerResponse(n);const r=new nn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await zs(r),r}}/**
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
 */class Wh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wh.type="NONE";const xl=Wh;/**
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
 */function Ts(t,e,n){return`firebase:${t}:${e}:${n}`}class Mn{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ts(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ts("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Mn(bt(xl),e,i);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||bt(xl);const o=Ts(i,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const c=nn._fromJSON(e,h);u!==r&&(a=c),r=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Mn(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Mn(r,e,i))}}/**
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
 */function Wl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xh(e))return"Blackberry";if(Yh(e))return"Webos";if(Na(e))return"Safari";if((e.includes("chrome/")||Gh(e))&&!e.includes("edge/"))return"Chrome";if(zh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function qh(t=Se()){return/firefox\//i.test(t)}function Na(t=Se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gh(t=Se()){return/crios\//i.test(t)}function Kh(t=Se()){return/iemobile/i.test(t)}function zh(t=Se()){return/android/i.test(t)}function Xh(t=Se()){return/blackberry/i.test(t)}function Yh(t=Se()){return/webos/i.test(t)}function Ar(t=Se()){return/iphone|ipad|ipod/i.test(t)}function U_(t=Se()){var e;return Ar(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function V_(){return Xu()&&document.documentMode===10}function Jh(t=Se()){return Ar(t)||zh(t)||Yh(t)||Xh(t)||/windows phone/i.test(t)||Kh(t)}function F_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Qh(t,e=[]){let n;switch(t){case"Browser":n=Wl(Se());break;case"Worker":n=`${Wl(Se())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fi}/${i}`}/**
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
 */class B_{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ql(this),this.idTokenSubscription=new ql(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bt(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Mn.create(this,e),!this._deleted)){if((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===r)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zs(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?je(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bt(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Mn.create(this,[bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Cr(t){return je(t)}class ql{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dd(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Ra{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,n){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}}async function j_(t,e){return wn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function H_(t,e){return ts(t,"POST","/v1/accounts:signInWithPassword",Jn(t,e))}async function Zh(t,e){return wn(t,"POST","/v1/accounts:sendOobCode",Jn(t,e))}async function x_(t,e){return Zh(t,e)}async function W_(t,e){return Zh(t,e)}/**
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
 */async function q_(t,e){return ts(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}async function G_(t,e){return ts(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}/**
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
 */class Li extends Ra{constructor(e,n,i,s=null){super("password",i);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Li(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Li(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return H_(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return q_(e,{email:this._email,oobCode:this._password});default:nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return j_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return G_(e,{idToken:n,email:this._email,oobCode:this._password});default:nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Un(t,e){return ts(t,"POST","/v1/accounts:signInWithIdp",Jn(t,e))}/**
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
 */const K_="http://localhost";class dn extends Ra{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=ka(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new dn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Un(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Un(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Un(e,n)}buildRequest(){const e={requestUri:K_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ui(n)}return e}}/**
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
 */function z_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function X_(t){const e=li(ui(t)).link,n=e?li(ui(e)).deep_link_id:null,i=li(ui(t)).deep_link_id;return(i?li(ui(i)).link:null)||i||n||e||t}class Da{constructor(e){var n,i,s,r,o,a;const l=li(ui(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(i=l.oobCode)!==null&&i!==void 0?i:null,c=z_((s=l.mode)!==null&&s!==void 0?s:null);V(u&&h&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=X_(e);try{return new Da(n)}catch{return null}}}/**
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
 */class Qn{constructor(){this.providerId=Qn.PROVIDER_ID}static credential(e,n){return Li._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Da.parseLink(n);return V(i,"argument-error"),Li._fromEmailAndCode(e,i.code,i.tenantId)}}Qn.PROVIDER_ID="password";Qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $h{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ns extends $h{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pt extends ns{constructor(){super("facebook.com")}static credential(e){return dn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pt.PROVIDER_ID="facebook.com";/**
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
 */class Mt extends ns{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return dn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Mt.credential(n,i)}catch{return null}}}Mt.GOOGLE_SIGN_IN_METHOD="google.com";Mt.PROVIDER_ID="google.com";/**
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
 */class Ut extends ns{constructor(){super("github.com")}static credential(e){return dn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
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
 */class Vt extends ns{constructor(){super("twitter.com")}static credential(e,n){return dn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Vt.credential(n,i)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
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
 */async function Y_(t,e){return ts(t,"POST","/v1/accounts:signUp",Jn(t,e))}/**
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
 */class gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await nn._fromIdTokenResponse(e,i,s),o=Gl(i);return new gn({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Gl(i);return new gn({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Gl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Xs extends yn{constructor(e,n,i,s){var r;super(n.code,n.message);this.operationType=i,this.user=s,Object.setPrototypeOf(this,Xs.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Xs(e,n,i,s)}}function ef(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Xs._fromErrorAndOperation(t,r,e,i):r})}async function J_(t,e,n=!1){const i=await qn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gn._forOperation(t,"link",i)}/**
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
 */async function Q_(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await qn(t,ef(i,s,e,t),n);V(r.idToken,i,"internal-error");const o=Oa(r.idToken);V(o,i,"internal-error");const{sub:a}=o;return V(t.uid===a,i,"user-mismatch"),gn._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&nt(i,"user-mismatch"),r}}/**
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
 */async function tf(t,e,n=!1){const i="signIn",s=await ef(t,i,e),r=await gn._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function Z_(t,e){return tf(Cr(t),e)}/**
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
 */function nf(t,e,n){var i;V(((i=n.url)===null||i===void 0?void 0:i.length)>0,t,"invalid-continue-uri"),V(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(V(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(V(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function a0(t,e,n){const i=je(t),s={requestType:"PASSWORD_RESET",email:e};n&&nf(i,s,n),await W_(i,s)}async function l0(t,e,n){const i=Cr(t),s=await Y_(i,{returnSecureToken:!0,email:e,password:n}),r=await gn._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function u0(t,e,n){return Z_(je(t),Qn.credential(e,n))}async function c0(t,e){const n=je(t),i=await t.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};e&&nf(n.auth,s,e);const{email:r}=await x_(n.auth,s);r!==t.email&&await t.reload()}/**
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
 */async function $_(t,e){return wn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function h0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=je(t),r={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await qn(i,$_(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}/**
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
 */function f0(t,e){return je(t).setPersistence(e)}const Ys="__sak";/**
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
 */class sf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ys,"1"),this.storage.removeItem(Ys),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ev(){const t=Se();return Na(t)||Ar(t)}const tv=1e3,nv=10;class rf extends sf{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ev()&&F_(),this.fallbackToPolling=Jh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);V_()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,nv):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},tv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rf.type="LOCAL";const iv=rf;/**
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
 */class of extends sf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}of.type="SESSION";const af=of;/**
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
 */function sv(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Or{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Or(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,r)),l=await sv(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Or.receivers=[];/**
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
 */function La(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class rv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=La("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ft(){return window}function ov(t){ft().location.href=t}/**
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
 */function lf(){return typeof ft().WorkerGlobalScope!="undefined"&&typeof ft().importScripts=="function"}async function av(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uv(){return lf()?self:null}/**
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
 */const uf="firebaseLocalStorageDb",cv=1,Js="firebaseLocalStorage",cf="fbase_key";class is{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nr(t,e){return t.transaction([Js],e?"readwrite":"readonly").objectStore(Js)}function hv(){const t=indexedDB.deleteDatabase(uf);return new is(t).toPromise()}function Ao(){const t=indexedDB.open(uf,cv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Js,{keyPath:cf})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Js)?e(i):(i.close(),await hv(),e(await Ao()))})})}async function Kl(t,e,n){const i=Nr(t,!0).put({[cf]:e,value:n});return new is(i).toPromise()}async function fv(t,e){const n=Nr(t,!1).get(e),i=await new is(n).toPromise();return i===void 0?null:i.value}function zl(t,e){const n=Nr(t,!0).delete(e);return new is(n).toPromise()}const dv=800,gv=3;class hf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ao(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>gv)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Or._getInstance(uv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await av(),!this.activeServiceWorker)return;this.sender=new rv(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ao();return await Kl(e,Ys,"1"),await zl(e,Ys),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Kl(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>fv(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Nr(s,!1).getAll();return new is(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hf.type="LOCAL";const mv=hf;/**
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
 */function pv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function yv(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=ht("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",pv().appendChild(i)})}function _v(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new es(3e4,6e4);/**
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
 */function vv(t,e){return e?bt(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Pa extends Ra{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Un(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Un(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Un(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wv(t){return tf(t.auth,new Pa(t),t.bypassAuthState)}function Iv(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),Q_(n,new Pa(t),t.bypassAuthState)}async function Ev(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),J_(n,new Pa(t),t.bypassAuthState)}/**
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
 */class ff{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wv;case"linkViaPopup":case"linkViaRedirect":return Ev;case"reauthViaPopup":case"reauthViaRedirect":return Iv;default:nt(this.auth,"internal-error")}}resolve(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bv=new es(2e3,1e4);class Nn extends ff{constructor(e,n,i,s,r){super(e,n,s,r);this.provider=i,this.authWindow=null,this.pollId=null,Nn.currentPopupAction&&Nn.currentPopupAction.cancel(),Nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const e=La();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,bv.get())};e()}}Nn.currentPopupAction=null;/**
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
 */const Tv="pendingRedirect",$r=new Map;class Sv extends ff{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=$r.get(this.auth._key());if(!e){try{const i=await kv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}$r.set(this.auth._key(),e)}return this.bypassAuthState||$r.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kv(t,e){const n=Cv(e),i=Av(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function Av(t){return bt(t._redirectPersistence)}function Cv(t){return Ts(Tv,t.config.apiKey,t.name)}async function Ov(t,e,n=!1){const i=Cr(t),s=vv(i,e),o=await new Sv(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Nv=10*60*1e3;class Rv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!df(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(ht(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Nv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xl(e))}saveEventToCache(e){this.cachedEventUids.add(Xl(e)),this.lastProcessedEventTime=Date.now()}}function Xl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function df({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return df(t);default:return!1}}/**
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
 */async function Lv(t,e={}){return wn(t,"GET","/v1/projects",e)}/**
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
 */const Pv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mv=/^https?/;async function Uv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Lv(t);for(const n of e)try{if(Vv(n))return}catch{}nt(t,"unauthorized-domain")}function Vv(t){const e=ko(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Mv.test(n))return!1;if(Pv.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Fv=new es(3e4,6e4);function Yl(){const t=ft().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Bv(t){return new Promise((e,n)=>{var i,s,r;function o(){Yl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yl(),n(ht(t,"network-request-failed"))},timeout:Fv.get()})}if((s=(i=ft().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((r=ft().gapi)===null||r===void 0?void 0:r.load)o();else{const a=_v("iframefcb");return ft()[a]=()=>{gapi.load?o():n(ht(t,"network-request-failed"))},yv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ss=null,e})}let Ss=null;function jv(t){return Ss=Ss||Bv(t),Ss}/**
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
 */const Hv=new es(5e3,15e3),xv="__/auth/iframe",Wv="emulator/auth/iframe",qv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kv(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ca(e,Wv):`https://${t.config.authDomain}/${xv}`,i={apiKey:e.apiKey,appName:t.name,v:Fi},s=Gv.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Ui(i).slice(1)}`}async function zv(t){const e=await jv(t),n=ft().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:Kv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qv,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=ht(t,"network-request-failed"),a=ft().setTimeout(()=>{r(o)},Hv.get());function l(){ft().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Xv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yv=500,Jv=600,Qv="_blank",Zv="http://localhost";class Jl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $v(t,e,n,i=Yv,s=Jv){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Xv),{width:i.toString(),height:s.toString(),top:r,left:o}),u=Se().toLowerCase();n&&(a=Gh(u)?Qv:n),qh(u)&&(e=e||Zv,l.scrollbars="yes");const h=Object.entries(l).reduce((f,[g,p])=>`${f}${g}=${p},`,"");if(U_(u)&&a!=="_self")return ew(e||"",a),new Jl(null);const c=window.open(e||"",a,h);V(c,t,"popup-blocked");try{c.focus()}catch{}return new Jl(c)}function ew(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const tw="__/auth/handler",nw="emulator/auth/handler";function Ql(t,e,n,i,s,r){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Fi,eventId:s};if(e instanceof $h){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Rd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(r||{}))o[l]=u}if(e instanceof ns){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${iw(t)}?${Ui(a).slice(1)}`}function iw({config:t}){return t.emulator?Ca(t,nw):`https://${t.authDomain}/${tw}`}/**
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
 */const eo="webStorageSupport";class sw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=af,this._completeRedirectFn=Ov}async _openPopup(e,n,i,s){var r;At((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Ql(e,n,i,ko(),s);return $v(e,o,La())}async _openRedirect(e,n,i,s){return await this._originValidation(e),ov(Ql(e,n,i,ko(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(At(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await zv(e),i=new Rv(e);return n.register("authEvent",s=>(V(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(eo,{type:eo},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[eo];o!==void 0&&n(!!o),nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Uv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jh()||Na()||Ar()}}const rw=sw;var Zl="@firebase/auth",$l="0.19.9";/**
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
 */class ow{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lw(t){Fn(new rn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(o=>{V(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),V(!(r==null?void 0:r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qh(t)},l=new B_(o,a);return v_(l,n),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Fn(new rn("auth-internal",e=>{const n=Cr(e.getProvider("auth").getImmediate());return(i=>new ow(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(Zl,$l,aw(t)),Ft(Zl,$l,"esm2017")}/**
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
 */function d0(t=Zu()){const e=jo(t,"auth");return e.isInitialized()?e.getImmediate():__(t,{popupRedirectResolver:rw,persistence:[mv,iv,af]})}lw("Browser");function uw(t,{delay:e=0,duration:n=400,easing:i=Su}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:r=>`opacity: ${r*s}`}}const{window:cw}=gd;function eu(t){let e,n,i,s,r,o,a,l,u,h,c,f,g,p,w,D,x,C=t[1].closeButton&&tu(t);var O=t[2];function m(S){return{}}return O&&(o=new O(m())),{c(){e=ee("div"),n=ee("div"),i=ee("div"),C&&C.c(),s=Ce(),r=ee("div"),o&&ve(o.$$.fragment),this.h()},l(S){e=se(S,"DIV",{class:!0,style:!0});var _=J(e);n=se(_,"DIV",{class:!0,style:!0});var G=J(n);i=se(G,"DIV",{class:!0,role:!0,"aria-modal":!0,"aria-label":!0,"aria-labelledby":!0,style:!0});var P=J(i);C&&C.l(P),s=Oe(P),r=se(P,"DIV",{class:!0,style:!0});var B=J(r);o&&mt(o.$$.fragment,B),B.forEach(A),P.forEach(A),G.forEach(A),_.forEach(A),this.h()},h(){v(r,"class",a=lt(t[1].classContent)+" svelte-g4wg3a"),v(r,"style",t[9]),he(r,"content",!t[0]),v(i,"class",l=lt(t[1].classWindow)+" svelte-g4wg3a"),v(i,"role","dialog"),v(i,"aria-modal","true"),v(i,"aria-label",u=t[1].ariaLabelledBy?null:t[1].ariaLabel||null),v(i,"aria-labelledby",h=t[1].ariaLabelledBy||null),v(i,"style",t[8]),he(i,"window",!t[0]),v(n,"class",f=lt(t[1].classWindowWrap)+" svelte-g4wg3a"),v(n,"style",t[7]),he(n,"wrap",!t[0]),v(e,"class",g=lt(t[1].classBg)+" svelte-g4wg3a"),v(e,"style",t[6]),he(e,"bg",!t[0])},m(S,_){K(S,e,_),$(e,n),$(n,i),C&&C.m(i,null),$(i,s),$(i,r),o&&pe(o,r,null),t[48](i),t[49](n),t[50](e),w=!0,D||(x=[ie(i,"introstart",function(){An(t[13])&&t[13].apply(this,arguments)}),ie(i,"outrostart",function(){An(t[14])&&t[14].apply(this,arguments)}),ie(i,"introend",function(){An(t[15])&&t[15].apply(this,arguments)}),ie(i,"outroend",function(){An(t[16])&&t[16].apply(this,arguments)}),ie(e,"mousedown",t[20]),ie(e,"mouseup",t[21])],D=!0)},p(S,_){if(t=S,t[1].closeButton?C?(C.p(t,_),_[0]&2&&L(C,1)):(C=tu(t),C.c(),L(C,1),C.m(i,s)):C&&(de(),F(C,1,1,()=>{C=null}),ge()),O!==(O=t[2])){if(o){de();const G=o;F(G.$$.fragment,1,0,()=>{ye(G,1)}),ge()}O?(o=new O(m()),ve(o.$$.fragment),L(o.$$.fragment,1),pe(o,r,null)):o=null}(!w||_[0]&2&&a!==(a=lt(t[1].classContent)+" svelte-g4wg3a"))&&v(r,"class",a),(!w||_[0]&512)&&v(r,"style",t[9]),_[0]&3&&he(r,"content",!t[0]),(!w||_[0]&2&&l!==(l=lt(t[1].classWindow)+" svelte-g4wg3a"))&&v(i,"class",l),(!w||_[0]&2&&u!==(u=t[1].ariaLabelledBy?null:t[1].ariaLabel||null))&&v(i,"aria-label",u),(!w||_[0]&2&&h!==(h=t[1].ariaLabelledBy||null))&&v(i,"aria-labelledby",h),(!w||_[0]&256)&&v(i,"style",t[8]),_[0]&3&&he(i,"window",!t[0]),(!w||_[0]&2&&f!==(f=lt(t[1].classWindowWrap)+" svelte-g4wg3a"))&&v(n,"class",f),(!w||_[0]&128)&&v(n,"style",t[7]),_[0]&3&&he(n,"wrap",!t[0]),(!w||_[0]&2&&g!==(g=lt(t[1].classBg)+" svelte-g4wg3a"))&&v(e,"class",g),(!w||_[0]&64)&&v(e,"style",t[6]),_[0]&3&&he(e,"bg",!t[0])},i(S){w||(L(C),o&&L(o.$$.fragment,S),sn(()=>{c||(c=fs(i,t[12],t[1].transitionWindowProps,!0)),c.run(1)}),sn(()=>{p||(p=fs(e,t[11],t[1].transitionBgProps,!0)),p.run(1)}),w=!0)},o(S){F(C),o&&F(o.$$.fragment,S),c||(c=fs(i,t[12],t[1].transitionWindowProps,!1)),c.run(0),p||(p=fs(e,t[11],t[1].transitionBgProps,!1)),p.run(0),w=!1},d(S){S&&A(e),C&&C.d(),o&&ye(o),t[48](null),S&&c&&c.end(),t[49](null),t[50](null),S&&p&&p.end(),D=!1,it(x)}}}function tu(t){let e,n,i,s,r;const o=[fw,hw],a=[];function l(u,h){return h[0]&2&&(e=null),e==null&&(e=!!u[17](u[1].closeButton)),e?0:1}return n=l(t,[-1,-1,-1]),i=a[n]=o[n](t),{c(){i.c(),s=ue()},l(u){i.l(u),s=ue()},m(u,h){a[n].m(u,h),K(u,s,h),r=!0},p(u,h){let c=n;n=l(u,h),n===c?a[n].p(u,h):(de(),F(a[c],1,1,()=>{a[c]=null}),ge(),i=a[n],i?i.p(u,h):(i=a[n]=o[n](u),i.c()),L(i,1),i.m(s.parentNode,s))},i(u){r||(L(i),r=!0)},o(u){F(i),r=!1},d(u){a[n].d(u),u&&A(s)}}}function hw(t){let e,n,i,s;return{c(){e=ee("button"),this.h()},l(r){e=se(r,"BUTTON",{class:!0,"aria-label":!0,style:!0}),J(e).forEach(A),this.h()},h(){v(e,"class",n=lt(t[1].classCloseButton)+" svelte-g4wg3a"),v(e,"aria-label","Close modal"),v(e,"style",t[10]),he(e,"close",!t[0])},m(r,o){K(r,e,o),i||(s=ie(e,"click",t[18]),i=!0)},p(r,o){o[0]&2&&n!==(n=lt(r[1].classCloseButton)+" svelte-g4wg3a")&&v(e,"class",n),o[0]&1024&&v(e,"style",r[10]),o[0]&3&&he(e,"close",!r[0])},i:me,o:me,d(r){r&&A(e),i=!1,s()}}}function fw(t){let e,n,i;var s=t[1].closeButton;function r(o){return{props:{onClose:o[18]}}}return s&&(e=new s(r(t))),{c(){e&&ve(e.$$.fragment),n=ue()},l(o){e&&mt(e.$$.fragment,o),n=ue()},m(o,a){e&&pe(e,o,a),K(o,n,a),i=!0},p(o,a){if(s!==(s=o[1].closeButton)){if(e){de();const l=e;F(l.$$.fragment,1,0,()=>{ye(l,1)}),ge()}s?(e=new s(r(o)),ve(e.$$.fragment),L(e.$$.fragment,1),pe(e,n.parentNode,n)):e=null}},i(o){i||(e&&L(e.$$.fragment,o),i=!0)},o(o){e&&F(e.$$.fragment,o),i=!1},d(o){o&&A(n),e&&ye(e,o)}}}function dw(t){let e,n,i,s,r=t[2]&&eu(t);const o=t[47].default,a=Oo(o,t,t[46],null);return{c(){r&&r.c(),e=Ce(),a&&a.c()},l(l){r&&r.l(l),e=Oe(l),a&&a.l(l)},m(l,u){r&&r.m(l,u),K(l,e,u),a&&a.m(l,u),n=!0,i||(s=ie(cw,"keydown",t[19]),i=!0)},p(l,u){l[2]?r?(r.p(l,u),u[0]&4&&L(r,1)):(r=eu(l),r.c(),L(r,1),r.m(e.parentNode,e)):r&&(de(),F(r,1,1,()=>{r=null}),ge()),a&&a.p&&(!n||u[1]&32768)&&Ro(a,o,l,l[46],n?No(o,l[46],u,null):Do(l[46]),null)},i(l){n||(L(r),L(a,l),n=!0)},o(l){F(r),F(a,l),n=!1},d(l){r&&r.d(l),l&&A(e),a&&a.d(l),i=!1,s()}}}function gw(t,e={}){return function(i){return new t(ja(Qt({},i),{props:Qt(Qt({},e),i.props)}))}}function mw(t,e,n){let{$$slots:i={},$$scope:s}=e;const r=Pi(),o=ud;let{show:a=null}=e,{key:l="simple-modal"}=e,{ariaLabel:u=null}=e,{ariaLabelledBy:h=null}=e,{closeButton:c=!0}=e,{closeOnEsc:f=!0}=e,{closeOnOuterClick:g=!0}=e,{styleBg:p={}}=e,{styleWindowWrap:w={}}=e,{styleWindow:D={}}=e,{styleContent:x={}}=e,{styleCloseButton:C={}}=e,{classBg:O=null}=e,{classWindowWrap:m=null}=e,{classWindow:S=null}=e,{classContent:_=null}=e,{classCloseButton:G=null}=e,{unstyled:P=!1}=e,{setContext:B=o}=e,{transitionBg:R=uw}=e,{transitionBgProps:Q={duration:250}}=e,{transitionWindow:j=R}=e,{transitionWindowProps:z=Q}=e,{disableFocusTrap:X=!1}=e;const I={ariaLabel:u,ariaLabelledBy:h,closeButton:c,closeOnEsc:f,closeOnOuterClick:g,styleBg:p,styleWindowWrap:w,styleWindow:D,styleContent:x,styleCloseButton:C,classBg:O,classWindowWrap:m,classWindow:S,classContent:_,classCloseButton:G,transitionBg:R,transitionBgProps:Q,transitionWindow:j,transitionWindowProps:z,disableFocusTrap:X,unstyled:P};let b=Qt({},I),ce=null,Ae,qe,Ge,yt,st,In,_t,Kt,Nt,rt,E,W,Me,Rt,En;const Zn=y=>y.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase(),ot=y=>y?Object.keys(y).reduce((Qe,Ke)=>`${Qe}; ${Zn(Ke)}: ${y[Ke]}`,""):"",bn=y=>!!(y&&y.constructor&&y.call&&y.apply),$n=()=>{n(6,st=ot(Object.assign({},{width:window.innerWidth,height:window.innerHeight},b.styleBg))),n(7,In=ot(b.styleWindowWrap)),n(8,_t=ot(b.styleWindow)),n(9,Kt=ot(b.styleContent)),n(10,Nt=ot(b.styleCloseButton)),n(11,rt=b.transitionBg),n(12,E=b.transitionWindow)},zt=()=>{};let ei=zt,Xt=zt,ti=zt,Yt=zt;const ni=(y,Qe={},Ke={},Ee={})=>{n(2,ce=gw(y,Qe)),n(1,b=Qt(Qt({},I),Ke)),$n(),os(),n(13,ei=ze=>{Ee.onOpen&&Ee.onOpen(ze),r("open"),r("opening")}),n(14,Xt=ze=>{Ee.onClose&&Ee.onClose(ze),r("close"),r("closing")}),n(15,ti=ze=>{Ee.onOpened&&Ee.onOpened(ze),r("opened")}),n(16,Yt=ze=>{Ee.onClosed&&Ee.onClosed(ze),r("closed")})},at=(y={})=>{!ce||(n(14,Xt=y.onClose||Xt),n(16,Yt=y.onClosed||Yt),n(2,ce=null),as())},ss=y=>{if(b.closeOnEsc&&ce&&y.key==="Escape"&&(y.preventDefault(),at()),ce&&y.key==="Tab"&&!b.disableFocusTrap){const Qe=Ge.querySelectorAll("*"),Ke=Array.from(Qe).filter(ze=>ze.tabIndex>=0);let Ee=Ke.indexOf(document.activeElement);Ee===-1&&y.shiftKey&&(Ee=0),Ee+=Ke.length+(y.shiftKey?-1:1),Ee%=Ke.length,Ke[Ee].focus(),y.preventDefault()}},ii=y=>{b.closeOnOuterClick&&(y.target===Ae||y.target===qe)&&(En=y.target)},rs=y=>{b.closeOnOuterClick&&y.target===En&&(y.preventDefault(),at())},os=()=>{yt=window.scrollY,W=document.body.style.position,Me=document.body.style.overflow,Rt=document.body.style.width,document.body.style.position="fixed",document.body.style.top=`-${yt}px`,document.body.style.overflow="hidden",document.body.style.width="100%"},as=()=>{document.body.style.position=W||"",document.body.style.top="",document.body.style.overflow=Me||"",document.body.style.width=Rt||"",window.scrollTo(0,yt)};B(l,{open:ni,close:at});let Dt=!1;Vu(()=>{Dt&&at()}),tr(()=>{n(45,Dt=!0)});function Rr(y){$e[y?"unshift":"push"](()=>{Ge=y,n(5,Ge)})}function ls(y){$e[y?"unshift":"push"](()=>{qe=y,n(4,qe)})}function si(y){$e[y?"unshift":"push"](()=>{Ae=y,n(3,Ae)})}return t.$$set=y=>{"show"in y&&n(22,a=y.show),"key"in y&&n(23,l=y.key),"ariaLabel"in y&&n(24,u=y.ariaLabel),"ariaLabelledBy"in y&&n(25,h=y.ariaLabelledBy),"closeButton"in y&&n(26,c=y.closeButton),"closeOnEsc"in y&&n(27,f=y.closeOnEsc),"closeOnOuterClick"in y&&n(28,g=y.closeOnOuterClick),"styleBg"in y&&n(29,p=y.styleBg),"styleWindowWrap"in y&&n(30,w=y.styleWindowWrap),"styleWindow"in y&&n(31,D=y.styleWindow),"styleContent"in y&&n(32,x=y.styleContent),"styleCloseButton"in y&&n(33,C=y.styleCloseButton),"classBg"in y&&n(34,O=y.classBg),"classWindowWrap"in y&&n(35,m=y.classWindowWrap),"classWindow"in y&&n(36,S=y.classWindow),"classContent"in y&&n(37,_=y.classContent),"classCloseButton"in y&&n(38,G=y.classCloseButton),"unstyled"in y&&n(0,P=y.unstyled),"setContext"in y&&n(39,B=y.setContext),"transitionBg"in y&&n(40,R=y.transitionBg),"transitionBgProps"in y&&n(41,Q=y.transitionBgProps),"transitionWindow"in y&&n(42,j=y.transitionWindow),"transitionWindowProps"in y&&n(43,z=y.transitionWindowProps),"disableFocusTrap"in y&&n(44,X=y.disableFocusTrap),"$$scope"in y&&n(46,s=y.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&4194304|t.$$.dirty[1]&16384&&Dt&&(bn(a)?ni(a):at())},[P,b,ce,Ae,qe,Ge,st,In,_t,Kt,Nt,rt,E,ei,Xt,ti,Yt,bn,at,ss,ii,rs,a,l,u,h,c,f,g,p,w,D,x,C,O,m,S,_,G,B,R,Q,j,z,X,Dt,s,i,Rr,ls,si]}class g0 extends Ot{constructor(e){super();Ct(this,e,mw,dw,gt,{show:22,key:23,ariaLabel:24,ariaLabelledBy:25,closeButton:26,closeOnEsc:27,closeOnOuterClick:28,styleBg:29,styleWindowWrap:30,styleWindow:31,styleContent:32,styleCloseButton:33,classBg:34,classWindowWrap:35,classWindow:36,classContent:37,classCloseButton:38,unstyled:0,setContext:39,transitionBg:40,transitionBgProps:41,transitionWindow:42,transitionWindowProps:43,disableFocusTrap:44},null,[-1,-1,-1])}}function pw(t,e){const n=t.getBoundingClientRect(),i=e.getBoundingClientRect(),s={};return s.top=n.top<0,s.left=n.left<0,s.bottom=n.bottom+i.height>(window.innerHeight||document.documentElement.clientHeight),s.right=n.right>(window.innerWidth||document.documentElement.clientWidth),s.any=s.top||s.left||s.bottom||s.right,s}function yw(t){let e,n=t[0](t[1],t[2])+"",i;return{c(){e=ee("div"),this.h()},l(s){e=se(s,"DIV",{class:!0});var r=J(e);r.forEach(A),this.h()},h(){v(e,"class",i="item "+t[3]+" svelte-3e0qet")},m(s,r){K(s,e,r),e.innerHTML=n},p(s,[r]){r&7&&n!==(n=s[0](s[1],s[2])+"")&&(e.innerHTML=n),r&8&&i!==(i="item "+s[3]+" svelte-3e0qet")&&v(e,"class",i)},i:me,o:me,d(s){s&&A(e)}}}function _w(t,e,n){let{isActive:i=!1}=e,{isFirst:s=!1}=e,{isHover:r=!1}=e,{isSelectable:o=!1}=e,{getOptionLabel:a=void 0}=e,{item:l=void 0}=e,{filterText:u=""}=e,h="";return t.$$set=c=>{"isActive"in c&&n(4,i=c.isActive),"isFirst"in c&&n(5,s=c.isFirst),"isHover"in c&&n(6,r=c.isHover),"isSelectable"in c&&n(7,o=c.isSelectable),"getOptionLabel"in c&&n(0,a=c.getOptionLabel),"item"in c&&n(1,l=c.item),"filterText"in c&&n(2,u=c.filterText)},t.$$.update=()=>{if(t.$$.dirty&242){const c=[];i&&c.push("active"),s&&c.push("first"),r&&c.push("hover"),l.isGroupHeader&&c.push("groupHeader"),l.isGroupItem&&c.push("groupItem"),o||c.push("notSelectable"),n(3,h=c.join(" "))}},[a,l,u,h,i,s,r,o]}class gf extends Ot{constructor(e){super();Ct(this,e,_w,yw,gt,{isActive:4,isFirst:5,isHover:6,isSelectable:7,getOptionLabel:0,item:1,filterText:2})}}function nu(t,e,n){const i=t.slice();return i[41]=e[n],i[42]=n,i}function vw(t){let e,n,i=t[1],s=[];for(let a=0;a<i.length;a+=1)s[a]=ru(nu(t,i,a));const r=a=>F(s[a],1,1,()=>{s[a]=null});let o=null;return i.length||(o=iu(t)),{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=ue(),o&&o.c()},l(a){for(let l=0;l<s.length;l+=1)s[l].l(a);e=ue(),o&&o.l(a)},m(a,l){for(let u=0;u<s.length;u+=1)s[u].m(a,l);K(a,e,l),o&&o.m(a,l),n=!0},p(a,l){if(l[0]&114390){i=a[1];let u;for(u=0;u<i.length;u+=1){const h=nu(a,i,u);s[u]?(s[u].p(h,l),L(s[u],1)):(s[u]=ru(h),s[u].c(),L(s[u],1),s[u].m(e.parentNode,e))}for(de(),u=i.length;u<s.length;u+=1)r(u);ge(),!i.length&&o?o.p(a,l):i.length?o&&(o.d(1),o=null):(o=iu(a),o.c(),o.m(e.parentNode,e))}},i(a){if(!n){for(let l=0;l<i.length;l+=1)L(s[l]);n=!0}},o(a){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)F(s[l]);n=!1},d(a){Po(s,a),a&&A(e),o&&o.d(a)}}}function ww(t){let e,n,i;var s=t[3];function r(o){return{props:{items:o[1],itemHeight:o[8],$$slots:{default:[bw,({item:a,i:l})=>({41:a,42:l}),({item:a,i:l})=>[0,(a?1024:0)|(l?2048:0)]]},$$scope:{ctx:o}}}}return s&&(e=new s(r(t))),{c(){e&&ve(e.$$.fragment),n=ue()},l(o){e&&mt(e.$$.fragment,o),n=ue()},m(o,a){e&&pe(e,o,a),K(o,n,a),i=!0},p(o,a){const l={};if(a[0]&2&&(l.items=o[1]),a[0]&256&&(l.itemHeight=o[8]),a[0]&9814|a[1]&11264&&(l.$$scope={dirty:a,ctx:o}),s!==(s=o[3])){if(e){de();const u=e;F(u.$$.fragment,1,0,()=>{ye(u,1)}),ge()}s?(e=new s(r(o)),ve(e.$$.fragment),L(e.$$.fragment,1),pe(e,n.parentNode,n)):e=null}else s&&e.$set(l)},i(o){i||(e&&L(e.$$.fragment,o),i=!0)},o(o){e&&F(e.$$.fragment,o),i=!1},d(o){o&&A(n),e&&ye(e,o)}}}function iu(t){let e,n=!t[11]&&su(t);return{c(){n&&n.c(),e=ue()},l(i){n&&n.l(i),e=ue()},m(i,s){n&&n.m(i,s),K(i,e,s)},p(i,s){i[11]?n&&(n.d(1),n=null):n?n.p(i,s):(n=su(i),n.c(),n.m(e.parentNode,e))},d(i){n&&n.d(i),i&&A(e)}}}function su(t){let e,n;return{c(){e=ee("div"),n=jt(t[12]),this.h()},l(i){e=se(i,"DIV",{class:!0});var s=J(e);n=Vn(s,t[12]),s.forEach(A),this.h()},h(){v(e,"class","empty svelte-1uyqfml")},m(i,s){K(i,e,s),$(e,n)},p(i,s){s[0]&4096&&ks(n,i[12])},d(i){i&&A(e)}}}function Iw(t){let e,n,i,s,r,o;var a=t[4];function l(f){return{props:{item:f[41],filterText:f[13],getOptionLabel:f[6],isFirst:Co(f[42]),isActive:Qs(f[41],f[9],f[10]),isHover:Zs(f[2],f[41],f[42],f[1]),isSelectable:mn(f[41])}}}a&&(n=new a(l(t)));function u(){return t[29](t[42])}function h(){return t[30](t[42])}function c(...f){return t[31](t[41],t[42],...f)}return{c(){e=ee("div"),n&&ve(n.$$.fragment),i=Ce(),this.h()},l(f){e=se(f,"DIV",{class:!0,tabindex:!0});var g=J(e);n&&mt(n.$$.fragment,g),i=Oe(g),g.forEach(A),this.h()},h(){v(e,"class","listItem"),v(e,"tabindex","-1")},m(f,g){K(f,e,g),n&&pe(n,e,null),$(e,i),s=!0,r||(o=[ie(e,"mouseover",u),ie(e,"focus",h),ie(e,"click",c)],r=!0)},p(f,g){t=f;const p={};if(g[0]&2&&(p.item=t[41]),g[0]&8192&&(p.filterText=t[13]),g[0]&64&&(p.getOptionLabel=t[6]),g[0]&1538&&(p.isActive=Qs(t[41],t[9],t[10])),g[0]&6&&(p.isHover=Zs(t[2],t[41],t[42],t[1])),g[0]&2&&(p.isSelectable=mn(t[41])),a!==(a=t[4])){if(n){de();const w=n;F(w.$$.fragment,1,0,()=>{ye(w,1)}),ge()}a?(n=new a(l(t)),ve(n.$$.fragment),L(n.$$.fragment,1),pe(n,e,i)):n=null}else a&&n.$set(p)},i(f){s||(n&&L(n.$$.fragment,f),s=!0)},o(f){n&&F(n.$$.fragment,f),s=!1},d(f){f&&A(e),n&&ye(n),r=!1,it(o)}}}function Ew(t){let e,n=t[7](t[41])+"",i;return{c(){e=ee("div"),i=jt(n),this.h()},l(s){e=se(s,"DIV",{class:!0});var r=J(e);i=Vn(r,n),r.forEach(A),this.h()},h(){v(e,"class","listGroupTitle svelte-1uyqfml")},m(s,r){K(s,e,r),$(e,i)},p(s,r){r[0]&130&&n!==(n=s[7](s[41])+"")&&ks(i,n)},i:me,o:me,d(s){s&&A(e)}}}function ru(t){let e,n,i,s;const r=[Ew,Iw],o=[];function a(l,u){return l[41].isGroupHeader&&!l[41].isSelectable?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),i=ue()},l(l){n.l(l),i=ue()},m(l,u){o[e].m(l,u),K(l,i,u),s=!0},p(l,u){let h=e;e=a(l),e===h?o[e].p(l,u):(de(),F(o[h],1,1,()=>{o[h]=null}),ge(),n=o[e],n?n.p(l,u):(n=o[e]=r[e](l),n.c()),L(n,1),n.m(i.parentNode,i))},i(l){s||(L(n),s=!0)},o(l){F(n),s=!1},d(l){o[e].d(l),l&&A(i)}}}function bw(t){let e,n,i,s,r;var o=t[4];function a(c){return{props:{item:c[41],filterText:c[13],getOptionLabel:c[6],isFirst:Co(c[42]),isActive:Qs(c[41],c[9],c[10]),isHover:Zs(c[2],c[41],c[42],c[1]),isSelectable:mn(c[41])}}}o&&(n=new o(a(t)));function l(){return t[26](t[42])}function u(){return t[27](t[42])}function h(...c){return t[28](t[41],t[42],...c)}return{c(){e=ee("div"),n&&ve(n.$$.fragment),this.h()},l(c){e=se(c,"DIV",{class:!0});var f=J(e);n&&mt(n.$$.fragment,f),f.forEach(A),this.h()},h(){v(e,"class","listItem")},m(c,f){K(c,e,f),n&&pe(n,e,null),i=!0,s||(r=[ie(e,"mouseover",l),ie(e,"focus",u),ie(e,"click",h)],s=!0)},p(c,f){t=c;const g={};if(f[1]&1024&&(g.item=t[41]),f[0]&8192&&(g.filterText=t[13]),f[0]&64&&(g.getOptionLabel=t[6]),f[1]&2048&&(g.isFirst=Co(t[42])),f[0]&1536|f[1]&1024&&(g.isActive=Qs(t[41],t[9],t[10])),f[0]&6|f[1]&3072&&(g.isHover=Zs(t[2],t[41],t[42],t[1])),f[1]&1024&&(g.isSelectable=mn(t[41])),o!==(o=t[4])){if(n){de();const p=n;F(p.$$.fragment,1,0,()=>{ye(p,1)}),ge()}o?(n=new o(a(t)),ve(n.$$.fragment),L(n.$$.fragment,1),pe(n,e,null)):n=null}else o&&n.$set(g)},i(c){i||(n&&L(n.$$.fragment,c),i=!0)},o(c){n&&F(n.$$.fragment,c),i=!1},d(c){c&&A(e),n&&ye(n),s=!1,it(r)}}}function Tw(t){let e,n,i,s,r,o;const a=[ww,vw],l=[];function u(h,c){return h[5]?0:1}return n=u(t),i=l[n]=a[n](t),{c(){e=ee("div"),i.c(),this.h()},l(h){e=se(h,"DIV",{class:!0,style:!0});var c=J(e);i.l(c),c.forEach(A),this.h()},h(){v(e,"class","listContainer svelte-1uyqfml"),v(e,"style",t[14]),he(e,"virtualList",t[5])},m(h,c){K(h,e,c),l[n].m(e,null),t[32](e),s=!0,r||(o=[ie(window,"keydown",t[17]),ie(window,"resize",t[18])],r=!0)},p(h,c){let f=n;n=u(h),n===f?l[n].p(h,c):(de(),F(l[f],1,1,()=>{l[f]=null}),ge(),i=l[n],i?i.p(h,c):(i=l[n]=a[n](h),i.c()),L(i,1),i.m(e,null)),(!s||c[0]&16384)&&v(e,"style",h[14]),c[0]&32&&he(e,"virtualList",h[5])},i(h){s||(L(i),s=!0)},o(h){F(i),s=!1},d(h){h&&A(e),l[n].d(),t[32](null),r=!1,it(o)}}}function Qs(t,e,n){return e&&e[n]===t[n]}function Co(t){return t===0}function Zs(t,e,n,i){return mn(e)&&(t===n||i.length===1)}function mn(t){return t.isGroupHeader&&t.isSelectable||t.selectable||!t.hasOwnProperty("selectable")}function Sw(t,e,n){const i=Pi();let{container:s=void 0}=e,{VirtualList:r=null}=e,{Item:o=gf}=e,{isVirtualList:a=!1}=e,{items:l=[]}=e,{labelIdentifier:u="label"}=e,{getOptionLabel:h=(E,W)=>{if(E)return E.isCreator?`Create "${W}"`:E[u]}}=e,{getGroupHeaderLabel:c=null}=e,{itemHeight:f=40}=e,{hoverItemIndex:g=0}=e,{value:p=void 0}=e,{optionIdentifier:w="value"}=e,{hideEmptyState:D=!1}=e,{noOptionsMessage:x="No options"}=e,{isMulti:C=!1}=e,{activeItemIndex:O=0}=e,{filterText:m=""}=e,{parent:S=null}=e,{listPlacement:_=null}=e,{listAutoWidth:G=null}=e,{listOffset:P=5}=e,B=0,R=!1,Q;tr(()=>{if(l.length>0&&!C&&p){const E=l.findIndex(W=>W[w]===p[w]);E&&n(2,g=E)}Ae("active"),s.addEventListener("scroll",()=>{clearTimeout(B),B=setTimeout(()=>{R=!1},100)},!1)}),Uu(()=>{l||n(1,l=[]),l!==Q&&l.length>0&&n(2,g=0),Q=l});function j(E){E.isCreator||i("itemSelected",E)}function z(E){R||n(2,g=E)}function X(E){const{item:W,i:Me,event:Rt}=E;if(Rt.stopPropagation(),p&&!C&&p[w]===W[w])return I();W.isCreator?i("itemCreated",m):mn(W)&&(n(19,O=Me),n(2,g=Me),j(W))}function I(){i("closeList")}async function b(E){if(a)return;let W=!0;for(;W;)E>0&&g===l.length-1?n(2,g=0):E<0&&g===0?n(2,g=l.length-1):n(2,g=g+E),W=!mn(l[g]);await vs(),Ae("hover")}function ce(E){switch(E.key){case"Escape":E.preventDefault(),I();break;case"ArrowDown":E.preventDefault(),l.length&&b(1);break;case"ArrowUp":E.preventDefault(),l.length&&b(-1);break;case"Enter":if(E.preventDefault(),l.length===0)break;const W=l[g];if(p&&!C&&p[w]===W[w]){I();break}W.isCreator?i("itemCreated",m):(n(19,O=g),j(l[g]));break;case"Tab":if(E.preventDefault(),l.length===0||p&&p[w]===l[g][w])return I();n(19,O=g),j(l[g]);break}}function Ae(E){if(a||!s)return;let W;const Me=s.querySelector(`.listItem .${E}`);Me&&(W=s.getBoundingClientRect().bottom-Me.getBoundingClientRect().bottom),n(0,s.scrollTop-=W,s)}let qe;function Ge(){const{height:E,width:W}=S.getBoundingClientRect();n(14,qe=""),n(14,qe+=`min-width:${W}px;width:${G?"auto":"100%"};`),_==="top"||_==="auto"&&pw(S,s).bottom?n(14,qe+=`bottom:${E+P}px;`):n(14,qe+=`top:${E+P}px;`)}const yt=E=>z(E),st=E=>z(E),In=(E,W,Me)=>X({item:E,i:W,event:Me}),_t=E=>z(E),Kt=E=>z(E),Nt=(E,W,Me)=>X({item:E,i:W,event:Me});function rt(E){$e[E?"unshift":"push"](()=>{s=E,n(0,s)})}return t.$$set=E=>{"container"in E&&n(0,s=E.container),"VirtualList"in E&&n(3,r=E.VirtualList),"Item"in E&&n(4,o=E.Item),"isVirtualList"in E&&n(5,a=E.isVirtualList),"items"in E&&n(1,l=E.items),"labelIdentifier"in E&&n(20,u=E.labelIdentifier),"getOptionLabel"in E&&n(6,h=E.getOptionLabel),"getGroupHeaderLabel"in E&&n(7,c=E.getGroupHeaderLabel),"itemHeight"in E&&n(8,f=E.itemHeight),"hoverItemIndex"in E&&n(2,g=E.hoverItemIndex),"value"in E&&n(9,p=E.value),"optionIdentifier"in E&&n(10,w=E.optionIdentifier),"hideEmptyState"in E&&n(11,D=E.hideEmptyState),"noOptionsMessage"in E&&n(12,x=E.noOptionsMessage),"isMulti"in E&&n(21,C=E.isMulti),"activeItemIndex"in E&&n(19,O=E.activeItemIndex),"filterText"in E&&n(13,m=E.filterText),"parent"in E&&n(22,S=E.parent),"listPlacement"in E&&n(23,_=E.listPlacement),"listAutoWidth"in E&&n(24,G=E.listAutoWidth),"listOffset"in E&&n(25,P=E.listOffset)},t.$$.update=()=>{t.$$.dirty[0]&4194305&&S&&s&&Ge()},[s,l,g,r,o,a,h,c,f,p,w,D,x,m,qe,z,X,ce,Ge,O,u,C,S,_,G,P,yt,st,In,_t,Kt,Nt,rt]}class kw extends Ot{constructor(e){super();Ct(this,e,Sw,Tw,gt,{container:0,VirtualList:3,Item:4,isVirtualList:5,items:1,labelIdentifier:20,getOptionLabel:6,getGroupHeaderLabel:7,itemHeight:8,hoverItemIndex:2,value:9,optionIdentifier:10,hideEmptyState:11,noOptionsMessage:12,isMulti:21,activeItemIndex:19,filterText:13,parent:22,listPlacement:23,listAutoWidth:24,listOffset:25},null,[-1,-1])}}function Aw(t){let e,n=t[0](t[1])+"";return{c(){e=ee("div"),this.h()},l(i){e=se(i,"DIV",{class:!0});var s=J(e);s.forEach(A),this.h()},h(){v(e,"class","selection svelte-pu1q1n")},m(i,s){K(i,e,s),e.innerHTML=n},p(i,[s]){s&3&&n!==(n=i[0](i[1])+"")&&(e.innerHTML=n)},i:me,o:me,d(i){i&&A(e)}}}function Cw(t,e,n){let{getSelectionLabel:i=void 0}=e,{item:s=void 0}=e;return t.$$set=r=>{"getSelectionLabel"in r&&n(0,i=r.getSelectionLabel),"item"in r&&n(1,s=r.item)},[i,s]}class Ow extends Ot{constructor(e){super();Ct(this,e,Cw,Aw,gt,{getSelectionLabel:0,item:1})}}function ou(t,e,n){const i=t.slice();return i[9]=e[n],i[11]=n,i}function au(t){let e,n,i,s,r;function o(...a){return t[6](t[11],...a)}return{c(){e=ee("div"),n=Tt("svg"),i=Tt("path"),this.h()},l(a){e=se(a,"DIV",{class:!0});var l=J(e);n=Ht(l,"svg",{width:!0,height:!0,viewBox:!0,focusable:!0,"aria-hidden":!0,role:!0,class:!0});var u=J(n);i=Ht(u,"path",{d:!0}),J(i).forEach(A),u.forEach(A),l.forEach(A),this.h()},h(){v(i,"d","M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"),v(n,"width","100%"),v(n,"height","100%"),v(n,"viewBox","-2 -2 50 50"),v(n,"focusable","false"),v(n,"aria-hidden","true"),v(n,"role","presentation"),v(n,"class","svelte-liu9pa"),v(e,"class","multiSelectItem_clear svelte-liu9pa")},m(a,l){K(a,e,l),$(e,n),$(n,i),s||(r=ie(e,"click",o),s=!0)},p(a,l){t=a},d(a){a&&A(e),s=!1,r()}}}function lu(t){let e,n,i=t[4](t[9])+"",s,r,o,a,l,u=!t[2]&&!t[3]&&au(t);function h(...c){return t[7](t[11],...c)}return{c(){e=ee("div"),n=ee("div"),s=Ce(),u&&u.c(),r=Ce(),this.h()},l(c){e=se(c,"DIV",{class:!0});var f=J(e);n=se(f,"DIV",{class:!0});var g=J(n);g.forEach(A),s=Oe(f),u&&u.l(f),r=Oe(f),f.forEach(A),this.h()},h(){v(n,"class","multiSelectItem_label svelte-liu9pa"),v(e,"class",o="multiSelectItem "+(t[1]===t[11]?"active":"")+" "+(t[2]?"disabled":"")+" svelte-liu9pa")},m(c,f){K(c,e,f),$(e,n),n.innerHTML=i,$(e,s),u&&u.m(e,null),$(e,r),a||(l=ie(e,"click",h),a=!0)},p(c,f){t=c,f&17&&i!==(i=t[4](t[9])+"")&&(n.innerHTML=i),!t[2]&&!t[3]?u?u.p(t,f):(u=au(t),u.c(),u.m(e,r)):u&&(u.d(1),u=null),f&6&&o!==(o="multiSelectItem "+(t[1]===t[11]?"active":"")+" "+(t[2]?"disabled":"")+" svelte-liu9pa")&&v(e,"class",o)},d(c){c&&A(e),u&&u.d(),a=!1,l()}}}function Nw(t){let e,n=t[0],i=[];for(let s=0;s<n.length;s+=1)i[s]=lu(ou(t,n,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=ue()},l(s){for(let r=0;r<i.length;r+=1)i[r].l(s);e=ue()},m(s,r){for(let o=0;o<i.length;o+=1)i[o].m(s,r);K(s,e,r)},p(s,[r]){if(r&63){n=s[0];let o;for(o=0;o<n.length;o+=1){const a=ou(s,n,o);i[o]?i[o].p(a,r):(i[o]=lu(a),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},i:me,o:me,d(s){Po(i,s),s&&A(e)}}}function Rw(t,e,n){const i=Pi();let{value:s=[]}=e,{activeValue:r=void 0}=e,{isDisabled:o=!1}=e,{multiFullItemClearable:a=!1}=e,{getSelectionLabel:l=void 0}=e;function u(f,g){g.stopPropagation(),i("multiItemClear",{i:f})}const h=(f,g)=>u(f,g),c=(f,g)=>a?u(f,g):{};return t.$$set=f=>{"value"in f&&n(0,s=f.value),"activeValue"in f&&n(1,r=f.activeValue),"isDisabled"in f&&n(2,o=f.isDisabled),"multiFullItemClearable"in f&&n(3,a=f.multiFullItemClearable),"getSelectionLabel"in f&&n(4,l=f.getSelectionLabel)},[s,r,o,a,l,u,h,c]}class Dw extends Ot{constructor(e){super();Ct(this,e,Rw,Nw,gt,{value:0,activeValue:1,isDisabled:2,multiFullItemClearable:3,getSelectionLabel:4})}}function uu(t,e,n){const i=t.slice();return i[23]=e[n],i}const Lw=t=>({item:t&32,i:t&32,hoverItemIndex:t&2}),cu=t=>({item:t[23].data,i:t[23].index,hoverItemIndex:t[1]});function Pw(t){let e;return{c(){e=jt("Missing template")},l(n){e=Vn(n,"Missing template")},m(n,i){K(n,e,i)},d(n){n&&A(e)}}}function hu(t,e){let n,i,s;const r=e[15].default,o=Oo(r,e,e[14],cu),a=o||Pw();return{key:t,first:null,c(){n=ee("svelte-virtual-list-row"),a&&a.c(),i=Ce(),this.h()},l(l){n=se(l,"SVELTE-VIRTUAL-LIST-ROW",{class:!0});var u=J(n);a&&a.l(u),i=Oe(u),u.forEach(A),this.h()},h(){to(n,"class","svelte-g2cagw"),this.first=n},m(l,u){K(l,n,u),a&&a.m(n,null),$(n,i),s=!0},p(l,u){e=l,o&&o.p&&(!s||u&16418)&&Ro(o,r,e,e[14],s?No(r,e[14],u,Lw):Do(e[14]),cu)},i(l){s||(L(a,l),s=!0)},o(l){F(a,l),s=!1},d(l){l&&A(n),a&&a.d(l)}}}function Mw(t){let e,n,i=[],s=new Map,r,o,a,l,u=t[5];const h=c=>c[23].index;for(let c=0;c<u.length;c+=1){let f=uu(t,u,c),g=h(f);s.set(g,i[c]=hu(g,f))}return{c(){e=ee("svelte-virtual-list-viewport"),n=ee("svelte-virtual-list-contents");for(let c=0;c<i.length;c+=1)i[c].c();this.h()},l(c){e=se(c,"SVELTE-VIRTUAL-LIST-VIEWPORT",{style:!0,class:!0});var f=J(e);n=se(f,"SVELTE-VIRTUAL-LIST-CONTENTS",{style:!0,class:!0});var g=J(n);for(let p=0;p<i.length;p+=1)i[p].l(g);g.forEach(A),f.forEach(A),this.h()},h(){Sn(n,"padding-top",t[6]+"px"),Sn(n,"padding-bottom",t[7]+"px"),to(n,"class","svelte-g2cagw"),Sn(e,"height",t[0]),to(e,"class","svelte-g2cagw"),sn(()=>t[18].call(e))},m(c,f){K(c,e,f),$(e,n);for(let g=0;g<i.length;g+=1)i[g].m(n,null);t[16](n),t[17](e),r=id(e,t[18].bind(e)),o=!0,a||(l=ie(e,"scroll",t[8]),a=!0)},p(c,[f]){f&16418&&(u=c[5],de(),i=pd(i,f,h,1,c,u,s,n,md,hu,null,uu),ge()),(!o||f&64)&&Sn(n,"padding-top",c[6]+"px"),(!o||f&128)&&Sn(n,"padding-bottom",c[7]+"px"),(!o||f&1)&&Sn(e,"height",c[0])},i(c){if(!o){for(let f=0;f<u.length;f+=1)L(i[f]);o=!0}},o(c){for(let f=0;f<i.length;f+=1)F(i[f]);o=!1},d(c){c&&A(e);for(let f=0;f<i.length;f+=1)i[f].d();t[16](null),t[17](null),r(),a=!1,l()}}}function Uw(t,e,n){let{$$slots:i={},$$scope:s}=e,{items:r=void 0}=e,{height:o="100%"}=e,{itemHeight:a=40}=e,{hoverItemIndex:l=0}=e,{start:u=0}=e,{end:h=0}=e,c=[],f,g,p,w=0,D,x,C=0,O=0,m;async function S(R,Q,j){const{scrollTop:z}=g;await vs();let X=C-z,I=u;for(;X<Q&&I<R.length;){let ce=f[I-u];ce||(n(10,h=I+1),await vs(),ce=f[I-u]),X+=c[I]=j||ce.offsetHeight,I+=1}n(10,h=I);const b=R.length-h;m=(C+X)/h,n(7,O=b*m),c.length=R.length,g&&n(3,g.scrollTop=0,g)}async function _(){const{scrollTop:R}=g,Q=u;for(let I=0;I<f.length;I+=1)c[u+I]=a||f[I].offsetHeight;let j=0,z=0;for(;j<r.length;){const I=c[j]||m;if(z+I>R){n(9,u=j),n(6,C=z);break}z+=I,j+=1}for(;j<r.length&&(z+=c[j]||m,j+=1,!(z>R+w)););n(10,h=j);const X=r.length-h;for(m=z/h;j<r.length;)c[j++]=m;if(n(7,O=X*m),u<Q){await vs();let I=0,b=0;for(let Ae=u;Ae<Q;Ae+=1)f[Ae-u]&&(I+=c[Ae],b+=a||f[Ae-u].offsetHeight);const ce=b-I;g.scrollTo(0,R+ce)}}tr(()=>{f=p.getElementsByTagName("svelte-virtual-list-row"),n(13,x=!0)});function G(R){$e[R?"unshift":"push"](()=>{p=R,n(4,p)})}function P(R){$e[R?"unshift":"push"](()=>{g=R,n(3,g)})}function B(){w=this.offsetHeight,n(2,w)}return t.$$set=R=>{"items"in R&&n(11,r=R.items),"height"in R&&n(0,o=R.height),"itemHeight"in R&&n(12,a=R.itemHeight),"hoverItemIndex"in R&&n(1,l=R.hoverItemIndex),"start"in R&&n(9,u=R.start),"end"in R&&n(10,h=R.end),"$$scope"in R&&n(14,s=R.$$scope)},t.$$.update=()=>{t.$$.dirty&3584&&n(5,D=r.slice(u,h).map((R,Q)=>({index:Q+u,data:R}))),t.$$.dirty&14340&&x&&S(r,w,a)},[o,l,w,g,p,D,C,O,_,u,h,r,a,x,s,i,G,P,B]}class Vw extends Ot{constructor(e){super();Ct(this,e,Uw,Mw,gt,{items:11,height:0,itemHeight:12,hoverItemIndex:1,start:9,end:10})}}function Fw(t){let e,n;return{c(){e=Tt("svg"),n=Tt("path"),this.h()},l(i){e=Ht(i,"svg",{width:!0,height:!0,viewBox:!0,focusable:!0,"aria-hidden":!0,role:!0});var s=J(e);n=Ht(s,"path",{fill:!0,d:!0}),J(n).forEach(A),s.forEach(A),this.h()},h(){v(n,"fill","currentColor"),v(n,"d",`M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124\r
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z`),v(e,"width","100%"),v(e,"height","100%"),v(e,"viewBox","-2 -2 50 50"),v(e,"focusable","false"),v(e,"aria-hidden","true"),v(e,"role","presentation")},m(i,s){K(i,e,s),$(e,n)},p:me,i:me,o:me,d(i){i&&A(e)}}}class Bw extends Ot{constructor(e){super();Ct(this,e,null,Fw,gt,{})}}function jw(t,e,n){let i;return function(){let r=this,o=arguments,a=function(){i=null,n||t.apply(r,o)},l=n&&!i;clearTimeout(i),i=setTimeout(a,e),l&&t.apply(r,o)}}function fu(t,e,n){const i=t.slice();return i[103]=e[n],i}function du(t){let e,n,i,s,r;return{c(){e=ee("span"),n=jt(t[33]),i=Ce(),s=ee("span"),r=jt(t[32]),this.h()},l(o){e=se(o,"SPAN",{id:!0});var a=J(e);n=Vn(a,t[33]),a.forEach(A),i=Oe(o),s=se(o,"SPAN",{id:!0});var l=J(s);r=Vn(l,t[32]),l.forEach(A),this.h()},h(){v(e,"id","aria-selection"),v(s,"id","aria-context")},m(o,a){K(o,e,a),$(e,n),K(o,i,a),K(o,s,a),$(s,r)},p(o,a){a[1]&4&&ks(n,o[33]),a[1]&2&&ks(r,o[32])},d(o){o&&A(e),o&&A(i),o&&A(s)}}}function gu(t){let e,n,i;const s=[t[18]];var r=t[17];function o(a){let l={};for(let u=0;u<s.length;u+=1)l=$s(l,s[u]);return{props:l}}return r&&(e=new r(o())),{c(){e&&ve(e.$$.fragment),n=ue()},l(a){e&&mt(e.$$.fragment,a),n=ue()},m(a,l){e&&pe(e,a,l),K(a,n,l),i=!0},p(a,l){const u=l[0]&262144?Mo(s,[Hu(a[18])]):{};if(r!==(r=a[17])){if(e){de();const h=e;F(h.$$.fragment,1,0,()=>{ye(h,1)}),ge()}r?(e=new r(o()),ve(e.$$.fragment),L(e.$$.fragment,1),pe(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(a){i||(e&&L(e.$$.fragment,a),i=!0)},o(a){e&&F(e.$$.fragment,a),i=!1},d(a){a&&A(n),e&&ye(e,a)}}}function mu(t){let e,n,i;var s=t[26];function r(o){return{props:{value:o[2],getSelectionLabel:o[12],activeValue:o[30],isDisabled:o[9],multiFullItemClearable:o[8]}}}return s&&(e=new s(r(t)),e.$on("multiItemClear",t[38]),e.$on("focus",t[40])),{c(){e&&ve(e.$$.fragment),n=ue()},l(o){e&&mt(e.$$.fragment,o),n=ue()},m(o,a){e&&pe(e,o,a),K(o,n,a),i=!0},p(o,a){const l={};if(a[0]&4&&(l.value=o[2]),a[0]&4096&&(l.getSelectionLabel=o[12]),a[0]&1073741824&&(l.activeValue=o[30]),a[0]&512&&(l.isDisabled=o[9]),a[0]&256&&(l.multiFullItemClearable=o[8]),s!==(s=o[26])){if(e){de();const u=e;F(u.$$.fragment,1,0,()=>{ye(u,1)}),ge()}s?(e=new s(r(o)),e.$on("multiItemClear",o[38]),e.$on("focus",o[40]),ve(e.$$.fragment),L(e.$$.fragment,1),pe(e,n.parentNode,n)):e=null}else s&&e.$set(l)},i(o){i||(e&&L(e.$$.fragment,o),i=!0)},o(o){e&&F(e.$$.fragment,o),i=!1},d(o){o&&A(n),e&&ye(e,o)}}}function pu(t){let e,n,i,s,r;var o=t[25];function a(l){return{props:{item:l[2],getSelectionLabel:l[12]}}}return o&&(n=new o(a(t))),{c(){e=ee("div"),n&&ve(n.$$.fragment),this.h()},l(l){e=se(l,"DIV",{class:!0});var u=J(e);n&&mt(n.$$.fragment,u),u.forEach(A),this.h()},h(){v(e,"class","selectedItem svelte-17l1npl")},m(l,u){K(l,e,u),n&&pe(n,e,null),i=!0,s||(r=ie(e,"focus",t[40]),s=!0)},p(l,u){const h={};if(u[0]&4&&(h.item=l[2]),u[0]&4096&&(h.getSelectionLabel=l[12]),o!==(o=l[25])){if(n){de();const c=n;F(c.$$.fragment,1,0,()=>{ye(c,1)}),ge()}o?(n=new o(a(l)),ve(n.$$.fragment),L(n.$$.fragment,1),pe(n,e,null)):n=null}else o&&n.$set(h)},i(l){i||(n&&L(n.$$.fragment,l),i=!0)},o(l){n&&F(n.$$.fragment,l),i=!1},d(l){l&&A(e),n&&ye(n),s=!1,r()}}}function yu(t){let e,n,i,s,r;var o=t[23];function a(l){return{}}return o&&(n=new o(a())),{c(){e=ee("div"),n&&ve(n.$$.fragment),this.h()},l(l){e=se(l,"DIV",{class:!0,"aria-hidden":!0});var u=J(e);n&&mt(n.$$.fragment,u),u.forEach(A),this.h()},h(){v(e,"class","clearSelect svelte-17l1npl"),v(e,"aria-hidden","true")},m(l,u){K(l,e,u),n&&pe(n,e,null),i=!0,s||(r=ie(e,"click",ed(t[27])),s=!0)},p(l,u){if(o!==(o=l[23])){if(n){de();const h=n;F(h.$$.fragment,1,0,()=>{ye(h,1)}),ge()}o?(n=new o(a()),ve(n.$$.fragment),L(n.$$.fragment,1),pe(n,e,null)):n=null}},i(l){i||(n&&L(n.$$.fragment,l),i=!0)},o(l){n&&F(n.$$.fragment,l),i=!1},d(l){l&&A(e),n&&ye(n),s=!1,r()}}}function _u(t){let e;function n(r,o){return r[22]?xw:Hw}let i=n(t),s=i(t);return{c(){e=ee("div"),s.c(),this.h()},l(r){e=se(r,"DIV",{class:!0,"aria-hidden":!0});var o=J(e);s.l(o),o.forEach(A),this.h()},h(){v(e,"class","indicator svelte-17l1npl"),v(e,"aria-hidden","true")},m(r,o){K(r,e,o),s.m(e,null)},p(r,o){i===(i=n(r))&&s?s.p(r,o):(s.d(1),s=i(r),s&&(s.c(),s.m(e,null)))},d(r){r&&A(e),s.d()}}}function Hw(t){let e,n;return{c(){e=Tt("svg"),n=Tt("path"),this.h()},l(i){e=Ht(i,"svg",{width:!0,height:!0,viewBox:!0,focusable:!0,"aria-hidden":!0,class:!0});var s=J(e);n=Ht(s,"path",{d:!0}),J(n).forEach(A),s.forEach(A),this.h()},h(){v(n,"d",`M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747\r
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0\r
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502\r
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0\r
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z`),v(e,"width","100%"),v(e,"height","100%"),v(e,"viewBox","0 0 20 20"),v(e,"focusable","false"),v(e,"aria-hidden","true"),v(e,"class","svelte-17l1npl")},m(i,s){K(i,e,s),$(e,n)},p:me,d(i){i&&A(e)}}}function xw(t){let e,n;return{c(){e=new no,n=ue(),this.h()},l(i){e=td(i),n=ue(),this.h()},h(){e.a=n},m(i,s){e.m(t[22],i,s),K(i,n,s)},p(i,s){s[0]&4194304&&e.p(i[22])},d(i){i&&A(n),i&&e.d()}}}function vu(t){let e,n,i;return{c(){e=ee("div"),n=Tt("svg"),i=Tt("circle"),this.h()},l(s){e=se(s,"DIV",{class:!0});var r=J(e);n=Ht(r,"svg",{class:!0,viewBox:!0});var o=J(n);i=Ht(o,"circle",{class:!0,cx:!0,cy:!0,r:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-miterlimit":!0}),J(i).forEach(A),o.forEach(A),r.forEach(A),this.h()},h(){v(i,"class","spinner_path svelte-17l1npl"),v(i,"cx","50"),v(i,"cy","50"),v(i,"r","20"),v(i,"fill","none"),v(i,"stroke","currentColor"),v(i,"stroke-width","5"),v(i,"stroke-miterlimit","10"),v(n,"class","spinner_icon svelte-17l1npl"),v(n,"viewBox","25 25 50 50"),v(e,"class","spinner svelte-17l1npl")},m(s,r){K(s,e,r),$(e,n),$(n,i)},d(s){s&&A(e)}}}function wu(t){let e,n,i,s;const r=[t[34]];function o(u){t[84](u)}var a=t[24];function l(u){let h={};for(let c=0;c<r.length;c+=1)h=$s(h,r[c]);return u[28]!==void 0&&(h.hoverItemIndex=u[28]),{props:h}}return a&&(e=new a(l(t)),$e.push(()=>Ka(e,"hoverItemIndex",o)),e.$on("itemSelected",t[43]),e.$on("itemCreated",t[44]),e.$on("closeList",t[45])),{c(){e&&ve(e.$$.fragment),i=ue()},l(u){e&&mt(e.$$.fragment,u),i=ue()},m(u,h){e&&pe(e,u,h),K(u,i,h),s=!0},p(u,h){const c=h[1]&8?Mo(r,[Hu(u[34])]):{};if(!n&&h[0]&268435456&&(n=!0,c.hoverItemIndex=u[28],cd(()=>n=!1)),a!==(a=u[24])){if(e){de();const f=e;F(f.$$.fragment,1,0,()=>{ye(f,1)}),ge()}a?(e=new a(l(u)),$e.push(()=>Ka(e,"hoverItemIndex",o)),e.$on("itemSelected",u[43]),e.$on("itemCreated",u[44]),e.$on("closeList",u[45]),ve(e.$$.fragment),L(e.$$.fragment,1),pe(e,i.parentNode,i)):e=null}else a&&e.$set(c)},i(u){s||(e&&L(e.$$.fragment,u),s=!0)},o(u){e&&F(e.$$.fragment,u),s=!1},d(u){u&&A(i),e&&ye(e,u)}}}function Iu(t){let e,n,i;return{c(){e=ee("input"),this.h()},l(s){e=se(s,"INPUT",{name:!0,type:!0,class:!0}),this.h()},h(){v(e,"name",n=t[16].name),v(e,"type","hidden"),e.value=i=t[2]?t[12](t[2]):null,v(e,"class","svelte-17l1npl")},m(s,r){K(s,e,r)},p(s,r){r[0]&65536&&n!==(n=s[16].name)&&v(e,"name",n),r[0]&4100&&i!==(i=s[2]?s[12](s[2]):null)&&(e.value=i)},d(s){s&&A(e)}}}function Eu(t){let e,n=t[2],i=[];for(let s=0;s<n.length;s+=1)i[s]=bu(fu(t,n,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=ue()},l(s){for(let r=0;r<i.length;r+=1)i[r].l(s);e=ue()},m(s,r){for(let o=0;o<i.length;o+=1)i[o].m(s,r);K(s,e,r)},p(s,r){if(r[0]&69636){n=s[2];let o;for(o=0;o<n.length;o+=1){const a=fu(s,n,o);i[o]?i[o].p(a,r):(i[o]=bu(a),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},d(s){Po(i,s),s&&A(e)}}}function bu(t){let e,n,i;return{c(){e=ee("input"),this.h()},l(s){e=se(s,"INPUT",{name:!0,type:!0,class:!0}),this.h()},h(){v(e,"name",n=t[16].name),v(e,"type","hidden"),e.value=i=t[103]?t[12](t[103]):null,v(e,"class","svelte-17l1npl")},m(s,r){K(s,e,r)},p(s,r){r[0]&65536&&n!==(n=s[16].name)&&v(e,"name",n),r[0]&4100&&i!==(i=s[103]?s[12](s[103]):null)&&(e.value=i)},d(s){s&&A(e)}}}function Ww(t){let e,n,i,s,r,o,a,l,u,h,c,f,g,p,w,D,x,C,O=t[1]&&du(t),m=t[17]&&gu(t),S=t[35]&&mu(t),_=[{readOnly:a=!t[13]},t[31],{placeholder:t[36]},{style:t[14]},{disabled:t[9]}],G={};for(let I=0;I<_.length;I+=1)G=$s(G,_[I]);let P=!t[7]&&t[29]&&pu(t),B=t[37]&&yu(t),R=!t[37]&&(t[20]||t[19]&&!t[2]||!t[13]&&!t[9]&&!t[4]&&(t[29]&&!t[15]||!t[29]))&&_u(t),Q=t[4]&&vu(),j=t[5]&&wu(t),z=(!t[7]||t[7]&&!t[35])&&Iu(t),X=t[7]&&t[35]&&Eu(t);return{c(){e=ee("div"),n=ee("span"),O&&O.c(),i=Ce(),m&&m.c(),s=Ce(),S&&S.c(),r=Ce(),o=ee("input"),l=Ce(),P&&P.c(),u=Ce(),B&&B.c(),h=Ce(),R&&R.c(),c=Ce(),Q&&Q.c(),f=Ce(),j&&j.c(),g=Ce(),z&&z.c(),p=Ce(),X&&X.c(),this.h()},l(I){e=se(I,"DIV",{class:!0,style:!0});var b=J(e);n=se(b,"SPAN",{"aria-live":!0,"aria-atomic":!0,"aria-relevant":!0,class:!0});var ce=J(n);O&&O.l(ce),ce.forEach(A),i=Oe(b),m&&m.l(b),s=Oe(b),S&&S.l(b),r=Oe(b),o=se(b,"INPUT",{placeholder:!0,style:!0}),l=Oe(b),P&&P.l(b),u=Oe(b),B&&B.l(b),h=Oe(b),R&&R.l(b),c=Oe(b),Q&&Q.l(b),f=Oe(b),j&&j.l(b),g=Oe(b),z&&z.l(b),p=Oe(b),X&&X.l(b),b.forEach(A),this.h()},h(){v(n,"aria-live","polite"),v(n,"aria-atomic","false"),v(n,"aria-relevant","additions text"),v(n,"class","a11yText svelte-17l1npl"),xa(o,G),he(o,"svelte-17l1npl",!0),v(e,"class",w="selectContainer "+t[21]+" svelte-17l1npl"),v(e,"style",t[11]),he(e,"hasError",t[10]),he(e,"multiSelect",t[7]),he(e,"disabled",t[9]),he(e,"focused",t[1])},m(I,b){K(I,e,b),$(e,n),O&&O.m(n,null),$(e,i),m&&m.m(e,null),$(e,s),S&&S.m(e,null),$(e,r),$(e,o),o.autofocus&&o.focus(),t[82](o),qa(o,t[3]),$(e,l),P&&P.m(e,null),$(e,u),B&&B.m(e,null),$(e,h),R&&R.m(e,null),$(e,c),Q&&Q.m(e,null),$(e,f),j&&j.m(e,null),$(e,g),z&&z.m(e,null),$(e,p),X&&X.m(e,null),t[85](e),D=!0,x||(C=[ie(window,"click",t[41]),ie(window,"focusin",t[41]),ie(window,"keydown",t[39]),ie(o,"focus",t[40]),ie(o,"input",t[83]),ie(e,"click",t[42])],x=!0)},p(I,b){I[1]?O?O.p(I,b):(O=du(I),O.c(),O.m(n,null)):O&&(O.d(1),O=null),I[17]?m?(m.p(I,b),b[0]&131072&&L(m,1)):(m=gu(I),m.c(),L(m,1),m.m(e,s)):m&&(de(),F(m,1,1,()=>{m=null}),ge()),I[35]?S?(S.p(I,b),b[1]&16&&L(S,1)):(S=mu(I),S.c(),L(S,1),S.m(e,r)):S&&(de(),F(S,1,1,()=>{S=null}),ge()),xa(o,G=Mo(_,[(!D||b[0]&8192&&a!==(a=!I[13]))&&{readOnly:a},b[1]&1&&I[31],(!D||b[1]&32)&&{placeholder:I[36]},(!D||b[0]&16384)&&{style:I[14]},(!D||b[0]&512)&&{disabled:I[9]}])),b[0]&8&&o.value!==I[3]&&qa(o,I[3]),he(o,"svelte-17l1npl",!0),!I[7]&&I[29]?P?(P.p(I,b),b[0]&536871040&&L(P,1)):(P=pu(I),P.c(),L(P,1),P.m(e,u)):P&&(de(),F(P,1,1,()=>{P=null}),ge()),I[37]?B?(B.p(I,b),b[1]&64&&L(B,1)):(B=yu(I),B.c(),L(B,1),B.m(e,h)):B&&(de(),F(B,1,1,()=>{B=null}),ge()),!I[37]&&(I[20]||I[19]&&!I[2]||!I[13]&&!I[9]&&!I[4]&&(I[29]&&!I[15]||!I[29]))?R?R.p(I,b):(R=_u(I),R.c(),R.m(e,c)):R&&(R.d(1),R=null),I[4]?Q||(Q=vu(),Q.c(),Q.m(e,f)):Q&&(Q.d(1),Q=null),I[5]?j?(j.p(I,b),b[0]&32&&L(j,1)):(j=wu(I),j.c(),L(j,1),j.m(e,g)):j&&(de(),F(j,1,1,()=>{j=null}),ge()),!I[7]||I[7]&&!I[35]?z?z.p(I,b):(z=Iu(I),z.c(),z.m(e,p)):z&&(z.d(1),z=null),I[7]&&I[35]?X?X.p(I,b):(X=Eu(I),X.c(),X.m(e,null)):X&&(X.d(1),X=null),(!D||b[0]&2097152&&w!==(w="selectContainer "+I[21]+" svelte-17l1npl"))&&v(e,"class",w),(!D||b[0]&2048)&&v(e,"style",I[11]),b[0]&2098176&&he(e,"hasError",I[10]),b[0]&2097280&&he(e,"multiSelect",I[7]),b[0]&2097664&&he(e,"disabled",I[9]),b[0]&2097154&&he(e,"focused",I[1])},i(I){D||(L(m),L(S),L(P),L(B),L(j),D=!0)},o(I){F(m),F(S),F(P),F(B),F(j),D=!1},d(I){I&&A(e),O&&O.d(),m&&m.d(),S&&S.d(),t[82](null),P&&P.d(),B&&B.d(),R&&R.d(),Q&&Q.d(),j&&j.d(),z&&z.d(),X&&X.d(),t[85](null),x=!1,it(C)}}}function Tu(t){return t.map((e,n)=>({index:n,value:e,label:`${e}`}))}function qw(t,e,n){let i,s,r,o,a,l,u,h;const c=Pi();let{id:f=null}=e,{container:g=void 0}=e,{input:p=void 0}=e,{isMulti:w=!1}=e,{multiFullItemClearable:D=!1}=e,{isDisabled:x=!1}=e,{isCreatable:C=!1}=e,{isFocused:O=!1}=e,{value:m=null}=e,{filterText:S=""}=e,{placeholder:_="Select..."}=e,{placeholderAlwaysShow:G=!1}=e,{items:P=null}=e,{itemFilter:B=(d,M,re)=>`${d}`.toLowerCase().includes(M.toLowerCase())}=e,{groupBy:R=void 0}=e,{groupFilter:Q=d=>d}=e,{isGroupHeaderSelectable:j=!1}=e,{getGroupHeaderLabel:z=d=>d[X]||d.id}=e,{labelIdentifier:X="label"}=e,{getOptionLabel:I=(d,M)=>d.isCreator?`Create "${M}"`:d[X]}=e,{optionIdentifier:b="value"}=e,{loadOptions:ce=void 0}=e,{hasError:Ae=!1}=e,{containerStyles:qe=""}=e,{getSelectionLabel:Ge=d=>d?d[X]:null}=e,{createGroupHeaderItem:yt=d=>({value:d,label:d})}=e,{createItem:st=d=>({value:d,label:d})}=e;const In=()=>i;let{isSearchable:_t=!0}=e,{inputStyles:Kt=""}=e,{isClearable:Nt=!0}=e,{isWaiting:rt=!1}=e,{listPlacement:E="auto"}=e,{listOpen:W=!1}=e,{isVirtualList:Me=!1}=e,{loadOptionsInterval:Rt=300}=e,{noOptionsMessage:En="No options"}=e,{hideEmptyState:Zn=!1}=e,{inputAttributes:ot={}}=e,{listAutoWidth:bn=!0}=e,{itemHeight:$n=40}=e,{Icon:zt=void 0}=e,{iconProps:ei={}}=e,{showChevron:Xt=!1}=e,{showIndicator:ti=!1}=e,{containerClasses:Yt=""}=e,{indicatorSvg:ni=void 0}=e,{listOffset:at=5}=e,{ClearIcon:ss=Bw}=e,{Item:ii=gf}=e,{List:rs=kw}=e,{Selection:os=Ow}=e,{MultiSelection:as=Dw}=e,{VirtualList:Dt=Vw}=e;function Rr(d){if(d.loadOptions&&d.filterText.length>0)return;if(!d.items)return[];d.items&&d.items.length>0&&typeof d.items[0]!="object"&&(d.items=Tu(d.items));let M=d.items.filter(re=>{let Ze=B(I(re,d.filterText),d.filterText,re);return Ze&&d.isMulti&&d.value&&Array.isArray(d.value)&&(Ze=!d.value.some(Jt=>Jt[d.optionIdentifier]===re[d.optionIdentifier])),Ze});return d.groupBy&&(M=_f(M)),d.isCreatable&&(M=ls(M,d.filterText)),M}function ls(d,M){if(M.length===0)return d;const re=st(M);return d[0]&&M===d[0][X]?d:(re.isCreator=!0,[...d,re])}let{selectedValue:si=null}=e,y,Qe,Ke,Ee,ze,us;const mf=jw(async()=>{n(4,rt=!0);let d=await ce(S).catch(M=>{console.warn("svelte-select loadOptions error :>> ",M),c("error",{type:"loadOptions",details:M})});d&&!d.cancelled&&(d?(d&&d.length>0&&typeof d[0]!="object"&&(d=Tu(d)),n(81,i=[...d]),c("loaded",{items:i})):n(81,i=[]),C&&n(81,i=ls(i,S)),n(4,rt=!1),n(1,O=!0),n(5,W=!0))},Rt);function pf(){typeof m=="string"?n(2,m={[b]:m,label:m}):w&&Array.isArray(m)&&m.length>0&&n(2,m=m.map(d=>typeof d=="string"?{value:d,label:d}:d))}let Tn;function yf(){n(31,Tn=Object.assign({autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:!1,tabindex:0,type:"text","aria-autocomplete":"list"},ot)),f&&n(31,Tn.id=f,Tn),_t||n(31,Tn.readonly=!0,Tn)}function _f(d){const M=[],re={};d.forEach(Jt=>{const vt=R(Jt);M.includes(vt)||(M.push(vt),re[vt]=[],vt&&re[vt].push(Object.assign(yt(vt,Jt),{id:vt,isGroupHeader:!0,isSelectable:j}))),re[vt].push(Object.assign({isGroupItem:!!vt},Jt))});const Ze=[];return Q(M).forEach(Jt=>{Ze.push(...re[Jt])}),Ze}function vf(){if(w){JSON.stringify(m)!==JSON.stringify(Qe)&&Ma()&&c("select",m);return}(!Qe||JSON.stringify(m[b])!==JSON.stringify(Qe[b]))&&c("select",m)}function wf(){O||W?Dr():p&&p.blur()}function If(){m&&(Array.isArray(m)?n(2,m=[...m]):n(2,m=[m]))}function Ef(){m&&n(2,m=null)}function bf(){S.length!==0&&(n(1,O=!0),n(5,W=!0),ce?mf():(n(5,W=!0),w&&n(30,y=void 0)))}Uu(async()=>{n(77,Qe=m),n(78,Ke=S),n(79,Ee=O),n(80,ze=w)});function Ma(){let d=!0;if(m){const M=[],re=[];m.forEach(Ze=>{M.includes(Ze[b])?d=!1:(M.push(Ze[b]),re.push(Ze))}),d||n(2,m=re)}return d}function Ua(d){let M=d?d[b]:m[b];return P.find(re=>re[b]===M)}function Tf(d){!d||d.length===0||d.some(M=>typeof M!="object")||!m||(w?m.some(M=>!M||!M[b]):!m[b])||(Array.isArray(m)?n(2,m=m.map(M=>Ua(M)||M)):n(2,m=Ua()||m))}function Va(d){const{detail:M}=d,re=m[M?M.i:m.length-1];m.length===1?n(2,m=void 0):n(2,m=m.filter(Ze=>Ze!==re)),c("clear",re)}function Sf(d){if(!!O)switch(d.key){case"ArrowDown":d.preventDefault(),n(5,W=!0),n(30,y=void 0);break;case"ArrowUp":d.preventDefault(),n(5,W=!0),n(30,y=void 0);break;case"Tab":W||n(1,O=!1);break;case"Backspace":if(!w||S.length>0)return;if(w&&m&&m.length>0){if(Va(y!==void 0?y:m.length-1),y===0||y===void 0)break;n(30,y=m.length>y?y-1:void 0)}break;case"ArrowLeft":if(!w||S.length>0)return;y===void 0?n(30,y=m.length-1):m.length>y&&y!==0&&n(30,y-=1);break;case"ArrowRight":if(!w||S.length>0||y===void 0)return;y===m.length-1?n(30,y=void 0):y<m.length-1&&n(30,y+=1);break}}function Dr(){n(1,O=!0),p&&p.focus()}function kf(d){if(!g)return;const M=d.path&&d.path.length>0?d.path[0]:d.target;g.contains(M)||g.contains(d.relatedTarget)||(n(1,O=!1),n(5,W=!1),n(30,y=void 0),p&&p.blur())}function Af(){x||(n(1,O=!0),n(5,W=!W))}function Cf(){n(2,m=void 0),n(5,W=!1),c("clear",m),Dr()}tr(()=>{O&&p&&p.focus()});function Of(d){const{detail:M}=d;if(M){n(3,S="");const re=Object.assign({},M);(!re.isGroupHeader||re.isSelectable)&&(w?n(2,m=m?m.concat([re]):[re]):n(2,m=re),n(2,m),setTimeout(()=>{n(5,W=!1),n(30,y=void 0)}))}}function Nf(d){const{detail:M}=d;w?(n(2,m=m||[]),n(2,m=[...m,st(M)])):n(2,m=st(M)),c("itemCreated",M),n(3,S=""),n(5,W=!1),n(30,y=void 0)}function Rf(){n(3,S=""),n(5,W=!1)}let{ariaValues:Lr=d=>`Option ${d}, selected.`}=e,{ariaListOpen:Pr=(d,M)=>`You are currently focused on option ${d}. There are ${M} results available.`}=e,{ariaFocused:Mr=()=>"Select is focused, type to refine list, press down to open the menu."}=e;function Df(){let d;return w&&m.length>0?d=m.map(M=>Ge(M)).join(", "):d=Ge(m),Lr(d)}function Lf(){if(!O||!i||i.length===0)return"";let d=i[us];if(W&&d){let M=Ge(d),re=i?i.length:0;return Pr(M,re)}else return Mr()}function Pf(d){$e[d?"unshift":"push"](()=>{p=d,n(6,p)})}function Mf(){S=this.value,n(3,S)}function Uf(d){us=d,n(28,us)}function Vf(d){$e[d?"unshift":"push"](()=>{g=d,n(0,g)})}return t.$$set=d=>{"id"in d&&n(46,f=d.id),"container"in d&&n(0,g=d.container),"input"in d&&n(6,p=d.input),"isMulti"in d&&n(7,w=d.isMulti),"multiFullItemClearable"in d&&n(8,D=d.multiFullItemClearable),"isDisabled"in d&&n(9,x=d.isDisabled),"isCreatable"in d&&n(47,C=d.isCreatable),"isFocused"in d&&n(1,O=d.isFocused),"value"in d&&n(2,m=d.value),"filterText"in d&&n(3,S=d.filterText),"placeholder"in d&&n(48,_=d.placeholder),"placeholderAlwaysShow"in d&&n(49,G=d.placeholderAlwaysShow),"items"in d&&n(50,P=d.items),"itemFilter"in d&&n(51,B=d.itemFilter),"groupBy"in d&&n(52,R=d.groupBy),"groupFilter"in d&&n(53,Q=d.groupFilter),"isGroupHeaderSelectable"in d&&n(54,j=d.isGroupHeaderSelectable),"getGroupHeaderLabel"in d&&n(55,z=d.getGroupHeaderLabel),"labelIdentifier"in d&&n(56,X=d.labelIdentifier),"getOptionLabel"in d&&n(57,I=d.getOptionLabel),"optionIdentifier"in d&&n(58,b=d.optionIdentifier),"loadOptions"in d&&n(59,ce=d.loadOptions),"hasError"in d&&n(10,Ae=d.hasError),"containerStyles"in d&&n(11,qe=d.containerStyles),"getSelectionLabel"in d&&n(12,Ge=d.getSelectionLabel),"createGroupHeaderItem"in d&&n(60,yt=d.createGroupHeaderItem),"createItem"in d&&n(61,st=d.createItem),"isSearchable"in d&&n(13,_t=d.isSearchable),"inputStyles"in d&&n(14,Kt=d.inputStyles),"isClearable"in d&&n(15,Nt=d.isClearable),"isWaiting"in d&&n(4,rt=d.isWaiting),"listPlacement"in d&&n(63,E=d.listPlacement),"listOpen"in d&&n(5,W=d.listOpen),"isVirtualList"in d&&n(64,Me=d.isVirtualList),"loadOptionsInterval"in d&&n(65,Rt=d.loadOptionsInterval),"noOptionsMessage"in d&&n(66,En=d.noOptionsMessage),"hideEmptyState"in d&&n(67,Zn=d.hideEmptyState),"inputAttributes"in d&&n(16,ot=d.inputAttributes),"listAutoWidth"in d&&n(68,bn=d.listAutoWidth),"itemHeight"in d&&n(69,$n=d.itemHeight),"Icon"in d&&n(17,zt=d.Icon),"iconProps"in d&&n(18,ei=d.iconProps),"showChevron"in d&&n(19,Xt=d.showChevron),"showIndicator"in d&&n(20,ti=d.showIndicator),"containerClasses"in d&&n(21,Yt=d.containerClasses),"indicatorSvg"in d&&n(22,ni=d.indicatorSvg),"listOffset"in d&&n(70,at=d.listOffset),"ClearIcon"in d&&n(23,ss=d.ClearIcon),"Item"in d&&n(71,ii=d.Item),"List"in d&&n(24,rs=d.List),"Selection"in d&&n(25,os=d.Selection),"MultiSelection"in d&&n(26,as=d.MultiSelection),"VirtualList"in d&&n(72,Dt=d.VirtualList),"selectedValue"in d&&n(73,si=d.selectedValue),"ariaValues"in d&&n(74,Lr=d.ariaValues),"ariaListOpen"in d&&n(75,Pr=d.ariaListOpen),"ariaFocused"in d&&n(76,Mr=d.ariaFocused)},t.$$.update=()=>{t.$$.dirty[0]&140|t.$$.dirty[1]&405340160&&n(81,i=Rr({loadOptions:ce,filterText:S,items:P,value:m,isMulti:w,optionIdentifier:b,groupBy:R,isCreatable:C})),t.$$.dirty[2]&2048&&si&&console.warn("selectedValue is no longer used. Please use value instead."),t.$$.dirty[1]&524288&&Tf(P),t.$$.dirty[0]&4&&m&&pf(),t.$$.dirty[0]&73728&&(ot||!_t)&&yf(),t.$$.dirty[0]&128|t.$$.dirty[2]&262144&&(w&&If(),ze&&!w&&Ef()),t.$$.dirty[0]&132&&w&&m&&m.length>1&&Ma(),t.$$.dirty[0]&4&&m&&vf(),t.$$.dirty[0]&132|t.$$.dirty[2]&32768&&!m&&w&&Qe&&c("select",m),t.$$.dirty[0]&2|t.$$.dirty[2]&131072&&O!==Ee&&wf(),t.$$.dirty[0]&8|t.$$.dirty[2]&65536&&S!==Ke&&bf(),t.$$.dirty[0]&12&&n(29,s=m&&S.length===0),t.$$.dirty[0]&536904208&&n(37,r=s&&Nt&&!x&&!rt),t.$$.dirty[0]&132|t.$$.dirty[1]&393216&&n(36,o=G&&w?_:m?"":_),t.$$.dirty[0]&132&&n(35,a=w&&m&&m.length>0),t.$$.dirty[0]&141|t.$$.dirty[1]&218103808|t.$$.dirty[2]&526326&&n(34,l={Item:ii,filterText:S,optionIdentifier:b,noOptionsMessage:En,hideEmptyState:Zn,isVirtualList:Me,VirtualList:Dt,value:m,isMulti:w,getGroupHeaderLabel:z,items:i,itemHeight:$n,getOptionLabel:I,listPlacement:E,parent:g,listAutoWidth:bn,listOffset:at}),t.$$.dirty[0]&132&&n(33,u=m?Df():""),t.$$.dirty[0]&268435490|t.$$.dirty[2]&524288&&n(32,h=Lf())},[g,O,m,S,rt,W,p,w,D,x,Ae,qe,Ge,_t,Kt,Nt,ot,zt,ei,Xt,ti,Yt,ni,ss,rs,os,as,Cf,us,s,y,Tn,h,u,l,a,o,r,Va,Sf,Dr,kf,Af,Of,Nf,Rf,f,C,_,G,P,B,R,Q,j,z,X,I,b,ce,yt,st,In,E,Me,Rt,En,Zn,bn,$n,at,ii,Dt,si,Lr,Pr,Mr,Qe,Ke,Ee,ze,i,Pf,Mf,Uf,Vf]}class m0 extends Ot{constructor(e){super();Ct(this,e,qw,Ww,gt,{id:46,container:0,input:6,isMulti:7,multiFullItemClearable:8,isDisabled:9,isCreatable:47,isFocused:1,value:2,filterText:3,placeholder:48,placeholderAlwaysShow:49,items:50,itemFilter:51,groupBy:52,groupFilter:53,isGroupHeaderSelectable:54,getGroupHeaderLabel:55,labelIdentifier:56,getOptionLabel:57,optionIdentifier:58,loadOptions:59,hasError:10,containerStyles:11,getSelectionLabel:12,createGroupHeaderItem:60,createItem:61,getFilteredItems:62,isSearchable:13,inputStyles:14,isClearable:15,isWaiting:4,listPlacement:63,listOpen:5,isVirtualList:64,loadOptionsInterval:65,noOptionsMessage:66,hideEmptyState:67,inputAttributes:16,listAutoWidth:68,itemHeight:69,Icon:17,iconProps:18,showChevron:19,showIndicator:20,containerClasses:21,indicatorSvg:22,listOffset:70,ClearIcon:23,Item:71,List:24,Selection:25,MultiSelection:26,VirtualList:72,selectedValue:73,handleClear:27,ariaValues:74,ariaListOpen:75,ariaFocused:76},null,[-1,-1,-1,-1])}get getFilteredItems(){return this.$$.ctx[62]}get handleClear(){return this.$$.ctx[27]}}export{a0 as $,Hu as A,ye as B,$s as C,$w as D,vs as E,$ as F,me as G,ie as H,Po as I,Oo as J,Jw as K,Ro as L,Do as M,No as N,Kw as O,Zw as P,e0 as Q,g0 as R,Ot as S,t0 as T,d0 as U,s0 as V,f0 as W,xl as X,m0 as Y,qa as Z,it as _,J as a,he as a0,ed as a1,r0 as a2,et as a3,i0 as a4,n0 as a5,sn as a6,fs as a7,uw as a8,Xw as a9,zw as aa,l0 as ab,gw as ac,h0 as ad,c0 as ae,o0 as af,Yw as ag,u0 as ah,v as b,se as c,A as d,ee as e,Sn as f,K as g,Vn as h,Ct as i,ks as j,Ce as k,ue as l,Oe as m,de as n,F as o,ge as p,L as q,ud as r,gt as s,jt as t,Qw as u,tr as v,ve as w,mt as x,pe as y,Mo as z};
