/*! For license information please see main.a6989091.js.LICENSE.txt */
    background: ${Jo};
    box-sizing: border-box;
    width: 100%;
    background-attachment: fixed;
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
    flex-grow: 1;

    h1 {
        color: ${qo};
    }
    h2 {
        color: ${qo};
    }
    h3 {
        color: ${qo};
    }
    h4 {
        color: ${qo};
    }
    h5 {
        color: ${qo};
    }
    a {
        color: ${qo};
    }
    input {
        color: ${qo}; 
    }

    path.primary {
        fill: ${qo};
    }
    
`),yi=C.default.div`
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    flex-grow: 1;
`,wi=C.default.div`
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    position: sticky;
    top: 0px;
    z-index: 6;
    flex: 0;
    overflow: hidden;
    min-width: ${e=>e.minimised?"75px":"200px"};
    max-width: ${e=>e.minimised?"75px":"200px"};

    @media(max-width: ${So}px) {
        position: fixed;
        transition: all 0.15s ease-in-out;
        top: 0;
        left: ${e=>e.open?0:"-200px"};
    }
`,ki=C.default.div`
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
`,xi=(0,C.default)(co.div)`
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    padding-bottom: 4.5rem;
    width: 100%;
    max-width: ${1800}px;
    margin: 0 auto;
`,Ci=C.default.header` 
    box-sizing: border-box;
    position: sticky;
    top: 0px;
    padding-top: ${e=>e.isSticky?"4.5vh ":"1.4vh "};
    @media(max-width: ${So}px) {
        padding-top: ${e=>e.isSticky?"7vh ":"2vh "};
    }
    padding-bottom: ${e=>e.isSticky?"1rem ":"0.25vh "};
    width: 100%;
    background: ${e=>e.isSticky?Zo:"none"};
    z-index: 4;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-end;
    min-height: ${e=>e.isSticky?"30px ":"none"};
    transition: padding 0.3s ease-out;

    h1 {
     font-size: ${e=>e.isSticky?"1.4rem ":"1.8rem"};
     transition: font 0.5s;
     font-variation-settings: 'wght' 600;
     
     /* page padding */
     padding-left: 1.5rem;
     padding-right: 1.5rem;
       @media(min-width: ${So}px) {
        padding: 0 3rem 0 1rem;
      }
      @media(min-width: 1500px) {
        padding: 0 5rem 0 1.5rem;
      }
    }
`,Mi=C.default.div`
    box-sizing: border-box;
    margin-top: ${e=>!0===e.noVerticalSpacer?"0":"1rem"};
    margin-bottom: ${e=>!0===e.noVerticalSpacer?"0":"1rem"};
    display: flex;
    flex-shrink: 0;
    flex-flow: row wrap;
    width: 100%;
    
    /* page padding */
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    @media(min-width: ${So}px) {
        padding: 0 3rem 0 1rem;
    }
    @media(min-width: 1500px) {
        padding: 0 5rem 0 1.5rem;
    }

    * {
        box-sizing: border-box;
    }

    /* kill heading padding, already applied to wrapper */
    h1, h2, h3, h4 {
        margin-top: 0;
    }
`,Ei=C.default.div`
  border-bottom: 1px solid ${hi};
  width: 100%;
  margin: 1.5rem 0;
`;function _i(){return _i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},_i.apply(this,arguments)}var Ni,Pi=Ni||(Ni={});Pi.Pop="POP",Pi.Push="PUSH",Pi.Replace="REPLACE";var ji=function(e){return e};function Si(e){e.preventDefault(),e.returnValue=""}function zi(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function Ti(){return Math.random().toString(36).substr(2,8)}function Li(e){var t=e.pathname;t=void 0===t?"/":t;var a=e.search;return a=void 0===a?"":a,e=void 0===(e=e.hash)?"":e,a&&"?"!==a&&(t+="?"===a.charAt(0)?a:"?"+a),e&&"#"!==e&&(t+="#"===e.charAt(0)?e:"#"+e),t}function Ai(e){var t={};if(e){var a=e.indexOf("#");0<=a&&(t.hash=e.substr(a),e=e.substr(0,a)),0<=(a=e.indexOf("?"))&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function Oi(e,t){if(!e)throw new Error(t)}const Vi=(0,V.createContext)(null);const Bi=(0,V.createContext)(null);const Hi=(0,V.createContext)({outlet:null,matches:[]});function Ii(e){let{to:t,replace:a,state:r}=e;qi()||Oi(!1);let l=Yi();return(0,V.useEffect)((()=>{l(t,{replace:a,state:r})})),null}function Ri(e){return function(e){let t=(0,V.useContext)(Hi).outlet;if(t)return(0,V.createElement)(Gi.Provider,{value:e},t);return t}(e.context)}function Wi(e){Oi(!1)}function Di(e){let{basename:t="/",children:a=null,location:r,navigationType:l=Ni.Pop,navigator:s,static:n=!1}=e;qi()&&Oi(!1);let o=ou(t),i=(0,V.useMemo)((()=>({basename:o,navigator:s,static:n})),[o,s,n]);"string"===typeof r&&(r=Ai(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:f="default"}=r,p=(0,V.useMemo)((()=>{let e=su(u,o);return null==e?null:{pathname:e,search:c,hash:d,state:h,key:f}}),[o,u,c,d,h,f]);return null==p?null:(0,V.createElement)(Vi.Provider,{value:i},(0,V.createElement)(Bi.Provider,{children:a,value:{location:p,navigationType:l}}))}function Ui(e){let{children:t,location:a}=e;return function(e,t){qi()||Oi(!1);let{matches:a}=(0,V.useContext)(Hi),r=a[a.length-1],l=r?r.params:{},s=(r&&r.pathname,r?r.pathnameBase:"/");r&&r.route;0;let n,o=Xi();if(t){var i;let e="string"===typeof t?Ai(t):t;"/"===s||(null==(i=e.pathname)?void 0:i.startsWith(s))||Oi(!1),n=e}else n=o;let u=n.pathname||"/",c="/"===s?u:u.slice(s.length)||"/",d=function(e,t,a){void 0===a&&(a="/");let r=su(("string"===typeof t?Ai(t):t).pathname||"/",a);if(null==r)return null;let l=Ji(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let a=e.length===t.length&&e.slice(0,-1).every(((e,a)=>e===t[a]));return a?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(l);let s=null;for(let n=0;null==s&&n<l.length;++n)s=tu(l[n],r);return s}(e,{pathname:c});0;return au(d&&d.map((e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:nu([s,e.pathname]),pathnameBase:"/"===e.pathnameBase?s:nu([s,e.pathnameBase])}))),a)}(Ki(t),a)}function Fi(e){qi()||Oi(!1);let{basename:t,navigator:a}=(0,V.useContext)(Vi),{hash:r,pathname:l,search:s}=Zi(e),n=l;if("/"!==t){let a=function(e){return""===e||""===e.pathname?"/":"string"===typeof e?Ai(e).pathname:e.pathname}(e),r=null!=a&&a.endsWith("/");n="/"===l?t+(r?"/":""):nu([t,l])}return a.createHref({pathname:n,search:s,hash:r})}function qi(){return null!=(0,V.useContext)(Bi)}function Xi(){return qi()||Oi(!1),(0,V.useContext)(Bi).location}function Yi(){qi()||Oi(!1);let{basename:e,navigator:t}=(0,V.useContext)(Vi),{matches:a}=(0,V.useContext)(Hi),{pathname:r}=Xi(),l=JSON.stringify(a.map((e=>e.pathnameBase))),s=(0,V.useRef)(!1);return(0,V.useEffect)((()=>{s.current=!0})),(0,V.useCallback)((function(a,n){if(void 0===n&&(n={}),!s.current)return;if("number"===typeof a)return void t.go(a);let o=lu(a,JSON.parse(l),r);"/"!==e&&(o.pathname=nu([e,o.pathname])),(n.replace?t.replace:t.push)(o,n.state)}),[e,t,l,r])}const Gi=(0,V.createContext)(null);function Zi(e){let{matches:t}=(0,V.useContext)(Hi),{pathname:a}=Xi(),r=JSON.stringify(t.map((e=>e.pathnameBase)));return(0,V.useMemo)((()=>lu(e,JSON.parse(r),a)),[e,r,a])}function Ki(e){let t=[];return V.Children.forEach(e,(e=>{if(!(0,V.isValidElement)(e))return;if(e.type===V.Fragment)return void t.push.apply(t,Ki(e.props.children));e.type!==Wi&&Oi(!1);let a={caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path};e.props.children&&(a.children=Ki(e.props.children)),t.push(a)})),t}function Ji(e,t,a,r){return void 0===t&&(t=[]),void 0===a&&(a=[]),void 0===r&&(r=""),e.forEach(((e,l)=>{let s={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:l,route:e};s.relativePath.startsWith("/")&&(s.relativePath.startsWith(r)||Oi(!1),s.relativePath=s.relativePath.slice(r.length));let n=nu([r,s.relativePath]),o=a.concat(s);e.children&&e.children.length>0&&(!0===e.index&&Oi(!1),Ji(e.children,t,o,n)),(null!=e.path||e.index)&&t.push({path:n,score:eu(n,e.index),routesMeta:o})})),t}const Qi=/^:\w+$/,$i=e=>"*"===e;function eu(e,t){let a=e.split("/"),r=a.length;return a.some($i)&&(r+=-2),t&&(r+=2),a.filter((e=>!$i(e))).reduce(((e,t)=>e+(Qi.test(t)?3:""===t?1:10)),r)}function tu(e,t){let{routesMeta:a}=e,r={},l="/",s=[];for(let n=0;n<a.length;++n){let e=a[n],o=n===a.length-1,i="/"===l?t:t.slice(l.length)||"/",u=ru({path:e.relativePath,caseSensitive:e.caseSensitive,end:o},i);if(!u)return null;Object.assign(r,u.params);let c=e.route;s.push({params:r,pathname:nu([l,u.pathname]),pathnameBase:nu([l,u.pathnameBase]),route:c}),"/"!==u.pathnameBase&&(l=nu([l,u.pathnameBase]))}return s}function au(e,t){return void 0===t&&(t=[]),null==e?null:e.reduceRight(((a,r,l)=>(0,V.createElement)(Hi.Provider,{children:void 0!==r.route.element?r.route.element:(0,V.createElement)(Ri,null),value:{outlet:a,matches:t.concat(e.slice(0,l+1))}})),null)}function ru(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[a,r]=function(e,t,a){void 0===t&&(t=!1);void 0===a&&(a=!0);let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(r.push(t),"([^\\/]+)")));e.endsWith("*")?(r.push("*"),l+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):l+=a?"\\/*$":"(?:\\b|\\/|$)";return[new RegExp(l,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),l=t.match(a);if(!l)return null;let s=l[0],n=s.replace(/(.)\/+$/,"$1"),o=l.slice(1),i=r.reduce(((e,t,a)=>{if("*"===t){let e=o[a]||"";n=s.slice(0,s.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(a){return e}}(o[a]||""),e}),{});return{params:i,pathname:s,pathnameBase:n,pattern:e}}function lu(e,t,a){let r,l="string"===typeof e?Ai(e):e,s=""===e||""===l.pathname?"/":l.pathname;if(null==s)r=a;else{let e=t.length-1;if(s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;l.pathname=t.join("/")}r=e>=0?t[e]:"/"}let n=function(e,t){void 0===t&&(t="/");let{pathname:a,search:r="",hash:l=""}="string"===typeof e?Ai(e):e,s=a?a.startsWith("/")?a:function(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?a.length>1&&a.pop():"."!==e&&a.push(e)})),a.length>1?a.join("/"):"/"}(a,t):t;return{pathname:s,search:iu(r),hash:uu(l)}}(l,r);return s&&"/"!==s&&s.endsWith("/")&&!n.pathname.endsWith("/")&&(n.pathname+="/"),n}function su(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=e.charAt(t.length);return a&&"/"!==a?null:e.slice(t.length)||"/"}const nu=e=>e.join("/").replace(/\/\/+/g,"/"),ou=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),iu=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",uu=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function cu(){return cu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},cu.apply(this,arguments)}function du(e,t){if(null==e)return{};var a,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}const hu=["onClick","reloadDocument","replace","state","target","to"];function fu(e){let{basename:t,children:a,window:r}=e,l=(0,V.useRef)();null==l.current&&(l.current=function(e){function t(){var e=Ai(o.location.hash.substr(1)),t=e.pathname,a=e.search;e=e.hash;var r=i.state||{};return[r.idx,ji({pathname:void 0===t?"/":t,search:void 0===a?"":a,hash:void 0===e?"":e,state:r.usr||null,key:r.key||"default"})]}function a(){if(u)p.call(u),u=null;else{var e=Ni.Pop,a=t(),r=a[0];if(a=a[1],p.length){if(null!=r){var l=d-r;l&&(u={action:e,location:a,retry:function(){n(-1*l)}},n(l))}}else s(e)}}function r(e){var t=document.querySelector("base"),a="";return t&&t.getAttribute("href")&&(a=-1===(a=(t=o.location.href).indexOf("#"))?t:t.slice(0,a)),a+"#"+("string"===typeof e?e:Li(e))}function l(e,t){return void 0===t&&(t=null),ji(_i({pathname:h.pathname,hash:"",search:""},"string"===typeof e?Ai(e):e,{state:t,key:Ti()}))}function s(e){c=e,e=t(),d=e[0],h=e[1],f.call({action:c,location:h})}function n(e){i.go(e)}void 0===e&&(e={});var o=void 0===(e=e.window)?document.defaultView:e,i=o.history,u=null;o.addEventListener("popstate",a),o.addEventListener("hashchange",(function(){Li(t()[1])!==Li(h)&&a()}));var c=Ni.Pop,d=(e=t())[0],h=e[1],f=zi(),p=zi();return null==d&&(d=0,i.replaceState(_i({},i.state,{idx:d}),"")),{get action(){return c},get location(){return h},createHref:r,push:function e(t,a){var n=Ni.Push,u=l(t,a);if(!p.length||(p.call({action:n,location:u,retry:function(){e(t,a)}}),0)){var c=[{usr:u.state,key:u.key,idx:d+1},r(u)];u=c[0],c=c[1];try{i.pushState(u,"",c)}catch(h){o.location.assign(c)}s(n)}},replace:function e(t,a){var n=Ni.Replace,o=l(t,a);p.length&&(p.call({action:n,location:o,retry:function(){e(t,a)}}),1)||(o=[{usr:o.state,key:o.key,idx:d},r(o)],i.replaceState(o[0],"",o[1]),s(n))},go:n,back:function(){n(-1)},forward:function(){n(1)},listen:function(e){return f.push(e)},block:function(e){var t=p.push(e);return 1===p.length&&o.addEventListener("beforeunload",Si),function(){t(),p.length||o.removeEventListener("beforeunload",Si)}}}}({window:r}));let s=l.current,[n,o]=(0,V.useState)({action:s.action,location:s.location});return(0,V.useLayoutEffect)((()=>s.listen(o)),[s]),(0,V.createElement)(Di,{basename:t,children:a,location:n.location,navigationType:n.action,navigator:s})}const pu=(0,V.forwardRef)((function(e,t){let{onClick:a,reloadDocument:r,replace:l=!1,state:s,target:n,to:o}=e,i=du(e,hu),u=Fi(o),c=function(e,t){let{target:a,replace:r,state:l}=void 0===t?{}:t,s=Yi(),n=Xi(),o=Zi(e);return(0,V.useCallback)((t=>{if(0===t.button&&(!a||"_self"===a)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)){t.preventDefault();let a=!!r||Li(n)===Li(o);s(e,{replace:a,state:l})}}),[n,s,o,r,l,a,e])}(o,{replace:l,state:s,target:n});return(0,V.createElement)("a",cu({},i,{href:u,onClick:function(e){a&&a(e),e.defaultPrevented||r||c(e)},ref:t,target:n}))}));var gu=0;function mu(){var e=gu;return gu++,e}var vu=function(e){var t=e.children,a=e.initial,r=e.isPresent,l=e.onExitComplete,s=e.custom,n=e.presenceAffectsLayout,o=ne(bu),i=ne(mu),u=(0,V.useMemo)((function(){return{id:i,initial:a,isPresent:r,custom:s,onExitComplete:function(e){var t,a;o.set(e,!0);try{for(var r=S(o.values()),s=r.next();!s.done;s=r.next()){if(!s.value)return}}catch(n){t={error:n}}finally{try{s&&!s.done&&(a=r.return)&&a.call(r)}finally{if(t)throw t.error}}null===l||void 0===l||l()},register:function(e){return o.set(e,!1),function(){return o.delete(e)}}}}),n?void 0:[r]);return(0,V.useMemo)((function(){o.forEach((function(e,t){return o.set(t,!1)}))}),[r]),V.useEffect((function(){!r&&!o.size&&(null===l||void 0===l||l())}),[r]),V.createElement(F.Provider,{value:u},t)};function bu(){return new Map}function yu(e){return e.key||""}var wu=function(e){var t=e.children,a=e.custom,r=e.initial,l=void 0===r||r,s=e.onExitComplete,n=e.exitBeforeEnter,o=e.presenceAffectsLayout,i=void 0===o||o,u=z(function(){var e=(0,V.useRef)(!1),t=z((0,V.useState)(0),2),a=t[0],r=t[1];ys((function(){return e.current=!0}));var l=(0,V.useCallback)((function(){!e.current&&r(a+1)}),[a]);return[(0,V.useCallback)((function(){return Ce.postRender(l)}),[l]),a]}(),1),c=u[0],d=(0,V.useContext)(dl).forceRender;d&&(c=d);var h=(0,V.useRef)(!0),f=(0,V.useRef)(!0);(0,V.useEffect)((function(){return function(){f.current=!1}}),[]);var p=function(e){var t=[];return V.Children.forEach(e,(function(e){(0,V.isValidElement)(e)&&t.push(e)})),t}(t),g=(0,V.useRef)(p),m=(0,V.useRef)(new Map).current,v=(0,V.useRef)(new Set).current;if(function(e,t){e.forEach((function(e){var a=yu(e);t.set(a,e)}))}(p,m),h.current)return h.current=!1,V.createElement(V.Fragment,null,p.map((function(e){return V.createElement(vu,{key:yu(e),isPresent:!0,initial:!!l&&void 0,presenceAffectsLayout:i},e)})));for(var b=T([],z(p),!1),y=g.current.map(yu),w=p.map(yu),k=y.length,x=0;x<k;x++){var C=y[x];-1===w.indexOf(C)?v.add(C):v.delete(C)}return n&&v.size&&(b=[]),v.forEach((function(e){if(-1===w.indexOf(e)){var t=m.get(e);if(t){var r=y.indexOf(e);b.splice(r,0,V.createElement(vu,{key:yu(t),isPresent:!1,onExitComplete:function(){m.delete(e),v.delete(e);var t=g.current.findIndex((function(t){return t.key===e}));if(g.current.splice(t,1),!v.size){if(g.current=p,!1===f.current)return;c(),s&&s()}},custom:a,presenceAffectsLayout:i},t))}}})),b=b.map((function(e){var t=e.key;return v.has(t)?e:V.createElement(vu,{key:yu(e),isPresent:!0,presenceAffectsLayout:i},e)})),g.current=b,V.createElement(V.Fragment,null,v.size?b:b.map((function(e){return(0,V.cloneElement)(e)})))},ku=__webpack_require__(80518),xu=__webpack_require__.n(ku);const Cu=C.default.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  
  /* page padding */
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  @media(min-width: ${So}px) {
    padding: 0 3rem 0 1rem;
  }
  @media(min-width: 1500px) {
    padding: 0 5rem 0 1.5rem;
  }
`,Mu=C.default.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 1rem;
`,Eu=(0,C.default)(co.div)`
  display: flex;
  flex-flow: column wrap;
  z-index: 0;
  flex-basis: 100%;
  flex: 1;
  flex-basis: 100%;
  margin-bottom: 1rem;

  @media(min-width: 800px) {
    flex-basis: 33%;
    min-width: 200px;
    max-width: none;
    margin-bottom: 0;
  }

  /* responsive screen sizing */
  h2 {
    font-size: 1.2rem;
  }
  
  @media(min-width: 950px) {
    max-width: 300px;
    h2 { font-size: 1.35rem; }
  }

  .content {
    background: ${Ko};
    display: flex;
    border-radius: 0.75rem;
    margin-right: 1.25rem;
    padding: 1rem 0;
    max-height: 3.4rem;
    flex-flow: row wrap;

    @media(max-width: 749px) {
      margin-right: 0;
      padding: 0.9rem 0;
    }
    
    h2, h4 { margin: 0; }

    h4 {
      flex: 1;
      display: flex;
      flex-flow: row wrap;
      align-items: center;

      .assistant-icon {
        margin-left: 0.6rem;
      }
    }

    > .chart {
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      padding-left: 1rem;
      
      .graph {
        opacity: 0.75;
        overflow: hidden;
      }

      .tooltip {
        background: ${di};
        opacity: 0;
        position: absolute;
        top: -20px;
        left: -8px;
        z-index: 2;
        border-radius: 0.5rem;
        padding: 0 0.5rem;
        width: auto;
        max-width: 200px;
        transition: opacity 0.2s;

        p {
          text-align: center;
          color: ${Yo};
          margin: 0;
          font-size: 0.9rem;
        }
      }

      &:hover {
        .tooltip {
          opacity: 1;
        }
      }
    }

    > .labels {
      padding-left: 1.25rem;
      flex-basis: 70%;
      flex: 1;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      overflow: hidden;

      h2 {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 0.4rem;
        
        span.total {
          color: ${Xo};
          font-size: 0.88rem;
          margin-left: 0.3rem;
          margin-top: 0.2rem;
        }
      }
    }
  }
  box-sizing: border-box;
  overflow: hidden;
  flex: 1;
  flex-basis: 100%;
  max-width: 100%;
  order: 0;

  @media(min-width: ${1001}px) {
    flex-basis: 62%;
    width: 62%;
    order: 1;
    flex: 1;
    ${e=>e.paddingLeft&&"padding-left: 1rem;"}
    ${e=>e.paddingRight&&" padding-right: 1rem;"}
  }
`,uF=C.default.div`
  box-sizing: border-box;
  overflow: hidden;
  flex-basis: 100%;
  width:100%;  
  border-radius: 1rem;
  order: 1;

  @media(min-width: ${1001}px) {
    flex-basis: 38%;
    max-width: 38%;
    flex-grow: 1;
    order: 0;
  }
`,cF=(C.default.div`
  position: sticky;
  top: 80px;

  @media(max-width: ${1001}px) {
    top: 100px;
  }
`,C.default.div`
  box-sizing: border-box;
  padding: ${e=>e.noPadding?"0rem":e.transparent?"0rem 0rem":"1rem"};
  border-radius: 1rem;
  background: ${e=>e.transparent?"none":Ko};
  display: flex;
  flex-flow: column nowrap;
  align-content: flex-start;
  align-items: flex-start;
  flex: 1;
  width: 100%;
  margin-top: ${e=>e.transparent?"0rem":"1rem"};
  position: relative;

  .inner {
    padding: 1rem;
    display: flex;
    flex-flow: column nowrap;
    align-content: flex-start;
    align-items: flex-start;
    width: 100%;
    position: relative;
  }
  
  h2, h3 {
    display: flex;
    flex-flow: row wrap;
    align-items: center;

    .assistant-icon {
      margin-left: 0.6rem;
    }
  }

  h4 {
    margin: 0.75rem 0;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;

    .assistant-icon {
      margin-left: 0.5rem;
    }
  }
  .head {
    padding: 0.25rem;
    width: 100%;
    h4 {
      margin: 0 0 0.5rem 0;
    }
  }

  .option {
    border-bottom: 1px solid #ddd;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    text-align: left;
  }
`),dF=C.default.div`
  box-sizing: border-box;
  border-radius: 1rem;
  background: ${e=>e.transparent?"none":Ko};
  display: flex;
  flex-flow: column nowrap;
  align-content: flex-start;
  align-items: flex-start;
  flex: 1;
  margin-top: ${e=>e.noMargin?0:"1rem"};
  position: relative;
  overflow: hidden;

  .inner {
    width: 100%;
    height: 100%;
  }

  .label {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 0.8rem;
    font-variation-settings: 'wght' 550;
    background: #d33079;
    border-radius: 0.3rem;
    padding: 0.2rem 0.4rem;
    color: #fff;
    opacity: 0.8;
  }
  .head {
    padding: 0.75rem 1.2rem 0.5rem 1.2rem;
  }

  h2, h4 {
    margin: 0;
    padding: 0.25rem 0;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-end;
    align-items: flex-end;
    justify-content: flex-start;

    .fiat {
      font-size: 1rem;
      color: ${Xo};
      margin-top: 0.2rem;
      font-variation-settings: 'wght' 530;      
    }
  }
  h2 {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
  }
  p {
    margin: 0.25rem 0 0;
  }
  h4 {
    margin-top: 0.4rem;

    .assistant-icon {
      margin-left: 0.4rem;
    }
  }
  .small_button {
    background: #f1f1f1;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
  }
  .graph {
    position: relative;
    flex: ${e=>e.flex?1:0};
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    padding: 1rem 1.2rem;

  }
  .graph_line {
    margin-top: 1.5rem;
    margin-left: 1rem;
    padding: 1rem 1rem 0.5rem 1rem;
  }
  .graph_with_extra {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    height: 190px;
    flex: 1;

    .extra {
      flex: 1;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-end;
      align-items: flex-end;
      align-content: flex-end;
      height: 190px;
      border: 1px solid;
    }
  }

  .change {
    margin-left: 0.6rem;
    font-size: 0.9rem;
    color: white;
    border-radius: 0.75rem;
    padding: 0.15rem 0.5rem;
    font-variation-settings: 'wght' 550;
    &.pos {
      background: #3eb955;
    }
    &.neg {
      background: #d2545d;
    }
  }
  position: absolute;
  top: ${e=>e.topOffset?e.topOffset:"50%"};
  left: 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  z-index:2;

  > div {
    background: ${ti};
    opacity: 0.75;
    padding: 0.75rem 1.25rem;
    border-radius: 0.75rem;

    h3 {
      padding: 0;
      margin: 0;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
  }
`,Y$=e=>{var t,a,r;const l=null!==(t=e.status)&&void 0!==t?t:"sync_or_setup",s=null!==(a=e.statusFor)&&void 0!==a&&a,{isSyncing:n,services:o}=mF(),{inSetup:i}=oF();if("sync_or_setup"===l&&(n()||!i()))return(0,_u.jsx)(_u.Fragment,{});if("active_service"===l&&o.includes(s))return(0,_u.jsx)(_u.Fragment,{});const{title:u}=e,c=null!==(r=e.topOffset)&&void 0!==r?r:"40%";return(0,_u.jsx)(X$,{topOffset:c,children:(0,_u.jsx)("div",{children:(0,_u.jsxs)("h3",{children:[(0,_u.jsx)(f$,{icon:P$,transform:"grow-1"}),"\xa0",u]})})})},G$=e=>{const{payouts:t}=e,{services:a}=mF(),r=V.useRef();let l=fJ(r.current),{width:s,height:n,minHeight:o}=pJ(l,352);return(0,_u.jsx)(_u.Fragment,{children:(0,_u.jsxs)("div",{className:"inner",ref:r,style:{minHeight:o},children:[a.includes("subscan")?(0,_u.jsx)(Y$,{status:"sync_or_setup",title:"Not Yet Staking"}):(0,_u.jsx)(Y$,{status:"active_service",statusFor:"subscan",title:"Subscan Disabled"}),(0,_u.jsxs)("div",{className:"graph",style:{height:`${n}px`,width:`${s}px`,position:"absolute"},children:[(0,_u.jsx)(xJ,{payouts:t,height:"200px"}),(0,_u.jsx)("div",{style:{marginTop:"1rem"},children:(0,_u.jsx)(yJ,{payouts:t,height:"80px"})})]})]})})};class Z$ extends V.Component{shouldComponentUpdate(e,t){return e.account!==this.props.account||e.payouts!==this.props.payouts}render(){return(0,_u.jsx)(G$,{...this.props})}}const K$=Z$,J$=()=>{const{network:e,fetchDotPrice:t}=JO(),{services:a}=mF();let r=localStorage.getItem(`${e.name}_prices`);r=null===r?{lastPrice:0,change:0}:JSON.parse(r);const[l,s]=(0,V.useState)(r),n=(0,V.useRef)(l),o=t=>{localStorage.setItem(`${e.name}_prices`,JSON.stringify(t)),n.current=l,s({...n.current,...t})},i=async()=>{const e=await t();o(e),null===u&&c()};let u=null;const c=async()=>{u=setInterval((async()=>{const e=await t();o(e)}),3e4)};return(0,V.useEffect)((()=>(i(),()=>{null!==u&&clearInterval(u)})),[]),(0,V.useEffect)((()=>{null!==u&&clearInterval(u),i()}),[e]),(0,V.useEffect)((()=>{a.includes("binance_spot")?null===u&&i():null!==u&&clearInterval(u)}),[a]),l};AZ.register(DZ,MK,uK);const Q$=()=>{const{mode:e}=vJ(),{network:t}=JO(),{units:a}=t,{activeAccount:r}=JU(),{getAccountBalance:l}=aF(),s=l(r),{services:n}=mF(),o=J$();let{free:i,miscFrozen:u}=s,c=rV(i.toNumber(),a),d=(c*o.lastPrice).toFixed(2);i=rV(i.toNumber(),a);let h=rV(u.toNumber(),a),f=i-h,p=!1;0===h&&0===f&&(h=-1,f=-1,p=!0);const g={responsive:!0,maintainAspectRatio:!1,spacing:p?0:5,plugins:{legend:{display:!0,padding:{right:10},position:"left",align:"center",labels:{padding:20,color:Wo.text.primary[e],font:{size:15,weight:"500"}}},tooltip:{displayColors:!1,backgroundColor:Wo.graphs.tooltip[e],bodyColor:Wo.text.invert[e],callbacks:{label:e=>`${e.label}: ${-1===e.parsed?0:e.parsed} ${t.unit}`}}},cutout:"75%"},m={labels:["Transferrable","Locked"],datasets:[{label:t.unit,data:[f,h],backgroundColor:[p?Wo.graphs.inactive[e]:Wo.graphs.colors[0][e],Wo.graphs.colors[2][e]],borderWidth:0}]},v=V.useRef();let b=fJ(v.current),{width:y,height:w,minHeight:k}=pJ(b,252);return(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsxs)("div",{className:"head",style:{paddingTop:"0.5rem"},children:[(0,_u.jsx)("h4",{children:"Balance"}),(0,_u.jsxs)("h2",{children:[c," ",t.unit,n.includes("binance_spot")&&(0,_u.jsxs)(_u.Fragment,{children:["\xa0",(0,_u.jsxs)("span",{className:"fiat",children:["$",sV(d)]})]})]})]}),(0,_u.jsx)("div",{style:{paddingTop:"20px"}}),(0,_u.jsx)("div",{className:"inner",ref:v,style:{minHeight:k},children:(0,_u.jsx)("div",{className:"graph",style:{height:`${w}px`,width:`${y}px`,position:"absolute"},children:(0,_u.jsx)(iJ,{options:g,data:m})})}),(0,_u.jsx)("div",{style:{paddingTop:"25px"}})]})},$$=C.default.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`,e0=(0,C.default)(co.div)`
  list-style: none;
  flex: 1;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 1rem;
  border-bottom: 1px solid ${hi};

  h3 {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin: 0 0 0.8rem;;
    padding: 0.2rem 0;

    &.neutral {
      color: #d33079;
    }
    &.danger {
      color: #d2545d;
    }
    &.warning {
      color: #b5a200;
    }
  }

  p {
    margin: 0;
    color: ${Xo};
    font-size: 0.9rem;
    line-height: 1.2rem;
    font-variation-settings: 'wght' 490;
  }
`;var t0=function(){return t0=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},t0.apply(this,arguments)};var a0=function(e){var t=e.animate,a=e.animateBegin,r=e.backgroundColor,l=e.backgroundOpacity,s=e.baseUrl,n=e.children,o=e.foregroundColor,i=e.foregroundOpacity,u=e.gradientRatio,c=e.gradientDirection,d=e.uniqueKey,h=e.interval,f=e.rtl,p=e.speed,g=e.style,m=e.title,v=e.beforeMask,b=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]])}return a}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),y=d||Math.random().toString(36).substring(6),w=y+"-diff",k=y+"-animated-diff",x=y+"-aria",C=f?{transform:"scaleX(-1)"}:null,M="0; "+h+"; 1",E=p+"s",_="top-bottom"===c?"rotate(90)":void 0;return(0,V.createElement)("svg",t0({"aria-labelledby":x,role:"img",style:t0(t0({},g),C)},b),m?(0,V.createElement)("title",{id:x},m):null,v&&(0,V.isValidElement)(v)?v:null,(0,V.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+s+"#"+w+")",style:{fill:"url("+s+"#"+k+")"}}),(0,V.createElement)("defs",null,(0,V.createElement)("clipPath",{id:w},n),(0,V.createElement)("linearGradient",{id:k,gradientTransform:_},(0,V.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:l},t&&(0,V.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:M,dur:E,repeatCount:"indefinite",begin:a})),(0,V.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:i},t&&(0,V.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:M,dur:E,repeatCount:"indefinite",begin:a})),(0,V.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:l},t&&(0,V.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:M,dur:E,repeatCount:"indefinite",begin:a})))))};a0.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var r0=function(e){return e.children?(0,V.createElement)(a0,t0({},e)):(0,V.createElement)(l0,t0({},e))},l0=function(e){return(0,V.createElement)(r0,t0({viewBox:"0 0 476 124"},e),(0,V.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,V.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,V.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,V.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,V.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,V.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};const s0=r0,n0=()=>{const{mode:e}=vJ();return(0,_u.jsx)(s0,{height:90,width:"100%",backgroundColor:Wo.loader.background[e],foregroundColor:Wo.loader.foreground[e],opacity:.2,children:(0,_u.jsx)("rect",{x:"0",y:"0",rx:"0.5rem",ry:"0.5rem",width:"100%",height:"100%"})})},o0=C.default.button`
  background: ${ui};
  color: ${Xo};
  fill: ${Xo};
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0.05rem;
  transition: all 0.15s;

  &:hover {
    fill: ${Uo};
  }
`,i0=V.createContext({toggle:()=>{},setPage:e=>{},setInnerDefinition:e=>{},getDefinition:(e,t)=>{},openAssistant:()=>{},closeAssistant:e=>{},setActiveSection:e=>{},goToDefinition:(e,t)=>{},setAssistantHeight:e=>{},activeSection:0,open:0,page:"overview",innerDefinition:{},height:0,transition:1}),u0=()=>V.useContext(i0);class c0 extends V.Component{constructor(){super(...arguments),this.state={open:0,page:"overview",innerDefinition:[],activeSection:0,height:0,transition:0},this.setPage=e=>{this.setState({page:e})},this.getDefinition=(e,t)=>{var a;return null===(a=w8.find((t=>t.key===e)))||void 0===a?void 0:a.definitions.find((e=>e.title===t))},this.setInnerDefinition=e=>{this.setState({innerDefinition:e})},this.toggle=()=>{this.setState({open:1===this.state.open?0:1,transition:0})},this.openAssistant=()=>{this.setState({open:1,transition:0})},this.closeAssistant=e=>{this.setState({open:0,transition:0}),setTimeout((()=>{this.setState({...this.state,activeSection:0})}),100)},this.setActiveSection=e=>{this.setState({activeSection:e,transition:1})},this.goToDefinition=(e,t)=>{this.setPage(e),this.setInnerDefinition(this.getDefinition(e,t)),this.setActiveSection(1),setTimeout((()=>this.openAssistant()),60)},this.setAssistantHeight=e=>{this.setState({...this.state,height:e})}}render(){return(0,_u.jsx)(i0.Provider,{value:{toggle:this.toggle,setPage:this.setPage,setInnerDefinition:this.setInnerDefinition,getDefinition:this.getDefinition,openAssistant:this.openAssistant,closeAssistant:this.closeAssistant,setActiveSection:this.setActiveSection,goToDefinition:this.goToDefinition,setAssistantHeight:this.setAssistantHeight,activeSection:this.state.activeSection,open:this.state.open,page:this.state.page,innerDefinition:this.state.innerDefinition,height:this.state.height,transition:this.state.transition},children:this.props.children})}}var d0;function h0(){return h0=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},h0.apply(this,arguments)}function f0(e,t){let{title:a,titleId:r,...l}=e;return V.createElement("svg",h0({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:"100%",height:"100%",ref:t,"aria-labelledby":r},l),a?V.createElement("title",{id:r},a):null,d0||(d0=V.createElement("path",{d:"M32 15c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0 14.5c-2.5 0-4.5 2-4.5 4.5v12c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5V34c0-2.5-2-4.5-4.5-4.5z"})))}const p0=V.forwardRef(f0),g0=(__webpack_require__.p,e=>{var t;const{goToDefinition:a}=u0(),{page:r,title:l}=e;let s=null!==(t=e.size)&&void 0!==t?t:"1.3em";return(0,_u.jsx)(o0,{className:"assistant-icon ignore-assistant-outside-alerter",onClick:()=>{a(r,l)},style:{width:s,height:s},children:(0,_u.jsx)(p0,{className:"ignore-assistant-outside-alerter"})})}),m0=()=>{const{isSyncing:e}=mF(),{network:t}=JO(),{units:a}=t,{staking:r}=oF(),{minNominatorBond:l,totalNominators:s,maxNominatorsCount:n}=r,o={hidden:{opacity:0},show:{opacity:1}};let i=n.eq(s),u=0;n.gt(new(xu())(0))&&s.gt(new(xu())(0))&&(u=s.div(n.div(new(xu())(100))));let c=l.div(new(xu())(10**a)),d=[];return i&&d.push({class:"danger",title:"Nominator Limit Has Been Reached.",subtitle:"The maximum allowed nominators have been reached on the network. Please wait for available slots if you wish to nominate."}),u>=90&&d.push({class:"warning",title:`${u.toFixed(2)}% of Nominator Limit Reached.`,subtitle:`The maximum amount of nominators has almost been reached. The nominator cap is currently ${sV(n.toNumber())}.`}),d.push({class:"neutral",title:`The minimum nominator bond is now ${c} ${t.unit}.`,subtitle:`The minimum bonding amount to start nominating on ${t.name} is now ${rV(l,a)} ${t.unit}.`}),d.push({class:"neutral",title:`The maximum nominator cap is now ${sV(n.toNumber())}.`,subtitle:`A total of ${sV(n.toNumber())} nominators can now join the ${t.name} network.`}),(0,_u.jsxs)(cF,{children:[(0,_u.jsxs)("h2",{children:["Announcements",(0,_u.jsx)(g0,{page:"overview",title:"Announcements"})]}),(0,_u.jsx)($$,{children:(0,_u.jsx)(co.div,{variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.25}}},initial:"hidden",animate:"show",style:{width:"100%"},children:e()?(0,_u.jsx)(n0,{}):d.map(((e,t)=>(0,_u.jsxs)(e0,{variants:o,children:[(0,_u.jsxs)("h3",{className:e.class,children:[(0,_u.jsx)(f$,{icon:b$,style:{marginRight:"0.6rem"}}),e.title]}),(0,_u.jsx)("p",{children:e.subtitle})]},`announcement_${t}`)))})})]})},v0=V.createContext({fetchEraPoints:(e,t)=>{},payouts:[]}),b0=()=>V.useContext(v0),y0=C.default.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 0.9rem;
  font-variation-settings: 'wght' 570;
  background: ${e=>e.background};
  border-radius: 0.3rem;
  padding: 0.25rem 0.4rem;
  color: ${e=>e.color};;
  opacity: 0.8;
