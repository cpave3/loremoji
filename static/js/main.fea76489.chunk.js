(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(n){n.exports={art:["the","my","your","our","that","this","every","one","100","the only","his","her"],adj:["happy","rotating","red","fast","elastic","smily","unbelievable","infinite","surprising","mysterious","glowing","green","blue","tired","hard","soft","transparent","long","short","excellent","noisy","silent","rare","normal","typical","living","clean","glamorous","fancy","handsome","lazy","scary","helpless","skinny","melodic","silly","kind","brave","nice","ancient","modern","young","sweet","wet","dry","heavy","industrial","complex","accurate","awesome","shiny","cool","glittering","fake","unreal","naked","intelligent","smart","curious","strange","unique","empty","gray","saturated","blurry"],noun:["forest","tree","flower","sky","grass","mountain","car","computer","man","woman","dog","elephant","ant","road","butterfly","phone","computer program","grandma","school","bed","mouse","keyboard","bicycle","spaghetti","drink","cat","shirt","carpet","wall","poster","airport","bridge","road","river","beach","sculpture","piano","guitar","fruit","banana","apple","strawberry","rubber band","saxophone","window","linux computer","skate board","piece of paper","photograph","painting","hat","space","fork","mission","goal","project","tax","wind mill","light bulb","microphone","cpu","hard drive","screwdriver","eggplant"],pre:["under","in front of","above","behind","near","following","inside","besides","unlike","like","beneath","against","into","beyond","considering","without","with","towards"],verb:["grin","smile","sings","dances","runs","will run","walks","flies","moves","moved","will move","glows","glowed","spins","promised","hugs","cheated","waits","is waiting","is studying","swims","travels","traveled","plays","played","enjoys","will enjoy","illuminates","arises","eats","drinks","calculates","kissed","faded","listens","navigated","responds","smiles","will smile","will succeed","is wondering about","is thinking about","is","was","will be","might be","was never"]}},21:function(n){n.exports={name:"loremoji",version:"0.5.1",private:!0,homepage:"https://loremoji.app.pavey.dev",dependencies:{"@fortawesome/fontawesome-svg-core":"^1.2.15","@fortawesome/free-brands-svg-icons":"^5.7.2","@fortawesome/free-solid-svg-icons":"^5.7.2","@fortawesome/react-fontawesome":"^0.1.4","@types/jest":"24.0.9","@types/node":"11.9.5","@types/react":"^16.8.5","@types/react-dom":"16.8.2","@types/styled-components":"^4.1.11","@types/webfontloader":"^1.6.29","emoji-name-map":"^1.2.8",i:"^0.3.6",npm:"^6.8.0",react:"^16.8.3","react-dom":"^16.8.3","react-scripts":"2.1.5","sentence-generator":"^1.0.1","styled-components":"^4.1.3",typescript:"3.3.3333",webfontloader:"^1.6.28"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test",eject:"react-scripts eject"},eslintConfig:{extends:"react-app"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}},25:function(n,e,t){n.exports=t(40)},30:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(16),i=t.n(o),l=(t(30),t(4)),c=t(2),s=t(3),u=t(17),d=t(18),p=t.n(d),m=function(n){return Math.round(Math.random()*(n-1))},f=[["art","adj","noun","verb","art","adj","noun"],["art","noun","verb","art","adj","noun"]],b=function(n,e,t){var r=e.map(function(e){var r,a=(r=n[e])[m(r.length)];if(t){var o=p.a.get(a);return void 0!==o?o:a}return a}),a=r.length;return r.reduce(function(n,e,t){return n+(0===t?(r=e).charAt(0).toUpperCase()+r.substr(1):e)+(t===a-1?". ":" ");var r},"")},g=function(n){return b(u,f[m(f.length)],n)};function h(){var n=Object(c.a)(["\n  color: #95a5a6;\n  cursor: pointer;\n  border-bottom: 1px solid #bdc3c7;\n  font-size: 1em;\n"]);return h=function(){return n},n}function v(){var n=Object(c.a)(["\n  display: inline-block;\n"]);return v=function(){return n},n}var x=s.a.div(v()),w=s.a.span(h()),y=function(n){var e=n.handleChange,t=n.value;return r.createElement(x,null,r.createElement(w,{role:"presentation",onClick:function(){return e(!t)}},"".concat(t?"Multibyte":"Plain")),r.createElement("span",null," text"))},j=t(5),E=t.n(j);function k(){var n=Object(c.a)(["\n  padding: 0;\n  margin: 0;\n  font-family: 'Baloo Tamma';\n"]);return k=function(){return n},n}function O(){var n=Object(c.a)(["\n  padding: 5px;\n  background-color: #e74c3c;\n  text-align: center;\n  color: #ecf0f1;\n"]);return O=function(){return n},n}E.a.load({google:{families:["Baloo Tamma:300,400,700","cursive"]}});var C=s.a.header(O()),z=s.a.h1(k()),M=function(){return r.createElement(C,null,r.createElement(z,null,"Loremoji Ipsum*"))},S=t(21),B=t(6),G=t(22),I=t(12);function T(){var n=Object(c.a)(["\n  padding: 5px 10px;\n"]);return T=function(){return n},n}function W(){var n=Object(c.a)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"]);return W=function(){return n},n}function J(){var n=Object(c.a)(["\n  &,\n  &:link,\n  &:visited {\n    text-decoration: none;\n    color: #7f8c8d;\n  }\n"]);return J=function(){return n},n}function N(){var n=Object(c.a)(["\n  background-color: #2c3e50;\n  padding: 5px;\n  text-align: center;\n  color: #7f8c8d;\n"]);return N=function(){return n},n}var P=s.a.footer(N()),q=s.a.a(J()),A=s.a.ul(W()),L=s.a.li(T()),U=function(){return r.createElement(P,null,r.createElement("div",null,r.createElement(A,null,r.createElement(L,null,r.createElement("span",null,r.createElement(B.a,{icon:G.a})," Cameron Pavey")),r.createElement(L,null,r.createElement(q,{href:"https://github.com/cpave3"}," ",r.createElement(B.a,{icon:I.a})," Github")),r.createElement(L,null,r.createElement(q,{href:"https://twitter.com/cpave3"}," ",r.createElement(B.a,{icon:I.b})," Twitter")))),r.createElement("div",null,r.createElement("small",null,"* No actual lorem ipsum inlcuded")),r.createElement("div",null,r.createElement("small",null,"v".concat(S.version))))};function X(){var n=Object(c.a)(["\n  position: absolute;\n  top: 0; left: 0; bottom: 0; right: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  opacity: .1;\n  >p {\n    font-size: 1.2rem;\n    font-weight: bold;\n  }\n"]);return X=function(){return n},n}function $(){var n=Object(c.a)(["\n  flex: 1;\n  background-color: red;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n"]);return $=function(){return n},n}function _(){var n=Object(c.a)(["\n  text-align: center;\n  width: 30px;\n  margin: 0 10px;\n  border: none;\n  border-bottom: 1px solid #bdc3c7;\n  color: #95a5a6;\n  font-size: 1em;\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"]);return _=function(){return n},n}function D(){var n=Object(c.a)(['\n  flex: 1;\n  border: 1px solid #bdc3c7;\n  font-size: 1.15em;\n  font-family: "Muli", sans-serif;\n  box-sizing: border-box;\n  min-width: 100%;\n  max-width: 100%;\n']);return D=function(){return n},n}function F(){var n=Object(c.a)(["\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-content: center;\n"]);return F=function(){return n},n}function H(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10px 0;\n"]);return H=function(){return n},n}function K(){var n=Object(c.a)(["\n  padding: 15px 30px;\n  font-size: 1.2em;\n  background-color: #27ae60;\n  color: white;\n  border: none;\n  font-weight: bold;\n  font-family: 'Muli', sans-serif;\n  border-radius: 5px;\n  &:hover {\n    cursor: pointer;\n    background-color: #2ecc71;\n  }\n"]);return K=function(){return n},n}function Q(){var n=Object(c.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]);return Q=function(){return n},n}function R(){var n=Object(c.a)(["\n  background-color: #3498db;\n  color: #ecf0f1;\n  border: none;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin-bottom: 20px;\n  position: relative;\n  font-weight: bold;\n  font-family: 'Muli', sans-serif;\n  &::after {\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-top: 10px solid #3498db;\n    position: absolute;\n    top: 95%;\n    left: 50%;\n    transform: translateX(-50%);\n    content: \"\";\n  }\n\n  animation: float 6s ease-in-out infinite;\n  @keyframes float {\n    0% {\n      /* box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6); */\n      transform: translatey(0px);\n    }\n    50% {\n      /* box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2); */\n      transform: translatey(-5px);\n    }\n    100% {\n      /* box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6); */\n      transform: translatey(0px);\n    }\n  }\n"]);return R=function(){return n},n}function V(){var n=Object(c.a)(["\n  display: flex;\n  margin: 5px;\n  flex-direction: column;\n  flex: 1;\n"]);return V=function(){return n},n}E.a.load({google:{families:["Muli:300,400,700","sans-serif"]}});var Y=s.a.article(V()),Z=s.a.div(R()),nn=s.a.section(Q()),en=s.a.button(K()),tn=s.a.div(H()),rn=s.a.div(F()),an=s.a.textarea(D()),on=s.a.input.attrs(function(n,e){return{type:"number",min:1,max:100}})(_()),ln=s.a.section($()),cn=s.a.div(X()),sn=function(){var n=Object(r.useState)(!0),e=Object(l.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)("paragraph"),c=Object(l.a)(i,2),s=(c[0],c[1],Object(r.useState)(20)),u=Object(l.a)(s,2),d=u[0],p=u[1],m=Object(r.useState)(""),f=Object(l.a)(m,2),b=f[0],h=f[1],v=Object(r.useState)(!0),x=Object(l.a)(v,2),w=x[0],j=x[1];return a.a.createElement(nn,null,a.a.createElement(M,null),a.a.createElement(Y,null,a.a.createElement(rn,null,a.a.createElement("span",null,"Generate"),a.a.createElement(on,{value:d,onChange:function(n){return p(parseInt(n.target.value))}}),a.a.createElement("span",null,"\xa0",1===d?"sentence":"sentences"," of\xa0"),a.a.createElement(y,{handleChange:function(n){return o(n)},value:t})),a.a.createElement(ln,null,w?a.a.createElement(cn,null,a.a.createElement("div",null,"\ud83e\udd14"),a.a.createElement("p",null,"What are you waiting for?")):null,a.a.createElement(an,{className:"border flex-1",value:b})),a.a.createElement(tn,null,w?a.a.createElement(Z,null,"Click here to get started!"):null,a.a.createElement(en,{onClick:function(){!function(n,e,t,r,a){a(!1);for(var o=[],i=0;i<n;i++)o.push(i>0&&i%10===0?"\n\r":g(t));r(o.reduce(function(n,e){return n+e},""))}(d,0,t,h,j)}},"Generate"))),a.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(sn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.fea76489.chunk.js.map