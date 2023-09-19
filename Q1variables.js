// Question no 1  ( part : a)

// Using var :

var favoriteCricketer = "Babar Azam";
console.log(favoriteCricketer);

// Using let :

let favoriteBatsman = "Virat Kohli";
console.log(favoriteBatsman);

// Using Const :

const powerHitter = "AB de Villiers";
console.log(powerHitter);

// Question no 1 (Part : b)

// Updated var variable :

var favoriteCricketerVar = "Babar Azam";
favoriteCricketerVar = "Virat Kohli";
console.log(favoriteCricketerVar);

// Updated let variable :

let favoriteBatsmanLet = "Hashim Amla";
favoriteBatsmanLet = "Kane Williamson";
console.log(favoriteBatsmanLet);

// Updated const variable :

const favoritePowerHitter = "Ab de Villiers";
favoritePowerHitterConst = "Shahid Afridi";
console.log(favoritePowerHitter);

// Explanation :

// 1) When you update the var variable, it will allow the change without any issues. The var keyword allows for variable reassignment.

// 2) When you update the let variable, it also allows the change because let variables are mutable, and you can reassign them.

// 3) When you attempt to update the const variable, you will encounter an error. This is because variables declared with const are constants, and their values cannot be changed once they are assigned. Trying to reassign a const variable will result in a "TypeError."

// Using Function :

// Question no 1 (Part : c)

function myFunction() {
  var PlayerOneVar = "This is a dangerous player";
  let PlayerTwoLet = "This is a brilliant player";
  const PlayerThreeConst = "This is a good player";
}

myFunction();

console.log(PlayerOneVar);
console.log(PlayerTwoLet);
console.log(PlayerThreeConst);

// Explanation :

// 1) variableVar declared with var is function-scoped, so it's available throughout the function in which it is defined but not outside of it. Attempting to access it outside the function results in an error.

// 2) variableLet declared with let is also function-scoped, so it behaves similarly to var. It's accessible within the function but not outside, and trying to access it outside the function results in an error.

// 3) variableConst declared with const is also function-scoped, so it follows the same rules. It's available within the function but not outside, and trying to access it outside the function will result in an error.
