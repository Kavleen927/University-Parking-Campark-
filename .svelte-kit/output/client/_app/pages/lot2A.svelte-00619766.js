import{S as H,i as K,s as W,e as p,c as h,a as m,d as c,b as v,g as O,G as M,v as j,ad as G,t as x,h as z,F as n,H as J,k as y,w as Q,K as U,m as $,x as X,an as Z,y as ee,q as te,o as se,B as ae,O as le,ab as oe,a4 as V,ao as re}from"../chunks/vendor-603beb4a.js";import{s as ne}from"../chunks/stores-5d5a5bfd.js";import{d as R}from"../chunks/firebase-397320c4.js";function ie(f){let e;return{c(){e=p("div"),this.h()},l(s){e=h(s,"DIV",{class:!0}),m(e).forEach(c),this.h()},h(){v(e,"class","full-screen svelte-r2ztnl")},m(s,l){O(s,e,l),f[1](e)},p:M,i:M,o:M,d(s){s&&c(e),f[1](null)}}}let ce=19;function ue(f,e,s){let l,a,t={lat:40.71154,lng:-73.600837};j(async()=>{a=new google.maps.Map(l,{zoom:ce,center:t});const u=[{lat:40.715576,lng:-73.602547},{lat:40.715556,lng:-73.602536},{lat:40.715573,lng:-73.602478},{lat:40.715597,lng:-73.60249}],d=new google.maps.Polygon({paths:u,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:1,fillColor:"#FF0000",fillOpacity:.35,clickable:!0});d.setMap(a),d.addListener("click",()=>{a.setZoom(22),a.setCenter(d.getPosition())})});function i(u){G[u?"unshift":"push"](()=>{l=u,s(0,l)})}return[l,i]}class de extends H{constructor(e){super();K(this,e,ue,ie,W,{})}}function N(f){let e,s,l,a,t;return{c(){e=p("div"),s=p("button"),l=x("Check Out"),this.h()},l(i){e=h(i,"DIV",{id:!0});var u=m(e);s=h(u,"BUTTON",{class:!0});var d=m(s);l=z(d,"Check Out"),d.forEach(c),u.forEach(c),this.h()},h(){v(s,"class","svelte-wqygku"),v(e,"id","CheckedIn")},m(i,u){O(i,e,u),n(e,s),n(s,l),a||(t=J(s,"click",f[1]),a=!0)},p:M,d(i){i&&c(e),a=!1,t()}}}function fe(f){let e,s,l,a,t,i,u,d,q,I,A,F,L,E,B,P,g,k,C,o=f[0]==!0&&N(f);return k=new de({}),{c(){e=p("script"),l=y(),a=p("body"),t=p("div"),i=p("br"),u=y(),d=p("h1"),q=x("Parking Lot 2A"),I=y(),A=p("p"),F=x("This is lot 2A"),L=y(),o&&o.c(),E=y(),B=p("br"),P=y(),g=p("div"),Q(k.$$.fragment),this.h()},l(r){const b=U('[data-svelte="svelte-1564ozw"]',document.head);e=h(b,"SCRIPT",{src:!0});var Y=m(e);Y.forEach(c),b.forEach(c),l=$(r),a=h(r,"BODY",{});var w=m(a);t=h(w,"DIV",{id:!0,class:!0});var _=m(t);i=h(_,"BR",{}),u=$(_),d=h(_,"H1",{class:!0});var D=m(d);q=z(D,"Parking Lot 2A"),D.forEach(c),I=$(_),A=h(_,"P",{});var S=m(A);F=z(S,"This is lot 2A"),S.forEach(c),L=$(_),o&&o.l(_),E=$(_),B=h(_,"BR",{}),_.forEach(c),P=$(w),g=h(w,"DIV",{id:!0,class:!0});var T=m(g);X(k.$$.fragment,T),T.forEach(c),w.forEach(c),this.h()},h(){e.defer=!0,e.async=!0,Z(e.src,s="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7JRxMXgvVfLQd8K-Mg5f2dxYpzbMN8Ec&callback=initMap")||v(e,"src",s),v(d,"class","svelte-wqygku"),v(t,"id","title"),v(t,"class","svelte-wqygku"),v(g,"id","map"),v(g,"class","svelte-wqygku")},m(r,b){n(document.head,e),O(r,l,b),O(r,a,b),n(a,t),n(t,i),n(t,u),n(t,d),n(d,q),n(t,I),n(t,A),n(A,F),n(t,L),o&&o.m(t,null),n(t,E),n(t,B),n(a,P),n(a,g),ee(k,g,null),C=!0},p(r,[b]){r[0]==!0?o?o.p(r,b):(o=N(r),o.c(),o.m(t,E)):o&&(o.d(1),o=null)},i(r){C||(te(k.$$.fragment,r),C=!0)},o(r){se(k.$$.fragment,r),C=!1},d(r){c(e),r&&c(l),r&&c(a),o&&o.d(),ae(k)}}}function pe(f,e,s){let l;le(f,ne,i=>s(2,l=i));var a=!1;oe(V(R,"Lot 2A",l.user.uid)).then(i=>{i.exists()?s(0,a=!0):console.log("No such document!")});function t(){return alert("Checked Out"),re(V(R,"Lot 2A",l.user.uid))}return[a,t]}class ve extends H{constructor(e){super();K(this,e,pe,fe,W,{})}}export{ve as default};
