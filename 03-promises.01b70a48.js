!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},c=n.parcelRequired7c6;null==c&&((c=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var c={id:e,exports:{}};return t[e]=c,n.call(c.exports,c,c.exports),c.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=c);var u=c("iU1Pc"),i={buttonEl:document.querySelector("button"),inputDelay:document.querySelector("[name=delay]"),inputstep:document.querySelector("[name=step]"),inputAmount:document.querySelector("[name=amount]")};i.inputAmount.value;i.buttonEl.addEventListener("click",(function(){var e,n;i.inputAmount.value;x,(n=i.inputstep.value,console.log(n),new Promise((function(t,o){var c=Math.random()>.3;setTimeout((function(){if(c)return r("".concat(e,",").concat(n)),console.log("{".concat(e,",").concat(n,"}")),n;a("".concat(e,",").concat(n))}),n)}))).then(r).catch(a)}));i.inputstep.value;function r(n){var t=n.position,o=n.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))}function a(n){var t=n.position,o=n.delay;e(u).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}}();
//# sourceMappingURL=03-promises.01b70a48.js.map