'use strict';

// Selecting elements
const totalScoreP0El = document.querySelector('#score--0');
const currentScoreP0El = document.getElementById('current--0');
const totalScoreP1El = document.querySelector('#score--1');
const currentScoreP1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNewGameEl = document.querySelector('.btn--new');
const btnDiceRollsEl = document.querySelector('.btn--roll');
const btnHoldScoreEl = document.querySelector('.btn--hold');

// Starting conditionstotalScoreP0El
totalScoreP0El.textContent = 0;
totalScoreP1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

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
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to the next player,
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
};

btnDiceRollsEl.addEventListener('click', rollsResult);
