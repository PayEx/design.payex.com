(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[12,44,46,47,48,49,50],{417:function(e,a,t){"use strict";t.r(a),t.d(a,"Property",function(){return o});var n=t(1),r=t.n(n),l=t(2),c=t.n(l),o=function(e){var a=e.value;return r.a.createElement("code",{className:"token property"},a)},i=function(e){var a=e.data,t=e.name,n=e.value;return t&&n?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},t),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):t&&!n?r.a.createElement("code",null,a?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},t)):!t&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};i.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},a.default=i},418:function(e,a,t){"use strict";var n=t(1),o=t.n(n),r=t(2),l=t.n(r),c=function(e){var a=e.id,t=e.type,n=e.icon,r=e.close,l=e.text,c=e.children;return o.a.createElement("div",{id:a,className:"alert alert-".concat(t)},n?"\n":"",n?o.a.createElement("i",{className:"material-icons alert-icon"},n):null,l?"\n":"",l?o.a.createElement("p",null,l):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},a.a=c},419:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(418);a.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},420:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(418);a.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},421:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(2),c=function(e){var a=e.icon;return r.a.createElement("i",{className:"material-icons"},a)};c.propTypes={icon:t.n(l).a.string.isRequired},a.default=c},422:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),r=t(2),l=t.n(r),c=function(e){var a,t,n=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(t=r.map(function(e,a){return o.a.createElement("span",{key:a},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(a=c.map(function(e,a){return o.a.createElement("span",{key:a},e,a<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,n),o.a.createElement("span",{className:"token punctuation"},"."),t,o.a.createElement("span",{className:"token function"},l),o.a.createElement("span",{className:"token punctuation"},"("),a,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},a.default=c},426:function(e,a,t){"use strict";t.r(a);var n=t(417);t.d(a,"Attribute",function(){return n.default}),t.d(a,"Property",function(){return n.Property});var r=t(423);t.d(a,"ComponentPreview",function(){return r.default});var l=t(424);t.d(a,"DocHeading",function(){return l.default});var c=t(425);t.d(a,"DocToc",function(){return c.default});var o=t(419);t.d(a,"DeprecatedComponentAlert",function(){return o.default});var i=t(420);t.d(a,"ExperimentalComponentAlert",function(){return i.default});var s=t(421);t.d(a,"Icon",function(){return s.default});var m=t(422);t.d(a,"PxScript",function(){return m.default})},480:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),r=t(426),l=t(2),c=t.n(l),o=t(115),s=t.n(o),m=function(e){var a=e.size,t=e.imgUrl,n=e.icon,r=e.heading,l=e.text,c=e.mediaRight,o=s()("media",c?"media-right":null,a?"media-".concat(a):null);return i.a.createElement("div",{className:o},t||n?i.a.createElement("div",{className:"media-img"},"\n",t?i.a.createElement("img",{src:t}):null,t?"\n":null,n?i.a.createElement("i",{className:"material-icons"},n):null,n?"\n":null):null,i.a.createElement("div",{className:"media-body"},function(){switch(a){case"sm":return i.a.createElement("h4",null,r);case"lg":return i.a.createElement("h2",null,r);default:return i.a.createElement("h3",null,r)}}(),i.a.createElement("p",null,l)))};m.propTypes={size:c.a.oneOf(["sm","lg"]),imgUrl:c.a.string,icon:c.a.string,heading:c.a.string.isRequired,text:c.a.string.isRequired,mediaRight:c.a.bool};var u=m;t.d(a,"Overview",function(){return d}),t.d(a,"MediaPosition",function(){return E}),t.d(a,"MediaObjectText",function(){return g});var d=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"overview"},"Overview"),i.a.createElement("p",null,"Use the ",i.a.createElement(r.Property,{value:".media"})," class on an object to style it as a small container that feature a left- or right-aligned image/icon alongside textual content."),i.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(u,{imgUrl:"https://via.placeholder.com/48x48",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"}),i.a.createElement(u,{icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"})))},p=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"sizes"},"Sizes"),i.a.createElement("p",null,"Sizes for media object..."),i.a.createElement("h3",null,"Small"),i.a.createElement("p",null,"Small media object ",i.a.createElement(r.Property,{value:".media-sm"}),"..."),i.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(u,{size:"sm",imgUrl:"https://via.placeholder.com/40x40",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"}),i.a.createElement(u,{size:"sm",icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"})),i.a.createElement("h3",null,"Large"),i.a.createElement("p",null,"Large media object ",i.a.createElement(r.Property,{value:".media-lg"}),"..."),i.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(u,{size:"lg",imgUrl:"https://via.placeholder.com/56x56",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"}),i.a.createElement(u,{size:"lg",icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"})))},E=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"media-position"},"Media position"),i.a.createElement("p",null,"Use the ",i.a.createElement(r.Property,{value:".media-right"})," class to align the media content to the right."),i.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(u,{mediaRight:!0,imgUrl:"https://via.placeholder.com/48x48",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"}),i.a.createElement(u,{mediaRight:!0,icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com"})))},g=function(){return i.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},i.a.createElement("p",{className:"lead"},"Media objects..."),i.a.createElement(d,null),i.a.createElement(p,null),i.a.createElement(E,null))};a.default=function(){return i.a.createElement("div",{className:"doc-container"},i.a.createElement("div",{className:"row"},i.a.createElement(g,null),i.a.createElement(r.DocToc,{component:g})))}}}]);
//# sourceMappingURL=doc-route.chunk_11.js.map?a91c3b8e00bd85429aea