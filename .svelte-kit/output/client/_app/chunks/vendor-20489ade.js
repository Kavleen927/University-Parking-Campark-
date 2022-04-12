var Yd=Object.defineProperty,Qd=Object.defineProperties;var Zd=Object.getOwnPropertyDescriptors;var Tl=Object.getOwnPropertySymbols;var $d=Object.prototype.hasOwnProperty,eg=Object.prototype.propertyIsEnumerable;var Sl=(t,e,n)=>e in t?Yd(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,nn=(t,e)=>{for(var n in e||(e={}))$d.call(e,n)&&Sl(t,n,e[n]);if(Tl)for(var n of Tl(e))eg.call(e,n)&&Sl(t,n,e[n]);return t},kl=(t,e)=>Qd(t,Zd(e));function _e(){}const mu=t=>t;function _r(t,e){for(const n in e)t[n]=e[n];return t}function pu(t){return t()}function Cl(){return Object.create(null)}function at(t){t.forEach(pu)}function Pn(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Ts;function TI(t,e){return Ts||(Ts=document.createElement("a")),Ts.href=e,t===Ts.href}function tg(t){return Object.keys(t).length===0}function ng(t,...e){if(t==null)return _e;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function SI(t,e,n){t.$$.on_destroy.push(ng(e,n))}function ia(t,e,n,i){if(t){const s=yu(t,e,n,i);return t[0](s)}}function yu(t,e,n,i){return t[1]&&i?_r(n.ctx.slice(),t[1](i(e))):n.ctx}function sa(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|s[a];return r}return e.dirty|s}return e.dirty}function ra(t,e,n,i,s,r){if(s){const o=yu(e,n,i,r);t.p(o,s)}}function oa(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ft(t){return t==null?"":t}const _u=typeof window!="undefined";let ig=_u?()=>window.performance.now():()=>Date.now(),aa=_u?t=>requestAnimationFrame(t):_e;const Fn=new Set;function vu(t){Fn.forEach(e=>{e.c(t)||(Fn.delete(e),e.f())}),Fn.size!==0&&aa(vu)}function sg(t){let e;return Fn.size===0&&aa(vu),{promise:new Promise(n=>{Fn.add(e={c:t,f:n})}),abort(){Fn.delete(e)}}}let vr=!1;function rg(){vr=!0}function og(){vr=!1}function ag(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function lg(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const h=e[c];h.claim_order!==void 0&&l.push(h)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,h=(s>0&&e[n[s]].claim_order<=c?s+1:ag(1,s,f=>e[n[f]].claim_order,c))-1;i[l]=n[h]+1;const u=h+1;n[u]=l,s=Math.max(u,s)}const r=[],o=[];let a=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(r.push(e[l-1]);a>=l;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);r.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<r.length&&o[l].claim_order>=r[c].claim_order;)c++;const h=c<r.length?r[c]:null;t.insertBefore(o[l],h)}}function wu(t,e){t.appendChild(e)}function Iu(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function cg(t){const e=ie("style");return ug(Iu(t),e),e.sheet}function ug(t,e){wu(t.head||t,e)}function ne(t,e){if(vr){for(lg(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function hg(t,e,n){t.insertBefore(e,n||null)}function X(t,e,n){vr&&!n?ne(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function la(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ie(t){return document.createElement(t)}function At(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Ht(t){return document.createTextNode(t)}function De(){return Ht(" ")}function de(){return Ht("")}function oe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function fg(t){return function(e){return e.preventDefault(),t.call(this,e)}}function w(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Al(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:w(t,i,e[i])}function To(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:w(t,e,n)}function kI(t){return t===""?null:+t}function $(t){return Array.from(t.childNodes)}function Eu(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function bu(t,e,n,i,s=!1){Eu(t);const r=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,s||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function Tu(t,e,n,i){return bu(t,s=>s.nodeName===e,s=>{const r=[];for(let o=0;o<s.attributes.length;o++){const a=s.attributes[o];n[a.name]||r.push(a.name)}r.forEach(o=>s.removeAttribute(o))},()=>i(e))}function ae(t,e,n){return Tu(t,e,n,ie)}function Wt(t,e,n){return Tu(t,e,n,At)}function Wn(t,e){return bu(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Ht(e),!0)}function Re(t){return Wn(t," ")}function Nl(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function dg(t){const e=Nl(t,"HTML_TAG_START",0),n=Nl(t,"HTML_TAG_END",e);if(e===n)return new So;Eu(t);const i=t.splice(e,n-e+1);C(i[0]),C(i[i.length-1]);const s=i.slice(1,i.length-1);for(const r of s)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new So(s)}function Ws(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ol(t,e){t.value=e==null?"":e}function Dn(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function CI(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function AI(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let Ss;function gg(){if(Ss===void 0){Ss=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{Ss=!0}}return Ss}function mg(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=ie("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=gg();let r;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=oe(window,"message",o=>{o.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{r=oe(i.contentWindow,"resize",e)}),wu(t,i),()=>{(s||r&&i.contentWindow)&&r(),C(i)}}function me(t,e,n){t.classList[n?"add":"remove"](e)}function Su(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function NI(t,e=document.body){return Array.from(e.querySelectorAll(t))}class pg{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.e=ie(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)hg(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(C)}}class So extends pg{constructor(e){super();this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)X(this.t,this.n[n],e)}}const Ks=new Map;let Gs=0;function yg(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function _g(t,e){const n={stylesheet:cg(e),rules:{}};return Ks.set(t,n),n}function Dl(t,e,n,i,s,r,o,a=0){const l=16.666/i;let c=`{
`;for(let O=0;O<=1;O+=l){const F=e+(n-e)*r(O);c+=O*100+`%{${o(F,1-F)}}
`}const h=c+`100% {${o(n,1-n)}}
}`,u=`__svelte_${yg(h)}_${a}`,f=Iu(t),{stylesheet:g,rules:m}=Ks.get(f)||_g(f,t);m[u]||(m[u]=!0,g.insertRule(`@keyframes ${u} ${h}`,g.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${u} ${i}ms linear ${s}ms 1 both`,Gs+=1,u}function vg(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),Gs-=s,Gs||wg())}function wg(){aa(()=>{Gs||(Ks.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),Ks.clear())})}let Ri;function ki(t){Ri=t}function In(){if(!Ri)throw new Error("Function called outside component initialization");return Ri}function ku(t){In().$$.before_update.push(t)}function wr(t){In().$$.on_mount.push(t)}function OI(t){In().$$.after_update.push(t)}function Cu(t){In().$$.on_destroy.push(t)}function zi(){const t=In();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=Su(e,n);i.slice().forEach(r=>{r.call(t,s)})}}}function Ig(t,e){In().$$.context.set(t,e)}function DI(t){return In().$$.context.get(t)}const Ii=[],st=[],Ls=[],ko=[],Au=Promise.resolve();let Co=!1;function Nu(){Co||(Co=!0,Au.then(Ou))}function Ps(){return Nu(),Au}function cn(t){Ls.push(t)}function Eg(t){ko.push(t)}const io=new Set;let ks=0;function Ou(){const t=Ri;do{for(;ks<Ii.length;){const e=Ii[ks];ks++,ki(e),bg(e.$$)}for(ki(null),Ii.length=0,ks=0;st.length;)st.pop()();for(let e=0;e<Ls.length;e+=1){const n=Ls[e];io.has(n)||(io.add(n),n())}Ls.length=0}while(Ii.length);for(;ko.length;)ko.pop()();Co=!1,io.clear(),ki(t)}function bg(t){if(t.fragment!==null){t.update(),at(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(cn)}}let vi;function Tg(){return vi||(vi=Promise.resolve(),vi.then(()=>{vi=null})),vi}function so(t,e,n){t.dispatchEvent(Su(`${e?"intro":"outro"}${n}`))}const Ms=new Set;let Et;function pe(){Et={r:0,c:[],p:Et}}function ye(){Et.r||at(Et.c),Et=Et.p}function P(t,e){t&&t.i&&(Ms.delete(t),t.i(e))}function x(t,e,n,i){if(t&&t.o){if(Ms.has(t))return;Ms.add(t),Et.c.push(()=>{Ms.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const Sg={duration:0};function Cs(t,e,n,i){let s=e(t,n),r=i?0:1,o=null,a=null,l=null;function c(){l&&vg(t,l)}function h(f,g){const m=f.b-r;return g*=Math.abs(m),{a:r,b:f.b,d:m,duration:g,start:f.start,end:f.start+g,group:f.group}}function u(f){const{delay:g=0,duration:m=300,easing:v=mu,tick:O=_e,css:F}=s||Sg,N={start:ig()+g,b:f};f||(N.group=Et,Et.r+=1),o||a?a=N:(F&&(c(),l=Dl(t,r,f,m,g,v,F)),f&&O(0,1),o=h(N,m),cn(()=>so(t,f,"start")),sg(A=>{if(a&&A>a.start&&(o=h(a,m),a=null,so(t,o.b,"start"),F&&(c(),l=Dl(t,r,o.b,o.duration,0,v,s.css))),o){if(A>=o.end)O(r=o.b,1-r),so(t,o.b,"end"),a||(o.b?c():--o.group.r||at(o.group.c)),o=null;else if(A>=o.start){const p=A-o.start;r=o.a+o.d*v(p/o.duration),O(r,1-r)}}return!!(o||a)}))}return{run(f){Pn(s)?Tg().then(()=>{s=s(),u(f)}):u(f)},end(){c(),o=a=null}}}const kg=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Cg(t,e){x(t,1,1,()=>{e.delete(t.key)})}function Ag(t,e,n,i,s,r,o,a,l,c,h,u){let f=t.length,g=r.length,m=f;const v={};for(;m--;)v[t[m].key]=m;const O=[],F=new Map,N=new Map;for(m=g;m--;){const _=u(s,r,m),J=n(_);let M=o.get(J);M?i&&M.p(_,e):(M=c(J,_),M.c()),F.set(J,O[m]=M),J in v&&N.set(J,Math.abs(m-v[J]))}const A=new Set,p=new Set;function k(_){P(_,1),_.m(a,h),o.set(_.key,_),h=_.first,g--}for(;f&&g;){const _=O[g-1],J=t[f-1],M=_.key,q=J.key;_===J?(h=_.first,f--,g--):F.has(q)?!o.has(M)||A.has(M)?k(_):p.has(q)?f--:N.get(M)>N.get(q)?(p.add(M),k(_)):(A.add(q),f--):(l(J,o),f--)}for(;f--;){const _=t[f];F.has(_.key)||l(_,o)}for(;g;)k(O[g-1]);return O}function ca(t,e){const n={},i={},s={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(n[l]=a[l],s[l]=1);t[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in n||(n[o]=void 0);return n}function Du(t){return typeof t=="object"&&t!==null?t:{}}function Rl(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function be(t){t&&t.c()}function yt(t,e){t&&t.l(e)}function ve(t,e,n,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=t.$$;s&&s.m(e,n),i||cn(()=>{const l=r.map(pu).filter(Pn);o?o.push(...l):at(l),t.$$.on_mount=[]}),a.forEach(cn)}function we(t,e){const n=t.$$;n.fragment!==null&&(at(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ng(t,e){t.$$.dirty[0]===-1&&(Ii.push(t),Nu(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Dt(t,e,n,i,s,r,o,a=[-1]){const l=Ri;ki(t);const c=t.$$={fragment:null,ctx:null,props:r,update:_e,not_equal:s,bound:Cl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Cl(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(u,f,...g)=>{const m=g.length?g[0]:f;return c.ctx&&s(c.ctx[u],c.ctx[u]=m)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](m),h&&Ng(t,u)),f}):[],c.update(),h=!0,at(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){rg();const u=$(e.target);c.fragment&&c.fragment.l(u),u.forEach(C)}else c.fragment&&c.fragment.c();e.intro&&P(t.$$.fragment),ve(t,e.target,e.anchor,e.customElement),og(),Ou()}ki(l)}class Rt{$destroy(){we(this,1),this.$destroy=_e}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!tg(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Rn=[];function RI(t,e=_e){let n;const i=new Set;function s(a){if(pt(t,a)&&(t=a,n)){const l=!Rn.length;for(const c of i)c[1](),Rn.push(c,t);if(l){for(let c=0;c<Rn.length;c+=2)Rn[c][0](Rn[c+1]);Rn.length=0}}}function r(a){s(a(t))}function o(a,l=_e){const c=[a,l];return i.add(c),i.size===1&&(n=e(s)||_e),a(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:s,update:r,subscribe:o}}const Og=t=>({loading:t&1,success:t&8,error:t&2,notSupported:t&16,coords:t&4}),Ll=t=>({loading:t[0],success:t[3],error:t[1],notSupported:t[4],coords:t[2]});function Dg(t){let e;const n=t[14].default,i=ia(n,t,t[13],Ll);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,[r]){i&&i.p&&(!e||r&8223)&&ra(i,n,s,s[13],e?sa(n,s[13],r,Og):oa(s[13]),Ll)},i(s){e||(P(i,s),e=!0)},o(s){x(i,s),e=!1},d(s){i&&i.d(s)}}}function Rg(t,e,n){let{$$slots:i={},$$scope:s}=e,{coords:r=[-1,-1]}=e,{position:o={}}=e,{options:a={}}=e,{getPosition:l=!1}=e,{watch:c=!1}=e,{loading:h=!1}=e,{success:u=!1}=e,{error:f=!1}=e,{notSupported:g=!1}=e;async function m(_){if(n(4,g=!1),n(0,h=!0),n(1,f=!1),!("geolocation"in navigator))n(4,g=!0);else return N&&await O(N),n(12,N=navigator.geolocation.watchPosition(p,k,_)),N}async function v(_){n(4,g=!1),n(0,h=!0),n(1,f=!1),"geolocation"in navigator?navigator.geolocation.getCurrentPosition(p,k,_):n(4,g=!0)}async function O(_){"geolocation"in navigator?(navigator.geolocation.clearWatch(_),_=void 0):n(4,g=!0)}const F=zi();let N,A;function p(_){n(2,r=[_.coords.longitude,_.coords.latitude]),n(5,o={coords:{accuracy:_.coords.accuracy,altitude:_.coords.altitude,altitudeAccuracy:_.coords.altitudeAccuracy,heading:_.coords.heading,latitude:_.coords.latitude,longitude:_.coords.longitude,speed:_.coords.speed},timestamp:_.timestamp}),(!A||A.coords.latitude!==_.coords.latitude||A.coords.longitude!==_.coords.longitude)&&(A=_,F("position",o)),n(0,h=!1)}function k(_){F("error",_),n(1,f=_),n(0,h=!1)}return Cu(()=>{N&&O(N)}),t.$$set=_=>{"coords"in _&&n(2,r=_.coords),"position"in _&&n(5,o=_.position),"options"in _&&n(6,a=_.options),"getPosition"in _&&n(7,l=_.getPosition),"watch"in _&&n(8,c=_.watch),"loading"in _&&n(0,h=_.loading),"success"in _&&n(3,u=_.success),"error"in _&&n(1,f=_.error),"notSupported"in _&&n(4,g=_.notSupported),"$$scope"in _&&n(13,s=_.$$scope)},t.$$.update=()=>{t.$$.dirty&448&&typeof window!="undefined"&&l&&c&&m(a),t.$$.dirty&448&&typeof window!="undefined"&&l&&!c&&v(a),t.$$.dirty&131&&n(3,u=l&&!h&&!f),t.$$.dirty&4480&&(!l||!c)&&N&&O(N)},[h,f,r,u,g,o,a,l,c,m,v,O,N,s,i]}class LI extends Rt{constructor(e){super();Dt(this,e,Rg,Dg,pt,{coords:2,position:5,options:6,getPosition:7,watch:8,loading:0,success:3,error:1,notSupported:4,watchPosition:9,getGeolocationPosition:10,clearWatcher:11})}get watchPosition(){return this.$$.ctx[9]}get getGeolocationPosition(){return this.$$.ctx[10]}get clearWatcher(){return this.$$.ctx[11]}}function Lg(t,e){const n=t.getBoundingClientRect(),i=e.getBoundingClientRect(),s={};return s.top=n.top<0,s.left=n.left<0,s.bottom=n.bottom+i.height>(window.innerHeight||document.documentElement.clientHeight),s.right=n.right>(window.innerWidth||document.documentElement.clientWidth),s.any=s.top||s.left||s.bottom||s.right,s}function Pg(t){let e,n=t[0](t[1],t[2])+"",i;return{c(){e=ie("div"),this.h()},l(s){e=ae(s,"DIV",{class:!0});var r=$(e);r.forEach(C),this.h()},h(){w(e,"class",i="item "+t[3]+" svelte-3e0qet")},m(s,r){X(s,e,r),e.innerHTML=n},p(s,[r]){r&7&&n!==(n=s[0](s[1],s[2])+"")&&(e.innerHTML=n),r&8&&i!==(i="item "+s[3]+" svelte-3e0qet")&&w(e,"class",i)},i:_e,o:_e,d(s){s&&C(e)}}}function Mg(t,e,n){let{isActive:i=!1}=e,{isFirst:s=!1}=e,{isHover:r=!1}=e,{isSelectable:o=!1}=e,{getOptionLabel:a=void 0}=e,{item:l=void 0}=e,{filterText:c=""}=e,h="";return t.$$set=u=>{"isActive"in u&&n(4,i=u.isActive),"isFirst"in u&&n(5,s=u.isFirst),"isHover"in u&&n(6,r=u.isHover),"isSelectable"in u&&n(7,o=u.isSelectable),"getOptionLabel"in u&&n(0,a=u.getOptionLabel),"item"in u&&n(1,l=u.item),"filterText"in u&&n(2,c=u.filterText)},t.$$.update=()=>{if(t.$$.dirty&242){const u=[];i&&u.push("active"),s&&u.push("first"),r&&u.push("hover"),l.isGroupHeader&&u.push("groupHeader"),l.isGroupItem&&u.push("groupItem"),o||u.push("notSelectable"),n(3,h=u.join(" "))}},[a,l,c,h,i,s,r,o]}class Ru extends Rt{constructor(e){super();Dt(this,e,Mg,Pg,pt,{isActive:4,isFirst:5,isHover:6,isSelectable:7,getOptionLabel:0,item:1,filterText:2})}}function Pl(t,e,n){const i=t.slice();return i[41]=e[n],i[42]=n,i}function Ug(t){let e,n,i=t[1],s=[];for(let a=0;a<i.length;a+=1)s[a]=Vl(Pl(t,i,a));const r=a=>x(s[a],1,1,()=>{s[a]=null});let o=null;return i.length||(o=Ml(t)),{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=de(),o&&o.c()},l(a){for(let l=0;l<s.length;l+=1)s[l].l(a);e=de(),o&&o.l(a)},m(a,l){for(let c=0;c<s.length;c+=1)s[c].m(a,l);X(a,e,l),o&&o.m(a,l),n=!0},p(a,l){if(l[0]&114390){i=a[1];let c;for(c=0;c<i.length;c+=1){const h=Pl(a,i,c);s[c]?(s[c].p(h,l),P(s[c],1)):(s[c]=Vl(h),s[c].c(),P(s[c],1),s[c].m(e.parentNode,e))}for(pe(),c=i.length;c<s.length;c+=1)r(c);ye(),!i.length&&o?o.p(a,l):i.length?o&&(o.d(1),o=null):(o=Ml(a),o.c(),o.m(e.parentNode,e))}},i(a){if(!n){for(let l=0;l<i.length;l+=1)P(s[l]);n=!0}},o(a){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)x(s[l]);n=!1},d(a){la(s,a),a&&C(e),o&&o.d(a)}}}function Vg(t){let e,n,i;var s=t[3];function r(o){return{props:{items:o[1],itemHeight:o[8],$$slots:{default:[jg,({item:a,i:l})=>({41:a,42:l}),({item:a,i:l})=>[0,(a?1024:0)|(l?2048:0)]]},$$scope:{ctx:o}}}}return s&&(e=new s(r(t))),{c(){e&&be(e.$$.fragment),n=de()},l(o){e&&yt(e.$$.fragment,o),n=de()},m(o,a){e&&ve(e,o,a),X(o,n,a),i=!0},p(o,a){const l={};if(a[0]&2&&(l.items=o[1]),a[0]&256&&(l.itemHeight=o[8]),a[0]&9814|a[1]&11264&&(l.$$scope={dirty:a,ctx:o}),s!==(s=o[3])){if(e){pe();const c=e;x(c.$$.fragment,1,0,()=>{we(c,1)}),ye()}s?(e=new s(r(o)),be(e.$$.fragment),P(e.$$.fragment,1),ve(e,n.parentNode,n)):e=null}else s&&e.$set(l)},i(o){i||(e&&P(e.$$.fragment,o),i=!0)},o(o){e&&x(e.$$.fragment,o),i=!1},d(o){o&&C(n),e&&we(e,o)}}}function Ml(t){let e,n=!t[11]&&Ul(t);return{c(){n&&n.c(),e=de()},l(i){n&&n.l(i),e=de()},m(i,s){n&&n.m(i,s),X(i,e,s)},p(i,s){i[11]?n&&(n.d(1),n=null):n?n.p(i,s):(n=Ul(i),n.c(),n.m(e.parentNode,e))},d(i){n&&n.d(i),i&&C(e)}}}function Ul(t){let e,n;return{c(){e=ie("div"),n=Ht(t[12]),this.h()},l(i){e=ae(i,"DIV",{class:!0});var s=$(e);n=Wn(s,t[12]),s.forEach(C),this.h()},h(){w(e,"class","empty svelte-1uyqfml")},m(i,s){X(i,e,s),ne(e,n)},p(i,s){s[0]&4096&&Ws(n,i[12])},d(i){i&&C(e)}}}function Fg(t){let e,n,i,s,r,o;var a=t[4];function l(f){return{props:{item:f[41],filterText:f[13],getOptionLabel:f[6],isFirst:Ao(f[42]),isActive:zs(f[41],f[9],f[10]),isHover:Js(f[2],f[41],f[42],f[1]),isSelectable:un(f[41])}}}a&&(n=new a(l(t)));function c(){return t[29](t[42])}function h(){return t[30](t[42])}function u(...f){return t[31](t[41],t[42],...f)}return{c(){e=ie("div"),n&&be(n.$$.fragment),i=De(),this.h()},l(f){e=ae(f,"DIV",{class:!0,tabindex:!0});var g=$(e);n&&yt(n.$$.fragment,g),i=Re(g),g.forEach(C),this.h()},h(){w(e,"class","listItem"),w(e,"tabindex","-1")},m(f,g){X(f,e,g),n&&ve(n,e,null),ne(e,i),s=!0,r||(o=[oe(e,"mouseover",c),oe(e,"focus",h),oe(e,"click",u)],r=!0)},p(f,g){t=f;const m={};if(g[0]&2&&(m.item=t[41]),g[0]&8192&&(m.filterText=t[13]),g[0]&64&&(m.getOptionLabel=t[6]),g[0]&1538&&(m.isActive=zs(t[41],t[9],t[10])),g[0]&6&&(m.isHover=Js(t[2],t[41],t[42],t[1])),g[0]&2&&(m.isSelectable=un(t[41])),a!==(a=t[4])){if(n){pe();const v=n;x(v.$$.fragment,1,0,()=>{we(v,1)}),ye()}a?(n=new a(l(t)),be(n.$$.fragment),P(n.$$.fragment,1),ve(n,e,i)):n=null}else a&&n.$set(m)},i(f){s||(n&&P(n.$$.fragment,f),s=!0)},o(f){n&&x(n.$$.fragment,f),s=!1},d(f){f&&C(e),n&&we(n),r=!1,at(o)}}}function Bg(t){let e,n=t[7](t[41])+"",i;return{c(){e=ie("div"),i=Ht(n),this.h()},l(s){e=ae(s,"DIV",{class:!0});var r=$(e);i=Wn(r,n),r.forEach(C),this.h()},h(){w(e,"class","listGroupTitle svelte-1uyqfml")},m(s,r){X(s,e,r),ne(e,i)},p(s,r){r[0]&130&&n!==(n=s[7](s[41])+"")&&Ws(i,n)},i:_e,o:_e,d(s){s&&C(e)}}}function Vl(t){let e,n,i,s;const r=[Bg,Fg],o=[];function a(l,c){return l[41].isGroupHeader&&!l[41].isSelectable?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),i=de()},l(l){n.l(l),i=de()},m(l,c){o[e].m(l,c),X(l,i,c),s=!0},p(l,c){let h=e;e=a(l),e===h?o[e].p(l,c):(pe(),x(o[h],1,1,()=>{o[h]=null}),ye(),n=o[e],n?n.p(l,c):(n=o[e]=r[e](l),n.c()),P(n,1),n.m(i.parentNode,i))},i(l){s||(P(n),s=!0)},o(l){x(n),s=!1},d(l){o[e].d(l),l&&C(i)}}}function jg(t){let e,n,i,s,r;var o=t[4];function a(u){return{props:{item:u[41],filterText:u[13],getOptionLabel:u[6],isFirst:Ao(u[42]),isActive:zs(u[41],u[9],u[10]),isHover:Js(u[2],u[41],u[42],u[1]),isSelectable:un(u[41])}}}o&&(n=new o(a(t)));function l(){return t[26](t[42])}function c(){return t[27](t[42])}function h(...u){return t[28](t[41],t[42],...u)}return{c(){e=ie("div"),n&&be(n.$$.fragment),this.h()},l(u){e=ae(u,"DIV",{class:!0});var f=$(e);n&&yt(n.$$.fragment,f),f.forEach(C),this.h()},h(){w(e,"class","listItem")},m(u,f){X(u,e,f),n&&ve(n,e,null),i=!0,s||(r=[oe(e,"mouseover",l),oe(e,"focus",c),oe(e,"click",h)],s=!0)},p(u,f){t=u;const g={};if(f[1]&1024&&(g.item=t[41]),f[0]&8192&&(g.filterText=t[13]),f[0]&64&&(g.getOptionLabel=t[6]),f[1]&2048&&(g.isFirst=Ao(t[42])),f[0]&1536|f[1]&1024&&(g.isActive=zs(t[41],t[9],t[10])),f[0]&6|f[1]&3072&&(g.isHover=Js(t[2],t[41],t[42],t[1])),f[1]&1024&&(g.isSelectable=un(t[41])),o!==(o=t[4])){if(n){pe();const m=n;x(m.$$.fragment,1,0,()=>{we(m,1)}),ye()}o?(n=new o(a(t)),be(n.$$.fragment),P(n.$$.fragment,1),ve(n,e,null)):n=null}else o&&n.$set(g)},i(u){i||(n&&P(n.$$.fragment,u),i=!0)},o(u){n&&x(n.$$.fragment,u),i=!1},d(u){u&&C(e),n&&we(n),s=!1,at(r)}}}function xg(t){let e,n,i,s,r,o;const a=[Vg,Ug],l=[];function c(h,u){return h[5]?0:1}return n=c(t),i=l[n]=a[n](t),{c(){e=ie("div"),i.c(),this.h()},l(h){e=ae(h,"DIV",{class:!0,style:!0});var u=$(e);i.l(u),u.forEach(C),this.h()},h(){w(e,"class","listContainer svelte-1uyqfml"),w(e,"style",t[14]),me(e,"virtualList",t[5])},m(h,u){X(h,e,u),l[n].m(e,null),t[32](e),s=!0,r||(o=[oe(window,"keydown",t[17]),oe(window,"resize",t[18])],r=!0)},p(h,u){let f=n;n=c(h),n===f?l[n].p(h,u):(pe(),x(l[f],1,1,()=>{l[f]=null}),ye(),i=l[n],i?i.p(h,u):(i=l[n]=a[n](h),i.c()),P(i,1),i.m(e,null)),(!s||u[0]&16384)&&w(e,"style",h[14]),u[0]&32&&me(e,"virtualList",h[5])},i(h){s||(P(i),s=!0)},o(h){x(i),s=!1},d(h){h&&C(e),l[n].d(),t[32](null),r=!1,at(o)}}}function zs(t,e,n){return e&&e[n]===t[n]}function Ao(t){return t===0}function Js(t,e,n,i){return un(e)&&(t===n||i.length===1)}function un(t){return t.isGroupHeader&&t.isSelectable||t.selectable||!t.hasOwnProperty("selectable")}function qg(t,e,n){const i=zi();let{container:s=void 0}=e,{VirtualList:r=null}=e,{Item:o=Ru}=e,{isVirtualList:a=!1}=e,{items:l=[]}=e,{labelIdentifier:c="label"}=e,{getOptionLabel:h=(E,K)=>{if(E)return E.isCreator?`Create "${K}"`:E[c]}}=e,{getGroupHeaderLabel:u=null}=e,{itemHeight:f=40}=e,{hoverItemIndex:g=0}=e,{value:m=void 0}=e,{optionIdentifier:v="value"}=e,{hideEmptyState:O=!1}=e,{noOptionsMessage:F="No options"}=e,{isMulti:N=!1}=e,{activeItemIndex:A=0}=e,{filterText:p=""}=e,{parent:k=null}=e,{listPlacement:_=null}=e,{listAutoWidth:J=null}=e,{listOffset:M=5}=e,q=0,R=!1,ee;wr(()=>{if(l.length>0&&!N&&m){const E=l.findIndex(K=>K[v]===m[v]);E&&n(2,g=E)}Oe("active"),s.addEventListener("scroll",()=>{clearTimeout(q),q=setTimeout(()=>{R=!1},100)},!1)}),ku(()=>{l||n(1,l=[]),l!==ee&&l.length>0&&n(2,g=0),ee=l});function H(E){E.isCreator||i("itemSelected",E)}function Y(E){R||n(2,g=E)}function Q(E){const{item:K,i:Be,event:Pt}=E;if(Pt.stopPropagation(),m&&!N&&m[v]===K[v])return I();K.isCreator?i("itemCreated",p):un(K)&&(n(19,A=Be),n(2,g=Be),H(K))}function I(){i("closeList")}async function T(E){if(a)return;let K=!0;for(;K;)E>0&&g===l.length-1?n(2,g=0):E<0&&g===0?n(2,g=l.length-1):n(2,g=g+E),K=!un(l[g]);await Ps(),Oe("hover")}function ge(E){switch(E.key){case"Escape":E.preventDefault(),I();break;case"ArrowDown":E.preventDefault(),l.length&&T(1);break;case"ArrowUp":E.preventDefault(),l.length&&T(-1);break;case"Enter":if(E.preventDefault(),l.length===0)break;const K=l[g];if(m&&!N&&m[v]===K[v]){I();break}K.isCreator?i("itemCreated",p):(n(19,A=g),H(l[g]));break;case"Tab":if(E.preventDefault(),l.length===0||m&&m[v]===l[g][v])return I();n(19,A=g),H(l[g]);break}}function Oe(E){if(a||!s)return;let K;const Be=s.querySelector(`.listItem .${E}`);Be&&(K=s.getBoundingClientRect().bottom-Be.getBoundingClientRect().bottom),n(0,s.scrollTop-=K,s)}let Xe;function Ye(){const{height:E,width:K}=k.getBoundingClientRect();n(14,Xe=""),n(14,Xe+=`min-width:${K}px;width:${J?"auto":"100%"};`),_==="top"||_==="auto"&&Lg(k,s).bottom?n(14,Xe+=`bottom:${E+M}px;`):n(14,Xe+=`top:${E+M}px;`)}const vt=E=>Y(E),lt=E=>Y(E),Cn=(E,K,Be)=>Q({item:E,i:K,event:Be}),wt=E=>Y(E),Qt=E=>Y(E),Lt=(E,K,Be)=>Q({item:E,i:K,event:Be});function ct(E){st[E?"unshift":"push"](()=>{s=E,n(0,s)})}return t.$$set=E=>{"container"in E&&n(0,s=E.container),"VirtualList"in E&&n(3,r=E.VirtualList),"Item"in E&&n(4,o=E.Item),"isVirtualList"in E&&n(5,a=E.isVirtualList),"items"in E&&n(1,l=E.items),"labelIdentifier"in E&&n(20,c=E.labelIdentifier),"getOptionLabel"in E&&n(6,h=E.getOptionLabel),"getGroupHeaderLabel"in E&&n(7,u=E.getGroupHeaderLabel),"itemHeight"in E&&n(8,f=E.itemHeight),"hoverItemIndex"in E&&n(2,g=E.hoverItemIndex),"value"in E&&n(9,m=E.value),"optionIdentifier"in E&&n(10,v=E.optionIdentifier),"hideEmptyState"in E&&n(11,O=E.hideEmptyState),"noOptionsMessage"in E&&n(12,F=E.noOptionsMessage),"isMulti"in E&&n(21,N=E.isMulti),"activeItemIndex"in E&&n(19,A=E.activeItemIndex),"filterText"in E&&n(13,p=E.filterText),"parent"in E&&n(22,k=E.parent),"listPlacement"in E&&n(23,_=E.listPlacement),"listAutoWidth"in E&&n(24,J=E.listAutoWidth),"listOffset"in E&&n(25,M=E.listOffset)},t.$$.update=()=>{t.$$.dirty[0]&4194305&&k&&s&&Ye()},[s,l,g,r,o,a,h,u,f,m,v,O,F,p,Xe,Y,Q,ge,Ye,A,c,N,k,_,J,M,vt,lt,Cn,wt,Qt,Lt,ct]}class Hg extends Rt{constructor(e){super();Dt(this,e,qg,xg,pt,{container:0,VirtualList:3,Item:4,isVirtualList:5,items:1,labelIdentifier:20,getOptionLabel:6,getGroupHeaderLabel:7,itemHeight:8,hoverItemIndex:2,value:9,optionIdentifier:10,hideEmptyState:11,noOptionsMessage:12,isMulti:21,activeItemIndex:19,filterText:13,parent:22,listPlacement:23,listAutoWidth:24,listOffset:25},null,[-1,-1])}}function Wg(t){let e,n=t[0](t[1])+"";return{c(){e=ie("div"),this.h()},l(i){e=ae(i,"DIV",{class:!0});var s=$(e);s.forEach(C),this.h()},h(){w(e,"class","selection svelte-pu1q1n")},m(i,s){X(i,e,s),e.innerHTML=n},p(i,[s]){s&3&&n!==(n=i[0](i[1])+"")&&(e.innerHTML=n)},i:_e,o:_e,d(i){i&&C(e)}}}function Kg(t,e,n){let{getSelectionLabel:i=void 0}=e,{item:s=void 0}=e;return t.$$set=r=>{"getSelectionLabel"in r&&n(0,i=r.getSelectionLabel),"item"in r&&n(1,s=r.item)},[i,s]}class Gg extends Rt{constructor(e){super();Dt(this,e,Kg,Wg,pt,{getSelectionLabel:0,item:1})}}function Fl(t,e,n){const i=t.slice();return i[9]=e[n],i[11]=n,i}function Bl(t){let e,n,i,s,r;function o(...a){return t[6](t[11],...a)}return{c(){e=ie("div"),n=At("svg"),i=At("path"),this.h()},l(a){e=ae(a,"DIV",{class:!0});var l=$(e);n=Wt(l,"svg",{width:!0,height:!0,viewBox:!0,focusable:!0,"aria-hidden":!0,role:!0,class:!0});var c=$(n);i=Wt(c,"path",{d:!0}),$(i).forEach(C),c.forEach(C),l.forEach(C),this.h()},h(){w(i,"d","M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"),w(n,"width","100%"),w(n,"height","100%"),w(n,"viewBox","-2 -2 50 50"),w(n,"focusable","false"),w(n,"aria-hidden","true"),w(n,"role","presentation"),w(n,"class","svelte-liu9pa"),w(e,"class","multiSelectItem_clear svelte-liu9pa")},m(a,l){X(a,e,l),ne(e,n),ne(n,i),s||(r=oe(e,"click",o),s=!0)},p(a,l){t=a},d(a){a&&C(e),s=!1,r()}}}function jl(t){let e,n,i=t[4](t[9])+"",s,r,o,a,l,c=!t[2]&&!t[3]&&Bl(t);function h(...u){return t[7](t[11],...u)}return{c(){e=ie("div"),n=ie("div"),s=De(),c&&c.c(),r=De(),this.h()},l(u){e=ae(u,"DIV",{class:!0});var f=$(e);n=ae(f,"DIV",{class:!0});var g=$(n);g.forEach(C),s=Re(f),c&&c.l(f),r=Re(f),f.forEach(C),this.h()},h(){w(n,"class","multiSelectItem_label svelte-liu9pa"),w(e,"class",o="multiSelectItem "+(t[1]===t[11]?"active":"")+" "+(t[2]?"disabled":"")+" svelte-liu9pa")},m(u,f){X(u,e,f),ne(e,n),n.innerHTML=i,ne(e,s),c&&c.m(e,null),ne(e,r),a||(l=oe(e,"click",h),a=!0)},p(u,f){t=u,f&17&&i!==(i=t[4](t[9])+"")&&(n.innerHTML=i),!t[2]&&!t[3]?c?c.p(t,f):(c=Bl(t),c.c(),c.m(e,r)):c&&(c.d(1),c=null),f&6&&o!==(o="multiSelectItem "+(t[1]===t[11]?"active":"")+" "+(t[2]?"disabled":"")+" svelte-liu9pa")&&w(e,"class",o)},d(u){u&&C(e),c&&c.d(),a=!1,l()}}}function zg(t){let e,n=t[0],i=[];for(let s=0;s<n.length;s+=1)i[s]=jl(Fl(t,n,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=de()},l(s){for(let r=0;r<i.length;r+=1)i[r].l(s);e=de()},m(s,r){for(let o=0;o<i.length;o+=1)i[o].m(s,r);X(s,e,r)},p(s,[r]){if(r&63){n=s[0];let o;for(o=0;o<n.length;o+=1){const a=Fl(s,n,o);i[o]?i[o].p(a,r):(i[o]=jl(a),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},i:_e,o:_e,d(s){la(i,s),s&&C(e)}}}function Jg(t,e,n){const i=zi();let{value:s=[]}=e,{activeValue:r=void 0}=e,{isDisabled:o=!1}=e,{multiFullItemClearable:a=!1}=e,{getSelectionLabel:l=void 0}=e;function c(f,g){g.stopPropagation(),i("multiItemClear",{i:f})}const h=(f,g)=>c(f,g),u=(f,g)=>a?c(f,g):{};return t.$$set=f=>{"value"in f&&n(0,s=f.value),"activeValue"in f&&n(1,r=f.activeValue),"isDisabled"in f&&n(2,o=f.isDisabled),"multiFullItemClearable"in f&&n(3,a=f.multiFullItemClearable),"getSelectionLabel"in f&&n(4,l=f.getSelectionLabel)},[s,r,o,a,l,c,h,u]}class Xg extends Rt{constructor(e){super();Dt(this,e,Jg,zg,pt,{value:0,activeValue:1,isDisabled:2,multiFullItemClearable:3,getSelectionLabel:4})}}function xl(t,e,n){const i=t.slice();return i[23]=e[n],i}const Yg=t=>({item:t&32,i:t&32,hoverItemIndex:t&2}),ql=t=>({item:t[23].data,i:t[23].index,hoverItemIndex:t[1]});function Qg(t){let e;return{c(){e=Ht("Missing template")},l(n){e=Wn(n,"Missing template")},m(n,i){X(n,e,i)},d(n){n&&C(e)}}}function Hl(t,e){let n,i,s;const r=e[15].default,o=ia(r,e,e[14],ql),a=o||Qg();return{key:t,first:null,c(){n=ie("svelte-virtual-list-row"),a&&a.c(),i=De(),this.h()},l(l){n=ae(l,"SVELTE-VIRTUAL-LIST-ROW",{class:!0});var c=$(n);a&&a.l(c),i=Re(c),c.forEach(C),this.h()},h(){To(n,"class","svelte-g2cagw"),this.first=n},m(l,c){X(l,n,c),a&&a.m(n,null),ne(n,i),s=!0},p(l,c){e=l,o&&o.p&&(!s||c&16418)&&ra(o,r,e,e[14],s?sa(r,e[14],c,Yg):oa(e[14]),ql)},i(l){s||(P(a,l),s=!0)},o(l){x(a,l),s=!1},d(l){l&&C(n),a&&a.d(l)}}}function Zg(t){let e,n,i=[],s=new Map,r,o,a,l,c=t[5];const h=u=>u[23].index;for(let u=0;u<c.length;u+=1){let f=xl(t,c,u),g=h(f);s.set(g,i[u]=Hl(g,f))}return{c(){e=ie("svelte-virtual-list-viewport"),n=ie("svelte-virtual-list-contents");for(let u=0;u<i.length;u+=1)i[u].c();this.h()},l(u){e=ae(u,"SVELTE-VIRTUAL-LIST-VIEWPORT",{style:!0,class:!0});var f=$(e);n=ae(f,"SVELTE-VIRTUAL-LIST-CONTENTS",{style:!0,class:!0});var g=$(n);for(let m=0;m<i.length;m+=1)i[m].l(g);g.forEach(C),f.forEach(C),this.h()},h(){Dn(n,"padding-top",t[6]+"px"),Dn(n,"padding-bottom",t[7]+"px"),To(n,"class","svelte-g2cagw"),Dn(e,"height",t[0]),To(e,"class","svelte-g2cagw"),cn(()=>t[18].call(e))},m(u,f){X(u,e,f),ne(e,n);for(let g=0;g<i.length;g+=1)i[g].m(n,null);t[16](n),t[17](e),r=mg(e,t[18].bind(e)),o=!0,a||(l=oe(e,"scroll",t[8]),a=!0)},p(u,[f]){f&16418&&(c=u[5],pe(),i=Ag(i,f,h,1,u,c,s,n,Cg,Hl,null,xl),ye()),(!o||f&64)&&Dn(n,"padding-top",u[6]+"px"),(!o||f&128)&&Dn(n,"padding-bottom",u[7]+"px"),(!o||f&1)&&Dn(e,"height",u[0])},i(u){if(!o){for(let f=0;f<c.length;f+=1)P(i[f]);o=!0}},o(u){for(let f=0;f<i.length;f+=1)x(i[f]);o=!1},d(u){u&&C(e);for(let f=0;f<i.length;f+=1)i[f].d();t[16](null),t[17](null),r(),a=!1,l()}}}function $g(t,e,n){let{$$slots:i={},$$scope:s}=e,{items:r=void 0}=e,{height:o="100%"}=e,{itemHeight:a=40}=e,{hoverItemIndex:l=0}=e,{start:c=0}=e,{end:h=0}=e,u=[],f,g,m,v=0,O,F,N=0,A=0,p;async function k(R,ee,H){const{scrollTop:Y}=g;await Ps();let Q=N-Y,I=c;for(;Q<ee&&I<R.length;){let ge=f[I-c];ge||(n(10,h=I+1),await Ps(),ge=f[I-c]),Q+=u[I]=H||ge.offsetHeight,I+=1}n(10,h=I);const T=R.length-h;p=(N+Q)/h,n(7,A=T*p),u.length=R.length,g&&n(3,g.scrollTop=0,g)}async function _(){const{scrollTop:R}=g,ee=c;for(let I=0;I<f.length;I+=1)u[c+I]=a||f[I].offsetHeight;let H=0,Y=0;for(;H<r.length;){const I=u[H]||p;if(Y+I>R){n(9,c=H),n(6,N=Y);break}Y+=I,H+=1}for(;H<r.length&&(Y+=u[H]||p,H+=1,!(Y>R+v)););n(10,h=H);const Q=r.length-h;for(p=Y/h;H<r.length;)u[H++]=p;if(n(7,A=Q*p),c<ee){await Ps();let I=0,T=0;for(let Oe=c;Oe<ee;Oe+=1)f[Oe-c]&&(I+=u[Oe],T+=a||f[Oe-c].offsetHeight);const ge=T-I;g.scrollTo(0,R+ge)}}wr(()=>{f=m.getElementsByTagName("svelte-virtual-list-row"),n(13,F=!0)});function J(R){st[R?"unshift":"push"](()=>{m=R,n(4,m)})}function M(R){st[R?"unshift":"push"](()=>{g=R,n(3,g)})}function q(){v=this.offsetHeight,n(2,v)}return t.$$set=R=>{"items"in R&&n(11,r=R.items),"height"in R&&n(0,o=R.height),"itemHeight"in R&&n(12,a=R.itemHeight),"hoverItemIndex"in R&&n(1,l=R.hoverItemIndex),"start"in R&&n(9,c=R.start),"end"in R&&n(10,h=R.end),"$$scope"in R&&n(14,s=R.$$scope)},t.$$.update=()=>{t.$$.dirty&3584&&n(5,O=r.slice(c,h).map((R,ee)=>({index:ee+c,data:R}))),t.$$.dirty&14340&&F&&k(r,v,a)},[o,l,v,g,m,O,N,A,_,c,h,r,a,F,s,i,J,M,q]}class em extends Rt{constructor(e){super();Dt(this,e,$g,Zg,pt,{items:11,height:0,itemHeight:12,hoverItemIndex:1,start:9,end:10})}}function tm(t){let e,n;return{c(){e=At("svg"),n=At("path"),this.h()},l(i){e=Wt(i,"svg",{width:!0,height:!0,viewBox:!0,focusable:!0,"aria-hidden":!0,role:!0});var s=$(e);n=Wt(s,"path",{fill:!0,d:!0}),$(n).forEach(C),s.forEach(C),this.h()},h(){w(n,"fill","currentColor"),w(n,"d",`M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z`),w(e,"width","100%"),w(e,"height","100%"),w(e,"viewBox","-2 -2 50 50"),w(e,"focusable","false"),w(e,"aria-hidden","true"),w(e,"role","presentation")},m(i,s){X(i,e,s),ne(e,n)},p:_e,i:_e,o:_e,d(i){i&&C(e)}}}class nm extends Rt{constructor(e){super();Dt(this,e,null,tm,pt,{})}}function im(t,e,n){let i;return function(){let r=this,o=arguments,a=function(){i=null,n||t.apply(r,o)},l=n&&!i;clearTimeout(i),i=setTimeout(a,e),l&&t.apply(r,o)}}function Wl(t,e,n){const i=t.slice();return i[103]=e[n],i}function Kl(t){let e,n,i,s,r;return{c(){e=ie("span"),n=Ht(t[33]),i=De(),s=ie("span"),r=Ht(t[32]),this.h()},l(o){e=ae(o,"SPAN",{id:!0});var a=$(e);n=Wn(a,t[33]),a.forEach(C),i=Re(o),s=ae(o,"SPAN",{id:!0});var l=$(s);r=Wn(l,t[32]),l.forEach(C),this.h()},h(){w(e,"id","aria-selection"),w(s,"id","aria-context")},m(o,a){X(o,e,a),ne(e,n),X(o,i,a),X(o,s,a),ne(s,r)},p(o,a){a[1]&4&&Ws(n,o[33]),a[1]&2&&Ws(r,o[32])},d(o){o&&C(e),o&&C(i),o&&C(s)}}}function Gl(t){let e,n,i;const s=[t[18]];var r=t[17];function o(a){let l={};for(let c=0;c<s.length;c+=1)l=_r(l,s[c]);return{props:l}}return r&&(e=new r(o())),{c(){e&&be(e.$$.fragment),n=de()},l(a){e&&yt(e.$$.fragment,a),n=de()},m(a,l){e&&ve(e,a,l),X(a,n,l),i=!0},p(a,l){const c=l[0]&262144?ca(s,[Du(a[18])]):{};if(r!==(r=a[17])){if(e){pe();const h=e;x(h.$$.fragment,1,0,()=>{we(h,1)}),ye()}r?(e=new r(o()),be(e.$$.fragment),P(e.$$.fragment,1),ve(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(a){i||(e&&P(e.$$.fragment,a),i=!0)},o(a){e&&x(e.$$.fragment,a),i=!1},d(a){a&&C(n),e&&we(e,a)}}}function zl(t){let e,n,i;var s=t[26];function r(o){return{props:{value:o[2],getSelectionLabel:o[12],activeValue:o[30],isDisabled:o[9],multiFullItemClearable:o[8]}}}return s&&(e=new s(r(t)),e.$on("multiItemClear",t[38]),e.$on("focus",t[40])),{c(){e&&be(e.$$.fragment),n=de()},l(o){e&&yt(e.$$.fragment,o),n=de()},m(o,a){e&&ve(e,o,a),X(o,n,a),i=!0},p(o,a){const l={};if(a[0]&4&&(l.value=o[2]),a[0]&4096&&(l.getSelectionLabel=o[12]),a[0]&1073741824&&(l.activeValue=o[30]),a[0]&512&&(l.isDisabled=o[9]),a[0]&256&&(l.multiFullItemClearable=o[8]),s!==(s=o[26])){if(e){pe();const c=e;x(c.$$.fragment,1,0,()=>{we(c,1)}),ye()}s?(e=new s(r(o)),e.$on("multiItemClear",o[38]),e.$on("focus",o[40]),be(e.$$.fragment),P(e.$$.fragment,1),ve(e,n.parentNode,n)):e=null}else s&&e.$set(l)},i(o){i||(e&&P(e.$$.fragment,o),i=!0)},o(o){e&&x(e.$$.fragment,o),i=!1},d(o){o&&C(n),e&&we(e,o)}}}function Jl(t){let e,n,i,s,r;var o=t[25];function a(l){return{props:{item:l[2],getSelectionLabel:l[12]}}}return o&&(n=new o(a(t))),{c(){e=ie("div"),n&&be(n.$$.fragment),this.h()},l(l){e=ae(l,"DIV",{class:!0});var c=$(e);n&&yt(n.$$.fragment,c),c.forEach(C),this.h()},h(){w(e,"class","selectedItem svelte-17l1npl")},m(l,c){X(l,e,c),n&&ve(n,e,null),i=!0,s||(r=oe(e,"focus",t[40]),s=!0)},p(l,c){const h={};if(c[0]&4&&(h.item=l[2]),c[0]&4096&&(h.getSelectionLabel=l[12]),o!==(o=l[25])){if(n){pe();const u=n;x(u.$$.fragment,1,0,()=>{we(u,1)}),ye()}o?(n=new o(a(l)),be(n.$$.fragment),P(n.$$.fragment,1),ve(n,e,null)):n=null}else o&&n.$set(h)},i(l){i||(n&&P(n.$$.fragment,l),i=!0)},o(l){n&&x(n.$$.fragment,l),i=!1},d(l){l&&C(e),n&&we(n),s=!1,r()}}}function Xl(t){let e,n,i,s,r;var o=t[23];function a(l){return{}}return o&&(n=new o(a())),{c(){e=ie("div"),n&&be(n.$$.fragment),this.h()},l(l){e=ae(l,"DIV",{class:!0,"aria-hidden":!0});var c=$(e);n&&yt(n.$$.fragment,c),c.forEach(C),this.h()},h(){w(e,"class","clearSelect svelte-17l1npl"),w(e,"aria-hidden","true")},m(l,c){X(l,e,c),n&&ve(n,e,null),i=!0,s||(r=oe(e,"click",fg(t[27])),s=!0)},p(l,c){if(o!==(o=l[23])){if(n){pe();const h=n;x(h.$$.fragment,1,0,()=>{we(h,1)}),ye()}o?(n=new o(a()),be(n.$$.fragment),P(n.$$.fragment,1),ve(n,e,null)):n=null}},i(l){i||(n&&P(n.$$.fragment,l),i=!0)},o(l){n&&x(n.$$.fragment,l),i=!1},d(l){l&&C(e),n&&we(n),s=!1,r()}}}function Yl(t){let e;function n(r,o){return r[22]?rm:sm}let i=n(t),s=i(t);return{c(){e=ie("div"),s.c(),this.h()},l(r){e=ae(r,"DIV",{class:!0,"aria-hidden":!0});var o=$(e);s.l(o),o.forEach(C),this.h()},h(){w(e,"class","indicator svelte-17l1npl"),w(e,"aria-hidden","true")},m(r,o){X(r,e,o),s.m(e,null)},p(r,o){i===(i=n(r))&&s?s.p(r,o):(s.d(1),s=i(r),s&&(s.c(),s.m(e,null)))},d(r){r&&C(e),s.d()}}}function sm(t){let e,n;return{c(){e=At("svg"),n=At("path"),this.h()},l(i){e=Wt(i,"svg",{width:!0,height:!0,viewBox:!0,focusable:!0,"aria-hidden":!0,class:!0});var s=$(e);n=Wt(s,"path",{d:!0}),$(n).forEach(C),s.forEach(C),this.h()},h(){w(n,"d",`M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z`),w(e,"width","100%"),w(e,"height","100%"),w(e,"viewBox","0 0 20 20"),w(e,"focusable","false"),w(e,"aria-hidden","true"),w(e,"class","svelte-17l1npl")},m(i,s){X(i,e,s),ne(e,n)},p:_e,d(i){i&&C(e)}}}function rm(t){let e,n;return{c(){e=new So,n=de(),this.h()},l(i){e=dg(i),n=de(),this.h()},h(){e.a=n},m(i,s){e.m(t[22],i,s),X(i,n,s)},p(i,s){s[0]&4194304&&e.p(i[22])},d(i){i&&C(n),i&&e.d()}}}function Ql(t){let e,n,i;return{c(){e=ie("div"),n=At("svg"),i=At("circle"),this.h()},l(s){e=ae(s,"DIV",{class:!0});var r=$(e);n=Wt(r,"svg",{class:!0,viewBox:!0});var o=$(n);i=Wt(o,"circle",{class:!0,cx:!0,cy:!0,r:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-miterlimit":!0}),$(i).forEach(C),o.forEach(C),r.forEach(C),this.h()},h(){w(i,"class","spinner_path svelte-17l1npl"),w(i,"cx","50"),w(i,"cy","50"),w(i,"r","20"),w(i,"fill","none"),w(i,"stroke","currentColor"),w(i,"stroke-width","5"),w(i,"stroke-miterlimit","10"),w(n,"class","spinner_icon svelte-17l1npl"),w(n,"viewBox","25 25 50 50"),w(e,"class","spinner svelte-17l1npl")},m(s,r){X(s,e,r),ne(e,n),ne(n,i)},d(s){s&&C(e)}}}function Zl(t){let e,n,i,s;const r=[t[34]];function o(c){t[84](c)}var a=t[24];function l(c){let h={};for(let u=0;u<r.length;u+=1)h=_r(h,r[u]);return c[28]!==void 0&&(h.hoverItemIndex=c[28]),{props:h}}return a&&(e=new a(l(t)),st.push(()=>Rl(e,"hoverItemIndex",o)),e.$on("itemSelected",t[43]),e.$on("itemCreated",t[44]),e.$on("closeList",t[45])),{c(){e&&be(e.$$.fragment),i=de()},l(c){e&&yt(e.$$.fragment,c),i=de()},m(c,h){e&&ve(e,c,h),X(c,i,h),s=!0},p(c,h){const u=h[1]&8?ca(r,[Du(c[34])]):{};if(!n&&h[0]&268435456&&(n=!0,u.hoverItemIndex=c[28],Eg(()=>n=!1)),a!==(a=c[24])){if(e){pe();const f=e;x(f.$$.fragment,1,0,()=>{we(f,1)}),ye()}a?(e=new a(l(c)),st.push(()=>Rl(e,"hoverItemIndex",o)),e.$on("itemSelected",c[43]),e.$on("itemCreated",c[44]),e.$on("closeList",c[45]),be(e.$$.fragment),P(e.$$.fragment,1),ve(e,i.parentNode,i)):e=null}else a&&e.$set(u)},i(c){s||(e&&P(e.$$.fragment,c),s=!0)},o(c){e&&x(e.$$.fragment,c),s=!1},d(c){c&&C(i),e&&we(e,c)}}}function $l(t){let e,n,i;return{c(){e=ie("input"),this.h()},l(s){e=ae(s,"INPUT",{name:!0,type:!0,class:!0}),this.h()},h(){w(e,"name",n=t[16].name),w(e,"type","hidden"),e.value=i=t[2]?t[12](t[2]):null,w(e,"class","svelte-17l1npl")},m(s,r){X(s,e,r)},p(s,r){r[0]&65536&&n!==(n=s[16].name)&&w(e,"name",n),r[0]&4100&&i!==(i=s[2]?s[12](s[2]):null)&&(e.value=i)},d(s){s&&C(e)}}}function ec(t){let e,n=t[2],i=[];for(let s=0;s<n.length;s+=1)i[s]=tc(Wl(t,n,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=de()},l(s){for(let r=0;r<i.length;r+=1)i[r].l(s);e=de()},m(s,r){for(let o=0;o<i.length;o+=1)i[o].m(s,r);X(s,e,r)},p(s,r){if(r[0]&69636){n=s[2];let o;for(o=0;o<n.length;o+=1){const a=Wl(s,n,o);i[o]?i[o].p(a,r):(i[o]=tc(a),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},d(s){la(i,s),s&&C(e)}}}function tc(t){let e,n,i;return{c(){e=ie("input"),this.h()},l(s){e=ae(s,"INPUT",{name:!0,type:!0,class:!0}),this.h()},h(){w(e,"name",n=t[16].name),w(e,"type","hidden"),e.value=i=t[103]?t[12](t[103]):null,w(e,"class","svelte-17l1npl")},m(s,r){X(s,e,r)},p(s,r){r[0]&65536&&n!==(n=s[16].name)&&w(e,"name",n),r[0]&4100&&i!==(i=s[103]?s[12](s[103]):null)&&(e.value=i)},d(s){s&&C(e)}}}function om(t){let e,n,i,s,r,o,a,l,c,h,u,f,g,m,v,O,F,N,A=t[1]&&Kl(t),p=t[17]&&Gl(t),k=t[35]&&zl(t),_=[{readOnly:a=!t[13]},t[31],{placeholder:t[36]},{style:t[14]},{disabled:t[9]}],J={};for(let I=0;I<_.length;I+=1)J=_r(J,_[I]);let M=!t[7]&&t[29]&&Jl(t),q=t[37]&&Xl(t),R=!t[37]&&(t[20]||t[19]&&!t[2]||!t[13]&&!t[9]&&!t[4]&&(t[29]&&!t[15]||!t[29]))&&Yl(t),ee=t[4]&&Ql(),H=t[5]&&Zl(t),Y=(!t[7]||t[7]&&!t[35])&&$l(t),Q=t[7]&&t[35]&&ec(t);return{c(){e=ie("div"),n=ie("span"),A&&A.c(),i=De(),p&&p.c(),s=De(),k&&k.c(),r=De(),o=ie("input"),l=De(),M&&M.c(),c=De(),q&&q.c(),h=De(),R&&R.c(),u=De(),ee&&ee.c(),f=De(),H&&H.c(),g=De(),Y&&Y.c(),m=De(),Q&&Q.c(),this.h()},l(I){e=ae(I,"DIV",{class:!0,style:!0});var T=$(e);n=ae(T,"SPAN",{"aria-live":!0,"aria-atomic":!0,"aria-relevant":!0,class:!0});var ge=$(n);A&&A.l(ge),ge.forEach(C),i=Re(T),p&&p.l(T),s=Re(T),k&&k.l(T),r=Re(T),o=ae(T,"INPUT",{placeholder:!0,style:!0}),l=Re(T),M&&M.l(T),c=Re(T),q&&q.l(T),h=Re(T),R&&R.l(T),u=Re(T),ee&&ee.l(T),f=Re(T),H&&H.l(T),g=Re(T),Y&&Y.l(T),m=Re(T),Q&&Q.l(T),T.forEach(C),this.h()},h(){w(n,"aria-live","polite"),w(n,"aria-atomic","false"),w(n,"aria-relevant","additions text"),w(n,"class","a11yText svelte-17l1npl"),Al(o,J),me(o,"svelte-17l1npl",!0),w(e,"class",v="selectContainer "+t[21]+" svelte-17l1npl"),w(e,"style",t[11]),me(e,"hasError",t[10]),me(e,"multiSelect",t[7]),me(e,"disabled",t[9]),me(e,"focused",t[1])},m(I,T){X(I,e,T),ne(e,n),A&&A.m(n,null),ne(e,i),p&&p.m(e,null),ne(e,s),k&&k.m(e,null),ne(e,r),ne(e,o),o.autofocus&&o.focus(),t[82](o),Ol(o,t[3]),ne(e,l),M&&M.m(e,null),ne(e,c),q&&q.m(e,null),ne(e,h),R&&R.m(e,null),ne(e,u),ee&&ee.m(e,null),ne(e,f),H&&H.m(e,null),ne(e,g),Y&&Y.m(e,null),ne(e,m),Q&&Q.m(e,null),t[85](e),O=!0,F||(N=[oe(window,"click",t[41]),oe(window,"focusin",t[41]),oe(window,"keydown",t[39]),oe(o,"focus",t[40]),oe(o,"input",t[83]),oe(e,"click",t[42])],F=!0)},p(I,T){I[1]?A?A.p(I,T):(A=Kl(I),A.c(),A.m(n,null)):A&&(A.d(1),A=null),I[17]?p?(p.p(I,T),T[0]&131072&&P(p,1)):(p=Gl(I),p.c(),P(p,1),p.m(e,s)):p&&(pe(),x(p,1,1,()=>{p=null}),ye()),I[35]?k?(k.p(I,T),T[1]&16&&P(k,1)):(k=zl(I),k.c(),P(k,1),k.m(e,r)):k&&(pe(),x(k,1,1,()=>{k=null}),ye()),Al(o,J=ca(_,[(!O||T[0]&8192&&a!==(a=!I[13]))&&{readOnly:a},T[1]&1&&I[31],(!O||T[1]&32)&&{placeholder:I[36]},(!O||T[0]&16384)&&{style:I[14]},(!O||T[0]&512)&&{disabled:I[9]}])),T[0]&8&&o.value!==I[3]&&Ol(o,I[3]),me(o,"svelte-17l1npl",!0),!I[7]&&I[29]?M?(M.p(I,T),T[0]&536871040&&P(M,1)):(M=Jl(I),M.c(),P(M,1),M.m(e,c)):M&&(pe(),x(M,1,1,()=>{M=null}),ye()),I[37]?q?(q.p(I,T),T[1]&64&&P(q,1)):(q=Xl(I),q.c(),P(q,1),q.m(e,h)):q&&(pe(),x(q,1,1,()=>{q=null}),ye()),!I[37]&&(I[20]||I[19]&&!I[2]||!I[13]&&!I[9]&&!I[4]&&(I[29]&&!I[15]||!I[29]))?R?R.p(I,T):(R=Yl(I),R.c(),R.m(e,u)):R&&(R.d(1),R=null),I[4]?ee||(ee=Ql(),ee.c(),ee.m(e,f)):ee&&(ee.d(1),ee=null),I[5]?H?(H.p(I,T),T[0]&32&&P(H,1)):(H=Zl(I),H.c(),P(H,1),H.m(e,g)):H&&(pe(),x(H,1,1,()=>{H=null}),ye()),!I[7]||I[7]&&!I[35]?Y?Y.p(I,T):(Y=$l(I),Y.c(),Y.m(e,m)):Y&&(Y.d(1),Y=null),I[7]&&I[35]?Q?Q.p(I,T):(Q=ec(I),Q.c(),Q.m(e,null)):Q&&(Q.d(1),Q=null),(!O||T[0]&2097152&&v!==(v="selectContainer "+I[21]+" svelte-17l1npl"))&&w(e,"class",v),(!O||T[0]&2048)&&w(e,"style",I[11]),T[0]&2098176&&me(e,"hasError",I[10]),T[0]&2097280&&me(e,"multiSelect",I[7]),T[0]&2097664&&me(e,"disabled",I[9]),T[0]&2097154&&me(e,"focused",I[1])},i(I){O||(P(p),P(k),P(M),P(q),P(H),O=!0)},o(I){x(p),x(k),x(M),x(q),x(H),O=!1},d(I){I&&C(e),A&&A.d(),p&&p.d(),k&&k.d(),t[82](null),M&&M.d(),q&&q.d(),R&&R.d(),ee&&ee.d(),H&&H.d(),Y&&Y.d(),Q&&Q.d(),t[85](null),F=!1,at(N)}}}function nc(t){return t.map((e,n)=>({index:n,value:e,label:`${e}`}))}function am(t,e,n){let i,s,r,o,a,l,c,h;const u=zi();let{id:f=null}=e,{container:g=void 0}=e,{input:m=void 0}=e,{isMulti:v=!1}=e,{multiFullItemClearable:O=!1}=e,{isDisabled:F=!1}=e,{isCreatable:N=!1}=e,{isFocused:A=!1}=e,{value:p=null}=e,{filterText:k=""}=e,{placeholder:_="Select..."}=e,{placeholderAlwaysShow:J=!1}=e,{items:M=null}=e,{itemFilter:q=(d,U,le)=>`${d}`.toLowerCase().includes(U.toLowerCase())}=e,{groupBy:R=void 0}=e,{groupFilter:ee=d=>d}=e,{isGroupHeaderSelectable:H=!1}=e,{getGroupHeaderLabel:Y=d=>d[Q]||d.id}=e,{labelIdentifier:Q="label"}=e,{getOptionLabel:I=(d,U)=>d.isCreator?`Create "${U}"`:d[Q]}=e,{optionIdentifier:T="value"}=e,{loadOptions:ge=void 0}=e,{hasError:Oe=!1}=e,{containerStyles:Xe=""}=e,{getSelectionLabel:Ye=d=>d?d[Q]:null}=e,{createGroupHeaderItem:vt=d=>({value:d,label:d})}=e,{createItem:lt=d=>({value:d,label:d})}=e;const Cn=()=>i;let{isSearchable:wt=!0}=e,{inputStyles:Qt=""}=e,{isClearable:Lt=!0}=e,{isWaiting:ct=!1}=e,{listPlacement:E="auto"}=e,{listOpen:K=!1}=e,{isVirtualList:Be=!1}=e,{loadOptionsInterval:Pt=300}=e,{noOptionsMessage:An="No options"}=e,{hideEmptyState:fi=!1}=e,{inputAttributes:ut={}}=e,{listAutoWidth:Nn=!0}=e,{itemHeight:di=40}=e,{Icon:Zt=void 0}=e,{iconProps:gi={}}=e,{showChevron:$t=!1}=e,{showIndicator:mi=!1}=e,{containerClasses:en=""}=e,{indicatorSvg:pi=void 0}=e,{listOffset:ht=5}=e,{ClearIcon:_s=nm}=e,{Item:yi=Ru}=e,{List:vs=Hg}=e,{Selection:ws=Gg}=e,{MultiSelection:Is=Xg}=e,{VirtualList:Mt=em}=e;function Zr(d){if(d.loadOptions&&d.filterText.length>0)return;if(!d.items)return[];d.items&&d.items.length>0&&typeof d.items[0]!="object"&&(d.items=nc(d.items));let U=d.items.filter(le=>{let it=q(I(le,d.filterText),d.filterText,le);return it&&d.isMulti&&d.value&&Array.isArray(d.value)&&(it=!d.value.some(tn=>tn[d.optionIdentifier]===le[d.optionIdentifier])),it});return d.groupBy&&(U=Od(U)),d.isCreatable&&(U=Es(U,d.filterText)),U}function Es(d,U){if(U.length===0)return d;const le=lt(U);return d[0]&&U===d[0][Q]?d:(le.isCreator=!0,[...d,le])}let{selectedValue:_i=null}=e,y,nt,Qe,Se,Ze,bs;const Cd=im(async()=>{n(4,ct=!0);let d=await ge(k).catch(U=>{console.warn("svelte-select loadOptions error :>> ",U),u("error",{type:"loadOptions",details:U})});d&&!d.cancelled&&(d?(d&&d.length>0&&typeof d[0]!="object"&&(d=nc(d)),n(81,i=[...d]),u("loaded",{items:i})):n(81,i=[]),N&&n(81,i=Es(i,k)),n(4,ct=!1),n(1,A=!0),n(5,K=!0))},Pt);function Ad(){typeof p=="string"?n(2,p={[T]:p,label:p}):v&&Array.isArray(p)&&p.length>0&&n(2,p=p.map(d=>typeof d=="string"?{value:d,label:d}:d))}let On;function Nd(){n(31,On=Object.assign({autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:!1,tabindex:0,type:"text","aria-autocomplete":"list"},ut)),f&&n(31,On.id=f,On),wt||n(31,On.readonly=!0,On)}function Od(d){const U=[],le={};d.forEach(tn=>{const It=R(tn);U.includes(It)||(U.push(It),le[It]=[],It&&le[It].push(Object.assign(vt(It,tn),{id:It,isGroupHeader:!0,isSelectable:H}))),le[It].push(Object.assign({isGroupItem:!!It},tn))});const it=[];return ee(U).forEach(tn=>{it.push(...le[tn])}),it}function Dd(){if(v){JSON.stringify(p)!==JSON.stringify(nt)&&Il()&&u("select",p);return}(!nt||JSON.stringify(p[T])!==JSON.stringify(nt[T]))&&u("select",p)}function Rd(){A||K?$r():m&&m.blur()}function Ld(){p&&(Array.isArray(p)?n(2,p=[...p]):n(2,p=[p]))}function Pd(){p&&n(2,p=null)}function Md(){k.length!==0&&(n(1,A=!0),n(5,K=!0),ge?Cd():(n(5,K=!0),v&&n(30,y=void 0)))}ku(async()=>{n(77,nt=p),n(78,Qe=k),n(79,Se=A),n(80,Ze=v)});function Il(){let d=!0;if(p){const U=[],le=[];p.forEach(it=>{U.includes(it[T])?d=!1:(U.push(it[T]),le.push(it))}),d||n(2,p=le)}return d}function El(d){let U=d?d[T]:p[T];return M.find(le=>le[T]===U)}function Ud(d){!d||d.length===0||d.some(U=>typeof U!="object")||!p||(v?p.some(U=>!U||!U[T]):!p[T])||(Array.isArray(p)?n(2,p=p.map(U=>El(U)||U)):n(2,p=El()||p))}function bl(d){const{detail:U}=d,le=p[U?U.i:p.length-1];p.length===1?n(2,p=void 0):n(2,p=p.filter(it=>it!==le)),u("clear",le)}function Vd(d){if(!!A)switch(d.key){case"ArrowDown":d.preventDefault(),n(5,K=!0),n(30,y=void 0);break;case"ArrowUp":d.preventDefault(),n(5,K=!0),n(30,y=void 0);break;case"Tab":K||n(1,A=!1);break;case"Backspace":if(!v||k.length>0)return;if(v&&p&&p.length>0){if(bl(y!==void 0?y:p.length-1),y===0||y===void 0)break;n(30,y=p.length>y?y-1:void 0)}break;case"ArrowLeft":if(!v||k.length>0)return;y===void 0?n(30,y=p.length-1):p.length>y&&y!==0&&n(30,y-=1);break;case"ArrowRight":if(!v||k.length>0||y===void 0)return;y===p.length-1?n(30,y=void 0):y<p.length-1&&n(30,y+=1);break}}function $r(){n(1,A=!0),m&&m.focus()}function Fd(d){if(!g)return;const U=d.path&&d.path.length>0?d.path[0]:d.target;g.contains(U)||g.contains(d.relatedTarget)||(n(1,A=!1),n(5,K=!1),n(30,y=void 0),m&&m.blur())}function Bd(){F||(n(1,A=!0),n(5,K=!K))}function jd(){n(2,p=void 0),n(5,K=!1),u("clear",p),$r()}wr(()=>{A&&m&&m.focus()});function xd(d){const{detail:U}=d;if(U){n(3,k="");const le=Object.assign({},U);(!le.isGroupHeader||le.isSelectable)&&(v?n(2,p=p?p.concat([le]):[le]):n(2,p=le),n(2,p),setTimeout(()=>{n(5,K=!1),n(30,y=void 0)}))}}function qd(d){const{detail:U}=d;v?(n(2,p=p||[]),n(2,p=[...p,lt(U)])):n(2,p=lt(U)),u("itemCreated",U),n(3,k=""),n(5,K=!1),n(30,y=void 0)}function Hd(){n(3,k=""),n(5,K=!1)}let{ariaValues:eo=d=>`Option ${d}, selected.`}=e,{ariaListOpen:to=(d,U)=>`You are currently focused on option ${d}. There are ${U} results available.`}=e,{ariaFocused:no=()=>"Select is focused, type to refine list, press down to open the menu."}=e;function Wd(){let d;return v&&p.length>0?d=p.map(U=>Ye(U)).join(", "):d=Ye(p),eo(d)}function Kd(){if(!A||!i||i.length===0)return"";let d=i[bs];if(K&&d){let U=Ye(d),le=i?i.length:0;return to(U,le)}else return no()}function Gd(d){st[d?"unshift":"push"](()=>{m=d,n(6,m)})}function zd(){k=this.value,n(3,k)}function Jd(d){bs=d,n(28,bs)}function Xd(d){st[d?"unshift":"push"](()=>{g=d,n(0,g)})}return t.$$set=d=>{"id"in d&&n(46,f=d.id),"container"in d&&n(0,g=d.container),"input"in d&&n(6,m=d.input),"isMulti"in d&&n(7,v=d.isMulti),"multiFullItemClearable"in d&&n(8,O=d.multiFullItemClearable),"isDisabled"in d&&n(9,F=d.isDisabled),"isCreatable"in d&&n(47,N=d.isCreatable),"isFocused"in d&&n(1,A=d.isFocused),"value"in d&&n(2,p=d.value),"filterText"in d&&n(3,k=d.filterText),"placeholder"in d&&n(48,_=d.placeholder),"placeholderAlwaysShow"in d&&n(49,J=d.placeholderAlwaysShow),"items"in d&&n(50,M=d.items),"itemFilter"in d&&n(51,q=d.itemFilter),"groupBy"in d&&n(52,R=d.groupBy),"groupFilter"in d&&n(53,ee=d.groupFilter),"isGroupHeaderSelectable"in d&&n(54,H=d.isGroupHeaderSelectable),"getGroupHeaderLabel"in d&&n(55,Y=d.getGroupHeaderLabel),"labelIdentifier"in d&&n(56,Q=d.labelIdentifier),"getOptionLabel"in d&&n(57,I=d.getOptionLabel),"optionIdentifier"in d&&n(58,T=d.optionIdentifier),"loadOptions"in d&&n(59,ge=d.loadOptions),"hasError"in d&&n(10,Oe=d.hasError),"containerStyles"in d&&n(11,Xe=d.containerStyles),"getSelectionLabel"in d&&n(12,Ye=d.getSelectionLabel),"createGroupHeaderItem"in d&&n(60,vt=d.createGroupHeaderItem),"createItem"in d&&n(61,lt=d.createItem),"isSearchable"in d&&n(13,wt=d.isSearchable),"inputStyles"in d&&n(14,Qt=d.inputStyles),"isClearable"in d&&n(15,Lt=d.isClearable),"isWaiting"in d&&n(4,ct=d.isWaiting),"listPlacement"in d&&n(63,E=d.listPlacement),"listOpen"in d&&n(5,K=d.listOpen),"isVirtualList"in d&&n(64,Be=d.isVirtualList),"loadOptionsInterval"in d&&n(65,Pt=d.loadOptionsInterval),"noOptionsMessage"in d&&n(66,An=d.noOptionsMessage),"hideEmptyState"in d&&n(67,fi=d.hideEmptyState),"inputAttributes"in d&&n(16,ut=d.inputAttributes),"listAutoWidth"in d&&n(68,Nn=d.listAutoWidth),"itemHeight"in d&&n(69,di=d.itemHeight),"Icon"in d&&n(17,Zt=d.Icon),"iconProps"in d&&n(18,gi=d.iconProps),"showChevron"in d&&n(19,$t=d.showChevron),"showIndicator"in d&&n(20,mi=d.showIndicator),"containerClasses"in d&&n(21,en=d.containerClasses),"indicatorSvg"in d&&n(22,pi=d.indicatorSvg),"listOffset"in d&&n(70,ht=d.listOffset),"ClearIcon"in d&&n(23,_s=d.ClearIcon),"Item"in d&&n(71,yi=d.Item),"List"in d&&n(24,vs=d.List),"Selection"in d&&n(25,ws=d.Selection),"MultiSelection"in d&&n(26,Is=d.MultiSelection),"VirtualList"in d&&n(72,Mt=d.VirtualList),"selectedValue"in d&&n(73,_i=d.selectedValue),"ariaValues"in d&&n(74,eo=d.ariaValues),"ariaListOpen"in d&&n(75,to=d.ariaListOpen),"ariaFocused"in d&&n(76,no=d.ariaFocused)},t.$$.update=()=>{t.$$.dirty[0]&140|t.$$.dirty[1]&405340160&&n(81,i=Zr({loadOptions:ge,filterText:k,items:M,value:p,isMulti:v,optionIdentifier:T,groupBy:R,isCreatable:N})),t.$$.dirty[2]&2048&&_i&&console.warn("selectedValue is no longer used. Please use value instead."),t.$$.dirty[1]&524288&&Ud(M),t.$$.dirty[0]&4&&p&&Ad(),t.$$.dirty[0]&73728&&(ut||!wt)&&Nd(),t.$$.dirty[0]&128|t.$$.dirty[2]&262144&&(v&&Ld(),Ze&&!v&&Pd()),t.$$.dirty[0]&132&&v&&p&&p.length>1&&Il(),t.$$.dirty[0]&4&&p&&Dd(),t.$$.dirty[0]&132|t.$$.dirty[2]&32768&&!p&&v&&nt&&u("select",p),t.$$.dirty[0]&2|t.$$.dirty[2]&131072&&A!==Se&&Rd(),t.$$.dirty[0]&8|t.$$.dirty[2]&65536&&k!==Qe&&Md(),t.$$.dirty[0]&12&&n(29,s=p&&k.length===0),t.$$.dirty[0]&536904208&&n(37,r=s&&Lt&&!F&&!ct),t.$$.dirty[0]&132|t.$$.dirty[1]&393216&&n(36,o=J&&v?_:p?"":_),t.$$.dirty[0]&132&&n(35,a=v&&p&&p.length>0),t.$$.dirty[0]&141|t.$$.dirty[1]&218103808|t.$$.dirty[2]&526326&&n(34,l={Item:yi,filterText:k,optionIdentifier:T,noOptionsMessage:An,hideEmptyState:fi,isVirtualList:Be,VirtualList:Mt,value:p,isMulti:v,getGroupHeaderLabel:Y,items:i,itemHeight:di,getOptionLabel:I,listPlacement:E,parent:g,listAutoWidth:Nn,listOffset:ht}),t.$$.dirty[0]&132&&n(33,c=p?Wd():""),t.$$.dirty[0]&268435490|t.$$.dirty[2]&524288&&n(32,h=Kd())},[g,A,p,k,ct,K,m,v,O,F,Oe,Xe,Ye,wt,Qt,Lt,ut,Zt,gi,$t,mi,en,pi,_s,vs,ws,Is,jd,bs,s,y,On,h,c,l,a,o,r,bl,Vd,$r,Fd,Bd,xd,qd,Hd,f,N,_,J,M,q,R,ee,H,Y,Q,I,T,ge,vt,lt,Cn,E,Be,Pt,An,fi,Nn,di,ht,yi,Mt,_i,eo,to,no,nt,Qe,Se,Ze,i,Gd,zd,Jd,Xd]}class PI extends Rt{constructor(e){super();Dt(this,e,am,om,pt,{id:46,container:0,input:6,isMulti:7,multiFullItemClearable:8,isDisabled:9,isCreatable:47,isFocused:1,value:2,filterText:3,placeholder:48,placeholderAlwaysShow:49,items:50,itemFilter:51,groupBy:52,groupFilter:53,isGroupHeaderSelectable:54,getGroupHeaderLabel:55,labelIdentifier:56,getOptionLabel:57,optionIdentifier:58,loadOptions:59,hasError:10,containerStyles:11,getSelectionLabel:12,createGroupHeaderItem:60,createItem:61,getFilteredItems:62,isSearchable:13,inputStyles:14,isClearable:15,isWaiting:4,listPlacement:63,listOpen:5,isVirtualList:64,loadOptionsInterval:65,noOptionsMessage:66,hideEmptyState:67,inputAttributes:16,listAutoWidth:68,itemHeight:69,Icon:17,iconProps:18,showChevron:19,showIndicator:20,containerClasses:21,indicatorSvg:22,listOffset:70,ClearIcon:23,Item:71,List:24,Selection:25,MultiSelection:26,VirtualList:72,selectedValue:73,handleClear:27,ariaValues:74,ariaListOpen:75,ariaFocused:76},null,[-1,-1,-1,-1])}get getFilteredItems(){return this.$$.ctx[62]}get handleClear(){return this.$$.ctx[27]}}/**
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
 */const Lu=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},lm=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Pu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),i.push(n[h],n[u],n[f],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw Error();const f=r<<2|a>>4;if(i.push(f),c!==64){const g=a<<4&240|c>>2;if(i.push(g),u!==64){const m=c<<6&192|u;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Mu=function(t){const e=Lu(t);return Pu.encodeByteArray(e,!0)},cm=function(t){try{return Pu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class um{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Ce(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Vu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Fu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hm(){return Ce().indexOf("Electron/")>=0}function Bu(){const t=Ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fm(){return Ce().indexOf("MSAppHost/")>=0}function dm(){return typeof indexedDB=="object"}function gm(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const mm="FirebaseError";class En extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=mm,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ji.prototype.create)}}class Ji{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?pm(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new En(s,a,i)}}function pm(t,e){return t.replace(ym,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const ym=/\{\$([^}]+)}/g;function _m(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xs(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(ic(r)&&ic(o)){if(!Xs(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function ic(t){return t!==null&&typeof t=="object"}/**
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
 */function Xi(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ei(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function bi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vm(t,e){const n=new wm(t,e);return n.subscribe.bind(n)}class wm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Im(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=ro),s.error===void 0&&(s.error=ro),s.complete===void 0&&(s.complete=ro);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Im(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ro(){}/**
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
 */function Ke(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const sn="[DEFAULT]";/**
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
 */class Em{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new um;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tm(e))try{this.getOrInitializeService({instanceIdentifier:sn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sn){return this.instances.has(e)}getOptions(e=sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:bm(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=sn){return this.component?this.component.multipleInstances?e:sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bm(t){return t===sn?void 0:t}function Tm(t){return t.instantiationMode==="EAGER"}/**
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
 */class Sm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Em(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const km={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Cm=se.INFO,Am={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Nm=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Am[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ua{constructor(e){this.name=e,this._logLevel=Cm,this._logHandler=Nm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?km[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}function Om(t){return Array.prototype.slice.call(t)}function ju(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function ha(t,e,n){var i,s=new Promise(function(r,o){i=t[e].apply(t,n),ju(i).then(r,o)});return s.request=i,s}function Dm(t,e,n){var i=ha(t,e,n);return i.then(function(s){if(!!s)return new Li(s,i.request)})}function ni(t,e,n){n.forEach(function(i){Object.defineProperty(t.prototype,i,{get:function(){return this[e][i]},set:function(s){this[e][i]=s}})})}function fa(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return ha(this[e],s,arguments)})})}function Ir(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return this[e][s].apply(this[e],arguments)})})}function xu(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return Dm(this[e],s,arguments)})})}function bn(t){this._index=t}ni(bn,"_index",["name","keyPath","multiEntry","unique"]);fa(bn,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);xu(bn,"_index",IDBIndex,["openCursor","openKeyCursor"]);function Li(t,e){this._cursor=t,this._request=e}ni(Li,"_cursor",["direction","key","primaryKey","value"]);fa(Li,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(Li.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),ju(e._request).then(function(i){if(!!i)return new Li(i,e._request)})})})});function _t(t){this._store=t}_t.prototype.createIndex=function(){return new bn(this._store.createIndex.apply(this._store,arguments))};_t.prototype.index=function(){return new bn(this._store.index.apply(this._store,arguments))};ni(_t,"_store",["name","keyPath","indexNames","autoIncrement"]);fa(_t,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);xu(_t,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);Ir(_t,"_store",IDBObjectStore,["deleteIndex"]);function Yi(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}Yi.prototype.objectStore=function(){return new _t(this._tx.objectStore.apply(this._tx,arguments))};ni(Yi,"_tx",["objectStoreNames","mode"]);Ir(Yi,"_tx",IDBTransaction,["abort"]);function Er(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new Yi(n)}Er.prototype.createObjectStore=function(){return new _t(this._db.createObjectStore.apply(this._db,arguments))};ni(Er,"_db",["name","version","objectStoreNames"]);Ir(Er,"_db",IDBDatabase,["deleteObjectStore","close"]);function br(t){this._db=t}br.prototype.transaction=function(){return new Yi(this._db.transaction.apply(this._db,arguments))};ni(br,"_db",["name","version","objectStoreNames"]);Ir(br,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[_t,bn].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=Om(arguments),i=n[n.length-1],s=this._store||this._index,r=s[t].apply(s,n.slice(0,-1));r.onsuccess=function(){i(r.result)}})})});[bn,_t].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var i=this,s=[];return new Promise(function(r){i.iterateCursor(e,function(o){if(!o){r(s);return}if(s.push(o.value),n!==void 0&&s.length==n){r(s);return}o.continue()})})})});function Rm(t,e,n){var i=ha(indexedDB,"open",[t,e]),s=i.request;return s&&(s.onupgradeneeded=function(r){n&&n(new Er(s.result,r.oldVersion,s.transaction))}),i.then(function(r){return new br(r)})}/**
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
 */class Lm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pm(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Pm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const No="@firebase/app",sc="0.7.18";/**
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
 */const da=new ua("@firebase/app"),Mm="@firebase/app-compat",Um="@firebase/analytics-compat",Vm="@firebase/analytics",Fm="@firebase/app-check-compat",Bm="@firebase/app-check",jm="@firebase/auth",xm="@firebase/auth-compat",qm="@firebase/database",Hm="@firebase/database-compat",Wm="@firebase/functions",Km="@firebase/functions-compat",Gm="@firebase/installations",zm="@firebase/installations-compat",Jm="@firebase/messaging",Xm="@firebase/messaging-compat",Ym="@firebase/performance",Qm="@firebase/performance-compat",Zm="@firebase/remote-config",$m="@firebase/remote-config-compat",ep="@firebase/storage",tp="@firebase/storage-compat",np="@firebase/firestore",ip="@firebase/firestore-compat",sp="firebase",rp="9.6.8";/**
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
 */const qu="[DEFAULT]",op={[No]:"fire-core",[Mm]:"fire-core-compat",[Vm]:"fire-analytics",[Um]:"fire-analytics-compat",[Bm]:"fire-app-check",[Fm]:"fire-app-check-compat",[jm]:"fire-auth",[xm]:"fire-auth-compat",[qm]:"fire-rtdb",[Hm]:"fire-rtdb-compat",[Wm]:"fire-fn",[Km]:"fire-fn-compat",[Gm]:"fire-iid",[zm]:"fire-iid-compat",[Jm]:"fire-fcm",[Xm]:"fire-fcm-compat",[Ym]:"fire-perf",[Qm]:"fire-perf-compat",[Zm]:"fire-rc",[$m]:"fire-rc-compat",[ep]:"fire-gcs",[tp]:"fire-gcs-compat",[np]:"fire-fst",[ip]:"fire-fst-compat","fire-js":"fire-js",[sp]:"fire-js-all"};/**
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
 */const Ys=new Map,Oo=new Map;function ap(t,e){try{t.container.addComponent(e)}catch(n){da.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kn(t){const e=t.name;if(Oo.has(e))return da.debug(`There were multiple attempts to register component ${e}.`),!1;Oo.set(e,t);for(const n of Ys.values())ap(n,t);return!0}function ga(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const lp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Kt=new Ji("app","Firebase",lp);/**
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
 */class cp{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
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
 */const Qi=rp;function MI(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:qu,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Kt.create("bad-app-name",{appName:String(i)});const s=Ys.get(i);if(s){if(Xs(t,s.options)&&Xs(n,s.config))return s;throw Kt.create("duplicate-app",{appName:i})}const r=new Sm(i);for(const a of Oo.values())r.addComponent(a);const o=new cp(t,n,r);return Ys.set(i,o),o}function Hu(t=qu){const e=Ys.get(t);if(!e)throw Kt.create("no-app",{appName:t});return e}function xt(t,e,n){var i;let s=(i=op[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),da.warn(a.join(" "));return}Kn(new hn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const up="firebase-heartbeat-database",hp=1,fn="firebase-heartbeat-store";let oo=null;function ma(){return oo||(oo=Rm(up,hp,t=>{switch(t.oldVersion){case 0:t.createObjectStore(fn)}}).catch(t=>{throw Kt.create("storage-open",{originalErrorMessage:t.message})})),oo}async function fp(t){try{return(await ma()).transaction(fn).objectStore(fn).get(pa(t))}catch(e){throw Kt.create("storage-get",{originalErrorMessage:e.message})}}async function ao(t,e){try{const i=(await ma()).transaction(fn,"readwrite");return await i.objectStore(fn).put(e,pa(t)),i.complete}catch(n){throw Kt.create("storage-set",{originalErrorMessage:n.message})}}async function dp(t){try{const n=(await ma()).transaction(fn,"readwrite");return await n.objectStore(fn).delete(pa(t)),n.complete}catch(e){throw Kt.create("storage-delete",{originalErrorMessage:e.message})}}function pa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gp=1024,mp=30*24*60*60*1e3;class pp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vp(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=yp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(s=>s.date===i))return this._heartbeatsCache.push({date:i,userAgent:n}),this._heartbeatsCache=this._heartbeatsCache.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=mp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:n}=_p(this._heartbeatsCache),i=Mu(JSON.stringify({version:2,heartbeats:e}));return n.length>0?(this._heartbeatsCache=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),i}}function yp(){return new Date().toISOString().substring(0,10)}function _p(t,e=gp){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.userAgent===s.userAgent);if(r){if(r.dates.push(s.date),rc(n)>e){r.dates.pop();break}}else if(n.push({userAgent:s.userAgent,dates:[s.date]}),rc(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class vp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dm()?gm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fp(this.app);return(n==null?void 0:n.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return ao(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return ao(this.app,{heartbeats:[...i,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return ao(this.app,{heartbeats:i.filter(s=>!e.includes(s))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return dp(this.app)}}function rc(t){return Mu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wp(t){Kn(new hn("platform-logger",e=>new Lm(e),"PRIVATE")),Kn(new hn("heartbeat",e=>new pp(e),"PRIVATE")),xt(No,sc,t),xt(No,sc,"esm2017"),xt("fire-js","")}wp("");var Ip="firebase",Ep="9.6.8";/**
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
 */xt(Ip,Ep,"app");var bp=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},D,ya=ya||{},W=bp||self;function Qs(){}function Do(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Zi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Tp(t){return Object.prototype.hasOwnProperty.call(t,lo)&&t[lo]||(t[lo]=++Sp)}var lo="closure_uid_"+(1e9*Math.random()>>>0),Sp=0;function kp(t,e,n){return t.call.apply(t.bind,arguments)}function Cp(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Pe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pe=kp:Pe=Cp,Pe.apply(null,arguments)}function As(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Fe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Xt(){this.s=this.s,this.o=this.o}var Ap=0,Np={};Xt.prototype.s=!1;Xt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Ap!=0)){var t=Tp(this);delete Np[t]}};Xt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Wu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ku=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function Op(t){e:{var e=Iy;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function oc(t){return Array.prototype.concat.apply([],arguments)}function _a(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Zs(t){return/^[\s\xa0]*$/.test(t)}var ac=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function qe(t,e){return t.indexOf(e)!=-1}function co(t,e){return t<e?-1:t>e?1:0}var He;e:{var lc=W.navigator;if(lc){var cc=lc.userAgent;if(cc){He=cc;break e}}He=""}function va(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Gu(t){const e={};for(const n in t)e[n]=t[n];return e}var uc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zu(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<uc.length;r++)n=uc[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function wa(t){return wa[" "](t),t}wa[" "]=Qs;function Dp(t){var e=Pp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Rp=qe(He,"Opera"),Gn=qe(He,"Trident")||qe(He,"MSIE"),Ju=qe(He,"Edge"),Ro=Ju||Gn,Xu=qe(He,"Gecko")&&!(qe(He.toLowerCase(),"webkit")&&!qe(He,"Edge"))&&!(qe(He,"Trident")||qe(He,"MSIE"))&&!qe(He,"Edge"),Lp=qe(He.toLowerCase(),"webkit")&&!qe(He,"Edge");function Yu(){var t=W.document;return t?t.documentMode:void 0}var $s;e:{var uo="",ho=function(){var t=He;if(Xu)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ju)return/Edge\/([\d\.]+)/.exec(t);if(Gn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Lp)return/WebKit\/(\S+)/.exec(t);if(Rp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ho&&(uo=ho?ho[1]:""),Gn){var fo=Yu();if(fo!=null&&fo>parseFloat(uo)){$s=String(fo);break e}}$s=uo}var Pp={};function Mp(){return Dp(function(){let t=0;const e=ac(String($s)).split("."),n=ac("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=co(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||co(s[2].length==0,r[2].length==0)||co(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var Lo;if(W.document&&Gn){var hc=Yu();Lo=hc||parseInt($s,10)||void 0}else Lo=void 0;var Up=Lo,Vp=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",Qs,e),W.removeEventListener("test",Qs,e)}catch{}return t}();function xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};function Pi(t,e){if(xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Xu){e:{try{wa(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Fp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Pi.Z.h.call(this)}}Fe(Pi,xe);var Fp={2:"touch",3:"pen",4:"mouse"};Pi.prototype.h=function(){Pi.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $i="closure_listenable_"+(1e6*Math.random()|0),Bp=0;function jp(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++Bp,this.ca=this.fa=!1}function Tr(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Sr(t){this.src=t,this.g={},this.h=0}Sr.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Mo(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new jp(e,this.src,r,!!i,s),e.fa=n,t.push(e)),e};function Po(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Wu(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Tr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Mo(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}var Ia="closure_lm_"+(1e6*Math.random()|0),go={};function Qu(t,e,n,i,s){if(i&&i.once)return $u(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Qu(t,e[r],n,i,s);return null}return n=Ta(n),t&&t[$i]?t.N(e,n,Zi(i)?!!i.capture:!!i,s):Zu(t,e,n,!1,i,s)}function Zu(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Zi(s)?!!s.capture:!!s,a=ba(t);if(a||(t[Ia]=a=new Sr(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=xp(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Vp||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(th(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xp(){function t(n){return e.call(t.src,t.listener,n)}var e=qp;return t}function $u(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)$u(t,e[r],n,i,s);return null}return n=Ta(n),t&&t[$i]?t.O(e,n,Zi(i)?!!i.capture:!!i,s):Zu(t,e,n,!0,i,s)}function eh(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)eh(t,e[r],n,i,s);else i=Zi(i)?!!i.capture:!!i,n=Ta(n),t&&t[$i]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Mo(r,n,i,s),-1<n&&(Tr(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=ba(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Mo(e,n,i,s)),(n=-1<t?e[t]:null)&&Ea(n))}function Ea(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[$i])Po(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(th(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=ba(e))?(Po(n,t),n.h==0&&(n.src=null,e[Ia]=null)):Tr(t)}}}function th(t){return t in go?go[t]:go[t]="on"+t}function qp(t,e){if(t.ca)t=!0;else{e=new Pi(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Ea(t),t=n.call(i,e)}return t}function ba(t){return t=t[Ia],t instanceof Sr?t:null}var mo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ta(t){return typeof t=="function"?t:(t[mo]||(t[mo]=function(e){return t.handleEvent(e)}),t[mo])}function Ae(){Xt.call(this),this.i=new Sr(this),this.P=this,this.I=null}Fe(Ae,Xt);Ae.prototype[$i]=!0;Ae.prototype.removeEventListener=function(t,e,n,i){eh(this,t,e,n,i)};function Me(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new xe(e,t);else if(e instanceof xe)e.target=e.target||t;else{var s=e;e=new xe(i,t),zu(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Ns(o,i,!0,e)&&s}if(o=e.g=t,s=Ns(o,i,!0,e)&&s,s=Ns(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Ns(o,i,!1,e)&&s}Ae.prototype.M=function(){if(Ae.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Tr(n[i]);delete t.g[e],t.h--}}this.I=null};Ae.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Ae.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Ns(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Po(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Sa=W.JSON.stringify;function Hp(){var t=ih;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Wp{constructor(){this.h=this.g=null}add(e,n){const i=nh.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var nh=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Kp,t=>t.reset());class Kp{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Gp(t){W.setTimeout(()=>{throw t},0)}function ka(t,e){Uo||zp(),Vo||(Uo(),Vo=!0),ih.add(t,e)}var Uo;function zp(){var t=W.Promise.resolve(void 0);Uo=function(){t.then(Jp)}}var Vo=!1,ih=new Wp;function Jp(){for(var t;t=Hp();){try{t.h.call(t.g)}catch(n){Gp(n)}var e=nh;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vo=!1}function kr(t,e){Ae.call(this),this.h=t||1,this.g=e||W,this.j=Pe(this.kb,this),this.l=Date.now()}Fe(kr,Ae);D=kr.prototype;D.da=!1;D.S=null;D.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Me(this,"tick"),this.da&&(Ca(this),this.start()))}};D.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ca(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}D.M=function(){kr.Z.M.call(this),Ca(this),delete this.g};function Aa(t,e,n){if(typeof t=="function")n&&(t=Pe(t,n));else if(t&&typeof t.handleEvent=="function")t=Pe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function sh(t){t.g=Aa(()=>{t.g=null,t.i&&(t.i=!1,sh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Xp extends Xt{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:sh(this)}M(){super.M(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mi(t){Xt.call(this),this.h=t,this.g={}}Fe(Mi,Xt);var fc=[];function rh(t,e,n,i){Array.isArray(n)||(n&&(fc[0]=n.toString()),n=fc);for(var s=0;s<n.length;s++){var r=Qu(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function oh(t){va(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ea(e)},t),t.g={}}Mi.prototype.M=function(){Mi.Z.M.call(this),oh(this)};Mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Cr(){this.g=!0}Cr.prototype.Aa=function(){this.g=!1};function Yp(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&u[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Qp(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Mn(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+$p(t,n)+(i?" "+i:"")})}function Zp(t,e){t.info(function(){return"TIMEOUT: "+e})}Cr.prototype.info=function(){};function $p(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Sa(n)}catch{return e}}var Tn={},dc=null;function Ar(){return dc=dc||new Ae}Tn.Ma="serverreachability";function ah(t){xe.call(this,Tn.Ma,t)}Fe(ah,xe);function Ui(t){const e=Ar();Me(e,new ah(e,t))}Tn.STAT_EVENT="statevent";function lh(t,e){xe.call(this,Tn.STAT_EVENT,t),this.stat=e}Fe(lh,xe);function We(t){const e=Ar();Me(e,new lh(e,t))}Tn.Na="timingevent";function ch(t,e){xe.call(this,Tn.Na,t),this.size=e}Fe(ch,xe);function es(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var Nr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},uh={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Na(){}Na.prototype.h=null;function gc(t){return t.h||(t.h=t.i())}function hh(){}var ts={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Oa(){xe.call(this,"d")}Fe(Oa,xe);function Da(){xe.call(this,"c")}Fe(Da,xe);var Fo;function Or(){}Fe(Or,Na);Or.prototype.g=function(){return new XMLHttpRequest};Or.prototype.i=function(){return{}};Fo=new Or;function ns(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Mi(this),this.P=ey,t=Ro?125:void 0,this.W=new kr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new fh}function fh(){this.i=null,this.g="",this.h=!1}var ey=45e3,Bo={},er={};D=ns.prototype;D.setTimeout=function(t){this.P=t};function jo(t,e,n){t.K=1,t.v=Rr(Nt(e)),t.s=n,t.U=!0,dh(t,null)}function dh(t,e){t.F=Date.now(),is(t),t.A=Nt(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),wh(n.h,"t",i),t.C=0,n=t.l.H,t.h=new fh,t.g=jh(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Xp(Pe(t.Ia,t,t.g),t.O)),rh(t.V,t.g,"readystatechange",t.gb),e=t.H?Gu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ui(1),Yp(t.j,t.u,t.A,t.m,t.X,t.s)}D.gb=function(t){t=t.target;const e=this.L;e&&bt(t)==3?e.l():this.Ia(t)};D.Ia=function(t){try{if(t==this.g)e:{const h=bt(this.g);var e=this.g.Da();const u=this.g.ba();if(!(3>h)&&(h!=3||Ro||this.g&&(this.h.h||this.g.ga()||_c(this.g)))){this.I||h!=4||e==7||(e==8||0>=u?Ui(3):Ui(2)),Dr(this);var n=this.g.ba();this.N=n;t:if(gh(this)){var i=_c(this.g);t="";var s=i.length,r=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){rn(this),Ci(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Qp(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zs(a)){var c=a;break t}}c=null}if(n=c)Mn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,xo(this,n);else{this.i=!1,this.o=3,We(12),rn(this),Ci(this);break e}}this.U?(mh(this,h,o),Ro&&this.i&&h==3&&(rh(this.V,this.W,"tick",this.fb),this.W.start())):(Mn(this.j,this.m,o,null),xo(this,o)),h==4&&rn(this),this.i&&!this.I&&(h==4?Uh(this.l,this):(this.i=!1,is(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,We(12)):(this.o=0,We(13)),rn(this),Ci(this)}}}catch{}finally{}};function gh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function mh(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=ty(t,n),s==er){e==4&&(t.o=4,We(14),i=!1),Mn(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Bo){t.o=4,We(15),Mn(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Mn(t.j,t.m,s,null),xo(t,s);gh(t)&&s!=er&&s!=Bo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,We(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ja(e),e.L=!0,We(11))):(Mn(t.j,t.m,n,"[Invalid Chunked Response]"),rn(t),Ci(t))}D.fb=function(){if(this.g){var t=bt(this.g),e=this.g.ga();this.C<e.length&&(Dr(this),mh(this,t,e),this.i&&t!=4&&is(this))}};function ty(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?er:(n=Number(e.substring(n,i)),isNaN(n)?Bo:(i+=1,i+n>e.length?er:(e=e.substr(i,n),t.C=i+n,e)))}D.cancel=function(){this.I=!0,rn(this)};function is(t){t.Y=Date.now()+t.P,ph(t,t.P)}function ph(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=es(Pe(t.eb,t),e)}function Dr(t){t.B&&(W.clearTimeout(t.B),t.B=null)}D.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Zp(this.j,this.A),this.K!=2&&(Ui(3),We(17)),rn(this),this.o=2,Ci(this)):ph(this,this.Y-t)};function Ci(t){t.l.G==0||t.I||Uh(t.l,t)}function rn(t){Dr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ca(t.W),oh(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function xo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||qo(n.i,t))){if(n.I=t.N,!t.J&&qo(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)sr(n),Mr(n);else break e;Ba(n),We(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=es(Pe(n.ab,n),6e3));if(1>=bh(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else on(n,11)}else if((t.J||n.g==t)&&sr(n),!Zs(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const h=c[3];h!=null&&(n.ma=h,n.h.info("VER="+n.ma));const u=c[4];u!=null&&(n.za=u,n.h.info("SVER="+n.za));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=i.i;!r.g&&(qe(m,"spdy")||qe(m,"quic")||qe(m,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Pa(r,r.h),r.h=null))}if(i.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(i.sa=v,he(i.F,i.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=Bh(i,i.H?i.la:null,i.W),o.J){Th(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(Dr(a),is(a)),i.g=o}else Ph(i);0<n.l.length&&Ur(n)}else c[0]!="stop"&&c[0]!="close"||on(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?on(n,7):Fa(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}Ui(4)}catch{}}function ny(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Do(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Ra(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Do(t)||typeof t=="string")Ku(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Do(t)||typeof t=="string"){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=ny(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function ii(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof ii)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}D=ii.prototype;D.R=function(){La(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};D.T=function(){return La(this),this.g.concat()};function La(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];dn(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)i=t.g[e],dn(s,i)||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}D.get=function(t,e){return dn(this.h,t)?this.h[t]:e};D.set=function(t,e){dn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};D.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};function dn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var yh=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function iy(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function gn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof gn){this.g=e!==void 0?e:t.g,tr(this,t.j),this.s=t.s,nr(this,t.i),ir(this,t.m),this.l=t.l,e=t.h;var n=new Vi;n.i=e.i,e.g&&(n.g=new ii(e.g),n.h=e.h),mc(this,n),this.o=t.o}else t&&(n=String(t).match(yh))?(this.g=!!e,tr(this,n[1]||"",!0),this.s=Ai(n[2]||""),nr(this,n[3]||"",!0),ir(this,n[4]),this.l=Ai(n[5]||"",!0),mc(this,n[6]||"",!0),this.o=Ai(n[7]||"")):(this.g=!!e,this.h=new Vi(null,this.g))}gn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ti(e,pc,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ti(e,pc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ti(n,n.charAt(0)=="/"?ly:ay,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ti(n,uy)),t.join("")};function Nt(t){return new gn(t)}function tr(t,e,n){t.j=n?Ai(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function nr(t,e,n){t.i=n?Ai(e,!0):e}function ir(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function mc(t,e,n){e instanceof Vi?(t.h=e,hy(t.h,t.g)):(n||(e=Ti(e,cy)),t.h=new Vi(e,t.g))}function he(t,e,n){t.h.set(e,n)}function Rr(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function sy(t){return t instanceof gn?Nt(t):new gn(t,void 0)}function ry(t,e,n,i){var s=new gn(null,void 0);return t&&tr(s,t),e&&nr(s,e),n&&ir(s,n),i&&(s.l=i),s}function Ai(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ti(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,oy),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function oy(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var pc=/[#\/\?@]/g,ay=/[#\?:]/g,ly=/[#\?]/g,cy=/[#\?@]/g,uy=/#/g;function Vi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Yt(t){t.g||(t.g=new ii,t.h=0,t.i&&iy(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Vi.prototype;D.add=function(t,e){Yt(this),this.i=null,t=si(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function _h(t,e){Yt(t),e=si(t,e),dn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,dn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&La(t)))}function vh(t,e){return Yt(t),e=si(t,e),dn(t.g.h,e)}D.forEach=function(t,e){Yt(this),this.g.forEach(function(n,i){Ku(n,function(s){t.call(e,s,i,this)},this)},this)};D.T=function(){Yt(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n};D.R=function(t){Yt(this);var e=[];if(typeof t=="string")vh(this,t)&&(e=oc(e,this.g.get(si(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=oc(e,t[n])}return e};D.set=function(t,e){return Yt(this),this.i=null,t=si(this,t),vh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function wh(t,e,n){_h(t,e),0<n.length&&(t.i=null,t.g.set(si(t,e),_a(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;i[r]!==""&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function si(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function hy(t,e){e&&!t.j&&(Yt(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(_h(this,i),wh(this,s,n))},t)),t.j=e}var fy=class{constructor(t,e){this.h=t,this.g=e}};function Ih(t){this.l=t||dy,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ea&&W.g.Ea()&&W.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dy=10;function Eh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bh(t){return t.h?1:t.g?t.g.size:0}function qo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Pa(t,e){t.g?t.g.add(e):t.h=e}function Th(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ih.prototype.cancel=function(){if(this.i=Sh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Sh(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return _a(t.i)}function Ma(){}Ma.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)};Ma.prototype.parse=function(t){return W.JSON.parse(t,void 0)};function gy(){this.g=new Ma}function my(t,e,n){const i=n||"";try{Ra(t,function(s,r){let o=s;Zi(s)&&(o=Sa(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function py(t,e){const n=new Cr;if(W.Image){const i=new Image;i.onload=As(Os,n,i,"TestLoadImage: loaded",!0,e),i.onerror=As(Os,n,i,"TestLoadImage: error",!1,e),i.onabort=As(Os,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=As(Os,n,i,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Os(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function ss(t){this.l=t.$b||null,this.j=t.ib||!1}Fe(ss,Na);ss.prototype.g=function(){return new Lr(this.l,this.j)};ss.prototype.i=function(t){return function(){return t}}({});function Lr(t,e){Ae.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ua,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Fe(Lr,Ae);var Ua=0;D=Lr.prototype;D.open=function(t,e){if(this.readyState!=Ua)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Fi(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||W).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rs(this)),this.readyState=Ua};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fi(this)),this.g&&(this.readyState=3,Fi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof W.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kh(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function kh(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?rs(this):Fi(this),this.readyState==3&&kh(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,rs(this))};D.Ta=function(t){this.g&&(this.response=t,rs(this))};D.ha=function(){this.g&&rs(this)};function rs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Fi(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Fi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Lr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var yy=W.JSON.parse;function Te(t){Ae.call(this),this.headers=new ii,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ch,this.K=this.L=!1}Fe(Te,Ae);var Ch="",_y=/^https?$/i,vy=["POST","PUT"];D=Te.prototype;D.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Fo.g(),this.C=this.u?gc(this.u):gc(Fo),this.g.onreadystatechange=Pe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){yc(this,r);return}t=n||"";const s=new ii(this.headers);i&&Ra(i,function(r,o){s.set(o,r)}),i=Op(s.T()),n=W.FormData&&t instanceof W.FormData,!(0<=Wu(vy,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Oh(this),0<this.B&&((this.K=wy(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pe(this.pa,this)):this.A=Aa(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){yc(this,r)}};function wy(t){return Gn&&Mp()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Iy(t){return t.toLowerCase()=="content-type"}D.pa=function(){typeof ya!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))};function yc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ah(t),Pr(t)}function Ah(t){t.D||(t.D=!0,Me(t,"complete"),Me(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Me(this,"complete"),Me(this,"abort"),Pr(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pr(this,!0)),Te.Z.M.call(this)};D.Fa=function(){this.s||(this.F||this.v||this.l?Nh(this):this.cb())};D.cb=function(){Nh(this)};function Nh(t){if(t.h&&typeof ya!="undefined"&&(!t.C[1]||bt(t)!=4||t.ba()!=2)){if(t.v&&bt(t)==4)Aa(t.Fa,0,t);else if(Me(t,"readystatechange"),bt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(yh)[1]||null;if(!s&&W.self&&W.self.location){var r=W.self.location.protocol;s=r.substr(0,r.length-1)}i=!_y.test(s?s.toLowerCase():"")}n=i}if(n)Me(t,"complete"),Me(t,"success");else{t.m=6;try{var o=2<bt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Ah(t)}}finally{Pr(t)}}}}function Pr(t,e){if(t.g){Oh(t);const n=t.g,i=t.C[0]?Qs:null;t.g=null,t.C=null,e||Me(t,"ready");try{n.onreadystatechange=i}catch{}}}function Oh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}function bt(t){return t.g?t.g.readyState:0}D.ba=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}};D.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),yy(e)}};function _c(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ch:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Da=function(){return this.m};D.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ey(t){let e="";return va(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Va(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Ey(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function wi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Dh(t){this.za=0,this.l=[],this.h=new Cr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=wi("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=wi("baseRetryDelayMs",5e3,t),this.$a=wi("retryDelaySeedMs",1e4,t),this.Ya=wi("forwardChannelMaxRetries",2,t),this.ra=wi("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ih(t&&t.concurrentRequestLimit),this.Ca=new gy,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}D=Dh.prototype;D.ma=8;D.G=1;function Fa(t){if(Rh(t),t.G==3){var e=t.V++,n=Nt(t.F);he(n,"SID",t.J),he(n,"RID",e),he(n,"TYPE","terminate"),os(t,n),e=new ns(t,t.h,e,void 0),e.K=2,e.v=Rr(Nt(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.v.toString(),"")),!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=jh(e.l,null),e.g.ea(e.v)),e.F=Date.now(),is(e)}Fh(t)}D.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Mr(t){t.g&&(ja(t),t.g.cancel(),t.g=null)}function Rh(t){Mr(t),t.u&&(W.clearTimeout(t.u),t.u=null),sr(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function po(t,e){t.l.push(new fy(t.Za++,e)),t.G==3&&Ur(t)}function Ur(t){Eh(t.i)||t.m||(t.m=!0,ka(t.Ha,t),t.C=0)}function by(t,e){return bh(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=es(Pe(t.Ha,t,e),Vh(t,t.C)),t.C++,!0)}D.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new ns(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Gu(r),zu(r,this.P)):r=this.P),this.o===null&&(s.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Lh(this,s,e),n=Nt(this.F),he(n,"RID",t),he(n,"CVER",22),this.D&&he(n,"X-HTTP-Session-Id",this.D),os(this,n),this.o&&r&&Va(n,this.o,r),Pa(this.i,s),this.Ra&&he(n,"TYPE","init"),this.ja?(he(n,"$req",e),he(n,"SID","null"),s.$=!0,jo(s,n,null)):jo(s,n,e),this.G=2}}else this.G==3&&(t?vc(this,t):this.l.length==0||Eh(this.i)||vc(this))};function vc(t,e){var n;e?n=e.m:n=t.V++;const i=Nt(t.F);he(i,"SID",t.J),he(i,"RID",n),he(i,"AID",t.U),os(t,i),t.o&&t.s&&Va(i,t.o,t.s),n=new ns(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Lh(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Pa(t.i,n),jo(n,i,e)}function os(t,e){t.j&&Ra({},function(n,i){he(e,i,n)})}function Lh(t,e,n){n=Math.min(t.l.length,n);var i=t.j?Pe(t.j.Oa,t.j,t):null;e:{var s=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const h=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{my(h,o,"req"+c+"_")}catch{i&&i(h)}}if(a){i=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function Ph(t){t.g||t.u||(t.Y=1,ka(t.Ga,t),t.A=0)}function Ba(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=es(Pe(t.Ga,t),Vh(t,t.A)),t.A++,!0)}D.Ga=function(){if(this.u=null,Mh(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=es(Pe(this.bb,this),t)}};D.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,We(10),Mr(this),Mh(this))};function ja(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function Mh(t){t.g=new ns(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Nt(t.oa);he(e,"RID","rpc"),he(e,"SID",t.J),he(e,"CI",t.N?"0":"1"),he(e,"AID",t.U),os(t,e),he(e,"TYPE","xmlhttp"),t.o&&t.s&&Va(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Rr(Nt(e)),n.s=null,n.U=!0,dh(n,t)}D.ab=function(){this.v!=null&&(this.v=null,Mr(this),Ba(this),We(19))};function sr(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function Uh(t,e){var n=null;if(t.g==e){sr(t),ja(t),t.g=null;var i=2}else if(qo(t.i,e))n=e.D,Th(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=Ar(),Me(i,new ch(i,n,e,s)),Ur(t)}else Ph(t);else if(s=e.o,s==3||s==0&&0<t.I||!(i==1&&by(t,e)||i==2&&Ba(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:on(t,5);break;case 4:on(t,10);break;case 3:on(t,6);break;default:on(t,2)}}}function Vh(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function on(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=Pe(t.jb,t);n||(n=new gn("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||tr(n,"https"),Rr(n)),py(n.toString(),i)}else We(2);t.G=0,t.j&&t.j.va(e),Fh(t),Rh(t)}D.jb=function(t){t?(this.h.info("Successfully pinged google.com"),We(2)):(this.h.info("Failed to ping google.com"),We(1))};function Fh(t){t.G=0,t.I=-1,t.j&&((Sh(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,_a(t.l),t.l.length=0),t.j.ua())}function Bh(t,e,n){let i=sy(n);if(i.i!="")e&&nr(i,e+"."+i.i),ir(i,i.m);else{const s=W.location;i=ry(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&va(t.aa,function(s,r){he(i,r,s)}),e=t.D,n=t.sa,e&&n&&he(i,e,n),he(i,"VER",t.ma),os(t,i),i}function jh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Te(new ss({ib:!0})):new Te(t.qa),e.L=t.H,e}function xh(){}D=xh.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Oa=function(){};function rr(){if(Gn&&!(10<=Number(Up)))throw Error("Environmental error: no available transport.")}rr.prototype.g=function(t,e){return new tt(t,e)};function tt(t,e){Ae.call(this),this.g=new Dh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Zs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zs(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ri(this)}Fe(tt,Ae);tt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),ka(Pe(t.hb,t,e))),We(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Bh(t,null,t.W),Ur(t)};tt.prototype.close=function(){Fa(this.g)};tt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,po(this.g,e)}else this.v?(e={},e.__data__=Sa(t),po(this.g,e)):po(this.g,t)};tt.prototype.M=function(){this.g.j=null,delete this.j,Fa(this.g),delete this.g,tt.Z.M.call(this)};function qh(t){Oa.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Fe(qh,Oa);function Hh(){Da.call(this),this.status=1}Fe(Hh,Da);function ri(t){this.g=t}Fe(ri,xh);ri.prototype.xa=function(){Me(this.g,"a")};ri.prototype.wa=function(t){Me(this.g,new qh(t))};ri.prototype.va=function(t){Me(this.g,new Hh(t))};ri.prototype.ua=function(){Me(this.g,"b")};rr.prototype.createWebChannel=rr.prototype.g;tt.prototype.send=tt.prototype.u;tt.prototype.open=tt.prototype.m;tt.prototype.close=tt.prototype.close;Nr.NO_ERROR=0;Nr.TIMEOUT=8;Nr.HTTP_ERROR=6;uh.COMPLETE="complete";hh.EventType=ts;ts.OPEN="a";ts.CLOSE="b";ts.ERROR="c";ts.MESSAGE="d";Ae.prototype.listen=Ae.prototype.N;Te.prototype.listenOnce=Te.prototype.O;Te.prototype.getLastError=Te.prototype.La;Te.prototype.getLastErrorCode=Te.prototype.Da;Te.prototype.getStatus=Te.prototype.ba;Te.prototype.getResponseJson=Te.prototype.Qa;Te.prototype.getResponseText=Te.prototype.ga;Te.prototype.send=Te.prototype.ea;var Ty=function(){return new rr},Sy=function(){return Ar()},yo=Nr,ky=uh,Cy=Tn,wc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ay=ss,Ds=hh,Ny=Te;const Ic="@firebase/firestore";/**
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
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
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
 */let oi="9.6.7";/**
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
 */const mn=new ua("@firebase/firestore");function Ec(){return mn.logLevel}function L(t,...e){if(mn.logLevel<=se.DEBUG){const n=e.map(xa);mn.debug(`Firestore (${oi}): ${t}`,...n)}}function Gt(t,...e){if(mn.logLevel<=se.ERROR){const n=e.map(xa);mn.error(`Firestore (${oi}): ${t}`,...n)}}function bc(t,...e){if(mn.logLevel<=se.WARN){const n=e.map(xa);mn.warn(`Firestore (${oi}): ${t}`,...n)}}function xa(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${oi}) INTERNAL ASSERTION FAILED: `+t;throw Gt(e),new Error(e)}function ce(t,e){t||G()}function z(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Oy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Dy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class Ry{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new kt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new kt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new kt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ce(typeof i.accessToken=="string"),new Oy(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Ge(e)}}class Ly{constructor(e,n,i){this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class Py{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new Ly(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class My{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Uy{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const i=r=>{r.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?s(r):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.p=n.token,new My(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class qa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.I(i),this.T=i=>n.writeSequenceNumber(i))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function Vy(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */qa.A=-1;class Wh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=Vy(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function re(t,e){return t<e?-1:t>e?1:0}function zn(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
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
 */class $e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new $e(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new $e(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Tc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ai(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Bi{constructor(e,n,i){n===void 0?n=0:n>e.length&&G(),i===void 0?i=e.length-n:i>e.length-n&&G(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Bi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bi?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends Bi{construct(e,n,i){return new fe(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new V(b.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const Fy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Bi{construct(e,n,i){return new ze(e,n,i)}static isValidIdentifier(e){return Fy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new V(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new V(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new V(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
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
 */class Ho{constructor(e){this.fields=e,e.sort(ze.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zn(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ve(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new Ve(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const By=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zt(t){if(ce(!!t),typeof t=="string"){let e=0;const n=By.exec(t);if(ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ee(t.seconds),nanos:Ee(t.nanos)}}function Ee(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jn(t){return typeof t=="string"?Ve.fromBase64String(t):Ve.fromUint8Array(t)}/**
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
 */function Gh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zh(t){const e=t.mapValue.fields.__previous_value__;return Gh(e)?zh(e):e}function ji(t){const e=zt(t.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
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
 */class jy{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Xn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Xn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function li(t){return t==null}function or(t){return t===0&&1/t==-1/0}function xy(t){return typeof t=="number"&&Number.isInteger(t)&&!or(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(fe.fromString(e))}static fromName(e){return new j(fe.fromString(e).popFirst(5))}static empty(){return new j(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new fe(e.slice()))}}function pn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gh(t)?4:10:G()}function mt(t,e){if(t===e)return!0;const n=pn(t);if(n!==pn(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ji(t).isEqual(ji(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=zt(i.timestampValue),o=zt(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Jn(i.bytesValue).isEqual(Jn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ee(i.geoPointValue.latitude)===Ee(s.geoPointValue.latitude)&&Ee(i.geoPointValue.longitude)===Ee(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ee(i.integerValue)===Ee(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=Ee(i.doubleValue),o=Ee(s.doubleValue);return r===o?or(r)===or(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return zn(t.arrayValue.values||[],e.arrayValue.values||[],mt);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Tc(r)!==Tc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!mt(r[a],o[a])))return!1;return!0}(t,e);default:return G()}}function xi(t,e){return(t.values||[]).find(n=>mt(n,e))!==void 0}function Yn(t,e){if(t===e)return 0;const n=pn(t),i=pn(e);if(n!==i)return re(n,i);switch(n){case 0:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=Ee(s.integerValue||s.doubleValue),a=Ee(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Sc(t.timestampValue,e.timestampValue);case 4:return Sc(ji(t),ji(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(s,r){const o=Jn(s),a=Jn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=re(o[l],a[l]);if(c!==0)return c}return re(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=re(Ee(s.latitude),Ee(r.latitude));return o!==0?o:re(Ee(s.longitude),Ee(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Yn(o[l],a[l]);if(c)return c}return re(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const u=re(a[h],c[h]);if(u!==0)return u;const f=Yn(o[a[h]],l[c[h]]);if(f!==0)return f}return re(a.length,c.length)}(t.mapValue,e.mapValue);default:throw G()}}function Sc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=zt(t),i=zt(e),s=re(n.seconds,i.seconds);return s!==0?s:re(n.nanos,i.nanos)}function Bn(t){return Wo(t)}function Wo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=zt(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Jn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Wo(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Wo(i.fields[a])}`;return r+"}"}(t.mapValue):G();var e,n}function Ko(t){return!!t&&"integerValue"in t}function Ha(t){return!!t&&"arrayValue"in t}function kc(t){return!!t&&"nullValue"in t}function Cc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Us(t){return!!t&&"mapValue"in t}function Ni(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ai(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Ni(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ni(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Us(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ni(n)}setAll(e){let n=ze.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Ni(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Us(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Us(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){ai(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new rt(Ni(this.value))}}function Jh(t){const e=[];return ai(t.fields,(n,i)=>{const s=new ze([n]);if(Us(i)){const r=Jh(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Ho(e)}/**
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
 */class je{constructor(e,n,i,s,r,o){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.data=r,this.documentState=o}static newInvalidDocument(e){return new je(e,0,Z.min(),Z.min(),rt.empty(),0)}static newFoundDocument(e,n,i){return new je(e,1,n,Z.min(),i,0)}static newNoDocument(e,n){return new je(e,2,n,Z.min(),rt.empty(),0)}static newUnknownDocument(e,n){return new je(e,3,n,Z.min(),rt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qy{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function Ac(t,e=null,n=[],i=[],s=null,r=null,o=null){return new qy(t,e,n,i,s,r,o)}function Wa(t){const e=z(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>{return(s=i).field.canonicalString()+s.op.toString()+Bn(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),li(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Bn(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Bn(i)).join(",")),e.P=n}return e.P}function Hy(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${Bn(i.value)}`;var i}).join(", ")}]`),li(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Bn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Bn(n)).join(",")),`Target(${e})`}function Ka(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Qy(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!mt(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Oc(t.startAt,e.startAt)&&Oc(t.endAt,e.endAt)}function Go(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Je extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.v(e,n,i):new Wy(e,n,i):n==="array-contains"?new zy(e,i):n==="in"?new Jy(e,i):n==="not-in"?new Xy(e,i):n==="array-contains-any"?new Yy(e,i):new Je(e,n,i)}static v(e,n,i){return n==="in"?new Ky(e,i):new Gy(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.V(Yn(n,this.value)):n!==null&&pn(this.value)===pn(n)&&this.V(Yn(n,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Wy extends Je{constructor(e,n,i){super(e,n,i),this.key=j.fromName(i.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.V(n)}}class Ky extends Je{constructor(e,n){super(e,"in",n),this.keys=Xh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Gy extends Je{constructor(e,n){super(e,"not-in",n),this.keys=Xh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Xh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>j.fromName(i.referenceValue))}class zy extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ha(n)&&xi(n.arrayValue,this.value)}}class Jy extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xi(this.value.arrayValue,n)}}class Xy extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(xi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xi(this.value.arrayValue,n)}}class Yy extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ha(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>xi(this.value.arrayValue,i))}}class ar{constructor(e,n){this.position=e,this.inclusive=n}}class Oi{constructor(e,n="asc"){this.field=e,this.dir=n}}function Qy(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Nc(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=j.comparator(j.fromName(o.referenceValue),n.key):i=Yn(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Oc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Vr{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.D=null,this.C=null,this.startAt,this.endAt}}function Zy(t,e,n,i,s,r,o,a){return new Vr(t,e,n,i,s,r,o,a)}function Ga(t){return new Vr(t)}function Vs(t){return!li(t.limit)&&t.limitType==="F"}function lr(t){return!li(t.limit)&&t.limitType==="L"}function $y(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function e_(t){for(const e of t.filters)if(e.S())return e.field;return null}function t_(t){return t.collectionGroup!==null}function qi(t){const e=z(t);if(e.D===null){e.D=[];const n=e_(e),i=$y(e);if(n!==null&&i===null)n.isKeyField()||e.D.push(new Oi(n)),e.D.push(new Oi(ze.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.D.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Oi(ze.keyField(),r))}}}return e.D}function yn(t){const e=z(t);if(!e.C)if(e.limitType==="F")e.C=Ac(e.path,e.collectionGroup,qi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of qi(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Oi(r.field,o))}const i=e.endAt?new ar(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new ar(e.startAt.position,!e.startAt.inclusive):null;e.C=Ac(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.C}function n_(t,e,n){return new Vr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fr(t,e){return Ka(yn(t),yn(e))&&t.limitType===e.limitType}function Yh(t){return`${Wa(yn(t))}|lt:${t.limitType}`}function zo(t){return`Query(target=${Hy(yn(t))}; limitType=${t.limitType})`}function za(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):j.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=Nc(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,qi(n),i)||n.endAt&&!function(s,r,o){const a=Nc(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,qi(n),i))}(t,e)}function Qh(t){return(e,n)=>{let i=!1;for(const s of qi(t)){const r=i_(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function i_(t,e,n){const i=t.field.isKeyField()?j.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Yn(a,l):G()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return G()}}/**
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
 */function Zh(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:or(e)?"-0":e}}function $h(t){return{integerValue:""+t}}function s_(t,e){return xy(e)?$h(e):Zh(t,e)}/**
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
 */class Br{constructor(){this._=void 0}}function r_(t,e,n){return t instanceof cr?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof Hi?tf(t,e):t instanceof Wi?nf(t,e):function(i,s){const r=ef(i,s),o=Dc(r)+Dc(i.k);return Ko(r)&&Ko(i.k)?$h(o):Zh(i.O,o)}(t,e)}function o_(t,e,n){return t instanceof Hi?tf(t,e):t instanceof Wi?nf(t,e):n}function ef(t,e){return t instanceof ur?Ko(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class cr extends Br{}class Hi extends Br{constructor(e){super(),this.elements=e}}function tf(t,e){const n=sf(e);for(const i of t.elements)n.some(s=>mt(s,i))||n.push(i);return{arrayValue:{values:n}}}class Wi extends Br{constructor(e){super(),this.elements=e}}function nf(t,e){let n=sf(e);for(const i of t.elements)n=n.filter(s=>!mt(s,i));return{arrayValue:{values:n}}}class ur extends Br{constructor(e,n){super(),this.O=e,this.k=n}}function Dc(t){return Ee(t.integerValue||t.doubleValue)}function sf(t){return Ha(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function a_(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Hi&&i instanceof Hi||n instanceof Wi&&i instanceof Wi?zn(n.elements,i.elements,mt):n instanceof ur&&i instanceof ur?mt(n.k,i.k):n instanceof cr&&i instanceof cr}(t.transform,e.transform)}class l_{constructor(e,n){this.version=e,this.transformResults=n}}class jn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jn}static exists(e){return new jn(void 0,e)}static updateTime(e){return new jn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jr{}function c_(t,e,n){t instanceof xr?function(i,s,r){const o=i.value.clone(),a=Pc(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof as?function(i,s,r){if(!Fs(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Pc(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(rf(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Jo(t,e,n){t instanceof xr?function(i,s,r){if(!Fs(i.precondition,s))return;const o=i.value.clone(),a=Mc(i.fieldTransforms,r,s);o.setAll(a),s.convertToFoundDocument(Lc(s),o).setHasLocalMutations()}(t,e,n):t instanceof as?function(i,s,r){if(!Fs(i.precondition,s))return;const o=Mc(i.fieldTransforms,r,s),a=s.data;a.setAll(rf(i)),a.setAll(o),s.convertToFoundDocument(Lc(s),a).setHasLocalMutations()}(t,e,n):function(i,s){Fs(i.precondition,s)&&s.convertToNoDocument(Z.min())}(t,e)}function u_(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=ef(i.transform,s||null);r!=null&&(n==null&&(n=rt.empty()),n.set(i.field,r))}return n||null}function Rc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&zn(n,i,(s,r)=>a_(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Lc(t){return t.isFoundDocument()?t.version:Z.min()}class xr extends jr{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}}class as extends jr{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}}function rf(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Pc(t,e,n){const i=new Map;ce(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,o_(o,a,n[s]))}return i}function Mc(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,r_(r,o,e))}return i}class h_ extends jr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class f_ extends jr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class d_{constructor(e){this.count=e}}/**
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
 */var Ie,te;function g_(t){switch(t){default:return G();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function of(t){if(t===void 0)return Gt("GRPC error has no .code"),b.UNKNOWN;switch(t){case Ie.OK:return b.OK;case Ie.CANCELLED:return b.CANCELLED;case Ie.UNKNOWN:return b.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return b.INTERNAL;case Ie.UNAVAILABLE:return b.UNAVAILABLE;case Ie.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Ie.NOT_FOUND:return b.NOT_FOUND;case Ie.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Ie.ABORTED:return b.ABORTED;case Ie.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Ie.DATA_LOSS:return b.DATA_LOSS;default:return G()}}(te=Ie||(Ie={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||Le.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rs(this.root,e,this.comparator,!0)}}class Rs{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:Le.RED,this.left=s!=null?s:Le.EMPTY,this.right=r!=null?r:Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Le(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Le.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Le(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ue{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Uc(this.data.getIterator())}getIteratorFrom(e){return new Uc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class Uc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const m_=new Ne(j.comparator);function _n(){return m_}const p_=new Ne(j.comparator);function Xo(){return p_}const y_=new Ne(j.comparator),__=new Ue(j.comparator);function ue(...t){let e=__;for(const n of t)e=e.add(n);return e}const v_=new Ue(re);function af(){return v_}/**
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
 */class qr{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const i=new Map;return i.set(e,ls.createSynthesizedTargetChangeForCurrentChange(e,n)),new qr(Z.min(),i,af(),_n(),ue())}}class ls{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new ls(Ve.EMPTY_BYTE_STRING,n,ue(),ue(),ue())}}/**
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
 */class Bs{constructor(e,n,i,s){this.M=e,this.removedTargetIds=n,this.key=i,this.$=s}}class lf{constructor(e,n){this.targetId=e,this.F=n}}class cf{constructor(e,n,i=Ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Vc{constructor(){this.B=0,this.L=Bc(),this.U=Ve.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=ue(),n=ue(),i=ue();return this.L.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:G()}}),new ls(this.U,this.q,e,n,i)}J(){this.K=!1,this.L=Bc()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class w_{constructor(e){this.nt=e,this.st=new Map,this.it=_n(),this.rt=Fc(),this.ot=new Ue(re)}ct(e){for(const n of e.M)e.$&&e.$.isFoundDocument()?this.ut(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ht(e){this.forEachTarget(e,n=>{const i=this.lt(n);switch(e.state){case 0:this.ft(n)&&i.W(e.resumeToken);break;case 1:i.tt(),i.G||i.J(),i.W(e.resumeToken);break;case 2:i.tt(),i.G||this.removeTarget(n);break;case 3:this.ft(n)&&(i.et(),i.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),i.W(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((i,s)=>{this.ft(s)&&n(s)})}_t(e){const n=e.targetId,i=e.F.count,s=this.wt(n);if(s){const r=s.target;if(Go(r))if(i===0){const o=new j(r.path);this.at(n,o,je.newNoDocument(o,Z.min()))}else ce(i===1);else this.gt(n)!==i&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&Go(a.target)){const l=new j(a.target.path);this.it.get(l)!==null||this.It(o,l)||this.at(o,l,je.newNoDocument(l,e))}r.j&&(n.set(o,r.H()),r.J())}});let i=ue();this.rt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.wt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))}),this.it.forEach((r,o)=>o.setReadTime(e));const s=new qr(e,n,this.ot,this.it,i);return this.it=_n(),this.rt=Fc(),this.ot=new Ue(re),s}ut(e,n){if(!this.ft(e))return;const i=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,i),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Et(n.key).add(e))}at(e,n,i){if(!this.ft(e))return;const s=this.lt(e);this.It(e,n)?s.Y(n,1):s.X(n),this.rt=this.rt.insert(n,this.Et(n).delete(e)),i&&(this.it=this.it.insert(n,i))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new Vc,this.st.set(e,n)),n}Et(e){let n=this.rt.get(e);return n||(n=new Ue(re),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new Vc),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Fc(){return new Ne(j.comparator)}function Bc(){return new Ne(j.comparator)}/**
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
 */const I_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),E_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class b_{constructor(e,n){this.databaseId=e,this.N=n}}function hr(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uf(t,e){return t.N?e.toBase64():e.toUint8Array()}function T_(t,e){return hr(t,e.toTimestamp())}function Ct(t){return ce(!!t),Z.fromTimestamp(function(e){const n=zt(e);return new $e(n.seconds,n.nanos)}(t))}function Ja(t,e){return function(n){return new fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function hf(t){const e=fe.fromString(t);return ce(gf(e)),e}function Yo(t,e){return Ja(t.databaseId,e.path)}function _o(t,e){const n=hf(e);if(n.get(1)!==t.databaseId.projectId)throw new V(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(ff(n))}function Qo(t,e){return Ja(t.databaseId,e)}function S_(t){const e=hf(t);return e.length===4?fe.emptyPath():ff(e)}function Zo(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ff(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function jc(t,e,n){return{name:Yo(t,e),fields:n.value.mapValue.fields}}function k_(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.N?(ce(c===void 0||typeof c=="string"),Ve.fromBase64String(c||"")):(ce(c===void 0||c instanceof Uint8Array),Ve.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?b.UNKNOWN:of(l.code);return new V(c,l.message||"")}(o);n=new cf(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=_o(t,i.document.name),r=Ct(i.document.updateTime),o=new rt({mapValue:{fields:i.document.fields}}),a=je.newFoundDocument(s,r,o),l=i.targetIds||[],c=i.removedTargetIds||[];n=new Bs(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=_o(t,i.document),r=i.readTime?Ct(i.readTime):Z.min(),o=je.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Bs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=_o(t,i.document),r=i.removedTargetIds||[];n=new Bs([],r,s,null)}else{if(!("filter"in e))return G();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new d_(s),o=i.targetId;n=new lf(o,r)}}return n}function C_(t,e){let n;if(e instanceof xr)n={update:jc(t,e.key,e.value)};else if(e instanceof h_)n={delete:Yo(t,e.key)};else if(e instanceof as)n={update:jc(t,e.key,e.data),updateMask:V_(e.fieldMask)};else{if(!(e instanceof f_))return G();n={verify:Yo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof cr)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Hi)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Wi)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ur)return{fieldPath:r.field.canonicalString(),increment:o.k};throw G()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:T_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function A_(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?Ct(i.updateTime):Ct(s);return r.isEqual(Z.min())&&(r=Ct(s)),new l_(r,i.transformResults||[])}(n,e))):[]}function N_(t,e){return{documents:[Qo(t,e.path)]}}function O_(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Qo(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Qo(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length===0)return;const c=l.map(h=>function(u){if(u.op==="=="){if(Cc(u.value))return{unaryFilter:{field:Ln(u.field),op:"IS_NAN"}};if(kc(u.value))return{unaryFilter:{field:Ln(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(Cc(u.value))return{unaryFilter:{field:Ln(u.field),op:"IS_NOT_NAN"}};if(kc(u.value))return{unaryFilter:{field:Ln(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(u.field),op:P_(u.op),value:u.value}}}(h));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Ln(h.field),direction:L_(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.N||li(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function D_(t){let e=S_(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){ce(i===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=df(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(u){return new Oi(Un(u.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(u.direction))}(h)));let a=null;n.limit&&(a=function(h){let u;return u=typeof h=="object"?h.value:h,li(u)?null:u}(n.limit));let l=null;n.startAt&&(l=function(h){const u=!!h.before,f=h.values||[];return new ar(f,u)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const u=!h.before,f=h.values||[];return new ar(f,u)}(n.endAt)),Zy(e,s,o,r,a,"F",l,c)}function R_(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function df(t){return t?t.unaryFilter!==void 0?[U_(t)]:t.fieldFilter!==void 0?[M_(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>df(e)).reduce((e,n)=>e.concat(n)):G():[]}function L_(t){return I_[t]}function P_(t){return E_[t]}function Ln(t){return{fieldPath:t.canonicalString()}}function Un(t){return ze.fromServerFormat(t.fieldPath)}function M_(t){return Je.create(Un(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function U_(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Un(t.unaryFilter.field);return Je.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Un(t.unaryFilter.field);return Je.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Un(t.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Un(t.unaryFilter.field);return Je.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function V_(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */const F_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class B_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,i)=>{n(e)})}static reject(e){return new S((n,i)=>{i(e)})}static waitFor(e){return new S((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=S.resolve(!1);for(const i of e)n=n.next(s=>s?S.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}}function cs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class j_{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&c_(r,e,i[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Jo(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Jo(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const i=e.get(n.key),s=i;this.applyToLocalView(s),i.isValidDocument()||s.convertToNoDocument(Z.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&zn(this.mutations,e.mutations,(n,i)=>Rc(n,i))&&zn(this.baseMutations,e.baseMutations,(n,i)=>Rc(n,i))}}class Xa{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){ce(e.mutations.length===i.length);let s=y_;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Xa(e,n,i,s)}}/**
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
 */class x_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class an{constructor(e,n,i,s,r=Z.min(),o=Z.min(),a=Ve.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new an(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class q_{constructor(e){this.Ht=e}}function H_(t){const e=D_({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?n_(e,e.limit,"L"):e}/**
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
 */class W_{constructor(){this.xe=new K_}addToCollectionParentIndex(e,n){return this.xe.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.xe.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n,i){return S.resolve(ue())}getFieldIndex(e,n){return S.resolve(null)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}updateCollectionGroup(e,n,i){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class K_{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Ue(fe.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ue(fe.comparator)).toArray()}}/**
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
 */class Qn{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new Qn(0)}static Je(){return new Qn(-1)}}/**
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
 */async function us(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==F_)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class hs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s!==void 0){for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n])}else this.inner[i]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),!0;return!1}forEach(e){ai(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Kh(this.inner)}}/**
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
 */class G_{constructor(){this.changes=new hs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?S.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class z_{constructor(e,n,i){this.qn=e,this.gs=n,this.indexManager=i}ys(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,n).next(i=>this.ps(e,n,i))}ps(e,n,i){return this.qn.getEntry(e,n).next(s=>{for(const r of i)r.applyToLocalView(s);return s})}Is(e,n){e.forEach((i,s)=>{for(const r of n)r.applyToLocalView(s)})}Es(e,n){return this.qn.getEntries(e,n).next(i=>this.Ts(e,i).next(()=>i))}Ts(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(i=>this.Is(n,i))}As(e,n,i){return function(s){return j.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Rs(e,n.path):t_(n)?this.Ps(e,n,i):this.bs(e,n,i)}Rs(e,n){return this.ys(e,new j(n)).next(i=>{let s=Xo();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}Ps(e,n,i){const s=n.collectionGroup;let r=Xo();return this.indexManager.getCollectionParents(e,s).next(o=>S.forEach(o,a=>{const l=function(c,h){return new Vr(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.bs(e,l,i).next(c=>{c.forEach((h,u)=>{r=r.insert(h,u)})})}).next(()=>r))}bs(e,n,i){let s;return this.qn.getAll(e,n.path,i).next(r=>(s=r,this.gs.getAllMutationBatchesAffectingQuery(e,n))).next(r=>{for(const o of r)for(const a of o.mutations){const l=a.key;let c=s.get(l);c==null&&(c=je.newInvalidDocument(l),s=s.insert(l,c)),Jo(a,c,o.localWriteTime),c.isFoundDocument()||(s=s.remove(l))}}).next(()=>(s.forEach((r,o)=>{za(n,o)||(s=s.remove(r))}),s))}}/**
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
 */class Ya{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.vs=i,this.Vs=s}static Ss(e,n){let i=ue(),s=ue();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Ya(e,n.fromCache,i,s)}}/**
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
 */class J_{Ds(e){this.Cs=e}As(e,n,i,s){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||i.isEqual(Z.min())?this.Ns(e,n):this.Cs.Es(e,s).next(r=>{const o=this.xs(n,r);return(Vs(n)||lr(n))&&this.ks(n.limitType,o,s,i)?this.Ns(e,n):(Ec()<=se.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zo(n)),this.Cs.As(e,n,i).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}xs(e,n){let i=new Ue(Qh(e));return n.forEach((s,r)=>{za(e,r)&&(i=i.add(r))}),i}ks(e,n,i,s){if(i.size!==n.size)return!0;const r=e==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Ns(e,n){return Ec()<=se.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",zo(n)),this.Cs.As(e,n,Z.min())}}/**
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
 */class X_{constructor(e,n,i,s){this.persistence=e,this.Os=n,this.O=s,this.Ms=new Ne(re),this.$s=new hs(r=>Wa(r),Ka),this.Fs=Z.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(i)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new z_(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function Y_(t,e,n,i){return new X_(t,e,n,i)}async function mf(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.gs.getAllMutationBatches(i).next(r=>(s=r,n.Ls(e),n.gs.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=ue();for(const c of s){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.Us.Es(i,l).next(c=>({qs:c,removedBatchIds:o,addedBatchIds:a}))})})}function Q_(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Bs.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const h=l.batch,u=h.keys();let f=S.resolve();return u.forEach(g=>{f=f.next(()=>c.getEntry(a,g)).next(m=>{const v=l.docVersions.get(g);ce(v!==null),m.version.compareTo(v)<0&&(h.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),c.addEntry(m)))})}),f.next(()=>o.gs.removeMutationBatch(a,h))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.gs.performConsistencyCheck(i)).next(()=>n.Us.Es(i,s))})}function pf(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Un.getLastRemoteSnapshotVersion(n))}function Z_(t,e){const n=z(t),i=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.Ms;const a=[];e.targetChanges.forEach((c,h)=>{const u=s.get(h);if(!u)return;a.push(n.Un.removeMatchingKeys(r,c.removedDocuments,h).next(()=>n.Un.addMatchingKeys(r,c.addedDocuments,h)));let f=u.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Ve.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,i)),s=s.insert(h,f),function(g,m,v){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(u,f,c)&&a.push(n.Un.updateTargetData(r,f))});let l=_n();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push($_(r,o,e.documentUpdates).next(c=>{l=c})),!i.isEqual(Z.min())){const c=n.Un.getLastRemoteSnapshotVersion(r).next(h=>n.Un.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(c)}return S.waitFor(a).next(()=>o.apply(r)).next(()=>n.Us.Ts(r,l)).next(()=>l)}).then(r=>(n.Ms=s,r))}function $_(t,e,n){let i=ue();return n.forEach(s=>i=i.add(s)),e.getEntries(t,i).next(s=>{let r=_n();return n.forEach((o,a)=>{const l=s.get(o);a.isNoDocument()&&a.version.isEqual(Z.min())?(e.removeEntry(o,a.readTime),r=r.insert(o,a)):!l.isValidDocument()||a.version.compareTo(l.version)>0||a.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(a),r=r.insert(o,a)):L("LocalStore","Ignoring outdated watch update for ",o,". Current version:",l.version," Watch version:",a.version)}),r})}function ev(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.gs.getNextMutationBatchAfterBatchId(i,e)))}function tv(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Un.getTargetData(i,e).next(r=>r?(s=r,S.resolve(s)):n.Un.allocateTargetId(i).next(o=>(s=new an(e,o,0,i.currentSequenceNumber),n.Un.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Ms.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(i.targetId,i),n.$s.set(e,i.targetId)),i})}async function $o(t,e,n){const i=z(t),s=i.Ms.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!cs(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ms=i.Ms.remove(e),i.$s.delete(s.target)}function xc(t,e,n){const i=z(t);let s=Z.min(),r=ue();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const h=z(a),u=h.$s.get(c);return u!==void 0?S.resolve(h.Ms.get(u)):h.Un.getTargetData(l,c)}(i,o,yn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Un.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Os.As(o,e,n?s:Z.min(),n?r:ue())).next(a=>({documents:a,Ks:r})))}/**
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
 */class nv{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,n){return S.resolve(this.Ws.get(n))}saveBundleMetadata(e,n){var i;return this.Ws.set(n.id,{id:(i=n).id,version:i.version,createTime:Ct(i.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.zs.get(n))}saveNamedQuery(e,n){return this.zs.set(n.name,function(i){return{name:i.name,query:H_(i.bundledQuery),readTime:Ct(i.readTime)}}(n)),S.resolve()}}/**
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
 */class iv{constructor(){this.overlays=new Ne(j.comparator),this.Hs=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}saveOverlays(e,n,i){return i.forEach(s=>{this.Yt(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.Hs.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.Hs.delete(i)),S.resolve()}getOverlaysForCollection(e,n,i){const s=new Map,r=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new Ne((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let h=r.get(c.largestBatchId);h===null&&(h=new Map,r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=new Map,l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(h,c)),!(a.size>=s)););return S.resolve(a)}Yt(e,n,i){if(i===null)return;const s=this.overlays.get(i.key);s!==null&&this.Hs.get(s.largestBatchId).delete(i.key),this.overlays=this.overlays.insert(i.key,new x_(n,i));let r=this.Hs.get(n);r===void 0&&(r=new Set,this.Hs.set(n,r)),r.add(i.key)}}/**
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
 */class Qa{constructor(){this.Js=new Ue(ke.Ys),this.Xs=new Ue(ke.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,n){const i=new ke(e,n);this.Js=this.Js.add(i),this.Xs=this.Xs.add(i)}ti(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.ei(new ke(e,n))}ni(e,n){e.forEach(i=>this.removeReference(i,n))}si(e){const n=new j(new fe([])),i=new ke(n,e),s=new ke(n,e+1),r=[];return this.Xs.forEachInRange([i,s],o=>{this.ei(o),r.push(o.key)}),r}ii(){this.Js.forEach(e=>this.ei(e))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const n=new j(new fe([])),i=new ke(n,e),s=new ke(n,e+1);let r=ue();return this.Xs.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ke(e,0),i=this.Js.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class ke{constructor(e,n){this.key=e,this.oi=n}static Ys(e,n){return j.comparator(e.key,n.key)||re(e.oi,n.oi)}static Zs(e,n){return re(e.oi,n.oi)||j.comparator(e.key,n.key)}}/**
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
 */class sv{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.gs=[],this.ci=1,this.ui=new Ue(ke.Ys)}checkEmpty(e){return S.resolve(this.gs.length===0)}addMutationBatch(e,n,i,s){const r=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new j_(r,n,i,s);this.gs.push(o);for(const a of s)this.ui=this.ui.add(new ke(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ai(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.hi(i),r=s<0?0:s;return S.resolve(this.gs.length>r?this.gs[r]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.gs.length===0?-1:this.ci-1)}getAllMutationBatches(e){return S.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new ke(n,0),s=new ke(n,Number.POSITIVE_INFINITY),r=[];return this.ui.forEachInRange([i,s],o=>{const a=this.ai(o.oi);r.push(a)}),S.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Ue(re);return n.forEach(s=>{const r=new ke(s,0),o=new ke(s,Number.POSITIVE_INFINITY);this.ui.forEachInRange([r,o],a=>{i=i.add(a.oi)})}),S.resolve(this.li(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;j.isDocumentKey(r)||(r=r.child(""));const o=new ke(new j(r),0);let a=new Ue(re);return this.ui.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.oi)),!0)},o),S.resolve(this.li(a))}li(e){const n=[];return e.forEach(i=>{const s=this.ai(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ce(this.fi(n.batchId,"removed")===0),this.gs.shift();let i=this.ui;return S.forEach(n.mutations,s=>{const r=new ke(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ui=i})}Qe(e){}containsKey(e,n){const i=new ke(n,0),s=this.ui.firstAfterOrEqual(i);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.gs.length,S.resolve()}fi(e,n){return this.hi(e)}hi(e){return this.gs.length===0?0:e-this.gs[0].batchId}ai(e){const n=this.hi(e);return n<0||n>=this.gs.length?null:this.gs[n]}}/**
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
 */class rv{constructor(e){this.di=e,this.docs=new Ne(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.di(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return S.resolve(i?i.document.mutableCopy():je.newInvalidDocument(n))}getEntries(e,n){let i=_n();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():je.newInvalidDocument(s))}),S.resolve(i)}getAll(e,n,i){let s=_n();const r=new j(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||l.readTime.compareTo(i)<=0||(s=s.insert(l.key,l.mutableCopy()))}return S.resolve(s)}_i(e,n){return S.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new ov(this)}getSize(e){return S.resolve(this.size)}}class ov extends G_{constructor(e){super(),this.Tn=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Tn.addEntry(e,s)):this.Tn.removeEntry(i)}),S.waitFor(n)}getFromCache(e,n){return this.Tn.getEntry(e,n)}getAllFromCache(e,n){return this.Tn.getEntries(e,n)}}/**
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
 */class av{constructor(e){this.persistence=e,this.wi=new hs(n=>Wa(n),Ka),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.mi=0,this.gi=new Qa,this.targetCount=0,this.yi=Qn.He()}forEachTarget(e,n){return this.wi.forEach((i,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.mi&&(this.mi=n),S.resolve()}Ze(e){this.wi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.yi=new Qn(n),this.highestTargetId=n),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,n){return this.Ze(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Ze(n),S.resolve()}removeTargetData(e,n){return this.wi.delete(n.target),this.gi.si(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.wi.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.wi.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),S.waitFor(r).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const i=this.wi.get(n)||null;return S.resolve(i)}addMatchingKeys(e,n,i){return this.gi.ti(n,i),S.resolve()}removeMatchingKeys(e,n,i){this.gi.ni(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.gi.si(n),S.resolve()}getMatchingKeysForTargetId(e,n){const i=this.gi.ri(n);return S.resolve(i)}containsKey(e,n){return S.resolve(this.gi.containsKey(n))}}/**
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
 */class lv{constructor(e,n){this.pi={},this.overlays={},this.Nn=new qa(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new av(this),this.indexManager=new W_,this.qn=function(i){return new rv(i)}(i=>this.referenceDelegate.Ii(i)),this.O=new q_(n),this.Kn=new nv(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new iv,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.pi[e.toKey()];return i||(i=new sv(n,this.referenceDelegate),this.pi[e.toKey()]=i),i}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,n,i){L("MemoryPersistence","Starting transaction:",e);const s=new cv(this.Nn.next());return this.referenceDelegate.Ei(),i(s).next(r=>this.referenceDelegate.Ti(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ai(e,n){return S.or(Object.values(this.pi).map(i=>()=>i.containsKey(e,n)))}}class cv extends B_{constructor(e){super(),this.currentSequenceNumber=e}}class Za{constructor(e){this.persistence=e,this.Ri=new Qa,this.Pi=null}static bi(e){return new Za(e)}get vi(){if(this.Pi)return this.Pi;throw G()}addReference(e,n,i){return this.Ri.addReference(i,n),this.vi.delete(i.toString()),S.resolve()}removeReference(e,n,i){return this.Ri.removeReference(i,n),this.vi.add(i.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.vi.add(n.toString()),S.resolve()}removeTarget(e,n){this.Ri.si(n.targetId).forEach(s=>this.vi.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.vi.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Ei(){this.Pi=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.vi,i=>{const s=j.fromPath(i);return this.Vi(e,s).next(r=>{r||n.removeEntry(s,Z.min())})}).next(()=>(this.Pi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Vi(e,n).next(i=>{i?this.vi.delete(n.toString()):this.vi.add(n.toString())})}Ii(e){return 0}Vi(e,n){return S.or([()=>S.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class qc{constructor(){this.activeTargetIds=af()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uv{constructor(){this._r=new qc,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,n,i){this.wr[e]=n}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new qc,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class hv{mr(e){}shutdown(){}}/**
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
 */class Hc{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const fv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class dv{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}/**
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
 */class gv extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.kr=n+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,n,i,s,r){const o=this.$r(e,n);L("RestConnection","Sending: ",o,i);const a={};return this.Fr(a,s,r),this.Br(e,o,a,i).then(l=>(L("RestConnection","Received: ",l),l),l=>{throw bc("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",i),l})}Lr(e,n,i,s,r){return this.Mr(e,n,i,s,r)}Fr(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+oi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}$r(e,n){const i=fv[e];return`${this.kr}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,n,i,s){return new Promise((r,o)=>{const a=new Ny;a.listenOnce(ky.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case yo.NO_ERROR:const c=a.getResponseJson();L("Connection","XHR received:",JSON.stringify(c)),r(c);break;case yo.TIMEOUT:L("Connection",'RPC "'+e+'" timed out'),o(new V(b.DEADLINE_EXCEEDED,"Request time out"));break;case yo.HTTP_ERROR:const h=a.getStatus();if(L("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const u=a.getResponseJson().error;if(u&&u.status&&u.message){const f=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(m)>=0?m:b.UNKNOWN}(u.status);o(new V(f,u.message))}else o(new V(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new V(b.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{L("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);a.send(n,"POST",l,i,15)})}Ur(e,n,i){const s=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Ty(),o=Sy(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Ay({})),this.Fr(a.initMessageHeaders,n,i),Uu()||Fu()||hm()||Bu()||fm()||Vu()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=s.join("");L("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let h=!1,u=!1;const f=new dv({Ar:m=>{u?L("Connection","Not sending because WebChannel is closed:",m):(h||(L("Connection","Opening WebChannel transport."),c.open(),h=!0),L("Connection","WebChannel sending:",m),c.send(m))},Rr:()=>c.close()}),g=(m,v,O)=>{m.listen(v,F=>{try{O(F)}catch(N){setTimeout(()=>{throw N},0)}})};return g(c,Ds.EventType.OPEN,()=>{u||L("Connection","WebChannel transport opened.")}),g(c,Ds.EventType.CLOSE,()=>{u||(u=!0,L("Connection","WebChannel transport closed"),f.Cr())}),g(c,Ds.EventType.ERROR,m=>{u||(u=!0,bc("Connection","WebChannel transport errored:",m),f.Cr(new V(b.UNAVAILABLE,"The operation could not be completed")))}),g(c,Ds.EventType.MESSAGE,m=>{var v;if(!u){const O=m.data[0];ce(!!O);const F=O,N=F.error||((v=F[0])===null||v===void 0?void 0:v.error);if(N){L("Connection","WebChannel received error:",N);const A=N.status;let p=function(_){const J=Ie[_];if(J!==void 0)return of(J)}(A),k=N.message;p===void 0&&(p=b.INTERNAL,k="Unknown error status: "+A+" with message "+N.message),u=!0,f.Cr(new V(p,k)),c.close()}else L("Connection","WebChannel received:",O),f.Nr(O)}}),g(o,Cy.STAT_EVENT,m=>{m.stat===wc.PROXY?L("Connection","Detected buffering proxy"):m.stat===wc.NOPROXY&&L("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Dr()},0),f}}function vo(){return typeof document!="undefined"?document:null}/**
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
 */function Hr(t){return new b_(t,!0)}class yf{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Sn=e,this.timerId=n,this.qr=i,this.Kr=s,this.Gr=r,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const n=Math.floor(this.jr+this.Jr()),i=Math.max(0,Date.now()-this.Wr),s=Math.max(0,n-i);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.jr} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,s,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
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
 */class _f{constructor(e,n,i,s,r,o,a,l){this.Sn=e,this.Xr=i,this.Zr=s,this.eo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new yf(e,n)}oo(){return this.state===1||this.state===5||this.co()}co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&this.so===null&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,n){this._o(),this.wo(),this.ro.cancel(),this.no++,e!==4?this.ro.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Gt(n.toString()),Gt("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(n)}mo(){}auth(){this.state=1;const e=this.yo(this.no),n=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.no===n&&this.po(i,s)},i=>{e(()=>{const s=new V(b.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Io(s)})})}po(e,n){const i=this.yo(this.no);this.stream=this.Eo(e,n),this.stream.Pr(()=>{i(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(s=>{i(()=>this.Io(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return n=>{this.Sn.enqueueAndForget(()=>this.no===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mv extends _f{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.O=r}Eo(e,n){return this.eo.Ur("Listen",e,n)}onMessage(e){this.ro.reset();const n=k_(this.O,e),i=function(s){if(!("targetChange"in s))return Z.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?Z.min():r.readTime?Ct(r.readTime):Z.min()}(e);return this.listener.To(n,i)}Ao(e){const n={};n.database=Zo(this.O),n.addTarget=function(s,r){let o;const a=r.target;return o=Go(a)?{documents:N_(s,a)}:{query:O_(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=uf(s,r.resumeToken):r.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=hr(s,r.snapshotVersion.toTimestamp())),o}(this.O,e);const i=R_(this.O,e);i&&(n.labels=i),this.fo(n)}Ro(e){const n={};n.database=Zo(this.O),n.removeTarget=e,this.fo(n)}}class pv extends _f{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.O=r,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,n){return this.eo.Ur("Write",e,n)}onMessage(e){if(ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const n=A_(e.writeResults,e.commitTime),i=Ct(e.commitTime);return this.listener.Vo(i,n)}return ce(!e.writeResults||e.writeResults.length===0),this.Po=!0,this.listener.So()}Do(){const e={};e.database=Zo(this.O),this.fo(e)}vo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>C_(this.O,i))};this.fo(n)}}/**
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
 */class yv extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.eo=i,this.O=s,this.Co=!1}No(){if(this.Co)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,n,i){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.eo.Mr(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(b.UNKNOWN,s.toString())})}Lr(e,n,i){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.eo.Lr(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(b.UNKNOWN,s.toString())})}terminate(){this.Co=!0}}class _v{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){this.xo===0&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(e){this.state==="Online"?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,e==="Online"&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(Gt(n),this.Oo=!1):L("OnlineStateTracker",n)}Lo(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}}/**
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
 */class vv{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=r,this.jo.mr(o=>{i.enqueueAndForget(async()=>{Sn(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=z(a);l.Ko.add(4),await fs(l),l.Qo.set("Unknown"),l.Ko.delete(4),await Wr(l)}(this))})}),this.Qo=new _v(i,s)}}async function Wr(t){if(Sn(t))for(const e of t.Go)await e(!0)}async function fs(t){for(const e of t.Go)await e(!1)}function vf(t,e){const n=z(t);n.qo.has(e.targetId)||(n.qo.set(e.targetId,e),tl(n)?el(n):ci(n).co()&&$a(n,e))}function wf(t,e){const n=z(t),i=ci(n);n.qo.delete(e),i.co()&&If(n,e),n.qo.size===0&&(i.co()?i.ho():Sn(n)&&n.Qo.set("Unknown"))}function $a(t,e){t.Wo.Z(e.targetId),ci(t).Ao(e)}function If(t,e){t.Wo.Z(e),ci(t).Ro(e)}function el(t){t.Wo=new w_({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qo.get(e)||null}),ci(t).start(),t.Qo.Mo()}function tl(t){return Sn(t)&&!ci(t).oo()&&t.qo.size>0}function Sn(t){return z(t).Ko.size===0}function Ef(t){t.Wo=void 0}async function wv(t){t.qo.forEach((e,n)=>{$a(t,e)})}async function Iv(t,e){Ef(t),tl(t)?(t.Qo.Bo(e),el(t)):t.Qo.set("Unknown")}async function Ev(t,e,n){if(t.Qo.set("Online"),e instanceof cf&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.qo.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.qo.delete(o),i.Wo.removeTarget(o))}(t,e)}catch(i){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await fr(t,i)}else if(e instanceof Bs?t.Wo.ct(e):e instanceof lf?t.Wo._t(e):t.Wo.ht(e),!n.isEqual(Z.min()))try{const i=await pf(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.Wo.yt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.qo.get(l);c&&s.qo.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=s.qo.get(a);if(!l)return;s.qo.set(a,l.withResumeToken(Ve.EMPTY_BYTE_STRING,l.snapshotVersion)),If(s,a);const c=new an(l.target,a,1,l.sequenceNumber);$a(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){L("RemoteStore","Failed to raise snapshot:",i),await fr(t,i)}}async function fr(t,e,n){if(!cs(e))throw e;t.Ko.add(1),await fs(t),t.Qo.set("Offline"),n||(n=()=>pf(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.Ko.delete(1),await Wr(t)})}function bf(t,e){return e().catch(n=>fr(t,n,e))}async function Kr(t){const e=z(t),n=Jt(e);let i=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;bv(e);)try{const s=await ev(e.localStore,i);if(s===null){e.Uo.length===0&&n.ho();break}i=s.batchId,Tv(e,s)}catch(s){await fr(e,s)}Tf(e)&&Sf(e)}function bv(t){return Sn(t)&&t.Uo.length<10}function Tv(t,e){t.Uo.push(e);const n=Jt(t);n.co()&&n.bo&&n.vo(e.mutations)}function Tf(t){return Sn(t)&&!Jt(t).oo()&&t.Uo.length>0}function Sf(t){Jt(t).start()}async function Sv(t){Jt(t).Do()}async function kv(t){const e=Jt(t);for(const n of t.Uo)e.vo(n.mutations)}async function Cv(t,e,n){const i=t.Uo.shift(),s=Xa.from(i,e,n);await bf(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Kr(t)}async function Av(t,e){e&&Jt(t).bo&&await async function(n,i){if(s=i.code,g_(s)&&s!==b.ABORTED){const r=n.Uo.shift();Jt(n).ao(),await bf(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Kr(n)}var s}(t,e),Tf(t)&&Sf(t)}async function Wc(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const i=Sn(n);n.Ko.add(3),await fs(n),i&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ko.delete(3),await Wr(n)}async function Nv(t,e){const n=z(t);e?(n.Ko.delete(2),await Wr(n)):e||(n.Ko.add(2),await fs(n),n.Qo.set("Unknown"))}function ci(t){return t.zo||(t.zo=function(e,n,i){const s=z(e);return s.No(),new mv(n,s.eo,s.authCredentials,s.appCheckCredentials,s.O,i)}(t.datastore,t.asyncQueue,{Pr:wv.bind(null,t),vr:Iv.bind(null,t),To:Ev.bind(null,t)}),t.Go.push(async e=>{e?(t.zo.ao(),tl(t)?el(t):t.Qo.set("Unknown")):(await t.zo.stop(),Ef(t))})),t.zo}function Jt(t){return t.Ho||(t.Ho=function(e,n,i){const s=z(e);return s.No(),new pv(n,s.eo,s.authCredentials,s.appCheckCredentials,s.O,i)}(t.datastore,t.asyncQueue,{Pr:Sv.bind(null,t),vr:Av.bind(null,t),So:kv.bind(null,t),Vo:Cv.bind(null,t)}),t.Go.push(async e=>{e?(t.Ho.ao(),await Kr(t)):(await t.Ho.stop(),t.Uo.length>0&&(L("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))})),t.Ho}/**
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
 */class nl{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new nl(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function il(t,e){if(Gt("AsyncQueue",`${e}: ${t}`),cs(t))return new V(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class xn{constructor(e){this.comparator=e?(n,i)=>e(n,i)||j.comparator(n.key,i.key):(n,i)=>j.comparator(n.key,i.key),this.keyedMap=Xo(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new xn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new xn;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
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
 */class Kc{constructor(){this.Jo=new Ne(j.comparator)}track(e){const n=e.doc.key,i=this.Jo.get(n);i?e.type!==0&&i.type===3?this.Jo=this.Jo.insert(n,e):e.type===3&&i.type!==1?this.Jo=this.Jo.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Jo=this.Jo.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Jo=this.Jo.remove(n):e.type===1&&i.type===2?this.Jo=this.Jo.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):G():this.Jo=this.Jo.insert(n,e)}Yo(){const e=[];return this.Jo.inorderTraversal((n,i)=>{e.push(i)}),e}}class Zn{constructor(e,n,i,s,r,o,a,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,i,s){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Zn(e,n,xn.emptySet(n),r,i,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class Ov{constructor(){this.Xo=void 0,this.listeners=[]}}class Dv{constructor(){this.queries=new hs(e=>Yh(e),Fr),this.onlineState="Unknown",this.Zo=new Set}}async function kf(t,e){const n=z(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new Ov),s)try{r.Xo=await n.onListen(i)}catch(o){const a=il(o,`Initialization of query '${zo(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.tc(n.onlineState),r.Xo&&e.ec(r.Xo)&&sl(n)}async function Cf(t,e){const n=z(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function Rv(t,e){const n=z(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.ec(s)&&(i=!0);o.Xo=s}}i&&sl(n)}function Lv(t,e,n){const i=z(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function sl(t){t.Zo.forEach(e=>{e.next()})}class Af{constructor(e,n,i){this.query=e,this.nc=n,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=i||{}}ec(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Zn(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.sc?this.rc(e)&&(this.nc.next(e),n=!0):this.oc(e,this.onlineState)&&(this.cc(e),n=!0),this.ic=e,n}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let n=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),n=!0),n}oc(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.uc||!i)&&(!e.docs.isEmpty()||n==="Offline")}rc(e){if(e.docChanges.length>0)return!0;const n=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}cc(e){e=Zn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}/**
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
 */class Nf{constructor(e){this.key=e}}class Of{constructor(e){this.key=e}}class Pv{constructor(e,n){this.query=e,this.dc=n,this._c=null,this.current=!1,this.wc=ue(),this.mutatedKeys=ue(),this.mc=Qh(e),this.gc=new xn(this.mc)}get yc(){return this.dc}Ic(e,n){const i=n?n.Ec:new Kc,s=n?n.gc:this.gc;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=Vs(this.query)&&s.size===this.query.limit?s.last():null,c=lr(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,u)=>{const f=s.get(h),g=za(this.query,u)?u:null,m=!!f&&this.mutatedKeys.has(f.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let O=!1;f&&g?f.data.isEqual(g.data)?m!==v&&(i.track({type:3,doc:g}),O=!0):this.Tc(f,g)||(i.track({type:2,doc:g}),O=!0,(l&&this.mc(g,l)>0||c&&this.mc(g,c)<0)&&(a=!0)):!f&&g?(i.track({type:0,doc:g}),O=!0):f&&!g&&(i.track({type:1,doc:f}),O=!0,(l||c)&&(a=!0)),O&&(g?(o=o.add(g),r=v?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),Vs(this.query)||lr(this.query))for(;o.size>this.query.limit;){const h=Vs(this.query)?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),i.track({type:1,doc:h})}return{gc:o,Ec:i,ks:a,mutatedKeys:r}}Tc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const r=e.Ec.Yo();r.sort((c,h)=>function(u,f){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return g(u)-g(f)}(c.type,h.type)||this.mc(c.doc,h.doc)),this.Ac(i);const o=n?this.Rc():[],a=this.wc.size===0&&this.current?1:0,l=a!==this._c;return this._c=a,r.length!==0||l?{snapshot:new Zn(this.query,e.gc,s,r,e.mutatedKeys,a===0,l,!1),Pc:o}:{Pc:o}}tc(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Kc,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach(n=>this.dc=this.dc.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.dc=this.dc.delete(n)),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=ue(),this.gc.forEach(i=>{this.bc(i.key)&&(this.wc=this.wc.add(i.key))});const n=[];return e.forEach(i=>{this.wc.has(i)||n.push(new Of(i))}),this.wc.forEach(i=>{e.has(i)||n.push(new Nf(i))}),n}vc(e){this.dc=e.Ks,this.wc=ue();const n=this.Ic(e.documents);return this.applyChanges(n,!0)}Vc(){return Zn.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,this._c===0)}}class Mv{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class Uv{constructor(e){this.key=e,this.Sc=!1}}class Vv{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new hs(a=>Yh(a),Fr),this.Nc=new Map,this.xc=new Set,this.kc=new Ne(j.comparator),this.Oc=new Map,this.Mc=new Qa,this.$c={},this.Fc=new Map,this.Bc=Qn.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return this.Lc===!0}}async function Fv(t,e){const n=Jv(t);let i,s;const r=n.Cc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Vc();else{const o=await tv(n.localStore,yn(e));n.isPrimaryClient&&vf(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await Bv(n,e,i,a==="current")}return s}async function Bv(t,e,n,i){t.Uc=(h,u,f)=>async function(g,m,v,O){let F=m.view.Ic(v);F.ks&&(F=await xc(g.localStore,m.query,!1).then(({documents:p})=>m.view.Ic(p,F)));const N=O&&O.targetChanges.get(m.targetId),A=m.view.applyChanges(F,g.isPrimaryClient,N);return zc(g,m.targetId,A.Pc),A.snapshot}(t,h,u,f);const s=await xc(t.localStore,e,!0),r=new Pv(e,s.Ks),o=r.Ic(s.documents),a=ls.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline"),l=r.applyChanges(o,t.isPrimaryClient,a);zc(t,n,l.Pc);const c=new Mv(e,n,r);return t.Cc.set(e,c),t.Nc.has(n)?t.Nc.get(n).push(e):t.Nc.set(n,[e]),l.snapshot}async function jv(t,e){const n=z(t),i=n.Cc.get(e),s=n.Nc.get(i.targetId);if(s.length>1)return n.Nc.set(i.targetId,s.filter(r=>!Fr(r,e))),void n.Cc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await $o(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),wf(n.remoteStore,i.targetId),ea(n,i.targetId)}).catch(us)):(ea(n,i.targetId),await $o(n.localStore,i.targetId,!0))}async function xv(t,e,n){const i=Xv(t);try{const s=await function(r,o){const a=z(r),l=$e.now(),c=o.reduce((u,f)=>u.add(f.key),ue());let h;return a.persistence.runTransaction("Locally write mutations","readwrite",u=>a.Us.Es(u,c).next(f=>{h=f;const g=[];for(const m of o){const v=u_(m,h.get(m.key));v!=null&&g.push(new as(m.key,v,Jh(v.value.mapValue),jn.exists(!0)))}return a.gs.addMutationBatch(u,l,g,o)})).then(u=>(u.applyToLocalDocumentSet(h),{batchId:u.batchId,changes:h}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.$c[r.currentUser.toKey()];l||(l=new Ne(re)),l=l.insert(o,a),r.$c[r.currentUser.toKey()]=l}(i,s.batchId,n),await ds(i,s.changes),await Kr(i.remoteStore)}catch(s){const r=il(s,"Failed to persist write");n.reject(r)}}async function Df(t,e){const n=z(t);try{const i=await Z_(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.Oc.get(r);o&&(ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Sc=!0:s.modifiedDocuments.size>0?ce(o.Sc):s.removedDocuments.size>0&&(ce(o.Sc),o.Sc=!1))}),await ds(n,i,e)}catch(i){await us(i)}}function Gc(t,e,n){const i=z(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Cc.forEach((r,o)=>{const a=o.view.tc(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=z(r);a.onlineState=o;let l=!1;a.queries.forEach((c,h)=>{for(const u of h.listeners)u.tc(o)&&(l=!0)}),l&&sl(a)}(i.eventManager,e),s.length&&i.Dc.To(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function qv(t,e,n){const i=z(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Oc.get(e),r=s&&s.key;if(r){let o=new Ne(j.comparator);o=o.insert(r,je.newNoDocument(r,Z.min()));const a=ue().add(r),l=new qr(Z.min(),new Map,new Ue(re),o,a);await Df(i,l),i.kc=i.kc.remove(r),i.Oc.delete(e),rl(i)}else await $o(i.localStore,e,!1).then(()=>ea(i,e,n)).catch(us)}async function Hv(t,e){const n=z(t),i=e.batch.batchId;try{const s=await Q_(n.localStore,e);Lf(n,i,null),Rf(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ds(n,s)}catch(s){await us(s)}}async function Wv(t,e,n){const i=z(t);try{const s=await function(r,o){const a=z(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.gs.lookupMutationBatch(l,o).next(h=>(ce(h!==null),c=h.keys(),a.gs.removeMutationBatch(l,h))).next(()=>a.gs.performConsistencyCheck(l)).next(()=>a.Us.Es(l,c))})}(i.localStore,e);Lf(i,e,n),Rf(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ds(i,s)}catch(s){await us(s)}}function Rf(t,e){(t.Fc.get(e)||[]).forEach(n=>{n.resolve()}),t.Fc.delete(e)}function Lf(t,e,n){const i=z(t);let s=i.$c[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.$c[i.currentUser.toKey()]=s}}function ea(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Nc.get(e))t.Cc.delete(i),n&&t.Dc.qc(i,n);t.Nc.delete(e),t.isPrimaryClient&&t.Mc.si(e).forEach(i=>{t.Mc.containsKey(i)||Pf(t,i)})}function Pf(t,e){t.xc.delete(e.path.canonicalString());const n=t.kc.get(e);n!==null&&(wf(t.remoteStore,n),t.kc=t.kc.remove(e),t.Oc.delete(n),rl(t))}function zc(t,e,n){for(const i of n)i instanceof Nf?(t.Mc.addReference(i.key,e),Kv(t,i)):i instanceof Of?(L("SyncEngine","Document no longer in limbo: "+i.key),t.Mc.removeReference(i.key,e),t.Mc.containsKey(i.key)||Pf(t,i.key)):G()}function Kv(t,e){const n=e.key,i=n.path.canonicalString();t.kc.get(n)||t.xc.has(i)||(L("SyncEngine","New document in limbo: "+n),t.xc.add(i),rl(t))}function rl(t){for(;t.xc.size>0&&t.kc.size<t.maxConcurrentLimboResolutions;){const e=t.xc.values().next().value;t.xc.delete(e);const n=new j(fe.fromString(e)),i=t.Bc.next();t.Oc.set(i,new Uv(n)),t.kc=t.kc.insert(n,i),vf(t.remoteStore,new an(yn(Ga(n.path)),i,2,qa.A))}}async function ds(t,e,n){const i=z(t),s=[],r=[],o=[];i.Cc.isEmpty()||(i.Cc.forEach((a,l)=>{o.push(i.Uc(l,e,n).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),s.push(c);const h=Ya.Ss(l.targetId,c);r.push(h)}}))}),await Promise.all(o),i.Dc.To(s),await async function(a,l){const c=z(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(l,u=>S.forEach(u.vs,f=>c.persistence.referenceDelegate.addReference(h,u.targetId,f)).next(()=>S.forEach(u.Vs,f=>c.persistence.referenceDelegate.removeReference(h,u.targetId,f)))))}catch(h){if(!cs(h))throw h;L("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const u=h.targetId;if(!h.fromCache){const f=c.Ms.get(u),g=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(g);c.Ms=c.Ms.insert(u,m)}}}(i.localStore,r))}async function Gv(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const i=await mf(n.localStore,e);n.currentUser=e,function(s,r){s.Fc.forEach(o=>{o.forEach(a=>{a.reject(new V(b.CANCELLED,r))})}),s.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ds(n,i.qs)}}function zv(t,e){const n=z(t),i=n.Oc.get(e);if(i&&i.Sc)return ue().add(i.key);{let s=ue();const r=n.Nc.get(e);if(!r)return s;for(const o of r){const a=n.Cc.get(o);s=s.unionWith(a.view.yc)}return s}}function Jv(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Df.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qv.bind(null,e),e.Dc.To=Rv.bind(null,e.eventManager),e.Dc.qc=Lv.bind(null,e.eventManager),e}function Xv(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Wv.bind(null,e),e}class Yv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=Hr(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return Y_(this.persistence,new J_,e.initialUser,this.O)}jc(e){return new lv(Za.bi,this.O)}Gc(e){return new uv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Qv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Gc(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gv.bind(null,this.syncEngine),await Nv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Dv}createDatastore(e){const n=Hr(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new gv(s));var s;return function(r,o,a,l){return new yv(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>Gc(this.syncEngine,a,0),o=Hc.Vt()?new Hc:new hv,new vv(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,c){const h=new Vv(i,s,r,o,a,l);return c&&(h.Lc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=z(e);L("RemoteStore","RemoteStore shutting down."),n.Ko.add(5),await fs(n),n.jo.shutdown(),n.Qo.set("Unknown")}(this.remoteStore)}}/**
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
 */class Mf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Zv{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Ge.UNAUTHENTICATED,this.clientId=Wh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{L("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(L("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=il(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function $v(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await mf(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ew(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tw(t);L("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>Wc(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Wc(e.remoteStore,r)),t.onlineComponents=e}async function tw(t){return t.offlineComponents||(L("FirestoreClient","Using default OfflineComponentProvider"),await $v(t,new Yv)),t.offlineComponents}async function Uf(t){return t.onlineComponents||(L("FirestoreClient","Using default OnlineComponentProvider"),await ew(t,new Qv)),t.onlineComponents}function nw(t){return Uf(t).then(e=>e.syncEngine)}async function Vf(t){const e=await Uf(t),n=e.eventManager;return n.onListen=Fv.bind(null,e.syncEngine),n.onUnlisten=jv.bind(null,e.syncEngine),n}function iw(t,e,n={}){const i=new kt;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new Mf({next:u=>{r.enqueueAndForget(()=>Cf(s,h));const f=u.docs.has(o);!f&&u.fromCache?l.reject(new V(b.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&u.fromCache&&a&&a.source==="server"?l.reject(new V(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(u)},error:u=>l.reject(u)}),h=new Af(Ga(o.path),c,{includeMetadataChanges:!0,uc:!0});return kf(s,h)}(await Vf(t),t.asyncQueue,e,n,i)),i.promise}function sw(t,e,n={}){const i=new kt;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new Mf({next:u=>{r.enqueueAndForget(()=>Cf(s,h)),u.fromCache&&a.source==="server"?l.reject(new V(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(u)},error:u=>l.reject(u)}),h=new Af(o,c,{includeMetadataChanges:!0,uc:!0});return kf(s,h)}(await Vf(t),t.asyncQueue,e,n,i)),i.promise}const Jc=new Map;/**
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
 */function Ff(t,e,n){if(!n)throw new V(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rw(t,e,n,i){if(e===!0&&i===!0)throw new V(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xc(t){if(!j.isDocumentKey(t))throw new V(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yc(t){if(j.isDocumentKey(t))throw new V(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ol(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function $n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ol(t);throw new V(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Qc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new V(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,rw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class al{constructor(e,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qc({}),this._settingsFrozen=!1,e instanceof Xn?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new V(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xn(s.options.projectId)}(e))}get app(){if(!this._app)throw new V(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Dy;switch(n.type){case"gapi":const i=n.client;return ce(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new Py(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new V(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Jc.get(e);n&&(L("ComponentProvider","Removing Datastore"),Jc.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class et{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}}class Gr{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Gr(this.firestore,e,this._query)}}class qt extends Gr{constructor(e,n,i){super(e,n,Ga(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new j(e))}withConverter(e){return new qt(this.firestore,e,this._path)}}function UI(t,e,...n){if(t=Ke(t),Ff("collection","path",e),t instanceof al){const i=fe.fromString(e,...n);return Yc(i),new qt(t,null,i)}{if(!(t instanceof et||t instanceof qt))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(fe.fromString(e,...n));return Yc(i),new qt(t.firestore,null,i)}}function VI(t,e,...n){if(t=Ke(t),arguments.length===1&&(e=Wh.R()),Ff("doc","path",e),t instanceof al){const i=fe.fromString(e,...n);return Xc(i),new et(t,null,new j(i))}{if(!(t instanceof et||t instanceof qt))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(fe.fromString(e,...n));return Xc(i),new et(t.firestore,t instanceof qt?t.converter:null,new j(i))}}/**
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
 */class ow{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new yf(this,"async_queue_retry"),this.yu=()=>{const n=vo();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ro.Yr()};const e=vo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const n=vo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const n=new kt;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!cs(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const n=this.hu.then(()=>(this.wu=!0,e().catch(i=>{this._u=i,this.wu=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Gt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.wu=!1,i))));return this.hu=n,n}enqueueAfterDelay(e,n,i){this.pu(),this.gu.indexOf(e)>-1&&(n=0);const s=nl.createAndSchedule(this,e,n,i,r=>this.Tu(r));return this.du.push(s),s}pu(){this._u&&G()}verifyOperationInProgress(){}async Au(){let e;do e=this.hu,await e;while(e!==this.hu)}Ru(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class zr extends al{constructor(e,n,i){super(e,n,i),this.type="firestore",this._queue=new ow,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Bf(this),this._firestoreClient.terminate()}}function FI(t=Hu()){return ga(t,"firestore").getImmediate()}function ll(t){return t._firestoreClient||Bf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Bf(t){var e;const n=t._freezeSettings(),i=function(s,r,o,a){return new jy(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Zv(t._authCredentials,t._appCheckCredentials,t._queue,i)}/**
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
 */class cl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ei{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ei(Ve.fromBase64String(e))}catch(n){throw new V(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ei(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class jf{constructor(e){this._methodName=e}}/**
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
 */class ul{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
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
 */const aw=/^__.*__$/;class lw{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,n,this.fieldTransforms):new xr(e,this.data,n,this.fieldTransforms)}}function xf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class hl{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.O=i,this.ignoreUndefinedProperties=s,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new hl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:i,Cu:!1});return s.Nu(e),s}xu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:i,Cu:!1});return s.vu(),s}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return dr(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(e.length===0)throw this.Ou("Document fields must not be empty");if(xf(this.Vu)&&aw.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class cw{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.O=i||Hr(e)}Fu(e,n,i,s=!1){return new hl({Vu:e,methodName:n,$u:i,path:ze.emptyPath(),Cu:!1,Mu:s},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function uw(t){const e=t._freezeSettings(),n=Hr(t._databaseId);return new cw(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hw(t,e,n,i,s,r={}){const o=t.Fu(r.merge||r.mergeFields?2:0,e,n,s);Kf("Data must be an object, but it was:",o,i);const a=Hf(i,o);let l,c;if(r.merge)l=new Ho(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const u of r.mergeFields){const f=fw(e,u,n);if(!o.contains(f))throw new V(b.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);gw(h,f)||h.push(f)}l=new Ho(h),c=o.fieldTransforms.filter(u=>l.covers(u.field))}else l=null,c=o.fieldTransforms;return new lw(new rt(a),l,c)}function qf(t,e){if(Wf(t=Ke(t)))return Kf("Unsupported field value:",e,t),Hf(t,e);if(t instanceof jf)return function(n,i){if(!xf(i.Vu))throw i.Ou(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Ou(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&e.Vu!==4)throw e.Ou("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=qf(o,i.ku(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=Ke(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return s_(i.O,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=$e.fromDate(n);return{timestampValue:hr(i.O,s)}}if(n instanceof $e){const s=new $e(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:hr(i.O,s)}}if(n instanceof ul)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ei)return{bytesValue:uf(i.O,n._byteString)};if(n instanceof et){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.Ou(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ja(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Ou(`Unsupported field value: ${ol(n)}`)}(t,e)}function Hf(t,e){const n={};return Kh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ai(t,(i,s)=>{const r=qf(s,e.Du(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function Wf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof ul||t instanceof ei||t instanceof et||t instanceof jf)}function Kf(t,e,n){if(!Wf(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=ol(n);throw i==="an object"?e.Ou(t+" a custom object"):e.Ou(t+" "+i)}}function fw(t,e,n){if((e=Ke(e))instanceof cl)return e._internalPath;if(typeof e=="string")return Gf(t,e);throw dr("Field path arguments must be of type string or ",t,!1,void 0,n)}const dw=new RegExp("[~\\*/\\[\\]]");function Gf(t,e,n){if(e.search(dw)>=0)throw dr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cl(...e.split("."))._internalPath}catch{throw dr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function dr(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new V(b.INVALID_ARGUMENT,a+t+l)}function gw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class zf{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mw extends zf{data(){return super.data()}}function Jf(t,e){return typeof e=="string"?Gf(t,e):e instanceof cl?e._internalPath:e._delegate._internalPath}/**
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
 */class Si{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xf extends zf{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new js(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Jf("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class js extends Xf{data(e={}){return super.data(e)}}class pw{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Si(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new js(this._firestore,this._userDataWriter,i.key,i,new Si(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>({type:"added",doc:new js(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Si(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:r++}))}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new js(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Si(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:yw(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function yw(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function _w(t){if(lr(t)&&t.explicitOrderBy.length===0)throw new V(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class vw{convertValue(e,n="none"){switch(pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const i={};return ai(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new ul(Ee(e.latitude),Ee(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=zh(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(ji(e));default:return null}}convertTimestamp(e){const n=zt(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=fe.fromString(e);ce(gf(i));const s=new Xn(i.get(1),i.get(3)),r=new j(i.popFirst(5));return s.isEqual(n)||Gt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function ww(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
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
 */function BI(t){t=$n(t,et);const e=$n(t.firestore,zr);return iw(ll(e),t._key).then(n=>Ew(e,t,n))}class Yf extends vw{constructor(e){super(),this.firestore=e}convertBytes(e){return new ei(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,n)}}function jI(t){t=$n(t,Gr);const e=$n(t.firestore,zr),n=ll(e),i=new Yf(e);return _w(t._query),sw(n,t._query).then(s=>new pw(e,i,t,s))}function xI(t,e,n){t=$n(t,et);const i=$n(t.firestore,zr),s=ww(t.converter,e,n);return Iw(i,[hw(uw(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,jn.none())])}function Iw(t,e){return function(n,i){const s=new kt;return n.asyncQueue.enqueueAndForget(async()=>xv(await nw(n),i,s)),s.promise}(ll(t),e)}function Ew(t,e,n){const i=n.docs.get(e._key),s=new Yf(t);return new Xf(t,s,e._key,i,new Si(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){oi=n})(Qi),Kn(new hn("firestore",(n,{options:i})=>{const s=n.getProvider("app").getImmediate(),r=new zr(s,new Ry(n.getProvider("auth-internal")),new Uy(n.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r},"PUBLIC")),xt(Ic,"3.4.5",t),xt(Ic,"3.4.5","esm2017")})();/*! *****************************************************************************
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
***************************************************************************** */function fl(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Qf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bw=Qf,Zf=new Ji("auth","Firebase",Qf());/**
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
 */const Zc=new ua("@firebase/auth");function xs(t,...e){Zc.logLevel<=se.ERROR&&Zc.error(`Auth (${Qi}): ${t}`,...e)}/**
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
 */function ot(t,...e){throw dl(t,...e)}function dt(t,...e){return dl(t,...e)}function Tw(t,e,n){const i=Object.assign(Object.assign({},bw()),{[e]:n});return new Ji("auth","Firebase",i).create(e,{appName:t.name})}function dl(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Zf.create(t,...e)}function B(t,e,...n){if(!t)throw dl(e,...n)}function Tt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xs(e),new Error(e)}function Ot(t,e){t||Tt(e)}/**
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
 */const $c=new Map;function St(t){Ot(t instanceof Function,"Expected a class definition");let e=$c.get(t);return e?(Ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$c.set(t,e),e)}/**
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
 */function Sw(t,e){const n=ga(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Xs(r,e!=null?e:{}))return s;ot(s,"already-initialized")}return n.initialize({options:e})}function kw(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(St);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function ta(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Cw(){return eu()==="http:"||eu()==="https:"}function eu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Aw(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cw()||Vu()||"connection"in navigator)?navigator.onLine:!0}function Nw(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class gs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ot(n>e,"Short delay should be less than long delay!"),this.isMobile=Uu()||Fu()}get(){return Aw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gl(t,e){Ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $f{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ow={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Dw=new gs(3e4,6e4);function ui(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kn(t,e,n,i,s={}){return ed(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Xi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),$f.fetch()(td(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function ed(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ow),e);try{const s=new Rw(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw wo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wo(t,"email-already-in-use",o);const h=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Tw(t,h,c);ot(t,h)}}catch(s){if(s instanceof En)throw s;ot(t,"network-request-failed")}}async function ms(t,e,n,i,s={}){const r=await kn(t,e,n,i,s);return"mfaPendingCredential"in r&&ot(t,"multi-factor-auth-required",{_serverResponse:r}),r}function td(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?gl(t.config,s):`${t.config.apiScheme}://${s}`}class Rw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(dt(this.auth,"network-request-failed")),Dw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wo(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=dt(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function Lw(t,e){return kn(t,"POST","/v1/accounts:delete",e)}async function Pw(t,e){return kn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Di(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
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
 */function qI(t,e=!1){return Ke(t).getIdToken(e)}async function Mw(t,e=!1){const n=Ke(t),i=await n.getIdToken(e),s=ml(i);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Di(Io(s.auth_time)),issuedAtTime:Di(Io(s.iat)),expirationTime:Di(Io(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Io(t){return Number(t)*1e3}function ml(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return xs("JWT malformed, contained fewer than 3 sections"),null;try{const s=cm(n);return s?JSON.parse(s):(xs("Failed to decode base64 JWT payload"),null)}catch(s){return xs("Caught error parsing JWT payload as JSON",s),null}}function Uw(t){const e=ml(t);return B(e,"internal-error"),B(typeof e.exp!="undefined","internal-error"),B(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ti(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof En&&Vw(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Vw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Fw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class nd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Di(this.lastLoginAt),this.creationTime=Di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gr(t){var e;const n=t.auth,i=await t.getIdToken(),s=await ti(t,Pw(n,{idToken:i}));B(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?xw(r.providerUserInfo):[],a=jw(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a==null?void 0:a.length),h=l?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new nd(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,u)}async function Bw(t){const e=Ke(t);await gr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jw(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function xw(t){return t.map(e=>{var{providerId:n}=e,i=fl(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function qw(t,e){const n=await ed(t,{},async()=>{const i=Xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=td(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$f.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken!="undefined","internal-error"),B(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Uw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await qw(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Ki;return i&&(B(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(B(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ki,this.toJSON())}_performRefresh(){return Tt("not implemented")}}/**
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
 */function Ut(t,e){B(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=fl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new nd(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ti(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Mw(this,e)}reload(){return Bw(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await gr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ti(this,Lw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,h;const u=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,F=(c=n.createdAt)!==null&&c!==void 0?c:void 0,N=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:A,emailVerified:p,isAnonymous:k,providerData:_,stsTokenManager:J}=n;B(A&&J,e,"internal-error");const M=Ki.fromJSON(this.name,J);B(typeof A=="string",e,"internal-error"),Ut(u,e.name),Ut(f,e.name),B(typeof p=="boolean",e,"internal-error"),B(typeof k=="boolean",e,"internal-error"),Ut(g,e.name),Ut(m,e.name),Ut(v,e.name),Ut(O,e.name),Ut(F,e.name),Ut(N,e.name);const q=new ln({uid:A,auth:e,email:f,emailVerified:p,displayName:u,isAnonymous:k,photoURL:m,phoneNumber:g,tenantId:v,stsTokenManager:M,createdAt:F,lastLoginAt:N});return _&&Array.isArray(_)&&(q.providerData=_.map(R=>Object.assign({},R))),O&&(q._redirectEventId=O),q}static async _fromIdTokenResponse(e,n,i=!1){const s=new Ki;s.updateFromServerResponse(n);const r=new ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await gr(r),r}}/**
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
 */class id{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}id.type="NONE";const tu=id;/**
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
 */function qs(t,e,n){return`firebase:${t}:${e}:${n}`}class qn{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=qs(this.userKey,s.apiKey,r),this.fullPersistenceKey=qs("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new qn(St(tu),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||St(tu);const o=qs(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const u=ln._fromJSON(e,h);c!==r&&(a=u),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new qn(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new qn(r,e,i))}}/**
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
 */function nu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(od(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ld(e))return"Blackberry";if(cd(e))return"Webos";if(pl(e))return"Safari";if((e.includes("chrome/")||rd(e))&&!e.includes("edge/"))return"Chrome";if(ad(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function sd(t=Ce()){return/firefox\//i.test(t)}function pl(t=Ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rd(t=Ce()){return/crios\//i.test(t)}function od(t=Ce()){return/iemobile/i.test(t)}function ad(t=Ce()){return/android/i.test(t)}function ld(t=Ce()){return/blackberry/i.test(t)}function cd(t=Ce()){return/webos/i.test(t)}function Jr(t=Ce()){return/iphone|ipad|ipod/i.test(t)}function Hw(t=Ce()){var e;return Jr(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function Ww(){return Bu()&&document.documentMode===10}function ud(t=Ce()){return Jr(t)||ad(t)||cd(t)||ld(t)||/windows phone/i.test(t)||od(t)}function Kw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function hd(t,e=[]){let n;switch(t){case"Browser":n=nu(Ce());break;case"Worker":n=`${nu(Ce())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qi}/${i}`}/**
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
 */class Gw{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iu(this),this.idTokenSubscription=new iu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=St(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await qn.create(this,e),!this._deleted)){if((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===r)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ke(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ji("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&St(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await qn.create(this,[St(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Xr(t){return Ke(t)}class iu{constructor(e){this.auth=e,this.observer=null,this.addObserver=vm(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class yl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tt("not implemented")}_getIdTokenResponse(e){return Tt("not implemented")}_linkToIdToken(e,n){return Tt("not implemented")}_getReauthenticationResolver(e){return Tt("not implemented")}}async function zw(t,e){return kn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Jw(t,e){return ms(t,"POST","/v1/accounts:signInWithPassword",ui(t,e))}async function fd(t,e){return kn(t,"POST","/v1/accounts:sendOobCode",ui(t,e))}async function Xw(t,e){return fd(t,e)}async function Yw(t,e){return fd(t,e)}/**
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
 */async function Qw(t,e){return ms(t,"POST","/v1/accounts:signInWithEmailLink",ui(t,e))}async function Zw(t,e){return ms(t,"POST","/v1/accounts:signInWithEmailLink",ui(t,e))}/**
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
 */class Gi extends yl{constructor(e,n,i,s=null){super("password",i);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Gi(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Gi(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Jw(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qw(e,{email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return zw(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Zw(e,{idToken:n,email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Hn(t,e){return ms(t,"POST","/v1/accounts:signInWithIdp",ui(t,e))}/**
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
 */const $w="http://localhost";class vn extends yl{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=fl(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new vn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Hn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hn(e,n)}buildRequest(){const e={requestUri:$w,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xi(n)}return e}}/**
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
 */function e0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function t0(t){const e=Ei(bi(t)).link,n=e?Ei(bi(e)).deep_link_id:null,i=Ei(bi(t)).deep_link_id;return(i?Ei(bi(i)).link:null)||i||n||e||t}class _l{constructor(e){var n,i,s,r,o,a;const l=Ei(bi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(i=l.oobCode)!==null&&i!==void 0?i:null,u=e0((s=l.mode)!==null&&s!==void 0?s:null);B(c&&h&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=t0(e);try{return new _l(n)}catch{return null}}}/**
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
 */class hi{constructor(){this.providerId=hi.PROVIDER_ID}static credential(e,n){return Gi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=_l.parseLink(n);return B(i,"argument-error"),Gi._fromEmailAndCode(e,i.code,i.tenantId)}}hi.PROVIDER_ID="password";hi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class dd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ps extends dd{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vt extends ps{constructor(){super("facebook.com")}static credential(e){return vn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
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
 */class Ft extends ps{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return vn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ft.credential(n,i)}catch{return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com";Ft.PROVIDER_ID="google.com";/**
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
 */class Bt extends ps{constructor(){super("github.com")}static credential(e){return vn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
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
 */class jt extends ps{constructor(){super("twitter.com")}static credential(e,n){return vn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return jt.credential(n,i)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
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
 */async function n0(t,e){return ms(t,"POST","/v1/accounts:signUp",ui(t,e))}/**
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
 */class wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await ln._fromIdTokenResponse(e,i,s),o=su(i);return new wn({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=su(i);return new wn({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function su(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class mr extends En{constructor(e,n,i,s){var r;super(n.code,n.message);this.operationType=i,this.user=s,Object.setPrototypeOf(this,mr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new mr(e,n,i,s)}}function gd(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?mr._fromErrorAndOperation(t,r,e,i):r})}async function i0(t,e,n=!1){const i=await ti(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wn._forOperation(t,"link",i)}/**
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
 */async function s0(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await ti(t,gd(i,s,e,t),n);B(r.idToken,i,"internal-error");const o=ml(r.idToken);B(o,i,"internal-error");const{sub:a}=o;return B(t.uid===a,i,"user-mismatch"),wn._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ot(i,"user-mismatch"),r}}/**
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
 */async function md(t,e,n=!1){const i="signIn",s=await gd(t,i,e),r=await wn._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function r0(t,e){return md(Xr(t),e)}/**
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
 */function pd(t,e,n){var i;B(((i=n.url)===null||i===void 0?void 0:i.length)>0,t,"invalid-continue-uri"),B(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(B(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(B(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function HI(t,e,n){const i=Ke(t),s={requestType:"PASSWORD_RESET",email:e};n&&pd(i,s,n),await Yw(i,s)}async function WI(t,e,n){const i=Xr(t),s=await n0(i,{returnSecureToken:!0,email:e,password:n}),r=await wn._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function KI(t,e,n){return r0(Ke(t),hi.credential(e,n))}async function GI(t,e){const n=Ke(t),i=await t.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};e&&pd(n.auth,s,e);const{email:r}=await Xw(n.auth,s);r!==t.email&&await t.reload()}/**
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
 */async function o0(t,e){return kn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function zI(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Ke(t),r={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ti(i,o0(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}/**
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
 */function JI(t,e){return Ke(t).setPersistence(e)}const pr="__sak";/**
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
 */class yd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pr,"1"),this.storage.removeItem(pr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function a0(){const t=Ce();return pl(t)||Jr(t)}const l0=1e3,c0=10;class _d extends yd{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=a0()&&Kw(),this.fallbackToPolling=ud(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Ww()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,c0):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},l0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_d.type="LOCAL";const u0=_d;/**
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
 */class vd extends yd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vd.type="SESSION";const wd=vd;/**
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
 */function h0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Yr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Yr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await h0(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yr.receivers=[];/**
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
 */function vl(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class f0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=vl("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(u){const f=u;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function gt(){return window}function d0(t){gt().location.href=t}/**
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
 */function Id(){return typeof gt().WorkerGlobalScope!="undefined"&&typeof gt().importScripts=="function"}async function g0(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function m0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function p0(){return Id()?self:null}/**
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
 */const Ed="firebaseLocalStorageDb",y0=1,yr="firebaseLocalStorage",bd="fbase_key";class ys{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qr(t,e){return t.transaction([yr],e?"readwrite":"readonly").objectStore(yr)}function _0(){const t=indexedDB.deleteDatabase(Ed);return new ys(t).toPromise()}function na(){const t=indexedDB.open(Ed,y0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(yr,{keyPath:bd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(yr)?e(i):(i.close(),await _0(),e(await na()))})})}async function ru(t,e,n){const i=Qr(t,!0).put({[bd]:e,value:n});return new ys(i).toPromise()}async function v0(t,e){const n=Qr(t,!1).get(e),i=await new ys(n).toPromise();return i===void 0?null:i.value}function ou(t,e){const n=Qr(t,!0).delete(e);return new ys(n).toPromise()}const w0=800,I0=3;class Td{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await na(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>I0)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Id()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yr._getInstance(p0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await g0(),!this.activeServiceWorker)return;this.sender=new f0(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||m0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await na();return await ru(e,pr,"1"),await ou(e,pr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>ru(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>v0(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ou(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Qr(s,!1).getAll();return new ys(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),w0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Td.type="LOCAL";const E0=Td;/**
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
 */function b0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function T0(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=dt("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",b0().appendChild(i)})}function S0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new gs(3e4,6e4);/**
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
 */function k0(t,e){return e?St(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wl extends yl{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Hn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function C0(t){return md(t.auth,new wl(t),t.bypassAuthState)}function A0(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),s0(n,new wl(t),t.bypassAuthState)}async function N0(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),i0(n,new wl(t),t.bypassAuthState)}/**
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
 */class Sd{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return C0;case"linkViaPopup":case"linkViaRedirect":return N0;case"reauthViaPopup":case"reauthViaRedirect":return A0;default:ot(this.auth,"internal-error")}}resolve(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const O0=new gs(2e3,1e4);class Vn extends Sd{constructor(e,n,i,s,r){super(e,n,s,r);this.provider=i,this.authWindow=null,this.pollId=null,Vn.currentPopupAction&&Vn.currentPopupAction.cancel(),Vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Ot(this.filter.length===1,"Popup operations only handle one event");const e=vl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,O0.get())};e()}}Vn.currentPopupAction=null;/**
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
 */const D0="pendingRedirect",Eo=new Map;class R0 extends Sd{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=Eo.get(this.auth._key());if(!e){try{const i=await L0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Eo.set(this.auth._key(),e)}return this.bypassAuthState||Eo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L0(t,e){const n=M0(e),i=P0(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function P0(t){return St(t._redirectPersistence)}function M0(t){return qs(D0,t.config.apiKey,t.name)}async function U0(t,e,n=!1){const i=Xr(t),s=k0(i,e),o=await new R0(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const V0=10*60*1e3;class F0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!B0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!kd(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(dt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=V0&&this.cachedEventUids.clear(),this.cachedEventUids.has(au(e))}saveEventToCache(e){this.cachedEventUids.add(au(e)),this.lastProcessedEventTime=Date.now()}}function au(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function B0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kd(t);default:return!1}}/**
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
 */async function j0(t,e={}){return kn(t,"GET","/v1/projects",e)}/**
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
 */const x0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,q0=/^https?/;async function H0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await j0(t);for(const n of e)try{if(W0(n))return}catch{}ot(t,"unauthorized-domain")}function W0(t){const e=ta(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!q0.test(n))return!1;if(x0.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const K0=new gs(3e4,6e4);function lu(){const t=gt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function G0(t){return new Promise((e,n)=>{var i,s,r;function o(){lu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lu(),n(dt(t,"network-request-failed"))},timeout:K0.get()})}if((s=(i=gt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((r=gt().gapi)===null||r===void 0?void 0:r.load)o();else{const a=S0("iframefcb");return gt()[a]=()=>{gapi.load?o():n(dt(t,"network-request-failed"))},T0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Hs=null,e})}let Hs=null;function z0(t){return Hs=Hs||G0(t),Hs}/**
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
 */const J0=new gs(5e3,15e3),X0="__/auth/iframe",Y0="emulator/auth/iframe",Q0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Z0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $0(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gl(e,Y0):`https://${t.config.authDomain}/${X0}`,i={apiKey:e.apiKey,appName:t.name,v:Qi},s=Z0.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Xi(i).slice(1)}`}async function eI(t){const e=await z0(t),n=gt().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:$0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Q0,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=dt(t,"network-request-failed"),a=gt().setTimeout(()=>{r(o)},J0.get());function l(){gt().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const tI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nI=500,iI=600,sI="_blank",rI="http://localhost";class cu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oI(t,e,n,i=nI,s=iI){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tI),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Ce().toLowerCase();n&&(a=rd(c)?sI:n),sd(c)&&(e=e||rI,l.scrollbars="yes");const h=Object.entries(l).reduce((f,[g,m])=>`${f}${g}=${m},`,"");if(Hw(c)&&a!=="_self")return aI(e||"",a),new cu(null);const u=window.open(e||"",a,h);B(u,t,"popup-blocked");try{u.focus()}catch{}return new cu(u)}function aI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const lI="__/auth/handler",cI="emulator/auth/handler";function uu(t,e,n,i,s,r){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Qi,eventId:s};if(e instanceof dd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_m(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof ps){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${uI(t)}?${Xi(a).slice(1)}`}function uI({config:t}){return t.emulator?gl(t,cI):`https://${t.authDomain}/${lI}`}/**
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
 */const bo="webStorageSupport";class hI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wd,this._completeRedirectFn=U0}async _openPopup(e,n,i,s){var r;Ot((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=uu(e,n,i,ta(),s);return oI(e,o,vl())}async _openRedirect(e,n,i,s){return await this._originValidation(e),d0(uu(e,n,i,ta(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Ot(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await eI(e),i=new F0(e);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bo,{type:bo},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[bo];o!==void 0&&n(!!o),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=H0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ud()||pl()||Jr()}}const fI=hI;var hu="@firebase/auth",fu="0.19.9";/**
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
 */class dI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mI(t){Kn(new hn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(o=>{B(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),B(!(r==null?void 0:r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hd(t)},l=new Gw(o,a);return kw(l,n),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Kn(new hn("auth-internal",e=>{const n=Xr(e.getProvider("auth").getImmediate());return(i=>new dI(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(hu,fu,gI(t)),xt(hu,fu,"esm2017")}/**
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
 */function XI(t=Hu()){const e=ga(t,"auth");return e.isInitialized()?e.getImmediate():Sw(t,{popupRedirectResolver:fI,persistence:[E0,u0,wd]})}mI("Browser");function pI(t,{delay:e=0,duration:n=400,easing:i=mu}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:r=>`opacity: ${r*s}`}}const{window:yI}=kg;function du(t){let e,n,i,s,r,o,a,l,c,h,u,f,g,m,v,O,F,N=t[1].closeButton&&gu(t);var A=t[2];function p(k){return{}}return A&&(o=new A(p())),{c(){e=ie("div"),n=ie("div"),i=ie("div"),N&&N.c(),s=De(),r=ie("div"),o&&be(o.$$.fragment),this.h()},l(k){e=ae(k,"DIV",{class:!0,style:!0});var _=$(e);n=ae(_,"DIV",{class:!0,style:!0});var J=$(n);i=ae(J,"DIV",{class:!0,role:!0,"aria-modal":!0,"aria-label":!0,"aria-labelledby":!0,style:!0});var M=$(i);N&&N.l(M),s=Re(M),r=ae(M,"DIV",{class:!0,style:!0});var q=$(r);o&&yt(o.$$.fragment,q),q.forEach(C),M.forEach(C),J.forEach(C),_.forEach(C),this.h()},h(){w(r,"class",a=ft(t[1].classContent)+" svelte-g4wg3a"),w(r,"style",t[9]),me(r,"content",!t[0]),w(i,"class",l=ft(t[1].classWindow)+" svelte-g4wg3a"),w(i,"role","dialog"),w(i,"aria-modal","true"),w(i,"aria-label",c=t[1].ariaLabelledBy?null:t[1].ariaLabel||null),w(i,"aria-labelledby",h=t[1].ariaLabelledBy||null),w(i,"style",t[8]),me(i,"window",!t[0]),w(n,"class",f=ft(t[1].classWindowWrap)+" svelte-g4wg3a"),w(n,"style",t[7]),me(n,"wrap",!t[0]),w(e,"class",g=ft(t[1].classBg)+" svelte-g4wg3a"),w(e,"style",t[6]),me(e,"bg",!t[0])},m(k,_){X(k,e,_),ne(e,n),ne(n,i),N&&N.m(i,null),ne(i,s),ne(i,r),o&&ve(o,r,null),t[48](i),t[49](n),t[50](e),v=!0,O||(F=[oe(i,"introstart",function(){Pn(t[13])&&t[13].apply(this,arguments)}),oe(i,"outrostart",function(){Pn(t[14])&&t[14].apply(this,arguments)}),oe(i,"introend",function(){Pn(t[15])&&t[15].apply(this,arguments)}),oe(i,"outroend",function(){Pn(t[16])&&t[16].apply(this,arguments)}),oe(e,"mousedown",t[20]),oe(e,"mouseup",t[21])],O=!0)},p(k,_){if(t=k,t[1].closeButton?N?(N.p(t,_),_[0]&2&&P(N,1)):(N=gu(t),N.c(),P(N,1),N.m(i,s)):N&&(pe(),x(N,1,1,()=>{N=null}),ye()),A!==(A=t[2])){if(o){pe();const J=o;x(J.$$.fragment,1,0,()=>{we(J,1)}),ye()}A?(o=new A(p()),be(o.$$.fragment),P(o.$$.fragment,1),ve(o,r,null)):o=null}(!v||_[0]&2&&a!==(a=ft(t[1].classContent)+" svelte-g4wg3a"))&&w(r,"class",a),(!v||_[0]&512)&&w(r,"style",t[9]),_[0]&3&&me(r,"content",!t[0]),(!v||_[0]&2&&l!==(l=ft(t[1].classWindow)+" svelte-g4wg3a"))&&w(i,"class",l),(!v||_[0]&2&&c!==(c=t[1].ariaLabelledBy?null:t[1].ariaLabel||null))&&w(i,"aria-label",c),(!v||_[0]&2&&h!==(h=t[1].ariaLabelledBy||null))&&w(i,"aria-labelledby",h),(!v||_[0]&256)&&w(i,"style",t[8]),_[0]&3&&me(i,"window",!t[0]),(!v||_[0]&2&&f!==(f=ft(t[1].classWindowWrap)+" svelte-g4wg3a"))&&w(n,"class",f),(!v||_[0]&128)&&w(n,"style",t[7]),_[0]&3&&me(n,"wrap",!t[0]),(!v||_[0]&2&&g!==(g=ft(t[1].classBg)+" svelte-g4wg3a"))&&w(e,"class",g),(!v||_[0]&64)&&w(e,"style",t[6]),_[0]&3&&me(e,"bg",!t[0])},i(k){v||(P(N),o&&P(o.$$.fragment,k),cn(()=>{u||(u=Cs(i,t[12],t[1].transitionWindowProps,!0)),u.run(1)}),cn(()=>{m||(m=Cs(e,t[11],t[1].transitionBgProps,!0)),m.run(1)}),v=!0)},o(k){x(N),o&&x(o.$$.fragment,k),u||(u=Cs(i,t[12],t[1].transitionWindowProps,!1)),u.run(0),m||(m=Cs(e,t[11],t[1].transitionBgProps,!1)),m.run(0),v=!1},d(k){k&&C(e),N&&N.d(),o&&we(o),t[48](null),k&&u&&u.end(),t[49](null),t[50](null),k&&m&&m.end(),O=!1,at(F)}}}function gu(t){let e,n,i,s,r;const o=[vI,_I],a=[];function l(c,h){return h[0]&2&&(e=null),e==null&&(e=!!c[17](c[1].closeButton)),e?0:1}return n=l(t,[-1,-1,-1]),i=a[n]=o[n](t),{c(){i.c(),s=de()},l(c){i.l(c),s=de()},m(c,h){a[n].m(c,h),X(c,s,h),r=!0},p(c,h){let u=n;n=l(c,h),n===u?a[n].p(c,h):(pe(),x(a[u],1,1,()=>{a[u]=null}),ye(),i=a[n],i?i.p(c,h):(i=a[n]=o[n](c),i.c()),P(i,1),i.m(s.parentNode,s))},i(c){r||(P(i),r=!0)},o(c){x(i),r=!1},d(c){a[n].d(c),c&&C(s)}}}function _I(t){let e,n,i,s;return{c(){e=ie("button"),this.h()},l(r){e=ae(r,"BUTTON",{class:!0,"aria-label":!0,style:!0}),$(e).forEach(C),this.h()},h(){w(e,"class",n=ft(t[1].classCloseButton)+" svelte-g4wg3a"),w(e,"aria-label","Close modal"),w(e,"style",t[10]),me(e,"close",!t[0])},m(r,o){X(r,e,o),i||(s=oe(e,"click",t[18]),i=!0)},p(r,o){o[0]&2&&n!==(n=ft(r[1].classCloseButton)+" svelte-g4wg3a")&&w(e,"class",n),o[0]&1024&&w(e,"style",r[10]),o[0]&3&&me(e,"close",!r[0])},i:_e,o:_e,d(r){r&&C(e),i=!1,s()}}}function vI(t){let e,n,i;var s=t[1].closeButton;function r(o){return{props:{onClose:o[18]}}}return s&&(e=new s(r(t))),{c(){e&&be(e.$$.fragment),n=de()},l(o){e&&yt(e.$$.fragment,o),n=de()},m(o,a){e&&ve(e,o,a),X(o,n,a),i=!0},p(o,a){if(s!==(s=o[1].closeButton)){if(e){pe();const l=e;x(l.$$.fragment,1,0,()=>{we(l,1)}),ye()}s?(e=new s(r(o)),be(e.$$.fragment),P(e.$$.fragment,1),ve(e,n.parentNode,n)):e=null}},i(o){i||(e&&P(e.$$.fragment,o),i=!0)},o(o){e&&x(e.$$.fragment,o),i=!1},d(o){o&&C(n),e&&we(e,o)}}}function wI(t){let e,n,i,s,r=t[2]&&du(t);const o=t[47].default,a=ia(o,t,t[46],null);return{c(){r&&r.c(),e=De(),a&&a.c()},l(l){r&&r.l(l),e=Re(l),a&&a.l(l)},m(l,c){r&&r.m(l,c),X(l,e,c),a&&a.m(l,c),n=!0,i||(s=oe(yI,"keydown",t[19]),i=!0)},p(l,c){l[2]?r?(r.p(l,c),c[0]&4&&P(r,1)):(r=du(l),r.c(),P(r,1),r.m(e.parentNode,e)):r&&(pe(),x(r,1,1,()=>{r=null}),ye()),a&&a.p&&(!n||c[1]&32768)&&ra(a,o,l,l[46],n?sa(o,l[46],c,null):oa(l[46]),null)},i(l){n||(P(r),P(a,l),n=!0)},o(l){x(r),x(a,l),n=!1},d(l){r&&r.d(l),l&&C(e),a&&a.d(l),i=!1,s()}}}function II(t,e={}){return function(i){return new t(kl(nn({},i),{props:nn(nn({},e),i.props)}))}}function EI(t,e,n){let{$$slots:i={},$$scope:s}=e;const r=zi(),o=Ig;let{show:a=null}=e,{key:l="simple-modal"}=e,{ariaLabel:c=null}=e,{ariaLabelledBy:h=null}=e,{closeButton:u=!0}=e,{closeOnEsc:f=!0}=e,{closeOnOuterClick:g=!0}=e,{styleBg:m={}}=e,{styleWindowWrap:v={}}=e,{styleWindow:O={}}=e,{styleContent:F={}}=e,{styleCloseButton:N={}}=e,{classBg:A=null}=e,{classWindowWrap:p=null}=e,{classWindow:k=null}=e,{classContent:_=null}=e,{classCloseButton:J=null}=e,{unstyled:M=!1}=e,{setContext:q=o}=e,{transitionBg:R=pI}=e,{transitionBgProps:ee={duration:250}}=e,{transitionWindow:H=R}=e,{transitionWindowProps:Y=ee}=e,{disableFocusTrap:Q=!1}=e;const I={ariaLabel:c,ariaLabelledBy:h,closeButton:u,closeOnEsc:f,closeOnOuterClick:g,styleBg:m,styleWindowWrap:v,styleWindow:O,styleContent:F,styleCloseButton:N,classBg:A,classWindowWrap:p,classWindow:k,classContent:_,classCloseButton:J,transitionBg:R,transitionBgProps:ee,transitionWindow:H,transitionWindowProps:Y,disableFocusTrap:Q,unstyled:M};let T=nn({},I),ge=null,Oe,Xe,Ye,vt,lt,Cn,wt,Qt,Lt,ct,E,K,Be,Pt,An;const fi=y=>y.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase(),ut=y=>y?Object.keys(y).reduce((nt,Qe)=>`${nt}; ${fi(Qe)}: ${y[Qe]}`,""):"",Nn=y=>!!(y&&y.constructor&&y.call&&y.apply),di=()=>{n(6,lt=ut(Object.assign({},{width:window.innerWidth,height:window.innerHeight},T.styleBg))),n(7,Cn=ut(T.styleWindowWrap)),n(8,wt=ut(T.styleWindow)),n(9,Qt=ut(T.styleContent)),n(10,Lt=ut(T.styleCloseButton)),n(11,ct=T.transitionBg),n(12,E=T.transitionWindow)},Zt=()=>{};let gi=Zt,$t=Zt,mi=Zt,en=Zt;const pi=(y,nt={},Qe={},Se={})=>{n(2,ge=II(y,nt)),n(1,T=nn(nn({},I),Qe)),di(),ws(),n(13,gi=Ze=>{Se.onOpen&&Se.onOpen(Ze),r("open"),r("opening")}),n(14,$t=Ze=>{Se.onClose&&Se.onClose(Ze),r("close"),r("closing")}),n(15,mi=Ze=>{Se.onOpened&&Se.onOpened(Ze),r("opened")}),n(16,en=Ze=>{Se.onClosed&&Se.onClosed(Ze),r("closed")})},ht=(y={})=>{!ge||(n(14,$t=y.onClose||$t),n(16,en=y.onClosed||en),n(2,ge=null),Is())},_s=y=>{if(T.closeOnEsc&&ge&&y.key==="Escape"&&(y.preventDefault(),ht()),ge&&y.key==="Tab"&&!T.disableFocusTrap){const nt=Ye.querySelectorAll("*"),Qe=Array.from(nt).filter(Ze=>Ze.tabIndex>=0);let Se=Qe.indexOf(document.activeElement);Se===-1&&y.shiftKey&&(Se=0),Se+=Qe.length+(y.shiftKey?-1:1),Se%=Qe.length,Qe[Se].focus(),y.preventDefault()}},yi=y=>{T.closeOnOuterClick&&(y.target===Oe||y.target===Xe)&&(An=y.target)},vs=y=>{T.closeOnOuterClick&&y.target===An&&(y.preventDefault(),ht())},ws=()=>{vt=window.scrollY,K=document.body.style.position,Be=document.body.style.overflow,Pt=document.body.style.width,document.body.style.position="fixed",document.body.style.top=`-${vt}px`,document.body.style.overflow="hidden",document.body.style.width="100%"},Is=()=>{document.body.style.position=K||"",document.body.style.top="",document.body.style.overflow=Be||"",document.body.style.width=Pt||"",window.scrollTo(0,vt)};q(l,{open:pi,close:ht});let Mt=!1;Cu(()=>{Mt&&ht()}),wr(()=>{n(45,Mt=!0)});function Zr(y){st[y?"unshift":"push"](()=>{Ye=y,n(5,Ye)})}function Es(y){st[y?"unshift":"push"](()=>{Xe=y,n(4,Xe)})}function _i(y){st[y?"unshift":"push"](()=>{Oe=y,n(3,Oe)})}return t.$$set=y=>{"show"in y&&n(22,a=y.show),"key"in y&&n(23,l=y.key),"ariaLabel"in y&&n(24,c=y.ariaLabel),"ariaLabelledBy"in y&&n(25,h=y.ariaLabelledBy),"closeButton"in y&&n(26,u=y.closeButton),"closeOnEsc"in y&&n(27,f=y.closeOnEsc),"closeOnOuterClick"in y&&n(28,g=y.closeOnOuterClick),"styleBg"in y&&n(29,m=y.styleBg),"styleWindowWrap"in y&&n(30,v=y.styleWindowWrap),"styleWindow"in y&&n(31,O=y.styleWindow),"styleContent"in y&&n(32,F=y.styleContent),"styleCloseButton"in y&&n(33,N=y.styleCloseButton),"classBg"in y&&n(34,A=y.classBg),"classWindowWrap"in y&&n(35,p=y.classWindowWrap),"classWindow"in y&&n(36,k=y.classWindow),"classContent"in y&&n(37,_=y.classContent),"classCloseButton"in y&&n(38,J=y.classCloseButton),"unstyled"in y&&n(0,M=y.unstyled),"setContext"in y&&n(39,q=y.setContext),"transitionBg"in y&&n(40,R=y.transitionBg),"transitionBgProps"in y&&n(41,ee=y.transitionBgProps),"transitionWindow"in y&&n(42,H=y.transitionWindow),"transitionWindowProps"in y&&n(43,Y=y.transitionWindowProps),"disableFocusTrap"in y&&n(44,Q=y.disableFocusTrap),"$$scope"in y&&n(46,s=y.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&4194304|t.$$.dirty[1]&16384&&Mt&&(Nn(a)?pi(a):ht())},[M,T,ge,Oe,Xe,Ye,lt,Cn,wt,Qt,Lt,ct,E,gi,$t,mi,en,Nn,ht,_s,yi,vs,a,l,c,h,u,f,g,m,v,O,F,N,A,p,k,_,J,q,R,ee,H,Y,Q,Mt,s,i,Zr,Es,_i]}class YI extends Rt{constructor(e){super();Dt(this,e,EI,wI,pt,{show:22,key:23,ariaLabel:24,ariaLabelledBy:25,closeButton:26,closeOnEsc:27,closeOnOuterClick:28,styleBg:29,styleWindowWrap:30,styleWindow:31,styleContent:32,styleCloseButton:33,classBg:34,classWindowWrap:35,classWindow:36,classContent:37,classCloseButton:38,unstyled:0,setContext:39,transitionBg:40,transitionBgProps:41,transitionWindow:42,transitionWindowProps:43,disableFocusTrap:44},null,[-1,-1,-1])}}export{st as $,Du as A,we as B,_r as C,RI as D,Ps as E,ne as F,_e as G,oe as H,la as I,ia as J,NI as K,ra as L,oa as M,sa as N,SI as O,DI as P,LI as Q,PI as R,Rt as S,Ol as T,at as U,HI as V,MI as W,XI as X,FI as Y,JI as Z,tu as _,$ as a,TI as a0,YI as a1,cn as a2,CI as a3,kI as a4,WI as a5,II as a6,xI as a7,VI as a8,UI as a9,zI as aa,GI as ab,qI as ac,AI as ad,KI as ae,BI as af,jI as ag,w as b,ae as c,C as d,ie as e,Dn as f,X as g,Wn as h,Dt as i,Ws as j,De as k,de as l,Re as m,pe as n,x as o,ye as p,P as q,Ig as r,pt as s,Ht as t,OI as u,wr as v,be as w,yt as x,ve as y,ca as z};
