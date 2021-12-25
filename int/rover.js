// A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.
// A rover’s position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points (North, South, East, or West). The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.
// In order to control a rover, NASA sends a simple string of letters. The possible letters are ‘L’, ‘R’ and ‘M’. ‘L’ and ‘R’ makes the rover spin 90 degrees left or right respectively, without moving from its current spot. ‘M’ means move forward one grid point, and maintain the same heading.
// Assume that the square directly North from (x, y) is (x, y+1). Assume that the square directly East from (x, y) is (x+1, y).
// INPUT: The rover begins at position 0, 0 facing North, and accepts either L R or M as an input. Based on this input, a new set of coordinates is returned, as well as the current direction the rover is facing.
// OUTPUT: The output for each rover should be its final co-ordinates and the direction.
// i.e. The rover’s current coordinates are (0, 4) and it is facing S

// 1. Design objects or functions to describe the Rover.
const rover = {
  x: 0,
  y: 0,
  direction: 'N',
}

// 2. Add functions/methods to support the command to move, and the command to change direction.
const roverPosition = (command) => {
  // Add error handling
  if (command !== 'M' && command !== 'L' && command !== 'R') {
    return 'An invalid command has been entered!'
  }
  if (command === 'M') {
    if (rover.direction === 'N') {
      rover.y = rover.y + 1
    } else if (rover.direction === 'S') {
      rover.y = rover.y - 1
    } else if (rover.direction === 'E') {
      rover.x = rover.x + 1
    } else if (rover.direction === 'W') {
      rover.x = rover.x - 1
    }
  }
  if (command === 'L') {
    if (rover.direction === 'N') {
      rover.direction = 'W'
    } else if (rover.direction === 'S') {
      rover.direction = 'E'
    } else if (rover.direction === 'E') {
      rover.direction = 'N'
    } else if (rover.direction === 'W') {
      rover.direction = 'S'
    }
  }
  if (command === 'R') {
    if (rover.direction === 'N') {
      rover.direction = 'E'
    } else if (rover.direction === 'S') {
      rover.direction = 'W'
    } else if (rover.direction === 'E') {
      rover.direction = 'S'
    } else if (rover.direction === 'W') {
      rover.direction = 'N'
    }
  }
  // 3. Return the result, formatted as per the above
  let coordinates = `(${rover.x}, ${rover.y})`
  return `The rover's current coordinates are ${coordinates} and it is facing ${rover.direction}`
}

console.log(roverPosition('M'))
console.log(roverPosition('M'))
console.log(roverPosition('M'))
console.log(roverPosition('M'))
console.log(roverPosition('Right'))
console.log(roverPosition('L'))
console.log(roverPosition('L'))
console.log(roverPosition('Left'))

// The above state could be achieved by the following sequence:
// Input: M
// Output: The rover's current coordinates are (0, 1) and it is facing N
// Input: M
// Output: The rover's current coordinates are (0, 2) and it is facing N
// Input: M
// Output: The rover's current coordinates are (0, 3) and it is facing N
// Input: M
// Output: The rover's current coordinates are (0, 4) and it is facing N
// Input: L
// Output: The rover's current coordinates are (0, 4) and it is facing W
// Input: L
// Output: The rover's current coordinates are (0, 4) and it is facing S
