'use strict';
// High score
let highScore = 0;
// Create random number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// Get Score number
let scoreNumber = 20;
// Display message method
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
// Add number to Number area
document.querySelector('.number').textContent;
// input
document.querySelector('.check').addEventListener('click', () => {
  const guessValue = Number(document.querySelector('.guess').value);
  if (!guessValue) {
    // document.querySelector('.message').textContent = '⛔ No number! ⛔';
    displayMessage('⛔ No number! ⛔');
  } else if (guessValue === secretNumber) {
    // when players win
    // document.querySelector('.message').textContent = '😍 Correct Number!';
    displayMessage('😍 Correct Number!');
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    // calculateHighScore
    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector('.highscore').textContent = highScore;
    }
    // calculateHighScore
    // when players win or loose
  } else if (guessValue !== secretNumber) {
    // document.querySelector('.message').textContent =
    //   guessValue > secretNumber ? '📈 Too high!' : '📉 Too low';
      displayMessage(guessValue > secretNumber ? '📈 Too high!' : '📉 Too low');
    if (scoreNumber > 1) {
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      // document.querySelector('.message').textContent = '⛔ Lost the game!';
      displayMessage('⛔ Lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guessValue > secretNumber) {
  //   document.querySelector('.message').textContent = '📈 Too high!';
  //   if (scoreNumber > 1) {
  //     scoreNumber--;
  //     document.querySelector('.score').textContent = scoreNumber;
  //   } else {
  //     document.querySelector('.message').textContent = '⛔ Lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guessValue < secretNumber) {
  //   document.querySelector('.message').textContent = '📉 Too low';
  //   if (scoreNumber > 1) {
  //     scoreNumber--;
  //     document.querySelector('.score').textContent = scoreNumber;
  //   } else {
  //     document.querySelector('.message').textContent = '⛔ Lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
// Reset again
document.querySelector('.again').addEventListener('click', () => {
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  scoreNumber = 20;
  document.querySelector('.score').textContent = scoreNumber;
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
