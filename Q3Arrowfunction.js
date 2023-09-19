// Question no : 3 (Part : a)

const calculateArea = (length, width) => {
  return length * width;
};

// Example usage:
const length = 7;
const width = 8;
const area = calculateArea(length, width);
console.log(`The area of the rectangle is: ${area}`);

// Question no : 3 (Part : b)

function findMax(numbers) {
  if (numbers.length === 0) {
    // Handle the case where the array is empty
    return undefined; // You can choose to return an appropriate value or throw an error here.
  }

  let max = numbers[0]; // Assume the first number is the maximum

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      // If we find a number greater than the current max, update max
      max = numbers[i];
    }
  }

  return max;
}

// Example usage:
const numbers = [10, 5, 20, 8, 15, 30, 4];
const maxNumber = findMax(numbers);
console.log(`The largest number in the array is: ${maxNumber}`);

// Question no : 3 (Part : c)

const sayHello = (name) => `iam Rao Aershuman...${name}?`;
const name = " and what is your name ";
console.log(sayHello(name));
