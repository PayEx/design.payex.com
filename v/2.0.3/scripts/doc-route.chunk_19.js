(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[17,2,45,46,47,48,50,51,52],{388:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return i});var r=n(1),o=n.n(r),a=n(72),c=n.n(a),i=function(e){var t=e.value;return o.a.createElement("code",{className:"token property"},t)},l=function(e){var t=e.data,n=e.name,r=e.value;return n&&r?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n),o.a.createElement("span",{className:"token attr-value"},o.a.createElement("span",{className:"token punctuation"},'="'),r,o.a.createElement("span",{className:"token punctuation"},'"'))):n&&!r?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n)):!n&&r?o.a.createElement("code",null,o.a.createElement("span",{className:"token attr-value"},r)):void 0};l.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},i.propTypes={value:c.a.string.isRequired},t.default=l},389:function(e,t,n){"use strict";var r=n(1),i=n.n(r),o=n(72),a=n.n(o),c=function(e){var t=e.id,n=e.type,r=e.icon,o=e.close,a=e.text,c=e.children;return i.a.createElement("div",{id:t,className:"alert alert-".concat(n)},r?"\n":"",r?i.a.createElement("i",{className:"material-icons alert-icon"},r):null,a?"\n":"",a?i.a.createElement("p",null,a):null,c?"\n":"",c?i.a.createElement("div",{className:"alert-body"},c):null,o?"\n":"",o?i.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",i.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:a.a.string,type:a.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:a.a.string,close:a.a.bool,text:a.a.string},t.a=c},390:function(e,t,n){"use strict";n.r(t);var r=n(1),p=n.n(r),o=n(72),a=n.n(o),f=n(400),c=n(401),m=n.n(c),d=n(402);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e){var r=e.children,o=e.language,a=e.removeOuterTag,c=e.hideValue,i=e.removeList,t=e.showCasePanel,n=e.codeFigure,l=e.dangerousHTML,u=function(e){var t=document.createElement("div");return t.innerHTML=Object(f.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(f.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),r="";return n.forEach(function(e){r+="".concat(e.innerHTML," \n")}),r};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},r)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===o&&l)t="","function"==typeof(e=r).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===o&&r&&"function"==typeof r.map)r.map(function(e){n+=a?u(e):i?s(e):Object(f.renderToStaticMarkup)(e)});else if("html"===o)n+=a?u(r):i?s(r):Object(f.renderToStaticMarkup)(r);else switch(h(r)){case"string":n=r;break;case"object":r.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(o){case"html":n=(n=m.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),c&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=m.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",p.a.createElement("figure",null,p.a.createElement(d.a,y({},d.b,{theme:void 0,code:n,language:o}),function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,a=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},r.map(function(e,t){return p.a.createElement("div",y({key:e+t},o({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",y({key:t},a({token:e,key:t})))}))}))}))},null):null)};i.propTypes={language:a.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:a.a.bool,hideValue:a.a.bool,removeList:a.a.bool,showCasePanel:a.a.bool,codeFigure:a.a.bool,dangerousHTML:a.a.bool},t.default=i},391:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(72),o=n.n(r),i=n(399);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function o(e){var t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=s(this,p(o).call(this,e))).state={headings:(n=t.props.component().props.children,r=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)r.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)r.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&r.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&r.push({title:e.props.children,id:e.props.id})}),r),windowTopPosition:window.pageYOffset},t}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(o,a["Component"]),t=o,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var r=this;return c.a.createElement("div",{className:"col-2 d-none d-lg-block"},c.a.createElement("div",{className:"doc-toc"},c.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=r.state.windowTopPosition>=e.top&&r.state.windowTopPosition<r.state.headings[t+1].top;return c.a.createElement("li",{key:t,className:n?"active":""},c.a.createElement(i.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:r.scrollToElement},e.title))}}))))}}])&&u(t.prototype,n),r&&u(t,r),o}();m.propTypes={component:o.a.func.isRequired},t.default=m},392:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(389);t.default=function(){return o.a.createElement(a.a,{type:"danger"},o.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),o.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},393:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(389);t.default=function(){return o.a.createElement(a.a,{type:"danger"},o.a.createElement("h3",{className:"text-danger"},"Component under development!"),o.a.createElement("p",null,"This component is still under development and is subject to change."))}},394:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(72),c=function(e){var t=e.icon;return o.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(a).a.string.isRequired},t.default=c},395:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),o=n(72),a=n.n(o),c=function(e){var t,n,r=e.component,o=e.subComponents,a=e.func,c=e.params;return o&&(n=o.map(function(e,t){return i.a.createElement("span",{key:t},e,i.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return i.a.createElement("span",{key:t},e,t<c.length-1?i.a.createElement("span",{className:"token punctuation"},", "):null)})),i.a.createElement("code",null,i.a.createElement("span",null,"px"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",null,r),i.a.createElement("span",{className:"token punctuation"},"."),n,i.a.createElement("span",{className:"token function"},a),i.a.createElement("span",{className:"token punctuation"},"("),t,i.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:a.a.string.isRequired,subComponents:a.a.array,func:a.a.string.isRequired,params:a.a.array},t.default=c},396:function(e,t,n){"use strict";n.r(t);var r=n(388);n.d(t,"Attribute",function(){return r.default}),n.d(t,"Property",function(){return r.Property});var o=n(390);n.d(t,"ComponentPreview",function(){return o.default});var a=n(397);n.d(t,"DocContainer",function(){return a.default});var c=n(398);n.d(t,"DocHeading",function(){return c.default});var i=n(391);n.d(t,"DocToc",function(){return i.default});var l=n(392);n.d(t,"DeprecatedComponentAlert",function(){return l.default});var u=n(393);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(394);n.d(t,"Icon",function(){return s.default});var p=n(395);n.d(t,"PxScript",function(){return p.default})},397:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(72),c=n.n(a),i=n(396),l=function(e){var t=e.docToc,n=e.children,r=function(){return o.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(r,null),t?o.a.createElement(i.DocToc,{component:r}):null))};l.propTypes={docToc:c.a.bool},t.default=l},399:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=y,t.HashLink=h,t.NavHashLink=b;var a=l(n(1)),c=l(n(72)),i=n(106);function l(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,p=null,f=null;function m(){u="",null!==s&&s.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function d(){var e=document.getElementById(u);return null!==e&&(f(e),m(),!0)}function y(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["scroll","smooth"]);return a.default.createElement(e,r({},n,{onClick:function(e){m(),t.onClick&&t.onClick(e),"string"==typeof t.to?u=t.to.split("#").slice(1).join("#"):"object"===o(t.to)&&"string"==typeof t.to.hash&&(u=t.to.hash.replace("#","")),""!==u&&(f=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===s&&(s=new MutationObserver(d)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){m()},1e4))},0))}}),t.children)}function h(e){return y(e,i.Link)}function b(e){return y(e,i.NavLink)}var v={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};b.propTypes=h.propTypes=v},403:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(404);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return o(r).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}})},404:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),a=n(1),i=(r=a)&&r.__esModule?r:{default:r},c=n(72);function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function c(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=n=l(this,(e=c.__proto__||Object.getPrototypeOf(c)).call.apply(e,[this].concat(o))))._handleRefMount=function(e){n._domNode=e},l(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,a.PureComponent),o(c,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,r=e.children;return i.default.createElement(n,{ref:this._handleRefMount,className:t},r)}}]),c}();u.propTypes={async:c.PropTypes.bool,className:c.PropTypes.string,children:c.PropTypes.any,component:c.PropTypes.node},u.defaultProps={component:"code"},t.default=u},465:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(106),o=n(403),i=n.n(o),l=n(396),u=n(107),s=n(72),p=n.n(s);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=d(this,y(n).call(this,e))).state={active:1},t}var t,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(n,a["Component"]),t=n,(r=[{key:"setActive",value:function(e,t){e.preventDefault(),this.setState({active:t})}},{key:"render",value:function(){var n=this,e=this.props,t=e.mode,r=e.items;return c.a.createElement("div",{className:"tabs".concat(t?" tabs-horizontal-".concat(t):"")},"\n",c.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right"),c.a.createElement("ul",null,r.map(function(e,t){return c.a.createElement("li",{key:"tab-item-".concat(e,"-").concat(t),className:n.state.active===t?"active":null},"\n",c.a.createElement("a",{href:"#",onClick:function(e){return n.setActive(e,t)}},e),"\n")})))}}])&&m(t.prototype,r),o&&m(t,o),n}();b.propTypes={mode:p.a.oneOf(["xs","sm","md","lg","xl","xxl"]),items:p.a.array.isRequired};var v=b;function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"BasicUsage",function(){return P}),n.d(t,"Collapsed",function(){return _});var T=["Kort","Rabatter","Transaksjoner","Faktura","Instillinger","Audit trail"],P=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"basic-usage"},"Basic usage"),c.a.createElement("p",null,"Add class ",c.a.createElement(l.Property,{value:".tabs"})," with a ",c.a.createElement(l.Property,{value:".tabs-horizontal-desired_size"})," to a div containing an arrow icon along with ",c.a.createElement(i.a,{className:"language-html"},"<ul>")," and nest ",c.a.createElement(i.a,{className:"language-html"},"<li>")," as needed. The ",c.a.createElement(l.Property,{value:".tabs-horizontal-desired_size"})," class determines when your tabs will switch from horizontal to collapsed. The available sizes can be found in our ",c.a.createElement(r.Link,{to:"/docs/core/breakpoints"},"breakpoints documentation"),"."),c.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(v,{mode:"xl",items:T})))},_=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"collapsed"},"Collapsed"),c.a.createElement("p",null,"If no ",c.a.createElement(l.Property,{value:".tabs-horizontal-desired_size"})," is provided then the tabs will always be in collapsed mode."),c.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(v,{items:T})))},j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,k(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,a["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){u.tabs.init()}},{key:"render",value:function(){return c.a.createElement(l.DocContainer,{docToc:!0},c.a.createElement("p",{className:"lead"},"Use tabs to show which page or section that is active out of several options."),c.a.createElement(P,null),c.a.createElement(_,null))}}])&&E(n.prototype,r),o&&E(n,o),t}();t.default=j}}]);
//# sourceMappingURL=doc-route.chunk_19.js.map?fe83f8bddffd7458f6d8