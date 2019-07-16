(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[12,2,48,49,50,52,53,54,55],{360:function(e,t,n){"use strict";n.r(t);var a=n(361);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(363);n.d(t,"ComponentPreview",function(){return r.default});var o=n(369);n.d(t,"DocContainer",function(){return o.default});var l=n(371);n.d(t,"DocHeading",function(){return l.default});var c=n(364);n.d(t,"DocToc",function(){return c.default});var u=n(365);n.d(t,"DeprecatedComponentAlert",function(){return u.default});var i=n(366);n.d(t,"ExperimentalComponentAlert",function(){return i.default});var s=n(367);n.d(t,"Icon",function(){return s.default});var p=n(370);n.d(t,"JavascriptDocs",function(){return p.default});var m=n(368);n.d(t,"PxScript",function(){return m.default})},361:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),o=n(53),l=n.n(o),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=u},362:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(53),l=n.n(o),c=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,l=e.text,c=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?r.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?r.a.createElement("p",null,l):null,c?"\n":"",c?r.a.createElement("div",{className:"alert-body"},c):null,o?"\n":"",o?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},363:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(53),l=n.n(o),c=n(373),u=n(374),i=n.n(u),s=n(375);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,o=e.hideValue,l=e.removeList,u=e.showCasePanel,d=e.codeFigure,f=e.dangerousHTML,h=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},y=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel"},t)},null):null,d?r.a.createElement(function(){var e="";if("html"===n&&f)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?h(t):l?y(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=a?h(t):l?y(t):Object(c.renderToStaticMarkup)(t);else switch(m(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=i.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=i.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",r.a.createElement("figure",null,r.a.createElement(s.a,p({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,l=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return r.a.createElement("div",p({key:e+t},o({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",p({key:t},l({token:e,key:t})))}))}))}))},null):null)};d.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=d},364:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(53),l=n.n(o),c=n(372);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,p(t).call(this,e))).state={headings:d(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,a["Component"]),n=t,(o=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return r.a.createElement("li",{key:n,className:a?"active":""},r.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&i(n.prototype,o),l&&i(n,l),t}();f.propTypes={component:l.a.func.isRequired},t.default=f},365:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(362);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},366:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(362);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},367:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(53),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},368:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(53),l=n.n(o),c=function(e){var t,n,a=e.component,o=e.subComponents,l=e.func,c=e.params;return o&&(n=o.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return r.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<c.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"px"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,a),r.a.createElement("span",{className:"token punctuation"},"."),n,r.a.createElement("span",{className:"token function"},l),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},369:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(53),l=n.n(o),c=n(360),u=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};u.propTypes={docToc:l.a.bool},t.default=u},370:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return c}),n.d(t,"CloseDocs",function(){return u});var a=n(1),r=n.n(a),o=n(95),l=n(360),c=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(l.PxScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("p",null,"Opens the given ",t.toLowerCase(),"."))},u=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(l.PxScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("p",null,"Closes the given ",t.toLowerCase(),"."))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(l.PxScript,{component:t,func:"init"})),r.a.createElement("p",null,r.a.createElement(o.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase(),"."),n?r.a.createElement(c,{componentName:t}):null,a?r.a.createElement(u,{componentName:t}):null)}},372:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=y,t.HashLink=E,t.NavHashLink=b;var l=i(n(1)),c=i(n(53)),u=n(95);function i(e){return e&&e.__esModule?e:{default:e}}var s="",p=null,m=null,d=null;function f(){s="",null!==p&&p.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function h(){var e=document.getElementById(s);return null!==e&&(d(e),f(),!0)}function y(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return l.default.createElement(t,r({},n,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===o(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(d=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===h()&&(null===p&&(p=new MutationObserver(h)),p.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function E(e){return y(e,u.Link)}function b(e){return y(e,u.NavLink)}var v={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};E.propTypes=v,b.propTypes=v},376:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(377);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return r(a).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(a).default}})},377:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(1),c=(r=l)&&r.__esModule?r:{default:r},u=n(53);function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==a(t)&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];return n=a=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a._handleRefMount=function(e){a._domNode=e},i(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+a(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.PureComponent),o(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,a=e.children;return c.default.createElement(n,{ref:this._handleRefMount,className:t},a)}}]),t}();s.propTypes={async:u.PropTypes.bool,className:u.PropTypes.string,children:u.PropTypes.any,component:u.PropTypes.node},s.defaultProps={component:"code"},t.default=s},436:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(376),l=n.n(o),c=n(360),u=n(53),i=n.n(u),s=n(314),p=n.n(s),m=function(e){var t=e.id,n=e.type,a=e.title,o=e.subTitle,l=e.removeBottomPadding,c=e.removeAllPadding,u=e.halfPadding,i=e.darkMode,s=e.children,m=e.panelTable,d=e.footerText,f=p()("panel",n?"panel-".concat(n):"panel-default",l?"panel-bottomless":null,c?"panel-no-padding":null,u?"panel-half-padding":null,i?"panel-dark":null);return r.a.createElement("section",{className:f,id:t},a?r.a.createElement("header",{className:"panel-header"},r.a.createElement("h2",{className:"panel-title"},a),o?r.a.createElement("p",{className:"panel-sub-title"},o):null):null,s?r.a.createElement("div",{className:"panel-body"},s):null,m?r.a.createElement("div",{className:"panel-table"},m):null,d?r.a.createElement("footer",{className:"panel-footer"},r.a.createElement("p",null,d)):null)};m.propTypes={title:i.a.string,headerClass:i.a.bool,subTitle:i.a.string,id:i.a.string,type:i.a.oneOf(["brand","default","muted",""]),halfPadding:i.a.bool,removeAllPadding:i.a.bool,removeBottomPadding:i.a.bool,darkMode:i.a.bool,bodyContent:i.a.object,footerClass:i.a.bool,footerText:i.a.string};var d=m,f=n(362);n.d(t,"Overview",function(){return E}),n.d(t,"PanelHeaders",function(){return b}),n.d(t,"PanelDark",function(){return v}),n.d(t,"PanelMuted",function(){return g}),n.d(t,"PanelTable",function(){return w});var h=r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Your main panel content is put here."),r.a.createElement("p",null,"Some more content over here."),r.a.createElement("p",null,"And one more line, just to be safe.")),y=r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"First Name"),r.a.createElement("th",{scope:"col"},"Last Name"),r.a.createElement("th",{scope:"col"},"Location"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1"),r.a.createElement("td",null,"Sven"),r.a.createElement("td",null,"Svensson"),r.a.createElement("td",null,"Visby")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"2"),r.a.createElement("td",null,"Sara"),r.a.createElement("td",null,"Svensson"),r.a.createElement("td",null,"Stockholm")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"3"),r.a.createElement("td",null,"Ola"),r.a.createElement("td",null,"Nordmann"),r.a.createElement("td",null,"Oslo")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"4"),r.a.createElement("td",null,"Holger"),r.a.createElement("td",null,"Danske"),r.a.createElement("td",null,"Copenhagen")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"5"),r.a.createElement("td",null,"Matti"),r.a.createElement("td",null,"Meikäläinen"),r.a.createElement("td",null,"Lahti")))),E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"overview"},"Overview"),r.a.createElement("p",null,"A panel consists of three parts: A header, a body and a footer. You can mostly put whatever you want in any of these, but try not to put too much in the header and footer as these are meant to contain short and concise information about the body content."),r.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(d,{title:"Panel title",subTitle:"Panel subtitle",footerText:"Footer content goes here.",footerBtnText:"Footer button"},h)),r.a.createElement(f.a,{type:"warning",icon:"warning"},r.a.createElement("h4",null,"Deprecation warning"),r.a.createElement("p",null,"Only using ",r.a.createElement(l.a,{className:"language-html"},"<header>")," and ",r.a.createElement(l.a,{className:"language-html"},"<footer>")," is deprecated. Add ",r.a.createElement(c.Property,{value:".panel-header"})," or ",r.a.createElement(c.Property,{value:".panel-footer"})," to your panel header/footer element.")))},b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"panel-headers"},"Panel headers"),r.a.createElement("p",null,"You can pick between two different panel headers, brand color with white text and white with green text. Add ",r.a.createElement(c.Property,{value:".panel-default"})," or ",r.a.createElement(c.Property,{value:".panel-brand"})," to the header to use one of them."),r.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(d,{title:"Default panel"}),"\n\n",r.a.createElement(d,{type:"brand",title:"Panel brand"})))},v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"panel-dark-mode"},"Panel dark mode"),r.a.createElement("p",null,"Dark body with ",r.a.createElement(c.Property,{value:".panel-dark"}),"..."),r.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(d,{type:"brand",title:"Panel title",subTitle:"Panel subtitle",footerText:"Footer content goes here.",footerBtnText:"Footer button",darkMode:!0},h)))},g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"muted-panel"},"Muted panel"),r.a.createElement("p",null,"If you wish to use a completely gray panel you can add ",r.a.createElement(c.Property,{value:".panel-muted"})," to the panel ",r.a.createElement(l.a,{className:"language-html"},"<section>"),"."),r.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(d,{type:"muted",title:"Panel title",subTitle:"Panel subtitle",footerText:"Footer content goes here.",footerBtnText:"Footer button"},h)))},w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"panel-with-table"},"Displaying a full width table"),r.a.createElement("p",null,"To display a full width table in a panel use ",r.a.createElement(c.Property,{value:".panel-table"})," on a div wrapping the table. Put ",r.a.createElement(c.Property,{value:".panel-table"})," as a direct child of ",r.a.createElement(c.Property,{value:".panel"}),". Tables put in a panel are given a border bottom to seperate it from the following elements."),r.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(d,{type:"brand",title:"Panel title",subTitle:"Panel subtitle",footerText:"Footer content goes here.",footerBtnText:"Footer button",panelTable:y},h)))};t.default=function(){return r.a.createElement(c.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Panels are large containers meant to be able to contain all of our other components."),r.a.createElement(E,null),r.a.createElement(b,null),r.a.createElement(v,null),r.a.createElement(g,null),r.a.createElement(w,null))}}}]);
//# sourceMappingURL=doc-route.chunk_14.js.map?be6e8bf73867ff93fc52