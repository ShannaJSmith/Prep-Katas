const repeatNumbers = function(data) {
  let string = "";
  let array = [];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      string = string + data[i][0];
    }
    array.push(string)
    string = "";
  }
  return array.join(", ");
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

// EXPECTED OUTPUT:
// 1111111111
// 11, 222
// 10101010, 343434343434, 9292

