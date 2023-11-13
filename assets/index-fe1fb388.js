import{j as _,R as D,r as T,u as St}from"./index-f6ad4f7c.js";import{c as je,_ as Et,B as Qe}from"./index-b0d96481.js";const kt=({children:e,...i})=>_.jsx("div",{className:"flex aspect-square w-8 shrink-0 items-center justify-center rounded-[4px] bg-white p-[5.333px] text-gray-600 hover:bg-gray-100 active:bg-gray-200",...i,children:e});var ue=e=>e.type==="checkbox",ie=e=>e instanceof Date,O=e=>e==null;const lt=e=>typeof e=="object";var L=e=>!O(e)&&!Array.isArray(e)&&lt(e)&&!ie(e),at=e=>L(e)&&e.target?ue(e.target)?e.target.checked:e.target.value:e,Lt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ot=(e,i)=>e.has(Lt(i)),Nt=e=>{const i=e.constructor&&e.constructor.prototype;return L(i)&&i.hasOwnProperty("isPrototypeOf")},Te=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function H(e){let i;const r=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Te&&(e instanceof Blob||e instanceof FileList))&&(r||L(e)))if(i=r?[]:{},!r&&!Nt(e))i=e;else for(const t in e)e.hasOwnProperty(t)&&(i[t]=H(e[t]));else return e;return i}var ce=e=>Array.isArray(e)?e.filter(Boolean):[],S=e=>e===void 0,d=(e,i,r)=>{if(!i||!L(e))return r;const t=ce(i.split(/[,[\].]+?/)).reduce((n,a)=>O(n)?n:n[a],e);return S(t)||t===e?S(e[i])?r:e[i]:t},$=e=>typeof e=="boolean";const xe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},q={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},J={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},ut=D.createContext(null),ne=()=>D.useContext(ut),Mt=e=>{const{children:i,...r}=e;return D.createElement(ut.Provider,{value:r},i)};var ct=(e,i,r,t=!0)=>{const n={defaultValues:i._defaultValues};for(const a in e)Object.defineProperty(n,a,{get:()=>{const u=a;return i._proxyFormState[u]!==q.all&&(i._proxyFormState[u]=!t||q.all),r&&(r[u]=!0),e[u]}});return n},P=e=>L(e)&&!Object.keys(e).length,ft=(e,i,r,t)=>{r(e);const{name:n,...a}=e;return P(a)||Object.keys(a).length>=Object.keys(i).length||Object.keys(a).find(u=>i[u]===(!t||q.all))},ge=e=>Array.isArray(e)?e:[e],dt=(e,i,r)=>!e||!i||e===i||ge(e).some(t=>t&&(r?t===i:t.startsWith(i)||i.startsWith(t)));function Re(e){const i=D.useRef(e);i.current=e,D.useEffect(()=>{const r=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}function jt(e){const i=ne(),{control:r=i.control,disabled:t,name:n,exact:a}=e||{},[u,h]=D.useState(r._formState),g=D.useRef(!0),w=D.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),p=D.useRef(n);return p.current=n,Re({disabled:t,next:C=>g.current&&dt(p.current,C.name,a)&&ft(C,w.current,r._updateFormState)&&h({...r._formState,...C}),subject:r._subjects.state}),D.useEffect(()=>(g.current=!0,w.current.isValid&&r._updateValid(!0),()=>{g.current=!1}),[r]),ct(u,r,w.current,!1)}var K=e=>typeof e=="string",yt=(e,i,r,t,n)=>K(e)?(t&&i.watch.add(e),d(r,e,n)):Array.isArray(e)?e.map(a=>(t&&i.watch.add(a),d(r,a))):(t&&(i.watchAll=!0),r);function Tt(e){const i=ne(),{control:r=i.control,name:t,defaultValue:n,disabled:a,exact:u}=e||{},h=D.useRef(t);h.current=t,Re({disabled:a,subject:r._subjects.values,next:p=>{dt(h.current,p.name,u)&&w(H(yt(h.current,r._names,p.values||r._formValues,!1,n)))}});const[g,w]=D.useState(r._getWatch(t,n));return D.useEffect(()=>r._removeUnmounted()),g}var Oe=e=>/^\w*$/.test(e),gt=e=>ce(e.replace(/["|']|\]/g,"").split(/\.|\[/));function F(e,i,r){let t=-1;const n=Oe(i)?[i]:gt(i),a=n.length,u=a-1;for(;++t<a;){const h=n[t];let g=r;if(t!==u){const w=e[h];g=L(w)||Array.isArray(w)?w:isNaN(+n[t+1])?{}:[]}e[h]=g,e=e[h]}return e}function Be(e){const i=ne(),{name:r,disabled:t,control:n=i.control,shouldUnregister:a}=e,u=ot(n._names.array,r),h=Tt({control:n,name:r,defaultValue:d(n._formValues,r,d(n._defaultValues,r,e.defaultValue)),exact:!0}),g=jt({control:n,name:r}),w=D.useRef(n.register(r,{...e.rules,value:h}));return w.current=n.register(r,e.rules),D.useEffect(()=>{const p=n._options.shouldUnregister||a,C=(x,R)=>{const N=d(n._fields,x);N&&(N._f.mount=R)};if(C(r,!0),p){const x=H(d(n._options.defaultValues,r));F(n._defaultValues,r,x),S(d(n._formValues,r))&&F(n._formValues,r,x)}return()=>{(u?p&&!n._state.action:p)?n.unregister(r):C(r,!1)}},[r,n,u,a]),D.useEffect(()=>{d(n._fields,r)&&n._updateDisabledField({disabled:t,fields:n._fields,name:r,value:d(n._fields,r)._f.value})},[t,r,n]),{field:{name:r,value:h,...$(t)||$(g.disabled)?{disabled:g.disabled||t}:{},onChange:D.useCallback(p=>w.current.onChange({target:{value:at(p),name:r},type:xe.CHANGE}),[r]),onBlur:D.useCallback(()=>w.current.onBlur({target:{value:d(n._formValues,r),name:r},type:xe.BLUR}),[r,n]),ref:p=>{const C=d(n._fields,r);C&&p&&(C._f.ref={focus:()=>p.focus(),select:()=>p.select(),setCustomValidity:x=>p.setCustomValidity(x),reportValidity:()=>p.reportValidity()})}},formState:g,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!d(g.errors,r)},isDirty:{enumerable:!0,get:()=>!!d(g.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!d(g.touchedFields,r)},error:{enumerable:!0,get:()=>d(g.errors,r)}})}}var Rt=(e,i,r,t,n)=>i?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[t]:n||!0}}:{},Xe=e=>({isOnSubmit:!e||e===q.onSubmit,isOnBlur:e===q.onBlur,isOnChange:e===q.onChange,isOnAll:e===q.all,isOnTouch:e===q.onTouched}),Ye=(e,i,r)=>!r&&(i.watchAll||i.watch.has(e)||[...i.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const he=(e,i,r,t)=>{for(const n of r||Object.keys(e)){const a=d(e,n);if(a){const{_f:u,...h}=a;if(u){if(u.refs&&u.refs[0]&&i(u.refs[0],n)&&!t)break;if(u.ref&&i(u.ref,u.name)&&!t)break}else L(h)&&he(h,i)}}};var Ot=(e,i,r)=>{const t=ce(d(e,r));return F(t,"root",i[r]),F(e,r,t),e},Ue=e=>e.type==="file",Q=e=>typeof e=="function",me=e=>{if(!Te)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},ve=e=>K(e),Pe=e=>e.type==="radio",be=e=>e instanceof RegExp;const et={value:!1,isValid:!1},tt={value:!0,isValid:!0};var ht=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!S(e[0].attributes.value)?S(e[0].value)||e[0].value===""?tt:{value:e[0].value,isValid:!0}:tt:et}return et};const rt={isValid:!1,value:null};var vt=e=>Array.isArray(e)?e.reduce((i,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:i,rt):rt;function st(e,i,r="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||$(e)&&!e)return{type:r,message:ve(e)?e:"",ref:i}}var se=e=>L(e)&&!be(e)?e:{value:e,message:""},it=async(e,i,r,t,n)=>{const{ref:a,refs:u,required:h,maxLength:g,minLength:w,min:p,max:C,pattern:x,validate:R,name:N,valueAsNumber:we,mount:fe,disabled:pe}=e._f,m=d(i,N);if(!fe||pe)return{};const I=u?u[0]:a,G=V=>{t&&I.reportValidity&&(I.setCustomValidity($(V)?"":V||""),I.reportValidity())},M={},le=Pe(a),te=ue(a),Ve=le||te,Z=(we||Ue(a))&&S(a.value)&&S(m)||me(a)&&a.value===""||m===""||Array.isArray(m)&&!m.length,X=Rt.bind(null,N,r,M),z=(V,b,E,B=J.maxLength,U=J.minLength)=>{const W=V?b:E;M[N]={type:V?B:U,message:W,ref:a,...X(V?B:U,W)}};if(n?!Array.isArray(m)||!m.length:h&&(!Ve&&(Z||O(m))||$(m)&&!m||te&&!ht(u).isValid||le&&!vt(u).isValid)){const{value:V,message:b}=ve(h)?{value:!!h,message:h}:se(h);if(V&&(M[N]={type:J.required,message:b,ref:I,...X(J.required,b)},!r))return G(b),M}if(!Z&&(!O(p)||!O(C))){let V,b;const E=se(C),B=se(p);if(!O(m)&&!isNaN(m)){const U=a.valueAsNumber||m&&+m;O(E.value)||(V=U>E.value),O(B.value)||(b=U<B.value)}else{const U=a.valueAsDate||new Date(m),W=de=>new Date(new Date().toDateString()+" "+de),Y=a.type=="time",ae=a.type=="week";K(E.value)&&m&&(V=Y?W(m)>W(E.value):ae?m>E.value:U>new Date(E.value)),K(B.value)&&m&&(b=Y?W(m)<W(B.value):ae?m<B.value:U<new Date(B.value))}if((V||b)&&(z(!!V,E.message,B.message,J.max,J.min),!r))return G(M[N].message),M}if((g||w)&&!Z&&(K(m)||n&&Array.isArray(m))){const V=se(g),b=se(w),E=!O(V.value)&&m.length>+V.value,B=!O(b.value)&&m.length<+b.value;if((E||B)&&(z(E,V.message,b.message),!r))return G(M[N].message),M}if(x&&!Z&&K(m)){const{value:V,message:b}=se(x);if(be(V)&&!m.match(V)&&(M[N]={type:J.pattern,message:b,ref:a,...X(J.pattern,b)},!r))return G(b),M}if(R){if(Q(R)){const V=await R(m,i),b=st(V,I);if(b&&(M[N]={...b,...X(J.validate,b.message)},!r))return G(b.message),M}else if(L(R)){let V={};for(const b in R){if(!P(V)&&!r)break;const E=st(await R[b](m,i),I,b);E&&(V={...E,...X(b,E.message)},G(E.message),r&&(M[N]=V))}if(!P(V)&&(M[N]={ref:I,...V},!r))return M}}return G(!0),M};function Bt(e,i){const r=i.slice(0,-1).length;let t=0;for(;t<r;)e=S(e)?t++:e[i[t++]];return e}function Ut(e){for(const i in e)if(e.hasOwnProperty(i)&&!S(e[i]))return!1;return!0}function j(e,i){const r=Array.isArray(i)?i:Oe(i)?[i]:gt(i),t=r.length===1?e:Bt(e,r),n=r.length-1,a=r[n];return t&&delete t[a],n!==0&&(L(t)&&P(t)||Array.isArray(t)&&Ut(t))&&j(e,r.slice(0,-1)),e}function ke(){let e=[];return{get observers(){return e},next:n=>{for(const a of e)a.next&&a.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(a=>a!==n)}}),unsubscribe:()=>{e=[]}}}var Ce=e=>O(e)||!lt(e);function ee(e,i){if(Ce(e)||Ce(i))return e===i;if(ie(e)&&ie(i))return e.getTime()===i.getTime();const r=Object.keys(e),t=Object.keys(i);if(r.length!==t.length)return!1;for(const n of r){const a=e[n];if(!t.includes(n))return!1;if(n!=="ref"){const u=i[n];if(ie(a)&&ie(u)||L(a)&&L(u)||Array.isArray(a)&&Array.isArray(u)?!ee(a,u):a!==u)return!1}}return!0}var xt=e=>e.type==="select-multiple",Pt=e=>Pe(e)||ue(e),Le=e=>me(e)&&e.isConnected,mt=e=>{for(const i in e)if(Q(e[i]))return!0;return!1};function _e(e,i={}){const r=Array.isArray(e);if(L(e)||r)for(const t in e)Array.isArray(e[t])||L(e[t])&&!mt(e[t])?(i[t]=Array.isArray(e[t])?[]:{},_e(e[t],i[t])):O(e[t])||(i[t]=!0);return i}function bt(e,i,r){const t=Array.isArray(e);if(L(e)||t)for(const n in e)Array.isArray(e[n])||L(e[n])&&!mt(e[n])?S(i)||Ce(r[n])?r[n]=Array.isArray(e[n])?_e(e[n],[]):{..._e(e[n])}:bt(e[n],O(i)?{}:i[n],r[n]):r[n]=!ee(e[n],i[n]);return r}var Ne=(e,i)=>bt(e,i,_e(i)),Ct=(e,{valueAsNumber:i,valueAsDate:r,setValueAs:t})=>S(e)?e:i?e===""?NaN:e&&+e:r&&K(e)?new Date(e):t?t(e):e;function Me(e){const i=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):i.disabled))return Ue(i)?i.files:Pe(i)?vt(e.refs).value:xt(i)?[...i.selectedOptions].map(({value:r})=>r):ue(i)?ht(e.refs).value:Ct(S(i.value)?e.ref.value:i.value,e)}var It=(e,i,r,t)=>{const n={};for(const a of e){const u=d(i,a);u&&F(n,a,u._f)}return{criteriaMode:r,names:[...e],fields:n,shouldUseNativeValidation:t}},oe=e=>S(e)?e:be(e)?e.source:L(e)?be(e.value)?e.value.source:e.value:e,Ht=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function nt(e,i,r){const t=d(e,r);if(t||Oe(r))return{error:t,name:r};const n=r.split(".");for(;n.length;){const a=n.join("."),u=d(i,a),h=d(e,a);if(u&&!Array.isArray(u)&&r!==a)return{name:r};if(h&&h.type)return{name:a,error:h};n.pop()}return{name:r}}var qt=(e,i,r,t,n)=>n.isOnAll?!1:!r&&n.isOnTouch?!(i||e):(r?t.isOnBlur:n.isOnBlur)?!e:(r?t.isOnChange:n.isOnChange)?e:!0,Zt=(e,i)=>!ce(d(e,i)).length&&j(e,i);const Wt={mode:q.onSubmit,reValidateMode:q.onChange,shouldFocusError:!0};function $t(e={},i){let r={...Wt,...e},t={submitCount:0,isDirty:!1,isLoading:Q(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},n={},a=L(r.defaultValues)||L(r.values)?H(r.defaultValues||r.values)||{}:{},u=r.shouldUnregister?{}:H(a),h={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w,p=0;const C={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:ke(),array:ke(),state:ke()},R=e.resetOptions&&e.resetOptions.keepDirtyValues,N=Xe(r.mode),we=Xe(r.reValidateMode),fe=r.criteriaMode===q.all,pe=s=>l=>{clearTimeout(p),p=setTimeout(s,l)},m=async s=>{if(C.isValid||s){const l=r.resolver?P((await Z()).errors):await z(n,!0);l!==t.isValid&&x.state.next({isValid:l})}},I=s=>C.isValidating&&x.state.next({isValidating:s}),G=(s,l=[],o,y,f=!0,c=!0)=>{if(y&&o){if(h.action=!0,c&&Array.isArray(d(n,s))){const v=o(d(n,s),y.argA,y.argB);f&&F(n,s,v)}if(c&&Array.isArray(d(t.errors,s))){const v=o(d(t.errors,s),y.argA,y.argB);f&&F(t.errors,s,v),Zt(t.errors,s)}if(C.touchedFields&&c&&Array.isArray(d(t.touchedFields,s))){const v=o(d(t.touchedFields,s),y.argA,y.argB);f&&F(t.touchedFields,s,v)}C.dirtyFields&&(t.dirtyFields=Ne(a,u)),x.state.next({name:s,isDirty:b(s,l),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else F(u,s,l)},M=(s,l)=>{F(t.errors,s,l),x.state.next({errors:t.errors})},le=(s,l,o,y)=>{const f=d(n,s);if(f){const c=d(u,s,S(o)?d(a,s):o);S(c)||y&&y.defaultChecked||l?F(u,s,l?c:Me(f._f)):U(s,c),h.mount&&m()}},te=(s,l,o,y,f)=>{let c=!1,v=!1;const A={name:s};if(!o||y){C.isDirty&&(v=t.isDirty,t.isDirty=A.isDirty=b(),c=v!==A.isDirty);const k=ee(d(a,s),l);v=d(t.dirtyFields,s),k?j(t.dirtyFields,s):F(t.dirtyFields,s,!0),A.dirtyFields=t.dirtyFields,c=c||C.dirtyFields&&v!==!k}if(o){const k=d(t.touchedFields,s);k||(F(t.touchedFields,s,o),A.touchedFields=t.touchedFields,c=c||C.touchedFields&&k!==o)}return c&&f&&x.state.next(A),c?A:{}},Ve=(s,l,o,y)=>{const f=d(t.errors,s),c=C.isValid&&$(l)&&t.isValid!==l;if(e.delayError&&o?(w=pe(()=>M(s,o)),w(e.delayError)):(clearTimeout(p),w=null,o?F(t.errors,s,o):j(t.errors,s)),(o?!ee(f,o):f)||!P(y)||c){const v={...y,...c&&$(l)?{isValid:l}:{},errors:t.errors,name:s};t={...t,...v},x.state.next(v)}I(!1)},Z=async s=>r.resolver(u,r.context,It(s||g.mount,n,r.criteriaMode,r.shouldUseNativeValidation)),X=async s=>{const{errors:l}=await Z(s);if(s)for(const o of s){const y=d(l,o);y?F(t.errors,o,y):j(t.errors,o)}else t.errors=l;return l},z=async(s,l,o={valid:!0})=>{for(const y in s){const f=s[y];if(f){const{_f:c,...v}=f;if(c){const A=g.array.has(c.name),k=await it(f,u,fe,r.shouldUseNativeValidation&&!l,A);if(k[c.name]&&(o.valid=!1,l))break;!l&&(d(k,c.name)?A?Ot(t.errors,k,c.name):F(t.errors,c.name,k[c.name]):j(t.errors,c.name))}v&&await z(v,l,o)}}return o.valid},V=()=>{for(const s of g.unMount){const l=d(n,s);l&&(l._f.refs?l._f.refs.every(o=>!Le(o)):!Le(l._f.ref))&&Fe(s)}g.unMount=new Set},b=(s,l)=>(s&&l&&F(u,s,l),!ee(Ie(),a)),E=(s,l,o)=>yt(s,g,{...h.mount?u:S(l)?a:K(s)?{[s]:l}:l},o,l),B=s=>ce(d(h.mount?u:a,s,e.shouldUnregister?d(a,s,[]):[])),U=(s,l,o={})=>{const y=d(n,s);let f=l;if(y){const c=y._f;c&&(!c.disabled&&F(u,s,Ct(l,c)),f=me(c.ref)&&O(l)?"":l,xt(c.ref)?[...c.ref.options].forEach(v=>v.selected=f.includes(v.value)):c.refs?ue(c.ref)?c.refs.length>1?c.refs.forEach(v=>(!v.defaultChecked||!v.disabled)&&(v.checked=Array.isArray(f)?!!f.find(A=>A===v.value):f===v.value)):c.refs[0]&&(c.refs[0].checked=!!f):c.refs.forEach(v=>v.checked=v.value===f):Ue(c.ref)?c.ref.value="":(c.ref.value=f,c.ref.type||x.values.next({name:s,values:{...u}})))}(o.shouldDirty||o.shouldTouch)&&te(s,f,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&Ae(s)},W=(s,l,o)=>{for(const y in l){const f=l[y],c=`${s}.${y}`,v=d(n,c);(g.array.has(s)||!Ce(f)||v&&!v._f)&&!ie(f)?W(c,f,o):U(c,f,o)}},Y=(s,l,o={})=>{const y=d(n,s),f=g.array.has(s),c=H(l);F(u,s,c),f?(x.array.next({name:s,values:{...u}}),(C.isDirty||C.dirtyFields)&&o.shouldDirty&&x.state.next({name:s,dirtyFields:Ne(a,u),isDirty:b(s,c)})):y&&!y._f&&!O(c)?W(s,c,o):U(s,c,o),Ye(s,g)&&x.state.next({...t}),x.values.next({name:s,values:{...u}}),!h.mount&&i()},ae=async s=>{const l=s.target;let o=l.name,y=!0;const f=d(n,o),c=()=>l.type?Me(f._f):at(s),v=A=>{y=Number.isNaN(A)||A===d(u,o,A)};if(f){let A,k;const ye=c(),re=s.type===xe.BLUR||s.type===xe.FOCUS_OUT,At=!Ht(f._f)&&!r.resolver&&!d(t.errors,o)&&!f._f.deps||qt(re,d(t.touchedFields,o),t.isSubmitted,we,N),Se=Ye(o,g,re);F(u,o,ye),re?(f._f.onBlur&&f._f.onBlur(s),w&&w(0)):f._f.onChange&&f._f.onChange(s);const Ee=te(o,ye,re,!1),Ft=!P(Ee)||Se;if(!re&&x.values.next({name:o,type:s.type,values:{...u}}),At)return C.isValid&&m(),Ft&&x.state.next({name:o,...Se?{}:Ee});if(!re&&Se&&x.state.next({...t}),I(!0),r.resolver){const{errors:ze}=await Z([o]);if(v(ye),y){const Dt=nt(t.errors,n,o),Je=nt(ze,n,Dt.name||o);A=Je.error,o=Je.name,k=P(ze)}}else A=(await it(f,u,fe,r.shouldUseNativeValidation))[o],v(ye),y&&(A?k=!1:C.isValid&&(k=await z(n,!0)));y&&(f._f.deps&&Ae(f._f.deps),Ve(o,k,A,Ee))}},de=(s,l)=>{if(d(t.errors,l)&&s.focus)return s.focus(),1},Ae=async(s,l={})=>{let o,y;const f=ge(s);if(I(!0),r.resolver){const c=await X(S(s)?s:f);o=P(c),y=s?!f.some(v=>d(c,v)):o}else s?(y=(await Promise.all(f.map(async c=>{const v=d(n,c);return await z(v&&v._f?{[c]:v}:v)}))).every(Boolean),!(!y&&!t.isValid)&&m()):y=o=await z(n);return x.state.next({...!K(s)||C.isValid&&o!==t.isValid?{}:{name:s},...r.resolver||!s?{isValid:o}:{},errors:t.errors,isValidating:!1}),l.shouldFocus&&!y&&he(n,de,s?f:g.mount),y},Ie=s=>{const l={...a,...h.mount?u:{}};return S(s)?l:K(s)?d(l,s):s.map(o=>d(l,o))},He=(s,l)=>({invalid:!!d((l||t).errors,s),isDirty:!!d((l||t).dirtyFields,s),isTouched:!!d((l||t).touchedFields,s),error:d((l||t).errors,s)}),_t=s=>{s&&ge(s).forEach(l=>j(t.errors,l)),x.state.next({errors:s?t.errors:{}})},qe=(s,l,o)=>{const y=(d(n,s,{_f:{}})._f||{}).ref;F(t.errors,s,{...l,ref:y}),x.state.next({name:s,errors:t.errors,isValid:!1}),o&&o.shouldFocus&&y&&y.focus&&y.focus()},wt=(s,l)=>Q(s)?x.values.subscribe({next:o=>s(E(void 0,l),o)}):E(s,l,!0),Fe=(s,l={})=>{for(const o of s?ge(s):g.mount)g.mount.delete(o),g.array.delete(o),l.keepValue||(j(n,o),j(u,o)),!l.keepError&&j(t.errors,o),!l.keepDirty&&j(t.dirtyFields,o),!l.keepTouched&&j(t.touchedFields,o),!r.shouldUnregister&&!l.keepDefaultValue&&j(a,o);x.values.next({values:{...u}}),x.state.next({...t,...l.keepDirty?{isDirty:b()}:{}}),!l.keepIsValid&&m()},Ze=({disabled:s,name:l,field:o,fields:y,value:f})=>{if($(s)){const c=s?void 0:S(f)?Me(o?o._f:d(y,l)._f):f;F(u,l,c),te(l,c,!1,!1,!0)}},De=(s,l={})=>{let o=d(n,s);const y=$(l.disabled);return F(n,s,{...o||{},_f:{...o&&o._f?o._f:{ref:{name:s}},name:s,mount:!0,...l}}),g.mount.add(s),o?Ze({field:o,disabled:l.disabled,name:s}):le(s,!0,l.value),{...y?{disabled:l.disabled}:{},...r.progressive?{required:!!l.required,min:oe(l.min),max:oe(l.max),minLength:oe(l.minLength),maxLength:oe(l.maxLength),pattern:oe(l.pattern)}:{},name:s,onChange:ae,onBlur:ae,ref:f=>{if(f){De(s,l),o=d(n,s);const c=S(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,v=Pt(c),A=o._f.refs||[];if(v?A.find(k=>k===c):c===o._f.ref)return;F(n,s,{_f:{...o._f,...v?{refs:[...A.filter(Le),c,...Array.isArray(d(a,s))?[{}]:[]],ref:{type:c.type,name:s}}:{ref:c}}}),le(s,!1,void 0,c)}else o=d(n,s,{}),o._f&&(o._f.mount=!1),(r.shouldUnregister||l.shouldUnregister)&&!(ot(g.array,s)&&h.action)&&g.unMount.add(s)}}},We=()=>r.shouldFocusError&&he(n,de,g.mount),pt=s=>{$(s)&&(x.state.next({disabled:s}),he(n,l=>{l.disabled=s},0,!1))},$e=(s,l)=>async o=>{o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let y=H(u);if(x.state.next({isSubmitting:!0}),r.resolver){const{errors:f,values:c}=await Z();t.errors=f,y=c}else await z(n);j(t.errors,"root"),P(t.errors)?(x.state.next({errors:{}}),await s(y,o)):(l&&await l({...t.errors},o),We(),setTimeout(We)),x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:P(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Vt=(s,l={})=>{d(n,s)&&(S(l.defaultValue)?Y(s,d(a,s)):(Y(s,l.defaultValue),F(a,s,l.defaultValue)),l.keepTouched||j(t.touchedFields,s),l.keepDirty||(j(t.dirtyFields,s),t.isDirty=l.defaultValue?b(s,d(a,s)):b()),l.keepError||(j(t.errors,s),C.isValid&&m()),x.state.next({...t}))},Ke=(s,l={})=>{const o=s?H(s):a,y=H(o),f=s&&!P(s)?y:a;if(l.keepDefaultValues||(a=o),!l.keepValues){if(l.keepDirtyValues||R)for(const c of g.mount)d(t.dirtyFields,c)?F(f,c,d(u,c)):Y(c,d(f,c));else{if(Te&&S(s))for(const c of g.mount){const v=d(n,c);if(v&&v._f){const A=Array.isArray(v._f.refs)?v._f.refs[0]:v._f.ref;if(me(A)){const k=A.closest("form");if(k){k.reset();break}}}}n={}}u=e.shouldUnregister?l.keepDefaultValues?H(a):{}:H(f),x.array.next({values:{...f}}),x.values.next({values:{...f}})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!h.mount&&i(),h.mount=!C.isValid||!!l.keepIsValid,h.watch=!!e.shouldUnregister,x.state.next({submitCount:l.keepSubmitCount?t.submitCount:0,isDirty:l.keepDirty?t.isDirty:!!(l.keepDefaultValues&&!ee(s,a)),isSubmitted:l.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:l.keepDirtyValues?t.dirtyFields:l.keepDefaultValues&&s?Ne(a,s):{},touchedFields:l.keepTouched?t.touchedFields:{},errors:l.keepErrors?t.errors:{},isSubmitSuccessful:l.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Ge=(s,l)=>Ke(Q(s)?s(u):s,l);return{control:{register:De,unregister:Fe,getFieldState:He,handleSubmit:$e,setError:qe,_executeSchema:Z,_getWatch:E,_getDirty:b,_updateValid:m,_removeUnmounted:V,_updateFieldArray:G,_updateDisabledField:Ze,_getFieldArray:B,_reset:Ke,_resetDefaultValues:()=>Q(r.defaultValues)&&r.defaultValues().then(s=>{Ge(s,r.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:s=>{t={...t,...s}},_disableForm:pt,_subjects:x,_proxyFormState:C,get _fields(){return n},get _formValues(){return u},get _state(){return h},set _state(s){h=s},get _defaultValues(){return a},get _names(){return g},set _names(s){g=s},get _formState(){return t},set _formState(s){t=s},get _options(){return r},set _options(s){r={...r,...s}}},trigger:Ae,register:De,handleSubmit:$e,watch:wt,setValue:Y,getValues:Ie,reset:Ge,resetField:Vt,clearErrors:_t,unregister:Fe,setError:qe,setFocus:(s,l={})=>{const o=d(n,s),y=o&&o._f;if(y){const f=y.refs?y.refs[0]:y.ref;f.focus&&(f.focus(),l.shouldSelect&&f.select())}},getFieldState:He}}function Kt(e={}){const i=D.useRef(),r=D.useRef(),[t,n]=D.useState({isDirty:!1,isValidating:!1,isLoading:Q(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:Q(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...$t(e,()=>n(u=>({...u}))),formState:t});const a=i.current.control;return a._options=e,Re({subject:a._subjects.state,next:u=>{ft(u,a._proxyFormState,a._updateFormState,!0)&&n({...a._formState})}}),D.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),D.useEffect(()=>{if(a._proxyFormState.isDirty){const u=a._getDirty();u!==t.isDirty&&a._subjects.state.next({isDirty:u})}},[a,t.isDirty]),D.useEffect(()=>{e.values&&!ee(e.values,r.current)?(a._reset(e.values,a._options.resetOptions),r.current=e.values):a._resetDefaultValues()},[e.values,a]),D.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),i.current.formState=ct(t,a),i.current}const Gt=({onSubmit:e,useFormMethods:i,children:r,...t})=>_.jsx(Mt,{...i,children:_.jsx("form",{onSubmit:e&&i.handleSubmit(e),...t,children:r})}),zt=e=>T.createElement("svg",{width:12,height:12,viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...e},T.createElement("g",{id:"attention"},T.createElement("g",{id:"coolicon"},T.createElement("path",{d:"M10.6332 10.4991H1.36669C1.18806 10.4991 1.023 10.4038 0.933683 10.2491C0.84437 10.0944 0.844371 9.90376 0.933687 9.74906L5.56669 1.74906C5.65607 1.59461 5.82099 1.49951 5.99944 1.49951C6.17788 1.49951 6.3428 1.59461 6.43219 1.74906L11.0652 9.74906C11.1545 9.90368 11.1545 10.0942 11.0653 10.2488C10.9761 10.4035 10.8112 10.4989 10.6327 10.4991H10.6332ZM6.00019 2.99906L2.23469 9.49906H9.76669L6.00019 2.99906ZM6.49769 7.49956H5.49769V4.99906H6.49769V7.49956Z"}),T.createElement("path",{d:"M5.50019 8.00006H6.50019V9.00006H5.50019V8.00006Z"})))),Jt=({name:e,label:i,rules:r,shouldUnregister:t,defaultValue:n,...a})=>{const{control:u}=ne(),{field:{name:h,value:g,onBlur:w,onChange:p,ref:C},fieldState:{isTouched:x,error:R}}=Be({name:e,rules:r,control:u,shouldUnregister:t,defaultValue:n});return _.jsxs("div",{className:"group relative",children:[_.jsx("label",{className:je("pointer-events-none absolute left-4 origin-top-left translate-y-[18px] text-base font-normal leading-5 text-gray-400 transition-transform group-focus-within:translate-y-2.5 group-focus-within:scale-[0.625]",g&&"translate-y-[9.75px] scale-[0.625]"),children:i}),_.jsx("input",{type:"text",className:je("h-14 w-[-webkit-fill-available] rounded-lg border border-gray-200 bg-white px-4 pb-3 pt-6 text-base font-normal leading-5 text-gray-700 focus-visible:outline-2 focus-visible:outline-blue-400",R&&"border-2 border-red-600"),name:h,value:g,onChange:p,onBlur:w,ref:C,...a}),R&&x&&_.jsxs("div",{className:"mx-4 my-1.5 flex items-center gap-x-1 text-xs font-normal text-red-600",children:[_.jsx(zt,{}),_.jsx("div",{children:R.message})]})]})},Qt=({name:e,rules:i,shouldUnregister:r,defaultValue:t,...n})=>{const{control:a}=ne(),{field:{name:u,value:h,onBlur:g,onChange:w,ref:p}}=Be({name:e,rules:i,control:a,shouldUnregister:r,defaultValue:t});return _.jsx("textarea",{className:"w-[-webkit-fill-available] rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-normal leading-4 text-gray-600 placeholder:text-gray-500 focus:placeholder:text-[#99999B] focus-visible:outline-2 focus-visible:outline-blue-400",name:u,value:h,onChange:w,onBlur:g,ref:p,...n})},Xt=e=>T.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...e},T.createElement("g",{id:"arrow"},T.createElement("path",{id:"coolicon",d:"M10 13.0942L15.0084 8.08591L13.8309 6.90674L10 10.7401L6.17003 6.90674L4.9917 8.08507L10 13.0942Z"}))),Yt=({name:e,label:i,data:r,rules:t,shouldUnregister:n,defaultValue:a,...u})=>{const{control:h}=ne(),{field:{name:g,value:w,onBlur:p,onChange:C,ref:x}}=Be({name:e,rules:t,control:h,shouldUnregister:n,defaultValue:a});return _.jsxs("div",{className:"group relative",children:[_.jsx("label",{className:je("pointer-events-none absolute left-4 origin-top-left translate-y-[18px] text-base font-normal leading-5 text-gray-400 transition-transform group-focus-within:translate-y-2.5 group-focus-within:scale-[0.625]",w&&"translate-y-[10px] scale-[0.625]"),children:i}),_.jsx(Xt,{className:"pointer-events-none absolute right-4 top-[18px] text-gray-400"}),_.jsxs("select",{className:"h-14 w-[-webkit-fill-available] appearance-none rounded-lg border border-gray-200 bg-white px-4 pb-3 pt-6 text-base font-normal leading-5 text-gray-700 focus-visible:outline-2 focus-visible:outline-blue-400",name:g,value:w,onChange:C,onBlur:p,ref:x,...u,children:[_.jsx("option",{value:"",hidden:!0}),r==null?void 0:r.map(({label:R,value:N})=>_.jsx("option",{className:"flex items-center bg-white px-3 pb-[12.5px] pt-[11.5px] text-sm font-normal leading-4 text-gray-800 hover:bg-[#ECEDF0] active:bg-[#CACACD]",value:N,children:R},`${N}`))]})]})},er=e=>{const i=new Date,r=new Date(e),t=Math.round((i.getTime()-r.getTime())/1e3),n=60,a=n*60,u=a*24,h=u*7,g=u*30,w=g*12;return t<30?"just now":t<n?t+" seconds ago":t<2*n?"a minute ago":t<a?Math.floor(t/n)+" minutes ago":Math.floor(t/a)==1?"1 hour ago":t<u?Math.floor(t/a)+" hours ago":t<u*2?"yesterday":t<h?h+" days ago":t<g?Math.floor(t/h)+" weeks ago":t<w?Math.floor(t/g)+" months ago":Math.floor(t/w)+" years ago"},tr=e=>T.createElement("svg",{width:22,height:22,viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...e},T.createElement("g",{id:"Outline / Arrows / Double Alt Arrow Right"},T.createElement("path",{id:"Vector (Stroke)",fillRule:"evenodd",clipRule:"evenodd",d:"M6.12149 4.27147C6.40104 4.03185 6.82191 4.06423 7.06152 4.34378L12.3949 10.566C12.6088 10.8157 12.6088 11.1841 12.3949 11.4337L7.06152 17.6559C6.82191 17.9355 6.40104 17.9679 6.12149 17.7283C5.84194 17.4886 5.80956 17.0678 6.04918 16.7882L11.0106 10.9999L6.04918 5.2115C5.80956 4.93195 5.84194 4.51108 6.12149 4.27147ZM9.67722 4.27156C9.95677 4.03195 10.3776 4.06432 10.6173 4.34387L15.9506 10.5661C16.1646 10.8158 16.1646 11.1842 15.9506 11.4338L10.6173 17.656C10.3776 17.9356 9.95677 17.968 9.67722 17.7283C9.39767 17.4887 9.36529 17.0679 9.60491 16.7883L14.5664 11L9.60491 5.21159C9.36529 4.93204 9.39767 4.51118 9.67722 4.27156Z"}))),rr=e=>T.createElement("svg",{width:33,height:32,viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},T.createElement("g",{id:"Outline / Notes / Notes"},T.createElement("path",{id:"Vector",fillRule:"evenodd",clipRule:"evenodd",d:"M22.3586 2.69503L22.4473 2.7188C23.9131 3.11156 25.0747 3.4228 25.9884 3.75285C26.923 4.09046 27.6851 4.47666 28.313 5.06471C29.2272 5.92098 29.867 7.02914 30.1514 8.24903C30.3468 9.08678 30.3002 9.93989 30.1252 10.9181C29.9542 11.8744 29.643 13.036 29.2502 14.5019L28.5362 17.1663C28.1435 18.6321 27.8323 19.7937 27.5022 20.7074C27.1646 21.6419 26.7784 22.4041 26.1904 23.0319C25.3613 23.9171 24.2962 24.545 23.1221 24.8422C22.7791 25.6285 22.2782 26.3406 21.6463 26.9324C21.0184 27.5205 20.2563 27.9067 19.3217 28.2443C18.4081 28.5743 17.2465 28.8856 15.7807 29.2783L15.6921 29.3021C14.2262 29.6949 13.0646 30.0061 12.1083 30.1771C11.1301 30.352 10.277 30.3986 9.43921 30.2033C8.21932 29.9189 7.11117 29.2791 6.25489 28.3648C5.66685 27.737 5.28065 26.9749 4.94304 26.0403C4.61298 25.1266 4.30174 23.965 3.90898 22.4992L3.19504 19.8347C2.80227 18.3689 2.49101 17.2073 2.32001 16.251C2.14509 15.2728 2.0985 14.4197 2.29383 13.582C2.57827 12.3621 3.21806 11.2539 4.1323 10.3976C4.76015 9.8096 5.52226 9.4234 6.45685 9.08579C7.37052 8.75573 8.53213 8.44449 9.99796 8.05173L10.0423 8.03985C10.3949 7.94537 10.7285 7.85612 11.0444 7.77266C11.5666 5.90716 12.0261 4.58843 12.9216 3.6323C13.7778 2.71806 14.886 2.07827 16.1059 1.79383C16.9436 1.5985 17.7967 1.64509 18.7749 1.82001C19.7312 1.99101 20.8928 2.30226 22.3586 2.69503ZM10.4401 10.0038C8.98293 10.3944 7.93882 10.6769 7.13635 10.9668C6.32379 11.2603 5.84669 11.5322 5.49949 11.8574C4.87395 12.4432 4.4362 13.2015 4.24159 14.0361C4.13356 14.4994 4.1367 15.0485 4.28878 15.899C4.44305 16.7617 4.73148 17.8414 5.13877 19.3614L5.82896 21.9372C6.23624 23.4572 6.5263 24.5365 6.82407 25.3608C7.1176 26.1734 7.38943 26.6504 7.71462 26.9977C8.30049 27.6232 9.0587 28.0609 9.89337 28.2556C10.3566 28.3636 10.9057 28.3604 11.7562 28.2084C12.6189 28.0541 13.6987 27.7657 15.2187 27.3584C16.7387 26.9511 17.8179 26.661 18.6422 26.3633C19.4548 26.0697 19.9319 25.7979 20.2791 25.4727C20.4625 25.3009 20.6298 25.1143 20.7796 24.9154C20.5408 24.8817 20.2952 24.8388 20.041 24.7882C19.1453 24.6101 18.0692 24.3218 16.7412 23.9659L16.6646 23.9454C15.1988 23.5527 14.0372 23.2414 13.1235 22.9114C12.1889 22.5737 11.4268 22.1875 10.799 21.5995C9.88473 20.7432 9.24494 19.6351 8.9605 18.4152C8.76516 17.5774 8.81176 16.7243 8.98667 15.7461C9.15767 14.7898 9.46893 13.6282 9.86171 12.1624L10.4401 10.0038ZM18.4229 3.78878C17.5724 3.6367 17.0233 3.63356 16.56 3.74159C15.7254 3.9362 14.9672 4.37395 14.3813 4.99949C13.7998 5.62032 13.442 6.57945 12.8197 8.85772C12.7185 9.22799 12.6116 9.62705 12.4956 10.0599L11.8054 12.6357C11.3982 14.1557 11.1097 15.2354 10.9554 16.0982C10.8034 16.9486 10.8002 17.4977 10.9083 17.961C11.1029 18.7957 11.5406 19.5539 12.1662 20.1398C12.5134 20.465 12.9905 20.7368 13.803 21.0303C14.6273 21.3281 15.7066 21.6182 17.2266 22.0254C18.5938 22.3918 19.6071 22.6628 20.431 22.8266C21.2514 22.9897 21.8081 23.0298 22.2643 22.9735C22.3636 22.9612 22.4589 22.9443 22.5519 22.9226C23.3866 22.728 24.1448 22.2903 24.7306 21.6647C25.0558 21.3175 25.3277 20.8404 25.6212 20.0279C25.919 19.2036 26.209 18.1243 26.6163 16.6043L27.3065 14.0285C27.7138 12.5085 28.0022 11.4288 28.1565 10.566C28.3086 9.71556 28.3117 9.16646 28.2037 8.70318C28.0091 7.86852 27.5713 7.11031 26.9458 6.52444C26.5986 6.19925 26.1215 5.92741 25.3089 5.63389C24.4846 5.33612 23.4053 5.04606 21.8853 4.63877C20.3653 4.23148 19.2856 3.94305 18.4229 3.78878ZM15.2366 13.0746C15.3796 12.5411 15.9279 12.2245 16.4614 12.3675L22.9009 14.0929C23.4343 14.2359 23.7509 14.7842 23.608 15.3177C23.465 15.8511 22.9167 16.1677 22.3832 16.0248L15.9437 14.2993C15.4103 14.1564 15.0937 13.6081 15.2366 13.0746ZM14.2008 16.9382C14.3438 16.4047 14.8921 16.0881 15.4256 16.2311L19.2893 17.2664C19.8227 17.4093 20.1393 17.9576 19.9964 18.4911C19.8534 19.0246 19.3051 19.3412 18.7716 19.1982L14.9079 18.1629C14.3745 18.02 14.0579 17.4717 14.2008 16.9382Z",fill:"#38383B"}))),or=()=>{const[e,i]=Et("note-list",[]),r=St(),t=Kt(),n=T.useCallback(()=>r("/"),[r]),a=T.useCallback(u=>new Promise(h=>{const g=new Date;h(i([...e,{date:er(g),time:`${g.getHours()}:${g.getMinutes()}`,author:"Ali Valipour",title:u.title,tag:{text:u.priority,variant:u.priority==="Critical"&&"danger"||u.priority==="Checked"&&"done"||"info"},description:u.description||""}]))}),[e]);return T.useEffect(()=>{t.formState.isSubmitSuccessful&&r("/")},[t.formState.isSubmitSuccessful]),_.jsxs("div",{className:"absolute right-0 top-0 h-full w-2/3 bg-white shadow-[-4px_0px_24px_0px_rgba(169,169,169,0.31)]",children:[_.jsxs("div",{className:"inline-flex w-full items-center justify-between py-3 pe-6 ps-3",children:[_.jsx("div",{className:" text-base font-normal text-gray-700",children:"Add New Note"}),_.jsx(kt,{onClick:n,children:_.jsx(tr,{})})]}),_.jsxs(Gt,{className:"mx-auto flex w-2/5 flex-col gap-y-12",useFormMethods:t,onSubmit:a,children:[_.jsxs("div",{className:"flex flex-col gap-y-6",children:[_.jsxs("div",{className:"flex items-center justify-center gap-x-2",children:[_.jsx(rr,{}),_.jsx("div",{className:"text-lg font-bold text-gray-700",children:"Create New Notes"})]}),_.jsxs("div",{className:"flex flex-col gap-y-6",children:[_.jsx(Jt,{name:"title",label:"Title",rules:{required:"Title is required",minLength:{value:3,message:"At least 3 charecter is required for Title"}}}),_.jsx(Yt,{name:"priority",label:"Priority",data:[{value:"Critical",label:"Critical"},{value:"IT",label:"IT"},{value:"HR",label:"HR"}]}),_.jsx(Qt,{name:"description",placeholder:"Description goes here"})]})]}),_.jsxs("div",{className:"flex w-full gap-x-3",children:[_.jsx(Qe,{variant:"outline",className:"w-full",children:"Cancel"}),_.jsx(Qe,{type:"submit",className:"w-full",children:"Add"})]})]})]})};export{or as default};