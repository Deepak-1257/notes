(this.webpackJsonpinotebook=this.webpackJsonpinotebook||[]).push([[0],{16:function(e,t,a){},28:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(20),r=a.n(c),l=(a(28),a(8)),i=a(11),o=a(2),d=a(23),b=(a(16),a(0)),j=function(){var e=Object(o.useLocation)(),t=Object(d.useHistory)();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(i.b,{className:"navbar-brand",to:"/",children:"MyNotebook"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link ".concat("/"===e.pathname?"active":""),"aria-current":"page",to:"/",children:"Home"})})}),localStorage.getItem("token")?Object(b.jsx)("button",{onClick:function(){localStorage.removeItem("token"),t.push("/login")},className:"btn btn-primary mx-1",children:" Logout "}):Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)(i.b,{className:"btn btn-primary mx-1",to:"/login",role:"button",children:"Login"}),Object(b.jsx)(i.b,{className:"btn btn-primary mx-1",to:"/signup",role:"button",children:"Signup"})]})]})]})})})},m=a(10),u=a(9),h=Object(s.createContext)(),p=function(e){var t=Object(s.useContext)(h).deleteNote,a=e.note,n=e.updateNote;return Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsx)("div",{className:"card my-3",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center",children:[Object(b.jsx)("h5",{className:"card-title",style:{"max-width":"180px"},children:a.title}),Object(b.jsx)("i",{className:"far fa-trash-alt mx-2",onClick:function(){t(a._id),e.showalert("deleted successfully","success")}}),Object(b.jsx)("i",{className:"far fa-edit mx-2",onClick:function(){n(a)}})]}),Object(b.jsx)("p",{className:"card-text",children:a.description})]})})})},x=function(e){var t=Object(s.useContext)(h).addNote,a=Object(s.useState)({title:"",description:"",tag:""}),n=Object(l.a)(a,2),c=n[0],r=n[1],i=function(e){r(Object(u.a)(Object(u.a)({},c),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)("div",{className:"container my-3 font-weight-bold",children:[Object(b.jsx)("h1",{children:"Add a Note"}),Object(b.jsxs)("form",{className:"my-3 font-weight-bold",children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("h4",{children:Object(b.jsx)("label",{htmlFor:"title",className:"form-label ",children:"Title"})}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title","aria-describedby":"emailHelp",value:c.title,onChange:i,minLength:5,required:!0})]}),Object(b.jsxs)("div",{className:"mb-3 font-weight-bold",children:[Object(b.jsx)("h4",{children:Object(b.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"})}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"description",name:"description",value:c.description,onChange:i,minLength:5,required:!0})]}),Object(b.jsxs)("div",{className:"mb-3 font-weight-bold",children:[Object(b.jsx)("h4",{children:Object(b.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"})}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"tag",name:"tag",value:c.tag,onChange:i,minLength:5,required:!0})]}),Object(b.jsx)("button",{disabled:c.title.length<5||c.description.length<5,type:"submit",className:"btn btn-primary",onClick:function(a){a.preventDefault(),t(c.title,c.description,c.tag),r({title:"",description:"",tag:""}),e.showalert("Added Successfully","success")},children:"Add Note"})]})]})},O=function(e){var t=Object(s.useContext)(h),a=t.notes,n=t.getNotes,c=t.editNote,r=Object(o.useHistory)();Object(s.useEffect)((function(){localStorage.getItem("token")?n():r.push("/login")}),[]);var i=Object(s.useRef)(null),d=Object(s.useRef)(null),j=Object(s.useState)({id:"",etitle:"",edescription:"",etag:""}),O=Object(l.a)(j,2),f=O[0],g=O[1],N=function(e){i.current.click(),g({id:e._id,etitle:e.title,edescription:e.description,etag:e.tag})},v=function(e){g(Object(u.a)(Object(u.a)({},f),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x,{showalert:e.showalert}),Object(b.jsx)("button",{ref:i,type:"button",className:"btn btn-primary d-none","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Launch demo modal"}),Object(b.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(b.jsx)("div",{className:"modal-dialog",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Edit Note"}),Object(b.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(b.jsx)("div",{className:"modal-body",children:Object(b.jsxs)("form",{className:"my-3",children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"etitle",name:"etitle",value:f.etitle,"aria-describedby":"emailHelp",onChange:v,minLength:5,required:!0})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"edescription",name:"edescription",value:f.edescription,onChange:v,minLength:5,required:!0})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"etag",name:"etag",value:f.etag,onChange:v})]})]})}),Object(b.jsxs)("div",{className:"modal-footer",children:[Object(b.jsx)("button",{ref:d,type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(b.jsx)("button",{disabled:f.etitle.length<5||f.edescription.length<5,onClick:function(t){c(f.id,f.etitle,f.edescription,f.etag),d.current.click(),e.showalert("Updated Successfully","success")},type:"button",className:"btn btn-primary",children:"Update Note"})]})]})})}),Object(b.jsxs)("div",{className:"row my-3",children:[Object(b.jsx)("h2",{children:"Your Notes"}),Object(b.jsx)("div",{className:"container mx-2",children:0===a.length&&"No notes to display"}),a.map((function(t){return Object(b.jsx)(p,{updateNote:N,note:t,showalert:e.showalert},t._id)}))]})]})},f=function(e){var t=e.showalert;return Object(b.jsx)("div",{children:Object(b.jsx)(O,{showalert:t})})},g=function(){return Object(b.jsx)("div",{})},N=a(12),v=a(4),y=a.n(v),w=function(e){var t="http://localhost:27017",a=Object(s.useState)([]),n=Object(l.a)(a,2),c=n[0],r=n[1],i=function(){var e=Object(N.a)(y.a.mark((function e(){var a,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/fetchallnotes"),{method:"GET",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,r(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(N.a)(y.a.mark((function e(a,s,n){var l,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/addnote"),{method:"POST",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:a,description:s,tag:n})});case 2:return l=e.sent,e.next=5,l.json();case 5:i=e.sent,r(c.concat(i));case 7:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}(),d=function(){var e=Object(N.a)(y.a.mark((function e(a){var s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/deletenote/").concat(a),{method:"DELETE",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:e.sent,s=c.filter((function(e){return e._id!==a})),r(s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(N.a)(y.a.mark((function e(a,s,n,l){var i,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/updatenote/").concat(a),{method:"PUT",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:s,description:n,tag:l})});case 2:e.sent,i=JSON.parse(JSON.stringify(c)),o=0;case 5:if(!(o<i.length)){e.next=15;break}if(i[o]._id!==a){e.next=12;break}return i[o].title=s,i[o].description=n,i[o].tag=l,e.abrupt("break",15);case 12:o++,e.next=5;break;case 15:r(i);case 16:case"end":return e.stop()}}),e)})));return function(t,a,s,n){return e.apply(this,arguments)}}();return Object(b.jsx)(h.Provider,{value:{notes:c,addNote:o,deleteNote:d,editNote:j,getNotes:i},children:e.children})},k=function(e){return Object(b.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(b.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show container my-3"),role:"alert",children:[e.alert.type," : ",e.alert.msg]})})},S=function(e){var t=Object(s.useState)({name:"",email:"",password:"",cpassword:""}),a=Object(l.a)(t,2),n=a[0],c=a[1],r=Object(o.useHistory)(),i=function(){var t=Object(N.a)(y.a.mark((function t(a){var s,c,l,i,o,d;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),s=n.name,c=n.email,l=n.password,i=n.cpassword,l!==i){t.next=13;break}return t.next=5,fetch("http://localhost:27017/api/auth/createuser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,email:c,password:l})});case 5:return o=t.sent,t.next=8,o.json();case 8:d=t.sent,console.log(d),d.success?(localStorage.setItem("token",d.authtoken),r.push("/"),e.showalert(" you logged in successfully","success")):(e.showalert("email is already registered","danger"),r.push("/login")),t.next=15;break;case 13:e.showalert("Password are not same","danger"),r.push("/signup");case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(e){c(Object(u.a)(Object(u.a)({},n),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:i,children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("h5",{children:Object(b.jsx)("label",{htmlFor:"name",className:"form-label",children:"Name"})}),Object(b.jsx)("input",{type:"name",className:"form-control",id:"name",name:"name",onChange:d})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("h5",{children:Object(b.jsx)("label",{htmlFor:"Email",className:"form-label",children:"email address"})}),Object(b.jsx)("input",{type:"email",className:"form-control",id:"Email",name:"email","aria-describedby":"emailHelp",onChange:d})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsxs)("h5",{children:[" ",Object(b.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"})]}),Object(b.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",onChange:d,minLength:5,required:!0})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("h5",{children:Object(b.jsx)("label",{htmlFor:"cpassword",className:"form-label",children:"Confirm Password"})}),Object(b.jsx)("input",{type:"password",className:"form-control",id:"cpassword",name:"cpassword",onChange:d,minLength:5,required:!0})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})},C=function(e){var t=Object(s.useState)({email:"",password:""}),a=Object(l.a)(t,2),n=a[0],c=a[1],r=Object(o.useHistory)(),i=function(){var t=Object(N.a)(y.a.mark((function t(a){var s,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,fetch("http://localhost:27017/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.email,password:n.password})});case 3:return s=t.sent,t.next=6,s.json();case 6:c=t.sent,console.log(c),c.success?(localStorage.setItem("token",c.authtoken),r.push("/"),e.showalert("you logged in successfully","success")):e.showalert("Invalid Credentials","danger");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(e){c(Object(u.a)(Object(u.a)({},n),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:i,children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("h4",{children:Object(b.jsx)("label",{htmlFor:"email",className:"form-label ",children:"Email address"})}),Object(b.jsx)("input",{type:"email",className:"form-control",value:n.email,onChange:d,id:"email",name:"email","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("h4",{children:Object(b.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"})}),Object(b.jsx)("input",{type:"password",className:"form-control",value:n.password,onChange:d,name:"password",id:"password"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})};var T=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),a=t[0],n=t[1],c=function(e,t){n({msg:e,type:t}),setTimeout((function(){n(null)}),1500)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(w,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(j,{}),Object(b.jsx)(k,{alert:a}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(o.Switch,{children:[Object(b.jsx)(o.Route,{exact:!0,path:"/",children:Object(b.jsx)(f,{showalert:c})}),Object(b.jsx)(o.Route,{exact:!0,path:"/about",children:Object(b.jsx)(g,{})}),Object(b.jsx)(o.Route,{exact:!0,path:"/login",children:Object(b.jsx)(C,{showalert:c})}),Object(b.jsx)(o.Route,{exact:!0,path:"/signup",children:Object(b.jsx)(S,{showalert:c})})]})})]})})})};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)("div",{id:"section",children:Object(b.jsx)(T,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.ded2b8db.chunk.js.map