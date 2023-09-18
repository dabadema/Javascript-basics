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

// Starting conditions
totalScoreP0El.textContent = 0;
totalScoreP1El.textContent = 0;
diceEl.classList.add('hidden');

let scores, currentScore, activePlayer, playing;

// Reset the game functionality and initialization
const resetGame = function () {
  // Set all values to 0 again
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  totalScoreP0El.textContent = 0;
  totalScoreP1El.textContent = 0;
  currentScoreP0El.textContent = 0;
  currentScoreP1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner', 'player--active');
  player0El.classList.add('player--active');
  player1El.classList.add('player');
};

resetGame();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality

const rollsResult = function () {
  if (playing) {
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
      // Switch to the next player
      switchPlayer();
    }
  }
};

btnDiceRollsEl.addEventListener('click', rollsResult);

// Holding the score functionality

const holdButton = function () {
  if (playing) {
    // 1. Add current score to the total score
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
};

btnHoldScoreEl.addEventListener('click', holdButton);

// Reset the game functionality

btnNewGameEl.addEventListener('click', resetGame);
