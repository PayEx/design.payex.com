(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[27,2,45,46,47,48,50,51,52],{349:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),l=n(31),o=n.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=i},350:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(31),l=n.n(r),o=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?c.a.createElement("p",null,l):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=o},351:function(e,t,n){"use strict";n.r(t);var a=n(1),m=n.n(a),r=n(31),l=n.n(r),p=n(361),o=n(362),f=n.n(o),d=n(363);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var a=e.children,r=e.language,l=e.removeOuterTag,o=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,i=e.dangerousHTML,s=function(e){var t=document.createElement("div");return t.innerHTML=Object(p.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},u=function(e){var t=document.createElement("div");t.innerHTML=Object(p.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return m.a.createElement(m.a.Fragment,null,t?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?m.a.createElement(function(){var e,t,n="";if("html"===r&&i)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=l?s(e):c?u(e):Object(p.renderToStaticMarkup)(e)});else if("html"===r)n+=l?s(a):c?u(a):Object(p.renderToStaticMarkup)(a);else switch(h(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=f.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=f.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",m.a.createElement("figure",null,m.a.createElement(d.a,E({},d.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,l=e.getTokenProps;return m.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return m.a.createElement("div",E({key:e+t},r({line:e,key:t})),e.map(function(e,t){return m.a.createElement("span",E({key:t},l({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=c},352:function(e,t,n){"use strict";n.r(t);var l=n(1),o=n.n(l),a=n(31),r=n.n(a),c=n(360);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=u(this,m(r).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(r,l["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return o.a.createElement("div",{className:"col-2 d-none d-lg-block"},o.a.createElement("div",{className:"doc-toc"},o.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return o.a.createElement("li",{key:t,className:n?"active":""},o.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&s(t.prototype,n),a&&s(t,a),r}();f.propTypes={component:r.a.func.isRequired},t.default=f},353:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(350);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},354:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(350);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},355:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(31),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:n.n(l).a.string.isRequired},t.default=o},356:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(31),l=n.n(r),o=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,o=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},l),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=o},357:function(e,t,n){"use strict";n.r(t);var a=n(349);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(351);n.d(t,"ComponentPreview",function(){return r.default});var l=n(358);n.d(t,"DocContainer",function(){return l.default});var o=n(359);n.d(t,"DocHeading",function(){return o.default});var c=n(352);n.d(t,"DocToc",function(){return c.default});var i=n(353);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=n(354);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(355);n.d(t,"Icon",function(){return u.default});var m=n(356);n.d(t,"PxScript",function(){return m.default})},358:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(31),o=n.n(l),c=n(357),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:o.a.bool},t.default=i},360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=E,t.HashLink=h,t.NavHashLink=y;var l=i(n(1)),o=i(n(31)),c=n(55);function i(e){return e&&e.__esModule?e:{default:e}}var s="",u=null,m=null,p=null;function f(){s="",null!==u&&u.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function d(){var e=document.getElementById(s);return null!==e&&(p(e),f(),!0)}function E(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return l.default.createElement(e,a({},n,{onClick:function(e){f(),t.onClick&&t.onClick(e),"string"==typeof t.to?s=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(s=t.to.hash.replace("#","")),""!==s&&(p=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===u&&(u=new MutationObserver(d)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout(function(){f()},1e4))},0))}}),t.children)}function h(e){return E(e,c.Link)}function y(e){return E(e,c.NavLink)}var v={onClick:o.default.func,children:o.default.node,scroll:o.default.func,to:o.default.oneOfType([o.default.string,o.default.object])};y.propTypes=h.propTypes=v},397:function(e,t,n){"use strict";n.r(t),n.d(t,"BasicList",function(){return f}),n.d(t,"InlineList",function(){return d}),n.d(t,"DescriptionList",function(){return E}),n.d(t,"SettingsList",function(){return h}),n.d(t,"ItemList",function(){return y}),n.d(t,"HoverItemList",function(){return v}),n.d(t,"StripedItemList",function(){return b});var l=n(1),o=n.n(l),c=n(357),i=n(34);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"basic-list"},"Basic list"),o.a.createElement("p",null,"Add ",o.a.createElement(c.Property,{value:".list"})," to a list to display the basic list. Our lists do not use bullet points."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("ul",{className:"list"},o.a.createElement("li",null,"Bread"),o.a.createElement("li",null,"Coffee beans"),o.a.createElement("li",null,"Milk"),o.a.createElement("li",null,"Butter"))),o.a.createElement("h3",null,"Nested list"),o.a.createElement("p",null,"Use nesting with lists to signify that some items are children of another item."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("ul",{className:"list"},o.a.createElement("li",null,"Coffee"),o.a.createElement("li",null,"Tea",o.a.createElement("ul",null,o.a.createElement("li",null,"Black tea"),o.a.createElement("li",null,"Green tea"),o.a.createElement("li",null,"Ice tea"))),o.a.createElement("li",null,"Milk"))))},d=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"inline-list"},"Inline list"),o.a.createElement("p",null,"Use ",o.a.createElement(c.Property,{value:".list-inline"})," on a list to make all items appear on the same line."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("ul",{className:"list list-inline"},o.a.createElement("li",null,"Coffee"),o.a.createElement("li",null,"Tea"),o.a.createElement("li",null,"Milk"))))},E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"description-list"},"Description list"),o.a.createElement("p",null,"The description list lets you provide each item with a more specific description of each item. Add ",o.a.createElement(c.Property,{value:".description-list"})," to your dl."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("dl",{className:"description-list"},"\n",o.a.createElement("dt",null,"Frog"),o.a.createElement("dd",null,"Wet green thing that croaks."),"\n",o.a.createElement("dt",null,"Rabbit"),o.a.createElement("dd",null,"Warm fluffy thing that jumps."),"\n",o.a.createElement("dt",null,"Color"),o.a.createElement("dd",null,"Any hue except white or black."),"\n")))},h=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"settings-list"},"Settings list"),o.a.createElement("p",null,"Use ",o.a.createElement(c.Property,{value:".settings-list"})," to visualize different settings in your web application."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("ul",{className:"settings-list"},o.a.createElement("li",null,"\n",o.a.createElement("i",{className:"material-icons text-success"},"check"),"Shovels and tapestry newsletter","\n"),o.a.createElement("li",null,"\n",o.a.createElement("i",{className:"material-icons text-warning"},"remove"),"Spoon collectors weekly newsletter","\n"),o.a.createElement("li",null,"\n",o.a.createElement("i",{className:"material-icons text-danger"},"clear"),"Energetic squirrels newsletter","\n"))))},y=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"item-list"},"Item list "),o.a.createElement("p",null,o.a.createElement(c.Property,{value:".item-list"}),"s is a good way to offer more extensive information about each item. Each item has their own box which seperates the items more clearly than our other options."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("ul",{className:"item-list"},o.a.createElement("li",null,"4925*********004"),o.a.createElement("li",null,"4925*********004"),o.a.createElement("li",null,"4925*********004"))))},v=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"hover-item-list"},"Hover item list "),o.a.createElement("p",null,"Include ",o.a.createElement(c.Property,{value:".item-list-hover"})," to give your items a hover effect. You can use this on any variation of ",o.a.createElement(c.Property,{value:".item-list"}),"."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("ul",{className:"item-list item-list-hover"},o.a.createElement("li",null,"\n",o.a.createElement("span",null,"4925*********004"),"\n",o.a.createElement("span",{className:"status status-success"},"Active"),"\n"),o.a.createElement("li",null,"\n",o.a.createElement("span",null,"4925*********004"),"\n",o.a.createElement("span",{className:"status status-warning"},"Expires soon"),"\n"),o.a.createElement("li",null,"\n",o.a.createElement("span",null,"4925*********004"),"\n",o.a.createElement("span",{className:"status status-danger"},"Expired"),"\n"))))},b=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"item-list-striped"},"Striped item list"),o.a.createElement("p",null,"If you want more seperation between each item you can use ",o.a.createElement(c.Property,{value:".item-list-striped"}),"."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("ul",{className:"item-list item-list-striped"},o.a.createElement("li",null,o.a.createElement("span",null,"4925*********004"),o.a.createElement("div",{className:"action-list"},"\n",o.a.createElement(c.Icon,{icon:"more_vert"}),"\n",o.a.createElement("div",{className:"action-menu"},"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(c.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(c.Icon,{icon:"business_center"}),"Add client"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(c.Icon,{icon:"add_circle"}),"Add document"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(c.Icon,{icon:"person_add"}),"Add user"),"\n"))),o.a.createElement("li",null,"\n",o.a.createElement("span",null,"\n\t\t\t","4925*********004","\n\t\t\t",o.a.createElement("span",{className:"badge badge-blue"},"new"),"\n"),"\n",o.a.createElement("a",{href:"https://developer.payex.com"},"developer.payex.com"),"\n"),o.a.createElement("li",null,"\n",o.a.createElement("span",null,"4925*********004"),"\n",o.a.createElement("i",{className:"material-icons"},"star"),"\n"),o.a.createElement("li",null,"\n",o.a.createElement("span",null,"4925*********004"),"\n",o.a.createElement("span",{className:"status status-success"},"Active"),"\n",o.a.createElement("button",{type:"button",className:"btn btn-danger btn-xs"},o.a.createElement("i",{className:"material-icons"},"delete")),"\n"))))},r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,m(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,l["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){i.a.init()}},{key:"render",value:function(){return o.a.createElement(c.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"Use lists to give a structured view of information."),o.a.createElement(f,null),o.a.createElement(d,null),o.a.createElement(E,null),o.a.createElement(h,null),o.a.createElement(y,null),o.a.createElement(v,null),o.a.createElement(b,null))}}])&&s(n.prototype,a),r&&s(n,r),t}();t.default=r}}]);
//# sourceMappingURL=doc-route.chunk_28.js.map?494f1f2cbd7adf033b0a