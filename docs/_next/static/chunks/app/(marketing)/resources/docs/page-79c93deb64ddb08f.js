(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2091],{1066:function(e,r,t){Promise.resolve().then(t.bind(t,4239))},5455:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});let n=(0,t(9205).Z)("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]])},9322:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});let n=(0,t(9205).Z)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},2934:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});let n=(0,t(9205).Z)("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},4239:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var n=t(7437),s=t(7110),l=t(2381),i=t(279),a=t(3675),o=t(2934),c=t(9322),d=t(5455),u=t(2265),m=t(4438);function f(){let[e,r]=(0,u.useState)(!1);async function t(e){e.preventDefault(),r(!0);let t=e.currentTarget,s=new FormData(t);s.append("subject","Documentation Access Request"),s.append("from_name","Documentation Form"),s.append("access_key","30ed9856-103d-426e-a734-c6c85497c3e5");try{let e=await fetch("https://api.web3forms.com/submit",{method:"POST",body:s}),r=await e.json();if(r.success)t.reset(),m.A.success("Request sent successfully! We'll get back to you soon.",{className:"group",style:{backgroundColor:"hsl(var(--background))",color:"hsl(var(--foreground))",border:"1px solid hsl(var(--border))"},icon:(0,n.jsx)("div",{className:"text-primary dark:text-primary",children:(0,n.jsx)(o.Z,{className:"h-4 w-4"})}),duration:2e3});else throw Error(r.message||"Failed to send request")}catch(e){console.error("Documentation form error:",e),m.A.error("Failed to send request. Please try again.",{className:"group",style:{backgroundColor:"hsl(var(--background))",color:"hsl(var(--foreground))",border:"1px solid hsl(var(--border))"},icon:(0,n.jsx)("div",{className:"text-destructive dark:text-destructive",children:(0,n.jsx)(c.Z,{className:"h-4 w-4"})})})}finally{r(!1)}}return(0,n.jsx)("div",{className:"py-24",children:(0,n.jsx)(s.W,{children:(0,n.jsx)("div",{className:"max-w-[85rem] mx-auto",children:(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 items-start",children:[(0,n.jsxs)("div",{className:"space-y-8",children:[(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsx)("h1",{className:"text-4xl font-[500] tracking-tight",children:"Documentation Access"}),(0,n.jsx)("p",{className:"text-xl text-muted-foreground",children:"Get access to our comprehensive documentation and start building with Norn.ai."})]}),(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsx)("h2",{className:"text-2xl font-[500]",children:"What's Included"}),(0,n.jsxs)("ul",{className:"space-y-3",children:[(0,n.jsxs)("li",{className:"flex items-start gap-3",children:[(0,n.jsx)(d.Z,{className:"w-5 h-5 mt-1 text-primary"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"font-[500]",children:"API Documentation"}),(0,n.jsx)("p",{className:"text-muted-foreground",children:"Detailed API references and integration guides"})]})]}),(0,n.jsxs)("li",{className:"flex items-start gap-3",children:[(0,n.jsx)(d.Z,{className:"w-5 h-5 mt-1 text-primary"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"font-[500]",children:"Implementation Examples"}),(0,n.jsx)("p",{className:"text-muted-foreground",children:"Code samples and best practices"})]})]}),(0,n.jsxs)("li",{className:"flex items-start gap-3",children:[(0,n.jsx)(d.Z,{className:"w-5 h-5 mt-1 text-primary"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"font-[500]",children:"SDK Documentation"}),(0,n.jsx)("p",{className:"text-muted-foreground",children:"Language-specific SDK guides and tutorials"})]})]})]})]})]}),(0,n.jsx)("div",{className:"bg-muted/50 rounded-lg p-8",children:(0,n.jsxs)("form",{onSubmit:t,className:"space-y-6",children:[(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"name",className:"block text-sm font-[500] mb-2",children:"Name"}),(0,n.jsx)(i.I,{id:"name",name:"name",required:!0,placeholder:"Your full name",disabled:e})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"email",className:"block text-sm font-[500] mb-2",children:"Work Email"}),(0,n.jsx)(i.I,{id:"email",name:"email",type:"email",required:!0,placeholder:"you@company.com",disabled:e})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"company",className:"block text-sm font-[500] mb-2",children:"Company"}),(0,n.jsx)(i.I,{id:"company",name:"company",required:!0,placeholder:"Your company name",disabled:e})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"role",className:"block text-sm font-[500] mb-2",children:"Job Title"}),(0,n.jsx)(i.I,{id:"role",name:"role",required:!0,placeholder:"Your role",disabled:e})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"message",className:"block text-sm font-[500] mb-2",children:"How do you plan to use Norn.ai?"}),(0,n.jsx)(a.g,{id:"message",name:"message",required:!0,placeholder:"Please briefly describe your intended use case",className:"min-h-[100px]",disabled:e})]})]}),(0,n.jsx)(l.z,{type:"submit",className:"w-full",disabled:e,children:e?"Sending...":"Request Documentation Access"})]})})]})})})})}},2381:function(e,r,t){"use strict";t.d(r,{z:function(){return c}});var n=t(7437),s=t(2265),l=t(7053),i=t(535),a=t(3448);let o=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,r)=>{let{className:t,variant:s,size:i,asChild:c=!1,...d}=e,u=c?l.g7:"button";return(0,n.jsx)(u,{className:(0,a.cn)(o({variant:s,size:i,className:t})),ref:r,...d})});c.displayName="Button"},7110:function(e,r,t){"use strict";t.d(r,{W:function(){return l}});var n=t(7437),s=t(3448);function l(e){let{as:r="div",className:t,...l}=e;return(0,n.jsx)(r,{className:(0,s.cn)("mx-auto max-w-[--page-max-width] px-4 sm:px-6 lg:px-8",t),...l})}},279:function(e,r,t){"use strict";t.d(r,{I:function(){return i}});var n=t(7437),s=t(2265),l=t(3448);let i=s.forwardRef((e,r)=>{let{className:t,type:s,...i}=e;return(0,n.jsx)("input",{type:s,className:(0,l.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...i})});i.displayName="Input"},3675:function(e,r,t){"use strict";t.d(r,{g:function(){return i}});var n=t(7437),s=t(2265),l=t(3448);let i=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("textarea",{className:(0,l.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...s})});i.displayName="Textarea"},3448:function(e,r,t){"use strict";t.d(r,{cn:function(){return l}});var n=t(1994),s=t(3335);function l(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.m6)((0,n.W)(r))}},8575:function(e,r,t){"use strict";t.d(r,{F:function(){return l},e:function(){return i}});var n=t(2265);function s(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function l(...e){return r=>{let t=!1,n=e.map(e=>{let n=s(e,r);return t||"function"!=typeof n||(t=!0),n});if(t)return()=>{for(let r=0;r<n.length;r++){let t=n[r];"function"==typeof t?t():s(e[r],null)}}}}function i(...e){return n.useCallback(l(...e),e)}},7053:function(e,r,t){"use strict";t.d(r,{g7:function(){return i}});var n=t(2265),s=t(8575),l=t(7437),i=n.forwardRef((e,r)=>{let{children:t,...s}=e,i=n.Children.toArray(t),o=i.find(c);if(o){let e=o.props.children,t=i.map(r=>r!==o?r:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,l.jsx)(a,{...s,ref:r,children:n.isValidElement(e)?n.cloneElement(e,void 0,t):null})}return(0,l.jsx)(a,{...s,ref:r,children:t})});i.displayName="Slot";var a=n.forwardRef((e,r)=>{let{children:t,...l}=e;if(n.isValidElement(t)){let e,i;let a=(e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.props.ref:t.props.ref||t.ref;return n.cloneElement(t,{...function(e,r){let t={...r};for(let n in r){let s=e[n],l=r[n];/^on[A-Z]/.test(n)?s&&l?t[n]=(...e)=>{l(...e),s(...e)}:s&&(t[n]=s):"style"===n?t[n]={...s,...l}:"className"===n&&(t[n]=[s,l].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props),ref:r?(0,s.F)(r,a):a})}return n.Children.count(t)>1?n.Children.only(null):null});a.displayName="SlotClone";var o=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function c(e){return n.isValidElement(e)&&e.type===o}},535:function(e,r,t){"use strict";t.d(r,{j:function(){return i}});var n=t(1994);let s=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=n.W,i=(e,r)=>t=>{var n;if((null==r?void 0:r.variants)==null)return l(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:i,defaultVariants:a}=r,o=Object.keys(i).map(e=>{let r=null==t?void 0:t[e],n=null==a?void 0:a[e];if(null===r)return null;let l=s(r)||s(n);return i[e][l]}),c=t&&Object.entries(t).reduce((e,r)=>{let[t,n]=r;return void 0===n||(e[t]=n),e},{});return l(e,o,null==r?void 0:null===(n=r.compoundVariants)||void 0===n?void 0:n.reduce((e,r)=>{let{class:t,className:n,...s}=r;return Object.entries(s).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...a,...c}[r]):({...a,...c})[r]===t})?[...e,t,n]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}}},function(e){e.O(0,[8590,4438,2971,2117,1744],function(){return e(e.s=1066)}),_N_E=e.O()}]);