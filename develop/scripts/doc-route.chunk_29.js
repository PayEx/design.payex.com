(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[28,2,45,46,47,48,50,51,52],{349:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),l=n(31),o=n.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=i},350:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(31),l=n.n(r),o=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?c.a.createElement("p",null,l):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=o},351:function(e,t,n){"use strict";n.r(t);var a=n(1),p=n.n(a),r=n(31),l=n.n(r),m=n(361),o=n(362),d=n.n(o),f=n(363);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var a=e.children,r=e.language,l=e.removeOuterTag,o=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,i=e.dangerousHTML,u=function(e){var t=document.createElement("div");return t.innerHTML=Object(m.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(m.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===r&&i)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=l?u(e):c?s(e):Object(m.renderToStaticMarkup)(e)});else if("html"===r)n+=l?u(a):c?s(a):Object(m.renderToStaticMarkup)(a);else switch(h(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=d.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=d.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return f.b.style="",p.a.createElement("figure",null,p.a.createElement(f.a,E({},f.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,l=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return p.a.createElement("div",E({key:e+t},r({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",E({key:t},l({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=c},352:function(e,t,n){"use strict";n.r(t);var l=n(1),o=n.n(l),a=n(31),r=n.n(a),c=n(360);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=s(this,p(r).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(r,l["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return o.a.createElement("div",{className:"col-2 d-none d-lg-block"},o.a.createElement("div",{className:"doc-toc"},o.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return o.a.createElement("li",{key:t,className:n?"active":""},o.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&u(t.prototype,n),a&&u(t,a),r}();d.propTypes={component:r.a.func.isRequired},t.default=d},353:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(350);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},354:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(350);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},355:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(31),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:n.n(l).a.string.isRequired},t.default=o},356:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(31),l=n.n(r),o=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,o=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},l),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=o},357:function(e,t,n){"use strict";n.r(t);var a=n(349);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(351);n.d(t,"ComponentPreview",function(){return r.default});var l=n(358);n.d(t,"DocContainer",function(){return l.default});var o=n(359);n.d(t,"DocHeading",function(){return o.default});var c=n(352);n.d(t,"DocToc",function(){return c.default});var i=n(353);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(354);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(355);n.d(t,"Icon",function(){return s.default});var p=n(356);n.d(t,"PxScript",function(){return p.default})},358:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(31),o=n.n(l),c=n(357),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:o.a.bool},t.default=i},360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=E,t.HashLink=h,t.NavHashLink=v;var l=i(n(1)),o=i(n(31)),c=n(55);function i(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,p=null,m=null;function d(){u="",null!==s&&s.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function f(){var e=document.getElementById(u);return null!==e&&(m(e),d(),!0)}function E(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return l.default.createElement(e,a({},n,{onClick:function(e){d(),t.onClick&&t.onClick(e),"string"==typeof t.to?u=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(u=t.to.hash.replace("#","")),""!==u&&(m=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===f()&&(null===s&&(s=new MutationObserver(f)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){d()},1e4))},0))}}),t.children)}function h(e){return E(e,c.Link)}function v(e){return E(e,c.NavLink)}var y={onClick:o.default.func,children:o.default.node,scroll:o.default.func,to:o.default.oneOfType([o.default.string,o.default.object])};v.propTypes=h.propTypes=y},398:function(e,t,n){"use strict";n.r(t),n.d(t,"DocTable",function(){return i}),n.d(t,"BasicTable",function(){return u}),n.d(t,"StripedTable",function(){return s}),n.d(t,"CondensedTable",function(){return p}),n.d(t,"HoverTable",function(){return m}),n.d(t,"HoverStripedTable",function(){return d}),n.d(t,"DescriptionTable",function(){return f});var a=n(1),l=n.n(a),r=n(110),o=n.n(r),c=n(357),i=function(e){var t=e.striped,n=e.condensed,a=e.hover,r=o()("table",t?"table-striped":null,n?"table-condensed":null,a?"table-hover":null);return l.a.createElement("table",{className:r},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"First Name"),l.a.createElement("th",{scope:"col"},"Last Name"),l.a.createElement("th",{scope:"col"},"Location"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Sven"),l.a.createElement("td",null,"Svensson"),l.a.createElement("td",null,"Visby")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"Sara"),l.a.createElement("td",null,"Svensson"),l.a.createElement("td",null,"Stockholm")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"3"),l.a.createElement("td",null,"Ola"),l.a.createElement("td",null,"Nordmann"),l.a.createElement("td",null,"Oslo")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"4"),l.a.createElement("td",null,"Holger"),l.a.createElement("td",null,"Danske"),l.a.createElement("td",null,"Copenhagen")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"5"),l.a.createElement("td",null,"Matti"),l.a.createElement("td",null,"Meikäläinen"),l.a.createElement("td",null,"Lahti"))))},u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"basic-table"},"Basic table"),l.a.createElement("p",null,"Basic tables info..."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(i,null)))},s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"striped-table"},"Striped table"),l.a.createElement("p",null,"Striped tables info..."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(i,{striped:!0})))},p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"condensed-table"},"Condensed table"),l.a.createElement("p",null,"Condensed table info..."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(i,{condensed:!0})))},m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"hover-table"},"Hover table"),l.a.createElement("p",null,"Hover tables info..."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(i,{hover:!0})))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"hover-striped-table"},"Hover striped table"),l.a.createElement("p",null,"Hover striped tables info..."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(i,{hover:!0,striped:!0})))},f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"description-table"},"Description table"),l.a.createElement("p",null,"Description tables info..."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("table",{className:"table table-description table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Key"),l.a.createElement("th",{scope:"col"},"Value"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Name"),l.a.createElement("td",null,"John Doe")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Occupation"),l.a.createElement("td",null,"Unknown")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Skills"),l.a.createElement("td",null,"Unknown"))))))};t.default=function(){return l.a.createElement(c.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Lots of nice info about tables will be here..."),l.a.createElement(u,null),l.a.createElement(s,null),l.a.createElement(p,null),l.a.createElement(m,null),l.a.createElement(d,null),l.a.createElement(f,null))}}}]);
//# sourceMappingURL=doc-route.chunk_29.js.map?494f1f2cbd7adf033b0a