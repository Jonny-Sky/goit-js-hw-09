import Notiflix from 'notiflix';

const refs = {
  buttonEl: document.querySelector('button'),
  inputDelay: document.querySelector('[name=delay]'),
  inputstep: document.querySelector('[name=step]'),
  inputAmount: document.querySelector('[name=amount]'),
};

const numberOfRepetitions = refs.inputAmount.value;

refs.buttonEl.addEventListener('click', () => {
  const numberOfRepetitions = refs.inputAmount.value;
  x;
  // createPromise(numberOfRepetitions);
  createPromise().then(onFulfiiied).catch(onRejected);
  //   console.log(numberOfRepetitions);
  //   console.log(refs.inputAmount.value);
  //   console.log(refs.inputDelay.value);
});

function createPromise(position, delay) {
  delay = refs.inputstep.value;
  console.log(delay);
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve: onFulfiiied(`${position},${delay}`);
        //   выводится в консоль с задержкой!!! получилось, поиграйся с этим!

        console.log(`{${position},${delay}}`);
        return delay;
        // Fulfill
      } else {
        reject: onRejected(`${position},${delay}`);
        // Reject
      }
    }, delay);
  });
  //   return new promise;
}
//
let delay = refs.inputstep.value;
// createPromise(1, 1500)

function onFulfiiied({ position, delay }) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onRejected({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

// // console.log(refs.buttonEl);
// console.log(refs.inputstep.value);
// console.log(refs.inputDelay.value);
// console.log(refs.inputAmount);
// // console.log(numberOfRepetitions);

// for (let i = 1; i < str.length; i++) {
//   charCodeNext = str[i].charCodeAt();
//   if (charCodeNext - charCode !== 1) {
//     return false;
//   }
// }
