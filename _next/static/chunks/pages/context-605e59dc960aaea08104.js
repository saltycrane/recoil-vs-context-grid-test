(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var u=o.apply(null,n);u&&e.push(u)}else if("object"===i)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},3891:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return a}});var o=n(7294),i=n(5893);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e){var t=e.cellMode,n=e.onBlur,r=e.onClick,u=e.onDoubleClick,a=e.onKeyDown,l=e.value,f=(0,o.useRef)(null),s=(0,o.useRef)(null),p=(0,o.useState)(String(l)),y=p[0],d=p[1],v="active"===t?{outline:"2px solid blue",zIndex:1}:"editing"===t?{boxShadow:"0 2px 6px 2px rgba(60,64,67,.45)",outline:"2px solid blue",zIndex:1}:{outline:"1px solid #ccc"};return(0,o.useEffect)((function(){"active"===t&&f.current.focus()}),[t]),(0,o.useEffect)((function(){"editing"===t&&s.current.focus()}),[t]),(0,i.jsx)("div",{onBlur:function(e){return"editing"!==t&&n&&n(e)},onClick:r,onDoubleClick:u,onKeyDown:a,ref:f,style:c({backgroundColor:"white"},v),tabIndex:0,children:"editing"===t?(0,i.jsx)("input",{onBlur:n,onChange:function(e){return d(e.currentTarget.value)},ref:s,style:{border:"none",height:"100%",outline:"none",width:"100%"},type:"text",value:y}):(0,i.jsx)("div",{style:{padding:".25rem"},children:y})})}},1934:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return be}});var r=n(6486),o=n(7294),i=n(8389),u=n(6311);function c(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function a(e){return!!e&&!!e[V]}function l(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===G}(e)||Array.isArray(e)||!!e[L]||!!e.constructor[L]||b(e)||h(e))}function f(e,t,n){void 0===n&&(n=!1),0===s(e)?(n?Object.keys:H)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function s(e){var t=e[V];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:b(e)?2:h(e)?3:0}function p(e,t){return 2===s(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function y(e,t){return 2===s(e)?e.get(t):e[t]}function d(e,t,n){var r=s(e);2===r?e.set(t,n):3===r?(e.delete(t),e.add(n)):e[t]=n}function v(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function b(e){return W&&e instanceof Map}function h(e){return X&&e instanceof Set}function g(e){return e.o||e.t}function m(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Q(e);delete t[V];for(var n=H(t),r=0;r<n.length;r++){var o=n[r],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function w(e,t){return void 0===t&&(t=!1),x(e)||a(e)||!l(e)||(s(e)>1&&(e.set=e.add=e.clear=e.delete=O),Object.freeze(e),t&&f(e,(function(e,t){return w(t,!0)}),!0)),e}function O(){c(2)}function x(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function P(e){var t=Y[e];return t||c(18,e),t}function j(){return U}function C(e,t){t&&(P("Patches"),e.u=[],e.s=[],e.v=t)}function A(e){_(e),e.p.forEach(S),e.p=null}function _(e){e===U&&(U=e.l)}function k(e){return U={p:[],l:U,h:e,m:!0,_:0}}function S(e){var t=e[V];0===t.i||1===t.i?t.j():t.O=!0}function E(e,t){t._=t.p.length;var n=t.p[0],r=void 0!==e&&e!==n;return t.h.g||P("ES5").S(t,e,r),r?(n[V].P&&(A(t),c(4)),l(e)&&(e=D(t,e),t.l||I(t,e)),t.u&&P("Patches").M(n[V],e,t.u,t.s)):e=D(t,n,[]),A(t),t.u&&t.v(t.u,t.s),e!==J?e:void 0}function D(e,t,n){if(x(t))return t;var r=t[V];if(!r)return f(t,(function(o,i){return N(e,r,t,o,i,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return I(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=4===r.i||5===r.i?r.o=m(r.k):r.o;f(3===r.i?new Set(o):o,(function(t,i){return N(e,r,o,t,i,n)})),I(e,o,!1),n&&e.u&&P("Patches").R(r,n,e.u,e.s)}return r.o}function N(e,t,n,r,o,i){if(a(o)){var u=D(e,o,i&&t&&3!==t.i&&!p(t.D,r)?i.concat(r):void 0);if(d(n,r,u),!a(u))return;e.m=!1}if(l(o)&&!x(o)){if(!e.h.F&&e._<1)return;D(e,o),t&&t.A.l||I(e,o)}}function I(e,t,n){void 0===n&&(n=!1),e.h.F&&e.m&&w(t,n)}function F(e,t){var n=e[V];return(n?g(n):e)[t]}function M(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function R(e){e.P||(e.P=!0,e.l&&R(e.l))}function T(e){e.o||(e.o=m(e.t))}function z(e,t,n){var r=b(t)?P("MapSet").N(t,n):h(t)?P("MapSet").T(t,n):e.g?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:j(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},o=r,i=ee;n&&(o=[r],i=te);var u=Proxy.revocable(o,i),c=u.revoke,a=u.proxy;return r.k=a,r.j=c,a}(t,n):P("ES5").J(t,n);return(n?n.A:j()).p.push(r),r}function K(e){return a(e)||c(22,e),function e(t){if(!l(t))return t;var n,r=t[V],o=s(t);if(r){if(!r.P&&(r.i<4||!P("ES5").K(r)))return r.t;r.I=!0,n=$(t,o),r.I=!1}else n=$(t,o);return f(n,(function(t,o){r&&y(r.t,t)===o||d(n,t,e(o))})),3===o?new Set(n):n}(e)}function $(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return m(e)}var Z,U,B="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),W="undefined"!=typeof Map,X="undefined"!=typeof Set,q="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,J=B?Symbol.for("immer-nothing"):((Z={})["immer-nothing"]=!0,Z),L=B?Symbol.for("immer-draftable"):"__$immer_draftable",V=B?Symbol.for("immer-state"):"__$immer_state",G=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),H="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Q=Object.getOwnPropertyDescriptors||function(e){var t={};return H(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},Y={},ee={get:function(e,t){if(t===V)return e;var n=g(e);if(!p(n,t))return function(e,t,n){var r,o=M(t,n);return o?"value"in o?o.value:null===(r=o.get)||void 0===r?void 0:r.call(e.k):void 0}(e,n,t);var r=n[t];return e.I||!l(r)?r:r===F(e.t,t)?(T(e),e.o[t]=z(e.A.h,r,e)):r},has:function(e,t){return t in g(e)},ownKeys:function(e){return Reflect.ownKeys(g(e))},set:function(e,t,n){var r=M(g(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=F(g(e),t),i=null==o?void 0:o[V];if(i&&i.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(v(n,o)&&(void 0!==n||p(e.t,t)))return!0;T(e),R(e)}return e.o[t]===n&&"number"!=typeof n&&(void 0!==n||t in e.o)||(e.o[t]=n,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==F(e.t,t)||t in e.t?(e.D[t]=!1,T(e),R(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=g(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){c(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){c(12)}},te={};f(ee,(function(e,t){te[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),te.deleteProperty=function(e,t){return ee.deleteProperty.call(this,e[0],t)},te.set=function(e,t,n){return ee.set.call(this,e[0],t,n,e[0])};var ne=new(function(){function e(e){var t=this;this.g=q,this.F=!0,this.produce=function(e,n,r){if("function"==typeof e&&"function"!=typeof n){var o=n;n=e;var i=t;return function(e){var t=this;void 0===e&&(e=o);for(var r=arguments.length,u=Array(r>1?r-1:0),c=1;c<r;c++)u[c-1]=arguments[c];return i.produce(e,(function(e){var r;return(r=n).call.apply(r,[t,e].concat(u))}))}}var u;if("function"!=typeof n&&c(6),void 0!==r&&"function"!=typeof r&&c(7),l(e)){var a=k(t),f=z(t,e,void 0),s=!0;try{u=n(f),s=!1}finally{s?A(a):_(a)}return"undefined"!=typeof Promise&&u instanceof Promise?u.then((function(e){return C(a,r),E(e,a)}),(function(e){throw A(a),e})):(C(a,r),E(u,a))}if(!e||"object"!=typeof e){if((u=n(e))===J)return;return void 0===u&&(u=e),t.F&&w(u,!0),u}c(21,e)},this.produceWithPatches=function(e,n){return"function"==typeof e?function(n){for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return t.produceWithPatches(n,(function(t){return e.apply(void 0,[t].concat(o))}))}:[t.produce(e,n,(function(e,t){r=e,o=t})),r,o];var r,o},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){l(e)||c(8),a(e)&&(e=K(e));var t=k(this),n=z(this,e,void 0);return n[V].C=!0,_(t),n},t.finishDraft=function(e,t){var n=(e&&e[V]).A;return C(n,t),E(void 0,n)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!q&&c(20),this.g=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}var o=P("Patches").$;return a(e)?o(e,t):this.produce(e,(function(e){return o(e,t.slice(n+1))}))},e}()),re=ne.produce,oe=(ne.produceWithPatches.bind(ne),ne.setAutoFreeze.bind(ne),ne.setUseProxies.bind(ne),ne.applyPatches.bind(ne),ne.createDraft.bind(ne),ne.finishDraft.bind(ne),re),ie=n(3891),ue=n(5893);function ce(e){var t=e.children,n=e.colCount,r=(0,o.useReducer)(fe,le),i=r[0],u=r[1];return(0,ue.jsx)(de.Provider,{value:i,children:(0,ue.jsx)(ye.Provider,{value:u,children:(0,ue.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(n,", 1fr)")},children:t})})})}function ae(e){var t=e.value,n=e.xy,r=(0,o.useContext)(ye),i=(0,o.useContext)(de).activeCell,u=pe(i.xy,n)?i.mode:null;return(0,ue.jsx)(ie.Z,{cellMode:u,onBlur:function(){return r({type:"blur_cell",xy:n})},onClick:function(){return r({type:"click_cell",xy:n})},onDoubleClick:function(){return r({type:"double_click_cell",xy:n})},onKeyDown:function(e){r({type:"key_down_cell",key:e.key,xy:n})},value:t})}var le={activeCell:{mode:null,xy:null}},fe=oe((function(e,t){switch(t.type){case"blur_cell":return void(pe(e.activeCell.xy,t.xy)&&(e.activeCell.mode=null));case"click_cell":if(pe(e.activeCell.xy,t.xy))return;return e.activeCell.mode="active",void(e.activeCell.xy=t.xy);case"double_click_cell":return e.activeCell.mode="editing",void(e.activeCell.xy=t.xy);case"key_down_cell":switch(t.key){case"ArrowDown":case"Enter":return void(e=se(e,"down"));case"ArrowLeft":return void(e=se(e,"left"));case"ArrowRight":case"Tab":return void(e=se(e,"right"));case"ArrowUp":return void(e=se(e,"up"))}return}}));function se(e,t){var n=(0,u.Z)(e.activeCell.xy,2),r=n[0],o=n[1];switch(e.activeCell.mode="active",t){case"down":e.activeCell.xy=[r,o+1];break;case"left":e.activeCell.xy=[r-1,o];break;case"right":e.activeCell.xy=[r+1,o];break;case"up":e.activeCell.xy=[r,o-1]}return e}function pe(e,t){if(null===e&&null===t)throw new Error("Unexpected args are both null (null, null)");return e&&t&&e[0]===t[0]&&e[1]===t[1]}var ye=(0,o.createContext)((function(){})),de=(0,o.createContext)(le),ve=n(4832);function be(){var e=(0,ve.ZP)(),t=e.colCount,n=e.rowCount;return(0,ue.jsxs)(i.Z,{fluid:!0,children:[(0,ue.jsx)("h4",{children:"Context test"}),(0,ue.jsx)(ce,{colCount:t,children:(0,r.range)(1,n+1).map((function(e){return(0,r.range)(1,t+1).map((function(t){return(0,ue.jsx)(ae,{value:t*e,xy:[t,e]},"".concat(t,"-").concat(e))}))}))})]})}},4832:function(e,t,n){"use strict";n.d(t,{qf:function(){return o},$x:function(){return i},ZP:function(){return u}});var r=n(1163),o=20,i=100;function u(){var e=(0,r.useRouter)().query,t=parseInt(e.x,10),n=parseInt(e.y,10);return{colCount:Number.isNaN(t)?o:t,rowCount:Number.isNaN(n)?i:n}}},7148:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/context",function(){return n(1934)}])},1163:function(e,t,n){e.exports=n(4651)},8389:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return d}});var o,i=n(7294),u=n(5697),c=n.n(u),a=n(4184),l=n.n(a);var f="object"===typeof window&&window.Element||function(){};c().oneOfType([c().string,c().func,function(e,t,n){if(!(e[t]instanceof f))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},c().shape({current:c().any})]);var s=c().oneOfType([c().func,c().string,c().shape({$$typeof:c().symbol,render:c().func}),c().arrayOf(c().oneOfType([c().func,c().string,c().shape({$$typeof:c().symbol,render:c().func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;var p={tag:s,fluid:c().oneOfType([c().bool,c().string]),className:c().string,cssModule:c().object},y=function(e){var t=e.className,n=e.cssModule,u=e.fluid,c=e.tag,a=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["className","cssModule","fluid","tag"]),f="container";!0===u?f="container-fluid":u&&(f="container-"+u);var s=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=o),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}(l()(t,f),n);return i.createElement(c,r({},a,{className:s}))};y.propTypes=p,y.defaultProps={tag:"div"};var d=y},6311:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,c=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})}},function(e){e.O(0,[774,662,888,179],(function(){return t=7148,e(e.s=t);var t}));var t=e.O();_N_E=t}]);