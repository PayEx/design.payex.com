(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[6,2,48,49,50,52,53,54,55],{363:function(e,t,n){"use strict";n.r(t);var a=n(364);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(366);n.d(t,"ComponentPreview",function(){return r.default});var o=n(372);n.d(t,"DocContainer",function(){return o.default});var c=n(374);n.d(t,"DocHeading",function(){return c.default});var l=n(367);n.d(t,"DocToc",function(){return l.default});var i=n(368);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(369);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(370);n.d(t,"Icon",function(){return s.default});var m=n(373);n.d(t,"JavascriptDocs",function(){return m.default});var p=n(371);n.d(t,"PxScript",function(){return p.default})},364:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return l});var a=n(1),r=n.n(a),o=n(65),c=n.n(o),l=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},l.propTypes={value:c.a.string.isRequired},t.default=i},365:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(65),c=n.n(o),l=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,c=e.text,l=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?r.a.createElement("i",{className:"material-icons alert-icon"},a):null,c?"\n":"",c?r.a.createElement("p",null,c):null,l?"\n":"",l?r.a.createElement("div",{className:"alert-body"},l):null,o?"\n":"",o?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:c.a.string,type:c.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:c.a.string,close:c.a.bool,text:c.a.string},t.a=l},366:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),c=n.n(o),l=n(376),i=n(377),u=n.n(i),s=n(378);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,o=e.hideValue,c=e.removeList,i=e.showCasePanel,f=e.codeFigure,d=e.dangerousHTML,h=function(e){var t=document.createElement("div");return t.innerHTML=Object(l.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},v=function(e){var t=document.createElement("div");t.innerHTML=Object(l.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel"},t)},null):null,f?r.a.createElement(function(){var e="";if("html"===n&&d)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?h(t):c?v(t):Object(l.renderToStaticMarkup)(t)});else if("html"===n)e+=a?h(t):c?v(t):Object(l.renderToStaticMarkup)(t);else switch(p(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",r.a.createElement("figure",null,r.a.createElement(s.a,m({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,c=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return r.a.createElement("div",m({key:e+t},o({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",m({key:t},c({token:e,key:t})))}))}))}))},null):null)};f.propTypes={language:c.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:c.a.bool,hideValue:c.a.bool,removeList:c.a.bool,showCasePanel:c.a.bool,codeFigure:c.a.bool,dangerousHTML:c.a.bool},t.default=f},367:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),c=n.n(o),l=n(375);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,m(t).call(this,e))).state={headings:f(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(o=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return r.a.createElement("li",{key:n,className:a?"active":""},r.a.createElement(l.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,o),c&&u(n,c),t}();d.propTypes={component:c.a.func.isRequired},t.default=d},368:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(365);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},369:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(365);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},370:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(o).a.string.isRequired},t.default=c},371:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),c=n.n(o),l=function(e){var t,n,a=e.component,o=e.subComponents,c=e.func,l=e.params;return o&&(n=o.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return r.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<l.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"px"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,a),r.a.createElement("span",{className:"token punctuation"},"."),n,r.a.createElement("span",{className:"token function"},c),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:c.a.string.isRequired,subComponents:c.a.array,func:c.a.string.isRequired,params:c.a.array},t.default=l},372:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),c=n.n(o),l=n(363),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(l.DocToc,{component:a}):null))};i.propTypes={docToc:c.a.bool},t.default=i},373:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return l}),n.d(t,"CloseDocs",function(){return i});var a=n(1),r=n.n(a),o=n(95),c=n(363),l=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(c.PxScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("p",null,"Opens the given ",t.toLowerCase(),"."))},i=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(c.PxScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("p",null,"Closes the given ",t.toLowerCase(),"."))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(c.PxScript,{component:t,func:"init"})),r.a.createElement("p",null,r.a.createElement(o.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase(),"."),n?r.a.createElement(l,{componentName:t}):null,a?r.a.createElement(i,{componentName:t}):null)}},375:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=v,t.HashLink=y,t.NavHashLink=E;var c=u(n(1)),l=u(n(65)),i=n(95);function u(e){return e&&e.__esModule?e:{default:e}}var s="",m=null,p=null,f=null;function d(){s="",null!==m&&m.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function h(){var e=document.getElementById(s);return null!==e&&(f(e),d(),!0)}function v(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return c.default.createElement(t,r({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===o(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(f=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===h()&&(null===m&&(m=new MutationObserver(h)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){d()},1e4))},0))}}),e.children)}function y(e){return v(e,i.Link)}function E(e){return v(e,i.NavLink)}var b={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};y.propTypes=b,E.propTypes=b},390:function(e,t,n){"use strict";n.r(t),n.d(t,"Overview",function(){return p}),n.d(t,"Anchorpoints",function(){return f}),n.d(t,"JavascriptMethods",function(){return d});var a=n(1),r=n.n(a),o=n(363);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=window.px.actionList,p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"overview"},"Overview"),r.a.createElement("p",null,"Action lists."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"action-list"},"\n",r.a.createElement(o.Icon,{icon:"more_vert"}),"\n",r.a.createElement("div",{className:"action-menu"},"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(o.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(o.Icon,{icon:"business_center"}),"Add client"),"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(o.Icon,{icon:"add_circle"}),"Add document"),"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(o.Icon,{icon:"person_add"}),"Add user"),"\n"))))},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"anchorpoints"},"Anchorpoints"),r.a.createElement("p",null,"You can change where the action list will have its anchor, by default the anchor will be top right."),r.a.createElement("h3",null,"Top left"),r.a.createElement("p",null,"Use class ",r.a.createElement("code",{className:"token property"},".anchor-top-left")," to anchor action-list button to the top left corner of the menu."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"action-list anchor-top-left"},"\n",r.a.createElement(o.Icon,{icon:"more_vert"}),"\n",r.a.createElement("div",{className:"action-menu"},"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(o.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(o.Icon,{icon:"business_center"}),"Add client"),"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(o.Icon,{icon:"add_circle"}),"Add document"),"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(o.Icon,{icon:"person_add"}),"Add user"),"\n"))),r.a.createElement("h3",null,"Bottom right"),r.a.createElement("p",null,"Use class ",r.a.createElement("code",{className:"token property"},".anchor-bottom-right")," to anchor action-list button to the bottom right corner of the menu."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"action-list anchor-bottom-right"},"\n",r.a.createElement(o.Icon,{icon:"more_vert"}),"\n",r.a.createElement("div",{className:"action-menu"},"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(o.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(o.Icon,{icon:"business_center"}),"Add client"),"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(o.Icon,{icon:"add_circle"}),"Add document"),"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(o.Icon,{icon:"person_add"}),"Add user"),"\n"))),r.a.createElement("h3",null,"Bottom left"),r.a.createElement("p",null,"Use class ",r.a.createElement("code",{className:"token property"},".anchor-bottom-left")," to anchor action-list button to the bottom left corner of the menu."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"action-list anchor-bottom-left"},"\n",r.a.createElement(o.Icon,{icon:"more_vert"}),"\n",r.a.createElement("div",{className:"action-menu"},"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(o.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(o.Icon,{icon:"business_center"}),"Add client"),"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(o.Icon,{icon:"add_circle"}),"Add document"),"\n",r.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r.a.createElement(o.Icon,{icon:"person_add"}),"Add user"),"\n"))))},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"javascript-methods"},"JavaScript methods"),r.a.createElement(o.JavascriptDocs,{componentName:"actionList",open:!0,close:!0}))},h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,u(t).apply(this,arguments))}var n,c,h;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,a["Component"]),n=t,(c=[{key:"componentDidMount",value:function(){m.init()}},{key:"render",value:function(){return r.a.createElement(o.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Action lists are small menus that remain hidden until clicked. In these you can put page links or anchors that trigger an action elsewhere."),r.a.createElement(p,null),r.a.createElement(f,null),r.a.createElement(d,null))}}])&&l(n.prototype,c),h&&l(n,h),t}();t.default=h}}]);
//# sourceMappingURL=doc-route.chunk_0.js.map?72edcc81b8fc90972503