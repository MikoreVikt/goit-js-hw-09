import Notiflix from 'notiflix';

Notiflix.Notify.init({
  position: 'right-top',
  clickToClose: false,
});

const getEl = selector => document.querySelector(selector);
getEl(`form`).addEventListener(`submit`, onSubmitClick);

function onSubmitClick(e) {
  e.preventDefault();
  const el = e.target.elements;
  let delay = Number(el.delay.value);
  let step = Number(el.step.value);
  const amount = Number(el.amount.value);

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
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
