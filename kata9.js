const camelCase = function(input) {
let array = input.split(" ");
for (let i = 0; i < array.length; i++) {
  // make the first word in the array is lowercase
  if (i === 0) {
    array[i] = array[i].toLowerCase()
    // If not the first word uppercase the first letter and lowercase the rest
  } else {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].substr(1);
  }
}
return array.join("");
};

// MAP solution
// const camelCase = (input) => {
//   let array = input.split(" ");
//   let answer = array.map((word, index) => {
//     if (index === 0) {
//       return word.toLowerCase();
//     }
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   })
//   return answer.join("");
// }

console.log(camelCase('this is a string'))
console.log(camelCase('loopy lighthouse'))
console.log(camelCase('supercalifragalisticexpialidocious'))

// Expected Output
// thisIsAString6
// loopyLighthouse
// supercalifragalisticexpialidocious
