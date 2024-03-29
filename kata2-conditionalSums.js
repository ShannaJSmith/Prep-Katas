const conditionalSum = function(values, condition) {
  let num = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] === 0) {
      return 0
    }
    if (values[i] % 2 === 0 && condition === "even") {
      num += values[i];
    } else {
      if (values[i] % 2 === 1 && condition === "odd") {
        num += values[i];
      }
     }
  }
  return num;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));