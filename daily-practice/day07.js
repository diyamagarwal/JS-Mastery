//Day 07 – reduce() Deep Dive

// array.reduce((acc, curr) => {
//   logic
//   return acc;
// }, initialValue);


//acc → accumulator (what we are “collecting”)
//curr → current item in the array
//initialValue → starting value of acc

//Sum of numbers
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

//Count occurrences
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);
// { apple: 3, banana: 2, orange: 1 }

//Flatten nested arrays
let nested = [[1, 2], [3, 4], [5, 6]];
let flat = nested.reduce((acc, curr) => {
  return [...acc, ...curr]; // use spread operator
}, []);
console.log(flat); // [1, 2, 3, 4, 5, 6]

//Grouping by property
let people = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 }
];

let grouped = people.reduce((acc, person) => {
  let age = person.age;
  if (!acc[age]) {
    acc[age] = [];
  }
  acc[age].push(person.name);
  return acc;
}, {});

console.log(grouped);
// { 20: ["Alice", "Bob"], 30: ["Charlie"] }

//Maximum number
let nums = [10, 45, 2, 99, 23];
let max = nums.reduce((acc, curr) => (curr > acc ? curr : acc), nums[0]);
console.log(max); // 99

/* 
reduce() is very flexible: it can sum, count, group, flatten, or find max/min.
Like a Swiss Army Knife of array methods.
Inside reduce, you often use:
  Math (+, >, etc.)
  Object updates (acc[key] = ...)
  The spread operator (...)
*/