import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('input[type="text"]');
const startBtn = document.querySelector('button');
const secondsEl = document.querySelector('[data-seconds]');
const minutesEl = document.querySelector('[data-minutes]');
const hoursEl = document.querySelector('[data-hours]');
const daysEl = document.querySelector('[data-days]');
const timertStyle = document.querySelector('.timer');
const sectionStyle = document.querySelectorAll('div .field');

const date = Date.now();
startBtn.setAttribute('disabled', true);

console.log(sectionStyle);

timertStyle.style.display = 'flex';
sectionStyle[0].style.display = 'flex';
sectionStyle[0].style.flexDirection = 'column';
sectionStyle[0].style.padding = '7px';
sectionStyle[0].style.alignItems = 'center';
sectionStyle[1].style.display = 'flex';
sectionStyle[1].style.flexDirection = 'column';
sectionStyle[1].style.padding = '7px';
sectionStyle[1].style.alignItems = 'center';
sectionStyle[2].style.display = 'flex';
sectionStyle[2].style.flexDirection = 'column';
sectionStyle[2].style.padding = '7px';
sectionStyle[2].style.alignItems = 'center';
sectionStyle[3].style.display = 'flex';
sectionStyle[3].style.flexDirection = 'column';
sectionStyle[3].style.padding = '7px';
sectionStyle[3].style.alignItems = 'center';
daysEl.style.fontSize = '40px';
hoursEl.style.fontSize = '40px';
minutesEl.style.fontSize = '40px';
secondsEl.style.fontSize = '40px';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates[0] = new Date(selectedDates);
    const delta = new Date(selectedDates) - date;
    if (delta < 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    if (delta > 0) {
      startBtn.removeAttribute('disabled');
    }

    let timer = {
      intervalId: null,
      isActive: false,
      start() {
        if (this.isActive) {
          return;
        }
        const startTime = selectedDates[0];
        this.isActive = true;
        this.intervalId = setInterval(() => {
          const currentTime = Date.now();
          const delta = startTime - currentTime;
          const time = convertMs(delta);
          // console.log(delta);
          updateClockface(time);
          if (delta <= 1000) {
            clearInterval(this.intervalId);
            Notiflix.Notify.success('Congratulations, the timer has stopped!');
          }
        }, 1000);
      },

      stop() {
        clearInterval(this.intervalId);
      },
    };

    startBtn.addEventListener('click', () => {
      timer.start();
    });
  },
};
flatpickr(input, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
function pad(value) {
  return String(value).padStart(2, '0');
}
function updateClockface({ days, hours, minutes, seconds }) {
  daysEl.textContent = `${days}`;
  hoursEl.textContent = `${hours}`;
  minutesEl.textContent = `${minutes}`;
  secondsEl.textContent = `${seconds}`;
}
