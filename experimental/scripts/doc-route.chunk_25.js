(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[25,3,47,48,49,51,52,53,54],{166:function(e,t,n){"use strict";n.r(t);var a=n(22),r=n.n(a),o=n(0),l=n.n(o),c=n(2),i=n.n(c),s=n(117),u=n(396);function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m=function(o){function c(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t=p(this,o.call.apply(o,[this].concat(a)))).history=Object(s.a)(t.props),p(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,o),c.prototype.componentWillMount=function(){r()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},c.prototype.render=function(){return l.a.createElement(u.a,{history:this.history,children:this.props.children})},c}(l.a.Component);m.propTypes={basename:i.a.string,forceRefresh:i.a.bool,getUserConfirmation:i.a.func,keyLength:i.a.number,children:i.a.node};var f=m;function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(o){function c(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t=d(this,o.call.apply(o,[this].concat(a)))).history=Object(s.b)(t.props),d(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,o),c.prototype.componentWillMount=function(){r()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},c.prototype.render=function(){return l.a.createElement(u.a,{history:this.history,children:this.props.children})},c}(l.a.Component);h.propTypes={basename:i.a.string,getUserConfirmation:i.a.func,hashType:i.a.oneOf(["hashbang","noslash","slash"]),children:i.a.node};var y=h,b=n(82),v=n(119);function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=function(o){function c(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t=E(this,o.call.apply(o,[this].concat(a)))).history=Object(s.d)(t.props),E(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,o),c.prototype.componentWillMount=function(){r()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},c.prototype.render=function(){return l.a.createElement(v.a,{history:this.history,children:this.props.children})},c}(l.a.Component);g.propTypes={initialEntries:i.a.array,initialIndex:i.a.number,getUserConfirmation:i.a.func,keyLength:i.a.number,children:i.a.node};var w=g,k=n(397),x=n(15),O=n.n(x);var N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.enable=function(e){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(e)},t.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},t.prototype.componentWillMount=function(){O()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},t.prototype.componentWillReceiveProps=function(e){e.when?this.props.when&&this.props.message===e.message||this.enable(e.message):this.disable()},t.prototype.componentWillUnmount=function(){this.disable()},t.prototype.render=function(){return null},t}(l.a.Component);N.propTypes={when:i.a.bool,message:i.a.oneOfType([i.a.func,i.a.string]).isRequired},N.defaultProps={when:!0},N.contextTypes={router:i.a.shape({history:i.a.shape({block:i.a.func.isRequired}).isRequired}).isRequired};var T=N,P=n(412),j=n(118),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function R(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var S=function(e){return"/"===e.charAt(0)?e:"/"+e},_=function(e,t){return e?C({},t,{pathname:S(e)+t.pathname}):t},L=function(e){return"string"==typeof e?e:Object(s.e)(e)},M=function(e){return function(){O()(!1,"You cannot %s with <StaticRouter>",e)}},H=function(){},q=function(o){function c(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=r=R(this,o.call.apply(o,[this].concat(n)))).createHref=function(e){return S(r.props.basename+L(e))},r.handlePush=function(e){var t=r.props,n=t.basename,a=t.context;a.action="PUSH",a.location=_(n,Object(s.c)(e)),a.url=L(a.location)},r.handleReplace=function(e){var t=r.props,n=t.basename,a=t.context;a.action="REPLACE",a.location=_(n,Object(s.c)(e)),a.url=L(a.location)},r.handleListen=function(){return H},r.handleBlock=function(){return H},R(r,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,o),c.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},c.prototype.componentWillMount=function(){r()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},c.prototype.render=function(){var e=this.props,t=e.basename,n=(e.context,e.location),a=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["basename","context","location"]),r={createHref:this.createHref,action:"POP",location:function(e,t){if(!e)return t;var n=S(e);return 0!==t.pathname.indexOf(n)?t:C({},t,{pathname:t.pathname.substr(n.length)})}(t,Object(s.c)(n)),push:this.handlePush,replace:this.handleReplace,go:M("go"),goBack:M("goBack"),goForward:M("goForward"),listen:this.handleListen,block:this.handleBlock};return l.a.createElement(v.a,C({},a,{history:r}))},c}(l.a.Component);q.propTypes={basename:i.a.string,context:i.a.object.isRequired,location:i.a.oneOfType([i.a.string,i.a.object])},q.defaultProps={basename:"",location:"/"},q.childContextTypes={router:i.a.object.isRequired};var A=q,W=n(399),B=n(413).a,D=n(65).a,F=n(398);n.d(t,"BrowserRouter",function(){return f}),n.d(t,"HashRouter",function(){return y}),n.d(t,"Link",function(){return b.a}),n.d(t,"MemoryRouter",function(){return w}),n.d(t,"NavLink",function(){return k.a}),n.d(t,"Prompt",function(){return T}),n.d(t,"Redirect",function(){return P.a}),n.d(t,"Route",function(){return j.a}),n.d(t,"Router",function(){return u.a}),n.d(t,"StaticRouter",function(){return A}),n.d(t,"Switch",function(){return W.a}),n.d(t,"generatePath",function(){return B}),n.d(t,"matchPath",function(){return D}),n.d(t,"withRouter",function(){return F.a})},400:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return l});var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},l.propTypes={value:c.a.string.isRequired},t.default=i},401:function(e,t,n){"use strict";n.r(t);var a=n(400);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(403);n.d(t,"ComponentPreview",function(){return r.default});var o=n(409);n.d(t,"DocContainer",function(){return o.default});var c=n(410);n.d(t,"DocHeading",function(){return c.default});var l=n(404);n.d(t,"DocToc",function(){return l.default});var i=n(405);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=n(406);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(407);n.d(t,"Icon",function(){return u.default});var p=n(408);n.d(t,"PxScript",function(){return p.default})},402:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(2),o=n.n(r),c=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,c=e.children;return l.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?l.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?l.a.createElement("p",null,o):null,c?"\n":"",c?l.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=c},403:function(e,t,n){"use strict";n.r(t);var a=n(0),p=n.n(a),r=n(2),o=n.n(r),m=n(414),c=n(415),f=n.n(c),d=n(416);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e){var a=e.children,r=e.language,o=e.removeOuterTag,c=e.hideValue,l=e.removeList,t=e.showCasePanel,n=e.codeFigure,i=e.dangerousHTML,s=function(e){var t=document.createElement("div");return t.innerHTML=Object(m.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},u=function(e){var t=document.createElement("div");t.innerHTML=Object(m.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===r&&i)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=o?s(e):l?u(e):Object(m.renderToStaticMarkup)(e)});else if("html"===r)n+=o?s(a):l?u(a):Object(m.renderToStaticMarkup)(a);else switch(y(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=f.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),c&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=f.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",p.a.createElement("figure",null,p.a.createElement(d.a,h({},d.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return p.a.createElement("div",h({key:e+t},r({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",h({key:t},o({token:e,key:t})))}))}))}))},null):null)};l.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=l},404:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(2),r=n.n(a),l=n(411);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=u(this,p(r).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(r,o["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return c.a.createElement("div",{className:"col-2 d-none d-lg-block"},c.a.createElement("div",{className:"doc-toc"},c.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return c.a.createElement("li",{key:t,className:n?"active":""},c.a.createElement(l.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&s(t.prototype,n),a&&s(t,a),r}();f.propTypes={component:r.a.func.isRequired},t.default=f},405:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(402);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},406:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(402);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},407:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(o).a.string.isRequired},t.default=c},408:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(2),o=n.n(r),c=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,c=e.params;return r&&(n=r.map(function(e,t){return l.a.createElement("span",{key:t},e,l.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return l.a.createElement("span",{key:t},e,t<c.length-1?l.a.createElement("span",{className:"token punctuation"},", "):null)})),l.a.createElement("code",null,l.a.createElement("span",null,"px"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",null,a),l.a.createElement("span",{className:"token punctuation"},"."),n,l.a.createElement("span",{className:"token function"},o),l.a.createElement("span",{className:"token punctuation"},"("),t,l.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=c},409:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=n(401),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(l.DocToc,{component:a}):null))};i.propTypes={docToc:c.a.bool},t.default=i},411:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=y,t.NavHashLink=b;var o=i(n(0)),c=i(n(2)),l=n(166);function i(e){return e&&e.__esModule?e:{default:e}}var s="",u=null,p=null,m=null;function f(){s="",null!==u&&u.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function d(){var e=document.getElementById(s);return null!==e&&(m(e),f(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return o.default.createElement(e,a({},n,{onClick:function(e){f(),t.onClick&&t.onClick(e),"string"==typeof t.to?s=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(s=t.to.hash.replace("#","")),""!==s&&(m=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===u&&(u=new MutationObserver(d)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),t.children)}function y(e){return h(e,l.Link)}function b(e){return h(e,l.NavLink)}var v={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};b.propTypes=y.propTypes=v},476:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(401),o=n(2),l=n.n(o),i=function(e){var t=e.name,n=e.hex,a=e.color,r={backgroundColor:n},o={color:a||null};return c.a.createElement("div",{className:"color-preview",style:r},c.a.createElement("p",{style:a?o:null},t," (",n,")"))};i.propTypes={name:l.a.string.isRequired,hex:l.a.string.isRequired,color:l.a.string};var s=i;n.d(t,"MainColors",function(){return u}),n.d(t,"AlertColors",function(){return p}),n.d(t,"Grayscale",function(){return m});var u=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"main-colors"},"Main colors"),c.a.createElement("p",null,"The main color palette of Swedbank Pay"),c.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 offset-lg-1 mb-2"},c.a.createElement(s,{name:"orange-medium",hex:"#ee7023"})),c.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-2"},c.a.createElement(s,{name:"orange-light",hex:"#ff9900"})),c.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-2"},c.a.createElement(s,{name:"orange-bright",hex:"#ffcc00"})),c.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-2"},c.a.createElement(s,{name:"green",hex:"#82b236"})),c.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-2"},c.a.createElement(s,{name:"blue",hex:"#5b8ad6"})),c.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 offset-lg-1 mb-2"},c.a.createElement(s,{name:"blue-light",hex:"#a2c9ce"})),c.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-2"},c.a.createElement(s,{name:"blue-bright",hex:"#d7e6e9"})),c.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-2"},c.a.createElement(s,{name:"teal",hex:"#4893a0"})),c.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-2"},c.a.createElement(s,{name:"blue-bright-alt",hex:"#a3c9cf"})),c.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-2"},c.a.createElement(s,{name:"red-medium",hex:"#dd3300"})))))},p=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"alert-colors"},"Alert colors"),c.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"brand-success",hex:"#477d17"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"brand-success-light",hex:"#f2f7eb"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"brand-warning",hex:"#ff9900"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"brand-warning-light",hex:"#fffae5"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"brand-error-border",hex:"#f1bbb9"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"brand-error",hex:"#b24843"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"brand-error-light",hex:"#fceeed"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"brand-info",hex:"#2c7a8f"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"brand-info-light",hex:"#f0f9fb"})))))},m=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"grayscale"},"Grayscale"),c.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"black",hex:"#000000",color:"#eaeaea"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"nearblack",hex:"#111111",color:"#eaeaea"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"gray-dark",hex:"#262626",color:"#eaeaea"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"gray-medium-dark",hex:"#363636",color:"#eaeaea"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"gray-medium",hex:"#404040",color:"#eaeaea"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"gray-medium-light",hex:"#545454",color:"#eaeaea"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"gray-light",hex:"#666666",color:"#eaeaea"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"gray-light-alt",hex:"#999999"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"gray-bright",hex:"#eaeaea"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"gray-bright-alt",hex:"#bcbcbc"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"neargray",hex:"#f9f9f9"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"offwhite",hex:"#f4f4f4"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"nearwhite",hex:"#f0f0f0"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(s,{name:"white",hex:"#ffffff",color:"black"})))))};t.default=function(){return c.a.createElement(r.DocContainer,null,c.a.createElement("p",{className:"lead"},"The Swedbank Pay DesignGuide color palette"),c.a.createElement(u,null),c.a.createElement(p,null),c.a.createElement(m,null))}}}]);
//# sourceMappingURL=doc-route.chunk_25.js.map?818616146027366c40ad