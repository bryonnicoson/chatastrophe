webpackJsonp([1],{229:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_=n(6),l=a(_),u=n(232),c=a(u),h=function(e){function t(){var e,n,a,i;r(this,t);for(var s=arguments.length,_=Array(s),l=0;l<s;l++)_[l]=arguments[l];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(_))),a.state={email:"",password:"",error:""},a.handleEmailChange=function(){var e;return(e=a).__handleEmailChange__REACT_HOT_LOADER__.apply(e,arguments)},a.handlePasswordChange=function(){var e;return(e=a).__handlePasswordChange__REACT_HOT_LOADER__.apply(e,arguments)},a.handleSubmit=function(){var e;return(e=a).__handleSubmit__REACT_HOT_LOADER__.apply(e,arguments)},i=n,o(a,i)}return i(t,e),s(t,[{key:"__handleSubmit__REACT_HOT_LOADER__",value:function(){return this.__handleSubmit__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__handlePasswordChange__REACT_HOT_LOADER__",value:function(){return this.__handlePasswordChange__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__handleEmailChange__REACT_HOT_LOADER__",value:function(){return this.__handleEmailChange__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__handleEmailChange__REACT_HOT_LOADER__",value:function(){this.setState({email:event.target.value})}},{key:"__handlePasswordChange__REACT_HOT_LOADER__",value:function(){this.setState({password:event.target.value})}},{key:"__handleSubmit__REACT_HOT_LOADER__",value:function(){event.preventDefault(),this.setState({error:""}),this.state.email&&this.state.password?this.login():this.setState({error:"Please fill in both fields"})}},{key:"login",value:function(){var e=this;firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(function(t){e.onLogin()}).catch(function(t){"auth/user-not-found"===t.code?e.signup():e.setState({error:"Error logging in."})})}},{key:"signup",value:function(){var e=this;firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(function(t){e.onLogin()}).catch(function(t){console.log(t),e.setState({error:"Error signing up."})})}},{key:"onLogin",value:function(){this.props.history.push("/")}},{key:"render",value:function(){return l.default.createElement("div",{id:"LoginContainer",className:"inner-container"},l.default.createElement(c.default,null),l.default.createElement("form",{onSubmit:this.handleSubmit},l.default.createElement("p",null,"Sign in or sign up by entering your email and password."),l.default.createElement("input",{type:"text",onChange:this.handleEmailChange,value:this.state.email,placeholder:"Your email"}),l.default.createElement("input",{type:"password",onChange:this.handlePasswordChange,value:this.state.password,placeholder:"Your password"}),l.default.createElement("p",{className:"error"},this.state.error),l.default.createElement("button",{className:"red light",type:"submit"},"Login")))}}]),t}(_.Component),d=h;t.default=d;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(h,"LoginContainer","/Users/bryon/PWA/chatastrophe/src/components/LoginContainer.js"),__REACT_HOT_LOADER__.register(d,"default","/Users/bryon/PWA/chatastrophe/src/components/LoginContainer.js"))}()},232:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),o=a(r),i=function(e){return o.default.createElement("div",{id:"Header"},o.default.createElement("img",{src:"/assets/icon.png",alt:"logo"}),o.default.createElement("h1",null,"Chatastrophe"),e.children)},s=i;t.default=s;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"Header","/Users/bryon/PWA/chatastrophe/src/components/Header.js"),__REACT_HOT_LOADER__.register(s,"default","/Users/bryon/PWA/chatastrophe/src/components/Header.js"))}()}});