//Day 5 – Arrays & Objects

//Arrays are ordered collections of values.
// Creating arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];

// Accessing elements
console.log(fruits[0]); // apple
console.log(fruits[2]); // orange

// Updating
fruits[1] = "grape";
console.log(fruits); // ["apple", "grape", "orange"]

// Common methods
fruits.push("mango");   // add at end
console.log(fruits); 
fruits.pop();           // remove last
console.log(fruits); 
fruits.unshift("kiwi"); // add at beginning
console.log(fruits); 
fruits.shift();         // remove first
console.log(fruits); 

//Looping through Arrays
let colors = ["red", "green", "blue"];

// for loop
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
// for...of loop
for (let color of colors) {
  console.log(color);
}
// forEach
colors.forEach(c => console.log(c));

//Objects
//Objects are key-value pairs
let person = {
  name: "John",
  age: 25,
  isStudent: true
};

// Accessing
console.log(person.name);   // John
console.log(person["age"]); // 25

// Updating
person.age = 26;
person.city = "New York"; // new property
console.log(person);

//Nested Objects & Arrays
let student = {
  name: "Alice",
  grades: [90, 85, 88],
  address: {
    city: "Boston",
    zip: "02115"
  }
};

console.log(student.grades[1]);    // 85
console.log(student.address.city); // Boston

//Array of Objects
let users = [
  { id: 1, name: "Sam" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Chris" }
];

// Loop through
for (let user of users) {
  console.log(user.id, user.name);
}