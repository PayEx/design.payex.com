(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[40,3,48,49,50,52,53,54,55],{151:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n.n(r),o=n(0),c=n.n(o),l=n(2),i=n.n(l),u=n(109),s=n(340);function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m=function(o){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t=p(this,o.call.apply(o,[this].concat(r)))).history=Object(u.a)(t.props),p(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.componentWillMount=function(){a()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},l.prototype.render=function(){return c.a.createElement(s.a,{history:this.history,children:this.props.children})},l}(c.a.Component);m.propTypes={basename:i.a.string,forceRefresh:i.a.bool,getUserConfirmation:i.a.func,keyLength:i.a.number,children:i.a.node};var d=m;function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(o){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t=f(this,o.call.apply(o,[this].concat(r)))).history=Object(u.b)(t.props),f(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.componentWillMount=function(){a()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},l.prototype.render=function(){return c.a.createElement(s.a,{history:this.history,children:this.props.children})},l}(c.a.Component);h.propTypes={basename:i.a.string,getUserConfirmation:i.a.func,hashType:i.a.oneOf(["hashbang","noslash","slash"]),children:i.a.node};var y=h,b=n(74),E=n(111);function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=function(o){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t=v(this,o.call.apply(o,[this].concat(r)))).history=Object(u.d)(t.props),v(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.componentWillMount=function(){a()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},l.prototype.render=function(){return c.a.createElement(E.a,{history:this.history,children:this.props.children})},l}(c.a.Component);g.propTypes={initialEntries:i.a.array,initialIndex:i.a.number,getUserConfirmation:i.a.func,keyLength:i.a.number,children:i.a.node};var w=g,k=n(341),P=n(13),O=n.n(P);var T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.enable=function(e){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(e)},t.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},t.prototype.componentWillMount=function(){O()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},t.prototype.componentWillReceiveProps=function(e){e.when?this.props.when&&this.props.message===e.message||this.enable(e.message):this.disable()},t.prototype.componentWillUnmount=function(){this.disable()},t.prototype.render=function(){return null},t}(c.a.Component);T.propTypes={when:i.a.bool,message:i.a.oneOfType([i.a.func,i.a.string]).isRequired},T.defaultProps={when:!0},T.contextTypes={router:i.a.shape({history:i.a.shape({block:i.a.func.isRequired}).isRequired}).isRequired};var x=T,j=n(356),C=n(110),R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function N(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var S=function(e){return"/"===e.charAt(0)?e:"/"+e},_=function(e,t){return e?R({},t,{pathname:S(e)+t.pathname}):t},H=function(e){return"string"==typeof e?e:Object(u.e)(e)},L=function(e){return function(){O()(!1,"You cannot %s with <StaticRouter>",e)}},M=function(){},q=function(o){function l(){var e,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a=N(this,o.call.apply(o,[this].concat(n)))).createHref=function(e){return S(a.props.basename+H(e))},a.handlePush=function(e){var t=a.props,n=t.basename,r=t.context;r.action="PUSH",r.location=_(n,Object(u.c)(e)),r.url=H(r.location)},a.handleReplace=function(e){var t=a.props,n=t.basename,r=t.context;r.action="REPLACE",r.location=_(n,Object(u.c)(e)),r.url=H(r.location)},a.handleListen=function(){return M},a.handleBlock=function(){return M},N(a,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},l.prototype.componentWillMount=function(){a()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},l.prototype.render=function(){var e=this.props,t=e.basename,n=(e.context,e.location),r=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["basename","context","location"]),a={createHref:this.createHref,action:"POP",location:function(e,t){if(!e)return t;var n=S(e);return 0!==t.pathname.indexOf(n)?t:R({},t,{pathname:t.pathname.substr(n.length)})}(t,Object(u.c)(n)),push:this.handlePush,replace:this.handleReplace,go:L("go"),goBack:L("goBack"),goForward:L("goForward"),listen:this.handleListen,block:this.handleBlock};return c.a.createElement(E.a,R({},r,{history:a}))},l}(c.a.Component);q.propTypes={basename:i.a.string,context:i.a.object.isRequired,location:i.a.oneOfType([i.a.string,i.a.object])},q.defaultProps={basename:"",location:"/"},q.childContextTypes={router:i.a.object.isRequired};var F=q,W=n(343),A=n(357).a,V=n(58).a,B=n(342);n.d(t,"BrowserRouter",function(){return d}),n.d(t,"HashRouter",function(){return y}),n.d(t,"Link",function(){return b.a}),n.d(t,"MemoryRouter",function(){return w}),n.d(t,"NavLink",function(){return k.a}),n.d(t,"Prompt",function(){return x}),n.d(t,"Redirect",function(){return j.a}),n.d(t,"Route",function(){return C.a}),n.d(t,"Router",function(){return s.a}),n.d(t,"StaticRouter",function(){return F}),n.d(t,"Switch",function(){return W.a}),n.d(t,"generatePath",function(){return A}),n.d(t,"matchPath",function(){return V}),n.d(t,"withRouter",function(){return B.a})},344:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var r=n(0),a=n.n(r),o=n(2),l=n.n(o),c=function(e){var t=e.value;return a.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,r=e.value;return n&&r?a.a.createElement("code",null,t?a.a.createElement("span",{className:"token attr-name"},"data-"):null,a.a.createElement("span",{className:"token attr-name"},n),a.a.createElement("span",{className:"token attr-value"},a.a.createElement("span",{className:"token punctuation"},'="'),r,a.a.createElement("span",{className:"token punctuation"},'"'))):n&&!r?a.a.createElement("code",null,t?a.a.createElement("span",{className:"token attr-name"},"data-"):null,a.a.createElement("span",{className:"token attr-name"},n)):!n&&r?a.a.createElement("code",null,a.a.createElement("span",{className:"token attr-value"},r)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},345:function(e,t,n){"use strict";n.r(t);var r=n(344);n.d(t,"Attribute",function(){return r.default}),n.d(t,"Property",function(){return r.Property});var a=n(347);n.d(t,"ComponentPreview",function(){return a.default});var o=n(353);n.d(t,"DocContainer",function(){return o.default});var l=n(354);n.d(t,"DocHeading",function(){return l.default});var c=n(348);n.d(t,"DocToc",function(){return c.default});var i=n(349);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(350);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(351);n.d(t,"Icon",function(){return s.default});var p=n(352);n.d(t,"PxScript",function(){return p.default})},346:function(e,t,n){"use strict";var r=n(0),c=n.n(r),a=n(2),o=n.n(a),l=function(e){var t=e.id,n=e.type,r=e.icon,a=e.close,o=e.text,l=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},r?"\n":"",r?c.a.createElement("i",{className:"material-icons alert-icon"},r):null,o?"\n":"",o?c.a.createElement("p",null,o):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,a?"\n":"",a?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=l},347:function(e,t,n){"use strict";n.r(t);var r=n(0),p=n.n(r),a=n(2),o=n.n(a),m=n(358),l=n(359),d=n.n(l),f=n(360);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var r=e.children,a=e.language,o=e.removeOuterTag,l=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,i=e.dangerousHTML,u=function(e){var t=document.createElement("div");return t.innerHTML=Object(m.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(m.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),r="";return n.forEach(function(e){r+="".concat(e.innerHTML," \n")}),r};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},r)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===a&&i)t="","function"==typeof(e=r).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===a&&r&&"function"==typeof r.map)r.map(function(e){n+=o?u(e):c?s(e):Object(m.renderToStaticMarkup)(e)});else if("html"===a)n+=o?u(r):c?s(r):Object(m.renderToStaticMarkup)(r);else switch(y(r)){case"string":n=r;break;case"object":r.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(a){case"html":n=(n=d.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=d.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return f.b.style="",p.a.createElement("figure",null,p.a.createElement(f.a,h({},f.b,{theme:void 0,code:n,language:a}),function(e){var t=e.className,n=e.style,r=e.tokens,a=e.getLineProps,o=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},r.map(function(e,t){return p.a.createElement("div",h({key:e+t},a({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",h({key:t},o({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=c},348:function(e,t,n){"use strict";n.r(t);var o=n(0),l=n.n(o),r=n(2),a=n.n(r),c=n(355);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function a(e){var t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=s(this,p(a).call(this,e))).state={headings:(n=t.props.component().props.children,r=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)r.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)r.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&r.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&r.push({title:e.props.children,id:e.props.id})}),r),windowTopPosition:window.pageYOffset},t}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,o["Component"]),t=a,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var r=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=r.state.windowTopPosition>=e.top&&r.state.windowTopPosition<r.state.headings[t+1].top;return l.a.createElement("li",{key:t,className:n?"active":""},l.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:r.scrollToElement},e.title))}}))))}}])&&u(t.prototype,n),r&&u(t,r),a}();d.propTypes={component:a.a.func.isRequired},t.default=d},349:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(346);t.default=function(){return a.a.createElement(o.a,{type:"danger"},a.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),a.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},350:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(346);t.default=function(){return a.a.createElement(o.a,{type:"danger"},a.a.createElement("h3",{className:"text-danger"},"Component under development!"),a.a.createElement("p",null,"This component is still under development and is subject to change."))}},351:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),l=function(e){var t=e.icon;return a.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},352:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(2),o=n.n(a),l=function(e){var t,n,r=e.component,a=e.subComponents,o=e.func,l=e.params;return a&&(n=a.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return c.a.createElement("span",{key:t},e,t<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,r),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},o),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=l},353:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),l=n.n(o),c=n(345),i=function(e){var t=e.docToc,n=e.children,r=function(){return a.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return a.a.createElement("div",{className:"doc-container"},a.a.createElement("div",{className:"row"},a.a.createElement(r,null),t?a.a.createElement(c.DocToc,{component:r}):null))};i.propTypes={docToc:l.a.bool},t.default=i},355:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=y,t.NavHashLink=b;var o=i(n(0)),l=i(n(2)),c=n(151);function i(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,p=null,m=null;function d(){u="",null!==s&&s.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function f(){var e=document.getElementById(u);return null!==e&&(m(e),d(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["scroll","smooth"]);return o.default.createElement(e,r({},n,{onClick:function(e){d(),t.onClick&&t.onClick(e),"string"==typeof t.to?u=t.to.split("#").slice(1).join("#"):"object"===a(t.to)&&"string"==typeof t.to.hash&&(u=t.to.hash.replace("#","")),""!==u&&(m=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===f()&&(null===s&&(s=new MutationObserver(f)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){d()},1e4))},0))}}),t.children)}function y(e){return h(e,c.Link)}function b(e){return h(e,c.NavLink)}var E={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};b.propTypes=y.propTypes=E},410:function(e,t,n){"use strict";n.r(t),n.d(t,"HowItWorks",function(){return c}),n.d(t,"Notation",function(){return i}),n.d(t,"Examples",function(){return u}),n.d(t,"HidingElements",function(){return s});var r=n(0),a=n.n(r),o=n(74),l=n(345),c=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"how-it-works"},"How it works"),a.a.createElement("p",null,"Change the value of the ",a.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/display"},"display property")," with our responsive display utility classes. We purposely support only a subset of all possible values for ",a.a.createElement(l.Property,{value:"display"}),". Classes can be combined for various effects as you need."))},i=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"notation"},"Notation"),a.a.createElement("p",null,"Display utility classes that apply to all ",a.a.createElement(o.a,{to:"/docs/core/breakpoints"},"breakpoints"),", from ",a.a.createElement(l.Property,{value:"xs"})," to ",a.a.createElement(l.Property,{value:"xxl"}),", have no breakpoint abbreviation in them. This is because those classes are applied from ",a.a.createElement(l.Property,{value:"min-width: 0;"})," and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation."),a.a.createElement("p",null,"As such, the classes are named using the format:"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(l.Property,{value:".d-{value}"})," for ",a.a.createElement(l.Property,{value:"xs"})),a.a.createElement("li",null,a.a.createElement(l.Property,{value:".d-{breakpoint}-{value}"})," for ",a.a.createElement(l.Property,{value:"sm"}),", ",a.a.createElement(l.Property,{value:"md"}),", ",a.a.createElement(l.Property,{value:"lg"}),", ",a.a.createElement(l.Property,{value:"xl"})," and ",a.a.createElement(l.Property,{value:"xxl"}),".")),a.a.createElement("p",null,"Where ",a.a.createElement("i",null,"value")," is one of:"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(l.Property,{value:"none"})),a.a.createElement("li",null,a.a.createElement(l.Property,{value:"inline"})),a.a.createElement("li",null,a.a.createElement(l.Property,{value:"inline-block"})),a.a.createElement("li",null,a.a.createElement(l.Property,{value:"block"})),a.a.createElement("li",null,a.a.createElement(l.Property,{value:"table"})),a.a.createElement("li",null,a.a.createElement(l.Property,{value:"table-cell"})),a.a.createElement("li",null,a.a.createElement(l.Property,{value:"table-row"})),a.a.createElement("li",null,a.a.createElement(l.Property,{value:"flex"})),a.a.createElement("li",null,a.a.createElement(l.Property,{value:"inline-flex"}))),a.a.createElement("p",null,"The media queries effect screen widths with the given breakpoint ",a.a.createElement("i",null,"or larger"),". For example, ",a.a.createElement(l.Property,{value:".d-xl-none"})," sets ",a.a.createElement(l.Property,{value:"display: none;"})," on both ",a.a.createElement(l.Property,{value:"xl"})," and ",a.a.createElement(l.Property,{value:"xxl"})," screens."))},u=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"examples"},"Examples"),a.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},a.a.createElement("div",{className:"d-inline p-2 bg-brand"},"d-inline"),a.a.createElement("div",{className:"d-inline p-2 bg-default"},"d-inline")),a.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},a.a.createElement("div",{className:"d-block p-2 bg-brand"},"d-block"),a.a.createElement("div",{className:"d-block p-2 bg-default"},"d-block")))},s=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"hiding-elements"},"Hiding elements"),a.a.createElement("p",null,"For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide element responsively for each screen size."),a.a.createElement("p",null,"To hide elements simply use the ",a.a.createElement(l.Property,{value:".d-none"})," class or one of the ",a.a.createElement(l.Property,{value:".d-{sm,md,lg,xl}-none"})," classes for any responsive screen variation."),a.a.createElement("p",null,"To show an element only on a given interval of screen sizes you can combine one ",a.a.createElement(l.Property,{value:".d-*-none"})," class with a ",a.a.createElement(l.Property,{value:".d-*-*"})," class, for example ",a.a.createElement(l.Property,{value:".d-none .d-md-block .d-xl-none"})," will hide the element for all screen sizes except on medium and large devices."),a.a.createElement("table",{className:"table table-striped"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Screen Size"),a.a.createElement("th",null,"Class"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Hidden on all"),a.a.createElement("td",null,a.a.createElement(l.Property,{value:".d-none"}))),a.a.createElement("tr",null,a.a.createElement("td",null,"Hidden only on xs"),a.a.createElement("td",null,a.a.createElement(l.Property,{value:".d-none .d-sm-block"}))),a.a.createElement("tr",null,a.a.createElement("td",null,"Hidden only on sm"),a.a.createElement("td",null,a.a.createElement(l.Property,{value:".d-sm-none .d-md-block"}))),a.a.createElement("tr",null,a.a.createElement("td",null,"Hidden only on md"),a.a.createElement("td",null,a.a.createElement(l.Property,{value:".d-md-none .d-lg-block"}))),a.a.createElement("tr",null,a.a.createElement("td",null,"Hidden only on lg"),a.a.createElement("td",null,a.a.createElement(l.Property,{value:".d-lg-none .d-xl-block"}))),a.a.createElement("tr",null,a.a.createElement("td",null,"Hidden only on xl"),a.a.createElement("td",null,a.a.createElement(l.Property,{value:".d-xl-none .d-xxl-block"}))),a.a.createElement("tr",null,a.a.createElement("td",null,"Hidden only on xxl"),a.a.createElement("td",null,a.a.createElement(l.Property,{value:".d-xxl-none"}))),a.a.createElement("tr",null,a.a.createElement("td",null,"Visible on all"),a.a.createElement("td",null,a.a.createElement(l.Property,{value:".d-block"}))),a.a.createElement("tr",null,a.a.createElement("td",null,"Visible only on xs"),a.a.createElement("td",null,a.a.createElement(l.Property,{value:".d-block .d-sm-none"}))),a.a.createElement("tr",null,a.a.createElement("td",null,"Visible only on sm"),a.a.createElement("td",null,a.a.createElement(l.Property,{value:".d-sm-block .d-md-none"}))),a.a.createElement("tr",null,a.a.createElement("td",null,"Visible only on md"),a.a.createElement("td",null,a.a.createElement(l.Property,{value:".d-md-block .d-lg-none"}))),a.a.createElement("tr",null,a.a.createElement("td",null,"Visible only on lg"),a.a.createElement("td",null,a.a.createElement(l.Property,{value:".d-lg-block .d-xl-none"}))),a.a.createElement("tr",null,a.a.createElement("td",null,"Visible only on xl"),a.a.createElement("td",null,a.a.createElement(l.Property,{value:".d-xl-block .d-xxl-none"}))),a.a.createElement("tr",null,a.a.createElement("td",null,"Visible only on xxl"),a.a.createElement("td",null,a.a.createElement(l.Property,{value:".d-xxl-block"}))))),a.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},a.a.createElement("div",{className:"d-lg-none"},"Hidden on screens wider than lg"),a.a.createElement("div",{className:"d-none d-lg-block"},"Hidden on screens smaller than lg")))};t.default=function(){return a.a.createElement(l.DocContainer,{docToc:!0},a.a.createElement("p",{className:"lead"},"Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing."),a.a.createElement(c,null),a.a.createElement(i,null),a.a.createElement(u,null),a.a.createElement(s,null))}}}]);
//# sourceMappingURL=doc-route.chunk_39.js.map?720bec18619f63aade74