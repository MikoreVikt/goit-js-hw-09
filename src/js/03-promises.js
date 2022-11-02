import Notiflix from 'notiflix';

Notiflix.Notify.init({
  position: 'right-top',
  clickToClose: false,
});

const getEl = selector => document.querySelector(selector);

getEl(`form`).addEventListener(`submit`, evt => {
  evt.preventDefault();

  let delay = Number(evt.target.elements.delay.value);
  let step = Number(evt.target.elements.step.value);
  let amount = Number(evt.target.elements.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    delay += step;
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
