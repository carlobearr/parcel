(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{120:function(e,s,t){},179:function(e,s,t){},220:function(e,s,t){},246:function(e,s,t){},247:function(e,s,t){},248:function(e,s,t){},249:function(e,s,t){},325:function(e,s,t){},326:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t(0),r=t(18),n=t.n(r),l=(t(179),t(52)),j=t.n(l),i=t(78),d=t(168),b=t(328),h=(t(89),t(120),t(336)),o=t(332),x=t(80),m=t(338),u=t(334),O=t(36),N=function(){var e=Object(i.a)(j.a.mark((function e(s){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/user/login",{headers:{"Content-Type":"application/json"},method:"POST",credentials:"include",body:JSON.stringify({token:s.getAuthResponse().id_token})});case 2:return t=e.sent,e.next=5,t.json();case 5:window.location.href=e.sent.url;case 6:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(j.a.mark((function e(){var s,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/user/getSession",{credentials:"include"});case 2:return s=e.sent,e.next=5,s.json();case 5:if(null!=(t=e.sent)){e.next=10;break}return e.abrupt("return",null);case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(j.a.mark((function e(){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("log"),e.next=3,fetch("/user/logout",{method:"DELETE",credentials:"include"});case 3:return s=e.sent,e.next=6,s.json();case 6:window.location.href=e.sent.url;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=b.a.Header;var I=function(){var e=Object(a.jsxs)(h.a,{children:[Object(a.jsx)(h.a.Item,{className:"menuFont",children:"Name of User"}),Object(a.jsx)(h.a.Item,{className:"menuFont",children:Object(a.jsx)(O.b,{to:"/edit",children:"Edit Profile"})}),Object(a.jsx)(h.a.Item,{className:"menuFont",children:Object(a.jsx)(O.b,{to:"#",children:"My Addresses"})}),Object(a.jsx)(h.a.Item,{className:"menuFont",children:Object(a.jsx)(O.b,{to:"#",children:"Help"})}),Object(a.jsx)(h.a.Item,{className:"menuFont",children:Object(a.jsx)(O.b,{to:"#",onClick:g,children:"Logout"})})]});return Object(a.jsxs)(F,{className:"header",children:[Object(a.jsx)("div",{className:"leftAlign",children:Object(a.jsxs)(h.a,{mode:"horizontal",className:"menuHeader",children:[Object(a.jsx)(h.a.Item,{className:"menuFont",children:Object(a.jsx)(O.b,{to:"/",className:"colorBlue",children:Object(a.jsx)(o.a,{preview:!1,className:"headerLogo",src:"/PE-Logo-Header.png"})})}),Object(a.jsx)(h.a.Item,{className:"menuFont",children:Object(a.jsx)(O.b,{to:"/dashboard",className:"colorBlue",children:"Dashboard"})}),Object(a.jsx)(h.a.Item,{className:"menuFont",children:Object(a.jsx)(O.b,{to:"#",className:"colorBlue",children:"Transaction"})}),Object(a.jsx)(h.a.Item,{className:"menuFont",children:Object(a.jsx)(O.b,{to:"#",className:"colorBlue",children:"Create Waybill"})}),Object(a.jsx)(h.a.Item,{className:"menuFont",children:Object(a.jsx)(O.b,{to:"/tracking",className:"colorBlue",children:"Track"})})]})}),Object(a.jsx)("div",{className:"rightAlign",children:Object(a.jsxs)(h.a,{mode:"horizontal",className:"menuHeader",children:[Object(a.jsx)(h.a.Item,{className:"menuFont",children:Object(a.jsx)(x.a,{type:"primary",shape:"round",className:"buttonProperty",style:{background:"#00C8FF",borderColor:"#00C8FF"},children:"Book a Delivery"})}),Object(a.jsx)(h.a.Item,{className:"menuFont",children:Object(a.jsx)(m.a,{overlay:e,placement:"bottomCenter",children:Object(a.jsx)(u.a,{size:"large"})})})]})})]})},v=b.a.Header;var f=function(){return Object(a.jsxs)(v,{className:"header",children:[Object(a.jsx)("div",{className:"leftAlign",children:Object(a.jsxs)(h.a,{mode:"horizontal",className:"menuHeader",children:[Object(a.jsx)(h.a.Item,{className:"menuFont",children:Object(a.jsx)(O.b,{to:"/",className:"colorBlue",children:Object(a.jsx)(o.a,{preview:!1,className:"headerLogo",src:"/PE-Logo-Header.png"})})}),Object(a.jsx)(h.a.Item,{className:"menuFont",children:Object(a.jsx)(O.b,{to:"#menu1",className:"colorBlue",children:"Menu 1"})}),Object(a.jsx)(h.a.Item,{className:"menuFont",children:Object(a.jsx)(O.b,{to:"#menu2",className:"colorBlue",children:"Menu 2"})}),Object(a.jsx)(h.a.Item,{className:"menuFont",children:Object(a.jsx)(O.b,{to:"#menu3",className:"colorBlue",children:"Menu 3"})})]})}),Object(a.jsx)("div",{className:"rightAlign",children:Object(a.jsx)(h.a,{mode:"horizontal",className:"menuHeader",children:Object(a.jsx)(h.a.Item,{className:"menuFont",children:Object(a.jsx)(x.a,{type:"primary",shape:"round",className:"buttonProperty",style:{background:"#00C8FF",borderColor:"#00C8FF"},children:"TRACK YOUR PACKAGE"})})})})]})},M=(t(220),t(329)),y=t(330),S=t(333),k=S.a.Paragraph,P=b.a.Footer;var w=function(){return Object(a.jsxs)(P,{className:"footer",children:[Object(a.jsx)(M.a,{children:Object(a.jsx)(y.a,{span:24,children:Object(a.jsxs)(h.a,{mode:"horizontal",className:"menuFooter",children:[Object(a.jsx)(h.a.Item,{className:"menuFont",children:"Menu 1"}),Object(a.jsx)(h.a.Item,{className:"menuFont",children:"Menu 2"}),Object(a.jsx)(h.a.Item,{className:"menuFont",children:"Menu 3"}),Object(a.jsx)(h.a.Item,{className:"menuFont",children:"Menu 4"})]})})}),Object(a.jsx)(M.a,{children:Object(a.jsx)(y.a,{span:3,children:Object(a.jsx)(o.a,{preview:!1,className:"footerLogo",src:"/PE-Logo-Footer.png"})})}),Object(a.jsx)(M.a,{children:Object(a.jsx)(y.a,{span:3,className:"menuFont",children:Object(a.jsx)("center",{children:Object(a.jsx)(k,{style:{color:"#FFFFFF"},children:"insert subheader text here"})})})}),Object(a.jsxs)(M.a,{className:"rightAlign",children:[Object(a.jsx)("div",{className:"marginRight",children:Object(a.jsx)("center",{children:Object(a.jsx)(u.a,{style:{backgroundColor:"#FFFFFF"}})})}),Object(a.jsx)("div",{className:"marginRight",children:Object(a.jsx)("center",{children:Object(a.jsx)(u.a,{style:{backgroundColor:"#FFFFFF"}})})}),Object(a.jsx)("div",{className:"marginRight",children:Object(a.jsx)("center",{children:Object(a.jsx)(u.a,{style:{backgroundColor:"#FFFFFF"}})})}),Object(a.jsx)("div",{className:"marginRight",children:Object(a.jsx)("center",{children:Object(a.jsx)(u.a,{style:{backgroundColor:"#FFFFFF"}})})})]})]})},C=t(32),H=(t(246),t(335)),D=t(161);t(247);var B=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(D.GoogleLogin,{clientId:"55520656354-nv3m9jg3sdvucbsopa4o5ebuttimidrf.apps.googleusercontent.com",buttonText:"Google Sign In",icon:!1,onSuccess:N})})},E=S.a.Text;var z=function(){return Object(a.jsxs)("div",{className:"wrapperWholePage",children:[Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsxs)(M.a,{children:[Object(a.jsxs)(y.a,{className:"maxHeight",span:10,children:[Object(a.jsx)("div",{className:"headerPadding1",children:Object(a.jsx)(E,{className:"promotionalHeader",style:{color:"#00C8FF"},children:"Insert promotional header text here."})}),Object(a.jsx)("div",{className:"subheaderPadding1",children:Object(a.jsx)(E,{className:"promotionalSubheader",style:{color:"#00C8FF"},children:"Insert subheader promotional text here. Insert subheader promotional text here.Insert subheader promotional text here.Insert subheader promotional text here."})}),Object(a.jsx)("div",{className:"buttonPadding",children:Object(a.jsx)(B,{})})]}),Object(a.jsx)(y.a,{className:"maxHeight",span:14,children:Object(a.jsx)("div",{className:"picturePadding",children:Object(a.jsx)(o.a,{preview:!1,className:"landingPicture",src:"/PE-Landing.png"})})}),Object(a.jsx)(y.a,{className:"bottomCenter1",span:24,children:Object(a.jsx)("div",{className:"caretDownBlue",children:Object(a.jsx)(H.a,{})})})]})}),Object(a.jsxs)("div",{id:"menu1",className:"wrapper",style:{background:"#00C8FF"},children:[Object(a.jsxs)(M.a,{children:[Object(a.jsx)(y.a,{span:24,className:"headerPadding2",children:Object(a.jsx)(E,{className:"promotionalHeader",style:{color:"#FFFFFF"},children:"Insert header text here."})}),Object(a.jsx)(y.a,{span:24,className:"subheaderPadding2",children:Object(a.jsx)(E,{className:"promotionalSubheader",style:{color:"#FFFFFF"},children:"Insert subheader text here. Insert text here. Insert subheader text here. Insert subheader text here."})})]}),Object(a.jsxs)(M.a,{children:[Object(a.jsx)(y.a,{span:8,className:"boxPadding",children:Object(a.jsxs)("div",{className:"box1",children:[Object(a.jsx)(M.a,{className:"avatarMargin",children:Object(a.jsx)(u.a,{size:80,className:"blueIcon"})}),Object(a.jsx)(M.a,{className:"boxSubheader1",children:"Insert subheader text here. Insert text here. Insert subheader text here. Insert subheader text here."})]})}),Object(a.jsx)(y.a,{span:8,className:"boxPadding",children:Object(a.jsxs)("div",{className:"box1",children:[Object(a.jsx)(M.a,{className:"avatarMargin",children:Object(a.jsx)(u.a,{size:80,className:"blueIcon"})}),Object(a.jsx)(M.a,{className:"boxSubheader1",children:"Insert subheader text here. Insert text here. Insert subheader text here. Insert subheader text here."})]})}),Object(a.jsx)(y.a,{span:8,className:"boxPadding",children:Object(a.jsxs)("div",{className:"box1",children:[Object(a.jsx)(M.a,{className:"avatarMargin",children:Object(a.jsx)(u.a,{size:80,className:"blueIcon"})}),Object(a.jsx)(M.a,{className:"boxSubheader1",children:"Insert subheader text here. Insert text here. Insert subheader text here. Insert subheader text here."})]})})]}),Object(a.jsx)(M.a,{children:Object(a.jsx)(y.a,{className:"bottomCenter2",span:24,children:Object(a.jsx)("div",{className:"caretDownWhite",children:Object(a.jsx)(H.a,{})})})})]}),Object(a.jsxs)("div",{id:"menu2",className:"wrapper",children:[Object(a.jsxs)(M.a,{children:[Object(a.jsx)(y.a,{span:24,className:"headerPadding2",children:Object(a.jsx)(E,{className:"promotionalHeader",style:{color:"#00C8FF"},children:"Insert header text here."})}),Object(a.jsx)(y.a,{span:24,className:"subheaderPadding2",children:Object(a.jsx)(E,{className:"promotionalSubheader",style:{color:"#00C8FF"},children:"Insert subheader text here. Insert text here. Insert subheader text here. Insert subheader text here."})})]}),Object(a.jsxs)(M.a,{children:[Object(a.jsx)(y.a,{span:6,className:"boxPadding",children:Object(a.jsxs)("div",{className:"box2",children:[Object(a.jsx)(M.a,{className:"avatarMargin",children:Object(a.jsx)(u.a,{size:80,className:"whiteIcon"})}),Object(a.jsx)(M.a,{className:"boxSubheader2",children:"Insert subheader text here. Insert text here. Insert subheader text here. Insert subheader text here."})]})}),Object(a.jsx)(y.a,{span:6,className:"boxPadding",children:Object(a.jsxs)("div",{className:"box2",children:[Object(a.jsx)(M.a,{className:"avatarMargin",children:Object(a.jsx)(u.a,{size:80,className:"whiteIcon"})}),Object(a.jsx)(M.a,{className:"boxSubheader2",children:"Insert subheader text here. Insert text here. Insert subheader text here. Insert subheader text here."})]})}),Object(a.jsx)(y.a,{span:6,className:"boxPadding",children:Object(a.jsxs)("div",{className:"box2",children:[Object(a.jsx)(M.a,{className:"avatarMargin",children:Object(a.jsx)(u.a,{size:80,className:"whiteIcon"})}),Object(a.jsx)(M.a,{className:"boxSubheader2",children:"Insert subheader text here. Insert text here. Insert subheader text here. Insert subheader text here."})]})}),Object(a.jsx)(y.a,{span:6,className:"boxPadding",children:Object(a.jsxs)("div",{className:"box2",children:[Object(a.jsx)(M.a,{className:"avatarMargin",children:Object(a.jsx)(u.a,{size:80,className:"whiteIcon"})}),Object(a.jsx)(M.a,{className:"boxSubheader2",children:"Insert subheader text here. Insert text here. Insert subheader text here. Insert subheader text here."})]})})]}),Object(a.jsx)(M.a,{children:Object(a.jsx)(y.a,{className:"bottomCenter2",span:24,children:Object(a.jsx)("div",{className:"caretDownBlue",children:Object(a.jsx)(H.a,{})})})})]}),Object(a.jsx)("div",{id:"menu3",className:"wrapper",children:Object(a.jsx)(M.a,{children:Object(a.jsx)(y.a,{span:24,className:"page4",children:"SOMETHING"})})})]})};var L=function(){return Object(a.jsx)("h1",{children:" Dashboard "})},T=t(339);t(248);var Y=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(M.a,{children:[Object(a.jsxs)(y.a,{span:12,children:[Object(a.jsxs)("div",{className:"tracking-header",children:[Object(a.jsx)("div",{className:"tracking-title",children:" Tracking "}),Object(a.jsx)("div",{className:"tracking-number",children:" Tracking Number "})]}),Object(a.jsxs)(T.a,{mode:"right",children:[Object(a.jsxs)(T.a.Item,{label:"Status is here",color:"blue",children:[Object(a.jsx)("p",{className:"tracking-date",children:"MM YY DD"}),Object(a.jsx)("p",{children:"HH MM SS"})]}),Object(a.jsxs)(T.a.Item,{label:"Status is here",color:"blue",children:[Object(a.jsx)("p",{className:"tracking-date",children:"MM YY DD"}),Object(a.jsx)("p",{children:"HH MM SS"})]}),Object(a.jsxs)(T.a.Item,{label:"Status is here",color:"blue",children:[Object(a.jsx)("p",{className:"tracking-date",children:"MM YY DD"}),Object(a.jsx)("p",{children:"HH MM SS"})]}),Object(a.jsxs)(T.a.Item,{label:"Status is here",color:"blue",children:[Object(a.jsx)("p",{className:"tracking-date",children:"MM YY DD"}),Object(a.jsx)("p",{children:"HH MM SS"})]}),Object(a.jsxs)(T.a.Item,{label:"Status is here",color:"gray",children:[Object(a.jsx)("p",{className:"tracking-date",children:"MM YY DD"}),Object(a.jsx)("p",{children:"HH MM SS"})]}),Object(a.jsxs)(T.a.Item,{label:"Status is here",color:"gray",children:[Object(a.jsx)("p",{className:"tracking-date",children:"MM YY DD"}),Object(a.jsx)("p",{children:"HH MM SS"})]})]})]}),Object(a.jsx)(y.a,{span:12,className:"tracking-side"})]})})},A=t(331),R=t(337);t(249);var G=function(){return Object(a.jsx)("div",{className:"editProfilePage",children:Object(a.jsx)("div",{className:"editProfileMain",children:Object(a.jsxs)(A.a,{layout:"vertical",children:[Object(a.jsx)(M.a,{gutter:4,children:Object(a.jsx)(y.a,{span:12,children:Object(a.jsx)("h1",{children:"Edit Profile"})})}),Object(a.jsxs)(M.a,{gutter:4,children:[Object(a.jsx)(y.a,{span:6,children:Object(a.jsx)(A.a.Item,{label:"First name",name:"firstName",children:Object(a.jsx)(R.a,{})})}),Object(a.jsx)(y.a,{span:6,children:Object(a.jsx)(A.a.Item,{label:"Last name",name:"lastName",children:Object(a.jsx)(R.a,{})})})]}),Object(a.jsx)(M.a,{gutter:4,children:Object(a.jsx)(y.a,{span:12,children:Object(a.jsx)(A.a.Item,{label:"Email Address",name:"email",children:Object(a.jsx)(R.a,{})})})}),Object(a.jsx)(M.a,{gutter:4,children:Object(a.jsx)(y.a,{span:12,children:Object(a.jsx)(A.a.Item,{label:"Cellphone Number",name:"cellphoneNumber",children:Object(a.jsx)(R.a,{})})})}),Object(a.jsx)(M.a,{gutter:4,children:Object(a.jsx)(y.a,{span:24,children:Object(a.jsx)(x.a,{children:"Submit"})})})]})})})};var J=function(){return Object(a.jsxs)(C.c,{children:[Object(a.jsx)(C.a,{path:"/",exact:!0,component:z}),Object(a.jsx)(C.a,{path:"/dashboard",component:L}),Object(a.jsx)(C.a,{path:"/tracking",component:Y}),Object(a.jsx)(C.a,{path:"/edit",component:G})]})},W=(t(325),b.a.Content),K=function(){var e=Object(c.useState)(null),s=Object(d.a)(e,2),t=s[0],r=s[1];return Object(c.useEffect)((function(){function e(){return(e=Object(i.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,p();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.jsxs)(b.a,{children:[null!=t?Object(a.jsx)(I,{}):Object(a.jsx)(f,{}),Object(a.jsx)(W,{style:{background:"#FFFFFF",height:"100%"},children:Object(a.jsx)(J,{})}),Object(a.jsx)(w,{})]})},U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,340)).then((function(s){var t=s.getCLS,a=s.getFID,c=s.getFCP,r=s.getLCP,n=s.getTTFB;t(e),a(e),c(e),r(e),n(e)}))};n.a.render(Object(a.jsx)(O.a,{children:Object(a.jsx)(K,{})}),document.getElementById("root")),U()}},[[326,1,2]]]);
//# sourceMappingURL=main.72a21531.chunk.js.map