/**
 * The previous chapter introduced the standard function Math.min that returns 
 * its smallest argument. We can do that ourselves now. Write a function min 
 * that takes two arguments and returns their minimum.
 */
 
// Define function min that takes two numbers as arguments
function min(num1, num2) {
    
  // If first number is less than second number
  if (num1 < num2) {
    
    // return first number
    return num1;
  }
  
  // else, return second number
  return num2;
  
}

// Call function
console.log(min(-8, 4));