(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{78:function(e,t,c){},79:function(e,t,c){},83:function(e,t,c){},89:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(24),a=c.n(r),i=(c(78),c(79),c(9)),o=c(20),s=c(11),l=c(15),u=c(114),d=c(117),j=(c(83),c(3)),b=function(e){var t=e.searchingParam,c=e.sortParam,r=Object(n.useState)(!1),a=Object(s.a)(r,2),i=a[0],o=a[1],l=Object(n.useState)(!1),b=Object(s.a)(l,2),O=b[0],m=b[1];return Object(j.jsxs)(u.a,{direction:"row",align:"center",justify:"center",children:[Object(j.jsx)(d.a,{pad:"5px",label:"Sort by name?",checked:i,onChange:function(e){o((function(e){return!e})),t(e.target.checked)}}),Object(j.jsx)(d.a,{pad:"5px",label:"Sort by count?",checked:O,onChange:function(e){m((function(e){return!e})),c(e.target.checked)}})]})},O=(c(89),c(31)),m=c(118),p=c(111),h=function(e){var t=e.name,c=e.count,n=e.imageUrl,r=e.id,a=Object(l.b)();return Object(j.jsxs)(u.a,{pad:"xsmall",basis:"1/3",direction:"column",background:"white",border:"all",justify:"between",children:[Object(j.jsxs)(u.a,{children:[Object(j.jsxs)("h2",{className:"product-title",children:["Name: ",t]}),Object(j.jsxs)("h3",{children:["Count: ",c]})]}),Object(j.jsx)(u.a,{height:"medium",children:Object(j.jsx)(m.a,{src:n,fit:"contain",width:"100%"})}),Object(j.jsxs)(u.a,{align:"center",justify:"between",direction:"row",margin:{top:"10px"},children:[Object(j.jsx)(O.b,{to:"/".concat(r),children:Object(j.jsx)(p.a,{secondary:!0,label:"Details",size:"small",color:"neutral-3"})}),Object(j.jsx)(p.a,{secondary:!0,label:"Delete product",size:"small",color:"status-error",onClick:function(){window.confirm("Are you realy want to delete product ".concat(t,"?"))&&a({type:"DELETE_PRODUCT",payload:r})}})]})]})},g=(c(92),c(116)),f=c(127),x=c(110),y=c(112);function w(e){var t=Object(n.useState)(e.productName||""),c=Object(s.a)(t,2),r=c[0],a=c[1],i=Object(n.useState)(e.productImgUrl||""),o=Object(s.a)(i,2),d=o[0],b=o[1],O=Object(n.useState)(e.productCount||1),m=Object(s.a)(O,2),h=m[0],w=m[1],C=Object(n.useState)(e.productWeight||1),v=Object(s.a)(C,2),E=v[0],S=v[1],D=Object(n.useState)(e.productWidth||1),I=Object(s.a)(D,2),k=I[0],N=I[1],T=Object(n.useState)(e.productHeight||1),_=Object(s.a)(T,2),P=_[0],U=_[1],z=Object(l.b)(),A=function(){e.onClose&&e.onClose()},F=e.productName?Object(j.jsx)(p.a,{margin:"15px",size:"large",primary:!0,label:"Edit",color:"neutral-1",onClick:function(){if(r&&d.startsWith("http")&&E&&k&&P){var t={id:e.productId,imageUrl:d,name:r[0].toUpperCase()+r.slice(1),count:+h,size:{width:k,height:P},weight:E,comments:e.comments};z({type:"EDIT_PRODUCT",payload:t}),A()}else alert('Please, fill the form. (Product Img Url must starts with "http")')}}):Object(j.jsx)(p.a,{margin:"15px",size:"large",primary:!0,label:"Add",color:"neutral-1",onClick:function(){if(r&&d.startsWith("http")&&E&&k&&P){var e={id:Date.now().toString(),imageUrl:d,name:r[0].toUpperCase()+r.slice(1),count:+h,size:{width:k,height:P},weight:E,comments:[]};z({type:"ADD_PRODUCT",payload:e}),A()}else alert('Please, fill the form. (Product Img Url must starts with "http")')}});return e.open&&Object(j.jsx)(g.a,{onClickOutside:function(){return e.onClose()},children:Object(j.jsxs)(u.a,{align:"center",justify:"center",children:[Object(j.jsxs)(f.a,{children:[Object(j.jsx)(x.a,{name:"name",htmlFor:"name",label:"Name:",margin:{top:"10px"},children:Object(j.jsx)(y.a,{id:"name",size:"small",pad:"100px",placeholder:"Enter name of product",onChange:function(e){return a(e.target.value)},value:r})}),Object(j.jsx)(x.a,{name:"img",htmlFor:"img",label:"Image url:",margin:{top:"10px"},children:Object(j.jsx)(y.a,{id:"img",size:"small",placeholder:"Enter img url of product",onChange:function(e){return b(e.target.value)},value:d})}),Object(j.jsxs)(u.a,{direction:"row",pad:"10px",margin:"20px",children:[Object(j.jsxs)(u.a,{basis:"1/2",align:"start",justify:"end",pad:"20px",margin:"20px",children:[Object(j.jsx)("span",{children:"Enter count of product"}),Object(j.jsx)(y.a,{id:"count",type:"number",min:"1",max:"100000",onChange:function(e){return w(e.target.value)},value:h}),Object(j.jsx)("span",{children:"Enter weight (g)"}),Object(j.jsx)(y.a,{id:"weight",type:"number",min:"1",max:"10000",onChange:function(e){return S(e.target.value)},value:E})]}),Object(j.jsxs)(u.a,{align:"end",justify:"end",basis:"1/2",pad:"20px",margin:"20px",children:[Object(j.jsx)("label",{htmlFor:"width",children:"Enter width (cm)"}),Object(j.jsx)(y.a,{id:"width",type:"number",min:"1",max:"10000",onChange:function(e){return N(e.target.value)},value:k}),Object(j.jsx)("label",{htmlFor:"height",children:"Enter height (cm)"}),Object(j.jsx)(y.a,{id:"height",name:"height",type:"number",min:"1",max:"10000",onChange:function(e){return U(e.target.value)},value:P})]})]})]}),Object(j.jsxs)(u.a,{align:"center",justify:"center",children:[F,Object(j.jsx)(p.a,{size:"large",margin:"5px",primary:!0,label:"Cancel",color:"status-error",onClick:A})]})]})})}c(93),c(94);var C=c(120),v=c(121),E=function(e){var t=e.productId,c=Object(n.useState)(""),r=Object(s.a)(c,2),a=r[0],i=r[1],o=Object(l.b)(),u={id:Date.now(),productId:t,description:a,date:(new Date).toLocaleString()};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(C.a,{children:"Comments:"}),Object(j.jsx)(v.a,{value:a,onChange:function(e){return i(e.target.value)},className:"comment-text-area",placeholder:"Write your comment!"}),Object(j.jsx)(p.a,{margin:"15px",label:"Add comment",secondary:!0,color:"neutral-1",onClick:function(){a&&(o(function(e,t){return{type:"ADD_COMMENT",payload:{productId:e,comment:t}}}(t,u)),i(""))}})]})},S=c(10),D=function(e){var t=e.productId,c=Object(l.b)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(u.a,{direction:"row",width:"100%",justify:"between",background:e.color,pad:"medium",children:[Object(j.jsxs)(u.a,{children:[Object(j.jsxs)(C.a,{color:"neutral-3",children:[e.date,"."]}),Object(j.jsx)(C.a,{margin:"0",children:e.description})]}),Object(j.jsx)(p.a,{alignSelf:"center",onClick:function(){c(function(e,t){return{type:"DELETE_COMMENT",payload:{productId:e,commentId:t}}}(t,e.id))},label:"Delete",secondary:!0,color:"status-error",size:"small"})]})})},I=c(122),k=c(119),N=function(e){var t=Object(n.useState)(!1),c=Object(s.a)(t,2),r=c[0],a=c[1],o=Object(l.c)((function(e){return e.products})),d=Object(S.f)().id,b=o.find((function(e){return e.id===d}));if(!b)return Object(j.jsx)("div",{className:"error",children:"Product not found"});var O=b.name,h=b.count,g=b.imageUrl,f=b.size,x=b.weight,y=b.comments,C=f.width,v=f.height;return Object(j.jsxs)(u.a,{align:"start",children:[Object(j.jsx)(u.a,{alignSelf:"center",justify:"center",direction:"row",children:Object(j.jsx)(m.a,{src:g,alignSelf:"center",width:"75%"})}),Object(j.jsxs)(I.a,{alignSelf:"center",children:["Name: ",O]}),Object(j.jsxs)(k.a,{alignSelf:"center",children:["Count: ",h]}),Object(j.jsxs)(u.a,{alignSelf:"center",justify:"center",border:"horizontal",pad:"medium",margin:"15px",children:[Object(j.jsx)(k.a,{margin:{bottom:"10px"},children:"Details:"}),Object(j.jsxs)(k.a,{children:["Width: ",C," cm"]}),Object(j.jsxs)(k.a,{children:["Height: ",v," cm"]}),Object(j.jsxs)(k.a,{children:["Weight: ",x," g"]})]}),Object(j.jsx)(p.a,{onClick:function(){a(!0)},primary:!0,label:"Edit",alignSelf:"center",margin:"10px"}),Object(j.jsx)(w,{open:r,productId:d,productName:O,productImgUrl:g,productCount:h,productWeight:x,productWidth:C,productHeight:v,comments:y,onClose:function(){return a(!1)}}),Object(j.jsx)(E,{productId:d}),Object(j.jsx)(u.a,{width:"100%",align:"center",justify:"center",children:y&&y.length?y.reverse().map((function(e,t){return Object(j.jsx)(D,Object(i.a)({color:t%2?"light-1":"light-3"},e),e.id)})):"No comments"})]})},T=c(123);function _(){return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),null}var P=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),d=Object(s.a)(a,2),m=d[0],g=d[1],f=Object(l.c)((function(e){return e.products})),x=Object(n.useState)(!1),y=Object(s.a)(x,2),C=y[0],v=y[1];return Object(j.jsx)(O.a,{children:Object(j.jsxs)(S.c,{children:[Object(j.jsxs)(S.a,{path:"/:id",children:[Object(j.jsx)(_,{}),Object(j.jsx)(N,{})]}),Object(j.jsx)(S.a,{exact:!0,path:"/",children:Object(j.jsxs)(T.a,{className:"product-page",rows:["auto","flex"],columns:["auto","flex"],gap:"small",areas:[{name:"header",start:[0,0],end:[1,0]},{name:"main",start:[0,1],end:[1,1]}],children:[Object(j.jsx)(u.a,{gridArea:"header",background:"brand",alignSelf:"center","align-items":"center",children:Object(j.jsx)(I.a,{alignSelf:"center",children:"Products Page"})}),Object(j.jsxs)(u.a,{gridArea:"main",background:"light-2",children:[Object(j.jsx)(u.a,{align:"center",margin:"20px",children:Object(j.jsx)(p.a,{alignSelf:"center",secondary:!0,size:"medium",onClick:function(){v(!0)},label:"New Product"})}),Object(j.jsx)(w,{open:C,onClose:function(){return v(!1)}}),Object(j.jsx)(b,{searchingParam:function(e){r(e)},sortParam:function(e){return g(e)}}),Object(j.jsx)(u.a,{direction:"row-responsive",wrap:!0,justify:"center",margin:"10px",children:function(){if(m){var e=Object(o.a)(f);return e.sort((function(e,t){return t.count-e.count})),e.map((function(e){return Object(n.createElement)(h,Object(i.a)(Object(i.a)({},e),{},{key:e.id}))}))}if(c){var t=Object(o.a)(f);return t.sort((function(e,t){return e.name>t.name?1:-1})),t.map((function(e){return Object(n.createElement)(h,Object(i.a)(Object(i.a)({},e),{},{key:e.id}))}))}return f.map((function(e){return Object(n.createElement)(h,Object(i.a)(Object(i.a)({},e),{},{key:e.id}))}))}()})]})]})})]})})};var U=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(P,{})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,128)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))},A=c(67),F=localStorage.getItem("reduxState"),R=F?JSON.parse(F):{products:[]},L=Object(A.a)((function(e,t){switch(t.type){case"ADD_PRODUCT":return Object(i.a)(Object(i.a)({},e),{},{products:[].concat(Object(o.a)(e.products),[t.payload])});case"DELETE_PRODUCT":var c=e.products,n=t.payload,r=c.filter((function(e){return e.id!==n}));return Object(i.a)(Object(i.a)({},e),{},{products:Object(o.a)(r)});case"EDIT_PRODUCT":var a=e.products.findIndex((function(e){return e.id===t.payload.id}));return Object(i.a)(Object(i.a)({},e),{},{products:[].concat(Object(o.a)(e.products.slice(0,a)),[t.payload],Object(o.a)(e.products.slice(a+1)))});case"ADD_COMMENT":var s=e.products.findIndex((function(e){return e.id===t.payload.productId})),l=e.products[s];return Object(i.a)(Object(i.a)({},e),{},{products:[].concat(Object(o.a)(e.products.slice(0,s)),[Object(i.a)(Object(i.a)({},l),{},{comments:[].concat(Object(o.a)(l.comments),[t.payload.comment])})],Object(o.a)(e.products.slice(s+1)))});case"DELETE_COMMENT":var u=t.payload.productId,d=e.products.findIndex((function(e){return e.id===u})),j=e.products[d],b=j.comments,O=t.payload.commentId,m=b.filter((function(e){return e.id!==O}));return Object(i.a)(Object(i.a)({},e),{},{products:[].concat(Object(o.a)(e.products.slice(0,d)),[Object(i.a)(Object(i.a)({},j),{},{comments:m})],Object(o.a)(e.products.slice(d+1)))});default:return e}}),R,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());L.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(L.getState()))}));var W=L,M=c(113);a.a.render(Object(j.jsxs)(M.a,{theme:{global:{font:{family:"Roboto",size:"14px",height:"20px"}}},children:[Object(j.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"}),Object(j.jsx)(l.a,{store:W,children:Object(j.jsx)(U,{})})]}),document.getElementById("root")),z()}},[[95,1,2]]]);
//# sourceMappingURL=main.3cc41ecc.chunk.js.map