`,w0=()=>{const{mode:e}=vJ(),{services:t}=mF();return(0,_u.jsxs)(y0,{color:t.includes("subscan")?Wo.text.invert[e]:Wo.text.secondary[e],background:t.includes("subscan")?Wo.primary[e]:Wo.background.label[e],children:[(0,_u.jsx)(f$,{icon:O$,transform:"shrink-2",style:{marginRight:"0.3rem"}}),"Subscan"]})},k0=e=>{const{title:t,setStickyTitle:a}=e,[r,l]=(0,V.useState)(!1);let s=(0,V.useRef)();return(0,V.useEffect)((()=>{const e=s.current,t=new IntersectionObserver((e=>{let[t]=e;return l(t.intersectionRatio<1)}),{threshold:[1],rootMargin:"-1px 0px 0px 0px"});return t.observe(e),function(){t.unobserve(e)}}),[r]),(0,V.useEffect)((()=>{void 0!==a&&a(r)}),[r]),(0,_u.jsx)(Ci,{ref:s,isSticky:r,children:(0,_u.jsx)("h1",{children:t})})};var x0=__webpack_require__(12812),C0=__webpack_require__(67550);const M0="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:function(e){return e("return this")}(Function);const E0="function"===typeof M0.BigInt&&"function"===typeof M0.BigInt.asIntN?M0.BigInt:()=>Number.NaN,_0="function"===typeof E0&&"function"===typeof E0.asIntN,N0="undefined"!==typeof Buffer,P0="object"===typeof process;function j0(e){return"undefined"===typeof e}const S0=[{info:"on",text:"Allow camera access",value:"on"},{info:"off",text:"Do not allow camera access",value:"off"}],z0=[{info:"session",text:"Once per session",value:"session"},{info:"tx",text:"On each transaction",value:"tx"}],T0=[{info:"local",text:"Local Node (Own, 127.0.0.1:9944)",value:"ws://127.0.0.1:9944/"}],L0=T0[0],A0=[{info:"none",text:"Do not attach Ledger devices",value:"none"},{info:"webusb",text:"Attach Ledger via WebUSB (Chrome, recommended)",value:"webusb"},{info:"hid",text:"Attach Ledger via WebHID (Chrome, experimental)",value:"hid"}],O0="undefined"!==typeof window&&window.location.host.includes("polkadot"),V0=!O0&&"undefined"!==typeof window&&window.location.host.includes("ui-light")?"light":"full",B0=[{info:"full",text:"Fully featured",value:"full"},{info:"light",text:"Basic features only",value:"light"}],H0=O0?"polkadot":"substrate",I0=[{info:"polkadot",text:"Polkadot",value:"polkadot"},{info:"substrate",text:"Substrate",value:"substrate"}],R0=O0?"polkadot":"substrate",W0=[{info:"default",text:"Default for the connected node",value:"default"},{info:"polkadot",text:"Polkadot",value:"polkadot"},{info:"substrate",text:"Substrate",value:"substrate"},{info:"beachball",text:"Beachball",value:"beachball"}],D0={centrifuge:"polkadot",kusama:"polkadot",polkadot:"polkadot",sora:"polkadot",statemine:"polkadot",statemint:"polkadot",westmint:"polkadot"},U0={bifrost:788,centrifuge:747,"dock-mainnet":594,edgeware:523,equilibrium:99999997,genshiro:99999996,kusama:434,"nodle-chain":1003,polkadot:354,polymesh:595,sora:617,statemine:434},F0={"":!0,"cess-testnet":!0,"dock-testnet":!0,jupiter:!0,"mathchain-testnet":!0,subspace_testnet:!0,"zero-alphaville":!0},q0={acala:["0xfc41b9bd8ef8fe53d58c7ea67c794c7ec9a73daf05e6d54b14ff6342c99ba64c"],astar:["0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6"],basilisk:["0xa85cfb9b9fd4d622a5b28289a02347af987d8f73fa3108450e2b4a11c1ce5755"],bifrost:["0x9f28c6a68e0fc9646eff64935684f6eeeece527e37bbe1f213d22caa1d9d6bed"],centrifuge:["0x67dddf2673b69e5f875f6f25277495834398eafd67f492e09f3f3345e003d1b5"],"dock-mainnet":["0xf73467c6544aa68df2ee546b135f955c46b90fa627e9b5d7935f41061bb8a5a9"],edgeware:["0x742a2ca70c2fda6cee4f8df98d64c4c670a052d9568058982dad9d5a7a135c5b"],equilibrium:["0x6f1a800de3daff7f5e037ddf66ab22ce03ab91874debeddb1086f5f7dbd48925"],genshiro:["0x9b8cefc0eb5c568b527998bdd76c184e2b76ae561be76e4667072230217ea243"],hydradx:["0xd2a620c27ec5cbc5621ff9a522689895074f7cca0d08e7134a7804e1a3ba86fc","0x10af6e84234477d84dc572bac0789813b254aa490767ed06fb9591191d1073f9","0x3d75507dd46301767e601265791da1d9cb47b6ebc94e87347b635e5bf58bd047","0x0ed32bfcab4a83517fac88f2aa7cbc2f88d3ab93be9a12b6188a036bf8a943c2"],karura:["0xbaf5aabe40646d11f0ee8abbdc64f4a4b7674925cba08e4a05ff9ebed6e2126b"],kulupu:["0xf7a99d3cb92853d00d5275c971c132c074636256583fee53b3bbe60d7b8769ba"],kusama:["0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe","0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636","0x3fd7b9eb6a00376e5be61f01abb429ffb0b104be05eaff4d458da48fcd425baf"],"nodle-chain":["0xa3d114c2b8d0627c1aa9b134eafcf7d05ca561fdc19fb388bb9457f81809fb23"],picasso:["0xe8e7f0f4c4f5a00720b4821dbfddefea7490bcf0b19009961cc46957984e2c1c"],polkadot:["0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3"],polymesh:["0x6fbd74e5e1d0a61d52ccfe9d4adaed16dd3a7caa37c6bc4d0c2fa12e8b2f4063"],rococo:["0xaaf2cd1b74b5f726895921259421b534124726263982522174147046b8827897","0x037f5f3c8e67b314062025fc886fcd6238ea25a4a9b45dce8d246815c9ebe770","0xc196f81260cf1686172b47a79cf002120735d7cb0eb1474e8adce56618456fff","0xf6e9983c37baf68846fedafe21e56718790e39fb1c582abc408b81bc7b208f9a","0x5fce687da39305dfe682b117f0820b319348e8bb37eb16cf34acbf6a202de9d9","0xe7c3d5edde7db964317cd9b51a3a059d7cd99f81bdbce14990047354334c9779","0x1611e1dbf0405379b861e2e27daa90f480b2e6d3682414a80835a52e8cb8a215","0x343442f12fa715489a8714e79a7b264ea88c0d5b8c66b684a7788a516032f6b9","0x78bcd530c6b3a068bc17473cf5d2aff9c287102bed9af3ae3c41c33b9d6c6147","0x47381ee0697153d64404fc578392c8fd5cba9073391908f46c888498415647bd","0x19c0e4fa8ab75f5ac7865e0b8f74ff91eb9a100d336f423cd013a8befba40299"],sora:["0x7e4e32d0feafd4f9c9414b0be86373f9a1efa904809b683453a9af6856d38ad5"],stafi:["0x290a4149f09ea0e402c74c1c7e96ae4239588577fe78932f94f5404c68243d80"],statemine:["0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a"],subsocial:["0x0bd72c1c305172e1275278aaeb3f161e02eccb7a819e63f62d47bd53a28189f8"]},X0=[0,2,42],Y0=["testnet"];const G0=[{prefix:0,network:"polkadot",displayName:"Polkadot Relay Chain",symbols:["DOT"],decimals:[10],standardAccount:"*25519",website:"https://polkadot.network"},{prefix:1,network:"BareSr25519",displayName:"Bare 32-bit Schnorr/Ristretto (S/R 25519) public key.",symbols:[],decimals:[],standardAccount:"Sr25519",website:null},{prefix:2,network:"kusama",displayName:"Kusama Relay Chain",symbols:["KSM"],decimals:[12],standardAccount:"*25519",website:"https://kusama.network"},{prefix:3,network:"BareEd25519",displayName:"Bare 32-bit Ed25519 public key.",symbols:[],decimals:[],standardAccount:"Ed25519",website:null},{prefix:4,network:"katalchain",displayName:"Katal Chain",symbols:[],decimals:[],standardAccount:"*25519",website:null},{prefix:5,network:"astar",displayName:"Astar Network",symbols:["ASTR"],decimals:[18],standardAccount:"*25519",website:"https://astar.network"},{prefix:6,network:"bifrost",displayName:"Bifrost",symbols:["BNC"],decimals:[12],standardAccount:"*25519",website:"https://bifrost.finance/"},{prefix:7,network:"edgeware",displayName:"Edgeware",symbols:["EDG"],decimals:[18],standardAccount:"*25519",website:"https://edgewa.re"},{prefix:8,network:"karura",displayName:"Karura",symbols:["KAR"],decimals:[12],standardAccount:"*25519",website:"https://karura.network/"},{prefix:9,network:"reynolds",displayName:"Laminar Reynolds Canary",symbols:["REY"],decimals:[18],standardAccount:"*25519",website:"http://laminar.network/"},{prefix:10,network:"acala",displayName:"Acala",symbols:["ACA"],decimals:[12],standardAccount:"*25519",website:"https://acala.network/"},{prefix:11,network:"laminar",displayName:"Laminar",symbols:["LAMI"],decimals:[18],standardAccount:"*25519",website:"http://laminar.network/"},{prefix:12,network:"polymesh",displayName:"Polymesh",symbols:["POLYX"],decimals:[6],standardAccount:"*25519",website:"https://polymath.network/"},{prefix:13,network:"integritee",displayName:"Integritee",symbols:["TEER"],decimals:[12],standardAccount:"*25519",website:"https://integritee.network"},{prefix:14,network:"totem",displayName:"Totem",symbols:["TOTEM"],decimals:[0],standardAccount:"*25519",website:"https://totemaccounting.com"},{prefix:15,network:"synesthesia",displayName:"Synesthesia",symbols:["SYN"],decimals:[12],standardAccount:"*25519",website:"https://synesthesia.network/"},{prefix:16,network:"kulupu",displayName:"Kulupu",symbols:["KLP"],decimals:[12],standardAccount:"*25519",website:"https://kulupu.network/"},{prefix:17,network:"dark",displayName:"Dark Mainnet",symbols:[],decimals:[],standardAccount:"*25519",website:null},{prefix:18,network:"darwinia",displayName:"Darwinia Network",symbols:["RING","KTON"],decimals:[9,9],standardAccount:"*25519",website:"https://darwinia.network/"},{prefix:19,network:"geek",displayName:"GeekCash",symbols:["GEEK"],decimals:[12],standardAccount:"*25519",website:"https://geekcash.org"},{prefix:20,network:"stafi",displayName:"Stafi",symbols:["FIS"],decimals:[12],standardAccount:"*25519",website:"https://stafi.io"},{prefix:21,network:"dock-testnet",displayName:"Dock Testnet",symbols:["DCK"],decimals:[6],standardAccount:"*25519",website:"https://dock.io"},{prefix:22,network:"dock-mainnet",displayName:"Dock Mainnet",symbols:["DCK"],decimals:[6],standardAccount:"*25519",website:"https://dock.io"},{prefix:23,network:"shift",displayName:"ShiftNrg",symbols:[],decimals:[],standardAccount:"*25519",website:null},{prefix:24,network:"zero",displayName:"ZERO",symbols:["ZERO"],decimals:[18],standardAccount:"*25519",website:"https://zero.io"},{prefix:25,network:"zero-alphaville",displayName:"ZERO Alphaville",symbols:["ZERO"],decimals:[18],standardAccount:"*25519",website:"https://zero.io"},{prefix:26,network:"jupiter",displayName:"Jupiter",symbols:["jDOT"],decimals:[10],standardAccount:"*25519",website:"https://jupiter.patract.io"},{prefix:27,network:"kabocha",displayName:"Kabocha",symbols:["KAB"],decimals:[12],standardAccount:"*25519",website:"https://kabocha.network"},{prefix:28,network:"subsocial",displayName:"Subsocial",symbols:[],decimals:[],standardAccount:"*25519",website:null},{prefix:29,network:"cord",displayName:"CORD Network",symbols:["DHI","WAY"],decimals:[12,12],standardAccount:"*25519",website:"https://cord.network/"},{prefix:30,network:"phala",displayName:"Phala Network",symbols:["PHA"],decimals:[12],standardAccount:"*25519",website:"https://phala.network"},{prefix:31,network:"litentry",displayName:"Litentry Network",symbols:["LIT"],decimals:[12],standardAccount:"*25519",website:"https://litentry.com/"},{prefix:32,network:"robonomics",displayName:"Robonomics",symbols:["XRT"],decimals:[9],standardAccount:"*25519",website:"https://robonomics.network"},{prefix:33,network:"datahighway",displayName:"DataHighway",symbols:[],decimals:[],standardAccount:"*25519",website:null},{prefix:34,network:"ares",displayName:"Ares Protocol",symbols:["ARES"],decimals:[12],standardAccount:"*25519",website:"https://www.aresprotocol.com/"},{prefix:35,network:"vln",displayName:"Valiu Liquidity Network",symbols:["USDv"],decimals:[15],standardAccount:"*25519",website:"https://valiu.com/"},{prefix:36,network:"centrifuge",displayName:"Centrifuge Chain",symbols:["CFG"],decimals:[18],standardAccount:"*25519",website:"https://centrifuge.io/"},{prefix:37,network:"nodle",displayName:"Nodle Chain",symbols:["NODL"],decimals:[18],standardAccount:"*25519",website:"https://nodle.io/"},{prefix:38,network:"kilt",displayName:"KILT Chain",symbols:["KILT"],decimals:[18],standardAccount:"*25519",website:"https://kilt.io/"},{prefix:39,network:"mathchain",displayName:"MathChain mainnet",symbols:["MATH"],decimals:[18],standardAccount:"*25519",website:"https://mathwallet.org"},{prefix:40,network:"mathchain-testnet",displayName:"MathChain testnet",symbols:["MATH"],decimals:[18],standardAccount:"*25519",website:"https://mathwallet.org"},{prefix:41,network:"poli",displayName:"Polimec Chain",symbols:[],decimals:[],standardAccount:"*25519",website:"https://polimec.io/"},{prefix:42,network:"substrate",displayName:"Substrate",symbols:[],decimals:[],standardAccount:"*25519",website:"https://substrate.io/"},{prefix:43,network:"BareSecp256k1",displayName:"Bare 32-bit ECDSA SECP-256k1 public key.",symbols:[],decimals:[],standardAccount:"secp256k1",website:null},{prefix:44,network:"chainx",displayName:"ChainX",symbols:["PCX"],decimals:[8],standardAccount:"*25519",website:"https://chainx.org/"},{prefix:45,network:"uniarts",displayName:"UniArts Network",symbols:["UART","UINK"],decimals:[12,12],standardAccount:"*25519",website:"https://uniarts.me"},{prefix:46,network:"reserved46",displayName:"This prefix is reserved.",symbols:[],decimals:[],standardAccount:null,website:null},{prefix:47,network:"reserved47",displayName:"This prefix is reserved.",symbols:[],decimals:[],standardAccount:null,website:null},{prefix:48,network:"neatcoin",displayName:"Neatcoin Mainnet",symbols:["NEAT"],decimals:[12],standardAccount:"*25519",website:"https://neatcoin.org"},{prefix:49,network:"picasso",displayName:"Picasso",symbols:["PICA"],decimals:[12],standardAccount:"*25519",website:"https://picasso.composable.finance"},{prefix:50,network:"composable",displayName:"Composable",symbols:["LAYR"],decimals:[12],standardAccount:"*25519",website:"https://composable.finance"},{prefix:51,network:"oak",displayName:"OAK Network",symbols:["OAK"],decimals:[10],standardAccount:"*25519",website:"https://oak.tech"},{prefix:55,network:"xxnetwork",displayName:"xx network",symbols:["XX"],decimals:[9],standardAccount:"*25519",website:"https://xx.network"},{prefix:63,network:"hydradx",displayName:"HydraDX",symbols:["HDX"],decimals:[12],standardAccount:"*25519",website:"https://hydradx.io"},{prefix:65,network:"aventus",displayName:"AvN Mainnet",symbols:["AVT"],decimals:[18],standardAccount:"*25519",website:"https://aventus.io"},{prefix:66,network:"crust",displayName:"Crust Network",symbols:["CRU"],decimals:[12],standardAccount:"*25519",website:"https://crust.network"},{prefix:67,network:"genshiro",displayName:"Genshiro Network",symbols:["GENS","EQD","LPT0"],decimals:[9,9,9],standardAccount:"*25519",website:"https://genshiro.equilibrium.io"},{prefix:68,network:"equilibrium",displayName:"Equilibrium Network",symbols:["EQ"],decimals:[9],standardAccount:"*25519",website:"https://equilibrium.io"},{prefix:69,network:"sora",displayName:"SORA Network",symbols:["XOR"],decimals:[18],standardAccount:"*25519",website:"https://sora.org"},{prefix:73,network:"zeitgeist",displayName:"Zeitgeist",symbols:["ZTG"],decimals:[10],standardAccount:"*25519",website:"https://zeitgeist.pm"},{prefix:77,network:"manta",displayName:"Manta network",symbols:["MANTA"],decimals:[18],standardAccount:"*25519",website:"https://manta.network"},{prefix:78,network:"calamari",displayName:"Calamari: Manta Canary Network",symbols:["KMA"],decimals:[12],standardAccount:"*25519",website:"https://manta.network"},{prefix:88,network:"polkadex",displayName:"Polkadex Mainnet",symbols:["PDEX"],decimals:[12],standardAccount:"*25519",website:"https://polkadex.trade"},{prefix:98,network:"polkasmith",displayName:"PolkaSmith Canary Network",symbols:["PKS"],decimals:[18],standardAccount:"*25519",website:"https://polkafoundry.com"},{prefix:99,network:"polkafoundry",displayName:"PolkaFoundry Network",symbols:["PKF"],decimals:[18],standardAccount:"*25519",website:"https://polkafoundry.com"},{prefix:101,network:"origintrail-parachain",displayName:"OriginTrail Parachain",symbols:["TRAC"],decimals:[18],standardAccount:"secp256k1",website:"https://origintrail.io"},{prefix:105,network:"pontem-network",displayName:"Pontem Network",symbols:["PONT"],decimals:[10],standardAccount:"*25519",website:"https://pontem.network"},{prefix:110,network:"heiko",displayName:"Heiko",symbols:["HKO"],decimals:[12],standardAccount:"*25519",website:"https://parallel.fi/"},{prefix:113,network:"integritee-incognito",displayName:"Integritee Incognito",symbols:[],decimals:[],standardAccount:"*25519",website:"https://integritee.network"},{prefix:128,network:"clover",displayName:"Clover Finance",symbols:["CLV"],decimals:[18],standardAccount:"*25519",website:"https://clover.finance"},{prefix:131,network:"litmus",displayName:"Litmus Network",symbols:["LIT"],decimals:[12],standardAccount:"*25519",website:"https://litentry.com/"},{prefix:136,network:"altair",displayName:"Altair",symbols:["AIR"],decimals:[18],standardAccount:"*25519",website:"https://centrifuge.io/"},{prefix:172,network:"parallel",displayName:"Parallel",symbols:["PARA"],decimals:[12],standardAccount:"*25519",website:"https://parallel.fi/"},{prefix:252,network:"social-network",displayName:"Social Network",symbols:["NET"],decimals:[18],standardAccount:"*25519",website:"https://social.network"},{prefix:255,network:"quartz_mainnet",displayName:"QUARTZ by UNIQUE",symbols:["QTZ"],decimals:[15],standardAccount:"*25519",website:"https://unique.network"},{prefix:268,network:"pioneer_network",displayName:"Pioneer Network by Bit.Country",symbols:["NEER"],decimals:[18],standardAccount:"*25519",website:"https://bit.country"},{prefix:420,network:"sora_kusama_para",displayName:"SORA Kusama Parachain",symbols:["XOR"],decimals:[18],standardAccount:"*25519",website:"https://sora.org"},{prefix:1110,network:"efinity",displayName:"Efinity",symbols:["EFI"],decimals:[18],standardAccount:"Sr25519",website:"https://efinity.io/"},{prefix:1284,network:"moonbeam",displayName:"Moonbeam",symbols:["GLMR"],decimals:[18],standardAccount:"secp256k1",website:"https://moonbeam.network"},{prefix:1285,network:"moonriver",displayName:"Moonriver",symbols:["MOVR"],decimals:[18],standardAccount:"secp256k1",website:"https://moonbeam.network"},{prefix:1337,network:"ajuna",displayName:"Ajuna Network",symbols:["AJUN"],decimals:[12],standardAccount:"Sr25519",website:"https://ajuna.io"},{prefix:2007,network:"kapex",displayName:"Kapex",symbols:["KAPEX"],decimals:[12],standardAccount:"*25519",website:"https://totemaccounting.com"},{prefix:2032,network:"interlay",displayName:"Interlay",symbols:["INTR"],decimals:[10],standardAccount:"*25519",website:"https://interlay.io/"},{prefix:2092,network:"kintsugi",displayName:"Kintsugi",symbols:["KINT"],decimals:[12],standardAccount:"*25519",website:"https://interlay.io/"},{prefix:2254,network:"subspace_testnet",displayName:"Subspace testnet",symbols:["tSSC"],decimals:[18],standardAccount:"*25519",website:"https://subspace.network"},{prefix:6094,network:"subspace",displayName:"Subspace",symbols:["SSC"],decimals:[18],standardAccount:"*25519",website:"https://subspace.network"},{prefix:10041,network:"basilisk",displayName:"Basilisk",symbols:["BSX"],decimals:[12],standardAccount:"*25519",website:"https://bsx.fi"},{prefix:11330,network:"cess-testnet",displayName:"CESS Testnet",symbols:["TCESS"],decimals:[12],standardAccount:"*25519",website:"https://cess.cloud"},{prefix:11331,network:"cess",displayName:"CESS",symbols:["CESS"],decimals:[12],standardAccount:"*25519",website:"https://cess.cloud"},{prefix:11820,network:"contextfree",displayName:"Automata ContextFree",symbols:["CTX"],decimals:[18],standardAccount:"*25519",website:"https://ata.network"}].map((function(e){const t=e.network||"",a=t.replace(/_/g,"-").split("-"),r=e;return r.slip44=U0[t],r.hasLedgerSupport=!!r.slip44,r.genesisHash=q0[t]||[],r.icon=D0[t]||"substrate",r.isTestnet=!!F0[t]||Y0.includes(a[a.length-1]),r.isIgnored=r.isTestnet||!(e.standardAccount&&e.decimals&&e.decimals.length&&e.symbols&&e.symbols.length)&&42!==e.prefix,r})),Z0=G0.filter((function(e){return!e.isIgnored&&!!e.network})).sort((function(e,t){const a=X0.includes(e.prefix);return a===X0.includes(t.prefix)?a?0:e.displayName.localeCompare(t.displayName):a?-1:1})),K0=(Z0.filter((function(e){let{genesisHash:t,prefix:a}=e;return!!t.length||42===a})),Z0.map((e=>{let{displayName:t,network:a,prefix:r}=e;return{info:a,text:t,value:r}}))),J0=[{info:"default",text:"Default for the connected node",value:-1},...K0],Q0=[{info:"sr25519",text:"Schnorrkel (sr25519, recommended)",value:"sr25519"},{info:"ed25519",text:"Edwards (ed25519, alternative)",value:"ed25519"},{info:"ecdsa",text:"ECDSA (Non BTC/ETH compatible)",value:"ecdsa"}],$0=[{info:"ethereum",text:"ECDSA (ETH compatible)",value:"ethereum"}],e1=[...Q0,{info:"ed25519-ledger",text:"Ledger (ed25519, BIP32 derivation)",value:"ed25519-ledger"}];function t1(e,t,a){const r=t||a;return e.some((e=>{let{value:t}=e;return t===r}))?r:a}var a1=new WeakMap,r1=new WeakMap,l1=new WeakMap,s1=new WeakMap,n1=new WeakMap,o1=new WeakMap,i1=new WeakMap,u1=new WeakMap,c1=new WeakMap,d1=new WeakMap,h1=new WeakMap,f1=new WeakMap;const p1=new class{constructor(){Pu(this,a1,{writable:!0,value:void 0}),Pu(this,r1,{writable:!0,value:void 0}),Pu(this,l1,{writable:!0,value:void 0}),Pu(this,s1,{writable:!0,value:void 0}),Pu(this,n1,{writable:!0,value:void 0}),Pu(this,o1,{writable:!0,value:void 0}),Pu(this,i1,{writable:!0,value:void 0}),Pu(this,u1,{writable:!0,value:void 0}),Pu(this,c1,{writable:!0,value:void 0}),Pu(this,d1,{writable:!0,value:void 0}),Pu(this,h1,{writable:!0,value:void 0}),Pu(this,f1,{writable:!0,value:void 0});const e=C0.get("settings")||{};zu(this,a1,new aL),zu(this,l1,"string"===typeof e.apiUrl&&e.apiUrl||P0&&{NODE_ENV:"production",PUBLIC_URL:"/polkadot-staking-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&{NODE_ENV:"production",PUBLIC_URL:"/polkadot-staking-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.WS_URL||L0.value),zu(this,r1,{param:Su(this,l1),type:"json-rpc"}),zu(this,s1,t1(S0,e.camera,"off")),zu(this,i1,t1(A0,e.ledgerConn,"none")),zu(this,n1,e.i18nLang||"default"),zu(this,o1,e.icon||"default"),zu(this,u1,e.locking||"session"),zu(this,c1,j0(e.prefix)?-1:e.prefix),zu(this,d1,e.uiMode||V0),zu(this,h1,e.uiTheme||H0),zu(this,f1,e.notification||"popup")}get camera(){return Su(this,s1)}get apiType(){return Su(this,r1)}get apiUrl(){return Su(this,l1)}get i18nLang(){return Su(this,n1)}get icon(){return Su(this,o1)}get notification(){return Su(this,f1)}get ledgerConn(){return Su(this,i1)}get locking(){return Su(this,u1)}get prefix(){return Su(this,c1)}get uiMode(){return Su(this,d1)}get uiTheme(){return Su(this,h1)}get availableCamera(){return S0}get availableCryptos(){return Q0}get availableCryptosEth(){return $0}get availableCryptosLedger(){return e1}get availableIcons(){return W0}get availableLedgerConn(){return A0}get availableLocking(){return z0}get availableNodes(){return T0}get availablePrefixes(){return J0}get availableUIModes(){return B0}get availableUIThemes(){return I0}get(){return{apiType:Su(this,r1),apiUrl:Su(this,l1),camera:Su(this,s1),i18nLang:Su(this,n1),icon:Su(this,o1),ledgerConn:Su(this,i1),locking:Su(this,u1),notification:Su(this,f1),prefix:Su(this,c1),uiMode:Su(this,d1),uiTheme:Su(this,h1)}}set(e){zu(this,r1,e.apiType||Su(this,r1)),zu(this,l1,e.apiUrl||Su(this,l1)),zu(this,s1,e.camera||Su(this,s1)),zu(this,i1,e.ledgerConn||Su(this,i1)),zu(this,n1,e.i18nLang||Su(this,n1)),zu(this,o1,e.icon||Su(this,o1)),zu(this,u1,e.locking||Su(this,u1)),zu(this,f1,e.notification||Su(this,f1)),zu(this,c1,j0(e.prefix)?Su(this,c1):e.prefix),zu(this,d1,e.uiMode||Su(this,d1)),zu(this,h1,e.uiTheme||Su(this,h1));const t=this.get();C0.set("settings",t),Su(this,a1).emit("change",t)}on(e,t){Su(this,a1).on(e,t)}};function g1(e){return e instanceof Uint8Array}const m1=/^0x[\da-fA-F]+$/,v1=/^[\da-fA-F]+$/;function b1(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,a=arguments.length>2?arguments[2]:void 0;return"string"===typeof e&&("0x"===e||m1.test(e))&&(-1===t?a||e.length%2===0:e.length===2+Math.ceil(t/4))}const y1=new Array(256),w1=new Array(65536),k1={},x1={};for(let Vee=0;Vee<256;Vee++){const e=Vee.toString(16).padStart(2,"0");y1[Vee]=e,k1[e]=Vee}for(let Vee=0;Vee<256;Vee++)for(let e=0;e<256;e++){const t=y1[Vee]+y1[e],a=Vee<<8|e;w1[a]=t,x1[t]=a}function C1(e){const t=e.length%2,a=e.length-t,r=new DataView(e.buffer,e.byteOffset);let l="";for(let s=0;s<a;s+=2)l+=w1[r.getUint16(s)];return t&&(l+=y1[r.getUint8(a)]),l}function M1(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=Math.ceil(t/8);return`${a?"0x":""}${e&&e.length?r>0&&e.length>r?`${C1(e.subarray(0,r/2))}\u2026${C1(e.subarray(e.length-r/2))}`:C1(e):""}`}function E1(e){if(!e||"0x"===e)return"";if(m1.test(e))return e.substr(2);if(v1.test(e))return e;throw new Error(`Expected hex value to convert, found '${e}'`)}const _1=(N1="TextEncoder",P1=class{encode(e){const t=new Uint8Array(e.length);for(let a=0;a<e.length;a++)t[a]=e.charCodeAt(a);return t}},"undefined"===typeof M0[N1]?P1:M0[N1]);var N1,P1;const j1=new _1;function S1(e){return e?j1.encode(e.toString()):new Uint8Array}function z1(e){return e?Array.isArray(e)||function(e){return N0&&Buffer.isBuffer(e)}(e)?new Uint8Array(e):g1(e)?e:b1(e)?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;if(!e)return new Uint8Array;const a=E1(e).toLowerCase(),r=a.length/2,l=Math.ceil(-1===t?r:t/8),s=new Uint8Array(l),n=l>r?l-r:0,o=new DataView(s.buffer,n),i=(l-n)%2,u=l-n-i;for(let c=0;c<u;c+=2)o.setUint16(c,x1[a.substr(2*c,4)]);return i&&o.setUint8(u,k1[a.substr(a.length-2,2)]),s}(e):S1(e):new Uint8Array}function T1(e){return"function"===typeof e}function L1(e,t){if(!e)throw new Error(T1(t)?t():t)}const A1=BigInt(2**32-1),O1=BigInt(32);function V1(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?{h:Number(e&A1),l:Number(e>>O1&A1)}:{h:0|Number(e>>O1&A1),l:0|Number(e&A1)}}const B1=(e,t,a)=>e>>>a|t<<32-a,H1=(e,t,a)=>e<<32-a|t>>>a,I1=(e,t,a)=>e<<64-a|t>>>a-32,R1=(e,t,a)=>e>>>a-32|t<<64-a,W1=(e,t)=>t;function D1(e,t,a,r){const l=(t>>>0)+(r>>>0);return{h:e+a+(l/2**32|0)|0,l:0|l}}const U1=(e,t,a)=>(e>>>0)+(t>>>0)+(a>>>0),F1=(e,t,a,r)=>t+a+r+(e/2**32|0)|0,q1=("object"===typeof self&&"crypto"in self&&self.crypto,e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)));if(!(68===new Uint8Array(new Uint32Array([287454020]).buffer)[0]))throw new Error("Non little-endian hardware is not supported");Array.from({length:256},((e,t)=>t.toString(16).padStart(2,"0")));(()=>{const e="undefined"!==typeof module&&"function"===typeof module.require&&module.require.bind(module);try{if(e){const{setImmediate:t}=e("timers");return()=>new Promise((e=>t(e)))}}catch(F3){}})();function X1(e){if("string"===typeof e&&(e=function(e){if("string"!==typeof e)throw new TypeError("utf8ToBytes expected string, got "+typeof e);return(new TextEncoder).encode(e)}(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function Y1(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}class G1{clone(){return this._cloneInto()}}function Z1(e){const t=(t,a)=>e(a).update(X1(t)).digest(),a=e({});return t.outputLen=a.outputLen,t.blockLen=a.blockLen,t.create=t=>e(t),t}const[K1,J1,Q1]=[[],[],[]],$1=BigInt(0),e2=BigInt(1),t2=BigInt(2),a2=BigInt(7),r2=BigInt(256),l2=BigInt(113);for(let Vee=0,Bee=e2,Hee=1,Iee=0;Vee<24;Vee++){[Hee,Iee]=[Iee,(2*Hee+3*Iee)%5],K1.push(2*(5*Iee+Hee)),J1.push((Vee+1)*(Vee+2)/2%64);let e=$1;for(let t=0;t<7;t++)Bee=(Bee<<e2^(Bee>>a2)*l2)%r2,Bee&t2&&(e^=e2<<(e2<<BigInt(t))-e2);Q1.push(e)}const[s2,n2]=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=new Uint32Array(e.length),r=new Uint32Array(e.length);for(let l=0;l<e.length;l++){const{h:s,l:n}=V1(e[l],t);[a[l],r[l]]=[s,n]}return[a,r]}(Q1,!0),o2=(e,t,a)=>a>32?((e,t,a)=>t<<a-32|e>>>64-a)(e,t,a):((e,t,a)=>e<<a|t>>>32-a)(e,t,a),i2=(e,t,a)=>a>32?((e,t,a)=>e<<a-32|t>>>64-a)(e,t,a):((e,t,a)=>t<<a|e>>>32-a)(e,t,a);class u2 extends G1{constructor(e,t,a){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:24;if(super(),this.blockLen=e,this.suffix=t,this.outputLen=a,this.enableXOF=r,this.rounds=l,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Y1(a),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=q1(this.state)}keccak(){!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24;const a=new Uint32Array(10);for(let r=24-t;r<24;r++){for(let r=0;r<10;r++)a[r]=e[r]^e[r+10]^e[r+20]^e[r+30]^e[r+40];for(let r=0;r<10;r+=2){const t=(r+8)%10,l=(r+2)%10,s=a[l],n=a[l+1],o=o2(s,n,1)^a[t],i=i2(s,n,1)^a[t+1];for(let a=0;a<50;a+=10)e[r+a]^=o,e[r+a+1]^=i}let t=e[2],l=e[3];for(let a=0;a<24;a++){const r=J1[a],s=o2(t,l,r),n=i2(t,l,r),o=K1[a];t=e[o],l=e[o+1],e[o]=s,e[o+1]=n}for(let r=0;r<50;r+=10){for(let t=0;t<10;t++)a[t]=e[r+t];for(let t=0;t<10;t++)e[r+t]^=~a[(t+2)%10]&a[(t+4)%10]}e[0]^=s2[r],e[1]^=n2[r]}a.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){if(this.destroyed)throw new Error("instance is destroyed");if(this.finished)throw new Error("digest() was already called");const{blockLen:t,state:a}=this,r=(e=X1(e)).length;for(let l=0;l<r;){const s=Math.min(t-this.pos,r-l);for(let t=0;t<s;t++)a[this.pos++]^=e[l++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:t,pos:a,blockLen:r}=this;e[a]^=t,0!==(128&t)&&a===r-1&&this.keccak(),e[r-1]^=128,this.keccak()}writeInto(e){if(this.destroyed)throw new Error("instance is destroyed");if(!(e instanceof Uint8Array))throw new Error("Keccak: invalid output buffer");this.finish();for(let t=0,a=e.length;t<a;){this.posOut>=this.blockLen&&this.keccak();const r=Math.min(this.blockLen-this.posOut,a-t);e.set(this.state.subarray(this.posOut,this.posOut+r),t),this.posOut+=r,t+=r}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return Y1(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(e.length<this.outputLen)throw new Error("Keccak: invalid output buffer");if(this.finished)throw new Error("digest() was already called");return this.finish(),this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:t,suffix:a,outputLen:r,rounds:l,enableXOF:s}=this;return e||(e=new u2(t,a,r,s,l)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=l,e.suffix=a,e.outputLen=r,e.enableXOF=s,e.destroyed=this.destroyed,e}}const c2=(e,t,a)=>function(e){const t=t=>e().update(X1(t)).digest(),a=e();return t.outputLen=a.outputLen,t.blockLen=a.blockLen,t.create=()=>e(),t}((()=>new u2(t,e,a))),d2=(c2(6,144,28),c2(6,136,32),c2(6,104,48),c2(6,72,64),c2(1,144,28),c2(1,136,32)),h2=(c2(1,104,48),c2(1,72,64)),f2=(e,t,a)=>Z1((function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new u2(t,e,void 0!==r.dkLen?r.dkLen:a,!0)}));f2(31,168,16),f2(31,136,32);function p2(e){return function(){return M1(e(...arguments))}}function g2(e,t){return(a,r)=>t(a,e,r)}const m2=function(e,t){return function(a){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,l=arguments.length>2?arguments[2]:void 0;const s=z1(a);return!_0||!l&&pv()?e[r](s):t[r](s)}}({256:dv,512:hv},{256:d2,512:h2});g2(256,m2),g2(512,m2),p2(m2);var v2=__webpack_require__(15413);const b2=BigInt(0),y2=BigInt(1),w2=BigInt(2),k2=BigInt(3),x2=BigInt(8),C2=w2**BigInt(256),M2={a:b2,b:BigInt(7),P:C2-w2**BigInt(32)-BigInt(977),n:C2-BigInt("432420386565659656852420866394968145599"),h:y2,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")};function E2(e){const{a:t,b:a}=M2,r=U2(e*e),l=U2(r*e);return U2(l+t*e+a)}const _2=M2.a===b2;class N2{constructor(e,t,a){this.x=e,this.y=t,this.z=a}static fromAffine(e){if(!(e instanceof j2))throw new TypeError("JacobianPoint#fromAffine: expected Point");return new N2(e.x,e.y,y2)}static toAffineBatch(e){const t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M2.P;const a=e.length,r=new Array(a);let l=y2;for(let s=0;s<a;s++)e[s]!==b2&&(r[s]=l,l=U2(l*e[s],t));l=q2(l,t);for(let s=a-1;s>=0;s--){if(e[s]===b2)continue;const a=U2(l*e[s],t);e[s]=U2(l*r[s],t),l=a}return e}(e.map((e=>e.z)));return e.map(((e,a)=>e.toAffine(t[a])))}static normalizeZ(e){return N2.toAffineBatch(e).map(N2.fromAffine)}equals(e){const t=this,a=e,r=U2(t.z*t.z),l=U2(t.z*r),s=U2(a.z*a.z),n=U2(a.z*s);return U2(t.x*s)===U2(r*a.x)&&U2(t.y*n)===U2(l*a.y)}negate(){return new N2(this.x,U2(-this.y),this.z)}double(){const e=this.x,t=this.y,a=this.z,r=U2(e**w2),l=U2(t**w2),s=U2(l**w2),n=U2(w2*(U2(U2((e+l)**w2))-r-s)),o=U2(k2*r),i=U2(o**w2),u=U2(i-w2*n),c=U2(o*(n-u)-x2*s),d=U2(w2*t*a);return new N2(u,c,d)}add(e){if(!(e instanceof N2))throw new TypeError("JacobianPoint#add: expected JacobianPoint");const t=this.x,a=this.y,r=this.z,l=e.x,s=e.y,n=e.z;if(l===b2||s===b2)return this;if(t===b2||a===b2)return e;const o=U2(r**w2),i=U2(n**w2),u=U2(t*i),c=U2(l*o),d=U2(a*n*i),h=U2(U2(s*r)*o),f=U2(c-u),p=U2(h-d);if(f===b2)return p===b2?this.double():N2.ZERO;const g=U2(f**w2),m=U2(f*g),v=U2(u*g),b=U2(p**w2-m-w2*v),y=U2(p*(v-b)-d*m),w=U2(r*n*f);return new N2(b,y,w)}subtract(e){return this.add(e.negate())}multiplyUnsafe(e){let t=D2(e);if(!_2){let e=N2.ZERO,a=this;for(;t>b2;)t&y2&&(e=e.add(a)),a=a.double(),t>>=y2;return e}let{k1neg:a,k1:r,k2neg:l,k2:s}=G2(t),n=N2.ZERO,o=N2.ZERO,i=this;for(;r>b2||s>b2;)r&y2&&(n=n.add(i)),s&y2&&(o=o.add(i)),i=i.double(),r>>=y2,s>>=y2;return a&&(n=n.negate()),l&&(o=o.negate()),o=new N2(U2(o.x*M2.beta),o.y,o.z),n.add(o)}precomputeWindow(e){const t=_2?128/e+1:256/e+1,a=[];let r=this,l=r;for(let s=0;s<t;s++){l=r,a.push(l);for(let t=1;t<2**(e-1);t++)l=l.add(r),a.push(l);r=l.double()}return a}wNAF(e,t){!t&&this.equals(N2.BASE)&&(t=j2.BASE);const a=t&&t._WINDOW_SIZE||1;if(256%a)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let r=t&&P2.get(t);r||(r=this.precomputeWindow(a),t&&1!==a&&(r=N2.normalizeZ(r),P2.set(t,r)));let l=N2.ZERO,s=N2.ZERO;const n=_2?128/a+1:256/a+1,o=2**(a-1),i=BigInt(2**a-1),u=2**a,c=BigInt(a);for(let d=0;d<n;d++){const t=d*o;let a=Number(e&i);if(e>>=c,a>o&&(a-=u,e+=y2),0===a){let e=r[t];d%2&&(e=e.negate()),s=s.add(e)}else{let e=r[t+Math.abs(a)-1];a<0&&(e=e.negate()),l=l.add(e)}}return{p:l,f:s}}multiply(e,t){let a,r,l=D2(e);if(_2){let{k1neg:e,k1:s,k2neg:n,k2:o}=G2(l),{p:i,f:u}=this.wNAF(s,t),{p:c,f:d}=this.wNAF(o,t);e&&(i=i.negate()),n&&(c=c.negate()),c=new N2(U2(c.x*M2.beta),c.y,c.z),a=i.add(c),r=u.add(d)}else{let{p:e,f:s}=this.wNAF(l,t);a=e,r=s}return N2.normalizeZ([a,r])[0]}toAffine(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q2(this.z);const t=e**w2,a=U2(this.x*t),r=U2(this.y*t*e);return new j2(a,r)}}N2.BASE=new N2(M2.Gx,M2.Gy,y2),N2.ZERO=new N2(b2,y2,b2);const P2=new WeakMap;class j2{constructor(e,t){this.x=e,this.y=t}_setWindowSize(e){this._WINDOW_SIZE=e,P2.delete(this)}static fromCompressedHex(e){const t=32===e.length,a=R2(t?e:e.slice(1));if(!J2(a))throw new Error("Point is not on curve");let r=function(e){const{P:t}=M2,a=BigInt(6),r=BigInt(11),l=BigInt(22),s=BigInt(23),n=BigInt(44),o=BigInt(88),i=e*e*e%t,u=i*i*e%t,c=F2(u,k2)*u%t,d=F2(c,k2)*u%t,h=F2(d,w2)*i%t,f=F2(h,r)*h%t,p=F2(f,l)*f%t,g=F2(p,n)*p%t,m=F2(g,o)*g%t,v=F2(m,n)*p%t,b=F2(v,k2)*u%t,y=F2(b,s)*f%t,w=F2(y,a)*i%t;return F2(w,w2)}(E2(a));const l=(r&y2)===y2;if(t)l&&(r=U2(-r));else{1===(1&e[0])!==l&&(r=U2(-r))}const s=new j2(a,r);return s.assertValidity(),s}static fromUncompressedHex(e){const t=R2(e.slice(1,33)),a=R2(e.slice(33)),r=new j2(t,a);return r.assertValidity(),r}static fromHex(e){const t=W2(e),a=t[0];if(32===t.length||33===t.length&&(2===a||3===a))return this.fromCompressedHex(t);if(65===t.length&&4===a)return this.fromUncompressedHex(t);throw new Error(`Point.fromHex: received invalid point. Expected 32-33 compressed bytes or 65 uncompressed bytes, not ${t.length}`)}static fromPrivateKey(e){return j2.BASE.multiply(Q2(e))}static fromSignature(e,t,a){const r=Z2(e=W2(e)),{r:l,s:s}=$2(t);if(0!==a&&1!==a)throw new Error("Cannot recover signature: invalid recovery bit");if(r===b2)throw new Error("Cannot recover signature: msgHash cannot be 0");const n=2+(1&a),o=j2.fromHex(`0${n}${V2(l)}`),i=N2.fromAffine(o).multiplyUnsafe(s),u=N2.BASE.multiply(r),c=q2(l,M2.n),d=i.subtract(u).multiplyUnsafe(c).toAffine();return d.assertValidity(),d}toRawBytes(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return I2(this.toHex(e))}toHex(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=V2(this.x);return e?`${this.y&y2?"03":"02"}${t}`:`04${t}${V2(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const e="Point is not on elliptic curve",{x:t,y:a}=this;if(!J2(t)||!J2(a))throw new Error(e);const r=U2(a*a);if(U2(r-E2(t))!==b2)throw new Error(e)}equals(e){return this.x===e.x&&this.y===e.y}negate(){return new j2(this.x,U2(-this.y))}double(){return N2.fromAffine(this).double().toAffine()}add(e){return N2.fromAffine(this).add(N2.fromAffine(e)).toAffine()}subtract(e){return this.add(e.negate())}multiply(e){return N2.fromAffine(this).multiply(e,this).toAffine()}}function S2(e){return Number.parseInt(e[0],16)>=8?"00"+e:e}function z2(e){if(e.length<2||2!==e[0])throw new Error(`Invalid signature integer tag: ${O2(e)}`);const t=e[1],a=e.subarray(2,t+2);if(!t||a.length!==t)throw new Error("Invalid signature integer: wrong length");if(0===a[0]&&a[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:R2(a),left:e.subarray(t+2)}}j2.BASE=new j2(M2.Gx,M2.Gy),j2.ZERO=new j2(b2,b2);class T2{constructor(e,t){this.r=e,this.s=t,this.assertValidity()}static fromCompact(e){const t=L2(e),a="Signature.fromCompact";if("string"!==typeof e&&!t)throw new TypeError(`${a}: Expected string or Uint8Array`);const r=t?O2(e):e;if(128!==r.length)throw new Error(`${a}: Expected 64-byte hex`);return new T2(H2(r.slice(0,64)),H2(r.slice(64,128)))}static fromDER(e){const t=L2(e);if("string"!==typeof e&&!t)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r:a,s:r}=function(e){if(e.length<2||48!=e[0])throw new Error(`Invalid signature tag: ${O2(e)}`);if(e[1]!==e.length-2)throw new Error("Invalid signature: incorrect length");const{data:t,left:a}=z2(e.subarray(2)),{data:r,left:l}=z2(a);if(l.length)throw new Error(`Invalid signature: left bytes after parsing: ${O2(l)}`);return{r:t,s:r}}(t?e:I2(e));return new T2(a,r)}static fromHex(e){return this.fromDER(e)}assertValidity(){const{r:e,s:t}=this;if(!K2(e))throw new Error("Invalid Signature: r must be 0 < r < n");if(!K2(t))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const e=M2.n>>y2;return this.s>e}normalizeS(){return this.hasHighS()?new T2(this.r,M2.n-this.s):this}toDERRawBytes(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return I2(this.toDERHex(e))}toDERHex(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=S2(B2(this.s));if(e)return t;const a=S2(B2(this.r)),r=B2(a.length/2),l=B2(t.length/2);return`30${B2(a.length/2+t.length/2+4)}02${r}${a}02${l}${t}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return I2(this.toCompactHex())}toCompactHex(){return V2(this.r)+V2(this.s)}}function L2(e){return e instanceof Uint8Array}const A2=Array.from({length:256},((e,t)=>t.toString(16).padStart(2,"0")));function O2(e){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");let t="";for(let a=0;a<e.length;a++)t+=A2[e[a]];return t}function V2(e){if(e>C2)throw new Error("Expected number < 2^256");return e.toString(16).padStart(64,"0")}function B2(e){const t=e.toString(16);return 1&t.length?`0${t}`:t}function H2(e){if("string"!==typeof e)throw new TypeError("hexToNumber: expected string, got "+typeof e);return BigInt(`0x${e}`)}function I2(e){if("string"!==typeof e)throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+e.length);const t=new Uint8Array(e.length/2);for(let a=0;a<t.length;a++){const r=2*a,l=e.slice(r,r+2),s=Number.parseInt(l,16);if(Number.isNaN(s)||s<0)throw new Error("Invalid byte sequence");t[a]=s}return t}function R2(e){return H2(O2(e))}function W2(e){return e instanceof Uint8Array?Uint8Array.from(e):I2(e)}function D2(e){if("number"===typeof e&&Number.isSafeInteger(e)&&e>0)return BigInt(e);if("bigint"===typeof e&&K2(e))return e;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function U2(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M2.P;const a=e%t;return a>=0?a:t+a}function F2(e,t){const{P:a}=M2;let r=e;for(;t-- >b2;)r*=r,r%=a;return r}function q2(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M2.P;if(e===b2||t<=b2)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let a=U2(e,t),r=t,l=b2,s=y2,n=y2,o=b2;for(;a!==b2;){const e=r/a,t=r%a,i=l-n*e,u=s-o*e;r=a,a=t,l=n,s=o,n=i,o=u}const i=r;if(i!==y2)throw new Error("invert: does not exist");return U2(l,t)}const X2=(e,t)=>(e+t/w2)/t,Y2=w2**BigInt(128);function G2(e){const{n:t}=M2,a=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-y2*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),l=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),s=a,n=X2(s*e,t),o=X2(-r*e,t);let i=U2(e-n*a-o*l,t),u=U2(-n*r-o*s,t);const c=i>Y2,d=u>Y2;if(c&&(i=t-i),d&&(u=t-u),i>Y2||u>Y2)throw new Error("splitScalarEndo: Endomorphism failed");return{k1neg:c,k1:i,k2neg:d,k2:u}}function Z2(e){const{n:t}=M2,a=8*e.length-256;let r=R2(e);return a>0&&(r>>=BigInt(a)),r>=t&&(r-=t),r}function K2(e){return b2<e&&e<M2.n}function J2(e){return b2<e&&e<M2.P}function Q2(e){let t;if("bigint"===typeof e)t=e;else if("number"===typeof e&&Number.isSafeInteger(e)&&e>0)t=BigInt(e);else if("string"===typeof e){if(64!==e.length)throw new Error("Expected 32 bytes of private key");t=H2(e)}else{if(!L2(e))throw new TypeError("Expected valid private key");if(32!==e.length)throw new Error("Expected 32 bytes of private key");t=R2(e)}if(!K2(t))throw new Error("Expected private key: 0 < key < n");return t}function $2(e){if(e instanceof T2)return e.assertValidity(),e;try{return T2.fromDER(e)}catch(t){return T2.fromCompact(e)}}j2.BASE._setWindowSize(8);"object"===typeof self&&"crypto"in self&&self.crypto;function e6(){let e=0,t=0;const a=new Array(arguments.length);for(let l=0;l<arguments.length;l++)a[l]=z1(l<0||arguments.length<=l?void 0:arguments[l]),e+=a[l].length;const r=new Uint8Array(e);for(let l=0;l<a.length;l++)r.set(a[l],t),t+=a[l].length;return r}function t6(e){return"number"===typeof e}function a6(e){return Object.keys(e)}function r6(e){for(let t=0;t<(arguments.length<=1?0:arguments.length-1);t++){const a=t+1<1||arguments.length<=t+1?void 0:arguments[t+1];if(a){const t=a6(a);for(let r=0;r<t.length;r++){const l=t[r];e[l]=a[l]}}}return e}function l6(e){return"boolean"===typeof e}const s6={isLe:!1,isNegative:!1};function n6(e){return!!e&&"object"===typeof e}function o6(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return e=>(n6(e)||T1(e))&&t.every((t=>T1(e[t])))}const i6=o6("toBigInt"),u6=o6("toBn");function c6(e){return ku.isBN(e)?e:e?b1(e)?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s6;if(!e||"0x"===e)return new ku(0);const{isLe:a,isNegative:r}=r6({isLe:!1,isNegative:!1},l6(t)?{isLe:t}:t),l=E1(e),s=new ku(l,16,a?"le":"be");return r?s.fromTwos(4*l.length):s}(e.toString()):function(e){return"bigint"===typeof e}(e)?new ku(e.toString()):u6(e)?e.toBn():i6(e)?new ku(e.toBigInt().toString()):new ku(e):new ku(0)}const d6={bitLength:-1,isLe:!0,isNegative:!1};function h6(e,t){return-1===t.bitLength?new Uint8Array:new Uint8Array(e)}function f6(e,t,a){let{isLe:r,isNegative:l}=a;const s=new Uint8Array(t),n=l?e.toTwos(8*t):e;return s.set(n.toArray(r?"le":"be",t),0),s}function p6(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d6,a=arguments.length>2?arguments[2]:void 0;const r=r6({bitLength:-1,isLe:!0,isNegative:!1},t6(t)?{bitLength:t,isLe:a}:t),l=c6(e),s=-1===r.bitLength?Math.ceil(l.bitLength()/8):Math.ceil((r.bitLength||0)/8);return e?f6(l,s,r):h6(s,r)}const g6={bitLength:256,isLe:!1};function m6(e){return[33,65].includes(e.length)&&(e=m2(function(e,t){if(65===e.length)return e.subarray(1);if(L1(33===e.length,"Invalid publicKey provided"),!_0||!t&&pv())return uv(e).subarray(1);const{x:a,y:r}=j2.fromHex(e);return e6(p6(a,g6),p6(r,g6))}(e))),e.slice(-20)}const v6={chars:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",coder:AH.Jq,ipfs:"z",type:"base58"},b6=function(e){let{chars:t,ipfs:a,type:r}=e;return(e,l)=>{L1(e&&"string"===typeof e,(()=>`Expected non-null, non-empty ${r} string input`)),a&&l&&L1(e[0]===a,(()=>`Expected ipfs-compatible ${r} to start with '${a}'`));for(let a=l?1:0;a<e.length;a++)L1(t.includes(e[a])||"="===e[a]&&(a===e.length-1||!t.includes(e[a+1])),(()=>`Invalid ${r} character "${e[a]}" (0x${e.charCodeAt(a).toString(16)}) at index ${a}`));return!0}}(v6),y6=function(e,t){let{coder:a,ipfs:r}=e;return(e,l)=>(t(e,l),a.decode(r&&l?e.substr(1):e))}(v6,b6),w6=function(e){let{coder:t,ipfs:a}=e;return(e,r)=>{const l=t.encode(z1(e));return a&&r?`${a}${l}`:l}}(v6),k6=(function(e){}(b6),new Uint8Array([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9,12,5,1,15,14,13,4,10,0,7,6,3,9,2,8,11,13,11,7,14,12,1,3,9,5,0,15,4,8,6,2,10,6,15,14,9,11,3,0,8,12,2,13,7,1,4,10,5,10,2,8,4,7,6,1,5,15,11,9,14,3,12,13,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3]));class x6 extends G1{constructor(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0,l=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0;if(super(),this.blockLen=e,this.outputLen=t,this.length=0,this.pos=0,this.finished=!1,this.destroyed=!1,Y1(e),Y1(t),Y1(r),t<0||t>r)throw new Error("Blake2: outputLen bigger than keyLen");if(void 0!==a.key&&(a.key.length<1||a.key.length>r))throw new Error(`Key should be up 1..${r} byte long or undefined`);if(void 0!==a.salt&&a.salt.length!==l)throw new Error(`Salt should be ${l} byte long or undefined`);if(void 0!==a.personalization&&a.personalization.length!==s)throw new Error(`Personalization should be ${s} byte long or undefined`);this.buffer32=q1(this.buffer=new Uint8Array(e))}update(e){if(this.destroyed)throw new Error("instance is destroyed");const{finished:t,blockLen:a,buffer:r,buffer32:l}=this;if(t)throw new Error("digest() was already called");const s=(e=X1(e)).length;for(let n=0;n<s;){this.pos===a&&(this.compress(l,0,!1),this.pos=0);const t=Math.min(a-this.pos,s-n),o=e.byteOffset+n;if(t!==a||o%4||!(n+t<s))r.set(e.subarray(n,n+t),this.pos),this.pos+=t,this.length+=t,n+=t;else{const t=new Uint32Array(e.buffer,o,Math.floor((s-n)/4));for(let e=0;n+a<s;e+=l.length,n+=a)this.length+=a,this.compress(t,e,!1)}}return this}digestInto(e){if(this.destroyed)throw new Error("instance is destroyed");if(!(e instanceof Uint8Array)||e.length<this.outputLen)throw new Error("_Blake2: Invalid output buffer");const{finished:t,pos:a,buffer32:r}=this;if(t)throw new Error("digest() was already called");this.finished=!0,this.buffer.subarray(a).fill(0),this.compress(r,0,!0);const l=q1(e);this.get().forEach(((e,t)=>l[t]=e))}digest(){const{buffer:e,outputLen:t}=this;this.digestInto(e);const a=e.slice(0,t);return this.destroy(),a}_cloneInto(e){const{buffer:t,length:a,finished:r,destroyed:l,outputLen:s,pos:n}=this;return e||(e=new this.constructor({dkLen:s})),e.set(...this.get()),e.length=a,e.finished=r,e.destroyed=l,e.outputLen=s,e.buffer.set(t),e.pos=n,e}}const C6=new Uint32Array([4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225]),M6=new Uint32Array(32);function E6(e,t,a,r,l,s){const n=l[s],o=l[s+1];let i=M6[2*e],u=M6[2*e+1],c=M6[2*t],d=M6[2*t+1],h=M6[2*a],f=M6[2*a+1],p=M6[2*r],g=M6[2*r+1],m=U1(i,c,n);var v;u=F1(m,u,d,o),i=0|m,({Dh:g,Dl:p}={Dh:g^u,Dl:p^i}),({Dh:g,Dl:p}={Dh:W1(0,p),Dl:(v=g,v)}),({h:f,l:h}=D1(f,h,g,p)),({Bh:d,Bl:c}={Bh:d^f,Bl:c^h}),({Bh:d,Bl:c}={Bh:B1(d,c,24),Bl:H1(d,c,24)}),M6[2*e]=i,M6[2*e+1]=u,M6[2*t]=c,M6[2*t+1]=d,M6[2*a]=h,M6[2*a+1]=f,M6[2*r]=p,M6[2*r+1]=g}function _6(e,t,a,r,l,s){const n=l[s],o=l[s+1];let i=M6[2*e],u=M6[2*e+1],c=M6[2*t],d=M6[2*t+1],h=M6[2*a],f=M6[2*a+1],p=M6[2*r],g=M6[2*r+1],m=U1(i,c,n);u=F1(m,u,d,o),i=0|m,({Dh:g,Dl:p}={Dh:g^u,Dl:p^i}),({Dh:g,Dl:p}={Dh:B1(g,p,16),Dl:H1(g,p,16)}),({h:f,l:h}=D1(f,h,g,p)),({Bh:d,Bl:c}={Bh:d^f,Bl:c^h}),({Bh:d,Bl:c}={Bh:I1(d,c,63),Bl:R1(d,c,63)}),M6[2*e]=i,M6[2*e+1]=u,M6[2*t]=c,M6[2*t+1]=d,M6[2*a]=h,M6[2*a+1]=f,M6[2*r]=p,M6[2*r+1]=g}class N6 extends x6{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(128,void 0===e.dkLen?64:e.dkLen,e,64,16,16),this.v0l=0|C6[0],this.v0h=0|C6[1],this.v1l=0|C6[2],this.v1h=0|C6[3],this.v2l=0|C6[4],this.v2h=0|C6[5],this.v3l=0|C6[6],this.v3h=0|C6[7],this.v4l=0|C6[8],this.v4h=0|C6[9],this.v5l=0|C6[10],this.v5h=0|C6[11],this.v6l=0|C6[12],this.v6h=0|C6[13],this.v7l=0|C6[14],this.v7h=0|C6[15];const t=e.key?e.key.length:0;if(this.v0l^=this.outputLen|t<<8|65536|1<<24,e.salt){const t=q1(X1(e.salt));this.v4l^=t[0],this.v4h^=t[1],this.v5l^=t[2],this.v5h^=t[3]}if(e.personalization){const t=q1(X1(e.personalization));this.v6l^=t[0],this.v6h^=t[1],this.v7l^=t[2],this.v7h^=t[3]}if(e.key){const t=new Uint8Array(this.blockLen);t.set(X1(e.key)),this.update(t)}}get(){let{v0l:e,v0h:t,v1l:a,v1h:r,v2l:l,v2h:s,v3l:n,v3h:o,v4l:i,v4h:u,v5l:c,v5h:d,v6l:h,v6h:f,v7l:p,v7h:g}=this;return[e,t,a,r,l,s,n,o,i,u,c,d,h,f,p,g]}set(e,t,a,r,l,s,n,o,i,u,c,d,h,f,p,g){this.v0l=0|e,this.v0h=0|t,this.v1l=0|a,this.v1h=0|r,this.v2l=0|l,this.v2h=0|s,this.v3l=0|n,this.v3h=0|o,this.v4l=0|i,this.v4h=0|u,this.v5l=0|c,this.v5h=0|d,this.v6l=0|h,this.v6h=0|f,this.v7l=0|p,this.v7h=0|g}compress(e,t,a){this.get().forEach(((e,t)=>M6[t]=e)),M6.set(C6,16);let{h:r,l:l}=V1(BigInt(this.length));M6[24]=C6[8]^l,M6[25]=C6[9]^r,a&&(M6[28]=~M6[28],M6[29]=~M6[29]);let s=0;const n=k6;for(let o=0;o<12;o++)E6(0,4,8,12,e,t+2*n[s++]),_6(0,4,8,12,e,t+2*n[s++]),E6(1,5,9,13,e,t+2*n[s++]),_6(1,5,9,13,e,t+2*n[s++]),E6(2,6,10,14,e,t+2*n[s++]),_6(2,6,10,14,e,t+2*n[s++]),E6(3,7,11,15,e,t+2*n[s++]),_6(3,7,11,15,e,t+2*n[s++]),E6(0,5,10,15,e,t+2*n[s++]),_6(0,5,10,15,e,t+2*n[s++]),E6(1,6,11,12,e,t+2*n[s++]),_6(1,6,11,12,e,t+2*n[s++]),E6(2,7,8,13,e,t+2*n[s++]),_6(2,7,8,13,e,t+2*n[s++]),E6(3,4,9,14,e,t+2*n[s++]),_6(3,4,9,14,e,t+2*n[s++]);this.v0l^=M6[0]^M6[16],this.v0h^=M6[1]^M6[17],this.v1l^=M6[2]^M6[18],this.v1h^=M6[3]^M6[19],this.v2l^=M6[4]^M6[20],this.v2h^=M6[5]^M6[21],this.v3l^=M6[6]^M6[22],this.v3h^=M6[7]^M6[23],this.v4l^=M6[8]^M6[24],this.v4h^=M6[9]^M6[25],this.v5l^=M6[10]^M6[26],this.v5h^=M6[11]^M6[27],this.v6l^=M6[12]^M6[28],this.v6h^=M6[13]^M6[29],this.v7l^=M6[14]^M6[30],this.v7h^=M6[15]^M6[31],M6.fill(0)}destroy(){this.destroyed=!0,this.buffer32.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const P6=Z1((e=>new N6(e)));function j6(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,a=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;const l=Math.ceil(t/8),s=z1(e);return!_0||!r&&pv()?cv(s,z1(a),l):P6(s,{dkLen:l,key:a||void 0})}p2(j6);const S6=S1("SS58PRE");function z6(e){return j6(e6(S6,e),512)}function T6(e){const t=64&e[0]?2:1,a=1===t?e[0]:(63&e[0])<<2|e[1]>>6|(63&e[1])<<8,r=[34+t,35+t].includes(e.length),l=e.length-(r?2:1),s=z6(e.subarray(0,l));return[0===(128&e[0])&&![46,47].includes(e[0])&&(r?e[e.length-2]===s[0]&&e[e.length-1]===s[1]:e[e.length-1]===s[0]),l,t,a]}const L6={allowedDecodedLengths:[1,2,4,8,32,33],allowedEncodedLengths:[3,4,6,10,35,36,37,38],allowedPrefix:Z0.map((function(e){let{prefix:t}=e;return t})),prefix:42};function A6(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;if(L1(e,"Invalid empty address passed"),g1(e)||b1(e))return z1(e);try{const r=y6(e);L1(L6.allowedEncodedLengths.includes(r.length),"Invalid decoded address length");const[l,s,n,o]=T6(r);return L1(t||l,"Invalid decoded address checksum"),L1([-1,o].includes(a),(()=>`Expected ss58Format ${a}, received ${o}`)),r.slice(n,s)}catch(r){throw new Error(`Decoding ${e}: ${r.message}`)}}const O6=["#ffe119","#4363d8","#f58231","#fabebe","#e6beff","#800000","#000075","#a9a9a9","#ffffff","#000000"];function V6(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function B6(e,t,a){const r=V6("circle");return r.setAttributeNS("","cx",`${t}`),r.setAttributeNS("","cy",`${a}`),r.setAttributeNS("","r",`${e}`),r}function H6(e,t,a,r){const l=a/2,s=360*e(),n=(5-r)/5*(a/2)+a/8*e(),o=a/4*(e()+(r+1)/5),i=B6(n,o*Math.sin(s)+l,o*Math.cos(s)+l);return i.setAttributeNS("","fill",t),i}function I6(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"svg",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const l=V6(t);return l.setAttributeNS("","x",`${a}`),l.setAttributeNS("","y",`${r}`),l.setAttributeNS("","width",`${e}`),l.setAttributeNS("","height",`${e}`),l}var R6=__webpack_require__(3861);function W6(e){const t=30*e()-15,a=O6.map((e=>R6(e).rotate(t)));return function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;const r=Math.floor(a.length*e());return a.splice(r,1)[0].alpha(t).string()}}function D6(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"white",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const l=document.createElement("div"),s=Object.assign({background:t,borderRadius:e/2+"px",display:"inline-block",height:`${e}px`,margin:"0px",overflow:"hidden",padding:"0px",width:`${e}px`},r);return l.className=a,l.style.background=t,Object.keys(s).forEach((e=>{l.style[e]=s[e]})),l}function U6(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Uint8Array(32);const t=g1(e)?e:S1(e);let a=t[Math.floor(t.length/2)]%t.length-1;const r=()=>(a+=1,a===t.length&&(a=0),t[a]);return()=>(256*r()+r())/65536}function F6(e){let{address:t,className:a="",size:r,style:l}=e;const s=(0,V.useCallback)((e=>{e&&e.appendChild(function(e,t){let{size:a=256}=t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3?arguments[3]:void 0;const s=U6(e),n=W6(s),o=D6(a,"white",r,l),i=D6(a,n()),u=I6(a);o.appendChild(i),i.appendChild(u);for(let c=0;c<5;c++){const e=H6(s,n(),a,c);u.appendChild(e)}return o}(t,{isAlternative:!1,size:r}))}),[t,r]);return(0,_u.jsx)("div",{className:a,ref:s,style:l})}const q6=V.memo(F6);function X6(e){let{className:t="",size:a,style:r}=e;return(0,_u.jsx)("svg",{className:t,height:a,style:r,viewBox:"0 0 64 64",width:a})}const Y6=V.memo(X6);var G6=__webpack_require__(77883);const Z6=V.memo((0,C.default)((function(e){let{address:t,className:a="",style:r}=e;const l=(0,V.useMemo)((()=>G6(t)),[t]);return(0,_u.jsx)("img",{className:a,src:l,style:r})})).withConfig({displayName:"Ethereum",componentId:"sc-osop9v-0"})((e=>{let{size:t}=e;return`\n  display: block;\n  height: ${t}px;\n  width: ${t}px;\n`})));function K6(e,t,a){return parseInt(e.substr(t,a),16)}function J6(e){return(e|=0)<0?"00":e<16?"0"+e.toString(16):e<256?e.toString(16):"ff"}function Q6(e,t,a){return J6(255*((a=a<0?a+6:a>6?a-6:a)<1?e+(t-e)*a:a<3?t:a<4?e+(t-e)*(4-a):e))}function $6(e){if(/^#[0-9a-f]{3,8}$/i.test(e)){let t;const a=e.length;if(a<6){const a=e[1],r=e[2],l=e[3],s=e[4]||"";t="#"+a+a+r+r+l+l+s+s}return(7==a||a>8)&&(t=e),t}}function e4(e,t,a){const r=[.55,.5,.5,.46,.6,.55,.55][6*e+.5|0];return function(e,t,a){let r;if(0==t){const e=J6(255*a);r=e+e+e}else{const l=a<=.5?a*(t+1):a+t-a*t,s=2*a-l;r=Q6(s,l,6*e+2)+Q6(s,l,6*e)+Q6(s,l,6*e-2)}return"#"+r}(e,t,a=a<.5?a*r*2:r+(a-.5)*(1-r)*2)}const t4="undefined"!==typeof window?window:"undefined"!==typeof self?self:"undefined"!==typeof global?global:{},a4="jdenticon_config",r4="config";var l4={};class s4{constructor(e,t){this.x=e,this.y=t}}class n4{constructor(e,t,a,r){this.q=e,this.t=t,this.H=a,this.Y=r}I(e,t,a,r){const l=this.q+this.H,s=this.t+this.H,n=this.Y;return 1===n?new s4(l-t-(r||0),this.t+e):2===n?new s4(l-e-(a||0),s-t-(r||0)):3===n?new s4(this.q+t,s-e-(a||0)):new s4(this.q+e,this.t+t)}}const o4=new n4(0,0,0,0);class i4{constructor(e){this.J=e,this.u=o4}g(e,t){const a=t?-2:2,r=[];for(let l=t?e.length-2:0;l<e.length&&l>=0;l+=a)r.push(this.u.I(e[l],e[l+1]));this.J.g(r)}h(e,t,a,r){const l=this.u.I(e,t,a,a);this.J.h(l,a,r)}i(e,t,a,r,l){this.g([e,t,e+a,t,e+a,t+r,e,t+r],l)}j(e,t,a,r,l,s){const n=[e+a,t,e+a,t+r,e,t+r,e,t];n.splice((l||0)%4*2,2),this.g(n,s)}K(e,t,a,r,l){this.g([e+a/2,t,e+a,t+r/2,e+a/2,t+r,e,t+r/2],l)}}function u4(e,t,a,r){let l,s,n,o,i,u;(e%=14)?1==e?(n=0|.5*a,o=0|.8*a,t.j(a-n,0,n,o,2)):2==e?(n=0|a/3,t.i(n,n,a-n,a-n)):3==e?(i=.1*a,u=a<6?1:a<8?2:0|.25*a,i=i>1?0|i:i>.5?1:i,t.i(u,u,a-i-u,a-i-u)):4==e?(s=0|.15*a,n=0|.5*a,t.h(a-n-s,a-n-s,n)):5==e?(i=.1*a,u=4*i,u>3&&(u|=0),t.i(0,0,a,a),t.g([u,u,a-i,u,u+(a-u-i)/2,a-i],!0)):6==e?t.g([0,0,a,0,a,.7*a,.4*a,.4*a,.7*a,a,0,a]):7==e?t.j(a/2,a/2,a/2,a/2,3):8==e?(t.i(0,0,a,a/2),t.i(0,a/2,a/2,a/2),t.j(a/2,a/2,a/2,a/2,1)):9==e?(i=.14*a,u=a<4?1:a<6?2:0|.35*a,i=a<8?i:0|i,t.i(0,0,a,a),t.i(u,u,a-u-i,a-u-i,!0)):10==e?(i=.12*a,u=3*i,t.i(0,0,a,a),t.h(u,u,a-i-u,!0)):11==e?t.j(a/2,a/2,a/2,a/2,3):12==e?(s=.25*a,t.i(0,0,a,a),t.K(s,s,a-s,a-s,!0)):!r&&(s=.4*a,n=1.2*a,t.h(s,s,n)):(l=.42*a,t.g([0,0,a,0,a,a-2*l,a-l,a,0,a]))}function c4(e,t,a){let r;(e%=4)?1==e?t.j(0,a/2,a,a/2,0):2==e?t.K(0,0,a,a):(r=a/6,t.h(r,r,a-2*r)):t.j(0,0,a,a,0)}function d4(e,t,a){const r=function(e,t){const a="object"==typeof e&&e||l4[r4]||t4[a4]||{},r=a.lightness||{},l=a.saturation||{},s="color"in l?l.color:l,n=l.grayscale,o=a.backColor,i=a.padding;function u(e,t){let a=r[e];return a&&a.length>1||(a=t),function(e){return(e=a[0]+e*(a[1]-a[0]))<0?0:e>1?1:e}}return{W:function(e){const t=a.hues;let r;return t&&t.length>0&&(r=t[0|.999*e*t.length]),"number"==typeof r?(r/360%1+1)%1:e},o:"number"==typeof s?s:.5,D:"number"==typeof n?n:0,p:u("color",[.4,.8]),F:u("grayscale",[.3,.9]),G:$6(o),X:"number"==typeof e?e:"number"==typeof i?i:t}}(a,.08);r.G&&e.m(r.G);let l=e.k;const s=.5+l*r.X|0;l-=2*s;const n=new i4(e),o=0|l/4,i=0|s+l/2-2*o,u=0|s+l/2-2*o;function c(a,r,l,s,c){const f=K6(t,l,1);let p=s?K6(t,s,1):0;e.L(d[h[a]]);for(let e=0;e<c.length;e++)n.u=new n4(i+c[e][0]*o,u+c[e][1]*o,o,p++%4),r(f,n,o,e);e.M()}const d=function(e,t){return[e4(e=t.W(e),t.D,t.F(0)),e4(e,t.o,t.p(.5)),e4(e,t.D,t.F(1)),e4(e,t.o,t.p(1)),e4(e,t.o,t.p(0))]}(K6(t,-7)/268435455,r),h=[];let f;function p(e){if(e.indexOf(f)>=0)for(let t=0;t<e.length;t++)if(h.indexOf(e[t])>=0)return!0}for(let g=0;g<3;g++)f=K6(t,8+g,1)%d.length,(p([0,4])||p([2,3]))&&(f=1),h.push(f);c(0,c4,2,3,[[1,0],[2,0],[2,3],[1,3],[0,1],[3,1],[3,2],[0,2]]),c(1,c4,4,5,[[0,0],[3,0],[3,3],[0,3]]),c(2,u4,1,null,[[1,1],[2,1],[2,2],[1,2]]),e.finish()}function h4(e){return/^[0-9a-f]{11,}$/i.test(e)&&e}function f4(e){return function(e){var t,a=0,r=0,l=encodeURI(e)+"%80",s=[],n=[],o=1732584193,i=4023233417,u=~o,c=~i,d=3285377520,h=[o,i,u,c,d],f=0,p="";function g(e,t){return e<<t|e>>>32-t}for(;a<l.length;r++)s[r>>2]=s[r>>2]|("%"==l[a]?parseInt(l.substring(a+1,a+=3),16):l.charCodeAt(a++))<<8*(3-(3&r));for(s[(t=16*(1+(r+7>>6)))-1]=8*r-8;f<t;f+=16){for(a=0;a<80;a++)r=g(o,5)+d+(a<20?1518500249+(i&u^~i&c):a<40?1859775393+(i^u^c):a<60?2400959708+(i&u^i&c^u&c):3395469782+(i^u^c))+(n[a]=a<16?0|s[f+a]:g(n[a-3]^n[a-8]^n[a-14]^n[a-16],1)),d=c,c=u,u=g(i,30),i=o,o=r;h[0]=o=h[0]+o|0,h[1]=i=h[1]+i|0,h[2]=u=h[2]+u|0,h[3]=c=h[3]+c|0,h[4]=d=h[4]+d|0}for(a=0;a<40;a++)p+=(h[a>>3]>>>4*(7-(7&a))&15).toString(16);return p}(null==e?"":""+e)}function p4(e){return(10*e+.5|0)/10}class g4{constructor(){this.v=""}g(e){let t="";for(let a=0;a<e.length;a++)t+=(a?"L":"M")+p4(e[a].x)+" "+p4(e[a].y);this.v+=t+"Z"}h(e,t,a){const r=a?0:1,l=p4(t/2),s=p4(t),n="a"+l+","+l+" 0 1,"+r+" ";this.v+="M"+p4(e.x)+" "+p4(e.y+t/2)+n+s+",0"+n+-s+",0"}}class m4{constructor(e){this.A,this.B={},this.N=e,this.k=e.k}m(e){const t=/^(#......)(..)?/.exec(e),a=t[2]?K6(t[2],0)/255:1;this.N.m(t[1],a)}L(e){this.A=this.B[e]||(this.B[e]=new g4)}M(){}g(e){this.A.g(e)}h(e,t,a){this.A.h(e,t,a)}finish(){const e=this.B;for(let t in e)e.hasOwnProperty(t)&&this.N.O(t,e[t].v)}}const v4="http://www.w3.org/2000/svg";class b4{constructor(e){this.k=e,this.C='<svg xmlns="'+v4+'" width="'+e+'" height="'+e+'" viewBox="0 0 '+e+" "+e+'">'}m(e,t){t&&(this.C+='<rect width="100%" height="100%" fill="'+e+'" opacity="'+t.toFixed(2)+'"/>')}O(e,t){this.C+='<path fill="'+e+'" d="'+t+'"/>'}toString(){return this.C+"</svg>"}}function y4(e,t,a){const r=new b4(t);return d4(new m4(r),h4(e)||f4(e),a),r.toString()}"undefined"!==typeof document&&document.querySelectorAll.bind(document);function w4(e){let{className:t="",publicKey:a,size:r,style:l}=e;return(0,_u.jsx)("div",{className:t,dangerouslySetInnerHTML:{__html:y4(a.substr(2),r)},style:l})}const k4=V.memo(w4),x4=e=>j6(e,512),C4=32,M4=x4(new Uint8Array(32)),E4={target:{colors:[0,28,0,0,28,0,0,28,0,0,28,0,0,28,0,0,28,0,1],freq:1},cube:{colors:[0,1,3,2,4,3,0,1,3,2,4,3,0,1,3,2,4,3,5],freq:20},quazar:{colors:[1,2,3,1,2,4,5,5,4,1,2,3,1,2,4,5,5,4,0],freq:16},flower:{colors:[0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,3],freq:32},cyclic:{colors:[0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,6],freq:32},vmirror:{colors:[0,1,2,3,4,5,3,4,2,0,1,6,7,8,9,7,8,6,10],freq:128},hmirror:{colors:[0,1,2,3,4,5,6,7,8,9,10,8,6,7,5,3,4,2,11],freq:128}},_4={cx:C4,cy:C4,fill:"#eee",r:C4};function N4(e){const{r:t,r3o4:a,ro2:r,ro4:l,rroot3o2:s,rroot3o4:n}=function(e){const t=e?20:24;return{r:t,r3o4:3*t/4,ro2:t/2,ro4:t/4,rroot3o2:t*Math.sqrt(3)/2,rroot3o4:t*Math.sqrt(3)/4}}(e);return[[C4,C4-t],[C4,C4-r],[C4-n,C4-a],[C4-s,C4-r],[C4-n,C4-l],[C4-s,C4],[C4-s,C4+r],[C4-n,C4+l],[C4-n,C4+a],[C4,C4+t],[C4,C4+r],[C4+n,C4+a],[C4+s,C4+r],[C4+n,C4+l],[C4+s,C4],[C4+s,C4-r],[C4+n,C4-l],[C4+n,C4-a],[C4,C4]]}function P4(e){const t=Object.values(E4).map((e=>e.freq)).reduce(((e,t)=>e+t)),a=function(e){return x4(A6(e)).map(((e,t)=>(e+256-M4[t])%256))}(e),r=Math.floor((a[30]+256*a[31])%t),l=a[28]%6*3,s=Math.floor(70*a[29]/256+26)%80+30,n=function(e){let t=0;const a=Object.values(E4).find((a=>(t+=a.freq,e<t)));if(!a)throw new Error("Unable to find schema");return a}(r),o=Array.from(a).map(((e,t)=>{const a=(e+t%28*58)%256;if(0===a)return"#444";if(255===a)return"transparent";const r=Math.floor(a%64*360/64),l=[53,15,35,75][Math.floor(a/64)];return`hsl(${r}, ${s}%, ${l}%)`}));return n.colors.map(((e,t)=>o[n.colors[t<18?(t+l)%18:18]]))}function j4(e,t){let{isAlternative:a}=t;const r=P4(e);return[_4].concat(N4(a).map(((e,t)=>{let[a,l]=e;return{cx:a,cy:l,fill:r[t],r:5}})))}function S4(e,t){let{cx:a,cy:r,fill:l,r:s}=e;return(0,_u.jsx)("circle",{cx:a,cy:r,fill:l,r:s},t)}function z4(e){let{address:t,className:a="",isAlternative:r=!1,size:l,style:s}=e;return(0,_u.jsx)("svg",{className:a,height:l,id:t,name:t,style:s,viewBox:"0 0 64 64",width:l,children:j4(t,{isAlternative:r}).map(S4)})}const T4=q6,L4=64,A4={beachball:q6,empty:Y6,ethereum:Z6,jdenticon:k4,polkadot:V.memo(z4),substrate:k4},O4=C.default.div.withConfig({displayName:"Identicon__Wrapper",componentId:"sc-1gm2vek-0"})(["cursor:copy;display:inline-block;line-height:0;> .container{position:relative;> div,> svg{position:relative;}&.highlight:before{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:50%;box-shadow:0 0 5px 2px #aaa;content:'';}}"]);class V4 extends V.PureComponent{constructor(){super(...arguments),n_(this,"state",{address:"",publicKey:"0x"}),n_(this,"onCopy",(()=>{const{onCopy:e}=this.props,{address:t}=this.state;t&&e&&e(t)}))}static setDefaultPrefix(e){V4.prefix=e}static getDerivedStateFromProps(e,t){let{prefix:a=V4.prefix,theme:r,value:l}=e;if("ethereum"===r){return{address:g1(l)?function(e){if(!e)return"0x";const t=z1(e);L1([20,32,33,65].includes(t.length),"Invalid address or publicKey passed");const a=M1(m6(t),-1,!1),r=M1(m2(a),-1,!1);let l="";for(let s=0;s<40;s++)l=`${l}${parseInt(r[s],16)>7?a[s].toUpperCase():a[s]}`;return`0x${l}`}(l):l||"",publicKey:""}}try{const e=g1(l)||b1(l)?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:L6.prefix;const a=A6(e);L1(t>=0&&t<=16383&&![46,47].includes(t),"Out of range ss58Format specified"),L1(L6.allowedDecodedLengths.includes(a.length),(()=>`Expected a valid key to convert, with length ${L6.allowedDecodedLengths.join(", ")}`));const r=e6(t<64?[t]:[(252&t)>>2|64,t>>8|(3&t)<<6],a);return w6(e6(r,z6(r).subarray(0,[32,33].includes(a.length)?2:1)))}(l,a):l||"",r=M1(A6(e,!1,a));return e===t.address?null:{address:e,publicKey:r}}catch(s){return{address:"",publicKey:"0x"}}}render(){const{address:e}=this.state,t=this.getWrapped(this.state,this.props);return e?(0,_u.jsx)(x0,{onCopy:this.onCopy,text:e,children:t}):t}getWrapped(e,t){let{address:a,publicKey:r}=e,{Custom:l}=t;const{className:s="",isAlternative:n,isHighlight:o,size:i=L4,style:u,theme:c=p1.icon}=this.props,d=a?l||A4["default"===c?R0:c]||T4:Y6;return(0,_u.jsx)(O4,{className:`ui--IdentityIcon  ${s}`,style:u,children:(0,_u.jsx)(d,{address:a,className:o?"highlight":"",isAlternative:n,publicKey:r,size:i})},a)}}function B4(e){return(0,_u.jsx)(V4,{...e})}n_(V4,"prefix",void 0);const H4=V.memo(B4),I4=C.default.div`
  svg > circle:first-child {
    fill: ${ai};
  }
`,R4=e=>{const{value:t,size:a}=e;return(0,_u.jsx)(I4,{children:(0,_u.jsx)(H4,{value:t,size:a,theme:"polkadot",style:{cursor:"default"}})})},W4=R4,D4=C.default.div`
  padding: 0 1.25rem 0rem 1.25rem;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: column wrap;

  .account {
    width: 100%;
    height: 27px;
    display: flex; 
    flex-flow: row wrap;
    align-items: center;
    padding: 0;
    margin-top: 1.25rem;

    button {
      color: ${qo};
    }

    .icon {
      position: relative;
      top: 0.1rem;
    }
    h4 {
      margin: 0rem 0.5rem;
      padding: 0;

      > .sep {
        border-right: 1px solid ${hi};
        margin: 0 0.7rem;
        width: 1px;
        height: 1.25rem;
      }
      > .addr {
        opacity: 0.75;
      }
    }

    > *:last-child {
      flex-grow: 1;
      display: flex;
      flex-flow: row-reverse wrap;

      > .copy {
        color: ${Xo};
        opacity: 0.5;
        cursor: pointer;
        transition: opacity 0.1s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`,U4=C.default.div`
  border-bottom: 1px solid ${hi};
  margin-top: 0.8rem;
  width: 100%;
  height: 1px;
`;var F4={prefix:"far",iconName:"arrow-alt-circle-up",icon:[512,512,[],"f35b","M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"]},q4={prefix:"far",iconName:"check-circle",icon:[512,512,[],"f058","M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"]},X4={prefix:"far",iconName:"circle",icon:[512,512,[],"f111","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"]},Y4={prefix:"far",iconName:"copy",icon:[448,512,[],"f0c5","M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"]},G4={prefix:"far",iconName:"flag",icon:[512,512,[],"f024","M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z"]},Z4=__webpack_require__(78029);const K4=V.createContext({addNotification:e=>{},removeNotification:e=>{},notifications:[]}),J4=()=>V.useContext(K4),Q4=()=>{const{addNotification:e}=J4(),{activeAccount:t,getAccount:a}=JU(),r=a(t);let l={};return null!==r&&(l={title:"Address Copied to Clipboard",subtitle:r.address}),(0,_u.jsxs)(D4,{children:[(0,_u.jsxs)("div",{className:"account",children:[null!==r&&(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsx)("div",{className:"icon",children:(0,_u.jsx)(R4,{value:r.address,size:"1.6rem"})}),(0,_u.jsxs)("h4",{children:[tV(r.address),(0,_u.jsx)("div",{className:"sep"})," ",(0,_u.jsx)("span",{className:"addr",children:r.meta.name})]}),(0,_u.jsx)("div",{children:(0,_u.jsx)(co.div,{className:"copy",whileHover:{scale:1.02},whileTap:{scale:.97},children:(0,_u.jsx)("button",{onClick:()=>e(l),children:(0,_u.jsx)(Z4.CopyToClipboard,{text:r.address,children:(0,_u.jsx)(f$,{icon:Y4,transform:"grow-1"})})})})})]}),null===r&&(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsx)("h4",{style:{marginLeft:0},children:"Account Not Connected"}),(0,_u.jsx)("div",{})]})]}),(0,_u.jsx)(U4,{})]})};var $4=__webpack_require__(46066);AZ.register(DZ,MK);const e3=e=>{let{value:t,value2:a}=e,r=!t&&!t;r&&(t=1,a=0);const{mode:l}=vJ();let s=r?Wo.buttons.toggle.background[l]:[Wo.text.secondary[l],Wo.transparent[l]],n=r?Wo.buttons.toggle.background[l]:Wo.transparent[l];const o={borderColor:s,hoverBorderColor:s,backgroundColor:n,hoverBackgroundColor:n,responsive:!0,maintainAspectRatio:!1,spacing:0,plugins:{legend:{display:!1},tooltip:{enabled:!1}}},i={datasets:[{data:[t,a],backgroundColor:n,borderWidth:1.25}]};return(0,_u.jsx)("div",{className:"graph",style:{width:36,height:36},children:(0,_u.jsx)(uJ,{options:o,data:i})})},t3=e=>{var t,a;const{label:r,value:l,value2:s,total:n,unit:o,tooltip:i,assistant:u}=e;let c=void 0!==u,d=null!==(t=null===u||void 0===u?void 0:u.page)&&void 0!==t?t:"",h=null!==(a=null===u||void 0===u?void 0:u.key)&&void 0!==a?a:"",f=!(0===l&&0!==n),p=!(void 0===n||!n);return(0,_u.jsx)(l3,{children:(0,_u.jsxs)("div",{className:"content chart",children:[(0,_u.jsxs)("div",{className:"chart",children:[(0,_u.jsx)(e3,{value:l,value2:s}),i&&(0,_u.jsx)("div",{className:"tooltip",children:(0,_u.jsx)("p",{children:i})})]}),(0,_u.jsxs)("div",{className:"labels",children:[(0,_u.jsx)("h2",{children:f?(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsx)($4.Z,{ease:"quintInOut",precision:2,speed:250,trail:!1,value:l,useLocaleString:!0}),o&&(0,_u.jsxs)(_u.Fragment,{children:["\xa0",o]}),p&&(0,_u.jsxs)("span",{className:"total",children:["/"," ",(0,_u.jsx)($4.Z,{ease:"quintInOut",precision:2,speed:250,trail:!1,value:n,useLocaleString:!0}),o&&(0,_u.jsxs)(_u.Fragment,{children:["\xa0",o]})]})]}):(0,_u.jsx)(_u.Fragment,{children:"0"})}),(0,_u.jsxs)("h4",{children:[r,c&&(0,_u.jsx)(g0,{page:d,title:h})]})]})]})})},a3=e=>{var t,a,r;const{label:l,value:s,unit:n,assistant:o}=e;let i=void 0!==o,u=null!==(t=null===o||void 0===o?void 0:o.page)&&void 0!==t?t:"",c=null!==(a=null===o||void 0===o?void 0:o.key)&&void 0!==a?a:"",d=null!==(r=e.currency)&&void 0!==r?r:"";return(0,_u.jsx)(l3,{children:(0,_u.jsx)("div",{className:"content chart",children:(0,_u.jsxs)("div",{className:"labels",children:[(0,_u.jsxs)("h2",{children:[(0,_u.jsx)($4.Z,{ease:"quintInOut",precision:2,speed:250,trail:!1,value:s,useLocaleString:!0,currency:d}),n&&(0,_u.jsxs)(_u.Fragment,{children:["\xa0",n]})]}),(0,_u.jsxs)("h4",{children:[l,i&&(0,_u.jsx)(g0,{page:u,title:c})]})]})})})},r3=e=>{var t,a;const{label:r,value:l,assistant:s}=e;let n=void 0!==s,o=null!==(t=null===s||void 0===s?void 0:s.page)&&void 0!==t?t:"",i=null!==(a=null===s||void 0===s?void 0:s.key)&&void 0!==a?a:"";return(0,_u.jsx)(l3,{children:(0,_u.jsx)("div",{className:"content chart",children:(0,_u.jsxs)("div",{className:"labels",children:[(0,_u.jsx)("h1",{children:l}),(0,_u.jsxs)("h4",{children:[r,n&&(0,_u.jsx)(g0,{page:o,title:i})]})]})})})},l3=e=>{let{children:t}=e;return(0,_u.jsx)(Eu,{whileHover:{scale:1.02},transition:{duration:.5,type:"spring",bounce:.4},children:t})},s3=e=>{let{format:t,params:a}=e;switch(t){case"chart-pie":return(0,_u.jsx)(t3,{...a});case"number":return(0,_u.jsx)(a3,{...a});case"text":return(0,_u.jsx)(r3,{...a});default:return null}},n3=()=>{const{network:e,consts:t}=JO(),{units:a}=e,{maxElectingVoters:r}=t,{metrics:l}=eV(),{totalIssuance:s}=l,{activeAccount:n}=JU(),{staking:o,eraStakers:i}=oF(),{payouts:u}=b0(),{totalNominators:c,maxNominatorsCount:d,lastTotalStake:h}=o,{activeNominators:f}=i;let p=0;s.gt(new(xu())(0))&&(p=h.div(s.div(new(xu())(100))).toNumber());let g=0;d.gt(new(xu())(0))&&(g=c.div(d.div(new(xu())(100))).toNumber());let m=0;r>0&&(m=f/new(xu())(r).div(new(xu())(100)).toNumber());let v=h.div(new(xu())(10**a)),b=s.div(new(xu())(10**a));const y=[{format:"chart-pie",params:{label:"Supply Staked",value:v.toNumber(),value2:b.sub(v).toNumber(),unit:e.unit,tooltip:`${p.toFixed(2)}%`,assistant:{page:"overview",key:"Supply Staked"}}},{format:"chart-pie",params:{label:"Total Nominators",value:c.toNumber(),value2:d.sub(c).toNumber(),total:d,unit:"",tooltip:`${g.toFixed(2)}%`,assistant:{page:"overview",key:"Nominators"}}},{format:"chart-pie",params:{label:"Active Nominators",value:f,value2:r-f,total:r,unit:"",tooltip:`${m.toFixed(2)}%`,assistant:{page:"overview",key:"Active Nominators"}}}];let w=null;if(u.length>0){let e=u[u.length-1];w={amount:rV(e.amount,a),block_timestamp:e.block_timestamp+""}}let k=u.length;k=k<0?0:k;let x=k-10;return x=x<0?0:x,(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsx)(k0,{title:"What's Happening"}),(0,_u.jsx)(Nu,{children:y.map(((e,t)=>(0,V.createElement)(s3,{...e,key:t})))}),(0,_u.jsxs)(Mi,{noVerticalSpacer:!0,children:[(0,_u.jsx)(uF,{children:(0,_u.jsxs)(dF,{flex:!0,children:[(0,_u.jsx)(Q4,{}),(0,_u.jsx)(Q$,{})]})}),(0,_u.jsx)(iF,{paddingLeft:!0,children:(0,_u.jsxs)(dF,{style:{minHeight:430},flex:!0,children:[(0,_u.jsx)(w0,{}),(0,_u.jsxs)("div",{className:"head",children:[(0,_u.jsx)("h4",{children:"Recent Payouts"}),(0,_u.jsxs)("h2",{children:[null===w?0:w.amount," ",e.unit,"\xa0",(0,_u.jsx)("span",{className:"fiat",children:null===w?"":kJ().unix(w.block_timestamp).fromNow()})]})]}),(0,_u.jsx)(K$,{account:n,payouts:u.slice(x,k)})]})})]}),(0,_u.jsx)(Mi,{noVerticalSpacer:!0,children:(0,_u.jsx)(m0,{})})]})},o3=C.default.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;

  h3 {
    margin-bottom: 0;
  }
`,i3=(C.default.div`
  margin-bottom: ${e=>!0===e.last?"none":"1rem"};
  display: flex;
  flex-flow: row wrap;
  h4 {
    color: ${Xo};
  }
`,C.default.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 0 0.25rem;

  > section {
    color: ${Xo};
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  > section:last-child {
    flex: 1;
    justify-content: flex-end;

    .progress {
      color: ${Xo};
      opacity: 0.5;
    }

    .complete {
      margin: 0;
      color: ${Uo};
    }

    span {
      margin-right: 1rem;
    }
  }

  h2 {
    margin: 0;
    padding: 0.3rem 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;

    .assistant-icon {
      margin-left: 0.6rem;
    }
  }
`),u3=C.default.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0.25rem;
  margin-top: 1rem;
`,c3=(C.default.div`
  flex: 1;
  display: flex;
  padding-right: 0.5rem;

  &:last-child {
      padding-right: 0;
    }

  > div {
    flex: 1;
    background: white;
    border-radius: 0.75rem;
    margin-right: 1rem;
    padding: 0 1rem;
  }
`,C.default.div`
  width: 100%;
  height: 1px;
  margin: 0.75rem 0;
`),d3=C.default.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
`,h3=C.default.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  padding: 0 0.25rem 0.5rem 0.25rem;
  flex: 1;
  border-bottom: 1px solid ${hi};

  h3 {
    margin: 0;
  }
  
  > div {
    display: flex; 
    flex-flow: row nowrap;
    align-items: center;
  }

  > div:first-child {
    justify-content: flex-start;
  }

  > div:last-child {
    justify-content: flex-end;
    flex: 1;    

    button {
      font-size: 1.1rem;
      margin-left: 0.4rem;
      opacity: 0.6;
      transition: all 0.2s;
      color: ${Xo};

      &:hover {
        opacity: 0.9
      }
    }
  }
`,f3=C.default.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.75rem 0.5rem;

  h4 {
    margin: 0;
  }
  
  > div:first-child {
    display: flex;
    justify-content: flex-start;
    flex: 1;
  }
  > div:last-child {
    display: flex;
    justify-content: flex-end;

    button {
      margin-left: 0.5rem;
      &.next {
        color: ${e=>e.next?"rgb(211, 48, 121)":Xo};
        cursor: ${e=>e.next?"pointer":"default"};
      }
      &.prev {
        color: ${e=>e.prev?"rgb(211, 48, 121)":Xo};
        cursor: ${e=>e.prev?"pointer":"default"};
      }
    }
  }
`,p3=C.default.div`
  margin-top: 1rem;
  width: 100%;

  .transition {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;

    > .item {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      overflow: hidden;

      &.row {
        flex-basis: 100%;
      }

      &.col {
        flex-grow: 1;
        flex-basis: 100%;
        @media(min-width: 650px) {
          flex-basis: 50%;
          max-width: 50%;
        }
        @media(min-width: 1250px) {
          flex-basis: ${e=>e.flexBasisLarge};
          max-width: ${e=>e.flexBasisLarge};
        }
      }
    }
  }
`,g3=(0,C.default)(co.div)`
  padding: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;

  > div {
    padding: 0.75rem 0.6rem;
    flex: 1;
    background: ${ei};
    border-radius: 0.75rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    max-width: 100%;

    .identity {
      position: relative;
      display: flex;
      margin-left: 0.75rem;
      margin-right: 0.5rem;
      flex-flow: row wrap;
      align-items: center;
      align-content: center;
      overflow: hidden;
      flex: 1;
      
      h4 {
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .labels {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
      align-items: center;
      flex-grow: 1;

      label {
        margin-left: 0.35rem;
        color: #aaa;

        &.warning {
          color: #d2545d;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
        }
        button {
          color: #aaa;
          &:hover {
            color: #666;
          }
          &.active {
          color: rgba(211, 48, 121, 0.85);
        }
        }
      }
    }

    svg { margin: 0; }
  }
`,m3=e=>{var t,a,r,l;const{consts:s,network:n}=JO(),{openModalWith:o}=pV(),{addNotification:i}=J4(),{favourites:u,addFavourite:c,removeFavourite:d}=pF(),{initial:h,validator:f,synced:p,identity:g,superIdentity:m,stake:v,toggleFavourites:b}=e;let{address:y,prefs:w}=f,k=((e,t)=>{var a,r,l,s,n,o,i,u,c,d,h;let f=null!==(a=null===e||void 0===e||null===(r=e.info)||void 0===r||null===(l=r.display)||void 0===l?void 0:l.Raw)&&void 0!==a?a:null;if(f=null===f?null!==(s=null===e||void 0===e||null===(n=e.info)||void 0===n?void 0:n.legal.Raw)&&void 0!==s?s:null:f,null!==f)return f;let p=null!==(o=null===t||void 0===t?void 0:t.identity)&&void 0!==o?o:null;return f=null!==(i=null===p||void 0===p||null===(u=p.info)||void 0===u||null===(c=u.display)||void 0===c?void 0:c.Raw)&&void 0!==i?i:null,f=null===f?null!==(d=null===p||void 0===p||null===(h=p.info)||void 0===h?void 0:h.legal.Raw)&&void 0!==d?d:null:f,f})(g,m),x=null!==(t=null===w||void 0===w?void 0:w.commission)&&void 0!==t?t:null,C=null!==(a=null===w||void 0===w?void 0:w.blocked)&&void 0!==a?a:null,M=null!==(r=null===v||void 0===v?void 0:v.total_nominations)&&void 0!==r?r:0,E=null!==(l=null===v||void 0===v?void 0:v.lowest)&&void 0!==l?l:0,_=null==y?{}:{title:"Address Copied to Clipboard",subtitle:y},N=u.includes(y)?{title:"Favourite Validator Removed",subtitle:y}:{title:"Favourite Validator Added",subtitle:y};return(0,_u.jsx)(g3,{children:(0,_u.jsxs)("div",{children:[(0,_u.jsx)(W4,{value:y,size:26}),p.identities&&(0,_u.jsxs)(_u.Fragment,{children:[null!==k&&(0,_u.jsx)(_u.Fragment,{children:h?(0,_u.jsx)(co.div,{className:"identity",initial:{opacity:.5},animate:{opacity:1},transition:{duration:.3},children:(0,_u.jsx)("h4",{children:k})}):(0,_u.jsx)("div",{className:"identity",children:(0,_u.jsx)("h4",{children:k})})}),null===k&&(0,_u.jsx)(_u.Fragment,{children:h?(0,_u.jsx)(co.div,{className:"identity",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:(0,_u.jsx)("h4",{children:tV(y)})}):(0,_u.jsx)("div",{className:"identity",children:(0,_u.jsx)("h4",{children:tV(y)})})})]}),(0,_u.jsxs)("div",{className:"labels",children:[p.stake&&M>=s.maxNominatorRewardedPerValidator&&(0,_u.jsx)(co.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.1},children:(0,_u.jsxs)("label",{className:"warning",children:[(0,_u.jsx)(f$,{icon:P$,transform:"shrink-2"}),"\xa0",E," ",n.unit]})}),void 0!==w&&(0,_u.jsxs)(_u.Fragment,{children:[C&&(0,_u.jsx)("label",{children:(0,_u.jsx)(f$,{icon:D$,color:"#d2545d",transform:"shrink-1"})}),(0,_u.jsxs)("label",{children:[x,"%"]})]}),(0,_u.jsx)("label",{children:(0,_u.jsx)("button",{onClick:()=>o("EraPoints",{address:y,identity:k}),children:(0,_u.jsx)(f$,{icon:y$})})}),(0,_u.jsx)("label",{children:(0,_u.jsx)("button",{onClick:()=>i(_),children:(0,_u.jsx)(Z4.CopyToClipboard,{text:y,children:(0,_u.jsx)(f$,{icon:Y4})})})}),b&&(0,_u.jsx)("label",{children:(0,_u.jsx)("button",{className:u.includes(y)?"active":void 0,onClick:()=>{u.includes(y)?d(y):c(y),i(N)},children:(0,_u.jsx)(f$,{icon:I$})})})]})]})})};class v3 extends V.Component{shouldComponentUpdate(e,t){return this.props.validator.address!==e.validator.address||this.props.synced!==e.synced||this.props.stake!==e.stake}render(){return(0,_u.jsx)(m3,{...this.props})}}const b3=C.default.div`
  width: 100%;
  padding: 0.25rem 0.5rem 1rem 0.5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  overflow: hidden;

  > .hide-scrollbar {
    width: 100%;
    overflow: hidden;
    height: 115px;

    > section {
      display: flex;
      flex-wrap: nowrap;
      overflow: auto;
      width: 100%;
      min-width: 100%;
      max-width: 500px;
      padding-bottom: 2rem;

      > .category {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;

        > .head {
          flex: 1;
          padding-bottom: 0.6rem;
          font-size: 0.8rem;
          color: ${Xo};
        }
        > .items {
          flex: 1;
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
        }
      }
    }
  }
`,y3=C.default.div`
    width: 110px;
    height: 80px;
    border-radius: 0.75rem;
    background: ${e=>e.active?"rgba(211, 48, 121, 0.85)":ii};
    display: flex;
    flex-flow: column nowrap;
    margin-right: 1rem;
    position: relative;

    &:last-child {
      margin-right: 0;
    }

    section {
      display: flex;
      flex-flow: row wrap;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      width: 100%;

      &:first-child { 
        flex-grow: 1;
        flex-basis: 70%;
        justify-content: flex-start;
        align-items: flex-end;
        padding-bottom: 0.6rem;
        
        .icon {
          display: flex;
          flex-flow: column wrap;
          justify-content: center;
          align-items: center;
          padding: 0 0.5rem;
        }
      }

      &:last-child {
      justify-content: flex-start;
      padding-top: 0.2rem;
      flex-basis: 30%;
      min-height: 40px;
      display: flex;
      flex-flow: column wrap;
      justify-content: flex-start;

      p {
        color: ${e=>e.active?"white":"#999"};
        font-size: 0.85rem;
        margin: 0;
        text-align: left;
        font-variation-settings: 'wght' 550;
        padding-top: 0.15rem;
        line-height: 0.9rem;
      }
    }

    .active {
      position: absolute;
      right: 6px;
      top: 4px;
      width: 20px;
      height: 20px;
      z-index: 2;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }   
`,w3=e=>{const{icon:t,label:a,transform:r,onClick:l}=e,[s,n]=(0,V.useState)(e.active);return(0,_u.jsx)(co.button,{whileHover:{scale:1.02},whileTap:{scale:.99},transition:{duration:.3},onClick:()=>{n(!s),l()},children:(0,_u.jsxs)(y3,{active:s,children:[(0,_u.jsxs)("section",{children:[s&&(0,_u.jsx)("div",{className:"active",children:(0,_u.jsx)(f$,{icon:w$,transform:"grow-0"})}),(0,_u.jsx)("div",{className:"icon",children:(0,_u.jsx)(f$,{icon:t,color:s?"white":"#aaa",transform:r})})]}),(0,_u.jsx)("section",{children:(0,_u.jsx)("p",{children:a})})]})})},k3=e=>{var t,a,r,l,s;const{setInitial:n}=e,{validatorOrder:o,validatorFilters:i,orderValidators:u,toggleFilterValidators:c}=mF(),d=(e,t)=>{n(!0),e(t)};return(0,_u.jsx)(b3,{children:(0,_u.jsx)("div",{className:"hide-scrollbar",children:(0,_u.jsxs)("section",{children:[(0,_u.jsxs)("div",{className:"category",children:[(0,_u.jsx)("div",{className:"head",children:"Order"}),(0,_u.jsx)("div",{className:"items",children:(0,_u.jsx)(w3,{label:"lowest commission",icon:L$,transform:"grow-12",active:"commission"===o,onClick:()=>d(u,"commission")})})]}),(0,_u.jsxs)("div",{className:"category",children:[(0,_u.jsx)("div",{className:"head",children:"Exclude"}),(0,_u.jsxs)("div",{className:"items",children:[(0,_u.jsx)(w3,{label:"inactive validators",icon:M$,transform:"grow-10",active:null!==(t=null===i||void 0===i?void 0:i.includes("inactive"))&&void 0!==t&&t,onClick:()=>{d(c,"inactive")}}),(0,_u.jsx)(w3,{label:"over subscribed",icon:P$,transform:"grow-10",active:null!==(a=null===i||void 0===i?void 0:i.includes("over_subscribed"))&&void 0!==a&&a,onClick:()=>{d(c,"over_subscribed")}}),(0,_u.jsx)(w3,{label:"100% commission",icon:g$,transform:"grow-6",active:null!==(r=null===i||void 0===i?void 0:i.includes("all_commission"))&&void 0!==r&&r,onClick:()=>{d(c,"all_commission")}}),(0,_u.jsx)(w3,{label:"blocked nominations",icon:D$,transform:"grow-9",active:null!==(l=null===i||void 0===i?void 0:i.includes("blocked_nominations"))&&void 0!==l&&l,onClick:()=>{d(c,"blocked_nominations")}}),(0,_u.jsx)(w3,{label:"missing identity",icon:U$,transform:"grow-9",active:null!==(s=null===i||void 0===i?void 0:i.includes("missing_identity"))&&void 0!==s&&s,onClick:()=>{d(c,"missing_identity")}})]})]})]})})})},x3=e=>{var t,a,r,l,s,n,o,i,u,c;const{isReady:d}=JO(),{metrics:h}=eV(),{fetchValidatorMetaBatch:f,meta:p}=pF(),{setListFormat:g,listFormat:m,validatorFilters:v,validatorOrder:b,applyValidatorFilters:y,applyValidatorOrder:w}=mF(),{batchKey:k,allowMoreCols:x,allowFilters:C,toggleFavourites:M,pagination:E}=e,_=null!==(t=e.disableThrottle)&&void 0!==t&&t;let N=void 0!==e.refetchOnListUpdate&&e.refetchOnListUpdate;const[P,j]=(0,V.useState)(1),[S,z]=(0,V.useState)(1),[T,L]=(0,V.useState)(e.validators),[A,O]=(0,V.useState)(e.validators),[B,H]=(0,V.useState)(!0),[I,R]=(0,V.useState)(!1),W=(0,V.useRef)(S),D=e=>{W.current=e,z(e)};let U=Math.ceil(A.length/Lo),F=P+1>U?U:P+1,q=P-1<1?1:P-1,X=P*Lo-1,Y=X-49,G=20*S-1;const Z=null!==(a=null===(r=p[k])||void 0===r?void 0:r.identities)&&void 0!==a?a:[],K=null!==(l=null===(s=p[k])||void 0===s?void 0:s.supers)&&void 0!==l?l:[],J=null!==(n=null===(o=p[k])||void 0===o?void 0:o.stake)&&void 0!==n?n:[];(0,V.useEffect)((()=>{R(!1)}),[e.validators]),(0,V.useEffect)((()=>{d&&0!==h.activeEra.index&&!I&&(L(e.validators),O(e.validators),H(!0),R(!0),f(k,e.validators,N))}),[d,I,h.activeEra.index]),(0,V.useEffect)((()=>{Q()}),[v,b]);const Q=()=>{if(C){let e=Object.assign(T);"default"!==b&&(e=w(e,b)),e=y(e,k),O(e),j(1),D(1)}};(0,V.useEffect)((()=>{G>=X||_||setTimeout((()=>{D(W.current+1)}),500)}),[W.current]);let $=[];$=_?A:A.slice(Y).slice(0,Lo);const ee={identities:null!==(i=Z.length>0)&&void 0!==i&&i,supers:null!==(u=K.length>0)&&void 0!==u&&u,stake:null!==(c=J.length>0)&&void 0!==c&&c};return A.length?(0,_u.jsxs)(d3,{children:[(0,_u.jsxs)(h3,{children:[(0,_u.jsx)("div",{children:(0,_u.jsx)("h3",{children:e.title})}),(0,_u.jsxs)("div",{children:[(0,_u.jsx)("button",{onClick:()=>g("row"),children:(0,_u.jsx)(f$,{icon:m$,color:"row"===m?"#d33079":"inherit"})}),(0,_u.jsx)("button",{onClick:()=>g("col"),children:(0,_u.jsx)(f$,{icon:z$,color:"col"===m?"#d33079":"inherit"})})]})]}),(0,_u.jsxs)(p3,{flexBasisLarge:x?"33.33%":"50%",children:[C&&(0,_u.jsx)(k3,{setInitial:H}),E&&(0,_u.jsxs)(f3,{prev:1!==P,next:P!==U,children:[(0,_u.jsx)("div",{children:(0,_u.jsxs)("h4",{children:["Page ",P," of ",U]})}),(0,_u.jsxs)("div",{children:[(0,_u.jsx)("button",{className:"prev",onClick:()=>{j(q),H(!1)},children:"Prev"}),(0,_u.jsx)("button",{className:"next",onClick:()=>{j(F),H(!1)},children:"Next"})]})]}),(0,_u.jsx)(co.div,{className:"transition",initial:"hidden",animate:"show",variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.01}}},children:$.map(((e,t)=>{let a=T.indexOf(e);return(0,_u.jsx)(co.div,{className:"item "+("row"===m?"row":"col"),variants:{hidden:{y:15,opacity:0},show:{y:0,opacity:1}},children:(0,_u.jsx)(v3,{initial:B,validator:e,identity:Z[a],superIdentity:K[a],stake:J[a],synced:ee,toggleFavourites:M})},`nomination_${t}`)}))})]})]}):(0,_u.jsx)(_u.Fragment,{})};class C3 extends V.Component{shouldComponentUpdate(e,t){return this.props.validators!==e.validators}render(){return(0,_u.jsx)(x3,{...this.props})}}C3.contextType=nF;const M3=()=>{const{isReady:e}=JO(),{nominated:t}=pF();return(0,_u.jsxs)($$,{children:[(0,_u.jsxs)("h2",{children:["Nominations",(0,_u.jsx)(g0,{page:"stake",title:"Nominations"})]}),null===t?(0,_u.jsx)("div",{style:{marginTop:"1rem"},children:(0,_u.jsx)("p",{children:"Fetching your nominations..."})}):(0,_u.jsx)(_u.Fragment,{children:e&&(0,_u.jsx)(_u.Fragment,{children:t.length>0&&(0,_u.jsx)("div",{style:{marginTop:"1rem"},children:(0,_u.jsx)(C3,{validators:t,batchKey:"stake_nominations",title:"Your Nominations",refetchOnListUpdate:!0,allowMoreCols:!0,disableThrottle:!0})})})})]})};AZ.register(DZ,MK,uK);const E3=e=>{const{mode:t}=vJ(),{network:a}=JO();let{active:r,unlocking:l,remaining:s,total:n}=e,o=!1;0!==n&&void 0!==n||(s=-1,o=!0);const i={responsive:!0,maintainAspectRatio:!1,spacing:o?0:2,plugins:{legend:{padding:{right:20},display:!0,position:"left",align:"center",labels:{padding:20,color:Wo.text.primary[t],font:{size:15,weight:"500"}}},tooltip:{displayColors:!1,backgroundColor:Wo.graphs.tooltip[t],bodyColor:Wo.text.invert[t],callbacks:{label:e=>`${e.label}: ${-1===e.parsed?0:e.parsed} ${a.unit}`}}},cutout:"70%"},u={labels:["Active","Unlocking","Free"],datasets:[{label:a.unit,data:[r,l,s],backgroundColor:[Wo.graphs.colors[0][t],Wo.graphs.colors[1][t],Wo.graphs.colors[2][t]],borderWidth:0}]};return(0,_u.jsx)(iJ,{options:i,data:u})},_3=C.default.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: flex-end;

  > button {
    margin-top :0.5rem;
  }
`,N3=(0,C.default)(co.button)`
  background: ${e=>"default"===e.type?oi:"rgba(211, 48, 121, 0.9)"};
  color: ${e=>"default"===e.type?qo:"white"};
  margin: ${e=>e.margin};
  flex-grow: 1;
  padding: ${e=>e.padding};
  border-radius:  0.75rem;
  font-size:${e=>e.fontSize?e.fontSize:"0.95rem"};
  font-variation-settings: 'wght' 560;

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,P3=e=>{var t,a,r,l;let{title:s,primary:n,inline:o,onClick:i,small:u,disabled:c}=e;return n=null!==(t=n)&&void 0!==t&&t,o=null!==(a=o)&&void 0!==a&&a,u=null!==(r=u)&&void 0!==r&&r,c=null!==(l=c)&&void 0!==l&&l,(0,_u.jsx)(N3,{disabled:c,whileHover:{scale:c?1:1.02},whileTap:{scale:c?1:.98},type:!0===n?"invert":"default",margin:o?"0":"0 0.5rem",padding:u?"0.3rem 0.75rem":"0.5rem 1.2rem",onClick:()=>i(),children:s})},j3=()=>{const{network:e}=JO(),{units:t}=e,{openModalWith:a}=pV(),{activeAccount:r}=JU(),{getAccountLedger:l,getBondedAccount:s}=aF(),n=l(s(r)),{active:o,total:i}=n;let{unlocking:u}=n,c=lV(u,t);const d=i.sub(o).toNumber()-c;return(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsxs)("div",{className:"head",children:[(0,_u.jsxs)("h4",{children:["Bonded Funds",(0,_u.jsx)(g0,{page:"stake",title:"Bonding"})]}),(0,_u.jsxs)("h2",{children:[rV(o.toNumber(),t)," ",e.unit," \xa0",(0,_u.jsxs)("div",{children:[(0,_u.jsx)(P3,{small:!0,primary:!0,inline:!0,title:"+",onClick:()=>a("UpdateBond",{fn:"add"},"small")}),(0,_u.jsx)(P3,{small:!0,primary:!0,title:"-",onClick:()=>a("UpdateBond",{fn:"remove"},"small")})]})]})]}),(0,_u.jsx)(dF,{transparent:!0,noMargin:!0,children:(0,_u.jsx)("div",{className:"graph",style:{flex:0,paddingRight:"1rem",height:160},children:(0,_u.jsx)(E3,{active:rV(o.toNumber(),t),unlocking:rV(c,t),remaining:rV(d,t),total:i.toNumber()})})})]})},S3=e=>{const{network:t}=JO(),{units:a}=t,{openModalWith:r}=pV(),{activeAccount:l}=JU(),{metrics:s}=eV(),{getNominationsStatus:n,eraStakers:o,staking:i}=oF(),{getAccountLedger:u,getBondedAccount:c,getAccountNominations:d}=aF(),{payee:h}=i,{minActiveBond:f}=o,p=u(c(l)),g=d(l),[m,v]=(0,V.useState)({total:0,inactive:0,active:0}),b=(0,V.useMemo)((()=>n()),[g]);(0,V.useEffect)((()=>{let e=b,t=Object.values(e).length,a=Object.values(e).filter((e=>"active"===e)).length;v({total:t,inactive:t-a,active:a})}),[b]);let{unlocking:y}=p;lV(y,a);const w=[{format:"chart-pie",params:{label:"Active Nominations",value:m.active,value2:m.active?0:1,total:m.total,unit:"",tooltip:""+(m.active?"Active":"Inactive"),assistant:{page:"stake",key:"Nominations"}}},{format:"number",params:{label:"Minimum Active Bond",value:f,unit:t.unit,assistant:{page:"stake",key:"Bonding"}}},{format:"number",params:{label:"Active Era",value:s.activeEra.index,unit:"",assistant:{page:"validators",key:"Era"}}}];return(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsx)(k0,{title:e.title}),(0,_u.jsx)(Nu,{children:w.map(((e,t)=>(0,V.createElement)(s3,{...e,key:t})))}),(0,_u.jsxs)(Mi,{noVerticalSpacer:!0,children:[(0,_u.jsx)(iF,{paddingLeft:!0,children:(0,_u.jsx)(cF,{style:{height:260},children:(0,_u.jsxs)("div",{className:"head",children:[(0,_u.jsxs)("h4",{children:["Status",(0,_u.jsx)(g0,{page:"stake",title:"Staking Status"})]}),(0,_u.jsx)("h2",{children:m.active?"Active and Earning Rewards":"Waiting for Active Nominations"}),(0,_u.jsx)(Ei,{}),(0,_u.jsxs)("h4",{children:["Reward Destination",(0,_u.jsx)(g0,{page:"stake",title:"Reward Destination"})]}),(0,_u.jsxs)("h2",{children:[(0,_u.jsx)(f$,{icon:"Staked"===h?V$:"None"===h?C$:q$,transform:"shrink-4"}),"\xa0","Staked"===h&&"Back to Staking","Stash"===h&&"To Stash","Controller"===h&&"To Controller","Account"===h&&"To Account","None"===h&&"Not Set","\xa0\xa0",(0,_u.jsx)("div",{children:(0,_u.jsx)(P3,{small:!0,inline:!0,primary:!0,title:"Update",onClick:()=>r("UpdatePayee",{},"small")})})]})]})})}),(0,_u.jsx)(uF,{children:(0,_u.jsx)(cF,{style:{height:260},children:(0,_u.jsx)(j3,{})})})]}),(0,_u.jsx)(Mi,{noVerticalSpacer:!0,children:(0,_u.jsx)(cF,{children:(0,_u.jsx)(M3,{})})})]})};var z3=__webpack_require__(35667);const T3=e=>{const{setup:t,setSetup:a}=e,{isReady:r}=JO(),{activeAccount:l}=JU(),{removeValidatorMetaBatch:s,validators:n,favouritesList:o,meta:i}=pF(),{applyValidatorOrder:u,applyValidatorFilters:c}=mF(),[d,h]=(0,V.useState)(null),[f,p]=(0,V.useState)(!1),[g,m]=(0,V.useState)(t.nominations),v="validators_browse",b="generated_nominations";(0,V.useEffect)((()=>{m(t.nominations)}),[l]);return(0,V.useEffect)((()=>{if(!r||!n.length)return;let e,l=i[v];if(void 0!==l&&void 0!==l.stake&&f){if("Favourites"===d)e=(()=>{let e=[];return o.length&&(e=o.slice(0,16)),e})();else e=(()=>{let e=Object.assign(n);return e=c(e,v,["all_commission","blocked_nominations","over_subscribed","inactive","missing_identity"]),e=u(e,"commission"),e.length&&(e=e.slice(0,16)),e})();m(e),p(!1),a({...t,nominations:e})}})),(0,_u.jsxs)($$,{style:{minHeight:200},children:[(0,_u.jsx)("div",{style:{margin:"1rem 0"},children:(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsx)(P3,{inline:!0,title:"Get Most Profitable",onClick:()=>{h("Most Profitable Validators"),s(b),m([]),p(!0)}}),null===o?(0,_u.jsx)(_u.Fragment,{}):(0,_u.jsx)(P3,{title:"Get Favourites",onClick:()=>{h("Favourites"),s(b),m([]),p(!0)}})]})}),f?(0,_u.jsx)("div",{style:{marginTop:"0.5rem"},children:(0,_u.jsx)("h3",{children:"Fetching your nominations..."})}):(0,_u.jsx)(_u.Fragment,{children:r&&g.length>0&&(0,_u.jsx)("div",{style:{marginTop:"1rem"},children:(0,_u.jsx)(C3,{validators:g,batchKey:b,title:d,allowMoreCols:!0})})})]})},L3=e=>{const{activeAccount:t}=JU(),{getSetupProgress:a,setActiveAccountSetupSection:r}=mF(),l=a(t),{title:s,assistantPage:n,assistantKey:o,complete:i,thisSection:u}=e;return(0,_u.jsxs)(i3,{children:[(0,_u.jsx)("section",{children:(0,_u.jsxs)("h2",{children:[s,void 0!==n&&void 0!==o&&(0,_u.jsx)(g0,{page:n,title:o})]})}),(0,_u.jsx)("section",{children:i&&(0,_u.jsxs)(_u.Fragment,{children:[l.section!==u&&u<l.section&&(0,_u.jsx)("span",{children:(0,_u.jsx)(P3,{inline:!0,small:!0,title:"Update",onClick:()=>{r(u)}})}),(0,_u.jsx)("h4",{className:"complete",children:"Complete"})]})})]})},A3=e=>{const{activeAccount:t}=JU(),{getSetupProgress:a,setActiveAccountSetupSection:r}=mF(),l=a(t),{complete:s}=e;return(0,_u.jsx)(u3,{children:(0,_u.jsx)("section",{children:s?(0,_u.jsx)(P3,{inline:!0,primary:!0,title:"Continue",onClick:()=>r(l.section+1)}):(0,_u.jsx)("div",{style:{opacity:.5},children:(0,_u.jsx)(P3,{inline:!0,title:"Continue",disabled:!0})})})})},O3=e=>{const{thisSection:t,activeSection:a}=e,r=t===a?"visible":"hidden";return(0,_u.jsx)(co.div,{initial:!1,style:{overflow:"hidden",width:"100%"},variants:{hidden:{height:"0px"},visible:{height:"auto"}},animate:r,transition:{duration:.5,type:"spring",bounce:.2},children:e.children})},V3=e=>{const{section:t}=e,{activeAccount:a}=JU(),{getSetupProgress:r,setActiveAccountSetup:l}=mF(),s=r(a);return(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsx)(L3,{thisSection:t,complete:s.nominations.length>0,title:"Nominate",assistantPage:"stake",assistantKey:"Nominating"}),(0,_u.jsxs)(O3,{thisSection:t,activeSection:s.section,children:[(0,_u.jsx)(T3,{setup:s,setSetup:l}),(0,_u.jsx)(A3,{complete:s.nominations.length>0})]})]})},B3=V.createContext({messages:[],setMessage:(e,t)=>{},removeMessage:e=>{},setMessages:e=>{},getMessage:e=>{}}),H3=()=>V.useContext(B3);function I3(e,t){if(null==e)return{};var a,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}function R3(){return R3=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},R3.apply(this,arguments)}function W3(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D3(e,t){return D3=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D3(e,t)}__webpack_require__(70419);function U3(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function F3(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function q3(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var a=getComputedStyle(e,null);return F3(a.overflowY,t)||F3(a.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function X3(e,t,a,r,l,s,n,o){return s<e&&n>t||s>e&&n<t?0:s<=e&&o<=a||n>=t&&o>=a?s-e-r:n>t&&o<a||s<e&&o>a?n-t+l:0}var Y3=0;function G3(e){return"function"===typeof e?e:Z3}function Z3(){}function K3(e,t){if(e){var a=function(e,t){var a=window,r=t.scrollMode,l=t.block,s=t.inline,n=t.boundary,o=t.skipOverflowHiddenElements,i="function"==typeof n?n:function(e){return e!==n};if(!U3(e))throw new TypeError("Invalid target");for(var u=document.scrollingElement||document.documentElement,c=[],d=e;U3(d)&&i(d);){if((d=d.parentElement)===u){c.push(d);break}null!=d&&d===document.body&&q3(d)&&!q3(document.documentElement)||null!=d&&q3(d,o)&&c.push(d)}for(var h=a.visualViewport?a.visualViewport.width:innerWidth,f=a.visualViewport?a.visualViewport.height:innerHeight,p=window.scrollX||pageXOffset,g=window.scrollY||pageYOffset,m=e.getBoundingClientRect(),v=m.height,b=m.width,y=m.top,w=m.right,k=m.bottom,x=m.left,C="start"===l||"nearest"===l?y:"end"===l?k:y+v/2,M="center"===s?x+b/2:"end"===s?w:x,E=[],_=0;_<c.length;_++){var N=c[_],P=N.getBoundingClientRect(),j=P.height,S=P.width,z=P.top,T=P.right,L=P.bottom,A=P.left;if("if-needed"===r&&y>=0&&x>=0&&k<=f&&w<=h&&y>=z&&k<=L&&x>=A&&w<=T)return E;var O=getComputedStyle(N),V=parseInt(O.borderLeftWidth,10),B=parseInt(O.borderTopWidth,10),H=parseInt(O.borderRightWidth,10),I=parseInt(O.borderBottomWidth,10),R=0,W=0,D="offsetWidth"in N?N.offsetWidth-N.clientWidth-V-H:0,U="offsetHeight"in N?N.offsetHeight-N.clientHeight-B-I:0;if(u===N)R="start"===l?C:"end"===l?C-f:"nearest"===l?X3(g,g+f,f,B,I,g+C,g+C+v,v):C-f/2,W="start"===s?M:"center"===s?M-h/2:"end"===s?M-h:X3(p,p+h,h,V,H,p+M,p+M+b,b),R=Math.max(0,R+g),W=Math.max(0,W+p);else{R="start"===l?C-z-B:"end"===l?C-L+I+U:"nearest"===l?X3(z,L,j,B,I+U,C,C+v,v):C-(z+j/2)+U/2,W="start"===s?M-A-V:"center"===s?M-(A+S/2)+D/2:"end"===s?M-T+H+D:X3(A,T,S,V,H+D,M,M+b,b);var F=N.scrollLeft,q=N.scrollTop;C+=q-(R=Math.max(0,Math.min(q+R,N.scrollHeight-j+U))),M+=F-(W=Math.max(0,Math.min(F+W,N.scrollWidth-S+D)))}E.push({el:N,top:R,left:W})}return E}(e,{boundary:t,block:"nearest",scrollMode:"if-needed"});a.forEach((function(e){var t=e.el,a=e.top,r=e.left;t.scrollTop=a,t.scrollLeft=r}))}}function J3(e,t,a){return e===t||t instanceof a.Node&&e.contains&&e.contains(t)}function Q3(e,t){var a;function r(){a&&clearTimeout(a)}function l(){for(var l=arguments.length,s=new Array(l),n=0;n<l;n++)s[n]=arguments[n];r(),a=setTimeout((function(){a=null,e.apply(void 0,s)}),t)}return l.cancel=r,l}function $3(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){for(var a=arguments.length,r=new Array(a>1?a-1:0),l=1;l<a;l++)r[l-1]=arguments[l];return t.some((function(t){return t&&t.apply(void 0,[e].concat(r)),e.preventDownshiftDefault||e.hasOwnProperty("nativeEvent")&&e.nativeEvent.preventDownshiftDefault}))}}function e5(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){t.forEach((function(t){"function"===typeof t?t(e):t&&(t.current=e)}))}}function t5(){return String(Y3++)}function a5(e){var t=e.isOpen,a=e.resultCount,r=e.previousResultCount;return t?a?a!==r?a+" result"+(1===a?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function r5(e,t){return!(e=Array.isArray(e)?e[0]:e)&&t?t:e}function l5(e){return"string"===typeof e.type}function s5(e){return e.props}var n5=["highlightedIndex","inputValue","isOpen","selectedItem","type"];function o5(e){void 0===e&&(e={});var t={};return n5.forEach((function(a){e.hasOwnProperty(a)&&(t[a]=e[a])})),t}function i5(e,t){return Object.keys(e).reduce((function(a,r){return a[r]=u5(t,r)?t[r]:e[r],a}),{})}function u5(e,t){return void 0!==e[t]}function c5(e){var t=e.key,a=e.keyCode;return a>=37&&a<=40&&0!==t.indexOf("Arrow")?"Arrow"+t:t}function d5(e,t,a,r,l){if(void 0===l&&(l=!0),0===a)return-1;var s=a-1;("number"!==typeof t||t<0||t>=a)&&(t=e>0?-1:s+1);var n=t+e;n<0?n=l?s:0:n>s&&(n=l?0:s);var o=h5(e,n,a,r,l);return-1===o?t>=a?-1:t:o}function h5(e,t,a,r,l){var s=r(t);if(!s||!s.hasAttribute("disabled"))return t;if(e>0){for(var n=t+1;n<a;n++)if(!r(n).hasAttribute("disabled"))return n}else for(var o=t-1;o>=0;o--)if(!r(o).hasAttribute("disabled"))return o;return l?e>0?h5(1,0,a,r,!1):h5(-1,a-1,a,r,!1):-1}function f5(e,t,a,r){return void 0===r&&(r=!0),t.some((function(t){return t&&(J3(t,e,a)||r&&J3(t,a.document.activeElement,a))}))}var p5=Q3((function(e){m5(e).textContent=""}),500);function g5(e,t){var a=m5(t);e&&(a.textContent=e,p5(t))}function m5(e){void 0===e&&(e=document);var t=e.getElementById("a11y-status-message");return t||((t=e.createElement("div")).setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}var v5=Object.freeze({__proto__:null,unknown:0,mouseUp:1,itemMouseEnter:2,keyDownArrowUp:3,keyDownArrowDown:4,keyDownEscape:5,keyDownEnter:6,keyDownHome:7,keyDownEnd:8,clickItem:9,blurInput:10,changeInput:11,keyDownSpaceButton:12,clickButton:13,blurButton:14,controlledPropUpdatedSelectedItem:15,touchEnd:16}),b5=["refKey","ref"],y5=["onClick","onPress","onKeyDown","onKeyUp","onBlur"],w5=["onKeyDown","onBlur","onChange","onInput","onChangeText"],k5=["refKey","ref"],x5=["onMouseMove","onMouseDown","onClick","onPress","index","item"],C5=function(){var e=function(e){var t,a;function r(t){var a;(a=e.call(this,t)||this).id=a.props.id||"downshift-"+t5(),a.menuId=a.props.menuId||a.id+"-menu",a.labelId=a.props.labelId||a.id+"-label",a.inputId=a.props.inputId||a.id+"-input",a.getItemId=a.props.getItemId||function(e){return a.id+"-item-"+e},a.input=null,a.items=[],a.itemCount=null,a.previousResultCount=0,a.timeoutIds=[],a.internalSetTimeout=function(e,t){var r=setTimeout((function(){a.timeoutIds=a.timeoutIds.filter((function(e){return e!==r})),e()}),t);a.timeoutIds.push(r)},a.setItemCount=function(e){a.itemCount=e},a.unsetItemCount=function(){a.itemCount=null},a.setHighlightedIndex=function(e,t){void 0===e&&(e=a.props.defaultHighlightedIndex),void 0===t&&(t={}),t=o5(t),a.internalSetState(R3({highlightedIndex:e},t))},a.clearSelection=function(e){a.internalSetState({selectedItem:null,inputValue:"",highlightedIndex:a.props.defaultHighlightedIndex,isOpen:a.props.defaultIsOpen},e)},a.selectItem=function(e,t,r){t=o5(t),a.internalSetState(R3({isOpen:a.props.defaultIsOpen,highlightedIndex:a.props.defaultHighlightedIndex,selectedItem:e,inputValue:a.props.itemToString(e)},t),r)},a.selectItemAtIndex=function(e,t,r){var l=a.items[e];null!=l&&a.selectItem(l,t,r)},a.selectHighlightedItem=function(e,t){return a.selectItemAtIndex(a.getState().highlightedIndex,e,t)},a.internalSetState=function(e,t){var r,l,s={},n="function"===typeof e;return!n&&e.hasOwnProperty("inputValue")&&a.props.onInputValueChange(e.inputValue,R3({},a.getStateAndHelpers(),e)),a.setState((function(t){t=a.getState(t);var o=n?e(t):e;o=a.props.stateReducer(t,o),r=o.hasOwnProperty("selectedItem");var i={},u={};return r&&o.selectedItem!==t.selectedItem&&(l=o.selectedItem),o.type=o.type||0,Object.keys(o).forEach((function(e){t[e]!==o[e]&&(s[e]=o[e]),"type"!==e&&(u[e]=o[e],u5(a.props,e)||(i[e]=o[e]))})),n&&o.hasOwnProperty("inputValue")&&a.props.onInputValueChange(o.inputValue,R3({},a.getStateAndHelpers(),o)),i}),(function(){G3(t)(),Object.keys(s).length>1&&a.props.onStateChange(s,a.getStateAndHelpers()),r&&a.props.onSelect(e.selectedItem,a.getStateAndHelpers()),void 0!==l&&a.props.onChange(l,a.getStateAndHelpers()),a.props.onUserAction(s,a.getStateAndHelpers())}))},a.rootRef=function(e){return a._rootNode=e},a.getRootProps=function(e,t){var r,l=void 0===e?{}:e,s=l.refKey,n=void 0===s?"ref":s,o=l.ref,i=I3(l,b5),u=(void 0===t?{}:t).suppressRefError,c=void 0!==u&&u;a.getRootProps.called=!0,a.getRootProps.refKey=n,a.getRootProps.suppressRefError=c;var d=a.getState().isOpen;return R3(((r={})[n]=e5(o,a.rootRef),r.role="combobox",r["aria-expanded"]=d,r["aria-haspopup"]="listbox",r["aria-owns"]=d?a.menuId:null,r["aria-labelledby"]=a.labelId,r),i)},a.keyDownHandlers={ArrowDown:function(e){var t=this;if(e.preventDefault(),this.getState().isOpen){var a=e.shiftKey?5:1;this.moveHighlightedIndex(a,{type:4})}else this.internalSetState({isOpen:!0,type:4},(function(){var e=t.getItemCount();if(e>0){var a=d5(1,t.getState().highlightedIndex,e,(function(e){return t.getItemNodeFromIndex(e)}));t.setHighlightedIndex(a,{type:4})}}))},ArrowUp:function(e){var t=this;if(e.preventDefault(),this.getState().isOpen){var a=e.shiftKey?-5:-1;this.moveHighlightedIndex(a,{type:3})}else this.internalSetState({isOpen:!0,type:3},(function(){var e=t.getItemCount();if(e>0){var a=d5(-1,t.getState().highlightedIndex,e,(function(e){return t.getItemNodeFromIndex(e)}));t.setHighlightedIndex(a,{type:3})}}))},Enter:function(e){if(229!==e.which){var t=this.getState(),a=t.isOpen,r=t.highlightedIndex;if(a&&null!=r){e.preventDefault();var l=this.items[r],s=this.getItemNodeFromIndex(r);if(null==l||s&&s.hasAttribute("disabled"))return;this.selectHighlightedItem({type:6})}}},Escape:function(e){e.preventDefault(),this.reset(R3({type:5},!this.state.isOpen&&{selectedItem:null,inputValue:""}))}},a.buttonKeyDownHandlers=R3({},a.keyDownHandlers,{" ":function(e){e.preventDefault(),this.toggleMenu({type:12})}}),a.inputKeyDownHandlers=R3({},a.keyDownHandlers,{Home:function(e){var t=this,a=this.getState().isOpen;if(a){e.preventDefault();var r=this.getItemCount();if(!(r<=0)&&a){var l=h5(1,0,r,(function(e){return t.getItemNodeFromIndex(e)}),!1);this.setHighlightedIndex(l,{type:7})}}},End:function(e){var t=this,a=this.getState().isOpen;if(a){e.preventDefault();var r=this.getItemCount();if(!(r<=0)&&a){var l=h5(-1,r-1,r,(function(e){return t.getItemNodeFromIndex(e)}),!1);this.setHighlightedIndex(l,{type:8})}}}}),a.getToggleButtonProps=function(e){var t=void 0===e?{}:e,r=t.onClick;t.onPress;var l=t.onKeyDown,s=t.onKeyUp,n=t.onBlur,o=I3(t,y5),i=a.getState().isOpen,u={onClick:$3(r,a.buttonHandleClick),onKeyDown:$3(l,a.buttonHandleKeyDown),onKeyUp:$3(s,a.buttonHandleKeyUp),onBlur:$3(n,a.buttonHandleBlur)};return R3({type:"button",role:"button","aria-label":i?"close menu":"open menu","aria-haspopup":!0,"data-toggle":!0},o.disabled?{}:u,o)},a.buttonHandleKeyUp=function(e){e.preventDefault()},a.buttonHandleKeyDown=function(e){var t=c5(e);a.buttonKeyDownHandlers[t]&&a.buttonKeyDownHandlers[t].call(W3(a),e)},a.buttonHandleClick=function(e){e.preventDefault(),a.props.environment.document.activeElement===a.props.environment.document.body&&e.target.focus(),a.internalSetTimeout((function(){return a.toggleMenu({type:13})}))},a.buttonHandleBlur=function(e){var t=e.target;a.internalSetTimeout((function(){a.isMouseDown||null!=a.props.environment.document.activeElement&&a.props.environment.document.activeElement.id===a.inputId||a.props.environment.document.activeElement===t||a.reset({type:14})}))},a.getLabelProps=function(e){return R3({htmlFor:a.inputId,id:a.labelId},e)},a.getInputProps=function(e){var t=void 0===e?{}:e,r=t.onKeyDown,l=t.onBlur,s=t.onChange,n=t.onInput;t.onChangeText;var o=I3(t,w5),i={};var u,c=a.getState(),d=c.inputValue,h=c.isOpen,f=c.highlightedIndex;o.disabled||((u={}).onChange=$3(s,n,a.inputHandleChange),u.onKeyDown=$3(r,a.inputHandleKeyDown),u.onBlur=$3(l,a.inputHandleBlur),i=u);return R3({"aria-autocomplete":"list","aria-activedescendant":h&&"number"===typeof f&&f>=0?a.getItemId(f):null,"aria-controls":h?a.menuId:null,"aria-labelledby":a.labelId,autoComplete:"off",value:d,id:a.inputId},i,o)},a.inputHandleKeyDown=function(e){var t=c5(e);t&&a.inputKeyDownHandlers[t]&&a.inputKeyDownHandlers[t].call(W3(a),e)},a.inputHandleChange=function(e){a.internalSetState({type:11,isOpen:!0,inputValue:e.target.value,highlightedIndex:a.props.defaultHighlightedIndex})},a.inputHandleBlur=function(){a.internalSetTimeout((function(){var e=a.props.environment.document&&!!a.props.environment.document.activeElement&&!!a.props.environment.document.activeElement.dataset&&a.props.environment.document.activeElement.dataset.toggle&&a._rootNode&&a._rootNode.contains(a.props.environment.document.activeElement);a.isMouseDown||e||a.reset({type:10})}))},a.menuRef=function(e){a._menuNode=e},a.getMenuProps=function(e,t){var r,l=void 0===e?{}:e,s=l.refKey,n=void 0===s?"ref":s,o=l.ref,i=I3(l,k5),u=(void 0===t?{}:t).suppressRefError,c=void 0!==u&&u;return a.getMenuProps.called=!0,a.getMenuProps.refKey=n,a.getMenuProps.suppressRefError=c,R3(((r={})[n]=e5(o,a.menuRef),r.role="listbox",r["aria-labelledby"]=i&&i["aria-label"]?null:a.labelId,r.id=a.menuId,r),i)},a.getItemProps=function(e){var t,r=void 0===e?{}:e,l=r.onMouseMove,s=r.onMouseDown,n=r.onClick;r.onPress;var o=r.index,i=r.item,u=void 0===i?void 0:i,c=I3(r,x5);void 0===o?(a.items.push(u),o=a.items.indexOf(u)):a.items[o]=u;var d=n,h=((t={onMouseMove:$3(l,(function(){o!==a.getState().highlightedIndex&&(a.setHighlightedIndex(o,{type:2}),a.avoidScrolling=!0,a.internalSetTimeout((function(){return a.avoidScrolling=!1}),250))})),onMouseDown:$3(s,(function(e){e.preventDefault()}))}).onClick=$3(d,(function(){a.selectItemAtIndex(o,{type:9})})),t),f=c.disabled?{onMouseDown:h.onMouseDown}:h;return R3({id:a.getItemId(o),role:"option","aria-selected":a.getState().highlightedIndex===o},f,c)},a.clearItems=function(){a.items=[]},a.reset=function(e,t){void 0===e&&(e={}),e=o5(e),a.internalSetState((function(t){var r=t.selectedItem;return R3({isOpen:a.props.defaultIsOpen,highlightedIndex:a.props.defaultHighlightedIndex,inputValue:a.props.itemToString(r)},e)}),t)},a.toggleMenu=function(e,t){void 0===e&&(e={}),e=o5(e),a.internalSetState((function(t){var r=t.isOpen;return R3({isOpen:!r},r&&{highlightedIndex:a.props.defaultHighlightedIndex},e)}),(function(){var r=a.getState(),l=r.isOpen,s=r.highlightedIndex;l&&a.getItemCount()>0&&"number"===typeof s&&a.setHighlightedIndex(s,e),G3(t)()}))},a.openMenu=function(e){a.internalSetState({isOpen:!0},e)},a.closeMenu=function(e){a.internalSetState({isOpen:!1},e)},a.updateStatus=Q3((function(){var e=a.getState(),t=a.items[e.highlightedIndex],r=a.getItemCount(),l=a.props.getA11yStatusMessage(R3({itemToString:a.props.itemToString,previousResultCount:a.previousResultCount,resultCount:r,highlightedItem:t},e));a.previousResultCount=r,g5(l,a.props.environment.document)}),200);var r=a.props,l=r.defaultHighlightedIndex,s=r.initialHighlightedIndex,n=void 0===s?l:s,o=r.defaultIsOpen,i=r.initialIsOpen,u=void 0===i?o:i,c=r.initialInputValue,d=void 0===c?"":c,h=r.initialSelectedItem,f=void 0===h?null:h,p=a.getState({highlightedIndex:n,isOpen:u,inputValue:d,selectedItem:f});return null!=p.selectedItem&&void 0===a.props.initialInputValue&&(p.inputValue=a.props.itemToString(p.selectedItem)),a.state=p,a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,D3(t,a);var l=r.prototype;return l.internalClearTimeouts=function(){this.timeoutIds.forEach((function(e){clearTimeout(e)})),this.timeoutIds=[]},l.getState=function(e){return void 0===e&&(e=this.state),i5(e,this.props)},l.getItemCount=function(){var e=this.items.length;return null!=this.itemCount?e=this.itemCount:void 0!==this.props.itemCount&&(e=this.props.itemCount),e},l.getItemNodeFromIndex=function(e){return this.props.environment.document.getElementById(this.getItemId(e))},l.scrollHighlightedItemIntoView=function(){var e=this.getItemNodeFromIndex(this.getState().highlightedIndex);this.props.scrollIntoView(e,this._menuNode)},l.moveHighlightedIndex=function(e,t){var a=this,r=this.getItemCount(),l=this.getState().highlightedIndex;if(r>0){var s=d5(e,l,r,(function(e){return a.getItemNodeFromIndex(e)}));this.setHighlightedIndex(s,t)}},l.getStateAndHelpers=function(){var e=this.getState(),t=e.highlightedIndex,a=e.inputValue,r=e.selectedItem,l=e.isOpen,s=this.props.itemToString,n=this.id,o=this.getRootProps,i=this.getToggleButtonProps,u=this.getLabelProps,c=this.getMenuProps,d=this.getInputProps,h=this.getItemProps,f=this.openMenu,p=this.closeMenu,g=this.toggleMenu,m=this.selectItem,v=this.selectItemAtIndex,b=this.selectHighlightedItem,y=this.setHighlightedIndex,w=this.clearSelection,k=this.clearItems;return{getRootProps:o,getToggleButtonProps:i,getLabelProps:u,getMenuProps:c,getInputProps:d,getItemProps:h,reset:this.reset,openMenu:f,closeMenu:p,toggleMenu:g,selectItem:m,selectItemAtIndex:v,selectHighlightedItem:b,setHighlightedIndex:y,clearSelection:w,clearItems:k,setItemCount:this.setItemCount,unsetItemCount:this.unsetItemCount,setState:this.internalSetState,itemToString:s,id:n,highlightedIndex:t,inputValue:a,isOpen:l,selectedItem:r}},l.componentDidMount=function(){var e=this;var t=function(){e.isMouseDown=!0},a=function(t){e.isMouseDown=!1,!f5(t.target,[e._rootNode,e._menuNode],e.props.environment)&&e.getState().isOpen&&e.reset({type:1},(function(){return e.props.onOuterClick(e.getStateAndHelpers())}))},r=function(){e.isTouchMove=!1},l=function(){e.isTouchMove=!0},s=function(t){var a=f5(t.target,[e._rootNode,e._menuNode],e.props.environment,!1);e.isTouchMove||a||!e.getState().isOpen||e.reset({type:16},(function(){return e.props.onOuterClick(e.getStateAndHelpers())}))},n=this.props.environment;n.addEventListener("mousedown",t),n.addEventListener("mouseup",a),n.addEventListener("touchstart",r),n.addEventListener("touchmove",l),n.addEventListener("touchend",s),this.cleanup=function(){e.internalClearTimeouts(),e.updateStatus.cancel(),n.removeEventListener("mousedown",t),n.removeEventListener("mouseup",a),n.removeEventListener("touchstart",r),n.removeEventListener("touchmove",l),n.removeEventListener("touchend",s)}},l.shouldScroll=function(e,t){var a=(void 0===this.props.highlightedIndex?this.getState():this.props).highlightedIndex,r=(void 0===t.highlightedIndex?e:t).highlightedIndex;return a&&this.getState().isOpen&&!e.isOpen||a!==r},l.componentDidUpdate=function(e,t){u5(this.props,"selectedItem")&&this.props.selectedItemChanged(e.selectedItem,this.props.selectedItem)&&this.internalSetState({type:15,inputValue:this.props.itemToString(this.props.selectedItem)}),!this.avoidScrolling&&this.shouldScroll(t,e)&&this.scrollHighlightedItemIntoView(),this.updateStatus()},l.componentWillUnmount=function(){this.cleanup()},l.render=function(){var e=r5(this.props.children,Z3);this.clearItems(),this.getRootProps.called=!1,this.getRootProps.refKey=void 0,this.getRootProps.suppressRefError=void 0,this.getMenuProps.called=!1,this.getMenuProps.refKey=void 0,this.getMenuProps.suppressRefError=void 0,this.getLabelProps.called=!1,this.getInputProps.called=!1;var t=r5(e(this.getStateAndHelpers()));return t?this.getRootProps.called||this.props.suppressRefError?t:l5(t)?(0,V.cloneElement)(t,this.getRootProps(s5(t))):void 0:null},r}(V.Component);return e.defaultProps={defaultHighlightedIndex:null,defaultIsOpen:!1,getA11yStatusMessage:a5,itemToString:function(e){return null==e?"":String(e)},onStateChange:Z3,onInputValueChange:Z3,onUserAction:Z3,onChange:Z3,onSelect:Z3,onOuterClick:Z3,selectedItemChanged:function(e,t){return e!==t},environment:"undefined"===typeof window?{}:window,stateReducer:function(e,t){return t},suppressRefError:!1,scrollIntoView:K3},e.stateChangeTypes=v5,e}(),M5=C5;Q3((function(e,t){g5(e(),t)}),200),"undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?V.useLayoutEffect:V.useEffect;var E5={itemToString:function(e){return e?String(e):""},stateReducer:function(e,t){return t.changes},getA11ySelectionMessage:function(e){var t=e.selectedItem,a=e.itemToString;return t?a(t)+" has been selected.":""},scrollIntoView:K3,circularNavigation:!1,environment:"undefined"===typeof window?{}:window};QQ().array.isRequired,QQ().func,QQ().func,QQ().func,QQ().bool,QQ().number,QQ().number,QQ().number,QQ().bool,QQ().bool,QQ().bool,QQ().any,QQ().any,QQ().any,QQ().string,QQ().string,QQ().string,QQ().func,QQ().string,QQ().func,QQ().func,QQ().func,QQ().func,QQ().func,QQ().shape({addEventListener:QQ().func,removeEventListener:QQ().func,document:QQ().shape({getElementById:QQ().func,activeElement:QQ().any,body:QQ().any})});_(_({},E5),{getA11yStatusMessage:function(e){var t=e.isOpen,a=e.resultCount,r=e.previousResultCount;return t?a?a!==r?a+" result"+(1===a?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.":"":"No results are available.":""}});QQ().array.isRequired,QQ().func,QQ().func,QQ().func,QQ().bool,QQ().number,QQ().number,QQ().number,QQ().bool,QQ().bool,QQ().bool,QQ().any,QQ().any,QQ().any,QQ().string,QQ().string,QQ().string,QQ().string,QQ().string,QQ().string,QQ().func,QQ().string,QQ().string,QQ().func,QQ().func,QQ().func,QQ().func,QQ().func,QQ().func,QQ().shape({addEventListener:QQ().func,removeEventListener:QQ().func,document:QQ().shape({getElementById:QQ().func,activeElement:QQ().any,body:QQ().any})});R3({},E5,{getA11yStatusMessage:a5,circularNavigation:!0});QQ().array,QQ().array,QQ().array,QQ().func,QQ().func,QQ().func,QQ().number,QQ().number,QQ().number,QQ().func,QQ().func,QQ().string,QQ().string,QQ().shape({addEventListener:QQ().func,removeEventListener:QQ().func,document:QQ().shape({getElementById:QQ().func,activeElement:QQ().any,body:QQ().any})});const _5=C.default.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: ${e=>e.height?e.height:"auto"};
  overflow: hidden;

  /* title of dropdown */ 
   .label {
    margin: 1rem 0;
    display: block;
  }
  
  /* input element of dropdown */
  .input-wrap {
    border: 1px solid ${hi};
    display: flex; 
    flex-flow: row wrap;
    align-items: center;
    box-sizing: border-box;
    border-radius: 1rem;
    padding: 0.1rem 0.75rem;
    margin: 0.25rem 0;
  }

  .input {
    border: none;
    box-sizing: border-box;
    padding-left: 0.75rem;
    flex-grow: 1;
  }
`,N5=C.default.button`
  color: ${qo};
  box-sizing: border-box;
  position: absolute;
  right: 0.5rem;
  top: 0.4rem;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`,P5=C.default.div`
  position: relative;
  box-sizing: border-box;
  margin: 0.75rem 0 0;
  width: 100%;
  border-radius: 0.75rem;
  z-index: 1;
  height: 148px;
  padding: 0.25rem;
  overflow: auto;
  display: flex;
  flex-flow: row wrap;
  flex: 1;
  border: 1px solid ${hi};
  border-radius: 1rem;

  .wrapper {
      position: relative;
      width: 240px;
      height: 130px;
      margin: 0.25rem;

    .item {
      background: ${ii};
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 0.65rem 1rem;
      cursor: pointer;
      border-radius: 0.75rem;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: flex-start;
      flex-grow: 1;

      &:first-child {
        margin-left: 0rem;
      }
      &:last-child {
        margin-right: 0rem;
      }
      p {
        color: ${qo};
        margin: 0.15rem 0 0;
      }
      .icon {
        margin-bottom: 0.7rem;
      }
    }
  }
`,j5=e=>{const{items:t,onChange:a,placeholder:r,value:l}=e;return(0,_u.jsx)(_5,{children:(0,_u.jsx)(M5,{onChange:a,itemToString:e=>e?e.meta.name:"",selectedItem:l,initialSelectedItem:l,children:e=>{var a;return(0,_u.jsx)("div",{children:(0,_u.jsxs)("div",{style:{position:"relative"},children:[(0,_u.jsxs)("div",{className:"input-wrap",children:[null!==l&&(0,_u.jsx)(W4,{value:null!==(a=null===l||void 0===l?void 0:l.address)&&void 0!==a?a:"",size:aV("2rem")}),(0,_u.jsx)("input",{...e.getInputProps({placeholder:r}),className:"input"})]}),e.selectedItem&&(0,_u.jsx)(N5,{onClick:e.clearSelection,"aria-label":"clear selection",children:(0,_u.jsx)(f$,{transform:"grow-2",icon:R$})}),(0,_u.jsx)(P5,{children:t.map(((t,a)=>(0,_u.jsx)(S5,{c:e,item:t,index:a},`controller_acc_${a}`)))})]})})}})})},S5=e=>{var t,a;let{c:r,item:l,index:s}=e;const{mode:n}=vJ();let o=l.active?r.getItemProps({index:s,item:l}):{};const i=(null===(t=r.selectedItem)||void 0===t?void 0:t.address)===(null===l||void 0===l?void 0:l.address)?Wo.primary[n]:Wo.text.primary[n],u=(null===(a=r.selectedItem)||void 0===a?void 0:a.address)===(null===l||void 0===l?void 0:l.address)?`2px solid ${Wo.primary[n]}`:`2px solid ${Wo.transparent[n]}`,c=l.active?1:.1;return(0,_u.jsxs)("div",{className:"wrapper",...o,children:[!l.active&&(0,_u.jsx)(Y$,{status:"sync_or_setup",title:l.alert,topOffset:"40%"}),(0,_u.jsxs)("div",{className:"item",style:{color:i,border:u,opacity:c},children:[(0,_u.jsx)("div",{className:"icon",children:(0,_u.jsx)(W4,{value:l.address,size:40})}),(0,_u.jsx)("h3",{style:{color:i},children:l.meta.name}),(0,_u.jsx)("p",{children:tV(l.address)})]})]},l.meta.name)},z5=e=>{const{section:t}=e,{network:a}=JO(),{units:r}=a,{activeAccount:l,accounts:s,getAccount:n}=JU(),{getBondedAccount:o,getAccountBalance:i,minReserve:u}=aF(),{getMessage:c}=H3(),{getSetupProgress:d,setActiveAccountSetup:h}=mF(),f=o(l),p=d(l),g=null!==p.controller?p.controller:f,m=n(g),[v,b]=(0,V.useState)(c(To)),[y,w]=(0,V.useState)(m);(0,V.useEffect)((()=>{let e=null!==p.controller?p.controller:f,t=n(e);w(t)}),[l]),(0,V.useEffect)((()=>{b(c(To))}),[c(To)]);let k=s.filter((e=>e.address!==l));return k=k.map((e=>{let t=i(e.address);return{...e,balance:t,active:rV(t.free.toNumber(),r)>=rV(u.toNumber(),r),alert:`Not Enough ${a.unit}`}})),k=k.sort(((e,t)=>t.balance.free.sub(e.balance.free).toNumber())),(0,_u.jsxs)(_u.Fragment,{children:[null!==v&&(0,_u.jsxs)(cF,{transparent:!0,style:{border:"2px solid rgba(242, 185, 27,0.25)"},children:[(0,_u.jsx)("h3",{children:"Import Your Controller Account"}),(0,_u.jsx)("p",{children:"You have not imported your Controller account. If you have lost access to your Controller account, set a new Controller now."}),(0,_u.jsx)(_3,{style:{width:"100%",padding:0,marginTop:"1rem"},children:(0,_u.jsx)(P3,{inline:!0,title:"Set New Controller"})})]}),null===v&&(0,_u.jsxs)(cF,{transparent:!0,children:[(0,_u.jsx)(L3,{thisSection:t,title:"Set Controller Account",assistantPage:"stake",assistantKey:"Stash and Controller Accounts",complete:null!==p.controller}),(0,_u.jsxs)(O3,{thisSection:t,activeSection:p.section,children:[(0,_u.jsx)(c3,{}),(0,_u.jsx)(j5,{items:k,onChange:e=>{var t;w(e),h({...p,controller:null!==(t=null===e||void 0===e?void 0:e.address)&&void 0!==t?t:null})},placeholder:"Search Account",value:y}),(0,_u.jsx)(A3,{complete:null!==p.controller})]})]})]})},T5=C.default.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;

  > div:last-child {
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    padding: 0.5rem 1rem;
  }
`,L5=C.default.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  > section {
    flex: 1;

    h3 {
      margin: 0;
    }

    input {
      max-width: 100%;
      margin-top: 0.5rem;
      border: none;
      background: ${ti};
      border-radius: 0.75rem;
      padding: 0.75rem;
    }
  }
`,A5=e=>{var t,a,r;const l=null!==(t=e.setters)&&void 0!==t?t:[],{disabled:s}=e,n=null!==(a=e.task)&&void 0!==a?a:"bond",o=null!==(r=e.value)&&void 0!==r?r:null,{network:i}=JO(),{units:u}=i,{activeAccount:c}=JU(),{getAccountBalance:d,getBondedAccount:h,getAccountLedger:f}=aF(),p=f(h(c)),{active:g}=p,m=d(c);let{freeAfterReserve:v}=m,b=rV(v.sub(g).toNumber(),u);b=b<0?0:b;let y=rV(g.toNumber(),u);const[w,k]=(0,V.useState)(o),x=e=>{for(let t of l)t.set({...t.current,bond:e})};return(0,V.useEffect)((()=>{var t;k(null!==(t=e.defaultValue)&&void 0!==t?t:0)}),[c]),(0,_u.jsxs)(T5,{children:[(0,_u.jsx)("div",{children:(0,_u.jsx)(L5,{children:(0,_u.jsxs)("section",{style:{opacity:s?.5:1},children:[(0,_u.jsxs)("h3",{children:["unbond"===n?"Unbond":"Bond"," ",i.unit,":"]}),(0,_u.jsx)("input",{type:"text",placeholder:`0 ${i.unit}`,value:w,onChange:e=>{"bond"===n?(e=>{let{value:t}=e.target;(cV(t)||""===t)&&(k(t),x(t))})(e):(e=>{let{value:t}=e.target;(cV(t)||""===t)&&(k(t),x(t))})(e)},disabled:s})]})})}),(0,_u.jsx)("div",{children:(0,_u.jsx)("div",{children:(0,_u.jsx)(P3,{inline:!0,small:!0,title:"Max",onClick:()=>{const e="bond"===n?b:y;k(e),x(e)}})})})]})},O5=C.default.div`
background: ${ti};
margin: 0.6rem 0;
padding: 0.5rem 0.75rem;
color: rgba(255, 144, 0, 1);
border-radius: 0.75rem;
display: flex;
flex-flow: row wrap;
align-items: center;

h4 {
  margin: 0 0 0 0.75rem;
}
`,V5=C.default.div`
  width: 100%;
  height: 1px;
  margin: 0.75rem 0;
`,B5=e=>{var t,a,r;const{defaultBond:l,unbond:s}=e,n=null!==(t=e.nominating)&&void 0!==t&&t;let o=null!==(a=e.setters)&&void 0!==a?a:[],i=null!==(r=e.listenIsValid)&&void 0!==r?r:()=>{};const{network:u}=JO(),{activeAccount:c}=JU(),{staking:d}=oF(),{getAccountBalance:h,getAccountLedger:f,getBondedAccount:p}=aF(),g=h(c),m=f(p(c)),{units:v}=u,{active:b}=m,{minNominatorBond:y}=d;let{freeAfterReserve:w}=g,k=rV(w.sub(b).toNumber(),v);k=k<0?0:k;let x=rV(b.toNumber(),v),C=y.div(new(xu())(10**v)).toNumber();const[M,E]=(0,V.useState)([]),[_,N]=(0,V.useState)({bond:l}),[P,j]=(0,V.useState)(!1);o.push({set:N,current:_}),(0,V.useEffect)((()=>{N({bond:l})}),[c]),(0,V.useEffect)((()=>{S()}),[_]);const S=()=>{let e=!1,t=new Array;s||(0===k&&(e=!0,t.push(`You have no free ${u.unit} to bond.`)),""!==_.bond&&_.bond>k&&t.push("Bond amount is more than your free balance."),n&&(k<C&&(e=!0,t.push(`You do not meet the minimum nominator bond of ${C} ${u.unit}.`)),""!==_.bond&&_.bond<C&&t.push("Bond amount must be at least "+C+" "+u.unit+"."))),s&&""!==_.bond&&_.bond>x&&t.push("Unbond amount is more than your bonded balance.");let a=!t.length&&""!==_.bond;j(e),i(a),E(t)};return(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsx)("div",{className:"head",children:(0,_u.jsxs)("h4",{children:[s?"Bonded":"Available",": ",sV(s?x:k)," ",u.unit]})}),M.map(((e,t)=>(0,_u.jsxs)(O5,{children:[(0,_u.jsx)(f$,{icon:P$,transform:"shrink-2"}),(0,_u.jsx)("h4",{children:e})]},`setup_error_${t}`))),(0,_u.jsx)(V5,{}),(0,_u.jsx)(A5,{task:s?"unbond":"bond",value:_.bond,defaultValue:l,disabled:P,setters:o})]})},H5=C.default.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 1rem;

  .bars {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: 1rem;

    > section {
      box-sizing: border-box;
      padding: 0 0.15rem;

      &:nth-child(1) {
        flex-basis: 15%;
      }
      &:nth-child(2) {
        flex-basis: 40%;
      }
      &:nth-child(3) {
        flex-basis: 45%;
      }
      h4, h5 {
        color: ${Xo};
      }

      h4 {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        margin-bottom: 0.4rem;
      }
      h5 {
        margin: 0;
        position: relative;
        opacity: 0.75;
      }
      .bar {
        background: ${ti};
        width: 100%;
        padding: 0.4rem 0.5rem;
        overflow: hidden;
        position: relative;
        transition: background 0.15s;
      }
      &:first-child .bar {
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        h5 {
          margin-left: 0.25rem;
        }
      }
      &:last-child .bar {
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }

      &.invert {
        h4 {
          color: ${Uo};
        }
        h5 {
          opacity: 1;
          color: white;
        }
        .bar {
          background: ${Fo};
        }
      }
    }
  }
`,I5=e=>{const{value:t}=e,{network:a}=JO(),{staking:r,eraStakers:l}=oF(),{unit:s,units:n}=a,{minNominatorBond:o}=r,{minActiveBond:i}=l;let u=o.div(new(xu())(10**n)).toNumber();const c=t>=u,d=t>=i;return(0,_u.jsx)(H5,{children:(0,_u.jsxs)("div",{className:"bars",children:[(0,_u.jsxs)("section",{className:c?"invert":"",children:[(0,_u.jsx)("h4",{children:"\xa0"}),(0,_u.jsx)("div",{className:"bar",children:(0,_u.jsx)("h5",{children:"Inactive"})})]}),(0,_u.jsxs)("section",{className:c?"invert":"",children:[(0,_u.jsxs)("h4",{children:[(0,_u.jsx)(f$,{icon:G4,transform:"shrink-4"}),"\xa0 Nominate",(0,_u.jsx)(g0,{page:"stake",title:"Nominating"})]}),(0,_u.jsx)("div",{className:"bar",children:(0,_u.jsxs)("h5",{children:[u," ",s]})})]}),(0,_u.jsxs)("section",{className:d?"invert":"",children:[(0,_u.jsxs)("h4",{children:[(0,_u.jsx)(f$,{icon:G4,transform:"shrink-4"}),"\xa0 Active",(0,_u.jsx)(g0,{page:"stake",title:"Active Bond Threshold"})]}),(0,_u.jsx)("div",{className:"bar",children:(0,_u.jsxs)("h5",{children:[i," ",s]})})]})]})})},R5=e=>{const{section:t}=e,{network:a}=JO(),{units:r}=a,{activeAccount:l}=JU(),{getAccountBalance:s,getAccountLedger:n,getBondedAccount:o}=aF(),{getSetupProgress:i,setActiveAccountSetup:u}=mF(),c=n(o(l)),{active:d}=c,h=s(l),f=i(l);let{freeAfterReserve:p}=h,g=rV(p.toNumber(),r)-rV(d.toNumber(),r);g=g<0?0:g;const m=0===f.bond?rV(g,r):f.bond,[v,b]=(0,V.useState)({bond:m}),[y,w]=(0,V.useState)(!1);return(0,V.useEffect)((()=>{b({bond:f.bond})}),[l]),(0,_u.jsxs)(cF,{transparent:!0,children:[(0,_u.jsx)(L3,{thisSection:t,complete:0!==f.bond,title:"Bond",assistantPage:"stake",assistantKey:"Bonding"}),(0,_u.jsxs)(O3,{thisSection:t,activeSection:f.section,children:[(0,_u.jsx)(B5,{nominating:!0,unbond:!1,listenIsValid:w,defaultBond:m,setters:[{set:u,current:f},{set:b,current:v}]}),(0,_u.jsx)(I5,{value:v.bond}),(0,_u.jsx)(A3,{complete:y})]})]})},W5=C.default.div`
  position: relative;
  box-sizing: border-box;
  margin: 0.75rem 0 0;
  width: 100%;
  border-radius: 0.75rem;
  padding: 0.25rem;
  overflow: auto;
  display: flex;
  flex-flow: row wrap;
  flex: 1;
`,D5=C.default.button`
  background: ${ii};
  border: 2px solid ${e=>e.selected?Uo:ii};
  box-sizing: border-box;
  width: 240px;
  height: 120px;
  padding: 1.25rem;
  margin: 0.25rem;
  border-radius: 0.75rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;

  > div {
    width: 100%;
  }
  h3 {
    color: ${e=>e.selected?Uo:qo};
    font-size: 1.2rem;
  }
  &:first-child {
    margin-left: 0rem;
  }
  &:last-child {
    margin-right: 0rem;
  }
  p {
    color: ${Xo};
    margin-top: 0.4rem;
    text-align: left;
  }
`,U5=e=>{const{section:t}=e,{activeAccount:a}=JU(),{getSetupProgress:r,setActiveAccountSetup:l}=mF(),s=r(a),n=["Staked","Stash","Controller"],[o,i]=(0,V.useState)(s.payee);(0,V.useEffect)((()=>{i(s.payee)}),[a]);return(0,_u.jsxs)(cF,{transparent:!0,children:[(0,_u.jsx)(L3,{thisSection:t,complete:null!==s.payee,title:"Reward Destination",assistantPage:"stake",assistantKey:"Reward Destination"}),(0,_u.jsxs)(O3,{thisSection:t,activeSection:s.section,children:[(0,_u.jsx)(c3,{}),(0,_u.jsx)(W5,{children:[{title:"Back to Staking",subtitle:"Payouts are automatically bonded to your existing bonded balance.",index:0},{title:"To Stash",subtitle:"Payouts will be sent to your stash account as free balance.",index:1},{title:"To Controller",subtitle:"Payouts will be sent to your controller account as free balance.",index:2}].map(((e,t)=>(0,_u.jsxs)(D5,{selected:o===n[e.index],onClick:()=>{return t=e.index,void(cV(t)&&(t>=n.length||(i(n[t]),l({...s,payee:n[t]}))));var t},children:[(0,_u.jsx)("h3",{children:e.title}),(0,_u.jsx)("div",{children:(0,_u.jsx)("p",{children:e.subtitle})})]},`payee_option_${t}`)))}),(0,_u.jsx)(A3,{complete:null!==s.payee})]})]})},F5=C.default.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1rem;

  > section {
    flex-basis: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-end;
    border-bottom: 1px solid ${hi};
    margin-top: 1rem;
    padding: 0.5rem 0 0.75rem 0;

    > div:first-child {
      width: 200px;
      display: flex;
      flex-flow: row wrap;
      align-items: flex-end;

      svg {
        color: ${Uo};
      }
    }

    > div:last-child {
      flex-grow: 1;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
  }
`,q5=V.createContext({addPending:e=>{},removePending:e=>{},pending:[]}),X5=()=>V.useContext(q5),Y5=e=>{const{section:t}=e,{api:a,network:r}=JO(),{units:l}=r,{activeAccount:s}=JU(),{getSetupProgress:n}=mF(),o=n(s),{addNotification:i}=J4(),{addPending:u,removePending:c}=X5(),{controller:d,bond:h,nominations:f,payee:p}=o,[g,m]=(0,V.useState)(!1),[v,b]=(0,V.useState)(null);(0,V.useEffect)((()=>{w()}),[]),(0,V.useEffect)((()=>{5===o.section&&w()}),[o]);const y=()=>{let e={Id:s},t=h*10**l,r=f.map((e=>({Id:e.address}))),n={Id:d};return[a.tx.staking.bond(e,t,p),a.tx.staking.nominate(r),a.tx.staking.setController(n)]},w=async()=>{const e=await a.tx.utility.batch(y()).paymentInfo(s);b(e.partialFee.toHuman())};return(0,_u.jsxs)(cF,{transparent:!0,children:[(0,_u.jsx)(L3,{thisSection:t,complete:null,title:"Summary"}),(0,_u.jsxs)(O3,{thisSection:t,activeSection:o.section,children:[(0,_u.jsxs)(F5,{children:[(0,_u.jsxs)("section",{children:[(0,_u.jsxs)("div",{children:[(0,_u.jsx)(f$,{icon:q4,transform:"grow-1"})," \xa0 Controller:"]}),(0,_u.jsx)("div",{children:d})]}),(0,_u.jsxs)("section",{children:[(0,_u.jsxs)("div",{children:[(0,_u.jsx)(f$,{icon:q4,transform:"grow-1"})," \xa0 Reward Destination:"]}),(0,_u.jsx)("div",{children:p})]}),(0,_u.jsxs)("section",{children:[(0,_u.jsxs)("div",{children:[(0,_u.jsx)(f$,{icon:q4,transform:"grow-1"})," \xa0 Nominations:"]}),(0,_u.jsx)("div",{children:f.length})]}),(0,_u.jsxs)("section",{children:[(0,_u.jsxs)("div",{children:[(0,_u.jsx)(f$,{icon:q4,transform:"grow-1"})," \xa0 Bond Amount:"]}),(0,_u.jsxs)("div",{children:[sV(h)," ",r.unit]})]}),(0,_u.jsxs)("section",{children:[(0,_u.jsx)("div",{children:"Estimated Tx Fee:"}),(0,_u.jsx)("div",{children:null===v?"...":`${v}`})]})]}),(0,_u.jsx)("div",{style:{flex:1,width:"100%",display:"flex"},children:(0,_u.jsx)(N3,{margin:"0",padding:"0.75rem 1.2rem",fontSize:"1.1rem",onClick:()=>(async()=>{const e=await a.rpc.system.accountNextIndex(s),t=await ZU(s);m(!0),u(e),i({title:"Transaction Submitted",subtitle:"Initiating staking setup."});try{const e=await a.tx.utility.batch(y()).signAndSend(s,{signer:t.signer},(t=>{let{status:a,nonce:r,events:l=[]}=t;a.isFinalized&&(l.forEach((e=>{let{phase:t,event:{data:a,method:r,section:l}}=e;"ExtrinsicSuccess"===r?i({title:"Transaction Successful",subtitle:"Staking setup successful"}):"ExtrinsicFailed"===r&&i({title:"Transaction Failed",subtitle:"Staking setup failed"})})),m(!1),c(r),e())}))}catch(F3){m(!1),c(e),i({title:"Transaction Cancelled",subtitle:"Staking setup was cancelled"})}})(),disabled:g,children:"Start Staking"})})]})]})},G5=e=>{const{network:t}=JO(),{units:a}=t,{activeAccount:r}=JU(),{getAccountLedger:l,getBondedAccount:s}=aF(),{hasController:n}=oF(),o=l(s(r));let{unlocking:i}=o;lV(i,a);return(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsx)(k0,{title:`${e.title} Setup`}),(0,_u.jsx)(Mi,{noVerticalSpacer:!0,children:!n()&&(0,_u.jsxs)(cF,{children:[(0,_u.jsx)(z3.W_,{name:"controller",style:{position:"absolute"}}),(0,_u.jsx)(z5,{section:1})]})}),(0,_u.jsx)(Mi,{noVerticalSpacer:!0,children:(0,_u.jsxs)(cF,{children:[(0,_u.jsx)(z3.W_,{name:"payee",style:{position:"absolute"}}),(0,_u.jsx)(U5,{section:2})]})}),(0,_u.jsx)(Mi,{noVerticalSpacer:!0,children:(0,_u.jsxs)(cF,{children:[(0,_u.jsx)(z3.W_,{name:"nominate",style:{position:"absolute"}}),(0,_u.jsx)(V3,{section:3})]})}),(0,_u.jsx)(Mi,{noVerticalSpacer:!0,children:(0,_u.jsxs)(cF,{children:[(0,_u.jsx)(z3.W_,{name:"bond",style:{position:"absolute"}}),(0,_u.jsx)(R5,{section:4})]})}),(0,_u.jsx)(Mi,{noVerticalSpacer:!0,children:(0,_u.jsxs)(cF,{children:[(0,_u.jsx)(z3.W_,{name:"summary",style:{position:"absolute"}}),(0,_u.jsx)(Y5,{section:5})]})})]})},Z5=()=>{const{mode:e}=vJ();return(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsxs)(Mi,{noVerticalSpacer:!0,style:{marginTop:"1rem",marginBottom:"1rem"},children:[(0,_u.jsx)(s0,{height:80,width:"100%",backgroundColor:Wo.loader.background[e],foregroundColor:Wo.loader.foreground[e],opacity:.2,style:{maxWidth:275,marginRight:"1rem"},children:(0,_u.jsx)("rect",{x:"0",y:"0",rx:"0.75rem",ry:"0.75rem",width:"100%",height:"100%"})}),(0,_u.jsx)(s0,{height:80,width:"100%",backgroundColor:Wo.loader.background[e],foregroundColor:Wo.loader.foreground[e],opacity:.2,style:{maxWidth:275,marginRight:"1rem"},children:(0,_u.jsx)("rect",{x:"0",y:"0",rx:"0.75rem",ry:"0.75rem",width:"100%",height:"100%"})}),(0,_u.jsx)(s0,{height:80,width:"100%",backgroundColor:Wo.loader.background[e],foregroundColor:Wo.loader.foreground[e],opacity:.2,style:{maxWidth:275},children:(0,_u.jsx)("rect",{x:"0",y:"0",rx:"0.75rem",ry:"0.75rem",width:"100%",height:"100%"})})]}),(0,_u.jsx)(Mi,{noVerticalSpacer:!0,style:{marginBottom:"1rem"},children:(0,_u.jsx)(s0,{height:60,width:"100%",backgroundColor:Wo.loader.background[e],foregroundColor:Wo.loader.foreground[e],opacity:.2,children:(0,_u.jsx)("rect",{x:"0",y:"0",rx:"0.75rem",ry:"0.75rem",width:"100%",height:"100%"})})}),(0,_u.jsx)(Mi,{noVerticalSpacer:!0,style:{marginBottom:"1rem"},children:(0,_u.jsx)(s0,{height:60,width:"100%",backgroundColor:Wo.loader.background[e],foregroundColor:Wo.loader.foreground[e],opacity:.2,children:(0,_u.jsx)("rect",{x:"0",y:"0",rx:"0.75rem",ry:"0.75rem",width:"100%",height:"100%"})})}),(0,_u.jsx)(Mi,{noVerticalSpacer:!0,children:(0,_u.jsx)(s0,{height:60,width:"100%",backgroundColor:Wo.loader.background[e],foregroundColor:Wo.loader.foreground[e],opacity:.2,children:(0,_u.jsx)("rect",{x:"0",y:"0",rx:"0.75rem",ry:"0.75rem",width:"100%",height:"100%"})})})]})},K5=e=>{const{network:t}=JO(),{units:a}=t,{activeAccount:r}=JU(),{getAccountLedger:l,getBondedAccount:s}=aF(),{inSetup:n}=oF(),{isSyncing:o}=mF(),{page:i}=e,{title:u}=i,c=l(s(r));let{unlocking:d}=c,h=(lV(d,a),n()),f=o();return(0,_u.jsx)(_u.Fragment,{children:(0,_u.jsx)(o3,{children:f?(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsx)(k0,{title:`${u}`}),(0,_u.jsx)(Z5,{})]}):(0,_u.jsx)(_u.Fragment,{children:h?(0,_u.jsx)(G5,{title:u}):(0,_u.jsx)(S3,{title:u})})})})},J5=C.default.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  border-bottom: ${e=>e.last?"0px solid":"1px solid "} ${hi};
  padding-bottom: ${e=>e.last?0:"0.5rem"};
  margin-bottom: 0.75rem;

  .account {
    width: 100%;
    display: flex; 
    flex-flow: row wrap;
    align-items: center;
    padding: 0;

    button {
      color: ${qo};
    }

    .icon {
      position: relative;
      top: 0.1rem;
      margin-right: 0.5rem;
    }
    h4 {
      margin: 0;
      padding: 0;

      > .addr {
        opacity: 0.75;
      }
    }

    > *:last-child {
      flex-grow: 1;
      display: flex;
      flex-flow: row-reverse wrap;

      > .copy {
        color: ${Xo};
        opacity: 0.5;
        cursor: pointer;
        transition: opacity 0.1s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`,Q5=e=>{const{address:t,last:a}=e,{addNotification:r}=J4();let l={};return null!==t&&(l={title:"Address Copied to Clipboard",subtitle:t}),(0,_u.jsx)(J5,{last:a,children:(0,_u.jsxs)("div",{className:"account",children:[null===t?(0,_u.jsx)("h4",{children:"Not in a Pool"}):(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsx)("div",{className:"icon",children:(0,_u.jsx)(R4,{value:t,size:"1.6rem"})}),(0,_u.jsx)("h4",{children:tV(t)})]}),(0,_u.jsx)("div",{children:(0,_u.jsx)(co.div,{className:"copy",whileHover:{scale:1.02},whileTap:{scale:.97},children:null!==t&&(0,_u.jsx)("button",{onClick:()=>r(l),children:(0,_u.jsx)(Z4.CopyToClipboard,{text:t,children:(0,_u.jsx)(f$,{icon:Y4,transform:"grow-1"})})})})})]})})},$5=(0,C.default)(co.div)`
  padding: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;

  > div {
    padding: 0.75rem 0.6rem;
    flex: 1;
    background: ${ei};
    border-radius: 0.75rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    max-width: 100%;

    h3 {
      margin: 0 0.75rem;
      border-right: 1px solid ${fi};
      padding-right: 1rem;
    }

    .identity {
      position: relative;
      display: flex;
      margin-left: 0.75rem;
      margin-right: 0.5rem;
      flex-flow: row wrap;
      align-items: center;
      align-content: center;
      overflow: hidden;
      flex: 1;
      
      h4 {
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .labels {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
      align-items: center;
      flex-grow: 1;

      label {
        margin-left: 0.5rem;
        color: ${Xo};

        &.warning {
          color: #d2545d;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
        }
        button {
          color: ${Xo};
          &:hover {
            color: #666;
          }
          &.active {
          color: rgba(211, 48, 121, 0.85);
        }
        }
      }
    }

    svg { margin: 0; }
  }
`,e8=e=>{const{initial:t,pool:a}=e,{memberCounter:r,addresses:l,id:s}=a;return(0,_u.jsx)($5,{children:(0,_u.jsxs)("div",{children:[(0,_u.jsx)("h3",{children:s}),(0,_u.jsx)(W4,{value:l.stash,size:26}),t?(0,_u.jsx)(co.div,{className:"identity",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:(0,_u.jsx)("h4",{children:tV(l.stash)})}):(0,_u.jsx)("div",{className:"identity",children:(0,_u.jsx)("h4",{children:tV(l.stash)})}),(0,_u.jsx)("div",{className:"labels",children:(0,_u.jsx)(co.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.1},children:(0,_u.jsxs)("label",{children:[(0,_u.jsx)(f$,{icon:F$}),"\xa0 ",r]})})})]})})};class t8 extends V.Component{render(){return(0,_u.jsx)(e8,{...this.props})}}const a8=e=>{var t;const{isReady:a}=JO(),{metrics:r}=eV(),{setListFormat:l,listFormat:s}=mF(),{allowMoreCols:n,pagination:o}=e,i=null!==(t=e.disableThrottle)&&void 0!==t&&t,[u,c]=(0,V.useState)(1),[d,h]=(0,V.useState)(1),[f,p]=(0,V.useState)(e.pools),[g,m]=(0,V.useState)(e.pools),[v,b]=(0,V.useState)(!0),[y,w]=(0,V.useState)(!1),k=(0,V.useRef)(d);let x=Math.ceil(g.length/Lo),C=u+1>x?x:u+1,M=u-1<1?1:u-1,E=u*Lo-1,_=E-49,N=20*d-1;(0,V.useEffect)((()=>{w(!1)}),[e.pools]),(0,V.useEffect)((()=>{a&&0!==r.activeEra.index&&!y&&(p(e.pools),m(e.pools),b(!0),w(!0))}),[a,y,r.activeEra.index]),(0,V.useEffect)((()=>{N>=E||i||setTimeout((()=>{var e;e=k.current+1,k.current=e,h(e)}),500)}),[k.current]);let P=[];return P=i?g:g.slice(_).slice(0,Lo),g.length?(0,_u.jsxs)(d3,{children:[(0,_u.jsxs)(h3,{children:[(0,_u.jsx)("div",{children:(0,_u.jsx)("h3",{children:e.title})}),(0,_u.jsxs)("div",{children:[(0,_u.jsx)("button",{onClick:()=>l("row"),children:(0,_u.jsx)(f$,{icon:m$,color:"row"===s?"#d33079":"inherit"})}),(0,_u.jsx)("button",{onClick:()=>l("col"),children:(0,_u.jsx)(f$,{icon:z$,color:"col"===s?"#d33079":"inherit"})})]})]}),(0,_u.jsxs)(p3,{flexBasisLarge:n?"33.33%":"50%",children:[o&&(0,_u.jsxs)(f3,{prev:1!==u,next:u!==x,children:[(0,_u.jsx)("div",{children:(0,_u.jsxs)("h4",{children:["Page ",u," of ",x]})}),(0,_u.jsxs)("div",{children:[(0,_u.jsx)("button",{className:"prev",onClick:()=>{c(M),b(!1)},children:"Prev"}),(0,_u.jsx)("button",{className:"next",onClick:()=>{c(C),b(!1)},children:"Next"})]})]}),(0,_u.jsx)(co.div,{className:"transition",initial:"hidden",animate:"show",variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.01}}},children:P.map(((e,t)=>(0,_u.jsx)(co.div,{className:"item "+("row"===s?"row":"col"),variants:{hidden:{y:15,opacity:0},show:{y:0,opacity:1}},children:(0,_u.jsx)(t8,{pool:e,initial:v})},`nomination_${t}`)))})]})]}):(0,_u.jsx)(_u.Fragment,{})};class r8 extends V.Component{shouldComponentUpdate(e,t){return this.props.pools!==e.pools}render(){return(0,_u.jsx)(a8,{...this.props})}}r8.contextType=nF;const l8={counterForPoolMembers:0,counterForBondedPools:0,counterForRewardPools:0,maxPoolMembers:0,maxPoolMembersPerPool:0,maxPools:0,minCreateBond:0,minJoinBond:0},s8={poolId:0,points:"",rewardPoolTotalEarnings:0,unbondingEras:{}},n8=V.createContext({meta:l8,status:s8}),o8=e=>{var t,a,r,l,s,n,o,i,u;const{page:c}=e,{title:d}=c,{meta:h}=V.useContext(n8),{network:f}=JO(),[p]=(0,V.useState)({pools:[{id:1,points:"20,100,000,000,000,000",state:"Open",memberCounter:2,roles:{depositor:"133YZZ6GvY8DGVjH2WExeGkahFQcw68N2MnVRieaURmqD3u3",root:"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",nominator:"133YZZ6GvY8DGVjH2WExeGkahFQcw68N2MnVRieaURmqD3u3",stateToggler:"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"},addresses:{stash:"133YZZ6GvY8DGVjH2WExeGkahFQcw68N2MnVRieaURmqD3u3",reward:"133YZZ6GvY8DGVjH2WExeGkahFQcw68N2MnVRieaURmqD3u3"}},{id:2,points:"10,100,000,000,000,000",state:"Open",memberCounter:20,roles:{depositor:"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",root:"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",nominator:"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",stateToggler:"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"},addresses:{stash:"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",reward:"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"}}],activePool:1}),g=h.counterForBondedPools+h.counterForRewardPools,m=((e,t)=>isNaN(e)?t:e)(((null!==(t=h.counterForRewardPools)&&void 0!==t?t:0)/(.01*g)).toFixed(2),0),v=p.pools.find((e=>e.id===h.counterForRewardPools)),b=[{format:"chart-pie",params:{label:"Active Pools",value:h.counterForRewardPools,value2:g-h.counterForRewardPools,total:g,unit:"",tooltip:`${m}%`,assistant:{page:"pools",key:"Active Pools"}}},{format:"number",params:{label:"Minimum Join Bond",value:h.minJoinBond,unit:"DOT",assistant:{page:"pools",key:"Era"}}},{format:"number",params:{label:"Minimum Create Bond",value:h.minCreateBond,unit:"DOT",assistant:{page:"pools",key:"Era"}}}];return(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsx)(k0,{title:d}),(0,_u.jsx)(Nu,{children:b.map(((e,t)=>(0,V.createElement)(s3,{...e,key:t})))}),(0,_u.jsxs)(Mi,{noVerticalSpacer:!0,children:[(0,_u.jsx)(iF,{paddingLeft:!0,children:(0,_u.jsx)(cF,{style:{height:360},children:(0,_u.jsxs)("div",{className:"head",children:[(0,_u.jsxs)("h4",{children:["Status",(0,_u.jsx)(g0,{page:"pools",title:"Pool Status"})]}),(0,_u.jsxs)("h2",{children:["Actively in Pool and Earning Rewards \xa0",(0,_u.jsx)("div",{children:void 0===v?(0,_u.jsx)(P3,{small:!0,inline:!0,primary:!0,title:"Create Pool",onClick:()=>{}}):(0,_u.jsx)(P3,{small:!0,inline:!0,primary:!0,title:"Leave",onClick:()=>{}})})]}),(0,_u.jsx)(Ei,{}),(0,_u.jsxs)("h4",{children:["Bonded in Pool",(0,_u.jsx)(g0,{page:"pools",title:"Bonded in Pool"})]}),(0,_u.jsxs)("h2",{children:["32.622931 ",f.unit," \xa0",(0,_u.jsxs)("div",{children:[(0,_u.jsx)(P3,{small:!0,primary:!0,inline:!0,title:"+",onClick:()=>{}}),(0,_u.jsx)(P3,{small:!0,primary:!0,title:"-",onClick:()=>{}})]})]}),(0,_u.jsx)(Ei,{}),(0,_u.jsxs)("h4",{children:["Unclaimed Rewards",(0,_u.jsx)(g0,{page:"pools",title:"Pool Rewards"})]}),(0,_u.jsxs)("h2",{children:["0.82 ",f.unit," \xa0",(0,_u.jsx)("div",{children:(0,_u.jsx)(P3,{small:!0,primary:!0,inline:!0,title:"Claim",onClick:()=>{}})})]})]})})}),(0,_u.jsx)(uF,{children:(0,_u.jsx)(cF,{style:{height:360},children:(0,_u.jsxs)("div",{className:"head",children:[(0,_u.jsx)("h2",{children:"Pool Roles"}),(0,_u.jsxs)("h4",{children:["Root ",(0,_u.jsx)(g0,{page:"pools",title:"Joined Pool"})]}),(0,_u.jsx)(Q5,{address:null!==(a=null===v||void 0===v||null===(r=v.roles)||void 0===r?void 0:r.root)&&void 0!==a?a:null}),(0,_u.jsxs)("h4",{children:["Depositor ",(0,_u.jsx)(g0,{page:"pools",title:"Joined Pool"})]}),(0,_u.jsx)(Q5,{address:null!==(l=null===v||void 0===v||null===(s=v.roles)||void 0===s?void 0:s.depositor)&&void 0!==l?l:null}),(0,_u.jsxs)("h4",{children:["Nominator ",(0,_u.jsx)(g0,{page:"pools",title:"Joined Pool"})]}),(0,_u.jsx)(Q5,{address:null!==(n=null===v||void 0===v||null===(o=v.roles)||void 0===o?void 0:o.nominator)&&void 0!==n?n:null}),(0,_u.jsxs)("h4",{children:["State Toggler",(0,_u.jsx)(g0,{page:"pools",title:"Joined Pool"})]}),(0,_u.jsx)(Q5,{address:null!==(i=null===v||void 0===v||null===(u=v.roles)||void 0===u?void 0:u.stateToggler)&&void 0!==i?i:null,last:!0})]})})})]}),(0,_u.jsx)(Mi,{noVerticalSpacer:!0,children:(0,_u.jsxs)(cF,{children:[(0,_u.jsxs)("h2",{children:["Pools",(0,_u.jsx)(g0,{page:"pools",title:"Nomination Pools"})]}),(0,_u.jsx)(r8,{pools:p.pools,title:"Active Pools",allowMoreCols:!0,pagination:!0})]})})]})},i8=e=>{const{page:t}=e,{title:a}=t,{isReady:r}=JO(),{metrics:l}=eV(),{staking:s,eraStakers:n}=oF(),{validators:o}=pF(),{totalValidators:i,maxValidatorsCount:u,validatorCount:c}=s,{activeValidators:d}=n;let h=0;u.gt(new(xu())(0))&&(h=i.div(u.div(new(xu())(100))).toNumber());let f=0;c.gt(new(xu())(0))&&(f=d/(.01*c.toNumber()));const p=[{format:"chart-pie",params:{label:"Total Validators",value:i.toNumber(),value2:u.sub(i).toNumber(),total:u.toNumber(),unit:"",tooltip:`${h.toFixed(2)}%`,assistant:{page:"validators",key:"Validator"}}},{format:"chart-pie",params:{label:"Active Validators",value:d,value2:c.sub(new(xu())(d)).toNumber(),total:c.toNumber(),unit:"",tooltip:`${f.toFixed(2)}%`,assistant:{page:"validators",key:"Active Validator"}}},{format:"number",params:{label:"Active Era",value:l.activeEra.index,unit:"",assistant:{page:"validators",key:"Era"}}}];return(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsx)(k0,{title:a}),(0,_u.jsx)(Nu,{children:p.map(((e,t)=>(0,V.createElement)(s3,{...e,key:t})))}),(0,_u.jsx)(Mi,{noVerticalSpacer:!0,children:(0,_u.jsx)(cF,{children:r&&(0,_u.jsxs)(_u.Fragment,{children:[0===o.length&&(0,_u.jsx)("div",{className:"item",children:(0,_u.jsx)("h4",{children:"Fetching validators..."})}),o.length>0&&(0,_u.jsx)(C3,{validators:o,batchKey:"validators_browse",title:"Validators",allowMoreCols:!0,allowFilters:!0,pagination:!0,toggleFavourites:!0})]})})})]})},u8=e=>{const{isReady:t}=JO(),{page:a}=e,{title:r}=a,{favouritesList:l}=pF();return(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsx)(k0,{title:r}),(0,_u.jsx)(Mi,{noVerticalSpacer:!0,children:(0,_u.jsx)(cF,{children:null===l?(0,_u.jsx)("h4",{children:"Fetching favourite validators..."}):(0,_u.jsx)(_u.Fragment,{children:t&&(0,_u.jsx)(_u.Fragment,{children:l.length>0&&(0,_u.jsx)(C3,{validators:l,batchKey:"favourite_validators",title:"Favourite Validators",refetchOnListUpdate:!0,allowMoreCols:!0,toggleFavourites:!0})})})})})]})},c8=(0,C.default)(co.div)`
  padding: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;

  > div {
    padding: 0.75rem 0.5rem;
    flex: 1;
    background: ${ei};
    border-radius: 0.75rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    max-width: 100%;

    h4 {
      margin: 0 0.75rem;
      color: ${Xo};

      &.reward {
        color: ${Uo};
      }
    }

    span {
      border-radius: 0.65rem;
      padding: 0.1rem 0.6rem;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;

      h4 {
        color: ${Xo};
        opacity: 0.6;
        margin: 0;
      }
    }

    > div:first-child {
      flex-grow: 1;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;
    }

    > div:last-child {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-end;

      > h4 {
        color: ${Xo};
        opacity: 0.8;
      }
    }
  }
`,d8=e=>{var t;const{isReady:a,network:r}=JO(),{units:l}=r,{metrics:s}=eV(),{setListFormat:n,listFormat:o}=mF(),{allowMoreCols:i,pagination:u}=e,c=null!==(t=e.disableThrottle)&&void 0!==t&&t,[d,h]=(0,V.useState)(1),[f,p]=(0,V.useState)(1),[g,m]=(0,V.useState)(e.payouts),[v,b]=(0,V.useState)(e.payouts),[y,w]=(0,V.useState)(!0),[k,x]=(0,V.useState)(!1),C=(0,V.useRef)(f);let M=Math.ceil(v.length/Lo),E=d+1>M?M:d+1,_=d-1<1?1:d-1,N=d*Lo-1,P=N-49,j=20*f-1;(0,V.useEffect)((()=>{x(!1)}),[e.payouts]),(0,V.useEffect)((()=>{a&&0!==s.activeEra.index&&!k&&(m(e.payouts),b(e.payouts),w(!0),x(!0))}),[a,k,s.activeEra.index]),(0,V.useEffect)((()=>{j>=N||c||setTimeout((()=>{var e;e=C.current+1,C.current=e,p(e)}),500)}),[C.current]);let S=[];return S=c?v:v.slice(P).slice(0,Lo),v.length?(0,_u.jsxs)(d3,{children:[(0,_u.jsxs)(h3,{children:[(0,_u.jsx)("div",{children:(0,_u.jsx)("h3",{children:e.title})}),(0,_u.jsxs)("div",{children:[(0,_u.jsx)("button",{onClick:()=>n("row"),children:(0,_u.jsx)(f$,{icon:m$,color:"row"===o?"#d33079":"inherit"})}),(0,_u.jsx)("button",{onClick:()=>n("col"),children:(0,_u.jsx)(f$,{icon:z$,color:"col"===o?"#d33079":"inherit"})})]})]}),(0,_u.jsxs)(p3,{flexBasisLarge:i?"33.33%":"50%",children:[u&&(0,_u.jsxs)(f3,{prev:1!==d,next:d!==M,children:[(0,_u.jsx)("div",{children:(0,_u.jsxs)("h4",{children:["Page ",d," of ",M]})}),(0,_u.jsxs)("div",{children:[(0,_u.jsx)("button",{className:"prev",onClick:()=>{h(_),w(!1)},children:"Prev"}),(0,_u.jsx)("button",{className:"next",onClick:()=>{h(E),w(!1)},children:"Next"})]})]}),(0,_u.jsx)(co.div,{className:"transition",initial:"hidden",animate:"show",variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.01}}},children:S.map(((e,t)=>{const{amount:a,block_timestamp:s,event_id:n}=e;return(0,_u.jsx)(co.div,{className:"item "+("row"===o?"row":"col"),variants:{hidden:{y:15,opacity:0},show:{y:0,opacity:1}},children:(0,_u.jsx)(c8,{children:(0,_u.jsxs)("div",{children:[(0,_u.jsxs)("div",{children:[(0,_u.jsx)("span",{className:n.toLowerCase(),children:(0,_u.jsx)("h4",{children:n})}),(0,_u.jsxs)("h4",{className:n.toLowerCase(),children:["Reward"===n?"+":"-",rV(a,l)," ",r.unit]})]}),(0,_u.jsx)("div",{children:(0,_u.jsx)("h4",{children:kJ().unix(s).fromNow()})})]})})},`nomination_${t}`)}))})]})]}):(0,_u.jsx)(_u.Fragment,{})};class h8 extends V.Component{render(){return(0,_u.jsx)(d8,{...this.props})}}h8.contextType=nF;const f8=e=>{const{network:t}=JO(),{staking:a}=oF(),{payouts:r}=b0(),{services:l}=mF(),{unit:s,units:n}=t,{lastReward:o}=a,{page:i}=e,{title:u}=i,c=V.useRef();let d=fJ(c.current),{width:h,height:f,minHeight:p}=pJ(d,250),g=[{format:"number",params:{label:"Last Era Payout",value:o.div(new(xu())(10**n)).toNumber(),unit:s,assistant:{page:"payouts",key:"Last Era Payout"}}}];const m=[...r].reverse().slice(0,60);return(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsx)(k0,{title:u}),(0,_u.jsx)(Nu,{children:g.map(((e,t)=>(0,V.createElement)(s3,{...e,key:t})))}),(0,_u.jsx)(Mi,{children:(0,_u.jsxs)(dF,{children:[(0,_u.jsx)(w0,{}),(0,_u.jsxs)("div",{className:"head",children:[(0,_u.jsxs)("h4",{children:["Payout History",(0,_u.jsx)(g0,{page:"payouts",title:"Payout History"})]}),(0,_u.jsx)("h2",{children:r.length?(0,_u.jsxs)(_u.Fragment,{children:[kJ().unix(r[0].block_timestamp).format("Do MMMM")," - ",kJ().unix(r[r.length-1].block_timestamp).format("Do MMMM")]}):(0,_u.jsx)("span",{className:"fiat",children:"None"})})]}),(0,_u.jsxs)("div",{className:"inner",ref:c,style:{minHeight:p},children:[l.includes("subscan")?(0,_u.jsx)(Y$,{status:"sync_or_setup",title:"Not Yet Staking"}):(0,_u.jsx)(Y$,{status:"active_service",statusFor:"subscan",title:"Subscan Disabled"}),(0,_u.jsxs)("div",{className:"graph",style:{height:`${f}px`,width:`${h}px`,position:"absolute"},children:[(0,_u.jsx)(xJ,{payouts:r.slice(0,60),height:"120px"}),(0,_u.jsx)(yJ,{payouts:r.slice(0,60),height:"70px"})]})]})]})}),m.length?(0,_u.jsx)(Mi,{noVerticalSpacer:!0,children:(0,_u.jsx)(cF,{children:(0,_u.jsx)(h8,{title:"Recent Payouts",payouts:m,pagination:!0})})}):(0,_u.jsx)(_u.Fragment,{})]})},p8=C.default.div`
  h2 {
    color: ${Xo};
    margin-top: 2rem;
  }
`,g8=(0,C.default)(co.div)`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`,m8=(0,C.default)(co.button)`
  width: 200px;
  height: 200px;
  background: ${ci};
  color: ${Xo};
  margin: 1rem 2rem 1rem 0;
  border-radius: 0.75rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`,v8=e=>{const{page:t}=e,{title:a}=t;return(0,V.useEffect)((()=>{!function(e,t,a,r){function l(){if(!t.getElementById("canny-jssdk")){var e=t.getElementsByTagName(r)[0],a=t.createElement(r);a.type="text/javascript",a.async=!0,a.src="https://canny.io/sdk.js",e.parentNode.insertBefore(a,e)}}if("function"!=typeof e.Canny){var s=function(){s.q.push(arguments)};s.q=[],e.Canny=s,"complete"===t.readyState?l():e.attachEvent?e.attachEvent("onload",l):e.addEventListener("load",l,!1)}}(window,document,0,"script"),Canny("render",{boardToken:"2dda48aa-e149-da7b-f016-98e22279df1e",basePath:null,ssoToken:null})}),[]),(0,_u.jsxs)(p8,{children:[(0,_u.jsx)(k0,{title:a}),(0,_u.jsx)(Mi,{children:(0,_u.jsx)("div",{"data-canny":!0,style:{width:"100%"}})})]})},b8=[{_id:1,title:"default"},{_id:2,title:"Staking"},{_id:3,title:"Validators"},{_id:4,title:"Explore"},{_id:5,title:"Feedback"}],y8=[{category:1,title:"Overview",uri:Co+"/",hash:"/overview",Entry:n3,icon:v$},{category:2,title:"Stake",uri:Co+"/stake",hash:"/stake",Entry:K5,icon:y$},{category:2,title:"Pools",uri:Co+"/pools",hash:"/pools",Entry:o8,icon:F$},{category:2,title:"Payouts",uri:Co+"/payouts",hash:"/payouts",Entry:f8,icon:H$},{category:3,title:"Validators",uri:Co+"/validators",hash:"/validators",Entry:i8,icon:B$},{category:3,title:"Favourites",uri:Co+"/favourites",hash:"/favourites",Entry:u8,icon:I$},{category:4,title:"Community",uri:Co+"/community",hash:"/community",Entry:e=>{const{page:t}=e,{title:a}=t,r={hidden:{opacity:0},show:{opacity:1,transition:{duration:1,staggerChildren:.25}}},l={hidden:{opacity:0,y:50,transition:{duration:.5}},show:{opacity:1,y:0,transition:{duration:.5}}};return(0,_u.jsxs)(p8,{children:[(0,_u.jsx)(k0,{title:a}),(0,_u.jsx)(Mi,{children:(0,_u.jsxs)("div",{children:[(0,_u.jsx)("h2",{children:"Validator Programs"}),(0,_u.jsx)(g8,{variants:r,initial:"hidden",animate:"show",children:(0,_u.jsx)(m8,{whileHover:{scale:1.02},whileTap:{scale:.98},variants:l,children:"cool icon here"})}),(0,_u.jsx)("h2",{children:"Staking in the Polkadot Ecosystem"}),(0,_u.jsxs)(g8,{variants:r,initial:"hidden",animate:"show",children:[(0,_u.jsx)(m8,{whileHover:{scale:1.02},whileTap:{scale:.98},variants:l,children:"cool icon here"}),(0,_u.jsx)(m8,{whileHover:{scale:1.02},whileTap:{scale:.98},variants:l,children:"cool icon here"})]})]})})]})},icon:W$},{category:5,title:"Feedback",uri:Co+"/feedback",hash:"/feedback",Entry:v8,icon:E$}],w8=[{key:"overview",definitions:[{title:"Supply Staked",description:["The current cumulative supply of DOT being staked globally.","The percentage of staked DOT is relative to the total supply of DOT."]},{title:"Nominators",description:["Nominators are accounts who are staking in the network, regardless of whether they are active or earning rewards.","In order to stake DOT, you must be a nominator."]},{title:"Active Nominators",description:["The amount of nominators in the network who are actively earning rewards."]},{title:"Announcements",description:["Real time network statistics that may affect your staking positions.","Keep up to date on the state of the network from your Overview."]}],external:[]},{key:"stake",definitions:[{title:"Staking Status",description:["The current state of your staking position.","Whether you receive rewards depends on whether you have active nominations in the current era, and whether you are above their over-subscribed threshold.","Your staking status provides you this information at a glance."]},{title:"Stash and Controller Accounts",description:["The Stash and Controller are simply Polkadot accounts that manage your staking activity.","Your Stash account is the account used to hold your staked funds, whereas the Controller account is used to carry out Staking actions on the Stash account's behalf.","When you switch accounts in this app, you are actually switching your Stash account. Your Controller account is then automatically fetched for you.","This app assumes you have both Stash and Controller accounts imported. If you do not, you will not be able to use all app functions.","You can assign a different Controller account on the Stake page."]},{title:"Bonding",description:['Bonding funds is the process of "locking" (or staking) DOT. Bonded DOT will then be automatically allocated to one or more of your nominated validators.',"The minimum active bond statistic is the minimum DOT being bonded by a nominator for the current era."]},{title:"Active Bond Threshold",description:["The amount of DOT needed to be actively nominating in an era. ","Being above this metric simply guarantees that you will be present in the active nominator set for the era. This amount still does not guarantee rewards, as your active nominations may still be over-subscribed.","Only the top 256 nominators are rewarded per validator. Ensuring your active bond is above this threshold will increase your chances of rewards.","You can keep track of these metrics from the dashboard and amend your staking position if necessary, whether increasing your bonded DOT or changing your nominations."]},{title:"Reward Destination",description:["Your reward destination is where your rewards are sent to.","Rewards can be automatically bonded on top of your current bond, or they can be sent to your stash, controller, or an external account of your choosing."]},{title:"Nominating",description:["Nominating is the process of selecting validators you wish to stake your DOT to. You can choose to nominate up to 16 validators for each of your accounts.","Once you have nominated your selected validators, they become your nominations."]},{title:"Nominations",description:["Your nominations are the validators you have chosen to nominate. You can nominate up to 16 validators.","Your bonded funds are automatically distributed to nominations that are active in the staking era.","As long as at least one of your nominations is actively validating in a session, your funds will be staked with that validator and you will receive rewards."]}],external:[]},{key:"pools",definitions:[{title:"Nomination Pools",description:["Nomination pools allow users to contribute DOT and earn staking rewards.","Unlike nominating, staking using pools requires a small amount of DOT, and the pool manages nominees on your behalf."]},{title:"Active Pools",description:["The current amount of active nomination pools."]},{title:"Minimum Pool Join Bond",description:["The minimum amount of DOT needed to bond in order to join a pool."]},{title:"Minimum Pool Create Bond",description:["The minimum amount of DOT needed to bond for a creator  of a pool."]},{title:"Pool Status",description:["Your current pool status, summarising whether your account is actively in a pool and generating rewards."]},{title:"Bonded in Pool",description:["The amount of DOT currently bonded in a pool."]},{title:"Pool Rewards",description:["The amount of rewards in DOT generated by being an active participant in a pool.","Users are required to claim their pool rewards in order to receive them. Pool rewards can be bonded back into the pool, or sent to your account as free DOT."]},{title:"Joined Pool",description:["The currently joined pool. Only one pool can be joined per account."]}],external:[]},{key:"validators",definitions:[{title:"Validator",description:["An entity that validates blocks for the Polkadot Relay Chain. Validators play a key role in Polkadot to secure the network and produce blocks.","As a nominator, you choose which validators you wish to back, and receive rewards for doing so."]},{title:"Active Validator",description:["A validator that is actively validating blocks. Rewards are accumulated based on the validator's activity.","A new set of validators are chosen for each era, so there is no guarantee the same validator will be active in subsequent eras.","Polkadot allows a nominator to nominate up to 16 validators, maximising your chances of nominating an active validator in each era."]},{title:"Era",description:["At the end of each era, validators are rewarded DOT based on how many era points they accumulated in that era. This DOT reward is then distributed amongst the nominators of the validator via a payout.","1 era is currently 24 hours in Polkadot."]},{title:"Epoch",description:["An epoch is another name for a session in Polkadot. A different set of validators are selected to validate blocks at the beginning of every epoch.","1 epoch is currently 4 hours in Polkadot."]},{title:"Era Points",description:["Era Points are accumulated by validators during each era, and depend on a validator's performance.","As a staker, you do not need to worry about Era Points. In general, better performing validators produce more Era Points, which in-turn lead to higher staking rewards."]},{title:"Minimum Nomination Bond",description:["The minimum amount you need bonded in order to nominate."]},{title:"Commission",description:["Validators can take a percentage of the rewards they earn. This chunk is called their commission.","Nominating validators with low commissions mean you will receive a larger share of the rewards they generate.","Many validators will have a commission rate of 100%, meaning you will receive no rewards by nominating these validators.","Examples of such validators include those operating on behalf of exchanges, where nominating and reward distribution is done centrally on the exchange in question.","A validator can update their commission rates as and when they please, and such changes will have an impact on your profitability. Be sure to monitor your nominations on this dashboard to keep updated on their commission rates."]},{title:"Over Subscribed",description:["Only the top 256 nominators for each validator are rewarded in Polkadot. When this number is surpassed, this validator is considered over subscribed."]},{title:"Blocked Nominations",description:["When a validator has blocked nominations, nominators are unable to nominate them."]}],external:[]},{key:"payouts",definitions:[{title:"Payout",description:['Payouts are staking rewards on Polkadot. They depend on how many "Era Points" your nominated validators accrue over time. Rewards are determined at the end of every Era (24 hour periods).',"To receive staking rewards, a Payout needs to be requested. Any nominator backing the validator in question can request a Payout.","One payout request triggers the reward payout for every nominator."]},{title:"Last Era Payout",description:["The total amount of DOT paid out for the last active era.","Payouts are distributed evenly amongst the active validators for that era, and are then further distributed to the active nominators that took part in that era.","The payout amounts received depend on how much DOT the nominators, and validators themselves, had bonded for that era."]},{title:"Payout History",description:["Historical records of payouts made for being an active nominator.","Requesting payouts is a manual process, so you may receive payouts for multiple eras in quick succession or in a sporadic fashion. Your payout graphs may therefore have multiple payouts occur on the same day, or have days where there were no payouts.","This does not mean that you were not nominating or generating rewards in that period - only that the payout for that period was not yet made."]}],external:[]},{key:"community",definitions:[],external:[]}],k8=e=>{for(let t of y8)if(t.uri===e)return t.title;return""},x8=(0,C.default)(co.div)`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.75rem;
  color: #444;
  position: fixed;
  bottom: 0px;
  left: 0px;
  overflow: hidden;
  background: ${Qo};
  z-index: 6;
  backdrop-filter: blur(4px);
`,C8=C.default.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

  /* hide connection status text on small screens */
  .hide-small {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;

    @media(max-width: 600px) {
      display: none;
    }
  }

  p {
    margin: 0 0.25rem;
    font-size: 0.75rem;
  }
  .stat {
    margin: 0 0.25rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  /* left and right sections for each row*/
  > section {
    padding: 0.5rem 0.5rem;
    color: ${Xo};

    /* left section */
    &:nth-child(1) {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      flex-grow: 1;
      .network_icon {
        margin-right: 0.5rem;
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    /* right section */
    &:last-child {
      flex-grow: 1;
      display: flex;
      align-items: center;
      flex-flow: row-reverse wrap;
      button {
        border-radius: 0.4rem;
        padding: 0.25rem 0.5rem;
        color: ${Xo};
      }
      span {
        &.pos { color: #3eb955; }
        &.neg { color: #d2545d; }
      }
    }
  }
`,M8=(0,C.default)(co.div)`
  width: 100%;
  background: #d33079;
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 0.25rem 1rem 1rem 1rem;
  overflow: auto;

  > .row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;

    > h3 {
      color: #eee;
      font-size: 0.85rem;
      margin: 1.5rem 0 0.75rem 0;
      padding: 0.6rem 0.3rem 0rem;
      border-top: 1px solid rgba(255,255,255,0.05);
      width: 100%;
    }

    > div, > button {
      padding: 0.25rem 1.5rem 0.25rem;
      background: rgba(0,0,0,0.1);
      margin-right: 1rem;
      border-radius: 0.5rem;
      padding: 0.5rem 1.25rem;
      display: flex;
      flex-flow: column nowrap;

      &:last-child {
        margin-right: 0;
      }
    }
    p {
      margin: 0;
      font-size: 0.85rem;
      font-variation-settings: 'wght' 500;
      color: #f1f1f1;
      padding: 0.2rem 0;

      &.val {
        font-size: 0.85rem;
        color: #e6e6e6;
      }
    }
  }

  > .row:first-child > h3 {
      margin-top: 0.5rem;
      border-top: 0;
    }
`,E8=C.default.div`
  border-left: 1px solid ${Xo};
  opacity: 0.2;
  margin: 0 0.3rem;
  width: 1px;
  height: 1rem;
`,_8=C.default.div`
  width: 10px;
  height: 10px;
  background: ${e=>e.color};
  border-radius: 50%;
  margin: 0 0.7rem;
`,N8=e=>(0,_u.jsx)(co.div,{animate:{opacity:[.5,1]},transition:{duration:.5},children:e.block});class P8 extends V.Component{constructor(e){super(e),this.state={block:0,unsub:null},this.stateRef=void 0,this.initiateBlockSubscription=async()=>{const{api:e,isReady:t}=this.context;if(t){const t=await e.rpc.chain.subscribeNewHeads((e=>{void 0!==e&&this._setState({...this.stateRef.current,block:"#"+e.number.toHuman()})}));this._setState({...this.stateRef.current,unsub:t})}},this.stateRef=V.createRef(),this.stateRef.current=this.state}_setState(e){this.stateRef.current=e,this.setState(e)}componentDidMount(){this.initiateBlockSubscription()}componentDidUpdate(){null===this.state.unsub&&this.initiateBlockSubscription()}componentWillUnmount(){const{unsub:e}=this.state;null!==e&&e()}render(){return(0,_u.jsx)(N8,{...this.props,block:this.state.block})}}P8.contextType=KO;const j8=()=>{const{status:e}=JO();return(0,_u.jsxs)(_u.Fragment,{children:[e===_o[0]&&(0,_u.jsx)(co.p,{animate:{opacity:[0,1]},transition:{duration:.3},children:"Disconnected"}),e===_o[1]&&(0,_u.jsx)(co.p,{animate:{opacity:[0,1]},transition:{duration:.3},children:"Connecting..."}),e===_o[2]&&(0,_u.jsx)(co.p,{animate:{opacity:[0,1]},transition:{duration:.3},children:"Connected to Network"})]})},S8=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];(0,V.useEffect)((()=>{const r=r=>{if(e.current&&!e.current.contains(r.target)){let e=a.find((e=>r.target.classList.contains(e)));null!==e&&void 0!==e||t()}};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}}),[e])},z8=()=>{const{services:e}=mF(),{status:t,switchNetwork:a,network:r}=JO(),l=J$(),[s,n]=(0,V.useState)(!1),o=t===_o[1]?Po:t===_o[2]?jo:No,i=s?"maximised":"minimised",u=(0,V.useRef)(null);return S8(u,(()=>{n(!1)}),["igignore-network-info-toggle"]),(0,_u.jsxs)(x8,{ref:u,initial:!1,animate:i,transition:{duration:.4,type:"spring",bounce:.25},variants:{minimised:{height:"2.5rem"},maximised:{height:"150px"}},children:[(0,_u.jsxs)(C8,{children:[(0,_u.jsxs)("section",{children:[(0,_u.jsx)(r.icon,{className:"network_icon"}),(0,_u.jsxs)("div",{className:"hide-small",children:[(0,_u.jsx)("p",{children:r.name}),(0,_u.jsx)(E8,{}),(0,_u.jsx)(j8,{})]})]}),(0,_u.jsxs)("section",{children:[(0,_u.jsx)("button",{className:"ignore-network-info-toggle",onClick:()=>{n(!s)},children:s?"Collapse":"Network"}),(0,_u.jsxs)("div",{className:"stat",style:{marginRight:0},children:[t===_o[2]&&(0,_u.jsx)(P8,{}),(0,_u.jsx)(_8,{color:o})]}),e.includes("binance_spot")&&(0,_u.jsxs)(_u.Fragment,{children:[(0,_u.jsx)(E8,{}),(0,_u.jsx)("div",{className:"stat",children:(0,_u.jsxs)("span",{className:"change"+(l.change<0?" neg":l.change>0?" pos":""),children:[l.change<0?"":l.change>0?"+":"",l.change,"%"]})}),(0,_u.jsxs)("div",{className:"stat",children:["1 ",r.api.unit," / ",l.lastPrice," USD"]})]})]})]}),(0,_u.jsxs)(M8,{children:[(0,_u.jsx)("div",{className:"row",children:(0,_u.jsx)("h3",{children:" Choose Network:"})}),(0,_u.jsx)("div",{className:"row",children:Object.entries(Eo).map(((e,t)=>{let[l,s]=e;return(0,_u.jsx)("button",{onClick:()=>{r.name.toLowerCase()!==l&&(a(l),n(!1))},children:(0,_u.jsx)("p",{children:s.name})},`switch_network_${t}`)}))})]})]})},T8=(0,C.default)(co.div)`
    background: ${pi};
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9;
    backdrop-filter: blur(4px);

    /* modal content wrapper */
    .content_wrapper {
      height: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      padding: 1rem 2rem;

      /* click anywhere behind modal content to close */
      .close {
          position: fixed;
          width: 100%;
          height: 100%;
          z-index: 8;
          cursor: default;
      }
    }
`,L8=C.default.div`
  background: ${gi};
  width: 100%;
  max-width: ${e=>"large"===e.size?"800px":"600px"};
  z-index: 9;
  border-radius: 0.75rem;
  overflow: hidden;
  overflow-y: scroll;
  position: relative;
  
  .header {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: 1rem 1rem 0 1rem;
  }
  .body {
    padding: 1rem;
  }
`,A8=C.default.h3`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 0.25rem;
  padding: 0 1rem;
  color: ${Xo};
  flex: 1;

  > svg {
    margin-right: 0.75rem;
  }
`,O8=C.default.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  flex: 1;
  margin-top: 1rem;

  > div {
    margin-left: 1rem;
  }
  .submit {
    padding: 0.5rem 0.75rem;
    border-radius: 0.7rem;
    font-size: 1rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    color: rgba(211, 48, 121, 0.85);
    border: 1px solid rgba(211, 48, 121, 0.85);

    &:disabled {
      opacity: 0.25;
    }
    svg {
      margin-right: 0.5rem;
    }
  }
`;function V8(){var e=!1,t=[],a=new Set,r={subscribe:function(e){return a.add(e),function(){a.delete(e)}},start:function(r,l){if(e){var s=[];return a.forEach((function(e){s.push(Xs(e,r,{transitionOverride:l}))})),Promise.all(s)}return new Promise((function(e){t.push({animation:[r,l],resolve:e})}))},set:function(e){return a.forEach((function(t){!function(e,t){Array.isArray(t)?Fs(e,t):"string"===typeof t?Fs(e,[t]):Us(e,t)}(t,e)}))},stop:function(){a.forEach((function(e){!function(e){e.forEachValue((function(e){return e.stop()}))}(e)}))},mount:function(){return e=!0,t.forEach((function(e){var t=e.animation,a=e.resolve;r.start.apply(r,T([],z(t),!1)).then(a)})),function(){e=!1,r.stop()}}};return r}const B8=C.default.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;

  h2 {
    margin-top: 0.5rem;
    color: ${qo};
  }

  .head {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 1rem;
  }

  button {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.1rem;

    &:disabled {
      cursor: default;
      opacity: 0.5;
    }
    
    &.item {
      box-sizing: border-box;
      width: 100%;
      min-height: 3.5rem;
      margin: 0.4rem 0;
      padding: 0.75rem 0.25rem;
      border-radius: 1rem;
      font-size: 1rem;
      background: ${ni};
      transition: background 0.15s;
      color: ${qo};

      &:hover {
        background: ${ii};
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex: 1;
        padding: 0 1rem;

        &:last-child {
          justify-content: flex-end;

          &.neutral {
            color: ${Xo};
            opacity: 0.75;
          }
          &.danger {
            color: ${Go};
          }

          .icon {
            margin-left: 1rem;
          }
        }

        /* svg theming */
        svg {
          .light {
            fill: ${Yo};
          }
          .dark {
            fill: ${Xo};
          }
        }
      }
    }
}
`,H8=C.default.div`
  border-top: 1px solid ${Xo};
  width: 100%;
  opacity: 0.1;
  margin: 0.75rem 0rem;
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem 0;

  .form {
    width: 100%;
    height: 250px;
    overflow: hidden;
  }
`,r9=C.default.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: ${e=>e.height?e.height:"auto"};
  overflow: hidden;

  /* title of dropdown */ 
   .label {
    margin: 1rem 0;
    display: block;
  }
  
  /* input element of dropdown */
  .input-wrap {
    border: 1px solid ${hi};
    display: flex; 
    flex-flow: row wrap;
    align-items: center;
    box-sizing: border-box;
    border-radius: 1rem;
    padding: 0.1rem 0.75rem;
    margin: 0.25rem 0;
  }

  /* input element of dropdown */
  .input {
    border: none;
    box-sizing: border-box;
    padding-left: 0.75rem;
  }
`,l9=C.default.button`
  color: ${qo};
  box-sizing: border-box;
  border: none;
  position: absolute;
  right: 0.5rem;
  top: 0.4rem;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`,s9=C.default.div`
  background: ${$o};
  position: relative;
  box-sizing: border-box;
  margin: 0.5rem 0 0;
  border-bottom: none;
  width: auto;
  height: 14rem;
  border-radius: 0.75rem;
  overflow: auto;
  z-index: 1;

  .item {
    box-sizing: border-box;
    padding: 0.5rem;
    cursor: pointer;
    margin: 0.25rem;
    border-radius: 0.75rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
     
    .icon {
      margin-right: 0.5rem;
    }
    p {
      font-size: 1rem;
      color: ${qo};
    }
  }
`,n9=e=>{const{items:t,onChange:a,label:r,placeholder:l,value:s}=e;return(0,_u.jsx)(r9,{children:(0,_u.jsx)(M5,{onChange:a,itemToString:e=>e?e.meta.name:"",selectedItem:s,initialSelectedItem:s,children:e=>{var a;return(0,_u.jsxs)("div",{children:[r&&(0,_u.jsx)("label",{className:"label",...e.getLabelProps(),children:r}),(0,_u.jsxs)("div",{style:{position:"relative"},children:[(0,_u.jsxs)("div",{className:"input-wrap",children:[null!==s&&(0,_u.jsx)(W4,{value:null!==(a=null===s||void 0===s?void 0:s.address)&&void 0!==a?a:"",size:aV("2rem")}),(0,_u.jsx)("input",{...e.getInputProps({placeholder:l}),className:"input"})]}),e.selectedItem&&(0,_u.jsx)(l9,{onClick:e.clearSelection,"aria-label":"clear selection",children:(0,_u.jsx)(f$,{transform:"grow-2",icon:R$})}),(0,_u.jsx)(s9,{children:(null===e||void 0===e?void 0:e.inputValue)===(null===s||void 0===s?void 0:s.meta.name)?t.map(((t,a)=>(0,_u.jsx)(o9,{c:e,item:t,index:a},`controller_acc_${a}`))):t.filter((t=>!e.inputValue||t.meta.name.toLowerCase().includes(e.inputValue.toLowerCase()))).map(((t,a)=>(0,_u.jsx)(o9,{c:e,item:t,index:a},`controller_acc_${a}`)))})]})]})}})})},o9=e=>{let{c:t,item:a,index:r}=e;const{mode:l}=vJ(),s=t.selectedItem===a?Wo.primary[l]:Wo.text.primary[l],n=t.selectedItem===a?`2px solid ${Wo.primary[l]}`:`2px solid ${Wo.transparent[l]}`;return(0,_u.jsxs)("div",{className:"item",...t.getItemProps({key:a.meta.name,index:r,item:a}),style:{color:s,border:n},children:[(0,_u.jsx)("div",{className:"icon",children:(0,_u.jsx)(W4,{value:a.address,size:26})}),(0,_u.jsx)("p",{children:a.meta.name})]})},i9=()=>{const e=pV(),{addNotification:t}=J4(),{addPending:a,removePending:r}=X5(),{accounts:l,activeAccount:s,getAccount:n}=JU(),{getBondedAccount:o}=aF(),i=n(o(s)),[u,c]=(0,V.useState)(i);return(0,_u.jsxs)(a9,{children:[(0,_u.jsxs)(A8,{children:[(0,_u.jsx)(f$,{transform:"grow-2",icon:N$}),"Change Controller Account"]}),(0,_u.jsxs)("div",{style:{padding:"0 1rem",width:"100%",boxSizing:"border-box"},children:[(0,_u.jsx)(n9,{items:l.filter((e=>e.address!==s)),onChange:e=>{c(e)},placeholder:"Select Account",value:u,height:"17rem"}),(0,_u.jsx)(O8,{children:(0,_u.jsx)("div",{children:(0,_u.jsxs)("button",{className:"submit",onClick:()=>(()=>{e.setStatus(0);let l={name:"set_controller"};a(l),t({title:"Transaction Submitted",subtitle:"Updating controller account."}),setTimeout((()=>{r(l),t({title:"Transaction Successful",subtitle:"Controller account updated."})}),2e3)})(),disabled:null===u,children:[(0,_u.jsx)(f$,{transform:"grow-2",icon:F4}),"Submit"]})})})]})]})},u9=C.default.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;

  h2 {
    margin-top: 0.5rem;
    color: ${qo};
  }

  }

