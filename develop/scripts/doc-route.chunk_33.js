(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[34,3,46,47,48,49,51,52,53],{167:function(e,t,n){"use strict";n.r(t);var r=n(23),o=n.n(r),a=n(1),i=n.n(a),c=n(2),s=n.n(c),l=n(117),u=n(395);function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(a){function c(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t=p(this,a.call.apply(a,[this].concat(r)))).history=Object(l.a)(t.props),p(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,a),c.prototype.componentWillMount=function(){o()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},c.prototype.render=function(){return i.a.createElement(u.a,{history:this.history,children:this.props.children})},c}(i.a.Component);f.propTypes={basename:s.a.string,forceRefresh:s.a.bool,getUserConfirmation:s.a.func,keyLength:s.a.number,children:s.a.node};var m=f;function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(a){function c(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t=d(this,a.call.apply(a,[this].concat(r)))).history=Object(l.b)(t.props),d(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,a),c.prototype.componentWillMount=function(){o()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},c.prototype.render=function(){return i.a.createElement(u.a,{history:this.history,children:this.props.children})},c}(i.a.Component);h.propTypes={basename:s.a.string,getUserConfirmation:s.a.func,hashType:s.a.oneOf(["hashbang","noslash","slash"]),children:s.a.node};var y=h,b=n(81),v=n(119);function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E=function(a){function c(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t=g(this,a.call.apply(a,[this].concat(r)))).history=Object(l.d)(t.props),g(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,a),c.prototype.componentWillMount=function(){o()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},c.prototype.render=function(){return i.a.createElement(v.a,{history:this.history,children:this.props.children})},c}(i.a.Component);E.propTypes={initialEntries:s.a.array,initialIndex:s.a.number,getUserConfirmation:s.a.func,keyLength:s.a.number,children:s.a.node};var w=E,k=n(396),O=n(16),T=n.n(O);var j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.enable=function(e){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(e)},t.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},t.prototype.componentWillMount=function(){T()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},t.prototype.componentWillReceiveProps=function(e){e.when?this.props.when&&this.props.message===e.message||this.enable(e.message):this.disable()},t.prototype.componentWillUnmount=function(){this.disable()},t.prototype.render=function(){return null},t}(i.a.Component);j.propTypes={when:s.a.bool,message:s.a.oneOfType([s.a.func,s.a.string]).isRequired},j.defaultProps={when:!0},j.contextTypes={router:s.a.shape({history:s.a.shape({block:s.a.func.isRequired}).isRequired}).isRequired};var N=j,P=n(411),R=n(118),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var S=function(e){return"/"===e.charAt(0)?e:"/"+e},_=function(e,t){return e?C({},t,{pathname:S(e)+t.pathname}):t},L=function(e){return"string"==typeof e?e:Object(l.e)(e)},M=function(e){return function(){T()(!1,"You cannot %s with <StaticRouter>",e)}},H=function(){},q=function(a){function c(){var e,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o=x(this,a.call.apply(a,[this].concat(n)))).createHref=function(e){return S(o.props.basename+L(e))},o.handlePush=function(e){var t=o.props,n=t.basename,r=t.context;r.action="PUSH",r.location=_(n,Object(l.c)(e)),r.url=L(r.location)},o.handleReplace=function(e){var t=o.props,n=t.basename,r=t.context;r.action="REPLACE",r.location=_(n,Object(l.c)(e)),r.url=L(r.location)},o.handleListen=function(){return H},o.handleBlock=function(){return H},x(o,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,a),c.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},c.prototype.componentWillMount=function(){o()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},c.prototype.render=function(){var e=this.props,t=e.basename,n=(e.context,e.location),r=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["basename","context","location"]),o={createHref:this.createHref,action:"POP",location:function(e,t){if(!e)return t;var n=S(e);return 0!==t.pathname.indexOf(n)?t:C({},t,{pathname:t.pathname.substr(n.length)})}(t,Object(l.c)(n)),push:this.handlePush,replace:this.handleReplace,go:M("go"),goBack:M("goBack"),goForward:M("goForward"),listen:this.handleListen,block:this.handleBlock};return i.a.createElement(v.a,C({},r,{history:o}))},c}(i.a.Component);q.propTypes={basename:s.a.string,context:s.a.object.isRequired,location:s.a.oneOfType([s.a.string,s.a.object])},q.defaultProps={basename:"",location:"/"},q.childContextTypes={router:s.a.object.isRequired};var I=q,A=n(398),W=n(412).a,B=n(66).a,Y=n(397);n.d(t,"BrowserRouter",function(){return m}),n.d(t,"HashRouter",function(){return y}),n.d(t,"Link",function(){return b.a}),n.d(t,"MemoryRouter",function(){return w}),n.d(t,"NavLink",function(){return k.a}),n.d(t,"Prompt",function(){return N}),n.d(t,"Redirect",function(){return P.a}),n.d(t,"Route",function(){return R.a}),n.d(t,"Router",function(){return u.a}),n.d(t,"StaticRouter",function(){return I}),n.d(t,"Switch",function(){return A.a}),n.d(t,"generatePath",function(){return W}),n.d(t,"matchPath",function(){return B}),n.d(t,"withRouter",function(){return Y.a})},399:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return i});var r=n(1),o=n.n(r),a=n(2),c=n.n(a),i=function(e){var t=e.value;return o.a.createElement("code",{className:"token property"},t)},s=function(e){var t=e.data,n=e.name,r=e.value;return n&&r?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n),o.a.createElement("span",{className:"token attr-value"},o.a.createElement("span",{className:"token punctuation"},'="'),r,o.a.createElement("span",{className:"token punctuation"},'"'))):n&&!r?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n)):!n&&r?o.a.createElement("code",null,o.a.createElement("span",{className:"token attr-value"},r)):void 0};s.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},i.propTypes={value:c.a.string.isRequired},t.default=s},400:function(e,t,n){"use strict";n.r(t);var r=n(399);n.d(t,"Attribute",function(){return r.default}),n.d(t,"Property",function(){return r.Property});var o=n(402);n.d(t,"ComponentPreview",function(){return o.default});var a=n(408);n.d(t,"DocContainer",function(){return a.default});var c=n(409);n.d(t,"DocHeading",function(){return c.default});var i=n(403);n.d(t,"DocToc",function(){return i.default});var s=n(404);n.d(t,"DeprecatedComponentAlert",function(){return s.default});var l=n(405);n.d(t,"ExperimentalComponentAlert",function(){return l.default});var u=n(406);n.d(t,"Icon",function(){return u.default});var p=n(407);n.d(t,"PxScript",function(){return p.default})},401:function(e,t,n){"use strict";var r=n(1),i=n.n(r),o=n(2),a=n.n(o),c=function(e){var t=e.id,n=e.type,r=e.icon,o=e.close,a=e.text,c=e.children;return i.a.createElement("div",{id:t,className:"alert alert-".concat(n)},r?"\n":"",r?i.a.createElement("i",{className:"material-icons alert-icon"},r):null,a?"\n":"",a?i.a.createElement("p",null,a):null,c?"\n":"",c?i.a.createElement("div",{className:"alert-body"},c):null,o?"\n":"",o?i.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",i.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:a.a.string,type:a.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:a.a.string,close:a.a.bool,text:a.a.string},t.a=c},402:function(e,t,n){"use strict";n.r(t);var r=n(1),p=n.n(r),o=n(2),a=n.n(o),f=n(413),c=n(414),m=n.n(c),d=n(415);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e){var r=e.children,o=e.language,a=e.removeOuterTag,c=e.hideValue,i=e.removeList,t=e.showCasePanel,n=e.codeFigure,s=e.dangerousHTML,l=function(e){var t=document.createElement("div");return t.innerHTML=Object(f.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},u=function(e){var t=document.createElement("div");t.innerHTML=Object(f.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),r="";return n.forEach(function(e){r+="".concat(e.innerHTML," \n")}),r};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},r)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===o&&s)t="","function"==typeof(e=r).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===o&&r&&"function"==typeof r.map)r.map(function(e){n+=a?l(e):i?u(e):Object(f.renderToStaticMarkup)(e)});else if("html"===o)n+=a?l(r):i?u(r):Object(f.renderToStaticMarkup)(r);else switch(y(r)){case"string":n=r;break;case"object":r.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(o){case"html":n=(n=m.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),c&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=m.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",p.a.createElement("figure",null,p.a.createElement(d.a,h({},d.b,{theme:void 0,code:n,language:o}),function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,a=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},r.map(function(e,t){return p.a.createElement("div",h({key:e+t},o({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",h({key:t},a({token:e,key:t})))}))}))}))},null):null)};i.propTypes={language:a.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:a.a.bool,hideValue:a.a.bool,removeList:a.a.bool,showCasePanel:a.a.bool,codeFigure:a.a.bool,dangerousHTML:a.a.bool},t.default=i},403:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(2),o=n.n(r),i=n(410);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function o(e){var t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=u(this,p(o).call(this,e))).state={headings:(n=t.props.component().props.children,r=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)r.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)r.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&r.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&r.push({title:e.props.children,id:e.props.id})}),r),windowTopPosition:window.pageYOffset},t}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(o,a["Component"]),t=o,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var r=this;return c.a.createElement("div",{className:"col-2 d-none d-lg-block"},c.a.createElement("div",{className:"doc-toc"},c.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=r.state.windowTopPosition>=e.top&&r.state.windowTopPosition<r.state.headings[t+1].top;return c.a.createElement("li",{key:t,className:n?"active":""},c.a.createElement(i.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:r.scrollToElement},e.title))}}))))}}])&&l(t.prototype,n),r&&l(t,r),o}();m.propTypes={component:o.a.func.isRequired},t.default=m},404:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(401);t.default=function(){return o.a.createElement(a.a,{type:"danger"},o.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),o.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},405:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(401);t.default=function(){return o.a.createElement(a.a,{type:"danger"},o.a.createElement("h3",{className:"color-danger"},"Component under development!"),o.a.createElement("p",null,"This component is still under development and is subject to change."))}},406:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(2),c=function(e){var t=e.icon;return o.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(a).a.string.isRequired},t.default=c},407:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),o=n(2),a=n.n(o),c=function(e){var t,n,r=e.component,o=e.subComponents,a=e.func,c=e.params;return o&&(n=o.map(function(e,t){return i.a.createElement("span",{key:t},e,i.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return i.a.createElement("span",{key:t},e,t<c.length-1?i.a.createElement("span",{className:"token punctuation"},", "):null)})),i.a.createElement("code",null,i.a.createElement("span",null,"px"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",null,r),i.a.createElement("span",{className:"token punctuation"},"."),n,i.a.createElement("span",{className:"token function"},a),i.a.createElement("span",{className:"token punctuation"},"("),t,i.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:a.a.string.isRequired,subComponents:a.a.array,func:a.a.string.isRequired,params:a.a.array},t.default=c},408:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(2),c=n.n(a),i=n(400),s=function(e){var t=e.docToc,n=e.children,r=function(){return o.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(r,null),t?o.a.createElement(i.DocToc,{component:r}):null))};s.propTypes={docToc:c.a.bool},t.default=s},410:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=y,t.NavHashLink=b;var a=s(n(1)),c=s(n(2)),i=n(167);function s(e){return e&&e.__esModule?e:{default:e}}var l="",u=null,p=null,f=null;function m(){l="",null!==u&&u.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function d(){var e=document.getElementById(l);return null!==e&&(f(e),m(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["scroll","smooth"]);return a.default.createElement(e,r({},n,{onClick:function(e){m(),t.onClick&&t.onClick(e),"string"==typeof t.to?l=t.to.split("#").slice(1).join("#"):"object"===o(t.to)&&"string"==typeof t.to.hash&&(l=t.to.hash.replace("#","")),""!==l&&(f=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===u&&(u=new MutationObserver(d)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){m()},1e4))},0))}}),t.children)}function y(e){return h(e,i.Link)}function b(e){return h(e,i.NavLink)}var v={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};b.propTypes=y.propTypes=v},453:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(400),c=n(454),i=n.n(c),s=n(455),l=n.n(s),u=n(456),p=n.n(u),f=n(457),m=n.n(f),d=n(458),h=n.n(d),y=n(459),b=n.n(y);t.default=function(){return o.a.createElement(a.DocContainer,null,o.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n            .browser-icon {\n                height: 48px;\n                width: 48px;\n            }\n        "}}),o.a.createElement("p",{className:"lead"},"Currently supported browsers:"),o.a.createElement("table",{className:"browser-support-table table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,o.a.createElement("img",{className:"browser-icon",src:i.a,alt:"Google Chrome Icon"})),o.a.createElement("th",null,o.a.createElement("img",{className:"browser-icon",src:l.a,alt:"Mozilla Firefox Icon"})),o.a.createElement("th",null,o.a.createElement("img",{className:"browser-icon",src:p.a,alt:"Microsoft Edge Icon"})),o.a.createElement("th",null,o.a.createElement("img",{className:"browser-icon",src:m.a,alt:"Microsoft Internet Explorer Icon"})),o.a.createElement("th",null,o.a.createElement("img",{className:"browser-icon",src:h.a,alt:"Opera Browser Icon"})),o.a.createElement("th",null,o.a.createElement("img",{className:"browser-icon",src:b.a,alt:"Apple Safari Icon"})))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{className:"background-brand"},"Yes"),o.a.createElement("td",{className:"background-warning"},"Yes"),o.a.createElement("td",{className:"background-warning"},"Yes"),o.a.createElement("td",{className:"background-warning"},"11"),o.a.createElement("td",{className:"background-warning"},"Yes"),o.a.createElement("td",{className:"background-warning"},"Yes")))))}},454:function(e,t,n){e.exports=n.p+"img/chrome.svg?f3b6c54c5cc90485a549a1ae6699a9c4"},455:function(e,t,n){e.exports=n.p+"img/firefox.svg?edf69d104c6d6f1bc83565927d0b8e10"},456:function(e,t,n){e.exports=n.p+"img/edge.svg?2b2888b51282bcce340666c7770687b6"},457:function(e,t,n){e.exports=n.p+"img/internet-explorer.svg?0536654eb844a963dd6a6b0844dd52e2"},458:function(e,t,n){e.exports=n.p+"img/opera.svg?49a5015266953b88cff3d2e3e419e0ee"},459:function(e,t,n){e.exports=n.p+"img/safari.svg?237a7f3b2a5860f0fe098c80be9b0595"}}]);
//# sourceMappingURL=doc-route.chunk_33.js.map?9d81c60482bb96bec056