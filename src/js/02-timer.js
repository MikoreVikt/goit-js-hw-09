import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  position: 'right-top',
  clickToClose: false,
});

const getEl = selector => document.querySelector(selector);
getEl(`button[data-start]`).disabled = true;
getEl(`button[data-stop]`).disabled = true;

let timeDifference;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = options.defaultDate.getTime();
    const selectedDate = selectedDates[0].getTime();

    if (selectedDate < currentDate) {
      getEl(`button[data-start]`).disabled = true;

      Notiflix.Notify.warning(`Please choose a date in the future`);
      Notiflix.Notify.warning('Пожалуйста, выберите дату в будущем');
    } else {
      getEl(`button[data-start]`).disabled = false;
      timeDifference = selectedDate - currentDate;

      Notiflix.Notify.success('Press "start" for countdown');
      Notiflix.Notify.success('Нажмите "start" для обратного отсчёта');
    }
  },
};

flatpickr(getEl(`#datetime-picker`), options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// =================================================================================

getEl(`button[data-start]`).addEventListener(`click`, () => {
  Notiflix.Notify.success('The countdown has begun!');
  Notiflix.Notify.success('Отсчёт начался!');

  getEl(`button[data-start]`).disabled = true;
  getEl(`button[data-stop]`).disabled = false;

  let intervalId = setInterval(() => {
    let convertedDate = convertMs(timeDifference);
    getEl(`span[data-days]`).textContent = addLeadingZero(convertedDate.days);
    getEl(`span[data-hours]`).textContent = addLeadingZero(convertedDate.hours);
    getEl(`span[data-minutes]`).textContent = addLeadingZero(
      convertedDate.minutes
    );
    getEl(`span[data-seconds]`).textContent = addLeadingZero(
      convertedDate.seconds
    );

    timeDifference -= 1000;

    if (timeDifference < 0) {
      clearInterval(intervalId);
      getEl(`button[data-stop]`).disabled = true;

      Notiflix.Notify.info('Time is over!');
      Notiflix.Notify.info('Время вышло!');
    }
  }, 1000);

  getEl(`button[data-stop]`).addEventListener(`click`, () => {
    clearInterval(intervalId);
    getEl(`#datetime-picker`).value = `   Выберите новую дату   `;
    getEl(`span[data-days]`).textContent = `00`;
    getEl(`span[data-hours]`).textContent = `00`;
    getEl(`span[data-minutes]`).textContent = `00`;
    getEl(`span[data-seconds]`).textContent = `00`;
    getEl(`button[data-stop]`).disabled = true;

    Notiflix.Notify.warning(`Oops... The timer has been reset!`);
    Notiflix.Notify.warning('Упс... Таймер сброшен!');
  });
});
