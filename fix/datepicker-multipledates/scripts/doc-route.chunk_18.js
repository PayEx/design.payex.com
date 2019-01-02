(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[17],{510:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(448),l=n.n(a),o=n(432),c=n(2),s=n.n(c),u=n(154),p=n.n(u),m=[{title:"Step one",subtitle:"24.12.17 12:10",completed:!0},{title:"Step two",ongoing:!0},{title:"Step three",selected:!0},{title:"Step four"}],f=function(e){var t=e.completed,n=e.subtitle,a=e.title;return i.a.createElement(i.a.Fragment,null,t?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"material-icons steps-icon"},"check"),"\n"):null,a,n?i.a.createElement(i.a.Fragment,null,"\n",i.a.createElement("div",{className:"steps-sub-title"},n)):null)},d=function(e){var t=e.steps;return i.a.createElement(i.a.Fragment,null,t.map(function(e,t){var n=e.title,a=e.subtitle,l=e.completed,r=e.ongoing,o=e.selected,c=e.clickable;return i.a.createElement("li",{key:t,className:p()(l?"steps-completed":null,r?"steps-ongoing":null,o?"steps-selected":null)},c?i.a.createElement(i.a.Fragment,null,"\n"," ",i.a.createElement("a",null,i.a.createElement(f,{completed:l,subtitle:a,title:n}))," ","\n"," "):i.a.createElement(f,{completed:l,subtitle:a,title:n}))}))},E=function(e){var t=e.steps;if(!t)return null;var n=t.some(function(e){return e.clickable}),a=n?i.a.createElement("div",{className:"material-icons steps-nav-left"},"keyboard_arrow_left"):null,l=n?i.a.createElement("div",{className:"material-icons steps-nav-right"},"keyboard_arrow_right"):null;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"steps-responsive"},a,i.a.createElement("div",{className:"steps-responsive-text"},"Step 3"),l))},g=function(e){var t=e.steps,n=e.vertical,a=p()("steps",n?"steps-vertical":null);return i.a.createElement("div",{className:a},i.a.createElement("ol",null,t?i.a.createElement(d,{steps:t}):i.a.createElement(d,{steps:m})),i.a.createElement(E,{steps:t}))};g.propTypes={steps:s.a.array,vertical:s.a.bool,clickable:s.a.bool};var b=g;function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"BasicSteps",function(){return k}),n.d(t,"VerticalSteps",function(){return F}),n.d(t,"ClickableSteps",function(){return N});var k=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"basic-usage"},"Basic usage"),i.a.createElement("p",null,"The standard steps component will render horizontally and scale according to the size of its parent."),i.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(b,{steps:[{title:"Step one",subtitle:"24.12.17 12:10",completed:!0},{title:"Step two",ongoing:!0,selected:!0},{title:"Step three"},{title:"Step four"}]})))},F=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"vertical-steps"},"Vertical steps"),i.a.createElement("p",null,"If you wish to use steps vertically you can add ",i.a.createElement(o.Property,{value:".steps-vertical"})," to the ",i.a.createElement(l.a,{className:"language-html"},"<div>")," element."),i.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(b,{steps:[{title:"Step one",completed:!0},{title:"Step two",ongoing:!0,selected:!0},{title:"Step three"},{title:"Step four"}],vertical:!0})))},N=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"clickable-steps"},"Clickable steps"),i.a.createElement("p",null,"Add an anchor element (",i.a.createElement(l.a,{className:"language-html"},"<a>"),") to the list item element ( ",i.a.createElement(l.a,{className:"language-html"},"<li>"),"). Ensure that all content within the list element is also inside the anchor element."),i.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(b,{steps:[{title:"Step one",completed:!0,clickable:!0},{title:"Step two",ongoing:!0,clickable:!0},{title:"Step three",clickable:!0},{title:"Step four",selected:!0},{title:"Step Five"},{title:"Step Six"}]})))},P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,w(t).apply(this,arguments))}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return i.a.createElement(o.DocContainer,{docToc:!0},i.a.createElement("p",{className:"lead"},"Use steps to visualize the users progress through a process."),i.a.createElement(k,null),i.a.createElement(F,null),i.a.createElement(N,null))}}])&&v(n.prototype,a),l&&v(n,l),t}();t.default=P}}]);
//# sourceMappingURL=doc-route.chunk_18.js.map?703a437fe9ff3a641054