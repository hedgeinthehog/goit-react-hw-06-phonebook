(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{37:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"primaryBgColor",(function(){return Y})),n.d(r,"invertedBgColor",(function(){return ee})),n.d(r,"invertedTextColor",(function(){return te})),n.d(r,"primaryTextColor",(function(){return ne})),n.d(r,"accentColor",(function(){return re}));var c,o,a,i,u,l,d,s=n(0),b=n.n(s),h=n(11),j=n.n(h),m=n(5),p=n(10),f=n(14),x=n(15),g=n(23),O=n(22),v=n(4),C=n(3),y=C.c.button(c||(c=Object(v.a)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n\n  ","\n\n  ","\n\n  ","\n\n  &:hover,\n  &:focus {\n    outline: none;\n    box-shadow: 0px 0px 10px 0px\n    ","\n      }};\n  }\n"])),(function(e){switch(e.size){case"small":return"height: 14px; min-width: 40px; font-size: 12px;";case"large":return"height: 30px; min-width: 140px; font-size: 20px;";default:return"height: 24px; min-width: 100px; font-size: 16px;"}}),(function(e){return"light"===e.bg?"color: ".concat(e.theme.primaryTextColor,"; background-color: ").concat(e.theme.primaryBgColor,";"):"dark"===e.bg?"color: ".concat(e.theme.invertedTextColor,"; background-color: ").concat(e.theme.invertedBgColor,";"):void 0}),(function(e){switch(e.position){case"bottom":return"margin-top: 5px;";case"right":return"margin-left: 10px;";case"left":return"margin-rigth: 10px;";default:return"margin: 0;"}}),(function(e){return"light"===e.bg?" ".concat(e.theme.primaryBgColor,";"):"dark"===e.bg?" ".concat(e.theme.invertedBgColor,";"):void 0})),w=C.c.div(o||(o=Object(v.a)(["\n  width: 300px;\n  padding: 15px;\n  background-color: ",";\n  border-radius: 5px;\n  box-shadow: 0px 0px 12px -2px ",";\n"])),(function(e){return e.theme.invertedBgColor}),(function(e){return e.theme.invertedBgColor})),k=C.c.input(a||(a=Object(v.a)(["\n  display: block;\n  width: 100%;\n  margin-top: 5px;\n  border-radius: 5px;\n  border: 2px solid transparent;\n\n  &:hover,\n  &:focus {\n    border-color: ",";\n    outline: none;\n  }\n"])),(function(e){return e.theme.accentColor})),B=C.c.label(i||(i=Object(v.a)(["\n  color: ",";\n"])),(function(e){return e.theme.invertedTextColor})),z=C.c.div(u||(u=Object(v.a)(["\n  margin-bottom: 10px;\n"]))),A=n(39),T=n(6),S=Object(T.b)("contacts/add",(function(e,t){return{payload:{name:e,number:t,id:Object(A.a)()}}})),N=Object(T.b)("contacts/delete"),J=Object(T.b)("contacts/update_filter"),L=n(1),Z=w.withComponent("form"),q=function(e){Object(g.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(f.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,r=n.name,c=n.value;e.setState(Object(p.a)({},r,c))},e.handleSubmit=function(t){var n=e.state,r=n.name,c=n.number,o=e.props.createNewContact;t.preventDefault(),o(r,c),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(x.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(L.jsxs)(Z,{onSubmit:this.handleSubmit,children:[Object(L.jsx)(z,{children:Object(L.jsxs)(B,{children:["Name",Object(L.jsx)(k,{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange})]})}),Object(L.jsx)(z,{children:Object(L.jsxs)(B,{children:["Number",Object(L.jsx)(k,{type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})]})}),Object(L.jsx)(y,{type:"submit",bg:"light",position:"bottom",children:"Add contact"})]})}}]),n}(b.a.Component),D=Object(m.b)(null,(function(e){return{createNewContact:function(t,n){return e(S(t,n))}}}))(q),F=Object(m.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChange:function(t){return e(J(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(L.jsx)(w,{children:Object(L.jsxs)(B,{children:["Find contacts by name",Object(L.jsx)(k,{type:"text",name:"filter",value:t,onChange:n})]})})})),M=Object(m.b)(null,(function(e){return{deleteContact:function(t){return e(N(t.target.name))}}}))((function(e){var t=e.contacts,n=e.deleteContact;return Object(L.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.name,c=e.number;return Object(L.jsxs)("li",{children:[r," ",c,Object(L.jsx)(y,{type:"button",name:t,onClick:n,size:"small",bg:"dark",position:"right",children:"Delete"})]},t)}))})})),E=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},I=Object(m.b)((function(e){var t=e.contacts,n=t.items,r=t.filter;return{filteredContacts:E(n,r),filter:r}}))((function(e){var t=e.filteredContacts;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("h1",{children:"Phonebook"}),Object(L.jsx)(D,{}),Object(L.jsx)("h2",{children:"Contacts"}),Object(L.jsx)(F,{}),Object(L.jsx)(M,{contacts:t})]})})),P=n(19),$=n(7),_=n(20),G=n.n(_),H=n(21),K=n(2),Q=Object(T.c)([],(l={},Object(p.a)(l,S,(function(e,t){var n=t.payload;return e.find((function(e){return e.name===n.name}))?(alert("".concat(n.name," is already in contacts")),e):[n].concat(Object(H.a)(e))})),Object(p.a)(l,N,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),l)),R=Object(T.c)("",Object(p.a)({},J,(function(e,t){return t.payload}))),U=Object(K.b)({items:Q,filter:R}),V={key:"contacts",storage:G.a,blacklist:["filter"]},W=Object(T.a)({reducer:{contacts:Object($.g)(V,U)},middleware:Object(T.d)({serializableCheck:{ignoredActions:[$.a,$.f,$.b,$.c,$.d,$.e]}}),devTools:!1}),X=Object($.h)(W),Y=(n(36),"#e3dcd2"),ee="#013328",te="#e3dcd2",ne="#0f2405",re="#cc8b65",ce=Object(C.b)(d||(d=Object(v.a)(["\nbody {\n  padding: 10px;\n  color: ",";\n  background-color:  ",";\n}\n\nli {\n  line-height: 1.8;\n}"])),(function(e){return e.theme.primaryTextColor}),(function(e){return e.theme.primaryBgColor}));j.a.render(Object(L.jsx)(b.a.StrictMode,{children:Object(L.jsx)(m.a,{store:W,children:Object(L.jsx)(P.a,{loading:Object(L.jsx)("p",{children:"Loading..."}),persistor:X,children:Object(L.jsxs)(C.a,{theme:r,children:[Object(L.jsx)(ce,{}),Object(L.jsx)(I,{})]})})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.b92c1574.chunk.js.map