function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},n=t.parcelRequire7bc7;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequire7bc7=n);var r=n("eWCmQ");e(r).Notify.init({position:"right-top",clickToClose:!1});var l;function a(e,t){return new Promise(((o,i)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}(l="form",document.querySelector(l)).addEventListener("submit",(t=>{t.preventDefault();let o=Number(t.target.elements.delay.value),i=Number(t.target.elements.step.value),n=Number(t.target.elements.amount.value);for(let t=1;t<=n;t+=1)a(t,o).then((({position:t,delay:o})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),o+=i}));
//# sourceMappingURL=03-promises.0d118156.js.map