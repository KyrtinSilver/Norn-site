(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2091],{1066:function(e,s,r){Promise.resolve().then(r.bind(r,4239))},5455:function(e,s,r){"use strict";r.d(s,{Z:function(){return t}});let t=(0,r(9205).Z)("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]])},9322:function(e,s,r){"use strict";r.d(s,{Z:function(){return t}});let t=(0,r(9205).Z)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},2934:function(e,s,r){"use strict";r.d(s,{Z:function(){return t}});let t=(0,r(9205).Z)("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},4239:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return f}});var t=r(7437),a=r(7110),n=r(2381),i=r(279),l=r(3675),o=r(2934),c=r(9322),d=r(5455),u=r(2265),m=r(4438);function f(){let[e,s]=(0,u.useState)(!1);async function r(e){e.preventDefault(),s(!0);let r=new FormData(e.currentTarget),a={name:r.get("name"),email:r.get("email"),company:r.get("company"),role:r.get("role"),message:r.get("message"),subject:"Documentation Access Request"};try{let s=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!s.ok)throw Error("Failed to send message");if((await s.json()).success)m.Am.success("Request sent successfully! We'll get back to you soon.",{className:"group",style:{backgroundColor:"hsl(var(--background))",color:"hsl(var(--foreground))",border:"1px solid hsl(var(--border))"},icon:(0,t.jsx)("div",{className:"text-primary dark:text-primary",children:(0,t.jsx)(o.Z,{className:"h-4 w-4"})})}),e.currentTarget.reset();else throw Error("Failed to send message")}catch(e){m.Am.error("Failed to send request. Please try again.",{className:"group",style:{backgroundColor:"hsl(var(--background))",color:"hsl(var(--foreground))",border:"1px solid hsl(var(--border))"},icon:(0,t.jsx)("div",{className:"text-destructive dark:text-destructive",children:(0,t.jsx)(c.Z,{className:"h-4 w-4"})})})}finally{s(!1)}}return(0,t.jsx)("div",{className:"py-24",children:(0,t.jsx)(a.W,{children:(0,t.jsx)("div",{className:"max-w-[85rem] mx-auto",children:(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 items-start",children:[(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h1",{className:"text-4xl font-[500] tracking-tight",children:"Documentation Access"}),(0,t.jsx)("p",{className:"text-xl text-muted-foreground",children:"Get access to our comprehensive documentation and start building with Norn.ai."})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h2",{className:"text-2xl font-[500]",children:"What's Included"}),(0,t.jsxs)("ul",{className:"space-y-3",children:[(0,t.jsxs)("li",{className:"flex items-start gap-3",children:[(0,t.jsx)(d.Z,{className:"w-5 h-5 mt-1 text-primary"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-[500]",children:"API Documentation"}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"Detailed API references and integration guides"})]})]}),(0,t.jsxs)("li",{className:"flex items-start gap-3",children:[(0,t.jsx)(d.Z,{className:"w-5 h-5 mt-1 text-primary"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-[500]",children:"Implementation Examples"}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"Code samples and best practices"})]})]}),(0,t.jsxs)("li",{className:"flex items-start gap-3",children:[(0,t.jsx)(d.Z,{className:"w-5 h-5 mt-1 text-primary"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-[500]",children:"SDK Documentation"}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"Language-specific SDK guides and tutorials"})]})]})]})]})]}),(0,t.jsx)("div",{className:"bg-muted/50 rounded-lg p-8",children:(0,t.jsxs)("form",{onSubmit:r,className:"space-y-6",children:[(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"name",className:"block text-sm font-[500] mb-2",children:"Name"}),(0,t.jsx)(i.I,{id:"name",name:"name",required:!0,placeholder:"Your full name",disabled:e})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"email",className:"block text-sm font-[500] mb-2",children:"Work Email"}),(0,t.jsx)(i.I,{id:"email",name:"email",type:"email",required:!0,placeholder:"you@company.com",disabled:e})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"company",className:"block text-sm font-[500] mb-2",children:"Company"}),(0,t.jsx)(i.I,{id:"company",name:"company",required:!0,placeholder:"Your company name",disabled:e})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"role",className:"block text-sm font-[500] mb-2",children:"Job Title"}),(0,t.jsx)(i.I,{id:"role",name:"role",required:!0,placeholder:"Your role",disabled:e})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"message",className:"block text-sm font-[500] mb-2",children:"How do you plan to use Norn.ai?"}),(0,t.jsx)(l.g,{id:"message",name:"message",required:!0,placeholder:"Please briefly describe your intended use case",className:"min-h-[100px]",disabled:e})]})]}),(0,t.jsx)(n.z,{type:"submit",className:"w-full",disabled:e,children:e?"Sending...":"Request Documentation Access"})]})})]})})})})}},2381:function(e,s,r){"use strict";r.d(s,{z:function(){return c}});var t=r(7437),a=r(2265),n=r(7053),i=r(535),l=r(3448);let o=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,s)=>{let{className:r,variant:a,size:i,asChild:c=!1,...d}=e,u=c?n.g7:"button";return(0,t.jsx)(u,{className:(0,l.cn)(o({variant:a,size:i,className:r})),ref:s,...d})});c.displayName="Button"},7110:function(e,s,r){"use strict";r.d(s,{W:function(){return n}});var t=r(7437),a=r(3448);function n(e){let{as:s="div",className:r,...n}=e;return(0,t.jsx)(s,{className:(0,a.cn)("mx-auto max-w-[--page-max-width] px-4 sm:px-6 lg:px-8",r),...n})}},279:function(e,s,r){"use strict";r.d(s,{I:function(){return i}});var t=r(7437),a=r(2265),n=r(3448);let i=a.forwardRef((e,s)=>{let{className:r,type:a,...i}=e;return(0,t.jsx)("input",{type:a,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:s,...i})});i.displayName="Input"},3675:function(e,s,r){"use strict";r.d(s,{g:function(){return i}});var t=r(7437),a=r(2265),n=r(3448);let i=a.forwardRef((e,s)=>{let{className:r,...a}=e;return(0,t.jsx)("textarea",{className:(0,n.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:s,...a})});i.displayName="Textarea"},3448:function(e,s,r){"use strict";r.d(s,{cn:function(){return n}});var t=r(1994),a=r(3335);function n(){for(var e=arguments.length,s=Array(e),r=0;r<e;r++)s[r]=arguments[r];return(0,a.m6)((0,t.W)(s))}}},function(e){e.O(0,[8590,4172,2971,2117,1744],function(){return e(e.s=1066)}),_N_E=e.O()}]);