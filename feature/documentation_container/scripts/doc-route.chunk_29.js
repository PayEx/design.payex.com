(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[31,5,46,48,49,50,52],{422:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return o});var a=n(1),l=n.n(a),r=n(2),c=n.n(r),o=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),a,l.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n)):!n&&a?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},t.default=u},423:function(e,t,n){"use strict";var a=n(1),o=n.n(a),l=n(2),r=n.n(l),c=function(e){var t=e.id,n=e.type,a=e.icon,l=e.close,r=e.text,c=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?o.a.createElement("i",{className:"material-icons alert-icon"},a):null,r?"\n":"",r?o.a.createElement("p",null,r):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=c},424:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(423);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},425:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(423);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},426:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(2),c=function(e){var t=e.icon;return l.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(r).a.string.isRequired},t.default=c},427:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),l=n(2),r=n.n(l),c=function(e){var t,n,a=e.component,l=e.subComponents,r=e.func,c=e.params;return l&&(n=l.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return o.a.createElement("span",{key:t},e,t<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,a),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},r),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=c},428:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(2),c=n.n(r),o=n(429),u=function(e){var t=e.docToc,n=e.children,a=function(){return l.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(a,null),t?l.a.createElement(o.DocToc,{component:a}):null))};u.propTypes={docToc:c.a.bool},t.default=u},429:function(e,t,n){"use strict";n.r(t);var a=n(422);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var l=n(430);n.d(t,"ComponentPreview",function(){return l.default});var r=n(428);n.d(t,"DocContainer",function(){return r.default});var c=n(431);n.d(t,"DocHeading",function(){return c.default});var o=n(432);n.d(t,"DocToc",function(){return o.default});var u=n(424);n.d(t,"DeprecatedComponentAlert",function(){return u.default});var s=n(425);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var m=n(426);n.d(t,"Icon",function(){return m.default});var i=n(427);n.d(t,"PxScript",function(){return i.default})},473:function(e,t,n){"use strict";n.r(t),n.d(t,"DocTable",function(){return u}),n.d(t,"BasicTable",function(){return s}),n.d(t,"StripedTable",function(){return m}),n.d(t,"CondensedTable",function(){return i}),n.d(t,"HoverTable",function(){return d}),n.d(t,"HoverStripedTable",function(){return p}),n.d(t,"DescriptionTable",function(){return E});var a=n(1),r=n.n(a),l=n(187),c=n.n(l),o=n(429),u=function(e){var t=e.striped,n=e.condensed,a=e.hover,l=c()("table",t?"table-striped":null,n?"table-condensed":null,a?"table-hover":null);return r.a.createElement("table",{className:l},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"First Name"),r.a.createElement("th",{scope:"col"},"Last Name"),r.a.createElement("th",{scope:"col"},"Location"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1"),r.a.createElement("td",null,"Sven"),r.a.createElement("td",null,"Svensson"),r.a.createElement("td",null,"Visby")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"2"),r.a.createElement("td",null,"Sara"),r.a.createElement("td",null,"Svensson"),r.a.createElement("td",null,"Stockholm")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"3"),r.a.createElement("td",null,"Ola"),r.a.createElement("td",null,"Nordmann"),r.a.createElement("td",null,"Oslo")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"4"),r.a.createElement("td",null,"Holger"),r.a.createElement("td",null,"Danske"),r.a.createElement("td",null,"Copenhagen")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"5"),r.a.createElement("td",null,"Matti"),r.a.createElement("td",null,"Meikäläinen"),r.a.createElement("td",null,"Lahti"))))},s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"basic-table"},"Basic table"),r.a.createElement("p",null,"Basic tables info..."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u,null)))},m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"striped-table"},"Striped table"),r.a.createElement("p",null,"Striped tables info..."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u,{striped:!0})))},i=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"condensed-table"},"Condensed table"),r.a.createElement("p",null,"Condensed table info..."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u,{condensed:!0})))},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"hover-table"},"Hover table"),r.a.createElement("p",null,"Hover tables info..."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u,{hover:!0})))},p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"hover-striped-table"},"Hover striped table"),r.a.createElement("p",null,"Hover striped tables info..."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u,{hover:!0,striped:!0})))},E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"description-table"},"Description table"),r.a.createElement("p",null,"Description tables info..."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("table",{className:"table table-description table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Key"),r.a.createElement("th",{scope:"col"},"Value"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Name"),r.a.createElement("td",null,"John Doe")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Occupation"),r.a.createElement("td",null,"Unknown")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Skills"),r.a.createElement("td",null,"Unknown"))))))};t.default=function(){return r.a.createElement(o.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Lots of nice info about tables will be here..."),r.a.createElement(s,null),r.a.createElement(m,null),r.a.createElement(i,null),r.a.createElement(d,null),r.a.createElement(p,null),r.a.createElement(E,null))}}}]);
//# sourceMappingURL=doc-route.chunk_29.js.map?cbb0c0811233f03a6df2