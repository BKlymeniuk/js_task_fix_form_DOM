var r;function e(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}((function(r){if(Array.isArray(r))return e(r)})(r=document.querySelectorAll("input"))||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,t){if(r){if("string"==typeof r)return e(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach(function(r){var e,t=document.createElement("label"),n=(e=r.name.replace(/([A-Z])/g," $1")).charAt(0).toUpperCase()+e.slice(1);t.className="field-label",t.textContent=n,t.htmlFor=r.id,r.parentElement.insertBefore(t,r),r.placeholder=n});
//# sourceMappingURL=index.3537c567.js.map