(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},4564:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/recoil",function(){return n(3262)}])},4912:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),o=n(7294);function i(e){let{cellMode:t,onBlur:n,onClick:i,onDoubleClick:u,onKeyDown:c,value:l}=e,s=(0,o.useRef)(null),a=(0,o.useRef)(null),[f,d]=(0,o.useState)(String(l)),h="active"===t?{outline:"2px solid blue",zIndex:1}:"editing"===t?{boxShadow:"0 2px 6px 2px rgba(60,64,67,.45)",outline:"2px solid blue",zIndex:1}:{outline:"1px solid #ccc"};return(0,o.useEffect)(()=>{"active"===t&&s.current.focus()},[t]),(0,o.useEffect)(()=>{"editing"===t&&a.current.focus()},[t]),(0,r.jsx)("div",{onBlur:e=>"editing"!==t&&n&&n(e),onClick:i,onDoubleClick:u,onKeyDown:c,ref:s,style:{backgroundColor:"white",...h},tabIndex:0,children:"editing"===t?(0,r.jsx)("input",{onBlur:n,onChange:e=>d(e.currentTarget.value),ref:a,style:{border:"none",height:"100%",outline:"none",width:"100%"},type:"text",value:f}):(0,r.jsx)("div",{style:{padding:".25rem"},children:f})})}},3262:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5893),o=n(6026),i=n.n(o);n(7294);var u=n(7319),c=n(4480),l=n(4912);function s(e){let{children:t,colCount:n}=e;return(0,r.jsx)(c.Wh,{children:(0,r.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(n,", 1fr)")},children:t})})}function a(e){let{value:t,xy:n}=e,[o,i]=(0,c.FV)(f(n)),u=function(e){let[t,n]=e,r=(0,c.Zl)(f([t,n-1])),o=(0,c.Zl)(f([t+1,n])),i=(0,c.Zl)(f([t,n+1])),u=(0,c.Zl)(f([t-1,n]));return e=>{switch(e){case"down":i({mode:"active"});return;case"left":u({mode:"active"});return;case"right":o({mode:"active"});return;case"up":r({mode:"active"});return}}}(n);return(0,r.jsx)(l.Z,{cellMode:o.mode,onBlur:()=>i({mode:null}),onClick:()=>{i(e=>e.mode?e:{mode:"active"})},onDoubleClick:()=>i({mode:"editing"}),onKeyDown:e=>{u({ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",Enter:"down",Tab:"right"}[e.key])},value:t})}let f=(0,c.xu)({key:"cell",default:{mode:null}});var d=n(2574);function h(){let{colCount:e,rowCount:t}=(0,d.ZP)();return(0,r.jsxs)(u.Z,{fluid:!0,children:[(0,r.jsx)("h4",{children:"Recoil test"}),(0,r.jsx)(s,{colCount:e,children:i()(1,t+1).map(t=>i()(1,e+1).map(e=>(0,r.jsx)(a,{value:e*t,xy:[e,t]},"".concat(e,"-").concat(t))))})]})}},2574:function(e,t,n){"use strict";n.d(t,{$x:function(){return i},ZP:function(){return u},qf:function(){return o}});var r=n(1163);let o=20,i=100;function u(){let{query:e}=(0,r.useRouter)(),t=parseInt(e.x,10),n=parseInt(e.y,10),u=Number.isNaN(t)?o:t,c=Number.isNaN(n)?i:n;return{colCount:u,rowCount:c}}},7663:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var l=[],s=!1,a=-1;function f(){s&&r&&(s=!1,r.length?l=r.concat(l):a=-1,l.length&&d())}function d(){if(!s){var e=c(f);s=!0;for(var t=l.length;t;){for(r=l,l=[];++a<t;)r&&r[a].run();a=-1,t=l.length}r=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||s||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},u=!0;try{t[e](i,i.exports,r),u=!1}finally{u&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()}},function(e){e.O(0,[774,107,337,888,179],function(){return e(e.s=4564)}),_N_E=e.O()}]);