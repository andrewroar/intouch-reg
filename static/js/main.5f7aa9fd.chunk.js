(this["webpackJsonpintouch-frontend"]=this["webpackJsonpintouch-frontend"]||[]).push([[0],{38:function(e,t){e.exports=function(){var e=new Date,t=e.getMonth()+1,n=e.getDate(),i=e.getFullYear();return t<10&&(t="0"+t.toString()),n<10&&(n="0"+n.toString()),i+"-"+t+"-"+n}},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t){e.exports=function(e){return new Date(Date.now()-new Date(e).getTime()).getUTCFullYear()-1970>17}},62:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),c=n(9),a=n.n(c),o=(n(43),n(44),n(62),n(37)),l=n(7),s=n(24),j=n.p+"static/media/logo.775abb8d.png",u=n(50),d=(n(63),n(103)),b=n(102),h=n(101),O=n(99),m=n(100),p=n(98),f=n(3);function g(e,t){var n=function(){e.dialogOpenDialog(!1)};return Object(f.jsx)("div",{children:Object(f.jsxs)(b.a,{open:!0,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(f.jsx)(p.a,{id:"alert-dialog-title",children:"Please Confirm your information"}),Object(f.jsx)(O.a,{children:Object(f.jsxs)(m.a,{id:"alert-dialog-description",children:["Name: ",e.name,Object(f.jsx)("br",{}),"Number: ",e.phoneNumber,Object(f.jsx)("br",{}),"Email: ",e.email,Object(f.jsx)("br",{}),"Date of Birth: ",e.dob,Object(f.jsx)("br",{})]})}),Object(f.jsxs)(h.a,{children:[Object(f.jsx)(d.a,{onClick:function(){e.dialogOpenDialog(!1),e.dialogInfoConfirmed()},color:"primary",children:"Confirm"}),Object(f.jsx)(d.a,{onClick:n,color:"primary",autoFocus:!0,children:"Cancel"})]})]})})}var x=n(46),v=n.n(x),y=n(38),C=n.n(y),N=n(47),S=n(48),D=function(){function e(t,n,i,r){Object(N.a)(this,e),this.name=t,this.number=n,this.email=i,this.dateOfBirth=r}return Object(S.a)(e,[{key:"logRegister",value:function(){console.log(this)}},{key:"postRegister",value:function(e){fetch(e,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(this)}).then((function(e){return e.json()})).catch((function(e){return alert("There is an error, please try again later"),e}))}}]),e}();var w=function(){var e=Object(l.f)(),t=Object(i.useState)(),n=Object(s.a)(t,2),r=n[0],c=n[1],a=Object(i.useState)(!1),o=Object(s.a)(a,2),d=o[0],b=o[1],h=Object(i.useState)(),O=Object(s.a)(h,2),m=O[0],p=O[1],x=Object(i.useState)(),y=Object(s.a)(x,2),N=y[0],S=y[1],w=Object(i.useState)(),B=Object(s.a)(w,2),F=B[0],R=B[1],k=Object(i.useState)(),P=Object(s.a)(k,2),T=P[0],q=P[1];C()();var E=new D(m,N,F,T);return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"login-form-div",children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(""),!0===v()(E.dateOfBirth)?b(!0):c("You Must Be At Least 18 Years Old to use our service")},className:"login-form",children:[Object(f.jsx)("img",{src:j,alt:"intouch game logo",className:"logo"}),Object(f.jsx)("h1",{className:"login-form-item",children:"Register"}),Object(f.jsx)("p",{className:"warning",children:r}),Object(f.jsx)("label",{htmlFor:"name",children:"Name*"}),Object(f.jsx)("input",{id:"name",type:"text",placeholder:"Please enter your full name",onChange:function(e){p(e.target.value)},required:!0}),Object(f.jsx)("label",{htmlFor:"name",children:"Number*"}),Object(f.jsx)(u.a,{placeholder:"Enter phone number",country:"UK",value:N,onChange:S,className:"phone-input",required:!0}),Object(f.jsx)("label",{htmlFor:"email",children:"Email*"}),Object(f.jsx)("input",{id:"email",type:"email",placeholder:"Please enter your email",onChange:function(e){R(e.target.value)},required:!0}),Object(f.jsx)("label",{htmlFor:"dob",children:"Date of Brith*"}),Object(f.jsx)("input",{id:"dob",type:"date",min:"1900-01-01",max:C()(),onChange:function(e){q(e.target.value)},placeholder:"Please enter your date of birth",required:!0}),Object(f.jsxs)("p",{children:["By registering you agree to our ",Object(f.jsx)("a",{href:"#",children:"privacy policy"})]}),Object(f.jsx)("button",{type:"submit",children:"Register"}),Object(f.jsxs)("p",{children:["Already have an account? ",Object(f.jsx)("a",{href:"#",children:"Login"})]})]})}),d?Object(f.jsx)(g,{dialogOpenDialog:function(e){b(e)},dialogInfoConfirmed:function(){E.postRegister("https://jsonplaceholder.typicode.com/posts"),e.replace("/sucess")},name:m,phoneNumber:N,email:F,dob:T}):null]})};var B=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("h3",{children:"Register Successful!! Redirecting..."})})};var F=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(o.a,{children:Object(f.jsx)("div",{children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{exact:!0,path:"/",children:Object(f.jsx)(w,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/sucess",children:Object(f.jsx)(B,{})})]})})})})};a.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.5f7aa9fd.chunk.js.map