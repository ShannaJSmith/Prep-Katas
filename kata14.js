const calculateChange = function(total, cash) {
  let change = cash - total;
  let currencyDenominations = ['twentyDollar', 'tenDollar', 'fiveDollar', 'twoDollar', 'oneDollar', 'quarter', 'dime', 'nickle', 'penny'];
  let values = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  let changeObj = {};

  for (let i = 0; i < values.length; i++) {
    console.log("value", values[i])
  }
  // return changeObj;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// Expected Output
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
