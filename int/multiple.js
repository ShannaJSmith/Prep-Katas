// // const remainder = 8 % 4;

// const something = (num) => {
//   const remainder = num % 6;
//   if (remainder === 0) {
//     console.log('it is a multiple of 6');
//   } else {
//     console.log(`is not a multiple of 6`);
//   }
// };

// something(1);
function fizzBuzz(n) {
  const three = n % 3;
  const five = n % 5;
  if (three === 0 && five === 0) {
    console.log('FizzBuzz');
  } else if (three === 0) {
    console.log('Fizz');
  } else if (five === 0) {
    console.log('Buzz');
  } else {
    console.log(n);
  }
}

fizzBuzz(1);
