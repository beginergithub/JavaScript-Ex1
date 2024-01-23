'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const bodyStyle = function (style) {
  document.querySelector('body').style.backgroundColor = style;
};
const numberStyle = function (nStyle) {
  document.querySelector('.number').style.width = nStyle;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('❌ No number');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    bodyStyle('#60b347');

    numberStyle('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');

      displayScore(0);
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayScore(score);
  document.querySelector('.number').textContent = '?';

  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  bodyStyle('#222');

  numberStyle('15rem');
});
