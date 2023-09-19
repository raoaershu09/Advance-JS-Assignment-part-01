// Question no 4 (part : a)

let fruits = ["apple", "banana", "cherry", "date", "fig"];
console.log(fruits);

// Question no 4 (part : b)

let fruit = ["apple", "banana", "cherry"];
fruit.push("grape");
console.log(fruit);

// Question no 4 (part : c)

let fruity = ["apple", "banana", "cherry", "date"];
fruity.pop("date");
console.log(fruity);

// Question no 4 (part : d)

const number = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const evenNumber = number.filter((number) => number % 2 === 0);

console.log(evenNumber);

// Question no 4 (part : e)

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squareddigits = digits.map((digits) => digits * digits);

console.log(squareddigits);
