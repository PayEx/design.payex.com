(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[35,3,44,45,46,47,48,49,51],{421:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return o});var n=a(1),r=a.n(n),l=a(2),c=a.n(l),o=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a)):!a&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};u.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},t.default=u},422:function(e,t,a){"use strict";var n=a(1),o=a.n(n),r=a(2),l=a.n(r),c=function(e){var t=e.id,a=e.type,n=e.icon,r=e.close,l=e.text,c=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?o.a.createElement("i",{className:"material-icons alert-icon"},n):null,l?"\n":"",l?o.a.createElement("p",null,l):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},423:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(422);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(422);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(2),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:a.n(l).a.string.isRequired},t.default=c},426:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(2),l=a.n(r),c=function(e){var t,a,n=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(a=r.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return o.a.createElement("span",{key:t},e,t<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,n),o.a.createElement("span",{className:"token punctuation"},"."),a,o.a.createElement("span",{className:"token function"},l),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},427:function(e,t,a){"use strict";a.r(t);var n=a(1),m=a.n(n),r=a(2),l=a.n(r),p=a(431),c=a(432),d=a.n(c),f=a(433);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){var n=e.children,r=e.language,l=e.removeOuterTag,c=e.hideValue,o=e.removeList,t=e.showCasePanel,a=e.codeFigure,u=e.dangerousHTML,s=function(e){var t=document.createElement("div");return t.innerHTML=Object(p.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},i=function(e){var t=document.createElement("div");t.innerHTML=Object(p.renderToStaticMarkup)(e);var a=t.querySelectorAll("li"),n="";return a.forEach(function(e){n+="".concat(e.innerHTML," \n")}),n};return m.a.createElement(m.a.Fragment,null,t?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},n)},null):null,a?m.a.createElement(function(){var e,t,a="";if("html"===r&&u)t="","function"==typeof(e=n).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,a=t;else if("html"===r&&n&&"function"==typeof n.map)n.map(function(e){a+=l?s(e):o?i(e):Object(p.renderToStaticMarkup)(e)});else if("html"===r)a+=l?s(n):o?i(n):Object(p.renderToStaticMarkup)(n);else switch(g(n)){case"string":a=n;break;case"object":n.forEach(function(e){return a+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":a=(a=d.a.html_beautify(a)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),c&&(a=a.replace(/ value="(.*)"/g,""));break;case"css":a=d.a.css(a);break;case"javascript":break;default:return"update switchcase!"}return f.b.style="",m.a.createElement("figure",null,m.a.createElement(f.a,E({},f.b,{theme:void 0,code:a,language:r}),function(e){var t=e.className,a=e.style,n=e.tokens,r=e.getLineProps,l=e.getTokenProps;return m.a.createElement("pre",{className:t,style:a},n.map(function(e,t){return m.a.createElement("div",E({key:e+t},r({line:e,key:t})),e.map(function(e,t){return m.a.createElement("span",E({key:t},l({token:e,key:t})))}))}))}))},null):null)};o.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=o},430:function(e,t,a){"use strict";a.r(t);var n=a(421);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var r=a(427);a.d(t,"ComponentPreview",function(){return r.default});var l=a(428);a.d(t,"DocHeading",function(){return l.default});var c=a(429);a.d(t,"DocToc",function(){return c.default});var o=a(423);a.d(t,"DeprecatedComponentAlert",function(){return o.default});var u=a(424);a.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=a(425);a.d(t,"Icon",function(){return s.default});var i=a(426);a.d(t,"PxScript",function(){return i.default})},475:function(e,t,a){"use strict";a.r(t),a.d(t,"QuickStart",function(){return m}),a.d(t,"Css",function(){return p}),a.d(t,"JavaScript",function(){return d}),a.d(t,"IntroductionText",function(){return f});var n=a(1),r=a.n(n),l=a(434),c=a.n(l),o=a(430),u="/fix/disabled_button_loader/",s="https://design.payex.com".concat(u,"scripts/px-script.js"),i="https://design.payex.com".concat(u,"styles/px.css"),m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"quick-start"},"Quick start"),r.a.createElement("p",null,"To quickly add the designguide to your project, include the snippets below in your project."))},p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"css"},"CSS"),r.a.createElement("p",null,"Copy-paste the stylesheet ",r.a.createElement(c.a,{className:"language-html"},"<link>")," into your ",r.a.createElement(c.a,{className:"language-html"},"<head>")," before all other stylesheets to load our CSS."),r.a.createElement(o.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement("link",{rel:"stylesheet",href:i})))},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"javascript"},"JavaScript"),r.a.createElement("p",null,"Many of our components require the use of JavaScript to function. Place the following ",r.a.createElement(c.a,{className:"language-html"},"<script>")," tag near the end of your pages, right before the closing ",r.a.createElement(c.a,{className:"language-html"},"</body>")," tag, to enable them."),r.a.createElement(o.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement("script",{src:s})))},f=function(){return r.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},r.a.createElement("p",{className:"lead"},"Get started with the PayEx DesignGuide."),r.a.createElement(m,null),r.a.createElement(p,null),r.a.createElement(d,null))};t.default=function(){return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(f,null),r.a.createElement(o.DocToc,{component:f})))}}}]);
//# sourceMappingURL=doc-route.chunk_33.js.map?51529a2c57f920eae750