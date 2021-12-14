const squareCode = function(message) {
  let noSpace = message.split(' ').join('');
  // let noSpace = message.replace(/ /g, '');   // <-the faster method?
  // get the rounded number of the squareroot for the length of each phrase
  blocks = Math.ceil(Math.sqrt(noSpace.length));
  console.log("---->", blocks);
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

// Expected Output
// clu hlt io  
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau