'use strict';
// Create random number
const secretNumber = Math.trunc(Math.random() * 20 + 1);
// Get Score number
let scoreNumber = document.querySelector('.score').textContent;
// Add number to Number area
document.querySelector('.number').textContent;
// input
document.querySelector('.check').addEventListener('click', () => {
  const guessValue = Number(document.querySelector('.guess').value);
  if (!guessValue) {
    document.querySelector('.message').textContent = '⛔ No number! ⛔';
  } else if (guessValue === secretNumber) {
    document.querySelector('.message').textContent = '😍 Correct Number!';
  } else if (guessValue > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
    if (scoreNumber > 1) {
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      document.querySelector('.message').textContent = '⛔ Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessValue < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low';
    if (scoreNumber > 1) {
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      document.querySelector('.message').textContent = '⛔ Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
