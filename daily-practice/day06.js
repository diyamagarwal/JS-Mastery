//Day 6 – Higher Order Array Methods (map, filter, reduce)

// ---------------- MAP ----------------
// map creates a NEW array by applying a function to each element
let numbers = [1, 2, 3, 4, 5];

// Example: Square each number
let squared = numbers.map(num => num * num);
console.log("Squared:", squared); // [1, 4, 9, 16, 25]

// Example: Convert to strings
let stringNums = numbers.map(num => `Number: ${num}`);
console.log("As strings:", stringNums);
// ["Number: 1", "Number: 2", ...]

// ---------------- FILTER ----------------
// filter creates a NEW array containing only elements that match a condition

// Example: Keep only even numbers
let evens = numbers.filter(num => num % 2 === 0);
console.log("Evens:", evens); // [2, 4]

// Example: Keep numbers greater than 3
let greaterThanThree = numbers.filter(num => num > 3);
console.log("Greater than 3:", greaterThanThree); // [4, 5]

// ---------------- REDUCE ----------------
// reduce reduces an array to a SINGLE value
// It takes (accumulator, currentValue) => newAccumulator

// Example: Sum of numbers
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // 15

// Example: Product of numbers
let product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log("Product:", product); // 120

// Example: Find max
let max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);
console.log("Max:", max); // 5

// ---------------- PRACTICE PROBLEMS ----------------

// 1. Given an array of ages, return only adults (age >= 18)
let ages = [12, 17, 18, 20, 15, 30];
let adults = ages.filter(age => age >= 18);
console.log("Adults:", adults); // [18, 20, 30]

// 2. Double each number in an array using map
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// 3. Find the maximum number in an array using reduce
let moreNumbers = [10, 50, 3, 99, 42];
let maxNum = moreNumbers.reduce((acc, curr) => (curr > acc ? curr : acc), moreNumbers[0]);
console.log("Max number:", maxNum); // 99
