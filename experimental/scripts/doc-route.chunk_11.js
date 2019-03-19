(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[10],{362:function(e,t,a){"use strict";a.d(t,"a",function(){return T});var k=a(0),P=a.n(k),n=a(2),l=a.n(n),r=a(59),V=a.n(r),T=function(e){var t=e.type,a=e.value,n=e.color,l=e.disabled;return"button"===t?P.a.createElement("button",{type:"button",className:"btn btn-".concat(n),disabled:l},a):P.a.createElement("span",{className:"input-group-addon"},"icon"===t?P.a.createElement("i",{className:"material-icons"},a):a)},B=function(e){var t=e.icon;return P.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",P.a.createElement("i",{className:"material-icons"},t),"\n\t")},o=function(e){var t=e.id,a=e.type,n=e.placeholder,l=e.pattern,r=e.validate,o=e.required,i=e.defaultValue,u=e.autoComplete,c=e.disabled,s=e.readOnly,p=e.label,m=e.validationState,d=e.selectOptions,f=e.prefixValue,b=e.prefixType,y=e.prefixBtnColor,g=e.postfixValue,E=e.postfixType,h=e.postfixBtnColor,x=e.feedbackIcon,v=e.helpBlock,w=e.errorMessage,N=e.successMessage,C={type:a||null,className:"form-control",id:t||null,placeholder:n||null,defaultValue:i||"",disabled:c||null,readOnly:s||null,autoComplete:u||null,required:o||null,pattern:l?"":null,"data-validate":r?"":null},O=V()("input-group",m?"has-".concat(m):null,x?"has-feedback":null);return P.a.createElement("div",{className:"form-group"},"\n",p?P.a.createElement("label",{htmlFor:t},p):null,p?"\n":null,P.a.createElement("div",{className:O},"\n",f?P.a.createElement(T,{type:b,value:f,color:y,disabled:c}):null,f?"\n":null,"textarea"===a?P.a.createElement("textarea",C):"select"===a?P.a.createElement("select",{className:"form-control",disabled:c,readOnly:s},"\n\t\t",d.map(function(e,t){return P.a.createElement(k.Fragment,{key:e+t},P.a.createElement("option",null,e),t!==d.length-1?"\n\t\t":"")}),"\n\t"):P.a.createElement("input",C),"\n",x?P.a.createElement(B,{icon:x}):null," ",x?"\n":null,g?P.a.createElement(T,{type:E,value:g,color:h,disabled:c}):null,g?"\n":null),v?P.a.createElement("div",{className:"help-block","data-success":N||null,"data-error":w||null},v):null)};o.propTypes={type:l.a.string.isRequired,id:l.a.string,placeholder:l.a.string,pattern:l.a.string,validate:l.a.bool,required:l.a.bool,defaultValue:l.a.string,autoComplete:l.a.string,disabled:l.a.bool,readOnly:l.a.bool,label:l.a.string,validationState:l.a.oneOf(["success","error",""]),selectOptions:l.a.array,prefixValue:l.a.string,prefixType:l.a.oneOf(["button","icon",""]),prefixBtnColor:l.a.oneOf(["primary","secondary","danger"]),postfixValue:l.a.string,postfixType:l.a.oneOf(["button","icon",""]),postfixBtnColor:l.a.oneOf(["primary","secondary","danger"]),feedbackIcon:l.a.string,helpBlock:l.a.oneOfType([l.a.string,l.a.bool]),errorMessag:l.a.string,successMessag:l.a.string},t.b=o},384:function(e,t,a){"use strict";a.r(t),a.d(t,"BasicExample",function(){return f}),a.d(t,"CheckboxesAndRadios",function(){return b}),a.d(t,"ButtonAddons",function(){return y}),a.d(t,"WithSelect",function(){return g}),a.d(t,"WithFeedbackIcon",function(){return E}),a.d(t,"ValidationStates",function(){return h}),a.d(t,"Disabled",function(){return x});var r=a(0),o=a.n(r),i=a(345),n=a(361),u=a.n(n),l=a(362);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"basic-example"},"Basic example"),o.a.createElement("p",null,"Add a ",o.a.createElement(u.a,{className:"language-html"},"<span>")," with class ",o.a.createElement(i.Property,{value:".input-group-addon"})," to get a gray box on the left, right or both sides of an ",o.a.createElement(u.a,{className:"language-html"},"<input>")," element. The position of your ",o.a.createElement(i.Property,{value:".input-group-addon"})," depends on if you place it before or after the ",o.a.createElement(u.a,{className:"language-html"},"<input")," element."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(l.b,{id:"input-id-1",type:"text",label:"Name",placeholder:"Name",prefixValue:"Mr."})," ","\n\n",o.a.createElement(l.b,{id:"input-id-2",type:"text",label:"Email",placeholder:"Email",prefixType:"icon",prefixValue:"email"})," ","\n\n",o.a.createElement(l.b,{id:"input-id-3",type:"number",label:"Amount",placeholder:"Rounded to nearest $",prefixType:"icon",prefixValue:"attach_money",postfixValue:".00"})," ","\n\n",o.a.createElement(l.b,{id:"input-id-4",type:"textarea",label:"Notes",placeholder:"Special requests",prefixType:"icon",prefixValue:"format_quote"})))},b=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"checkboxes-and-radios"},"Checkboxes and radios"),o.a.createElement("p",null,"Place any checkbox or radio option within an input group’s addon instead of text."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"input-group"},"\n",o.a.createElement("span",{className:"input-group-addon"},"\n\t\t",o.a.createElement("input",{type:"checkbox"}),"\n\t"),"\n",o.a.createElement("input",{type:"text",className:"form-control"}),"\n")),"\n\n",o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"input-group"},"\n",o.a.createElement("span",{className:"input-group-addon"},"\n\t\t",o.a.createElement("input",{type:"radio"}),"\n\t"),"\n",o.a.createElement("input",{type:"text",className:"form-control"}),"\n"))))},y=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"button-addons"},"Button addons"),o.a.createElement("p",null,"If you want ",o.a.createElement(u.a,{className:"language-html"},"<button>"),"s included with your input elements you can just add a ",o.a.createElement(u.a,{className:"language-html"},"<button>")," inside a input-group like you would anywhere else."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement(l.b,{type:"text",postfixType:"button",postfixValue:"Button",postfixBtnColor:"primary"})," ","\n\n",o.a.createElement(l.b,{type:"text",prefixType:"button",prefixValue:"Button",prefixBtnColor:"secondary",postfixType:"button",postfixValue:"Button",postfixBtnColor:"danger"})))},g=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"with-select"},"With select"),o.a.createElement("p",null,"Inserting text next to a ",o.a.createElement(u.a,{className:"language-html"},"<select>")," works just like any other input element."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement(l.b,{type:"select",selectOptions:["Bounty hunter","Smuggler","Jedi"],prefixValue:"Profession"})))},E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"with-feedback"},"With feedback"),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement(l.b,{id:"input-with-feedback-1",type:"text",label:"Name",placeholder:"Name",prefixValue:"Mr.",feedbackIcon:"cancel"})))},h=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"validation-states"},"Validation states"),o.a.createElement("p",null,"You can also visualize validation on your input-groups. Just add ",o.a.createElement(i.Property,{value:".has-success"})," or ",o.a.createElement(i.Property,{value:".has-error"})," with a ",o.a.createElement(i.Property,{value:".input-group"}),"."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement(l.b,{type:"text",validationState:"success",placeholder:"Name",prefixValue:"Mr.",defaultValue:"Anderson"})," ","\n\n",o.a.createElement(l.b,{type:"text",validationState:"error",placeholder:"Name",prefixValue:"Agent",defaultValue:"Smith"})))},x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"disabled"},"Disabled"),o.a.createElement("p",null,"Just like for forms you can add ",o.a.createElement(i.Attribute,{name:"disabled"})," to an input element to disable it. If you are going to disable an element in a ",o.a.createElement(i.Property,{value:".input-group"})," make sure to also add the ",o.a.createElement(i.Attribute,{name:"disabled"})," attribute to the buttons."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement(l.b,{id:"input-id-3",type:"number",label:"Amount",placeholder:"Rounded to nearest $",disabled:!0,prefixType:"icon",prefixValue:"attach_money",postfixValue:".00"}),o.a.createElement(l.b,{type:"text",disabled:!0,prefixType:"button",prefixValue:"Button",prefixBtnColor:"secondary",postfixType:"button",postfixValue:"Button",postfixBtnColor:"danger"})))},v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,m(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["Component"]),a=t,(n=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement(i.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"You can include additional information to specific input elements by adding ",o.a.createElement(u.a,{className:"language-html"},"<span>"),"s or ",o.a.createElement(u.a,{className:"language-html"},"<button>"),"s in a ",o.a.createElement(i.Property,{value:".input-group"}),"."),o.a.createElement(f,null),o.a.createElement(y,null),o.a.createElement(g,null),o.a.createElement(h,null),o.a.createElement(x,null))}}])&&s(a.prototype,n),l&&s(a,l),t}();t.default=v}}]);
//# sourceMappingURL=doc-route.chunk_11.js.map?720bec18619f63aade74