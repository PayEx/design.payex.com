(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[31,2,48,49,50,52,53,54,55],{360:function(e,t,n){"use strict";n.r(t);var a=n(361);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var l=n(363);n.d(t,"ComponentPreview",function(){return l.default});var r=n(369);n.d(t,"DocContainer",function(){return r.default});var o=n(371);n.d(t,"DocHeading",function(){return o.default});var c=n(364);n.d(t,"DocToc",function(){return c.default});var i=n(365);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(366);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(367);n.d(t,"Icon",function(){return s.default});var m=n(370);n.d(t,"JavascriptDocs",function(){return m.default});var p=n(368);n.d(t,"PxScript",function(){return p.default})},361:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),l=n.n(a),r=n(53),o=n.n(r),c=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),a,l.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n)):!n&&a?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=i},362:function(e,t,n){"use strict";var a=n(1),l=n.n(a),r=n(53),o=n.n(r),c=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,c=e.children;return l.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?l.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?l.a.createElement("p",null,o):null,c?"\n":"",c?l.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=c},363:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(53),o=n.n(r),c=n(373),i=n(374),u=n.n(i),s=n(375);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,r=e.hideValue,o=e.removeList,i=e.showCasePanel,d=e.codeFigure,f=e.dangerousHTML,h=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},g=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return l.a.createElement(l.a.Fragment,null,i?l.a.createElement(function(){return l.a.createElement("div",{className:"showcase-panel"},t)},null):null,d?l.a.createElement(function(){var e="";if("html"===n&&f)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?h(t):o?g(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=a?h(t):o?g(t):Object(c.renderToStaticMarkup)(t);else switch(p(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),r&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",l.a.createElement("figure",null,l.a.createElement(s.a,m({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return l.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return l.a.createElement("div",m({key:e+t},r({line:e,key:t})),e.map(function(e,t){return l.a.createElement("span",m({key:t},o({token:e,key:t})))}))}))}))},null):null)};d.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=d},364:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(53),o=n.n(r),c=n(372);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,m(t).call(this,e))).state={headings:d(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(r=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return l.a.createElement("li",{key:n,className:a?"active":""},l.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,r),o&&u(n,o),t}();f.propTypes={component:o.a.func.isRequired},t.default=f},365:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(362);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},366:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(362);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},367:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(53),o=function(e){var t=e.icon;return l.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:n.n(r).a.string.isRequired},t.default=o},368:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(53),o=n.n(r),c=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,c=e.params;return r&&(n=r.map(function(e,t){return l.a.createElement("span",{key:t},e,l.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return l.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<c.length-1?l.a.createElement("span",{className:"token punctuation"},", "):null)})),l.a.createElement("code",null,l.a.createElement("span",null,"px"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",null,a),l.a.createElement("span",{className:"token punctuation"},"."),n,l.a.createElement("span",{className:"token function"},o),l.a.createElement("span",{className:"token punctuation"},"("),t,l.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=c},369:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(53),o=n.n(r),c=n(360),i=function(e){var t=e.docToc,n=e.children,a=function(){return l.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(a,null),t?l.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:o.a.bool},t.default=i},370:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return c}),n.d(t,"CloseDocs",function(){return i});var a=n(1),l=n.n(a),r=n(95),o=n(360),c=function(e){var t=e.componentName;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,l.a.createElement(o.PxScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),l.a.createElement("p",null,"Opens the given ",t.toLowerCase(),"."))},i=function(e){var t=e.componentName;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,l.a.createElement(o.PxScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),l.a.createElement("p",null,"Closes the given ",t.toLowerCase(),"."))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,l.a.createElement(o.PxScript,{component:t,func:"init"})),l.a.createElement("p",null,l.a.createElement(r.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase(),"."),n?l.a.createElement(c,{componentName:t}):null,a?l.a.createElement(i,{componentName:t}):null)}},372:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=g,t.HashLink=E,t.NavHashLink=y;var o=u(n(1)),c=u(n(53)),i=n(95);function u(e){return e&&e.__esModule?e:{default:e}}var s="",m=null,p=null,d=null;function f(){s="",null!==m&&m.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function h(){var e=document.getElementById(s);return null!==e&&(d(e),f(),!0)}function g(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return o.default.createElement(t,l({},n,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===r(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(d=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===h()&&(null===m&&(m=new MutationObserver(h)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function E(e){return g(e,i.Link)}function y(e){return g(e,i.NavLink)}var b={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};E.propTypes=b,y.propTypes=b},376:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(377);function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return l(a).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(a).default}})},377:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var l,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(1),c=(l=o)&&l.__esModule?l:{default:l},i=n(53);function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==a(t)&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,r=Array(l),o=0;o<l;o++)r[o]=arguments[o];return n=a=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),a._handleRefMount=function(e){a._domNode=e},u(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+a(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.PureComponent),r(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,a=e.children;return c.default.createElement(n,{ref:this._handleRefMount,className:t},a)}}]),t}();s.propTypes={async:i.PropTypes.bool,className:i.PropTypes.string,children:i.PropTypes.any,component:i.PropTypes.node},s.defaultProps={component:"code"},t.default=s},410:function(e,t,n){"use strict";n.r(t),n.d(t,"Fonts",function(){return u}),n.d(t,"Headings",function(){return s}),n.d(t,"PageTitle",function(){return m}),n.d(t,"Small",function(){return p}),n.d(t,"Lead",function(){return d}),n.d(t,"Inline",function(){return f}),n.d(t,"TextUtilities",function(){return h}),n.d(t,"Abbreviations",function(){return g}),n.d(t,"Blockquotes",function(){return E});var a=n(1),l=n.n(a),r=n(95),o=n(376),c=n.n(o),i=n(360),u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"font"},"Font"),l.a.createElement("p",null,"The standard font PayEx DesignGuide uses is Roboto. It is included in the stylesheet. The included font weights you can use are: 300, 400, 500, 700 & 900. Both normal and italicized is available."),l.a.createElement("h3",null,"Removing Roboto"),l.a.createElement("p",null,"In case your site is not going to use Roboto, you can modify your font stack by modifying the snippet below to your preferance and add it to your custom stylesheet."),l.a.createElement(i.ComponentPreview,{language:"css",codeFigure:!0},"html {\n                                font-family: GillSans, Calibri, Trebuchet, sans-serif;\n                            }"))},s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"headings"},"Headings"),l.a.createElement("p",null,"PayEx DesignGuide provides basic styling on all headings (h1-h6)."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("h1",null,"Heading h1"),l.a.createElement("h2",null,"Heading h2"),l.a.createElement("h3",null,"Heading h3"),l.a.createElement("h4",null,"Heading h4"),l.a.createElement("h5",null,"Heading h5"),l.a.createElement("h6",null,"Heading h6")),l.a.createElement("p",null,"The classes ",l.a.createElement(i.Property,{value:".h1"})," through ",l.a.createElement(i.Property,{value:".h6"})," are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("p",{className:"h1"},".h1 heading"),l.a.createElement("p",{className:"h2"},".h2 heading"),l.a.createElement("p",{className:"h3"},".h3 heading"),l.a.createElement("p",{className:"h4"},".h4 heading"),l.a.createElement("p",{className:"h5"},".h5 heading"),l.a.createElement("p",{className:"h6"},".h6 heading")))},m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"page-title"},"Page title"),l.a.createElement("p",null,"To emphasize a heading, use ",l.a.createElement(i.Property,{value:".page-title"})," to add a light gray border under a heading. This only works for heading tags and classes ( ",l.a.createElement(c.a,{className:"language-html"},"<h1>"),"... ",l.a.createElement(c.a,{className:"language-html"},"<h6>"),"/",l.a.createElement(i.Property,{value:".h1"}),"...",l.a.createElement(i.Property,{value:".h6"}),");"),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("h1",{className:"page-title"},"Heading h1"),l.a.createElement("h2",{className:"page-title"},"Heading h2"),l.a.createElement("h3",{className:"page-title"},"Heading h3"),l.a.createElement("h4",{className:"page-title"},"Heading h4"),l.a.createElement("h5",{className:"page-title"},"Heading h5"),l.a.createElement("h6",{className:"page-title"},"Heading h6")))},p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"small"},"Small"),l.a.createElement("p",null,"Use the ",l.a.createElement(c.a,{className:"language-html"},"<small></small>")," tags to create a secondary heading within a heading tag or class."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("h2",null,"Main heading ",l.a.createElement("small",null,"with a faded secondary heading"))))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"lead"},"Lead"),l.a.createElement("p",null,"Make a paragraph stand out by using ",l.a.createElement(i.Property,{value:".lead"}),"."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("p",{className:"lead"},"This is a leading paragraph which for instance can be used as an introduction.")))},f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"inline-text-elements"},"Inline text elements"),l.a.createElement("p",null,"Styling for common inline HTML5 elements."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("p",null,"You can use the mark tag to ",l.a.createElement("mark",null,"highlight")," text."),l.a.createElement("p",null,l.a.createElement("del",null,"This line of text is meant to be treated as deleted text.")),l.a.createElement("p",null,l.a.createElement("s",null,"This line of text is meant to be treated as no longer accurate.")),l.a.createElement("p",null,l.a.createElement("ins",null,"This line of text is meant to be treated as an addition to the document.")),l.a.createElement("p",null,l.a.createElement("u",null,"This line of text will render as underlined")),l.a.createElement("p",null,l.a.createElement("small",null,"This line of text is meant to be treated as fine print.")),l.a.createElement("p",null,l.a.createElement("strong",null,"This line rendered as bold text.")),l.a.createElement("p",null,l.a.createElement("b",null,"This line really stands out.")),l.a.createElement("p",null,l.a.createElement("em",null,"This line rendered as italicized text.")),l.a.createElement("p",null,l.a.createElement("i",null,"This is the last line, it too will render as italicized text."))),l.a.createElement("p",null,"The ",l.a.createElement(i.Property,{value:".mark"})," and ",l.a.createElement(i.Property,{value:".small"})," classes are also available to apply the same styles as ",l.a.createElement(c.a,{className:"language-html"},"<mark>")," and ",l.a.createElement(c.a,{className:"language-html"},"<small>")," while avoiding any unwanted semantic implications that the tags would bring."),l.a.createElement("p",null,"While not shown above, feel free to use ",l.a.createElement(c.a,{className:"language-html"},"<b>")," and ",l.a.createElement(c.a,{className:"language-html"},"<i>")," in HTML5. ",l.a.createElement(c.a,{className:"language-html"},"<b>")," is meant to highlight words or phrases without conveying additional importance while ",l.a.createElement(c.a,{className:"language-html"},"<i>")," is mostly for voice, technical terms, etc."))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"text-utilities"},"Text utilities"),l.a.createElement("p",null,"Change text color with our ",l.a.createElement(r.Link,{to:"/docs/utilities/colors"},"color utilities"),"."))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"abbreviations"},"Abbreviations"),l.a.createElement("p",null,"Stylized implementation of HTML’s ",l.a.createElement(c.a,{className:"language-html"},"<abbr>")," element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies."),l.a.createElement("p",null,"Add ",l.a.createElement(i.Property,{value:".initialism"})," to an abbreviation for a slightly smaller font-size."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("p",null,l.a.createElement("abbr",{title:"Laugh Out Loud"},"LOL")),l.a.createElement("p",null,l.a.createElement("abbr",{title:"HyperText Markup Language",className:"initialism"},"HTML"))),l.a.createElement("p",null,l.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr",target:"_blank",rel:"noopener noreferrer"},"Read more")," about abbreviations."))},E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"blockquotes"},"Blockquotes"),l.a.createElement("p",null,"For quoting blocks of content from another source within your document. Wrap ",l.a.createElement(c.a,{className:"language-html"},"<blockquote>")," or ",l.a.createElement(i.Property,{value:".blockquote"})," around any HTML as the quote."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("blockquote",{className:"blockquote"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."))))},null),l.a.createElement(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Naming a source"),l.a.createElement("p",null,"Add a ",l.a.createElement(c.a,{className:"language-html"},"<footer>")," for identifying the source. Wrap the name of the source work in ",l.a.createElement(c.a,{className:"language-html"},"<cite>"),"."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("blockquote",{className:"blockquote"},l.a.createElement("p",null,"Better learn balance. Balance is key. Balance good, karate good. Everything good. Balance bad, better pack up, go home. Understand?"),l.a.createElement("footer",null,l.a.createElement("cite",{title:"The Karate Kid (1984)"},"Mr. Miyagi")))))},null),l.a.createElement(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Alignment"),l.a.createElement("p",null,"Use ",l.a.createElement(r.Link,{to:"/docs/utilities/text"},"text utilities")," ",l.a.createElement("b",null,"(NOT YET IMPLEMENTED)")," as needed to change the alignment of your blockquote."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("blockquote",{className:"blockquote text-center"},l.a.createElement("p",null,"It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man."),l.a.createElement("footer",null,l.a.createElement("cite",{title:"Star Wars: Episode IV - A New Hope (1977)"},"Han Solo")))))},null))};t.default=function(){return l.a.createElement(i.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Documentation and examples for PayEx DesignGuide typography."),l.a.createElement(u,null),l.a.createElement(s,null),l.a.createElement(m,null),l.a.createElement(p,null),l.a.createElement(d,null),l.a.createElement(f,null),l.a.createElement(h,null),l.a.createElement(g,null),l.a.createElement(E,null))}}}]);
//# sourceMappingURL=doc-route.chunk_31.js.map?b8cb5b2841db3c1dfe1e