(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[16,3,47,48,49,51,52,53,54],{166:function(e,t,n){"use strict";n.r(t);var a=n(22),r=n.n(a),o=n(1),i=n.n(o),l=n(2),c=n.n(l),s=n(116),u=n(395);function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(o){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t=p(this,o.call.apply(o,[this].concat(a)))).history=Object(s.a)(t.props),p(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.componentWillMount=function(){r()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},l.prototype.render=function(){return i.a.createElement(u.a,{history:this.history,children:this.props.children})},l}(i.a.Component);f.propTypes={basename:c.a.string,forceRefresh:c.a.bool,getUserConfirmation:c.a.func,keyLength:c.a.number,children:c.a.node};var m=f;function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(o){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t=d(this,o.call.apply(o,[this].concat(a)))).history=Object(s.b)(t.props),d(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.componentWillMount=function(){r()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},l.prototype.render=function(){return i.a.createElement(u.a,{history:this.history,children:this.props.children})},l}(i.a.Component);h.propTypes={basename:c.a.string,getUserConfirmation:c.a.func,hashType:c.a.oneOf(["hashbang","noslash","slash"]),children:c.a.node};var y=h,b=n(81),v=n(118);function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=function(o){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t=E(this,o.call.apply(o,[this].concat(a)))).history=Object(s.d)(t.props),E(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.componentWillMount=function(){r()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},l.prototype.render=function(){return i.a.createElement(v.a,{history:this.history,children:this.props.children})},l}(i.a.Component);g.propTypes={initialEntries:c.a.array,initialIndex:c.a.number,getUserConfirmation:c.a.func,keyLength:c.a.number,children:c.a.node};var w=g,O=n(396),k=n(15),T=n.n(k);var P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.enable=function(e){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(e)},t.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},t.prototype.componentWillMount=function(){T()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},t.prototype.componentWillReceiveProps=function(e){e.when?this.props.when&&this.props.message===e.message||this.enable(e.message):this.disable()},t.prototype.componentWillUnmount=function(){this.disable()},t.prototype.render=function(){return null},t}(i.a.Component);P.propTypes={when:c.a.bool,message:c.a.oneOfType([c.a.func,c.a.string]).isRequired},P.defaultProps={when:!0},P.contextTypes={router:c.a.shape({history:c.a.shape({block:c.a.func.isRequired}).isRequired}).isRequired};var N=P,C=n(411),j=n(117),S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function R(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var x=function(e){return"/"===e.charAt(0)?e:"/"+e},_=function(e,t){return e?S({},t,{pathname:x(e)+t.pathname}):t},L=function(e){return"string"==typeof e?e:Object(s.e)(e)},M=function(e){return function(){T()(!1,"You cannot %s with <StaticRouter>",e)}},F=function(){},H=function(o){function l(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=r=R(this,o.call.apply(o,[this].concat(n)))).createHref=function(e){return x(r.props.basename+L(e))},r.handlePush=function(e){var t=r.props,n=t.basename,a=t.context;a.action="PUSH",a.location=_(n,Object(s.c)(e)),a.url=L(a.location)},r.handleReplace=function(e){var t=r.props,n=t.basename,a=t.context;a.action="REPLACE",a.location=_(n,Object(s.c)(e)),a.url=L(a.location)},r.handleListen=function(){return F},r.handleBlock=function(){return F},R(r,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},l.prototype.componentWillMount=function(){r()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},l.prototype.render=function(){var e=this.props,t=e.basename,n=(e.context,e.location),a=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["basename","context","location"]),r={createHref:this.createHref,action:"POP",location:function(e,t){if(!e)return t;var n=x(e);return 0!==t.pathname.indexOf(n)?t:S({},t,{pathname:t.pathname.substr(n.length)})}(t,Object(s.c)(n)),push:this.handlePush,replace:this.handleReplace,go:M("go"),goBack:M("goBack"),goForward:M("goForward"),listen:this.handleListen,block:this.handleBlock};return i.a.createElement(v.a,S({},a,{history:r}))},l}(i.a.Component);H.propTypes={basename:c.a.string,context:c.a.object.isRequired,location:c.a.oneOfType([c.a.string,c.a.object])},H.defaultProps={basename:"",location:"/"},H.childContextTypes={router:c.a.object.isRequired};var q=H,W=n(398),A=n(412).a,D=n(65).a,B=n(397);n.d(t,"BrowserRouter",function(){return m}),n.d(t,"HashRouter",function(){return y}),n.d(t,"Link",function(){return b.a}),n.d(t,"MemoryRouter",function(){return w}),n.d(t,"NavLink",function(){return O.a}),n.d(t,"Prompt",function(){return N}),n.d(t,"Redirect",function(){return C.a}),n.d(t,"Route",function(){return j.a}),n.d(t,"Router",function(){return u.a}),n.d(t,"StaticRouter",function(){return q}),n.d(t,"Switch",function(){return W.a}),n.d(t,"generatePath",function(){return A}),n.d(t,"matchPath",function(){return D}),n.d(t,"withRouter",function(){return B.a})},399:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return i});var a=n(1),r=n.n(a),o=n(2),l=n.n(o),i=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},c=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};c.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},i.propTypes={value:l.a.string.isRequired},t.default=c},400:function(e,t,n){"use strict";n.r(t);var a=n(399);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(402);n.d(t,"ComponentPreview",function(){return r.default});var o=n(408);n.d(t,"DocContainer",function(){return o.default});var l=n(409);n.d(t,"DocHeading",function(){return l.default});var i=n(403);n.d(t,"DocToc",function(){return i.default});var c=n(404);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var s=n(405);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(406);n.d(t,"Icon",function(){return u.default});var p=n(407);n.d(t,"PxScript",function(){return p.default})},401:function(e,t,n){"use strict";var a=n(1),i=n.n(a),r=n(2),o=n.n(r),l=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,l=e.children;return i.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?i.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?i.a.createElement("p",null,o):null,l?"\n":"",l?i.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?i.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",i.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=l},402:function(e,t,n){"use strict";n.r(t);var a=n(1),p=n.n(a),r=n(2),o=n.n(r),f=n(413),l=n(414),m=n.n(l),d=n(415);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e){var a=e.children,r=e.language,o=e.removeOuterTag,l=e.hideValue,i=e.removeList,t=e.showCasePanel,n=e.codeFigure,c=e.dangerousHTML,s=function(e){var t=document.createElement("div");return t.innerHTML=Object(f.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},u=function(e){var t=document.createElement("div");t.innerHTML=Object(f.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===r&&c)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=o?s(e):i?u(e):Object(f.renderToStaticMarkup)(e)});else if("html"===r)n+=o?s(a):i?u(a):Object(f.renderToStaticMarkup)(a);else switch(y(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=m.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=m.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",p.a.createElement("figure",null,p.a.createElement(d.a,h({},d.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return p.a.createElement("div",h({key:e+t},r({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",h({key:t},o({token:e,key:t})))}))}))}))},null):null)};i.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=i},403:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n.n(o),a=n(2),r=n.n(a),i=n(410);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=u(this,p(r).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(r,o["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return l.a.createElement("li",{key:t,className:n?"active":""},l.a.createElement(i.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&s(t.prototype,n),a&&s(t,a),r}();m.propTypes={component:r.a.func.isRequired},t.default=m},404:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(401);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},405:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(401);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},406:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(2),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},407:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(2),o=n.n(r),l=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,l=e.params;return r&&(n=r.map(function(e,t){return i.a.createElement("span",{key:t},e,i.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return i.a.createElement("span",{key:t},e,t<l.length-1?i.a.createElement("span",{className:"token punctuation"},", "):null)})),i.a.createElement("code",null,i.a.createElement("span",null,"px"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",null,a),i.a.createElement("span",{className:"token punctuation"},"."),n,i.a.createElement("span",{className:"token function"},o),i.a.createElement("span",{className:"token punctuation"},"("),t,i.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=l},408:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(2),l=n.n(o),i=n(400),c=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(i.DocToc,{component:a}):null))};c.propTypes={docToc:l.a.bool},t.default=c},410:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=y,t.NavHashLink=b;var o=c(n(1)),l=c(n(2)),i=n(166);function c(e){return e&&e.__esModule?e:{default:e}}var s="",u=null,p=null,f=null;function m(){s="",null!==u&&u.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function d(){var e=document.getElementById(s);return null!==e&&(f(e),m(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return o.default.createElement(e,a({},n,{onClick:function(e){m(),t.onClick&&t.onClick(e),"string"==typeof t.to?s=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(s=t.to.hash.replace("#","")),""!==s&&(f=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===u&&(u=new MutationObserver(d)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){m()},1e4))},0))}}),t.children)}function y(e){return h(e,i.Link)}function b(e){return h(e,i.NavLink)}var v={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};b.propTypes=y.propTypes=v},443:function(e,t,n){"use strict";n.r(t),n.d(t,"DefaultSlab",function(){return m}),n.d(t,"SlabElevated",function(){return d}),n.d(t,"SlabWell",function(){return h}),n.d(t,"SlabWhite",function(){return y}),n.d(t,"SlabSizes",function(){return v}),n.d(t,"SlabMuted",function(){return b}),n.d(t,"SlabCombinations",function(){return E});var o=n(1),l=n.n(o),i=n(400),c=n(56);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"default-slab"},"Default slab"),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"slab"},l.a.createElement("p",null,"Do you want to sign up for the slab mailing list?"),l.a.createElement("form",{action:"#",noValidate:!0,"data-validate":!0},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"validation-email-2"},"Email"),l.a.createElement("div",{className:"input-group"},l.a.createElement("span",{className:"input-group-addon"},l.a.createElement("i",{className:"material-icons"},"email")),l.a.createElement("input",{type:"email",className:"form-control",id:"validation-email-2",placeholder:"bob.corlsan@example.com",required:!0})),l.a.createElement("div",{className:"help-block","data-success":"Right!","data-error":"Wrong!"},"This one might be a little tricky")),l.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit")))))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"elevated-slab"},"Elevated slab"),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"slab slab-elevated"},"Look ma, im elevated!")))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"slab-well"},"Slab well"),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"slab slab-well"},"Look ma, im in a well!")))},y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"slab-white"},"Slab white"),l.a.createElement("p",null,"This slab can contain so many things"),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"slab slab-white"},l.a.createElement("p",{className:"lead text-center"},"Here is some text and then a striped item list"),l.a.createElement("ul",{className:"item-list item-list-striped"},l.a.createElement("li",null,l.a.createElement("span",null,"4925*********004")),l.a.createElement("li",null,"\n",l.a.createElement("span",null,"\n\t\t\t","4925*********004","\n\t\t\t",l.a.createElement("span",{className:"badge badge-blue"},"new"),"\n"),"\n",l.a.createElement("a",{href:"https://developer.payex.com"},"developer.payex.com"),"\n"),l.a.createElement("li",null,"\n",l.a.createElement("span",null,"4925*********004"),"\n",l.a.createElement("i",{className:"material-icons"},"star"),"\n"),l.a.createElement("li",null,"\n",l.a.createElement("span",null,"4925*********004"),"\n",l.a.createElement("span",{className:"status status-success"},"Active"),"\n",l.a.createElement("button",{type:"button",className:"btn btn-danger btn-xs"},l.a.createElement("i",{className:"material-icons"},"delete")),"\n")),l.a.createElement("p",null,"Maybe include a steps component in this slab so you can track your progress!"),l.a.createElement("div",{className:"steps"},l.a.createElement("ol",null,l.a.createElement("li",{className:"steps-completed"},l.a.createElement("div",{className:"material-icons steps-icon"},"check"),"Step one",l.a.createElement("div",{className:"steps-sub-title"},"24.12.17 12:10")),l.a.createElement("li",{className:"steps-ongoing steps-selected"},"Step two"),l.a.createElement("li",null,"Step three"),l.a.createElement("li",null,"Step four")),l.a.createElement("div",{className:"steps-responsive"},l.a.createElement("div",{className:"steps-responsive-text"},"Step 3"))))))},b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"slab-muted"},"Slab muted"),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"slab slab-muted"},l.a.createElement("h4",null,"This text will be gray."),"\n",l.a.createElement("span",null,"And this text will be gray."),"\n","Even this text will be gray!")))},v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"slab-sizes"},"Slab sizes"),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"slab slab-sm"},"This is very snug.")),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"slab slab-lg"},"This is so spacious I can hardly believe it!")))},E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"slab-combinations"},"Slab combinations"),l.a.createElement("p",null,"You can mix and match slab variations as you see fit."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"slab slab-white slab-muted slab-elevated"},"This is an elevated white slab with muted text.")),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"slab slab-well slab-lg"},"This is a big well!")))},r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,p(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){c.validation.init()}},{key:"render",value:function(){return l.a.createElement(i.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Slabs are container components, therefore it works with whatever you want to put in it."),l.a.createElement(m,null),l.a.createElement(d,null),l.a.createElement(h,null),l.a.createElement(y,null),l.a.createElement(b,null),l.a.createElement(v,null),l.a.createElement(E,null))}}])&&s(n.prototype,a),r&&s(n,r),t}();t.default=r}}]);
//# sourceMappingURL=doc-route.chunk_17.js.map?13945419b7bce141b61e