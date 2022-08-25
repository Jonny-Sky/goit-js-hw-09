const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const colorBg = document.querySelector('body');
let timerId = null;

startBtn.addEventListener('click', () => {
  startBtn.setAttribute('disabled', true);
  timerId = setInterval(() => {
    document.body.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  startBtn.removeAttribute('disabled');
  clearInterval(timerId);
});
