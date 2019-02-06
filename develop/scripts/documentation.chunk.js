(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[59],{409:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),s=n(397);e.default=Object(s.a)(function(t){var e=t.location.pathname.split("/").filter(function(t){return t.length}).pop().split("-").map(function(t,e){return 0<e?t:t.charAt(0).toUpperCase()+t.substr(1)}).join(" ");return document.title="".concat(e," | PayEx DesignGuide"),i.a.createElement("h2",{className:"h1"},e)})},411:function(t,e,n){"use strict";var o=n(1),i=n.n(o),s=n(2),r=n.n(s),a=n(23),c=n.n(a),p=n(16),l=n.n(p),u=n(117),d=n(412),m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};var h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},e.prototype.componentWillMount=function(){l()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},e.prototype.componentDidMount=function(){this.isStatic()||this.perform()},e.prototype.componentDidUpdate=function(t){var e=Object(u.c)(t.to),n=Object(u.c)(this.props.to);Object(u.f)(e,n)?c()(!1,"You tried to redirect to the same route you're currently on: \""+n.pathname+n.search+'"'):this.perform()},e.prototype.computeTo=function(t){var e=t.computedMatch,n=t.to;return e?"string"==typeof n?Object(d.a)(n,e.params):m({},n,{pathname:Object(d.a)(n.pathname,e.params)}):n},e.prototype.perform=function(){var t=this.context.router.history,e=this.props.push,n=this.computeTo(this.props);e?t.push(n):t.replace(n)},e.prototype.render=function(){return null},e}(i.a.Component);h.propTypes={computedMatch:r.a.object,push:r.a.bool,from:r.a.string,to:r.a.oneOfType([r.a.string,r.a.object]).isRequired},h.defaultProps={push:!1},h.contextTypes={router:r.a.shape({history:r.a.shape({push:r.a.func.isRequired,replace:r.a.func.isRequired}).isRequired,staticContext:r.a.object}).isRequired};var f=h;e.a=f},412:function(t,e,n){"use strict";var o=n(161),i=n.n(o),s={},r=0;e.a=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"/",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return"/"===t?t:function(t){var e=t,n=s[e]||(s[e]={});if(n[t])return n[t];var o=i.a.compile(t);return r<1e4&&(n[t]=o,r++),o}(t)(e,{pretty:!0})}},422:function(t,e){t.exports=[{title:"Getting Started",path:"/docs/getting-started",redirect:"/docs/getting-started/introduction",routes:[{title:"Introduction",path:"/docs/getting-started/introduction",componentPath:"getting-started/Introduction"},{title:"Browser Support",path:"/docs/getting-started/browser-support",componentPath:"getting-started/BrowserSupport"},{title:"Contributing",path:"/docs/getting-started/contributing",componentPath:"getting-started/Contributing"}]},{title:"Core",path:"/docs/core",redirect:"/docs/core/breakpoints",routes:[{title:"Breakpoints",path:"/docs/core/breakpoints",componentPath:"core/Breakpoints"},{title:"Color",path:"/docs/core/color",componentPath:"core/Color"},{title:"Favicons",path:"/docs/core/favicons",componentPath:"core/Favicons"},{title:"Grid",path:"/docs/core/grid",componentPath:"core/Grid"},{title:"Iconography",path:"/docs/core/iconography",componentPath:"core/Iconography"},{title:"Lists",path:"/docs/core/lists",componentPath:"core/Lists"},{title:"Tables",path:"/docs/core/tables",componentPath:"core/Tables"},{title:"Typography",path:"/docs/core/typography",componentPath:"core/Typography"}]},{title:"Components",path:"/docs/components",redirect:"/docs/components/action-list",routes:[{title:"Action List (experimental)",path:"/docs/components/action-list",componentPath:"components/ActionList"},{title:"Alerts",path:"/docs/components/alerts",componentPath:"components/Alerts"},{title:"Badge",path:"/docs/components/badge",componentPath:"components/Badge"},{title:"Breadcrumb",path:"/docs/components/breadcrumb",componentPath:"components/Breadcrumb"},{title:"Buttons",path:"/docs/components/buttons",componentPath:"components/Buttons"},{title:"Card (experimental)",path:"/docs/components/card",componentPath:"components/Card"},{title:"Datepickers",path:"/docs/components/datepickers",componentPath:"components/Datepickers"},{title:"Dialog",path:"/docs/components/dialog",componentPath:"components/Dialog"},{title:"Forms",path:"/docs/components/forms",componentPath:"components/Forms"},{title:"Input Group",path:"/docs/components/input-group",componentPath:"components/InputGroup"},{title:"Loaders",path:"/docs/components/loaders",componentPath:"components/Loaders"},{title:"Media Object",path:"/docs/components/media-object",componentPath:"components/MediaObject"},{title:"Nav (experimental)",path:"/docs/components/nav",componentPath:"components/Nav"},{title:"Pagination",path:"/docs/components/pagination",componentPath:"components/Pagination"},{title:"Panel",path:"/docs/components/panel",componentPath:"components/Panel"},{title:"Sheet",path:"/docs/components/sheet",componentPath:"components/Sheet"},{title:"Slab (experimental)",path:"/docs/components/slab",componentPath:"components/Slab"},{title:"Status",path:"/docs/components/status",componentPath:"components/Status"},{title:"Steps",path:"/docs/components/steps",componentPath:"components/Steps"},{title:"Tabs (experimental)",path:"/docs/components/tabs",componentPath:"components/Tabs"},{title:"Toast (experimental)",path:"/docs/components/toast",componentPath:"components/Toast"},{title:"Tooltips",path:"/docs/components/tooltips",componentPath:"components/Tooltips"},{title:"Topbar",path:"/docs/components/topbar",componentPath:"components/Topbar"}]},{title:"Dashboard",path:"/docs/dashboard",redirect:"/docs/dashboard/introduction",routes:[{title:"Introduction",path:"/docs/dashboard/introduction",componentPath:"dashboard/Introduction"},{title:"Charts (Experimental)",path:"/docs/dashboard/charts",componentPath:"dashboard/Charts"}]},{title:"Utilities",path:"/docs/utilities",redirect:"/docs/utilities/colors",routes:[{title:"Colors",path:"/docs/utilities/colors",componentPath:"utilities/Colors"},{title:"Display",path:"/docs/utilities/display",componentPath:"utilities/Display"},{title:"Flex",path:"/docs/utilities/flex",componentPath:"utilities/Flex"},{title:"Images",path:"/docs/utilities/images",componentPath:"utilities/Images"},{title:"Sizing",path:"/docs/utilities/sizing",componentPath:"utilities/Sizing"},{title:"Spacing",path:"/docs/utilities/spacing",componentPath:"utilities/Spacing"},{title:"Text",path:"/docs/utilities/text",componentPath:"utilities/Text"},{title:"Visibility",path:"/docs/utilities/visibility",componentPath:"utilities/Visibility"}]}]},423:function(t,e,i){"use strict";i.r(e);var n=i(1),s=i.n(n),o=i(2),r=i.n(o),a=i(398),c=i(118),p=i(411),l=i(56),u=i.n(l),d=i(55),m=function(t){var e=t.path,n=t.redirect,o=t.routes;return s.a.createElement(a.a,null,s.a.createElement(c.a,{exact:!0,path:e,render:function(){return s.a.createElement(p.a,{to:n})}}),o.map(function(t){var e=t.path,n=t.componentPath,o=u()({loader:function(){return i(425)("./".concat(n,"/index.js"))},loading:d.a});return s.a.createElement(c.a,{key:"doc_route_".concat(e),exact:!0,path:e,render:function(){return s.a.createElement(o,null)}})}),s.a.createElement(p.a,{from:"".concat(e,"/*"),to:"/404"}))};m.propTypes={path:r.a.string.isRequired,redirect:r.a.string.isRequired,routes:r.a.array.isRequired},e.default=m},425:function(t,e,o){var i={"./components/ActionList/index.js":[426,0,7],"./components/Alerts/index.js":[431,0,1,8],"./components/Badge/index.js":[433,0,19],"./components/Breadcrumb/index.js":[471,0,1,30],"./components/Buttons/index.js":[434,0,1,41],"./components/Card/index.js":[480,0,2,50],"./components/Datepickers/index.js":[435,0,54],"./components/Dialog/index.js":[436,0,55],"./components/Forms/index.js":[437,0,1,56],"./components/InputGroup/index.js":[438,0,1,57],"./components/Loaders/index.js":[439,0,9],"./components/MediaObject/index.js":[440,0,2,10],"./components/Nav/index.js":[474,0,1,11],"./components/Pagination/index.js":[476,0,1,12],"./components/Panel/index.js":[477,0,1,13],"./components/Sheet/index.js":[441,0,14],"./components/Slab/index.js":[442,0,15],"./components/Status/index.js":[443,0,16],"./components/Steps/index.js":[478,0,1,17],"./components/Tabs/index.js":[479,0,1,18],"./components/Toast/index.js":[444,0,20],"./components/Tooltips/index.js":[445,0,21],"./components/Topbar/index.js":[475,0,1,22],"./core/Breakpoints/index.js":[446,0,23],"./core/Color/index.js":[473,0,24],"./core/Favicons/index.js":[447,0,1,25],"./core/Grid/index.js":[448,0,26],"./core/Iconography/index.js":[470,0,1,27],"./core/Lists/index.js":[449,0,28],"./core/Tables/index.js":[450,0,29],"./core/Typography/index.js":[451,0,1,31],"./dashboard/Charts/index.js":[472,0,67,32],"./dashboard/Introduction/index.js":[452,0,1,33],"./getting-started/BrowserSupport/index.js":[453,0,34],"./getting-started/Contributing/index.js":[460,0,1,35],"./getting-started/Introduction/index.js":[461,0,1,36],"./utilities/Colors/index.js":[462,0,1,37],"./utilities/Display/index.js":[463,0,38],"./utilities/Flex/index.js":[464,0,39],"./utilities/Images/index.js":[465,0,40],"./utilities/Sizing/index.js":[466,0,42],"./utilities/Spacing/index.js":[467,0,43],"./utilities/Text/index.js":[468,0,44],"./utilities/Visibility/index.js":[469,0,45],"./utils/Attribute/index.js":[399,46],"./utils/ComponentPreview/index.js":[402,0,47],"./utils/DeprecatedComponentAlert/index.js":[404,48],"./utils/DocContainer/index.js":[408,0,3],"./utils/DocHeading/index.js":[409],"./utils/DocToc/index.js":[403,49],"./utils/ExperimentalComponentAlert/index.js":[405,51],"./utils/Icon/index.js":[406,52],"./utils/PxScript/index.js":[407,53],"./utils/RenderRoutes/index.js":[423],"./utils/index.js":[400,0,3]};function n(e){var n=i[e];return n?Promise.all(n.slice(1).map(o.e)).then(function(){var t=n[0];return o(t)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return Object.keys(i)},n.id=425,t.exports=n},485:function(t,e,n){"use strict";n.r(e);var s=n(1),r=n.n(s),o=n(398),i=n(118),a=n(411),c=n(396),p=n(397),l=n(2),u=n.n(l),d=n(81);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var g=function(t){function i(t){var e,n,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),n=this,(e=!(o=f(i).call(this,t))||"object"!==m(o)&&"function"!=typeof o?b(n):o).state={query:"",results:[],showResults:!1},e.getResults=e.getResults.bind(b(b(e))),e.closeResults=e.closeResults.bind(b(b(e))),e.handleInputChange=e.handleInputChange.bind(b(b(e))),e}var e,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(i,s["Component"]),e=i,(n=[{key:"getResults",value:function(e){var n=[];e&&(this.props.routes.forEach(function(t){t.routes.forEach(function(t){t.title.toLowerCase().includes(e.toLowerCase())&&n.push(t)})}),this.setState({showResults:!0})),this.setState({results:n})}},{key:"closeResults",value:function(t){("keydown"===t.type&&"Escape"===t.key||"click"===t.type&&!t.target.closest(".doc-search"))&&this.setState({showResults:!1})}},{key:"handleInputChange",value:function(t){this.getResults(t.target.value)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.closeResults),document.removeEventListener("click",this.closeResults)}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.closeResults),document.addEventListener("click",this.closeResults)}},{key:"render",value:function(){var i=this;return r.a.createElement("form",{className:"doc-search"},r.a.createElement("input",{type:"text",className:"form-control",name:"designguide-search",placeholder:"Search...",onChange:this.handleInputChange,onFocus:function(){return i.setState({showResults:!0})}}),this.state.results.length?r.a.createElement("ul",{className:"search-results ".concat(this.state.showResults?"d-block":null)},this.state.results.map(function(t,e){var n=t.path,o=t.title;return r.a.createElement("li",{className:"search-result",key:"search_result_".concat(e)},r.a.createElement(d.a,{to:n,onClick:function(){return i.setState({showResults:!1})}},o))})):null)}}])&&h(e.prototype,n),o&&h(e,o),i}();g.propTypes={routes:u.a.array.isRequired};var v=g,x=n(422),j=n.n(x);function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function w(t,e){return!e||"object"!==P(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var C=function(t){function n(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(e=w(this,O(n).call(this,t))).state={isActive:t.location.pathname.includes(t.route.path)},e}var e,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(n,s["Component"]),e=n,(o=[{key:"toggleActive",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"shouldComponentUpdate",value:function(t,e){return this.state!==e}},{key:"render",value:function(){var t=this,e=this.props.route,n=e.title,o=e.routes;return r.a.createElement("div",{className:"nav-group".concat(this.state.isActive?" active":"")},r.a.createElement("div",{className:"nav-heading"},r.a.createElement("i",{className:"material-icons",onClick:function(){return t.toggleActive()}},"keyboard_arrow_right"),r.a.createElement("span",{onClick:function(){return t.toggleActive()}},n)),r.a.createElement("ul",null,o.map(function(t,e){return r.a.createElement("li",{key:"nav_link_".concat(e)},r.a.createElement(c.a,{activeClassName:"active",to:t.path},t.title))})))}}])&&E(e.prototype,o),i&&E(e,i),n}(),k=Object(p.a)(function(){return r.a.createElement("div",{className:"doc-sidebar"},r.a.createElement(v,{routes:j.a}),r.a.createElement("nav",{className:"documentation-nav"},j.a.map(function(t,e){var n=Object(p.a)(C);return r.a.createElement(n,{key:"nav_group_".concat(e),route:t})})))}),T=n(409),R=n(423);function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}e.default=function(){return r.a.createElement("div",{className:"documentation"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"sidebar-heading col-xxl-2 col-md-3"},r.a.createElement("h1",null,"DesignGuide")),r.a.createElement("div",{className:"view-heading col-xxl-10 col-md-9"},r.a.createElement(T.default,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xxl-2 col-md-3 p-0"},r.a.createElement(k,null)),r.a.createElement("main",{className:"doc-view col-xxl-10 col-md-9"},r.a.createElement(o.a,null,r.a.createElement(i.a,{exact:!0,path:"/docs",render:function(){return r.a.createElement(a.a,{to:"/docs/getting-started"})}}),j.a.map(function(t){return r.a.createElement(R.default,_({key:"renderRoutes_".concat(t.title)},t))}),r.a.createElement(a.a,{from:"/docs/*",to:"/404"})))))}}}]);
//# sourceMappingURL=documentation.chunk.js.map?9d81c60482bb96bec056