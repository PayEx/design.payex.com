(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[28,2,47,48,49,51,52,53,54],{354:function(e,n,t){"use strict";t.r(n),t.d(n,"Property",function(){return i});var a=t(1),r=t.n(a),l=t(45),o=t.n(l),i=function(e){var n=e.value;return r.a.createElement("code",{className:"token property"},n)},c=function(e){var n=e.data,t=e.name,a=e.value;return t&&a?r.a.createElement("code",null,n?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},t),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):t&&!a?r.a.createElement("code",null,n?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},t)):!t&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};c.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},i.propTypes={value:o.a.string.isRequired},n.default=c},355:function(e,n,t){"use strict";var a=t(1),r=t.n(a),l=t(45),o=t.n(l),i=function(e){var n=e.id,t=e.type,a=e.icon,l=e.close,o=e.text,i=e.children;return r.a.createElement("div",{id:n,className:"alert alert-".concat(t)},a?"\n":"",a?r.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?r.a.createElement("p",null,o):null,i?"\n":"",i?r.a.createElement("div",{className:"alert-body"},i):null,l?"\n":"",l?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};i.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},n.a=i},356:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),l=t(45),o=t.n(l),i=t(366),c=t(367),s=t.n(c),m=t(368);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){var n=e.children,t=e.language,a=e.removeOuterTag,l=e.hideValue,o=e.removeList,c=e.showCasePanel,f=e.codeFigure,d=e.dangerousHTML,y=function(e){var n=document.createElement("div");return n.innerHTML=Object(i.renderToStaticMarkup)(e),n.firstElementChild?n.firstElementChild.innerHTML:n.firstChild?n.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},g=function(e){var n=document.createElement("div");n.innerHTML=Object(i.renderToStaticMarkup)(e);var t=n.querySelectorAll("li"),a="";return t.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return r.a.createElement(r.a.Fragment,null,c?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel"},n)},null):null,f?r.a.createElement(function(){var e="";if("html"===t&&d)e=function(e){var n="";return"function"==typeof e.forEach?e.forEach(function(e){return n+="".concat(e,"\n")}):n=e,n}(n);else if("html"===t&&n&&"function"==typeof n.map)n.map(function(n){e+=a?y(n):o?g(n):Object(i.renderToStaticMarkup)(n)});else if("html"===t)e+=a?y(n):o?g(n):Object(i.renderToStaticMarkup)(n);else switch(p(n)){case"string":e=n;break;case"object":n.forEach(function(n){return e+=n})}switch(t){case"html":e=(e=s.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=s.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return m.b.style="",r.a.createElement("figure",null,r.a.createElement(m.a,u({},m.b,{theme:void 0,code:e,language:t}),function(e){var n=e.className,t=e.style,a=e.tokens,l=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:n,style:t},a.map(function(e,n){return r.a.createElement("div",u({key:e+n},l({line:e,key:n})),e.map(function(e,n){return r.a.createElement("span",u({key:n},o({token:e,key:n})))}))}))}))},null):null)};f.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},n.default=f},357:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),l=t(45),o=t.n(l),i=t(365);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,n){return!n||"object"!==c(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var f=function(e){var n=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)n.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)n.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var a=t.type().props.children[0];"h2"===a.type&&n.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&n.push({title:e.props.children,id:e.props.id})}),n},d=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=m(this,u(n).call(this,e))).state={headings:f(t.props.component().props.children),windowTopPosition:window.pageYOffset},t}var t,l,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(n,a["Component"]),t=n,(l=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,n){e.top=0===n?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(n,t){if(n.id&&n.title){var a=e.state.windowTopPosition>=n.top&&e.state.windowTopPosition<e.state.headings[t+1].top;return r.a.createElement("li",{key:t,className:a?"active":""},r.a.createElement(i.NavHashLink,{to:"#".concat(n.id),activeClassName:"active",scroll:e.scrollToElement},n.title))}}))))}}])&&s(t.prototype,l),o&&s(t,o),n}();d.propTypes={component:o.a.func.isRequired},n.default=d},358:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),l=t(355);n.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},359:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),l=t(355);n.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},360:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),l=t(45),o=function(e){var n=e.icon;return r.a.createElement("i",{className:"material-icons"},n)};o.propTypes={icon:t.n(l).a.string.isRequired},n.default=o},361:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),l=t(45),o=t.n(l),i=function(e){var n,t,a=e.component,l=e.subComponents,o=e.func,i=e.params;return l&&(t=l.map(function(e,n){return r.a.createElement("span",{key:n},e,r.a.createElement("span",{className:"token punctuation"},"."))})),i&&(n=i.map(function(e,n){return r.a.createElement("span",{key:n},e,n<i.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"px"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,a),r.a.createElement("span",{className:"token punctuation"},"."),t,r.a.createElement("span",{className:"token function"},o),r.a.createElement("span",{className:"token punctuation"},"("),n,r.a.createElement("span",{className:"token punctuation"},");"))};i.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},n.default=i},362:function(e,n,t){"use strict";t.r(n);var a=t(354);t.d(n,"Attribute",function(){return a.default}),t.d(n,"Property",function(){return a.Property});var r=t(356);t.d(n,"ComponentPreview",function(){return r.default});var l=t(363);t.d(n,"DocContainer",function(){return l.default});var o=t(364);t.d(n,"DocHeading",function(){return o.default});var i=t(357);t.d(n,"DocToc",function(){return i.default});var c=t(358);t.d(n,"DeprecatedComponentAlert",function(){return c.default});var s=t(359);t.d(n,"ExperimentalComponentAlert",function(){return s.default});var m=t(360);t.d(n,"Icon",function(){return m.default});var u=t(361);t.d(n,"PxScript",function(){return u.default})},363:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),l=t(45),o=t.n(l),i=t(362),c=function(e){var n=e.docToc,t=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(n?"col-lg-10":"col-12")},t)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),n?r.a.createElement(i.DocToc,{component:a}):null))};c.propTypes={docToc:o.a.bool},n.default=c},365:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.genericHashLink=y,n.HashLink=g,n.NavHashLink=v;var l=c(t(1)),o=c(t(45)),i=t(98);function c(e){return e&&e.__esModule?e:{default:e}}var s="",m=null,u=null,p=null;function f(){s="",null!==m&&m.disconnect(),null!==u&&(window.clearTimeout(u),u=null)}function d(){var e=document.getElementById(s);return null!==e&&(p(e),f(),!0)}function y(e,n){e.scroll,e.smooth;var t=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(e,["scroll","smooth"]);return l.default.createElement(n,a({},t,{onClick:function(n){f(),e.onClick&&e.onClick(n),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===r(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(p=e.scroll||function(n){return e.smooth?n.scrollIntoView({behavior:"smooth"}):n.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===m&&(m=new MutationObserver(d)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),u=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function g(e){return y(e,i.Link)}function v(e){return y(e,i.NavLink)}var E={onClick:o.default.func,children:o.default.node,scroll:o.default.func,to:o.default.oneOfType([o.default.string,o.default.object])};g.propTypes=E,v.propTypes=E},369:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(370);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"PrismCode",{enumerable:!0,get:function(){return r(a).default}}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r(a).default}})},370:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),l=t(1),o=(a=l)&&a.__esModule?a:{default:a},i=t(45);function c(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var s=function(e){function n(){var e,t,a;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,l=Array(r),o=0;o<r;o++)l[o]=arguments[o];return t=a=c(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(l))),a._handleRefMount=function(e){a._domNode=e},c(a,t)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,l.PureComponent),r(n,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,n=e.className,t=e.component,a=e.children;return o.default.createElement(t,{ref:this._handleRefMount,className:n},a)}}]),n}();s.propTypes={async:i.PropTypes.bool,className:i.PropTypes.string,children:i.PropTypes.any,component:i.PropTypes.node},s.defaultProps={component:"code"},n.default=s},427:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),l=t(369),o=t.n(l),i=t(362),c=t(45),s=t.n(c),m=t(131),u=t.n(m);function p(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=function(e){var n=e.name,t=e.squaredFlag,a=e.preview,l=e.previewSize,o=e.size,i=e.className,c=e.type,s=i?i.split(" "):[],m=u.a.apply(void 0,[c,o?"".concat(c,"-").concat(o):"","material-icons"===c?"":"".concat(c,"-").concat(n),t?"flag-icon-squared":""].concat(p(s)));return a||l?r.a.createElement("div",{className:"icon-preview"},r.a.createElement("i",{className:m},m.includes("material-icons")?n:null),r.a.createElement("code",{className:"token property p-0 mt-2"},l?o:n)):r.a.createElement("i",{className:m},m.includes("material-icons")?n:null)};f.propTypes={name:s.a.string.isRequired,type:s.a.oneOf(["material-icons","payment-icon","flag-icon"]),squaredFlag:s.a.bool,preview:s.a.bool,size:s.a.oneOf(["tiny","small","medium","large","huge"]),className:s.a.string};var d=f,y=t(67);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function E(e,n){return!n||"object"!==g(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,n){return(w=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}t.d(n,"MaterialIcons",function(){return b}),t.d(n,"PaymentIcons",function(){return N}),t.d(n,"Flags",function(){return P});var b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"material-icons"},"Material Icons"),r.a.createElement("p",{className:"lead"},"DesignGuide includes Google","'","s material icons. For a full overview of the available icons please visit ",r.a.createElement("a",{href:"https://material.io/tools/icons/"},"this site"),"."),r.a.createElement("p",null,"To use an icon, provide the following markup: ",r.a.createElement(o.a,{className:"language-html"},'<i class="material-icons">{icon_name}</i>'),"."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("div",{className:"row justify-content-evenly align-items-end"},r.a.createElement(d,{preview:!0,type:"material-icons",name:"android"}),r.a.createElement(d,{preview:!0,type:"material-icons",name:"contact_support"}),r.a.createElement(d,{preview:!0,type:"material-icons",name:"face"}),r.a.createElement(d,{preview:!0,type:"material-icons",name:"star"}),r.a.createElement(d,{preview:!0,type:"material-icons",name:"warning"}))),r.a.createElement(i.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement("i",{className:"material-icons"},"android"),"\n",r.a.createElement("i",{className:"material-icons"},"contact_support"),"\n",r.a.createElement("i",{className:"material-icons"},"face"),"\n",r.a.createElement("i",{className:"material-icons"},"star"),"\n",r.a.createElement("i",{className:"material-icons"},"warning")),r.a.createElement("h3",null,"Sizes"),r.a.createElement("p",null,"You can modify the size of the material icons by adding one of the size classes: ",r.a.createElement(i.Property,{value:"material-icons-tiny"}),", ",r.a.createElement(i.Property,{value:"material-icons-small"}),", ",r.a.createElement(i.Property,{value:"material-icons-medium"})," or ",r.a.createElement(i.Property,{value:"material-icons-large"}),"."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("div",{className:"row justify-content-evenly align-items-end"},r.a.createElement(d,{previewSize:!0,type:"material-icons",name:"android",size:"tiny"}),r.a.createElement(d,{previewSize:!0,type:"material-icons",name:"android",size:"small"}),r.a.createElement(d,{previewSize:!0,type:"material-icons",name:"android",size:"medium"}),r.a.createElement(d,{previewSize:!0,type:"material-icons",name:"android",size:"large"}))),r.a.createElement(i.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement("i",{className:"material-icons material-icons-tiny"},"android"),"\n",r.a.createElement("i",{className:"material-icons material-icons-small"},"android"),"\n",r.a.createElement("i",{className:"material-icons material-icons-medium"},"android"),"\n",r.a.createElement("i",{className:"material-icons material-icons-large"},"android")))},N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"payment-icons"},"Payment Icons"),r.a.createElement("p",null,"To use an icon, provide the following markup: ",r.a.createElement(o.a,{className:"language-html"},'<i class="payment-icon payment-icon-{icon_name}"></i>'),"."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("div",{className:"row justify-content-evenly mb-2"},r.a.createElement(d,{preview:!0,type:"payment-icon",name:"amex",size:"large"}),"\n",r.a.createElement(d,{preview:!0,type:"payment-icon",name:"diners",size:"large"}),"\n",r.a.createElement(d,{preview:!0,type:"payment-icon",name:"mastercard",size:"large"}),"\n",r.a.createElement(d,{preview:!0,type:"payment-icon",name:"visa",size:"large"})),r.a.createElement("div",{className:"row justify-content-evenly"},r.a.createElement(d,{preview:!0,type:"payment-icon",name:"mobilepay",size:"large"}),"\n",r.a.createElement(d,{preview:!0,type:"payment-icon",name:"paypal",size:"large"}),"\n",r.a.createElement(d,{preview:!0,type:"payment-icon",name:"swish",size:"large"}),"\n",r.a.createElement(d,{preview:!0,type:"payment-icon",name:"vipps",size:"large"}),"\n")),r.a.createElement(i.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement(d,{type:"payment-icon",name:"amex"}),"\n",r.a.createElement(d,{type:"payment-icon",name:"diners"}),"\n",r.a.createElement(d,{type:"payment-icon",name:"mastercard"}),"\n",r.a.createElement(d,{type:"payment-icon",name:"visa"}),"\n",r.a.createElement(d,{type:"payment-icon",name:"mobilepay"}),"\n",r.a.createElement(d,{type:"payment-icon",name:"paypal"}),"\n",r.a.createElement(d,{type:"payment-icon",name:"swish"}),"\n",r.a.createElement(d,{type:"payment-icon",name:"vipps"})),r.a.createElement("h3",null,"Sizes"),r.a.createElement("p",null,"Different sizes are available by adding ",r.a.createElement(i.Property,{value:".payment-icon-small"}),", ",r.a.createElement(i.Property,{value:".payment-icon-medium"}),", ",r.a.createElement(i.Property,{value:".payment-icon-large"})," and ",r.a.createElement(i.Property,{value:".payment-icon-huge"}),". If no size is provided ",r.a.createElement(i.Property,{value:".payment-icon-medium"})," is defaulted."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("div",{className:"row justify-content-evenly align-items-end"},r.a.createElement(d,{type:"payment-icon",previewSize:!0,name:"visa",size:"small"}),"\n",r.a.createElement(d,{type:"payment-icon",previewSize:!0,name:"visa",size:"medium"}),"\n",r.a.createElement(d,{type:"payment-icon",previewSize:!0,name:"visa",size:"large"}),"\n",r.a.createElement(d,{type:"payment-icon",previewSize:!0,name:"visa",size:"huge"}))),r.a.createElement(i.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement(d,{type:"payment-icon",name:"visa",size:"small"}),"\n",r.a.createElement(d,{type:"payment-icon",name:"visa",size:"medium"}),"\n",r.a.createElement(d,{type:"payment-icon",name:"visa",size:"large"}),"\n",r.a.createElement(d,{type:"payment-icon",name:"visa",size:"huge"}),"\n"),r.a.createElement("h3",null,"Usage"),r.a.createElement("p",null,"Typical usage would be in for instance an ",r.a.createElement(i.Property,{value:".item-list"}),"."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("ul",{className:"item-list item-list-striped"},r.a.createElement("li",null,r.a.createElement("div",{className:"d-flex align-items-center"},"\n",r.a.createElement(d,{type:"payment-icon",name:"visa",className:"mr-2"}),"\n",r.a.createElement("span",null,"4925*********004"),"\n"),r.a.createElement("div",{className:"action-list"},"\n",r.a.createElement(i.Icon,{icon:"more_vert"}),"\n",r.a.createElement("div",{className:"action-menu"},"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(i.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(i.Icon,{icon:"business_center"}),"Add client"),"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(i.Icon,{icon:"add_circle"}),"Add document"),"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(i.Icon,{icon:"person_add"}),"Add user"),"\n"))),r.a.createElement("li",null,r.a.createElement("div",{className:"d-flex align-items-center"},"\n",r.a.createElement(d,{type:"payment-icon",name:"mastercard",className:"mr-2"}),"\n",r.a.createElement("span",null,"5792*********138"),"\n",r.a.createElement("span",{className:"badge badge-blue ml-2"},"new"),"\n"),"\n",r.a.createElement("a",{href:"https://developer.payex.com"},"developer.payex.com"),"\n"),r.a.createElement("li",null,r.a.createElement("div",{className:"d-flex align-items-center"},"\n",r.a.createElement(d,{type:"payment-icon",name:"amex",className:"mr-2"}),"\n",r.a.createElement("span",null,"3651*********701"),"\n"),r.a.createElement("i",{className:"material-icons"},"star"),"\n"),r.a.createElement("li",null,r.a.createElement("div",{className:"d-flex align-items-center"},"\n",r.a.createElement(d,{type:"payment-icon",name:"visa",className:"mr-2"}),"\n",r.a.createElement("span",null,"4925*********007"),"\n"),r.a.createElement("span",{className:"status status-success"},"Active"),"\n",r.a.createElement("button",{type:"button",className:"btn btn-danger btn-xs"},r.a.createElement("i",{className:"material-icons"},"delete")),"\n"))))},P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"flags"},"Flags"),r.a.createElement("p",null,"To use the flag icons add the classes ",r.a.createElement(i.Property,{value:".flag-icon"})," and ",r.a.createElement(i.Property,{value:".flag-icon-xx"})," (where xx is the ",r.a.createElement("a",{href:"https://www.iso.org/obp/ui/#search"},"ISO 3166-1-alpha-2 code")," of a country) to an empty ",r.a.createElement(o.a,{className:"language-html"},"<i>"),"."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("div",{className:"row justify-content-evenly align-items-end"},r.a.createElement(d,{preview:!0,type:"flag-icon",name:"se"}),r.a.createElement(d,{preview:!0,type:"flag-icon",name:"no"}),r.a.createElement(d,{preview:!0,type:"flag-icon",name:"dk"}),r.a.createElement(d,{preview:!0,type:"flag-icon",name:"fi"}),r.a.createElement(d,{preview:!0,type:"flag-icon",name:"eu"}))),r.a.createElement(i.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement("i",{className:"flag-icon flag-icon-no"}),"\n",r.a.createElement("i",{className:"flag-icon flag-icon-sv"}),"\n",r.a.createElement("i",{className:"flag-icon flag-icon-dk"}),"\n",r.a.createElement("i",{className:"flag-icon flag-icon-fi"}),"\n",r.a.createElement("i",{className:"flag-icon flag-icon-eu"}),"\n"),r.a.createElement("h3",null,"Squared"),r.a.createElement("p",null,"To use a squared version of a flag add the class ",r.a.createElement(i.Property,{value:".flag-icon-squared"}),"."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("div",{className:"row justify-content-evenly align-items-end"},r.a.createElement(d,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"se"}),r.a.createElement(d,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"no"}),r.a.createElement(d,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"dk"}),r.a.createElement(d,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"fi"}),r.a.createElement(d,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"eu"}))),r.a.createElement(i.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-no"}),"\n",r.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-sv"}),"\n",r.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-dk"}),"\n",r.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-fi"}),"\n",r.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-eu"}),"\n"),r.a.createElement("h3",null,"Sizes"),r.a.createElement("p",null,"Flags support sizes ",r.a.createElement(i.Property,{value:".payment-icon-tiny"}),", ",r.a.createElement(i.Property,{value:".payment-icon-small"}),", ",r.a.createElement(i.Property,{value:".payment-icon-medium"}),", ",r.a.createElement(i.Property,{value:".payment-icon-large"})," and ",r.a.createElement(i.Property,{value:".payment-icon-huge"}),". If no size is provided ",r.a.createElement(i.Property,{value:".payment-icon-tiny"})," is defaulted."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("div",{className:"row justify-content-evenly align-items-end"},r.a.createElement(d,{previewSize:!0,type:"flag-icon",name:"se",size:"tiny"}),r.a.createElement(d,{previewSize:!0,type:"flag-icon",name:"no",size:"small"}),r.a.createElement(d,{previewSize:!0,type:"flag-icon",name:"dk",size:"medium"}),r.a.createElement(d,{previewSize:!0,type:"flag-icon",name:"fi",size:"large"}),r.a.createElement(d,{previewSize:!0,type:"flag-icon",name:"eu",size:"huge"}))),r.a.createElement(i.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement("i",{className:"flag-icon flag-icon-no flag-icon-tiny"}),"\n",r.a.createElement("i",{className:"flag-icon flag-icon-sv flag-icon-small"}),"\n",r.a.createElement("i",{className:"flag-icon flag-icon-dk flag-icon-medium"}),"\n",r.a.createElement("i",{className:"flag-icon flag-icon-fi flag-icon-large"}),"\n",r.a.createElement("i",{className:"flag-icon flag-icon-eu flag-icon-huge"}),"\n"),r.a.createElement("h3",null,"Squared Sizes"),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("div",{className:"row justify-content-evenly align-items-end"},r.a.createElement(d,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"se",size:"tiny"}),r.a.createElement(d,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"no",size:"small"}),r.a.createElement(d,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"dk",size:"medium"}),r.a.createElement(d,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"fi",size:"large"}),r.a.createElement(d,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"eu",size:"huge"}))),r.a.createElement(i.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-no flag-icon-tiny"}),"\n",r.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-sv flag-icon-small"}),"\n",r.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-dk flag-icon-medium"}),"\n",r.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-fi flag-icon-large"}),"\n",r.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-eu flag-icon-huge"}),"\n"))},k=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),E(this,h(n).apply(this,arguments))}var t,l,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&w(e,n)}(n,a["Component"]),t=n,(l=[{key:"componentDidMount",value:function(){y.a.init()}},{key:"render",value:function(){return r.a.createElement(i.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"The PayEx DesignGuide includes a variety of icons. Mainly we use the material icons, but we also include icons for known payment providers, and flags for most nations in the world."),r.a.createElement(b,null),r.a.createElement(N,null),r.a.createElement(P,null))}}])&&v(t.prototype,l),o&&v(t,o),n}();n.default=k}}]);
//# sourceMappingURL=doc-route.chunk_29.js.map?efd175515a42ee482a1d