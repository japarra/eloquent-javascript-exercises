/**
 * Write a program that creates a string that represents an 8×8 grid, using 
 * newline characters to separate lines. At each position of the grid there is 
 * either a space or a “#” character. The characters should form a chess board.
 *
 * Passing this string to console.log should show something like this:
 *
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 * 
 * When you have a program that generates this pattern, define a variable 
 * size = 8 and change the program so that it works for any size, outputting a 
 * grid of the given width and height.
 */

// Create a string to hold the grid
var grid = '';

// Create the x & y coordinates
var x = 8;
var y = 8;

// Loop through vertical space
for (var i = 1; i <= y; i++) {
  
  // Loop through horizontal space
  for (var j = 1; j <= x; j++) {
    
    // If their "mod 2" result is the same
    if (i % 2 === j % 2) {
      
      // Insert a space
      grid += " ";
      
    } else {
      
      // insert a "#"
      grid += "#";
      
    }
  }

  // Prevent inserting a newline for the last iteration
  if (i !== y) {
    
    // Insert newline 
    grid += "\n";
  }
}
  
// log grid string to console
console.log(grid);