(this["webpackJsonphexagonal-2048"]=this["webpackJsonphexagonal-2048"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(4),l=a.n(n),r=a(2),u=[{id:"localhost",value:"http://localhost:13337"},{id:"server",value:"//68f02c80-3bed-4e10-a747-4ff774ae905a.pub.instances.scw.cloud"}],i=a(0);function j(e){for(var t=e.level,a=e.changeLevel,c=e.server,n=e.setServer,l=[],r=function(e){l.push(Object(i.jsx)("button",{className:t===e?"active":"",onClick:function(){return a(e)},children:e},e))},j="2";j<="4";j++)r(j);var d=Object(s.useCallback)((function(e){n(e.target.value)}),[c]);return Object(i.jsxs)("div",{className:"menu",children:[Object(i.jsxs)("dl",{className:"menu-item",children:["RNG-server url",Object(i.jsx)("select",{id:"url-server",onChange:d,value:c,children:u.map((function(e,t){return Object(i.jsx)("option",{id:e.id,value:e.value,children:e.value},t)}))})]}),Object(i.jsxs)("dl",{className:"menu-item",children:[Object(i.jsx)("dt",{className:"menu-title",children:"Select radius"}),Object(i.jsx)("dd",{className:"menu-items",children:l})]})]})}function d(e){var t=e.status;return Object(i.jsxs)("div",{className:"status",children:["Game status: ",Object(i.jsx)("span",{"data-status":t,children:t})]})}function o(e){for(var t=e.level,a=[],s=1-t;s<t;s++){for(var c=[],n=t-1-(s<=0?0:s),l=0;l<2*t-1-Math.abs(s);l++){var r=0-s-n;c.push(Object(i.jsx)("div",{className:"hexagon","data-value":"0","data-x":s,"data-y":n,"data-z":r,children:Object(i.jsx)("span",{className:"value",children:0})},l)),n--}a.push(c)}return Object(i.jsx)("div",{className:"game level-"+t,children:a.map((function(e,t){return Object(i.jsx)("div",{className:"column",children:e},t)}))})}var v=function(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)("round-select"),l=Object(r.a)(n,2),v=l[0],b=l[1],h=Object(s.useState)(u[1].value),O=Object(r.a)(h,2),m=O[0],x=O[1];return Object(i.jsxs)("main",{children:[Object(i.jsx)(j,{level:a,changeLevel:function(e){c(e),b("playing")},server:m,setServer:x}),"round-select"!==v?Object(i.jsx)(o,{level:a}):Object(i.jsx)(s.Fragment,{}),Object(i.jsx)(d,{status:v}),"round-select"!==v?Object(i.jsx)("p",{children:Object(i.jsx)("i",{children:"Use q, w, e, a, s, d keys for move"})}):Object(i.jsx)(s.Fragment,{})]})},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,11)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),s(e),c(e),n(e),l(e)}))};l.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),b()}},[[10,1,2]]]);
//# sourceMappingURL=main.017e6ffa.chunk.js.map