(this.webpackJsonpthreed=this.webpackJsonpthreed||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(5),o=n.n(l),i=n(3),u=n(6),c=n(0),m=n(7),d="TEE",s="TEE_OFFSET",v="TEE_90",E={a:4,b:4,d:2,g:1,c:2};function b(e){var t=function(e){var t=new c.n;return t.moveTo(0,0),t.lineTo(0,-e.a),t.lineTo(e.b,-e.a),t.lineTo(e.b,e.d-e.a),t.lineTo(e.g,e.d-e.a),t.lineTo(e.g,0),t.lineTo(0,0),t}(e),n={depth:e.c,bevelEnabled:!1},a=new c.c(t,n),r=new c.j,l=new c.i((new c.d).fromBufferGeometry(a),r);return l.position.setY(e.a),l}var h=function(){var e=r.a.useState(d),t=Object(i.a)(e,2),n=t[0],a=t[1],l=r.a.useState(E.a),o=Object(i.a)(l,2),h=o[0],p=o[1],g=r.a.useState(E.b),w=Object(i.a)(g,2),f=w[0],y=w[1],T=r.a.useState(E.d),C=Object(i.a)(T,2),j=C[0],I=C[1],k=r.a.useState(E.g),O=Object(i.a)(k,2),S=O[0],B=O[1],M=r.a.useState(E.c),W=Object(i.a)(M,2),x=W[0],F=W[1],P=r.a.createRef();return r.a.useEffect((function(){console.log({a:h,b:f,d:j,g:S,c:x});var e=P.current,t=new c.m,a=new c.k(45,window.innerWidth/window.innerHeight,1,1e4),r=new c.s({logarithmicDepthBuffer:!0});r.setSize(window.innerWidth,window.innerHeight),e.appendChild(r.domElement);var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v,n=b(e),a=Object(u.a)({},e);t===v&&(a.g=a.c,a.b=e.b+(e.c-e.g));var r=b(a);switch(t){case d:r.rotation.y=Math.PI,r.position.setZ(e.c);break;case s:r.rotation.y=Math.PI,r.position.setX(e.g);break;case v:r.rotation.y=-Math.PI/2}var l=new c.d;l.mergeMesh(n),l.mergeMesh(r);var o=new c.i(l,new c.j);return o}({a:h,b:f,d:j,g:S,c:x},n);t.add(l),t.add(function(e){var t=new c.a(e.geometry),n=new c.f({color:"black",linewidth:1});return new c.g(t,n)}(l));var o=new c.e(20,20);t.add(o);var i=new m.a(a,r.domElement);return a.position.set(15,10,15),i.update(),function e(){requestAnimationFrame(e),i.update(),r.render(t,a)}(),function(){e&&e.removeChild(r.domElement)}}),[P,n,h,f,j,S,x]),r.a.createElement("div",{style:{height:"100%",width:"100%"}},r.a.createElement("div",{style:{position:"absolute",top:"20px",left:"20px",color:"white"}},r.a.createElement("div",null,r.a.createElement("label",null,"Config"),r.a.createElement("br",null),r.a.createElement("select",{value:n,onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:d},d),r.a.createElement("option",{value:s},s),r.a.createElement("option",{value:v},v))),r.a.createElement("div",null,r.a.createElement("label",null,"A"),r.a.createElement("br",null),r.a.createElement("input",{type:"number",value:h,onChange:function(e){return p(parseInt(e.target.value))}})),r.a.createElement("div",null,r.a.createElement("label",null,"B"),r.a.createElement("br",null),r.a.createElement("input",{type:"number",value:f,onChange:function(e){return y(parseInt(e.target.value))}})),r.a.createElement("div",null,r.a.createElement("label",null,"D"),r.a.createElement("br",null),r.a.createElement("input",{type:"number",value:j,onChange:function(e){return I(parseInt(e.target.value))}})),r.a.createElement("div",null,r.a.createElement("label",null,"G"),r.a.createElement("br",null),r.a.createElement("input",{type:"number",value:S,onChange:function(e){return B(parseInt(e.target.value))}})),r.a.createElement("div",null,r.a.createElement("label",null,"C"),r.a.createElement("br",null),r.a.createElement("input",{type:"number",value:x,onChange:function(e){return F(parseInt(e.target.value))}}))),r.a.createElement("div",{ref:P}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.ca5d25c4.chunk.js.map