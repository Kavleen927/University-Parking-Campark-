import{S as H,i as q,s as D,e as h,t as w,k as N,l as B,c as d,a as C,h as E,d as a,m as R,b as _,g as k,F as v,j as I,G as S,O as V,ab as F,a4 as U,a2 as z,a5 as J,T as O,H as L,U as G}from"./vendor-603beb4a.js";import{s as K}from"./stores-5d5a5bfd.js";import{d as W}from"./firebase-397320c4.js";function M(o){let s;function t(e,i){return e[4]==!1?x:e[4]==!0?Z:X}let r=t(o),l=r(o);return{c(){l.c(),s=B()},l(e){l.l(e),s=B()},m(e,i){l.m(e,i),k(e,s,i)},p(e,i){r===(r=t(e))&&l?l.p(e,i):(l.d(1),l=r(e),l&&(l.c(),l.m(s.parentNode,s)))},d(e){l.d(e),e&&a(s)}}}function Q(o){let s;function t(e,i){return(e[2]=="faculty"||e[2]=="Guest"||e[2]=="Admin")&&e[4]==!1?ee:e[4]==!0?g:$}let r=t(o),l=r(o);return{c(){l.c(),s=B()},l(e){l.l(e),s=B()},m(e,i){l.m(e,i),k(e,s,i)},p(e,i){r===(r=t(e))&&l?l.p(e,i):(l.d(1),l=r(e),l&&(l.c(),l.m(s.parentNode,s)))},d(e){l.d(e),e&&a(s)}}}function X(o){let s,t,r,l,e,i;return{c(){s=h("br"),t=h("p"),r=w("You cannot park here! You are a "),l=w(o[2]),e=w("!"),i=h("br"),this.h()},l(f){s=d(f,"BR",{}),t=d(f,"P",{id:!0,class:!0});var u=C(t);r=E(u,"You cannot park here! You are a "),l=E(u,o[2]),e=E(u,"!"),u.forEach(a),i=d(f,"BR",{}),this.h()},h(){_(t,"id","Warn"),_(t,"class","svelte-1fls76w")},m(f,u){k(f,s,u),k(f,t,u),v(t,r),v(t,l),v(t,e),k(f,i,u)},p(f,u){u&4&&I(l,f[2])},d(f){f&&a(s),f&&a(t),f&&a(i)}}}function Z(o){let s,t,r,l;return{c(){s=h("br"),t=h("p"),r=w("You already checked into a spot! Check out first!"),l=h("br"),this.h()},l(e){s=d(e,"BR",{}),t=d(e,"P",{id:!0,class:!0});var i=C(t);r=E(i,"You already checked into a spot! Check out first!"),i.forEach(a),l=d(e,"BR",{}),this.h()},h(){_(t,"id","Warn"),_(t,"class","svelte-1fls76w")},m(e,i){k(e,s,i),k(e,t,i),v(t,r),k(e,l,i)},p:S,d(e){e&&a(s),e&&a(t),e&&a(l)}}}function x(o){let s,t,r,l,e,i,f,u,m,c,T,P,p,b,Y;return{c(){s=h("br"),t=h("p"),r=w("You can park here! You are a "),l=w(o[2]),e=w("!"),i=h("br"),f=N(),u=h("p"),m=w("Expected Check Out Time:"),c=h("input"),T=N(),P=h("button"),p=w("Check In"),this.h()},l(n){s=d(n,"BR",{}),t=d(n,"P",{id:!0,class:!0});var y=C(t);r=E(y,"You can park here! You are a "),l=E(y,o[2]),e=E(y,"!"),y.forEach(a),i=d(n,"BR",{}),f=R(n),u=d(n,"P",{id:!0,class:!0});var A=C(u);m=E(A,"Expected Check Out Time:"),A.forEach(a),c=d(n,"INPUT",{type:!0,id:!0,name:!0,min:!0,max:!0}),T=R(n),P=d(n,"BUTTON",{class:!0});var j=C(P);p=E(j,"Check In"),j.forEach(a),this.h()},h(){_(t,"id","Warn"),_(t,"class","svelte-1fls76w"),_(u,"id","pa1"),_(u,"class","svelte-1fls76w"),_(c,"type","time"),_(c,"id","timeEst"),_(c,"name","estimate"),_(c,"min","07:00"),_(c,"max","22:00"),_(P,"class","svelte-1fls76w")},m(n,y){k(n,s,y),k(n,t,y),v(t,r),v(t,l),v(t,e),k(n,i,y),k(n,f,y),k(n,u,y),v(u,m),k(n,c,y),O(c,o[3]),k(n,T,y),k(n,P,y),v(P,p),b||(Y=[L(c,"input",o[7]),L(P,"click",o[5])],b=!0)},p(n,y){y&4&&I(l,n[2]),y&8&&O(c,n[3])},d(n){n&&a(s),n&&a(t),n&&a(i),n&&a(f),n&&a(u),n&&a(c),n&&a(T),n&&a(P),b=!1,G(Y)}}}function $(o){let s,t,r,l,e,i;return{c(){s=h("br"),t=h("p"),r=w("You cannot park here! You are a "),l=w(o[2]),e=w("!"),i=h("br"),this.h()},l(f){s=d(f,"BR",{}),t=d(f,"P",{id:!0,class:!0});var u=C(t);r=E(u,"You cannot park here! You are a "),l=E(u,o[2]),e=E(u,"!"),u.forEach(a),i=d(f,"BR",{}),this.h()},h(){_(t,"id","Warn"),_(t,"class","svelte-1fls76w")},m(f,u){k(f,s,u),k(f,t,u),v(t,r),v(t,l),v(t,e),k(f,i,u)},p(f,u){u&4&&I(l,f[2])},d(f){f&&a(s),f&&a(t),f&&a(i)}}}function g(o){let s,t,r,l;return{c(){s=h("br"),t=h("p"),r=w("You already checked into a spot! Check out first!"),l=h("br"),this.h()},l(e){s=d(e,"BR",{}),t=d(e,"P",{id:!0,class:!0});var i=C(t);r=E(i,"You already checked into a spot! Check out first!"),i.forEach(a),l=d(e,"BR",{}),this.h()},h(){_(t,"id","Warn"),_(t,"class","svelte-1fls76w")},m(e,i){k(e,s,i),k(e,t,i),v(t,r),k(e,l,i)},p:S,d(e){e&&a(s),e&&a(t),e&&a(l)}}}function ee(o){let s,t,r,l,e,i,f,u;return{c(){s=h("p"),t=w("Expected Check Out Time:"),r=h("input"),l=N(),e=h("button"),i=w("Check In"),this.h()},l(m){s=d(m,"P",{id:!0,class:!0});var c=C(s);t=E(c,"Expected Check Out Time:"),c.forEach(a),r=d(m,"INPUT",{type:!0,id:!0,name:!0,min:!0,max:!0}),l=R(m),e=d(m,"BUTTON",{class:!0});var T=C(e);i=E(T,"Check In"),T.forEach(a),this.h()},h(){_(s,"id","pa1"),_(s,"class","svelte-1fls76w"),_(r,"type","time"),_(r,"id","timeEst"),_(r,"name","estimate"),_(r,"min","07:00:00"),_(r,"max","22:00:00"),_(e,"class","svelte-1fls76w")},m(m,c){k(m,s,c),v(s,t),k(m,r,c),O(r,o[3]),k(m,l,c),k(m,e,c),v(e,i),f||(u=[L(r,"input",o[6]),L(e,"click",o[5])],f=!0)},p(m,c){c&8&&O(r,m[3])},d(m){m&&a(s),m&&a(r),m&&a(l),m&&a(e),f=!1,G(u)}}}function te(o){let s,t,r,l,e,i,f,u,m,c;function T(b,Y){if(b[0]=="Lot 3")return Q;if(b[0]=="Lot 7N")return M}let P=T(o),p=P&&P(o);return{c(){s=h("div"),t=h("h1"),r=w("Parking Spot"),l=N(),e=h("p"),i=w(o[0]),f=w(" Parking Spot "),u=w(o[1]),m=N(),p&&p.c(),c=B(),this.h()},l(b){s=d(b,"DIV",{id:!0,class:!0});var Y=C(s);t=d(Y,"H1",{class:!0});var n=C(t);r=E(n,"Parking Spot"),n.forEach(a),l=R(Y),e=d(Y,"P",{id:!0,class:!0});var y=C(e);i=E(y,o[0]),f=E(y," Parking Spot "),u=E(y,o[1]),y.forEach(a),Y.forEach(a),m=R(b),p&&p.l(b),c=B(),this.h()},h(){_(t,"class","svelte-1fls76w"),_(e,"id","spot"),_(e,"class","svelte-1fls76w"),_(s,"id","main"),_(s,"class","svelte-1fls76w")},m(b,Y){k(b,s,Y),v(s,t),v(t,r),v(s,l),v(s,e),v(e,i),v(e,f),v(e,u),k(b,m,Y),p&&p.m(b,Y),k(b,c,Y)},p(b,[Y]){Y&1&&I(i,b[0]),Y&2&&I(u,b[1]),P===(P=T(b))&&p?p.p(b,Y):(p&&p.d(1),p=P&&P(b),p&&(p.c(),p.m(c.parentNode,c)))},i:S,o:S,d(b){b&&a(s),b&&a(m),p&&p.d(b),b&&a(c)}}}function le(o,s,t){let r;V(o,K,p=>t(9,r=p));let{message:l}=s,{Spot:e}=s,i,f,u;F(U(W,"users",r.user.uid)).then(p=>{if(p.exists())return t(2,i=p.get("userType")),f=p.get("username"),f;console.log("No such document!")});let m=!1;F(U(W,l,r.user.uid)).then(p=>{if(p.exists())return t(4,m=!0),m;console.log("No such document!")});const c=async()=>{await z(U(J(W,l),r.user.uid),{userType:i,username:f,Spot:e,checkedIn:!0,estimateTime:u}),l=="Lot 3"?window.location.replace("/lot3"):l=="Lot 7N"?window.location.replace("/lot7N"):l=="Lot 2A"&&window.location.replace("/lot2A")};function T(){u=this.value,t(3,u)}function P(){u=this.value,t(3,u)}return o.$$set=p=>{"message"in p&&t(0,l=p.message),"Spot"in p&&t(1,e=p.Spot)},[l,e,i,u,m,c,T,P]}class ue extends H{constructor(s){super();q(this,s,le,te,D,{message:0,Spot:1})}}export{ue as P};
