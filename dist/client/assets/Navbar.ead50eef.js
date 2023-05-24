import{r as o,d as v,j as a,a as k,T as ee,F as te}from"./index.fecd4451.js";import{L as W}from"./index.a502e9fb.js";import{G as Y}from"./iconBase.05ac7be3.js";var ne=Object.defineProperty,re=(e,t,n)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t,n)=>(re(e,typeof t!="symbol"?t+"":t,n),n);class oe{constructor(){D(this,"current",this.detect()),D(this,"handoffState","pending"),D(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let E=new oe,I=(e,t)=>{E.isServer?o.exports.useEffect(e,t):o.exports.useLayoutEffect(e,t)};function se(e){let t=o.exports.useRef(e);return I(()=>{t.current=e},[e]),t}let N=function(e){let t=se(e);return v.useCallback((...n)=>t.current(...n),[t])};function le(){let[e,t]=o.exports.useState(E.isHandoffComplete);return e&&E.isHandoffComplete===!1&&t(!1),o.exports.useEffect(()=>{e!==!0&&t(!0)},[e]),o.exports.useEffect(()=>E.handoff(),[]),e}var K;let q=(K=v.useId)!=null?K:function(){let e=le(),[t,n]=v.useState(e?()=>E.nextId():null);return I(()=>{t===null&&n(E.nextId())},[t]),t!=null?""+t:void 0};function $(e,t,...n){if(e in t){let s=t[e];return typeof s=="function"?s(...n):s}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,$),r}function ae(e){return E.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function V(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function ie(e,t){let[n,r]=o.exports.useState(()=>V(e));return I(()=>{r(V(e))},[e.type,e.as]),I(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}let Q=Symbol();function ue(e,t=!0){return Object.assign(e,{[Q]:t})}function R(...e){let t=o.exports.useRef(e);o.exports.useEffect(()=>{t.current=e},[e]);let n=N(r=>{for(let s of t.current)s!=null&&(typeof s=="function"?s(r):s.current=r)});return e.every(r=>r==null||(r==null?void 0:r[Q]))?void 0:n}function ce(...e){return e.filter(Boolean).join(" ")}var M=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(M||{}),de=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(de||{});function L({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:s,visible:l=!0,name:i}){let f=J(t,e);if(l)return C(f,n,r,i);let u=s!=null?s:0;if(u&2){let{static:d=!1,...c}=f;if(d)return C(c,n,r,i)}if(u&1){let{unmount:d=!0,...c}=f;return $(d?0:1,{[0](){return null},[1](){return C({...c,hidden:!0,style:{display:"none"}},n,r,i)}})}return C(f,n,r,i)}function C(e,t={},n,r){var s;let{as:l=n,children:i,refName:f="ref",...u}=O(e,["unmount","static"]),d=e.ref!==void 0?{[f]:e.ref}:{},c=typeof i=="function"?i(t):i;"className"in u&&u.className&&typeof u.className=="function"&&(u.className=u.className(t));let g={};if(t){let m=!1,h=[];for(let[x,w]of Object.entries(t))typeof w=="boolean"&&(m=!0),w===!0&&h.push(x);m&&(g["data-headlessui-state"]=h.join(" "))}if(l===o.exports.Fragment&&Object.keys(Z(u)).length>0){if(!o.exports.isValidElement(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(x=>`  - ${x}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(x=>`  - ${x}`).join(`
`)].join(`
`));let m=ce((s=c.props)==null?void 0:s.className,u.className),h=m?{className:m}:{};return o.exports.cloneElement(c,Object.assign({},J(c.props,Z(O(u,["ref"]))),g,d,fe(c.ref,d.ref),h))}return o.exports.createElement(l,Object.assign({},O(u,["ref"]),l!==o.exports.Fragment&&d,l!==o.exports.Fragment&&g),c)}function fe(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function J(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let s in r)s.startsWith("on")&&typeof r[s]=="function"?(n[s]!=null||(n[s]=[]),n[s].push(r[s])):t[s]=r[s];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](s,...l){let i=n[r];for(let f of i){if((s instanceof Event||(s==null?void 0:s.nativeEvent)instanceof Event)&&s.defaultPrevented)return;f(s,...l)}}});return t}function B(e){var t;return Object.assign(o.exports.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function Z(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function O(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function pe(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&me(n)?!1:r}function me(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let A=o.exports.createContext(null);A.displayName="OpenClosedContext";var P=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(P||{});function he(){return o.exports.useContext(A)}function ge({value:e,children:t}){return v.createElement(A.Provider,{value:e},t)}var S=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(S||{}),G;let xe=(G=v.startTransition)!=null?G:function(e){e()};var ye=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ye||{}),be=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(be||{});let ve={[0]:e=>({...e,disclosureState:$(e.disclosureState,{[0]:1,[1]:0})}),[1]:e=>e.disclosureState===1?e:{...e,disclosureState:1},[4](e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},[5](e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},[2](e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},[3](e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},H=o.exports.createContext(null);H.displayName="DisclosureContext";function F(e){let t=o.exports.useContext(H);if(t===null){let n=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,F),n}return t}let z=o.exports.createContext(null);z.displayName="DisclosureAPIContext";function _(e){let t=o.exports.useContext(z);if(t===null){let n=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,_),n}return t}let U=o.exports.createContext(null);U.displayName="DisclosurePanelContext";function we(){return o.exports.useContext(U)}function ke(e,t){return $(t.type,ve,e,t)}let Ee=o.exports.Fragment;function Se(e,t){let{defaultOpen:n=!1,...r}=e,s=o.exports.useRef(null),l=R(t,ue(y=>{s.current=y},e.as===void 0||e.as===o.exports.Fragment)),i=o.exports.useRef(null),f=o.exports.useRef(null),u=o.exports.useReducer(ke,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:f,panelRef:i,buttonId:null,panelId:null}),[{disclosureState:d,buttonId:c},g]=u,m=N(y=>{g({type:1});let p=ae(s);if(!p||!c)return;let b=(()=>y?y instanceof HTMLElement?y:y.current instanceof HTMLElement?y.current:p.getElementById(c):p.getElementById(c))();b==null||b.focus()}),h=o.exports.useMemo(()=>({close:m}),[m]),x=o.exports.useMemo(()=>({open:d===0,close:m}),[d,m]),w={ref:l};return v.createElement(H.Provider,{value:u},v.createElement(z.Provider,{value:h},v.createElement(ge,{value:$(d,{[0]:P.Open,[1]:P.Closed})},L({ourProps:w,theirProps:r,slot:x,defaultTag:Ee,name:"Disclosure"}))))}let Ne="button";function Pe(e,t){let n=q(),{id:r=`headlessui-disclosure-button-${n}`,...s}=e,[l,i]=F("Disclosure.Button"),f=we(),u=f===null?!1:f===l.panelId,d=o.exports.useRef(null),c=R(d,t,u?null:l.buttonRef);o.exports.useEffect(()=>{if(!u)return i({type:2,buttonId:r}),()=>{i({type:2,buttonId:null})}},[r,i,u]);let g=N(p=>{var b;if(u){if(l.disclosureState===1)return;switch(p.key){case S.Space:case S.Enter:p.preventDefault(),p.stopPropagation(),i({type:0}),(b=l.buttonRef.current)==null||b.focus();break}}else switch(p.key){case S.Space:case S.Enter:p.preventDefault(),p.stopPropagation(),i({type:0});break}}),m=N(p=>{switch(p.key){case S.Space:p.preventDefault();break}}),h=N(p=>{var b;pe(p.currentTarget)||e.disabled||(u?(i({type:0}),(b=l.buttonRef.current)==null||b.focus()):i({type:0}))}),x=o.exports.useMemo(()=>({open:l.disclosureState===0}),[l]),w=ie(e,d),y=u?{ref:c,type:w,onKeyDown:g,onClick:h}:{ref:c,id:r,type:w,"aria-expanded":e.disabled?void 0:l.disclosureState===0,"aria-controls":l.linkedPanel?l.panelId:void 0,onKeyDown:g,onKeyUp:m,onClick:h};return L({ourProps:y,theirProps:s,slot:x,defaultTag:Ne,name:"Disclosure.Button"})}let $e="div",Ce=M.RenderStrategy|M.Static;function je(e,t){let n=q(),{id:r=`headlessui-disclosure-panel-${n}`,...s}=e,[l,i]=F("Disclosure.Panel"),{close:f}=_("Disclosure.Panel"),u=R(t,l.panelRef,h=>{xe(()=>i({type:h?4:5}))});o.exports.useEffect(()=>(i({type:3,panelId:r}),()=>{i({type:3,panelId:null})}),[r,i]);let d=he(),c=(()=>d!==null?(d&P.Open)===P.Open:l.disclosureState===0)(),g=o.exports.useMemo(()=>({open:l.disclosureState===0,close:f}),[l,f]),m={ref:u,id:r};return a(U.Provider,{value:l.panelId,children:L({ourProps:m,theirProps:s,slot:g,defaultTag:$e,features:Ce,visible:c,name:"Disclosure.Panel"})})}let Ie=B(Se),De=B(Pe),Oe=B(je),j=Object.assign(Ie,{Button:De,Panel:Oe});function Te({title:e,titleId:t,...n},r){return k("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),children:[e?a("title",{id:t,children:e}):null,a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})]})}const Me=o.exports.forwardRef(Te),Re=Me;function Le({title:e,titleId:t,...n},r){return k("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),children:[e?a("title",{id:t,children:e}):null,a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})]})}const Be=o.exports.forwardRef(Le),Ae=Be;function He(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"}}]})(e)}function Fe(e){return Y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Dark"},child:[{tag:"path",attr:{d:"M12.741,20.917a9.389,9.389,0,0,1-1.395-.105,9.141,9.141,0,0,1-1.465-17.7,1.177,1.177,0,0,1,1.21.281,1.273,1.273,0,0,1,.325,1.293,8.112,8.112,0,0,0-.353,2.68,8.266,8.266,0,0,0,4.366,6.857,7.628,7.628,0,0,0,3.711.993,1.242,1.242,0,0,1,.994,1.963h0A9.148,9.148,0,0,1,12.741,20.917ZM10.261,4.05a.211.211,0,0,0-.065.011,8.137,8.137,0,1,0,9.131,12.526h0a.224.224,0,0,0,.013-.235.232.232,0,0,0-.206-.136A8.619,8.619,0,0,1,14.946,15.1a9.274,9.274,0,0,1-4.883-7.7,9.123,9.123,0,0,1,.4-3.008.286.286,0,0,0-.069-.285A.184.184,0,0,0,10.261,4.05Z"}}]}]})(e)}const X=[{name:"About",href:"about",current:!1},{name:"Works",href:"works",current:!1},{name:"Contact",href:"contact",current:!1}];function T(...e){return e.filter(Boolean).join(" ")}function Ke({changeTheme:e}){const t=o.exports.useContext(ee);return a(j,{as:"nav",className:" sticky top-0 z-50  ",children:({open:n})=>k(te,{children:[a("div",{className:`mx-auto px-2 sm:px-6 lg:px-12 shadow-xl border-b-gray-500 border-b  ${t=="light"?" bg-gray-50":" bg-gray-800 "} `,children:k("div",{className:"relative container mx-auto flex h-16 px-12 items-center justify-between ",children:[a("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:k(j.Button,{className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[a("span",{className:"sr-only",children:"Open main menu"}),n?a(Ae,{className:"block h-6 w-6","aria-hidden":"true"}):a(Re,{className:"block h-6 w-6","aria-hidden":"true"})]})}),k("div",{className:"flex flex-1 items-center justify-center sm:items-stretch  sm:justify-between",children:[a("div",{className:"flex flex-shrink-0 items-center",children:a(W,{to:"about",spy:!0,smooth:!0,offset:-70,duration:1e3,delay:100,className:`font-bold text-xl cursor-pointer  ${t=="light"?" text-gray-800":"text-gray-100"}`,children:"ISHARA"})}),a("div",{className:"hidden sm:ml-6 sm:block",children:a("div",{className:"flex space-x-4",children:X.map(r=>a(W,{to:r.href,spy:!0,smooth:!0,offset:-70,duration:1e3,delay:100,className:T(t=="light"?" text-gray-800":"text-gray-100",r.current?"underline ":"over:underline   underline-offset-4 ","rounded-md px-3 py-2 text-md font-medium cursor-pointer"),"aria-current":r.current?"page":void 0,children:r.name},r.name))})})]}),a("div",{className:"flex items-center justify-center ml-6",children:a("label",{htmlFor:"toggleB",className:"flex items-center cursor-pointer",children:k("div",{className:"relative",children:[a("input",{type:"checkbox",id:"toggleB",className:"sr-only",onChange:()=>{e()}}),a("div",{className:"block bg-gray-500 w-14 h-8 rounded-full"}),a("div",{className:"dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full flex justify-center  items-center transition",children:t=="light"?a(He,{}):a(Fe,{})})]})})})]})}),a(j.Panel,{className:"sm:hidden",children:a("div",{className:T(t=="light"?"text-red-800 bg-gray-100":"text-gray-100 bg-gray-800","space-y-1 px-2 pt-2 pb-3 border-b-gray-500 border-b"),children:X.map(r=>a(j.Button,{as:"a",href:r.href,className:T(r.current?"bg-gray-900 text-white":"text-gray-900 hover:bg-gray-900 hover:text-white",t=="light"?" text-gray-800":"text-white","block rounded-md px-3 py-2 text-base font-medium"),"aria-current":r.current?"page":void 0,children:r.name},r.name))})})]})})}export{Ke as default};