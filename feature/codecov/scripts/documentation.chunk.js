(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[58],{428:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),a=n(420);e.default=Object(a.a)(function(t){var e,n=t.location,o=n.pathname.match(/[^/]*$/)[0].split("-").map(function(t,e){return 0<e?t:t.charAt(0).toUpperCase()+t.substr(1)}).join(" ");return e=o,document.title="".concat(e," | PayEx DesignGuide"),i.a.createElement("h2",{className:"h1"},o)})},441:function(t,e){t.exports=[{title:"Getting Started",path:"/docs/getting-started",redirect:"/docs/getting-started/introduction",routes:[{title:"Introduction",path:"/docs/getting-started/introduction",componentPath:"getting-started/Introduction"},{title:"Browser Support",path:"/docs/getting-started/browser-support",componentPath:"getting-started/BrowserSupport"},{title:"Contributing",path:"/docs/getting-started/contributing",componentPath:"getting-started/Contributing"}]},{title:"Core",path:"/docs/core",redirect:"/docs/core/breakpoints",routes:[{title:"Breakpoints",path:"/docs/core/breakpoints",componentPath:"core/Breakpoints"},{title:"Color",path:"/docs/core/color",componentPath:"core/Color"},{title:"Favicons",path:"/docs/core/favicons",componentPath:"core/Favicons"},{title:"Grid",path:"/docs/core/grid",componentPath:"core/Grid"},{title:"Icons",path:"/docs/core/icons",componentPath:"core/Icons"},{title:"Lists",path:"/docs/core/lists",componentPath:"core/Lists"},{title:"Payment Icons",path:"/docs/core/payment-icons",componentPath:"core/PaymentIcons"},{title:"Tables",path:"/docs/core/tables",componentPath:"core/Tables"},{title:"Typography",path:"/docs/core/typography",componentPath:"core/Typography"}]},{title:"Components",path:"/docs/components",redirect:"/docs/components/action-list",routes:[{title:"Action List (experimental)",path:"/docs/components/action-list",componentPath:"components/ActionList"},{title:"Alerts",path:"/docs/components/alerts",componentPath:"components/Alerts"},{title:"Badge",path:"/docs/components/badge",componentPath:"components/Badge"},{title:"Breadcrumb",path:"/docs/components/breadcrumb",componentPath:"components/Breadcrumb"},{title:"Buttons",path:"/docs/components/buttons",componentPath:"components/Buttons"},{title:"Card (experimental)",path:"/docs/components/card",componentPath:"components/Card"},{title:"Datepickers",path:"/docs/components/datepickers",componentPath:"components/Datepickers"},{title:"Dialog",path:"/docs/components/dialog",componentPath:"components/Dialog"},{title:"Forms",path:"/docs/components/forms",componentPath:"components/Forms"},{title:"Input Group",path:"/docs/components/input-group",componentPath:"components/InputGroup"},{title:"Loaders",path:"/docs/components/loaders",componentPath:"components/Loaders"},{title:"Media Object",path:"/docs/components/media-object",componentPath:"components/MediaObject"},{title:"Nav (experimental)",path:"/docs/components/nav",componentPath:"components/Nav"},{title:"Pagination",path:"/docs/components/pagination",componentPath:"components/Pagination"},{title:"Panel",path:"/docs/components/panel",componentPath:"components/Panel"},{title:"Sheet",path:"/docs/components/sheet",componentPath:"components/Sheet"},{title:"Status",path:"/docs/components/status",componentPath:"components/Status"},{title:"Steps",path:"/docs/components/steps",componentPath:"components/Steps"},{title:"Tabs (experimental)",path:"/docs/components/tabs",componentPath:"components/Tabs"},{title:"Toast (experimental)",path:"/docs/components/toast",componentPath:"components/Toast"},{title:"Tooltips",path:"/docs/components/tooltips",componentPath:"components/Tooltips"},{title:"Topbar (contains deprecated)",path:"/docs/components/topbar",componentPath:"components/Topbar"},{title:"Well (experimental)",path:"/docs/components/well",componentPath:"components/Well"}]},{title:"Utilities",path:"/docs/utilities",redirect:"/docs/utilities/colors",routes:[{title:"Colors",path:"/docs/utilities/colors",componentPath:"utilities/Colors"},{title:"Display",path:"/docs/utilities/display",componentPath:"utilities/Display"},{title:"Flex",path:"/docs/utilities/flex",componentPath:"utilities/Flex"},{title:"Sizing",path:"/docs/utilities/sizing",componentPath:"utilities/Sizing"},{title:"Spacing",path:"/docs/utilities/spacing",componentPath:"utilities/Spacing"},{title:"Text",path:"/docs/utilities/text",componentPath:"utilities/Text"},{title:"Visibility",path:"/docs/utilities/visibility",componentPath:"utilities/Visibility"}]}]},442:function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n),o=i(2),c=i.n(o),s=i(419),r=i(189),p=i(444),l=i(66),u=i.n(l),m=i(65),d=function(t){var e=t.path,n=t.redirect,o=t.routes;return a.a.createElement(s.a,null,a.a.createElement(r.a,{exact:!0,path:e,render:function(){return a.a.createElement(p.a,{to:n})}}),o.map(function(t){var e=t.path,n=t.componentPath,o=u()({loader:function(){return i(445)("./".concat(n,"/index.js"))},loading:m.a});return a.a.createElement(r.a,{key:"doc_route_".concat(e),exact:!0,path:e,render:function(){return a.a.createElement(o,null)}})}),a.a.createElement(p.a,{from:"".concat(e,"/*"),to:"/404"}))};d.propTypes={path:c.a.string.isRequired,redirect:c.a.string.isRequired,routes:c.a.array.isRequired},e.default=d},443:function(t,e,n){"use strict";var o=n(221),i=n.n(o),a={},c=0;e.a=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"/",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return"/"===t?t:function(t){var e=t,n=a[e]||(a[e]={});if(n[t])return n[t];var o=i.a.compile(t);return c<1e4&&(n[t]=o,c++),o}(t)(e,{pretty:!0})}},444:function(t,e,n){"use strict";var o=n(1),i=n.n(o),a=n(2),c=n.n(a),s=n(28),r=n.n(s),p=n(17),l=n.n(p),u=n(187),m=n(443),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};var h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},e.prototype.componentWillMount=function(){l()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},e.prototype.componentDidMount=function(){this.isStatic()||this.perform()},e.prototype.componentDidUpdate=function(t){var e=Object(u.c)(t.to),n=Object(u.c)(this.props.to);Object(u.f)(e,n)?r()(!1,"You tried to redirect to the same route you're currently on: \""+n.pathname+n.search+'"'):this.perform()},e.prototype.computeTo=function(t){var e=t.computedMatch,n=t.to;return e?"string"==typeof n?Object(m.a)(n,e.params):d({},n,{pathname:Object(m.a)(n.pathname,e.params)}):n},e.prototype.perform=function(){var t=this.context.router.history,e=this.props.push,n=this.computeTo(this.props);e?t.push(n):t.replace(n)},e.prototype.render=function(){return null},e}(i.a.Component);h.propTypes={computedMatch:c.a.object,push:c.a.bool,from:c.a.string,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired},h.defaultProps={push:!1},h.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired}).isRequired,staticContext:c.a.object}).isRequired};var f=h;e.a=f},445:function(t,e,o){var i={"./components/ActionList/index.js":[446,2,1,0,3,8],"./components/Alerts/index.js":[452,2,1,4,0,9],"./components/Badge/index.js":[454,2,1,0,3,20],"./components/Breadcrumb/index.js":[484,2,1,4,0,31],"./components/Buttons/index.js":[455,2,1,4,0,42],"./components/Card/index.js":[493,2,1,0,3,51],"./components/Datepickers/index.js":[456,2,1,0,3,53],"./components/Dialog/index.js":[457,2,1,0,3,54],"./components/Forms/index.js":[458,2,1,4,0,55],"./components/InputGroup/index.js":[459,2,1,0,3,56],"./components/Loaders/index.js":[460,2,1,0,3,10],"./components/MediaObject/index.js":[461,2,1,0,3,11],"./components/Nav/index.js":[488,2,1,4,0,12],"./components/Pagination/index.js":[489,2,1,0,3,13],"./components/Panel/index.js":[490,2,1,0,3,14],"./components/Sheet/index.js":[462,2,1,0,3,15],"./components/Status/index.js":[463,2,1,0,3,16],"./components/Steps/index.js":[492,2,1,4,0,17],"./components/Tabs/index.js":[491,2,1,4,0,18],"./components/Toast/index.js":[464,2,1,0,3,19],"./components/Tooltips/index.js":[465,2,1,0,3,21],"./components/Topbar/index.js":[483,2,1,4,0,22],"./components/Well/index.js":[466,2,1,0,3,23],"./core/Breakpoints/index.js":[467,2,1,0,3,24],"./core/Color/index.js":[487,2,1,0,3,25],"./core/Favicons/index.js":[468,2,1,4,0,26],"./core/Grid/index.js":[469,2,1,0,3,27],"./core/Icons/index.js":[470,2,1,4,0,28],"./core/Lists/index.js":[471,2,1,0,3,29],"./core/PaymentIcons/index.js":[486,2,1,4,0,30],"./core/Tables/index.js":[472,2,1,0,3,32],"./core/Typography/index.js":[473,2,1,4,0,33],"./getting-started/BrowserSupport/index.js":[485,34],"./getting-started/Contributing/index.js":[474,2,1,4,0,35],"./getting-started/Introduction/index.js":[475,2,1,4,0,36],"./utilities/Colors/index.js":[476,2,1,4,0,37],"./utilities/Display/index.js":[477,2,1,0,3,38],"./utilities/Flex/index.js":[478,2,1,0,3,39],"./utilities/Sizing/index.js":[479,2,1,0,3,40],"./utilities/Spacing/index.js":[480,2,1,0,3,41],"./utilities/Text/index.js":[481,2,1,0,3,43],"./utilities/Visibility/index.js":[482,2,1,0,3,44],"./utils/Attribute/index.js":[421,45],"./utils/ComponentPreview/index.js":[427,2,46],"./utils/DeprecatedComponentAlert/index.js":[423,47],"./utils/DocHeading/index.js":[428],"./utils/DocToc/index.js":[429,1,0],"./utils/ExperimentalComponentAlert/index.js":[424,48],"./utils/Icon/index.js":[425,49],"./utils/PxScript/index.js":[426,50],"./utils/RenderRoutes/index.js":[442],"./utils/index.js":[430,2,1,0,3,52]};function n(e){var n=i[e];return n?Promise.all(n.slice(1).map(o.e)).then(function(){var t=n[0];return o(t)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return Object.keys(i)},n.id=445,t.exports=n},498:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(419),i=n(189),s=n(444),r=n(418),p=n(420),l=n(441),u=n.n(l);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(t){function n(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(e=h(this,f(n).call(this,t))).state={isActive:t.location.pathname.includes(t.route.path)},e}var e,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(n,a["Component"]),e=n,(o=[{key:"toggleActive",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"shouldComponentUpdate",value:function(t,e){return this.state!==e}},{key:"render",value:function(){var t=this,e=this.props.route,n=e.title,o=e.routes;return c.a.createElement("div",{className:"nav-group".concat(this.state.isActive?" active":"")},c.a.createElement("div",{className:"nav-heading"},c.a.createElement("i",{className:"material-icons",onClick:function(){return t.toggleActive()}},"keyboard_arrow_right"),c.a.createElement("span",{onClick:function(){return t.toggleActive()}},n)),c.a.createElement("ul",null,o.map(function(t,e){return c.a.createElement("li",{key:"nav_link_".concat(e)},c.a.createElement(r.a,{activeClassName:"active",to:t.path},t.title))})))}}])&&d(e.prototype,o),i&&d(e,i),n}(),b=Object(p.a)(function(){return c.a.createElement("div",{className:"doc-sidebar col-xxl-2 col-md-3"},c.a.createElement("nav",{className:"documentation-nav"},u.a.map(function(t,e){var n=Object(p.a)(y);return c.a.createElement(n,{key:"nav_group_".concat(e),route:t})})))}),g=n(428),j=n(442);function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}e.default=function(){return c.a.createElement("div",{className:"documentation"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"sidebar-heading col-xxl-2 col-md-3"},c.a.createElement("h1",null,"DesignGuide")),c.a.createElement("div",{className:"view-heading col-xxl-10 col-md-9"},c.a.createElement(g.default,null))),c.a.createElement("div",{className:"row"},c.a.createElement(b,null),c.a.createElement("main",{className:"doc-view col-xxl-10 col-md-9"},c.a.createElement(o.a,null,c.a.createElement(i.a,{exact:!0,path:"/docs",render:function(){return c.a.createElement(s.a,{to:"/docs/getting-started"})}}),u.a.map(function(t){return c.a.createElement(j.default,v({key:"renderRoutes_".concat(t.title)},t))}),c.a.createElement(s.a,{from:"/docs/*",to:"/404"})))))}}}]);
//# sourceMappingURL=documentation.chunk.js.map?48f7df565e186e0eab18