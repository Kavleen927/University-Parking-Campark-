function Q(){}function en(n,e){for(const t in e)n[t]=e[t];return n}function _r(n){return n()}function wi(){return Object.create(null)}function Ee(n){n.forEach(_r)}function Hs(n){return typeof n=="function"}function Te(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Bs(n){return Object.keys(n).length===0}function Fs(n,...e){if(n==null)return Q;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Xc(n,e,t){n.$$.on_destroy.push(Fs(e,t))}function gr(n,e,t,i){if(n){const r=pr(n,e,t,i);return n[0](r)}}function pr(n,e,t,i){return n[1]&&i?en(t.ctx.slice(),n[1](i(e))):t.ctx}function Ir(n,e,t,i){if(n[2]&&i){const r=n[2](i(t));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let l=0;l<o;l+=1)s[l]=e.dirty[l]|r[l];return s}return e.dirty|r}return e.dirty}function br(n,e,t,i,r,s){if(r){const o=pr(e,t,i,s);n.p(o,r)}}function vr(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let i=0;i<t;i++)e[i]=-1;return e}return-1}let tn=!1;function js(){tn=!0}function Ws(){tn=!1}function zs(n,e,t,i){for(;n<e;){const r=n+(e-n>>1);t(r)<=i?n=r+1:e=r}return n}function Gs(n){if(n.hydrate_init)return;n.hydrate_init=!0;let e=n.childNodes;if(n.nodeName==="HEAD"){const a=[];for(let c=0;c<e.length;c++){const h=e[c];h.claim_order!==void 0&&a.push(h)}e=a}const t=new Int32Array(e.length+1),i=new Int32Array(e.length);t[0]=-1;let r=0;for(let a=0;a<e.length;a++){const c=e[a].claim_order,h=(r>0&&e[t[r]].claim_order<=c?r+1:zs(1,r,d=>e[t[d]].claim_order,c))-1;i[a]=t[h]+1;const f=h+1;t[f]=a,r=Math.max(f,r)}const s=[],o=[];let l=e.length-1;for(let a=t[r]+1;a!=0;a=i[a-1]){for(s.push(e[a-1]);l>=a;l--)o.push(e[l]);l--}for(;l>=0;l--)o.push(e[l]);s.reverse(),o.sort((a,c)=>a.claim_order-c.claim_order);for(let a=0,c=0;a<o.length;a++){for(;c<s.length&&o[a].claim_order>=s[c].claim_order;)c++;const h=c<s.length?s[c]:null;n.insertBefore(o[a],h)}}function qs(n,e){n.appendChild(e)}function W(n,e){if(tn){for(Gs(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentElement!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;e!==n.actual_end_child?(e.claim_order!==void 0||e.parentNode!==n)&&n.insertBefore(e,n.actual_end_child):n.actual_end_child=e.nextSibling}else(e.parentNode!==n||e.nextSibling!==null)&&n.appendChild(e)}function Ks(n,e,t){n.insertBefore(e,t||null)}function V(n,e,t){tn&&!t?W(n,e):(e.parentNode!==n||e.nextSibling!=t)&&n.insertBefore(e,t||null)}function w(n){n.parentNode.removeChild(n)}function qn(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function q(n){return document.createElement(n)}function ve(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Pe(n){return document.createTextNode(n)}function oe(){return Pe(" ")}function Z(){return Pe("")}function x(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function Js(n){return function(e){return e.preventDefault(),n.call(this,e)}}function v(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Ei(n,e){const t=Object.getOwnPropertyDescriptors(n.__proto__);for(const i in e)e[i]==null?n.removeAttribute(i):i==="style"?n.style.cssText=e[i]:i==="__value"?n.value=n[i]=e[i]:t[i]&&t[i].set?n[i]=e[i]:v(n,i,e[i])}function Un(n,e,t){e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:v(n,e,t)}function xc(n){return n===""?null:+n}function F(n){return Array.from(n.childNodes)}function yr(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function wr(n,e,t,i,r=!1){yr(n);const s=(()=>{for(let o=n.claim_info.last_index;o<n.length;o++){const l=n[o];if(e(l)){const a=t(l);return a===void 0?n.splice(o,1):n[o]=a,r||(n.claim_info.last_index=o),l}}for(let o=n.claim_info.last_index-1;o>=0;o--){const l=n[o];if(e(l)){const a=t(l);return a===void 0?n.splice(o,1):n[o]=a,r?a===void 0&&n.claim_info.last_index--:n.claim_info.last_index=o,l}}return i()})();return s.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,s}function Er(n,e,t,i){return wr(n,r=>r.nodeName===e,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const l=r.attributes[o];t[l.name]||s.push(l.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(e))}function X(n,e,t){return Er(n,e,t,q)}function De(n,e,t){return Er(n,e,t,ve)}function ot(n,e){return wr(n,t=>t.nodeType===3,t=>{const i=""+e;if(t.data.startsWith(i)){if(t.data.length!==i.length)return t.splitText(i.length)}else t.data=i},()=>Pe(e),!0)}function ae(n){return ot(n," ")}function Ti(n,e,t){for(let i=t;i<n.length;i+=1){const r=n[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return n.length}function Ys(n){const e=Ti(n,"HTML_TAG_START",0),t=Ti(n,"HTML_TAG_END",e);if(e===t)return new Vn;yr(n);const i=n.splice(e,t-e+1);w(i[0]),w(i[i.length-1]);const r=i.slice(1,i.length-1);for(const s of r)s.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1;return new Vn(r)}function Gt(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function Si(n,e){n.value=e==null?"":e}function et(n,e,t,i){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,i?"important":"")}function Zc(n,e){for(let t=0;t<n.options.length;t+=1){const i=n.options[t];if(i.__value===e){i.selected=!0;return}}n.selectedIndex=-1}function Qc(n){const e=n.querySelector(":checked")||n.options[0];return e&&e.__value}let Ut;function Xs(){if(Ut===void 0){Ut=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{Ut=!0}}return Ut}function xs(n,e){getComputedStyle(n).position==="static"&&(n.style.position="relative");const i=q("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=Xs();let s;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=x(window,"message",o=>{o.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{s=x(i.contentWindow,"resize",e)}),qs(n,i),()=>{(r||s&&i.contentWindow)&&s(),w(i)}}function fe(n,e,t){n.classList[t?"add":"remove"](e)}function Zs(n,e,t=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(n,t,!1,e),i}function $c(n,e=document.body){return Array.from(e.querySelectorAll(n))}class Qs{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,i=null){this.e||(this.e=q(t.nodeName),this.t=t,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)Ks(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}class Vn extends Qs{constructor(e){super();this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)V(this.t,this.n[t],e)}}let yt;function bt(n){yt=n}function Ye(){if(!yt)throw new Error("Function called outside component initialization");return yt}function Tr(n){Ye().$$.before_update.push(n)}function Kn(n){Ye().$$.on_mount.push(n)}function eu(n){Ye().$$.after_update.push(n)}function $s(n){Ye().$$.on_destroy.push(n)}function nn(){const n=Ye();return(e,t)=>{const i=n.$$.callbacks[e];if(i){const r=Zs(e,t);i.slice().forEach(s=>{s.call(n,r)})}}}function tu(n,e){Ye().$$.context.set(n,e)}function nu(n){return Ye().$$.context.get(n)}const gt=[],ye=[],Ht=[],Hn=[],Sr=Promise.resolve();let Bn=!1;function kr(){Bn||(Bn=!0,Sr.then(Ar))}function Bt(){return kr(),Sr}function qt(n){Ht.push(n)}function eo(n){Hn.push(n)}const On=new Set;let Vt=0;function Ar(){const n=yt;do{for(;Vt<gt.length;){const e=gt[Vt];Vt++,bt(e),to(e.$$)}for(bt(null),gt.length=0,Vt=0;ye.length;)ye.pop()();for(let e=0;e<Ht.length;e+=1){const t=Ht[e];On.has(t)||(On.add(t),t())}Ht.length=0}while(gt.length);for(;Hn.length;)Hn.pop()();Bn=!1,On.clear(),bt(n)}function to(n){if(n.fragment!==null){n.update(),Ee(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(qt)}}const Ft=new Set;let We;function $(){We={r:0,c:[],p:We}}function ee(){We.r||Ee(We.c),We=We.p}function R(n,e){n&&n.i&&(Ft.delete(n),n.i(e))}function N(n,e,t,i){if(n&&n.o){if(Ft.has(n))return;Ft.add(n),We.c.push(()=>{Ft.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}function no(n,e){N(n,1,1,()=>{e.delete(n.key)})}function io(n,e,t,i,r,s,o,l,a,c,h,f){let d=n.length,_=s.length,y=d;const E={};for(;y--;)E[n[y].key]=y;const H=[],J=new Map,M=new Map;for(y=_;y--;){const I=f(r,s,y),z=t(I);let C=o.get(z);C?i&&C.p(I,e):(C=c(z,I),C.c()),J.set(z,H[y]=C),z in E&&M.set(z,Math.abs(y-E[z]))}const k=new Set,m=new Set;function T(I){R(I,1),I.m(l,h),o.set(I.key,I),h=I.first,_--}for(;d&&_;){const I=H[_-1],z=n[d-1],C=I.key,D=z.key;I===z?(h=I.first,d--,_--):J.has(D)?!o.has(C)||k.has(C)?T(I):m.has(D)?d--:M.get(C)>M.get(D)?(m.add(C),T(I)):(k.add(D),d--):(a(z,o),d--)}for(;d--;){const I=n[d];J.has(I.key)||a(I,o)}for(;_;)T(H[_-1]);return H}function Jn(n,e){const t={},i={},r={$$scope:1};let s=n.length;for(;s--;){const o=n[s],l=e[s];if(l){for(const a in o)a in l||(i[a]=1);for(const a in l)r[a]||(t[a]=l[a],r[a]=1);n[s]=l}else for(const a in o)r[a]=1}for(const o in i)o in t||(t[o]=void 0);return t}function Or(n){return typeof n=="object"&&n!==null?n:{}}function ki(n,e,t){const i=n.$$.props[e];i!==void 0&&(n.$$.bound[i]=t,t(n.$$.ctx[i]))}function re(n){n&&n.c()}function Me(n,e){n&&n.l(e)}function te(n,e,t,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:l}=n.$$;r&&r.m(e,t),i||qt(()=>{const a=s.map(_r).filter(Hs);o?o.push(...a):Ee(a),n.$$.on_mount=[]}),l.forEach(qt)}function ne(n,e){const t=n.$$;t.fragment!==null&&(Ee(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function ro(n,e){n.$$.dirty[0]===-1&&(gt.push(n),kr(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ue(n,e,t,i,r,s,o,l=[-1]){const a=yt;bt(n);const c=n.$$={fragment:null,ctx:null,props:s,update:Q,not_equal:r,bound:wi(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:wi(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let h=!1;if(c.ctx=t?t(n,e.props||{},(f,d,..._)=>{const y=_.length?_[0]:d;return c.ctx&&r(c.ctx[f],c.ctx[f]=y)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](y),h&&ro(n,f)),d}):[],c.update(),h=!0,Ee(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){js();const f=F(e.target);c.fragment&&c.fragment.l(f),f.forEach(w)}else c.fragment&&c.fragment.c();e.intro&&R(n.$$.fragment),te(n,e.target,e.anchor,e.customElement),Ws(),Ar()}bt(a)}class Ve{$destroy(){ne(this,1),this.$destroy=Q}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Bs(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const tt=[];function iu(n,e=Q){let t;const i=new Set;function r(l){if(Te(n,l)&&(n=l,t)){const a=!tt.length;for(const c of i)c[1](),tt.push(c,n);if(a){for(let c=0;c<tt.length;c+=2)tt[c][0](tt[c+1]);tt.length=0}}}function s(l){r(l(n))}function o(l,a=Q){const c=[l,a];return i.add(c),i.size===1&&(t=e(r)||Q),l(n),()=>{i.delete(c),i.size===0&&(t(),t=null)}}return{set:r,update:s,subscribe:o}}const so=n=>({loading:n&1,success:n&8,error:n&2,notSupported:n&16,coords:n&4}),Ai=n=>({loading:n[0],success:n[3],error:n[1],notSupported:n[4],coords:n[2]});function oo(n){let e;const t=n[14].default,i=gr(t,n,n[13],Ai);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,[s]){i&&i.p&&(!e||s&8223)&&br(i,t,r,r[13],e?Ir(t,r[13],s,so):vr(r[13]),Ai)},i(r){e||(R(i,r),e=!0)},o(r){N(i,r),e=!1},d(r){i&&i.d(r)}}}function ao(n,e,t){let{$$slots:i={},$$scope:r}=e,{coords:s=[-1,-1]}=e,{position:o={}}=e,{options:l={}}=e,{getPosition:a=!1}=e,{watch:c=!1}=e,{loading:h=!1}=e,{success:f=!1}=e,{error:d=!1}=e,{notSupported:_=!1}=e;async function y(I){if(t(4,_=!1),t(0,h=!0),t(1,d=!1),!("geolocation"in navigator))t(4,_=!0);else return M&&await H(M),t(12,M=navigator.geolocation.watchPosition(m,T,I)),M}async function E(I){t(4,_=!1),t(0,h=!0),t(1,d=!1),"geolocation"in navigator?navigator.geolocation.getCurrentPosition(m,T,I):t(4,_=!0)}async function H(I){"geolocation"in navigator?(navigator.geolocation.clearWatch(I),I=void 0):t(4,_=!0)}const J=nn();let M,k;function m(I){t(2,s=[I.coords.longitude,I.coords.latitude]),t(5,o={coords:{accuracy:I.coords.accuracy,altitude:I.coords.altitude,altitudeAccuracy:I.coords.altitudeAccuracy,heading:I.coords.heading,latitude:I.coords.latitude,longitude:I.coords.longitude,speed:I.coords.speed},timestamp:I.timestamp}),(!k||k.coords.latitude!==I.coords.latitude||k.coords.longitude!==I.coords.longitude)&&(k=I,J("position",o)),t(0,h=!1)}function T(I){J("error",I),t(1,d=I),t(0,h=!1)}return $s(()=>{M&&H(M)}),n.$$set=I=>{"coords"in I&&t(2,s=I.coords),"position"in I&&t(5,o=I.position),"options"in I&&t(6,l=I.options),"getPosition"in I&&t(7,a=I.getPosition),"watch"in I&&t(8,c=I.watch),"loading"in I&&t(0,h=I.loading),"success"in I&&t(3,f=I.success),"error"in I&&t(1,d=I.error),"notSupported"in I&&t(4,_=I.notSupported),"$$scope"in I&&t(13,r=I.$$scope)},n.$$.update=()=>{n.$$.dirty&448&&typeof window!="undefined"&&a&&c&&y(l),n.$$.dirty&448&&typeof window!="undefined"&&a&&!c&&E(l),n.$$.dirty&131&&t(3,f=a&&!h&&!d),n.$$.dirty&4480&&(!a||!c)&&M&&H(M)},[h,d,s,f,_,o,l,a,c,y,E,H,M,r,i]}class ru extends Ve{constructor(e){super();Ue(this,e,ao,oo,Te,{coords:2,position:5,options:6,getPosition:7,watch:8,loading:0,success:3,error:1,notSupported:4,watchPosition:9,getGeolocationPosition:10,clearWatcher:11})}get watchPosition(){return this.$$.ctx[9]}get getGeolocationPosition(){return this.$$.ctx[10]}get clearWatcher(){return this.$$.ctx[11]}}function lo(n,e){const t=n.getBoundingClientRect(),i=e.getBoundingClientRect(),r={};return r.top=t.top<0,r.left=t.left<0,r.bottom=t.bottom+i.height>(window.innerHeight||document.documentElement.clientHeight),r.right=t.right>(window.innerWidth||document.documentElement.clientWidth),r.any=r.top||r.left||r.bottom||r.right,r}function co(n){let e,t=n[0](n[1],n[2])+"",i;return{c(){e=q("div"),this.h()},l(r){e=X(r,"DIV",{class:!0});var s=F(e);s.forEach(w),this.h()},h(){v(e,"class",i="item "+n[3]+" svelte-3e0qet")},m(r,s){V(r,e,s),e.innerHTML=t},p(r,[s]){s&7&&t!==(t=r[0](r[1],r[2])+"")&&(e.innerHTML=t),s&8&&i!==(i="item "+r[3]+" svelte-3e0qet")&&v(e,"class",i)},i:Q,o:Q,d(r){r&&w(e)}}}function uo(n,e,t){let{isActive:i=!1}=e,{isFirst:r=!1}=e,{isHover:s=!1}=e,{isSelectable:o=!1}=e,{getOptionLabel:l=void 0}=e,{item:a=void 0}=e,{filterText:c=""}=e,h="";return n.$$set=f=>{"isActive"in f&&t(4,i=f.isActive),"isFirst"in f&&t(5,r=f.isFirst),"isHover"in f&&t(6,s=f.isHover),"isSelectable"in f&&t(7,o=f.isSelectable),"getOptionLabel"in f&&t(0,l=f.getOptionLabel),"item"in f&&t(1,a=f.item),"filterText"in f&&t(2,c=f.filterText)},n.$$.update=()=>{if(n.$$.dirty&242){const f=[];i&&f.push("active"),r&&f.push("first"),s&&f.push("hover"),a.isGroupHeader&&f.push("groupHeader"),a.isGroupItem&&f.push("groupItem"),o||f.push("notSelectable"),t(3,h=f.join(" "))}},[l,a,c,h,i,r,s,o]}class Cr extends Ve{constructor(e){super();Ue(this,e,uo,co,Te,{isActive:4,isFirst:5,isHover:6,isSelectable:7,getOptionLabel:0,item:1,filterText:2})}}function Oi(n,e,t){const i=n.slice();return i[41]=e[t],i[42]=t,i}function fo(n){let e,t,i=n[1],r=[];for(let l=0;l<i.length;l+=1)r[l]=Li(Oi(n,i,l));const s=l=>N(r[l],1,1,()=>{r[l]=null});let o=null;return i.length||(o=Ci(n)),{c(){for(let l=0;l<r.length;l+=1)r[l].c();e=Z(),o&&o.c()},l(l){for(let a=0;a<r.length;a+=1)r[a].l(l);e=Z(),o&&o.l(l)},m(l,a){for(let c=0;c<r.length;c+=1)r[c].m(l,a);V(l,e,a),o&&o.m(l,a),t=!0},p(l,a){if(a[0]&114390){i=l[1];let c;for(c=0;c<i.length;c+=1){const h=Oi(l,i,c);r[c]?(r[c].p(h,a),R(r[c],1)):(r[c]=Li(h),r[c].c(),R(r[c],1),r[c].m(e.parentNode,e))}for($(),c=i.length;c<r.length;c+=1)s(c);ee(),!i.length&&o?o.p(l,a):i.length?o&&(o.d(1),o=null):(o=Ci(l),o.c(),o.m(e.parentNode,e))}},i(l){if(!t){for(let a=0;a<i.length;a+=1)R(r[a]);t=!0}},o(l){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)N(r[a]);t=!1},d(l){qn(r,l),l&&w(e),o&&o.d(l)}}}function ho(n){let e,t,i;var r=n[3];function s(o){return{props:{items:o[1],itemHeight:o[8],$$slots:{default:[go,({item:l,i:a})=>({41:l,42:a}),({item:l,i:a})=>[0,(l?1024:0)|(a?2048:0)]]},$$scope:{ctx:o}}}}return r&&(e=new r(s(n))),{c(){e&&re(e.$$.fragment),t=Z()},l(o){e&&Me(e.$$.fragment,o),t=Z()},m(o,l){e&&te(e,o,l),V(o,t,l),i=!0},p(o,l){const a={};if(l[0]&2&&(a.items=o[1]),l[0]&256&&(a.itemHeight=o[8]),l[0]&9814|l[1]&11264&&(a.$$scope={dirty:l,ctx:o}),r!==(r=o[3])){if(e){$();const c=e;N(c.$$.fragment,1,0,()=>{ne(c,1)}),ee()}r?(e=new r(s(o)),re(e.$$.fragment),R(e.$$.fragment,1),te(e,t.parentNode,t)):e=null}else r&&e.$set(a)},i(o){i||(e&&R(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){o&&w(t),e&&ne(e,o)}}}function Ci(n){let e,t=!n[11]&&Ri(n);return{c(){t&&t.c(),e=Z()},l(i){t&&t.l(i),e=Z()},m(i,r){t&&t.m(i,r),V(i,e,r)},p(i,r){i[11]?t&&(t.d(1),t=null):t?t.p(i,r):(t=Ri(i),t.c(),t.m(e.parentNode,e))},d(i){t&&t.d(i),i&&w(e)}}}function Ri(n){let e,t;return{c(){e=q("div"),t=Pe(n[12]),this.h()},l(i){e=X(i,"DIV",{class:!0});var r=F(e);t=ot(r,n[12]),r.forEach(w),this.h()},h(){v(e,"class","empty svelte-1uyqfml")},m(i,r){V(i,e,r),W(e,t)},p(i,r){r[0]&4096&&Gt(t,i[12])},d(i){i&&w(e)}}}function mo(n){let e,t,i,r,s,o;var l=n[4];function a(d){return{props:{item:d[41],filterText:d[13],getOptionLabel:d[6],isFirst:Fn(d[42]),isActive:Kt(d[41],d[9],d[10]),isHover:Jt(d[2],d[41],d[42],d[1]),isSelectable:Ge(d[41])}}}l&&(t=new l(a(n)));function c(){return n[29](n[42])}function h(){return n[30](n[42])}function f(...d){return n[31](n[41],n[42],...d)}return{c(){e=q("div"),t&&re(t.$$.fragment),i=oe(),this.h()},l(d){e=X(d,"DIV",{class:!0,tabindex:!0});var _=F(e);t&&Me(t.$$.fragment,_),i=ae(_),_.forEach(w),this.h()},h(){v(e,"class","listItem"),v(e,"tabindex","-1")},m(d,_){V(d,e,_),t&&te(t,e,null),W(e,i),r=!0,s||(o=[x(e,"mouseover",c),x(e,"focus",h),x(e,"click",f)],s=!0)},p(d,_){n=d;const y={};if(_[0]&2&&(y.item=n[41]),_[0]&8192&&(y.filterText=n[13]),_[0]&64&&(y.getOptionLabel=n[6]),_[0]&1538&&(y.isActive=Kt(n[41],n[9],n[10])),_[0]&6&&(y.isHover=Jt(n[2],n[41],n[42],n[1])),_[0]&2&&(y.isSelectable=Ge(n[41])),l!==(l=n[4])){if(t){$();const E=t;N(E.$$.fragment,1,0,()=>{ne(E,1)}),ee()}l?(t=new l(a(n)),re(t.$$.fragment),R(t.$$.fragment,1),te(t,e,i)):t=null}else l&&t.$set(y)},i(d){r||(t&&R(t.$$.fragment,d),r=!0)},o(d){t&&N(t.$$.fragment,d),r=!1},d(d){d&&w(e),t&&ne(t),s=!1,Ee(o)}}}function _o(n){let e,t=n[7](n[41])+"",i;return{c(){e=q("div"),i=Pe(t),this.h()},l(r){e=X(r,"DIV",{class:!0});var s=F(e);i=ot(s,t),s.forEach(w),this.h()},h(){v(e,"class","listGroupTitle svelte-1uyqfml")},m(r,s){V(r,e,s),W(e,i)},p(r,s){s[0]&130&&t!==(t=r[7](r[41])+"")&&Gt(i,t)},i:Q,o:Q,d(r){r&&w(e)}}}function Li(n){let e,t,i,r;const s=[_o,mo],o=[];function l(a,c){return a[41].isGroupHeader&&!a[41].isSelectable?0:1}return e=l(n),t=o[e]=s[e](n),{c(){t.c(),i=Z()},l(a){t.l(a),i=Z()},m(a,c){o[e].m(a,c),V(a,i,c),r=!0},p(a,c){let h=e;e=l(a),e===h?o[e].p(a,c):($(),N(o[h],1,1,()=>{o[h]=null}),ee(),t=o[e],t?t.p(a,c):(t=o[e]=s[e](a),t.c()),R(t,1),t.m(i.parentNode,i))},i(a){r||(R(t),r=!0)},o(a){N(t),r=!1},d(a){o[e].d(a),a&&w(i)}}}function go(n){let e,t,i,r,s;var o=n[4];function l(f){return{props:{item:f[41],filterText:f[13],getOptionLabel:f[6],isFirst:Fn(f[42]),isActive:Kt(f[41],f[9],f[10]),isHover:Jt(f[2],f[41],f[42],f[1]),isSelectable:Ge(f[41])}}}o&&(t=new o(l(n)));function a(){return n[26](n[42])}function c(){return n[27](n[42])}function h(...f){return n[28](n[41],n[42],...f)}return{c(){e=q("div"),t&&re(t.$$.fragment),this.h()},l(f){e=X(f,"DIV",{class:!0});var d=F(e);t&&Me(t.$$.fragment,d),d.forEach(w),this.h()},h(){v(e,"class","listItem")},m(f,d){V(f,e,d),t&&te(t,e,null),i=!0,r||(s=[x(e,"mouseover",a),x(e,"focus",c),x(e,"click",h)],r=!0)},p(f,d){n=f;const _={};if(d[1]&1024&&(_.item=n[41]),d[0]&8192&&(_.filterText=n[13]),d[0]&64&&(_.getOptionLabel=n[6]),d[1]&2048&&(_.isFirst=Fn(n[42])),d[0]&1536|d[1]&1024&&(_.isActive=Kt(n[41],n[9],n[10])),d[0]&6|d[1]&3072&&(_.isHover=Jt(n[2],n[41],n[42],n[1])),d[1]&1024&&(_.isSelectable=Ge(n[41])),o!==(o=n[4])){if(t){$();const y=t;N(y.$$.fragment,1,0,()=>{ne(y,1)}),ee()}o?(t=new o(l(n)),re(t.$$.fragment),R(t.$$.fragment,1),te(t,e,null)):t=null}else o&&t.$set(_)},i(f){i||(t&&R(t.$$.fragment,f),i=!0)},o(f){t&&N(t.$$.fragment,f),i=!1},d(f){f&&w(e),t&&ne(t),r=!1,Ee(s)}}}function po(n){let e,t,i,r,s,o;const l=[ho,fo],a=[];function c(h,f){return h[5]?0:1}return t=c(n),i=a[t]=l[t](n),{c(){e=q("div"),i.c(),this.h()},l(h){e=X(h,"DIV",{class:!0,style:!0});var f=F(e);i.l(f),f.forEach(w),this.h()},h(){v(e,"class","listContainer svelte-1uyqfml"),v(e,"style",n[14]),fe(e,"virtualList",n[5])},m(h,f){V(h,e,f),a[t].m(e,null),n[32](e),r=!0,s||(o=[x(window,"keydown",n[17]),x(window,"resize",n[18])],s=!0)},p(h,f){let d=t;t=c(h),t===d?a[t].p(h,f):($(),N(a[d],1,1,()=>{a[d]=null}),ee(),i=a[t],i?i.p(h,f):(i=a[t]=l[t](h),i.c()),R(i,1),i.m(e,null)),(!r||f[0]&16384)&&v(e,"style",h[14]),f[0]&32&&fe(e,"virtualList",h[5])},i(h){r||(R(i),r=!0)},o(h){N(i),r=!1},d(h){h&&w(e),a[t].d(),n[32](null),s=!1,Ee(o)}}}function Kt(n,e,t){return e&&e[t]===n[t]}function Fn(n){return n===0}function Jt(n,e,t,i){return Ge(e)&&(n===t||i.length===1)}function Ge(n){return n.isGroupHeader&&n.isSelectable||n.selectable||!n.hasOwnProperty("selectable")}function Io(n,e,t){const i=nn();let{container:r=void 0}=e,{VirtualList:s=null}=e,{Item:o=Cr}=e,{isVirtualList:l=!1}=e,{items:a=[]}=e,{labelIdentifier:c="label"}=e,{getOptionLabel:h=(p,P)=>{if(p)return p.isCreator?`Create "${P}"`:p[c]}}=e,{getGroupHeaderLabel:f=null}=e,{itemHeight:d=40}=e,{hoverItemIndex:_=0}=e,{value:y=void 0}=e,{optionIdentifier:E="value"}=e,{hideEmptyState:H=!1}=e,{noOptionsMessage:J="No options"}=e,{isMulti:M=!1}=e,{activeItemIndex:k=0}=e,{filterText:m=""}=e,{parent:T=null}=e,{listPlacement:I=null}=e,{listAutoWidth:z=null}=e,{listOffset:C=5}=e,D=0,S=!1,j;Kn(()=>{if(a.length>0&&!M&&y){const p=a.findIndex(P=>P[E]===y[E]);p&&t(2,_=p)}ce("active"),r.addEventListener("scroll",()=>{clearTimeout(D),D=setTimeout(()=>{S=!1},100)},!1)}),Tr(()=>{a||t(1,a=[]),a!==j&&a.length>0&&t(2,_=0),j=a});function L(p){p.isCreator||i("itemSelected",p)}function U(p){S||t(2,_=p)}function B(p){const{item:P,i:le,event:_t}=p;if(_t.stopPropagation(),y&&!M&&y[E]===P[E])return g();P.isCreator?i("itemCreated",m):Ge(P)&&(t(19,k=le),t(2,_=le),L(P))}function g(){i("closeList")}async function b(p){if(l)return;let P=!0;for(;P;)p>0&&_===a.length-1?t(2,_=0):p<0&&_===0?t(2,_=a.length-1):t(2,_=_+p),P=!Ge(a[_]);await Bt(),ce("hover")}function ie(p){switch(p.key){case"Escape":p.preventDefault(),g();break;case"ArrowDown":p.preventDefault(),a.length&&b(1);break;case"ArrowUp":p.preventDefault(),a.length&&b(-1);break;case"Enter":if(p.preventDefault(),a.length===0)break;const P=a[_];if(y&&!M&&y[E]===P[E]){g();break}P.isCreator?i("itemCreated",m):(t(19,k=_),L(a[_]));break;case"Tab":if(p.preventDefault(),a.length===0||y&&y[E]===a[_][E])return g();t(19,k=_),L(a[_]);break}}function ce(p){if(l||!r)return;let P;const le=r.querySelector(`.listItem .${p}`);le&&(P=r.getBoundingClientRect().bottom-le.getBoundingClientRect().bottom),t(0,r.scrollTop-=P,r)}let Se;function ke(){const{height:p,width:P}=T.getBoundingClientRect();t(14,Se=""),t(14,Se+=`min-width:${P}px;width:${z?"auto":"100%"};`),I==="top"||I==="auto"&&lo(T,r).bottom?t(14,Se+=`bottom:${p+C}px;`):t(14,Se+=`top:${p+C}px;`)}const ht=p=>U(p),He=p=>U(p),dn=(p,P,le)=>B({item:p,i:P,event:le}),Ze=p=>U(p),Dt=p=>U(p),mt=(p,P,le)=>B({item:p,i:P,event:le});function Be(p){ye[p?"unshift":"push"](()=>{r=p,t(0,r)})}return n.$$set=p=>{"container"in p&&t(0,r=p.container),"VirtualList"in p&&t(3,s=p.VirtualList),"Item"in p&&t(4,o=p.Item),"isVirtualList"in p&&t(5,l=p.isVirtualList),"items"in p&&t(1,a=p.items),"labelIdentifier"in p&&t(20,c=p.labelIdentifier),"getOptionLabel"in p&&t(6,h=p.getOptionLabel),"getGroupHeaderLabel"in p&&t(7,f=p.getGroupHeaderLabel),"itemHeight"in p&&t(8,d=p.itemHeight),"hoverItemIndex"in p&&t(2,_=p.hoverItemIndex),"value"in p&&t(9,y=p.value),"optionIdentifier"in p&&t(10,E=p.optionIdentifier),"hideEmptyState"in p&&t(11,H=p.hideEmptyState),"noOptionsMessage"in p&&t(12,J=p.noOptionsMessage),"isMulti"in p&&t(21,M=p.isMulti),"activeItemIndex"in p&&t(19,k=p.activeItemIndex),"filterText"in p&&t(13,m=p.filterText),"parent"in p&&t(22,T=p.parent),"listPlacement"in p&&t(23,I=p.listPlacement),"listAutoWidth"in p&&t(24,z=p.listAutoWidth),"listOffset"in p&&t(25,C=p.listOffset)},n.$$.update=()=>{n.$$.dirty[0]&4194305&&T&&r&&ke()},[r,a,_,s,o,l,h,f,d,y,E,H,J,m,Se,U,B,ie,ke,k,c,M,T,I,z,C,ht,He,dn,Ze,Dt,mt,Be]}class bo extends Ve{constructor(e){super();Ue(this,e,Io,po,Te,{container:0,VirtualList:3,Item:4,isVirtualList:5,items:1,labelIdentifier:20,getOptionLabel:6,getGroupHeaderLabel:7,itemHeight:8,hoverItemIndex:2,value:9,optionIdentifier:10,hideEmptyState:11,noOptionsMessage:12,isMulti:21,activeItemIndex:19,filterText:13,parent:22,listPlacement:23,listAutoWidth:24,listOffset:25},null,[-1,-1])}}function vo(n){let e,t=n[0](n[1])+"";return{c(){e=q("div"),this.h()},l(i){e=X(i,"DIV",{class:!0});var r=F(e);r.forEach(w),this.h()},h(){v(e,"class","selection svelte-pu1q1n")},m(i,r){V(i,e,r),e.innerHTML=t},p(i,[r]){r&3&&t!==(t=i[0](i[1])+"")&&(e.innerHTML=t)},i:Q,o:Q,d(i){i&&w(e)}}}function yo(n,e,t){let{getSelectionLabel:i=void 0}=e,{item:r=void 0}=e;return n.$$set=s=>{"getSelectionLabel"in s&&t(0,i=s.getSelectionLabel),"item"in s&&t(1,r=s.item)},[i,r]}class wo extends Ve{constructor(e){super();Ue(this,e,yo,vo,Te,{getSelectionLabel:0,item:1})}}function Pi(n,e,t){const i=n.slice();return i[9]=e[t],i[11]=t,i}function Di(n){let e,t,i,r,s;function o(...l){return n[6](n[11],...l)}return{c(){e=q("div"),t=ve("svg"),i=ve("path"),this.h()},l(l){e=X(l,"DIV",{class:!0});var a=F(e);t=De(a,"svg",{width:!0,height:!0,viewBox:!0,focusable:!0,"aria-hidden":!0,role:!0,class:!0});var c=F(t);i=De(c,"path",{d:!0}),F(i).forEach(w),c.forEach(w),a.forEach(w),this.h()},h(){v(i,"d","M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"),v(t,"width","100%"),v(t,"height","100%"),v(t,"viewBox","-2 -2 50 50"),v(t,"focusable","false"),v(t,"aria-hidden","true"),v(t,"role","presentation"),v(t,"class","svelte-liu9pa"),v(e,"class","multiSelectItem_clear svelte-liu9pa")},m(l,a){V(l,e,a),W(e,t),W(t,i),r||(s=x(e,"click",o),r=!0)},p(l,a){n=l},d(l){l&&w(e),r=!1,s()}}}function Ni(n){let e,t,i=n[4](n[9])+"",r,s,o,l,a,c=!n[2]&&!n[3]&&Di(n);function h(...f){return n[7](n[11],...f)}return{c(){e=q("div"),t=q("div"),r=oe(),c&&c.c(),s=oe(),this.h()},l(f){e=X(f,"DIV",{class:!0});var d=F(e);t=X(d,"DIV",{class:!0});var _=F(t);_.forEach(w),r=ae(d),c&&c.l(d),s=ae(d),d.forEach(w),this.h()},h(){v(t,"class","multiSelectItem_label svelte-liu9pa"),v(e,"class",o="multiSelectItem "+(n[1]===n[11]?"active":"")+" "+(n[2]?"disabled":"")+" svelte-liu9pa")},m(f,d){V(f,e,d),W(e,t),t.innerHTML=i,W(e,r),c&&c.m(e,null),W(e,s),l||(a=x(e,"click",h),l=!0)},p(f,d){n=f,d&17&&i!==(i=n[4](n[9])+"")&&(t.innerHTML=i),!n[2]&&!n[3]?c?c.p(n,d):(c=Di(n),c.c(),c.m(e,s)):c&&(c.d(1),c=null),d&6&&o!==(o="multiSelectItem "+(n[1]===n[11]?"active":"")+" "+(n[2]?"disabled":"")+" svelte-liu9pa")&&v(e,"class",o)},d(f){f&&w(e),c&&c.d(),l=!1,a()}}}function Eo(n){let e,t=n[0],i=[];for(let r=0;r<t.length;r+=1)i[r]=Ni(Pi(n,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=Z()},l(r){for(let s=0;s<i.length;s+=1)i[s].l(r);e=Z()},m(r,s){for(let o=0;o<i.length;o+=1)i[o].m(r,s);V(r,e,s)},p(r,[s]){if(s&63){t=r[0];let o;for(o=0;o<t.length;o+=1){const l=Pi(r,t,o);i[o]?i[o].p(l,s):(i[o]=Ni(l),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},i:Q,o:Q,d(r){qn(i,r),r&&w(e)}}}function To(n,e,t){const i=nn();let{value:r=[]}=e,{activeValue:s=void 0}=e,{isDisabled:o=!1}=e,{multiFullItemClearable:l=!1}=e,{getSelectionLabel:a=void 0}=e;function c(d,_){_.stopPropagation(),i("multiItemClear",{i:d})}const h=(d,_)=>c(d,_),f=(d,_)=>l?c(d,_):{};return n.$$set=d=>{"value"in d&&t(0,r=d.value),"activeValue"in d&&t(1,s=d.activeValue),"isDisabled"in d&&t(2,o=d.isDisabled),"multiFullItemClearable"in d&&t(3,l=d.multiFullItemClearable),"getSelectionLabel"in d&&t(4,a=d.getSelectionLabel)},[r,s,o,l,a,c,h,f]}class So extends Ve{constructor(e){super();Ue(this,e,To,Eo,Te,{value:0,activeValue:1,isDisabled:2,multiFullItemClearable:3,getSelectionLabel:4})}}function Mi(n,e,t){const i=n.slice();return i[23]=e[t],i}const ko=n=>({item:n&32,i:n&32,hoverItemIndex:n&2}),Ui=n=>({item:n[23].data,i:n[23].index,hoverItemIndex:n[1]});function Ao(n){let e;return{c(){e=Pe("Missing template")},l(t){e=ot(t,"Missing template")},m(t,i){V(t,e,i)},d(t){t&&w(e)}}}function Vi(n,e){let t,i,r;const s=e[15].default,o=gr(s,e,e[14],Ui),l=o||Ao();return{key:n,first:null,c(){t=q("svelte-virtual-list-row"),l&&l.c(),i=oe(),this.h()},l(a){t=X(a,"SVELTE-VIRTUAL-LIST-ROW",{class:!0});var c=F(t);l&&l.l(c),i=ae(c),c.forEach(w),this.h()},h(){Un(t,"class","svelte-g2cagw"),this.first=t},m(a,c){V(a,t,c),l&&l.m(t,null),W(t,i),r=!0},p(a,c){e=a,o&&o.p&&(!r||c&16418)&&br(o,s,e,e[14],r?Ir(s,e[14],c,ko):vr(e[14]),Ui)},i(a){r||(R(l,a),r=!0)},o(a){N(l,a),r=!1},d(a){a&&w(t),l&&l.d(a)}}}function Oo(n){let e,t,i=[],r=new Map,s,o,l,a,c=n[5];const h=f=>f[23].index;for(let f=0;f<c.length;f+=1){let d=Mi(n,c,f),_=h(d);r.set(_,i[f]=Vi(_,d))}return{c(){e=q("svelte-virtual-list-viewport"),t=q("svelte-virtual-list-contents");for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=X(f,"SVELTE-VIRTUAL-LIST-VIEWPORT",{style:!0,class:!0});var d=F(e);t=X(d,"SVELTE-VIRTUAL-LIST-CONTENTS",{style:!0,class:!0});var _=F(t);for(let y=0;y<i.length;y+=1)i[y].l(_);_.forEach(w),d.forEach(w),this.h()},h(){et(t,"padding-top",n[6]+"px"),et(t,"padding-bottom",n[7]+"px"),Un(t,"class","svelte-g2cagw"),et(e,"height",n[0]),Un(e,"class","svelte-g2cagw"),qt(()=>n[18].call(e))},m(f,d){V(f,e,d),W(e,t);for(let _=0;_<i.length;_+=1)i[_].m(t,null);n[16](t),n[17](e),s=xs(e,n[18].bind(e)),o=!0,l||(a=x(e,"scroll",n[8]),l=!0)},p(f,[d]){d&16418&&(c=f[5],$(),i=io(i,d,h,1,f,c,r,t,no,Vi,null,Mi),ee()),(!o||d&64)&&et(t,"padding-top",f[6]+"px"),(!o||d&128)&&et(t,"padding-bottom",f[7]+"px"),(!o||d&1)&&et(e,"height",f[0])},i(f){if(!o){for(let d=0;d<c.length;d+=1)R(i[d]);o=!0}},o(f){for(let d=0;d<i.length;d+=1)N(i[d]);o=!1},d(f){f&&w(e);for(let d=0;d<i.length;d+=1)i[d].d();n[16](null),n[17](null),s(),l=!1,a()}}}function Co(n,e,t){let{$$slots:i={},$$scope:r}=e,{items:s=void 0}=e,{height:o="100%"}=e,{itemHeight:l=40}=e,{hoverItemIndex:a=0}=e,{start:c=0}=e,{end:h=0}=e,f=[],d,_,y,E=0,H,J,M=0,k=0,m;async function T(S,j,L){const{scrollTop:U}=_;await Bt();let B=M-U,g=c;for(;B<j&&g<S.length;){let ie=d[g-c];ie||(t(10,h=g+1),await Bt(),ie=d[g-c]),B+=f[g]=L||ie.offsetHeight,g+=1}t(10,h=g);const b=S.length-h;m=(M+B)/h,t(7,k=b*m),f.length=S.length,_&&t(3,_.scrollTop=0,_)}async function I(){const{scrollTop:S}=_,j=c;for(let g=0;g<d.length;g+=1)f[c+g]=l||d[g].offsetHeight;let L=0,U=0;for(;L<s.length;){const g=f[L]||m;if(U+g>S){t(9,c=L),t(6,M=U);break}U+=g,L+=1}for(;L<s.length&&(U+=f[L]||m,L+=1,!(U>S+E)););t(10,h=L);const B=s.length-h;for(m=U/h;L<s.length;)f[L++]=m;if(t(7,k=B*m),c<j){await Bt();let g=0,b=0;for(let ce=c;ce<j;ce+=1)d[ce-c]&&(g+=f[ce],b+=l||d[ce-c].offsetHeight);const ie=b-g;_.scrollTo(0,S+ie)}}Kn(()=>{d=y.getElementsByTagName("svelte-virtual-list-row"),t(13,J=!0)});function z(S){ye[S?"unshift":"push"](()=>{y=S,t(4,y)})}function C(S){ye[S?"unshift":"push"](()=>{_=S,t(3,_)})}function D(){E=this.offsetHeight,t(2,E)}return n.$$set=S=>{"items"in S&&t(11,s=S.items),"height"in S&&t(0,o=S.height),"itemHeight"in S&&t(12,l=S.itemHeight),"hoverItemIndex"in S&&t(1,a=S.hoverItemIndex),"start"in S&&t(9,c=S.start),"end"in S&&t(10,h=S.end),"$$scope"in S&&t(14,r=S.$$scope)},n.$$.update=()=>{n.$$.dirty&3584&&t(5,H=s.slice(c,h).map((S,j)=>({index:j+c,data:S}))),n.$$.dirty&14340&&J&&T(s,E,l)},[o,a,E,_,y,H,M,k,I,c,h,s,l,J,r,i,z,C,D]}class Ro extends Ve{constructor(e){super();Ue(this,e,Co,Oo,Te,{items:11,height:0,itemHeight:12,hoverItemIndex:1,start:9,end:10})}}function Lo(n){let e,t;return{c(){e=ve("svg"),t=ve("path"),this.h()},l(i){e=De(i,"svg",{width:!0,height:!0,viewBox:!0,focusable:!0,"aria-hidden":!0,role:!0});var r=F(e);t=De(r,"path",{fill:!0,d:!0}),F(t).forEach(w),r.forEach(w),this.h()},h(){v(t,"fill","currentColor"),v(t,"d",`M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z`),v(e,"width","100%"),v(e,"height","100%"),v(e,"viewBox","-2 -2 50 50"),v(e,"focusable","false"),v(e,"aria-hidden","true"),v(e,"role","presentation")},m(i,r){V(i,e,r),W(e,t)},p:Q,i:Q,o:Q,d(i){i&&w(e)}}}class Po extends Ve{constructor(e){super();Ue(this,e,null,Lo,Te,{})}}function Do(n,e,t){let i;return function(){let s=this,o=arguments,l=function(){i=null,t||n.apply(s,o)},a=t&&!i;clearTimeout(i),i=setTimeout(l,e),a&&n.apply(s,o)}}function Hi(n,e,t){const i=n.slice();return i[103]=e[t],i}function Bi(n){let e,t,i,r,s;return{c(){e=q("span"),t=Pe(n[33]),i=oe(),r=q("span"),s=Pe(n[32]),this.h()},l(o){e=X(o,"SPAN",{id:!0});var l=F(e);t=ot(l,n[33]),l.forEach(w),i=ae(o),r=X(o,"SPAN",{id:!0});var a=F(r);s=ot(a,n[32]),a.forEach(w),this.h()},h(){v(e,"id","aria-selection"),v(r,"id","aria-context")},m(o,l){V(o,e,l),W(e,t),V(o,i,l),V(o,r,l),W(r,s)},p(o,l){l[1]&4&&Gt(t,o[33]),l[1]&2&&Gt(s,o[32])},d(o){o&&w(e),o&&w(i),o&&w(r)}}}function Fi(n){let e,t,i;const r=[n[18]];var s=n[17];function o(l){let a={};for(let c=0;c<r.length;c+=1)a=en(a,r[c]);return{props:a}}return s&&(e=new s(o())),{c(){e&&re(e.$$.fragment),t=Z()},l(l){e&&Me(e.$$.fragment,l),t=Z()},m(l,a){e&&te(e,l,a),V(l,t,a),i=!0},p(l,a){const c=a[0]&262144?Jn(r,[Or(l[18])]):{};if(s!==(s=l[17])){if(e){$();const h=e;N(h.$$.fragment,1,0,()=>{ne(h,1)}),ee()}s?(e=new s(o()),re(e.$$.fragment),R(e.$$.fragment,1),te(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(l){i||(e&&R(e.$$.fragment,l),i=!0)},o(l){e&&N(e.$$.fragment,l),i=!1},d(l){l&&w(t),e&&ne(e,l)}}}function ji(n){let e,t,i;var r=n[26];function s(o){return{props:{value:o[2],getSelectionLabel:o[12],activeValue:o[30],isDisabled:o[9],multiFullItemClearable:o[8]}}}return r&&(e=new r(s(n)),e.$on("multiItemClear",n[38]),e.$on("focus",n[40])),{c(){e&&re(e.$$.fragment),t=Z()},l(o){e&&Me(e.$$.fragment,o),t=Z()},m(o,l){e&&te(e,o,l),V(o,t,l),i=!0},p(o,l){const a={};if(l[0]&4&&(a.value=o[2]),l[0]&4096&&(a.getSelectionLabel=o[12]),l[0]&1073741824&&(a.activeValue=o[30]),l[0]&512&&(a.isDisabled=o[9]),l[0]&256&&(a.multiFullItemClearable=o[8]),r!==(r=o[26])){if(e){$();const c=e;N(c.$$.fragment,1,0,()=>{ne(c,1)}),ee()}r?(e=new r(s(o)),e.$on("multiItemClear",o[38]),e.$on("focus",o[40]),re(e.$$.fragment),R(e.$$.fragment,1),te(e,t.parentNode,t)):e=null}else r&&e.$set(a)},i(o){i||(e&&R(e.$$.fragment,o),i=!0)},o(o){e&&N(e.$$.fragment,o),i=!1},d(o){o&&w(t),e&&ne(e,o)}}}function Wi(n){let e,t,i,r,s;var o=n[25];function l(a){return{props:{item:a[2],getSelectionLabel:a[12]}}}return o&&(t=new o(l(n))),{c(){e=q("div"),t&&re(t.$$.fragment),this.h()},l(a){e=X(a,"DIV",{class:!0});var c=F(e);t&&Me(t.$$.fragment,c),c.forEach(w),this.h()},h(){v(e,"class","selectedItem svelte-17l1npl")},m(a,c){V(a,e,c),t&&te(t,e,null),i=!0,r||(s=x(e,"focus",n[40]),r=!0)},p(a,c){const h={};if(c[0]&4&&(h.item=a[2]),c[0]&4096&&(h.getSelectionLabel=a[12]),o!==(o=a[25])){if(t){$();const f=t;N(f.$$.fragment,1,0,()=>{ne(f,1)}),ee()}o?(t=new o(l(a)),re(t.$$.fragment),R(t.$$.fragment,1),te(t,e,null)):t=null}else o&&t.$set(h)},i(a){i||(t&&R(t.$$.fragment,a),i=!0)},o(a){t&&N(t.$$.fragment,a),i=!1},d(a){a&&w(e),t&&ne(t),r=!1,s()}}}function zi(n){let e,t,i,r,s;var o=n[23];function l(a){return{}}return o&&(t=new o(l())),{c(){e=q("div"),t&&re(t.$$.fragment),this.h()},l(a){e=X(a,"DIV",{class:!0,"aria-hidden":!0});var c=F(e);t&&Me(t.$$.fragment,c),c.forEach(w),this.h()},h(){v(e,"class","clearSelect svelte-17l1npl"),v(e,"aria-hidden","true")},m(a,c){V(a,e,c),t&&te(t,e,null),i=!0,r||(s=x(e,"click",Js(n[27])),r=!0)},p(a,c){if(o!==(o=a[23])){if(t){$();const h=t;N(h.$$.fragment,1,0,()=>{ne(h,1)}),ee()}o?(t=new o(l()),re(t.$$.fragment),R(t.$$.fragment,1),te(t,e,null)):t=null}},i(a){i||(t&&R(t.$$.fragment,a),i=!0)},o(a){t&&N(t.$$.fragment,a),i=!1},d(a){a&&w(e),t&&ne(t),r=!1,s()}}}function Gi(n){let e;function t(s,o){return s[22]?Mo:No}let i=t(n),r=i(n);return{c(){e=q("div"),r.c(),this.h()},l(s){e=X(s,"DIV",{class:!0,"aria-hidden":!0});var o=F(e);r.l(o),o.forEach(w),this.h()},h(){v(e,"class","indicator svelte-17l1npl"),v(e,"aria-hidden","true")},m(s,o){V(s,e,o),r.m(e,null)},p(s,o){i===(i=t(s))&&r?r.p(s,o):(r.d(1),r=i(s),r&&(r.c(),r.m(e,null)))},d(s){s&&w(e),r.d()}}}function No(n){let e,t;return{c(){e=ve("svg"),t=ve("path"),this.h()},l(i){e=De(i,"svg",{width:!0,height:!0,viewBox:!0,focusable:!0,"aria-hidden":!0,class:!0});var r=F(e);t=De(r,"path",{d:!0}),F(t).forEach(w),r.forEach(w),this.h()},h(){v(t,"d",`M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z`),v(e,"width","100%"),v(e,"height","100%"),v(e,"viewBox","0 0 20 20"),v(e,"focusable","false"),v(e,"aria-hidden","true"),v(e,"class","svelte-17l1npl")},m(i,r){V(i,e,r),W(e,t)},p:Q,d(i){i&&w(e)}}}function Mo(n){let e,t;return{c(){e=new Vn,t=Z(),this.h()},l(i){e=Ys(i),t=Z(),this.h()},h(){e.a=t},m(i,r){e.m(n[22],i,r),V(i,t,r)},p(i,r){r[0]&4194304&&e.p(i[22])},d(i){i&&w(t),i&&e.d()}}}function qi(n){let e,t,i;return{c(){e=q("div"),t=ve("svg"),i=ve("circle"),this.h()},l(r){e=X(r,"DIV",{class:!0});var s=F(e);t=De(s,"svg",{class:!0,viewBox:!0});var o=F(t);i=De(o,"circle",{class:!0,cx:!0,cy:!0,r:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-miterlimit":!0}),F(i).forEach(w),o.forEach(w),s.forEach(w),this.h()},h(){v(i,"class","spinner_path svelte-17l1npl"),v(i,"cx","50"),v(i,"cy","50"),v(i,"r","20"),v(i,"fill","none"),v(i,"stroke","currentColor"),v(i,"stroke-width","5"),v(i,"stroke-miterlimit","10"),v(t,"class","spinner_icon svelte-17l1npl"),v(t,"viewBox","25 25 50 50"),v(e,"class","spinner svelte-17l1npl")},m(r,s){V(r,e,s),W(e,t),W(t,i)},d(r){r&&w(e)}}}function Ki(n){let e,t,i,r;const s=[n[34]];function o(c){n[84](c)}var l=n[24];function a(c){let h={};for(let f=0;f<s.length;f+=1)h=en(h,s[f]);return c[28]!==void 0&&(h.hoverItemIndex=c[28]),{props:h}}return l&&(e=new l(a(n)),ye.push(()=>ki(e,"hoverItemIndex",o)),e.$on("itemSelected",n[43]),e.$on("itemCreated",n[44]),e.$on("closeList",n[45])),{c(){e&&re(e.$$.fragment),i=Z()},l(c){e&&Me(e.$$.fragment,c),i=Z()},m(c,h){e&&te(e,c,h),V(c,i,h),r=!0},p(c,h){const f=h[1]&8?Jn(s,[Or(c[34])]):{};if(!t&&h[0]&268435456&&(t=!0,f.hoverItemIndex=c[28],eo(()=>t=!1)),l!==(l=c[24])){if(e){$();const d=e;N(d.$$.fragment,1,0,()=>{ne(d,1)}),ee()}l?(e=new l(a(c)),ye.push(()=>ki(e,"hoverItemIndex",o)),e.$on("itemSelected",c[43]),e.$on("itemCreated",c[44]),e.$on("closeList",c[45]),re(e.$$.fragment),R(e.$$.fragment,1),te(e,i.parentNode,i)):e=null}else l&&e.$set(f)},i(c){r||(e&&R(e.$$.fragment,c),r=!0)},o(c){e&&N(e.$$.fragment,c),r=!1},d(c){c&&w(i),e&&ne(e,c)}}}function Ji(n){let e,t,i;return{c(){e=q("input"),this.h()},l(r){e=X(r,"INPUT",{name:!0,type:!0,class:!0}),this.h()},h(){v(e,"name",t=n[16].name),v(e,"type","hidden"),e.value=i=n[2]?n[12](n[2]):null,v(e,"class","svelte-17l1npl")},m(r,s){V(r,e,s)},p(r,s){s[0]&65536&&t!==(t=r[16].name)&&v(e,"name",t),s[0]&4100&&i!==(i=r[2]?r[12](r[2]):null)&&(e.value=i)},d(r){r&&w(e)}}}function Yi(n){let e,t=n[2],i=[];for(let r=0;r<t.length;r+=1)i[r]=Xi(Hi(n,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=Z()},l(r){for(let s=0;s<i.length;s+=1)i[s].l(r);e=Z()},m(r,s){for(let o=0;o<i.length;o+=1)i[o].m(r,s);V(r,e,s)},p(r,s){if(s[0]&69636){t=r[2];let o;for(o=0;o<t.length;o+=1){const l=Hi(r,t,o);i[o]?i[o].p(l,s):(i[o]=Xi(l),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(r){qn(i,r),r&&w(e)}}}function Xi(n){let e,t,i;return{c(){e=q("input"),this.h()},l(r){e=X(r,"INPUT",{name:!0,type:!0,class:!0}),this.h()},h(){v(e,"name",t=n[16].name),v(e,"type","hidden"),e.value=i=n[103]?n[12](n[103]):null,v(e,"class","svelte-17l1npl")},m(r,s){V(r,e,s)},p(r,s){s[0]&65536&&t!==(t=r[16].name)&&v(e,"name",t),s[0]&4100&&i!==(i=r[103]?r[12](r[103]):null)&&(e.value=i)},d(r){r&&w(e)}}}function Uo(n){let e,t,i,r,s,o,l,a,c,h,f,d,_,y,E,H,J,M,k=n[1]&&Bi(n),m=n[17]&&Fi(n),T=n[35]&&ji(n),I=[{readOnly:l=!n[13]},n[31],{placeholder:n[36]},{style:n[14]},{disabled:n[9]}],z={};for(let g=0;g<I.length;g+=1)z=en(z,I[g]);let C=!n[7]&&n[29]&&Wi(n),D=n[37]&&zi(n),S=!n[37]&&(n[20]||n[19]&&!n[2]||!n[13]&&!n[9]&&!n[4]&&(n[29]&&!n[15]||!n[29]))&&Gi(n),j=n[4]&&qi(),L=n[5]&&Ki(n),U=(!n[7]||n[7]&&!n[35])&&Ji(n),B=n[7]&&n[35]&&Yi(n);return{c(){e=q("div"),t=q("span"),k&&k.c(),i=oe(),m&&m.c(),r=oe(),T&&T.c(),s=oe(),o=q("input"),a=oe(),C&&C.c(),c=oe(),D&&D.c(),h=oe(),S&&S.c(),f=oe(),j&&j.c(),d=oe(),L&&L.c(),_=oe(),U&&U.c(),y=oe(),B&&B.c(),this.h()},l(g){e=X(g,"DIV",{class:!0,style:!0});var b=F(e);t=X(b,"SPAN",{"aria-live":!0,"aria-atomic":!0,"aria-relevant":!0,class:!0});var ie=F(t);k&&k.l(ie),ie.forEach(w),i=ae(b),m&&m.l(b),r=ae(b),T&&T.l(b),s=ae(b),o=X(b,"INPUT",{placeholder:!0,style:!0}),a=ae(b),C&&C.l(b),c=ae(b),D&&D.l(b),h=ae(b),S&&S.l(b),f=ae(b),j&&j.l(b),d=ae(b),L&&L.l(b),_=ae(b),U&&U.l(b),y=ae(b),B&&B.l(b),b.forEach(w),this.h()},h(){v(t,"aria-live","polite"),v(t,"aria-atomic","false"),v(t,"aria-relevant","additions text"),v(t,"class","a11yText svelte-17l1npl"),Ei(o,z),fe(o,"svelte-17l1npl",!0),v(e,"class",E="selectContainer "+n[21]+" svelte-17l1npl"),v(e,"style",n[11]),fe(e,"hasError",n[10]),fe(e,"multiSelect",n[7]),fe(e,"disabled",n[9]),fe(e,"focused",n[1])},m(g,b){V(g,e,b),W(e,t),k&&k.m(t,null),W(e,i),m&&m.m(e,null),W(e,r),T&&T.m(e,null),W(e,s),W(e,o),o.autofocus&&o.focus(),n[82](o),Si(o,n[3]),W(e,a),C&&C.m(e,null),W(e,c),D&&D.m(e,null),W(e,h),S&&S.m(e,null),W(e,f),j&&j.m(e,null),W(e,d),L&&L.m(e,null),W(e,_),U&&U.m(e,null),W(e,y),B&&B.m(e,null),n[85](e),H=!0,J||(M=[x(window,"click",n[41]),x(window,"focusin",n[41]),x(window,"keydown",n[39]),x(o,"focus",n[40]),x(o,"input",n[83]),x(e,"click",n[42])],J=!0)},p(g,b){g[1]?k?k.p(g,b):(k=Bi(g),k.c(),k.m(t,null)):k&&(k.d(1),k=null),g[17]?m?(m.p(g,b),b[0]&131072&&R(m,1)):(m=Fi(g),m.c(),R(m,1),m.m(e,r)):m&&($(),N(m,1,1,()=>{m=null}),ee()),g[35]?T?(T.p(g,b),b[1]&16&&R(T,1)):(T=ji(g),T.c(),R(T,1),T.m(e,s)):T&&($(),N(T,1,1,()=>{T=null}),ee()),Ei(o,z=Jn(I,[(!H||b[0]&8192&&l!==(l=!g[13]))&&{readOnly:l},b[1]&1&&g[31],(!H||b[1]&32)&&{placeholder:g[36]},(!H||b[0]&16384)&&{style:g[14]},(!H||b[0]&512)&&{disabled:g[9]}])),b[0]&8&&o.value!==g[3]&&Si(o,g[3]),fe(o,"svelte-17l1npl",!0),!g[7]&&g[29]?C?(C.p(g,b),b[0]&536871040&&R(C,1)):(C=Wi(g),C.c(),R(C,1),C.m(e,c)):C&&($(),N(C,1,1,()=>{C=null}),ee()),g[37]?D?(D.p(g,b),b[1]&64&&R(D,1)):(D=zi(g),D.c(),R(D,1),D.m(e,h)):D&&($(),N(D,1,1,()=>{D=null}),ee()),!g[37]&&(g[20]||g[19]&&!g[2]||!g[13]&&!g[9]&&!g[4]&&(g[29]&&!g[15]||!g[29]))?S?S.p(g,b):(S=Gi(g),S.c(),S.m(e,f)):S&&(S.d(1),S=null),g[4]?j||(j=qi(),j.c(),j.m(e,d)):j&&(j.d(1),j=null),g[5]?L?(L.p(g,b),b[0]&32&&R(L,1)):(L=Ki(g),L.c(),R(L,1),L.m(e,_)):L&&($(),N(L,1,1,()=>{L=null}),ee()),!g[7]||g[7]&&!g[35]?U?U.p(g,b):(U=Ji(g),U.c(),U.m(e,y)):U&&(U.d(1),U=null),g[7]&&g[35]?B?B.p(g,b):(B=Yi(g),B.c(),B.m(e,null)):B&&(B.d(1),B=null),(!H||b[0]&2097152&&E!==(E="selectContainer "+g[21]+" svelte-17l1npl"))&&v(e,"class",E),(!H||b[0]&2048)&&v(e,"style",g[11]),b[0]&2098176&&fe(e,"hasError",g[10]),b[0]&2097280&&fe(e,"multiSelect",g[7]),b[0]&2097664&&fe(e,"disabled",g[9]),b[0]&2097154&&fe(e,"focused",g[1])},i(g){H||(R(m),R(T),R(C),R(D),R(L),H=!0)},o(g){N(m),N(T),N(C),N(D),N(L),H=!1},d(g){g&&w(e),k&&k.d(),m&&m.d(),T&&T.d(),n[82](null),C&&C.d(),D&&D.d(),S&&S.d(),j&&j.d(),L&&L.d(),U&&U.d(),B&&B.d(),n[85](null),J=!1,Ee(M)}}}function xi(n){return n.map((e,t)=>({index:t,value:e,label:`${e}`}))}function Vo(n,e,t){let i,r,s,o,l,a,c,h;const f=nn();let{id:d=null}=e,{container:_=void 0}=e,{input:y=void 0}=e,{isMulti:E=!1}=e,{multiFullItemClearable:H=!1}=e,{isDisabled:J=!1}=e,{isCreatable:M=!1}=e,{isFocused:k=!1}=e,{value:m=null}=e,{filterText:T=""}=e,{placeholder:I="Select..."}=e,{placeholderAlwaysShow:z=!1}=e,{items:C=null}=e,{itemFilter:D=(u,A,G)=>`${u}`.toLowerCase().includes(A.toLowerCase())}=e,{groupBy:S=void 0}=e,{groupFilter:j=u=>u}=e,{isGroupHeaderSelectable:L=!1}=e,{getGroupHeaderLabel:U=u=>u[B]||u.id}=e,{labelIdentifier:B="label"}=e,{getOptionLabel:g=(u,A)=>u.isCreator?`Create "${A}"`:u[B]}=e,{optionIdentifier:b="value"}=e,{loadOptions:ie=void 0}=e,{hasError:ce=!1}=e,{containerStyles:Se=""}=e,{getSelectionLabel:ke=u=>u?u[B]:null}=e,{createGroupHeaderItem:ht=u=>({value:u,label:u})}=e,{createItem:He=u=>({value:u,label:u})}=e;const dn=()=>i;let{isSearchable:Ze=!0}=e,{inputStyles:Dt=""}=e,{isClearable:mt=!0}=e,{isWaiting:Be=!1}=e,{listPlacement:p="auto"}=e,{listOpen:P=!1}=e,{isVirtualList:le=!1}=e,{loadOptionsInterval:_t=300}=e,{noOptionsMessage:hn="No options"}=e,{hideEmptyState:mn=!1}=e,{inputAttributes:Nt={}}=e,{listAutoWidth:_n=!0}=e,{itemHeight:gn=40}=e,{Icon:li=void 0}=e,{iconProps:ci={}}=e,{showChevron:ui=!1}=e,{showIndicator:fi=!1}=e,{containerClasses:di=""}=e,{indicatorSvg:hi=void 0}=e,{listOffset:pn=5}=e,{ClearIcon:mi=Po}=e,{Item:In=Cr}=e,{List:_i=bo}=e,{Selection:gi=wo}=e,{MultiSelection:pi=So}=e,{VirtualList:bn=Ro}=e;function ms(u){if(u.loadOptions&&u.filterText.length>0)return;if(!u.items)return[];u.items&&u.items.length>0&&typeof u.items[0]!="object"&&(u.items=xi(u.items));let A=u.items.filter(G=>{let ue=D(g(G,u.filterText),u.filterText,G);return ue&&u.isMulti&&u.value&&Array.isArray(u.value)&&(ue=!u.value.some(Fe=>Fe[u.optionIdentifier]===G[u.optionIdentifier])),ue});return u.groupBy&&(A=Is(A)),u.isCreatable&&(A=Ii(A,u.filterText)),A}function Ii(u,A){if(A.length===0)return u;const G=He(A);return u[0]&&A===u[0][B]?u:(G.isCreator=!0,[...u,G])}let{selectedValue:vn=null}=e,Y,Qe,yn,wn,En,Mt;const _s=Do(async()=>{t(4,Be=!0);let u=await ie(T).catch(A=>{console.warn("svelte-select loadOptions error :>> ",A),f("error",{type:"loadOptions",details:A})});u&&!u.cancelled&&(u?(u&&u.length>0&&typeof u[0]!="object"&&(u=xi(u)),t(81,i=[...u]),f("loaded",{items:i})):t(81,i=[]),M&&t(81,i=Ii(i,T)),t(4,Be=!1),t(1,k=!0),t(5,P=!0))},_t);function gs(){typeof m=="string"?t(2,m={[b]:m,label:m}):E&&Array.isArray(m)&&m.length>0&&t(2,m=m.map(u=>typeof u=="string"?{value:u,label:u}:u))}let $e;function ps(){t(31,$e=Object.assign({autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:!1,tabindex:0,type:"text","aria-autocomplete":"list"},Nt)),d&&t(31,$e.id=d,$e),Ze||t(31,$e.readonly=!0,$e)}function Is(u){const A=[],G={};u.forEach(Fe=>{const pe=S(Fe);A.includes(pe)||(A.push(pe),G[pe]=[],pe&&G[pe].push(Object.assign(ht(pe,Fe),{id:pe,isGroupHeader:!0,isSelectable:L}))),G[pe].push(Object.assign({isGroupItem:!!pe},Fe))});const ue=[];return j(A).forEach(Fe=>{ue.push(...G[Fe])}),ue}function bs(){if(E){JSON.stringify(m)!==JSON.stringify(Qe)&&bi()&&f("select",m);return}(!Qe||JSON.stringify(m[b])!==JSON.stringify(Qe[b]))&&f("select",m)}function vs(){k||P?Tn():y&&y.blur()}function ys(){m&&(Array.isArray(m)?t(2,m=[...m]):t(2,m=[m]))}function ws(){m&&t(2,m=null)}function Es(){T.length!==0&&(t(1,k=!0),t(5,P=!0),ie?_s():(t(5,P=!0),E&&t(30,Y=void 0)))}Tr(async()=>{t(77,Qe=m),t(78,yn=T),t(79,wn=k),t(80,En=E)});function bi(){let u=!0;if(m){const A=[],G=[];m.forEach(ue=>{A.includes(ue[b])?u=!1:(A.push(ue[b]),G.push(ue))}),u||t(2,m=G)}return u}function vi(u){let A=u?u[b]:m[b];return C.find(G=>G[b]===A)}function Ts(u){!u||u.length===0||u.some(A=>typeof A!="object")||!m||(E?m.some(A=>!A||!A[b]):!m[b])||(Array.isArray(m)?t(2,m=m.map(A=>vi(A)||A)):t(2,m=vi()||m))}function yi(u){const{detail:A}=u,G=m[A?A.i:m.length-1];m.length===1?t(2,m=void 0):t(2,m=m.filter(ue=>ue!==G)),f("clear",G)}function Ss(u){if(!!k)switch(u.key){case"ArrowDown":u.preventDefault(),t(5,P=!0),t(30,Y=void 0);break;case"ArrowUp":u.preventDefault(),t(5,P=!0),t(30,Y=void 0);break;case"Tab":P||t(1,k=!1);break;case"Backspace":if(!E||T.length>0)return;if(E&&m&&m.length>0){if(yi(Y!==void 0?Y:m.length-1),Y===0||Y===void 0)break;t(30,Y=m.length>Y?Y-1:void 0)}break;case"ArrowLeft":if(!E||T.length>0)return;Y===void 0?t(30,Y=m.length-1):m.length>Y&&Y!==0&&t(30,Y-=1);break;case"ArrowRight":if(!E||T.length>0||Y===void 0)return;Y===m.length-1?t(30,Y=void 0):Y<m.length-1&&t(30,Y+=1);break}}function Tn(){t(1,k=!0),y&&y.focus()}function ks(u){if(!_)return;const A=u.path&&u.path.length>0?u.path[0]:u.target;_.contains(A)||_.contains(u.relatedTarget)||(t(1,k=!1),t(5,P=!1),t(30,Y=void 0),y&&y.blur())}function As(){J||(t(1,k=!0),t(5,P=!P))}function Os(){t(2,m=void 0),t(5,P=!1),f("clear",m),Tn()}Kn(()=>{k&&y&&y.focus()});function Cs(u){const{detail:A}=u;if(A){t(3,T="");const G=Object.assign({},A);(!G.isGroupHeader||G.isSelectable)&&(E?t(2,m=m?m.concat([G]):[G]):t(2,m=G),t(2,m),setTimeout(()=>{t(5,P=!1),t(30,Y=void 0)}))}}function Rs(u){const{detail:A}=u;E?(t(2,m=m||[]),t(2,m=[...m,He(A)])):t(2,m=He(A)),f("itemCreated",A),t(3,T=""),t(5,P=!1),t(30,Y=void 0)}function Ls(){t(3,T=""),t(5,P=!1)}let{ariaValues:Sn=u=>`Option ${u}, selected.`}=e,{ariaListOpen:kn=(u,A)=>`You are currently focused on option ${u}. There are ${A} results available.`}=e,{ariaFocused:An=()=>"Select is focused, type to refine list, press down to open the menu."}=e;function Ps(){let u;return E&&m.length>0?u=m.map(A=>ke(A)).join(", "):u=ke(m),Sn(u)}function Ds(){if(!k||!i||i.length===0)return"";let u=i[Mt];if(P&&u){let A=ke(u),G=i?i.length:0;return kn(A,G)}else return An()}function Ns(u){ye[u?"unshift":"push"](()=>{y=u,t(6,y)})}function Ms(){T=this.value,t(3,T)}function Us(u){Mt=u,t(28,Mt)}function Vs(u){ye[u?"unshift":"push"](()=>{_=u,t(0,_)})}return n.$$set=u=>{"id"in u&&t(46,d=u.id),"container"in u&&t(0,_=u.container),"input"in u&&t(6,y=u.input),"isMulti"in u&&t(7,E=u.isMulti),"multiFullItemClearable"in u&&t(8,H=u.multiFullItemClearable),"isDisabled"in u&&t(9,J=u.isDisabled),"isCreatable"in u&&t(47,M=u.isCreatable),"isFocused"in u&&t(1,k=u.isFocused),"value"in u&&t(2,m=u.value),"filterText"in u&&t(3,T=u.filterText),"placeholder"in u&&t(48,I=u.placeholder),"placeholderAlwaysShow"in u&&t(49,z=u.placeholderAlwaysShow),"items"in u&&t(50,C=u.items),"itemFilter"in u&&t(51,D=u.itemFilter),"groupBy"in u&&t(52,S=u.groupBy),"groupFilter"in u&&t(53,j=u.groupFilter),"isGroupHeaderSelectable"in u&&t(54,L=u.isGroupHeaderSelectable),"getGroupHeaderLabel"in u&&t(55,U=u.getGroupHeaderLabel),"labelIdentifier"in u&&t(56,B=u.labelIdentifier),"getOptionLabel"in u&&t(57,g=u.getOptionLabel),"optionIdentifier"in u&&t(58,b=u.optionIdentifier),"loadOptions"in u&&t(59,ie=u.loadOptions),"hasError"in u&&t(10,ce=u.hasError),"containerStyles"in u&&t(11,Se=u.containerStyles),"getSelectionLabel"in u&&t(12,ke=u.getSelectionLabel),"createGroupHeaderItem"in u&&t(60,ht=u.createGroupHeaderItem),"createItem"in u&&t(61,He=u.createItem),"isSearchable"in u&&t(13,Ze=u.isSearchable),"inputStyles"in u&&t(14,Dt=u.inputStyles),"isClearable"in u&&t(15,mt=u.isClearable),"isWaiting"in u&&t(4,Be=u.isWaiting),"listPlacement"in u&&t(63,p=u.listPlacement),"listOpen"in u&&t(5,P=u.listOpen),"isVirtualList"in u&&t(64,le=u.isVirtualList),"loadOptionsInterval"in u&&t(65,_t=u.loadOptionsInterval),"noOptionsMessage"in u&&t(66,hn=u.noOptionsMessage),"hideEmptyState"in u&&t(67,mn=u.hideEmptyState),"inputAttributes"in u&&t(16,Nt=u.inputAttributes),"listAutoWidth"in u&&t(68,_n=u.listAutoWidth),"itemHeight"in u&&t(69,gn=u.itemHeight),"Icon"in u&&t(17,li=u.Icon),"iconProps"in u&&t(18,ci=u.iconProps),"showChevron"in u&&t(19,ui=u.showChevron),"showIndicator"in u&&t(20,fi=u.showIndicator),"containerClasses"in u&&t(21,di=u.containerClasses),"indicatorSvg"in u&&t(22,hi=u.indicatorSvg),"listOffset"in u&&t(70,pn=u.listOffset),"ClearIcon"in u&&t(23,mi=u.ClearIcon),"Item"in u&&t(71,In=u.Item),"List"in u&&t(24,_i=u.List),"Selection"in u&&t(25,gi=u.Selection),"MultiSelection"in u&&t(26,pi=u.MultiSelection),"VirtualList"in u&&t(72,bn=u.VirtualList),"selectedValue"in u&&t(73,vn=u.selectedValue),"ariaValues"in u&&t(74,Sn=u.ariaValues),"ariaListOpen"in u&&t(75,kn=u.ariaListOpen),"ariaFocused"in u&&t(76,An=u.ariaFocused)},n.$$.update=()=>{n.$$.dirty[0]&140|n.$$.dirty[1]&405340160&&t(81,i=ms({loadOptions:ie,filterText:T,items:C,value:m,isMulti:E,optionIdentifier:b,groupBy:S,isCreatable:M})),n.$$.dirty[2]&2048&&vn&&console.warn("selectedValue is no longer used. Please use value instead."),n.$$.dirty[1]&524288&&Ts(C),n.$$.dirty[0]&4&&m&&gs(),n.$$.dirty[0]&73728&&(Nt||!Ze)&&ps(),n.$$.dirty[0]&128|n.$$.dirty[2]&262144&&(E&&ys(),En&&!E&&ws()),n.$$.dirty[0]&132&&E&&m&&m.length>1&&bi(),n.$$.dirty[0]&4&&m&&bs(),n.$$.dirty[0]&132|n.$$.dirty[2]&32768&&!m&&E&&Qe&&f("select",m),n.$$.dirty[0]&2|n.$$.dirty[2]&131072&&k!==wn&&vs(),n.$$.dirty[0]&8|n.$$.dirty[2]&65536&&T!==yn&&Es(),n.$$.dirty[0]&12&&t(29,r=m&&T.length===0),n.$$.dirty[0]&536904208&&t(37,s=r&&mt&&!J&&!Be),n.$$.dirty[0]&132|n.$$.dirty[1]&393216&&t(36,o=z&&E?I:m?"":I),n.$$.dirty[0]&132&&t(35,l=E&&m&&m.length>0),n.$$.dirty[0]&141|n.$$.dirty[1]&218103808|n.$$.dirty[2]&526326&&t(34,a={Item:In,filterText:T,optionIdentifier:b,noOptionsMessage:hn,hideEmptyState:mn,isVirtualList:le,VirtualList:bn,value:m,isMulti:E,getGroupHeaderLabel:U,items:i,itemHeight:gn,getOptionLabel:g,listPlacement:p,parent:_,listAutoWidth:_n,listOffset:pn}),n.$$.dirty[0]&132&&t(33,c=m?Ps():""),n.$$.dirty[0]&268435490|n.$$.dirty[2]&524288&&t(32,h=Ds())},[_,k,m,T,Be,P,y,E,H,J,ce,Se,ke,Ze,Dt,mt,Nt,li,ci,ui,fi,di,hi,mi,_i,gi,pi,Os,Mt,r,Y,$e,h,c,a,l,o,s,yi,Ss,Tn,ks,As,Cs,Rs,Ls,d,M,I,z,C,D,S,j,L,U,B,g,b,ie,ht,He,dn,p,le,_t,hn,mn,_n,gn,pn,In,bn,vn,Sn,kn,An,Qe,yn,wn,En,i,Ns,Ms,Us,Vs]}class su extends Ve{constructor(e){super();Ue(this,e,Vo,Uo,Te,{id:46,container:0,input:6,isMulti:7,multiFullItemClearable:8,isDisabled:9,isCreatable:47,isFocused:1,value:2,filterText:3,placeholder:48,placeholderAlwaysShow:49,items:50,itemFilter:51,groupBy:52,groupFilter:53,isGroupHeaderSelectable:54,getGroupHeaderLabel:55,labelIdentifier:56,getOptionLabel:57,optionIdentifier:58,loadOptions:59,hasError:10,containerStyles:11,getSelectionLabel:12,createGroupHeaderItem:60,createItem:61,getFilteredItems:62,isSearchable:13,inputStyles:14,isClearable:15,isWaiting:4,listPlacement:63,listOpen:5,isVirtualList:64,loadOptionsInterval:65,noOptionsMessage:66,hideEmptyState:67,inputAttributes:16,listAutoWidth:68,itemHeight:69,Icon:17,iconProps:18,showChevron:19,showIndicator:20,containerClasses:21,indicatorSvg:22,listOffset:70,ClearIcon:23,Item:71,List:24,Selection:25,MultiSelection:26,VirtualList:72,selectedValue:73,handleClear:27,ariaValues:74,ariaListOpen:75,ariaFocused:76},null,[-1,-1,-1,-1])}get getFilteredItems(){return this.$$.ctx[62]}get handleClear(){return this.$$.ctx[27]}}/**
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
 */const Rr=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Ho=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],l=n[t++],a=((r&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Lr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,l=o?n[r+1]:0,a=r+2<n.length,c=a?n[r+2]:0,h=s>>2,f=(s&3)<<4|l>>4;let d=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(d=64)),i.push(t[h],t[f],t[d],t[_])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ho(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const c=r<n.length?t[n.charAt(r)]:64;++r;const f=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||l==null||c==null||f==null)throw Error();const d=s<<2|l>>4;if(i.push(d),c!==64){const _=l<<4&240|c>>2;if(i.push(_),f!==64){const y=c<<6&192|f;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Pr=function(n){const e=Rr(n);return Lr.encodeByteArray(e,!0)},Bo=function(n){try{return Lr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Fo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function se(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jo(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function Wo(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function zo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Go(){const n=se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function qo(){return typeof indexedDB=="object"}function Ko(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Jo="FirebaseError";class ct extends Error{constructor(e,t,i){super(t);this.code=e,this.customData=i,this.name=Jo,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kt.prototype.create)}}class kt{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Yo(s,i):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new ct(r,l,i)}}function Yo(n,e){return n.replace(Xo,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Xo=/\{\$([^}]+)}/g;function xo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Yt(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(Zi(s)&&Zi(o)){if(!Yt(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Zi(n){return n!==null&&typeof n=="object"}/**
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
 */function At(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function pt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function It(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Zo(n,e){const t=new Qo(n,e);return t.subscribe.bind(t)}class Qo{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");$o(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Cn),r.error===void 0&&(r.error=Cn),r.complete===void 0&&(r.complete=Cn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $o(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Cn(){}/**
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
 */function _e(n){return n&&n._delegate?n._delegate:n}class at{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const je="[DEFAULT]";/**
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
 */class ea{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Fo;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(na(e))try{this.getOrInitializeService({instanceIdentifier:je})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=je){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=je){return this.instances.has(e)}getOptions(e=je){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ta(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=je){return this.component?this.component.multipleInstances?e:je:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ta(n){return n===je?void 0:n}function na(n){return n.instantiationMode==="EAGER"}/**
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
 */class ia{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ea(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const ra={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},sa=K.INFO,oa={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},aa=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=oa[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dr{constructor(e){this.name=e,this._logLevel=sa,this._logHandler=aa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ra[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}function la(n){return Array.prototype.slice.call(n)}function Nr(n){return new Promise(function(e,t){n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function Yn(n,e,t){var i,r=new Promise(function(s,o){i=n[e].apply(n,t),Nr(i).then(s,o)});return r.request=i,r}function ca(n,e,t){var i=Yn(n,e,t);return i.then(function(r){if(!!r)return new wt(r,i.request)})}function ut(n,e,t){t.forEach(function(i){Object.defineProperty(n.prototype,i,{get:function(){return this[e][i]},set:function(r){this[e][i]=r}})})}function Xn(n,e,t,i){i.forEach(function(r){r in t.prototype&&(n.prototype[r]=function(){return Yn(this[e],r,arguments)})})}function rn(n,e,t,i){i.forEach(function(r){r in t.prototype&&(n.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function Mr(n,e,t,i){i.forEach(function(r){r in t.prototype&&(n.prototype[r]=function(){return ca(this[e],r,arguments)})})}function Xe(n){this._index=n}ut(Xe,"_index",["name","keyPath","multiEntry","unique"]);Xn(Xe,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);Mr(Xe,"_index",IDBIndex,["openCursor","openKeyCursor"]);function wt(n,e){this._cursor=n,this._request=e}ut(wt,"_cursor",["direction","key","primaryKey","value"]);Xn(wt,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(wt.prototype[n]=function(){var e=this,t=arguments;return Promise.resolve().then(function(){return e._cursor[n].apply(e._cursor,t),Nr(e._request).then(function(i){if(!!i)return new wt(i,e._request)})})})});function ge(n){this._store=n}ge.prototype.createIndex=function(){return new Xe(this._store.createIndex.apply(this._store,arguments))};ge.prototype.index=function(){return new Xe(this._store.index.apply(this._store,arguments))};ut(ge,"_store",["name","keyPath","indexNames","autoIncrement"]);Xn(ge,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);Mr(ge,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);rn(ge,"_store",IDBObjectStore,["deleteIndex"]);function Ot(n){this._tx=n,this.complete=new Promise(function(e,t){n.oncomplete=function(){e()},n.onerror=function(){t(n.error)},n.onabort=function(){t(n.error)}})}Ot.prototype.objectStore=function(){return new ge(this._tx.objectStore.apply(this._tx,arguments))};ut(Ot,"_tx",["objectStoreNames","mode"]);rn(Ot,"_tx",IDBTransaction,["abort"]);function sn(n,e,t){this._db=n,this.oldVersion=e,this.transaction=new Ot(t)}sn.prototype.createObjectStore=function(){return new ge(this._db.createObjectStore.apply(this._db,arguments))};ut(sn,"_db",["name","version","objectStoreNames"]);rn(sn,"_db",IDBDatabase,["deleteObjectStore","close"]);function on(n){this._db=n}on.prototype.transaction=function(){return new Ot(this._db.transaction.apply(this._db,arguments))};ut(on,"_db",["name","version","objectStoreNames"]);rn(on,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(n){[ge,Xe].forEach(function(e){n in e.prototype&&(e.prototype[n.replace("open","iterate")]=function(){var t=la(arguments),i=t[t.length-1],r=this._store||this._index,s=r[n].apply(r,t.slice(0,-1));s.onsuccess=function(){i(s.result)}})})});[Xe,ge].forEach(function(n){n.prototype.getAll||(n.prototype.getAll=function(e,t){var i=this,r=[];return new Promise(function(s){i.iterateCursor(e,function(o){if(!o){s(r);return}if(r.push(o.value),t!==void 0&&r.length==t){s(r);return}o.continue()})})})});function ua(n,e,t){var i=Yn(indexedDB,"open",[n,e]),r=i.request;return r&&(r.onupgradeneeded=function(s){t&&t(new sn(r.result,s.oldVersion,r.transaction))}),i.then(function(s){return new on(s)})}/**
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
 */class fa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(da(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function da(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jn="@firebase/app",Qi="0.7.18";/**
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
 */const xn=new Dr("@firebase/app"),ha="@firebase/app-compat",ma="@firebase/analytics-compat",_a="@firebase/analytics",ga="@firebase/app-check-compat",pa="@firebase/app-check",Ia="@firebase/auth",ba="@firebase/auth-compat",va="@firebase/database",ya="@firebase/database-compat",wa="@firebase/functions",Ea="@firebase/functions-compat",Ta="@firebase/installations",Sa="@firebase/installations-compat",ka="@firebase/messaging",Aa="@firebase/messaging-compat",Oa="@firebase/performance",Ca="@firebase/performance-compat",Ra="@firebase/remote-config",La="@firebase/remote-config-compat",Pa="@firebase/storage",Da="@firebase/storage-compat",Na="@firebase/firestore",Ma="@firebase/firestore-compat",Ua="firebase",Va="9.6.8";/**
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
 */const Ur="[DEFAULT]",Ha={[jn]:"fire-core",[ha]:"fire-core-compat",[_a]:"fire-analytics",[ma]:"fire-analytics-compat",[pa]:"fire-app-check",[ga]:"fire-app-check-compat",[Ia]:"fire-auth",[ba]:"fire-auth-compat",[va]:"fire-rtdb",[ya]:"fire-rtdb-compat",[wa]:"fire-fn",[Ea]:"fire-fn-compat",[Ta]:"fire-iid",[Sa]:"fire-iid-compat",[ka]:"fire-fcm",[Aa]:"fire-fcm-compat",[Oa]:"fire-perf",[Ca]:"fire-perf-compat",[Ra]:"fire-rc",[La]:"fire-rc-compat",[Pa]:"fire-gcs",[Da]:"fire-gcs-compat",[Na]:"fire-fst",[Ma]:"fire-fst-compat","fire-js":"fire-js",[Ua]:"fire-js-all"};/**
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
 */const Xt=new Map,Wn=new Map;function Ba(n,e){try{n.container.addComponent(e)}catch(t){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Et(n){const e=n.name;if(Wn.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;Wn.set(e,n);for(const t of Xt.values())Ba(t,n);return!0}function Vr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Fa={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Ne=new kt("app","Firebase",Fa);/**
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
 */class ja{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new at("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ne.create("app-deleted",{appName:this._name})}}/**
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
 */const an=Va;function ou(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:Ur,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw Ne.create("bad-app-name",{appName:String(i)});const r=Xt.get(i);if(r){if(Yt(n,r.options)&&Yt(t,r.config))return r;throw Ne.create("duplicate-app",{appName:i})}const s=new ia(i);for(const l of Wn.values())s.addComponent(l);const o=new ja(n,t,s);return Xt.set(i,o),o}function Wa(n=Ur){const e=Xt.get(n);if(!e)throw Ne.create("no-app",{appName:n});return e}function it(n,e,t){var i;let r=(i=Ha[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${r}" with version "${e}":`];s&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(l.join(" "));return}Et(new at(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const za="firebase-heartbeat-database",Ga=1,qe="firebase-heartbeat-store";let Rn=null;function Zn(){return Rn||(Rn=ua(za,Ga,n=>{switch(n.oldVersion){case 0:n.createObjectStore(qe)}}).catch(n=>{throw Ne.create("storage-open",{originalErrorMessage:n.message})})),Rn}async function qa(n){try{return(await Zn()).transaction(qe).objectStore(qe).get(Qn(n))}catch(e){throw Ne.create("storage-get",{originalErrorMessage:e.message})}}async function Ln(n,e){try{const i=(await Zn()).transaction(qe,"readwrite");return await i.objectStore(qe).put(e,Qn(n)),i.complete}catch(t){throw Ne.create("storage-set",{originalErrorMessage:t.message})}}async function Ka(n){try{const t=(await Zn()).transaction(qe,"readwrite");return await t.objectStore(qe).delete(Qn(n)),t.complete}catch(e){throw Ne.create("storage-delete",{originalErrorMessage:e.message})}}function Qn(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ja=1024,Ya=30*24*60*60*1e3;class Xa{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Qa(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(r=>r.date===i))return this._heartbeatsCache.push({date:i,userAgent:t}),this._heartbeatsCache=this._heartbeatsCache.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Ya}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:t}=Za(this._heartbeatsCache),i=Pr(JSON.stringify({version:2,heartbeats:e}));return t.length>0?(this._heartbeatsCache=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),i}}function xa(){return new Date().toISOString().substring(0,10)}function Za(n,e=Ja){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.userAgent===r.userAgent);if(s){if(s.dates.push(r.date),$i(t)>e){s.dates.pop();break}}else if(t.push({userAgent:r.userAgent,dates:[r.date]}),$i(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Qa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qo()?Ko().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qa(this.app);return(t==null?void 0:t.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return Ln(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ln(this.app,{heartbeats:[...i,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ln(this.app,{heartbeats:i.filter(r=>!e.includes(r))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return Ka(this.app)}}function $i(n){return Pr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function $a(n){Et(new at("platform-logger",e=>new fa(e),"PRIVATE")),Et(new at("heartbeat",e=>new Xa(e),"PRIVATE")),it(jn,Qi,n),it(jn,Qi,"esm2017"),it("fire-js","")}$a("");var el="firebase",tl="9.6.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it(el,tl,"app");/*! *****************************************************************************
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
***************************************************************************** */function $n(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function Hr(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nl=Hr,Br=new kt("auth","Firebase",Hr());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new Dr("@firebase/auth");function jt(n,...e){er.logLevel<=K.ERROR&&er.error(`Auth (${an}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(n,...e){throw ei(n,...e)}function he(n,...e){return ei(n,...e)}function il(n,e,t){const i=Object.assign(Object.assign({},nl()),{[e]:t});return new kt("auth","Firebase",i).create(e,{appName:n.name})}function ei(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Br.create(n,...e)}function O(n,e,...t){if(!n)throw ei(e,...t)}function Ie(n){const e="INTERNAL ASSERTION FAILED: "+n;throw jt(e),new Error(e)}function we(n,e){n||Ie(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Map;function be(n){we(n instanceof Function,"Expected a class definition");let e=tr.get(n);return e?(we(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,tr.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(n,e){const t=Vr(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(Yt(s,e!=null?e:{}))return r;de(r,"already-initialized")}return t.initialize({options:e})}function sl(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(be);(e==null?void 0:e.errorMap)&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ol(){return nr()==="http:"||nr()==="https:"}function nr(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ol()||Wo()||"connection"in navigator)?navigator.onLine:!0}function ll(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t){this.shortDelay=e,this.longDelay=t,we(t>e,"Short delay should be less than long delay!"),this.isMobile=jo()||zo()}get(){return al()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n,e){we(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ie("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ie("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ie("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new Ct(3e4,6e4);function ft(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function xe(n,e,t,i,r={}){return jr(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const l=At(Object.assign({key:n.config.apiKey},o)).slice(1),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/json",n.languageCode&&(a["X-Firebase-Locale"]=n.languageCode),Fr.fetch()(Wr(n,n.config.apiHost,t,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function jr(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},cl),e);try{const r=new fl(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Pn(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pn(n,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Pn(n,"email-already-in-use",o);const h=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw il(n,h,c);de(n,h)}}catch(r){if(r instanceof ct)throw r;de(n,"network-request-failed")}}async function Rt(n,e,t,i,r={}){const s=await xe(n,e,t,i,r);return"mfaPendingCredential"in s&&de(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Wr(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?ti(n.config,r):`${n.config.apiScheme}://${r}`}class fl{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(he(this.auth,"network-request-failed")),ul.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=he(n,e,i);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(n,e){return xe(n,"POST","/v1/accounts:delete",e)}async function hl(n,e){return xe(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(n,e=!1){return _e(n).getIdToken(e)}async function ml(n,e=!1){const t=_e(n),i=await t.getIdToken(e),r=ni(i);O(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:vt(Dn(r.auth_time)),issuedAtTime:vt(Dn(r.iat)),expirationTime:vt(Dn(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Dn(n){return Number(n)*1e3}function ni(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return jt("JWT malformed, contained fewer than 3 sections"),null;try{const r=Bo(t);return r?JSON.parse(r):(jt("Failed to decode base64 JWT payload"),null)}catch(r){return jt("Caught error parsing JWT payload as JSON",r),null}}function _l(n){const e=ni(n);return O(e,"internal-error"),O(typeof e.exp!="undefined","internal-error"),O(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ct&&gl(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function gl({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=vt(this.lastLoginAt),this.creationTime=vt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xt(n){var e;const t=n.auth,i=await n.getIdToken(),r=await lt(n,hl(t,{idToken:i}));O(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?vl(s.providerUserInfo):[],l=bl(n.providerData,o),a=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(l==null?void 0:l.length),h=a?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new zr(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function Il(n){const e=_e(n);await xt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bl(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function vl(n){return n.map(e=>{var{providerId:t}=e,i=$n(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(n,e){const t=await jr(n,{},async()=>{const i=At({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=Wr(n,r,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Fr.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken!="undefined","internal-error"),O(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):_l(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await yl(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new Tt;return i&&(O(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(O(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tt,this.toJSON())}_performRefresh(){return Ie("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,e){O(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class ze{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=$n(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await lt(this,this.stsTokenManager.getToken(this.auth,e));return O(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ml(this,e)}reload(){return Il(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await xt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await lt(this,dl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,l,a,c,h;const f=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(r=t.email)!==null&&r!==void 0?r:void 0,_=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=t.photoURL)!==null&&o!==void 0?o:void 0,E=(l=t.tenantId)!==null&&l!==void 0?l:void 0,H=(a=t._redirectEventId)!==null&&a!==void 0?a:void 0,J=(c=t.createdAt)!==null&&c!==void 0?c:void 0,M=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:k,emailVerified:m,isAnonymous:T,providerData:I,stsTokenManager:z}=t;O(k&&z,e,"internal-error");const C=Tt.fromJSON(this.name,z);O(typeof k=="string",e,"internal-error"),Ae(f,e.name),Ae(d,e.name),O(typeof m=="boolean",e,"internal-error"),O(typeof T=="boolean",e,"internal-error"),Ae(_,e.name),Ae(y,e.name),Ae(E,e.name),Ae(H,e.name),Ae(J,e.name),Ae(M,e.name);const D=new ze({uid:k,auth:e,email:d,emailVerified:m,displayName:f,isAnonymous:T,photoURL:y,phoneNumber:_,tenantId:E,stsTokenManager:C,createdAt:J,lastLoginAt:M});return I&&Array.isArray(I)&&(D.providerData=I.map(S=>Object.assign({},S))),H&&(D._redirectEventId=H),D}static async _fromIdTokenResponse(e,t,i=!1){const r=new Tt;r.updateFromServerResponse(t);const s=new ze({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await xt(s),s}}/**
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
 */class Gr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Gr.type="NONE";const ir=Gr;/**
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
 */function Wt(n,e,t){return`firebase:${n}:${e}:${t}`}class rt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Wt(this.userKey,r.apiKey,s),this.fullPersistenceKey=Wt("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ze._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new rt(be(ir),e,i);const r=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||be(ir);const o=Wt(i,e.config.apiKey,e.name);let l=null;for(const c of t)try{const h=await c._get(o);if(h){const f=ze._fromJSON(e,h);c!==s&&(l=f),s=c;break}}catch{}const a=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new rt(s,e,i):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new rt(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xr(e))return"Blackberry";if(xr(e))return"Webos";if(ii(e))return"Safari";if((e.includes("chrome/")||Kr(e))&&!e.includes("edge/"))return"Chrome";if(Yr(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function qr(n=se()){return/firefox\//i.test(n)}function ii(n=se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kr(n=se()){return/crios\//i.test(n)}function Jr(n=se()){return/iemobile/i.test(n)}function Yr(n=se()){return/android/i.test(n)}function Xr(n=se()){return/blackberry/i.test(n)}function xr(n=se()){return/webos/i.test(n)}function ln(n=se()){return/iphone|ipad|ipod/i.test(n)}function wl(n=se()){var e;return ln(n)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function El(){return Go()&&document.documentMode===10}function Zr(n=se()){return ln(n)||Yr(n)||xr(n)||Xr(n)||/windows phone/i.test(n)||Jr(n)}function Tl(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n,e=[]){let t;switch(n){case"Browser":t=rr(se());break;case"Worker":t=`${rr(se())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${an}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sr(this),this.idTokenSubscription=new sr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Br,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=be(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await rt.create(this,e),!this._deleted)){if((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var t;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,s=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xt(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ll()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?_e(e):null;return t&&O(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(be(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kt("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&be(e)||this._popupRedirectResolver;O(t,this,"argument-error"),this.redirectPersistenceManager=await rt.create(this,[be(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,i,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function cn(n){return _e(n)}class sr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zo(t=>this.observer=t)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ie("not implemented")}_getIdTokenResponse(e){return Ie("not implemented")}_linkToIdToken(e,t){return Ie("not implemented")}_getReauthenticationResolver(e){return Ie("not implemented")}}async function kl(n,e){return xe(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(n,e){return Rt(n,"POST","/v1/accounts:signInWithPassword",ft(n,e))}async function $r(n,e){return xe(n,"POST","/v1/accounts:sendOobCode",ft(n,e))}async function Ol(n,e){return $r(n,e)}async function Cl(n,e){return $r(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rl(n,e){return Rt(n,"POST","/v1/accounts:signInWithEmailLink",ft(n,e))}async function Ll(n,e){return Rt(n,"POST","/v1/accounts:signInWithEmailLink",ft(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends ri{constructor(e,t,i,r=null){super("password",i);this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new St(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new St(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Al(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Rl(e,{email:this._email,oobCode:this._password});default:de(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return kl(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ll(e,{idToken:t,email:this._email,oobCode:this._password});default:de(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(n,e){return Rt(n,"POST","/v1/accounts:signInWithIdp",ft(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="http://localhost";class Ke extends ri{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const t=new Ke(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):de("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=$n(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Ke(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return st(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,st(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,st(e,t)}buildRequest(){const e={requestUri:Pl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=At(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Nl(n){const e=pt(It(n)).link,t=e?pt(It(e)).deep_link_id:null,i=pt(It(n)).deep_link_id;return(i?pt(It(i)).link:null)||i||t||e||n}class si{constructor(e){var t,i,r,s,o,l;const a=pt(It(e)),c=(t=a.apiKey)!==null&&t!==void 0?t:null,h=(i=a.oobCode)!==null&&i!==void 0?i:null,f=Dl((r=a.mode)!==null&&r!==void 0?r:null);O(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=Nl(e);try{return new si(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this.providerId=dt.PROVIDER_ID}static credential(e,t){return St._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=si.parseLink(t);return O(i,"argument-error"),St._fromEmailAndCode(e,i.code,i.tenantId)}}dt.PROVIDER_ID="password";dt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";dt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lt extends es{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Lt{constructor(){super("facebook.com")}static credential(e){return Ke._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Oe.credential(e.oauthAccessToken)}catch{return null}}}Oe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Oe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends Lt{constructor(){super("google.com");this.addScope("profile")}static credential(e,t){return Ke._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ce.credential(t,i)}catch{return null}}}Ce.GOOGLE_SIGN_IN_METHOD="google.com";Ce.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends Lt{constructor(){super("github.com")}static credential(e){return Ke._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.GITHUB_SIGN_IN_METHOD="github.com";Re.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Lt{constructor(){super("twitter.com")}static credential(e,t){return Ke._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Le.credential(t,i)}catch{return null}}}Le.TWITTER_SIGN_IN_METHOD="twitter.com";Le.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(n,e){return Rt(n,"POST","/v1/accounts:signUp",ft(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await ze._fromIdTokenResponse(e,i,r),o=or(i);return new Je({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=or(i);return new Je({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function or(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends ct{constructor(e,t,i,r){var s;super(t.code,t.message);this.operationType=i,this.user=r,Object.setPrototypeOf(this,Zt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Zt(e,t,i,r)}}function ts(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Zt._fromErrorAndOperation(n,s,e,i):s})}async function Ul(n,e,t=!1){const i=await lt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Je._forOperation(n,"link",i)}/**
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
 */async function Vl(n,e,t=!1){const{auth:i}=n,r="reauthenticate";try{const s=await lt(n,ts(i,r,e,n),t);O(s.idToken,i,"internal-error");const o=ni(s.idToken);O(o,i,"internal-error");const{sub:l}=o;return O(n.uid===l,i,"user-mismatch"),Je._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&de(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(n,e,t=!1){const i="signIn",r=await ts(n,i,e),s=await Je._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}async function Hl(n,e){return ns(cn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(n,e,t){var i;O(((i=t.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),O(typeof t.dynamicLinkDomain=="undefined"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(O(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(O(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lu(n,e,t){const i=_e(n),r={requestType:"PASSWORD_RESET",email:e};t&&is(i,r,t),await Cl(i,r)}async function cu(n,e,t){const i=cn(n),r=await Ml(i,{returnSecureToken:!0,email:e,password:t}),s=await Je._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function uu(n,e,t){return Hl(_e(n),dt.credential(e,t))}async function fu(n,e){const t=_e(n),i=await n.getIdToken(),r={requestType:"VERIFY_EMAIL",idToken:i};e&&is(t.auth,r,e);const{email:s}=await Ol(t.auth,r);s!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bl(n,e){return xe(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function du(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=_e(n),s={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await lt(i,Bl(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const l=i.providerData.find(({providerId:a})=>a==="password");l&&(l.displayName=i.displayName,l.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(n,e){return _e(n).setPersistence(e)}const Qt="__sak";/**
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
 */class rs{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qt,"1"),this.storage.removeItem(Qt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(){const n=se();return ii(n)||ln(n)}const jl=1e3,Wl=10;class ss extends rs{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fl()&&Tl(),this.fallbackToPolling=Zr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);El()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Wl):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},jl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ss.type="LOCAL";const zl=ss;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends rs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}os.type="SESSION";const as=os;/**
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
 */function Gl(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class un{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new un(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o==null?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const l=Array.from(o).map(async c=>c(t.origin,s)),a=await Gl(l);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:a})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}un.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ql{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const c=oi("",20);r.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(d.data.response);break;default:clearTimeout(h),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return window}function Kl(n){me().location.href=n}/**
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
 */function ls(){return typeof me().WorkerGlobalScope!="undefined"&&typeof me().importScripts=="function"}async function Jl(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yl(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Xl(){return ls()?self:null}/**
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
 */const cs="firebaseLocalStorageDb",xl=1,$t="firebaseLocalStorage",us="fbase_key";class Pt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fn(n,e){return n.transaction([$t],e?"readwrite":"readonly").objectStore($t)}function Zl(){const n=indexedDB.deleteDatabase(cs);return new Pt(n).toPromise()}function Gn(){const n=indexedDB.open(cs,xl);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore($t,{keyPath:us})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains($t)?e(i):(i.close(),await Zl(),e(await Gn()))})})}async function ar(n,e,t){const i=fn(n,!0).put({[us]:e,value:t});return new Pt(i).toPromise()}async function Ql(n,e){const t=fn(n,!1).get(e),i=await new Pt(t).toPromise();return i===void 0?null:i.value}function lr(n,e){const t=fn(n,!0).delete(e);return new Pt(t).toPromise()}const $l=800,ec=3;class fs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>ec)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ls()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=un._getInstance(Xl()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Jl(),!this.activeServiceWorker)return;this.sender=new ql(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gn();return await ar(e,Qt,"1"),await lr(e,Qt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ar(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Ql(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=fn(r,!1).getAll();return new Pt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$l)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fs.type="LOCAL";const tc=fs;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ic(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=he("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",nc().appendChild(i)})}function rc(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new Ct(3e4,6e4);/**
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
 */function sc(n,e){return e?be(e):(O(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ai extends ri{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return st(e,this._buildIdpRequest())}_linkToIdToken(e,t){return st(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return st(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oc(n){return ns(n.auth,new ai(n),n.bypassAuthState)}function ac(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),Vl(t,new ai(n),n.bypassAuthState)}async function lc(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),Ul(t,new ai(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oc;case"linkViaPopup":case"linkViaRedirect":return lc;case"reauthViaPopup":case"reauthViaRedirect":return ac;default:de(this.auth,"internal-error")}}resolve(e){we(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){we(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new Ct(2e3,1e4);class nt extends ds{constructor(e,t,i,r,s){super(e,t,r,s);this.provider=i,this.authWindow=null,this.pollId=null,nt.currentPopupAction&&nt.currentPopupAction.cancel(),nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){we(this.filter.length===1,"Popup operations only handle one event");const e=oi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(he(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(he(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(he(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,cc.get())};e()}}nt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="pendingRedirect",Nn=new Map;class fc extends ds{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i);this.eventId=null}async execute(){let e=Nn.get(this.auth._key());if(!e){try{const i=await dc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Nn.set(this.auth._key(),e)}return this.bypassAuthState||Nn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dc(n,e){const t=mc(e),i=hc(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function hc(n){return be(n._redirectPersistence)}function mc(n){return Wt(uc,n.config.apiKey,n.name)}async function _c(n,e,t=!1){const i=cn(n),r=sc(i,e),o=await new fc(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=10*60*1e3;class pc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ic(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!hs(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(he(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gc&&this.cachedEventUids.clear(),this.cachedEventUids.has(cr(e))}saveEventToCache(e){this.cachedEventUids.add(cr(e)),this.lastProcessedEventTime=Date.now()}}function cr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function hs({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ic(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hs(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bc(n,e={}){return xe(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yc=/^https?/;async function wc(n){if(n.config.emulator)return;const{authorizedDomains:e}=await bc(n);for(const t of e)try{if(Ec(t))return}catch{}de(n,"unauthorized-domain")}function Ec(n){const e=zn(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!yc.test(t))return!1;if(vc.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Tc=new Ct(3e4,6e4);function ur(){const n=me().___jsl;if(n==null?void 0:n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Sc(n){return new Promise((e,t)=>{var i,r,s;function o(){ur(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ur(),t(he(n,"network-request-failed"))},timeout:Tc.get()})}if((r=(i=me().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0?void 0:r.Iframe)e(gapi.iframes.getContext());else if((s=me().gapi)===null||s===void 0?void 0:s.load)o();else{const l=rc("iframefcb");return me()[l]=()=>{gapi.load?o():t(he(n,"network-request-failed"))},ic(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>t(a))}}).catch(e=>{throw zt=null,e})}let zt=null;function kc(n){return zt=zt||Sc(n),zt}/**
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
 */const Ac=new Ct(5e3,15e3),Oc="__/auth/iframe",Cc="emulator/auth/iframe",Rc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pc(n){const e=n.config;O(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ti(e,Cc):`https://${n.config.authDomain}/${Oc}`,i={apiKey:e.apiKey,appName:n.name,v:an},r=Lc.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${At(i).slice(1)}`}async function Dc(n){const e=await kc(n),t=me().gapi;return O(t,n,"internal-error"),e.open({where:document.body,url:Pc(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rc,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=he(n,"network-request-failed"),l=me().setTimeout(()=>{s(o)},Ac.get());function a(){me().clearTimeout(l),r(i)}i.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const Nc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mc=500,Uc=600,Vc="_blank",Hc="http://localhost";class fr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bc(n,e,t,i=Mc,r=Uc){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Nc),{width:i.toString(),height:r.toString(),top:s,left:o}),c=se().toLowerCase();t&&(l=Kr(c)?Vc:t),qr(c)&&(e=e||Hc,a.scrollbars="yes");const h=Object.entries(a).reduce((d,[_,y])=>`${d}${_}=${y},`,"");if(wl(c)&&l!=="_self")return Fc(e||"",l),new fr(null);const f=window.open(e||"",l,h);O(f,n,"popup-blocked");try{f.focus()}catch{}return new fr(f)}function Fc(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const jc="__/auth/handler",Wc="emulator/auth/handler";function dr(n,e,t,i,r,s){O(n.config.authDomain,n,"auth-domain-config-required"),O(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:an,eventId:r};if(e instanceof es){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",xo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,c]of Object.entries(s||{}))o[a]=c}if(e instanceof Lt){const a=e.getScopes().filter(c=>c!=="");a.length>0&&(o.scopes=a.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${zc(n)}?${At(l).slice(1)}`}function zc({config:n}){return n.emulator?ti(n,Wc):`https://${n.authDomain}/${jc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="webStorageSupport";class Gc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=as,this._completeRedirectFn=_c}async _openPopup(e,t,i,r){var s;we((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=dr(e,t,i,zn(),r);return Bc(e,o,oi())}async _openRedirect(e,t,i,r){return await this._originValidation(e),Kl(dr(e,t,i,zn(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(we(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Dc(e),i=new pc(e);return t.register("authEvent",r=>(O(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Mn,{type:Mn},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Mn];o!==void 0&&t(!!o),de(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Zr()||ii()||ln()}}const qc=Gc;var hr="@firebase/auth",mr="0.19.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Yc(n){Et(new at("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(o=>{O(r&&!r.includes(":"),"invalid-api-key",{appName:o.name}),O(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const l={apiKey:r,authDomain:s,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qr(n)},a=new Sl(o,l);return sl(a,t),a})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Et(new at("auth-internal",e=>{const t=cn(e.getProvider("auth").getImmediate());return(i=>new Kc(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(hr,mr,Jc(n)),it(hr,mr,"esm2017")}/**
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
 */function mu(n=Wa()){const e=Vr(n,"auth");return e.isInitialized()?e.getImmediate():rl(n,{popupRedirectResolver:qc,persistence:[tc,zl,as]})}Yc("Browser");export{ir as $,Or as A,ne as B,en as C,iu as D,Bt as E,W as F,Q as G,x as H,qn as I,gr as J,$c as K,br as L,vr as M,Ir as N,Xc as O,nu as P,ru as Q,su as R,Ve as S,Si as T,Ee as U,lu as V,du as W,au as X,ou as Y,mu as Z,hu as _,F as a,qt as a0,Zc as a1,xc as a2,cu as a3,fu as a4,Qc as a5,uu as a6,v as b,X as c,w as d,q as e,et as f,V as g,ot as h,Ue as i,Gt as j,oe as k,Z as l,ae as m,$ as n,N as o,ee as p,R as q,tu as r,Te as s,Pe as t,eu as u,Kn as v,re as w,Me as x,te as y,Jn as z};
