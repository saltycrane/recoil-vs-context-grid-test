(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{6587:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/context",function(){return r(4329)}])},4912:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(5893),i=r(7294);function o(e){let{cellMode:t,onBlur:r,onClick:o,onDoubleClick:l,onKeyDown:c,value:a}=e,u=(0,i.useRef)(null),s=(0,i.useRef)(null),[f,_]=(0,i.useState)(String(a)),p="active"===t?{outline:"2px solid blue",zIndex:1}:"editing"===t?{boxShadow:"0 2px 6px 2px rgba(60,64,67,.45)",outline:"2px solid blue",zIndex:1}:{outline:"1px solid #ccc"};return(0,i.useEffect)(()=>{"active"===t&&u.current.focus()},[t]),(0,i.useEffect)(()=>{"editing"===t&&s.current.focus()},[t]),(0,n.jsx)("div",{onBlur:e=>"editing"!==t&&r&&r(e),onClick:o,onDoubleClick:l,onKeyDown:c,ref:u,style:{backgroundColor:"white",...p},tabIndex:0,children:"editing"===t?(0,n.jsx)("input",{onBlur:r,onChange:e=>_(e.currentTarget.value),ref:s,style:{border:"none",height:"100%",outline:"none",width:"100%"},type:"text",value:f}):(0,n.jsx)("div",{style:{padding:".25rem"},children:f})})}},4329:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return eo}});var n,i=r(5893),o=r(6026),l=r.n(o),c=r(7294),a=r(7319),u=Symbol.for("immer-nothing"),s=Symbol.for("immer-draftable"),f=Symbol.for("immer-state");function _(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var p=Object.getPrototypeOf;function d(e){return!!e&&!!e[f]}function y(e){return!!e&&(b(e)||Array.isArray(e)||!!e[s]||!!e.constructor?.[s]||g(e)||C(e))}var h=Object.prototype.constructor.toString();function b(e){if(!e||"object"!=typeof e)return!1;let t=p(e);if(null===t)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===h}function v(e,t){0===w(e)?Object.entries(e).forEach(([r,n])=>{t(r,n,e)}):e.forEach((r,n)=>t(n,r,e))}function w(e){let t=e[f];return t?t.type_:Array.isArray(e)?1:g(e)?2:C(e)?3:0}function m(e,t){return 2===w(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function x(e,t,r){let n=w(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function g(e){return e instanceof Map}function C(e){return e instanceof Set}function P(e){return e.copy_||e.base_}function S(e,t){if(g(e))return new Map(e);if(C(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&b(e)){if(!p(e)){let t=Object.create(null);return Object.assign(t,e)}return{...e}}let r=Object.getOwnPropertyDescriptors(e);delete r[f];let n=Reflect.ownKeys(r);for(let t=0;t<n.length;t++){let i=n[t],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(p(e),r)}function k(e,t=!1){return j(e)||d(e)||!y(e)||(w(e)>1&&(e.set=e.add=e.clear=e.delete=z),Object.freeze(e),t&&v(e,(e,t)=>k(t,!0),!0)),e}function z(){_(2)}function j(e){return Object.isFrozen(e)}var O={};function A(e){let t=O[e];return t||_(0,e),t}function D(e,t){t&&(A("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function N(e){F(e),e.drafts_.forEach(R),e.drafts_=null}function F(e){e===n&&(n=e.parent_)}function E(e){return n={drafts_:[],parent_:n,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function R(e){let t=e[f];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function M(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0],n=void 0!==e&&e!==r;return n?(r[f].modified_&&(N(t),_(4)),y(e)&&(e=I(t,e),t.parent_||T(t,e)),t.patches_&&A("Patches").generateReplacementPatches_(r[f].base_,e,t.patches_,t.inversePatches_)):e=I(t,r,[]),N(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==u?e:void 0}function I(e,t,r){if(j(t))return t;let n=t[f];if(!n)return v(t,(i,o)=>K(e,n,t,i,o,r),!0),t;if(n.scope_!==e)return t;if(!n.modified_)return T(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;let t=n.copy_,i=t,o=!1;3===n.type_&&(i=new Set(t),t.clear(),o=!0),v(i,(i,l)=>K(e,n,t,i,l,r,o)),T(e,t,!1),r&&e.patches_&&A("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function K(e,t,r,n,i,o,l){if(d(i)){let l=o&&t&&3!==t.type_&&!m(t.assigned_,n)?o.concat(n):void 0,c=I(e,i,l);if(x(r,n,c),!d(c))return;e.canAutoFreeze_=!1}else l&&r.add(i);if(y(i)&&!j(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;I(e,i),t&&t.scope_.parent_||T(e,i)}}function T(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&k(t,r)}var U={get(e,t){if(t===f)return e;let r=P(e);if(!m(r,t))return function(e,t,r){let n=B(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);let n=r[t];return e.finalized_||!y(n)?n:n===W(e.base_,t)?(X(e),e.copy_[t]=$(n,e)):n},has:(e,t)=>t in P(e),ownKeys:e=>Reflect.ownKeys(P(e)),set(e,t,r){let n=B(P(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){let n=W(P(e),t),i=n?.[f];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if((r===n?0!==r||1/r==1/n:r!=r&&n!=n)&&(void 0!==r||m(e.base_,t)))return!0;X(e),L(e)}return!!(e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t]))||(e.copy_[t]=r,e.assigned_[t]=!0,!0)},deleteProperty:(e,t)=>(void 0!==W(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,X(e),L(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){let r=P(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){_(11)},getPrototypeOf:e=>p(e.base_),setPrototypeOf(){_(12)}},Z={};function W(e,t){let r=e[f],n=r?P(r):e;return n[t]}function B(e,t){if(!(t in e))return;let r=p(e);for(;r;){let e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=p(r)}}function L(e){!e.modified_&&(e.modified_=!0,e.parent_&&L(e.parent_))}function X(e){e.copy_||(e.copy_=S(e.base_,e.scope_.immer_.useStrictShallowCopy_))}function $(e,t){let r=g(e)?A("MapSet").proxyMap_(e,t):C(e)?A("MapSet").proxySet_(e,t):function(e,t){let r=Array.isArray(e),i={type_:r?1:0,scope_:t?t.scope_:n,modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},o=i,l=U;r&&(o=[i],l=Z);let{revoke:c,proxy:a}=Proxy.revocable(o,l);return i.draft_=a,i.revoke_=c,a}(e,t),i=t?t.scope_:n;return i.drafts_.push(r),r}v(U,(e,t)=>{Z[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Z.deleteProperty=function(e,t){return Z.set.call(this,e,t,void 0)},Z.set=function(e,t,r){return U.set.call(this,e[0],t,r,e[0])};var q=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{let n;if("function"==typeof e&&"function"!=typeof t){let r=t;t=e;let n=this;return function(e=r,...i){return n.produce(e,e=>t.call(this,e,...i))}}if("function"!=typeof t&&_(6),void 0!==r&&"function"!=typeof r&&_(7),y(e)){let i=E(this),o=$(e,void 0),l=!0;try{n=t(o),l=!1}finally{l?N(i):F(i)}return D(i,r),M(n,i)}if(e&&"object"==typeof e)_(1,e);else{if(void 0===(n=t(e))&&(n=e),n===u&&(n=void 0),this.autoFreeze_&&k(n,!0),r){let t=[],i=[];A("Patches").generateReplacementPatches_(e,n,t,i),r(t,i)}return n}},this.produceWithPatches=(e,t)=>{let r,n;if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,t=>e(t,...r));let i=this.produce(e,t,(e,t)=>{r=e,n=t});return[i,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){var t;y(e)||_(8),d(e)&&(d(t=e)||_(10,t),e=function e(t){let r;if(!y(t)||j(t))return t;let n=t[f];if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=S(t,n.scope_.immer_.useStrictShallowCopy_)}else r=S(t,!0);return v(r,(t,n)=>{x(r,t,e(n))}),n&&(n.finalized_=!1),r}(t));let r=E(this),n=$(e,void 0);return n[f].isManual_=!0,F(r),n}finishDraft(e,t){let r=e&&e[f];r&&r.isManual_||_(9);let{scope_:n}=r;return D(n,t),M(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));let n=A("Patches").applyPatches_;return d(e)?n(e,t):this.produce(e,e=>n(e,t))}},G=q.produce;q.produceWithPatches.bind(q),q.setAutoFreeze.bind(q),q.setUseStrictShallowCopy.bind(q),q.applyPatches.bind(q),q.createDraft.bind(q),q.finishDraft.bind(q);var H=r(4912);function J(e){let{children:t,colCount:r}=e,[n,o]=(0,c.useReducer)(Y,V);return(0,i.jsx)(en.Provider,{value:n,children:(0,i.jsx)(er.Provider,{value:o,children:(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(r,", 1fr)")},children:t})})})}function Q(e){let{value:t,xy:r}=e,n=(0,c.useContext)(er),{activeCell:o}=(0,c.useContext)(en),l=et(o.xy,r)?o.mode:null;return(0,i.jsx)(H.Z,{cellMode:l,onBlur:()=>n({type:"blur_cell",xy:r}),onClick:()=>n({type:"click_cell",xy:r}),onDoubleClick:()=>n({type:"double_click_cell",xy:r}),onKeyDown:e=>{n({type:"key_down_cell",key:e.key,xy:r})},value:t})}let V={activeCell:{mode:null,xy:null}},Y=G((e,t)=>{switch(t.type){case"blur_cell":et(e.activeCell.xy,t.xy)&&(e.activeCell.mode=null);return;case"click_cell":if(et(e.activeCell.xy,t.xy))return;e.activeCell.mode="active",e.activeCell.xy=t.xy;return;case"double_click_cell":e.activeCell.mode="editing",e.activeCell.xy=t.xy;return;case"key_down_cell":switch(t.key){case"ArrowDown":case"Enter":e=ee(e,"down");break;case"ArrowLeft":e=ee(e,"left");break;case"ArrowRight":case"Tab":e=ee(e,"right");break;case"ArrowUp":e=ee(e,"up")}return}});function ee(e,t){let[r,n]=e.activeCell.xy;switch(e.activeCell.mode="active",t){case"down":e.activeCell.xy=[r,n+1];break;case"left":e.activeCell.xy=[r-1,n];break;case"right":e.activeCell.xy=[r+1,n];break;case"up":e.activeCell.xy=[r,n-1]}return e}function et(e,t){if(null===e&&null===t)throw Error("Unexpected args are both null (null, null)");return e&&t&&e[0]===t[0]&&e[1]===t[1]}let er=(0,c.createContext)(()=>{}),en=(0,c.createContext)(V);var ei=r(2574);function eo(){let{colCount:e,rowCount:t}=(0,ei.ZP)();return(0,i.jsxs)(a.Z,{fluid:!0,children:[(0,i.jsx)("h4",{children:"Context test"}),(0,i.jsx)(J,{colCount:e,children:l()(1,t+1).map(t=>l()(1,e+1).map(e=>(0,i.jsx)(Q,{value:e*t,xy:[e,t]},"".concat(e,"-").concat(t))))})]})}},2574:function(e,t,r){"use strict";r.d(t,{$x:function(){return o},ZP:function(){return l},qf:function(){return i}});var n=r(1163);let i=20,o=100;function l(){let{query:e}=(0,n.useRouter)(),t=parseInt(e.x,10),r=parseInt(e.y,10),l=Number.isNaN(t)?i:t,c=Number.isNaN(r)?o:r;return{colCount:l,rowCount:c}}}},function(e){e.O(0,[774,337,888,179],function(){return e(e.s=6587)}),_N_E=e.O()}]);