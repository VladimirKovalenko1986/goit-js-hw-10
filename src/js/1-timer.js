import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  inputDate: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  spanDays: document.querySelector('span[data-days]'),
  spanHours: document.querySelector('span[data-hours]'),
  spanMinutes: document.querySelector('span[data-minutes]'),
  spanSeconds: document.querySelector('span[data-seconds]'),
};

let timerId = null;
let isTimerStopped = false;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      ErrorData();
      refs.startBtn.disabled = true;
    } else {
      options.defaultDate = selectedDate;
      refs.startBtn.disabled = false;
    }
  },
};

flatpickr(refs.inputDate, options);

refs.startBtn.disabled = true;

refs.startBtn.addEventListener('click', onClickTimer);

function onClickTimer() {
  timerId = setInterval(() => {
    const selectedDate = refs.inputDate.value;
    const ms = new Date(selectedDate) - Date.now();

    if (ms < 0) {
      stopInterval();
      clearTimerPanel();
      return;
    }
    refs.startBtn.disabled = true;
    refs.inputDate.disabled = true;

    const convertDate = convertMs(ms);

    refs.spanDays.textContent = convertDate.days;
    refs.spanHours.textContent = convertDate.hours;
    refs.spanMinutes.textContent = convertDate.minutes;
    refs.spanSeconds.textContent = convertDate.seconds;
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function stopInterval() {
  if (!isTimerStopped) {
    clearInterval(timerId);
    isTimerStopped = true;
    WarningStopedIntervsl();
  }
}

function clearTimerPanel() {
  refs.spanDays.textContent = '00';
  refs.spanHours.textContent = '00';
  refs.spanMinutes.textContent = '00';
  refs.spanSeconds.textContent = '00';
}

function ErrorData() {
  iziToast.error({
    title: 'Error',
    message: 'Please choose a date in the future',
  });
}

function WarningStopedIntervsl() {
  iziToast.warning({
    title: 'Caution',
    message: 'The timer has been stopped!',
  });
}
