(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[833],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"===typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},6032:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tour/[url]",function(){return n(6001)}])},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=i.default,u={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?u.loader=function(){return e}:"function"===typeof e?u.loader=e:"object"===typeof e&&(u=o({},u,e));!1;(u=o({},u,t)).loadableGenerated&&delete(u=o({},u,u.loadableGenerated)).loadableGenerated;if("boolean"===typeof u.ssr&&!u.suspense){if(!u.ssr)return delete u.ssr,a(n,u);delete u.ssr}return n(u)},t.noSSR=a;var o=n(6495).Z,u=n(2648).Z,i=(u(n(7294)),u(n(4302)));function a(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext(null);t.LoadableContext=r},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,o=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(6495).Z,i=(0,n(2648).Z)(n(7294)),a=n(6319),l=n(7294).useSyncExternalStore,s=[],c=[],d=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var n=function(){if(!s){var t=new p(e,o);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()},r=function(){n();var e=i.default.useContext(a.LoadableContext);e&&Array.isArray(o.modules)&&o.modules.forEach((function(t){e(t)}))},o=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);o.suspense&&(o.lazy=i.default.lazy(o.loader));var s=null;if(!d){var f=o.webpack?o.webpack():o.modules;f&&c.push((function(e){var t=!0,r=!1,o=void 0;try{for(var u,i=f[Symbol.iterator]();!(t=(u=i.next()).done);t=!0){var a=u.value;if(-1!==e.indexOf(a))return n()}}catch(l){r=!0,o=l}finally{try{t||null==i.return||i.return()}finally{if(r)throw o}}}))}var h=o.suspense?function(e,t){return r(),i.default.createElement(o.lazy,u({},e,{ref:t}))}:function(e,t){r();var n=l(s.subscribe,s.getCurrentValue,s.getCurrentValue);return i.default.useImperativeHandle(t,(function(){return{retry:s.retry}}),[]),i.default.useMemo((function(){return n.loading||n.error?i.default.createElement(o.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:s.retry}):n.loaded?i.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return h.preload=function(){return n()},h.displayName="LoadableComponent",i.default.forwardRef(h)}(f,e)}function y(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return y(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){y(s).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};y(c,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var v=h;t.default=v},6001:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l}});var r=n(5893),o=n(5152),u=n.n(o),i=n(3454),a=u()((function(){return n.e(310).then(n.bind(n,6310))}),{loadableGenerated:{webpack:function(){return[6310]}},ssr:!1}),l=!0;t.default=function(e){var t=e.item,n=(e.errors,t.id),o=(t.url,t.name),u=t.video;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"min-h-screen bg-gray-900 py-12 flex flex-col items-center justify-center",children:[(0,r.jsx)("h1",{className:"font-bold text-white text-2xl py-2 text-center",children:o}),(0,r.jsx)("div",{className:"py-12",children:(0,r.jsx)(a,{url:u,playing:!0,controls:!0})}),(0,r.jsx)("button",{type:"button",className:"tc-background-tomato","data-tc-event":n,"data-tc-token":i.env.API_TICKET,children:"\u041a\u0443\u043f\u0438\u0442\u044c \u0431\u0438\u043b\u0435\u0442"})]})})}},7663:function(e){!function(){var t={308:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var a,l=[],s=!1,c=-1;function d(){s&&a&&(s=!1,a.length?l=a.concat(l):c=-1,l.length&&f())}function f(){if(!s){var e=i(d);s=!0;for(var t=l.length;t;){for(a=l,l=[];++c<t;)a&&a[c].run();c=-1,t=l.length}a=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||s||i(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var u=n[e]={exports:{}},i=!0;try{t[e](u,u.exports,r),i=!1}finally{i&&delete n[e]}return u.exports}r.ab="//";var o=r(308);e.exports=o}()},5152:function(e,t,n){e.exports=n(638)}},function(e){e.O(0,[774,888,179],(function(){return t=6032,e(e.s=t);var t}));var t=e.O();_N_E=t}]);