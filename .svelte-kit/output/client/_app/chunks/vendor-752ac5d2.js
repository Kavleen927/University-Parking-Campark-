function ie(){}function ui(t,e){for(const n in e)t[n]=e[n];return t}function Qo(t){return t()}function Br(){return Object.create(null)}function Ge(t){t.forEach(Qo)}function Ic(t){return typeof t=="function"}function ze(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function wc(t){return Object.keys(t).length===0}function Ec(t,...e){if(t==null)return ie;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Yg(t,e,n){t.$$.on_destroy.push(Ec(e,n))}function Zo(t,e,n,i){if(t){const s=$o(t,e,n,i);return t[0](s)}}function $o(t,e,n,i){return t[1]&&i?ui(n.ctx.slice(),t[1](i(e))):n.ctx}function ea(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|s[a];return r}return e.dirty|s}return e.dirty}function ta(t,e,n,i,s,r){if(s){const o=$o(e,n,i,r);t.p(o,s)}}function na(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let hi=!1;function bc(){hi=!0}function Tc(){hi=!1}function Sc(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function kc(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const d=e[c];d.claim_order!==void 0&&l.push(d)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,d=(s>0&&e[n[s]].claim_order<=c?s+1:Sc(1,s,f=>e[n[f]].claim_order,c))-1;i[l]=n[d]+1;const h=d+1;n[h]=l,s=Math.max(h,s)}const r=[],o=[];let a=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(r.push(e[l-1]);a>=l;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);r.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<r.length&&o[l].claim_order>=r[c].claim_order;)c++;const d=c<r.length?r[c]:null;t.insertBefore(o[l],d)}}function Ac(t,e){t.appendChild(e)}function q(t,e){if(hi){for(kc(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Cc(t,e,n){t.insertBefore(e,n||null)}function H(t,e,n){hi&&!n?q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode.removeChild(t)}function Ns(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function He(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $e(t){return document.createTextNode(t)}function pe(){return $e(" ")}function te(){return $e("")}function ee(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Oc(t){return function(e){return e.preventDefault(),t.call(this,e)}}function w(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Vr(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:w(t,i,e[i])}function ds(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:w(t,e,n)}function Qg(t){return t===""?null:+t}function G(t){return Array.from(t.childNodes)}function ia(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function sa(t,e,n,i,s=!1){ia(t);const r=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,s||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function ra(t,e,n,i){return sa(t,s=>s.nodeName===e,s=>{const r=[];for(let o=0;o<s.attributes.length;o++){const a=s.attributes[o];n[a.name]||r.push(a.name)}r.forEach(o=>s.removeAttribute(o))},()=>i(e))}function $(t,e,n){return ra(t,e,n,X)}function et(t,e,n){return ra(t,e,n,He)}function Ut(t,e){return sa(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>$e(e),!0)}function _e(t){return Ut(t," ")}function Wr(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Rc(t){const e=Wr(t,"HTML_TAG_START",0),n=Wr(t,"HTML_TAG_END",e);if(e===n)return new gs;ia(t);const i=t.splice(e,n-e+1);E(i[0]),E(i[i.length-1]);const s=i.slice(1,i.length-1);for(const r of s)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new gs(s)}function qn(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Gr(t,e){t.value=e==null?"":e}function Ot(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Zg(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function $g(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let Nn;function Lc(){if(Nn===void 0){Nn=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{Nn=!0}}return Nn}function Dc(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=X("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Lc();let r;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=ee(window,"message",o=>{o.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{r=ee(i.contentWindow,"resize",e)}),Ac(t,i),()=>{(s||r&&i.contentWindow)&&r(),E(i)}}function ke(t,e,n){t.classList[n?"add":"remove"](e)}function Pc(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function em(t,e=document.body){return Array.from(e.querySelectorAll(t))}class Nc{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.e=X(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Cc(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class gs extends Nc{constructor(e){super();this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)H(this.t,this.n[n],e)}}let rn;function en(t){rn=t}function Et(){if(!rn)throw new Error("Function called outside component initialization");return rn}function oa(t){Et().$$.before_update.push(t)}function Ms(t){Et().$$.on_mount.push(t)}function tm(t){Et().$$.after_update.push(t)}function Mc(t){Et().$$.on_destroy.push(t)}function fi(){const t=Et();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=Pc(e,n);i.slice().forEach(r=>{r.call(t,s)})}}}function nm(t,e){Et().$$.context.set(t,e)}function im(t){return Et().$$.context.get(t)}const Yt=[],Be=[],Hn=[],ms=[],aa=Promise.resolve();let ps=!1;function la(){ps||(ps=!0,aa.then(ca))}function Bn(){return la(),aa}function Kn(t){Hn.push(t)}function Uc(t){ms.push(t)}const Yi=new Set;let Mn=0;function ca(){const t=rn;do{for(;Mn<Yt.length;){const e=Yt[Mn];Mn++,en(e),Fc(e.$$)}for(en(null),Yt.length=0,Mn=0;Be.length;)Be.pop()();for(let e=0;e<Hn.length;e+=1){const n=Hn[e];Yi.has(n)||(Yi.add(n),n())}Hn.length=0}while(Yt.length);for(;ms.length;)ms.pop()();ps=!1,Yi.clear(),en(t)}function Fc(t){if(t.fragment!==null){t.update(),Ge(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Kn)}}const Vn=new Set;let ht;function re(){ht={r:0,c:[],p:ht}}function oe(){ht.r||Ge(ht.c),ht=ht.p}function D(t,e){t&&t.i&&(Vn.delete(t),t.i(e))}function U(t,e,n,i){if(t&&t.o){if(Vn.has(t))return;Vn.add(t),ht.c.push(()=>{Vn.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function jc(t,e){U(t,1,1,()=>{e.delete(t.key)})}function Hc(t,e,n,i,s,r,o,a,l,c,d,h){let f=t.length,m=r.length,v=f;const T={};for(;v--;)T[t[v].key]=v;const V=[],Y=new Map,F=new Map;for(v=m;v--;){const y=h(s,r,v),K=n(y);let R=o.get(K);R?i&&R.p(y,e):(R=c(K,y),R.c()),Y.set(K,V[v]=R),K in T&&F.set(K,Math.abs(v-T[K]))}const A=new Set,g=new Set;function S(y){D(y,1),y.m(a,d),o.set(y.key,y),d=y.first,m--}for(;f&&m;){const y=V[m-1],K=t[f-1],R=y.key,M=K.key;y===K?(d=y.first,f--,m--):Y.has(M)?!o.has(R)||A.has(R)?S(y):g.has(M)?f--:F.get(R)>F.get(M)?(g.add(R),S(y)):(A.add(M),f--):(l(K,o),f--)}for(;f--;){const y=t[f];Y.has(y.key)||l(y,o)}for(;m;)S(V[m-1]);return V}function Us(t,e){const n={},i={},s={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(n[l]=a[l],s[l]=1);t[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in n||(n[o]=void 0);return n}function ua(t){return typeof t=="object"&&t!==null?t:{}}function zr(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ge(t){t&&t.c()}function nt(t,e){t&&t.l(e)}function ce(t,e,n,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=t.$$;s&&s.m(e,n),i||Kn(()=>{const l=r.map(Qo).filter(Ic);o?o.push(...l):Ge(l),t.$$.on_mount=[]}),a.forEach(Kn)}function ue(t,e){const n=t.$$;n.fragment!==null&&(Ge(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bc(t,e){t.$$.dirty[0]===-1&&(Yt.push(t),la(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function it(t,e,n,i,s,r,o,a=[-1]){const l=rn;en(t);const c=t.$$={fragment:null,ctx:null,props:r,update:ie,not_equal:s,bound:Br(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Br(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let d=!1;if(c.ctx=n?n(t,e.props||{},(h,f,...m)=>{const v=m.length?m[0]:f;return c.ctx&&s(c.ctx[h],c.ctx[h]=v)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](v),d&&Bc(t,h)),f}):[],c.update(),d=!0,Ge(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){bc();const h=G(e.target);c.fragment&&c.fragment.l(h),h.forEach(E)}else c.fragment&&c.fragment.c();e.intro&&D(t.$$.fragment),ce(t,e.target,e.anchor,e.customElement),Tc(),ca()}en(l)}class st{$destroy(){ue(this,1),this.$destroy=ie}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!wc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Rt=[];function sm(t,e=ie){let n;const i=new Set;function s(a){if(ze(t,a)&&(t=a,n)){const l=!Rt.length;for(const c of i)c[1](),Rt.push(c,t);if(l){for(let c=0;c<Rt.length;c+=2)Rt[c][0](Rt[c+1]);Rt.length=0}}}function r(a){s(a(t))}function o(a,l=ie){const c=[a,l];return i.add(c),i.size===1&&(n=e(s)||ie),a(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:s,update:r,subscribe:o}}const Vc=t=>({loading:t&1,success:t&8,error:t&2,notSupported:t&16,coords:t&4}),qr=t=>({loading:t[0],success:t[3],error:t[1],notSupported:t[4],coords:t[2]});function Wc(t){let e;const n=t[14].default,i=Zo(n,t,t[13],qr);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,[r]){i&&i.p&&(!e||r&8223)&&ta(i,n,s,s[13],e?ea(n,s[13],r,Vc):na(s[13]),qr)},i(s){e||(D(i,s),e=!0)},o(s){U(i,s),e=!1},d(s){i&&i.d(s)}}}function Gc(t,e,n){let{$$slots:i={},$$scope:s}=e,{coords:r=[-1,-1]}=e,{position:o={}}=e,{options:a={}}=e,{getPosition:l=!1}=e,{watch:c=!1}=e,{loading:d=!1}=e,{success:h=!1}=e,{error:f=!1}=e,{notSupported:m=!1}=e;async function v(y){if(n(4,m=!1),n(0,d=!0),n(1,f=!1),!("geolocation"in navigator))n(4,m=!0);else return F&&await V(F),n(12,F=navigator.geolocation.watchPosition(g,S,y)),F}async function T(y){n(4,m=!1),n(0,d=!0),n(1,f=!1),"geolocation"in navigator?navigator.geolocation.getCurrentPosition(g,S,y):n(4,m=!0)}async function V(y){"geolocation"in navigator?(navigator.geolocation.clearWatch(y),y=void 0):n(4,m=!0)}const Y=fi();let F,A;function g(y){n(2,r=[y.coords.longitude,y.coords.latitude]),n(5,o={coords:{accuracy:y.coords.accuracy,altitude:y.coords.altitude,altitudeAccuracy:y.coords.altitudeAccuracy,heading:y.coords.heading,latitude:y.coords.latitude,longitude:y.coords.longitude,speed:y.coords.speed},timestamp:y.timestamp}),(!A||A.coords.latitude!==y.coords.latitude||A.coords.longitude!==y.coords.longitude)&&(A=y,Y("position",o)),n(0,d=!1)}function S(y){Y("error",y),n(1,f=y),n(0,d=!1)}return Mc(()=>{F&&V(F)}),t.$$set=y=>{"coords"in y&&n(2,r=y.coords),"position"in y&&n(5,o=y.position),"options"in y&&n(6,a=y.options),"getPosition"in y&&n(7,l=y.getPosition),"watch"in y&&n(8,c=y.watch),"loading"in y&&n(0,d=y.loading),"success"in y&&n(3,h=y.success),"error"in y&&n(1,f=y.error),"notSupported"in y&&n(4,m=y.notSupported),"$$scope"in y&&n(13,s=y.$$scope)},t.$$.update=()=>{t.$$.dirty&448&&typeof window!="undefined"&&l&&c&&v(a),t.$$.dirty&448&&typeof window!="undefined"&&l&&!c&&T(a),t.$$.dirty&131&&n(3,h=l&&!d&&!f),t.$$.dirty&4480&&(!l||!c)&&F&&V(F)},[d,f,r,h,m,o,a,l,c,v,T,V,F,s,i]}class rm extends st{constructor(e){super();it(this,e,Gc,Wc,ze,{coords:2,position:5,options:6,getPosition:7,watch:8,loading:0,success:3,error:1,notSupported:4,watchPosition:9,getGeolocationPosition:10,clearWatcher:11})}get watchPosition(){return this.$$.ctx[9]}get getGeolocationPosition(){return this.$$.ctx[10]}get clearWatcher(){return this.$$.ctx[11]}}function zc(t,e){const n=t.getBoundingClientRect(),i=e.getBoundingClientRect(),s={};return s.top=n.top<0,s.left=n.left<0,s.bottom=n.bottom+i.height>(window.innerHeight||document.documentElement.clientHeight),s.right=n.right>(window.innerWidth||document.documentElement.clientWidth),s.any=s.top||s.left||s.bottom||s.right,s}function qc(t){let e,n=t[0](t[1],t[2])+"",i;return{c(){e=X("div"),this.h()},l(s){e=$(s,"DIV",{class:!0});var r=G(e);r.forEach(E),this.h()},h(){w(e,"class",i="item "+t[3]+" svelte-3e0qet")},m(s,r){H(s,e,r),e.innerHTML=n},p(s,[r]){r&7&&n!==(n=s[0](s[1],s[2])+"")&&(e.innerHTML=n),r&8&&i!==(i="item "+s[3]+" svelte-3e0qet")&&w(e,"class",i)},i:ie,o:ie,d(s){s&&E(e)}}}function Kc(t,e,n){let{isActive:i=!1}=e,{isFirst:s=!1}=e,{isHover:r=!1}=e,{isSelectable:o=!1}=e,{getOptionLabel:a=void 0}=e,{item:l=void 0}=e,{filterText:c=""}=e,d="";return t.$$set=h=>{"isActive"in h&&n(4,i=h.isActive),"isFirst"in h&&n(5,s=h.isFirst),"isHover"in h&&n(6,r=h.isHover),"isSelectable"in h&&n(7,o=h.isSelectable),"getOptionLabel"in h&&n(0,a=h.getOptionLabel),"item"in h&&n(1,l=h.item),"filterText"in h&&n(2,c=h.filterText)},t.$$.update=()=>{if(t.$$.dirty&242){const h=[];i&&h.push("active"),s&&h.push("first"),r&&h.push("hover"),l.isGroupHeader&&h.push("groupHeader"),l.isGroupItem&&h.push("groupItem"),o||h.push("notSelectable"),n(3,d=h.join(" "))}},[a,l,c,d,i,s,r,o]}class ha extends st{constructor(e){super();it(this,e,Kc,qc,ze,{isActive:4,isFirst:5,isHover:6,isSelectable:7,getOptionLabel:0,item:1,filterText:2})}}function Kr(t,e,n){const i=t.slice();return i[41]=e[n],i[42]=n,i}function xc(t){let e,n,i=t[1],s=[];for(let a=0;a<i.length;a+=1)s[a]=Xr(Kr(t,i,a));const r=a=>U(s[a],1,1,()=>{s[a]=null});let o=null;return i.length||(o=xr(t)),{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=te(),o&&o.c()},l(a){for(let l=0;l<s.length;l+=1)s[l].l(a);e=te(),o&&o.l(a)},m(a,l){for(let c=0;c<s.length;c+=1)s[c].m(a,l);H(a,e,l),o&&o.m(a,l),n=!0},p(a,l){if(l[0]&114390){i=a[1];let c;for(c=0;c<i.length;c+=1){const d=Kr(a,i,c);s[c]?(s[c].p(d,l),D(s[c],1)):(s[c]=Xr(d),s[c].c(),D(s[c],1),s[c].m(e.parentNode,e))}for(re(),c=i.length;c<s.length;c+=1)r(c);oe(),!i.length&&o?o.p(a,l):i.length?o&&(o.d(1),o=null):(o=xr(a),o.c(),o.m(e.parentNode,e))}},i(a){if(!n){for(let l=0;l<i.length;l+=1)D(s[l]);n=!0}},o(a){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)U(s[l]);n=!1},d(a){Ns(s,a),a&&E(e),o&&o.d(a)}}}function Jc(t){let e,n,i;var s=t[3];function r(o){return{props:{items:o[1],itemHeight:o[8],$$slots:{default:[Qc,({item:a,i:l})=>({41:a,42:l}),({item:a,i:l})=>[0,(a?1024:0)|(l?2048:0)]]},$$scope:{ctx:o}}}}return s&&(e=new s(r(t))),{c(){e&&ge(e.$$.fragment),n=te()},l(o){e&&nt(e.$$.fragment,o),n=te()},m(o,a){e&&ce(e,o,a),H(o,n,a),i=!0},p(o,a){const l={};if(a[0]&2&&(l.items=o[1]),a[0]&256&&(l.itemHeight=o[8]),a[0]&9814|a[1]&11264&&(l.$$scope={dirty:a,ctx:o}),s!==(s=o[3])){if(e){re();const c=e;U(c.$$.fragment,1,0,()=>{ue(c,1)}),oe()}s?(e=new s(r(o)),ge(e.$$.fragment),D(e.$$.fragment,1),ce(e,n.parentNode,n)):e=null}else s&&e.$set(l)},i(o){i||(e&&D(e.$$.fragment,o),i=!0)},o(o){e&&U(e.$$.fragment,o),i=!1},d(o){o&&E(n),e&&ue(e,o)}}}function xr(t){let e,n=!t[11]&&Jr(t);return{c(){n&&n.c(),e=te()},l(i){n&&n.l(i),e=te()},m(i,s){n&&n.m(i,s),H(i,e,s)},p(i,s){i[11]?n&&(n.d(1),n=null):n?n.p(i,s):(n=Jr(i),n.c(),n.m(e.parentNode,e))},d(i){n&&n.d(i),i&&E(e)}}}function Jr(t){let e,n;return{c(){e=X("div"),n=$e(t[12]),this.h()},l(i){e=$(i,"DIV",{class:!0});var s=G(e);n=Ut(s,t[12]),s.forEach(E),this.h()},h(){w(e,"class","empty svelte-1uyqfml")},m(i,s){H(i,e,s),q(e,n)},p(i,s){s[0]&4096&&qn(n,i[12])},d(i){i&&E(e)}}}function Xc(t){let e,n,i,s,r,o;var a=t[4];function l(f){return{props:{item:f[41],filterText:f[13],getOptionLabel:f[6],isFirst:_s(f[42]),isActive:xn(f[41],f[9],f[10]),isHover:Jn(f[2],f[41],f[42],f[1]),isSelectable:mt(f[41])}}}a&&(n=new a(l(t)));function c(){return t[29](t[42])}function d(){return t[30](t[42])}function h(...f){return t[31](t[41],t[42],...f)}return{c(){e=X("div"),n&&ge(n.$$.fragment),i=pe(),this.h()},l(f){e=$(f,"DIV",{class:!0,tabindex:!0});var m=G(e);n&&nt(n.$$.fragment,m),i=_e(m),m.forEach(E),this.h()},h(){w(e,"class","listItem"),w(e,"tabindex","-1")},m(f,m){H(f,e,m),n&&ce(n,e,null),q(e,i),s=!0,r||(o=[ee(e,"mouseover",c),ee(e,"focus",d),ee(e,"click",h)],r=!0)},p(f,m){t=f;const v={};if(m[0]&2&&(v.item=t[41]),m[0]&8192&&(v.filterText=t[13]),m[0]&64&&(v.getOptionLabel=t[6]),m[0]&1538&&(v.isActive=xn(t[41],t[9],t[10])),m[0]&6&&(v.isHover=Jn(t[2],t[41],t[42],t[1])),m[0]&2&&(v.isSelectable=mt(t[41])),a!==(a=t[4])){if(n){re();const T=n;U(T.$$.fragment,1,0,()=>{ue(T,1)}),oe()}a?(n=new a(l(t)),ge(n.$$.fragment),D(n.$$.fragment,1),ce(n,e,i)):n=null}else a&&n.$set(v)},i(f){s||(n&&D(n.$$.fragment,f),s=!0)},o(f){n&&U(n.$$.fragment,f),s=!1},d(f){f&&E(e),n&&ue(n),r=!1,Ge(o)}}}function Yc(t){let e,n=t[7](t[41])+"",i;return{c(){e=X("div"),i=$e(n),this.h()},l(s){e=$(s,"DIV",{class:!0});var r=G(e);i=Ut(r,n),r.forEach(E),this.h()},h(){w(e,"class","listGroupTitle svelte-1uyqfml")},m(s,r){H(s,e,r),q(e,i)},p(s,r){r[0]&130&&n!==(n=s[7](s[41])+"")&&qn(i,n)},i:ie,o:ie,d(s){s&&E(e)}}}function Xr(t){let e,n,i,s;const r=[Yc,Xc],o=[];function a(l,c){return l[41].isGroupHeader&&!l[41].isSelectable?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),i=te()},l(l){n.l(l),i=te()},m(l,c){o[e].m(l,c),H(l,i,c),s=!0},p(l,c){let d=e;e=a(l),e===d?o[e].p(l,c):(re(),U(o[d],1,1,()=>{o[d]=null}),oe(),n=o[e],n?n.p(l,c):(n=o[e]=r[e](l),n.c()),D(n,1),n.m(i.parentNode,i))},i(l){s||(D(n),s=!0)},o(l){U(n),s=!1},d(l){o[e].d(l),l&&E(i)}}}function Qc(t){let e,n,i,s,r;var o=t[4];function a(h){return{props:{item:h[41],filterText:h[13],getOptionLabel:h[6],isFirst:_s(h[42]),isActive:xn(h[41],h[9],h[10]),isHover:Jn(h[2],h[41],h[42],h[1]),isSelectable:mt(h[41])}}}o&&(n=new o(a(t)));function l(){return t[26](t[42])}function c(){return t[27](t[42])}function d(...h){return t[28](t[41],t[42],...h)}return{c(){e=X("div"),n&&ge(n.$$.fragment),this.h()},l(h){e=$(h,"DIV",{class:!0});var f=G(e);n&&nt(n.$$.fragment,f),f.forEach(E),this.h()},h(){w(e,"class","listItem")},m(h,f){H(h,e,f),n&&ce(n,e,null),i=!0,s||(r=[ee(e,"mouseover",l),ee(e,"focus",c),ee(e,"click",d)],s=!0)},p(h,f){t=h;const m={};if(f[1]&1024&&(m.item=t[41]),f[0]&8192&&(m.filterText=t[13]),f[0]&64&&(m.getOptionLabel=t[6]),f[1]&2048&&(m.isFirst=_s(t[42])),f[0]&1536|f[1]&1024&&(m.isActive=xn(t[41],t[9],t[10])),f[0]&6|f[1]&3072&&(m.isHover=Jn(t[2],t[41],t[42],t[1])),f[1]&1024&&(m.isSelectable=mt(t[41])),o!==(o=t[4])){if(n){re();const v=n;U(v.$$.fragment,1,0,()=>{ue(v,1)}),oe()}o?(n=new o(a(t)),ge(n.$$.fragment),D(n.$$.fragment,1),ce(n,e,null)):n=null}else o&&n.$set(m)},i(h){i||(n&&D(n.$$.fragment,h),i=!0)},o(h){n&&U(n.$$.fragment,h),i=!1},d(h){h&&E(e),n&&ue(n),s=!1,Ge(r)}}}function Zc(t){let e,n,i,s,r,o;const a=[Jc,xc],l=[];function c(d,h){return d[5]?0:1}return n=c(t),i=l[n]=a[n](t),{c(){e=X("div"),i.c(),this.h()},l(d){e=$(d,"DIV",{class:!0,style:!0});var h=G(e);i.l(h),h.forEach(E),this.h()},h(){w(e,"class","listContainer svelte-1uyqfml"),w(e,"style",t[14]),ke(e,"virtualList",t[5])},m(d,h){H(d,e,h),l[n].m(e,null),t[32](e),s=!0,r||(o=[ee(window,"keydown",t[17]),ee(window,"resize",t[18])],r=!0)},p(d,h){let f=n;n=c(d),n===f?l[n].p(d,h):(re(),U(l[f],1,1,()=>{l[f]=null}),oe(),i=l[n],i?i.p(d,h):(i=l[n]=a[n](d),i.c()),D(i,1),i.m(e,null)),(!s||h[0]&16384)&&w(e,"style",d[14]),h[0]&32&&ke(e,"virtualList",d[5])},i(d){s||(D(i),s=!0)},o(d){U(i),s=!1},d(d){d&&E(e),l[n].d(),t[32](null),r=!1,Ge(o)}}}function xn(t,e,n){return e&&e[n]===t[n]}function _s(t){return t===0}function Jn(t,e,n,i){return mt(e)&&(t===n||i.length===1)}function mt(t){return t.isGroupHeader&&t.isSelectable||t.selectable||!t.hasOwnProperty("selectable")}function $c(t,e,n){const i=fi();let{container:s=void 0}=e,{VirtualList:r=null}=e,{Item:o=ha}=e,{isVirtualList:a=!1}=e,{items:l=[]}=e,{labelIdentifier:c="label"}=e,{getOptionLabel:d=(_,N)=>{if(_)return _.isCreator?`Create "${N}"`:_[c]}}=e,{getGroupHeaderLabel:h=null}=e,{itemHeight:f=40}=e,{hoverItemIndex:m=0}=e,{value:v=void 0}=e,{optionIdentifier:T="value"}=e,{hideEmptyState:V=!1}=e,{noOptionsMessage:Y="No options"}=e,{isMulti:F=!1}=e,{activeItemIndex:A=0}=e,{filterText:g=""}=e,{parent:S=null}=e,{listPlacement:y=null}=e,{listAutoWidth:K=null}=e,{listOffset:R=5}=e,M=0,k=!1,z;Ms(()=>{if(l.length>0&&!F&&v){const _=l.findIndex(N=>N[T]===v[T]);_&&n(2,m=_)}Te("active"),s.addEventListener("scroll",()=>{clearTimeout(M),M=setTimeout(()=>{k=!1},100)},!1)}),oa(()=>{l||n(1,l=[]),l!==z&&l.length>0&&n(2,m=0),z=l});function P(_){_.isCreator||i("itemSelected",_)}function j(_){k||n(2,m=_)}function W(_){const{item:N,i:Ee,event:Jt}=_;if(Jt.stopPropagation(),v&&!F&&v[T]===N[T])return p();N.isCreator?i("itemCreated",g):mt(N)&&(n(19,A=Ee),n(2,m=Ee),P(N))}function p(){i("closeList")}async function I(_){if(a)return;let N=!0;for(;N;)_>0&&m===l.length-1?n(2,m=0):_<0&&m===0?n(2,m=l.length-1):n(2,m=m+_),N=!mt(l[m]);await Bn(),Te("hover")}function fe(_){switch(_.key){case"Escape":_.preventDefault(),p();break;case"ArrowDown":_.preventDefault(),l.length&&I(1);break;case"ArrowUp":_.preventDefault(),l.length&&I(-1);break;case"Enter":if(_.preventDefault(),l.length===0)break;const N=l[m];if(v&&!F&&v[T]===N[T]){p();break}N.isCreator?i("itemCreated",g):(n(19,A=m),P(l[m]));break;case"Tab":if(_.preventDefault(),l.length===0||v&&v[T]===l[m][T])return p();n(19,A=m),P(l[m]);break}}function Te(_){if(a||!s)return;let N;const Ee=s.querySelector(`.listItem .${_}`);Ee&&(N=s.getBoundingClientRect().bottom-Ee.getBoundingClientRect().bottom),n(0,s.scrollTop-=N,s)}let qe;function Ke(){const{height:_,width:N}=S.getBoundingClientRect();n(14,qe=""),n(14,qe+=`min-width:${N}px;width:${K?"auto":"100%"};`),y==="top"||y==="auto"&&zc(S,s).bottom?n(14,qe+=`bottom:${_+R}px;`):n(14,qe+=`top:${_+R}px;`)}const Kt=_=>j(_),at=_=>j(_),Ni=(_,N,Ee)=>W({item:_,i:N,event:Ee}),kt=_=>j(_),Ln=_=>j(_),xt=(_,N,Ee)=>W({item:_,i:N,event:Ee});function lt(_){Be[_?"unshift":"push"](()=>{s=_,n(0,s)})}return t.$$set=_=>{"container"in _&&n(0,s=_.container),"VirtualList"in _&&n(3,r=_.VirtualList),"Item"in _&&n(4,o=_.Item),"isVirtualList"in _&&n(5,a=_.isVirtualList),"items"in _&&n(1,l=_.items),"labelIdentifier"in _&&n(20,c=_.labelIdentifier),"getOptionLabel"in _&&n(6,d=_.getOptionLabel),"getGroupHeaderLabel"in _&&n(7,h=_.getGroupHeaderLabel),"itemHeight"in _&&n(8,f=_.itemHeight),"hoverItemIndex"in _&&n(2,m=_.hoverItemIndex),"value"in _&&n(9,v=_.value),"optionIdentifier"in _&&n(10,T=_.optionIdentifier),"hideEmptyState"in _&&n(11,V=_.hideEmptyState),"noOptionsMessage"in _&&n(12,Y=_.noOptionsMessage),"isMulti"in _&&n(21,F=_.isMulti),"activeItemIndex"in _&&n(19,A=_.activeItemIndex),"filterText"in _&&n(13,g=_.filterText),"parent"in _&&n(22,S=_.parent),"listPlacement"in _&&n(23,y=_.listPlacement),"listAutoWidth"in _&&n(24,K=_.listAutoWidth),"listOffset"in _&&n(25,R=_.listOffset)},t.$$.update=()=>{t.$$.dirty[0]&4194305&&S&&s&&Ke()},[s,l,m,r,o,a,d,h,f,v,T,V,Y,g,qe,j,W,fe,Ke,A,c,F,S,y,K,R,Kt,at,Ni,kt,Ln,xt,lt]}class eu extends st{constructor(e){super();it(this,e,$c,Zc,ze,{container:0,VirtualList:3,Item:4,isVirtualList:5,items:1,labelIdentifier:20,getOptionLabel:6,getGroupHeaderLabel:7,itemHeight:8,hoverItemIndex:2,value:9,optionIdentifier:10,hideEmptyState:11,noOptionsMessage:12,isMulti:21,activeItemIndex:19,filterText:13,parent:22,listPlacement:23,listAutoWidth:24,listOffset:25},null,[-1,-1])}}function tu(t){let e,n=t[0](t[1])+"";return{c(){e=X("div"),this.h()},l(i){e=$(i,"DIV",{class:!0});var s=G(e);s.forEach(E),this.h()},h(){w(e,"class","selection svelte-pu1q1n")},m(i,s){H(i,e,s),e.innerHTML=n},p(i,[s]){s&3&&n!==(n=i[0](i[1])+"")&&(e.innerHTML=n)},i:ie,o:ie,d(i){i&&E(e)}}}function nu(t,e,n){let{getSelectionLabel:i=void 0}=e,{item:s=void 0}=e;return t.$$set=r=>{"getSelectionLabel"in r&&n(0,i=r.getSelectionLabel),"item"in r&&n(1,s=r.item)},[i,s]}class iu extends st{constructor(e){super();it(this,e,nu,tu,ze,{getSelectionLabel:0,item:1})}}function Yr(t,e,n){const i=t.slice();return i[9]=e[n],i[11]=n,i}function Qr(t){let e,n,i,s,r;function o(...a){return t[6](t[11],...a)}return{c(){e=X("div"),n=He("svg"),i=He("path"),this.h()},l(a){e=$(a,"DIV",{class:!0});var l=G(e);n=et(l,"svg",{width:!0,height:!0,viewBox:!0,focusable:!0,"aria-hidden":!0,role:!0,class:!0});var c=G(n);i=et(c,"path",{d:!0}),G(i).forEach(E),c.forEach(E),l.forEach(E),this.h()},h(){w(i,"d","M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"),w(n,"width","100%"),w(n,"height","100%"),w(n,"viewBox","-2 -2 50 50"),w(n,"focusable","false"),w(n,"aria-hidden","true"),w(n,"role","presentation"),w(n,"class","svelte-liu9pa"),w(e,"class","multiSelectItem_clear svelte-liu9pa")},m(a,l){H(a,e,l),q(e,n),q(n,i),s||(r=ee(e,"click",o),s=!0)},p(a,l){t=a},d(a){a&&E(e),s=!1,r()}}}function Zr(t){let e,n,i=t[4](t[9])+"",s,r,o,a,l,c=!t[2]&&!t[3]&&Qr(t);function d(...h){return t[7](t[11],...h)}return{c(){e=X("div"),n=X("div"),s=pe(),c&&c.c(),r=pe(),this.h()},l(h){e=$(h,"DIV",{class:!0});var f=G(e);n=$(f,"DIV",{class:!0});var m=G(n);m.forEach(E),s=_e(f),c&&c.l(f),r=_e(f),f.forEach(E),this.h()},h(){w(n,"class","multiSelectItem_label svelte-liu9pa"),w(e,"class",o="multiSelectItem "+(t[1]===t[11]?"active":"")+" "+(t[2]?"disabled":"")+" svelte-liu9pa")},m(h,f){H(h,e,f),q(e,n),n.innerHTML=i,q(e,s),c&&c.m(e,null),q(e,r),a||(l=ee(e,"click",d),a=!0)},p(h,f){t=h,f&17&&i!==(i=t[4](t[9])+"")&&(n.innerHTML=i),!t[2]&&!t[3]?c?c.p(t,f):(c=Qr(t),c.c(),c.m(e,r)):c&&(c.d(1),c=null),f&6&&o!==(o="multiSelectItem "+(t[1]===t[11]?"active":"")+" "+(t[2]?"disabled":"")+" svelte-liu9pa")&&w(e,"class",o)},d(h){h&&E(e),c&&c.d(),a=!1,l()}}}function su(t){let e,n=t[0],i=[];for(let s=0;s<n.length;s+=1)i[s]=Zr(Yr(t,n,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=te()},l(s){for(let r=0;r<i.length;r+=1)i[r].l(s);e=te()},m(s,r){for(let o=0;o<i.length;o+=1)i[o].m(s,r);H(s,e,r)},p(s,[r]){if(r&63){n=s[0];let o;for(o=0;o<n.length;o+=1){const a=Yr(s,n,o);i[o]?i[o].p(a,r):(i[o]=Zr(a),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},i:ie,o:ie,d(s){Ns(i,s),s&&E(e)}}}function ru(t,e,n){const i=fi();let{value:s=[]}=e,{activeValue:r=void 0}=e,{isDisabled:o=!1}=e,{multiFullItemClearable:a=!1}=e,{getSelectionLabel:l=void 0}=e;function c(f,m){m.stopPropagation(),i("multiItemClear",{i:f})}const d=(f,m)=>c(f,m),h=(f,m)=>a?c(f,m):{};return t.$$set=f=>{"value"in f&&n(0,s=f.value),"activeValue"in f&&n(1,r=f.activeValue),"isDisabled"in f&&n(2,o=f.isDisabled),"multiFullItemClearable"in f&&n(3,a=f.multiFullItemClearable),"getSelectionLabel"in f&&n(4,l=f.getSelectionLabel)},[s,r,o,a,l,c,d,h]}class ou extends st{constructor(e){super();it(this,e,ru,su,ze,{value:0,activeValue:1,isDisabled:2,multiFullItemClearable:3,getSelectionLabel:4})}}function $r(t,e,n){const i=t.slice();return i[23]=e[n],i}const au=t=>({item:t&32,i:t&32,hoverItemIndex:t&2}),eo=t=>({item:t[23].data,i:t[23].index,hoverItemIndex:t[1]});function lu(t){let e;return{c(){e=$e("Missing template")},l(n){e=Ut(n,"Missing template")},m(n,i){H(n,e,i)},d(n){n&&E(e)}}}function to(t,e){let n,i,s;const r=e[15].default,o=Zo(r,e,e[14],eo),a=o||lu();return{key:t,first:null,c(){n=X("svelte-virtual-list-row"),a&&a.c(),i=pe(),this.h()},l(l){n=$(l,"SVELTE-VIRTUAL-LIST-ROW",{class:!0});var c=G(n);a&&a.l(c),i=_e(c),c.forEach(E),this.h()},h(){ds(n,"class","svelte-g2cagw"),this.first=n},m(l,c){H(l,n,c),a&&a.m(n,null),q(n,i),s=!0},p(l,c){e=l,o&&o.p&&(!s||c&16418)&&ta(o,r,e,e[14],s?ea(r,e[14],c,au):na(e[14]),eo)},i(l){s||(D(a,l),s=!0)},o(l){U(a,l),s=!1},d(l){l&&E(n),a&&a.d(l)}}}function cu(t){let e,n,i=[],s=new Map,r,o,a,l,c=t[5];const d=h=>h[23].index;for(let h=0;h<c.length;h+=1){let f=$r(t,c,h),m=d(f);s.set(m,i[h]=to(m,f))}return{c(){e=X("svelte-virtual-list-viewport"),n=X("svelte-virtual-list-contents");for(let h=0;h<i.length;h+=1)i[h].c();this.h()},l(h){e=$(h,"SVELTE-VIRTUAL-LIST-VIEWPORT",{style:!0,class:!0});var f=G(e);n=$(f,"SVELTE-VIRTUAL-LIST-CONTENTS",{style:!0,class:!0});var m=G(n);for(let v=0;v<i.length;v+=1)i[v].l(m);m.forEach(E),f.forEach(E),this.h()},h(){Ot(n,"padding-top",t[6]+"px"),Ot(n,"padding-bottom",t[7]+"px"),ds(n,"class","svelte-g2cagw"),Ot(e,"height",t[0]),ds(e,"class","svelte-g2cagw"),Kn(()=>t[18].call(e))},m(h,f){H(h,e,f),q(e,n);for(let m=0;m<i.length;m+=1)i[m].m(n,null);t[16](n),t[17](e),r=Dc(e,t[18].bind(e)),o=!0,a||(l=ee(e,"scroll",t[8]),a=!0)},p(h,[f]){f&16418&&(c=h[5],re(),i=Hc(i,f,d,1,h,c,s,n,jc,to,null,$r),oe()),(!o||f&64)&&Ot(n,"padding-top",h[6]+"px"),(!o||f&128)&&Ot(n,"padding-bottom",h[7]+"px"),(!o||f&1)&&Ot(e,"height",h[0])},i(h){if(!o){for(let f=0;f<c.length;f+=1)D(i[f]);o=!0}},o(h){for(let f=0;f<i.length;f+=1)U(i[f]);o=!1},d(h){h&&E(e);for(let f=0;f<i.length;f+=1)i[f].d();t[16](null),t[17](null),r(),a=!1,l()}}}function uu(t,e,n){let{$$slots:i={},$$scope:s}=e,{items:r=void 0}=e,{height:o="100%"}=e,{itemHeight:a=40}=e,{hoverItemIndex:l=0}=e,{start:c=0}=e,{end:d=0}=e,h=[],f,m,v,T=0,V,Y,F=0,A=0,g;async function S(k,z,P){const{scrollTop:j}=m;await Bn();let W=F-j,p=c;for(;W<z&&p<k.length;){let fe=f[p-c];fe||(n(10,d=p+1),await Bn(),fe=f[p-c]),W+=h[p]=P||fe.offsetHeight,p+=1}n(10,d=p);const I=k.length-d;g=(F+W)/d,n(7,A=I*g),h.length=k.length,m&&n(3,m.scrollTop=0,m)}async function y(){const{scrollTop:k}=m,z=c;for(let p=0;p<f.length;p+=1)h[c+p]=a||f[p].offsetHeight;let P=0,j=0;for(;P<r.length;){const p=h[P]||g;if(j+p>k){n(9,c=P),n(6,F=j);break}j+=p,P+=1}for(;P<r.length&&(j+=h[P]||g,P+=1,!(j>k+T)););n(10,d=P);const W=r.length-d;for(g=j/d;P<r.length;)h[P++]=g;if(n(7,A=W*g),c<z){await Bn();let p=0,I=0;for(let Te=c;Te<z;Te+=1)f[Te-c]&&(p+=h[Te],I+=a||f[Te-c].offsetHeight);const fe=I-p;m.scrollTo(0,k+fe)}}Ms(()=>{f=v.getElementsByTagName("svelte-virtual-list-row"),n(13,Y=!0)});function K(k){Be[k?"unshift":"push"](()=>{v=k,n(4,v)})}function R(k){Be[k?"unshift":"push"](()=>{m=k,n(3,m)})}function M(){T=this.offsetHeight,n(2,T)}return t.$$set=k=>{"items"in k&&n(11,r=k.items),"height"in k&&n(0,o=k.height),"itemHeight"in k&&n(12,a=k.itemHeight),"hoverItemIndex"in k&&n(1,l=k.hoverItemIndex),"start"in k&&n(9,c=k.start),"end"in k&&n(10,d=k.end),"$$scope"in k&&n(14,s=k.$$scope)},t.$$.update=()=>{t.$$.dirty&3584&&n(5,V=r.slice(c,d).map((k,z)=>({index:z+c,data:k}))),t.$$.dirty&14340&&Y&&S(r,T,a)},[o,l,T,m,v,V,F,A,y,c,d,r,a,Y,s,i,K,R,M]}class hu extends st{constructor(e){super();it(this,e,uu,cu,ze,{items:11,height:0,itemHeight:12,hoverItemIndex:1,start:9,end:10})}}function fu(t){let e,n;return{c(){e=He("svg"),n=He("path"),this.h()},l(i){e=et(i,"svg",{width:!0,height:!0,viewBox:!0,focusable:!0,"aria-hidden":!0,role:!0});var s=G(e);n=et(s,"path",{fill:!0,d:!0}),G(n).forEach(E),s.forEach(E),this.h()},h(){w(n,"fill","currentColor"),w(n,"d",`M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z`),w(e,"width","100%"),w(e,"height","100%"),w(e,"viewBox","-2 -2 50 50"),w(e,"focusable","false"),w(e,"aria-hidden","true"),w(e,"role","presentation")},m(i,s){H(i,e,s),q(e,n)},p:ie,i:ie,o:ie,d(i){i&&E(e)}}}class du extends st{constructor(e){super();it(this,e,null,fu,ze,{})}}function gu(t,e,n){let i;return function(){let r=this,o=arguments,a=function(){i=null,n||t.apply(r,o)},l=n&&!i;clearTimeout(i),i=setTimeout(a,e),l&&t.apply(r,o)}}function no(t,e,n){const i=t.slice();return i[103]=e[n],i}function io(t){let e,n,i,s,r;return{c(){e=X("span"),n=$e(t[33]),i=pe(),s=X("span"),r=$e(t[32]),this.h()},l(o){e=$(o,"SPAN",{id:!0});var a=G(e);n=Ut(a,t[33]),a.forEach(E),i=_e(o),s=$(o,"SPAN",{id:!0});var l=G(s);r=Ut(l,t[32]),l.forEach(E),this.h()},h(){w(e,"id","aria-selection"),w(s,"id","aria-context")},m(o,a){H(o,e,a),q(e,n),H(o,i,a),H(o,s,a),q(s,r)},p(o,a){a[1]&4&&qn(n,o[33]),a[1]&2&&qn(r,o[32])},d(o){o&&E(e),o&&E(i),o&&E(s)}}}function so(t){let e,n,i;const s=[t[18]];var r=t[17];function o(a){let l={};for(let c=0;c<s.length;c+=1)l=ui(l,s[c]);return{props:l}}return r&&(e=new r(o())),{c(){e&&ge(e.$$.fragment),n=te()},l(a){e&&nt(e.$$.fragment,a),n=te()},m(a,l){e&&ce(e,a,l),H(a,n,l),i=!0},p(a,l){const c=l[0]&262144?Us(s,[ua(a[18])]):{};if(r!==(r=a[17])){if(e){re();const d=e;U(d.$$.fragment,1,0,()=>{ue(d,1)}),oe()}r?(e=new r(o()),ge(e.$$.fragment),D(e.$$.fragment,1),ce(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(a){i||(e&&D(e.$$.fragment,a),i=!0)},o(a){e&&U(e.$$.fragment,a),i=!1},d(a){a&&E(n),e&&ue(e,a)}}}function ro(t){let e,n,i;var s=t[26];function r(o){return{props:{value:o[2],getSelectionLabel:o[12],activeValue:o[30],isDisabled:o[9],multiFullItemClearable:o[8]}}}return s&&(e=new s(r(t)),e.$on("multiItemClear",t[38]),e.$on("focus",t[40])),{c(){e&&ge(e.$$.fragment),n=te()},l(o){e&&nt(e.$$.fragment,o),n=te()},m(o,a){e&&ce(e,o,a),H(o,n,a),i=!0},p(o,a){const l={};if(a[0]&4&&(l.value=o[2]),a[0]&4096&&(l.getSelectionLabel=o[12]),a[0]&1073741824&&(l.activeValue=o[30]),a[0]&512&&(l.isDisabled=o[9]),a[0]&256&&(l.multiFullItemClearable=o[8]),s!==(s=o[26])){if(e){re();const c=e;U(c.$$.fragment,1,0,()=>{ue(c,1)}),oe()}s?(e=new s(r(o)),e.$on("multiItemClear",o[38]),e.$on("focus",o[40]),ge(e.$$.fragment),D(e.$$.fragment,1),ce(e,n.parentNode,n)):e=null}else s&&e.$set(l)},i(o){i||(e&&D(e.$$.fragment,o),i=!0)},o(o){e&&U(e.$$.fragment,o),i=!1},d(o){o&&E(n),e&&ue(e,o)}}}function oo(t){let e,n,i,s,r;var o=t[25];function a(l){return{props:{item:l[2],getSelectionLabel:l[12]}}}return o&&(n=new o(a(t))),{c(){e=X("div"),n&&ge(n.$$.fragment),this.h()},l(l){e=$(l,"DIV",{class:!0});var c=G(e);n&&nt(n.$$.fragment,c),c.forEach(E),this.h()},h(){w(e,"class","selectedItem svelte-17l1npl")},m(l,c){H(l,e,c),n&&ce(n,e,null),i=!0,s||(r=ee(e,"focus",t[40]),s=!0)},p(l,c){const d={};if(c[0]&4&&(d.item=l[2]),c[0]&4096&&(d.getSelectionLabel=l[12]),o!==(o=l[25])){if(n){re();const h=n;U(h.$$.fragment,1,0,()=>{ue(h,1)}),oe()}o?(n=new o(a(l)),ge(n.$$.fragment),D(n.$$.fragment,1),ce(n,e,null)):n=null}else o&&n.$set(d)},i(l){i||(n&&D(n.$$.fragment,l),i=!0)},o(l){n&&U(n.$$.fragment,l),i=!1},d(l){l&&E(e),n&&ue(n),s=!1,r()}}}function ao(t){let e,n,i,s,r;var o=t[23];function a(l){return{}}return o&&(n=new o(a())),{c(){e=X("div"),n&&ge(n.$$.fragment),this.h()},l(l){e=$(l,"DIV",{class:!0,"aria-hidden":!0});var c=G(e);n&&nt(n.$$.fragment,c),c.forEach(E),this.h()},h(){w(e,"class","clearSelect svelte-17l1npl"),w(e,"aria-hidden","true")},m(l,c){H(l,e,c),n&&ce(n,e,null),i=!0,s||(r=ee(e,"click",Oc(t[27])),s=!0)},p(l,c){if(o!==(o=l[23])){if(n){re();const d=n;U(d.$$.fragment,1,0,()=>{ue(d,1)}),oe()}o?(n=new o(a()),ge(n.$$.fragment),D(n.$$.fragment,1),ce(n,e,null)):n=null}},i(l){i||(n&&D(n.$$.fragment,l),i=!0)},o(l){n&&U(n.$$.fragment,l),i=!1},d(l){l&&E(e),n&&ue(n),s=!1,r()}}}function lo(t){let e;function n(r,o){return r[22]?pu:mu}let i=n(t),s=i(t);return{c(){e=X("div"),s.c(),this.h()},l(r){e=$(r,"DIV",{class:!0,"aria-hidden":!0});var o=G(e);s.l(o),o.forEach(E),this.h()},h(){w(e,"class","indicator svelte-17l1npl"),w(e,"aria-hidden","true")},m(r,o){H(r,e,o),s.m(e,null)},p(r,o){i===(i=n(r))&&s?s.p(r,o):(s.d(1),s=i(r),s&&(s.c(),s.m(e,null)))},d(r){r&&E(e),s.d()}}}function mu(t){let e,n;return{c(){e=He("svg"),n=He("path"),this.h()},l(i){e=et(i,"svg",{width:!0,height:!0,viewBox:!0,focusable:!0,"aria-hidden":!0,class:!0});var s=G(e);n=et(s,"path",{d:!0}),G(n).forEach(E),s.forEach(E),this.h()},h(){w(n,"d",`M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z`),w(e,"width","100%"),w(e,"height","100%"),w(e,"viewBox","0 0 20 20"),w(e,"focusable","false"),w(e,"aria-hidden","true"),w(e,"class","svelte-17l1npl")},m(i,s){H(i,e,s),q(e,n)},p:ie,d(i){i&&E(e)}}}function pu(t){let e,n;return{c(){e=new gs,n=te(),this.h()},l(i){e=Rc(i),n=te(),this.h()},h(){e.a=n},m(i,s){e.m(t[22],i,s),H(i,n,s)},p(i,s){s[0]&4194304&&e.p(i[22])},d(i){i&&E(n),i&&e.d()}}}function co(t){let e,n,i;return{c(){e=X("div"),n=He("svg"),i=He("circle"),this.h()},l(s){e=$(s,"DIV",{class:!0});var r=G(e);n=et(r,"svg",{class:!0,viewBox:!0});var o=G(n);i=et(o,"circle",{class:!0,cx:!0,cy:!0,r:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-miterlimit":!0}),G(i).forEach(E),o.forEach(E),r.forEach(E),this.h()},h(){w(i,"class","spinner_path svelte-17l1npl"),w(i,"cx","50"),w(i,"cy","50"),w(i,"r","20"),w(i,"fill","none"),w(i,"stroke","currentColor"),w(i,"stroke-width","5"),w(i,"stroke-miterlimit","10"),w(n,"class","spinner_icon svelte-17l1npl"),w(n,"viewBox","25 25 50 50"),w(e,"class","spinner svelte-17l1npl")},m(s,r){H(s,e,r),q(e,n),q(n,i)},d(s){s&&E(e)}}}function uo(t){let e,n,i,s;const r=[t[34]];function o(c){t[84](c)}var a=t[24];function l(c){let d={};for(let h=0;h<r.length;h+=1)d=ui(d,r[h]);return c[28]!==void 0&&(d.hoverItemIndex=c[28]),{props:d}}return a&&(e=new a(l(t)),Be.push(()=>zr(e,"hoverItemIndex",o)),e.$on("itemSelected",t[43]),e.$on("itemCreated",t[44]),e.$on("closeList",t[45])),{c(){e&&ge(e.$$.fragment),i=te()},l(c){e&&nt(e.$$.fragment,c),i=te()},m(c,d){e&&ce(e,c,d),H(c,i,d),s=!0},p(c,d){const h=d[1]&8?Us(r,[ua(c[34])]):{};if(!n&&d[0]&268435456&&(n=!0,h.hoverItemIndex=c[28],Uc(()=>n=!1)),a!==(a=c[24])){if(e){re();const f=e;U(f.$$.fragment,1,0,()=>{ue(f,1)}),oe()}a?(e=new a(l(c)),Be.push(()=>zr(e,"hoverItemIndex",o)),e.$on("itemSelected",c[43]),e.$on("itemCreated",c[44]),e.$on("closeList",c[45]),ge(e.$$.fragment),D(e.$$.fragment,1),ce(e,i.parentNode,i)):e=null}else a&&e.$set(h)},i(c){s||(e&&D(e.$$.fragment,c),s=!0)},o(c){e&&U(e.$$.fragment,c),s=!1},d(c){c&&E(i),e&&ue(e,c)}}}function ho(t){let e,n,i;return{c(){e=X("input"),this.h()},l(s){e=$(s,"INPUT",{name:!0,type:!0,class:!0}),this.h()},h(){w(e,"name",n=t[16].name),w(e,"type","hidden"),e.value=i=t[2]?t[12](t[2]):null,w(e,"class","svelte-17l1npl")},m(s,r){H(s,e,r)},p(s,r){r[0]&65536&&n!==(n=s[16].name)&&w(e,"name",n),r[0]&4100&&i!==(i=s[2]?s[12](s[2]):null)&&(e.value=i)},d(s){s&&E(e)}}}function fo(t){let e,n=t[2],i=[];for(let s=0;s<n.length;s+=1)i[s]=go(no(t,n,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=te()},l(s){for(let r=0;r<i.length;r+=1)i[r].l(s);e=te()},m(s,r){for(let o=0;o<i.length;o+=1)i[o].m(s,r);H(s,e,r)},p(s,r){if(r[0]&69636){n=s[2];let o;for(o=0;o<n.length;o+=1){const a=no(s,n,o);i[o]?i[o].p(a,r):(i[o]=go(a),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},d(s){Ns(i,s),s&&E(e)}}}function go(t){let e,n,i;return{c(){e=X("input"),this.h()},l(s){e=$(s,"INPUT",{name:!0,type:!0,class:!0}),this.h()},h(){w(e,"name",n=t[16].name),w(e,"type","hidden"),e.value=i=t[103]?t[12](t[103]):null,w(e,"class","svelte-17l1npl")},m(s,r){H(s,e,r)},p(s,r){r[0]&65536&&n!==(n=s[16].name)&&w(e,"name",n),r[0]&4100&&i!==(i=s[103]?s[12](s[103]):null)&&(e.value=i)},d(s){s&&E(e)}}}function _u(t){let e,n,i,s,r,o,a,l,c,d,h,f,m,v,T,V,Y,F,A=t[1]&&io(t),g=t[17]&&so(t),S=t[35]&&ro(t),y=[{readOnly:a=!t[13]},t[31],{placeholder:t[36]},{style:t[14]},{disabled:t[9]}],K={};for(let p=0;p<y.length;p+=1)K=ui(K,y[p]);let R=!t[7]&&t[29]&&oo(t),M=t[37]&&ao(t),k=!t[37]&&(t[20]||t[19]&&!t[2]||!t[13]&&!t[9]&&!t[4]&&(t[29]&&!t[15]||!t[29]))&&lo(t),z=t[4]&&co(),P=t[5]&&uo(t),j=(!t[7]||t[7]&&!t[35])&&ho(t),W=t[7]&&t[35]&&fo(t);return{c(){e=X("div"),n=X("span"),A&&A.c(),i=pe(),g&&g.c(),s=pe(),S&&S.c(),r=pe(),o=X("input"),l=pe(),R&&R.c(),c=pe(),M&&M.c(),d=pe(),k&&k.c(),h=pe(),z&&z.c(),f=pe(),P&&P.c(),m=pe(),j&&j.c(),v=pe(),W&&W.c(),this.h()},l(p){e=$(p,"DIV",{class:!0,style:!0});var I=G(e);n=$(I,"SPAN",{"aria-live":!0,"aria-atomic":!0,"aria-relevant":!0,class:!0});var fe=G(n);A&&A.l(fe),fe.forEach(E),i=_e(I),g&&g.l(I),s=_e(I),S&&S.l(I),r=_e(I),o=$(I,"INPUT",{placeholder:!0,style:!0}),l=_e(I),R&&R.l(I),c=_e(I),M&&M.l(I),d=_e(I),k&&k.l(I),h=_e(I),z&&z.l(I),f=_e(I),P&&P.l(I),m=_e(I),j&&j.l(I),v=_e(I),W&&W.l(I),I.forEach(E),this.h()},h(){w(n,"aria-live","polite"),w(n,"aria-atomic","false"),w(n,"aria-relevant","additions text"),w(n,"class","a11yText svelte-17l1npl"),Vr(o,K),ke(o,"svelte-17l1npl",!0),w(e,"class",T="selectContainer "+t[21]+" svelte-17l1npl"),w(e,"style",t[11]),ke(e,"hasError",t[10]),ke(e,"multiSelect",t[7]),ke(e,"disabled",t[9]),ke(e,"focused",t[1])},m(p,I){H(p,e,I),q(e,n),A&&A.m(n,null),q(e,i),g&&g.m(e,null),q(e,s),S&&S.m(e,null),q(e,r),q(e,o),o.autofocus&&o.focus(),t[82](o),Gr(o,t[3]),q(e,l),R&&R.m(e,null),q(e,c),M&&M.m(e,null),q(e,d),k&&k.m(e,null),q(e,h),z&&z.m(e,null),q(e,f),P&&P.m(e,null),q(e,m),j&&j.m(e,null),q(e,v),W&&W.m(e,null),t[85](e),V=!0,Y||(F=[ee(window,"click",t[41]),ee(window,"focusin",t[41]),ee(window,"keydown",t[39]),ee(o,"focus",t[40]),ee(o,"input",t[83]),ee(e,"click",t[42])],Y=!0)},p(p,I){p[1]?A?A.p(p,I):(A=io(p),A.c(),A.m(n,null)):A&&(A.d(1),A=null),p[17]?g?(g.p(p,I),I[0]&131072&&D(g,1)):(g=so(p),g.c(),D(g,1),g.m(e,s)):g&&(re(),U(g,1,1,()=>{g=null}),oe()),p[35]?S?(S.p(p,I),I[1]&16&&D(S,1)):(S=ro(p),S.c(),D(S,1),S.m(e,r)):S&&(re(),U(S,1,1,()=>{S=null}),oe()),Vr(o,K=Us(y,[(!V||I[0]&8192&&a!==(a=!p[13]))&&{readOnly:a},I[1]&1&&p[31],(!V||I[1]&32)&&{placeholder:p[36]},(!V||I[0]&16384)&&{style:p[14]},(!V||I[0]&512)&&{disabled:p[9]}])),I[0]&8&&o.value!==p[3]&&Gr(o,p[3]),ke(o,"svelte-17l1npl",!0),!p[7]&&p[29]?R?(R.p(p,I),I[0]&536871040&&D(R,1)):(R=oo(p),R.c(),D(R,1),R.m(e,c)):R&&(re(),U(R,1,1,()=>{R=null}),oe()),p[37]?M?(M.p(p,I),I[1]&64&&D(M,1)):(M=ao(p),M.c(),D(M,1),M.m(e,d)):M&&(re(),U(M,1,1,()=>{M=null}),oe()),!p[37]&&(p[20]||p[19]&&!p[2]||!p[13]&&!p[9]&&!p[4]&&(p[29]&&!p[15]||!p[29]))?k?k.p(p,I):(k=lo(p),k.c(),k.m(e,h)):k&&(k.d(1),k=null),p[4]?z||(z=co(),z.c(),z.m(e,f)):z&&(z.d(1),z=null),p[5]?P?(P.p(p,I),I[0]&32&&D(P,1)):(P=uo(p),P.c(),D(P,1),P.m(e,m)):P&&(re(),U(P,1,1,()=>{P=null}),oe()),!p[7]||p[7]&&!p[35]?j?j.p(p,I):(j=ho(p),j.c(),j.m(e,v)):j&&(j.d(1),j=null),p[7]&&p[35]?W?W.p(p,I):(W=fo(p),W.c(),W.m(e,null)):W&&(W.d(1),W=null),(!V||I[0]&2097152&&T!==(T="selectContainer "+p[21]+" svelte-17l1npl"))&&w(e,"class",T),(!V||I[0]&2048)&&w(e,"style",p[11]),I[0]&2098176&&ke(e,"hasError",p[10]),I[0]&2097280&&ke(e,"multiSelect",p[7]),I[0]&2097664&&ke(e,"disabled",p[9]),I[0]&2097154&&ke(e,"focused",p[1])},i(p){V||(D(g),D(S),D(R),D(M),D(P),V=!0)},o(p){U(g),U(S),U(R),U(M),U(P),V=!1},d(p){p&&E(e),A&&A.d(),g&&g.d(),S&&S.d(),t[82](null),R&&R.d(),M&&M.d(),k&&k.d(),z&&z.d(),P&&P.d(),j&&j.d(),W&&W.d(),t[85](null),Y=!1,Ge(F)}}}function mo(t){return t.map((e,n)=>({index:n,value:e,label:`${e}`}))}function yu(t,e,n){let i,s,r,o,a,l,c,d;const h=fi();let{id:f=null}=e,{container:m=void 0}=e,{input:v=void 0}=e,{isMulti:T=!1}=e,{multiFullItemClearable:V=!1}=e,{isDisabled:Y=!1}=e,{isCreatable:F=!1}=e,{isFocused:A=!1}=e,{value:g=null}=e,{filterText:S=""}=e,{placeholder:y="Select..."}=e,{placeholderAlwaysShow:K=!1}=e,{items:R=null}=e,{itemFilter:M=(u,C,x)=>`${u}`.toLowerCase().includes(C.toLowerCase())}=e,{groupBy:k=void 0}=e,{groupFilter:z=u=>u}=e,{isGroupHeaderSelectable:P=!1}=e,{getGroupHeaderLabel:j=u=>u[W]||u.id}=e,{labelIdentifier:W="label"}=e,{getOptionLabel:p=(u,C)=>u.isCreator?`Create "${C}"`:u[W]}=e,{optionIdentifier:I="value"}=e,{loadOptions:fe=void 0}=e,{hasError:Te=!1}=e,{containerStyles:qe=""}=e,{getSelectionLabel:Ke=u=>u?u[W]:null}=e,{createGroupHeaderItem:Kt=u=>({value:u,label:u})}=e,{createItem:at=u=>({value:u,label:u})}=e;const Ni=()=>i;let{isSearchable:kt=!0}=e,{inputStyles:Ln=""}=e,{isClearable:xt=!0}=e,{isWaiting:lt=!1}=e,{listPlacement:_="auto"}=e,{listOpen:N=!1}=e,{isVirtualList:Ee=!1}=e,{loadOptionsInterval:Jt=300}=e,{noOptionsMessage:Mi="No options"}=e,{hideEmptyState:Ui=!1}=e,{inputAttributes:Dn={}}=e,{listAutoWidth:Fi=!0}=e,{itemHeight:ji=40}=e,{Icon:kr=void 0}=e,{iconProps:Ar={}}=e,{showChevron:Cr=!1}=e,{showIndicator:Or=!1}=e,{containerClasses:Rr=""}=e,{indicatorSvg:Lr=void 0}=e,{listOffset:Hi=5}=e,{ClearIcon:Dr=du}=e,{Item:Bi=ha}=e,{List:Pr=eu}=e,{Selection:Nr=iu}=e,{MultiSelection:Mr=ou}=e,{VirtualList:Vi=hu}=e;function Yl(u){if(u.loadOptions&&u.filterText.length>0)return;if(!u.items)return[];u.items&&u.items.length>0&&typeof u.items[0]!="object"&&(u.items=mo(u.items));let C=u.items.filter(x=>{let Se=M(p(x,u.filterText),u.filterText,x);return Se&&u.isMulti&&u.value&&Array.isArray(u.value)&&(Se=!u.value.some(ct=>ct[u.optionIdentifier]===x[u.optionIdentifier])),Se});return u.groupBy&&(C=ec(C)),u.isCreatable&&(C=Ur(C,u.filterText)),C}function Ur(u,C){if(C.length===0)return u;const x=at(C);return u[0]&&C===u[0][W]?u:(x.isCreator=!0,[...u,x])}let{selectedValue:Wi=null}=e,Q,At,Gi,zi,qi,Pn;const Ql=gu(async()=>{n(4,lt=!0);let u=await fe(S).catch(C=>{console.warn("svelte-select loadOptions error :>> ",C),h("error",{type:"loadOptions",details:C})});u&&!u.cancelled&&(u?(u&&u.length>0&&typeof u[0]!="object"&&(u=mo(u)),n(81,i=[...u]),h("loaded",{items:i})):n(81,i=[]),F&&n(81,i=Ur(i,S)),n(4,lt=!1),n(1,A=!0),n(5,N=!0))},Jt);function Zl(){typeof g=="string"?n(2,g={[I]:g,label:g}):T&&Array.isArray(g)&&g.length>0&&n(2,g=g.map(u=>typeof u=="string"?{value:u,label:u}:u))}let Ct;function $l(){n(31,Ct=Object.assign({autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:!1,tabindex:0,type:"text","aria-autocomplete":"list"},Dn)),f&&n(31,Ct.id=f,Ct),kt||n(31,Ct.readonly=!0,Ct)}function ec(u){const C=[],x={};u.forEach(ct=>{const Me=k(ct);C.includes(Me)||(C.push(Me),x[Me]=[],Me&&x[Me].push(Object.assign(Kt(Me,ct),{id:Me,isGroupHeader:!0,isSelectable:P}))),x[Me].push(Object.assign({isGroupItem:!!Me},ct))});const Se=[];return z(C).forEach(ct=>{Se.push(...x[ct])}),Se}function tc(){if(T){JSON.stringify(g)!==JSON.stringify(At)&&Fr()&&h("select",g);return}(!At||JSON.stringify(g[I])!==JSON.stringify(At[I]))&&h("select",g)}function nc(){A||N?Ki():v&&v.blur()}function ic(){g&&(Array.isArray(g)?n(2,g=[...g]):n(2,g=[g]))}function sc(){g&&n(2,g=null)}function rc(){S.length!==0&&(n(1,A=!0),n(5,N=!0),fe?Ql():(n(5,N=!0),T&&n(30,Q=void 0)))}oa(async()=>{n(77,At=g),n(78,Gi=S),n(79,zi=A),n(80,qi=T)});function Fr(){let u=!0;if(g){const C=[],x=[];g.forEach(Se=>{C.includes(Se[I])?u=!1:(C.push(Se[I]),x.push(Se))}),u||n(2,g=x)}return u}function jr(u){let C=u?u[I]:g[I];return R.find(x=>x[I]===C)}function oc(u){!u||u.length===0||u.some(C=>typeof C!="object")||!g||(T?g.some(C=>!C||!C[I]):!g[I])||(Array.isArray(g)?n(2,g=g.map(C=>jr(C)||C)):n(2,g=jr()||g))}function Hr(u){const{detail:C}=u,x=g[C?C.i:g.length-1];g.length===1?n(2,g=void 0):n(2,g=g.filter(Se=>Se!==x)),h("clear",x)}function ac(u){if(!!A)switch(u.key){case"ArrowDown":u.preventDefault(),n(5,N=!0),n(30,Q=void 0);break;case"ArrowUp":u.preventDefault(),n(5,N=!0),n(30,Q=void 0);break;case"Tab":N||n(1,A=!1);break;case"Backspace":if(!T||S.length>0)return;if(T&&g&&g.length>0){if(Hr(Q!==void 0?Q:g.length-1),Q===0||Q===void 0)break;n(30,Q=g.length>Q?Q-1:void 0)}break;case"ArrowLeft":if(!T||S.length>0)return;Q===void 0?n(30,Q=g.length-1):g.length>Q&&Q!==0&&n(30,Q-=1);break;case"ArrowRight":if(!T||S.length>0||Q===void 0)return;Q===g.length-1?n(30,Q=void 0):Q<g.length-1&&n(30,Q+=1);break}}function Ki(){n(1,A=!0),v&&v.focus()}function lc(u){if(!m)return;const C=u.path&&u.path.length>0?u.path[0]:u.target;m.contains(C)||m.contains(u.relatedTarget)||(n(1,A=!1),n(5,N=!1),n(30,Q=void 0),v&&v.blur())}function cc(){Y||(n(1,A=!0),n(5,N=!N))}function uc(){n(2,g=void 0),n(5,N=!1),h("clear",g),Ki()}Ms(()=>{A&&v&&v.focus()});function hc(u){const{detail:C}=u;if(C){n(3,S="");const x=Object.assign({},C);(!x.isGroupHeader||x.isSelectable)&&(T?n(2,g=g?g.concat([x]):[x]):n(2,g=x),n(2,g),setTimeout(()=>{n(5,N=!1),n(30,Q=void 0)}))}}function fc(u){const{detail:C}=u;T?(n(2,g=g||[]),n(2,g=[...g,at(C)])):n(2,g=at(C)),h("itemCreated",C),n(3,S=""),n(5,N=!1),n(30,Q=void 0)}function dc(){n(3,S=""),n(5,N=!1)}let{ariaValues:xi=u=>`Option ${u}, selected.`}=e,{ariaListOpen:Ji=(u,C)=>`You are currently focused on option ${u}. There are ${C} results available.`}=e,{ariaFocused:Xi=()=>"Select is focused, type to refine list, press down to open the menu."}=e;function gc(){let u;return T&&g.length>0?u=g.map(C=>Ke(C)).join(", "):u=Ke(g),xi(u)}function mc(){if(!A||!i||i.length===0)return"";let u=i[Pn];if(N&&u){let C=Ke(u),x=i?i.length:0;return Ji(C,x)}else return Xi()}function pc(u){Be[u?"unshift":"push"](()=>{v=u,n(6,v)})}function _c(){S=this.value,n(3,S)}function yc(u){Pn=u,n(28,Pn)}function vc(u){Be[u?"unshift":"push"](()=>{m=u,n(0,m)})}return t.$$set=u=>{"id"in u&&n(46,f=u.id),"container"in u&&n(0,m=u.container),"input"in u&&n(6,v=u.input),"isMulti"in u&&n(7,T=u.isMulti),"multiFullItemClearable"in u&&n(8,V=u.multiFullItemClearable),"isDisabled"in u&&n(9,Y=u.isDisabled),"isCreatable"in u&&n(47,F=u.isCreatable),"isFocused"in u&&n(1,A=u.isFocused),"value"in u&&n(2,g=u.value),"filterText"in u&&n(3,S=u.filterText),"placeholder"in u&&n(48,y=u.placeholder),"placeholderAlwaysShow"in u&&n(49,K=u.placeholderAlwaysShow),"items"in u&&n(50,R=u.items),"itemFilter"in u&&n(51,M=u.itemFilter),"groupBy"in u&&n(52,k=u.groupBy),"groupFilter"in u&&n(53,z=u.groupFilter),"isGroupHeaderSelectable"in u&&n(54,P=u.isGroupHeaderSelectable),"getGroupHeaderLabel"in u&&n(55,j=u.getGroupHeaderLabel),"labelIdentifier"in u&&n(56,W=u.labelIdentifier),"getOptionLabel"in u&&n(57,p=u.getOptionLabel),"optionIdentifier"in u&&n(58,I=u.optionIdentifier),"loadOptions"in u&&n(59,fe=u.loadOptions),"hasError"in u&&n(10,Te=u.hasError),"containerStyles"in u&&n(11,qe=u.containerStyles),"getSelectionLabel"in u&&n(12,Ke=u.getSelectionLabel),"createGroupHeaderItem"in u&&n(60,Kt=u.createGroupHeaderItem),"createItem"in u&&n(61,at=u.createItem),"isSearchable"in u&&n(13,kt=u.isSearchable),"inputStyles"in u&&n(14,Ln=u.inputStyles),"isClearable"in u&&n(15,xt=u.isClearable),"isWaiting"in u&&n(4,lt=u.isWaiting),"listPlacement"in u&&n(63,_=u.listPlacement),"listOpen"in u&&n(5,N=u.listOpen),"isVirtualList"in u&&n(64,Ee=u.isVirtualList),"loadOptionsInterval"in u&&n(65,Jt=u.loadOptionsInterval),"noOptionsMessage"in u&&n(66,Mi=u.noOptionsMessage),"hideEmptyState"in u&&n(67,Ui=u.hideEmptyState),"inputAttributes"in u&&n(16,Dn=u.inputAttributes),"listAutoWidth"in u&&n(68,Fi=u.listAutoWidth),"itemHeight"in u&&n(69,ji=u.itemHeight),"Icon"in u&&n(17,kr=u.Icon),"iconProps"in u&&n(18,Ar=u.iconProps),"showChevron"in u&&n(19,Cr=u.showChevron),"showIndicator"in u&&n(20,Or=u.showIndicator),"containerClasses"in u&&n(21,Rr=u.containerClasses),"indicatorSvg"in u&&n(22,Lr=u.indicatorSvg),"listOffset"in u&&n(70,Hi=u.listOffset),"ClearIcon"in u&&n(23,Dr=u.ClearIcon),"Item"in u&&n(71,Bi=u.Item),"List"in u&&n(24,Pr=u.List),"Selection"in u&&n(25,Nr=u.Selection),"MultiSelection"in u&&n(26,Mr=u.MultiSelection),"VirtualList"in u&&n(72,Vi=u.VirtualList),"selectedValue"in u&&n(73,Wi=u.selectedValue),"ariaValues"in u&&n(74,xi=u.ariaValues),"ariaListOpen"in u&&n(75,Ji=u.ariaListOpen),"ariaFocused"in u&&n(76,Xi=u.ariaFocused)},t.$$.update=()=>{t.$$.dirty[0]&140|t.$$.dirty[1]&405340160&&n(81,i=Yl({loadOptions:fe,filterText:S,items:R,value:g,isMulti:T,optionIdentifier:I,groupBy:k,isCreatable:F})),t.$$.dirty[2]&2048&&Wi&&console.warn("selectedValue is no longer used. Please use value instead."),t.$$.dirty[1]&524288&&oc(R),t.$$.dirty[0]&4&&g&&Zl(),t.$$.dirty[0]&73728&&(Dn||!kt)&&$l(),t.$$.dirty[0]&128|t.$$.dirty[2]&262144&&(T&&ic(),qi&&!T&&sc()),t.$$.dirty[0]&132&&T&&g&&g.length>1&&Fr(),t.$$.dirty[0]&4&&g&&tc(),t.$$.dirty[0]&132|t.$$.dirty[2]&32768&&!g&&T&&At&&h("select",g),t.$$.dirty[0]&2|t.$$.dirty[2]&131072&&A!==zi&&nc(),t.$$.dirty[0]&8|t.$$.dirty[2]&65536&&S!==Gi&&rc(),t.$$.dirty[0]&12&&n(29,s=g&&S.length===0),t.$$.dirty[0]&536904208&&n(37,r=s&&xt&&!Y&&!lt),t.$$.dirty[0]&132|t.$$.dirty[1]&393216&&n(36,o=K&&T?y:g?"":y),t.$$.dirty[0]&132&&n(35,a=T&&g&&g.length>0),t.$$.dirty[0]&141|t.$$.dirty[1]&218103808|t.$$.dirty[2]&526326&&n(34,l={Item:Bi,filterText:S,optionIdentifier:I,noOptionsMessage:Mi,hideEmptyState:Ui,isVirtualList:Ee,VirtualList:Vi,value:g,isMulti:T,getGroupHeaderLabel:j,items:i,itemHeight:ji,getOptionLabel:p,listPlacement:_,parent:m,listAutoWidth:Fi,listOffset:Hi}),t.$$.dirty[0]&132&&n(33,c=g?gc():""),t.$$.dirty[0]&268435490|t.$$.dirty[2]&524288&&n(32,d=mc())},[m,A,g,S,lt,N,v,T,V,Y,Te,qe,Ke,kt,Ln,xt,Dn,kr,Ar,Cr,Or,Rr,Lr,Dr,Pr,Nr,Mr,uc,Pn,s,Q,Ct,d,c,l,a,o,r,Hr,ac,Ki,lc,cc,hc,fc,dc,f,F,y,K,R,M,k,z,P,j,W,p,I,fe,Kt,at,Ni,_,Ee,Jt,Mi,Ui,Fi,ji,Hi,Bi,Vi,Wi,xi,Ji,Xi,At,Gi,zi,qi,i,pc,_c,yc,vc]}class om extends st{constructor(e){super();it(this,e,yu,_u,ze,{id:46,container:0,input:6,isMulti:7,multiFullItemClearable:8,isDisabled:9,isCreatable:47,isFocused:1,value:2,filterText:3,placeholder:48,placeholderAlwaysShow:49,items:50,itemFilter:51,groupBy:52,groupFilter:53,isGroupHeaderSelectable:54,getGroupHeaderLabel:55,labelIdentifier:56,getOptionLabel:57,optionIdentifier:58,loadOptions:59,hasError:10,containerStyles:11,getSelectionLabel:12,createGroupHeaderItem:60,createItem:61,getFilteredItems:62,isSearchable:13,inputStyles:14,isClearable:15,isWaiting:4,listPlacement:63,listOpen:5,isVirtualList:64,loadOptionsInterval:65,noOptionsMessage:66,hideEmptyState:67,inputAttributes:16,listAutoWidth:68,itemHeight:69,Icon:17,iconProps:18,showChevron:19,showIndicator:20,containerClasses:21,indicatorSvg:22,listOffset:70,ClearIcon:23,Item:71,List:24,Selection:25,MultiSelection:26,VirtualList:72,selectedValue:73,handleClear:27,ariaValues:74,ariaListOpen:75,ariaFocused:76},null,[-1,-1,-1,-1])}get getFilteredItems(){return this.$$.ctx[62]}get handleClear(){return this.$$.ctx[27]}}/**
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
 */const fa=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vu=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},da={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(f=64)),i.push(n[d],n[h],n[f],n[m])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw Error();const f=r<<2|a>>4;if(i.push(f),c!==64){const m=a<<4&240|c>>2;if(i.push(m),h!==64){const v=c<<6&192|h;i.push(v)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ga=function(t){const e=fa(t);return da.encodeByteArray(e,!0)},Iu=function(t){try{return da.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class wu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function me(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Eu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function bu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Su(){const t=me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ku(){return typeof indexedDB=="object"}function Au(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Cu="FirebaseError";class bt extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=Cu,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pn.prototype.create)}}class pn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Ou(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new bt(s,a,i)}}function Ou(t,e){return t.replace(Ru,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Ru=/\{\$([^}]+)}/g;function Lu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(po(r)&&po(o)){if(!Xn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function po(t){return t!==null&&typeof t=="object"}/**
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
 */function _n(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Qt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Zt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Du(t,e){const n=new Pu(t,e);return n.subscribe.bind(n)}class Pu{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Nu(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Qi),s.error===void 0&&(s.error=Qi),s.complete===void 0&&(s.complete=Qi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nu(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qi(){}/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class pt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ut="[DEFAULT]";/**
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
 */class Mu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new wu;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fu(e))try{this.getOrInitializeService({instanceIdentifier:ut})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ut){return this.instances.has(e)}getOptions(e=ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Uu(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ut){return this.component?this.component.multipleInstances?e:ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uu(t){return t===ut?void 0:t}function Fu(t){return t.instantiationMode==="EAGER"}/**
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
 */class ju{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Mu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const Hu={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Bu=J.INFO,Vu={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Wu=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Vu[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fs{constructor(e){this.name=e,this._logLevel=Bu,this._logHandler=Wu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}function Gu(t){return Array.prototype.slice.call(t)}function ma(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function js(t,e,n){var i,s=new Promise(function(r,o){i=t[e].apply(t,n),ma(i).then(r,o)});return s.request=i,s}function zu(t,e,n){var i=js(t,e,n);return i.then(function(s){if(!!s)return new on(s,i.request)})}function Ht(t,e,n){n.forEach(function(i){Object.defineProperty(t.prototype,i,{get:function(){return this[e][i]},set:function(s){this[e][i]=s}})})}function Hs(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return js(this[e],s,arguments)})})}function di(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return this[e][s].apply(this[e],arguments)})})}function pa(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return zu(this[e],s,arguments)})})}function Tt(t){this._index=t}Ht(Tt,"_index",["name","keyPath","multiEntry","unique"]);Hs(Tt,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);pa(Tt,"_index",IDBIndex,["openCursor","openKeyCursor"]);function on(t,e){this._cursor=t,this._request=e}Ht(on,"_cursor",["direction","key","primaryKey","value"]);Hs(on,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(on.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),ma(e._request).then(function(i){if(!!i)return new on(i,e._request)})})})});function Ne(t){this._store=t}Ne.prototype.createIndex=function(){return new Tt(this._store.createIndex.apply(this._store,arguments))};Ne.prototype.index=function(){return new Tt(this._store.index.apply(this._store,arguments))};Ht(Ne,"_store",["name","keyPath","indexNames","autoIncrement"]);Hs(Ne,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);pa(Ne,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);di(Ne,"_store",IDBObjectStore,["deleteIndex"]);function yn(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}yn.prototype.objectStore=function(){return new Ne(this._tx.objectStore.apply(this._tx,arguments))};Ht(yn,"_tx",["objectStoreNames","mode"]);di(yn,"_tx",IDBTransaction,["abort"]);function gi(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new yn(n)}gi.prototype.createObjectStore=function(){return new Ne(this._db.createObjectStore.apply(this._db,arguments))};Ht(gi,"_db",["name","version","objectStoreNames"]);di(gi,"_db",IDBDatabase,["deleteObjectStore","close"]);function mi(t){this._db=t}mi.prototype.transaction=function(){return new yn(this._db.transaction.apply(this._db,arguments))};Ht(mi,"_db",["name","version","objectStoreNames"]);di(mi,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[Ne,Tt].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=Gu(arguments),i=n[n.length-1],s=this._store||this._index,r=s[t].apply(s,n.slice(0,-1));r.onsuccess=function(){i(r.result)}})})});[Tt,Ne].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var i=this,s=[];return new Promise(function(r){i.iterateCursor(e,function(o){if(!o){r(s);return}if(s.push(o.value),n!==void 0&&s.length==n){r(s);return}o.continue()})})})});function qu(t,e,n){var i=js(indexedDB,"open",[t,e]),s=i.request;return s&&(s.onupgradeneeded=function(r){n&&n(new gi(s.result,r.oldVersion,s.transaction))}),i.then(function(r){return new mi(r)})}/**
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
 */class Ku{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xu(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function xu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ys="@firebase/app",_o="0.7.18";/**
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
 */const Bs=new Fs("@firebase/app"),Ju="@firebase/app-compat",Xu="@firebase/analytics-compat",Yu="@firebase/analytics",Qu="@firebase/app-check-compat",Zu="@firebase/app-check",$u="@firebase/auth",eh="@firebase/auth-compat",th="@firebase/database",nh="@firebase/database-compat",ih="@firebase/functions",sh="@firebase/functions-compat",rh="@firebase/installations",oh="@firebase/installations-compat",ah="@firebase/messaging",lh="@firebase/messaging-compat",ch="@firebase/performance",uh="@firebase/performance-compat",hh="@firebase/remote-config",fh="@firebase/remote-config-compat",dh="@firebase/storage",gh="@firebase/storage-compat",mh="@firebase/firestore",ph="@firebase/firestore-compat",_h="firebase",yh="9.6.8";/**
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
 */const _a="[DEFAULT]",vh={[ys]:"fire-core",[Ju]:"fire-core-compat",[Yu]:"fire-analytics",[Xu]:"fire-analytics-compat",[Zu]:"fire-app-check",[Qu]:"fire-app-check-compat",[$u]:"fire-auth",[eh]:"fire-auth-compat",[th]:"fire-rtdb",[nh]:"fire-rtdb-compat",[ih]:"fire-fn",[sh]:"fire-fn-compat",[rh]:"fire-iid",[oh]:"fire-iid-compat",[ah]:"fire-fcm",[lh]:"fire-fcm-compat",[ch]:"fire-perf",[uh]:"fire-perf-compat",[hh]:"fire-rc",[fh]:"fire-rc-compat",[dh]:"fire-gcs",[gh]:"fire-gcs-compat",[mh]:"fire-fst",[ph]:"fire-fst-compat","fire-js":"fire-js",[_h]:"fire-js-all"};/**
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
 */const Yn=new Map,vs=new Map;function Ih(t,e){try{t.container.addComponent(e)}catch(n){Bs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ft(t){const e=t.name;if(vs.has(e))return Bs.debug(`There were multiple attempts to register component ${e}.`),!1;vs.set(e,t);for(const n of Yn.values())Ih(n,t);return!0}function ya(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const wh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},tt=new pn("app","Firebase",wh);/**
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
 */class Eh{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tt.create("app-deleted",{appName:this._name})}}/**
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
 */const vn=yh;function am(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:_a,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw tt.create("bad-app-name",{appName:String(i)});const s=Yn.get(i);if(s){if(Xn(t,s.options)&&Xn(n,s.config))return s;throw tt.create("duplicate-app",{appName:i})}const r=new ju(i);for(const a of vs.values())r.addComponent(a);const o=new Eh(t,n,r);return Yn.set(i,o),o}function bh(t=_a){const e=Yn.get(t);if(!e)throw tt.create("no-app",{appName:t});return e}function Ze(t,e,n){var i;let s=(i=vh[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bs.warn(a.join(" "));return}Ft(new pt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Th="firebase-heartbeat-database",Sh=1,_t="firebase-heartbeat-store";let Zi=null;function Vs(){return Zi||(Zi=qu(Th,Sh,t=>{switch(t.oldVersion){case 0:t.createObjectStore(_t)}}).catch(t=>{throw tt.create("storage-open",{originalErrorMessage:t.message})})),Zi}async function kh(t){try{return(await Vs()).transaction(_t).objectStore(_t).get(Ws(t))}catch(e){throw tt.create("storage-get",{originalErrorMessage:e.message})}}async function $i(t,e){try{const i=(await Vs()).transaction(_t,"readwrite");return await i.objectStore(_t).put(e,Ws(t)),i.complete}catch(n){throw tt.create("storage-set",{originalErrorMessage:n.message})}}async function Ah(t){try{const n=(await Vs()).transaction(_t,"readwrite");return await n.objectStore(_t).delete(Ws(t)),n.complete}catch(e){throw tt.create("storage-delete",{originalErrorMessage:e.message})}}function Ws(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ch=1024,Oh=30*24*60*60*1e3;class Rh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ph(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(s=>s.date===i))return this._heartbeatsCache.push({date:i,userAgent:n}),this._heartbeatsCache=this._heartbeatsCache.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Oh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:n}=Dh(this._heartbeatsCache),i=ga(JSON.stringify({version:2,heartbeats:e}));return n.length>0?(this._heartbeatsCache=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),i}}function Lh(){return new Date().toISOString().substring(0,10)}function Dh(t,e=Ch){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.userAgent===s.userAgent);if(r){if(r.dates.push(s.date),yo(n)>e){r.dates.pop();break}}else if(n.push({userAgent:s.userAgent,dates:[s.date]}),yo(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Ph{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ku()?Au().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kh(this.app);return(n==null?void 0:n.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return $i(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return $i(this.app,{heartbeats:[...i,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return $i(this.app,{heartbeats:i.filter(s=>!e.includes(s))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return Ah(this.app)}}function yo(t){return ga(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Nh(t){Ft(new pt("platform-logger",e=>new Ku(e),"PRIVATE")),Ft(new pt("heartbeat",e=>new Rh(e),"PRIVATE")),Ze(ys,_o,t),Ze(ys,_o,"esm2017"),Ze("fire-js","")}Nh("");var Mh="firebase",Uh="9.6.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze(Mh,Uh,"app");var Fh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},b,Gs=Gs||{},L=Fh||self;function Qn(){}function Is(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function In(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function jh(t){return Object.prototype.hasOwnProperty.call(t,es)&&t[es]||(t[es]=++Hh)}var es="closure_uid_"+(1e9*Math.random()>>>0),Hh=0;function Bh(t,e,n){return t.call.apply(t.bind,arguments)}function Vh(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ae(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ae=Bh:ae=Vh,ae.apply(null,arguments)}function Un(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function he(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function rt(){this.s=this.s,this.o=this.o}var Wh=0,Gh={};rt.prototype.s=!1;rt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Wh!=0)){var t=jh(this);delete Gh[t]}};rt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const va=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ia=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function zh(t){e:{var e=Uf;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function vo(t){return Array.prototype.concat.apply([],arguments)}function zs(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Zn(t){return/^[\s\xa0]*$/.test(t)}var Io=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ye(t,e){return t.indexOf(e)!=-1}function ts(t,e){return t<e?-1:t>e?1:0}var ve;e:{var wo=L.navigator;if(wo){var Eo=wo.userAgent;if(Eo){ve=Eo;break e}}ve=""}function qs(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function wa(t){const e={};for(const n in t)e[n]=t[n];return e}var bo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ea(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<bo.length;r++)n=bo[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ks(t){return Ks[" "](t),t}Ks[" "]=Qn;function qh(t){var e=Jh;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Kh=ye(ve,"Opera"),an=ye(ve,"Trident")||ye(ve,"MSIE"),ba=ye(ve,"Edge"),ws=ba||an,Ta=ye(ve,"Gecko")&&!(ye(ve.toLowerCase(),"webkit")&&!ye(ve,"Edge"))&&!(ye(ve,"Trident")||ye(ve,"MSIE"))&&!ye(ve,"Edge"),xh=ye(ve.toLowerCase(),"webkit")&&!ye(ve,"Edge");function Sa(){var t=L.document;return t?t.documentMode:void 0}var Es;e:{var ns="",is=function(){var t=ve;if(Ta)return/rv:([^\);]+)(\)|;)/.exec(t);if(ba)return/Edge\/([\d\.]+)/.exec(t);if(an)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(xh)return/WebKit\/(\S+)/.exec(t);if(Kh)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(is&&(ns=is?is[1]:""),an){var ss=Sa();if(ss!=null&&ss>parseFloat(ns)){Es=String(ss);break e}}Es=ns}var Jh={};function Xh(){return qh(function(){let t=0;const e=Io(String(Es)).split("."),n=Io("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=ts(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||ts(s[2].length==0,r[2].length==0)||ts(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}L.document&&an&&Sa();var Yh=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",Qn,e),L.removeEventListener("test",Qn,e)}catch{}return t}();function de(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};function ln(t,e){if(de.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ta){e:{try{Ks(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Qh[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ln.Z.h.call(this)}}he(ln,de);var Qh={2:"touch",3:"pen",4:"mouse"};ln.prototype.h=function(){ln.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),Zh=0;function $h(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++Zh,this.ca=this.fa=!1}function pi(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function _i(t){this.src=t,this.g={},this.h=0}_i.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Ts(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new $h(e,this.src,r,!!i,s),e.fa=n,t.push(e)),e};function bs(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=va(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(pi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ts(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}var xs="closure_lm_"+(1e6*Math.random()|0),rs={};function ka(t,e,n,i,s){if(i&&i.once)return Ca(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ka(t,e[r],n,i,s);return null}return n=Ys(n),t&&t[wn]?t.N(e,n,In(i)?!!i.capture:!!i,s):Aa(t,e,n,!1,i,s)}function Aa(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=In(s)?!!s.capture:!!s,a=Xs(t);if(a||(t[xs]=a=new _i(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=ef(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Yh||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Ra(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ef(){function t(n){return e.call(t.src,t.listener,n)}var e=tf;return t}function Ca(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ca(t,e[r],n,i,s);return null}return n=Ys(n),t&&t[wn]?t.O(e,n,In(i)?!!i.capture:!!i,s):Aa(t,e,n,!0,i,s)}function Oa(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Oa(t,e[r],n,i,s);else i=In(i)?!!i.capture:!!i,n=Ys(n),t&&t[wn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Ts(r,n,i,s),-1<n&&(pi(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Xs(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ts(e,n,i,s)),(n=-1<t?e[t]:null)&&Js(n))}function Js(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[wn])bs(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Ra(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Xs(e))?(bs(n,t),n.h==0&&(n.src=null,e[xs]=null)):pi(t)}}}function Ra(t){return t in rs?rs[t]:rs[t]="on"+t}function tf(t,e){if(t.ca)t=!0;else{e=new ln(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Js(t),t=n.call(i,e)}return t}function Xs(t){return t=t[xs],t instanceof _i?t:null}var os="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ys(t){return typeof t=="function"?t:(t[os]||(t[os]=function(e){return t.handleEvent(e)}),t[os])}function se(){rt.call(this),this.i=new _i(this),this.P=this,this.I=null}he(se,rt);se.prototype[wn]=!0;se.prototype.removeEventListener=function(t,e,n,i){Oa(this,t,e,n,i)};function le(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new de(e,t);else if(e instanceof de)e.target=e.target||t;else{var s=e;e=new de(i,t),Ea(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Fn(o,i,!0,e)&&s}if(o=e.g=t,s=Fn(o,i,!0,e)&&s,s=Fn(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Fn(o,i,!1,e)&&s}se.prototype.M=function(){if(se.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)pi(n[i]);delete t.g[e],t.h--}}this.I=null};se.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};se.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Fn(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&bs(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Qs=L.JSON.stringify;function nf(){var t=Da;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class sf{constructor(){this.h=this.g=null}add(e,n){const i=La.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var La=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new rf,t=>t.reset());class rf{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function of(t){L.setTimeout(()=>{throw t},0)}function Zs(t,e){Ss||af(),ks||(Ss(),ks=!0),Da.add(t,e)}var Ss;function af(){var t=L.Promise.resolve(void 0);Ss=function(){t.then(lf)}}var ks=!1,Da=new sf;function lf(){for(var t;t=nf();){try{t.h.call(t.g)}catch(n){of(n)}var e=La;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ks=!1}function yi(t,e){se.call(this),this.h=t||1,this.g=e||L,this.j=ae(this.kb,this),this.l=Date.now()}he(yi,se);b=yi.prototype;b.da=!1;b.S=null;b.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),le(this,"tick"),this.da&&($s(this),this.start()))}};b.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $s(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}b.M=function(){yi.Z.M.call(this),$s(this),delete this.g};function er(t,e,n){if(typeof t=="function")n&&(t=ae(t,n));else if(t&&typeof t.handleEvent=="function")t=ae(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function Pa(t){t.g=er(()=>{t.g=null,t.i&&(t.i=!1,Pa(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class cf extends rt{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Pa(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cn(t){rt.call(this),this.h=t,this.g={}}he(cn,rt);var To=[];function Na(t,e,n,i){Array.isArray(n)||(n&&(To[0]=n.toString()),n=To);for(var s=0;s<n.length;s++){var r=ka(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ma(t){qs(t.g,function(e,n){this.g.hasOwnProperty(n)&&Js(e)},t),t.g={}}cn.prototype.M=function(){cn.Z.M.call(this),Ma(this)};cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vi(){this.g=!0}vi.prototype.Aa=function(){this.g=!1};function uf(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var d=c[0];c=c[1];var h=d.split("_");o=2<=h.length&&h[1]=="type"?o+(d+"="+c+"&"):o+(d+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function hf(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Lt(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+df(t,n)+(i?" "+i:"")})}function ff(t,e){t.info(function(){return"TIMEOUT: "+e})}vi.prototype.info=function(){};function df(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Qs(n)}catch{return e}}var Bt={},So=null;function tr(){return So=So||new se}Bt.Ma="serverreachability";function Ua(t){de.call(this,Bt.Ma,t)}he(Ua,de);function un(t){const e=tr();le(e,new Ua(e,t))}Bt.STAT_EVENT="statevent";function Fa(t,e){de.call(this,Bt.STAT_EVENT,t),this.stat=e}he(Fa,de);function Ie(t){const e=tr();le(e,new Fa(e,t))}Bt.Na="timingevent";function ja(t,e){de.call(this,Bt.Na,t),this.size=e}he(ja,de);function En(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var nr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},gf={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ir(){}ir.prototype.h=null;function ko(t){return t.h||(t.h=t.i())}var Ii={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function sr(){de.call(this,"d")}he(sr,de);function rr(){de.call(this,"c")}he(rr,de);var As;function wi(){}he(wi,ir);wi.prototype.g=function(){return new XMLHttpRequest};wi.prototype.i=function(){return{}};As=new wi;function bn(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new cn(this),this.P=mf,t=ws?125:void 0,this.W=new yi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ha}function Ha(){this.i=null,this.g="",this.h=!1}var mf=45e3,Cs={},$n={};b=bn.prototype;b.setTimeout=function(t){this.P=t};function Os(t,e,n){t.K=1,t.v=bi(Ve(e)),t.s=n,t.U=!0,Ba(t,null)}function Ba(t,e){t.F=Date.now(),Tn(t),t.A=Ve(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),xa(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Ha,t.g=dl(t.l,n?e:null,!t.s),0<t.O&&(t.L=new cf(ae(t.Ia,t,t.g),t.O)),Na(t.V,t.g,"readystatechange",t.gb),e=t.H?wa(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),un(1),uf(t.j,t.u,t.A,t.m,t.X,t.s)}b.gb=function(t){t=t.target;const e=this.L;e&&Ue(t)==3?e.l():this.Ia(t)};b.Ia=function(t){try{if(t==this.g)e:{const d=Ue(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>d)&&(d!=3||ws||this.g&&(this.h.h||this.g.ga()||Ro(this.g)))){this.I||d!=4||e==7||(e==8||0>=h?un(3):un(2)),Ei(this);var n=this.g.ba();this.N=n;t:if(Va(this)){var i=Ro(this.g);t="";var s=i.length,r=Ue(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ft(this),tn(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,hf(this.j,this.u,this.A,this.m,this.X,d,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zn(a)){var c=a;break t}}c=null}if(n=c)Lt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Rs(this,n);else{this.i=!1,this.o=3,Ie(12),ft(this),tn(this);break e}}this.U?(Wa(this,d,o),ws&&this.i&&d==3&&(Na(this.V,this.W,"tick",this.fb),this.W.start())):(Lt(this.j,this.m,o,null),Rs(this,o)),d==4&&ft(this),this.i&&!this.I&&(d==4?cl(this.l,this):(this.i=!1,Tn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ie(12)):(this.o=0,Ie(13)),ft(this),tn(this)}}}catch{}finally{}};function Va(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Wa(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=pf(t,n),s==$n){e==4&&(t.o=4,Ie(14),i=!1),Lt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Cs){t.o=4,Ie(15),Lt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Lt(t.j,t.m,s,null),Rs(t,s);Va(t)&&s!=$n&&s!=Cs&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ie(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gr(e),e.L=!0,Ie(11))):(Lt(t.j,t.m,n,"[Invalid Chunked Response]"),ft(t),tn(t))}b.fb=function(){if(this.g){var t=Ue(this.g),e=this.g.ga();this.C<e.length&&(Ei(this),Wa(this,t,e),this.i&&t!=4&&Tn(this))}};function pf(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?$n:(n=Number(e.substring(n,i)),isNaN(n)?Cs:(i+=1,i+n>e.length?$n:(e=e.substr(i,n),t.C=i+n,e)))}b.cancel=function(){this.I=!0,ft(this)};function Tn(t){t.Y=Date.now()+t.P,Ga(t,t.P)}function Ga(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=En(ae(t.eb,t),e)}function Ei(t){t.B&&(L.clearTimeout(t.B),t.B=null)}b.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ff(this.j,this.A),this.K!=2&&(un(3),Ie(17)),ft(this),this.o=2,tn(this)):Ga(this,this.Y-t)};function tn(t){t.l.G==0||t.I||cl(t.l,t)}function ft(t){Ei(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,$s(t.W),Ma(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Rs(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ls(n.i,t))){if(n.I=t.N,!t.J&&Ls(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ii(n),Ai(n);else break e;dr(n),Ie(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=En(ae(n.ab,n),6e3));if(1>=Ya(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else dt(n,11)}else if((t.J||n.g==t)&&ii(n),!Zn(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const d=c[3];d!=null&&(n.ma=d,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=i.i;!r.g&&(ye(v,"spdy")||ye(v,"quic")||ye(v,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(lr(r,r.h),r.h=null))}if(i.D){const T=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(i.sa=T,Z(i.F,i.D,T))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=fl(i,i.H?i.la:null,i.W),o.J){Qa(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(Ei(a),Tn(a)),i.g=o}else al(i);0<n.l.length&&Ci(n)}else c[0]!="stop"&&c[0]!="close"||dt(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?dt(n,7):fr(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}un(4)}catch{}}function _f(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Is(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function or(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Is(t)||typeof t=="string")Ia(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Is(t)||typeof t=="string"){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=_f(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function Vt(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Vt)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}b=Vt.prototype;b.R=function(){ar(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};b.T=function(){return ar(this),this.g.concat()};function ar(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];yt(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)i=t.g[e],yt(s,i)||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}b.get=function(t,e){return yt(this.h,t)?this.h[t]:e};b.set=function(t,e){yt(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};b.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};function yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var za=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function yf(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function vt(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof vt){this.g=e!==void 0?e:t.g,ei(this,t.j),this.s=t.s,ti(this,t.i),ni(this,t.m),this.l=t.l,e=t.h;var n=new hn;n.i=e.i,e.g&&(n.g=new Vt(e.g),n.h=e.h),Ao(this,n),this.o=t.o}else t&&(n=String(t).match(za))?(this.g=!!e,ei(this,n[1]||"",!0),this.s=nn(n[2]||""),ti(this,n[3]||"",!0),ni(this,n[4]),this.l=nn(n[5]||"",!0),Ao(this,n[6]||"",!0),this.o=nn(n[7]||"")):(this.g=!!e,this.h=new hn(null,this.g))}vt.prototype.toString=function(){var t=[],e=this.j;e&&t.push($t(e,Co,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push($t(e,Co,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push($t(n,n.charAt(0)=="/"?bf:Ef,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$t(n,Sf)),t.join("")};function Ve(t){return new vt(t)}function ei(t,e,n){t.j=n?nn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ti(t,e,n){t.i=n?nn(e,!0):e}function ni(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ao(t,e,n){e instanceof hn?(t.h=e,kf(t.h,t.g)):(n||(e=$t(e,Tf)),t.h=new hn(e,t.g))}function Z(t,e,n){t.h.set(e,n)}function bi(t){return Z(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function vf(t){return t instanceof vt?Ve(t):new vt(t,void 0)}function If(t,e,n,i){var s=new vt(null,void 0);return t&&ei(s,t),e&&ti(s,e),n&&ni(s,n),i&&(s.l=i),s}function nn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $t(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,wf),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function wf(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Co=/[#\/\?@]/g,Ef=/[#\?:]/g,bf=/[#\?]/g,Tf=/[#\?@]/g,Sf=/#/g;function hn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ot(t){t.g||(t.g=new Vt,t.h=0,t.i&&yf(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}b=hn.prototype;b.add=function(t,e){ot(this),this.i=null,t=Wt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function qa(t,e){ot(t),e=Wt(t,e),yt(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,yt(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ar(t)))}function Ka(t,e){return ot(t),e=Wt(t,e),yt(t.g.h,e)}b.forEach=function(t,e){ot(this),this.g.forEach(function(n,i){Ia(n,function(s){t.call(e,s,i,this)},this)},this)};b.T=function(){ot(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n};b.R=function(t){ot(this);var e=[];if(typeof t=="string")Ka(this,t)&&(e=vo(e,this.g.get(Wt(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=vo(e,t[n])}return e};b.set=function(t,e){return ot(this),this.i=null,t=Wt(this,t),Ka(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};b.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function xa(t,e,n){qa(t,e),0<n.length&&(t.i=null,t.g.set(Wt(t,e),zs(n)),t.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;i[r]!==""&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function Wt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function kf(t,e){e&&!t.j&&(ot(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(qa(this,i),xa(this,s,n))},t)),t.j=e}var Af=class{constructor(t,e){this.h=t,this.g=e}};function Ja(t){this.l=t||Cf,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ea&&L.g.Ea()&&L.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Cf=10;function Xa(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ya(t){return t.h?1:t.g?t.g.size:0}function Ls(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function lr(t,e){t.g?t.g.add(e):t.h=e}function Qa(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ja.prototype.cancel=function(){if(this.i=Za(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Za(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return zs(t.i)}function cr(){}cr.prototype.stringify=function(t){return L.JSON.stringify(t,void 0)};cr.prototype.parse=function(t){return L.JSON.parse(t,void 0)};function Of(){this.g=new cr}function Rf(t,e,n){const i=n||"";try{or(t,function(s,r){let o=s;In(s)&&(o=Qs(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function Lf(t,e){const n=new vi;if(L.Image){const i=new Image;i.onload=Un(jn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Un(jn,n,i,"TestLoadImage: error",!1,e),i.onabort=Un(jn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Un(jn,n,i,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function jn(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Ti(t){this.l=t.$b||null,this.j=t.ib||!1}he(Ti,ir);Ti.prototype.g=function(){return new Si(this.l,this.j)};Ti.prototype.i=function(t){return function(){return t}}({});function Si(t,e){se.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ur,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}he(Si,se);var ur=0;b=Si.prototype;b.open=function(t,e){if(this.readyState!=ur)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,fn(this)};b.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||L).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=ur};b.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,fn(this)),this.g&&(this.readyState=3,fn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof L.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$a(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function $a(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}b.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sn(this):fn(this),this.readyState==3&&$a(this)}};b.Ua=function(t){this.g&&(this.response=this.responseText=t,Sn(this))};b.Ta=function(t){this.g&&(this.response=t,Sn(this))};b.ha=function(){this.g&&Sn(this)};function Sn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,fn(t)}b.setRequestHeader=function(t,e){this.v.append(t,e)};b.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function fn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Df=L.JSON.parse;function ne(t){se.call(this),this.headers=new Vt,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=el,this.K=this.L=!1}he(ne,se);var el="",Pf=/^https?$/i,Nf=["POST","PUT"];b=ne.prototype;b.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():As.g(),this.C=this.u?ko(this.u):ko(As),this.g.onreadystatechange=ae(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Oo(this,r);return}t=n||"";const s=new Vt(this.headers);i&&or(i,function(r,o){s.set(o,r)}),i=zh(s.T()),n=L.FormData&&t instanceof L.FormData,!(0<=va(Nf,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{il(this),0<this.B&&((this.K=Mf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ae(this.pa,this)):this.A=er(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Oo(this,r)}};function Mf(t){return an&&Xh()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Uf(t){return t.toLowerCase()=="content-type"}b.pa=function(){typeof Gs!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,le(this,"timeout"),this.abort(8))};function Oo(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,tl(t),ki(t)}function tl(t){t.D||(t.D=!0,le(t,"complete"),le(t,"error"))}b.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,le(this,"complete"),le(this,"abort"),ki(this))};b.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ki(this,!0)),ne.Z.M.call(this)};b.Fa=function(){this.s||(this.F||this.v||this.l?nl(this):this.cb())};b.cb=function(){nl(this)};function nl(t){if(t.h&&typeof Gs!="undefined"&&(!t.C[1]||Ue(t)!=4||t.ba()!=2)){if(t.v&&Ue(t)==4)er(t.Fa,0,t);else if(le(t,"readystatechange"),Ue(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(za)[1]||null;if(!s&&L.self&&L.self.location){var r=L.self.location.protocol;s=r.substr(0,r.length-1)}i=!Pf.test(s?s.toLowerCase():"")}n=i}if(n)le(t,"complete"),le(t,"success");else{t.m=6;try{var o=2<Ue(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",tl(t)}}finally{ki(t)}}}}function ki(t,e){if(t.g){il(t);const n=t.g,i=t.C[0]?Qn:null;t.g=null,t.C=null,e||le(t,"ready");try{n.onreadystatechange=i}catch{}}}function il(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}function Ue(t){return t.g?t.g.readyState:0}b.ba=function(){try{return 2<Ue(this)?this.g.status:-1}catch{return-1}};b.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Df(e)}};function Ro(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case el:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}b.Da=function(){return this.m};b.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ff(t){let e="";return qs(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function hr(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Ff(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Z(t,e,n))}function Xt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function sl(t){this.za=0,this.l=[],this.h=new vi,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Xt("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Xt("baseRetryDelayMs",5e3,t),this.$a=Xt("retryDelaySeedMs",1e4,t),this.Ya=Xt("forwardChannelMaxRetries",2,t),this.ra=Xt("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ja(t&&t.concurrentRequestLimit),this.Ca=new Of,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}b=sl.prototype;b.ma=8;b.G=1;function fr(t){if(rl(t),t.G==3){var e=t.V++,n=Ve(t.F);Z(n,"SID",t.J),Z(n,"RID",e),Z(n,"TYPE","terminate"),kn(t,n),e=new bn(t,t.h,e,void 0),e.K=2,e.v=bi(Ve(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(e.v.toString(),"")),!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=dl(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Tn(e)}hl(t)}b.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ai(t){t.g&&(gr(t),t.g.cancel(),t.g=null)}function rl(t){Ai(t),t.u&&(L.clearTimeout(t.u),t.u=null),ii(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function as(t,e){t.l.push(new Af(t.Za++,e)),t.G==3&&Ci(t)}function Ci(t){Xa(t.i)||t.m||(t.m=!0,Zs(t.Ha,t),t.C=0)}function jf(t,e){return Ya(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=En(ae(t.Ha,t,e),ul(t,t.C)),t.C++,!0)}b.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new bn(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=wa(r),Ea(r,this.P)):r=this.P),this.o===null&&(s.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ol(this,s,e),n=Ve(this.F),Z(n,"RID",t),Z(n,"CVER",22),this.D&&Z(n,"X-HTTP-Session-Id",this.D),kn(this,n),this.o&&r&&hr(n,this.o,r),lr(this.i,s),this.Ra&&Z(n,"TYPE","init"),this.ja?(Z(n,"$req",e),Z(n,"SID","null"),s.$=!0,Os(s,n,null)):Os(s,n,e),this.G=2}}else this.G==3&&(t?Lo(this,t):this.l.length==0||Xa(this.i)||Lo(this))};function Lo(t,e){var n;e?n=e.m:n=t.V++;const i=Ve(t.F);Z(i,"SID",t.J),Z(i,"RID",n),Z(i,"AID",t.U),kn(t,i),t.o&&t.s&&hr(i,t.o,t.s),n=new bn(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ol(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),lr(t.i,n),Os(n,i,e)}function kn(t,e){t.j&&or({},function(n,i){Z(e,i,n)})}function ol(t,e,n){n=Math.min(t.l.length,n);var i=t.j?ae(t.j.Oa,t.j,t):null;e:{var s=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const d=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{Rf(d,o,"req"+c+"_")}catch{i&&i(d)}}if(a){i=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function al(t){t.g||t.u||(t.Y=1,Zs(t.Ga,t),t.A=0)}function dr(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=En(ae(t.Ga,t),ul(t,t.A)),t.A++,!0)}b.Ga=function(){if(this.u=null,ll(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=En(ae(this.bb,this),t)}};b.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ie(10),Ai(this),ll(this))};function gr(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function ll(t){t.g=new bn(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Ve(t.oa);Z(e,"RID","rpc"),Z(e,"SID",t.J),Z(e,"CI",t.N?"0":"1"),Z(e,"AID",t.U),kn(t,e),Z(e,"TYPE","xmlhttp"),t.o&&t.s&&hr(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=bi(Ve(e)),n.s=null,n.U=!0,Ba(n,t)}b.ab=function(){this.v!=null&&(this.v=null,Ai(this),dr(this),Ie(19))};function ii(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function cl(t,e){var n=null;if(t.g==e){ii(t),gr(t),t.g=null;var i=2}else if(Ls(t.i,e))n=e.D,Qa(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=tr(),le(i,new ja(i,n,e,s)),Ci(t)}else al(t);else if(s=e.o,s==3||s==0&&0<t.I||!(i==1&&jf(t,e)||i==2&&dr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:dt(t,5);break;case 4:dt(t,10);break;case 3:dt(t,6);break;default:dt(t,2)}}}function ul(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function dt(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=ae(t.jb,t);n||(n=new vt("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||ei(n,"https"),bi(n)),Lf(n.toString(),i)}else Ie(2);t.G=0,t.j&&t.j.va(e),hl(t),rl(t)}b.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ie(2)):(this.h.info("Failed to ping google.com"),Ie(1))};function hl(t){t.G=0,t.I=-1,t.j&&((Za(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,zs(t.l),t.l.length=0),t.j.ua())}function fl(t,e,n){let i=vf(n);if(i.i!="")e&&ti(i,e+"."+i.i),ni(i,i.m);else{const s=L.location;i=If(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&qs(t.aa,function(s,r){Z(i,r,s)}),e=t.D,n=t.sa,e&&n&&Z(i,e,n),Z(i,"VER",t.ma),kn(t,i),i}function dl(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ne(new Ti({ib:!0})):new ne(t.qa),e.L=t.H,e}function gl(){}b=gl.prototype;b.xa=function(){};b.wa=function(){};b.va=function(){};b.ua=function(){};b.Oa=function(){};function Ae(t,e){se.call(this),this.g=new sl(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Zn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zn(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Gt(this)}he(Ae,se);Ae.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Zs(ae(t.hb,t,e))),Ie(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=fl(t,null,t.W),Ci(t)};Ae.prototype.close=function(){fr(this.g)};Ae.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,as(this.g,e)}else this.v?(e={},e.__data__=Qs(t),as(this.g,e)):as(this.g,t)};Ae.prototype.M=function(){this.g.j=null,delete this.j,fr(this.g),delete this.g,Ae.Z.M.call(this)};function ml(t){sr.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}he(ml,sr);function pl(){rr.call(this),this.status=1}he(pl,rr);function Gt(t){this.g=t}he(Gt,gl);Gt.prototype.xa=function(){le(this.g,"a")};Gt.prototype.wa=function(t){le(this.g,new ml(t))};Gt.prototype.va=function(t){le(this.g,new pl(t))};Gt.prototype.ua=function(){le(this.g,"b")};Ae.prototype.send=Ae.prototype.u;Ae.prototype.open=Ae.prototype.m;Ae.prototype.close=Ae.prototype.close;nr.NO_ERROR=0;nr.TIMEOUT=8;nr.HTTP_ERROR=6;gf.COMPLETE="complete";Ii.OPEN="a";Ii.CLOSE="b";Ii.ERROR="c";Ii.MESSAGE="d";se.prototype.listen=se.prototype.N;ne.prototype.listenOnce=ne.prototype.O;ne.prototype.getLastError=ne.prototype.La;ne.prototype.getLastErrorCode=ne.prototype.Da;ne.prototype.getStatus=ne.prototype.ba;ne.prototype.getResponseJson=ne.prototype.Qa;ne.prototype.getResponseText=ne.prototype.ga;ne.prototype.send=ne.prototype.ea;const Do="@firebase/firestore";/**
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
 */class we{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}we.UNAUTHENTICATED=new we(null),we.GOOGLE_CREDENTIALS=new we("google-credentials-uid"),we.FIRST_PARTY=new we("first-party-uid"),we.MOCK_USER=new we("mock-user");/**
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
 */let Oi="9.6.7";/**
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
 */const si=new Fs("@firebase/firestore");function be(t,...e){if(si.logLevel<=J.DEBUG){const n=e.map(_l);si.debug(`Firestore (${Oi}): ${t}`,...n)}}function mr(t,...e){if(si.logLevel<=J.ERROR){const n=e.map(_l);si.error(`Firestore (${Oi}): ${t}`,...n)}}function _l(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function yl(t="Unexpected state"){const e=`FIRESTORE (${Oi}) INTERNAL ASSERTION FAILED: `+t;throw mr(e),new Error(e)}function ri(t,e){t||yl()}/**
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
 */const Oe={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Re extends bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Hf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Bf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(we.UNAUTHENTICATED))}shutdown(){}}class Vf{constructor(e){this.t=e,this.currentUser=we.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new Pt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Pt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{be("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(be("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Pt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(be("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ri(typeof i.accessToken=="string"),new Hf(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ri(e===null||typeof e=="string"),new we(e)}}class Wf{constructor(e,n,i){this.type="FirstParty",this.user=we.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class Gf{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new Wf(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(we.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qf{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const i=r=>{r.error!=null&&be("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,be("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{be("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?s(r):be("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ri(typeof n.token=="string"),this.p=n.token,new zf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}class xf{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=Kf(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}/**
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
 */class Jf{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class dn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new dn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof dn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var Po,B;(B=Po||(Po={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";function vl(t){return t.name==="IndexedDbTransactionError"}function ls(){return typeof document!="undefined"?document:null}class Xf{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Sn=e,this.timerId=n,this.qr=i,this.Kr=s,this.Gr=r,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const n=Math.floor(this.jr+this.Jr()),i=Math.max(0,Date.now()-this.Wr),s=Math.max(0,n-i);s>0&&be("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.jr} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,s,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
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
 */class pr{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new pr(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Re(Oe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yf(t,e){if(mr("AsyncQueue",`${e}: ${t}`),vl(t))return new Re(Oe.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Qf{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=we.UNAUTHENTICATED,this.clientId=xf.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{be("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(be("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Re(Oe.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Yf(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}const No=new Map;function Zf(t,e,n,i){if(e===!0&&i===!0)throw new Re(Oe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Re(Oe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Re(Oe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Zf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mo({}),this._settingsFrozen=!1,e instanceof dn?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new Re(Oe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dn(s.options.projectId)}(e))}get app(){if(!this._app)throw new Re(Oe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Re(Oe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mo(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Bf;switch(n.type){case"gapi":const i=n.client;return ri(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new Gf(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new Re(Oe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=No.get(e);n&&(be("ComponentProvider","Removing Datastore"),No.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new Xf(this,"async_queue_retry"),this.yu=()=>{const n=ls();n&&be("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ro.Yr()};const e=ls();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const n=ls();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const n=new Pt;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!vl(e))throw e;be("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const n=this.hu.then(()=>(this.wu=!0,e().catch(i=>{this._u=i,this.wu=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw mr("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.wu=!1,i))));return this.hu=n,n}enqueueAfterDelay(e,n,i){this.pu(),this.gu.indexOf(e)>-1&&(n=0);const s=pr.createAndSchedule(this,e,n,i,r=>this.Tu(r));return this.du.push(s),s}pu(){this._u&&yl()}verifyOperationInProgress(){}async Au(){let e;do e=this.hu,await e;while(e!==this.hu)}Ru(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class td extends $f{constructor(e,n,i){super(e,n,i),this.type="firestore",this._queue=new ed,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||nd(this),this._firestoreClient.terminate()}}function nd(t){var e;const n=t._freezeSettings(),i=function(s,r,o,a){return new Jf(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Qf(t._authCredentials,t._appCheckCredentials,t._queue,i)}(function(t,e=!0){(function(n){Oi=n})(vn),Ft(new pt("firestore",(n,{options:i})=>{const s=n.getProvider("app").getImmediate(),r=new td(s,new Vf(n.getProvider("auth-internal")),new qf(n.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r},"PUBLIC")),Ze(Do,"3.4.5",t),Ze(Do,"3.4.5","esm2017")})();/*! *****************************************************************************
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
***************************************************************************** */function _r(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Il(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const id=Il,wl=new pn("auth","Firebase",Il());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=new Fs("@firebase/auth");function Wn(t,...e){Uo.logLevel<=J.ERROR&&Uo.error(`Auth (${vn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t,...e){throw yr(t,...e)}function Le(t,...e){return yr(t,...e)}function sd(t,e,n){const i=Object.assign(Object.assign({},id()),{[e]:n});return new pn("auth","Firebase",i).create(e,{appName:t.name})}function yr(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return wl.create(t,...e)}function O(t,e,...n){if(!t)throw yr(e,...n)}function Fe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wn(e),new Error(e)}function We(t,e){t||Fe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new Map;function je(t){We(t instanceof Function,"Expected a class definition");let e=Fo.get(t);return e?(We(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fo.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t,e){const n=ya(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Xn(r,e!=null?e:{}))return s;Ce(s,"already-initialized")}return n.initialize({options:e})}function od(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(je);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ad(){return jo()==="http:"||jo()==="https:"}function jo(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ad()||bu()||"connection"in navigator)?navigator.onLine:!0}function cd(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n){this.shortDelay=e,this.longDelay=n,We(n>e,"Short delay should be less than long delay!"),this.isMobile=Eu()||Tu()}get(){return ld()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t,e){We(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Fe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Fe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Fe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=new An(3e4,6e4);function zt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function St(t,e,n,i,s={}){return bl(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=_n(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),El.fetch()(Tl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function bl(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},ud),e);try{const s=new fd(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw cs(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw cs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw cs(t,"email-already-in-use",o);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw sd(t,d,c);Ce(t,d)}}catch(s){if(s instanceof bt)throw s;Ce(t,"network-request-failed")}}async function Cn(t,e,n,i,s={}){const r=await St(t,e,n,i,s);return"mfaPendingCredential"in r&&Ce(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Tl(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?vr(t.config,s):`${t.config.apiScheme}://${s}`}class fd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Le(this.auth,"network-request-failed")),hd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cs(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Le(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dd(t,e){return St(t,"POST","/v1/accounts:delete",e)}async function gd(t,e){return St(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t,e=!1){return Pe(t).getIdToken(e)}async function md(t,e=!1){const n=Pe(t),i=await n.getIdToken(e),s=Ir(i);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:sn(us(s.auth_time)),issuedAtTime:sn(us(s.iat)),expirationTime:sn(us(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function us(t){return Number(t)*1e3}function Ir(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Wn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Iu(n);return s?JSON.parse(s):(Wn("Failed to decode base64 JWT payload"),null)}catch(s){return Wn("Caught error parsing JWT payload as JSON",s),null}}function pd(t){const e=Ir(t);return O(e,"internal-error"),O(typeof e.exp!="undefined","internal-error"),O(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof bt&&_d(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function _d({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=sn(this.lastLoginAt),this.creationTime=sn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oi(t){var e;const n=t.auth,i=await t.getIdToken(),s=await jt(t,gd(n,{idToken:i}));O(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?wd(r.providerUserInfo):[],a=Id(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a==null?void 0:a.length),d=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Sl(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function vd(t){const e=Pe(t);await oi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Id(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function wd(t){return t.map(e=>{var{providerId:n}=e,i=_r(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ed(t,e){const n=await bl(t,{},async()=>{const i=_n({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Tl(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",El.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken!="undefined","internal-error"),O(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):pd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Ed(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new gn;return i&&(O(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(O(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gn,this.toJSON())}_performRefresh(){return Fe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t,e){O(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class gt{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=_r(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Sl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await jt(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return md(this,e)}reload(){return vd(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await oi(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await jt(this,dd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,d;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,V=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,Y=(c=n.createdAt)!==null&&c!==void 0?c:void 0,F=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:A,emailVerified:g,isAnonymous:S,providerData:y,stsTokenManager:K}=n;O(A&&K,e,"internal-error");const R=gn.fromJSON(this.name,K);O(typeof A=="string",e,"internal-error"),xe(h,e.name),xe(f,e.name),O(typeof g=="boolean",e,"internal-error"),O(typeof S=="boolean",e,"internal-error"),xe(m,e.name),xe(v,e.name),xe(T,e.name),xe(V,e.name),xe(Y,e.name),xe(F,e.name);const M=new gt({uid:A,auth:e,email:f,emailVerified:g,displayName:h,isAnonymous:S,photoURL:v,phoneNumber:m,tenantId:T,stsTokenManager:R,createdAt:Y,lastLoginAt:F});return y&&Array.isArray(y)&&(M.providerData=y.map(k=>Object.assign({},k))),V&&(M._redirectEventId=V),M}static async _fromIdTokenResponse(e,n,i=!1){const s=new gn;s.updateFromServerResponse(n);const r=new gt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await oi(r),r}}/**
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
 */class kl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kl.type="NONE";const Ho=kl;/**
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
 */function Gn(t,e,n){return`firebase:${t}:${e}:${n}`}class Nt{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Gn(this.userKey,s.apiKey,r),this.fullPersistenceKey=Gn("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Nt(je(Ho),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||je(Ho);const o=Gn(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const h=gt._fromJSON(e,d);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Nt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Nt(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ol(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Al(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ll(e))return"Blackberry";if(Dl(e))return"Webos";if(wr(e))return"Safari";if((e.includes("chrome/")||Cl(e))&&!e.includes("edge/"))return"Chrome";if(Rl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Al(t=me()){return/firefox\//i.test(t)}function wr(t=me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cl(t=me()){return/crios\//i.test(t)}function Ol(t=me()){return/iemobile/i.test(t)}function Rl(t=me()){return/android/i.test(t)}function Ll(t=me()){return/blackberry/i.test(t)}function Dl(t=me()){return/webos/i.test(t)}function Ri(t=me()){return/iphone|ipad|ipod/i.test(t)}function bd(t=me()){var e;return Ri(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function Td(){return Su()&&document.documentMode===10}function Pl(t=me()){return Ri(t)||Rl(t)||Dl(t)||Ll(t)||/windows phone/i.test(t)||Ol(t)}function Sd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t,e=[]){let n;switch(t){case"Browser":n=Bo(me());break;case"Worker":n=`${Bo(me())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vn}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vo(this),this.idTokenSubscription=new Vo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=je(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Nt.create(this,e),!this._deleted)){if((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===r)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oi(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pe(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(je(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pn("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&je(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Nt.create(this,[je(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Li(t){return Pe(t)}class Vo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Du(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fe("not implemented")}_getIdTokenResponse(e){return Fe("not implemented")}_linkToIdToken(e,n){return Fe("not implemented")}_getReauthenticationResolver(e){return Fe("not implemented")}}async function Ad(t,e){return St(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cd(t,e){return Cn(t,"POST","/v1/accounts:signInWithPassword",zt(t,e))}async function Ml(t,e){return St(t,"POST","/v1/accounts:sendOobCode",zt(t,e))}async function Od(t,e){return Ml(t,e)}async function Rd(t,e){return Ml(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ld(t,e){return Cn(t,"POST","/v1/accounts:signInWithEmailLink",zt(t,e))}async function Dd(t,e){return Cn(t,"POST","/v1/accounts:signInWithEmailLink",zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Er{constructor(e,n,i,s=null){super("password",i);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new mn(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new mn(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Cd(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ld(e,{email:this._email,oobCode:this._password});default:Ce(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Ad(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Dd(e,{idToken:n,email:this._email,oobCode:this._password});default:Ce(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(t,e){return Cn(t,"POST","/v1/accounts:signInWithIdp",zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="http://localhost";class It extends Er{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new It(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ce("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=_r(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new It(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mt(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Mt(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mt(e,n)}buildRequest(){const e={requestUri:Pd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_n(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Md(t){const e=Qt(Zt(t)).link,n=e?Qt(Zt(e)).deep_link_id:null,i=Qt(Zt(t)).deep_link_id;return(i?Qt(Zt(i)).link:null)||i||n||e||t}class br{constructor(e){var n,i,s,r,o,a;const l=Qt(Zt(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(i=l.oobCode)!==null&&i!==void 0?i:null,h=Nd((s=l.mode)!==null&&s!==void 0?s:null);O(c&&d&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=d,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Md(e);try{return new br(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(){this.providerId=qt.PROVIDER_ID}static credential(e,n){return mn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=br.parseLink(n);return O(i,"argument-error"),mn._fromEmailAndCode(e,i.code,i.tenantId)}}qt.PROVIDER_ID="password";qt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class On extends Ul{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends On{constructor(){super("facebook.com")}static credential(e){return It._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch{return null}}}Je.FACEBOOK_SIGN_IN_METHOD="facebook.com";Je.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends On{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return It._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Xe.credential(n,i)}catch{return null}}}Xe.GOOGLE_SIGN_IN_METHOD="google.com";Xe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends On{constructor(){super("github.com")}static credential(e){return It._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ye.credential(e.oauthAccessToken)}catch{return null}}}Ye.GITHUB_SIGN_IN_METHOD="github.com";Ye.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends On{constructor(){super("twitter.com")}static credential(e,n){return It._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Qe.credential(n,i)}catch{return null}}}Qe.TWITTER_SIGN_IN_METHOD="twitter.com";Qe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ud(t,e){return Cn(t,"POST","/v1/accounts:signUp",zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await gt._fromIdTokenResponse(e,i,s),o=Wo(i);return new wt({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Wo(i);return new wt({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Wo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends bt{constructor(e,n,i,s){var r;super(n.code,n.message);this.operationType=i,this.user=s,Object.setPrototypeOf(this,ai.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new ai(e,n,i,s)}}function Fl(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ai._fromErrorAndOperation(t,r,e,i):r})}async function Fd(t,e,n=!1){const i=await jt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wt._forOperation(t,"link",i)}/**
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
 */async function jd(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await jt(t,Fl(i,s,e,t),n);O(r.idToken,i,"internal-error");const o=Ir(r.idToken);O(o,i,"internal-error");const{sub:a}=o;return O(t.uid===a,i,"user-mismatch"),wt._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ce(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jl(t,e,n=!1){const i="signIn",s=await Fl(t,i,e),r=await wt._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function Hd(t,e){return jl(Li(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e,n){var i;O(((i=n.url)===null||i===void 0?void 0:i.length)>0,t,"invalid-continue-uri"),O(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(O(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(O(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cm(t,e,n){const i=Pe(t),s={requestType:"PASSWORD_RESET",email:e};n&&Hl(i,s,n),await Rd(i,s)}async function um(t,e,n){const i=Li(t),s=await Ud(i,{returnSecureToken:!0,email:e,password:n}),r=await wt._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function hm(t,e,n){return Hd(Pe(t),qt.credential(e,n))}async function fm(t,e){const n=Pe(t),i=await t.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};e&&Hl(n.auth,s,e);const{email:r}=await Od(n.auth,s);r!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bd(t,e){return St(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dm(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Pe(t),r={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await jt(i,Bd(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t,e){return Pe(t).setPersistence(e)}const li="__sak";/**
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
 */class Bl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(li,"1"),this.storage.removeItem(li),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(){const t=me();return wr(t)||Ri(t)}const Wd=1e3,Gd=10;class Vl extends Bl{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Vd()&&Sd(),this.fallbackToPolling=Pl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Td()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Gd):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Wd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vl.type="LOCAL";const zd=Vl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends Bl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wl.type="SESSION";const Gl=Wl;/**
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
 */function qd(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Di{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Di(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await qd(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Di.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Kd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Tr("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(d),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return window}function xd(t){De().location.href=t}/**
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
 */function zl(){return typeof De().WorkerGlobalScope!="undefined"&&typeof De().importScripts=="function"}async function Jd(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xd(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Yd(){return zl()?self:null}/**
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
 */const ql="firebaseLocalStorageDb",Qd=1,ci="firebaseLocalStorage",Kl="fbase_key";class Rn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pi(t,e){return t.transaction([ci],e?"readwrite":"readonly").objectStore(ci)}function Zd(){const t=indexedDB.deleteDatabase(ql);return new Rn(t).toPromise()}function Ps(){const t=indexedDB.open(ql,Qd);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(ci,{keyPath:Kl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(ci)?e(i):(i.close(),await Zd(),e(await Ps()))})})}async function Go(t,e,n){const i=Pi(t,!0).put({[Kl]:e,value:n});return new Rn(i).toPromise()}async function $d(t,e){const n=Pi(t,!1).get(e),i=await new Rn(n).toPromise();return i===void 0?null:i.value}function zo(t,e){const n=Pi(t,!0).delete(e);return new Rn(n).toPromise()}const eg=800,tg=3;class xl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ps(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>tg)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Di._getInstance(Yd()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Jd(),!this.activeServiceWorker)return;this.sender=new Kd(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ps();return await Go(e,li,"1"),await zo(e,li),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Go(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>$d(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Pi(s,!1).getAll();return new Rn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xl.type="LOCAL";const ng=xl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function sg(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Le("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",ig().appendChild(i)})}function rg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new An(3e4,6e4);/**
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
 */function og(t,e){return e?je(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Sr extends Er{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Mt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ag(t){return jl(t.auth,new Sr(t),t.bypassAuthState)}function lg(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),jd(n,new Sr(t),t.bypassAuthState)}async function cg(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Fd(n,new Sr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ag;case"linkViaPopup":case"linkViaRedirect":return cg;case"reauthViaPopup":case"reauthViaRedirect":return lg;default:Ce(this.auth,"internal-error")}}resolve(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=new An(2e3,1e4);class Dt extends Jl{constructor(e,n,i,s,r){super(e,n,s,r);this.provider=i,this.authWindow=null,this.pollId=null,Dt.currentPopupAction&&Dt.currentPopupAction.cancel(),Dt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){We(this.filter.length===1,"Popup operations only handle one event");const e=Tr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Le(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,ug.get())};e()}}Dt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="pendingRedirect",hs=new Map;class fg extends Jl{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=hs.get(this.auth._key());if(!e){try{const i=await dg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}hs.set(this.auth._key(),e)}return this.bypassAuthState||hs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dg(t,e){const n=mg(e),i=gg(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function gg(t){return je(t._redirectPersistence)}function mg(t){return Gn(hg,t.config.apiKey,t.name)}async function pg(t,e,n=!1){const i=Li(t),s=og(i,e),o=await new fg(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=10*60*1e3;class yg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Xl(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Le(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_g&&this.cachedEventUids.clear(),this.cachedEventUids.has(qo(e))}saveEventToCache(e){this.cachedEventUids.add(qo(e)),this.lastProcessedEventTime=Date.now()}}function qo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ig(t,e={}){return St(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Eg=/^https?/;async function bg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ig(t);for(const n of e)try{if(Tg(n))return}catch{}Ce(t,"unauthorized-domain")}function Tg(t){const e=Ds(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Eg.test(n))return!1;if(wg.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Sg=new An(3e4,6e4);function Ko(){const t=De().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kg(t){return new Promise((e,n)=>{var i,s,r;function o(){Ko(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ko(),n(Le(t,"network-request-failed"))},timeout:Sg.get()})}if((s=(i=De().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((r=De().gapi)===null||r===void 0?void 0:r.load)o();else{const a=rg("iframefcb");return De()[a]=()=>{gapi.load?o():n(Le(t,"network-request-failed"))},sg(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw zn=null,e})}let zn=null;function Ag(t){return zn=zn||kg(t),zn}/**
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
 */const Cg=new An(5e3,15e3),Og="__/auth/iframe",Rg="emulator/auth/iframe",Lg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pg(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vr(e,Rg):`https://${t.config.authDomain}/${Og}`,i={apiKey:e.apiKey,appName:t.name,v:vn},s=Dg.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${_n(i).slice(1)}`}async function Ng(t){const e=await Ag(t),n=De().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:Pg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lg,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Le(t,"network-request-failed"),a=De().setTimeout(()=>{r(o)},Cg.get());function l(){De().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Mg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ug=500,Fg=600,jg="_blank",Hg="http://localhost";class xo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bg(t,e,n,i=Ug,s=Fg){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Mg),{width:i.toString(),height:s.toString(),top:r,left:o}),c=me().toLowerCase();n&&(a=Cl(c)?jg:n),Al(c)&&(e=e||Hg,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[m,v])=>`${f}${m}=${v},`,"");if(bd(c)&&a!=="_self")return Vg(e||"",a),new xo(null);const h=window.open(e||"",a,d);O(h,t,"popup-blocked");try{h.focus()}catch{}return new xo(h)}function Vg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const Wg="__/auth/handler",Gg="emulator/auth/handler";function Jo(t,e,n,i,s,r){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:vn,eventId:s};if(e instanceof Ul){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Lu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof On){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${zg(t)}?${_n(a).slice(1)}`}function zg({config:t}){return t.emulator?vr(t,Gg):`https://${t.authDomain}/${Wg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="webStorageSupport";class qg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gl,this._completeRedirectFn=pg}async _openPopup(e,n,i,s){var r;We((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Jo(e,n,i,Ds(),s);return Bg(e,o,Tr())}async _openRedirect(e,n,i,s){return await this._originValidation(e),xd(Jo(e,n,i,Ds(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(We(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Ng(e),i=new yg(e);return n.register("authEvent",s=>(O(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fs,{type:fs},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[fs];o!==void 0&&n(!!o),Ce(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pl()||wr()||Ri()}}const Kg=qg;var Xo="@firebase/auth",Yo="0.19.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Xg(t){Ft(new pt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(o=>{O(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),O(!(r==null?void 0:r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nl(t)},l=new kd(o,a);return od(l,n),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ft(new pt("auth-internal",e=>{const n=Li(e.getProvider("auth").getImmediate());return(i=>new xg(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(Xo,Yo,Jg(t)),Ze(Xo,Yo,"esm2017")}/**
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
 */function mm(t=bh()){const e=ya(t,"auth");return e.isInitialized()?e.getImmediate():rd(t,{popupRedirectResolver:Kg,persistence:[ng,zd,Gl]})}Xg("Browser");export{Zg as $,ua as A,ue as B,ui as C,sm as D,Bn as E,q as F,ie as G,ee as H,Ns as I,Zo as J,em as K,ta as L,na as M,ea as N,Yg as O,im as P,rm as Q,om as R,st as S,Gr as T,Ge as U,cm as V,am as W,mm as X,gm as Y,Ho as Z,Kn as _,G as a,Qg as a0,um as a1,dm as a2,fm as a3,lm as a4,$g as a5,hm as a6,w as b,$ as c,E as d,X as e,Ot as f,H as g,Ut as h,it as i,qn as j,pe as k,te as l,_e as m,re as n,U as o,oe as p,D as q,nm as r,ze as s,$e as t,tm as u,Ms as v,ge as w,nt as x,ce as y,Us as z};
