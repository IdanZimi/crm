(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},26:function(e,t,a){e.exports=a(61)},31:function(e,t,a){},33:function(e,t,a){},56:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(24),r=a.n(c),i=(a(31),a(2)),o=a(3),s=a(5),u=a(4),m=a(6),p=(a(33),a(64)),d=a(63),h=a(65),E=a(13),f=(a(15),a(10)),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).declare=function(){var t=e.state.clientname;!0===e.props.clients.sold?alert("Already Sold"):e.props.declareSale(t)},e.send=function(){var t=e.state.clientname,a=e.state.emailType;e.props.changeEmail(t,a)},e.transfer=function(){var t=e.state.clientname,a=e.state.ownername;e.props.transfer(t,a)},e.inputchange=function(t){var a=t.target.value;e.setState(Object(f.a)({},t.target.name,a)),console.log(a)},e.state={clientname:"",ownername:"",emailType:""},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.clients;return l.a.createElement("div",null,l.a.createElement("p",{id:"update"},"Update"),l.a.createElement("div",null,l.a.createElement("p",{className:"update"},"Client:",l.a.createElement("input",{list:"clients",name:"clientname",className:"input",value:this.state.clientname,onChange:this.inputchange,placeholder:"Clients name"}),l.a.createElement("datalist",{id:"clients"},e.map(function(e){return l.a.createElement("option",{value:e.name},e.name)})))),l.a.createElement("p",{className:"update pupdate"},"Transfer ownership to",l.a.createElement("select",{id:"ownerselect",type:"text",name:"ownername",placeholder:"Owner",onChange:this.inputchange},l.a.createElement("option",null,"Owner"),l.a.createElement("option",{value:"Emily Durham"},"Emily Durham"),l.a.createElement("option",{value:"Janice Alvarado"},"Janice Alvarado"),l.a.createElement("option",{value:"Leila Howe"},"Leila Howe"),l.a.createElement("option",{value:"Hull Conrad"},"Hull Conrad"),l.a.createElement("option",{value:"Martin Massey"},"Martin Massey"),l.a.createElement("option",{value:"Shepherd Stone"},"Shepherd Stone"),l.a.createElement("option",{value:"Barton Ramirez"},"Barton Ramirez")),l.a.createElement("span",{onClick:this.transfer,id:"spanTransfer"},"Transfer")),l.a.createElement("p",{className:"update pupdate"},"Send Email:",l.a.createElement("select",{id:"emailselect",type:"text",name:"emailType",placeholder:"Email type",onChange:this.inputchange},l.a.createElement("option",null,"Email Type"),l.a.createElement("option",null,"A"),l.a.createElement("option",null,"B"),l.a.createElement("option",null,"C"),l.a.createElement("option",null,"D")),l.a.createElement("span",{id:"spanemail",onClick:this.send},"Send")),l.a.createElement("p",{className:"update pupdate"},"Declare sale!",l.a.createElement("span",{id:"spanDeclare",onClick:this.declare},"Declare")),l.a.createElement("hr",null))}}]),t}(n.Component),g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).addNewClient=function(){var t=e.state.firstName,a=e.state.surName,n=e.state.country,l=e.state.owner;e.props.addNewClient(t,a,n,l)},e.inputchange=function(t){var a=t.target.value;e.setState(Object(f.a)({},t.target.name,a)),console.log(a)},e.state={firstName:"",surName:"",country:"",owner:""},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",{id:"addclient"},"Add Client")),l.a.createElement("div",null,l.a.createElement("p",{className:"update"},"First name: ",l.a.createElement("input",{id:"input1",type:"text",name:"firstName",onChange:this.inputchange,placeholder:"First Name"})),l.a.createElement("p",{className:"update"},"Surname: ",l.a.createElement("input",{id:"input2",type:"text",name:"surName",placeholder:"Surname",onChange:this.inputchange})),l.a.createElement("p",{className:"update"},"Country: ",l.a.createElement("input",{id:"input3",type:"text",name:"country",placeholder:"Country",onChange:this.inputchange})),l.a.createElement("p",{className:"update"},"Owner:",l.a.createElement("select",(e={id:"owner",type:"text",name:"ownername"},Object(f.a)(e,"name","owner"),Object(f.a)(e,"placeholder","Owner"),Object(f.a)(e,"onChange",this.inputchange),e),l.a.createElement("option",null,"Owner"),l.a.createElement("option",{value:"Emily Durham"},"Emily Durham"),l.a.createElement("option",{value:"Janice Alvarado"},"Janice Alvarado"),l.a.createElement("option",{value:"Leila Howe"},"Leila Howe"),l.a.createElement("option",{value:"Hull Conrad"},"Hull Conrad"),l.a.createElement("option",{value:"Martin Massey"},"Martin Massey"),l.a.createElement("option",{value:"Shepherd Stone"},"Shepherd Stone"),l.a.createElement("option",{value:"Barton Ramirez"},"Barton Ramirez")))),l.a.createElement("button",{onClick:this.addNewClient,className:"buttonAddNewClient"},"Add New Client"))}}]),t}(n.Component),b=a(12),y=a.n(b),O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).addNewClient=function(e,t,a,n){if(""===e||""===t||""===a||""===n)return alert("Please insert full details");var l={country:a,email:"",emailType:"",firstContact:"",name:e+" "+t,owner:n,sold:!1};y.a.post("/newClient",{NewClient:l}).then(function(e){}),alert("Congratulations , you just added a new client !")},e.changeEmail=function(t,a){if(""===t||""===a||"Email Type"===a)return alert("Please insert full details");var n=Object(E.a)(e.state.clients).find(function(e){return e.name===t});n.emailType=a,y.a.post("/send",{clientToUpdate:n}).then(function(e){console.log(e),console.log("hey")}),alert("Email have been sent")},e.transfer=function(t,a){if(""===t||""===a)return alert("Please insert full details");var n=Object(E.a)(e.state.clients).find(function(e){return e.name===t});n.owner=a,y.a.post("/transfer",{clientToUpdate:n}).then(function(e){console.log(e),console.log("hey")}),alert("Owner have been transfered")},e.declareSale=function(t){if(""===t)return alert("Please insert full details");var a=Object(E.a)(e.state.clients).find(function(e){return e.name===t});a.sold=!0,y.a.post("/declare",{clientToUpdate:a}).then(function(e){console.log(e),console.log("hey")}),alert("Sold!")},e.state={clients:[]},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("/actions").then(function(t){e.setState({clients:t.data},function(){console.log(t.data)})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,{clients:this.state.clients,transfer:this.transfer,changeEmail:this.changeEmail,declareSale:this.declareSale}),l.a.createElement(g,{addNewClient:this.addNewClient}))}}]),t}(n.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("span",null))}}]),t}(n.Component),j=(a(17),a(56),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).update=function(){a.props.update(a.state.name,a.state.srname,a.state.country,a.props.id),a.props.togglePopup()},a.changeInput=function(e){var t=e.target.value;a.setState(Object(f.a)({},e.target.name,t)),console.log(a.state.name)},a.state={name:e.client.name.split(" ")[0],srname:e.client.name.split(" ")[1],country:e.client.country},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"popup"},l.a.createElement("div",{className:"innerpopup"},l.a.createElement("button",{className:"buttonX",onClick:this.props.togglePopup},"X"),l.a.createElement("h2",{id:"pEdit"},"Edit"),l.a.createElement("p",null,"Name: ",l.a.createElement("input",{type:"text",value:this.state.name,name:"name",onChange:this.changeInput})),l.a.createElement("p",null,"Surname: ",l.a.createElement("input",{type:"text",value:this.state.srname,name:"srname",onChange:this.changeInput})),l.a.createElement("p",null,"Country: ",l.a.createElement("input",{type:"text",value:this.state.country,name:"country",onChange:this.changeInput})),l.a.createElement("button",{className:"buttonUpdate",onClick:this.update},"Update")))}}]),t}(n.Component)),w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).togglePopup=function(){e.setState({showPopup:!e.state.showPopup}),console.log(e.state.showPopup)},e.checksold=function(){return e.props.client.sold?l.a.createElement("img",{className:"img",alt:"",src:"http://www.ella-abramov.com/wp-content/uploads/2016/02/%D7%95%D7%99-%D7%A2%D7%9D-%D7%A8%D7%A7%D7%A2-%D7%A9%D7%9C-%D7%94%D7%90%D7%AA%D7%A8-%D7%A4%D7%99%D7%90%D7%9F-%D7%92%D7%99%D7%A9%D7%97%D7%95%D7%A8.png"}):"-"},e.checkemail=function(){var t=e.props.client.emailType;return t||"-"},e.state={showPopup:!1},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("tr",{className:"clients"},l.a.createElement("td",null,l.a.createElement("button",{className:"buttonEdit",onClick:this.togglePopup},"Edit")),l.a.createElement("td",null,this.props.client.name.split(" ")[0]),l.a.createElement("td",null,this.props.client.name.split(" ")[1]),l.a.createElement("td",null,this.props.client.country),l.a.createElement("td",null,this.props.client.email),l.a.createElement("td",null,this.props.client.firstContact),l.a.createElement("td",null,this.checkemail()),l.a.createElement("td",null,this.checksold()),l.a.createElement("td",null,this.props.client.owner),this.state.showPopup?l.a.createElement(j,{togglePopup:this.togglePopup,client:this.props.client,id:this.props.id,update:this.props.update}):null)}}]),t}(n.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("tr",{className:"tr"},l.a.createElement("th",null),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Surname"),l.a.createElement("th",null,"Country"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"First Contact"),l.a.createElement("th",null,"Email Type"),l.a.createElement("th",null,"Sold"),l.a.createElement("th",null,"Owner"))}}]),t}(n.Component),D=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).searchChange=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.update=function(t,a,n,l){var c=Object(E.a)(e.state.Clients);console.log(l);var r=c.find(function(e){return e._id===l}),i=c.indexOf(r);r.name=t+" "+a,r.country=n,c[i]=r,y.a.post("/clients",{clientToUpdate:r}).then(function(e){console.log(e),console.log("hey")})},e.state={Clients:[],search:""},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("/clients").then(function(t){console.log(t.data),e.setState({Clients:t.data})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("input",{type:"text",className:"searchInput",name:"search",value:this.state.search,onChange:this.searchChange,placeholder:"search by name...    "}),l.a.createElement("select",{className:"select"},l.a.createElement("option",{value:"name"},"Name")),l.a.createElement("hr",null),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement(N,null),this.state.Clients.map(function(t){if(t.name.includes(e.state.search))return l.a.createElement(w,{key:t._id,id:t._id,client:t,update:e.update})}))))}}]),t}(n.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"main-links"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(d.a,{to:"/clients"},"Clients")),l.a.createElement("li",null,l.a.createElement(d.a,{to:"/actions"},"Actions")),l.a.createElement("li",null,l.a.createElement(d.a,{to:"/analytics"},"Analytics"))))),l.a.createElement("div",{className:"main-routes"},l.a.createElement(h.a,{path:"/clients",exact:!0,component:D}),l.a.createElement(h.a,{path:"/actions",exact:!0,component:O}),l.a.createElement(h.a,{path:"/analytics",exact:!0,component:C}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.449892bc.chunk.js.map