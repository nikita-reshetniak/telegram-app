(this["webpackJsonptelegram-app"]=this["webpackJsonptelegram-app"]||[]).push([[0],Array(19).concat([function(e,a,t){e.exports=t.p+"static/media/joaquin_phoenix.34f88873.jpg"},function(e,a,t){e.exports=t.p+"static/media/keanu_reeves.8281db2d.jpg"},,function(e,a,t){e.exports=t(51)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),c=t.n(r),m=(t(27),t(8)),s=t(2),i=t(10),o=t(21),u=t(4);t(33);var E=function(e){return l.a.createElement("input",{className:"Search",type:"text",placeholder:"Search"})};t(34);var d=function(e){return l.a.createElement("header",{className:"AsideChatsHeader"},l.a.createElement(E,null),l.a.createElement("div",{className:"edit"},l.a.createElement(u.a,{icon:"edit"})))};t(35);var v=function(e){return l.a.createElement("div",{className:e.mod?"Avatar Avatar--".concat(e.mod):"Avatar"},l.a.createElement("img",{src:e.user.avatarUrl,alt:e.user.name}))};t(36);var h=function(e){return l.a.createElement("div",{className:e.mod?"ChatName ChatName--".concat(e.mod):"ChatName"},e.user.name)};var g=function(e){return l.a.createElement("div",{className:"Message"},e.message)};var f=function(e){var a=e.time.getHours()>12?e.time.getHours()-12:e.time.getHours(),t=e.time.getMinutes(),n=e.time.getHours()>=12?"PM":"AM";return l.a.createElement("div",{className:"Time"},"".concat(a,":").concat(t," ").concat(n))};t(37);var p=function(e){var a=e.user.messages[e.user.messages.length-1];return l.a.createElement("div",{className:"ChatPreview"},l.a.createElement(v,{user:e.user}),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(h,{user:e.user}),l.a.createElement(g,{message:a.message})),l.a.createElement(f,{time:a.time})))};t(38);var w=function(e){return l.a.createElement("section",{className:"AsideChatsSection"},l.a.createElement("ul",null,e.users.map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement(m.b,{to:"/".concat(a)},l.a.createElement(p,{user:e})))}))))},N=t(19),D=t.n(N),y=t(20),k=t.n(y),b=[{name:"Joaquin Phoenix",avatarUrl:D.a,lastSeen:"5 minutes",messages:[{message:")",time:new Date(2020,3,7,9,45)},{message:"Forgive my laughter. I have a condition.",time:new Date(2020,3,7,9,45)},{message:"You don't listen, do you?",time:new Date(2020,3,7,11,15)},{message:"???",time:new Date(2020,3,7,11,15)},{message:"(\u2660_\u2666)",time:new Date(2020,3,7,11,15)},{message:"Someone who hides behind a mask.",time:new Date(2020,3,7,11,16)},{message:"I hope my death makes more cents than my life.",time:new Date(2020,3,7,13,28)},{message:"Ahahhaa)",time:new Date(2020,3,7,16,37)},{message:"You wouldn't get it",time:new Date(2020,3,7,16,37)}]},{name:"Keanu Reeves",avatarUrl:k.a,lastSeen:"2 hours",messages:[{message:"Do I look civilised to you?",time:new Date(2020,3,7,9,45)},{message:"It's personal.",time:new Date(2020,3,7,9,45)},{message:"People keep asking if I'm back and I haven't really had an answer...",time:new Date(2020,3,7,11,15)},{message:"But now, yeah, I'm thinkin' I'm back!",time:new Date(2020,3,7,11,15)},{message:"So you could either hand over your son or you can die screaming alongside him!",time:new Date(2020,3,7,11,15)},{message:"I'd like a dinner reservation for twelve.",time:new Date(2020,3,7,13,27)}]}];var I=function(e){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(w,{users:b}))};t(41);var A=function(e){var a=Object(s.f)().userId;return l.a.createElement("ul",{className:"ChatMessages"},e.users[a].messages.map((function(t,n,r){var c=r[n-1],m=!c||new Date(t.time-c.time)>new Date(9e5);return l.a.createElement("li",{key:n},l.a.createElement("div",null,m&&l.a.createElement(v,{user:e.users[a],mod:"small"})),l.a.createElement("div",null,l.a.createElement("div",null,m&&l.a.createElement(h,{user:e.users[a],mod:"blue"}),l.a.createElement(g,{message:t.message})),l.a.createElement(f,{time:t.time})))})))};t(42);var C=function(e){var a=Object(s.f)().userId;return l.a.createElement("header",{className:"MainChatHeader"},l.a.createElement("div",null,l.a.createElement(v,{user:e.users[a],mod:"small"}),l.a.createElement("div",null,l.a.createElement(h,{user:e.users[a]}),l.a.createElement("div",{className:"MainChatHeader-lastSeen"},"last seen ".concat(e.users[a].lastSeen," ago")))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.a,{icon:"phone-alt"})),l.a.createElement("li",null,l.a.createElement(u.a,{icon:"search"})),l.a.createElement("li",null,l.a.createElement(u.a,{icon:"ellipsis-h"}))))};t(43);var S=function(e){return l.a.createElement("ul",{className:"MainChatFooter"},l.a.createElement("li",null,l.a.createElement(u.a,{icon:"paperclip"})),l.a.createElement("li",null,l.a.createElement("input",{type:"text",placeholder:"Write a message..."})),l.a.createElement("li",null,l.a.createElement(u.a,{icon:"laugh"})),l.a.createElement("li",null,l.a.createElement(u.a,{icon:"microphone"})))};t(44),t(45),t(46),t(47),t(48),t(49),t(50);var M=function(e){return l.a.createElement("nav",{className:"AsideNav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(m.b,null,l.a.createElement(u.a,{icon:"user-circle"}))),l.a.createElement("li",null,l.a.createElement(m.b,null,l.a.createElement(u.a,{icon:"phone-alt"}))),l.a.createElement("li",null,l.a.createElement(m.b,null,l.a.createElement(u.a,{icon:"comments"}))),l.a.createElement("li",null,l.a.createElement(m.b,null,l.a.createElement(u.a,{icon:"cog"})))))};i.b.add(o.a);var x=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m.a,null,l.a.createElement("aside",null,l.a.createElement(I,null),l.a.createElement("footer",null,l.a.createElement(M,null))),l.a.createElement("main",null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/:userId"},l.a.createElement(C,{users:b}),l.a.createElement("section",null,l.a.createElement(A,{users:b})),l.a.createElement("footer",null,l.a.createElement(S,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[22,1,2]]]);
//# sourceMappingURL=main.5aabf579.chunk.js.map