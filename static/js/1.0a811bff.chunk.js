webpackJsonp([1,10,19],{190:function(e,n,t){var a=t(212);"string"===typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;t(186)(a,r);a.locals&&(e.exports=a.locals)},197:function(e,n,t){var a,r;!function(){"use strict";function t(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a))e.push(t.apply(null,a));else if("object"===r)for(var c in a)o.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}var o={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?e.exports=t:(a=[],void 0!==(r=function(){return t}.apply(n,a))&&(e.exports=r))}()},199:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(197),c=t.n(o),s=t(200),i=(t.n(s),t(202)),l=t.n(i),m=function(e){var n=e.children,t=e.className,a=e.keyboard,o=void 0===a?null:a;return r.a.createElement("div",{className:c()("Phone","abs-center","shadow",t)},n,o&&r.a.createElement("img",{className:"Phone-keyboard",src:l.a,alt:"Iphone keyboard"}))};n.a=m},200:function(e,n,t){var a=t(201);"string"===typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;t(186)(a,r);a.locals&&(e.exports=a.locals)},201:function(e,n,t){n=e.exports=t(185)(!0),n.push([e.i,".Phone{overflow:hidden;width:35vmin;height:62.125vmin;border-radius:.5em;background-color:#fff}.Phone-keyboard{position:absolute;left:0;right:0;bottom:0}","",{version:3,sources:["/Users/wouterraateland/repositories/DailyUi/src/components/Phone/styles.css"],names:[],mappings:"AAAA,OACE,gBAAiB,AAEjB,aAAc,AACd,kBAAmB,AAEnB,mBAAoB,AAEpB,qBAAuB,CACxB,AAED,gBACE,kBAAmB,AACnB,OAAQ,AACR,QAAS,AAAC,QAAU,CACrB",file:"styles.css",sourcesContent:[".Phone {\n  overflow: hidden;\n\n  width: 35vmin;\n  height: 62.125vmin;\n\n  border-radius: .5em;\n\n  background-color: #fff;\n}\n\n.Phone-keyboard {\n  position: absolute;\n  left: 0;\n  right: 0; bottom: 0;\n}\n"],sourceRoot:""}])},202:function(e,n,t){e.exports=t.p+"static/media/keyboard.69cbb02d.png"},21:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(10),c=t(190),s=(t.n(c),t(229)),i=t(199),l=t(230),m=t(76),u=function(e){var n=e.updatePlot,t=e.description;return r.a.createElement("div",{className:"Project-004"},r.a.createElement(i.a,null,r.a.createElement("div",{className:"Project-004-plot-area"},r.a.createElement(m.default,null)),r.a.createElement("div",{className:"Project-004-input-area"},r.a.createElement("span",{className:"Project-004-input-before"},"y ="),r.a.createElement(l.a,{className:"Project-004-input",type:"input",onChange:n,value:t})),r.a.createElement("div",{className:"Project-004-keyboard row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"operation"},"sin")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"operation"},"cos")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"operation"},"exp")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"operation"},"sqrt")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"number"},"7")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"number"},"8")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"number"},"9")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"operation"},"^")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"number"},"4")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"number"},"5")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"number"},"6")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"operation"},"/")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"number"},"1")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"number"},"2")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"number"},"3")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"operation"},"*")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"x"},"x")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"number"},"0")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"operation"},"+")),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"operation"},"-")))))},p=function(e,n){return{description:e.plot.description}},A=function(e,n){return{updatePlot:function(n){return e(Object(s.a)(n.target.value))}}};n.default=Object(o.b)(p,A)(u)},212:function(e,n,t){n=e.exports=t(185)(!0),n.push([e.i,".Project-004{background-color:#77d189;color:#222547}.Project-004-plot-area{position:relative;padding:50%;background-color:#222547}.Project-004-plot{width:100%;height:100%}.Project-004-input-area{font-family:monospace}.Project-004-input-before{display:inline-block;padding:1em 0 1em 1em}.Project-004-input{width:calc(100% - 3.8em);padding:.5em;margin:.5em;border-radius:.25em;background-color:#f2f2f2}.Project-004-keyboard{margin:0 .3em}.Project-004-keyboard div{padding:.2em!important}.Project-004-keyboard span{display:block;padding:.32em;border-radius:.25em;text-align:center}.Project-004-keyboard .operation{background-color:#f2f2f2}.Project-004-keyboard .number{background-color:#fff}.Project-004-keyboard .x{background-color:#f7410f;color:#fff}","",{version:3,sources:["/Users/wouterraateland/repositories/DailyUi/src/components/Projects/004/styles.css"],names:[],mappings:"AAAA,aACE,yBAA0B,AAC1B,aAAe,CAChB,AAED,uBACE,kBAAmB,AAEnB,YAAa,AAEb,wBAA0B,CAC3B,AAED,kBACE,WAAY,AACZ,WAAa,CACd,AAED,wBACE,qBAAuB,CACxB,AAED,0BACE,qBAAsB,AACtB,qBAAuB,CACxB,AAED,mBACE,yBAA0B,AAC1B,aAAc,AACd,YAAa,AACb,oBAAqB,AAErB,wBAA0B,CAC3B,AAED,sBACE,aAAe,CAChB,AAED,0BACE,sBAAyB,CAC1B,AAED,2BACE,cAAe,AACf,cAAe,AAEf,oBAAqB,AAErB,iBAAmB,CACpB,AAED,iCAAmC,wBAA0B,CAAE,AAC/D,8BAAgC,qBAAuB,CAAE,AACzD,yBAA2B,yBAA0B,AAAC,UAAY,CAAE",file:"styles.css",sourcesContent:[".Project-004 {\n  background-color: #77D189;\n  color: #222547;\n}\n\n.Project-004-plot-area {\n  position: relative;\n\n  padding: 50%;\n\n  background-color: #222547;\n}\n\n.Project-004-plot {\n  width: 100%;\n  height: 100%;\n}\n\n.Project-004-input-area {\n  font-family: monospace;\n}\n\n.Project-004-input-before {\n  display: inline-block;\n  padding: 1em 0 1em 1em;\n}\n\n.Project-004-input {\n  width: calc(100% - 3.8em);\n  padding: .5em;\n  margin: .5em;\n  border-radius: .25em;\n\n  background-color: #f2f2f2;\n}\n\n.Project-004-keyboard {\n  margin: 0 .3em;\n}\n\n.Project-004-keyboard div {\n  padding: .2em !important;\n}\n\n.Project-004-keyboard span {\n  display: block;\n  padding: .32em;\n\n  border-radius: .25em;\n\n  text-align: center;\n}\n\n.Project-004-keyboard .operation { background-color: #f2f2f2; }\n.Project-004-keyboard .number { background-color: #fff; }\n.Project-004-keyboard .x { background-color: #f7410f; color: #fff; }\n"],sourceRoot:""}])},229:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var a=function(e){return{type:"UPDATE_PLOT",description:e}}},230:function(e,n,t){"use strict";function a(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}var r=t(0),o=t.n(r),c=function(e){var n=e.type,t=a(e,["type"]);return o.a.createElement(n,t)};n.a=c},76:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}Object.defineProperty(n,"__esModule",{value:!0});var s=t(0),i=t.n(s),l=t(10),m=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=function(e,n){return function(t){var a=t.x,r=t.y;return{x:(a-e[0])/(e[1]-e[0])*100,y:(n[1]-r)/(n[1]-n[0])*100}}},A=function(e,n){return function(t){return t.map(p(e,n)).filter(function(e){var n=e.x,t=e.y;return!isNaN(n)&&!isNaN(t)&&n!==1/0&&n!==-1/0&&t!==1/0&&t!==-1/0}).reduce(function(e,n){return e+" "+n.x+","+n.y},"")}},d=function(e){return function(n,t){return Math.abs(t-n)<=e}},f=function e(n,t){switch("undefined"===typeof n?"undefined":u(n)){case"string":return t;case"number":return n+.1*(t-n);case"object":return void 0!==n.length?n.map(function(n,a){return e(n,t[a])}):Object.keys(n).reduce(function(a,r){return Object.assign({},a,c({},r,e(n[r],t[r])))},{});default:return t}},b=function(e){function n(e){a(this,n);var t=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={domain:[-1,1],codomain:[-1,1],points:Array(100).fill({x:0,y:0}),updating:!1},t}return o(n,e),m(n,[{key:"componentWillReceiveProps",value:function(e){this.state.updating||(this.setState({updating:!0}),requestAnimationFrame(this.update.bind(this)))}},{key:"update",value:function(){var e=this.props,n=e.domain,t=e.codomain,a=e.points,r=d((n[1]-n[0])/100),o=d((t[1]-t[0])/100);r(n[0],this.state.domain[0])&&r(n[1],this.state.domain[1])&&o(t[0],this.state.codomain[0])&&o(t[1],this.state.codomain[1])?this.setState({domain:n,codomain:t,points:a,updating:!1}):(this.setState({domain:this.move("domain"),codomain:this.move("codomain"),points:this.move("points")}),requestAnimationFrame(this.update.bind(this)))}},{key:"move",value:function(e){return f(this.state[e],this.props[e])}},{key:"render",value:function(){var e=this.state,n=e.domain,t=e.codomain,a=e.points;return i.a.createElement("svg",{className:"Project-004-plot abs-center",viewBox:"0 0 100 100"},i.a.createElement("polyline",{points:A(n,t)(a),stroke:"#f7410f",strokeWidth:"1",strokeLinecap:"round",fill:"none"}))}}]),n}(s.Component),y=function(e,n){return Object.assign({},e.plot)};n.default=Object(l.b)(y)(b)}});
//# sourceMappingURL=1.0a811bff.chunk.js.map