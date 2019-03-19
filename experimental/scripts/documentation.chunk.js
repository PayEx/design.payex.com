(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[61],{354:function(t,e,o){"use strict";o.r(e);var n=o(0),i=o.n(n),s=o(342);e.default=Object(s.a)(function(t){var e=t.location.pathname.split("/").filter(function(t){return t.length}).pop().split("-").map(function(t,e){return 0<e?t:t.charAt(0).toUpperCase()+t.substr(1)}).join(" ");return document.title="".concat(e," | PayEx DesignGuide"),i.a.createElement("h2",{className:"h1"},e)})},356:function(t,e,o){"use strict";var n=o(0),i=o.n(n),s=o(2),a=o.n(s),r=o(20),c=o.n(r),p=o(13),l=o.n(p),u=o(109),d=o(357),m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};var h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},e.prototype.componentWillMount=function(){l()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},e.prototype.componentDidMount=function(){this.isStatic()||this.perform()},e.prototype.componentDidUpdate=function(t){var e=Object(u.c)(t.to),o=Object(u.c)(this.props.to);Object(u.f)(e,o)?c()(!1,"You tried to redirect to the same route you're currently on: \""+o.pathname+o.search+'"'):this.perform()},e.prototype.computeTo=function(t){var e=t.computedMatch,o=t.to;return e?"string"==typeof o?Object(d.a)(o,e.params):m({},o,{pathname:Object(d.a)(o.pathname,e.params)}):o},e.prototype.perform=function(){var t=this.context.router.history,e=this.props.push,o=this.computeTo(this.props);e?t.push(o):t.replace(o)},e.prototype.render=function(){return null},e}(i.a.Component);h.propTypes={computedMatch:a.a.object,push:a.a.bool,from:a.a.string,to:a.a.oneOfType([a.a.string,a.a.object]).isRequired},h.defaultProps={push:!1},h.contextTypes={router:a.a.shape({history:a.a.shape({push:a.a.func.isRequired,replace:a.a.func.isRequired}).isRequired,staticContext:a.a.object}).isRequired};var f=h;e.a=f},357:function(t,e,o){"use strict";var n=o(145),i=o.n(n),s={},a=0;e.a=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"/",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return"/"===t?t:function(t){var e=t,o=s[e]||(s[e]={});if(o[t])return o[t];var n=i.a.compile(t);return a<1e4&&(o[t]=n,a++),n}(t)(e,{pretty:!0})}},367:function(t,e){t.exports=[{title:"Getting Started",path:"/docs/getting-started",redirect:"/docs/getting-started/introduction",routes:[{title:"Introduction",path:"/docs/getting-started/introduction",componentPath:"getting-started/Introduction"},{title:"Browser Support",path:"/docs/getting-started/browser-support",componentPath:"getting-started/BrowserSupport"},{title:"Contributing",path:"/docs/getting-started/contributing",componentPath:"getting-started/Contributing"}]},{title:"Core",path:"/docs/core",redirect:"/docs/core/breakpoints",routes:[{title:"Breakpoints",path:"/docs/core/breakpoints",componentPath:"core/Breakpoints"},{title:"Color",path:"/docs/core/color",componentPath:"core/Color"},{title:"Favicons",path:"/docs/core/favicons",componentPath:"core/Favicons"},{title:"Grid",path:"/docs/core/grid",componentPath:"core/Grid"},{title:"Iconography",path:"/docs/core/iconography",componentPath:"core/Iconography"},{title:"Lists",path:"/docs/core/lists",componentPath:"core/Lists"},{title:"Tables",path:"/docs/core/tables",componentPath:"core/Tables"},{title:"Typography",path:"/docs/core/typography",componentPath:"core/Typography"}]},{title:"Components",path:"/docs/components",redirect:"/docs/components/action-list",routes:[{title:"Accordion",path:"/docs/components/accordion",componentPath:"components/Accordion"},{title:"Action Link",path:"/docs/components/action-link",componentPath:"components/ActionLink"},{title:"Action List",path:"/docs/components/action-list",componentPath:"components/ActionList"},{title:"Alerts",path:"/docs/components/alerts",componentPath:"components/Alerts"},{title:"Badge",path:"/docs/components/badge",componentPath:"components/Badge"},{title:"Breadcrumb",path:"/docs/components/breadcrumb",componentPath:"components/Breadcrumb"},{title:"Buttons",path:"/docs/components/buttons",componentPath:"components/Buttons"},{title:"Card",path:"/docs/components/card",componentPath:"components/Card"},{title:"Datepickers",path:"/docs/components/datepickers",componentPath:"components/Datepickers"},{title:"Dialog",path:"/docs/components/dialog",componentPath:"components/Dialog"},{title:"Forms",path:"/docs/components/forms",componentPath:"components/Forms"},{title:"Input Group",path:"/docs/components/input-group",componentPath:"components/InputGroup"},{title:"Loaders",path:"/docs/components/loaders",componentPath:"components/Loaders"},{title:"Media Object",path:"/docs/components/media-object",componentPath:"components/MediaObject"},{title:"Nav",path:"/docs/components/nav",componentPath:"components/Nav"},{title:"Pagination",path:"/docs/components/pagination",componentPath:"components/Pagination"},{title:"Panel",path:"/docs/components/panel",componentPath:"components/Panel"},{title:"Sheet",path:"/docs/components/sheet",componentPath:"components/Sheet"},{title:"Slab",path:"/docs/components/slab",componentPath:"components/Slab"},{title:"Status",path:"/docs/components/status",componentPath:"components/Status"},{title:"Steps",path:"/docs/components/steps",componentPath:"components/Steps"},{title:"Tabs",path:"/docs/components/tabs",componentPath:"components/Tabs"},{title:"Toast",path:"/docs/components/toast",componentPath:"components/Toast"},{title:"Tooltips",path:"/docs/components/tooltips",componentPath:"components/Tooltips"},{title:"Topbar",path:"/docs/components/topbar",componentPath:"components/Topbar"}]},{title:"Dashboard",path:"/docs/dashboard",redirect:"/docs/dashboard/introduction",routes:[{title:"Introduction",path:"/docs/dashboard/introduction",componentPath:"dashboard/Introduction"},{title:"Charts",path:"/docs/dashboard/charts",componentPath:"dashboard/Charts"}]},{title:"Utilities",path:"/docs/utilities",redirect:"/docs/utilities/colors",routes:[{title:"Colors",path:"/docs/utilities/colors",componentPath:"utilities/Colors"},{title:"Display",path:"/docs/utilities/display",componentPath:"utilities/Display"},{title:"Flex",path:"/docs/utilities/flex",componentPath:"utilities/Flex"},{title:"Images",path:"/docs/utilities/images",componentPath:"utilities/Images"},{title:"Sizing",path:"/docs/utilities/sizing",componentPath:"utilities/Sizing"},{title:"Spacing",path:"/docs/utilities/spacing",componentPath:"utilities/Spacing"},{title:"Text",path:"/docs/utilities/text",componentPath:"utilities/Text"},{title:"Visibility",path:"/docs/utilities/visibility",componentPath:"utilities/Visibility"}]}]},368:function(t,e,i){"use strict";i.r(e);var o=i(0),s=i.n(o),n=i(2),a=i.n(n),r=i(343),c=i(110),p=i(356),l=i(52),u=i.n(l),d=i(51),m=function(t){var e=t.path,o=t.redirect,n=t.routes;return s.a.createElement(r.a,null,s.a.createElement(c.a,{exact:!0,path:e,render:function(){return s.a.createElement(p.a,{to:o})}}),n.map(function(t){var e=t.path,o=t.componentPath,n=u()({loader:function(){return i(370)("./".concat(o,"/index.js"))},loading:d.a});return s.a.createElement(c.a,{key:"doc_route_".concat(e),exact:!0,path:e,render:function(){return s.a.createElement(n,null)}})}),s.a.createElement(p.a,{from:"".concat(e,"/*"),to:"/404"}))};m.propTypes={path:a.a.string.isRequired,redirect:a.a.string.isRequired,routes:a.a.array.isRequired},e.default=m},370:function(t,e,n){var i={"./components/Accordion/index.js":[418,0,7],"./components/ActionLink/index.js":[375,0,8],"./components/ActionList/index.js":[376,0,19],"./components/Alerts/index.js":[377,0,1,30],"./components/Badge/index.js":[379,0,41],"./components/Breadcrumb/index.js":[427,0,1,51],"./components/Buttons/index.js":[380,0,1,56],"./components/Card/index.js":[417,0,2,57],"./components/Datepickers/index.js":[381,0,58],"./components/Dialog/index.js":[382,0,59],"./components/Forms/index.js":[383,0,1,9],"./components/InputGroup/index.js":[384,0,1,10],"./components/Loaders/index.js":[385,0,11],"./components/MediaObject/index.js":[386,0,2,12],"./components/Nav/index.js":[422,0,1,13],"./components/Pagination/index.js":[423,0,1,14],"./components/Panel/index.js":[424,0,1,15],"./components/Sheet/index.js":[387,0,16],"./components/Slab/index.js":[388,0,17],"./components/Status/index.js":[389,0,18],"./components/Steps/index.js":[426,0,1,20],"./components/Tabs/index.js":[425,0,1,21],"./components/Toast/index.js":[390,0,22],"./components/Tooltips/index.js":[391,0,23],"./components/Topbar/index.js":[392,0,1,24],"./core/Breakpoints/index.js":[393,0,25],"./core/Color/index.js":[421,0,26],"./core/Favicons/index.js":[394,0,1,27],"./core/Grid/index.js":[395,0,28],"./core/Iconography/index.js":[420,0,1,29],"./core/Lists/index.js":[396,0,31],"./core/Tables/index.js":[397,0,32],"./core/Typography/index.js":[398,0,1,33],"./dashboard/Charts/index.js":[419,0,69,34],"./dashboard/Introduction/index.js":[399,0,1,35],"./getting-started/BrowserSupport/index.js":[400,0,36],"./getting-started/Contributing/index.js":[407,0,1,37],"./getting-started/Introduction/index.js":[408,0,1,38],"./utilities/Colors/index.js":[409,0,1,39],"./utilities/Display/index.js":[410,0,40],"./utilities/Flex/index.js":[411,0,42],"./utilities/Images/index.js":[412,0,43],"./utilities/Sizing/index.js":[413,0,44],"./utilities/Spacing/index.js":[414,0,45],"./utilities/Text/index.js":[415,0,46],"./utilities/Visibility/index.js":[416,0,47],"./utils/Attribute/index.js":[344,48],"./utils/ComponentPreview/index.js":[347,0,49],"./utils/DeprecatedComponentAlert/index.js":[349,50],"./utils/DocContainer/index.js":[353,0,3],"./utils/DocHeading/index.js":[354],"./utils/DocToc/index.js":[348,52],"./utils/ExperimentalComponentAlert/index.js":[350,53],"./utils/Icon/index.js":[351,54],"./utils/PxScript/index.js":[352,55],"./utils/RenderRoutes/index.js":[368],"./utils/index.js":[345,0,3]};function o(e){if(!n.o(i,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=i[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then(function(){return n(o)})}o.keys=function(){return Object.keys(i)},o.id=370,t.exports=o},432:function(t,e,o){"use strict";o.r(e);var s=o(0),a=o.n(s),n=o(343),i=o(110),r=o(356),c=o(341),p=o(342),l=o(2),u=o.n(l),d=o(74);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var g=function(t){function i(t){var e,o,n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o=this,(e=!(n=f(i).call(this,t))||"object"!==m(n)&&"function"!=typeof n?y(o):n).state={query:"",results:[],showResults:!1},e.getResults=e.getResults.bind(y(e)),e.closeResults=e.closeResults.bind(y(e)),e.handleInputChange=e.handleInputChange.bind(y(e)),e}var e,o,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(i,s["Component"]),e=i,(o=[{key:"getResults",value:function(e){var o=[];e&&(this.props.routes.forEach(function(t){t.routes.forEach(function(t){t.title.toLowerCase().includes(e.toLowerCase())&&o.push(t)})}),this.setState({showResults:!0})),this.setState({results:o})}},{key:"closeResults",value:function(t){("keydown"===t.type&&"Escape"===t.key||"click"===t.type&&!t.target.closest(".doc-search"))&&this.setState({showResults:!1})}},{key:"handleInputChange",value:function(t){this.getResults(t.target.value)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.closeResults),document.removeEventListener("click",this.closeResults)}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.closeResults),document.addEventListener("click",this.closeResults)}},{key:"render",value:function(){var i=this;return a.a.createElement("form",{className:"doc-search"},a.a.createElement("input",{type:"text",className:"form-control",name:"designguide-search",placeholder:"Search...",autoComplete:"off",onChange:this.handleInputChange,onFocus:function(){return i.setState({showResults:!0})}}),this.state.results.length?a.a.createElement("ul",{className:"search-results ".concat(this.state.showResults?"d-block":null)},this.state.results.map(function(t,e){var o=t.path,n=t.title;return a.a.createElement("li",{className:"search-result",key:"search_result_".concat(e)},a.a.createElement(d.a,{to:o,onClick:function(){return i.setState({showResults:!1})}},n))})):null)}}])&&h(e.prototype,o),n&&h(e,n),i}();g.propTypes={routes:u.a.array.isRequired};var v=g,j=o(367),x=o.n(j);function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function w(t,e){return!e||"object"!==P(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var S=function(t){function o(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(e=w(this,O(o).call(this,t))).state={isActive:t.location.pathname.includes(t.route.path)},e}var e,n,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(o,s["Component"]),e=o,(n=[{key:"toggleActive",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"shouldComponentUpdate",value:function(t,e){return this.state!==e}},{key:"render",value:function(){var t=this,e=this.props.route,o=e.title,n=e.routes;return a.a.createElement("div",{className:"nav-group".concat(this.state.isActive?" active":"")},a.a.createElement("div",{className:"nav-heading"},a.a.createElement("i",{className:"material-icons",onClick:function(){return t.toggleActive()}},"keyboard_arrow_right"),a.a.createElement("span",{onClick:function(){return t.toggleActive()}},o)),a.a.createElement("ul",null,n.map(function(t,e){return a.a.createElement("li",{key:"nav_link_".concat(e)},a.a.createElement(c.a,{activeClassName:"active",to:t.path},t.title))})))}}])&&E(e.prototype,n),i&&E(e,i),o}(),C=Object(p.a)(function(){return a.a.createElement("div",{className:"doc-sidebar"},a.a.createElement(v,{routes:x.a}),a.a.createElement("nav",{className:"documentation-nav"},x.a.map(function(t,e){var o=Object(p.a)(S);return a.a.createElement(o,{key:"nav_group_".concat(e),route:t})})))}),T=o(354),R=o(368);function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}e.default=function(){return a.a.createElement("div",{className:"documentation"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"sidebar-heading col-xxl-2 col-md-3"},a.a.createElement("h1",null,"DesignGuide")),a.a.createElement("div",{className:"view-heading col-xxl-10 col-md-9"},a.a.createElement(T.default,null))),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-xxl-2 col-md-3 p-0"},a.a.createElement(C,null)),a.a.createElement("main",{className:"doc-view col-xxl-10 col-md-9"},a.a.createElement(n.a,null,a.a.createElement(i.a,{exact:!0,path:"/docs",render:function(){return a.a.createElement(r.a,{to:"/docs/getting-started"})}}),x.a.map(function(t){return a.a.createElement(R.default,_({key:"renderRoutes_".concat(t.title)},t))}),a.a.createElement(r.a,{from:"/docs/*",to:"/404"})))))}}}]);
//# sourceMappingURL=documentation.chunk.js.map?720bec18619f63aade74