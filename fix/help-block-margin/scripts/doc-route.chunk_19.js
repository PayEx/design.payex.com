(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[18],{563:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(107),r=n(500),l=n.n(r),c=n(484),u=n(74),s=n(2),f=n.n(s);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=y(this,b(n).call(this,e))).state={active:1},t}var t,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(n,a["Component"]),t=n,(o=[{key:"setActive",value:function(e,t){e.preventDefault(),this.setState({active:t})}},{key:"render",value:function(){var n=this,e=this.props,t=e.mode,o=e.items;return i.a.createElement("div",{className:"tabs".concat(t?" tabs-horizontal-".concat(t):"")},"\n",i.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right"),i.a.createElement("ul",null,o.map(function(e,t){return i.a.createElement("li",{key:"tab-item-".concat(e,"-").concat(t),className:n.state.active===t?"active":null},"\n",i.a.createElement("a",{href:"#",onClick:function(e){return n.setActive(e,t)}},e),"\n")})))}}])&&m(t.prototype,o),r&&m(t,r),n}();h.propTypes={mode:f.a.oneOf(["xs","sm","md","lg","xl","xxl"]),items:f.a.array.isRequired};var v=h;function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"BasicUsage",function(){return j}),n.d(t,"Collapsed",function(){return k});var P=["Kort","Rabatter","Transaksjoner","Faktura","Instillinger","Audit trail"],j=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"basic-usage"},"Basic usage"),i.a.createElement("p",null,"Add class ",i.a.createElement(c.Property,{value:".tabs"})," with a ",i.a.createElement(c.Property,{value:".tabs-horizontal-desired_size"})," to a div containing an arrow icon along with ",i.a.createElement(l.a,{className:"language-html"},"<ul>")," and nest ",i.a.createElement(l.a,{className:"language-html"},"<li>")," as needed. The ",i.a.createElement(c.Property,{value:".tabs-horizontal-desired_size"})," class determines when your tabs will switch from horizontal to collapsed. The available sizes can be found in our ",i.a.createElement(o.a,{to:"/docs/core/breakpoints"},"breakpoints documentation"),"."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(v,{mode:"xl",items:P})))},k=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"collapsed"},"Collapsed"),i.a.createElement("p",null,"If no ",i.a.createElement(c.Property,{value:".tabs-horizontal-desired_size"})," is provided then the tabs will always be in collapsed mode."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement(v,{items:P})))},C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,O(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,a["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){u.tabs.init()}},{key:"render",value:function(){return i.a.createElement(c.DocContainer,{docToc:!0},i.a.createElement(c.ExperimentalComponentAlert,null),i.a.createElement("p",{className:"lead"},"Use tabs to show which page or section that is active out of several options."),i.a.createElement(j,null),i.a.createElement(k,null))}}])&&E(n.prototype,o),r&&E(n,r),t}();t.default=C}}]);
//# sourceMappingURL=doc-route.chunk_19.js.map?a93766869da12db34331