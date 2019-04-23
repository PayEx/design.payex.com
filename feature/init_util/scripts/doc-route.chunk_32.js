(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[32,2,45,46,47,48,50,51,52],{363:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return l});var r=n(1),a=n.n(r),o=n(65),c=n.n(o),l=function(e){var t=e.value;return a.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,r=e.value;return n&&r?a.a.createElement("code",null,t?a.a.createElement("span",{className:"token attr-name"},"data-"):null,a.a.createElement("span",{className:"token attr-name"},n),a.a.createElement("span",{className:"token attr-value"},a.a.createElement("span",{className:"token punctuation"},'="'),r,a.a.createElement("span",{className:"token punctuation"},'"'))):n&&!r?a.a.createElement("code",null,t?a.a.createElement("span",{className:"token attr-name"},"data-"):null,a.a.createElement("span",{className:"token attr-name"},n)):!n&&r?a.a.createElement("code",null,a.a.createElement("span",{className:"token attr-value"},r)):void 0};i.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},l.propTypes={value:c.a.string.isRequired},t.default=i},364:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(65),c=n.n(o),l=function(e){var t=e.id,n=e.type,r=e.icon,o=e.close,c=e.text,l=e.children;return a.a.createElement("div",{id:t,className:"alert alert-".concat(n)},r?"\n":"",r?a.a.createElement("i",{className:"material-icons alert-icon"},r):null,c?"\n":"",c?a.a.createElement("p",null,c):null,l?"\n":"",l?a.a.createElement("div",{className:"alert-body"},l):null,o?"\n":"",o?a.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",a.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:c.a.string,type:c.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:c.a.string,close:c.a.bool,text:c.a.string},t.a=l},365:function(e,t,n){"use strict";n.r(t);var r=n(363);n.d(t,"Attribute",function(){return r.default}),n.d(t,"Property",function(){return r.Property});var a=n(366);n.d(t,"ComponentPreview",function(){return a.default});var o=n(372);n.d(t,"DocContainer",function(){return o.default});var c=n(373);n.d(t,"DocHeading",function(){return c.default});var l=n(367);n.d(t,"DocToc",function(){return l.default});var i=n(368);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(369);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(370);n.d(t,"Icon",function(){return s.default});var p=n(371);n.d(t,"PxScript",function(){return p.default})},366:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(65),c=n.n(o),l=n(375),i=n(376),u=n.n(i),s=n(377);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m=function(e){var t=e.children,n=e.language,r=e.removeOuterTag,o=e.hideValue,c=e.removeList,i=e.showCasePanel,m=e.codeFigure,d=e.dangerousHTML,y=function(e){var t=document.createElement("div");return t.innerHTML=Object(l.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},h=function(e){var t=document.createElement("div");t.innerHTML=Object(l.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),r="";return n.forEach(function(e){r+="".concat(e.innerHTML," \n")}),r};return a.a.createElement(a.a.Fragment,null,i?a.a.createElement(function(){return a.a.createElement("div",{className:"showcase-panel"},t)},null):null,m?a.a.createElement(function(){var e="";if("html"===n&&d)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=r?y(t):c?h(t):Object(l.renderToStaticMarkup)(t)});else if("html"===n)e+=r?y(t):c?h(t):Object(l.renderToStaticMarkup)(t);else switch(f(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",a.a.createElement("figure",null,a.a.createElement(s.a,p({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,c=e.getTokenProps;return a.a.createElement("pre",{className:t,style:n},r.map(function(e,t){return a.a.createElement("div",p({key:e+t},o({line:e,key:t})),e.map(function(e,t){return a.a.createElement("span",p({key:t},c({token:e,key:t})))}))}))}))},null):null)};m.propTypes={language:c.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:c.a.bool,hideValue:c.a.bool,removeList:c.a.bool,showCasePanel:c.a.bool,codeFigure:c.a.bool,dangerousHTML:c.a.bool},t.default=m},367:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(65),c=n.n(o),l=n(374);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var r=n.type().props.children[0];"h2"===r.type&&t.push({title:r.props.children,id:r.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,p(t).call(this,e))).state={headings:m(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r["Component"]),n=t,(o=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"col-2 d-none d-lg-block"},a.a.createElement("div",{className:"doc-toc"},a.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var r=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return a.a.createElement("li",{key:n,className:r?"active":""},a.a.createElement(l.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,o),c&&u(n,c),t}();d.propTypes={component:c.a.func.isRequired},t.default=d},368:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(364);t.default=function(){return a.a.createElement(o.a,{type:"danger"},a.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),a.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},369:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(364);t.default=function(){return a.a.createElement(o.a,{type:"danger"},a.a.createElement("h3",{className:"text-danger"},"Component under development!"),a.a.createElement("p",null,"This component is still under development and is subject to change."))}},370:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(65),c=function(e){var t=e.icon;return a.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(o).a.string.isRequired},t.default=c},371:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(65),c=n.n(o),l=function(e){var t,n,r=e.component,o=e.subComponents,c=e.func,l=e.params;return o&&(n=o.map(function(e,t){return a.a.createElement("span",{key:t},e,a.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return a.a.createElement("span",{key:t},e,t<l.length-1?a.a.createElement("span",{className:"token punctuation"},", "):null)})),a.a.createElement("code",null,a.a.createElement("span",null,"px"),a.a.createElement("span",{className:"token punctuation"},"."),a.a.createElement("span",null,r),a.a.createElement("span",{className:"token punctuation"},"."),n,a.a.createElement("span",{className:"token function"},c),a.a.createElement("span",{className:"token punctuation"},"("),t,a.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:c.a.string.isRequired,subComponents:c.a.array,func:c.a.string.isRequired,params:c.a.array},t.default=l},372:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(65),c=n.n(o),l=n(365),i=function(e){var t=e.docToc,n=e.children,r=function(){return a.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return a.a.createElement("div",{className:"doc-container"},a.a.createElement("div",{className:"row"},a.a.createElement(r,null),t?a.a.createElement(l.DocToc,{component:r}):null))};i.propTypes={docToc:c.a.bool},t.default=i},374:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)};t.genericHashLink=h,t.HashLink=v,t.NavHashLink=b;var c=u(n(1)),l=u(n(65)),i=n(95);function u(e){return e&&e.__esModule?e:{default:e}}var s="",p=null,f=null,m=null;function d(){s="",null!==p&&p.disconnect(),null!==f&&(window.clearTimeout(f),f=null)}function y(){var e=document.getElementById(s);return null!==e&&(m(e),d(),!0)}function h(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["scroll","smooth"]);return c.default.createElement(t,a({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===o(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(m=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===y()&&(null===p&&(p=new MutationObserver(y)),p.observe(document,{attributes:!0,childList:!0,subtree:!0}),f=window.setTimeout(function(){d()},1e4))},0))}}),e.children)}function v(e){return h(e,i.Link)}function b(e){return h(e,i.NavLink)}var E={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};v.propTypes=E,b.propTypes=E},378:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(379);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return a(r).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},379:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),l=(a=c)&&a.__esModule?a:{default:a},i=n(65);function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==r(t)&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r._handleRefMount=function(e){r._domNode=e},u(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+r(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.PureComponent),o(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,r=e.children;return l.default.createElement(n,{ref:this._handleRefMount,className:t},r)}}]),t}();s.propTypes={async:i.PropTypes.bool,className:i.PropTypes.string,children:i.PropTypes.any,component:i.PropTypes.node},s.defaultProps={component:"code"},t.default=s},414:function(e,t,n){"use strict";n.r(t),n.d(t,"QuickStart",function(){return m}),n.d(t,"Css",function(){return d}),n.d(t,"JavaScript",function(){return y});var r=n(1),a=n.n(r),o=n(378),c=n.n(o),l=n(365),i="/feature/init_util/",u="https://design.payex.com".concat(i,"scripts/px-script.js"),s="https://design.payex.com".concat(i,"scripts/px.dashboard.js"),p="https://design.payex.com".concat(i,"styles/px.css"),f="https://design.payex.com".concat(i,"styles/px.dashboard.css"),m=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"quick-start"},"Quick start"),a.a.createElement("p",null,"To quickly add the dashboard theme to your project, include the snippets below in your project."))},d=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"css"},"CSS"),a.a.createElement("p",null,"Copy-paste the stylesheet ",a.a.createElement(c.a,{className:"language-html"},"<link>")," into your ",a.a.createElement(c.a,{className:"language-html"},"<head>")," before all other stylesheets to load our CSS."),a.a.createElement(l.ComponentPreview,{language:"html",codeFigure:!0},a.a.createElement("link",{rel:"stylesheet",href:p}),a.a.createElement("link",{rel:"stylesheet",href:f})))},y=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"javascript"},"JavaScript"),a.a.createElement("p",null,"The dashboard theme requires a separate script to run properly. So add the dashboard script below the ",a.a.createElement(l.Property,{value:"px-script"})," at the bottom of your ",a.a.createElement(c.a,{className:"language-html"},"<body>")," tag like this:"),a.a.createElement(l.ComponentPreview,{language:"html",codeFigure:!0},a.a.createElement("script",{src:u}),a.a.createElement("script",{src:s})))};t.default=function(){return a.a.createElement(l.DocContainer,null,a.a.createElement("p",{className:"lead"},"Get started with the PayEx DesignGuide Dashboard theme."),a.a.createElement(m,null),a.a.createElement(y,null))}}}]);
//# sourceMappingURL=doc-route.chunk_32.js.map?2ab9f4e2961c868d08e1