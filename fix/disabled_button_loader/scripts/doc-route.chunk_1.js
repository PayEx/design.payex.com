(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[9,3,44,45,46,47,48,49,51],{421:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return o});var a=n(1),r=n.n(a),l=n(2),c=n.n(l),o=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},t.default=i},422:function(e,t,n){"use strict";var a=n(1),o=n.n(a),r=n(2),l=n.n(r),c=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,c=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?o.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?o.a.createElement("p",null,l):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},423:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(422);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(422);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(2),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(l).a.string.isRequired},t.default=c},426:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(2),l=n.n(r),c=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(n=r.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return o.a.createElement("span",{key:t},e,t<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,a),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},l),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},427:function(e,t,n){"use strict";n.r(t);var a=n(1),m=n.n(a),r=n(2),l=n.n(r),p=n(431),c=n(432),d=n.n(c),f=n(433);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){var a=e.children,r=e.language,l=e.removeOuterTag,c=e.hideValue,o=e.removeList,t=e.showCasePanel,n=e.codeFigure,i=e.dangerousHTML,s=function(e){var t=document.createElement("div");return t.innerHTML=Object(p.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},u=function(e){var t=document.createElement("div");t.innerHTML=Object(p.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return m.a.createElement(m.a.Fragment,null,t?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?m.a.createElement(function(){var e,t,n="";if("html"===r&&i)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=l?s(e):o?u(e):Object(p.renderToStaticMarkup)(e)});else if("html"===r)n+=l?s(a):o?u(a):Object(p.renderToStaticMarkup)(a);else switch(E(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=d.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),c&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=d.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return f.b.style="",m.a.createElement("figure",null,m.a.createElement(f.a,h({},f.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,l=e.getTokenProps;return m.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return m.a.createElement("div",h({key:e+t},r({line:e,key:t})),e.map(function(e,t){return m.a.createElement("span",h({key:t},l({token:e,key:t})))}))}))}))},null):null)};o.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=o},430:function(e,t,n){"use strict";n.r(t);var a=n(421);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(427);n.d(t,"ComponentPreview",function(){return r.default});var l=n(428);n.d(t,"DocHeading",function(){return l.default});var c=n(429);n.d(t,"DocToc",function(){return c.default});var o=n(423);n.d(t,"DeprecatedComponentAlert",function(){return o.default});var i=n(424);n.d(t,"ExperimentalComponentAlert",function(){return i.default});var s=n(425);n.d(t,"Icon",function(){return s.default});var u=n(426);n.d(t,"PxScript",function(){return u.default})},452:function(e,t,n){"use strict";n.r(t),n.d(t,"BasicUsage",function(){return E}),n.d(t,"AlertWithIcon",function(){return y}),n.d(t,"ClosingTheAlert",function(){return g}),n.d(t,"ExtendedUsage",function(){return b}),n.d(t,"AlertsText",function(){return v});var l=n(1),c=n.n(l),a=n(183),r=n(434),o=n.n(r),i=n(430),s=n(422),u=n(67);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"basic-usage"},"Basic usage"),c.a.createElement("p",null,"The default behavior of the alert present itself in a box with a border."),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(s.a,{type:"default",text:"This is a default alert!"}),"\n\n",c.a.createElement(s.a,{type:"success",text:"This is a success alert!"}),"\n\n",c.a.createElement(s.a,{type:"neutral",text:"This is a neutral alert!"}),"\n\n",c.a.createElement(s.a,{type:"warning",text:"This is a warning alert!"}),"\n\n",c.a.createElement(s.a,{type:"danger",text:"This is a danger alert!"})))},y=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"icons"},"Icons"),c.a.createElement("p",null,"To use an alert with an icon... Read more about icon usage here ",c.a.createElement(a.a,{to:"/docs/core/icons"},"here"),"."),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(s.a,{type:"default",text:"This is a default alert with an icon!",icon:"info_outline"}),"\n\n",c.a.createElement(s.a,{type:"success",text:"This is a success alert with an icon!",icon:"check_circle"}),"\n\n",c.a.createElement(s.a,{type:"neutral",text:"This is a neutral alert with an icon!",icon:"info"}),"\n\n",c.a.createElement(s.a,{type:"warning",text:"This is a warning alert with an icon!",icon:"warning"}),"\n\n",c.a.createElement(s.a,{type:"danger",text:"This is a danger alert with an icon!",icon:"error"})))},g=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"closing-the-alert"},"Closing the alert"),c.a.createElement("p",null,"To add a close-button, add the following code inside your alert-element:",c.a.createElement("br",null),c.a.createElement(o.a,{className:"language-html"},'<a href="#" data-alert-close><i class="material-icons">close</i></a>')),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(s.a,{type:"default",text:"This is a default alert with an icon!",close:!0,icon:"info_outline"}),"\n\n",c.a.createElement(s.a,{type:"success",text:"This is a success alert with an icon!",close:!0,icon:"check_circle"}),"\n\n",c.a.createElement(s.a,{type:"neutral",text:"This is a neutral alert with an icon!",close:!0,icon:"info"}),"\n\n",c.a.createElement(s.a,{type:"warning",text:"This is a warning alert with an icon!",close:!0,icon:"warning"}),"\n\n",c.a.createElement(s.a,{type:"danger",text:"This is a danger alert with an icon!",close:!0,icon:"error"})),c.a.createElement("h3",null,"External close button"),c.a.createElement("p",null,"To add an external close-button for your alert add the attribute ",c.a.createElement(i.Attribute,{data:!0,name:"alert-close",value:"{id}"})," to the button element."),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(s.a,{id:"alert-success-1",type:"success",text:"Press the button below to close me",icon:"check_circle"}),"\n\n",c.a.createElement("button",{type:"button",className:"btn btn-primary","data-alert-close":"alert-success-1"},"Close alert")))},b=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"extended-usage"},"Extended usage"),c.a.createElement("p",null,"Alerts can also contain additional HTML elements like headings, paragraphs and dividers."),c.a.createElement("p",null,"Just make sure to wrap the content in a container with the class ",c.a.createElement(i.Property,{value:".alert-body"}),"."),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(s.a,{type:"success",close:!0,icon:"check_circle"},c.a.createElement("h3",{className:"color-success"},"Success!"),c.a.createElement("p",null,"PDF was successfully uploaded. ",c.a.createElement("br",null)," Some additional information."),c.a.createElement("hr",null),c.a.createElement("p",null,"By the way, great job!"))))},v=function(){return c.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},c.a.createElement("p",{className:"lead"},"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."),c.a.createElement(E,null),c.a.createElement(y,null),c.a.createElement(g,null),c.a.createElement(b,null))},w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,f(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,l["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){u.alert.init()}},{key:"render",value:function(){return c.a.createElement("div",{className:"doc-container"},c.a.createElement("div",{className:"row"},c.a.createElement(v,null),c.a.createElement(i.DocToc,{component:v})))}}])&&p(n.prototype,a),r&&p(n,r),t}();t.default=w}}]);
//# sourceMappingURL=doc-route.chunk_1.js.map?51529a2c57f920eae750