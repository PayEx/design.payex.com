(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[13,45,47,48,49,50,52],{421:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),l=n(2),o=n.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=u},422:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(2),l=n.n(r),o=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?c.a.createElement("p",null,l):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=o},423:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(422);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(422);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(2),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:n.n(l).a.string.isRequired},t.default=o},426:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(2),l=n.n(r),o=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,o=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},l),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=o},430:function(e,t,n){"use strict";n.r(t);var a=n(421);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(427);n.d(t,"ComponentPreview",function(){return r.default});var l=n(428);n.d(t,"DocHeading",function(){return l.default});var o=n(429);n.d(t,"DocToc",function(){return o.default});var c=n(423);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=n(424);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var i=n(425);n.d(t,"Icon",function(){return i.default});var s=n(426);n.d(t,"PxScript",function(){return s.default})},489:function(e,t,n){"use strict";n.r(t);var l=n(1),s=n.n(l),o=n(430),a=n(2),r=n.n(a),c=n(186),m=n.n(c),u=function(e){var t=e.type,n=e.items,a=e.text,r=e.arrows,l=e.farArrows,o=-1,c=n?n.length-1:-2,u=m()("pagination",t?"pagination-".concat(t):""),i=function(e){var t=e.type,n=!1;return"start"===t||"back"===t?n=0===o:"forward"!==t&&"end"!==t||(n=o===c),s.a.createElement("li",{className:"arrow-".concat(t)},"\n",n?s.a.createElement("span",null):s.a.createElement("a",{href:"#"}),"\n")};return s.a.createElement("ul",{className:u},l?s.a.createElement(i,{type:"start"}):null,r?s.a.createElement(i,{type:"back"}):null,n?n.map(function(e,t){var n=e.name,a=e.href,r=e.active;return r&&(o=t),s.a.createElement("li",{key:t,className:"".concat(r?"active":"")},"\n",s.a.createElement("a",{href:a},n),"\n")}):null,a?s.a.createElement("li",null,"\n",s.a.createElement("span",{className:"text"},a),"\n"):null,r?s.a.createElement(i,{type:"forward"}):null,l?s.a.createElement(i,{type:"end"}):null)};u.propTypes={type:r.a.oneOf(["bullets","simple"]),items:r.a.array,text:r.a.string,arrows:r.a.bool,farArrows:r.a.bool};var i=u;function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"DefaultPagination",function(){return g}),n.d(t,"SimplePagination",function(){return h}),n.d(t,"PaginationBullets",function(){return b}),n.d(t,"PaginationText",function(){return w});var v=[{name:"1",href:"#",active:!1},{name:"2",href:"#",active:!1},{name:"3",href:"#",active:!1},{name:"4",href:"#",active:!1},{name:"5",href:"#",active:!0}],g=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"default-pagination"},"Default pagination"),s.a.createElement("p",null,"Default pagination... ",s.a.createElement(o.Property,{value:".pagination"}),"..."),s.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},s.a.createElement(i,{items:v,arrows:!0,farArrows:!0})))},b=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"pagination-bullets"},"Pagination bullets"),s.a.createElement("p",null,"Pagination bullets... ",s.a.createElement(o.Property,{value:".pagination-bullets"}),"..."),s.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},s.a.createElement(i,{type:"bullets",items:v,arrows:!0,farArrows:!0})))},h=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"simple-pagination"},"Simple pagination"),s.a.createElement("p",null,"Simple pagination... ",s.a.createElement(o.Property,{value:".pagination"}),"..."),s.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},s.a.createElement(i,{text:"16 of 256",arrows:!0,farArrows:!0})))},w=function(){return s.a.createElement("div",{className:"col-lg-10 doc-body"},s.a.createElement("p",{className:"lead"},"Pagination..."),s.a.createElement(g,null),s.a.createElement(b,null),s.a.createElement(h,null))},N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,E(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,l["Component"]),n=t,(a=[{key:"render",value:function(){return s.a.createElement("div",{className:"doc-container"},s.a.createElement("div",{className:"row"},s.a.createElement(w,null),s.a.createElement(o.DocToc,{component:w})))}}])&&f(n.prototype,a),r&&f(n,r),t}();t.default=N}}]);
//# sourceMappingURL=doc-route.chunk_13.js.map?48f7df565e186e0eab18