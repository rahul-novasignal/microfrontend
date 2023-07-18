/*! For license information please see 397.js.LICENSE.txt */
"use strict";(self.webpackChunklogin=self.webpackChunklogin||[]).push([[397,893],{7397:(e,r,n)=>{n.r(r);var t=n(8416),o=n(1051),a=n.n(o),s=n(3379),l=n.n(s),i=n(7795),c=n.n(i),u=n(569),d=n.n(u),f=n(3565),p=n.n(f),m=n(9216),y=n.n(m),h=n(4589),x=n.n(h),v=n(1383),j={};function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function b(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,a,s,l=[],i=!0,c=!1;try{if(a=(n=n.call(e)).next,0===r){if(Object(n)!==n)return;i=!1}else for(;!(i=(t=a.call(n)).done)&&(l.push(t.value),l.length!==r);i=!0);}catch(e){c=!0,o=e}finally{try{if(!i&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw o}}return l}}(e,r)||function(e,r){if(e){if("string"==typeof e)return g(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}j.styleTagTransform=x(),j.setAttributes=p(),j.insert=d().bind(null,"head"),j.domAPI=c(),j.insertStyleElement=y(),l()(v.Z,j),v.Z&&v.Z.locals&&v.Z.locals;var w=n(7673),_=n(529),A=n.n(_),S=n(5893);const O=function(){var e=b((0,t.useState)(""),2),r=e[0],n=e[1],o=b((0,t.useState)(""),2),a=o[0],s=o[1],l=b((0,t.useState)(0),2),i=l[0],c=l[1];return(0,S.jsx)("div",{children:1===i?(0,S.jsxs)(w.Alert,{variant:"success",className:"mx-auto w-50 pt-4",children:[(0,S.jsx)(w.Alert.Heading,{children:"Hey, nice to see you"}),(0,S.jsx)("p",{children:"Aww yeah, you are successfully loged in"})]}):(0,S.jsxs)("div",{children:[2===i&&(0,S.jsxs)(w.Alert,{variant:"danger",className:"mx-auto w-50 pt-4",children:[(0,S.jsx)(w.Alert.Heading,{children:"Oh Snap! you got an error!"}),(0,S.jsx)("p",{children:"Your login failed, please check your username and password"})]}),(0,S.jsxs)(w.Form,{className:"mx-auto w-50 pt-4",children:[(0,S.jsxs)(w.Form.Group,{controlId:"FormBasicEmail",children:[(0,S.jsx)(w.Form.Label,{children:"Username2"}),(0,S.jsx)(w.Form.Control,{type:"text",placeholder:"enter username",onChange:function(e){n(e.target.value)},value:r})]}),(0,S.jsxs)(w.Form.Group,{controlId:"FormBasicPassword",children:[(0,S.jsx)(w.Form.Label,{children:"Password"}),(0,S.jsx)(w.Form.Control,{type:"password",placeholder:"enter password",onChange:function(e){s(e.target.value)},value:a})]}),(0,S.jsx)(w.Button,{variant:"primary",type:"button",className:"mt-2",onClick:function(e){A().post("http://localhost:3001/login",{username:r,password:a}).then((function(e){c(1),n(""),s("")})).catch((function(e){c(2)}))},children:"submit"})]})]})})};var F=n(4877),k=n.n(F),C=function(){return(0,S.jsxs)("div",{className:"container-fluid p-0",children:[(0,S.jsx)(k(),{}),(0,S.jsx)(O,{})]})};a().render((0,S.jsx)(C,{}),document.getElementById("app"))},1383:(e,r,n)=>{n.d(r,{Z:()=>l});var t=n(8081),o=n.n(t),a=n(3645),s=n.n(a)()(o());s.push([e.id,"body {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.container {\n  font-size: 3rem;\n  margin: auto;\n  max-width: 800px;\n  margin-top: 20px;\n}",""]);const l=s},5251:(e,r,n)=>{var t=n(8416),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,a={},c=null,u=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)s.call(r,t)&&!i.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:l.current}}r.Fragment=a,r.jsx=c,r.jsxs=c},5893:(e,r,n)=>{e.exports=n(5251)}}]);