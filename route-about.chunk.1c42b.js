(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{ZbNB:function(n,t,_){"use strict";function o(n,t){m.options.__h&&m.options.__h(s,n,y||t),y=0;var _=s.__H||(s.__H={__:[],__h:[]});return n>=_.__.length&&_.__.push({__V:d}),_.__[n]}function r(n){return y=1,function(n,t,_){var r=o(h++,2);return r.t=n,r.__c||(r.__=[_?_(t):a(void 0,t),function(n){var t=r.t(r.__[0],n);r.__[0]!==t&&(r.__=[t,r.__[1]],r.__c.setState({}))}],r.__c=s),r.__}(a,n)}function e(){for(var n;n=b.shift();)if(n.__P)try{n.__H.__h.forEach(i),n.__H.__h.forEach(u),n.__H.__h=[]}catch(t){n.__H.__h=[],m.options.__e(t,n.__v)}}function i(n){var t=s,_=n.__c;"function"==typeof _&&(n.__c=void 0,_()),s=t}function u(n){var t=s;n.__c=n.__(),s=t}function c(n,t){return!n||n.length!==t.length||t.some((function(t,_){return t!==n[_]}))}function a(n,t){return"function"==typeof t?t(n):t}function f(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var _=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==_)return;var o,r,e=[],i=!0,u=!1;try{for(_=_.call(n);!(i=(o=_.next()).done)&&(e.push(o.value),!t||e.length!==t);i=!0);}catch(n){u=!0,r=n}finally{try{i||null==_.return||_.return()}finally{if(u)throw r}}return e}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return l(n,t);var _=Object.prototype.toString.call(n).slice(8,-1);"Object"===_&&n.constructor&&(_=n.constructor.name);if("Map"===_||"Set"===_)return Array.from(n);if("Arguments"===_||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return l(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(n,t){(null==t||t>n.length)&&(t=n.length);for(var _=0,o=new Array(t);_<t;_++)o[_]=n[_];return o}_.r(t);var h,s,p,v,m=_("hosL"),y=0,b=[],d=[],H=m.options.__b,w=m.options.__r,A=m.options.diffed,g=m.options.__c,E=m.options.unmount;m.options.__b=function(n){s=null,H&&H(n)},m.options.__r=function(n){w&&w(n),h=0;var t=(s=n.__c).__H;t&&(p===s?(t.__h=[],s.__h=[],t.__.forEach((function(n){n.__V=d,n.u=void 0}))):(t.__h.forEach(i),t.__h.forEach(u),t.__h=[])),p=s},m.options.diffed=function(n){A&&A(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==b.push(t)&&v===m.options.requestAnimationFrame||((v=m.options.requestAnimationFrame)||function(n){var t,_=function(){clearTimeout(o),j&&cancelAnimationFrame(t),setTimeout(n)},o=setTimeout(_,100);j&&(t=requestAnimationFrame(_))})(e)),t.__H.__.forEach((function(n){n.u&&(n.__H=n.u),n.__V!==d&&(n.__=n.__V),n.u=void 0,n.__V=d}))),p=s=null},m.options.__c=function(n,t){t.some((function(n){try{n.__h.forEach(i),n.__h=n.__h.filter((function(n){return!n.__||u(n)}))}catch(_){t.some((function(n){n.__h&&(n.__h=[])})),t=[],m.options.__e(_,n.__v)}})),g&&g(n,t)},m.options.unmount=function(n){E&&E(n);var t,_=n.__c;_&&_.__H&&(_.__H.__.forEach((function(n){try{i(n)}catch(n){t=n}})),t&&m.options.__e(t,_.__v))};var j="function"==typeof requestAnimationFrame,O="profile__n-7EV";t.default=function(){var n,t,_,e=f(r(Date.now()),2),i=e[0],u=e[1],a=f(r(10),2),l=a[0],p=a[1];return n=function(){var n=setInterval((function(){return u(Date.now())}),1e3);return function(){return clearInterval(n)}},t=[],_=o(h++,3),!m.options.__s&&c(_.__H,t)&&(_.__=n,_.u=t,s.__H.__h.push(_)),Object(m.h)("div",{class:O},Object(m.h)("h1",null,"About"),Object(m.h)("p",null,"Current time: ",new Date(i).toLocaleString()),Object(m.h)("p",null,Object(m.h)("button",{onClick:function(){return p((function(n){return n+1}))}},"Click Me"),"  Clicked ",l," times"))}}}]);
//# sourceMappingURL=route-about.chunk.1c42b.js.map