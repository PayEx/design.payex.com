(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[26,3,44,45,46,47,48,49,51],{421:function(e,a,t){"use strict";t.r(a),t.d(a,"Property",function(){return i});var n=t(1),l=t.n(n),r=t(2),c=t.n(r),i=function(e){var a=e.value;return l.a.createElement("code",{className:"token property"},a)},o=function(e){var a=e.data,t=e.name,n=e.value;return t&&n?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},t),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):t&&!n?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},t)):!t&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};o.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},i.propTypes={value:c.a.string.isRequired},a.default=o},422:function(e,a,t){"use strict";var n=t(1),i=t.n(n),l=t(2),r=t.n(l),c=function(e){var a=e.id,t=e.type,n=e.icon,l=e.close,r=e.text,c=e.children;return i.a.createElement("div",{id:a,className:"alert alert-".concat(t)},n?"\n":"",n?i.a.createElement("i",{className:"material-icons alert-icon"},n):null,r?"\n":"",r?i.a.createElement("p",null,r):null,c?"\n":"",c?i.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?i.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",i.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},a.a=c},423:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(422);a.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(422);a.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(2),c=function(e){var a=e.icon;return l.a.createElement("i",{className:"material-icons"},a)};c.propTypes={icon:t.n(r).a.string.isRequired},a.default=c},426:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),l=t(2),r=t.n(l),c=function(e){var a,t,n=e.component,l=e.subComponents,r=e.func,c=e.params;return l&&(t=l.map(function(e,a){return i.a.createElement("span",{key:a},e,i.a.createElement("span",{className:"token punctuation"},"."))})),c&&(a=c.map(function(e,a){return i.a.createElement("span",{key:a},e,a<c.length-1?i.a.createElement("span",{className:"token punctuation"},", "):null)})),i.a.createElement("code",null,i.a.createElement("span",null,"px"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",null,n),i.a.createElement("span",{className:"token punctuation"},"."),t,i.a.createElement("span",{className:"token function"},r),i.a.createElement("span",{className:"token punctuation"},"("),a,i.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},a.default=c},427:function(e,a,t){"use strict";t.r(a);var n=t(1),p=t.n(n),l=t(2),r=t.n(l),m=t(431),c=t(432),d=t.n(c),h=t(433);function f(){return(f=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e){var n=e.children,l=e.language,r=e.removeOuterTag,c=e.hideValue,i=e.removeList,a=e.showCasePanel,t=e.codeFigure,o=e.dangerousHTML,u=function(e){var a=document.createElement("div");return a.innerHTML=Object(m.renderToStaticMarkup)(e),a.firstElementChild?a.firstElementChild.innerHTML:a.firstChild?a.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var a=document.createElement("div");a.innerHTML=Object(m.renderToStaticMarkup)(e);var t=a.querySelectorAll("li"),n="";return t.forEach(function(e){n+="".concat(e.innerHTML," \n")}),n};return p.a.createElement(p.a.Fragment,null,a?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},n)},null):null,t?p.a.createElement(function(){var e,a,t="";if("html"===l&&o)a="","function"==typeof(e=n).forEach?e.forEach(function(e){return a+="".concat(e,"\n")}):a=e,t=a;else if("html"===l&&n&&"function"==typeof n.map)n.map(function(e){t+=r?u(e):i?s(e):Object(m.renderToStaticMarkup)(e)});else if("html"===l)t+=r?u(n):i?s(n):Object(m.renderToStaticMarkup)(n);else switch(g(n)){case"string":t=n;break;case"object":n.forEach(function(e){return t+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(l){case"html":t=(t=d.a.html_beautify(t)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),c&&(t=t.replace(/ value="(.*)"/g,""));break;case"css":t=d.a.css(t);break;case"javascript":break;default:return"update switchcase!"}return h.b.style="",p.a.createElement("figure",null,p.a.createElement(h.a,f({},h.b,{theme:void 0,code:t,language:l}),function(e){var a=e.className,t=e.style,n=e.tokens,l=e.getLineProps,r=e.getTokenProps;return p.a.createElement("pre",{className:a,style:t},n.map(function(e,a){return p.a.createElement("div",f({key:e+a},l({line:e,key:a})),e.map(function(e,a){return p.a.createElement("span",f({key:a},r({token:e,key:a})))}))}))}))},null):null)};i.propTypes={language:r.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:r.a.bool,hideValue:r.a.bool,removeList:r.a.bool,showCasePanel:r.a.bool,codeFigure:r.a.bool,dangerousHTML:r.a.bool},a.default=i},430:function(e,a,t){"use strict";t.r(a);var n=t(421);t.d(a,"Attribute",function(){return n.default}),t.d(a,"Property",function(){return n.Property});var l=t(427);t.d(a,"ComponentPreview",function(){return l.default});var r=t(428);t.d(a,"DocHeading",function(){return r.default});var c=t(429);t.d(a,"DocToc",function(){return c.default});var i=t(423);t.d(a,"DeprecatedComponentAlert",function(){return i.default});var o=t(424);t.d(a,"ExperimentalComponentAlert",function(){return o.default});var u=t(425);t.d(a,"Icon",function(){return u.default});var s=t(426);t.d(a,"PxScript",function(){return s.default})},436:function(e,a,t){"use strict";var n=t(1),x=t.n(n),l=t(2),r=t.n(l),c=t(186),y=t.n(c);function k(){return(k=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var i=function(e){var a=e.label,t=e.id,n=e.name,l=e.value,r=e.href,c=e.icon,i=e.loading,o=e.type,u=e.disabled,s=e.btnType,p=e.fullWidth,m=e.loader,d=e.pullRight,h=e.input,f=e.outline,g=e.active,E=e.size,v=y()("btn","btn-".concat(f?"outline-":"").concat(o),E?"btn-".concat(E):null,i?"loading":null,p?"btn-block":null,d?"pull-right":null,g&&r?"active":null,u&&r?"disabled":null),b={href:r,id:t,name:n,defaultValue:l,disabled:r?null:u,"data-button-loader":m?"":null,active:g&&!r?"":null,role:r?"button":null,type:r?null:s||"button","aria-pressed":!!g||null,"aria-disabled":!(!r||!u)||null,tabIndex:r&&u?"-1":null};return r?x.a.createElement("a",k({className:v},b),c?"\n\t":null,c?x.a.createElement("i",{className:"material-icons"},c):null,c&&a?x.a.createElement("span",null,a):a):h?x.a.createElement("input",k({className:v},b)):x.a.createElement("button",k({className:v},b),c?"\n\t\t":null,c?x.a.createElement(x.a.Fragment,null,x.a.createElement("i",{className:"material-icons"},c),"\n\t\t"):null,a,c?"\n\t":null)};i.propTypes={type:r.a.oneOf(["primary","secondary","danger","link"]).isRequired,label:r.a.string,id:r.a.string,name:r.a.string,value:r.a.string,href:r.a.string,icon:r.a.string,loading:r.a.bool,disabled:r.a.bool,btnType:r.a.string,fullWidth:r.a.bool,loader:r.a.bool,pullRight:r.a.bool,input:r.a.bool,outline:r.a.bool,active:r.a.bool,size:r.a.oneOf(["lg","sm","xs"])},a.a=i},468:function(e,a,t){"use strict";t.r(a),t.d(a,"OurFavicon",function(){return s}),t.d(a,"Usage",function(){return p}),t.d(a,"FaviconsText",function(){return m});var n=t(1),l=t.n(n),r=t(434),c=t.n(r),i=t(430),o=t(436),u="/tests/documentation-shallow-rendering/",s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"our-favicon"},"Our favicon"),l.a.createElement("p",null,"Our favicon..."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("img",{src:"".concat(u,"icons/android-chrome-96x96.png"),alt:"PayEx favicon"})))},p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"usage"},"Usage"),l.a.createElement("p",null,"To use our favicons download the zip-file below and extract it to the root of your build-folder. Insert the code below in the ",l.a.createElement(c.a,{className:"language-html"},"<head>")," tag of your html documents and you are ready to go."),l.a.createElement("p",null,"You should also rename the ",l.a.createElement(i.Attribute,{name:"content"})," of the ",l.a.createElement(i.Attribute,{value:"apple-mobile-web-app-title"})," and ",l.a.createElement(i.Attribute,{value:"application-name"})," ",l.a.createElement(c.a,{className:"language-html"},"<meta>")," tags to reflect the title of your project. Make sure to also do this in the ",l.a.createElement(i.Property,{value:"manifest.json"})," file in the icons folder."),l.a.createElement(o.a,{type:"primary",icon:"file_download",href:"".concat(u,"release/icons.zip"),label:"Download Favicons"}),l.a.createElement(i.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/icons/apple-touch-icon-114x114.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/icons/apple-touch-icon-120x120.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/icons/apple-touch-icon-144x144.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/icons/apple-touch-icon-152x152.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/icons/apple-touch-icon-180x180.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/icons/apple-touch-icon-57x57.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/icons/apple-touch-icon-60x60.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/icons/apple-touch-icon-72x72.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/icons/apple-touch-icon-76x76.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)",href:"/icons/apple-touch-startup-image-320x460.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-640x920.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-640x1096.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-750x1294.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)",href:"/icons/apple-touch-startup-image-1182x2208.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)",href:"/icons/apple-touch-startup-image-1242x2148.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)",href:"/icons/apple-touch-startup-image-748x1024.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-1496x2048.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)",href:"/icons/apple-touch-startup-image-768x1004.png"}),l.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-1536x2008.png"}),l.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/icons/favicon-16x16.png"}),l.a.createElement("link",{rel:"icon",type:"image/png",sizes:"228x228",href:"/icons/coast-228x228.png"}),l.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/icons/favicon-32x32.png"}),l.a.createElement("link",{rel:"manifest",href:"/icons/manifest.json"}),l.a.createElement("link",{rel:"shortcut icon",href:"/icons/favicon.ico"}),l.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),l.a.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),l.a.createElement("meta",{name:"apple-mobile-web-app-title",content:"PayEx App"}),l.a.createElement("meta",{name:"application-name",content:"PayEx App"}),l.a.createElement("meta",{name:"mobile-web-app-capable",content:"yes"}),l.a.createElement("meta",{name:"msapplication-TileColor",content:"#000"}),l.a.createElement("meta",{name:"msapplication-TileImage",content:"/icons/mstile-144x144.png"}),l.a.createElement("meta",{name:"msapplication-config",content:"/icons/browserconfig.xml"}),l.a.createElement("meta",{name:"theme-color",content:"#000"})))},m=function(){return l.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},l.a.createElement("p",{className:"lead"},"The PayEx favicon..."),l.a.createElement(s,null),l.a.createElement(p,null))};a.default=function(){return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(m,null),l.a.createElement(i.DocToc,{component:m})))}}}]);
//# sourceMappingURL=doc-route.chunk_25.js.map?5ccd038298ee5aa046cc