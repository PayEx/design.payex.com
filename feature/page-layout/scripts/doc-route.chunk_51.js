(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[51],{375:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o.n(n),i=o(65),l=o.n(i),c=o(382);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function p(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(t){var e=[];return"function"==typeof t.map&&t.map(function(t){if("ExperimentalComponentAlert"!==t.type.name&&"function"==typeof t.type)if("h2"===t.type().props.children.type)e.push({title:t.type().props.children.props.children,id:t.type().props.children.props.id});else{var o=t.type().props.children[0];if("h2"===o.type)e.push({title:o.props.children,id:o.props.id});else if("function"==typeof o.type){var n=o.type().props.children[0];"h2"===n.type&&e.push({title:n.props.children,id:n.props.id})}}else"h2"===t.type&&e.push({title:t.props.children,id:t.props.id})}),e},y=function(t){function e(t){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(o=p(this,a(e).call(this,t))).state={headings:d(o.props.component().props.children),windowTopPosition:window.pageYOffset},o}var o,i,l;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,n["Component"]),o=e,(i=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(t){window.scrollTo({top:t.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(t,e){t.top=0===e?0:document.getElementById(t.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(e,o){if(e.id&&e.title){var n=t.state.windowTopPosition>=e.top&&t.state.windowTopPosition<t.state.headings[o+1].top;return r.a.createElement("li",{key:o,className:n?"active":""},r.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:t.scrollToElement},e.title))}}))))}}])&&u(o.prototype,i),l&&u(o,l),e}();y.propTypes={component:l.a.func.isRequired},e.default=y},382:function(t,e,o){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},i="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(t){return n(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)};e.genericHashLink=m,e.HashLink=b,e.NavHashLink=v;var l=u(o(1)),c=u(o(65)),s=o(96);function u(t){return t&&t.__esModule?t:{default:t}}var p="",a=null,f=null,d=null;function y(){p="",null!==a&&a.disconnect(),null!==f&&(window.clearTimeout(f),f=null)}function h(){var t=document.getElementById(p);return null!==t&&(d(t),y(),!0)}function m(t,e){t.scroll,t.smooth;var o=function(t,e){var o={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o}(t,["scroll","smooth"]);return l.default.createElement(e,r({},o,{onClick:function(e){y(),t.onClick&&t.onClick(e),"string"==typeof t.to?p=t.to.split("#").slice(1).join("#"):"object"===i(t.to)&&"string"==typeof t.to.hash&&(p=t.to.hash.replace("#","")),""!==p&&(d=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===h()&&(null===a&&(a=new MutationObserver(h)),a.observe(document,{attributes:!0,childList:!0,subtree:!0}),f=window.setTimeout(function(){y()},1e4))},0))}}),t.children)}function b(t){return m(t,s.Link)}function v(t){return m(t,s.NavLink)}var w={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};b.propTypes=w,v.propTypes=w}}]);
//# sourceMappingURL=doc-route.chunk_51.js.map?effa4681418c41c52fdc