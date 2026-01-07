const counterEl = document.getElementById('counter');
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let count = 0;

function updateCounter() {
  counterEl.textContent = count;
}

incBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});

decBtn.addEventListener('click', () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
});
