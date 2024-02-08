import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  formSubmit: document.querySelector('.form'),
  inputSearch: document.querySelector('input[name="delay"]'),
};
let delay = '';

refs.formSubmit.addEventListener('submit', onFormSubmitPromis);

function onFormSubmitPromis(e) {
  e.preventDefault();

  const state = document.querySelector('input[name="state"]:checked').value;
  delay = parseInt(refs.inputSearch.value, 10);
  console.log(state);
  console.log(delay);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      console.log(`✅ Fulfilled promise in ${delay}ms`);
      resolveStatus();
    })
    .catch(delay => {
      console.log(`❌ Rejected promise in ${delay}ms`);
      rejectStatus();
    })
    .finally(() => {
      refs.formSubmit.reset();
    });
}

function resolveStatus() {
  iziToast.success({
    title: 'OK',
    message: `Fulfilled promise in ${delay}ms`,
    position: 'topRight',
  });
}

function rejectStatus() {
  iziToast.error({
    title: 'Error',
    message: `Rejected promise in ${delay}ms`,
    position: 'topRight',
  });
}
