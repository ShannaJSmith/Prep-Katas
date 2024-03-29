const camelCase = (input) => {
  let array = input.split(" ");
  let answer = array.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  })
  return answer.join("");
}

console.log(camelCase('this is a string'))

const pascalCase = (input) => {
  let array = input.split(" ");
  let answer = array.map ((word, index) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  })
  return answer.join("");
}

console.log(pascalCase('this is a string'))

const snakeCase = (input) => {
  let array = input.split(" ");
  return array.join("_")
}

console.log(snakeCase('this is a string'))

const kebabCase = (input) => {
  let array = input.split(" ");
  return array.join("-")
}

console.log(kebabCase('this is a string'))

const titleCase = (input) => {
  let array = input.split(" ");
  let answer = array.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  return answer.join(" ");
}

console.log(titleCase('this is a string'))

const vowelCase = (input) => {
  let string = '';
  for (let index = 0; index < input.length; index++) {
    if (
      input[index] === 'a' ||
      input[index] === 'e' ||
      input[index] === 'i' ||
      input[index] === 'o' ||
      input[index] === 'u'
    ) {
      string += input[index].toUpperCase();
    } else {
      string += input[index];
    }
  }
  return string;
}

console.log(vowelCase('this is a string'))

const consonantCase = (input) => {
  let string = '';
  for (let index = 0; index < input.length; index++) {
    if (
      input[index] === 'a' ||
      input[index] === 'e' ||
      input[index] === 'i' ||
      input[index] === 'o' ||
      input[index] === 'u'
    ) {
      string += input[index]
    } else {
      string += input[index].toUpperCase();
    }
  }
  return string;
}

console.log(consonantCase('this is a string'))

const upperCase = (input) => {
return input.toUpperCase();
}

console.log(upperCase('this is a string'))

const lowerCase = (input) => {
  return input.toLowerCase();
}

console.log(lowerCase('this is a string'))


const makeCase = function (input, caseType) {
  // let finalAnswer = "";
    if (caseType === 'camel') {
      return camelCase(input);
    } else if (caseType === 'pascal') {
      return pascalCase(input);
    } else if (caseType === 'snake') {
      return snakeCase(input);
    } else if (caseType === 'kebab') {
      return kebabCase(input);
    } else if (caseType === 'title') {
      return titleCase(input);
    } else if (caseType === 'vowel') {
      return vowelCase(input);
    } else if (caseType === 'consonant') {
      return consonantCase(input);
    } else (caseType === 'upper') 
      return upperCase(input);
}
console.log("-----------------------------------")
console.log(makeCase('this is a string', 'camel'))
console.log(makeCase('this is a string', 'pascal'))
console.log(makeCase('this is a string', 'snake'))
console.log(makeCase('this is a string', 'kebab'))
console.log(makeCase('this is a string', 'title'))
console.log(makeCase('this is a string', 'vowel'))
console.log(makeCase('this is a string', 'consonant'))
console.log(makeCase('this is a string', ['upper', 'snake'])) // <- STILL NEED TO CONFIRM THIS CONDITION

// Expected Output:
// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING
