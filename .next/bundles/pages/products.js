
          window.__NEXT_REGISTER_PAGE('/products', function() {
            var comp = module.exports=webpackJsonp([4],{363:function(e,t,r){e.exports=r(364)},364:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(39),a=n(u),c=r(47),o=n(c),s=r(10),p=n(s),d=r(114),f=n(d);r(180);var l=function(e){var t=e.products;return p.default.createElement("div",null,t.map(function(e){return p.default.createElement("div",{key:e.id},p.default.createElement(f.default,{href:{pathname:"/product/"+e.slug}},e.name))}))};l.getInitialProps=function(){var e=(0,o.default)(a.default.mark(function e(t){var r,n;t.req;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://app.scrap24.com/api/v1/products");case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",{products:n});case 7:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),t.default=l}},[363]);
            return { page: comp.default }
          })
        