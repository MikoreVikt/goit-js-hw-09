function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequire7bc7;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=i);var r=i("eWCmQ");e(r).Notify.init({position:"right-top",clickToClose:!1});var l;function u(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{o?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}(l="form",document.querySelector(l)).addEventListener("submit",(function(t){t.preventDefault();const o=t.target.elements;let n=Number(o.delay.value),i=Number(o.step.value);const l=Number(o.amount.value);for(let t=1;t<=l;t+=1)u(t,n).then((({position:t,delay:o})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),n+=i}));
//# sourceMappingURL=03-promises.5412aff9.js.map