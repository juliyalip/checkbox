(this.webpackJsonpcheckbox=this.webpackJsonpcheckbox||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),h=n(8),s=n.n(h),r=(n(13),n(2)),l=n(3),i=n(5),j=n(4),b=n(6),o=n(0),d=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),h=0;h<a;h++)c[h]=arguments[h];return(e=t.call.apply(t,[this].concat(c))).state={one:!1,two:!1,three:!1},e.handleChange=function(t){var n=t.target.name;e.setState((function(e){return Object(b.a)({},n,!e[n])}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{children:[Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"checkbox",name:"one",onChange:this.handleChange,checked:this.state.one}),"100 ml"]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"checkbox",name:"two",onChange:this.handleChange,checked:this.state.two}),"200 ml"]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"checkbox",name:"three",onChange:this.handleChange,checked:this.state.three}),"300 ml"]})]})}}]),n}(a.Component),u=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),h=0;h<a;h++)c[h]=arguments[h];return(e=t.call.apply(t,[this].concat(c))).state={selected:""},e.handleChange=function(t){e.setState({selected:t.target.value})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{children:[Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"checkbox",name:"selected",value:"100 ml",onChange:this.handleChange,checked:"100 ml"===this.state.selected}),"100 ml"]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"checkbox",name:"selected",value:"200 ml",checked:"200 ml"===this.state.selected,onChange:this.handleChange}),"200 ml"]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"checkbox",name:"selected",value:"300 ml",checked:"300 ml"===this.state.selected,onChange:this.handleChange}),"300 ml"]})]})}}]),n}(a.Component),O=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),h=0;h<a;h++)c[h]=arguments[h];return(e=t.call.apply(t,[this].concat(c))).state={variant1:"",variant2:""},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(b.a)({},a,c))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"radio",name:"variant1",value:"react",checked:"react"===this.state.variant1,onChange:this.handleChange})," react"]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"radio",name:"variant1",value:"html",checked:"html"===this.state.variant1,onChange:this.handleChange})," html"]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"radio",name:"variant1",value:"css",checked:"css"===this.state.variant1,onChange:this.handleChange})," css"]}),Object(o.jsx)("h3",{children:"\u0412\u041e\u043f\u0440\u043e\u0441 2"}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"radio",name:"variant2",value:"\u0443\u0447\u0435\u0431\u0430",checked:"\u0443\u0447\u0435\u0431\u0430"===this.state.variant2,onChange:this.handleChange}),"\u0443\u0447\u0435\u0431\u0430"]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"radio",name:"variant2",value:"\u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430",checked:"\u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"===this.state.variant2,onChange:this.handleChange})," \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"radio",name:"variant2",value:"\u0440\u0430\u0431\u043e\u0442\u0430",checked:"\u0440\u0430\u0431\u043e\u0442\u0430"===this.state.variant2,onChange:this.handleChange})," \u0440\u0430\u0431\u043e\u0442\u0430"]})]})}}]),n}(a.Component),x=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),h=0;h<a;h++)c[h]=arguments[h];return(e=t.call.apply(t,[this].concat(c))).state={react:"",html:"",css:""},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432"}),Object(o.jsx)(d,{}),Object(o.jsx)(d,{}),Object(o.jsx)("h2",{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u0431\u043e\u0440\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u043e\u0433\u043e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430"}),Object(o.jsx)("br",{}),Object(o.jsx)(u,{}),Object(o.jsx)("hr",{}),Object(o.jsx)(u,{}),Object(o.jsx)("h2",{children:"\u0420\u0430\u0434\u0438\u043e \u043a\u043d\u043e\u043f\u043a\u0430 \u043e\u0434\u043d\u0430 \u0438\u0437: "}),Object(o.jsx)(O,{}),Object(o.jsx)("hr",{})]})}}]),n}(a.Component);s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2cb9ea84.chunk.js.map