import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  position: 'center-top',
  clickToClose: true,
});

const refs = {
  input: document.querySelector(`#datetime-picker`),
  btn: document.querySelector(`button[data-start]`),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
refs.btn.disabled = true;

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
      Notiflix.Notify.warning('Please choose a date in the future');
      Notiflix.Notify.warning('Пожалуйста, выберите дату в будущем');
    } else {
      Notiflix.Notify.success('Press "start" for countdown');
      Notiflix.Notify.success('Нажмите "start" для обратного отсчета');
      refs.btn.disabled = false;
      timeDifference = selectedDate - currentDate;
    }
  },
};

flatpickr(refs.input, options);

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
  return String(value).padStart(2, 0);
}

// =================================================================================

refs.btn.addEventListener(`click`, () => {
  Notiflix.Notify.success('The countdown has begun!');
  Notiflix.Notify.success('Отсчет начался!');

  refs.btn.disabled = true;

  let intervalId = setInterval(() => {
    let timeToCount = convertMs(timeDifference);
    refs.days.textContent = addLeadingZero(timeToCount.days);
    refs.hours.textContent = addLeadingZero(timeToCount.hours);
    refs.minutes.textContent = addLeadingZero(timeToCount.minutes);
    refs.seconds.textContent = addLeadingZero(timeToCount.seconds);

    timeDifference -= 1000;

    if (timeDifference < 0) {
      clearInterval(intervalId);
      Notiflix.Notify.info('Time is over!');
      Notiflix.Notify.info('Время вышло!');
    }
  }, 1000);
});
