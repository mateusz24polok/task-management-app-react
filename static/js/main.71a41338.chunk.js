(this["webpackJsonptask-management-app-react"]=this["webpackJsonptask-management-app-react"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(2),c=n.n(s),i=(n(8),n(9),function(){return o.a.createElement("form",{className:"newTaskSection__form"},o.a.createElement("input",{className:"newTaskSection__input",placeholder:"What's to do?",autoFocus:!0}),o.a.createElement("button",{className:"newTaskSection__button"},"Add task"))}),r=(n(10),function(e){var t=e.tasks,n=e.isDoneTasksHidden;return o.a.createElement("ul",{className:"tasksSection__list"},t.map((function(e){return o.a.createElement("li",{key:e.id,className:"tasksSection__listItem ".concat(n&&e.done?"tasksSection__listItem--hidden":"")},o.a.createElement("button",{className:"tasksSection__listItemButton tasksSection__listItemButton--done"},e.done?"\u2714":""),o.a.createElement("p",{className:"tasksSection__listItemText ".concat(e.done?"tasksSection__listItemText--done":"")},e.description),o.a.createElement("button",{className:"tasksSection__listItemButton tasksSection__listItemButton--delete"},"\ud83d\uddd1"))})))}),l=(n(11),function(e){var t=e.tasks,n=e.isDoneTasksHidden;return t.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"tasksSection__button tasksSection__button--hide"},n?"Poka\u017c uko\u0144czone":"Ukryj uko\u0144czone"),o.a.createElement("button",{className:"tasksSection__button tasksSection__button--toggleDone",disabled:t.every((function(e){return e.done}))},"Uko\u0144cz wszystkie"))}),m=(n(12),function(e){var t=e.title,n=e.extraHeaderContent,a=e.sectionBody;return o.a.createElement("section",{className:"tasksSection"},o.a.createElement("h2",{className:"tasksSection__title"},t),n,a)}),u=(n(13),function(e){var t=e.title,n=e.sectionBody;return o.a.createElement("section",{className:"newTaskSection"},o.a.createElement("h2",{className:"newTaskSection__title"},t),n)}),d=(n(14),function(e){var t=e.title;return o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"appTitle"},t))}),k=(n(15),function(e){var t=e.children;return o.a.createElement("main",{className:"container"},t)}),_=(n(16),function(e){var t=e.title;return o.a.createElement("footer",{className:"footer"},t)}),E=[{id:1,description:"Przej\u015b\u0107 na Reacta",done:!0},{id:2,description:"Zje\u015b\u0107 obiad",done:!1}];var f=function(){return o.a.createElement(k,null,o.a.createElement(d,{title:"Task management application"}),o.a.createElement(u,{title:"Add new task",sectionBody:o.a.createElement(i,null)}),o.a.createElement(m,{title:"Tasks List",extraHeaderContent:o.a.createElement(l,{tasks:E,isDoneTasksHidden:!1}),sectionBody:o.a.createElement(r,{tasks:E,isDoneTasksHidden:!1})}),o.a.createElement(_,{title:"Task management application by Mateusz Polok 2020"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.71a41338.chunk.js.map