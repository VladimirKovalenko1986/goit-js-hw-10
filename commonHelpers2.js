import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";const o={formSubmit:document.querySelector(".form"),inputSearch:document.querySelector('input[name="delay"]')};let e="";o.formSubmit.addEventListener("submit",m);function m(r){r.preventDefault();const s=document.querySelector('input[name="state"]:checked').value;e=parseInt(o.inputSearch.value,10),console.log(s),console.log(e),new Promise((t,n)=>{setTimeout(()=>{s==="fulfilled"?t(e):n(e)},e)}).then(t=>{console.log(`✅ Fulfilled promise in ${t}ms`),l()}).catch(t=>{console.log(`❌ Rejected promise in ${t}ms`),c()}).finally(()=>{o.formSubmit.reset()})}function l(){i.success({title:"OK",message:`Fulfilled promise in ${e}ms`})}function c(){i.error({title:"Error",message:`Rejected promise in ${e}ms`})}
//# sourceMappingURL=commonHelpers2.js.map