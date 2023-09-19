// Question no 5 (part : a)

const TenFruits = [
  "apple",
  "banana",
  "orange",
  "strawberry",
  "grape",
  "kiwi",
  "watermelon",
  "mango",
  "pineapple",
  "blueberry",
];

for (const TenFruit of TenFruits) {
  console.log(TenFruit);
}

// Question no 5 (part : b)

let student = {
  name: "Aershuman",
  age: 19,
  grade: "A-One",
};

for (let key in student) {
  if (student.hasOwnProperty(key)) {
    console.log(key + " : " + student[key]);
  }
}
