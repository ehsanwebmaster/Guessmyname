'use strict';
// Create random number
const secretNumber = Math.trunc(Math.random() * 20 + 1);
// Add number to Number area
document.querySelector('.number').textContent = secretNumber;
// input
document.querySelector('.check').addEventListener('click', () => {
  const guessValue = Number(document.querySelector('.guess').value);
  if (!guessValue) {
    document.querySelector('.message').textContent = '⛔ No number! ⛔';
  } else if (guessValue === secretNumber) {
    document.querySelector('.message').textContent = '😍 Correct Number!';
  } else if (guessValue > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
  } else if (guessValue < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low';
  }
});
