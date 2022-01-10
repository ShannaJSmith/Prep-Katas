// determine if each number is greater than the sum of all prev elements in an array

const arrayChallenge = (arr) => { 
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i];
    if (sum > arr[i + 1]) {
      return "false";
    }
  }
  return "true"; 
}

console.log(arrayChallenge([1, 2, 3, 4, 5]));