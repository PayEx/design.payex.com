(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[26,5,46,48,49,50,52],{420:function(e,a,n){"use strict";n.r(a),n.d(a,"Property",function(){return o});var t=n(1),r=n.n(t),c=n(2),l=n.n(c),o=function(e){var a=e.value;return r.a.createElement("code",{className:"token property"},a)},s=function(e){var a=e.data,n=e.name,t=e.value;return n&&t?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),t,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!t?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&t?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},t)):void 0};s.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},o.propTypes={value:l.a.string.isRequired},a.default=s},421:function(e,a,n){"use strict";var t=n(1),o=n.n(t),r=n(2),c=n.n(r),l=function(e){var a=e.id,n=e.type,t=e.icon,r=e.close,c=e.text,l=e.children;return o.a.createElement("div",{id:a,className:"alert alert-".concat(n)},t?"\n":"",t?o.a.createElement("i",{className:"material-icons alert-icon"},t):null,c?"\n":"",c?o.a.createElement("p",null,c):null,l?"\n":"",l?o.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:c.a.string,type:c.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:c.a.string,close:c.a.bool,text:c.a.string},a.a=l},422:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),c=n(421);a.default=function(){return r.a.createElement(c.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},423:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),c=n(421);a.default=function(){return r.a.createElement(c.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},424:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),c=n(2),l=function(e){var a=e.icon;return r.a.createElement("i",{className:"material-icons"},a)};l.propTypes={icon:n.n(c).a.string.isRequired},a.default=l},425:function(e,a,n){"use strict";n.r(a);var t=n(1),o=n.n(t),r=n(2),c=n.n(r),l=function(e){var a,n,t=e.component,r=e.subComponents,c=e.func,l=e.params;return r&&(n=r.map(function(e,a){return o.a.createElement("span",{key:a},e,o.a.createElement("span",{className:"token punctuation"},"."))})),l&&(a=l.map(function(e,a){return o.a.createElement("span",{key:a},e,a<l.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,t),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},c),o.a.createElement("span",{className:"token punctuation"},"("),a,o.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:c.a.string.isRequired,subComponents:c.a.array,func:c.a.string.isRequired,params:c.a.array},a.default=l},426:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),c=n(2),l=n.n(c),o=n(427),s=function(e){var a=e.docToc,n=e.children,t=function(){return r.a.createElement("div",{className:"doc-body ".concat(a?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(t,null),a?r.a.createElement(o.DocToc,{component:t}):null))};s.propTypes={docToc:l.a.bool},a.default=s},427:function(e,a,n){"use strict";n.r(a);var t=n(420);n.d(a,"Attribute",function(){return t.default}),n.d(a,"Property",function(){return t.Property});var r=n(428);n.d(a,"ComponentPreview",function(){return r.default});var c=n(426);n.d(a,"DocContainer",function(){return c.default});var l=n(429);n.d(a,"DocHeading",function(){return l.default});var o=n(430);n.d(a,"DocToc",function(){return o.default});var s=n(422);n.d(a,"DeprecatedComponentAlert",function(){return s.default});var u=n(423);n.d(a,"ExperimentalComponentAlert",function(){return u.default});var m=n(424);n.d(a,"Icon",function(){return m.default});var i=n(425);n.d(a,"PxScript",function(){return i.default})},493:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),c=n(427),l=n(2),o=n.n(l),s=function(e){var a=e.name,n=e.hex;return r.a.createElement("div",{className:"color-preview bg-".concat(a)},r.a.createElement("p",null,a),r.a.createElement("p",null,n))};s.propTypes={name:o.a.string.isRequired,hex:o.a.string.isRequired};var u=s;n.d(a,"ColorPalette",function(){return m});var m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"color-palette"},"Color palette"),r.a.createElement("p",null,"The PayEx DesignGuide color palette..."),r.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2"},r.a.createElement(u,{name:"brand",hex:"#2da944"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2"},r.a.createElement(u,{name:"default",hex:"#3c3c3c"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2"},r.a.createElement(u,{name:"neutral",hex:"#266c9a"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2"},r.a.createElement(u,{name:"success",hex:"#2da944"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2"},r.a.createElement(u,{name:"warning",hex:"#ff9f00"})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-2"},r.a.createElement(u,{name:"danger",hex:"#cd2e00"})))))};a.default=function(){return r.a.createElement(c.DocContainer,null,r.a.createElement("p",{className:"lead"},"Here there be colors..."),r.a.createElement(m,null))}}}]);
//# sourceMappingURL=doc-route.chunk_24.js.map?0af251965245a8a15827