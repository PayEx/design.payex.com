(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[14,2,48,49,50,52,53,54,55],{360:function(e,t,n){"use strict";n.r(t);var a=n(361);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(363);n.d(t,"ComponentPreview",function(){return r.default});var l=n(369);n.d(t,"DocContainer",function(){return l.default});var o=n(371);n.d(t,"DocHeading",function(){return o.default});var c=n(364);n.d(t,"DocToc",function(){return c.default});var i=n(365);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=n(366);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(367);n.d(t,"Icon",function(){return u.default});var m=n(370);n.d(t,"JavascriptDocs",function(){return m.default});var p=n(368);n.d(t,"PxScript",function(){return p.default})},361:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),l=n(53),o=n.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=i},362:function(e,t,n){"use strict";var a=n(1),r=n.n(a),l=n(53),o=n.n(l),c=function(e){var t=e.id,n=e.type,a=e.icon,l=e.close,o=e.text,c=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?r.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?r.a.createElement("p",null,o):null,c?"\n":"",c?r.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=c},363:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(53),o=n.n(l),c=n(373),i=n(374),s=n.n(i),u=n(375);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,l=e.hideValue,o=e.removeList,i=e.showCasePanel,f=e.codeFigure,d=e.dangerousHTML,b=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},h=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel"},t)},null):null,f?r.a.createElement(function(){var e="";if("html"===n&&d)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?b(t):o?h(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=a?b(t):o?h(t):Object(c.renderToStaticMarkup)(t);else switch(p(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=s.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=s.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return u.b.style="",r.a.createElement("figure",null,r.a.createElement(u.a,m({},u.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,l=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return r.a.createElement("div",m({key:e+t},l({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",m({key:t},o({token:e,key:t})))}))}))}))},null):null)};f.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=f},364:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(53),o=n.n(l),c=n(372);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,m(t).call(this,e))).state={headings:f(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,l,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(l=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return r.a.createElement("li",{key:n,className:a?"active":""},r.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&s(n.prototype,l),o&&s(n,o),t}();d.propTypes={component:o.a.func.isRequired},t.default=d},365:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(362);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},366:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(362);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},367:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(53),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:n.n(l).a.string.isRequired},t.default=o},368:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(53),o=n.n(l),c=function(e){var t,n,a=e.component,l=e.subComponents,o=e.func,c=e.params;return l&&(n=l.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return r.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<c.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"px"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,a),r.a.createElement("span",{className:"token punctuation"},"."),n,r.a.createElement("span",{className:"token function"},o),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=c},369:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(53),o=n.n(l),c=n(360),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:o.a.bool},t.default=i},370:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return c}),n.d(t,"CloseDocs",function(){return i});var a=n(1),r=n.n(a),l=n(95),o=n(360),c=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(o.PxScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("p",null,"Opens the given ",t.toLowerCase(),"."))},i=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(o.PxScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("p",null,"Closes the given ",t.toLowerCase(),"."))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(o.PxScript,{component:t,func:"init"})),r.a.createElement("p",null,r.a.createElement(l.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase(),"."),n?r.a.createElement(c,{componentName:t}):null,a?r.a.createElement(i,{componentName:t}):null)}},372:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=h,t.HashLink=y,t.NavHashLink=E;var o=s(n(1)),c=s(n(53)),i=n(95);function s(e){return e&&e.__esModule?e:{default:e}}var u="",m=null,p=null,f=null;function d(){u="",null!==m&&m.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function b(){var e=document.getElementById(u);return null!==e&&(f(e),d(),!0)}function h(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return o.default.createElement(t,r({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?u=e.to.split("#").slice(1).join("#"):"object"===l(e.to)&&"string"==typeof e.to.hash&&(u=e.to.hash.replace("#","")),""!==u&&(f=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===b()&&(null===m&&(m=new MutationObserver(b)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){d()},1e4))},0))}}),e.children)}function y(e){return h(e,i.Link)}function E(e){return h(e,i.NavLink)}var v={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};y.propTypes=v,E.propTypes=v},400:function(e,t,n){"use strict";n.r(t),n.d(t,"DefaultSlab",function(){return p}),n.d(t,"SlabElevated",function(){return f}),n.d(t,"SlabWell",function(){return d}),n.d(t,"SlabWhite",function(){return b}),n.d(t,"SlabSizes",function(){return y}),n.d(t,"SlabMuted",function(){return h}),n.d(t,"SlabCombinations",function(){return E});var a=n(1),r=n.n(a),l=n(360);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=window.px.validation,p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"default-slab"},"Default slab"),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"slab"},r.a.createElement("p",null,"Do you want to sign up for the slab mailing list?"),r.a.createElement("form",{action:"#",noValidate:!0,"data-validate":!0},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"validation-email-2"},"Email"),r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"material-icons"},"email")),r.a.createElement("input",{type:"email",className:"form-control",id:"validation-email-2",placeholder:"bob.corlsan@example.com",required:!0})),r.a.createElement("div",{className:"help-block","data-success":"Right!","data-error":"Wrong!"},"This one might be a little tricky")),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit")))))},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"elevated-slab"},"Elevated slab"),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"slab slab-elevated"},"Look ma, im elevated!")))},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"slab-well"},"Slab well"),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"slab slab-well"},"Look ma, im in a well!")))},b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"slab-white"},"Slab white"),r.a.createElement("p",null,"This slab can contain so many things"),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"slab slab-white"},r.a.createElement("p",{className:"lead text-center"},"Here is some text and then a striped item list"),r.a.createElement("ul",{className:"item-list item-list-striped"},r.a.createElement("li",null,r.a.createElement("span",null,"4925*********004")),r.a.createElement("li",null,"\n",r.a.createElement("span",null,"\n\t\t\t","4925*********004","\n\t\t\t",r.a.createElement("span",{className:"badge badge-blue"},"new"),"\n"),"\n",r.a.createElement("a",{href:"https://developer.payex.com"},"developer.payex.com"),"\n"),r.a.createElement("li",null,"\n",r.a.createElement("span",null,"4925*********004"),"\n",r.a.createElement("i",{className:"material-icons"},"star"),"\n"),r.a.createElement("li",null,"\n",r.a.createElement("span",null,"4925*********004"),"\n",r.a.createElement("span",{className:"status status-success"},"Active"),"\n",r.a.createElement("button",{type:"button",className:"btn btn-danger btn-xs"},r.a.createElement("i",{className:"material-icons"},"delete")),"\n")),r.a.createElement("p",null,"Maybe include a steps component in this slab so you can track your progress!"),r.a.createElement("div",{className:"steps"},r.a.createElement("ol",null,r.a.createElement("li",{className:"steps-completed"},r.a.createElement("div",{className:"material-icons steps-icon"},"check"),"Step one",r.a.createElement("div",{className:"steps-sub-title"},"24.12.17 12:10")),r.a.createElement("li",{className:"steps-ongoing steps-selected"},"Step two"),r.a.createElement("li",null,"Step three"),r.a.createElement("li",null,"Step four")),r.a.createElement("div",{className:"steps-responsive"},r.a.createElement("div",{className:"steps-responsive-text"},"Step 3"))))))},h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"slab-muted"},"Slab muted"),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"slab slab-muted"},r.a.createElement("h4",null,"This text will be gray."),"\n",r.a.createElement("span",null,"And this text will be gray."),"\n","Even this text will be gray!")))},y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"slab-sizes"},"Slab sizes"),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"slab slab-sm"},"This is very snug.")),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"slab slab-lg"},"This is so spacious I can hardly believe it!")))},E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"slab-combinations"},"Slab combinations"),r.a.createElement("p",null,"You can mix and match slab variations as you see fit."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"slab slab-white slab-muted slab-elevated"},"This is an elevated white slab with muted text.")),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"slab slab-well slab-lg"},"This is a big well!")))},v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,s(t).apply(this,arguments))}var n,o,v;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,a["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){m.init()}},{key:"render",value:function(){return r.a.createElement(l.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Slabs are container components, therefore it works with whatever you want to put in it."),r.a.createElement(p,null),r.a.createElement(f,null),r.a.createElement(d,null),r.a.createElement(b,null),r.a.createElement(h,null),r.a.createElement(y,null),r.a.createElement(E,null))}}])&&c(n.prototype,o),v&&c(n,v),t}();t.default=v}}]);
//# sourceMappingURL=doc-route.chunk_16.js.map?24451c0cd10738bd2c9b