/*
  Given that a piece of paper is 0.0001m thick, 
  create a function that takes the argument of distance and calculate how many times the paper must be folded in order to reach that distance. 
  If the distance is negative, return null.
  example:
  input: 1000m
  output: 1
*/

const calculateFolds = (distance) => {
  let thickness = 0.0001;
  let fold = thickness * 2;
  if (distance < 0) {
    return null
  }
}

console.log(calculateFolds(1000))

module.exports = calculateFolds
