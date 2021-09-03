/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t,i,s,e;const o=globalThis.trustedTypes,n=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,r=`lit$${(Math.random()+"").slice(9)}$`,h="?"+r,l=`<${h}>`,a=document,d=(t="")=>a.createComment(t),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,p=/-->/g,g=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,b=/'/g,m=/"/g,y=/^(?:script|style|textarea)$/i,w=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),S=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),k=new WeakMap,x=a.createTreeWalker(a,129,null,!1),C=(t,i)=>{const s=t.length-1,e=[];let o,h=2===i?"<svg>":"",a=v;for(let i=0;i<s;i++){const s=t[i];let n,d,c=-1,u=0;for(;u<s.length&&(a.lastIndex=u,d=a.exec(s),null!==d);)u=a.lastIndex,a===v?"!--"===d[1]?a=p:void 0!==d[1]?a=g:void 0!==d[2]?(y.test(d[2])&&(o=RegExp("</"+d[2],"g")),a=f):void 0!==d[3]&&(a=f):a===f?">"===d[0]?(a=null!=o?o:v,c=-1):void 0===d[1]?c=-2:(c=a.lastIndex-d[2].length,n=d[1],a=void 0===d[3]?f:'"'===d[3]?m:b):a===m||a===b?a=f:a===p||a===g?a=v:(a=f,o=void 0);const w=a===f&&t[i+1].startsWith("/>")?" ":"";h+=a===v?s+l:c>=0?(e.push(n),s.slice(0,c)+"$lit$"+s.slice(c)+r+w):s+r+(-2===c?(e.push(void 0),i):w)}const d=h+(t[s]||"<?>")+(2===i?"</svg>":"");return[void 0!==n?n.createHTML(d):d,e]};class T{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let n=0,l=0;const a=t.length-1,c=this.parts,[u,v]=C(t,i);if(this.el=T.createElement(u,s),x.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=x.nextNode())&&c.length<a;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(r)){const s=v[l++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(r),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?A:"?"===i[1]?N:"@"===i[1]?z:j})}else c.push({type:6,index:n})}for(const i of t)e.removeAttribute(i)}if(y.test(e.tagName)){const t=e.textContent.split(r),i=t.length-1;if(i>0){e.textContent=o?o.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],d()),x.nextNode(),c.push({type:2,index:++n});e.append(t[i],d())}}}else if(8===e.nodeType)if(e.data===h)c.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)c.push({type:7,index:n}),t+=r.length-1}n++}}static createElement(t,i){const s=a.createElement("template");return s.innerHTML=t,s}}function E(t,i,s=t,e){var o,n,r,h;if(i===S)return i;let l=void 0!==e?null===(o=s.Σi)||void 0===o?void 0:o[e]:s.Σo;const a=c(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(n=null==l?void 0:l.O)||void 0===n||n.call(l,!1),void 0===a?l=void 0:(l=new a(t),l.T(t,s,e)),void 0!==e?(null!==(r=(h=s).Σi)&&void 0!==r?r:h.Σi=[])[e]=l:s.Σo=l),void 0!==l&&(i=E(t,l.S(t,i.values),l,e)),i}class M{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i}u(t){var i;const{el:{content:s},parts:e}=this.D,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:a).importNode(s,!0);x.currentNode=o;let n=x.nextNode(),r=0,h=0,l=e[0];for(;void 0!==l;){if(r===l.index){let i;2===l.type?i=new O(n,n.nextSibling,this,t):1===l.type?i=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(i=new R(n,this,t)),this.l.push(i),l=e[++h]}r!==(null==l?void 0:l.index)&&(n=x.nextNode(),r++)}return o}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++}}class O{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=E(this,t,i),c(t)?t===$||null==t||""===t?(this.H!==$&&this.R(),this.H=$):t!==this.H&&t!==S&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var i;return u(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(a.createTextNode(t)),this.H=t}_(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=T.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===o)this.H.v(s);else{const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t}}C(t){let i=k.get(t.strings);return void 0===i&&k.set(t.strings,i=new T(t)),i}g(t){u(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const o of t)e===i.length?i.push(s=new O(this.k(d()),this.k(d()),this,this.options)):s=i[e],s.I(o),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e)}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class j{constructor(t,i,s,e,o){this.type=1,this.H=$,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill($),this.strings=s):this.H=$}get tagName(){return this.element.tagName}I(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=E(this,t,i,0),n=!c(t)||t!==this.H&&t!==S,n&&(this.H=t);else{const e=t;let r,h;for(t=o[0],r=0;r<o.length-1;r++)h=E(this,e[s+r],i,r),h===S&&(h=this.H[r]),n||(n=!c(h)||h!==this.H[r]),h===$?t=$:t!==$&&(t+=(null!=h?h:"")+o[r+1]),this.H[r]=h}n&&!e&&this.W(t)}W(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class A extends j{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===$?void 0:t}}class N extends j{constructor(){super(...arguments),this.type=4}W(t){t&&t!==$?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class z extends j{constructor(){super(...arguments),this.type=5}I(t,i=this){var s;if((t=null!==(s=E(this,t,i,0))&&void 0!==s?s:$)===S)return;const e=this.H,o=t===$&&e!==$||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==$&&(e===$||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t)}}class R{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s}I(t){E(this,t)}}null===(i=(t=globalThis).litHtmlPlatformSupport)||void 0===i||i.call(t,T,O),(null!==(s=(e=globalThis).litHtmlVersions)&&void 0!==s?s:e.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_=Symbol();class W{constructor(t,i){if(i!==_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return U&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const P=new Map,I=(t,...i)=>{const s=i.reduce(((i,s,e)=>i+(t=>{if(t instanceof W)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[e+1]),t[0]);let e=P.get(s);return void 0===e&&P.set(s,e=new W(s,_)),e},L=U?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new W(t+"",_))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var D,Z,q,B;const H={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},J=(t,i)=>i!==t&&(i==i||t==t),K={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:J};class V extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e))})),t}static createProperty(t,i=K){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||K}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(L(t))}else void 0!==t&&i.push(L(t));return i}static Πp(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{U?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((i=>{const s=document.createElement("style");s.textContent=i.cssText,t.appendChild(s)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,i,s){this.K(t,s)}Πj(t,i,s=K){var e,o;const n=this.constructor.Πp(t,s);if(void 0!==n&&!0===s.reflect){const r=(null!==(o=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==o?o:H.toAttribute)(i,s.type);this.Πh=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this.Πh=null}}K(t,i){var s,e,o;const n=this.constructor,r=n.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=n.getPropertyOptions(r),h=t.converter,l=null!==(o=null!==(e=null===(s=h)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof h?h:null)&&void 0!==o?o:H.fromAttribute;this.Πh=r,this[r]=l(i,t.type),this.Πh=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||J)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$()}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s)}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var F,G,Q,X,Y,tt;V.finalized=!0,V.shadowRootOptions={mode:"open"},null===(Z=(D=globalThis).reactiveElementPlatformSupport)||void 0===Z||Z.call(D,{ReactiveElement:V}),(null!==(q=(B=globalThis).reactiveElementVersions)&&void 0!==q?q:B.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(F=(tt=globalThis).litElementVersions)&&void 0!==F?F:tt.litElementVersions=[]).push("3.0.0-rc.1");class it extends V{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();super.update(t),this.Φt=((t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new O(i.insertBefore(d(),t),t,void 0,s)}return r.I(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return S}}it.finalized=!0,it._$litElement$=!0,null===(Q=(G=globalThis).litElementHydrateSupport)||void 0===Q||Q.call(G,{LitElement:it}),null===(Y=(X=globalThis).litElementPlatformSupport)||void 0===Y||Y.call(X,{LitElement:it});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function et(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):st(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const ot=1,nt=t=>(...i)=>({_$litDirective$:t,values:i});class rt{constructor(t){}T(t,i,s){this.Σdt=t,this.M=i,this.Σct=s}S(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=nt(class extends rt{constructor(t){var i;if(super(t),t.type!==ot||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).filter((i=>t[i])).join(" ")}update(t,[i]){if(void 0===this.bt){this.bt=new Set;for(const t in i)i[t]&&this.bt.add(t);return this.render(i)}const s=t.element.classList;this.bt.forEach((t=>{t in i||(s.remove(t),this.bt.delete(t))}));for(const t in i){const e=!!i[t];e!==this.bt.has(t)&&(e?(s.add(t),this.bt.add(t)):(s.remove(t),this.bt.delete(t)))}return S}}),lt=nt(class extends rt{constructor(t){var i;if(super(t),t.type!==ot||"style"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((i,s)=>{const e=t[s];return null==e?i:i+`${s=s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`}),"")}update(t,[i]){const{style:s}=t.element;if(void 0===this.St){this.St=new Set;for(const t in i)this.St.add(t);return this.render(i)}this.St.forEach((t=>{null==i[t]&&(this.St.delete(t),t.includes("-")?s.removeProperty(t):s[t]="")}));for(const t in i){const e=i[t];null!=e&&(this.St.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e)}return S}}),at=I`
  :host {
    display: block;
    --message-box-background-color: 0, 0, 0;
    --message-box-opacity: 0.8;
  }
