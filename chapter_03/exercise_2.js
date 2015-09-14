/**
 * We’ve seen that % (the remainder operator) can be used to test whether a 
 * number is even or odd by using % 2 to check whether it’s divisible by two. 
 * Here’s another way to define whether a positive whole number is even or odd:
 *
 * Zero is even.
 *
 * One is odd.
 *
 * For any other number N, its evenness is the same as N - 2.
 *
 * Define a recursive function isEven corresponding to this description. The 
 * function should accept a number parameter and return a Boolean.
 *
 * Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way 
 * to fix this?
 */
 
// Define function isEven that takes a number as as argument
function isEven(n) {

  // Base Case: If n === 0
  if (n === 0) {
    // Return true
    return true;
  }
  
  // Base Case: If n === 1
  if (n === 1) {
    // Return false;
    return false;
  }
  
  // Base Case: if n < 0
  if (n < 0) {
     
    // Recurse with the absolute value of n as an argument
    return isEven(Math.abs(n)); 
  }

  // Else, recurse with n - 2 as argument
  return isEven((n - 2));
}

// Call function
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));