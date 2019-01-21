(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[13],{477:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(416),l=n.n(a),o=n(400),c=n(2),u=n.n(c),i=n(120),f=n.n(i),m=function(e){var t=e.title,n=e.subTitle,a=e.id,l=e.type,r=e.removeBottomPadding,o=e.removeAllPadding,c=e.halfPadding,u=e.darkMode,i=e.bodyContent,m=e.panelTable,d=e.footerText,p=f()("panel",l?"panel-".concat(l):"panel-default",r?"panel-bottomless":null,o?"panel-no-padding":null,c?"panel-half-padding":null,u?"panel-dark":null);return s.a.createElement("section",{className:p,id:a},t?s.a.createElement("header",null,s.a.createElement("h2",{className:"panel-title"},t),n?s.a.createElement("p",{className:"panel-sub-title"},n):null):null,i?s.a.createElement("div",{className:"panel-body"},i.map(function(e,t){return s.a.createElement("p",{key:t},e)})):null,m?s.a.createElement("div",{className:"panel-table"},m()):null,d?s.a.createElement("footer",null,s.a.createElement("p",null,d)):null)};m.propTypes={title:u.a.string,subTitle:u.a.string,id:u.a.string,type:u.a.oneOf(["brand","default","muted",""]),halfPadding:u.a.bool,removeAllPadding:u.a.bool,removeBottomPadding:u.a.bool,darkMode:u.a.bool,bodyContent:u.a.array,footerText:u.a.string};var d=m;function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function E(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"Overview",function(){return P}),n.d(t,"PanelHeaders",function(){return v}),n.d(t,"PanelDark",function(){return T}),n.d(t,"PanelMuted",function(){return C}),n.d(t,"PanelTable",function(){return F}),n.d(t,"TableContent",function(){return w});var g=["Your main panel content is put here.","Some more content over here.","And one more line, just to be safe."],w=function(){return s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"First Name"),s.a.createElement("th",{scope:"col"},"Last Name"),s.a.createElement("th",{scope:"col"},"Location"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},"1"),s.a.createElement("td",null,"Sven"),s.a.createElement("td",null,"Svensson"),s.a.createElement("td",null,"Visby")),s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},"2"),s.a.createElement("td",null,"Sara"),s.a.createElement("td",null,"Svensson"),s.a.createElement("td",null,"Stockholm")),s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},"3"),s.a.createElement("td",null,"Ola"),s.a.createElement("td",null,"Nordmann"),s.a.createElement("td",null,"Oslo")),s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},"4"),s.a.createElement("td",null,"Holger"),s.a.createElement("td",null,"Danske"),s.a.createElement("td",null,"Copenhagen")),s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},"5"),s.a.createElement("td",null,"Matti"),s.a.createElement("td",null,"Meikäläinen"),s.a.createElement("td",null,"Lahti"))))},P=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"overview"},"Overview"),s.a.createElement("p",null,"A panel consists of three parts: A header, a body and a footer. You can mostly put whatever you want in any of these, but try not to put too much in the header and footer as these are meant to contain short and concise information about the body content."),s.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},s.a.createElement(d,{title:"Panel title",subTitle:"Panel subtitle",footerText:"Footer content goes here.",footerBtnText:"Footer button",bodyContent:g})))},v=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"panel-headers"},"Panel headers"),s.a.createElement("p",null,"You can pick between two different panel headers, brand color with white text and white with green text. add ",s.a.createElement(o.Property,{value:".panel-default"})," or ",s.a.createElement(o.Property,{value:".panel-brand"})," to the header to use one of them."),s.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},s.a.createElement(d,{title:"Default panel"}),"\n\n",s.a.createElement(d,{type:"brand",title:"Panel brand"})))},T=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"panel-dark-mode"},"Panel dark mode"),s.a.createElement("p",null,"Dark body with ",s.a.createElement(o.Property,{value:".panel-dark"}),"..."),s.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},s.a.createElement(d,{type:"brand",title:"Panel title",subTitle:"Panel subtitle",bodyContent:g,footerText:"Footer content goes here.",footerBtnText:"Footer button",darkMode:!0})))},C=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"muted-panel"},"Muted panel"),s.a.createElement("p",null,"If you wish to use a completely gray panel you can add ",s.a.createElement(o.Property,{value:".panel-muted"})," to the panel ",s.a.createElement(l.a,{className:"language-html"},"<section>"),"."),s.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},s.a.createElement(d,{type:"muted",title:"Panel title",subTitle:"Panel subtitle",bodyContent:g,footerText:"Footer content goes here.",footerBtnText:"Footer button"})))},F=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"panel-with-table"},"Displaying a full width table"),s.a.createElement("p",null,"To display a full width table in a panel use ",s.a.createElement(o.Property,{value:".panel-table"})," on a div wrapping the table. Put ",s.a.createElement(o.Property,{value:".panel-table"})," as a direct child of ",s.a.createElement(o.Property,{value:".panel"}),". Tables put in a panel are given a border bottom to seperate it from the following elements."),s.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},s.a.createElement(d,{type:"brand",title:"Panel title",subTitle:"Panel subtitle",bodyContent:g,footerText:"Footer content goes here.",footerBtnText:"Footer button",panelTable:w})))},k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,h(t).apply(this,arguments))}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return s.a.createElement(o.DocContainer,{docToc:!0},s.a.createElement("p",{className:"lead"},"Panels are large containers meant to be able to contain all of our other components."),s.a.createElement(P,null),s.a.createElement(v,null),s.a.createElement(T,null),s.a.createElement(C,null),s.a.createElement(F,null))}}])&&b(n.prototype,a),l&&b(n,l),t}();t.default=k}}]);
//# sourceMappingURL=doc-route.chunk_14.js.map?a3799d8987b3fcc73b43