// Question no 6 (part : a)

let num = [1, 2, 3, 4, 5];
console.log(num);

// Question no 6 (part : b)

const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbs.forEach(function (numb) {
  console.log(numb);
});

// Question no 6 (part : c)

const Sqnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredNumbers = Sqnumbers.map((number) => number * number);

console.log(squaredNumbers);

// Question no 6 (part : d)

const nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const evenNumbers = nums.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

// Question no 6 (part : e)

const numbr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

// Question no 6 (part : f)

// map :

// creates a new array by applying a function to each element of the original array and collecting the results.

// forEach :

//  iterates over the elements of an array and allows you to perform actions (like logging or modifying elements) but does not create a new array and does not return any values.