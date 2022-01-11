/* Given an array of items, remove all duplicates and return a new array with unique entries.

example:
input: [1,1,2,3]
output: [1,2,3]
*/

function removeDuplicates(inputArray) {
  const result = inputArray.filter((num, index, arr) => {
    if(arr.indexOf(num) === index) {
      return true;
    }
    return false;
  })
 
  return result;
 // return inputArray.filter((a, b, c)=>c.indexOf(a)===b)
 }
 
 console.log(removeDuplicates([1,1,2,3]));