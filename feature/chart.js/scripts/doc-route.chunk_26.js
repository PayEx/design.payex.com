(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[26,3,46,47,48,49,51,52,53],{250:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n.n(a),o=n(1),c=n.n(o),l=n(2),i=n.n(l),s=n(200),u=n(479);function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m=function(o){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t=p(this,o.call.apply(o,[this].concat(a)))).history=Object(s.a)(t.props),p(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.componentWillMount=function(){r()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},l.prototype.render=function(){return c.a.createElement(u.a,{history:this.history,children:this.props.children})},l}(c.a.Component);m.propTypes={basename:i.a.string,forceRefresh:i.a.bool,getUserConfirmation:i.a.func,keyLength:i.a.number,children:i.a.node};var f=m;function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(o){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t=d(this,o.call.apply(o,[this].concat(a)))).history=Object(s.b)(t.props),d(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.componentWillMount=function(){r()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},l.prototype.render=function(){return c.a.createElement(u.a,{history:this.history,children:this.props.children})},l}(c.a.Component);h.propTypes={basename:i.a.string,getUserConfirmation:i.a.func,hashType:i.a.oneOf(["hashbang","noslash","slash"]),children:i.a.node};var y=h,E=n(107),v=n(202);function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=function(o){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t=b(this,o.call.apply(o,[this].concat(a)))).history=Object(s.d)(t.props),b(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.componentWillMount=function(){r()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},l.prototype.render=function(){return c.a.createElement(v.a,{history:this.history,children:this.props.children})},l}(c.a.Component);g.propTypes={initialEntries:i.a.array,initialIndex:i.a.number,getUserConfirmation:i.a.func,keyLength:i.a.number,children:i.a.node};var w=g,O=n(480),N=n(20),k=n.n(N);var T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.enable=function(e){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(e)},t.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},t.prototype.componentWillMount=function(){k()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},t.prototype.componentWillReceiveProps=function(e){e.when?this.props.when&&this.props.message===e.message||this.enable(e.message):this.disable()},t.prototype.componentWillUnmount=function(){this.disable()},t.prototype.render=function(){return null},t}(c.a.Component);T.propTypes={when:i.a.bool,message:i.a.oneOfType([i.a.func,i.a.string]).isRequired},T.defaultProps={when:!0},T.contextTypes={router:i.a.shape({history:i.a.shape({block:i.a.func.isRequired}).isRequired}).isRequired};var P=T,j=n(494),x=n(201),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function R(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var S=function(e){return"/"===e.charAt(0)?e:"/"+e},_=function(e,t){return e?C({},t,{pathname:S(e)+t.pathname}):t},L=function(e){return"string"==typeof e?e:Object(s.e)(e)},M=function(e){return function(){k()(!1,"You cannot %s with <StaticRouter>",e)}},H=function(){},q=function(o){function l(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=r=R(this,o.call.apply(o,[this].concat(n)))).createHref=function(e){return S(r.props.basename+L(e))},r.handlePush=function(e){var t=r.props,n=t.basename,a=t.context;a.action="PUSH",a.location=_(n,Object(s.c)(e)),a.url=L(a.location)},r.handleReplace=function(e){var t=r.props,n=t.basename,a=t.context;a.action="REPLACE",a.location=_(n,Object(s.c)(e)),a.url=L(a.location)},r.handleListen=function(){return H},r.handleBlock=function(){return H},R(r,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},l.prototype.componentWillMount=function(){r()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},l.prototype.render=function(){var e=this.props,t=e.basename,n=(e.context,e.location),a=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["basename","context","location"]),r={createHref:this.createHref,action:"POP",location:function(e,t){if(!e)return t;var n=S(e);return 0!==t.pathname.indexOf(n)?t:C({},t,{pathname:t.pathname.substr(n.length)})}(t,Object(s.c)(n)),push:this.handlePush,replace:this.handleReplace,go:M("go"),goBack:M("goBack"),goForward:M("goForward"),listen:this.handleListen,block:this.handleBlock};return c.a.createElement(v.a,C({},a,{history:r}))},l}(c.a.Component);q.propTypes={basename:i.a.string,context:i.a.object.isRequired,location:i.a.oneOfType([i.a.string,i.a.object])},q.defaultProps={basename:"",location:"/"},q.childContextTypes={router:i.a.object.isRequired};var A=q,F=n(482),W=n(496).a,B=n(93).a,D=n(481);n.d(t,"BrowserRouter",function(){return f}),n.d(t,"HashRouter",function(){return y}),n.d(t,"Link",function(){return E.a}),n.d(t,"MemoryRouter",function(){return w}),n.d(t,"NavLink",function(){return O.a}),n.d(t,"Prompt",function(){return P}),n.d(t,"Redirect",function(){return j.a}),n.d(t,"Route",function(){return x.a}),n.d(t,"Router",function(){return u.a}),n.d(t,"StaticRouter",function(){return A}),n.d(t,"Switch",function(){return F.a}),n.d(t,"generatePath",function(){return W}),n.d(t,"matchPath",function(){return B}),n.d(t,"withRouter",function(){return D.a})},483:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),o=n(2),l=n.n(o),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},484:function(e,t,n){"use strict";n.r(t);var a=n(483);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(486);n.d(t,"ComponentPreview",function(){return r.default});var o=n(492);n.d(t,"DocContainer",function(){return o.default});var l=n(493);n.d(t,"DocHeading",function(){return l.default});var c=n(487);n.d(t,"DocToc",function(){return c.default});var i=n(488);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=n(489);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(490);n.d(t,"Icon",function(){return u.default});var p=n(491);n.d(t,"PxScript",function(){return p.default})},485:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(2),o=n.n(r),l=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,l=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?c.a.createElement("p",null,o):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=l},486:function(e,t,n){"use strict";n.r(t);var a=n(1),p=n.n(a),r=n(2),o=n.n(r),m=n(497),l=n(498),f=n.n(l),d=n(499);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var a=e.children,r=e.language,o=e.removeOuterTag,l=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,i=e.dangerousHTML,s=function(e){var t=document.createElement("div");return t.innerHTML=Object(m.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},u=function(e){var t=document.createElement("div");t.innerHTML=Object(m.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===r&&i)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=o?s(e):c?u(e):Object(m.renderToStaticMarkup)(e)});else if("html"===r)n+=o?s(a):c?u(a):Object(m.renderToStaticMarkup)(a);else switch(y(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=f.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=f.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",p.a.createElement("figure",null,p.a.createElement(d.a,h({},d.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return p.a.createElement("div",h({key:e+t},r({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",h({key:t},o({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=c},487:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n.n(o),a=n(2),r=n.n(a),c=n(495);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=u(this,p(r).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(r,o["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return l.a.createElement("li",{key:t,className:n?"active":""},l.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&s(t.prototype,n),a&&s(t,a),r}();f.propTypes={component:r.a.func.isRequired},t.default=f},488:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(485);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},489:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(485);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},490:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(2),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},491:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(2),o=n.n(r),l=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,l=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return c.a.createElement("span",{key:t},e,t<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},o),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=l},492:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(2),l=n.n(o),c=n(484),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:l.a.bool},t.default=i},495:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=y,t.NavHashLink=E;var o=i(n(1)),l=i(n(2)),c=n(250);function i(e){return e&&e.__esModule?e:{default:e}}var s="",u=null,p=null,m=null;function f(){s="",null!==u&&u.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function d(){var e=document.getElementById(s);return null!==e&&(m(e),f(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return o.default.createElement(e,a({},n,{onClick:function(e){f(),t.onClick&&t.onClick(e),"string"==typeof t.to?s=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(s=t.to.hash.replace("#","")),""!==s&&(m=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===u&&(u=new MutationObserver(d)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),t.children)}function y(e){return h(e,c.Link)}function E(e){return h(e,c.NavLink)}var v={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};E.propTypes=y.propTypes=v},532:function(e,t,n){"use strict";n.r(t),n.d(t,"HowItWorks",function(){return l}),n.d(t,"GridOptions",function(){return c}),n.d(t,"AutoLayoutColumns",function(){return i}),n.d(t,"Alignment",function(){return s});var a=n(1),r=n.n(a),o=n(484),l=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"how-it-works"},"How it works"),r.a.createElement("p",null,"The grid system is heavily based on Bootstrap","'","s grid from v.4."),r.a.createElement("p",null,"Most classes from Bootstrap is available. Click ",r.a.createElement("a",{href:"http://getbootstrap.com/docs/4.1/layout/grid/",target:"_blank",rel:"noopener noreferrer"},"here")," to read more about it."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"showcase-grid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"},"One of three columns"),r.a.createElement("div",{className:"col-sm"},"One of three columns"),r.a.createElement("div",{className:"col-sm"},"One of three columns"))))),r.a.createElement("p",null,"The above example creates three equal-width columns on small, medium, large, extra large, and extra extra large devices using our predefined grid classes. Those columns are centered in the page with the parent ",r.a.createElement(o.Property,{value:".container"}),"."))},c=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"grid-options"},"Grid options"),r.a.createElement("p",null,"Most sizes in the PayEx DesignGuide is defined using ",r.a.createElement(o.Property,{value:"em"}),"s or ",r.a.createElement(o.Property,{value:"rem"}),"s, ",r.a.createElement(o.Property,{value:"px"}),"s are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the font size."),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",{scope:"col"},"Extra small",r.a.createElement("p",null,r.a.createElement("small",null,"<","576px"))),r.a.createElement("th",{scope:"col"},"Small",r.a.createElement("p",null,r.a.createElement("small",null,"≥","576px"))),r.a.createElement("th",{scope:"col"},"Medium",r.a.createElement("p",null,r.a.createElement("small",null,"≥","768px"))),r.a.createElement("th",{scope:"col"},"Large",r.a.createElement("p",null,r.a.createElement("small",null,"≥","992px"))),r.a.createElement("th",{scope:"col"},"Extra large",r.a.createElement("p",null,r.a.createElement("small",null,"≥","1200px"))),r.a.createElement("th",{scope:"col"},"Extra extra large",r.a.createElement("p",null,r.a.createElement("small",null,"≥","1600px"))))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Max container width"),r.a.createElement("td",null,"None (auto)"),r.a.createElement("td",null,"540px"),r.a.createElement("td",null,"720px"),r.a.createElement("td",null,"960px"),r.a.createElement("td",null,"1140px"),r.a.createElement("td",null,"1460px")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Class prefix"),r.a.createElement("td",null,r.a.createElement(o.Property,{value:".col-"})),r.a.createElement("td",null,r.a.createElement(o.Property,{value:".col-sm-"})),r.a.createElement("td",null,r.a.createElement(o.Property,{value:".col-md-"})),r.a.createElement("td",null,r.a.createElement(o.Property,{value:".col-lg-"})),r.a.createElement("td",null,r.a.createElement(o.Property,{value:".col-xl-"})),r.a.createElement("td",null,r.a.createElement(o.Property,{value:".col-xxl-"}))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"# of columns"),r.a.createElement("td",{colSpan:"6"},"12")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Gutter width"),r.a.createElement("td",{colSpan:"6"},"30px (15px on each side of a column)")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Nestable"),r.a.createElement("td",{colSpan:"6"},"Yes")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Column ordering"),r.a.createElement("td",{colSpan:"6"},"Yes")))))},i=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"auto-layout-columns"},"Auto-layout columns"),r.a.createElement("p",null,"Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like ",r.a.createElement(o.Property,{value:".col-sm-6"}),"."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"showcase-grid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},"1 of 2"),r.a.createElement("div",{className:"col"},"2 of 2")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},"1 of 3"),r.a.createElement("div",{className:"col"},"2 of 3"),r.a.createElement("div",{className:"col"},"3 of 3"))))))},s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"alignment"},"Alignment"),r.a.createElement("p",null,"Use flexbox alignment utilities to vertically and horizontally align columns."),r.a.createElement("h3",null,"Vertical alignment"),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"showcase-grid showcase-vertical-space"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col"},"1 of 3"),r.a.createElement("div",{className:"col"},"2 of 3"),r.a.createElement("div",{className:"col"},"3 of 3")),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col"},"1 of 3"),r.a.createElement("div",{className:"col"},"2 of 3"),r.a.createElement("div",{className:"col"},"3 of 3")),r.a.createElement("div",{className:"row align-items-end"},r.a.createElement("div",{className:"col"},"1 of 3"),r.a.createElement("div",{className:"col"},"2 of 3"),r.a.createElement("div",{className:"col"},"3 of 3"))))),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"showcase-grid showcase-vertical-space"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col align-self-start"},"1 of 3"),r.a.createElement("div",{className:"col align-self-center"},"1 of 3"),r.a.createElement("div",{className:"col align-self-end"},"1 of 3"))))),r.a.createElement("h3",null,"Horizontal alignment"),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"showcase-grid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-start"},r.a.createElement("div",{className:"col-4"},"One of two columns"),r.a.createElement("div",{className:"col-4"},"One of two columns")),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4"},"One of two columns"),r.a.createElement("div",{className:"col-4"},"One of two columns")),r.a.createElement("div",{className:"row justify-content-end"},r.a.createElement("div",{className:"col-4"},"One of two columns"),r.a.createElement("div",{className:"col-4"},"One of two columns")),r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement("div",{className:"col-4"},"One of two columns"),r.a.createElement("div",{className:"col-4"},"One of two columns")),r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("div",{className:"col-4"},"One of two columns"),r.a.createElement("div",{className:"col-4"},"One of two columns"))))))};t.default=function(){return r.a.createElement(o.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Use our grid system..."),r.a.createElement(l,null),r.a.createElement(c,null),r.a.createElement(i,null),r.a.createElement(s,null))}}}]);
//# sourceMappingURL=doc-route.chunk_26.js.map?cdccfdb25009d9bb6d35