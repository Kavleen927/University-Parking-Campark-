import{S as C,i as D,s as L,e as r,k as E,t as R,c as l,a as p,m as N,h as w,d as c,b as m,g as O,F as s,G as x,v as P}from"../chunks/vendor-e346f08a.js";function T(B){let e,t,u,v,_,f,o,b,y,d,g,k,n;return{c(){e=r("body"),t=r("div"),u=r("br"),v=r("br"),_=r("br"),f=E(),o=r("h1"),b=R("Parking Lot 7N"),y=E(),d=r("p"),g=R("This is lot 7N"),k=E(),n=r("div"),this.h()},l(h){e=l(h,"BODY",{});var i=p(e);t=l(i,"DIV",{id:!0,class:!0});var a=p(t);u=l(a,"BR",{}),v=l(a,"BR",{}),_=l(a,"BR",{}),f=N(a),o=l(a,"H1",{class:!0});var F=p(o);b=w(F,"Parking Lot 7N"),F.forEach(c),y=N(a),d=l(a,"P",{});var I=p(d);g=w(I,"This is lot 7N"),I.forEach(c),a.forEach(c),k=N(i),n=l(i,"DIV",{id:!0,class:!0}),p(n).forEach(c),i.forEach(c),this.h()},h(){m(o,"class","svelte-14yrrbe"),m(t,"id","title"),m(t,"class","svelte-14yrrbe"),m(n,"id","map"),m(n,"class","svelte-14yrrbe")},m(h,i){O(h,e,i),s(e,t),s(t,u),s(t,v),s(t,_),s(t,f),s(t,o),s(o,b),s(t,y),s(t,d),s(d,g),s(e,k),s(e,n)},p:x,i:x,o:x,d(h){h&&c(e)}}}function M(B){return P(()=>{const e=new google.maps.Map(document.getElementById("map"),{zoom:18,center:{lat:33.678,lng:-116.243},mapTypeId:"terrain"});new google.maps.Rectangle({strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,map:e,bounds:{north:33.6851,south:33.6852,east:-116.231,west:-116.232}})}),[]}class V extends C{constructor(e){super();D(this,e,M,T,L,{})}}export{V as default};