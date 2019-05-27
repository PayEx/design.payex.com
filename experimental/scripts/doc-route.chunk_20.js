(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[19,2,47,48,49,51,52,53,54],{373:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var r=n(1),a=n.n(r),o=n(46),l=n.n(o),c=function(e){var t=e.value;return a.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,r=e.value;return n&&r?a.a.createElement("code",null,t?a.a.createElement("span",{className:"token attr-name"},"data-"):null,a.a.createElement("span",{className:"token attr-name"},n),a.a.createElement("span",{className:"token attr-value"},a.a.createElement("span",{className:"token punctuation"},'="'),r,a.a.createElement("span",{className:"token punctuation"},'"'))):n&&!r?a.a.createElement("code",null,t?a.a.createElement("span",{className:"token attr-name"},"data-"):null,a.a.createElement("span",{className:"token attr-name"},n)):!n&&r?a.a.createElement("code",null,a.a.createElement("span",{className:"token attr-value"},r)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},374:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(46),l=n.n(o),c=function(e){var t=e.id,n=e.type,r=e.icon,o=e.close,l=e.text,c=e.children;return a.a.createElement("div",{id:t,className:"alert alert-".concat(n)},r?"\n":"",r?a.a.createElement("i",{className:"material-icons alert-icon"},r):null,l?"\n":"",l?a.a.createElement("p",null,l):null,c?"\n":"",c?a.a.createElement("div",{className:"alert-body"},c):null,o?"\n":"",o?a.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",a.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},375:function(e,t,n){"use strict";n.r(t);var r=n(373);n.d(t,"Attribute",function(){return r.default}),n.d(t,"Property",function(){return r.Property});var a=n(376);n.d(t,"ComponentPreview",function(){return a.default});var o=n(382);n.d(t,"DocContainer",function(){return o.default});var l=n(383);n.d(t,"DocHeading",function(){return l.default});var c=n(377);n.d(t,"DocToc",function(){return c.default});var i=n(378);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(379);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(380);n.d(t,"Icon",function(){return s.default});var p=n(381);n.d(t,"PxScript",function(){return p.default})},376:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(46),l=n.n(o),c=n(385),i=n(386),u=n.n(i),s=n(387);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m=function(e){var t=e.children,n=e.language,r=e.removeOuterTag,o=e.hideValue,l=e.removeList,i=e.showCasePanel,m=e.codeFigure,d=e.dangerousHTML,y=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},h=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),r="";return n.forEach(function(e){r+="".concat(e.innerHTML," \n")}),r};return a.a.createElement(a.a.Fragment,null,i?a.a.createElement(function(){return a.a.createElement("div",{className:"showcase-panel"},t)},null):null,m?a.a.createElement(function(){var e="";if("html"===n&&d)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=r?y(t):l?h(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=r?y(t):l?h(t):Object(c.renderToStaticMarkup)(t);else switch(f(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",a.a.createElement("figure",null,a.a.createElement(s.a,p({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,l=e.getTokenProps;return a.a.createElement("pre",{className:t,style:n},r.map(function(e,t){return a.a.createElement("div",p({key:e+t},o({line:e,key:t})),e.map(function(e,t){return a.a.createElement("span",p({key:t},l({token:e,key:t})))}))}))}))},null):null)};m.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=m},377:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(46),l=n.n(o),c=n(384);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var r=n.type().props.children[0];"h2"===r.type&&t.push({title:r.props.children,id:r.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,p(t).call(this,e))).state={headings:m(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r["Component"]),n=t,(o=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"col-2 d-none d-lg-block"},a.a.createElement("div",{className:"doc-toc"},a.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var r=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return a.a.createElement("li",{key:n,className:r?"active":""},a.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,o),l&&u(n,l),t}();d.propTypes={component:l.a.func.isRequired},t.default=d},378:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(374);t.default=function(){return a.a.createElement(o.a,{type:"danger"},a.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),a.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},379:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(374);t.default=function(){return a.a.createElement(o.a,{type:"danger"},a.a.createElement("h3",{className:"text-danger"},"Component under development!"),a.a.createElement("p",null,"This component is still under development and is subject to change."))}},380:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(46),l=function(e){var t=e.icon;return a.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},381:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(46),l=n.n(o),c=function(e){var t,n,r=e.component,o=e.subComponents,l=e.func,c=e.params;return o&&(n=o.map(function(e,t){return a.a.createElement("span",{key:t},e,a.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return a.a.createElement("span",{key:t},e,t<c.length-1?a.a.createElement("span",{className:"token punctuation"},", "):null)})),a.a.createElement("code",null,a.a.createElement("span",null,"px"),a.a.createElement("span",{className:"token punctuation"},"."),a.a.createElement("span",null,r),a.a.createElement("span",{className:"token punctuation"},"."),n,a.a.createElement("span",{className:"token function"},l),a.a.createElement("span",{className:"token punctuation"},"("),t,a.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},382:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(46),l=n.n(o),c=n(375),i=function(e){var t=e.docToc,n=e.children,r=function(){return a.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return a.a.createElement("div",{className:"doc-container"},a.a.createElement("div",{className:"row"},a.a.createElement(r,null),t?a.a.createElement(c.DocToc,{component:r}):null))};i.propTypes={docToc:l.a.bool},t.default=i},384:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)};t.genericHashLink=h,t.HashLink=v,t.NavHashLink=b;var l=u(n(1)),c=u(n(46)),i=n(98);function u(e){return e&&e.__esModule?e:{default:e}}var s="",p=null,f=null,m=null;function d(){s="",null!==p&&p.disconnect(),null!==f&&(window.clearTimeout(f),f=null)}function y(){var e=document.getElementById(s);return null!==e&&(m(e),d(),!0)}function h(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["scroll","smooth"]);return l.default.createElement(t,a({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===o(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(m=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===y()&&(null===p&&(p=new MutationObserver(y)),p.observe(document,{attributes:!0,childList:!0,subtree:!0}),f=window.setTimeout(function(){d()},1e4))},0))}}),e.children)}function v(e){return h(e,i.Link)}function b(e){return h(e,i.NavLink)}var g={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};v.propTypes=g,b.propTypes=g},388:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(389);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return a(r).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},389:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=(a=l)&&a.__esModule?a:{default:a},i=n(46);function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==r(t)&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r._handleRefMount=function(e){r._domNode=e},u(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+r(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.PureComponent),o(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,r=e.children;return c.default.createElement(n,{ref:this._handleRefMount,className:t},r)}}]),t}();s.propTypes={async:i.PropTypes.bool,className:i.PropTypes.string,children:i.PropTypes.any,component:i.PropTypes.node},s.defaultProps={component:"code"},t.default=s},451:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(388),l=n.n(o),c=n(375),i=n(46),u=n.n(i),s=n(132),p=n.n(s),f=[{title:"Step one",subtitle:"24.12.17 12:10",completed:!0},{title:"Step two",ongoing:!0},{title:"Step three",selected:!0},{title:"Step four"}],m=function(e){var t=e.completed,n=e.subtitle,r=e.title;return a.a.createElement(a.a.Fragment,null,t?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"material-icons steps-icon"},"check"),"\n"):null,r,n?a.a.createElement(a.a.Fragment,null,"\n",a.a.createElement("div",{className:"steps-sub-title"},n)):null)},d=function(e){var t=e.steps;return a.a.createElement(a.a.Fragment,null,t.map(function(e,t){var n=e.title,r=e.subtitle,o=e.completed,l=e.ongoing,c=e.selected,i=e.clickable;return a.a.createElement("li",{key:t,className:p()(o?"steps-completed":null,l?"steps-ongoing":null,c?"steps-selected":null)},i?a.a.createElement(a.a.Fragment,null,"\n"," ",a.a.createElement("a",null,a.a.createElement(m,{completed:o,subtitle:r,title:n}))," ","\n"," "):a.a.createElement(m,{completed:o,subtitle:r,title:n}))}))},y=function(e){var t=e.steps;if(!t)return null;var n=t.some(function(e){return e.clickable}),r=n?a.a.createElement("div",{className:"material-icons steps-nav-left"},"keyboard_arrow_left"):null,o=n?a.a.createElement("div",{className:"material-icons steps-nav-right"},"keyboard_arrow_right"):null;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"steps-responsive"},r,a.a.createElement("div",{className:"steps-responsive-text"},"Step 3"),o))},h=function(e){var t=e.steps,n=e.vertical,r=p()("steps",n?"steps-vertical":null);return a.a.createElement("div",{className:r},a.a.createElement("ol",null,t?a.a.createElement(d,{steps:t}):a.a.createElement(d,{steps:f})),a.a.createElement(y,{steps:t}))};h.propTypes={steps:u.a.array,vertical:u.a.bool,clickable:u.a.bool};var v=h;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"BasicSteps",function(){return S}),n.d(t,"VerticalSteps",function(){return T}),n.d(t,"ClickableSteps",function(){return O});var S=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"basic-usage"},"Basic usage"),a.a.createElement("p",null,"The standard steps component will render horizontally and scale according to the size of its parent."),a.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},a.a.createElement(v,{steps:[{title:"Step one",subtitle:"24.12.17 12:10",completed:!0},{title:"Step two",ongoing:!0,selected:!0},{title:"Step three"},{title:"Step four"}]})))},T=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"vertical-steps"},"Vertical steps"),a.a.createElement("p",null,"If you wish to use steps vertically you can add ",a.a.createElement(c.Property,{value:".steps-vertical"})," to the ",a.a.createElement(l.a,{className:"language-html"},"<div>")," element."),a.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},a.a.createElement(v,{steps:[{title:"Step one",completed:!0},{title:"Step two",ongoing:!0,selected:!0},{title:"Step three"},{title:"Step four"}],vertical:!0})))},O=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"clickable-steps"},"Clickable steps"),a.a.createElement("p",null,"Add an anchor element (",a.a.createElement(l.a,{className:"language-html"},"<a>"),") to the list item element ( ",a.a.createElement(l.a,{className:"language-html"},"<li>"),"). Ensure that all content within the list element is also inside the anchor element."),a.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},a.a.createElement(v,{steps:[{title:"Step one",completed:!0,clickable:!0},{title:"Step two",ongoing:!0,clickable:!0},{title:"Step three",clickable:!0},{title:"Step four",selected:!0},{title:"Step Five"},{title:"Step Six"}]})))},P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,w(t).apply(this,arguments))}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){return a.a.createElement(c.DocContainer,{docToc:!0},a.a.createElement("p",{className:"lead"},"Use steps to visualize the users progress through a process."),a.a.createElement(S,null),a.a.createElement(T,null),a.a.createElement(O,null))}}])&&g(n.prototype,o),l&&g(n,l),t}();t.default=P}}]);
//# sourceMappingURL=doc-route.chunk_20.js.map?b527ab500fc8bc819cba