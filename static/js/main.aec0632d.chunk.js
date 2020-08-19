(this["webpackJsonptask-management-app-react"]=this["webpackJsonptask-management-app-react"]||[]).push([[0],{17:function(n,e,t){n.exports=t(27)},22:function(n,e,t){},25:function(n,e,t){},26:function(n,e,t){},27:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(11),i=t.n(o),c=(t(22),t(16)),u=t(8),l=t(7),s=t(15),d=t(1),f=t(2);function m(){var n=Object(d.a)(["\n    flex-basis: 100px;\n    background-color: teal;\n    color: white;\n    padding: 5px;\n    border: none;\n    margin-left: 10px;\n    cursor: pointer;\n    transition: background-color 0.2s ease-in, transform 0.15s ease;\n\n    &:hover{\n        background-color: #009999;\n        transform: scale(1.1);\n    }\n\n    @media (max-width:515px) and (orientation:portrait) {\n        flex-basis: 100%;\n        margin: 10px 0;\n        padding: 10px;\n        height: 50px;\n        font-size: 20px;\n}\n"]);return m=function(){return n},n}function p(){var n=Object(d.a)(["\n    flex-grow: 1;\n    padding: 10px;\n    font-size: 20px;\n\n    @media (max-width:515px) and (orientation:portrait) {\n        width: 100%;\n        flex-basis: 100%;\n        height: 50px;\n}\n"]);return p=function(){return n},n}function b(){var n=Object(d.a)(["\n    display: flex;\n    padding: 15px;\n\n    @media (max-width:515px) and (orientation:portrait) {\n        flex-wrap: wrap;\n}\n"]);return b=function(){return n},n}var g=f.b.form(b()),x=f.b.input(p()),h=f.b.button(m()),k=function(n){var e=n.addNewTask,t=n.inputRef,o=Object(r.useState)(""),i=Object(s.a)(o,2),c=i[0],u=i[1];return a.a.createElement(g,{onSubmit:function(n){n.preventDefault(),c.trim()&&e(c.trim()),u("")}},a.a.createElement(x,{ref:t,value:c,onChange:function(n){u(n.target.value)},placeholder:"What's to do?",autoFocus:!0}),a.a.createElement(h,null,"Add task"))};function v(){var n=Object(d.a)(["\n        background-color: green;\n\n        &:hover{\n            background-color: hsl(120, 100%, 30%);\n        }\n    "]);return v=function(){return n},n}function O(){var n=Object(d.a)(["\n        background-color: red;\n        font-weight: 700;\n\n        &:hover{\n            background-color: hsl(0, 100%, 65%);\n        }\n    "]);return O=function(){return n},n}function j(){var n=Object(d.a)(["\n    flex-basis: 30px;\n    flex-shrink: 0;\n    height: 30px;\n    padding: 3px;\n    border: none;\n    cursor: pointer;\n    color: white;\n    transition: background-color 0.15s;\n\n    ","\n\n    ","\n"]);return j=function(){return n},n}function E(){var n=Object(d.a)(["\n        text-decoration: line-through;\n    "]);return E=function(){return n},n}function w(){var n=Object(d.a)(["\n    flex-grow: 1;\n    margin: 20px 10px;\n\n    ","\n"]);return w=function(){return n},n}function y(){var n=Object(d.a)(["\n        display: none;\n    "]);return y=function(){return n},n}function T(){var n=Object(d.a)(["\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid rgb(250,250,250);\n\n    ","\n"]);return T=function(){return n},n}function S(){var n=Object(d.a)(["\n    list-style: none;\n    padding: 10px 20px;\n    margin: 0;\n    grid-area: list;\n"]);return S=function(){return n},n}var D=f.b.ul(S()),H=f.b.li(T(),(function(n){return n.hidden&&Object(f.a)(y())})),N=f.b.p(w(),(function(n){return n.done&&Object(f.a)(E())})),C=f.b.button(j(),(function(n){return n.remove&&Object(f.a)(O())}),(function(n){return n.done&&Object(f.a)(v())})),z=function(n){var e=n.tasks,t=n.isDoneTasksHidden,r=n.removeTask,o=n.toggleTaskDone;return a.a.createElement(D,null,e.map((function(n){return a.a.createElement(H,{key:n.id,hidden:t&&n.done},a.a.createElement(C,{onClick:function(){return o(n.id)},done:!0},n.done?"\u2714":""),a.a.createElement(N,{done:n.done},n.description),a.a.createElement(C,{onClick:function(){return r(n.id)},remove:!0},"\ud83d\uddd1"))})))};function B(){var n=Object(d.a)(["\n        grid-area: button--toggleDone;\n        margin-right: 15px;\n\n        @media (max-width:515px) and (orientation:portrait) {\n                margin: 0;  \n            }\n    "]);return B=function(){return n},n}function A(){var n=Object(d.a)(["\n        grid-area: button--hide;\n    "]);return A=function(){return n},n}function J(){var n=Object(d.a)(["\n    background-color: transparent;\n    color: teal;\n    border: none;\n    cursor: pointer;\n\n    &:hover{\n        color: #009999;\n    }\n\n    :disabled{\n        color: gray;\n        cursor: default;\n    }\n\n    ","\n\n    ","\n"]);return J=function(){return n},n}var _=f.b.button(J(),(function(n){return n.hide&&Object(f.a)(A())}),(function(n){return n.toggleDone&&Object(f.a)(B())})),I=function(n){var e=n.tasks,t=n.isDoneTasksHidden,r=n.toggleHideDone,o=n.setAllTasksDone;return e.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(_,{hide:!0,onClick:r},t?"Show done tasks":"Hide done tasks"),a.a.createElement(_,{toggleDone:!0,disabled:e.every((function(n){return n.done})),onClick:o},"Set all tasks done"))},R=(t(25),function(n){var e=n.title,t=n.extraHeaderContent,r=n.sectionBody;return a.a.createElement("section",{className:"tasksSection"},a.a.createElement("h2",{className:"tasksSection__title"},e),t,r)}),W=(t(26),function(n){var e=n.title,t=n.sectionBody;return a.a.createElement("section",{className:"newTaskSection"},a.a.createElement("h2",{className:"newTaskSection__title"},e),t)});function F(){var n=Object(d.a)(["\n    font-family: 'Arvo', serif;\n    text-align: center;\n    font-style: italic;\n    font-size: 36px;\n"]);return F=function(){return n},n}var M=f.b.h1(F()),L=function(n){var e=n.title;return a.a.createElement("header",null,a.a.createElement(M,null,e))};function P(){var n=Object(d.a)(["\n    max-width: 1000px;\n    margin: 0 auto;\n    padding: 0 10px 10px;\n"]);return P=function(){return n},n}var $=f.b.main(P()),q=function(n){var e=n.children;return a.a.createElement($,null,e)};function G(){var n=Object(d.a)(["\n    padding: 15px;\n    font-size: 18px;\n    text-align: center;\n    background-color: teal;\n    color: white;\n\n    @media (max-width:515px) and (orientation:portrait) {\n        font-size: 14px;\n        padding: 10px;\n}\n"]);return G=function(){return n},n}var K=f.b.footer(G()),Q=function(n){var e=n.title;return a.a.createElement(K,null,e)};var U=function(){var n=Object(r.useState)(!1),e=Object(l.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(JSON.parse(localStorage.getItem("tasks"))||[]),s=Object(l.a)(i,2),d=s[0],f=s[1];Object(r.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(d))}),[d]);var m=Object(r.useRef)(null);return a.a.createElement(q,null,a.a.createElement(L,{title:"Task management application"}),a.a.createElement(W,{title:"Add new task",sectionBody:a.a.createElement(k,{addNewTask:function(n){f((function(e){return[].concat(Object(c.a)(e),[{id:0===e.length?1:e[e.length-1].id+1,description:n,done:!1}])})),m.current.focus()},inputRef:m})}),a.a.createElement(R,{title:"Tasks List",extraHeaderContent:a.a.createElement(I,{toggleHideDone:function(){o((function(n){return!n}))},setAllTasksDone:function(){f((function(n){return n.map((function(n){return Object(u.a)({},n,{done:!0})}))}))},tasks:d,isDoneTasksHidden:t}),sectionBody:a.a.createElement(z,{tasks:d,isDoneTasksHidden:t,removeTask:function(n){f((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){f((function(e){return e.map((function(e){return e.id===n?Object(u.a)({},e,{done:!e.done}):e}))}))}})}),a.a.createElement(Q,{title:"Task management application by Mateusz Polok 2020"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.aec0632d.chunk.js.map