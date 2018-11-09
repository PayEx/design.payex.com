(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[24,44,46,47,48,49,51],{421:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return o});var n=a(1),l=a.n(n),r=a(2),c=a.n(r),o=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a)):!a&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};u.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},t.default=u},422:function(e,t,a){"use strict";var n=a(1),o=a.n(n),l=a(2),r=a.n(l),c=function(e){var t=e.id,a=e.type,n=e.icon,l=e.close,r=e.text,c=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?o.a.createElement("i",{className:"material-icons alert-icon"},n):null,r?"\n":"",r?o.a.createElement("p",null,r):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=c},423:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(422);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(422);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(2),c=function(e){var t=e.icon;return l.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:a.n(r).a.string.isRequired},t.default=c},426:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),l=a(2),r=a.n(l),c=function(e){var t,a,n=e.component,l=e.subComponents,r=e.func,c=e.params;return l&&(a=l.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return o.a.createElement("span",{key:t},e,t<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,n),o.a.createElement("span",{className:"token punctuation"},"."),a,o.a.createElement("span",{className:"token function"},r),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=c},430:function(e,t,a){"use strict";a.r(t);var n=a(421);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var l=a(427);a.d(t,"ComponentPreview",function(){return l.default});var r=a(428);a.d(t,"DocHeading",function(){return r.default});var c=a(429);a.d(t,"DocToc",function(){return c.default});var o=a(423);a.d(t,"DeprecatedComponentAlert",function(){return o.default});var u=a(424);a.d(t,"ExperimentalComponentAlert",function(){return u.default});var m=a(425);a.d(t,"Icon",function(){return m.default});var s=a(426);a.d(t,"PxScript",function(){return s.default})},467:function(e,t,a){"use strict";a.r(t),a.d(t,"Overview",function(){return c}),a.d(t,"BreakpointsText",function(){return o});var n=a(1),l=a.n(n),r=a(430),c=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"overview"},"Overview"),l.a.createElement("p",null,"Like Bootstrap our breakpoints are ranged from ",l.a.createElement(r.Property,{value:"xs"})," to ",l.a.createElement(r.Property,{value:"xl"}),". In addition, we have added yet another breakpoint for even bigger screens called ",l.a.createElement(r.Property,{value:"xxl"}),"."),l.a.createElement("p",null,"Note that when targeting screensize ",l.a.createElement(r.Property,{value:"xs"}),", it is optional to append the infix to the classname."),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Infix"),l.a.createElement("th",null,"Min-width"),l.a.createElement("th",null,"Example usage"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(r.Property,{value:"xs"})),l.a.createElement("td",null,l.a.createElement(r.Property,{value:"0px"})),l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement(r.Property,{value:".col-8"}),", ",l.a.createElement(r.Property,{value:".d-block"})))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(r.Property,{value:"sm"})),l.a.createElement("td",null,l.a.createElement(r.Property,{value:"576px"})),l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement(r.Property,{value:".col-sm-8"}),", ",l.a.createElement(r.Property,{value:".d-sm-block"})))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(r.Property,{value:"md"})),l.a.createElement("td",null,l.a.createElement(r.Property,{value:"768px"})),l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement(r.Property,{value:".col-md-8"}),", ",l.a.createElement(r.Property,{value:".d-md-block"})))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(r.Property,{value:"lg"})),l.a.createElement("td",null,l.a.createElement(r.Property,{value:"992px"})),l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement(r.Property,{value:".col-lg-8"}),", ",l.a.createElement(r.Property,{value:".d-lg-block"})))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(r.Property,{value:"xl"})),l.a.createElement("td",null,l.a.createElement(r.Property,{value:"1200px"})),l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement(r.Property,{value:".col-xl-8"}),", ",l.a.createElement(r.Property,{value:".d-xl-block"})))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(r.Property,{value:"xxl"})),l.a.createElement("td",null,l.a.createElement(r.Property,{value:"1600px"})),l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement(r.Property,{value:".col-xxl-8"}),", ",l.a.createElement(r.Property,{value:".d-xxl-block"})))))))},o=function(){return l.a.createElement("div",{className:"col-12 col-lg-10 doc-body"},l.a.createElement("p",{className:"lead"},"Our breakpoints is based on ",l.a.createElement("a",{href:"http://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints"},"Bootstrap","'","s breakpoints"),", but has some modifications."),l.a.createElement(c,null))};t.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(o,null),l.a.createElement(r.DocToc,{component:o}))))}}}]);
//# sourceMappingURL=doc-route.chunk_23.js.map?c8400ba05a8bd3f44e1e