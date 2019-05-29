(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[40],{397:function(e,t,a){"use strict";a.r(t),a.d(t,"Examples",function(){return y}),a.d(t,"UsageWithOtherTags",function(){return h}),a.d(t,"OutlineButtons",function(){return v}),a.d(t,"ButtonGroup",function(){return f}),a.d(t,"Sizes",function(){return w}),a.d(t,"ActiveState",function(){return P}),a.d(t,"DisabledState",function(){return C}),a.d(t,"UsageWithIcons",function(){return k}),a.d(t,"ButtonLoader",function(){return N});var n=a(1),l=a.n(n),r=a(95),o=a(379),u=a.n(o),c=a(363),i=a(384),m=a(365);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=window.px.button,y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"examples"},"Examples"),l.a.createElement("p",null,"The DesignGuide includes a few predefined button styles, each serving its own semantic purpose."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(i.a,{type:"primary",label:"Primary"}),"\n",l.a.createElement(i.a,{type:"secondary",label:"Secondary"}),"\n",l.a.createElement(i.a,{type:"danger",label:"Danger"}),"\n",l.a.createElement(i.a,{type:"link",label:"Link"}),"\n")))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"usage-with-other-tags"},"Usage with other tags"),l.a.createElement("p",null,"The ",l.a.createElement(c.Property,{value:".btn"})," classes are designed to be used with the ",l.a.createElement(u.a,{className:"language-html"},"<button>")," element. However, you can also use these classes on ",l.a.createElement(u.a,{className:"language-html"},"<a>")," or ",l.a.createElement(u.a,{className:"language-html"},"<input>")," elements (though some browsers may apply a slightly different rendering)."),l.a.createElement("p",null,"When using button classes on ",l.a.createElement(u.a,{className:"language-html"},"<a>")," elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a ",l.a.createElement(c.Attribute,{name:"role",value:"button"})," to appropriately convey their purpose to assistive technologies such as screen readers."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(i.a,{type:"primary",label:"Anchor",href:"#"}),"\n",l.a.createElement(i.a,{type:"primary",label:"Button"}),"\n",l.a.createElement(i.a,{type:"primary",input:!0,value:"Input",btnType:"button"}),"\n",l.a.createElement(i.a,{type:"primary",input:!0,value:"Submit",btnType:"submit"}),"\n",l.a.createElement(i.a,{type:"primary",input:!0,value:"Reset",btnType:"reset"}),"\n")))},v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"outline-buttons"},"Outline buttons"),l.a.createElement("p",null,"Replace the default modifier classes with the ",l.a.createElement(c.Property,{value:".btn-outline-{style}"})," ones to get an outline of the button style."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(i.a,{outline:!0,type:"primary",label:"Primary"}),"\n",l.a.createElement(i.a,{outline:!0,type:"secondary",label:"Secondary"}),"\n",l.a.createElement(i.a,{outline:!0,type:"danger",label:"Danger"}),"\n")))},f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"button-group"},"Using buttons together"),l.a.createElement("p",null,"When you use buttons next to each other you have to wrap them in a ",l.a.createElement(c.Property,{value:".button-group"}),"."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(i.a,{type:"primary",label:"Activate"}),"\n",l.a.createElement(i.a,{type:"secondary",label:"Disable"}),"\n",l.a.createElement(i.a,{type:"danger",label:"Delete"}),"\n")))},w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"sizes"},"Sizes"),l.a.createElement("p",null,"For a different sized button add ",l.a.createElement(c.Property,{value:".btn-lg"}),", ",l.a.createElement(c.Property,{value:".btn-sm"})," or ",l.a.createElement(c.Property,{value:".btn-xs"}),"."),l.a.createElement("h3",null,"Large"),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(i.a,{size:"lg",type:"primary",label:"Large button"}),"\n",l.a.createElement(i.a,{size:"lg",type:"secondary",label:"Large button"}),"\n")),l.a.createElement("h3",null,"Small"),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(i.a,{size:"sm",type:"primary",label:"Small button"}),"\n",l.a.createElement(i.a,{size:"sm",type:"secondary",label:"Small button"}),"\n")),l.a.createElement("h3",null,"Extra small"),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(i.a,{size:"xs",type:"primary",label:"Extra small button"}),"\n",l.a.createElement(i.a,{size:"xs",type:"secondary",label:"Extra small button"}),"\n")),l.a.createElement("h3",null,"Block level"),l.a.createElement("p",null,"Create block level buttons—those that span the full width of a parent by adding ",l.a.createElement(c.Property,{value:".btn-block"}),"."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(i.a,{fullWidth:!0,type:"primary",label:"Block level button"}),"\n",l.a.createElement(i.a,{fullWidth:!0,type:"secondary",label:"Block level button"}),"\n")))},P=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"active-state"},"Active state"),l.a.createElement("p",null,"Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. ",l.a.createElement("b",null,"There’s no need to add a class to ",l.a.createElement(u.a,{className:"language-html"},"<button>"),"s as they use a pseudo-class.")," However, you can still force the same active appearance with ",l.a.createElement(c.Property,{value:".active"})," (and include the ",l.a.createElement(c.Attribute,{name:"aria-pressed",value:"true"})," attribute) should you need to replicate the state programmatically."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(i.a,{href:"#",active:!0,type:"primary",label:"Primary"}),"\n",l.a.createElement(i.a,{href:"#",active:!0,type:"secondary",label:"Secondary"}),"\n",l.a.createElement(i.a,{href:"#",active:!0,type:"danger",label:"Danger"}),"\n")))},C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"disabled-state"},"Disabled state"),l.a.createElement("p",null,"Make buttons look inactive by adding the ",l.a.createElement(c.Attribute,{name:"disabled"})," boolean attribute to any ",l.a.createElement(u.a,{className:"language-html"},"<button>")," element."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(i.a,{disabled:!0,type:"primary",label:"Primary"}),"\n",l.a.createElement(i.a,{disabled:!0,type:"secondary",label:"Secondary"}),"\n",l.a.createElement(i.a,{disabled:!0,type:"danger",label:"Danger"}),"\n")),l.a.createElement("p",null,"Disabled buttons using the ",l.a.createElement(u.a,{className:"language-html"},"<a>")," element behave a bit different:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.a,{className:"language-html"},"<a>"),"s do not support the ",l.a.createElement(c.Attribute,{name:"disabled"}),"attribute, so you must add the ",l.a.createElement(c.Property,{value:".disabled"})," class to make it visually appear disabled."),l.a.createElement("li",null,"Some future-friendly styles are included to disable all ",l.a.createElement(c.Property,{value:"pointer-events"})," on anchor buttons. In browsers which support that property, you won’t see the disabled cursor at all."),l.a.createElement("li",null,"Disabled buttons should include the ",l.a.createElement(c.Attribute,{name:"aria-disabled",value:"true"})," attribute to indicate the state of the element to assistive technologies.")),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(i.a,{href:"#",disabled:!0,type:"primary",label:"Primary"}),"\n",l.a.createElement(i.a,{href:"#",disabled:!0,type:"secondary",label:"Secondary"}),"\n",l.a.createElement(i.a,{href:"#",disabled:!0,type:"danger",label:"Danger"}),"\n")),l.a.createElement(m.a,{type:"warning"},l.a.createElement("h5",null,"Link functionality caveat"),l.a.createElement("p",null,"The ",l.a.createElement(c.Property,{value:".disabled"})," class uses ",l.a.createElement(c.Property,{value:"pointer-events: none"})," to try to disable the link functionality of ",l.a.createElement(u.a,{className:"language-html"},"<a>"),"s, but that CSS property is not yet standardized. In addition, even in browsers that do support ",l.a.createElement(c.Property,{value:"pointer-events: none"}),", keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a ",l.a.createElement(c.Property,{value:'tabindex="-1"'})," attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.")))},k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"usage-with-icons"},"Usage with icons"),l.a.createElement("p",null,"To use a button with an icon simply put the icon markup inside the ",l.a.createElement(u.a,{className:"language-html"},"<button>"),"."),l.a.createElement("p",null,"Read more about icon usage here ",l.a.createElement(r.Link,{to:"/docs/core/icons"},"here"),"."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(i.a,{icon:"cloud",type:"primary",label:"Primary"}),"\n\n",l.a.createElement(i.a,{icon:"cloud",type:"secondary",label:"Secondary"}),"\n",l.a.createElement(i.a,{icon:"cloud",type:"danger",label:"Danger"}),"\n")))},N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"button-loader"},"Button loader"),l.a.createElement("p",null,"To use a button with a loader simply add the attribute ",l.a.createElement(c.Attribute,{data:!0,name:"button-loader"})," to add the required markup for the loader component. Add class ",l.a.createElement(c.Property,{value:".loading"})," to display the loader."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(i.a,{type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",l.a.createElement(i.a,{type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",l.a.createElement(i.a,{type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),l.a.createElement("h3",null,"Disabled loader"),l.a.createElement("p",null,l.a.createElement(c.Property,{value:".loading"})," with ",l.a.createElement(c.Attribute,{name:"disabled"})),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(i.a,{disabled:!0,type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",l.a.createElement(i.a,{disabled:!0,type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",l.a.createElement(i.a,{disabled:!0,type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),l.a.createElement("h3",null,"Outline loader"),l.a.createElement("p",null,l.a.createElement(c.Property,{value:".loading"})," with ",l.a.createElement(c.Property,{value:".outline"})),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement(i.a,{outline:!0,type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",l.a.createElement(i.a,{outline:!0,type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",l.a.createElement(i.a,{outline:!0,type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),l.a.createElement("h3",null,"The markup"),l.a.createElement("p",null,"Adding the attribute ",l.a.createElement(c.Attribute,{data:!0,name:"button-loader"})," to a button component will produce the following html:"),l.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("button",{className:"btn btn-default loading",type:"button","data-button-loader":!0},"\n\t","Default","\n\t",l.a.createElement("div",{className:"loader"},"\n\t\t",l.a.createElement("ul",{className:"loader-icon"},"\n\t\t\t",l.a.createElement("li",null),"\n\t\t\t",l.a.createElement("li",null),"\n\t\t\t",l.a.createElement("li",null),"\n\t\t"),"\n\t"),"\n")),l.a.createElement(m.a,{type:"warning"},l.a.createElement("h5",null,"Including the loader html"),l.a.createElement("p",null,"If you want more control over the loader component you can include the html yourself (e.g. for server-side rendering), just make sure you do ",l.a.createElement("b",null,"not")," add the attribute ",l.a.createElement(c.Attribute,{data:!0,name:"button-loader"}),".")),l.a.createElement("h3",null,"JavascriptMethods"),l.a.createElement("p",null,"Only button loaders have to be initialized."),l.a.createElement(c.JavascriptDocs,{componentName:"button"}))},O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,b(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,n["Component"]),a=t,(r=[{key:"componentDidMount",value:function(){E.init()}},{key:"render",value:function(){return l.a.createElement(c.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Use our button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."),l.a.createElement(y,null),l.a.createElement(h,null),l.a.createElement(v,null),l.a.createElement(f,null),l.a.createElement(w,null),l.a.createElement(P,null),l.a.createElement(C,null),l.a.createElement(k,null),l.a.createElement(N,null))}}])&&d(a.prototype,r),o&&d(a,o),t}();t.default=O}}]);
//# sourceMappingURL=doc-route.chunk_4.js.map?8020a2a40d49942066a5