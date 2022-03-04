/* 
  Provided an array of numbers, tally the numbers and return the total as follows:
    - Even numbers should be worth 1 point
    - Odd numbers except 5 should be worth 3 points
    - The number 5 should be worth 5 points
  
  example:
    input: [1,2,3,4,5]
    output: 13
*/

function tallyArray(arrayOfNumbers) {
  const tally = arrayOfNumbers.map((num) => {
    if (num === 5) {
      return 5;
    } else if (num % 2 === 0) {
      return 1;
    } else if (num % 2 === 1) {
      return 3;
    }
  });
  const result = tally.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  return result;
}

console.log(tallyArray([1, 2, 3, 4, 5]));

// function closedPaths(number) {
//   const array = Array.from(String(number), Number)
//   const total = array.map((digit) => {
//       if (digit === 0 || digit === 4 ||digit === 6|| digit === 9) {
//           return 1
//       } else if (digit === 8) {
//           return 2
//       } else {
//           return 0
//       }
//   })
//    const numOfClosedPaths = total.reduce((prev, current) => (prev + current))
//       return numOfClosedPaths;
//   }
