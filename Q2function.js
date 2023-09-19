// Question no 2 :

function sumOfEvenNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }

  return sum;
}

// Test the function with an example array
const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = sumOfEvenNumbers(exampleArray);
console.log("Sum of even numbers:", result);
