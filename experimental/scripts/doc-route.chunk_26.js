(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[25,2,47,48,49,51,52,53,54],{373:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return c});var n=a(1),r=a.n(n),l=a(46),o=a.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a)):!a&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=i},374:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=a(46),o=a.n(l),c=function(e){var t=e.id,a=e.type,n=e.icon,l=e.close,o=e.text,c=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?r.a.createElement("i",{className:"material-icons alert-icon"},n):null,o?"\n":"",o?r.a.createElement("p",null,o):null,c?"\n":"",c?r.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=c},375:function(e,t,a){"use strict";a.r(t);var n=a(373);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var r=a(376);a.d(t,"ComponentPreview",function(){return r.default});var l=a(382);a.d(t,"DocContainer",function(){return l.default});var o=a(383);a.d(t,"DocHeading",function(){return o.default});var c=a(377);a.d(t,"DocToc",function(){return c.default});var i=a(378);a.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=a(379);a.d(t,"ExperimentalComponentAlert",function(){return s.default});var m=a(380);a.d(t,"Icon",function(){return m.default});var u=a(381);a.d(t,"PxScript",function(){return u.default})},376:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(46),o=a.n(l),c=a(385),i=a(386),s=a.n(i),m=a(387);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(e){var t=e.children,a=e.language,n=e.removeOuterTag,l=e.hideValue,o=e.removeList,i=e.showCasePanel,p=e.codeFigure,f=e.dangerousHTML,h=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},E=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var a=t.querySelectorAll("li"),n="";return a.forEach(function(e){n+="".concat(e.innerHTML," \n")}),n};return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel"},t)},null):null,p?r.a.createElement(function(){var e="";if("html"===a&&f)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===a&&t&&"function"==typeof t.map)t.map(function(t){e+=n?h(t):o?E(t):Object(c.renderToStaticMarkup)(t)});else if("html"===a)e+=n?h(t):o?E(t):Object(c.renderToStaticMarkup)(t);else switch(d(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(a){case"html":e=(e=s.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=s.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return m.b.style="",r.a.createElement("figure",null,r.a.createElement(m.a,u({},m.b,{theme:void 0,code:e,language:a}),function(e){var t=e.className,a=e.style,n=e.tokens,l=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:t,style:a},n.map(function(e,t){return r.a.createElement("div",u({key:e+t},l({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",u({key:t},o({token:e,key:t})))}))}))}))},null):null)};p.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=p},377:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(46),o=a.n(l),c=a(384);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var a=e.type().props.children[0];if("h2"===a.type)t.push({title:a.props.children,id:a.props.id});else if("function"==typeof a.type){var n=a.type().props.children[0];"h2"===n.type&&t.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=m(this,u(t).call(this,e))).state={headings:p(a.props.component().props.children),windowTopPosition:window.pageYOffset},a}var a,l,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,n["Component"]),a=t,(l=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,a){if(t.id&&t.title){var n=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[a+1].top;return r.a.createElement("li",{key:a,className:n?"active":""},r.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&s(a.prototype,l),o&&s(a,o),t}();f.propTypes={component:o.a.func.isRequired},t.default=f},378:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(374);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},379:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(374);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},380:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(46),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:a.n(l).a.string.isRequired},t.default=o},381:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(46),o=a.n(l),c=function(e){var t,a,n=e.component,l=e.subComponents,o=e.func,c=e.params;return l&&(a=l.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return r.a.createElement("span",{key:t},e,t<c.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"px"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,n),r.a.createElement("span",{className:"token punctuation"},"."),a,r.a.createElement("span",{className:"token function"},o),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=c},382:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(46),o=a.n(l),c=a(375),i=function(e){var t=e.docToc,a=e.children,n=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},a)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(n,null),t?r.a.createElement(c.DocToc,{component:n}):null))};i.propTypes={docToc:o.a.bool},t.default=i},384:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)};t.genericHashLink=E,t.HashLink=v,t.NavHashLink=y;var o=s(a(1)),c=s(a(46)),i=a(98);function s(e){return e&&e.__esModule?e:{default:e}}var m="",u=null,d=null,p=null;function f(){m="",null!==u&&u.disconnect(),null!==d&&(window.clearTimeout(d),d=null)}function h(){var e=document.getElementById(m);return null!==e&&(p(e),f(),!0)}function E(e,t){e.scroll,e.smooth;var a=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["scroll","smooth"]);return o.default.createElement(t,r({},a,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?m=e.to.split("#").slice(1).join("#"):"object"===l(e.to)&&"string"==typeof e.to.hash&&(m=e.to.hash.replace("#","")),""!==m&&(p=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===h()&&(null===u&&(u=new MutationObserver(h)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),d=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function v(e){return E(e,i.Link)}function y(e){return E(e,i.NavLink)}var b={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};v.propTypes=b,y.propTypes=b},454:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(375),o=a(46),c=a.n(o),i=function(e){var t=e.name,a=e.hex,n=e.color,l={backgroundColor:a},o={color:n||null};return r.a.createElement("div",{className:"color-preview",style:l},r.a.createElement("p",{style:n?o:null},t," (",a,")"))};i.propTypes={name:c.a.string.isRequired,hex:c.a.string.isRequired,color:c.a.string};var s=i;a.d(t,"MainColors",function(){return m}),a.d(t,"AlertColors",function(){return u}),a.d(t,"Grayscale",function(){return d});var m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"main-colors"},"Main colors"),r.a.createElement("p",null,"The main color palette of Swedbank Pay"),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 offset-lg-1 mb-2"},r.a.createElement(s,{name:"orange-medium",hex:"#ee7023"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-2"},r.a.createElement(s,{name:"orange-light",hex:"#ff9900"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-2"},r.a.createElement(s,{name:"orange-bright",hex:"#ffcc00"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-2"},r.a.createElement(s,{name:"green",hex:"#82b236"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-2"},r.a.createElement(s,{name:"blue",hex:"#5b8ad6"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 offset-lg-1 mb-2"},r.a.createElement(s,{name:"blue-light",hex:"#a2c9ce"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-2"},r.a.createElement(s,{name:"blue-bright",hex:"#d7e6e9"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-2"},r.a.createElement(s,{name:"teal",hex:"#4893a0"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-2"},r.a.createElement(s,{name:"blue-bright-alt",hex:"#a3c9cf"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-2"},r.a.createElement(s,{name:"red-medium",hex:"#dd3300"})))))},u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"alert-colors"},"Alert colors"),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"brand-success",hex:"#477d17"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"brand-success-light",hex:"#f2f7eb"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"brand-warning",hex:"#ff9900"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"brand-warning-light",hex:"#fffae5"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"brand-error-border",hex:"#f1bbb9"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"brand-error",hex:"#b24843"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"brand-error-light",hex:"#fceeed"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"brand-info",hex:"#2c7a8f"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"brand-info-light",hex:"#f0f9fb"})))))},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"grayscale"},"Grayscale"),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"black",hex:"#000000",color:"#eaeaea"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"nearblack",hex:"#111111",color:"#eaeaea"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"gray-dark",hex:"#262626",color:"#eaeaea"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"gray-medium-dark",hex:"#363636",color:"#eaeaea"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"gray-medium",hex:"#404040",color:"#eaeaea"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"gray-medium-light",hex:"#545454",color:"#eaeaea"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"gray-light",hex:"#666666",color:"#eaeaea"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"gray-light-alt",hex:"#999999"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"gray-bright",hex:"#eaeaea"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"gray-bright-alt",hex:"#bcbcbc"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"neargray",hex:"#f9f9f9"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"offwhite",hex:"#f4f4f4"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"nearwhite",hex:"#f0f0f0"})),r.a.createElement("div",{className:"col-12"},r.a.createElement(s,{name:"white",hex:"#ffffff",color:"black"})))))};t.default=function(){return r.a.createElement(l.DocContainer,null,r.a.createElement("p",{className:"lead"},"The Swedbank Pay DesignGuide color palette"),r.a.createElement(m,null),r.a.createElement(u,null),r.a.createElement(d,null))}}}]);
//# sourceMappingURL=doc-route.chunk_26.js.map?5707d924962d77b87283