(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5669],{678:function(e,s,r){Promise.resolve().then(r.bind(r,9114))},9322:function(e,s,r){"use strict";r.d(s,{Z:function(){return a}});let a=(0,r(9205).Z)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},2934:function(e,s,r){"use strict";r.d(s,{Z:function(){return a}});let a=(0,r(9205).Z)("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},9658:function(e,s,r){"use strict";r.d(s,{Z:function(){return a}});let a=(0,r(9205).Z)("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]])},9114:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return g}});var a=r(7437),t=r(7110),i=r(2381),n=r(279),o=r(3675),l=r(9658),d=r(9205);let c=(0,d.Z)("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]),u=(0,d.Z)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);var m=r(2934),x=r(9322),h=r(2265),f=r(4438);let p=[{title:"Press Kit",description:"Download our press kit containing logos, brand assets, and company information.",icon:(0,a.jsx)(l.Z,{className:"w-6 h-6 text-primary"})},{title:"Latest News",description:"Browse our recent announcements, research publications, and company updates.",icon:(0,a.jsx)(c,{className:"w-6 h-6 text-primary"})},{title:"Events",description:"Find information about upcoming conferences, talks, and research presentations.",icon:(0,a.jsx)(u,{className:"w-6 h-6 text-primary"})}];function g(){let[e,s]=(0,h.useState)(!1);async function r(e){e.preventDefault(),s(!0);let r=new FormData(e.currentTarget),t={name:r.get("name"),email:r.get("email"),organization:r.get("organization"),role:r.get("role"),deadline:r.get("deadline"),message:r.get("message"),subject:"Press Inquiry"};try{let s=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!s.ok)throw Error("Failed to send message");if((await s.json()).success)f.Am.success("Message sent successfully! We'll get back to you soon.",{className:"group",style:{backgroundColor:"hsl(var(--background))",color:"hsl(var(--foreground))",border:"1px solid hsl(var(--border))"},icon:(0,a.jsx)("div",{className:"text-primary dark:text-primary",children:(0,a.jsx)(m.Z,{className:"h-4 w-4"})})}),e.currentTarget.reset();else throw Error("Failed to send message")}catch(e){f.Am.error("Failed to send message. Please try again.",{className:"group",style:{backgroundColor:"hsl(var(--background))",color:"hsl(var(--foreground))",border:"1px solid hsl(var(--border))"},icon:(0,a.jsx)("div",{className:"text-destructive dark:text-destructive",children:(0,a.jsx)(x.Z,{className:"h-4 w-4"})})})}finally{s(!1)}}return(0,a.jsxs)("div",{children:[(0,a.jsx)("section",{className:"py-24 bg-muted/50",children:(0,a.jsx)(t.W,{children:(0,a.jsx)("div",{className:"max-w-[85rem] mx-auto",children:(0,a.jsxs)("div",{className:"max-w-2xl mb-12",children:[(0,a.jsx)("h1",{className:"text-4xl font-[500] tracking-tight mb-4",children:"Press & Media"}),(0,a.jsx)("p",{className:"text-xl font-[400] text-muted-foreground",children:"Access press resources and connect with our communications team for media inquiries."})]})})})}),(0,a.jsx)("section",{className:"py-24",children:(0,a.jsx)(t.W,{children:(0,a.jsx)("div",{className:"max-w-[85rem] mx-auto",children:(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12",children:p.map((e,s)=>(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("div",{className:"w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center",children:e.icon}),(0,a.jsx)("h3",{className:"text-xl font-[500]",children:e.title}),(0,a.jsx)("p",{className:"text-muted-foreground font-[400]",children:e.description})]},s))})})})}),(0,a.jsx)("section",{className:"py-24 bg-muted/50",children:(0,a.jsx)(t.W,{children:(0,a.jsxs)("div",{className:"max-w-[85rem] mx-auto",children:[(0,a.jsxs)("div",{className:"max-w-2xl mb-12",children:[(0,a.jsx)("h2",{className:"text-3xl font-[500] tracking-tight mb-4",children:"Media Inquiries"}),(0,a.jsx)("p",{className:"text-xl font-[400] text-muted-foreground",children:"For press and media inquiries, please fill out the form below and our communications team will get back to you promptly."})]}),(0,a.jsx)("div",{className:"max-w-2xl bg-background rounded-lg shadow-sm p-8",children:(0,a.jsxs)("form",{onSubmit:r,className:"space-y-6",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"name",className:"text-sm font-[500]",children:"Name"}),(0,a.jsx)(n.I,{id:"name",name:"name",required:!0,placeholder:"Your name",disabled:e})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"email",className:"text-sm font-[500]",children:"Email"}),(0,a.jsx)(n.I,{id:"email",name:"email",type:"email",required:!0,placeholder:"you@organization.com",disabled:e})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"organization",className:"text-sm font-[500]",children:"Media Organization"}),(0,a.jsx)(n.I,{id:"organization",name:"organization",required:!0,placeholder:"Your media organization",disabled:e})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"role",className:"text-sm font-[500]",children:"Role"}),(0,a.jsx)(n.I,{id:"role",name:"role",required:!0,placeholder:"e.g., Reporter, Editor",disabled:e})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"deadline",className:"text-sm font-[500]",children:"Deadline (if applicable)"}),(0,a.jsx)(n.I,{id:"deadline",name:"deadline",type:"date",disabled:e})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"message",className:"text-sm font-[500]",children:"Inquiry Details"}),(0,a.jsx)(o.g,{id:"message",name:"message",required:!0,placeholder:"Please provide details about your media inquiry, including any specific questions or interview requests.",className:"min-h-[150px]",disabled:e})]}),(0,a.jsx)(i.z,{type:"submit",className:"w-full md:w-auto",disabled:e,children:e?"Sending...":"Submit Inquiry"})]})})]})})})]})}},2381:function(e,s,r){"use strict";r.d(s,{z:function(){return d}});var a=r(7437),t=r(2265),i=r(7495),n=r(535),o=r(3448);let l=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=t.forwardRef((e,s)=>{let{className:r,variant:t,size:n,asChild:d=!1,...c}=e,u=d?i.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(l({variant:t,size:n,className:r})),ref:s,...c})});d.displayName="Button"},7110:function(e,s,r){"use strict";r.d(s,{W:function(){return i}});var a=r(7437),t=r(3448);function i(e){let{as:s="div",className:r,...i}=e;return(0,a.jsx)(s,{className:(0,t.cn)("mx-auto max-w-[--page-max-width] px-4 sm:px-6 lg:px-8",r),...i})}},279:function(e,s,r){"use strict";r.d(s,{I:function(){return n}});var a=r(7437),t=r(2265),i=r(3448);let n=t.forwardRef((e,s)=>{let{className:r,type:t,...n}=e;return(0,a.jsx)("input",{type:t,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:s,...n})});n.displayName="Input"},3675:function(e,s,r){"use strict";r.d(s,{g:function(){return n}});var a=r(7437),t=r(2265),i=r(3448);let n=t.forwardRef((e,s)=>{let{className:r,...t}=e;return(0,a.jsx)("textarea",{className:(0,i.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:s,...t})});n.displayName="Textarea"},3448:function(e,s,r){"use strict";r.d(s,{cn:function(){return i}});var a=r(1994),t=r(3335);function i(){for(var e=arguments.length,s=Array(e),r=0;r<e;r++)s[r]=arguments[r];return(0,t.m6)((0,a.W)(s))}}},function(e){e.O(0,[8590,4172,2971,2117,1744],function(){return e(e.s=678)}),_N_E=e.O()}]);