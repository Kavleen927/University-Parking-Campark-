import{S as B,i as D,s as R,$ as A,e as _,k as S,w as V,c as g,a as b,d as n,m as N,x as T,b as $,g as x,y as F,q as K,o as W,B as Y,O as G,ao as H,a5 as J,v as Q,ai as X,D as U,ad as Z,t as q,K as tt,h as z,ae as et,F as c,G as st}from"../chunks/vendor-4525c18c.js";import{P as lt}from"../chunks/popup2-69cb9733.js";import{d as at}from"../chunks/firebase-5cb7eea2.js";import"../chunks/stores-e7223647.js";const ot=[{lat:40.716342,lng:-73.602765},{lat:40.716324,lng:-73.602754},{lat:40.716306,lng:-73.6028},{lat:40.716323,lng:-73.602811}],rt=[{lat:40.716361,lng:-73.602775},{lat:40.716343,lng:-73.602764},{lat:40.716327,lng:-73.60281},{lat:40.716345,lng:-73.602821}];function nt(k){let e,f,l,s;return l=new A({props:{show:k[1]}}),{c(){e=_("div"),f=S(),V(l.$$.fragment),this.h()},l(t){e=g(t,"DIV",{class:!0}),b(e).forEach(n),f=N(t),T(l.$$.fragment,t),this.h()},h(){$(e,"class","full-screen svelte-r2ztnl")},m(t,p){x(t,e,p),k[3](e),x(t,f,p),F(l,t,p),s=!0},p(t,[p]){const d={};p&2&&(d.show=t[1]),l.$set(d)},i(t){s||(K(l.$$.fragment,t),s=!0)},o(t){W(l.$$.fragment,t),s=!1},d(t){t&&n(e),k[3](null),t&&n(f),Y(l,t)}}}let it=19,ct="Lot 7N";function pt(k,e,f){let l,s,t,p={lat:40.716637,lng:-73.603322},d=0;const u=U(null);G(k,u,o=>f(1,l=o));const w=()=>u.set(X(lt,{message:ct,Spot:d}));let m=[],h;H(J(at,"Lot 7N")).then(o=>(o.forEach(r=>{r.get("checkedIn")==!0&&(h="Spot"+r.get("Spot"),console.log(r.id," => ",r.data(),h),m.push(h))}),m)),Q(async()=>{t=new google.maps.Map(s,{zoom:it,center:p});const o=new google.maps.Polygon({paths:ot,strokeColor:"#29589c",strokeOpacity:.8,strokeWeight:1,fillColor:"#29589c",fillOpacity:.35,clickable:!0});o.setMap(t),o.addListener("click",()=>{d=1;for(let a=0;a<m.length;a++)m[a]=="Spot1"&&o.setOptions({strokeColor:"#585858",fillColor:"#585858",clickable:!1});o.clickable&&w()});const r=new google.maps.Polygon({paths:rt,strokeColor:"#29589c",strokeOpacity:.8,strokeWeight:1,fillColor:"#29589c",fillOpacity:.35,clickable:!0});r.setMap(t),r.addListener("click",()=>{d=2;for(let a=0;a<m.length;a++)m[a]=="Spot2"&&r.setOptions({strokeColor:"#585858",fillColor:"#585858",clickable:!1});r.clickable&&w()})});function C(o){Z[o?"unshift":"push"](()=>{s=o,f(0,s)})}return[s,l,u,C]}class ft extends B{constructor(e){super();D(this,e,pt,nt,R,{})}}function dt(k){let e,f,l,s,t,p,d,u,w,m,h,C,o,r,a,v,E;return v=new ft({}),{c(){e=_("script"),l=S(),s=_("body"),t=_("div"),p=_("br"),d=S(),u=_("h1"),w=q("Parking Lot 7N"),m=S(),h=_("p"),C=q("This is lot 7N"),o=_("br"),r=S(),a=_("div"),V(v.$$.fragment),this.h()},l(i){const M=tt('[data-svelte="svelte-1564ozw"]',document.head);e=g(M,"SCRIPT",{src:!0});var j=b(e);j.forEach(n),M.forEach(n),l=N(i),s=g(i,"BODY",{});var P=b(s);t=g(P,"DIV",{id:!0,class:!0});var y=b(t);p=g(y,"BR",{}),d=N(y),u=g(y,"H1",{class:!0});var L=b(u);w=z(L,"Parking Lot 7N"),L.forEach(n),m=N(y),h=g(y,"P",{});var O=b(h);C=z(O,"This is lot 7N"),O.forEach(n),o=g(y,"BR",{}),y.forEach(n),r=N(P),a=g(P,"DIV",{id:!0,class:!0});var I=b(a);T(v.$$.fragment,I),I.forEach(n),P.forEach(n),this.h()},h(){e.defer=!0,e.async=!0,et(e.src,f="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7JRxMXgvVfLQd8K-Mg5f2dxYpzbMN8Ec&callback=initMap")||$(e,"src",f),$(u,"class","svelte-1wyt0tf"),$(t,"id","title"),$(t,"class","svelte-1wyt0tf"),$(a,"id","map"),$(a,"class","svelte-1wyt0tf")},m(i,M){c(document.head,e),x(i,l,M),x(i,s,M),c(s,t),c(t,p),c(t,d),c(t,u),c(u,w),c(t,m),c(t,h),c(h,C),c(t,o),c(s,r),c(s,a),F(v,a,null),E=!0},p:st,i(i){E||(K(v.$$.fragment,i),E=!0)},o(i){W(v.$$.fragment,i),E=!1},d(i){n(e),i&&n(l),i&&n(s),Y(v)}}}class gt extends B{constructor(e){super();D(this,e,null,dt,R,{})}}export{gt as default};