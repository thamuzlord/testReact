(this["webpackJsonpgood-music"]=this["webpackJsonpgood-music"]||[]).push([[0],{26:function(e,a,t){e.exports=t(40)},32:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),s=t.n(c),l=(t(31),t(32),t(33),t(19)),i=t(20),u=t(24),o=t(21),m=t(25),p=t(9),f=t(7),b=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg bg-nav shadow"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"navbar-brand"},"Prueba"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("h3",{className:"nav-link"},"Lista de Artistas"))))))},d=function(){return r.a.createElement("footer",{id:"sticky-footer",className:"py-4 bg-dark text-white-50"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("small",null,"Copyright \xa9 Carlos Vasco")))},v=function(e){return r.a.createElement("section",null,e.children)},E=t(2),h=t.n(E),g=t(4),x=t(10),N=function(e){var a=e.image,t=e.name,n=e.id;return r.a.createElement(p.b,{to:"/albums/".concat(n)},r.a.createElement("div",{id:"container"},r.a.createElement("img",{className:"img-circle",src:a,alt:t}),r.a.createElement("h3",{className:"centeredText",id:n},t)))},j="https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com";function y(){return O.apply(this,arguments)}function O(){return(O=Object(g.a)(h.a.mark((function e(){var a,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/dev/api/artists"));case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(){var e=Object(n.useState)([]),a=Object(x.a)(e,2),t=a[0],c=a[1];function s(){return(s=Object(g.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),r.a.createElement("section",null,t.map((function(e){return r.a.createElement(N,{image:e.image,name:e.name,id:e.id,key:e.id})})))},k=function(e){var a=e.id,t=e.name,n=e.image,c=e.total_tracks;return r.a.createElement(p.b,{to:"/songs/".concat(a)},r.a.createElement("div",{className:"music-box"},r.a.createElement("div",{className:"music-info"},r.a.createElement("div",{className:"music-img"},r.a.createElement("img",{src:n,alt:t})),r.a.createElement("div",{className:"music-name"},r.a.createElement("h6",{className:"song-name"},t),r.a.createElement("p",{className:"song-name"},"Canciones: ",c)),r.a.createElement("div",{className:"music-play"},r.a.createElement("div",{className:"play-button"}))),r.a.createElement("hr",null)))},C="https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com";function z(e){return R.apply(this,arguments)}function R(){return(R=Object(g.a)(h.a.mark((function e(a){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(C,"/dev/api/artists/").concat(a,"/albums"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e){var a=Object(n.useState)([]),t=Object(x.a)(a,2),c=t[0],s=t[1];function l(){return(l=Object(g.a)(h.a.mark((function a(){var t,n;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.match.params.id,a.next=3,z(t);case 3:n=a.sent,s(n[0].albums);case 5:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]),r.a.createElement("section",{className:"container albumes"},r.a.createElement("h2",{className:"song-name"},"\xc1lbumes"),r.a.createElement("hr",null),c.map((function(e){return r.a.createElement(k,Object.assign({},e,{key:e.id}))})))};var J=function(e){var a=Math.floor(e/6e4),t=(e%6e4/1e3).toFixed(0);return a+":"+(t<10?"0":"")+t},T=function(e){var a=e.id,t=e.name,n=e.duration_ms;return r.a.createElement("tr",null,r.a.createElement("th",null,a),r.a.createElement("th",null,t),r.a.createElement("th",null,J(n)))},_="https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com";function A(e){return B.apply(this,arguments)}function B(){return(B=Object(g.a)(h.a.mark((function e(a){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(_,"/dev/api/albums/").concat(a,"/songs"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(e){var a=Object(n.useState)([]),t=Object(x.a)(a,2),c=t[0],s=t[1];function l(){return(l=Object(g.a)(h.a.mark((function a(){var t,n;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.match.params.id,a.next=3,A(t);case 3:n=a.sent,s(n[0].songs);case 5:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]),r.a.createElement("section",{className:"container"},r.a.createElement("h2",{className:"song-name"},"Canciones"),r.a.createElement("table",{className:"table tabla-canciones"},r.a.createElement("tbody",null,c.map((function(e){return r.a.createElement(T,Object.assign({},e,{key:e.id}))})))))},I=function(e){function a(){return Object(l.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(b,null),r.a.createElement(v,null,r.a.createElement(f.a,{path:"/",exact:!0,component:w}),r.a.createElement(f.a,{path:"/albums/:id",component:S}),r.a.createElement(f.a,{path:"/songs/:id",component:F})),r.a.createElement(d,null))}}]),a}(n.Component),L=function(){return r.a.createElement(I,null)};s.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.eaf10f54.chunk.js.map