(this["webpackJsonptask-management-app-react"]=this["webpackJsonptask-management-app-react"]||[]).push([[0],{16:function(n,e,t){n.exports=t(23)},23:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(11),i=t.n(o),c=t(1),u=t(2);function l(){var n=Object(c.a)(["\n    html {\n        box-sizing: border-box;\n        font-family: 'Montserrat', sans-serif;\n    }\n\n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    body {\n        background-color: rgb(250, 250, 250);\n    }\n"]);return l=function(){return n},n}var s=Object(u.a)(l()),d=t(3);function f(){var n=Object(c.a)(["\n    flex-basis: 100px;\n    background-color: teal;\n    color: white;\n    padding: 5px;\n    border: none;\n    margin-left: 10px;\n    cursor: pointer;\n    transition: background-color 0.2s ease-in, transform 0.15s ease;\n\n    &:hover{\n        background-color: #009999;\n        transform: scale(1.1);\n    }\n\n    @media (max-width:515px) and (orientation:portrait) {\n        flex-basis: 100%;\n        margin: 10px 0;\n        padding: 10px;\n        height: 50px;\n        font-size: 20px;\n}\n"]);return f=function(){return n},n}function g(){var n=Object(c.a)(["\n    flex-grow: 1;\n    padding: 10px;\n    font-size: 20px;\n\n    @media (max-width:515px) and (orientation:portrait) {\n        width: 100%;\n        flex-basis: 100%;\n        height: 50px;\n}\n"]);return g=function(){return n},n}function m(){var n=Object(c.a)(["\n    display: flex;\n    padding: 15px;\n\n    @media (max-width:515px) and (orientation:portrait) {\n        flex-wrap: wrap;\n}\n"]);return m=function(){return n},n}var p=u.c.form(m()),b=u.c.input(g()),x=u.c.button(f()),h=function(n){var e=n.addNewTask,t=Object(r.useState)(""),o=Object(d.a)(t,2),i=o[0],c=o[1],u=Object(r.useRef)(null);return a.a.createElement(p,{onSubmit:function(n){n.preventDefault(),i.trim()&&e(i.trim()),c(""),u.current.focus()}},a.a.createElement(b,{ref:u,value:i,onChange:function(n){c(n.target.value)},placeholder:"What's to do?",autoFocus:!0}),a.a.createElement(x,null,"Add task"))};function k(){var n=Object(c.a)(["\n        background-color: green;\n\n        &:hover{\n            background-color: hsl(120, 100%, 30%);\n        }\n    "]);return k=function(){return n},n}function v(){var n=Object(c.a)(["\n        background-color: red;\n        font-weight: 700;\n\n        &:hover{\n            background-color: hsl(0, 100%, 65%);\n        }\n    "]);return v=function(){return n},n}function O(){var n=Object(c.a)(["\n    flex-basis: 30px;\n    flex-shrink: 0;\n    height: 30px;\n    padding: 3px;\n    border: none;\n    cursor: pointer;\n    color: white;\n    transition: background-color 0.15s;\n\n    ","\n\n    ","\n"]);return O=function(){return n},n}function j(){var n=Object(c.a)(["\n        text-decoration: line-through;\n    "]);return j=function(){return n},n}function w(){var n=Object(c.a)(["\n    flex-grow: 1;\n    margin: 20px 10px;\n\n    ","\n"]);return w=function(){return n},n}function E(){var n=Object(c.a)(["\n        display: none;\n    "]);return E=function(){return n},n}function T(){var n=Object(c.a)(["\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid rgb(250,250,250);\n\n    ","\n"]);return T=function(){return n},n}function y(){var n=Object(c.a)(["\n    list-style: none;\n    padding: 10px 20px;\n    margin: 0;\n    grid-area: list;\n"]);return y=function(){return n},n}var D=u.c.ul(y()),S=u.c.li(T(),(function(n){return n.hidden&&Object(u.b)(E())})),z=u.c.p(w(),(function(n){return n.done&&Object(u.b)(j())})),A=u.c.button(O(),(function(n){return n.remove&&Object(u.b)(v())}),(function(n){return n.done&&Object(u.b)(k())})),H=function(n){var e=n.tasks,t=n.isDoneTasksHidden,r=n.removeTask,o=n.toggleTaskDone;return a.a.createElement(D,null,e.map((function(n){return a.a.createElement(S,{key:n.id,hidden:t&&n.done},a.a.createElement(A,{onClick:function(){return o(n.id)},done:!0},n.done?"\u2714":""),a.a.createElement(z,{done:n.done},n.description),a.a.createElement(A,{onClick:function(){return r(n.id)},remove:!0},"\ud83d\uddd1"))})))};function C(){var n=Object(c.a)(["\n        grid-area: button--toggleDone;\n        margin-right: 15px;\n\n        @media (max-width:515px) and (orientation:portrait) {\n                margin: 0;  \n            }\n    "]);return C=function(){return n},n}function B(){var n=Object(c.a)(["\n        grid-area: button--hide;\n    "]);return B=function(){return n},n}function N(){var n=Object(c.a)(["\n    background-color: transparent;\n    color: teal;\n    border: none;\n    cursor: pointer;\n\n    &:hover{\n        color: #009999;\n    }\n\n    :disabled{\n        color: gray;\n        cursor: default;\n    }\n\n    ","\n\n    ","\n"]);return N=function(){return n},n}var J=u.c.button(N(),(function(n){return n.hide&&Object(u.b)(B())}),(function(n){return n.toggleDone&&Object(u.b)(C())})),I=function(n){var e=n.tasks,t=n.isDoneTasksHidden,r=n.toggleHideDone,o=n.setAllTasksDone;return e.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(J,{hide:!0,onClick:r},t?"Show done tasks":"Hide done tasks"),a.a.createElement(J,{toggleDone:!0,disabled:e.every((function(n){return n.done})),onClick:o},"Set all tasks done"))};function M(){var n=Object(c.a)(["\n    font-size: 22px;\n    border-bottom: 1px solid rgb(250,250,250);\n    padding: 15px;\n    margin: 0;\n    grid-area: title;\n\n    @media (max-width:515px) and (orientation:portrait) {\n        text-align: center;\n}\n"]);return M=function(){return n},n}function W(){var n=Object(c.a)(['\n    display: grid;\n    grid-template-areas: "title button--hide button--toggleDone" "list list list";\n    grid-template-columns: 1fr auto auto;\n    grid-gap: 20px;\n    align-items: center;\n    background-color: white;\n    margin-top: 20px;\n\n    @media (max-width:515px) and (orientation:portrait) {\n        grid-template-areas: "title" "button--hide" "button--toggleDone" "list";\n        grid-template-columns: 1fr;\n}\n']);return W=function(){return n},n}var F=u.c.section(W()),L=u.c.h2(M()),P=function(n){var e=n.title,t=n.extraHeaderContent,r=n.sectionBody;return a.a.createElement(F,null,a.a.createElement(L,null,e),t,r)};function R(){var n=Object(c.a)(["\n    font-size: 22px;\n    border-bottom: 1px solid rgb(250,250,250);\n    padding: 15px;\n    margin-bottom: 0;\n\n    @media (max-width:515px) and (orientation:portrait) {\n        text-align: center;\n}\n"]);return R=function(){return n},n}function $(){var n=Object(c.a)(["\n    background-color: white;\n"]);return $=function(){return n},n}var q=u.c.section($()),G=u.c.h1(R()),K=function(n){var e=n.title,t=n.sectionBody;return a.a.createElement(q,null,a.a.createElement(G,null,e),t)};function Q(){var n=Object(c.a)(["\n    font-family: 'Arvo', serif;\n    text-align: center;\n    font-style: italic;\n    font-size: 36px;\n"]);return Q=function(){return n},n}var U=u.c.h1(Q()),V=function(n){var e=n.title;return a.a.createElement("header",null,a.a.createElement(U,null,e))};function X(){var n=Object(c.a)(["\n    max-width: 1000px;\n    margin: 0 auto;\n    padding: 0 10px 10px;\n"]);return X=function(){return n},n}var Y=u.c.main(X()),Z=function(n){var e=n.children;return a.a.createElement(Y,null,e)};function _(){var n=Object(c.a)(["\n    padding: 15px;\n    font-size: 18px;\n    text-align: center;\n    background-color: teal;\n    color: white;\n\n    @media (max-width:515px) and (orientation:portrait) {\n        font-size: 14px;\n        padding: 10px;\n}\n"]);return _=function(){return n},n}var nn=u.c.footer(_()),en=function(n){var e=n.title;return a.a.createElement(nn,null,e)},tn=t(15),rn=t(5);var an=function(){var n=Object(r.useState)(!1),e=Object(d.a)(n,2),t=e[0],o=e[1],i=function(){var n=Object(r.useState)(JSON.parse(localStorage.getItem("tasks"))||[]),e=Object(d.a)(n,2),t=e[0],a=e[1];Object(r.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(t))}),[t]);return{tasksArray:t,removeTask:function(n){a((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){a((function(e){return e.map((function(e){return e.id===n?Object(rn.a)(Object(rn.a)({},e),{},{done:!e.done}):e}))}))},setAllTasksDone:function(){a((function(n){return n.map((function(n){return Object(rn.a)(Object(rn.a)({},n),{},{done:!0})}))}))},addNewTask:function(n){a((function(e){return[].concat(Object(tn.a)(e),[{id:0===e.length?1:e[e.length-1].id+1,description:n,done:!1}])}))}}}(),c=i.tasksArray,u=i.removeTask,l=i.toggleTaskDone,s=i.setAllTasksDone,f=i.addNewTask;return a.a.createElement(Z,null,a.a.createElement(V,{title:"Task management application"}),a.a.createElement(K,{title:"Add new task",sectionBody:a.a.createElement(h,{addNewTask:f})}),a.a.createElement(P,{title:"Tasks List",extraHeaderContent:a.a.createElement(I,{toggleHideDone:function(){o((function(n){return!n}))},setAllTasksDone:s,tasks:c,isDoneTasksHidden:t}),sectionBody:a.a.createElement(H,{tasks:c,isDoneTasksHidden:t,removeTask:u,toggleTaskDone:l})}),a.a.createElement(en,{title:"Task management application by Mateusz Polok 2020"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null),a.a.createElement(an,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.f412127b.chunk.js.map