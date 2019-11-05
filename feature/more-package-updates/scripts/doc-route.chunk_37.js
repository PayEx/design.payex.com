(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[37,2,48,49,50,52,53,54,55],{360:function(e,t,n){"use strict";n.r(t);var a=n(361);n.d(t,"Attribute",(function(){return a.default})),n.d(t,"Property",(function(){return a.Property}));var o=n(363);n.d(t,"ComponentPreview",(function(){return o.default}));var r=n(369);n.d(t,"DocContainer",(function(){return r.default}));var c=n(371);n.d(t,"DocHeading",(function(){return c.default}));var l=n(364);n.d(t,"DocToc",(function(){return l.default}));var i=n(365);n.d(t,"DeprecatedComponentAlert",(function(){return i.default}));var u=n(366);n.d(t,"ExperimentalComponentAlert",(function(){return u.default}));var s=n(367);n.d(t,"Icon",(function(){return s.default}));var p=n(370);n.d(t,"JavascriptDocs",(function(){return p.default}));var m=n(368);n.d(t,"PxScript",(function(){return m.default}))},361:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",(function(){return l}));var a=n(1),o=n.n(a),r=n(53),c=n.n(r),l=function(e){var t=e.value;return o.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n),o.a.createElement("span",{className:"token attr-value"},o.a.createElement("span",{className:"token punctuation"},'="'),a,o.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n)):!n&&a?o.a.createElement("code",null,o.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},l.propTypes={value:c.a.string.isRequired},t.default=i},362:function(e,t,n){"use strict";var a=n(1),o=n.n(a),r=n(53),c=n.n(r),l=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,c=e.text,l=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?o.a.createElement("i",{className:"material-icons alert-icon"},a):null,c?"\n":"",c?o.a.createElement("p",null,c):null,l?"\n":"",l?o.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:c.a.string,type:c.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:c.a.string,close:c.a.bool,text:c.a.string},t.a=l},363:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(53),c=n.n(r),l=n(373),i=n(374),u=n.n(i),s=n(375);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,r=e.hideValue,c=e.removeList,i=e.showCasePanel,f=e.codeFigure,d=e.dangerousHTML,y=function(e){var t=document.createElement("div");return t.innerHTML=Object(l.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},h=function(e){var t=document.createElement("div");t.innerHTML=Object(l.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach((function(e){a+="".concat(e.innerHTML," \n")})),a};return o.a.createElement(o.a.Fragment,null,i?o.a.createElement((function(){return o.a.createElement("div",{className:"showcase-panel"},t)}),null):null,f?o.a.createElement((function(){var e="";if("html"===n&&d)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach((function(e){return t+="".concat(e,"\n")})):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map((function(t){e+=a?y(t):c?h(t):Object(l.renderToStaticMarkup)(t)}));else if("html"===n)e+=a?y(t):c?h(t):Object(l.renderToStaticMarkup)(t);else switch(m(t)){case"string":e=t;break;case"object":t.forEach((function(t){return e+=t}))}switch(n){case"html":e=u.a.html_beautify(e),e=e.replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),r&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",o.a.createElement("figure",null,o.a.createElement(s.a,p({},s.b,{theme:void 0,code:e,language:n}),(function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,c=e.getTokenProps;return o.a.createElement("pre",{className:t,style:n},a.map((function(e,t){return o.a.createElement("div",p({key:e+t},r({line:e,key:t})),e.map((function(e,t){return o.a.createElement("span",p({key:t},c({token:e,key:t})))})))})))})))}),null):null)};f.propTypes={language:c.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:c.a.bool,hideValue:c.a.bool,removeList:c.a.bool,showCasePanel:c.a.bool,codeFigure:c.a.bool,dangerousHTML:c.a.bool},t.default=f},364:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(53),c=n.n(r),l=n(372);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){var t=[];return"function"==typeof e.map&&e.map((function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})})),t},d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,p(t).call(this,e))).state={headings:f(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(a=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map((function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop})),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"col-2 d-none d-lg-block"},o.a.createElement("div",{className:"doc-toc"},o.a.createElement("ul",null,this.state.headings.map((function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return o.a.createElement("li",{key:n,className:a?"active":""},o.a.createElement(l.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}})))))}}])&&u(n.prototype,a),r&&u(n,r),t}(a.Component);d.propTypes={component:c.a.func.isRequired},t.default=d},365:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(362);t.default=function(){return o.a.createElement(r.a,{type:"danger"},o.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),o.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},366:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(362);t.default=function(){return o.a.createElement(r.a,{type:"danger"},o.a.createElement("h3",{className:"text-danger"},"Component under development!"),o.a.createElement("p",null,"This component is still under development and is subject to change."))}},367:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(53),c=function(e){var t=e.icon;return o.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(r).a.string.isRequired},t.default=c},368:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(53),c=n.n(r),l=function(e){var t,n,a=e.component,r=e.subComponents,c=e.func,l=e.params;return r&&(n=r.map((function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))}))),l&&(t=l.map((function(e,t){return o.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<l.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)}))),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,a),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},c),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:c.a.string.isRequired,subComponents:c.a.array,func:c.a.string.isRequired,params:c.a.array},t.default=l},369:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(53),c=n.n(r),l=n(360),i=function(e){var t=e.docToc,n=e.children,a=function(){return o.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(a,null),t?o.a.createElement(l.DocToc,{component:a}):null))};i.propTypes={docToc:c.a.bool},t.default=i},370:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",(function(){return l})),n.d(t,"CloseDocs",(function(){return i}));var a=n(1),o=n.n(a),r=n(95),c=n(360),l=function(e){var t=e.componentName;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,o.a.createElement(c.PxScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),o.a.createElement("p",null,"Opens the given ",t.toLowerCase(),"."))},i=function(e){var t=e.componentName;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,o.a.createElement(c.PxScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),o.a.createElement("p",null,"Closes the given ",t.toLowerCase(),"."))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,o.a.createElement(c.PxScript,{component:t,func:"init"})),o.a.createElement("p",null,o.a.createElement(r.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase(),"."),n?o.a.createElement(l,{componentName:t}):null,a?o.a.createElement(i,{componentName:t}):null)}},372:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=h,t.HashLink=v,t.NavHashLink=E;var c=u(n(1)),l=u(n(53)),i=n(95);function u(e){return e&&e.__esModule?e:{default:e}}var s="",p=null,m=null,f=null;function d(){s="",null!==p&&p.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function y(){var e=document.getElementById(s);return null!==e&&(f(e),d(),!0)}function h(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return c.default.createElement(t,o({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===r(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(f=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout((function(){!1===y()&&(null===p&&(p=new MutationObserver(y)),p.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout((function(){d()}),1e4))}),0))}}),e.children)}function v(e){return h(e,i.Link)}function E(e){return h(e,i.NavLink)}var b={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};v.propTypes=b,E.propTypes=b},421:function(e,t,n){"use strict";n.r(t),n.d(t,"AboutInit",(function(){return l}));var a=n(1),o=n.n(a),r=n(360),c=n(362),l=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"about-init"},"When to initialize"),o.a.createElement("p",null,"Our script runs ",o.a.createElement(r.PxScript,{component:"script",func:"initAll"})," on DOMContentLoaded making it so you have to run ",o.a.createElement(r.PxScript,{component:"<component_name>",func:"init"})," manually when a component is rendered after the event has fired."),o.a.createElement("h3",null,"Manual initializing"),o.a.createElement("p",null,"To initialize components use ",o.a.createElement(r.PxScript,{component:"<component_name>",func:"init"}),". If the function is called without arguments it will target all components with class ",o.a.createElement(r.Property,{value:"<component_name>"})," on the page. Initializing only one component can be done by passing an ID, it must match an existing components ID and will print a warning message if the value is invalid."),o.a.createElement("p",null,"If only one component is initialized then the init function will return one object. If several components are initialized it will return an array of objects."),o.a.createElement(r.ComponentPreview,{language:"javascript",codeFigure:!0},"px.component.init();\n",'px.component.init("demo-component-id");\n'),o.a.createElement(c.a,{type:"warning"},"Additional functions is available for some components. Read about them on the components documentation page."))};t.default=function(){return o.a.createElement(r.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"How to utilize our ",o.a.createElement(r.PxScript,{component:"<component_name>",func:"init"})," function."),o.a.createElement(l,null))}}}]);
//# sourceMappingURL=doc-route.chunk_37.js.map?caf6d6cffdcce64fe8c8