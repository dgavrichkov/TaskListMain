(this["webpackJsonptask-list-app"]=this["webpackJsonptask-list-app"]||[]).push([[0],{70:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"toggleTaskAction",(function(){return y})),n.d(r,"delTaskAction",(function(){return E})),n.d(r,"addTaskAction",(function(){return N})),n.d(r,"fetchTasks",(function(){return S}));var a={};n.r(a),n.d(a,"toggleThemeAction",(function(){return T}));var i={};n.r(i),n.d(i,"tasksFilterChangeAction",(function(){return _})),n.d(i,"notesFilterChangeAction",(function(){return k}));var c={};n.r(c),n.d(c,"addNoteAction",(function(){return w})),n.d(c,"delNoteAction",(function(){return A}));var o,s,l,d=n(30),u=n.n(d),j=n(33),p=n(9),b=n(72),h=n(49),x={light:{colors:{primary:"#EEEEEE",accent:"#25CEDE",text:"#687891",pale:"rgba(104, 120, 145, 0.25)"},shadows:{button:"-5.0934px -5.0934px 15.2802px rgba(255, 255, 255, 0.5), 5.0934px 5.0934px 15.2802px rgba(136, 160, 183, 0.25);",input:"inset -5.9893px -5.9893px 17.9679px rgba(255, 255, 255, 0.5), inset 5.9893px 5.9893px 17.9679px rgba(136, 160, 183, 0.25);",buttonInset:"inset -5.0934px -5.0934px 15.2802px rgba(255, 255, 255, 0.5),inset 5.0934px 5.0934px 15.2802px rgba(136, 160, 183, 0.25);"}},dark:{colors:{primary:"#2C2F33",accent:"#25CEDE",text:"#eeeeee",pale:"rgba(104, 120, 145, 0.25)"},shadows:{button:"-6.22302px -6.22302px 18.6691px #3B4451, 6.22302px 6.22302px 18.6691px #000000;",input:"inset -6.22302px -6.22302px 18.6691px #3B4451, inset 6.22302px 6.22302px 18.6691px #000000;",buttonInset:"inset -6.22302px -6.22302px 18.6691px #3B4451, inset 6.22302px 6.22302px 18.6691px #000000;"}}},f=n(8),g=n(20),m=n(2),O=n(31),v=n.n(O);function y(e){return function(t){try{t({type:o.TOGGLE_TASK,payload:e.id})}catch(n){console.log(n)}}}function E(e){return function(t){try{t({type:o.DEL_TASK,payload:e})}catch(n){console.log(n)}}}function N(e){var t=Object(m.a)(Object(m.a)({id:v()()},e),{},{done:!1});return function(e){try{e({type:o.ADD_TASK,payload:t})}catch(n){console.log("\u0441\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c \u0447\u0442\u043e-\u0442\u043e \u043f\u043b\u043e\u0445\u043e\u0435",n)}}}function S(){return function(e){try{e({type:o.FETCH_TASKS}),fetch("http://localhost:5000/tasks").then((function(e){return e.json()})).then((function(t){var n;e({type:o.FETCH_TASKS_SUCCESS,payload:(n=t,{data:Object.fromEntries(n.map((function(e){return[e.id,e]}))),idList:n.map((function(e){return e.id}))})})})).catch((function(){console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u0447\u0443\u0434\u043e\u0432\u0438\u0449\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430")}))}catch(t){console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0442\u0430\u0441\u043a\u043e\u0432")}}}function T(){return function(e,t){var n=t().theme;e({type:"SWITCH_THEME",payload:n="light"===n?"dark":"light"})}}function _(e){return function(t){t({type:s.CHANGE_TASKS_FILTER,payload:e})}}function k(e){return function(t){t({type:s.CHANGE_NOTES_FILTER,payload:e})}}function w(e){return function(t){var n=Object(m.a)({id:v()()},e);try{t({type:l.ADD_NOTE,payload:n})}catch(r){console.log(r)}}}function A(e){return function(t){try{t({type:l.DEL_NOTE,payload:e})}catch(n){console.log(n)}}}!function(e){e.FETCH_TASKS="FETCH_TASKS",e.FETCH_TASKS_SUCCESS="FETCH_TASKS_SUCCESS",e.FETCH_ADD_TASK="FETCH_ADD_TASK",e.ADD_TASK="ADD_TASK",e.DEL_TASK="DEL_TASK",e.TOGGLE_TASK="TOGGLE_TASK"}(o||(o={})),function(e){e.CHANGE_TASKS_FILTER="CHANGE_TASKS_FILTER",e.CHANGE_NOTES_FILTER="CHANGE_NOTES_FILTER"}(s||(s={})),function(e){e.ADD_NOTE="ADD_NOTE",e.DEL_NOTE="DEL_NOTE"}(l||(l={}));var C,L,I,D,F,P,R,H,K,M,G=Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)({},r),a),i),c),q=function(){var e=Object(j.b)();return Object(g.bindActionCreators)(G,e)},U=n(1),V=function(e){var t=e.children,n=e.className,r=e.buttonType,a=void 0===r?"button":r,i=e.disabled,c=e.onClick;return Object(U.jsx)(B,{className:n,type:a,onClick:function(){return c()},disabled:i,children:t})},W=Object(f.c)(V)(C||(C=Object(p.a)(["\n  font-weight: 700;\n"]))),B=f.c.button(L||(L=Object(p.a)(["\n  padding: 12px 18px;\n  border-radius: 20.3736px;\n  border: none;\n  cursor: pointer;\n  box-shadow: ",";\n  background: ",";\n  color: inherit;\n  &:hover {\n    opacity: 0.8;\n  }\n  &:active {\n    box-shadow: ",";\n  }\n\n  &[disabled] {\n    box-shadow: ",";\n    color: ",";\n    pointer-events: none;\n  }\n"])),(function(e){return e.theme.shadows.button||"0 0 0 3px #000"}),(function(e){return e.theme.colors.primary||"#000"}),(function(e){return e.theme.shadows.buttonInset}),(function(e){return e.theme.shadows.buttonInset}),(function(e){return e.theme.colors.pale})),J=function(){var e=q().toggleThemeAction;return Object(U.jsx)(V,{onClick:function(){e()},children:"Switch Theme"})},X=n(18),z=f.c.header(I||(I=Object(p.a)(['\n  display: grid;\n  align-items: center;\n  grid-template-columns: auto 1fr auto;\n  grid-template-areas:\n    "logo navi profile"\n    "theme . profile";\n  column-gap: 32px;\n  row-gap: 16px;\n\n  a {\n    color: ',";\n    &.is-active {\n      color: ",";\n    }\n  }\n"])),(function(e){return e.theme.colors.text||"#000"}),(function(e){return e.theme.colors.accent})),Q=f.c.div(D||(D=Object(p.a)(["\n  grid-area: logo;\n"]))),$={Header:z,Nav:f.c.nav(F||(F=Object(p.a)(["\n  display: flex;\n  gap: 16px;\n  grid-area: navi;\n"]))),SwitcherWrap:f.c.div(P||(P=Object(p.a)(["\n  justify-self: end;\n  grid-area: theme;\n"]))),ProfileArea:f.c.div(R||(R=Object(p.a)(["\n  grid-area: profile;\n\n  display: flex;\n  gap: 16px;\n  align-items: center;\n"]))),Logo:Q},Y={Wrap:f.c.div(H||(H=Object(p.a)(["\n  width: 64px;\n  height: 64px;\n  background: ",";\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  svg {\n    width: 75%;\n    height: 75%;\n  }\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"])),(function(e){return e.theme.colors.pale}))},Z=n(0),ee=n.n(Z),te=["title","titleId"];function ne(){return ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ne.apply(this,arguments)}function re(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ae(e,t){var n=e.title,r=e.titleId,a=re(e,te);return Z.createElement("svg",ne({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-user",ref:t,"aria-labelledby":r},a),n?Z.createElement("title",{id:r},n):null,K||(K=Z.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"})),M||(M=Z.createElement("circle",{cx:12,cy:7,r:4})))}var ie,ce,oe,se=Z.forwardRef(ae),le=(n.p,function(e){var t=e.image;return Object(U.jsx)(Y.Wrap,{children:t?Object(U.jsx)("img",{src:t,alt:"userpic"}):Object(U.jsx)(se,{})})}),de="/TaskListMain",ue="tasks",je="notes",pe="profile",be="login",he="posts",xe=Object(Z.createContext)({user:{},isAuth:!1,isLoading:!1,login:function(){},logout:function(){},token:""}),fe=function(){return Object(Z.useContext)(xe)},ge=n(6),me=n.n(ge),Oe=n(12),ve=n(7),ye=n(4),Ee=function(e,t){var n=Object(Z.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):(window.localStorage.setItem(e,JSON.stringify(t)),t)}catch(r){return t}})),r=Object(ve.a)(n,2),a=r[0],i=r[1];return[a,function(t){try{window.localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}i(t)}]},Ne="https://dummyjson.com",Se=function(){var e=Object(Oe.a)(me.a.mark((function e(t){var n,r;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Ne,"/users/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Te=function(){var e=Object(Oe.a)(me.a.mark((function e(t,n){var r,a;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Ne,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})});case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_e=function(e){var t=e.children,n=Object(Z.useState)(!1),r=Object(ve.a)(n,2),a=r[0],i=r[1],c=Object(Z.useState)({}),o=Object(ve.a)(c,2),s=o[0],l=o[1],d=Object(Z.useState)(!1),u=Object(ve.a)(d,2),j=u[0],p=u[1],b=Ee("dummyToken",""),h=Object(ve.a)(b,2),x=h[0],f=h[1],g=Ee("dummyUserID",""),m=Object(ve.a)(g,2),O=m[0],v=m[1],y=Object(ye.n)();Object(Z.useEffect)((function(){x&&p(!0)}),[x]),Object(Z.useEffect)((function(){var e=function(){var e=Object(Oe.a)(me.a.mark((function e(){var t;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i(!0),e.prev=1,!O){e.next=7;break}return e.next=5,Se(O);case 5:t=e.sent,l(t);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:return e.prev=12,i(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[O]);var E=function(){var e=Object(Oe.a)(me.a.mark((function e(t){var n;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,Te(t.login,t.password);case 4:n=e.sent,console.log("logged data",n),f(n.token),v(n.id),y(pe),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:return e.prev=14,i(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsx)(xe.Provider,{value:{user:s,isAuth:j,isLoading:a,login:E,logout:function(){f(""),v(""),p(!1),y(de,{replace:!0})},token:x},children:t})},ke=function(e){var t=e.pageClass,n=fe(),r=n.isAuth,a=n.logout;return Object(U.jsxs)($.Header,{className:t,children:[Object(U.jsx)("h1",{children:Object(U.jsx)(X.b,{to:de,children:"ToDo"})}),Object(U.jsxs)($.Nav,{children:[Object(U.jsx)(X.c,{to:ue,className:function(e){return e.isActive?"is-active":""},children:"Tasks"}),Object(U.jsx)(X.c,{to:je,className:function(e){return e.isActive?"is-active":""},children:"Notes"}),Object(U.jsx)(X.c,{to:"posts",className:function(e){return e.isActive?"is-active":""},children:"Posts"})]}),Object(U.jsx)("div",{id:"header-portal",className:"header__portal"}),Object(U.jsx)($.SwitcherWrap,{children:Object(U.jsx)(J,{})}),Object(U.jsx)($.ProfileArea,{children:r?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(le,{}),Object(U.jsx)(X.c,{to:pe,className:function(e){return e.isActive?"is-active":""},children:"Profile"}),Object(U.jsx)(V,{onClick:a,children:"Logout"})]}):Object(U.jsx)(X.c,{to:"login",className:function(e){return e.isActive?"is-active":""},children:"Login"})})]})},we=Object(f.b)(ie||(ie=Object(p.a)(['\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  body {\n    font-family: "Rubik", sans-serif;\n    background: ',";\n  }\n  a, button, input, textarea {\n    font-family: inherit;\n    &:focus:not(:focus-visible) {\n      outline: 0;\n    }\n    &:focus-visible,\n    &:-moz-focusring {\n      outline: 1px solid ",'\n    }\n  }\n\n  .loader {\n    width: 100px;\n    height: 100px;\n    border-radius: 100%;\n    position: relative;\n    margin: 0 auto;\n  }\n\n  .loader:before,\n  .loader:after {\n    content: "";\n    position: absolute;\n    top: -10px;\n    left: -10px;\n    width: 100%;\n    height: 100%;\n    border-radius: 100%;\n    border: 10px solid transparent;\n    border-top-color: ',";\n  }\n\n  .loader:before {\n    z-index: 100;\n    animation: spin 1s infinite;\n  }\n\n  .loader:after {\n    border: 10px solid ",";\n  }\n\n  @keyframes spin {\n    0% {\n    -webkit-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n  }\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.accent})),Ae=j.c,Ce=new b.a,Le=function(){var e=Ae((function(e){return e.theme}));return Object(U.jsx)(h.a,{client:Ce,children:Object(U.jsx)(_e,{children:Object(U.jsxs)(f.a,{theme:x[e],children:[Object(U.jsx)(we,{}),Object(U.jsxs)(Ie,{className:"page",children:[Object(U.jsx)(ke,{pageClass:"header"}),Object(U.jsx)("main",{className:"main",children:Object(U.jsx)(ye.a,{})}),Object(U.jsx)("footer",{className:"footer",children:Object(U.jsx)("i",{children:"Just footer"})})]})]})})})},Ie=f.c.div(ce||(ce=Object(p.a)(["\n  max-width: 964px;\n  min-height: 100vh;\n  margin: 0 auto;\n  padding: 20px 32px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr auto;\n  gap: 20px;\n  color: ",";\n  .header {\n    grid-column: 1 / -1;\n  }\n  .main {\n    grid-column: 1 / -1;\n  }\n\n  .footer {\n    grid-column: 1 / -1;\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"])),(function(e){return e.theme.colors.text||"#000"})),De=n(50),Fe=n(51),Pe=n(14),Re=n(24),He=n(42),Ke=n(10),Me={data:{},idList:[]},Ge=Object(g.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me.data,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.ADD_TASK:return Object(m.a)(Object(m.a)({},e),{},Object(Ke.a)({},t.payload.id,t.payload));case o.DEL_TASK:var n=t.payload,r=(e[n],Object(Re.a)(e,[n].map(He.a)));return r;case o.TOGGLE_TASK:var a=e[t.payload];return Object(m.a)(Object(m.a)({},e),{},Object(Ke.a)({},t.payload,Object(m.a)(Object(m.a)({},a),{},{done:!a.done})));case o.FETCH_TASKS_SUCCESS:return t.payload.data;default:return e}},idList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me.idList,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.ADD_TASK:return[].concat(Object(Pe.a)(e),[t.payload.id]);case o.DEL_TASK:return e.filter((function(e){return e!==t.payload}));case o.FETCH_TASKS_SUCCESS:return t.payload.idList;default:return e}}}),qe={data:{1:{id:"1",name:"Lorem",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",category:"\u0431\u0430\u0437\u0430"},2:{id:"2",name:"Note 2",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ein voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",category:"\u0437\u0430\u043c\u0435\u0442\u043a\u0438"}},idList:["1","2"]},Ue=Object(g.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe.data,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.ADD_NOTE:return Object(m.a)(Object(m.a)({},e),{},Object(Ke.a)({},t.payload.id,t.payload));case l.DEL_NOTE:var n=t.payload,r=(e[n],Object(Re.a)(e,[n].map(He.a)));return r;default:return e}},idList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe.idList,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.ADD_NOTE:return[].concat(Object(Pe.a)(e),[t.payload.id]);case l.DEL_NOTE:return e.filter((function(e){return e!==t.payload}));default:return e}}});!function(e){e.SWITCH_THEMES="SWITCH_THEME"}(oe||(oe={}));var Ve="dark",We="all",Be=Object(g.combineReducers)({tasks:Ge,notes:Ue,theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;return t.type===oe.SWITCH_THEMES?t.payload:e},tasksFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0;return t.type===s.CHANGE_TASKS_FILTER?t.payload:e},notesFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0;return t.type===s.CHANGE_NOTES_FILTER?t.payload:e}}),Je=n(67),Xe=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return null}}(),ze=Object(g.createStore)(Be,Xe,Object(De.composeWithDevTools)(Object(g.applyMiddleware)(Fe.a)));ze.subscribe(Je((function(){var e=ze.getState();!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){console.error(n)}}({tasks:e.tasks,notes:e.notes,theme:e.theme,tasksFilter:e.tasksFilter,notesFilter:e.notesFilter})}),1e3));var Qe,$e,Ye,Ze,et,tt=f.c.div(Qe||(Qe=Object(p.a)(["\n    min-height: 100%;\n    display: grid;\n    gap: 24px;\n    grid-template-rows: auto;\n    align-content: start;\n"]))),nt=function(){var e=Object(ye.p)().taskId,t=Ae((function(t){return function(e,t){return!!t&&e.tasks.data[t]}(t,e)})),n=q(),r=n.delTaskAction,a=n.toggleTaskAction,i=Object(ye.n)();return"boolean"===typeof t?null:Object(U.jsxs)(tt,{className:!0===t.done?"is-done":"",children:[Object(U.jsx)("h3",{children:t.name}),Object(U.jsx)("p",{children:t.category}),Object(U.jsx)("i",{className:"id",children:t.id}),Object(U.jsx)(V,{buttonType:"button",onClick:function(){a(t)},children:t.done?"Not done":"Done"}),Object(U.jsx)(V,{buttonType:"button",onClick:function(){r(t.id),i("../tasks",{replace:!0})},children:"Delete"})]})},rt=function(e){var t=e.portalId,n=e.portalElement,r=e.children,a=Object(Z.useState)(),i=Object(ve.a)(a,2),c=i[0],o=i[1];return Object(Z.useLayoutEffect)((function(){if(t){var e=!/^[^.#]+$/.test(t)?document.querySelector(t):document.getElementById(t);o(e)}}),[t]),c?Object(U.jsx)("div",{children:Object(d.createPortal)(n||r,c)}):Object(U.jsx)(U.Fragment,{children:"No data for portal"})},at=function(e){var t=e.tags,n=e.onClickAction;return Object(U.jsx)(U.Fragment,{children:t.map((function(e){return Object(U.jsx)(V,{buttonType:"button",className:"item",onClick:function(){n(e.tagname)},children:e.tagname},e.id)}))})},it=function(e){var t=e.filter,n=e.tags,r=e.onClickAction;return Object(U.jsxs)(ct,{children:[Object(U.jsx)("h4",{children:"Category Filter"}),Object(U.jsxs)("div",{children:["\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0444\u0438\u043b\u044c\u0442\u0440 - ",t]}),Object(U.jsx)(V,{buttonType:"button",className:"item item--clear",onClick:function(){r(We)},children:"Clear filter"}),Object(U.jsx)(at,{tags:n,onClickAction:r})]})},ct=f.c.div($e||($e=Object(p.a)(["\n  align-self: start;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: start;\n  justify-content: start;\n  padding: 14px;\n  border-radius: 4px;\n  background: ",";\n  box-shadow: ",";\n  h4 {\n    margin-bottom: 14px;\n  }\n  .item {\n    margin: 10px;\n    cursor: pointer;\n    &--clear {\n      width: 100%;\n    }\n  }\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.shadows.button})),ot=f.c.form(Ye||(Ye=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  row-gap: 20px;\n  column-gap: 30px;\n  input,\n  textarea {\n    grid-column: span 4;\n    display: block;\n    border: 1px solid transparent;\n    border-radius: 20px;\n    padding: 10px 25px;\n    font-size: 18px;\n    background: ",";\n    box-shadow: ",";\n    color: inherit;\n\n    &.invalid {\n      outline: 1px solid red;\n      /* border-color: red; */\n    }\n  }\n  textarea {\n    resize: none;\n  }\n  button {\n    grid-column: span 2;\n  }\n\n  .text-field {\n    grid-column: span 4;\n  }\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.shadows.input}));!function(e){e.IS_REQUIRED="isRequired",e.MIN_LEN="minLength",e.MAX_LEN="maxLenght"}(et||(et={}));var st,lt={isRequired:1,minLength:2,maxLength:3},dt=(Ze={},Object(Ke.a)(Ze,et.IS_REQUIRED,(function(){return"\u041f\u043e\u043b\u0435 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"})),Object(Ke.a)(Ze,et.MIN_LEN,(function(e){return"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 - ".concat(e)})),Object(Ke.a)(Ze,et.MAX_LEN,(function(e){return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 - ".concat(e)})),Ze),ut="\u041f\u043e\u043b\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0432\u0435\u0440\u043d\u043e",jt="\u041d\u0435\u0442 \u043e\u0448\u0438\u0431\u043e\u043a \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438",pt=function(e){var t=e.initialValue,n=e.validationSettings,r=Object(Z.useState)(t),a=Object(ve.a)(r,2),i=a[0],c=a[1],o=Object(Z.useState)(!1),s=Object(ve.a)(o,2),l=s[0],d=s[1];return{value:i,isDirty:l,onChange:function(e){c(e.target.value)},onBlur:function(){d(!0)},clearInput:function(){c(""),d(!1)},validator:bt(i,n)}},bt=function(e,t){if(!t)return{isValid:{isError:!1,message:jt}};for(var n={},r={isError:!0,message:"default message"},a=0,i=Object.entries(t);a<i.length;a++){var c=Object(ve.a)(i[a],2),o=c[0],s=c[1];switch(o){case et.IS_REQUIRED:n[et.IS_REQUIRED]=e?{isError:!1,message:ut}:{isError:!0,message:dt[et.IS_REQUIRED]()};break;case et.MIN_LEN:e.length<s?n[et.MIN_LEN]={isError:!0,message:dt[et.MIN_LEN](s)}:n[et.MIN_LEN]={isError:!1,message:ut};break;case et.MAX_LEN:e.length>s?n[et.MAX_LEN]={isError:!0,message:dt[et.MAX_LEN](s)}:n[et.MAX_LEN]={isError:!1,message:ut}}}return r.isError=Object.values(n).some((function(e){return!0===e.isError})),r.isError?r.message=function(e){var t=Object.entries(e).filter((function(e){return!0===e[1].isError})).map((function(e){var t=Object(ve.a)(e,2),n=t[0],r=t[1];return{key:n,priority:lt[n],message:r.message}}));if(1===t.length)return t[0].message;return t.sort((function(e,t){return e.priority>t.priority?1:e.priority<t.priority?-1:0})),t[0].message}(n):r.message=jt,Object(m.a)(Object(m.a)({},n),{},{isValid:r})};var ht,xt,ft,gt,mt,Ot,vt,yt,Et,Nt=function(e){var t=e.state,n=e.id,r=e.name,a=e.type,i=e.title,c=e.tag,o=e.placeholder;return Object(U.jsxs)(St,{className:"text-field",children:[Object(U.jsx)("label",{className:"text-field__title",htmlFor:n,children:i}),"input"===c?Object(U.jsx)("input",{className:t.isDirty&&t.validator.isValid.isError?"invalid":"",value:t.value,type:a,id:n,name:r,onBlur:t.onBlur,onChange:t.onChange,placeholder:o}):Object(U.jsx)("textarea",{className:t.isDirty&&t.validator.isValid.isError?"invalid":"",value:t.value,id:n,name:r,onBlur:t.onBlur,onChange:t.onChange,placeholder:o}),Object(U.jsx)("i",{className:"text-field__message",children:t.isDirty&&t.validator.isValid.isError?t.validator.isValid.message:null})]})},St=f.c.div(st||(st=Object(p.a)(["\n  input,\n  textarea {\n    display: block;\n    width: 100%;\n  }\n  label {\n    display: block;\n    margin-bottom: 4px;\n    margin-left: 25px;\n  }\n"]))),Tt=function(e){var t=e.pageClass,n=pt({initialValue:"",validationSettings:{isRequired:!0,minLength:5}}),r=pt({initialValue:"",validationSettings:{isRequired:!0}}),a=pt({initialValue:"",validationSettings:{isRequired:!0,minLength:10}}),i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.find((function(e){return e.validator.isValid.isError})),a=t.find((function(e){return e.isDirty}));return{validity:!r,touched:!!a}}(n,r,a),c=q().addNoteAction,o=function(){n.clearInput(),a.clearInput(),r.clearInput()};return Object(U.jsxs)(ot,{className:t,children:[Object(U.jsx)(Nt,{state:n,tag:"input",title:"note title",type:"text",id:"note-name",name:"note-name",placeholder:"add note title"}),Object(U.jsx)(Nt,{state:r,tag:"input",title:"note category",type:"text",id:"note-category",name:"note-category",placeholder:"category"}),Object(U.jsx)(Nt,{state:a,tag:"textarea",title:"note text",id:"note-text",name:"note-text",placeholder:"add note text"}),Object(U.jsx)(W,{buttonType:"button",onClick:function(){n&&r&&(c({name:n.value,text:a.value,category:r.value}),o())},disabled:!i.validity||!i.touched,children:"Add"}),Object(U.jsx)(V,{buttonType:"button",onClick:o,disabled:!i.touched,children:"Clear"})]})},_t=function(e){return e.notes.idList.map((function(t){return e.notes.data[t]}))},kt=function(e){var t=e.id,n=e.name,r=e.text,a=e.category,i=q().delNoteAction;return Object(U.jsxs)(wt,{children:[Object(U.jsx)("h3",{className:"name",children:n}),Object(U.jsx)("p",{className:"text",children:r}),a&&Object(U.jsx)("i",{className:"category",children:a}),Object(U.jsx)(X.c,{to:t,children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"}),Object(U.jsx)(V,{className:"delete",onClick:function(){i(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})},wt=f.c.article(ht||(ht=Object(p.a)(["\n    border-radius: 4px;\n    box-shadow: ",";\n    padding: 14px;\n    display: grid;\n    gap: 14px;\n    column-gap: 14px;\n    border: 1px solid transparent;\n    .delete {\n        margin-top: 14px;\n    }\n"])),(function(e){return e.theme.shadows.button})),At=function(e){var t,n=e.pageClass,r=Ae(_t),a=Ae((function(e){return e.notesFilter}));return Object(U.jsx)(Ct,{className:n,children:Object(U.jsx)("div",{className:"list",children:r&&(t=a,t!==We?Object(Pe.a)(r).filter((function(e){return e.category===t})):r).map((function(e){return Object(U.jsx)(kt,{id:e.id,name:e.name,text:e.text,category:e.category},e.id)}))})})},Ct=f.c.div(xt||(xt=Object(p.a)(["\n  .title {\n    margin-bottom: 28px;\n  }\n\n  .list {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n"]))),Lt=f.c.div(ft||(ft=Object(p.a)(["\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: auto;\n    align-content: start;\n    gap: 20px;\n    .title {\n      grid-column: 1 / -1;\n    }\n    .form {\n      grid-column: 1 / -1;\n    }\n    .aside {\n      grid-column: 1 / 2;\n      display: grid;\n      gap: 20px;\n    }\n    .content {\n      grid-column: 2 / -1;\n    }\n"]))),It=function(){var e=Ae((function(e){return e.notesFilter})),t=Ae((function(e){return function(e){return new Set(e.idList.map((function(t){return e.data[t].category})))}(e.notes)})),n=Array.from(t).map((function(e){return{id:v()(),tagname:e}})),r=q().notesFilterChangeAction;return Object(U.jsxs)(Lt,{children:[Object(U.jsx)("h2",{className:"title",children:"Notes"}),Object(U.jsx)("section",{className:"form",children:Object(U.jsx)(Tt,{})}),Object(U.jsx)("section",{className:"aside",children:Object(U.jsx)(it,{filter:e,tags:n,onClickAction:r})}),Object(U.jsx)("section",{className:"content",children:Object(U.jsx)(At,{})}),Object(U.jsx)(rt,{portalElement:Object(U.jsx)("div",{children:"Notes portal block"}),portalId:"header-portal"})]})},Dt=function(){var e=Object(ye.p)().noteId,t=Ae((function(t){return function(e,t){return!!t&&e.notes.data[t]}(t,e)})),n=q().delNoteAction,r=Object(ye.n)();return"boolean"===typeof t?null:Object(U.jsxs)(tt,{children:[Object(U.jsx)("h3",{children:t.name}),Object(U.jsx)("i",{children:t.category}),Object(U.jsx)("p",{children:t.text}),Object(U.jsx)("div",{className:"btnGroup",children:Object(U.jsx)(V,{onClick:function(){n(t.id),r("../notes",{replace:!0})},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]})},Ft=function(){return Object(U.jsx)("section",{children:Object(U.jsx)("h2",{children:"Welcome to the task manager and notes keeper"})})},Pt=function(){var e=pt({initialValue:"",validationSettings:{isRequired:!0}}),t=pt({initialValue:"",validationSettings:{isRequired:!0}}),n=fe().login,r=function(){var r=Object(Oe.a)(me.a.mark((function r(){return me.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:try{n({login:e.value,password:t.value})}catch(a){console.log(a)}case 1:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return Object(U.jsxs)(ot,{children:[Object(U.jsx)(Nt,{id:"loginform-login",tag:"input",title:"Login",state:e,type:"text",placeholder:"login"}),Object(U.jsx)(Nt,{id:"loginform-password",tag:"input",title:"Password",state:t,placeholder:"Password"}),Object(U.jsx)(V,{buttonType:"button",onClick:r,children:"Log In"})]})},Rt={Spacer:f.c.div(gt||(gt=Object(p.a)(["\n  height: 32px;\n"])))},Ht=function(){return Object(U.jsx)(Rt.Spacer,{})},Kt=f.c.div(mt||(mt=Object(p.a)(["\n  padding: 16px;\n  box-shadow: ",";\n"])),(function(e){return e.theme.shadows.button})),Mt={Wrap:f.c.div(Ot||(Ot=Object(p.a)(["\n  display: grid;\n  gap: 16px;\n  grid-template-columns: 1fr 1fr 1fr;\n"]))),InfoPanel:Object(f.c)(Kt)(vt||(vt=Object(p.a)(["\n  grid-column: span 2;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n"]))),PersonalPanel:Object(f.c)(Kt)(yt||(yt=Object(p.a)(["\n  display: grid;\n  gap: 16px;\n  grid-template-columns: 1fr 1fr;\n\n  & .personal__image {\n    grid-column: 1 / span 2;\n    justify-self: center;\n  }\n"]))),Entry:f.c.div(Et||(Et=Object(p.a)(["\n  display: grid;\n  gap: 8px;\n\n  span {\n    font-style: italic;\n  }\n\n  div {\n    font-weight: bold;\n  }\n"])))},Gt=function(){var e,t,n=fe().user;return console.log(n),Object(U.jsx)(Mt.Wrap,{children:n&&Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(Mt.InfoPanel,{children:[Object(U.jsxs)(Mt.Entry,{children:[Object(U.jsx)("span",{children:"email"}),Object(U.jsx)("div",{children:n.email})]}),Object(U.jsxs)(Mt.Entry,{children:[Object(U.jsx)("span",{children:"phone"}),Object(U.jsx)("div",{children:n.phone})]}),Object(U.jsxs)(Mt.Entry,{children:[Object(U.jsx)("span",{children:"username"}),Object(U.jsx)("div",{children:n.username})]}),Object(U.jsxs)(Mt.Entry,{children:[Object(U.jsx)("span",{children:"password"}),Object(U.jsx)("div",{children:n.password})]}),Object(U.jsxs)(Mt.Entry,{children:[Object(U.jsx)("span",{children:"birthDate"}),Object(U.jsx)("div",{children:n.birthDate})]}),Object(U.jsxs)(Mt.Entry,{children:[Object(U.jsx)("span",{children:"address"}),Object(U.jsx)("div",{children:(null===(e=n.address)||void 0===e?void 0:e.address)||"none"})]}),Object(U.jsxs)(Mt.Entry,{children:[Object(U.jsx)("span",{children:"city"}),Object(U.jsx)("div",{children:(null===(t=n.address)||void 0===t?void 0:t.city)||"none"})]})]}),Object(U.jsxs)(Mt.PersonalPanel,{children:[Object(U.jsx)("div",{className:"personal__image",children:Object(U.jsx)("img",{width:100,height:100,src:n.image,alt:"profile"})}),Object(U.jsxs)(Mt.Entry,{children:[Object(U.jsx)("span",{children:"First name"}),Object(U.jsx)("div",{children:n.firstName})]}),Object(U.jsxs)(Mt.Entry,{children:[Object(U.jsx)("span",{children:"Last name"}),Object(U.jsx)("div",{children:n.lastName})]})]})]})})},qt=function(){return fe().isLoading?Object(U.jsx)("div",{className:"loader"}):Object(U.jsxs)("section",{children:[Object(U.jsx)("h2",{children:"User Profile"}),Object(U.jsx)(Ht,{}),Object(U.jsxs)("div",{children:[Object(U.jsx)("h3",{children:"User Info"}),Object(U.jsx)(Ht,{}),Object(U.jsx)(Gt,{})]})]})},Ut=n(71),Vt="https://jsonplaceholder.typicode.com",Wt=function(){var e=Object(Oe.a)(me.a.mark((function e(t){var n,r,a,i,c,o;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.pageParam,r=void 0===n?0:n,e.next=3,fetch("".concat(Vt,"/posts?_page=").concat(r+1,"&_limit=").concat(5));case 3:return a=e.sent,i=parseInt(a.headers.get("x-total-count")||""),c=5*(r+1)<i,e.next=8,a.json();case 8:return o=e.sent,e.abrupt("return",{posts:o,nextPage:r+1,hasNextPage:c});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Bt=function(){var e=Object(Oe.a)(me.a.mark((function e(t){var n,r,a,i,c,o;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.pageParam,r=void 0===n?0:n,e.next=3,fetch("".concat(Vt,"/todos?_page=").concat(r+1,"&_limit=").concat(5));case 3:return a=e.sent,i=parseInt(a.headers.get("x-total-count")||""),c=5*(r+1)<i,e.next=8,a.json();case 8:return o=e.sent,e.abrupt("return",{tasks:o,nextPage:r+1,hasNextPage:c});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var Jt=function(){var e=Object(Ut.a)(["posts"],Wt,{getNextPageParam:function(e){if(e.hasNextPage)return e.nextPage}}),t=e.data,n=e.status,r=e.fetchNextPage,a=e.hasNextPage,i=e.isFetching,c=e.isFetchingNextPage;return Object(U.jsxs)("div",{children:[Object(U.jsx)("h2",{children:"Posts from typicode"}),Object(U.jsx)(Ht,{}),"loading"===n?Object(U.jsx)("div",{children:"Loading..."}):Object(U.jsx)("section",{children:t&&t.pages.map((function(e,t){return Object(U.jsx)(ee.a.Fragment,{children:e.posts.map((function(e){return Object(U.jsxs)("article",{style:{padding:20,border:"1px solid black"},children:[Object(U.jsxs)("h3",{children:[Object(U.jsxs)("b",{children:[e.id,". "]}),e.title]}),Object(U.jsx)(Ht,{}),Object(U.jsx)("p",{children:e.body})]},e.id)}))},t)}))}),Object(U.jsx)(rt,{portalId:"header-portal",children:Object(U.jsxs)(V,{onClick:function(){a&&r()},disabled:c,children:[i?Object(U.jsx)("span",{title:"Fetching...",children:"\ud83d\udd04"}):Object(U.jsx)("span",{title:"Fetched",children:"\ud83d\udca4"}),c?"Loading more...":"Load More Posts"]})})]})};var Xt=function(){var e=Object(Ut.a)(["tasks"],Bt,{getNextPageParam:function(e){if(e.hasNextPage)return e.nextPage}}),t=e.data,n=e.status,r=e.fetchNextPage,a=e.hasNextPage,i=e.isFetching,c=e.isFetchingNextPage;return Object(U.jsxs)("div",{children:[Object(U.jsx)("h2",{children:"Tasks from typicode"}),Object(U.jsx)(Ht,{}),"loading"===n?Object(U.jsx)("div",{children:"Loading..."}):Object(U.jsx)("ul",{children:t&&t.pages.map((function(e,t){return Object(U.jsx)(ee.a.Fragment,{children:e.tasks.map((function(e){return Object(U.jsxs)("li",{style:{padding:20,border:"1px solid black"},children:[Object(U.jsxs)("div",{children:[Object(U.jsxs)("b",{children:[e.id,". "]}),Object(U.jsx)("span",{children:e.completed?"\u2714\ufe0f":"\u274c"}),e.title]}),Object(U.jsx)(Ht,{})]},e.id)}))},t)}))}),Object(U.jsx)(rt,{portalId:".header__portal",children:Object(U.jsxs)(V,{onClick:function(){a&&r()},disabled:c,children:[i?Object(U.jsx)("span",{title:"Fetching...",children:"\ud83d\udd04"}):Object(U.jsx)("span",{title:"Fetched",children:"\ud83d\udca4"}),c?"Loading more...":"Load More Tasks"]})})]})},zt=function(e){var t=e.children;return fe().isAuth?Object(U.jsx)(U.Fragment,{children:t}):Object(U.jsx)("div",{children:"Forbidden"})};u.a.render(Object(U.jsx)(j.a,{store:ze,children:Object(U.jsx)(X.a,{children:Object(U.jsx)(ye.d,{children:Object(U.jsxs)(ye.b,{path:de,element:Object(U.jsx)(Le,{}),children:[Object(U.jsx)(ye.b,{index:!0,element:Object(U.jsx)(Ft,{})}),Object(U.jsx)(ye.b,{path:ue,element:Object(U.jsx)(Xt,{})}),Object(U.jsx)(ye.b,{path:he,element:Object(U.jsx)(Jt,{})}),Object(U.jsx)(ye.b,{path:je,element:Object(U.jsx)(It,{})}),Object(U.jsx)(ye.b,{path:"".concat(ue,"/:taskId"),element:Object(U.jsx)(nt,{})}),Object(U.jsx)(ye.b,{path:"".concat(je,"/:noteId"),element:Object(U.jsx)(Dt,{})}),Object(U.jsx)(ye.b,{path:be,element:Object(U.jsx)(Pt,{})}),Object(U.jsx)(ye.b,{path:pe,element:Object(U.jsx)(zt,{children:Object(U.jsx)(qt,{})})})]})})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.83457456.chunk.js.map