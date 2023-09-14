'use strict';

// Selecting elements
let totalScoreP1El = document.querySelector('#score--0');
let currentScoreP1El = document.getElementById('current--0');
let totalScoreP2El = document.querySelector('#score--1');
let currentScoreP2El = document.getElementById('current--1');
let diceEl = document.querySelector('.dice');

// Starting conditions
totalScoreP1.textContent = 0;
totalScoreP2.textContent = 0;
diceEl.classList.add('hidden');
