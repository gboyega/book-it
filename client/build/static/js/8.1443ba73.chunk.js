/*! For license information please see 8.1443ba73.chunk.js.LICENSE.txt */
(this["webpackJsonpbook-it"]=this["webpackJsonpbook-it"]||[]).push([[8],{51:function(e,n,a){var t;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var r=typeof t;if("string"===r||"number"===r)e.push(t);else if(Array.isArray(t)&&t.length){var i=o.apply(null,t);i&&e.push(i)}else if("object"===r)for(var c in t)a.call(t,c)&&t[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(n,[]))||(e.exports=t)}()},52:function(e,n,a){"use strict";var t,o=a(0),r=a.n(o),i=a(4),c=a(1),l=a(7),s=a(25),u=a(6),p=a(16),f=a.n(p),d=a(51),m=a.n(d);var v="object"===typeof window&&window.Element||function(){};f.a.oneOfType([f.a.string,f.a.func,function(e,n,a){if(!(e[n]instanceof v))return new Error("Invalid prop `"+n+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")},f.a.shape({current:f.a.any})]);var b=f.a.oneOfType([f.a.func,f.a.string,f.a.shape({$$typeof:f.a.symbol,render:f.a.func}),f.a.arrayOf(f.a.oneOfType([f.a.func,f.a.string,f.a.shape({$$typeof:f.a.symbol,render:f.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;var h={active:f.a.bool,"aria-label":f.a.string,block:f.a.bool,color:f.a.string,disabled:f.a.bool,outline:f.a.bool,tag:b,innerRef:f.a.oneOfType([f.a.object,f.a.func,f.a.string]),onClick:f.a.func,size:f.a.string,children:f.a.node,className:f.a.string,cssModule:f.a.object,close:f.a.bool},y=function(e){function n(n){var a;return(a=e.call(this,n)||this).onClick=a.onClick.bind(Object(s.a)(a)),a}Object(u.a)(n,e);var a=n.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,n=e.active,a=e["aria-label"],o=e.block,i=e.className,s=e.close,u=e.cssModule,p=e.color,f=e.outline,d=e.size,v=e.tag,b=e.innerRef,h=Object(l.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof h.children&&(h.children=r.a.createElement("span",{"aria-hidden":!0},"\xd7"));var y="btn"+(f?"-outline":"")+"-"+p,g=function(e,n){return void 0===e&&(e=""),void 0===n&&(n=t),n?e.split(" ").map((function(e){return n[e]||e})).join(" "):e}(m()(i,{close:s},s||"btn",s||y,!!d&&"btn-"+d,!!o&&"btn-block",{active:n,disabled:this.props.disabled}),u);h.href&&"button"===v&&(v="a");var E=s?"Close":null;return r.a.createElement(v,Object(c.a)({type:"button"===v&&h.onClick?"button":void 0},h,{className:g,ref:b,onClick:this.onClick,"aria-label":a||E}))},n}(r.a.Component);y.propTypes=h,y.defaultProps={color:"secondary",tag:"button"};var g=y;n.a=function(e){return onclick=function(e){e.preventDefault(),sessionStorage.setItem("vId",JSON.stringify(e.target.id))},r.a.createElement("div",{className:"col-md-4 rooms"},r.a.createElement("div",{className:"container1"},r.a.createElement("div",{className:"front",id:"front",style:{backgroundImage:"url(".concat(e.venue.image,")"),backgroundSize:"cover"}},r.a.createElement("div",{className:"inner"},r.a.createElement("h5",null,e.venue.name),r.a.createElement("span",null,e.venue.location))),r.a.createElement("div",{className:"back"},r.a.createElement("div",{className:"inner"},r.a.createElement("h3",null,"Features"),r.a.createElement("ul",null,e.venue.features.map((function(e,n){return r.a.createElement("li",{key:n},e)}))),r.a.createElement(i.b,{to:"/book-venue"},r.a.createElement(g,{onClick:onclick,id:e.venue.id},"Book Now!"))))))}},70:function(e,n,a){"use strict";a.r(n);var t=a(26),o=a(0),r=a.n(o),i=(a(23),a(52)),c=a(8);n.default=function(e){var n=Object(o.useContext)(c.a).user,a=Object(o.useState)(""),l=Object(t.a)(a,2),s=l[0],u=l[1];return Object(o.useEffect)((function(){fetch("/api/venue/".concat(n.company)).then((function(e){if(200===e.status)return e.json()})).then((function(e){e&&u(e.body)})).catch((function(e){return console.log(e)}))}),[]),s.length<1?r.a.createElement("div",{style:{marginBottom:"150px",marginTop:"100px"}},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"cols align-middle confr",style:{minHeight:"50vh"}},r.a.createElement("h3",{style:{height:"50%",margin:"auto"}},"No spaces available for ",n.company)))):r.a.createElement("div",{style:{marginBottom:"150px",marginTop:"100px"}},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"cols confr"},s.map((function(e,n){return r.a.createElement(i.a,{venue:e,key:n})})))))}}}]);
//# sourceMappingURL=8.1443ba73.chunk.js.map