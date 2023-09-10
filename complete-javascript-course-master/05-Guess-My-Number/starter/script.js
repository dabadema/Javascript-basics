'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = `🎉 Correct Number!!`;
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input0 is always false, therefore "!" makes the case where there is no guess introduced, then the condition is fulfilled
  if (!guess) {
    document.querySelector('.message').textContent = `⛔️ No number!`;

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `🔺 You are too high!`;
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `💥 You lost the game!`;
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `🔺 You are too low!`;
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `💥 You lost the game!`;
      document.querySelector('.score').textContent = 0;
    }

    // When player wins
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = `🎉 Correct Number!!`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
  }
  // else if (guess < 0 || guess >= 21) {  FIXME (Let's see if someone can help me with this!)
  //   document.querySelector('.message').textContent = `⛔️ Please, introduce a number between 1 and 20`;
  // }
});
