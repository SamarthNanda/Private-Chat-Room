(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{233:function(e,t){},235:function(e,t){},249:function(e,t){},251:function(e,t){},279:function(e,t){},281:function(e,t){},282:function(e,t){},287:function(e,t){},289:function(e,t){},308:function(e,t){},320:function(e,t){},323:function(e,t){},340:function(e,t,n){},342:function(e,t,n){},343:function(e,t,n){},344:function(e,t,n){},345:function(e,t,n){},346:function(e,t,n){},347:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(171),a=n.n(c),o=(n(60),n(9)),r=n(28),i=n.n(r),l=n(17),j=n(1);function u(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||3001,t="http://localhost:".concat(e),n=Object(s.useState)(""),c=Object(o.a)(n,2),a=c[0],r=c[1],u=Object(s.useState)(""),m=Object(o.a)(u,2),d=m[0],b=m[1],O=Object(s.useState)(""),h=Object(o.a)(O,2),g=h[0],f=h[1],x=Object(s.useState)(""),p=Object(o.a)(x,2),A=p[0],v=p[1];return Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("h1",{className:"mt-5",children:"Private Chat Room"}),Object(j.jsx)("h3",{className:"mt-4 align",children:"Register"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.a.post("".concat(t,"/register"),{userType:a,username:d,password:g}).then((function(e){console.log(e.data.message),v(e.data.message)}))},children:[Object(j.jsxs)("select",{type:"text",id:"userType",className:"form-control mt-4",name:"userType",placeholder:"User Type (Admin || Student)",required:!0,onChange:function(e){r(e.target.value)},children:[Object(j.jsx)("option",{selected:!0,children:"Choose User Type..."}),Object(j.jsx)("option",{value:"Admin",children:"Admin"}),Object(j.jsx)("option",{value:"Student",children:"Student"})]}),Object(j.jsx)("input",{type:"text",id:"login",className:"form-control mt-1",name:"username",placeholder:"Username...",required:!0,onChange:function(e){b(e.target.value)}}),Object(j.jsx)("input",{type:"password",id:"password",className:"form-control mt-1",name:"password",placeholder:"Password...",required:!0,onChange:function(e){f(e.target.value)}}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success mt-4",children:"Register"}),Object(j.jsx)("span",{children:"   "}),Object(j.jsx)(l.b,{to:"/",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-info mt-4",children:"Login"})})]}),"saved"===A?Object(j.jsx)("div",{children:Object(j.jsx)(l.b,{to:"/",children:Object(j.jsx)("button",{className:"btn btn-info mt-3",children:"Login to Continue"})})}):Object(j.jsx)("span",{children:" "}),"error"===A?Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"errorText",children:"You are Already Registered!"}),Object(j.jsx)(l.b,{to:"/",children:Object(j.jsx)("button",{className:"btn btn-info mt-3",children:"Click Here To Login"})})]}):Object(j.jsx)("span",{children:" "})]})}function m(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||3001,t="http://localhost:".concat(e),n=Object(s.useState)(""),c=Object(o.a)(n,2),a=c[0],r=c[1],u=Object(s.useState)(""),m=Object(o.a)(u,2),d=m[0],b=m[1],O=Object(s.useState)(""),h=Object(o.a)(O,2),g=h[0],f=h[1],x=Object(s.useState)(""),p=Object(o.a)(x,2),A=p[0],v=p[1];return Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("h1",{className:"mt-5",children:"Private Chat Room"}),Object(j.jsx)("h3",{className:"mt-4 align",children:"Login"}),Object(j.jsxs)("form",{className:"mt-4",children:[Object(j.jsx)("input",{type:"text",id:"login",className:"form-control",name:"username",placeholder:"Username...",required:!0,onChange:function(e){r(e.target.value)}}),Object(j.jsx)("input",{type:"password",id:"password",className:"form-control mt-1",name:"password",placeholder:"Password...",required:!0,onChange:function(e){b(e.target.value)}}),Object(j.jsx)("input",{type:"text",id:"room",className:"form-control mt-1",name:"room",placeholder:"Room Name...",required:!0,onChange:function(e){f(e.target.value)}}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success mt-4",onClick:function(e){e.preventDefault(),console.log("login is called"),i.a.post("".concat(t,"/login"),{username:a,password:d,room:g}).then((function(e){e.data.message?(console.log(e.data.message),"wrong password"===e.data.message?alert("Try logging in with a Correct Password"):alert("Try logging in with a valid Username or Register yourself Now")):(localStorage.setItem("token",JSON.stringify(e.data.token)),localStorage.setItem("refreshToken",JSON.stringify(e.data.refreshToken)),v("/chat"))}))},children:"Login"}),Object(j.jsx)("span",{children:"   "}),Object(j.jsx)(l.b,{to:"/register",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-info mt-4",children:"Register Now"})})]}),"/chat"===A?Object(j.jsxs)("div",{children:[Object(j.jsxs)("h3",{className:"mt-4",children:["Hi ",a]}),Object(j.jsx)(l.b,{to:A,children:Object(j.jsxs)("button",{className:"btn btn-info mt-3",children:["Enter the Room '",g,"'"]})})]}):Object(j.jsx)("span",{children:" "})]})}var d=n(6),b=n(89),O=n(173),h=n.n(O),g=n(174),f=n(175),x=n.n(f),p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII=";n(340);var A,v=function(e){var t=e.room;return Object(j.jsxs)("div",{className:"infoBar",children:[Object(j.jsxs)("div",{className:"leftInnerContainer",children:[Object(j.jsx)("img",{className:"onlineIcon",src:p,alt:"online"}),Object(j.jsx)("h3",{children:t})]}),Object(j.jsx)("div",{className:"rightInnerContainer",children:Object(j.jsx)("a",{onClick:function(){localStorage.removeItem("token")},href:"/",children:Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII=",alt:"close"})})})]})},S=n(178),N=(n(342),n(88)),C=n.n(N),T=function(e){var t=e.message,n=t.text,s=t.user,c=!1,a=e.email;return s===a&&(c=!0),c?Object(j.jsxs)("div",{className:"messageContainer justifyEnd",children:[Object(j.jsx)("p",{className:"sentText pr-10",children:a}),Object(j.jsx)("div",{className:"messageBox backgroundBlue",children:Object(j.jsx)("p",{className:"messageText colorWhite",children:C.a.emojify(n)})})]}):Object(j.jsxs)("div",{className:"messageContainer justifyStart",children:[Object(j.jsx)("div",{className:"messageBox backgroundLight",children:Object(j.jsx)("p",{className:"messageText colorDark",children:C.a.emojify(n)})}),Object(j.jsx)("p",{className:"sentText pl-10 ",children:s})]})},y=(n(343),function(e){var t=e.messages,n=e.email;return Object(j.jsx)(S.a,{className:"messages",children:t.map((function(e,t){return Object(j.jsx)("div",{children:Object(j.jsx)(T,{message:e,email:n})},t)}))})}),E=(n(344),function(e){return Object(j.jsxs)("form",{className:"formInput",children:[Object(j.jsx)("input",{className:"input",type:"text",placeholder:"Type a message...",value:e.message,onChange:function(t){return e.setMessage(t.target.value)},onKeyPress:function(t){return"Enter"===t.key?e.sendMessage(t):null}}),Object(j.jsx)("button",{className:"sendButton",onClick:function(t){return e.sendMessage(t)},children:"SEND"})]})}),R=(n(345),function(e){var t=e.users;return Object(j.jsx)("div",{className:"textContainer",children:t?Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"People currently Online:"}),Object(j.jsx)("div",{className:"activeContainer",children:Object(j.jsx)("h2",{children:t.map((function(e){var t=e.name;return Object(j.jsxs)("div",{className:"activeItem",children:[t,Object(j.jsx)("img",{alt:"Online",src:p})]},t)}))})})]}):null})});n(346);var I=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),r=Object(o.a)(a,2),u=r[0],m=r[1],d=Object(s.useState)(""),O=Object(o.a)(d,2),f=O[0],p=O[1],S=Object(s.useState)(""),N=Object(o.a)(S,2),C=N[0],T=N[1],I=Object(s.useState)([]),w=Object(o.a)(I,2),k=w[0],P=w[1],_=Object(s.useState)(""),D=Object(o.a)(_,2),U=D[0],L=D[1],K=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||3001,B="http://localhost:".concat(K),F="localhost:".concat(K),J={"force new connection":!0,reconnectionAttempts:"Infinity",timeout:1e4,transports:["websocket"]};return Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("token")),t=Object(g.a)(e);if(null!==t){c(!0);var n=t.email,s=t.room;return A=h()(F,J),m(n),p(s),A.on("previousMessages",(function(e){var t=e.previousMessages;P.apply(void 0,Object(b.a)(k).concat([t]))})),A.emit("join",{email:n,room:s},(function(){})),function(){A.emit("disconnect"),A.off()}}c(!1)}),[F]),Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("token")),t=JSON.parse(localStorage.getItem("refreshToken"));x.a.verify(e,"jwtSecret",(function(e,n){e&&i.a.post("".concat(B,"/refresh"),{refreshToken:t}).then((function(e){!0===e.data.success?(localStorage.setItem("token",JSON.stringify(e.data.token)),console.log("new token assigned")):c(!1)}))})),null!==e?(A.on("message",(function(e){P([].concat(Object(b.a)(k),[e]))})),A.on("roomData",(function(e){var t=e.users;L(t)}))):c(!1)}),[k]),Object(j.jsx)("div",{children:n?Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"mt-5 mb-5",children:"Private Chat Room"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(v,{room:f}),Object(j.jsx)(y,{messages:k,email:u}),Object(j.jsx)(E,{setMessage:T,sendMessage:function(e){e.preventDefault(),C&&(!function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("token"));t?i.a.post("".concat(B,"/chat"),{room:f,email:u,message:C},{headers:{authorization:"bearer ".concat(t)}}).then((function(e){!1===e.data.isAuth?(localStorage.removeItem("token"),c(!1)):console.log(e.data.message)})):c(!1)}(e),A.emit("sendMessage",C,(function(){T("")})))},message:C})]}),Object(j.jsx)(R,{users:U})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"mt-5",children:"First Login to Join Chat"}),Object(j.jsx)(l.b,{to:"/",children:Object(j.jsx)("button",{type:"submit",className:"btn-success loginbtn mt-4",children:"Login"})})]})})};function w(){return Object(j.jsx)("div",{children:Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)(l.a,{children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/register",component:u}),Object(j.jsx)(d.a,{path:"/",exact:!0,component:m}),Object(j.jsx)(d.a,{path:"/chat",exact:!0,component:I})]})})})})}var k=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(w,{})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,348)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),a(e),o(e)}))};a.a.render(Object(j.jsx)(k,{}),document.getElementById("root")),P()},60:function(e,t,n){}},[[347,1,2]]]);
//# sourceMappingURL=main.2a71d217.chunk.js.map