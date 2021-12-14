'use strict';

let prompt = require('prompt-sync')();

// Generate random integer
const getRandonNumber = (max) => {
  return Math.floor(Math.random() * max);
}

const answer = getRandonNumber(10);
// let guess = prompt('Guess a number: '); 

let guess;
let attempts = 0;

while (guess !== answer) {
guess = prompt('Guess a number: '); 
console.log('You answered: ' + guess);
console.log(answer)
// use 'q' to exit game loop at any time
  if (guess === 'q') {
    break;
  }
  if (isNaN(guess)) {
    console.log("That's not a number!");
    continue;
  } else if (guess < answer) {
    attempts++
    console.log('Too low! Try again :)');
  } else if (guess > answer) {
    attempts++
    console.log('Too high! Try again :)');
  } else if (guess === answer) {
    console.log(`That's correct! You took ${attempts} attempts!`);
    break;
  }
}


// Sample output
// Lines preceded with > are provided by the user.

// Guess a number:
// > 12
// Too Low!
// Guess a number:
// > 65
// Too High!
// Guess a number:
// > 65
// Already Guessed!
// Guess a number:
// > asdf
// Not a number! Try again!
// Guess a number:
// > 42
// You got it! You took 3 attempts!
