module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/preact-boilerplate/",n(n.s="QfWi")}({HteQ:function(t,e){t.exports=require("preact")},QfWi:function(t,e,n){"use strict";n.r(e);var r=n("HteQ"),o=n("Y3FI"),i="/".concat("preact-boilerplate");function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return s(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y,d,b,v,m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(p,t);var e,n,r,u=l(p);function p(){var t;a(this,p);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return _(s(t=u.call.apply(u,[this].concat(n))),"componentWillMount",(function(){var e=t.props.to;!1===e.startsWith("/")&&(e="/"+e),!1===e.startsWith(i)&&(e=i+e),Object(o.route)(e,!0)})),_(s(t),"render",(function(){return null})),t}return e=p,n&&c(e.prototype,n),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}(r.Component),g=n("ox/y"),O="header__OVZyn",j="active__r+Z6z",C=function(){return Object(r.h)("header",{class:O},Object(r.h)("h1",null,"Preact Boilerplate"),Object(r.h)("nav",null,Object(r.h)(g.Link,{activeClassName:j,href:"".concat(i,"/")},"Home"),Object(r.h)(g.Link,{activeClassName:j,href:"".concat(i,"/about")},"About")))},w="home__uRcqa",x=function(){return Object(r.h)("div",{class:w},Object(r.h)("h1",null,"Home"),Object(r.h)("p",null,"This is the Home component."))},S=0,A=[],P=[],k=r.options.__b,E=r.options.__r,H=r.options.diffed,R=r.options.__c,U=r.options.unmount;function M(t,e){r.options.__h&&r.options.__h(d,t,S||e),S=0;var n=d.__H||(d.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:P}),n.__[t]}function T(t){return S=1,function(t,e,n){var r=M(y++,2);return r.t=t,r.__c||(r.__=[n?n(e):K(void 0,e),function(t){var e=r.t(r.__[0],t);r.__[0]!==e&&(r.__=[e,r.__[1]],r.__c.setState({}))}],r.__c=d),r.__}(K,t)}function I(){for(var t;t=A.shift();)if(t.__P)try{t.__H.__h.forEach(W),t.__H.__h.forEach(D),t.__H.__h=[]}catch(e){t.__H.__h=[],r.options.__e(e,t.__v)}}r.options.__b=function(t){d=null,k&&k(t)},r.options.__r=function(t){E&&E(t),y=0;var e=(d=t.__c).__H;e&&(b===d?(e.__h=[],d.__h=[],e.__.forEach((function(t){t.__V=P,t.u=void 0}))):(e.__h.forEach(W),e.__h.forEach(D),e.__h=[])),b=d},r.options.diffed=function(t){H&&H(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(1!==A.push(e)&&v===r.options.requestAnimationFrame||((v=r.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),L&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);L&&(e=requestAnimationFrame(n))})(I)),e.__H.__.forEach((function(t){t.u&&(t.__H=t.u),t.__V!==P&&(t.__=t.__V),t.u=void 0,t.__V=P}))),b=d=null},r.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(W),t.__h=t.__h.filter((function(t){return!t.__||D(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],r.options.__e(n,t.__v)}})),R&&R(t,e)},r.options.unmount=function(t){U&&U(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((function(t){try{W(t)}catch(t){e=t}})),e&&r.options.__e(e,n.__v))};var L="function"==typeof requestAnimationFrame;function W(t){var e=d,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),d=e}function D(t){var e=d;t.__c=t.__(),d=e}function F(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function K(t,e){return"function"==typeof e?e(t):e}var N="profile__n-7EV";function V(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],u=!0,c=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var q=function(t){t.user;var e,n,o,i=V(T(Date.now()),2),u=i[0],c=i[1],a=V(T(0),2),f=a[0],l=a[1];return e=function(){var t=setInterval((function(){return c(Date.now())}),1e3);return function(){return clearInterval(t)}},n=[],o=M(y++,3),!r.options.__s&&F(o.__H,n)&&(o.__=e,o.u=n,d.__H.__h.push(o)),Object(r.h)("div",{class:N},Object(r.h)("h1",null,"About"),Object(r.h)("p",null,"Current time: ",new Date(u).toLocaleString()),Object(r.h)("p",null,Object(r.h)("button",{onClick:function(){return l((function(t){return t+1}))}},"Click Me"),"  Clicked ",f," times"))},Q=function(){return Object(r.h)("div",{id:"app"},Object(r.h)(C,null),Object(r.h)(o.Router,null,Object(r.h)(x,{path:"".concat(i,"/")}),Object(r.h)(q,{path:"".concat(i,"/about")}),Object(r.h)(m,{path:"".concat(i,"/redirect/:to")}),Object(r.h)(m,{default:!0,to:"/"})))};e.default=Q},Y3FI:function(t,e,n){"use strict";n.r(e),n.d(e,"subscribers",(function(){return h})),n.d(e,"getCurrentUrl",(function(){return y})),n.d(e,"route",(function(){return d})),n.d(e,"Router",(function(){return C})),n.d(e,"Route",(function(){return x})),n.d(e,"Link",(function(){return w})),n.d(e,"exec",(function(){return u}));var r=n("HteQ"),o={};function i(t,e){for(var n in e)t[n]=e[n];return t}function u(t,e,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,u=t.match(i),c={};if(u&&u[1])for(var a=u[1].split("&"),l=0;l<a.length;l++){var p=a[l].split("=");c[decodeURIComponent(p[0])]=decodeURIComponent(p.slice(1).join("="))}t=f(t.replace(i,"")),e=f(e||"");for(var s=Math.max(t.length,e.length),h=0;h<s;h++)if(e[h]&&":"===e[h].charAt(0)){var _=e[h].replace(/(^:|[+*?]+$)/g,""),y=(e[h].match(/[+*?]+$/)||o)[0]||"",d=~y.indexOf("+"),b=~y.indexOf("*"),v=t[h]||"";if(!v&&!b&&(y.indexOf("?")<0||d)){r=!1;break}if(c[_]=decodeURIComponent(v),d||b){c[_]=t.slice(h).map(decodeURIComponent).join("/");break}}else if(e[h]!==t[h]){r=!1;break}return(!0===n.default||!1!==r)&&c}function c(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function a(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,f(e).map(l).join(""));var e}(t),t.props}function f(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function l(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var p=null,s=[],h=[],_={};function y(){var t;return""+((t=p&&p.location?p.location:p&&p.getCurrentLocation?p.getCurrentLocation():"undefined"!=typeof location?location:_).pathname||"")+(t.search||"")}function d(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=s.length;e--;)if(s[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),p&&p[e]?p[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),b(t)}function b(t){for(var e=!1,n=0;n<s.length;n++)!0===s[n].routeTo(t)&&(e=!0);for(var r=h.length;r--;)h[r](t);return e}function v(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return d(e)}}function m(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return v(t.currentTarget||t.target||this),g(t)}function g(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function O(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(v(e))return g(t)}}while(e=e.parentNode)}}var j=!1;var C=function(t){function e(e){t.call(this,e),e.history&&(p=e.history),this.state={url:e.url||y()},j||("function"==typeof addEventListener&&(p||addEventListener("popstate",(function(){b(y())})),addEventListener("click",O)),j=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){s.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;p&&(this.unlisten=p.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),s.splice(s.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(a).sort(c).map((function(t){var o=u(e,t.props.path,t.props);if(o){if(!1!==n){var c={url:e,matches:o};return i(c,o),delete c.ref,delete c.key,Object(r.cloneElement)(t,c)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,i=e.url,u=this.getMatchingChildren(Object(r.toChildArray)(n),i,!0),c=u[0]||null,a=this.previousUrl;return i!==a&&(this.previousUrl=i,"function"==typeof o&&o({router:this,url:i,previous:a,active:u,current:c})),c},e}(r.Component),w=function(t){return Object(r.createElement)("a",i({onClick:m},t))},x=function(t){return Object(r.createElement)(t.component,t)};C.subscribers=h,C.getCurrentUrl=y,C.route=d,C.Router=C,C.Route=x,C.Link=w,C.exec=u,e.default=C},"ox/y":function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("HteQ"),u=n("Y3FI");function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==r(e)&&"function"!=typeof e?t:e}var f=e.Match=function(t){function e(){var n,r;c(this,e);for(var o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return n=r=a(this,t.call.apply(t,[this].concat(i))),r.update=function(t){r.nextUrl=t,r.setState({})},a(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+r(e));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){u.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){u.subscribers.splice(u.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,u.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,u.exec)(n,t.path,{})})},e}(i.Component),l=function(t){var e=t.activeClassName,n=t.path,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,i.h)(f,{path:n||r.href},(function(t){var n=t.matches;return(0,i.h)(u.Link,o({},r,{class:[r.class||r.className,n&&e].filter(Boolean).join(" ")}))}))};e.Link=l,e.default=f,f.Link=l}});
//# sourceMappingURL=ssr-bundle.js.map