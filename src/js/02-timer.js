// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const inputRef = document.getElementById(`datetime-picker`);
const btnRef = document.querySelector(`button[data-start]`);

settings();

function settings() {
  flatpickr(inputRef, options);
  btnRef.disabled = true;
}
