const bodyRef = document.querySelector(`body`);
const startBtnRef = document.querySelector(`button[data-start]`);
const stopBtnRef = document.querySelector(`button[data-stop]`);

startBtnRef.addEventListener(`click`, startGenerationColors);
stopBtnRef.addEventListener(`click`, stopGenerationColors);

let interval;

function startGenerationColors() {
  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;
  interval = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopGenerationColors() {
  clearInterval(interval);
  startBtnRef.disabled = false;
  stopBtnRef.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
