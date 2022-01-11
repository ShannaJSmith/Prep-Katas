/*
  Given that a piece of paper is 0.0001m thick, 
  Create a function that takes the argument of distance and calculate how many times the paper must be folded in order to reach that distance. 
  If the distance is negative, return null.
  example:
  input: 1000m
  output: 1
*/

const calculateFolds = (distance) => {
  if (distance < 0) {
    return null
  }
  return true
}

console.log(calculateFolds(1000))

module.exports = calculateFolds
