(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[12,5,46,48,49,50,52],{422:function(e,a,t){"use strict";t.r(a),t.d(a,"Property",function(){return o});var n=t(1),r=t.n(n),l=t(2),c=t.n(l),o=function(e){var a=e.value;return r.a.createElement("code",{className:"token property"},a)},i=function(e){var a=e.data,t=e.name,n=e.value;return t&&n?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},t),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):t&&!n?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},t)):!t&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};i.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},a.default=i},423:function(e,a,t){"use strict";var n=t(1),o=t.n(n),r=t(2),l=t.n(r),c=function(e){var a=e.id,t=e.type,n=e.icon,r=e.close,l=e.text,c=e.children;return o.a.createElement("div",{id:a,className:"alert alert-".concat(t)},n?"\n":"",n?o.a.createElement("i",{className:"material-icons alert-icon"},n):null,l?"\n":"",l?o.a.createElement("p",null,l):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},a.a=c},424:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(423);a.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},425:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(423);a.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},426:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(2),c=function(e){var a=e.icon;return r.a.createElement("i",{className:"material-icons"},a)};c.propTypes={icon:t.n(l).a.string.isRequired},a.default=c},427:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),r=t(2),l=t.n(r),c=function(e){var a,t,n=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(t=r.map(function(e,a){return o.a.createElement("span",{key:a},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(a=c.map(function(e,a){return o.a.createElement("span",{key:a},e,a<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,n),o.a.createElement("span",{className:"token punctuation"},"."),t,o.a.createElement("span",{className:"token function"},l),o.a.createElement("span",{className:"token punctuation"},"("),a,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},a.default=c},428:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(2),c=t.n(l),o=t(429),i=function(e){var a=e.docToc,t=e.children,n=function(){return r.a.createElement("div",{className:"doc-body ".concat(a?"col-lg-10":"col-12")},t)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(n,null),a?r.a.createElement(o.DocToc,{component:n}):null))};i.propTypes={docToc:c.a.bool},a.default=i},429:function(e,a,t){"use strict";t.r(a);var n=t(422);t.d(a,"Attribute",function(){return n.default}),t.d(a,"Property",function(){return n.Property});var r=t(430);t.d(a,"ComponentPreview",function(){return r.default});var l=t(428);t.d(a,"DocContainer",function(){return l.default});var c=t(431);t.d(a,"DocHeading",function(){return c.default});var o=t(432);t.d(a,"DocToc",function(){return o.default});var i=t(424);t.d(a,"DeprecatedComponentAlert",function(){return i.default});var s=t(425);t.d(a,"ExperimentalComponentAlert",function(){return s.default});var m=t(426);t.d(a,"Icon",function(){return m.default});var u=t(427);t.d(a,"PxScript",function(){return u.default})},441:function(e,a,t){"use strict";var n=t(1),u=t.n(n),r=t(2),l=t.n(r),c=t(187),d=t.n(c),o=function(e){var a=e.size,t=e.imgUrl,n=e.icon,r=e.heading,l=e.text,c=e.textSmall,o=e.mediaRight,i=e.muted,s=d()("media",o?"media-right":null,a?"media-".concat(a):null),m=d()("material-icons",i?"text-muted":null);return u.a.createElement("div",{className:s},t||n?u.a.createElement("div",{className:"media-img"},"\n",t?u.a.createElement(u.a.Fragment,null," ",u.a.createElement("img",{src:t})," ","\n"," "):null,n?u.a.createElement(u.a.Fragment,null," ",u.a.createElement("i",{className:m},n)," ","\n"," "):null):null,u.a.createElement("div",{className:"media-body"},function(){var e=d()(i?"text-muted":null);switch(a){case"sm":return u.a.createElement("h4",{className:e},r);case"lg":return u.a.createElement("h2",{className:e},r);default:return u.a.createElement("h3",{className:e},r)}}(),u.a.createElement("p",null,c?u.a.createElement("small",null,l):l)))};o.propTypes={size:l.a.oneOf(["sm","lg"]),imgUrl:l.a.string,icon:l.a.string,heading:l.a.string.isRequired,text:l.a.string,textSmall:l.a.bool,mediaRight:l.a.bool,muted:l.a.bool},a.a=o},463:function(e,a,t){"use strict";t.r(a),t.d(a,"Overview",function(){return o}),t.d(a,"Sizes",function(){return i}),t.d(a,"MediaPosition",function(){return s});var n=t(1),r=t.n(n),l=t(429),c=t(441),o=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"overview"},"Overview"),r.a.createElement("p",null,"Use the ",r.a.createElement(l.Property,{value:".media"})," class on an object to style it as a small container that feature a left- or right-aligned image/icon alongside textual content."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(c.a,{imgUrl:"https://via.placeholder.com/48x48",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"}),r.a.createElement(c.a,{icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"})))},i=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"sizes"},"Sizes"),r.a.createElement("p",null,"Sizes for media object..."),r.a.createElement("h3",null,"Small"),r.a.createElement("p",null,"Small media object ",r.a.createElement(l.Property,{value:".media-sm"}),"..."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(c.a,{size:"sm",imgUrl:"https://via.placeholder.com/40x40",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"}),r.a.createElement(c.a,{size:"sm",icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"})),r.a.createElement("h3",null,"Large"),r.a.createElement("p",null,"Large media object ",r.a.createElement(l.Property,{value:".media-lg"}),"..."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(c.a,{size:"lg",imgUrl:"https://via.placeholder.com/56x56",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"}),r.a.createElement(c.a,{size:"lg",icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"})))},s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"media-position"},"Media position"),r.a.createElement("p",null,"Use the ",r.a.createElement(l.Property,{value:".media-right"})," class to align the media content to the right."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(c.a,{mediaRight:!0,imgUrl:"https://via.placeholder.com/48x48",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"}),r.a.createElement(c.a,{mediaRight:!0,icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"})))};a.default=function(){return r.a.createElement(l.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Media objects..."),r.a.createElement(o,null),r.a.createElement(i,null),r.a.createElement(s,null))}}}]);
//# sourceMappingURL=doc-route.chunk_11.js.map?cbb0c0811233f03a6df2