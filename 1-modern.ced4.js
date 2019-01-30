/*!
 * @project        Number Sequence
 * @name           1-modern.ced4.js
 * @author         MTS
 * @build          Wed, Jan 30, 2019 11:45 PM ET
 * @release        69a17755be80c7b76e598d256754881cdffaa4ff [master]
 * @copyright      Copyright (c) 2019 MTS
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{157:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return s});var r=n(66),a=n.n(r);const o=a.a`
  query GetPages {
    pages(pageSize: 10) {
      pages {
        id
        name
      }
    }
  }
`,s=e=>a.a`
    query GetSequences {
      sequences(sequenceCount: ${e}) {
        sequences {
          numbers
        }
      }
    }
  `},158:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(2),s=n.n(o),c=n(4),u=n.n(c),i=n(67),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),s=0;s<a;s++)o[s]=arguments[s];return n=r=p(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!f(e)){e.preventDefault();var t=r.context.router.history,n=r.props,a=n.replace,o=n.to;a?t.replace(o):t.push(o)}},p(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,s="string"==typeof t?Object(i.b)(t,null,null,o.location):t,c=o.createHref(s);return a.a.createElement("a",l({},r,{onClick:this.handleClick,href:c,ref:n}))},t}(a.a.Component);d.propTypes={onClick:s.a.func,target:s.a.string,replace:s.a.bool,to:s.a.oneOfType([s.a.string,s.a.object]).isRequired,innerRef:s.a.oneOfType([s.a.string,s.a.func])},d.defaultProps={replace:!1},d.contextTypes={router:s.a.shape({history:s.a.shape({push:s.a.func.isRequired,replace:s.a.func.isRequired,createHref:s.a.func.isRequired}).isRequired}).isRequired},t.a=d},160:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},161:function(e,t,n){var r,a,o=n(162),s=n(163),c=0,u=0;e.exports=function(e,t,n){var i=t&&n||0,l=t||[],p=(e=e||{}).node||r,f=void 0!==e.clockseq?e.clockseq:a;if(null==p||null==f){var d=o();null==p&&(p=r=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==f&&(f=a=16383&(d[6]<<8|d[7]))}var y=void 0!==e.msecs?e.msecs:(new Date).getTime(),m=void 0!==e.nsecs?e.nsecs:u+1,h=y-c+(m-u)/1e4;if(h<0&&void 0===e.clockseq&&(f=f+1&16383),(h<0||y>c)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=y,u=m,a=f;var v=(1e4*(268435455&(y+=122192928e5))+m)%4294967296;l[i++]=v>>>24&255,l[i++]=v>>>16&255,l[i++]=v>>>8&255,l[i++]=255&v;var b=y/4294967296*1e4&268435455;l[i++]=b>>>8&255,l[i++]=255&b,l[i++]=b>>>24&15|16,l[i++]=b>>>16&255,l[i++]=f>>>8|128,l[i++]=255&f;for(var g=0;g<6;++g)l[i+g]=p[g];return t||s(l)}},162:function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var a=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}},163:function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,a=n;return[a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]]].join("")}},165:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(65),s=n(47),c=n(157),u=n(160),i=n.n(u),l=n(2),p=n(158),f=n(161),d=n.n(f);const y=e=>{let t=e.children;return a.a.createElement("div",{className:"px-3 border text-green border-blue"},t)};y.propTypes={children:l.node.isRequired};var m=y;const h=e=>{let t=e.sequences;return a.a.createElement("div",null,t.map(e=>a.a.createElement("div",{className:"d-flex flex-justify-center",key:d()()},e.numbers.map(e=>a.a.createElement(m,{key:d()()},e)))))};h.propTypes={sequences:Object(l.arrayOf)(Object(l.shape)({numbers:Object(l.arrayOf)(l.number)})).isRequired};var v=h;const b=e=>{let t=e.onClick,n=e.children;return a.a.createElement("div",{align:"center",className:"p-4"},a.a.createElement("button",{onClick:t},n))};b.propTypes={onClick:l.func.isRequired,children:l.node.isRequired};var g=b;class q extends a.a.Component{constructor(e){super(e),i()(this,"handleButtonOnClick",()=>{const e=this.state.sequenceCount;this.setState({sequenceCount:e+10})}),this.state={sequenceCount:5,actionMessage:"More Sequences"}}render(){const e=this.props,t=e.page,n=e.startPageRoute,r=this.state,s=r.sequenceCount,u=r.actionMessage;return a.a.createElement("div",null,a.a.createElement("h1",{align:"center",className:"p-4 text-red"},t.name),a.a.createElement("div",null,a.a.createElement("div",{align:"center",className:"p-4"},a.a.createElement(p.a,{to:n},"Back to Start Page")),s<15?a.a.createElement(g,{onClick:this.handleButtonOnClick},u):null,a.a.createElement(o.Query,{query:Object(c.a)(s)},e=>{let t=e.data;return t.sequences&&t.sequences.sequences?a.a.createElement(v,{sequences:t.sequences.sequences}):null})))}}q.propTypes={page:l.object.isRequired,startPageRoute:l.string.isRequired};var C=q;t.default=(()=>a.a.createElement(o.Query,{query:c.b},e=>{let t=e.data;return t.pages&&t.pages.pages?a.a.createElement(C,{page:t.pages.pages.find(e=>"demo"===e.id),startPageRoute:s.b}):null}))}}]);
//# sourceMappingURL=1-modern.ced4.js.map