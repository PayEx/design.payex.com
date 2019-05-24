(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[19,2,47,48,49,51,52,53,54],{365:function(e,t,n){"use strict";n.r(t);var a=n(366);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var o=n(368);n.d(t,"ComponentPreview",function(){return o.default});var r=n(374);n.d(t,"DocContainer",function(){return r.default});var l=n(376);n.d(t,"DocHeading",function(){return l.default});var i=n(369);n.d(t,"DocToc",function(){return i.default});var c=n(370);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=n(371);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(372);n.d(t,"Icon",function(){return s.default});var p=n(375);n.d(t,"JavascriptDocs",function(){return p.default});var m=n(373);n.d(t,"PxScript",function(){return m.default})},366:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return i});var a=n(1),o=n.n(a),r=n(65),l=n.n(r),i=function(e){var t=e.value;return o.a.createElement("code",{className:"token property"},t)},c=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n),o.a.createElement("span",{className:"token attr-value"},o.a.createElement("span",{className:"token punctuation"},'="'),a,o.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n)):!n&&a?o.a.createElement("code",null,o.a.createElement("span",{className:"token attr-value"},a)):void 0};c.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},i.propTypes={value:l.a.string.isRequired},t.default=c},367:function(e,t,n){"use strict";var a=n(1),o=n.n(a),r=n(65),l=n.n(r),i=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,i=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?o.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?o.a.createElement("p",null,l):null,i?"\n":"",i?o.a.createElement("div",{className:"alert-body"},i):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};i.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=i},368:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(65),l=n.n(r),i=n(378),c=n(379),u=n.n(c),s=n(380);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,r=e.hideValue,l=e.removeList,c=e.showCasePanel,f=e.codeFigure,d=e.dangerousHTML,y=function(e){var t=document.createElement("div");return t.innerHTML=Object(i.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},v=function(e){var t=document.createElement("div");t.innerHTML=Object(i.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return o.a.createElement(o.a.Fragment,null,c?o.a.createElement(function(){return o.a.createElement("div",{className:"showcase-panel"},t)},null):null,f?o.a.createElement(function(){var e="";if("html"===n&&d)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?y(t):l?v(t):Object(i.renderToStaticMarkup)(t)});else if("html"===n)e+=a?y(t):l?v(t):Object(i.renderToStaticMarkup)(t);else switch(m(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t});break;default:console.warn("CodeFigure: children needs attention!")}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),r&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",o.a.createElement("figure",null,o.a.createElement(s.a,p({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,l=e.getTokenProps;return o.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return o.a.createElement("div",p({key:e+t},r({line:e,key:t})),e.map(function(e,t){return o.a.createElement("span",p({key:t},l({token:e,key:t})))}))}))}))},null):null)};f.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=f},369:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(65),l=n.n(r),i=n(377);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,p(t).call(this,e))).state={headings:f(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,a["Component"]),n=t,(r=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"col-2 d-none d-lg-block"},o.a.createElement("div",{className:"doc-toc"},o.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return o.a.createElement("li",{key:n,className:a?"active":""},o.a.createElement(i.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,r),l&&u(n,l),t}();d.propTypes={component:l.a.func.isRequired},t.default=d},370:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(367);t.default=function(){return o.a.createElement(r.a,{type:"danger"},o.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),o.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},371:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(367);t.default=function(){return o.a.createElement(r.a,{type:"danger"},o.a.createElement("h3",{className:"text-danger"},"Component under development!"),o.a.createElement("p",null,"This component is still under development and is subject to change."))}},372:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(65),l=function(e){var t=e.icon;return o.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(r).a.string.isRequired},t.default=l},373:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(65),l=n.n(r),i=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,i=e.params;return r&&(n=r.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),i&&(t=i.map(function(e,t){return o.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<i.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,a),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},l),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};i.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=i},374:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(65),l=n.n(r),i=n(365),c=function(e){var t=e.docToc,n=e.children,a=function(){return o.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(a,null),t?o.a.createElement(i.DocToc,{component:a}):null))};c.propTypes={docToc:l.a.bool},t.default=c},375:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return i}),n.d(t,"CloseDocs",function(){return c});var a=n(1),o=n.n(a),r=n(96),l=n(365),i=function(e){var t=e.componentName;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,o.a.createElement(l.PxScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),o.a.createElement("p",null,"Opens the given ",t.toLowerCase(),"."))},c=function(e){var t=e.componentName;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,o.a.createElement(l.PxScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),o.a.createElement("p",null,"Closes the given ",t.toLowerCase(),"."))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,o.a.createElement(l.PxScript,{component:t,func:"init"})),o.a.createElement("p",null,o.a.createElement(r.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase(),"."),n?o.a.createElement(i,{componentName:t}):null,a?o.a.createElement(c,{componentName:t}):null)}},377:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=v,t.HashLink=h,t.NavHashLink=b;var l=u(n(1)),i=u(n(65)),c=n(96);function u(e){return e&&e.__esModule?e:{default:e}}var s="",p=null,m=null,f=null;function d(){s="",null!==p&&p.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function y(){var e=document.getElementById(s);return null!==e&&(f(e),d(),!0)}function v(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return l.default.createElement(t,o({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===r(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(f=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===y()&&(null===p&&(p=new MutationObserver(y)),p.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout(function(){d()},1e4))},0))}}),e.children)}function h(e){return v(e,c.Link)}function b(e){return v(e,c.NavLink)}var E={onClick:i.default.func,children:i.default.node,scroll:i.default.func,to:i.default.oneOfType([i.default.string,i.default.object])};h.propTypes=E,b.propTypes=E},409:function(e,t,n){"use strict";n.r(t),n.d(t,"Overview",function(){return l});var a=n(1),o=n.n(a),r=n(365),l=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"overview"},"Overview"),o.a.createElement("p",null,"Add the attribute ",o.a.createElement(r.Attribute,{data:!0,name:"tooltip"})," to the desired element and add your content in its value to create a tooltip."),o.a.createElement("p",null,"You can use the attribute ",o.a.createElement(r.Attribute,{data:!0,name:"tooltip-position"})," to position the tooltip relative to the containing element, use the values ",o.a.createElement(r.Attribute,{value:"top"}),", ",o.a.createElement(r.Attribute,{value:"right"}),", ",o.a.createElement(r.Attribute,{value:"bottom"})," or ",o.a.createElement(r.Attribute,{value:"left"}),". If the attribute is not provided, it will default to top."),o.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement("button",{className:"btn btn-primary",type:"button","data-tooltip":"This is a tooltip!","data-tooltip-position":"left"},"Tooltip to the left"),"\n",o.a.createElement("button",{className:"btn btn-primary",type:"button","data-tooltip":"This is a tooltip!","data-tooltip-position":"top"},"Tooltip on top"),"\n",o.a.createElement("button",{className:"btn btn-primary",type:"button","data-tooltip":"This is a tooltip!","data-tooltip-position":"bottom"},"Tooltip to the bottom"),"\n",o.a.createElement("button",{className:"btn btn-primary",type:"button","data-tooltip":"This is a tooltip!","data-tooltip-position":"right"},"Tooltip to the right"),"\n")))};t.default=function(){return o.a.createElement(r.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"Tooltips are small, interactive, textual hints for mainly graphical elements. When using icons for actions you can use a tooltip to give people clarification on its function."),o.a.createElement(l,null))}}}]);
//# sourceMappingURL=doc-route.chunk_21.js.map?a391c8b65c95559f8d61