`,dt=I`
  .root {
    display: grid;
    grid-template-columns: auto 1fr;
    background: rgba(
      var(--message-box-background-color),
      var(--message-box-opacity)
    );
    margin: 1em;
    overflow: hidden;
    padding: 0;
    transition: all 256ms ease-in;
  }
  .root > * {
    padding: .5em 1em;
  }
`,ct=I`
  .content {
    display: inline-flex;
    align-items: center;
    flex: 1 0;
  }
`,ut=I`
  [name=button] {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  ::slotted(button) {
    border: none;
    flex: 1 0;
    margin: 0;
    padding: .25em 1em;
    background: none;
    cursor: pointer;
    color: white;
    font-weight: bold;
    outline: none;
  }
  ::slotted(button:hover) {
    background-color: rgba(255, 255, 255, 0.1)
  }
`,vt=I`
  .progress-gradient {
    background-image: linear-gradient(
      to right,
      rgba(
        var(--message-box-background-color),
        calc(var(--message-box-opacity) * 1.2)
      ) 49%,
      rgba(
        var(--message-box-background-color),
        calc(var(--message-box-opacity) * 0.6)
      ) 51%
    );
    background-size: 202% 100%;
  }
  @keyframes progress {
    from {
      background-position: right;
    }
    to {
      background-position: left;
    }
  }
  .out {
    opacity: 0;
  }
  .out-top {
    transform: translate(0, -100%);
  }
  .out-right {
    transform: translate(100%, 0);
  }
`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pt,gt=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};!function(t){t[t.Sightless=0]="Sightless",t[t.visible=1]="visible",t[t.Triiggered=2]="Triiggered"}(pt||(pt={}));let ft=class extends it{constructor(){super(...arguments),this.height="initial",this.minWidth="initial",this.width="initial",this.border="0",this.color="255, 255, 255",this.radius="0",this.shadow="0 1em 1em",this.out="",this.status=pt.Sightless,this.timeout="0",this.transitionend=()=>{this.status===pt.Triiggered&&(this.status=pt.Sightless,this.dispatchEvent(new CustomEvent("triggered")))},this.sendTriggered=()=>{this.status=pt.Triiggered}}connectedCallback(){super.connectedCallback(),this.status=pt.visible;const t=Number(this.timeout);t>0&&setTimeout(this.sendTriggered,1e3*t)}disconnectedCallback(){super.disconnectedCallback(),this.status=pt.Sightless}render(){const{height:t,width:i,minWidth:s,border:e,color:o,radius:n,shadow:r,out:h,status:l,timeout:a}=this,d={root:!0,out:l===pt.Triiggered,[`out-${h}`]:l===pt.Triiggered&&h,"progress-gradient":Number(a)>0},c={height:t,width:i,minWidth:s,border:e,borderRadius:n,boxShadow:`${r} rgba(\n        var(--message-box-background-color),\n        calc(var(--message-box-opacity) * 0.8)\n      )`,color:`rgb(${o})`,animation:Number(a)>0?`${a}s linear progress`:"initial"};return w`
      <div
        class=${ht(d)}
        style=${lt(c)}
        @transitionend=${this.transitionend}
      >
        <div class="content">
          <slot name="message"></slot>
        </div>
        <slot name="button" @click=${this.sendTriggered}></slot>
      </div>
    `}};ft.styles=[at,dt,ct,ut,vt],ft.shadowRootOptions={mode:"closed"},gt([et({type:String})],ft.prototype,"height",void 0),gt([et({type:String})],ft.prototype,"minWidth",void 0),gt([et({type:String})],ft.prototype,"width",void 0),gt([et({type:String})],ft.prototype,"border",void 0),gt([et({type:String})],ft.prototype,"color",void 0),gt([et({type:String})],ft.prototype,"radius",void 0),gt([et({type:String})],ft.prototype,"shadow",void 0),gt([et({type:String})],ft.prototype,"out",void 0),gt([et({type:pt})],ft.prototype,"status",void 0),gt([et({type:String})],ft.prototype,"timeout",void 0),ft=gt([(t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){window.customElements.define(t,i)}}})(t,i))("message-box")],ft);export{ft as MessageBox};
