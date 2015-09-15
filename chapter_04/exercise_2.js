/**
 * Arrays have a method reverse, which changes the array by inverting the order 
 * in which its elements appear. For this exercise, write two functions, 
 * reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
 * as argument and produces a new array that has the same elements in the 
 * inverse order. The second, reverseArrayInPlace, does what the reverse method 
 * does: it modifies the array given as argument in order to reverse its 
 * elements. Neither may use the standard reverse method.
 */
 
/**
 * reverseArray() takes an array and returns an array in the reverse order of
 * the passed array.
 */
function reverseArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.unshift(arr[i]);
  }
  
  return result;
}

/**
 * reverseArrayInPlace() takes an array and reverses the order of the array
 * that is referenced by the passed array argument
 */
function reverseArrayInPlace(arr) {
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    var temp = arr[i];
    arr[i] = arr[((arr.length - 1) - i)];
    arr[((arr.length - 1) - i)] = temp;
  }
}

// reverseArray test
var array1 = ["A", "B", "C"];
console.log(reverseArray(array1));
console.log(array1);

// reverseArrayInPlace test
var array2 = ["A", "B", "C", "D", "E"];
console.log(array2);
reverseArrayInPlace(array2);
console.log(array2);