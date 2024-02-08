import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m,i as r}from"./assets/vendor-77e16229.js";const t={inputDate:document.getElementById("datetime-picker"),startBtn:document.querySelector("button[data-start]"),spanDays:document.querySelector("span[data-days]"),spanHours:document.querySelector("span[data-hours]"),spanMinutes:document.querySelector("span[data-minutes]"),spanSeconds:document.querySelector("span[data-seconds]")};let i=null,o=!1;const u={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const n=e[0];n<new Date?(S(),t.startBtn.disabled=!0):(u.defaultDate=n,t.startBtn.disabled=!1)}};m(t.inputDate,u);t.startBtn.disabled=!0;t.startBtn.addEventListener("click",f);function f(){i=setInterval(()=>{const e=t.inputDate.value,n=new Date(e)-Date.now();if(n<0){y(),D();return}t.startBtn.disabled=!0,t.inputDate.disabled=!0;const a=h(n);t.spanDays.textContent=a.days,t.spanHours.textContent=a.hours,t.spanMinutes.textContent=a.minutes,t.spanSeconds.textContent=a.seconds},1e3)}function h(e){const c=s(Math.floor(e/864e5)),d=s(Math.floor(e%864e5/36e5)),l=s(Math.floor(e%864e5%36e5/6e4)),p=s(Math.floor(e%864e5%36e5%6e4/1e3));return{days:c,hours:d,minutes:l,seconds:p}}function s(e){return String(e).padStart(2,"0")}function y(){o||(clearInterval(i),o=!0,C())}function D(){t.spanDays.textContent="00",t.spanHours.textContent="00",t.spanMinutes.textContent="00",t.spanSeconds.textContent="00"}function S(){r.error({title:"Error",message:"Please choose a date in the future",position:"topRight"})}function C(){r.warning({title:"Caution",message:"The timer has been stopped!"})}
//# sourceMappingURL=commonHelpers.js.map