(this["webpackJsonpreact-augvents"]=this["webpackJsonpreact-augvents"]||[]).push([[0],{108:function(e,a,t){e.exports=t(203)},113:function(e,a,t){},114:function(e,a,t){},115:function(e,a,t){},130:function(e,a,t){},131:function(e,a,t){},132:function(e,a,t){},133:function(e,a,t){},134:function(e,a,t){},135:function(e,a,t){},179:function(e,a,t){},180:function(e,a,t){},181:function(e,a,t){},182:function(e,a,t){},192:function(e,a,t){},202:function(e,a,t){},203:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(3),r=t.n(c),i=(t(113),t(114),t(56)),s=(t(115),t(91)),m=t.n(s),o=t(39),w=t.n(o),u=t(44),V=t.n(u),M=(t(130),function(e){return l.a.createElement("div",{className:"image-slider"},l.a.createElement(m.a,{infinite:!0,speed:3500,autoplaySpeed:1e3,slidesToShow:3,autoplay:!0,slidesToScroll:1,arrows:!1},l.a.createElement("div",null,l.a.createElement("img",{src:w.a})),l.a.createElement("div",null,l.a.createElement("img",{src:V.a})),l.a.createElement("div",null,l.a.createElement("img",{src:w.a})),l.a.createElement("div",null,l.a.createElement("img",{src:V.a})),l.a.createElement("div",null,l.a.createElement("img",{src:w.a})),l.a.createElement("div",null,l.a.createElement("img",{src:V.a})),l.a.createElement("div",null,l.a.createElement("img",{src:w.a})),l.a.createElement("div",null,l.a.createElement("img",{src:V.a})),l.a.createElement("div",null,l.a.createElement("img",{src:w.a}))))}),C=(t(131),t(92)),p=t.n(C),d=(t(132),function(e){return l.a.createElement("button",{className:"book-event"}," ",e.params.text||"book event"," ")}),E=function(){return l.a.createElement("div",{className:"intro"},l.a.createElement("div",{className:"flex-center"},l.a.createElement("img",{src:p.a,alt:"logo"}),l.a.createElement("p",null," building community, connecting people and events "),l.a.createElement(d,{params:{text:"Book Events"}})))},g=t(93),v=t.n(g),A=function(){return l.a.createElement("video",{className:"myVideo",autoPlay:"autoplay",muted:!0,loop:!0},l.a.createElement("source",{src:v.a,type:"video/mp4"}))},b=(t(133),function(e){return l.a.createElement("div",{className:"title-container"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,e.params.titleText)))}),h=(t(134),t(135),t(9)),f=function(e){return l.a.createElement("div",{className:"step"},l.a.createElement("span",{className:"index"},e.params.index),l.a.createElement(h.a,{className:"icon",type:e.params.icon}),l.a.createElement("span",{className:"title"}," ",e.params.title," "),l.a.createElement("span",{className:"plan-description"},e.params.content," "))},N=function(){return l.a.createElement("div",{className:"steps"},l.a.createElement(b,{params:{titleText:"4 steps to get started"}}),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"level"},l.a.createElement(f,{params:{index:"01",title:"sign up",icon:"mobile",content:"Enter your name, email and phone number. "}}),l.a.createElement(f,{params:{index:"02",title:"pick plan",icon:"edit",content:"Select one of three plans. Your selected plan can be changed at a later date."}})),l.a.createElement("div",{className:"level"},l.a.createElement(f,{params:{index:"03",title:"book event",icon:"check-square",content:"Provide the basic information about your event."}}),l.a.createElement(f,{params:{index:"04",title:"go live",icon:"check",content:"Once the information has been entered and submitted, the event is ready to go live. The AUGVENTS app will find it. "}}))))},Y=t(96),y=t.n(Y),W=(t(179),function(){return l.a.createElement("div",{className:"about",style:{backgroundImage:"url(".concat(y.a,")")}},l.a.createElement(b,{params:{titleText:"About"}}),l.a.createElement("div",{className:"about-content"},l.a.createElement("p",null,l.a.createElement("b",null,"augvents")," is a social technology company supporting creative places and public place-making.  "),l.a.createElement("p",null,"The company's technology integrates advertising of events with improved awareness of local activities and the encouragement to participate."),l.a.createElement("p",null,l.a.createElement("b",null,"augvents")," assists in building healthy, functional, and productive localities through place-making and enhancement of the individual's sense of community by their increased participation in events. ")))}),x=(t(180),t(181),function(e){return l.a.createElement("div",{className:"plan-block",style:e.border,onClick:e.onClick},l.a.createElement("div",{className:"column"},l.a.createElement("p",{className:"step"},e.params.title),l.a.createElement("img",{src:e.params.img}),l.a.createElement("span",null," ",e.params.price," ")),l.a.createElement("p",{className:"plan-description"}," ",e.params.description," "))}),k=function(){var e={border:"3px solid rgb(79, 181, 184)",borderRadius:"5px"},a=Object(n.useState)({}),t=Object(i.a)(a,2),c=t[0],r=t[1],s=function(a){r(1===a?{block1:e}:2===a?{block2:e}:{block3:e})},m={text:"next",titleText:"3 plans to choose from"};return l.a.createElement("div",{className:"plans column"},l.a.createElement(b,{params:m}),l.a.createElement("div",{className:"row"},l.a.createElement(x,{border:c.block1,onClick:function(){return s(1)},params:{img:"https://www.iamsterdam.com/media/agenda/music/concert-nc.jpg",title:"pay as you go",price:"$8 / 1 Event",description:"Easy and inexpensive way to get the word out about your pop up event."}}),l.a.createElement(x,{border:c.block2,onClick:function(){return s(2)},params:{img:"https://isthmus.com/downloads/37929/download/calendar-music-LowCzars.jpg?cb=9eb96b3b0a8144621ef22dafd690e139",title:"premium",price:"$65 / 10 events",description:"Planning on hosting a series of musical or art event"}}),l.a.createElement(x,{border:c.block3,onClick:function(){return s(3)},params:{img:"https://cdn.stumagz.com/images/5739ae428cf7bstryimg",title:"enterprise",price:"$250 / 50 events",description:"If booking acts many nights of each week is your repsonsibility                          then you will want the simplicity and low-cost of the enterprise plan"}})),l.a.createElement(d,{params:m}))},G=t(206),L=(t(182),function(){return l.a.createElement("div",{className:"contact"},l.a.createElement(b,{params:{titleText:"contact us"}}),l.a.createElement("div",{className:"address"},l.a.createElement("div",null," ",l.a.createElement(h.a,{className:"icon",type:"mail"})," info@augvents.com "),l.a.createElement("div",null,"  ",l.a.createElement(h.a,{className:"icon",type:"compass"})," 500 Lehman Ave. Bowling Green, OH 43402 ")),l.a.createElement("div",{className:"column subscribe"},l.a.createElement("span",null," Subscribe for updates and promotions "),l.a.createElement(G.a,{placeholder:"Email Address"}),l.a.createElement("button",null,"get updates ")))}),F=function(){var e=Object(n.useState)({}),a=Object(i.a)(e,2);a[0],a[1];return l.a.createElement("div",null,l.a.createElement(A,null),l.a.createElement("div",{className:"home"},l.a.createElement(E,null),l.a.createElement(N,null),l.a.createElement(W,null),l.a.createElement(k,null),l.a.createElement("div",{className:"slider"},l.a.createElement(M,null)),l.a.createElement(L,null)))},S=(t(192),t(205)),T=t(207),O=function(){var e=l.a.createElement(S.a,null,l.a.createElement(S.a.Item,{className:"menu-item"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.augvents.com/"},"Create Event")),l.a.createElement(S.a.Item,{className:"menu-item"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.augvents.com/"},"List my Events")),l.a.createElement(S.a.Item,{className:"menu-item"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.augvents.com/"},"Upgrade Plan")));return l.a.createElement("div",{className:"header-block"},l.a.createElement("ul",{className:"header links-list"},l.a.createElement("li",null,"Home"),l.a.createElement("li",null,l.a.createElement(T.a,{overlay:e},l.a.createElement("a",{className:"ant-dropdown-link",href:"#"},"More ",l.a.createElement(h.a,{type:"down"}))))),l.a.createElement("ul",{className:"header links-list"},l.a.createElement("li",null," sign up "),l.a.createElement("li",null,"  login ")))},U=(t(202),function(){return l.a.createElement("div",{className:"footer-block"},l.a.createElement("ul",null,l.a.createElement("li",{className:"link"}," Terms of Service"),l.a.createElement("li",{className:"link"}," Privacy Policy "),l.a.createElement("li",null," Copyright @ Augvents Inc 2019/2020")))});var D=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(O,null),l.a.createElement(F,null),l.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},39:function(e,a,t){e.exports=t.p+"static/media/event.85da72b3.jpeg"},44:function(e,a,t){e.exports=t.p+"static/media/Live-Music.c56c68c0.jpg"},92:function(e,a){e.exports="data:image/png;base64,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"},93:function(e,a,t){e.exports=t.p+"static/media/Live-Music.cdf61c32.mp4"},96:function(e,a,t){e.exports=t.p+"static/media/marble.e5f752d2.jpg"}},[[108,1,2]]]);
//# sourceMappingURL=main.cdff394c.chunk.js.map