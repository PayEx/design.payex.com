(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[22,2,47,48,49,51,52,53,54],{373:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return l});var o=n(1),a=n.n(o),r=n(46),i=n.n(r),l=function(e){var t=e.value;return a.a.createElement("code",{className:"token property"},t)},c=function(e){var t=e.data,n=e.name,o=e.value;return n&&o?a.a.createElement("code",null,t?a.a.createElement("span",{className:"token attr-name"},"data-"):null,a.a.createElement("span",{className:"token attr-name"},n),a.a.createElement("span",{className:"token attr-value"},a.a.createElement("span",{className:"token punctuation"},'="'),o,a.a.createElement("span",{className:"token punctuation"},'"'))):n&&!o?a.a.createElement("code",null,t?a.a.createElement("span",{className:"token attr-name"},"data-"):null,a.a.createElement("span",{className:"token attr-name"},n)):!n&&o?a.a.createElement("code",null,a.a.createElement("span",{className:"token attr-value"},o)):void 0};c.propTypes={name:i.a.string,value:i.a.string,data:i.a.bool},l.propTypes={value:i.a.string.isRequired},t.default=c},374:function(e,t,n){"use strict";var o=n(1),a=n.n(o),r=n(46),i=n.n(r),l=function(e){var t=e.id,n=e.type,o=e.icon,r=e.close,i=e.text,l=e.children;return a.a.createElement("div",{id:t,className:"alert alert-".concat(n)},o?"\n":"",o?a.a.createElement("i",{className:"material-icons alert-icon"},o):null,i?"\n":"",i?a.a.createElement("p",null,i):null,l?"\n":"",l?a.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?a.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",a.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:i.a.string,type:i.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:i.a.string,close:i.a.bool,text:i.a.string},t.a=l},375:function(e,t,n){"use strict";n.r(t);var o=n(373);n.d(t,"Attribute",function(){return o.default}),n.d(t,"Property",function(){return o.Property});var a=n(376);n.d(t,"ComponentPreview",function(){return a.default});var r=n(382);n.d(t,"DocContainer",function(){return r.default});var i=n(383);n.d(t,"DocHeading",function(){return i.default});var l=n(377);n.d(t,"DocToc",function(){return l.default});var c=n(378);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=n(379);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(380);n.d(t,"Icon",function(){return s.default});var p=n(381);n.d(t,"PxScript",function(){return p.default})},376:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(46),i=n.n(r),l=n(385),c=n(386),u=n.n(c),s=n(387);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m=function(e){var t=e.children,n=e.language,o=e.removeOuterTag,r=e.hideValue,i=e.removeList,c=e.showCasePanel,m=e.codeFigure,d=e.dangerousHTML,y=function(e){var t=document.createElement("div");return t.innerHTML=Object(l.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},b=function(e){var t=document.createElement("div");t.innerHTML=Object(l.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),o="";return n.forEach(function(e){o+="".concat(e.innerHTML," \n")}),o};return a.a.createElement(a.a.Fragment,null,c?a.a.createElement(function(){return a.a.createElement("div",{className:"showcase-panel"},t)},null):null,m?a.a.createElement(function(){var e="";if("html"===n&&d)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=o?y(t):i?b(t):Object(l.renderToStaticMarkup)(t)});else if("html"===n)e+=o?y(t):i?b(t):Object(l.renderToStaticMarkup)(t);else switch(f(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),r&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",a.a.createElement("figure",null,a.a.createElement(s.a,p({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,o=e.tokens,r=e.getLineProps,i=e.getTokenProps;return a.a.createElement("pre",{className:t,style:n},o.map(function(e,t){return a.a.createElement("div",p({key:e+t},r({line:e,key:t})),e.map(function(e,t){return a.a.createElement("span",p({key:t},i({token:e,key:t})))}))}))}))},null):null)};m.propTypes={language:i.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:i.a.bool,hideValue:i.a.bool,removeList:i.a.bool,showCasePanel:i.a.bool,codeFigure:i.a.bool,dangerousHTML:i.a.bool},t.default=m},377:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(46),i=n.n(r),l=n(384);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var o=n.type().props.children[0];"h2"===o.type&&t.push({title:o.props.children,id:o.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,p(t).call(this,e))).state={headings:m(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o["Component"]),n=t,(r=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"col-2 d-none d-lg-block"},a.a.createElement("div",{className:"doc-toc"},a.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var o=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return a.a.createElement("li",{key:n,className:o?"active":""},a.a.createElement(l.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,r),i&&u(n,i),t}();d.propTypes={component:i.a.func.isRequired},t.default=d},378:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(374);t.default=function(){return a.a.createElement(r.a,{type:"danger"},a.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),a.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},379:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(374);t.default=function(){return a.a.createElement(r.a,{type:"danger"},a.a.createElement("h3",{className:"text-danger"},"Component under development!"),a.a.createElement("p",null,"This component is still under development and is subject to change."))}},380:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(46),i=function(e){var t=e.icon;return a.a.createElement("i",{className:"material-icons"},t)};i.propTypes={icon:n.n(r).a.string.isRequired},t.default=i},381:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(46),i=n.n(r),l=function(e){var t,n,o=e.component,r=e.subComponents,i=e.func,l=e.params;return r&&(n=r.map(function(e,t){return a.a.createElement("span",{key:t},e,a.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return a.a.createElement("span",{key:t},e,t<l.length-1?a.a.createElement("span",{className:"token punctuation"},", "):null)})),a.a.createElement("code",null,a.a.createElement("span",null,"px"),a.a.createElement("span",{className:"token punctuation"},"."),a.a.createElement("span",null,o),a.a.createElement("span",{className:"token punctuation"},"."),n,a.a.createElement("span",{className:"token function"},i),a.a.createElement("span",{className:"token punctuation"},"("),t,a.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:i.a.string.isRequired,subComponents:i.a.array,func:i.a.string.isRequired,params:i.a.array},t.default=l},382:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(46),i=n.n(r),l=n(375),c=function(e){var t=e.docToc,n=e.children,o=function(){return a.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return a.a.createElement("div",{className:"doc-container"},a.a.createElement("div",{className:"row"},a.a.createElement(o,null),t?a.a.createElement(l.DocToc,{component:o}):null))};c.propTypes={docToc:i.a.bool},t.default=c},384:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)};t.genericHashLink=b,t.HashLink=h,t.NavHashLink=v;var i=u(n(1)),l=u(n(46)),c=n(98);function u(e){return e&&e.__esModule?e:{default:e}}var s="",p=null,f=null,m=null;function d(){s="",null!==p&&p.disconnect(),null!==f&&(window.clearTimeout(f),f=null)}function y(){var e=document.getElementById(s);return null!==e&&(m(e),d(),!0)}function b(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["scroll","smooth"]);return i.default.createElement(t,a({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===r(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(m=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===y()&&(null===p&&(p=new MutationObserver(y)),p.observe(document,{attributes:!0,childList:!0,subtree:!0}),f=window.setTimeout(function(){d()},1e4))},0))}}),e.children)}function h(e){return b(e,c.Link)}function v(e){return b(e,c.NavLink)}var E={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};h.propTypes=E,v.propTypes=E},418:function(e,t,n){"use strict";n.r(t),n.d(t,"Overview",function(){return p});var o=n(1),a=n.n(o),r=n(375);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"overview"},"Overview"),a.a.createElement("p",null,"Add the attribute ",a.a.createElement(r.Attribute,{data:!0,name:"tooltip"})," to the desired element and add your content in its value to create a tooltip."),a.a.createElement("p",null,"You can use the attribute ",a.a.createElement(r.Attribute,{data:!0,name:"tooltip-position"})," to position the tooltip relative to the containing element, use the values ",a.a.createElement(r.Attribute,{value:"top"}),", ",a.a.createElement(r.Attribute,{value:"right"}),", ",a.a.createElement(r.Attribute,{value:"bottom"})," or ",a.a.createElement(r.Attribute,{value:"left"}),". If the attribute is not provided, it will default to top."),a.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},a.a.createElement("div",{className:"button-group"},"\n",a.a.createElement("button",{className:"btn btn-executive",type:"button","data-tooltip":"This is a tooltip!","data-tooltip-position":"left"},"Tooltip to the left"),"\n",a.a.createElement("button",{className:"btn btn-executive",type:"button","data-tooltip":"This is a tooltip!","data-tooltip-position":"top"},"Tooltip on top"),"\n",a.a.createElement("button",{className:"btn btn-executive",type:"button","data-tooltip":"This is a tooltip!","data-tooltip-position":"bottom"},"Tooltip to the bottom"),"\n",a.a.createElement("button",{className:"btn btn-executive",type:"button","data-tooltip":"This is a tooltip!","data-tooltip-position":"right"},"Tooltip to the right"),"\n")))},f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,u(t).apply(this,arguments))}var n,i,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o["Component"]),n=t,(i=[{key:"render",value:function(){return a.a.createElement(r.DocContainer,{docToc:!0},a.a.createElement("p",{className:"lead"},"Tooltips are small, interactive, textual hints for mainly graphical elements. When using icons for actions you can use a tooltip to give people clarification on its function."),a.a.createElement(p,null))}}])&&l(n.prototype,i),f&&l(n,f),t}();t.default=f}}]);
//# sourceMappingURL=doc-route.chunk_23.js.map?f71260ce550b578d32f0