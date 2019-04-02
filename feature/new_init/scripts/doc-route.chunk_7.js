(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[56],{389:function(e,t,a){"use strict";a.r(t),a.d(t,"AboutDatepickers",function(){return E}),a.d(t,"SimpleDatepicker",function(){return b}),a.d(t,"AllowInput",function(){return h}),a.d(t,"HumanReadable",function(){return g}),a.d(t,"InitialValue",function(){return v}),a.d(t,"CustomFormat",function(){return y}),a.d(t,"IncludeTime",function(){return w}),a.d(t,"ShowingMultipleMonths",function(){return k}),a.d(t,"ValidDates",function(){return A}),a.d(t,"DateRange",function(){return x}),a.d(t,"MultipleDates",function(){return D}),a.d(t,"Options",function(){return P});var n=a(1),l=a.n(n),r=a(365),i=a(362),u=a(378),c=a(66),m=a(355);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"about-datepickers"},"About"),l.a.createElement("p",null,"Datepickers give a visual presentation of days, months and years. By utilizing the datepicker you can be assured the given input is in the format you expect without having to deal with too much client-side validation. Datepickers should be used for recent dates to avoid having the user click a lot of times to find the required date. If you need a date of birth or something similarly far back, an input field with proper validation will be easier to use."))},b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"simple-datepicker"},"Simple datepicker"),l.a.createElement("p",null,"A basic datepicker can be made by applying the attribute ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker"})," to an input element inside a ",l.a.createElement(i.Property,{value:".form-group"}),". The basic datepicker has a read-only input field."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{label:"Date",prefixType:"icon",prefixValue:"event",id:"simle-datepicker"})))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"allow-input"},"Allow input"),l.a.createElement("p",null,"By default datepickers do not allow input but you can use ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker-allowinput"}),". When you allow input then the given date has to match the datepicker format (",l.a.createElement(i.Attribute,{value:"iso8601"})," if you have not specified a format)."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{label:"Date",prefixType:"icon",prefixValue:"event",id:"simle-datepicker",allowinput:!0})))},v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"initial-value"},"Initial value"),l.a.createElement("p",null,"If you want to set an initial value for your datepicker use ",l.a.createElement(i.Attribute,{data:!0,value:"{your-date}",name:"datepicker-value"}),"."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{value:"1972-12-28",label:"Date",prefixType:"icon",prefixValue:"event",id:"init-value-datepicker"})))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"human-readable"},"Human readable date"),l.a.createElement("p",null,"If you wish to make the date more readable to humans you can add ",l.a.createElement(i.Attribute,{data:!0,value:"true",name:"datepicker-fulldate"})),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{value:"1972-12-28",label:"Date",prefixType:"icon",prefixValue:"event",fulldate:!0,id:"init-value-datepicker"})))},y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"custom-format"},"Custom format"),l.a.createElement("p",null,"To use a custom format include ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker-format",value:"[nb|sv|da|fi|en|iso8601(default)]"}),". If no format is provided then datepicker will default to ",l.a.createElement(i.Attribute,{value:"iso8601"}),". Same behaviour applies if you try to set an invalid date."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{label:"nb (norwegian):",value:"28.12.1972",format:"nb",prefixType:"icon",prefixValue:"event",id:"nb-datepicker"}),l.a.createElement(u.b,{label:"sv (swedish):",value:"1972-12-28",format:"sv",prefixType:"icon",prefixValue:"event",id:"sv-datepicker"}),l.a.createElement(u.b,{label:"da (danish):",value:"28.12.1972",format:"da",prefixType:"icon",prefixValue:"event",id:"da-datepicker"}),l.a.createElement(u.b,{label:"fi (finnish):",value:"28.12.1972",format:"fi",prefixType:"icon",prefixValue:"event",id:"fi-datepicker"}),l.a.createElement(u.b,{label:"en (english):",value:"28/12/1972",format:"en",prefixType:"icon",prefixValue:"event",id:"en-datepicker"}),l.a.createElement(u.b,{label:"iso8601 (robotic):",value:"1972-12-28",format:"iso8601",prefixType:"icon",prefixValue:"event",id:"iso8601-datepicker"})))},w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"include-time"},"Include time"),l.a.createElement("p",null,"Adding time to your datepicker is as easy as using ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker-time",value:"true"}),". If you wish to set a default time for the time picker just include it in the ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker-value"})," attribute."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{value:"28.12.1972 12:00",time:!0,format:"nb",label:"Date",prefixType:"icon",prefixValue:"event",id:"include-time-datepicker"})))},k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"showing-multiple-months"},"Showing multiple months"),l.a.createElement("p",null,"If you need to show more than one month in your date picker use the attribute ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker-months",value:"{number}"}),"."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{months:"2",label:"Date",prefixType:"icon",prefixValue:"event",id:"multiple-months-datepicker"})))},A=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"valid-dates"},"Valid dates"),l.a.createElement("p",null,"You can set a range of available dates to select from by using ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker-min"})," and ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker-max"}),"."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{value:"28.12.1972",min:"28.12.1972",max:"10.05.2017",format:"nb",label:"Date",prefixType:"icon",prefixValue:"event",id:"valid-dates-datepicker"})))},x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"date-range"},"Date range"),l.a.createElement("p",null,"You can make it possible to select a range of dates with ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker-mode",value:"range"}),"."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{min:"10.12.1972",label:"date",prefixType:"icon",prefixValue:"event",id:"date-range-datepicker",mode:"range",format:"nb"})))},D=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"multiple-dates"},"Multiple dates"),l.a.createElement("p",null,"Set mode to ",l.a.createElement(i.Attribute,{value:"multiple"})," for multiple date selection."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{min:"10.12.1972",label:"date",prefixType:"icon",prefixValue:"event",id:"date-range-datepicker",mode:"multiple",format:"nb"})),l.a.createElement(m.a,{type:"warning"},l.a.createElement("h5",null,"Max number of dates"),l.a.createElement("p",null,"The ",l.a.createElement(i.Attribute,{value:"multiple"})," variation of datepicker does not have an upper limit of dates. Use ",l.a.createElement(r.NavHashLink,{to:"#date-range"},"range")," if you want to select a continuous range of dates.")))},P=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"available-options"},"Available options"),l.a.createElement("p",null,"Options available through ",l.a.createElement(i.Attribute,{data:!0,name:"datepicker"}),"...")," Keep in mind that setting any of these values will render them true, so setting an attribute to ",l.a.createElement(i.Attribute,{value:"false"})," will still render it true.",l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Attribute"),l.a.createElement("th",null,"Default value"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(i.Attribute,{data:!0,name:"datepicker-value"})),l.a.createElement("td",null,l.a.createElement(i.Attribute,{value:"null"})),l.a.createElement("td",null,"Value used to initialize calendar. Set this value with the same format currently set for the datepicker (including time if you have enabled that).")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(i.Attribute,{data:!0,name:"datepicker-allowinput"})),l.a.createElement("td",null),l.a.createElement("td",null,"This allows the user to write in the input field. The dates given must match the format of the datepicker.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(i.Attribute,{data:!0,name:"datepicker-format"})),l.a.createElement("td",null,l.a.createElement(i.Attribute,{value:"iso8601"})),l.a.createElement("td",null,l.a.createElement("p",null,"Format string used for the input field and names for days and months. All have the same time format (HH:mm), and starts the week on monday (1)."),l.a.createElement("p",null,"The following options are available:"),l.a.createElement("ul",{className:"list"},l.a.createElement("li",{className:"mb-sm"},l.a.createElement(i.Attribute,{value:"nb"}),": DD.MM.YYYY"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(i.Attribute,{value:"sv"}),": YYYY-MM-DD"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(i.Attribute,{value:"da"}),": DD.MM.YYYY"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(i.Attribute,{value:"fi"}),": DD.MM.YYYY"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(i.Attribute,{value:"en"}),": DD/MM/YYYY"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(i.Attribute,{value:"iso8601"}),": YYYY-MM-DD (default)")))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(i.Attribute,{data:!0,name:"datepicker-time"})),l.a.createElement("td",null,l.a.createElement(i.Attribute,{value:"false"})),l.a.createElement("td",null,"If the calendar shows the current time and allows you to change it using a dropdown.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(i.Attribute,{data:!0,name:"datepicker-months"})),l.a.createElement("td",null,l.a.createElement(i.Attribute,{value:"1"})),l.a.createElement("td",null,"Number of months to display in the datepicker.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(i.Attribute,{data:!0,name:"datepicker-min"})),l.a.createElement("td",null,l.a.createElement(i.Attribute,{value:"null"})),l.a.createElement("td",null,"Disallow dates before min.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(i.Attribute,{data:!0,name:"datepicker-max"})),l.a.createElement("td",null,l.a.createElement(i.Attribute,{value:"null"})),l.a.createElement("td",null,"Disallow dates past max.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(i.Attribute,{data:!0,name:"datepicker-altinput"})),l.a.createElement("td",null),l.a.createElement("td",null,"Use a custom format to display the selected date(s) shown in the input field.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(i.Attribute,{data:!0,name:"datepicker-mode"})),l.a.createElement("td",null,l.a.createElement(i.Attribute,{value:"single"})),l.a.createElement("td",null,"Different variations of date selection. Available options are:",l.a.createElement("ul",{className:"list"},l.a.createElement("li",{className:"mb-sm"},l.a.createElement(i.Attribute,{value:"single"}),"User can select one date"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(i.Attribute,{value:"multiple"}),"User can select multiple dates"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(i.Attribute,{value:"range"}),"User can select a range of continuous dates")))))))},Y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,p(t).apply(this,arguments))}var a,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,n["Component"]),a=t,(r=[{key:"componentDidMount",value:function(){c.datepicker.init()}},{key:"render",value:function(){return l.a.createElement(i.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Datepickers makes it easy to get dates from your users. With datepickers you do not have to worry about how your users write the given date, alleviating the need to do format validation."),l.a.createElement(E,null),l.a.createElement(b,null),l.a.createElement(h,null),l.a.createElement(g,null),l.a.createElement(v,null),l.a.createElement(y,null),l.a.createElement(w,null),l.a.createElement(k,null),l.a.createElement(A,null),l.a.createElement(x,null),l.a.createElement(D,null),l.a.createElement(P,null))}}])&&d(a.prototype,r),u&&d(a,u),t}();t.default=Y}}]);
//# sourceMappingURL=doc-route.chunk_7.js.map?efd175515a42ee482a1d