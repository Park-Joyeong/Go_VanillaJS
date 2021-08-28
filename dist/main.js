(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=null;function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=function(){function e(n,r){t(this,e),f(this,"state",void 0),f(this,"props",void 0),f(this,"$el",void 0),f(this,"$store",void 0),this.$el=n,this.props=r,this.setup(),this.useStore(),this.setEvent(),this.render()}return n(e,[{key:"setup",value:function(){}},{key:"useStore",value:function(){var t,e,n,r,o,i=this;this.$store=(t=this.initState(),e=Object.keys(t).reduce((function(t,e){return t[e]=new Set,t}),{}),new Proxy(t,{get:function(t,n){return l&&e[n].add(l),t[n]},set:function(t,n,r){return t[n]===r||JSON.stringify(t[n])===JSON.stringify(r)||(t[n]=r,e[n].forEach((function(t){return t()}))),!0}})),r=n=function(){i.render(),i.setEvent(),i.mounted()},o=-1,l=function(){cancelAnimationFrame(o),o=requestAnimationFrame(r)},n(),l=null}},{key:"setState",value:function(t){this.$state=y(y({},this.$state),t),this.render()}},{key:"initState",value:function(){return{}}},{key:"template",value:function(){return""}},{key:"render",value:function(){this.$el.innerHTML=this.template(),this.mounted()}},{key:"setEvent",value:function(){}},{key:"mounted",value:function(){}},{key:"addEvent",value:function(t,e,n){var r,o=function(t){if(Array.isArray(t))return a(t)}(r=this.$el.querySelectorAll(e))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();this.$el.addEventListener(t,(function(t){if(r=t.target,!o.includes(r)&&!r.closest(e))return!1;var r;n(t)}))}}]),e}();var h=function(e){o(f,e);var r,i,a=(r=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=c(r);if(i){var n=c(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return u(this,t)});function f(){return t(this,f),a.apply(this,arguments)}return n(f,[{key:"template",value:function(){return'\n      <div class="div-header">\n        <div class="div-logo">\n          <img class="img-logo" src="../../static/images/logo.png" alt="logo">\n        </div>\n        <div class="div-menu">\n          <a href="#">Home</a>\n          <a href="https://github.com/Park-Joyeong/Go_VanillaJS" target="_blank">About</a>\n          <a href="#login">Login</a>\n          <a href="#signup">SignUp</a>\n        </div>\n      </div>\n      '}}]),f}(p);var v=function(e){o(f,e);var r,i,a=(r=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=c(r);if(i){var n=c(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return u(this,t)});function f(){return t(this,f),a.apply(this,arguments)}return n(f,[{key:"template",value:function(){return"<div>Footer</div>"}}]),f}(p);new(function(e){o(f,e);var r,i,a=(r=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=c(r);if(i){var n=c(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return u(this,t)});function f(){return t(this,f),a.apply(this,arguments)}return n(f,[{key:"template",value:function(){return'\n      <header id="header"></header>\n      <main id="content"></main>\n      <footer id="footer"></footer>\n      '}},{key:"mounted",value:function(){var t=this.$el.querySelector("#header"),e=this.$el.querySelector("#footer");new h(t,{}),new v(e,{})}}]),f}(p))(document.querySelector("#root"))})();