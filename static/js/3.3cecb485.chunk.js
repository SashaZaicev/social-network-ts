(this.webpackJsonpsocial_network_ts=this.webpackJsonpsocial_network_ts||[]).push([[3],{288:function(t,e,s){t.exports={contentImg:"ProfileInfo_contentImg__wc8Sg",descriptionBlock:"ProfileInfo_descriptionBlock__23XPP",profileBlock:"ProfileInfo_profileBlock__3yisa",profileImage:"ProfileInfo_profileImage__2Toyw",profileImageContainer:"ProfileInfo_profileImageContainer__Hba9L",addFileField:"ProfileInfo_addFileField__3RFeL",profileInfo:"ProfileInfo_profileInfo__1HOtE"}},289:function(t,e,s){t.exports={posts:"MyPosts_posts__1AFQB",postBlock:"MyPosts_postBlock__3FKY5",btnStyle:"MyPosts_btnStyle__2gt4s"}},290:function(t,e,s){t.exports={item:"Post_item__cvmsW"}},291:function(t,e,s){"use strict";s.r(e);var o=s(3),i=s(37),r=s(38),n=s(40),a=s(39),c=s(1),l=s.n(c),u=s(288),d=s.n(u),p=s.p+"static/media/nullPhoto.a579c343.png",j=s.p+"static/media/gold1.dae80333.jpg",f=s(128);var b=s(124);function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],o=!0,i=!1,r=void 0;try{for(var n,a=t[Symbol.iterator]();!(o=(n=a.next()).done)&&(s.push(n.value),!e||s.length!==e);o=!0);}catch(c){i=!0,r=c}finally{try{o||null==a.return||a.return()}finally{if(i)throw r}}return s}}(t,e)||Object(b.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=s(0),m=function(t){var e=h(Object(c.useState)(!1),2),s=e[0],o=e[1],i=h(Object(c.useState)(t.status),2),r=i[0],n=i[1];Object(c.useEffect)((function(){n(t.status)}),[t.status]);return Object(O.jsxs)("div",{children:[!s&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{onDoubleClick:function(){o(!0)},children:t.status||"======"})}),s&&Object(O.jsx)("div",{children:Object(O.jsx)("input",{value:r,onChange:function(t){n(t.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),t.updateStatus(r)}})})]})},v=function(t){var e=t.profile,s=t.updateStatus,o=t.status,i=t.isOwner,r=t.savePhoto;if(!e)return Object(O.jsx)(f.a,{});var n=e.aboutMe,a=e.contacts.vk?"Write here your account vk.com":e.contacts.vk,c=e.contacts.facebook,l=e.photos.large?e.photos.large:p;return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:Object(O.jsx)("img",{className:d.a.contentImg,src:j,alt:""})}),Object(O.jsxs)("div",{className:d.a.descriptionBlock,children:[Object(O.jsxs)("div",{className:d.a.profileBlock,children:[Object(O.jsxs)("div",{children:[e.fullName,e.lookingForAJob]}),Object(O.jsxs)("div",{className:d.a.profileImage,children:[Object(O.jsxs)("div",{className:!i&&d.a.profileImageContainer,children:[Object(O.jsx)("img",{src:l,alt:""}),!i&&Object(O.jsxs)("label",{htmlFor:"file-upload",className:d.a.addFileField,children:["Change PHOTO",Object(O.jsx)("input",{id:"file-upload",title:" hello",type:"file",onChange:function(t){t.target.files.length&&r(t.target.files[0])}})]})]}),Object(O.jsx)(m,{updateStatus:s,status:o})]})]}),Object(O.jsx)("div",{className:d.a.profileInfo,children:Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:["About me: ",n]}),Object(O.jsxs)("li",{children:["VK: ",a]}),Object(O.jsxs)("li",{children:["Facebook: ",c]})]})})]})]})},x=s(94),g=s(289),_=s.n(g),P=s(290),y=s.n(P),k=function(t){return Object(O.jsxs)("div",{className:y.a.item,children:[Object(O.jsx)("img",{src:"https://image.freepik.com/free-vector/rabbit-gaming-mascot-e-sports-logo_74154-31.jpg",alt:""}),t.message,Object(O.jsx)("div",{children:Object(O.jsxs)("span",{children:["Like ",t.likeCount]})})]})},I=s(87),S=s(126),w=s(84),F=s(33),N=function(t){var e=t.posts.map((function(t){return Object(O.jsx)(k,{id:t.id,message:t.message,likeCount:t.likeCount},t.id)}));return Object(O.jsxs)("div",{className:_.a.postBlock,children:[Object(O.jsx)("h3",{children:"My post"}),Object(O.jsx)("div",{children:Object(O.jsx)(C,{onSubmit:function(e){t.addPost(e.newPostText)}})}),Object(O.jsx)("div",{className:_.a.posts,children:e})]})},B=Object(w.a)(10),C=Object(S.a)({form:"profileAddPostForm"})((function(t){return Object(O.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(O.jsx)("div",{children:Object(O.jsx)(I.a,{component:F.b,name:"newPostText",validate:[w.b,B],placeholder:"Enter your post"})}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:_.a.btnStyle,children:"Add post"})})]})})),A=s(18),M=Object(A.b)((function(t){return{posts:t.profilePage.posts}}),{addPost:x.a})(N),T=function(t){return Object(O.jsxs)("div",{children:[Object(O.jsx)(v,Object(o.a)(Object(o.a)({},t),{},{profile:t.profile,status:t.status,updateStatus:t.updateStatus,isOwner:t.isOwner,savePhoto:t.savePhoto})),Object(O.jsx)(M,{})]})},U=s(11),E=s(9),D=function(t){Object(n.a)(s,t);var e=Object(a.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(T,Object(o.a)(Object(o.a)({},this.props),{},{isOwner:!!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))})}}]),s}(l.a.Component);e.default=Object(E.d)(Object(A.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getUserProfile:x.d,getStatus:x.c,updateStatus:x.f,savePhoto:x.e}),U.g)(D)}}]);
//# sourceMappingURL=3.3cecb485.chunk.js.map