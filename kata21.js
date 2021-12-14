'use strict';

let prompt = require('prompt-sync')();

// Generate random integer
const getRandonNumber = (max) => {
  return Math.floor(Math.random() * max);
}

let answer = getRandonNumber(10);
let guess
let attempts = 0;

do {
  guess = prompt('Guess a number: '); 
  console.log('You answered: ' + guess);
  console.log(answer)
  if (guess === 'q') {
    break;
  } else if (isNaN(guess)) {
      console.log("That's not a number!");
  } else if (guess < answer) {
    console.log('Too low! Try again :)');
  } else if (guess > answer) {
    console.log('Too high! Try again :)');
  }  
} while (guess !== answer) {
  console.log(`That's correct! You took ${attempts} attempts!`);
  break; // illegal use?
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
