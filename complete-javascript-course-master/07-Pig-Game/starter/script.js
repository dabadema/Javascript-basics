'use strict';

// Selecting elements
const totalScoreP0El = document.querySelector('#score--0');
const currentScoreP0El = document.getElementById('current--0');
const totalScoreP1El = document.querySelector('#score--1');
const currentScoreP1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNewGameEl = document.querySelector('.btn--new');
const btnDiceRollsEl = document.querySelector('.btn--roll');
const btnHoldScoreEl = document.querySelector('.btn--hold');

// Starting conditionstotalScoreP0El
totalScoreP0El.textContent = 0;
totalScoreP1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
const rollsResult = function () {
  //1. Generating a random dice roll
  const diceRolls = Math.trunc(Math.random() * 6) + 1;
  console.log(diceRolls);
  //2. Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceRolls}.png`;
  //3. Check if the result is 1
  if (diceRolls !== 1) {
    // Add dice to current score
    currentScore += diceRolls;
    currentScoreP0El.textContent = currentScore; // FIXME change later to consider each player
  } else {
    // Switch to the next player
    currentScore = 0;
    currentScoreP0El.textContent = 0;
  }
};

btnDiceRollsEl.addEventListener('click', rollsResult);
