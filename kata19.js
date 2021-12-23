// a queen can attack pieces which are on the same row, column, or diagonal.

// Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
// Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.

let whiteQueen = [0, 5]
let blackQueen = [5, 0]

// will return game board containing location of 2 queens
const generateBoard = (wQueen, bQueen) => {
  let gameBoard = []

  for (let i = 0; i < 8; i++) {
    // create 8 length empty array to start
    gameBoard.push([])
  }
  // console.log("gameboard", gameBoard)

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      // console.log("wq", wQueen[0])
      // console.log("wq1", wQueen[1])
      if (
        (i === wQueen[0] && j === wQueen[1]) ||
        (i === bQueen[0] && j === bQueen[1])
      ) {
        // if the inputted coordinates match the index then print a 1 for an occupied space
        gameBoard[i].push(1)
      } else {
        // if not print a 0 for an unoccupied space
        gameBoard[i].push(0)
      }
    }
  }
  return gameBoard
}

// const queenThreat = () => {
// // will return true or false
// }

let generatedBoard = generateBoard(whiteQueen, blackQueen)
console.log(generatedBoard)
// console.log(queenThreat(generatedBoard));

// Expected Output
// [
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// true

// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));

// Expected Output
// [
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// false
