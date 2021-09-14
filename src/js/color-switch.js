import colors from '../db/colors.json';
import refs from '../js/refs';

refs.startBtn.addEventListener('click', startCangeColor);
refs.stopBtn.addEventListener('click', stopCangeColor);

let timerId = null;

function startCangeColor() {
  refs.startBtn.disabled = true;

   timerId = setInterval(() => {
    document.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
};

function stopCangeColor() {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};