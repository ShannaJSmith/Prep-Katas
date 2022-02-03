// tech question: do an http/axios/etc call to retrieve an object. Clean the object so that all n/a, '-' and "" fields are removed

const obj = {
  name: { firstname: 'bob', middle: '', lastname: 'miller' },
  age: 25,
  dob: '-',
  hobbies: ['running', 'wathing anime', '-'],
  education: { highschool: 'mss', college: 'N/A' },
};

const mod = (obj) => {
  // console.log("obj", obj)
  Object.entries(obj).forEach(([key, value]) => {
    if (value && typeof value === 'object') {
      mod(value);
    }
    if (
      (value && typeof value === 'object' && !Object.keys(value).length) ||
      value === 'N/A' ||
      value === '-' ||
      value === ''
    ) {
      if (Array.isArray(obj)) {
        obj.splice(key, 1);
      } else {
        delete obj[key];
      }
    }
  });
  return obj;
};

console.log('answer', mod(obj));

// console.log("obj:", obj.name.firstname)
// console.log("keys:", Object.keys(obj))
// console.log("values:", Object.values(obj))
// console.log("entires:", Object.entries(obj))

// const axios = require('axios');

//   axios.get('https://coderbyte.com/api/challenges/json/json-cleaning')
//   .then((response) => {
//     const body = response.data
//     delete body.name.middle;
//     delete body.DOB;
//     body.hobbies.splice(2);
//     delete body.education.highschool;
//   })
//   .catch((error) => {
//     console.log(error.message)
//   })
