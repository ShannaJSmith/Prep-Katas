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

// console.log(camelCase('this is a string'))

// const pascalCase = (input) => {
//   let array = input.split(" ");
//   let answer = array.map ((word, index) => {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   })
//   return answer.join("");
// }

// console.log(pascalCase('this is a string'))

// const snakeCase = (input) => {
//   let array = input.split(" ");
//   return array.join("_")
// }

// console.log(snakeCase('this is a string'))

// const kebabCase = (input) => {
//   let array = input.split(" ");
//   return array.join("-")
// }

// console.log(kebabCase('this is a string'))

const titleCase = (input) => {
  let array = input.split(' ');
  let answer = array.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  return answer.join(" ");
}

console.log(titleCase('this is a string'))

// const vowelCase = (input) => {

// }

// const consonantCase = (input) => {

// }

// const upperCase = (input) => {

// }

// const lowerCase = (input) => {

// }

// const makeCase = function (input, caseType) {
//   let array = input.split(' ');
//     if (caseType === 'camel') {
//     } else if (caseType === 'pascal') {
//     } else if (caseType === 'snake') {
//     } else if (caseType === 'kebab') {
//     } else if (caseType === 'title') {
//     } else if (caseType === 'vowel') {
//     } else if (caseType === 'consonant') {
//     } else caseType === 'upper' && caseType === 'snake'
// }

// console.log(makeCase('this is a string', 'camel'))
// console.log(makeCase('this is a string', 'pascal'))
// console.log(makeCase('this is a string', 'snake'))
// console.log(makeCase('this is a string', 'kebab'))
// console.log(makeCase('this is a string', 'title'))
// console.log(makeCase('this is a string', 'vowel'))
// console.log(makeCase('this is a string', 'consonant'))
// console.log(makeCase('this is a string', ['upper', 'snake']))

// Expected Output:
// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING