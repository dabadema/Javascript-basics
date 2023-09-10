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

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // This is the case when there is no input, 0 is always false, therefore "!" makes the case where there is no guess introduced, then the condition is fulfilled
    document.querySelector('.message').textContent = `⛔️ No number!`;
  }
});
