(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{4564:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/recoil",function(){return t(8938)}])},2454:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var r=t(5893),o=t(7294);function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){u(n,e,t[e])}))}return n}function c(n){var e=n.cellMode,t=n.onBlur,u=n.onClick,c=n.onDoubleClick,l=n.onKeyDown,a=n.value,f=(0,o.useRef)(null),d=(0,o.useRef)(null),s=(0,o.useState)(String(a)),v=s[0],y=s[1],p="active"===e?{outline:"2px solid blue",zIndex:1}:"editing"===e?{boxShadow:"0 2px 6px 2px rgba(60,64,67,.45)",outline:"2px solid blue",zIndex:1}:{outline:"1px solid #ccc"};return(0,o.useEffect)((function(){"active"===e&&f.current.focus()}),[e]),(0,o.useEffect)((function(){"editing"===e&&d.current.focus()}),[e]),(0,r.jsx)("div",{onBlur:function(n){return"editing"!==e&&t&&t(n)},onClick:u,onDoubleClick:c,onKeyDown:l,ref:f,style:i({backgroundColor:"white"},p),tabIndex:0,children:"editing"===e?(0,r.jsx)("input",{onBlur:t,onChange:function(n){return y(n.currentTarget.value)},ref:d,style:{border:"none",height:"100%",outline:"none",width:"100%"},type:"text",value:v}):(0,r.jsx)("div",{style:{padding:".25rem"},children:v})})}},8938:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return y}});var r=t(5893),o=t(6486),u=(t(7294),t(450)),i=t(2804),c=t(2454);function l(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function a(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,u=[],i=!0,c=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(u.push(r.value),!e||u.length!==e);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return u}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return l(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(n){var e=n.children,t=n.colCount;return(0,r.jsx)(i.Wh,{children:(0,r.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(t,", 1fr)")},children:e})})}function d(n){var e=n.value,t=n.xy,o=a((0,i.FV)(s(t)),2),u=o[0],l=o[1],f=function(n){var e=a(n,2),t=e[0],r=e[1],o=(0,i.Zl)(s([t,r-1])),u=(0,i.Zl)(s([t+1,r])),c=(0,i.Zl)(s([t,r+1])),l=(0,i.Zl)(s([t-1,r]));return function(n){switch(n){case"down":return void c({mode:"active"});case"left":return void l({mode:"active"});case"right":return void u({mode:"active"});case"up":return void o({mode:"active"})}}}(t);return(0,r.jsx)(c.Z,{cellMode:u.mode,onBlur:function(){return l({mode:null})},onClick:function(){l((function(n){return n.mode?n:{mode:"active"}}))},onDoubleClick:function(){return l({mode:"editing"})},onKeyDown:function(n){f({ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",Enter:"down",Tab:"right"}[n.key])},value:e})}var s=(0,i.xu)({key:"cell",default:{mode:null}});var v=t(4837);function y(){var n=(0,v.ZP)(),e=n.colCount,t=n.rowCount;return(0,r.jsxs)(u.W2,{fluid:!0,children:[(0,r.jsx)("h4",{children:"Recoil test"}),(0,r.jsx)(f,{colCount:e,children:(0,o.range)(1,t+1).map((function(n){return(0,o.range)(1,e+1).map((function(e){return(0,r.jsx)(d,{value:e*n,xy:[e,n]},"".concat(e,"-").concat(n))}))}))})]})}},4837:function(n,e,t){"use strict";t.d(e,{$x:function(){return u},ZP:function(){return i},qf:function(){return o}});var r=t(1163),o=20,u=100;function i(){var n=(0,r.useRouter)().query,e=parseInt(n.x,10),t=parseInt(n.y,10);return{colCount:Number.isNaN(e)?o:e,rowCount:Number.isNaN(t)?u:t}}}},function(n){n.O(0,[774,260,662,970,997,888,179],(function(){return e=4564,n(n.s=e);var e}));var e=n.O();_N_E=e}]);