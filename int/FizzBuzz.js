// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Constraints:

// 1 <= n <= 104

const fizzBuzz = (n) => {
  const array = [];
  for (let i = 1; i <= n; i++) {
    const divisibleByThree = i % 3;
    const divisibleByFive = i % 5;
    if (divisibleByFive === 0 && divisibleByThree === 0) {
      array.push('FizzBuzz');
    } else if (divisibleByThree === 0) {
      array.push('Fizz');
    } else if (divisibleByFive === 0) {
      array.push('Buzz');
    } else {
      array.push(String(i));
    }
  }
  return array;
};

// const fizzBuzz = (n) => {
//   let array = [];
//   for (let i = 1; i <= n; i++) {
//     let divisibleByThree = i % 3 === 0;
//     let divisibleByFive = i % 5 === 0;
//     if (!divisibleByFive && !divisibleByThree) {
//       array.push(String(i));
//     }
//     if (divisibleByFive && divisibleByThree) {
//       array.push('FizzBuzz');
//     }
//     if (divisibleByThree) {
//       array.push('Fizz');
//     }
//     if (divisibleByFive) {
//       array.push('Buzz');
//     }
//   }
//   return array;
// };

console.log(fizzBuzz(5));
