(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7381],{407:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},7782:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]])},3247:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},2489:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},3145:function(e,t,n){"use strict";n.d(t,{default:function(){return o.a}});var r=n(8461),o=n.n(r)},8461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return a},getImageProps:function(){return l}});let r=n(7043),o=n(5346),i=n(5878),u=r._(n(5084));function l(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let a=i.Image},5044:function(e){e.exports={style:{fontFamily:"'__GeistMono_c1e5c9', ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace"},className:"__className_c1e5c9",variable:"__variable_c1e5c9"}},8313:function(e){e.exports={style:{fontFamily:"'__GeistSans_3a0388', '__GeistSans_Fallback_3a0388'"},className:"__className_3a0388",variable:"__variable_3a0388"}},6741:function(e,t,n){"use strict";function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}n.d(t,{M:function(){return r}})},8575:function(e,t,n){"use strict";n.d(t,{F:function(){return i},e:function(){return u}});var r=n(2265);function o(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function i(...e){return t=>{let n=!1,r=e.map(e=>{let r=o(e,t);return n||"function"!=typeof r||(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof n?n():o(e[t],null)}}}}function u(...e){return r.useCallback(i(...e),e)}},3966:function(e,t,n){"use strict";n.d(t,{b:function(){return u},k:function(){return i}});var r=n(2265),o=n(7437);function i(e,t){let n=r.createContext(t),i=e=>{let{children:t,...i}=e,u=r.useMemo(()=>i,Object.values(i));return(0,o.jsx)(n.Provider,{value:u,children:t})};return i.displayName=e+"Provider",[i,function(o){let i=r.useContext(n);if(i)return i;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function u(e,t=[]){let n=[],i=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return i.scopeName=e,[function(t,i){let u=r.createContext(i),l=n.length;n=[...n,i];let a=t=>{let{scope:n,children:i,...a}=t,s=n?.[e]?.[l]||u,c=r.useMemo(()=>a,Object.values(a));return(0,o.jsx)(s.Provider,{value:c,children:i})};return a.displayName=t+"Provider",[a,function(n,o){let a=o?.[e]?.[l]||u,s=r.useContext(a);if(s)return s;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(i,...t)]}},3051:function(e,t,n){"use strict";let r;n.d(t,{x8:function(){return e$},VY:function(){return ez},dk:function(){return eK},aV:function(){return eZ},h_:function(){return eU},fC:function(){return eA},Dx:function(){return eV},xz:function(){return eB}});var o,i=n(2265),u=n(6741),l=n(8575),a=n(3966),s=n(9255),c=n(886),d=n(4887),f=n(7495),v=n(7437),p=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=i.forwardRef((e,n)=>{let{asChild:r,...o}=e,i=r?f.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,v.jsx)(i,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),m=n(6606),h="dismissableLayer.update",y=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),g=i.forwardRef((e,t)=>{var n,r;let{disableOutsidePointerEvents:a=!1,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:d,onInteractOutside:f,onDismiss:g,...w}=e,N=i.useContext(y),[C,R]=i.useState(null),x=null!==(r=null==C?void 0:C.ownerDocument)&&void 0!==r?r:null===(n=globalThis)||void 0===n?void 0:n.document,[,M]=i.useState({}),D=(0,l.e)(t,e=>R(e)),O=Array.from(N.layers),[_]=[...N.layersWithOutsidePointerEventsDisabled].slice(-1),P=O.indexOf(_),S=C?O.indexOf(C):-1,L=N.layersWithOutsidePointerEventsDisabled.size>0,T=S>=P,j=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,m.W)(e),o=i.useRef(!1),u=i.useRef(()=>{});return i.useEffect(()=>{let e=e=>{if(e.target&&!o.current){let t=function(){E("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",u.current),u.current=t,n.addEventListener("click",u.current,{once:!0})):t()}else n.removeEventListener("click",u.current);o.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",u.current)}},[n,r]),{onPointerDownCapture:()=>o.current=!0}}(e=>{let t=e.target,n=[...N.branches].some(e=>e.contains(t));!T||n||(null==c||c(e),null==f||f(e),e.defaultPrevented||null==g||g())},x),k=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,m.W)(e),o=i.useRef(!1);return i.useEffect(()=>{let e=e=>{e.target&&!o.current&&E("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}(e=>{let t=e.target;[...N.branches].some(e=>e.contains(t))||(null==d||d(e),null==f||f(e),e.defaultPrevented||null==g||g())},x);return!function(e,t=globalThis?.document){let n=(0,m.W)(e);i.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{S!==N.layers.size-1||(null==s||s(e),!e.defaultPrevented&&g&&(e.preventDefault(),g()))},x),i.useEffect(()=>{if(C)return a&&(0===N.layersWithOutsidePointerEventsDisabled.size&&(o=x.body.style.pointerEvents,x.body.style.pointerEvents="none"),N.layersWithOutsidePointerEventsDisabled.add(C)),N.layers.add(C),b(),()=>{a&&1===N.layersWithOutsidePointerEventsDisabled.size&&(x.body.style.pointerEvents=o)}},[C,x,a,N]),i.useEffect(()=>()=>{C&&(N.layers.delete(C),N.layersWithOutsidePointerEventsDisabled.delete(C),b())},[C,N]),i.useEffect(()=>{let e=()=>M({});return document.addEventListener(h,e),()=>document.removeEventListener(h,e)},[]),(0,v.jsx)(p.div,{...w,ref:D,style:{pointerEvents:L?T?"auto":"none":void 0,...e.style},onFocusCapture:(0,u.M)(e.onFocusCapture,k.onFocusCapture),onBlurCapture:(0,u.M)(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:(0,u.M)(e.onPointerDownCapture,j.onPointerDownCapture)})});function b(){let e=new CustomEvent(h);document.dispatchEvent(e)}function E(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});(t&&i.addEventListener(e,t,{once:!0}),o)?i&&d.flushSync(()=>i.dispatchEvent(u)):i.dispatchEvent(u)}g.displayName="DismissableLayer",i.forwardRef((e,t)=>{let n=i.useContext(y),r=i.useRef(null),o=(0,l.e)(t,r);return i.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,v.jsx)(p.div,{...e,ref:o})}).displayName="DismissableLayerBranch";var w="focusScope.autoFocusOnMount",N="focusScope.autoFocusOnUnmount",C={bubbles:!1,cancelable:!0},R=i.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:u,...a}=e,[s,c]=i.useState(null),d=(0,m.W)(o),f=(0,m.W)(u),h=i.useRef(null),y=(0,l.e)(t,e=>c(e)),g=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let e=function(e){if(g.paused||!s)return;let t=e.target;s.contains(t)?h.current=t:D(h.current,{select:!0})},t=function(e){if(g.paused||!s)return;let t=e.relatedTarget;null===t||s.contains(t)||D(h.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&D(s)});return s&&n.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,s,g.paused]),i.useEffect(()=>{if(s){O.add(g);let e=document.activeElement;if(!s.contains(e)){let t=new CustomEvent(w,C);s.addEventListener(w,d),s.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(D(r,{select:t}),document.activeElement!==n)return}(x(s).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&D(s))}return()=>{s.removeEventListener(w,d),setTimeout(()=>{let t=new CustomEvent(N,C);s.addEventListener(N,f),s.dispatchEvent(t),t.defaultPrevented||D(null!=e?e:document.body,{select:!0}),s.removeEventListener(N,f),O.remove(g)},0)}}},[s,d,f,g]);let b=i.useCallback(e=>{if(!n&&!r||g.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,i]=function(e){let t=x(e);return[M(t,e),M(t.reverse(),e)]}(t);r&&i?e.shiftKey||o!==i?e.shiftKey&&o===r&&(e.preventDefault(),n&&D(i,{select:!0})):(e.preventDefault(),n&&D(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,g.paused]);return(0,v.jsx)(p.div,{tabIndex:-1,...a,ref:y,onKeyDown:b})});function x(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function M(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function D(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}R.displayName="FocusScope";var O=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=_(r,e)).unshift(e)},remove(e){var t;null===(t=(r=_(r,e))[0])||void 0===t||t.resume()}});function _(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var P=n(1188),S=i.forwardRef((e,t)=>{var n,r;let{container:o,...u}=e,[l,a]=i.useState(!1);(0,P.b)(()=>a(!0),[]);let s=o||l&&(null===(r=globalThis)||void 0===r?void 0:null===(n=r.document)||void 0===n?void 0:n.body);return s?d.createPortal((0,v.jsx)(p.div,{...u,ref:t}),s):null});S.displayName="Portal";var L=e=>{var t,n;let r,o;let{present:u,children:a}=e,s=function(e){var t,n;let[r,o]=i.useState(),u=i.useRef({}),l=i.useRef(e),a=i.useRef("none"),[s,c]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},i.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return i.useEffect(()=>{let e=T(u.current);a.current="mounted"===s?e:"none"},[s]),(0,P.b)(()=>{let t=u.current,n=l.current;if(n!==e){let r=a.current,o=T(t);e?c("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?c("UNMOUNT"):n&&r!==o?c("ANIMATION_OUT"):c("UNMOUNT"),l.current=e}},[e,c]),(0,P.b)(()=>{if(r){var e;let t;let n=null!==(e=r.ownerDocument.defaultView)&&void 0!==e?e:window,o=e=>{let o=T(u.current).includes(e.animationName);if(e.target===r&&o&&(c("ANIMATION_END"),!l.current)){let e=r.style.animationFillMode;r.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===r.style.animationFillMode&&(r.style.animationFillMode=e)})}},i=e=>{e.target===r&&(a.current=T(u.current))};return r.addEventListener("animationstart",i),r.addEventListener("animationcancel",o),r.addEventListener("animationend",o),()=>{n.clearTimeout(t),r.removeEventListener("animationstart",i),r.removeEventListener("animationcancel",o),r.removeEventListener("animationend",o)}}c("ANIMATION_END")},[r,c]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:i.useCallback(e=>{e&&(u.current=getComputedStyle(e)),o(e)},[])}}(u),c="function"==typeof a?a({present:s.isPresent}):i.Children.only(a),d=(0,l.e)(s.ref,(r=null===(t=Object.getOwnPropertyDescriptor(c.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in r&&r.isReactWarning?c.ref:(r=null===(n=Object.getOwnPropertyDescriptor(c,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning?c.props.ref:c.props.ref||c.ref);return"function"==typeof a||s.isPresent?i.cloneElement(c,{ref:d}):null};function T(e){return(null==e?void 0:e.animationName)||"none"}L.displayName="Presence";var j=0;function k(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var I=n(6200),F=n(5770),W=n(7325),A=(0,n(5533)._)(),B=function(){},U=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:B,onWheelCapture:B,onTouchMoveCapture:B}),o=r[0],u=r[1],l=e.forwardProps,a=e.children,s=e.className,c=e.removeScrollBar,d=e.enabled,f=e.shards,v=e.sideCar,p=e.noIsolation,m=e.inert,h=e.allowPinchZoom,y=e.as,g=e.gapMode,b=(0,I._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),E=(0,W.q)([n,t]),w=(0,I.pi)((0,I.pi)({},b),o);return i.createElement(i.Fragment,null,d&&i.createElement(v,{sideCar:A,removeScrollBar:c,shards:f,noIsolation:p,inert:m,setCallbacks:u,allowPinchZoom:!!h,lockRef:n,gapMode:g}),l?i.cloneElement(i.Children.only(a),(0,I.pi)((0,I.pi)({},w),{ref:E})):i.createElement(void 0===y?"div":y,(0,I.pi)({},w,{className:s,ref:E}),a))});U.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},U.classNames={fullWidth:F.zi,zeroRight:F.pF};var Z=n(9085),z=n(5517),V=n(8704),K=!1;if("undefined"!=typeof window)try{var $=Object.defineProperty({},"passive",{get:function(){return K=!0,!0}});window.addEventListener("test",$,$),window.removeEventListener("test",$,$)}catch(e){K=!1}var X=!!K&&{passive:!1},Y=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},q=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),H(e,r)){var o=G(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},H=function(e,t){return"v"===e?Y(t,"overflowY"):Y(t,"overflowX")},G=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},J=function(e,t,n,r,o){var i,u=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),l=u*r,a=n.target,s=t.contains(a),c=!1,d=l>0,f=0,v=0;do{var p=G(e,a),m=p[0],h=p[1]-p[2]-u*m;(m||h)&&H(e,a)&&(f+=h,v+=m),a instanceof ShadowRoot?a=a.host:a=a.parentNode}while(!s&&a!==document.body||s&&(t.contains(a)||t===a));return d&&(o&&1>Math.abs(f)||!o&&l>f)?c=!0:!d&&(o&&1>Math.abs(v)||!o&&-l>v)&&(c=!0),c},Q=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ee=function(e){return[e.deltaX,e.deltaY]},et=function(e){return e&&"current"in e?e.current:e},en=0,er=[],eo=(0,Z.L)(A,function(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(en++)[0],u=i.useState(V.Ws)[0],l=i.useRef(e);i.useEffect(function(){l.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(0,I.ev)([e.lockRef.current],(e.shards||[]).map(et),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=i.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!l.current.allowPinchZoom;var o,i=Q(e),u=n.current,a="deltaX"in e?e.deltaX:u[0]-i[0],s="deltaY"in e?e.deltaY:u[1]-i[1],c=e.target,d=Math.abs(a)>Math.abs(s)?"h":"v";if("touches"in e&&"h"===d&&"range"===c.type)return!1;var f=q(d,c);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=q(d,c)),!f)return!1;if(!r.current&&"changedTouches"in e&&(a||s)&&(r.current=o),!o)return!0;var v=r.current||o;return J(v,t,e,"h"===v?a:s,!0)},[]),s=i.useCallback(function(e){if(er.length&&er[er.length-1]===u){var n="deltaY"in e?ee(e):Q(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(l.current.shards||[]).map(et).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?a(e,o[0]):!l.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),c=i.useCallback(function(e,n,r,o){var i={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),d=i.useCallback(function(e){n.current=Q(e),r.current=void 0},[]),f=i.useCallback(function(t){c(t.type,ee(t),t.target,a(t,e.lockRef.current))},[]),v=i.useCallback(function(t){c(t.type,Q(t),t.target,a(t,e.lockRef.current))},[]);i.useEffect(function(){return er.push(u),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",s,X),document.addEventListener("touchmove",s,X),document.addEventListener("touchstart",d,X),function(){er=er.filter(function(e){return e!==u}),document.removeEventListener("wheel",s,X),document.removeEventListener("touchmove",s,X),document.removeEventListener("touchstart",d,X)}},[]);var p=e.removeScrollBar,m=e.inert;return i.createElement(i.Fragment,null,m?i.createElement(u,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?i.createElement(z.jp,{gapMode:e.gapMode}):null)}),ei=i.forwardRef(function(e,t){return i.createElement(U,(0,I.pi)({},e,{ref:t,sideCar:eo}))});ei.classNames=U.classNames;var eu=n(5478),el="Dialog",[ea,es]=(0,a.b)(el),[ec,ed]=ea(el),ef=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:u,modal:l=!0}=e,a=i.useRef(null),d=i.useRef(null),[f=!1,p]=(0,c.T)({prop:r,defaultProp:o,onChange:u});return(0,v.jsx)(ec,{scope:t,triggerRef:a,contentRef:d,contentId:(0,s.M)(),titleId:(0,s.M)(),descriptionId:(0,s.M)(),open:f,onOpenChange:p,onOpenToggle:i.useCallback(()=>p(e=>!e),[p]),modal:l,children:n})};ef.displayName=el;var ev="DialogTrigger",ep=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ed(ev,n),i=(0,l.e)(t,o.triggerRef);return(0,v.jsx)(p.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":eT(o.open),...r,ref:i,onClick:(0,u.M)(e.onClick,o.onOpenToggle)})});ep.displayName=ev;var em="DialogPortal",[eh,ey]=ea(em,{forceMount:void 0}),eg=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,u=ed(em,t);return(0,v.jsx)(eh,{scope:t,forceMount:n,children:i.Children.map(r,e=>(0,v.jsx)(L,{present:n||u.open,children:(0,v.jsx)(S,{asChild:!0,container:o,children:e})}))})};eg.displayName=em;var eb="DialogOverlay",eE=i.forwardRef((e,t)=>{let n=ey(eb,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=ed(eb,e.__scopeDialog);return i.modal?(0,v.jsx)(L,{present:r||i.open,children:(0,v.jsx)(ew,{...o,ref:t})}):null});eE.displayName=eb;var ew=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ed(eb,n);return(0,v.jsx)(ei,{as:f.g7,allowPinchZoom:!0,shards:[o.contentRef],children:(0,v.jsx)(p.div,{"data-state":eT(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),eN="DialogContent",eC=i.forwardRef((e,t)=>{let n=ey(eN,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=ed(eN,e.__scopeDialog);return(0,v.jsx)(L,{present:r||i.open,children:i.modal?(0,v.jsx)(eR,{...o,ref:t}):(0,v.jsx)(ex,{...o,ref:t})})});eC.displayName=eN;var eR=i.forwardRef((e,t)=>{let n=ed(eN,e.__scopeDialog),r=i.useRef(null),o=(0,l.e)(t,n.contentRef,r);return i.useEffect(()=>{let e=r.current;if(e)return(0,eu.Ry)(e)},[]),(0,v.jsx)(eM,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,u.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,u.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,u.M)(e.onFocusOutside,e=>e.preventDefault())})}),ex=i.forwardRef((e,t)=>{let n=ed(eN,e.__scopeDialog),r=i.useRef(!1),o=i.useRef(!1);return(0,v.jsx)(eM,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var i,u;null===(i=e.onCloseAutoFocus)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current||null===(u=n.triggerRef.current)||void 0===u||u.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var i,u;null===(i=e.onInteractOutside)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let l=t.target;(null===(u=n.triggerRef.current)||void 0===u?void 0:u.contains(l))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),eM=i.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:u,...a}=e,s=ed(eN,n),c=i.useRef(null),d=(0,l.e)(t,c);return i.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:k()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:k()),j++,()=>{1===j&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),j--}},[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(R,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:u,children:(0,v.jsx)(g,{role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":eT(s.open),...a,ref:d,onDismiss:()=>s.onOpenChange(!1)})}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(eF,{titleId:s.titleId}),(0,v.jsx)(eW,{contentRef:c,descriptionId:s.descriptionId})]})]})}),eD="DialogTitle",eO=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ed(eD,n);return(0,v.jsx)(p.h2,{id:o.titleId,...r,ref:t})});eO.displayName=eD;var e_="DialogDescription",eP=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ed(e_,n);return(0,v.jsx)(p.p,{id:o.descriptionId,...r,ref:t})});eP.displayName=e_;var eS="DialogClose",eL=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ed(eS,n);return(0,v.jsx)(p.button,{type:"button",...r,ref:t,onClick:(0,u.M)(e.onClick,()=>o.onOpenChange(!1))})});function eT(e){return e?"open":"closed"}eL.displayName=eS;var ej="DialogTitleWarning",[ek,eI]=(0,a.k)(ej,{contentName:eN,titleName:eD,docsSlug:"dialog"}),eF=e=>{let{titleId:t}=e,n=eI(ej),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return i.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},eW=e=>{let{contentRef:t,descriptionId:n}=e,r=eI("DialogDescriptionWarning"),o="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return i.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(o)},[o,t,n]),null},eA=ef,eB=ep,eU=eg,eZ=eE,ez=eC,eV=eO,eK=eP,e$=eL},9255:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r,o=n(2265),i=n(1188),u=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),l=0;function a(e){let[t,n]=o.useState(u());return(0,i.b)(()=>{e||n(e=>e??String(l++))},[e]),e||(t?`radix-${t}`:"")}},7495:function(e,t,n){"use strict";n.d(t,{g7:function(){return u}});var r=n(2265),o=n(8575),i=n(7437),u=r.forwardRef((e,t)=>{let{children:n,...o}=e,u=r.Children.toArray(n),a=u.find(s);if(a){let e=a.props.children,n=u.map(t=>t!==a?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,i.jsx)(l,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,i.jsx)(l,{...o,ref:t,children:n})});u.displayName="Slot";var l=r.forwardRef((e,t)=>{let{children:n,...i}=e;if(r.isValidElement(n)){let e,u;let l=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(i,n.props),ref:t?(0,o.F)(t,l):l})}return r.Children.count(n)>1?r.Children.only(null):null});l.displayName="SlotClone";var a=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function s(e){return r.isValidElement(e)&&e.type===a}},6606:function(e,t,n){"use strict";n.d(t,{W:function(){return o}});var r=n(2265);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},886:function(e,t,n){"use strict";n.d(t,{T:function(){return i}});var r=n(2265),o=n(6606);function i({prop:e,defaultProp:t,onChange:n=()=>{}}){let[i,u]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[i]=n,u=r.useRef(i),l=(0,o.W)(t);return r.useEffect(()=>{u.current!==i&&(l(i),u.current=i)},[i,u,l]),n}({defaultProp:t,onChange:n}),l=void 0!==e,a=l?e:i,s=(0,o.W)(n);return[a,r.useCallback(t=>{if(l){let n="function"==typeof t?t(e):t;n!==e&&s(n)}else u(t)},[l,e,u,s])]}},1188:function(e,t,n){"use strict";n.d(t,{b:function(){return o}});var r=n(2265),o=globalThis?.document?r.useLayoutEffect:()=>{}},535:function(e,t,n){"use strict";n.d(t,{j:function(){return u}});var r=n(1994);let o=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,i=r.W,u=(e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return i(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:u,defaultVariants:l}=t,a=Object.keys(u).map(e=>{let t=null==n?void 0:n[e],r=null==l?void 0:l[e];if(null===t)return null;let i=o(t)||o(r);return u[e][i]}),s=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return i(e,a,null==t?void 0:null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...l,...s}[t]):({...l,...s})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}}]);