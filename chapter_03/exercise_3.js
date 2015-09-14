/**
 * You can get the Nth character, or letter, from a string by writing 
 * "string".charAt(N), similar to how you get its length with "s".length. The 
 * returned value will be a string containing only one character (for example, 
 * "b"). The first character has position zero, which causes the last one to be 
 * found at position string.length - 1. In other words, a two-character string 
 * has length 2, and its characters have positions 0 and 1.
 *
 * Write a function countBs that takes a string as its only argument and returns 
 * a number that indicates how many uppercase “B” characters are in the string.
 *
 * Next, write a function called countChar that behaves like countBs, except it 
 * takes a second argument that indicates the character that is to be counted 
 * (rather than counting only uppercase “B” characters). Rewrite countBs to make
 * use of this new function.
 */

/**
 * countChar() returns the number of a particular character that exists within
 * the string passed in the s parameter.
 * 
 * @param {String} s
 * @param {String} char
 * @return {Number} count
 */
function countChar(s, char) {
  var count = 0;
  
  // Loop through the characters in the string
  for (var i = 0; i < s.length; i++) {
    
    // If the indexed character equals the char parameter
    if (s.charAt(i) === char) {
      count++;
    }
  }
  
  return count;
}

/**
 * countBs() returns the number of uppercase Bs based on the string passed in
 * the s parameter.
 * 
 * REFACTORED: calls countChar() within body to handle computation.
 * 
 * @param {String} s
 * @return {Number} countChar(s, "B")
 */
function countBs(s) {
  // Call countChar() to handle computation
  return countChar(s, "B");
}
  
// Call function
console.log(countBs("BASDFBBASDFB"));
console.log(countChar("kakkerlak", "k"));