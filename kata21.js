// "use strict";

// let prompt = require("prompt-sync")();

// // code below (replace this example)
// let answer = prompt("Guess a number: ");
// console.log("You answered: " + answer);

// function to get random integer
const getRandonNumber = (max) => {
  return Math.floor(Math.random() * max);
}

console.log(getRandonNumber(1000))


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