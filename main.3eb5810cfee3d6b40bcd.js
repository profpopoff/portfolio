!function(){"use strict";var e={370:function(e){e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},805:function(e,t,n){e.exports=n.p+"assets/ab52b291962c9205bf22.png"},435:function(e,t,n){e.exports=n.p+"assets/972db818892147f33091.png"},504:function(e,t,n){e.exports=n.p+"assets/f6ce372f216579a690a4.png"},213:function(e,t,n){e.exports=n.p+"assets/5fe92b87738308b0e4b5.png"},135:function(e,t,n){e.exports=n.p+"assets/5326e987ac036b3ad71f.png"},356:function(e,t,n){e.exports=n.p+"assets/e9a48a707339ce1ee027.png"},531:function(e,t,n){e.exports=n.p+"assets/ef15e27e9ba7c0147276.png"},695:function(e,t,n){e.exports=n.p+"assets/9f802fce8b16ceaf164b.png"},87:function(e,t,n){e.exports=n.p+"assets/125beae3cf64c384e974.png"},436:function(e,t,n){e.exports=n.p+"assets/8e859bce3e566fe113e6.png"},309:function(e,t,n){e.exports=n.p+"assets/f95a60ce6bed0dd43aa4.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),n.b=document.baseURI||self.location.href,function(){var e=n(370),t=n.n(e),r=new URL(n(356),n.b),o=new URL(n(695),n.b),s=new URL(n(531),n.b),c=new URL(n(309),n.b),a=new URL(n(87),n.b),l=new URL(n(436),n.b),p=new URL(n(213),n.b),u=new URL(n(504),n.b),i=new URL(n(435),n.b),f=new URL(n(805),n.b),b=new URL(n(135),n.b);t()(r),t()(o),t()(s),t()(c),t()(a);t()(l),t()(p),t()(u),t()(i),t()(f),t()(b);const d=document.querySelector(".boxes"),x=document.querySelector(".salute--text"),m=document.querySelector(".salute--img"),g=document.querySelector(".author-name"),y=document.querySelectorAll(".job-title-container"),h=document.querySelectorAll(".job-title"),w=document.querySelectorAll(".laptop"),v=[0,1,2,3,41,42,43,44,82,83,123,124,125,126,164,165,166,167,205,206,246,247,287,288,5,6,46,47,87,88,128,129,169,170,210,211,251,252,292,293,8,9,14,15,49,50,51,90,91,92,131,132,133,134,172,173,213,214,254,255,295,296,175,176,217,177,218,259,55,56,96,97,137,138,178,179,219,220,260,261,217,218,259,260,261,301,302,17,18,19,58,59,60,61,99,100,102,103,140,141,144,181,182,185,222,223,225,226,263,264,265,266,304,305,306,24,25,65,66,67,106,107,108,147,148,149,150,188,189,229,230,270,271,311,312,67,108,149,150,191,232,192,233,274,234,275,316,194,235,276,154,195,236,73,114,155,33,34,74,75,115,116,156,157,197,198,238,239,279,280,320,321,36,37,38,39,77,78,79,80,118,119,159,160,161,162,200,201,202,203,241,242,282,283,284,285,323,324,325,326];for(let e=0;e<365;e++){const t=document.createElement("div");t.classList=v.includes(e)?"box active":"box",d.appendChild(t)}window.addEventListener("scroll",(()=>{let e=window.scrollY;x.style.transform=`translateY(${.1*e}px)`,m.style.transform=`translate(${.4*e}px, ${.7*e}px)`,g.style.transform=`translateX(calc(-10vh + ${.1*e}px))`,y[0].style.backgroundPositionY=.5*e+"px",y[1].style.backgroundPositionY=.5*-e+"px",h[0].style.transform=`translateY(calc(-66vh + ${.3*e}px))`,h[1].style.transform=`translateY(calc(150vh - ${.5*e}px))`,w[0].style.transform=`translateX(calc(-200vh + ${.5*e}px))`,w[1].style.transform=`translateX(calc(250vh - ${.5*e}px))`,w[2].style.transform=`translateX(calc(-300vh + ${.5*e}px))`}))}()}();