/*! For license information please see 508.cfb96021.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[508],{9355:function(t,n,r){r.d(n,{Hg:function(){return g},M1:function(){return x},Pg:function(){return y},V0:function(){return b},tx:function(){return m}});var e,o,i,a,c,s=r(1413),u=r(5861),l=r(1243);function h(){h=function(){return n};var t,n={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(t,n,r){t[n]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,r){return t[n]=r}}function l(t,n,r,e){var i=n&&n.prototype instanceof y?n:y,a=Object.create(i.prototype),c=new N(e||[]);return o(a,"_invoke",{value:E(t,r,c)}),a}function f(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var p="suspendedStart",d="executing",v="completed",g={};function y(){}function x(){}function m(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,j=w&&w(w(G([])));j&&j!==r&&e.call(j,a)&&(b=j);var L=m.prototype=y.prototype=Object.create(b);function Z(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function k(t,n){function r(o,i,a,c){var s=f(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}})}function E(n,r,e){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var s=_(c,e);if(s){if(s===g)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===p)throw o=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var u=f(n,r,e);if("normal"===u.type){if(o=e.done?v:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(o=v,e.method="throw",e.arg=u.arg)}}}function _(n,r){var e=r.method,o=n.iterator[e];if(o===t)return r.delegate=null,"throw"===e&&n.iterator.return&&(r.method="return",r.arg=t,_(n,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),g;var i=f(o,n.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[n.resultName]=a.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function O(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function P(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function G(n){if(n||""===n){var r=n[a];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function r(){for(;++o<n.length;)if(e.call(n,o))return r.value=n[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return x.prototype=m,o(L,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:x,configurable:!0}),x.displayName=u(m,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===x||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},n.awrap=function(t){return{__await:t}},Z(k.prototype),u(k.prototype,c,(function(){return this})),n.AsyncIterator=k,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new k(l(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},Z(L),u(L,s,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=G,N.prototype={constructor:N,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!n)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function o(e,o){return c.type="throw",c.arg=n,r.next=e,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=e.call(a,"catchLoc"),u=e.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,e){return this.delegate={iterator:G(n),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=t),g}},n}var f="/trending/movie/day",p="/movie/",d="search/movie",v={method:"GET",baseURL:"https://api.themoviedb.org/3/",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODkwOTU0MWQ1MjM2ZGRhNDNmOWVhNGI5N2VlZDA1NCIsInN1YiI6IjY1MDA0MWFmZTBjYTdmMDBjYmVhN2YxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KMhjiI3nUTqduooQ-82TXACriU726sX4ViPAF8iUjDs"}};function g(t){return(e=e||(0,u.Z)(h().mark((function t(n){var r,e;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.Z.request("".concat(f),(0,s.Z)((0,s.Z)({},v),{},{signal:n.signal}));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t,n){return(o=o||(0,u.Z)(h().mark((function t(n,r){var e,o;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.Z.request("".concat(p).concat(n),(0,s.Z)((0,s.Z)({},v),{},{signal:r.signal}));case 2:return e=t.sent,o=e.data,t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,n){return(i=i||(0,u.Z)(h().mark((function t(n,r){var e,o;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.Z.request("".concat(p).concat(n,"/credits"),(0,s.Z)((0,s.Z)({},v),{},{signal:r.signal}));case 2:return e=t.sent,o=e.data,t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,n){return(a=a||(0,u.Z)(h().mark((function t(n,r){var e,o;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.Z.request("".concat(p).concat(n,"/reviews"),(0,s.Z)((0,s.Z)({},v),{},{signal:r.signal}));case 2:return e=t.sent,o=e.data,t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t,n){return(c=c||(0,u.Z)(h().mark((function t(n,r){var e,o;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.Z.request("".concat(d),(0,s.Z)((0,s.Z)({},v),{},{params:{query:n,include_adult:"false",page:"1"},signal:r.signal}));case 2:return e=t.sent,o=e.data,t.abrupt("return",o.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},4680:function(t,n,r){r.d(n,{j:function(){return i}});var e,o=r(168),i=r(5867).ZP.div(e||(e=(0,o.Z)(["\n  font-size: 24px;\n  color: red;\n  text-align: center;\n  padding: 24px;\n"])))},9529:function(t,n,r){r.d(n,{dj:function(){return s},j9:function(){return l},yk:function(){return u}});var e,o,i,a=r(168),c=r(5867),s=c.ZP.div(e||(e=(0,a.Z)(["\n  display: block;\n  width: 100%;\n  height: 220px;\n  border: 1px solid #cccccc;\n  position: relative;\n  top: 0;\n  left: 0;\n  line-height: inherit;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-image: url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg);\n"]))),u=c.ZP.div(o||(o=(0,a.Z)(["\n  display: block;\n  min-width: 342px;\n  width: 342px;\n  height: 512px;\n  background-color: #dbdbdb;\n  border: 1px solid #cccccc;\n  border-radius: 12px;\n  box-shadow: 3px 3px 10px black;\n  position: relative;\n  top: 0;\n  left: 0;\n  line-height: inherit;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-image: url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg);\n"]))),l=c.ZP.div(i||(i=(0,a.Z)(["\n  display: block;\n  min-width: 182px;\n  width: 182px;\n  height: 274px;\n  background-color: #dbdbdb;\n  border: 1px solid #cccccc;\n  border-radius: 12px;\n  box-shadow: 3px 3px 10px black;\n  position: relative;\n  top: 0;\n  left: 0;\n  line-height: inherit;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-image: url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg);\n"])))},4508:function(t,n,r){r.r(n),r.d(n,{default:function(){return J}});var e,o,i,a,c,s,u,l,h=r(5861),f=r(9439),p=r(2791),d=r(7689),v=r(5667),g=r(3430),y=r(4680),x=r(9355),m=r(168),b=r(5867),w=r(1087),j=b.ZP.section(e||(e=(0,m.Z)(["\n  background-color: rgba(242, 220, 200, 0.8);\n  padding: 24px 0;\n  margin-top: 12px;\n"]))),L=b.ZP.div(o||(o=(0,m.Z)(["\n  display: flex;\n  justify-content: left;\n  gap: 36px;\n\n  & img {\n    border: 1px solid #cccccc;\n    border-radius: 12px;\n    box-shadow: 3px 3px 10px black;\n  }\n\n  & p {\n    font-size: 18px;\n    font-weight: 400;\n    letter-spacing: 1.2;\n  }\n"]))),Z=b.ZP.h2(i||(i=(0,m.Z)(["\n  font-size: 36px;\n  font-weight: 700;\n  letter-spacing: 1.1;\n  margin-top: 24px;\n  margin-bottom: 36px;\n"]))),k=b.ZP.h3(a||(a=(0,m.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: 1.1;\n  margin-top: 18px;\n  margin-bottom: 12px;\n"]))),E=b.ZP.ul(c||(c=(0,m.Z)(["\n  list-style: disc;\n  padding-left: 32px;\n"]))),_=b.ZP.li(s||(s=(0,m.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),O=(0,b.ZP)(w.OL)(u||(u=(0,m.Z)(["\n  display: inline-block;\n  font-size: 24px;\n  font-weight: 400;\n  letter-spacing: 1.2;\n  color: #032541;\n\n  &.active {\n    color: #11b5dc;\n    font-weight: 600;\n    text-decoration: underline;\n  }\n\n  &:hover,\n  &:focus {\n    color: #11b5dc;\n    transform: scale(1.05);\n    text-decoration: underline;\n  }\n"]))),P=(0,b.ZP)(w.OL)(l||(l=(0,m.Z)(["\n  display: inline-block;\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: 1.2;\n  color: #000000;\n  border: 1px solid #cccccc;\n  border-radius: 8px;\n  padding: 8px 24px;\n  transition: transform 250ms linear, box-shadow 250ms linear;\n  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n    color: #ffffff;\n    background-color: #1cb8d8;\n  }\n"]))),N=r(3459),G=r(9529),T=r(184);function I(t){var n,r,e=t.movieInfo,o=t.onScroll,i=(0,d.TH)(),a=(0,p.useRef)(null!==(n=null===(r=i.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/");return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(N.GH,{children:(0,T.jsx)(P,{to:a.current,children:"Back"})}),(0,T.jsx)(j,{children:(0,T.jsx)(N.GH,{onWheel:function(){return o()},children:(0,T.jsxs)(L,{children:[e.poster_path?(0,T.jsx)("img",{src:"https://image.tmdb.org/t/p/w342/".concat(e.poster_path),alt:e.title}):(0,T.jsx)(G.yk,{}),(0,T.jsxs)("div",{children:[(0,T.jsx)(Z,{children:e.title}),(0,T.jsxs)("p",{children:["User score: ",Math.round(10*e.vote_average),"%"]}),(0,T.jsx)(k,{children:"Overveiw"}),(0,T.jsx)("p",{children:e.overview}),(0,T.jsx)(k,{children:"Genres"}),(0,T.jsx)("p",{children:e.genres.map((function(t){return t.name})).join(", ")}),(0,T.jsx)(k,{children:"Additional information"}),(0,T.jsxs)(E,{children:[(0,T.jsx)(_,{children:(0,T.jsx)(O,{to:"/movies/".concat(e.id,"/cast"),state:{from:i},children:"Cast"})}),(0,T.jsx)(_,{children:(0,T.jsx)(O,{to:"/movies/".concat(e.id,"/reviews"),state:{from:i},children:"Reviews"})})]})]})]})})}),(0,T.jsx)(N.GH,{children:(0,T.jsx)(d.j3,{})})]})}var S,C,F=r(9128),A=b.ZP.div(S||(S=(0,m.Z)(["\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  width: 54px;\n  height: 54px;\n  padding: 15px;\n  background-color: #3f51b5;\n  border-radius: 50%;\n  box-shadow: 0px 0px 0 5px rgba(79, 46, 232, 0.3);\n  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    scale: 1.2;\n  }\n"]))),Y=(0,b.ZP)(F.ALZ)(C||(C=(0,m.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 36px;\n  height: 36px;\n  fill: #ffffff;\n"])));function z(t){var n=t.onClick;return(0,T.jsx)(A,{onClick:n,children:(0,T.jsx)(Y,{})})}function R(){R=function(){return n};var t,n={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(t,n,r){t[n]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,r){return t[n]=r}}function l(t,n,r,e){var i=n&&n.prototype instanceof g?n:g,a=Object.create(i.prototype),c=new P(e||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function h(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var f="suspendedStart",p="executing",d="completed",v={};function g(){}function y(){}function x(){}var m={};u(m,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(N([])));w&&w!==r&&e.call(w,a)&&(m=w);var j=x.prototype=g.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function Z(t,n){function r(o,i,a,c){var s=h(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}})}function k(n,r,e){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var s=E(c,e);if(s){if(s===v)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===f)throw o=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=p;var u=h(n,r,e);if("normal"===u.type){if(o=e.done?d:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(o=d,e.method="throw",e.arg=u.arg)}}}function E(n,r){var e=r.method,o=n.iterator[e];if(o===t)return r.delegate=null,"throw"===e&&n.iterator.return&&(r.method="return",r.arg=t,E(n,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),v;var i=h(o,n.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[n.resultName]=a.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function _(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(n){if(n||""===n){var r=n[a];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function r(){for(;++o<n.length;)if(e.call(n,o))return r.value=n[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return y.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:y,configurable:!0}),y.displayName=u(x,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===y||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,u(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},L(Z.prototype),u(Z.prototype,c,(function(){return this})),n.AsyncIterator=Z,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new Z(l(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),u(j,s,"Generator"),u(j,a,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=N,P.prototype={constructor:P,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!n)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function o(e,o){return c.type="throw",c.arg=n,r.next=e,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=e.call(a,"catchLoc"),u=e.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),v},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,e){return this.delegate={iterator:N(n),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=t),v}},n}function J(){var t=(0,p.useState)(null),n=(0,f.Z)(t,2),r=n[0],e=n[1],o=(0,p.useState)(!1),i=(0,f.Z)(o,2),a=i[0],c=i[1],s=(0,p.useState)(!1),u=(0,f.Z)(s,2),l=u[0],m=u[1],b=(0,p.useState)(!1),w=(0,f.Z)(b,2),j=w[0],L=w[1],Z=(0,d.UO)().movieId,k=(0,p.useRef)();(0,p.useEffect)((function(){var t;if(!r)return k.current&&k.current.abort(),k.current=new AbortController,function(){(t=t||(0,h.Z)(R().mark((function t(){var n;return R().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(!0),m(!1),t.next=5,(0,x.Pg)(Z,k.current);case 5:(n=t.sent)||m(!0),e(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),"ERR_CANCELED"!==t.t0.code&&m(!0);case 13:return t.prev=13,c(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))).apply(this,arguments)}(),function(){k.current.abort()}}),[r,Z]);return(0,T.jsxs)(p.Fragment,{children:[r&&(0,T.jsx)(I,{movieInfo:r,onScroll:function(){var t=window.scrollY||document.documentElement.scrollTop;L(t>50)}}),(0,T.jsxs)(N.GH,{children:[j&&(0,T.jsx)(z,{onClick:function(){v.NY.scrollToTop(),L(!1)}}),a&&(0,T.jsx)(g.g4,{height:"80",width:"80",radius:"9",color:"#3F51B5",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},wrapperClassName:"",visible:!0}),l&&!a&&(0,T.jsx)(y.j,{children:(0,T.jsx)("p",{children:"OOPS! There was an ERROR!"})})]})]})}}}]);
//# sourceMappingURL=508.cfb96021.chunk.js.map