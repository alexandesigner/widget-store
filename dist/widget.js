!function(r){var i={};function a(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=r,a.c=i,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(r,i,function(e){return t[e]}.bind(null,i));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=9)}([function(e,t,r){"use strict";e.exports=function(r){var a=[];return a.toString=function(){return this.map(function(e){var t=function(e,t){var r=e[1]||"",i=e[3];if(!i)return r;if(t&&"function"==typeof btoa){var a=function(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}(i),o=i.sources.map(function(e){return"/*# sourceURL=".concat(i.sourceRoot).concat(e," */")});return[r].concat(o).concat([a]).join("\n")}return[r].join("\n")}(e,r);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t}).join("")},a.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r=0;r<e.length;r++){var i=[].concat(e[r]);t&&(i[2]?i[2]="".concat(t," and ").concat(i[2]):i[2]=t),a.push(i)}},a}},function(e,t,a){"use strict";var r,i,d={},o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},n=(i={},function(e){if(void 0===i[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}i[e]=t}return i[e]});function f(e,t){for(var r=[],i={},a=0;a<e.length;a++){var o=e[a],n=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[n]?i[n].parts.push(s):r.push(i[n]={id:n,parts:[s]})}return r}function p(e,t){for(var r=0;r<e.length;r++){var i=e[r],a=d[i.id],o=0;if(a){for(a.refs++;o<a.parts.length;o++)a.parts[o](i.parts[o]);for(;o<i.parts.length;o++)a.parts.push(g(i.parts[o],t))}else{for(var n=[];o<i.parts.length;o++)n.push(g(i.parts[o],t));d[i.id]={id:i.id,refs:1,parts:n}}}}function s(t){var r=document.createElement("style");if(void 0===t.attributes.nonce){var e=a.nc;e&&(t.attributes.nonce=e)}if(Object.keys(t.attributes).forEach(function(e){r.setAttribute(e,t.attributes[e])}),"function"==typeof t.insert)t.insert(r);else{var i=n(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var c,l=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function m(e,t,r,i){var a=r?"":i.css;if(e.styleSheet)e.styleSheet.cssText=l(t,a);else{var o=document.createTextNode(a),n=e.childNodes;n[t]&&e.removeChild(n[t]),n.length?e.insertBefore(o,n[t]):e.appendChild(o)}}var h=null,u=0;function g(t,e){var r,i,a;if(e.singleton){var o=u++;r=h=h||s(e),i=m.bind(null,r,o,!1),a=m.bind(null,r,o,!0)}else r=s(e),i=function(e,t,r){var i=r.css,a=r.media,o=r.sourceMap;if(a&&e.setAttribute("media",a),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}.bind(null,r,e),a=function(){!function(e){if(null===e.parentNode)return;e.parentNode.removeChild(e)}(r)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else a()}}e.exports=function(e,c){(c=c||{}).attributes="object"==typeof c.attributes?c.attributes:{},c.singleton||"boolean"==typeof c.singleton||(c.singleton=o());var l=f(e,c);return p(l,c),function(e){for(var t=[],r=0;r<l.length;r++){var i=l[r],a=d[i.id];a&&(a.refs--,t.push(a))}e&&p(f(e,c),c);for(var o=0;o<t.length;o++){var n=t[o];if(0===n.refs){for(var s=0;s<n.parts.length;s++)n.parts[s]();delete d[n.id]}}}}},function(e,t,r){e.exports='<div class="carhoo-store-list">\n  <div class="carhoo-store-brand">\n    <a href="https://carhoo.com.br/comprar" title="Carhoo store">\n      <img\n        src="'+r(3)+'"\n        width="220"\n        alt="Carhoo store"\n        target="_blank"\n      />\n    </a>\n    <a\n      href="https://carhoo.com.br/comprar/"\n      title="Conheça nosso site"\n      class="lnk"\n      >Conheça nosso site</a\n    >\n  </div>\n  <div class="carhoo-store-list_tracker">\n    <div class="carhoo-store-loading">\n      <img src="'+r(4)+'" alt="Carregando" width="72" />\n      Aguarde estamos carregando algumas ofertas pra você...\n    </div>\n  </div>\n</div>\n'},function(e,t){e.exports="data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 22.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 478 187' style='enable-background:new 0 0 478 187;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D %3C/style%3E %3Cg%3E %3Cg%3E %3Cpath class='st0' d='M47.5,35.2c10.1,0,18.1,2.2,22.8,4.1l-5.5,19.3c-4.9-1.7-10.1-2.8-15.4-2.8c-6.6,0-17.8,1.6-17.8,19.6 s11.2,19.5,17.8,19.5c5.3,0,10.5-1.1,15.4-2.8l5.5,19.5c-4.7,1.9-12.7,4.1-22.8,4.1c-27,0-42.1-15.2-42.1-40.2 S20.4,35.2,47.5,35.2z'/%3E %3Cpath class='st0' d='M152.6,113.9c-3.8,0.8-7.7,1.3-12.4,1.3c-9,0-13.8-3.3-16.7-9.1h-0.3c-5.3,4.6-14.6,9.6-25.3,9.6 c-17.1,0-24.5-11.2-24.5-23.6c0-16.5,10.1-25.9,38.5-25.9h8.8v-2.4c0-5.8-4.2-8-11.5-8c-8.2,0-16.5,1.7-25.1,5l-5.7-19 c8.8-3.6,20.9-6.6,32.8-6.6c21.4,0,34.6,9.7,34.6,32.1v27.2c0,1.9,0.3,2.4,2.2,2.4h4.6L152.6,113.9L152.6,113.9z M112.8,81.3 c-10.4,0-14.3,3-14.3,7.7c0,4.9,2.8,7.1,8.2,7.1c4.9,0,10.2-1.9,14-4.4V81.3H112.8z'/%3E %3Cpath class='st0' d='M181.6,37.5l3.8,8.6h0.3c2.8-6,7.4-11,18.2-11c2.5,0,5.5,0.5,7.2,0.8l-1.6,23.4c-2.4-0.3-5.2-0.5-7.5-0.5 c-8,0-13.7,2.4-15.7,4.6v49.8h-25.8V37.5H181.6z'/%3E %3Cpath class='st0' d='M292.8,66.4v46.8H267V68.1c0-7.9-3.3-12.3-11.2-12.3c-5.8,0-10.5,2.8-13.4,5.8v51.7h-25.8V3.2h25.8v39.9h0.3 c3.9-3.5,10.8-8,21.9-8C282.9,35.2,292.8,46.8,292.8,66.4z'/%3E %3Cpath class='st0' d='M342.6,115.6c-28,0-41.8-18.2-41.8-40.2s13.8-40.2,41.8-40.2c28.4,0,41.5,18.2,41.5,40.2 S371.1,115.6,342.6,115.6z M342.6,95.1c9,0,15.2-5.5,15.2-19.6s-6.2-19.7-15.2-19.7c-8.6,0-15.6,5.5-15.6,19.6 S334,95.1,342.6,95.1z'/%3E %3Cpath class='st0' d='M431,115.6c-28,0-41.8-18.2-41.8-40.2S403,35.2,431,35.2c28.4,0,41.5,18.2,41.5,40.2S459.4,115.6,431,115.6z M431,95.1c9,0,15.2-5.5,15.2-19.6s-6.3-19.7-15.2-19.7c-8.6,0-15.6,5.5-15.6,19.6S422.3,95.1,431,95.1z'/%3E %3C/g%3E %3Cg%3E %3Cpath class='st0' d='M130.4,171.6c4.2,2.6,8.9,4.2,14.6,4.2c6.9,0,10.2-2.5,10.2-7c0-3.6-2.2-5.3-7.4-6.9l-5.9-1.6 c-8.5-2.5-13.7-6.2-13.7-14c0-9,6.9-15.1,18.4-15.1c6.9,0,11.9,1.3,16.9,3.5l-2.9,7.5c-4.4-2.1-9.1-3.1-13.5-3.1 c-6.7,0-9.6,2.5-9.6,6.9c0,3.3,1.6,4.9,7.3,6.5l5.8,1.5c8.5,2.2,13.9,6.6,13.9,14.7c0,9.1-7,15.1-18.6,15.1 c-8.5,0-13.6-1.8-18.7-4.7L130.4,171.6z'/%3E %3Cpath class='st0' d='M189.6,121.3v11.5h13.2v7.6h-13.2v29.4c0,4.1,2.1,5.8,5.4,5.8c2.8,0,6.2-0.8,7.7-1.2v7.9 c-1.9,0.5-5.6,1.4-9.7,1.4c-8.2,0-12.6-4.3-12.6-12.2v-31.2h-8.8v-5.5l8.8-2.1v-11.5H189.6z'/%3E %3Cpath class='st0' d='M235.5,183.7c-17.3,0-24.2-11.9-24.2-26.2s6.9-26.2,24.2-26.2c17.5,0,24.6,11.9,24.6,26.2 S253,183.7,235.5,183.7z M235.5,175.6c11.1,0,15.2-7.9,15.2-18.1s-4.1-18.1-15.2-18.1c-11,0-14.8,7.9-14.8,18.1 S224.5,175.6,235.5,175.6z'/%3E %3Cpath class='st0' d='M279.4,132.8l1.1,5.3h0.2c3.3-4.1,8-6.9,13.7-6.9c1.9,0,4,0.3,5.3,0.7l-1.3,8.3c-1.5-0.3-3.5-0.5-5-0.5 c-6.5,0-9,3-11.4,7.2v35.3h-9.2v-49.4H279.4z'/%3E %3Cpath class='st0' d='M314.9,160.5c0,9,6.3,15.4,15.7,15.4c6.9,0,11.2-2.1,14.8-4.4l3.6,7c-4.4,2.9-10.6,5.3-19.2,5.3 c-16.9,0-24.2-12.2-24.2-26.5c0-13.4,7.7-26,23.3-26s22,10.3,22,21.3c0,2.6-0.3,6.2-0.6,7.9H314.9z M341.9,153.1 c0.1-0.7,0.1-1.4,0.1-2.2c0-6.9-4.6-11.8-13.1-11.8c-8.3,0-13.4,5.7-13.9,13.9H341.9z'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E"},function(e,t){e.exports="data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin: auto; background: none; display: block; shape-rendering: auto;' width='200px' height='200px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3E %3Cg transform='rotate(0 50 50)'%3E %3Crect x='48.5' y='26.5' rx='1.5' ry='2.16' width='3' height='9' fill='%23999999'%3E %3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1.2987012987012987s' begin='-1.2059369202226344s' repeatCount='indefinite'%3E%3C/animate%3E %3C/rect%3E %3C/g%3E%3Cg transform='rotate(25.714285714285715 50 50)'%3E %3Crect x='48.5' y='26.5' rx='1.5' ry='2.16' width='3' height='9' fill='%23999999'%3E %3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1.2987012987012987s' begin='-1.1131725417439702s' repeatCount='indefinite'%3E%3C/animate%3E %3C/rect%3E %3C/g%3E%3Cg transform='rotate(51.42857142857143 50 50)'%3E %3Crect x='48.5' y='26.5' rx='1.5' ry='2.16' width='3' height='9' fill='%23999999'%3E %3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1.2987012987012987s' begin='-1.020408163265306s' repeatCount='indefinite'%3E%3C/animate%3E %3C/rect%3E %3C/g%3E%3Cg transform='rotate(77.14285714285714 50 50)'%3E %3Crect x='48.5' y='26.5' rx='1.5' ry='2.16' width='3' height='9' fill='%23999999'%3E %3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1.2987012987012987s' begin='-0.9276437847866418s' repeatCount='indefinite'%3E%3C/animate%3E %3C/rect%3E %3C/g%3E%3Cg transform='rotate(102.85714285714286 50 50)'%3E %3Crect x='48.5' y='26.5' rx='1.5' ry='2.16' width='3' height='9' fill='%23999999'%3E %3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1.2987012987012987s' begin='-0.8348794063079776s' repeatCount='indefinite'%3E%3C/animate%3E %3C/rect%3E %3C/g%3E%3Cg transform='rotate(128.57142857142858 50 50)'%3E %3Crect x='48.5' y='26.5' rx='1.5' ry='2.16' width='3' height='9' fill='%23999999'%3E %3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1.2987012987012987s' begin='-0.7421150278293135s' repeatCount='indefinite'%3E%3C/animate%3E %3C/rect%3E %3C/g%3E%3Cg transform='rotate(154.28571428571428 50 50)'%3E %3Crect x='48.5' y='26.5' rx='1.5' ry='2.16' width='3' height='9' fill='%23999999'%3E %3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1.2987012987012987s' begin='-0.6493506493506492s' repeatCount='indefinite'%3E%3C/animate%3E %3C/rect%3E %3C/g%3E%3Cg transform='rotate(180 50 50)'%3E %3Crect x='48.5' y='26.5' rx='1.5' ry='2.16' width='3' height='9' fill='%23999999'%3E %3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1.2987012987012987s' begin='-0.5565862708719851s' repeatCount='indefinite'%3E%3C/animate%3E %3C/rect%3E %3C/g%3E%3Cg transform='rotate(205.71428571428572 50 50)'%3E %3Crect x='48.5' y='26.5' rx='1.5' ry='2.16' width='3' height='9' fill='%23999999'%3E %3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1.2987012987012987s' begin='-0.4638218923933209s' repeatCount='indefinite'%3E%3C/animate%3E %3C/rect%3E %3C/g%3E%3Cg transform='rotate(231.42857142857142 50 50)'%3E %3Crect x='48.5' y='26.5' rx='1.5' ry='2.16' width='3' height='9' fill='%23999999'%3E %3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1.2987012987012987s' begin='-0.37105751391465674s' repeatCount='indefinite'%3E%3C/animate%3E %3C/rect%3E %3C/g%3E%3Cg transform='rotate(257.14285714285717 50 50)'%3E %3Crect x='48.5' y='26.5' rx='1.5' ry='2.16' width='3' height='9' fill='%23999999'%3E %3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1.2987012987012987s' begin='-0.27829313543599254s' repeatCount='indefinite'%3E%3C/animate%3E %3C/rect%3E %3C/g%3E%3Cg transform='rotate(282.85714285714283 50 50)'%3E %3Crect x='48.5' y='26.5' rx='1.5' ry='2.16' width='3' height='9' fill='%23999999'%3E %3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1.2987012987012987s' begin='-0.18552875695732837s' repeatCount='indefinite'%3E%3C/animate%3E %3C/rect%3E %3C/g%3E%3Cg transform='rotate(308.57142857142856 50 50)'%3E %3Crect x='48.5' y='26.5' rx='1.5' ry='2.16' width='3' height='9' fill='%23999999'%3E %3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1.2987012987012987s' begin='-0.09276437847866419s' repeatCount='indefinite'%3E%3C/animate%3E %3C/rect%3E %3C/g%3E%3Cg transform='rotate(334.2857142857143 50 50)'%3E %3Crect x='48.5' y='26.5' rx='1.5' ry='2.16' width='3' height='9' fill='%23999999'%3E %3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1.2987012987012987s' begin='0s' repeatCount='indefinite'%3E%3C/animate%3E %3C/rect%3E %3C/g%3E %3C!-- %5Bldio%5D generated by https://loading.io/ --%3E%3C/svg%3E"},function(e,t,r){var i=r(6);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(1)(i,a);i.locals&&(e.exports=i.locals)},function(e,t,r){(t=r(0)(!1)).push([e.i,':root{--max-width:1240px;--font-family:Arial,Helvetica,sans-serif;--primary-color:#f60;--primary-light-color:#ff9b20;--border-color:#e6e6e6;--text-light-color:#999;--text-dark-color:#212121;--bg-light-color:#f2f2f2;--white-color:#fff;--full-percent:100%;--base-radius:5px;--side-margin:0 10px;--base-transition-linear:all 0.2s linear}.carhoo-store-loading{background:#f2f2f2;background:var(--bg-light-color);width:100%;width:var(--full-percent);height:100%;height:var(--full-percent);-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:15px;border-radius:5px;border-radius:var(--base-radius);color:#999;color:var(--text-light-color)}.carhoo-store-list,.carhoo-store-loading{display:-webkit-box;display:-ms-flexbox;display:flex}.carhoo-store-list{font-family:Arial,Helvetica,sans-serif;font-family:var(--font-family);position:relative;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1240px;max-width:var(--max-width);margin:20px auto 15px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden}.carhoo-store-list_item{max-width:216px;height:278px;margin:0 10px;margin:var(--side-margin);border:1px solid #e6e6e6;border:1px solid var(--border-color);border-radius:5px;border-radius:var(--base-radius)}.carhoo-store-list_item:hover .item-image a:before{opacity:1}.carhoo-store-list_item:hover .title a{opacity:.5}.carhoo-store-list_item a{text-decoration:none}.carhoo-store-list_item .title{padding:0 10px;padding:var(--side-margin);margin:15px 0}.carhoo-store-list_item .title a{font-size:18px;color:#212121;color:var(--text-dark-color);-webkit-line-clamp:2;font-weight:600}.carhoo-store-list_item .price,.carhoo-store-list_item .title a{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;-webkit-transition:all .2s linear;transition:all .2s linear;-webkit-transition:var(--base-transition-linear);transition:var(--base-transition-linear)}.carhoo-store-list_item .price{color:#f60;color:var(--primary-color);font-size:20px;font-weight:700;margin:0;-webkit-line-clamp:1}.carhoo-store-list_item .price:hover{color:#ff9b20;color:var(--primary-light-color)}.carhoo-store-list_item .item-image{width:100%;min-height:130px;background-color:#f2f2f2;border-radius:2px 2px 0 0;background-size:cover;background-position:50%;margin:0;position:relative;cursor:pointer}.carhoo-store-list_item .item-image a{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;width:var(--full-percent);height:100%;height:var(--full-percent)}.carhoo-store-list_item .item-image a:before{position:absolute;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.35);content:"";width:100%;width:var(--full-percent);height:100%;height:var(--full-percent);opacity:0;-webkit-transition:all .2s linear;transition:all .2s linear;-webkit-transition:var(--base-transition-linear);transition:var(--base-transition-linear)}.carhoo-store-list_item .item-image img{width:100%;width:var(--full-percent)}.carhoo-store-list_item .item-info{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.carhoo-store-list_item .item-info_bottom,.carhoo-store-list_item .item-info_top{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 10px;padding:var(--side-margin);font-size:14px;color:#999;color:var(--text-light-color)}.carhoo-store-list_item .item-info_top{margin-bottom:20px}.carhoo-store-list_tracker{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;-ms-flex-align:center;-webkit-box-flex:1;-ms-flex:1;flex:1;max-height:280px}.carhoo-store-brand,.carhoo-store-list_tracker{-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.carhoo-store-brand{background:#f60;background:var(--primary-color);color:#fff;color:var(--white-color);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:280px;width:280px;border-radius:5px;border-radius:var(--base-radius);-ms-flex-align:center;-ms-flex-pack:center;position:relative;-webkit-transition:all .2s linear;transition:all .2s linear;-webkit-transition:var(--base-transition-linear);transition:var(--base-transition-linear)}.carhoo-store-brand:hover{background:#ff9b20;background:var(--primary-light-color)}.carhoo-store-brand a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.carhoo-store-brand img{max-width:220px;margin-top:-45px}.carhoo-store-brand .lnk{position:absolute;left:0;bottom:0;width:100%;width:var(--full-percent);text-align:center;padding:15px 0;text-transform:uppercase;color:#fff;color:var(--white-color);text-decoration:none;font-weight:600;font-size:14px}.carhoo-store-brand .lnk:hover{opacity:.65}.carhoo-store-error{background:#f2f2f2;background:var(--bg-light-color);width:100%;width:var(--full-percent);height:100%;height:var(--full-percent);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:15px;border-radius:5px;border-radius:var(--base-radius);color:#999;color:var(--text-light-color)}',""]),e.exports=t},function(e,t,r){var i=r(8);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(1)(i,a);i.locals&&(e.exports=i.locals)},function(e,t,r){(t=r(0)(!1)).push([e.i,"@media (max-width:40em){.carhoo-store-loading{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;padding:20px 0;margin:0}.carhoo-store-list,.carhoo-store-loading{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.carhoo-store-list{width:var(--full-percent)}.carhoo-store-list_item{margin-bottom:20px;padding-bottom:15px;height:100%;max-width:44%}.carhoo-store-list_item .item-image{max-height:100%}.carhoo-store-list_item .item-image img{height:auto}.carhoo-store-list_tracker{-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:var(--full-percent);max-height:var(--full-percent)}.carhoo-store-brand{width:var(--full-percent);height:162px;margin-bottom:20px;border-radius:0}}@media (max-width:30em){.carhoo-store-loading{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;padding:20px 0;margin:0}.carhoo-store-list{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.carhoo-store-list_item{max-width:var(--full-percent);width:100%}.carhoo-store-list_item .item-image{max-height:100%;min-height:235px}.carhoo-store-list_tracker{-ms-flex-wrap:unset;flex-wrap:unset;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:0 10px}}",""]),e.exports=t},function(e,t,a){"use strict";a.r(t);var o,r=a(2),n=a.n(r),s=(a(5),[]),c="https://api.carhoo.com.br/";var i=["init","render"];function l(e,t){if(!e)throw Error("API method required");if(e=e.toLowerCase(),-1===i.indexOf(e))throw Error("Method ".concat(e," is not supported"));switch(e){case"render":!function(e){!0===e.responsive&&a(7);var t=document.createElement("div");t.innerHTML=n.a;var r=Math.floor(15*Math.random()),i="".concat(c,"showcases?pagina=").concat(r,"&per_page=4");for(fetch(i).then(function(e){return e.json()}).then(function(e){var t=e.map(function(e){return'<div class="carhoo-store-list_item">\n                <a href="https://carhoo.com.br/comprar/'.concat(e.id,'" title="').concat(e.vehicle.trim_name,'" target="_blank">\n                    <figure class="item-image" style="background-image: url(\'').concat(e.vehicle.image_url,'\')"></figure>\n                    </a>\n                    <div class="item-info">\n                    <h3 class="title">\n                        <a href="https://carhoo.com.br/comprar/').concat(e.id,'" title="').concat(e.vehicle.trim_name,'" target="_blank">\n                            ').concat(e.vehicle.trim_name,'\n                        </a>\n                    </h3>\n                    <div class="item-info_top">\n                        <span>').concat(e.vehicle.manufacture_year,"/").concat(e.vehicle.model_year,"</span>\n                        <span>").concat(e.vehicle.city_name,"/").concat(e.vehicle.state_acronym,'</span>\n                    </div>\n                        <div class="item-info_bottom">\n                            <h4 class="price">R$ ').concat(e.price.toLocaleString("pt-BR"),"</h4>\n                            <span>").concat(e.vehicle.mileage.toLocaleString("pt-BR")," km</span>\n                        </div>\n                    </div>\n                </div>")});document.getElementsByClassName("carhoo-store-list_tracker")[0].innerHTML=t.join("")}).catch(function(e){document.getElementsByClassName("carhoo-store-list_tracker")[0].innerHTML='\n            <div class="carhoo-store-error">\n                Houve um problema na conexão, tente atualizar a página\n            </div>',console.warn(e)}),o=document.getElementsByClassName("carhoo-widget")[0];0<t.children.length;)s.push(t.children[0]),o.appendChild(t.children[0])}(t);break;default:console.warn("No handler defined for ".concat(e))}}function d(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}!function(e){var t={},r=e[e["Carhoo-Store"]],i=r.q;if(i)for(var a=0;a<i.length;a++)"init"==i[a][0].toLowerCase()?t=d(t,i[a][1]):l(i[a][0],i[a][1]);(r=l).configurations=t,e[e["Carhoo-Store"]]=r}(window)}]);