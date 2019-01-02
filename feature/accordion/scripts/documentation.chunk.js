(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[60],{441:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),s=n(429);e.default=Object(s.a)(function(t){var e,n=t.location,o=n.pathname.match(/[^/]*$/)[0].split("-").map(function(t,e){return 0<e?t:t.charAt(0).toUpperCase()+t.substr(1)}).join(" ");return e=o,document.title="".concat(e," | PayEx DesignGuide"),i.a.createElement("h2",{className:"h1"},o)})},443:function(t,e,n){"use strict";var o=n(1),i=n.n(o),s=n(2),a=n.n(s),r=n(28),c=n.n(r),p=n(19),l=n.n(p),u=n(151),d=n(444),m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};var h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},e.prototype.componentWillMount=function(){l()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},e.prototype.componentDidMount=function(){this.isStatic()||this.perform()},e.prototype.componentDidUpdate=function(t){var e=Object(u.c)(t.to),n=Object(u.c)(this.props.to);Object(u.f)(e,n)?c()(!1,"You tried to redirect to the same route you're currently on: \""+n.pathname+n.search+'"'):this.perform()},e.prototype.computeTo=function(t){var e=t.computedMatch,n=t.to;return e?"string"==typeof n?Object(d.a)(n,e.params):m({},n,{pathname:Object(d.a)(n.pathname,e.params)}):n},e.prototype.perform=function(){var t=this.context.router.history,e=this.props.push,n=this.computeTo(this.props);e?t.push(n):t.replace(n)},e.prototype.render=function(){return null},e}(i.a.Component);h.propTypes={computedMatch:a.a.object,push:a.a.bool,from:a.a.string,to:a.a.oneOfType([a.a.string,a.a.object]).isRequired},h.defaultProps={push:!1},h.contextTypes={router:a.a.shape({history:a.a.shape({push:a.a.func.isRequired,replace:a.a.func.isRequired}).isRequired,staticContext:a.a.object}).isRequired};var f=h;e.a=f},444:function(t,e,n){"use strict";var o=n(195),i=n.n(o),s={},a=0;e.a=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"/",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return"/"===t?t:function(t){var e=t,n=s[e]||(s[e]={});if(n[t])return n[t];var o=i.a.compile(t);return a<1e4&&(n[t]=o,a++),o}(t)(e,{pretty:!0})}},454:function(t,e){t.exports=[{title:"Getting Started",path:"/docs/getting-started",redirect:"/docs/getting-started/introduction",routes:[{title:"Introduction",path:"/docs/getting-started/introduction",componentPath:"getting-started/Introduction"},{title:"Browser Support",path:"/docs/getting-started/browser-support",componentPath:"getting-started/BrowserSupport"},{title:"Contributing",path:"/docs/getting-started/contributing",componentPath:"getting-started/Contributing"}]},{title:"Core",path:"/docs/core",redirect:"/docs/core/breakpoints",routes:[{title:"Breakpoints",path:"/docs/core/breakpoints",componentPath:"core/Breakpoints"},{title:"Color",path:"/docs/core/color",componentPath:"core/Color"},{title:"Favicons",path:"/docs/core/favicons",componentPath:"core/Favicons"},{title:"Grid",path:"/docs/core/grid",componentPath:"core/Grid"},{title:"Iconography",path:"/docs/core/iconography",componentPath:"core/Iconography"},{title:"Lists",path:"/docs/core/lists",componentPath:"core/Lists"},{title:"Tables",path:"/docs/core/tables",componentPath:"core/Tables"},{title:"Typography",path:"/docs/core/typography",componentPath:"core/Typography"}]},{title:"Components",path:"/docs/components",redirect:"/docs/components/accordion",routes:[{title:"Accordion (experimental)",path:"/docs/components/accordion",componentPath:"components/Accordion"},{title:"Action List (experimental)",path:"/docs/components/action-list",componentPath:"components/ActionList"},{title:"Alerts",path:"/docs/components/alerts",componentPath:"components/Alerts"},{title:"Badge",path:"/docs/components/badge",componentPath:"components/Badge"},{title:"Breadcrumb",path:"/docs/components/breadcrumb",componentPath:"components/Breadcrumb"},{title:"Buttons",path:"/docs/components/buttons",componentPath:"components/Buttons"},{title:"Card (experimental)",path:"/docs/components/card",componentPath:"components/Card"},{title:"Datepickers",path:"/docs/components/datepickers",componentPath:"components/Datepickers"},{title:"Dialog",path:"/docs/components/dialog",componentPath:"components/Dialog"},{title:"Forms",path:"/docs/components/forms",componentPath:"components/Forms"},{title:"Input Group",path:"/docs/components/input-group",componentPath:"components/InputGroup"},{title:"Loaders",path:"/docs/components/loaders",componentPath:"components/Loaders"},{title:"Media Object",path:"/docs/components/media-object",componentPath:"components/MediaObject"},{title:"Nav (experimental)",path:"/docs/components/nav",componentPath:"components/Nav"},{title:"Pagination",path:"/docs/components/pagination",componentPath:"components/Pagination"},{title:"Panel",path:"/docs/components/panel",componentPath:"components/Panel"},{title:"Sheet",path:"/docs/components/sheet",componentPath:"components/Sheet"},{title:"Slab (experimental)",path:"/docs/components/slab",componentPath:"components/Slab"},{title:"Status",path:"/docs/components/status",componentPath:"components/Status"},{title:"Steps",path:"/docs/components/steps",componentPath:"components/Steps"},{title:"Tabs (experimental)",path:"/docs/components/tabs",componentPath:"components/Tabs"},{title:"Toast (experimental)",path:"/docs/components/toast",componentPath:"components/Toast"},{title:"Tooltips",path:"/docs/components/tooltips",componentPath:"components/Tooltips"},{title:"Topbar",path:"/docs/components/topbar",componentPath:"components/Topbar"}]},{title:"Dashboard",path:"/docs/dashboard",redirect:"/docs/dashboard/introduction",routes:[{title:"Introduction",path:"/docs/dashboard/introduction",componentPath:"dashboard/Introduction"},{title:"Charts (Experimental)",path:"/docs/dashboard/charts",componentPath:"dashboard/Charts"}]},{title:"Utilities",path:"/docs/utilities",redirect:"/docs/utilities/colors",routes:[{title:"Colors",path:"/docs/utilities/colors",componentPath:"utilities/Colors"},{title:"Display",path:"/docs/utilities/display",componentPath:"utilities/Display"},{title:"Flex",path:"/docs/utilities/flex",componentPath:"utilities/Flex"},{title:"Images",path:"/docs/utilities/images",componentPath:"utilities/Images"},{title:"Sizing",path:"/docs/utilities/sizing",componentPath:"utilities/Sizing"},{title:"Spacing",path:"/docs/utilities/spacing",componentPath:"utilities/Spacing"},{title:"Text",path:"/docs/utilities/text",componentPath:"utilities/Text"},{title:"Visibility",path:"/docs/utilities/visibility",componentPath:"utilities/Visibility"}]}]},455:function(t,e,i){"use strict";i.r(e);var n=i(1),s=i.n(n),o=i(2),a=i.n(o),r=i(430),c=i(152),p=i(443),l=i(65),u=i.n(l),d=i(64),m=function(t){var e=t.path,n=t.redirect,o=t.routes;return s.a.createElement(r.a,null,s.a.createElement(c.a,{exact:!0,path:e,render:function(){return s.a.createElement(p.a,{to:n})}}),o.map(function(t){var e=t.path,n=t.componentPath,o=u()({loader:function(){return i(457)("./".concat(n,"/index.js"))},loading:d.a});return s.a.createElement(c.a,{key:"doc_route_".concat(e),exact:!0,path:e,render:function(){return s.a.createElement(o,null)}})}),s.a.createElement(p.a,{from:"".concat(e,"/*"),to:"/404"}))};m.propTypes={path:a.a.string.isRequired,redirect:a.a.string.isRequired,routes:a.a.array.isRequired},e.default=m},457:function(t,e,o){var i={"./components/Accordion/index.js":[458,0,7],"./components/ActionList/index.js":[463,0,8],"./components/Alerts/index.js":[464,0,1,19],"./components/Badge/index.js":[466,0,30],"./components/Breadcrumb/index.js":[504,0,1,41],"./components/Buttons/index.js":[467,0,1,50],"./components/Card/index.js":[513,0,2,55],"./components/Datepickers/index.js":[468,0,56],"./components/Dialog/index.js":[469,0,57],"./components/Forms/index.js":[470,0,1,58],"./components/InputGroup/index.js":[471,0,1,9],"./components/Loaders/index.js":[472,0,10],"./components/MediaObject/index.js":[473,0,2,11],"./components/Nav/index.js":[507,0,1,12],"./components/Pagination/index.js":[509,0,1,13],"./components/Panel/index.js":[510,0,1,14],"./components/Sheet/index.js":[474,0,15],"./components/Slab/index.js":[475,0,16],"./components/Status/index.js":[476,0,17],"./components/Steps/index.js":[511,0,1,18],"./components/Tabs/index.js":[512,0,1,20],"./components/Toast/index.js":[477,0,21],"./components/Tooltips/index.js":[478,0,22],"./components/Topbar/index.js":[508,0,1,23],"./core/Breakpoints/index.js":[479,0,24],"./core/Color/index.js":[503,0,25],"./core/Favicons/index.js":[480,0,1,26],"./core/Grid/index.js":[481,0,27],"./core/Iconography/index.js":[506,0,1,28],"./core/Lists/index.js":[482,0,29],"./core/Tables/index.js":[483,0,31],"./core/Typography/index.js":[484,0,1,32],"./dashboard/Charts/index.js":[505,0,68,33],"./dashboard/Introduction/index.js":[485,0,1,34],"./getting-started/BrowserSupport/index.js":[486,0,35],"./getting-started/Contributing/index.js":[493,0,1,36],"./getting-started/Introduction/index.js":[494,0,1,37],"./utilities/Colors/index.js":[495,0,1,38],"./utilities/Display/index.js":[496,0,39],"./utilities/Flex/index.js":[497,0,40],"./utilities/Images/index.js":[498,0,42],"./utilities/Sizing/index.js":[499,0,43],"./utilities/Spacing/index.js":[500,0,44],"./utilities/Text/index.js":[501,0,45],"./utilities/Visibility/index.js":[502,0,46],"./utils/Attribute/index.js":[431,47],"./utils/ComponentPreview/index.js":[434,0,48],"./utils/DeprecatedComponentAlert/index.js":[436,49],"./utils/DocContainer/index.js":[440,0,3],"./utils/DocHeading/index.js":[441],"./utils/DocToc/index.js":[435,51],"./utils/ExperimentalComponentAlert/index.js":[437,52],"./utils/Icon/index.js":[438,53],"./utils/PxScript/index.js":[439,54],"./utils/RenderRoutes/index.js":[455],"./utils/index.js":[432,0,3]};function n(e){var n=i[e];return n?Promise.all(n.slice(1).map(o.e)).then(function(){var t=n[0];return o(t)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return Object.keys(i)},n.id=457,t.exports=n},518:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),o=n(430),i=n(152),r=n(443),c=n(428),p=n(429),l=n(2),u=n.n(l),d=n(94);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var g=function(t){function i(t){var e,n,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),n=this,(e=!(o=f(i).call(this,t))||"object"!==m(o)&&"function"!=typeof o?b(n):o).state={query:"",results:[],showResults:!1},e.getResults=e.getResults.bind(b(b(e))),e.closeResults=e.closeResults.bind(b(b(e))),e.handleInputChange=e.handleInputChange.bind(b(b(e))),e}var e,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(i,s["Component"]),e=i,(n=[{key:"getResults",value:function(e){var n=[];e&&(this.props.routes.forEach(function(t){t.routes.forEach(function(t){t.title.toLowerCase().includes(e.toLowerCase())&&n.push(t)})}),this.setState({showResults:!0})),this.setState({results:n})}},{key:"closeResults",value:function(t){("keydown"===t.type&&"Escape"===t.key||"click"===t.type&&!t.target.closest(".doc-search"))&&this.setState({showResults:!1})}},{key:"handleInputChange",value:function(t){this.getResults(t.target.value)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.closeResults),document.removeEventListener("click",this.closeResults)}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.closeResults),document.addEventListener("click",this.closeResults)}},{key:"render",value:function(){var i=this;return a.a.createElement("form",{className:"doc-search"},a.a.createElement("input",{type:"text",className:"form-control",name:"designguide-search",placeholder:"Search...",onChange:this.handleInputChange,onFocus:function(){return i.setState({showResults:!0})}}),this.state.results.length?a.a.createElement("ul",{className:"search-results ".concat(this.state.showResults?"d-block":null)},this.state.results.map(function(t,e){var n=t.path,o=t.title;return a.a.createElement("li",{className:"search-result",key:"search_result_".concat(e)},a.a.createElement(d.a,{to:n,onClick:function(){return i.setState({showResults:!1})}},o))})):null)}}])&&h(e.prototype,n),o&&h(e,o),i}();g.propTypes={routes:u.a.array.isRequired};var v=g,x=n(454),j=n.n(x);function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function w(t,e){return!e||"object"!==P(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var C=function(t){function n(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(e=w(this,O(n).call(this,t))).state={isActive:t.location.pathname.includes(t.route.path)},e}var e,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(n,s["Component"]),e=n,(o=[{key:"toggleActive",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"shouldComponentUpdate",value:function(t,e){return this.state!==e}},{key:"render",value:function(){var t=this,e=this.props.route,n=e.title,o=e.routes;return a.a.createElement("div",{className:"nav-group".concat(this.state.isActive?" active":"")},a.a.createElement("div",{className:"nav-heading"},a.a.createElement("i",{className:"material-icons",onClick:function(){return t.toggleActive()}},"keyboard_arrow_right"),a.a.createElement("span",{onClick:function(){return t.toggleActive()}},n)),a.a.createElement("ul",null,o.map(function(t,e){return a.a.createElement("li",{key:"nav_link_".concat(e)},a.a.createElement(c.a,{activeClassName:"active",to:t.path},t.title))})))}}])&&E(e.prototype,o),i&&E(e,i),n}(),k=Object(p.a)(function(){return a.a.createElement("div",{className:"doc-sidebar"},a.a.createElement(v,{routes:j.a}),a.a.createElement("nav",{className:"documentation-nav"},j.a.map(function(t,e){var n=Object(p.a)(C);return a.a.createElement(n,{key:"nav_group_".concat(e),route:t})})))}),T=n(441),R=n(455);function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}e.default=function(){return a.a.createElement("div",{className:"documentation"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"sidebar-heading col-xxl-2 col-md-3"},a.a.createElement("h1",null,"DesignGuide")),a.a.createElement("div",{className:"view-heading col-xxl-10 col-md-9"},a.a.createElement(T.default,null))),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-xxl-2 col-md-3 p-0"},a.a.createElement(k,null)),a.a.createElement("main",{className:"doc-view col-xxl-10 col-md-9"},a.a.createElement(o.a,null,a.a.createElement(i.a,{exact:!0,path:"/docs",render:function(){return a.a.createElement(r.a,{to:"/docs/getting-started"})}}),j.a.map(function(t){return a.a.createElement(R.default,_({key:"renderRoutes_".concat(t.title)},t))}),a.a.createElement(r.a,{from:"/docs/*",to:"/404"})))))}}}]);
//# sourceMappingURL=documentation.chunk.js.map?5cebf8a0325d18bacadb