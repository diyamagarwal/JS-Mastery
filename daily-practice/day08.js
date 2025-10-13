//Day 8: Modern JavaScript (ES6+) Features

// Destructuring Assignment: Quickly unpacking values from arrays or properties from objects into distinct variables.
// Spread (…) and Rest (…) Operators: Understanding the context-dependent nature of the three dots.
//Template Literals (Backticks): Enhancing string manipulation and variable interpolation.

//1. Array Destructuring:
const colors = ['red', 'green', 'blue'];
const [primary, secondary, third] = colors;
// primary is 'red', secondary is 'green'
//Object Destructuring: We often use this to pull specific properties from a configuration object.

const user1 = { name: 'Alex', age: 30, city: 'London' };
const { name, age } = user1;
// name is 'Alex', age is 30
// You can also rename: const { city: userCity } = user;
//Why it's important: It simplifies accessing properties and makes code less repetitive. Imagine writing const name = user.name; const age = user.age; for a dozen properties!

//2. Spread (…) and Rest (…) Operators
//They both use the same three-dot syntax, but their purpose depends on where they are used:

//Spread Operator (when calling a function or creating an array/object): It "spreads" the elements of an iterable (like an array or string) into another array, object, or function call. It's great for shallow copies and merging.

// Merging arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2, 5]; // [1, 2, 3, 4, 5]
// Copying an object (Shallow Copy!)
const original = { a: 1 };
const copy = { ...original, b: 2 }; // { a: 1, b: 2 }

//Rest Operator (when defining a function or in destructuring): It collects all remaining elements/properties into a new array or object.

// Rest in a function signature
function sumAll(first, second, ...restOfNumbers) {
  console.log(restOfNumbers); // The remaining arguments as an array
}
sumAll(1, 2, 3, 4, 5); // restOfNumbers will be [3, 4, 5]
//Fun Fact: The Spread operator is the digital equivalent of pouring out all the contents of a box! The Rest operator is like putting all the leftovers back into a new box.

const original2 = {
  name: 'Project Alpha', // Primitive (Copied by value)
  details: { 
    version: 1.0, // Object (Copied by reference)
    owner: 'Dev Team'
  }
};

// Use spread to create a 'copy'
const shallowCopy = { ...original2 }; //top level separate, nested is shared
const deepCopy = { ...original2, details: { ...original2.details } } //All separate, any change in either doesnt affect the other
const somecopy = original2 //All shared, any change anywhere will reflect in other

// --- Now, let's change the NESTED object in the copy ---
shallowCopy.details.version = 2.0; 
deepCopy.details.version = 5.0;

console.log(original2.details.version); 
// Output: 2.0 
console.log(shallowCopy);
console.log(deepCopy);
console.log("somecopy:", somecopy);

//3. Template Literals
//You've probably been using simple quotes or double quotes for strings. Template literals use backticks ( ` ` ) and offer two major advantages:

//String Interpolation: Easily embed variables/expressions inside a string using ${variable}.
//Multi-line Strings: Write strings that span multiple lines without needing the \n newline character.

const user2 = 'Coach';
const mood = 'excited';

// Interpolation
const greeting = `Hello, ${user2}! I'm ${mood} to help you.`; 
// "Hello, Coach! I'm excited to help you."

// Multi-line
const poem = `
  The JS code is clean,
  The learning is fun,
  Day 8 has begun.
`;
//Why it's important: They make generating dynamic HTML, error messages, and complex strings far cleaner than using string concatenation (+).


// Practice for Day 8
//Let's do a quick learning activity to make sure these concepts stick.
//I've got a dataset for you. Use what you learned today to solve the following mini-challenge:
//Learning Activity: Data Transformation Challenge
//You are given a list of employees. Your task is to write a function getManagersDetails that takes the employees array and does the following using only ES6+ features we discussed today:

//1. Filter out only the employees whose role is 'Manager' (You already know filter from Day 6!).
//2. Destructure the name and email from each manager object.
//3. Use the Spread Operator to combine the two manager objects into a final managers array.

const employees = [
  { id: 1, name: 'Alice', role: 'Developer', email: 'alice@corp.com' },
  { id: 2, name: 'Bob', role: 'Manager', email: 'bob@corp.com' },
  { id: 3, name: 'Charlie', role: 'Developer', email: 'charlie@corp.com' },
  { id: 4, name: 'David', role: 'Manager', email: 'david@corp.com' }
];

function getManagersDetails(arr) {
  const managers = arr.filter(emp => emp.role === 'Manager')
                       .map(manager => {
                         const { name, email } = manager;
                         return { name, email }
                       });
  return managers;
}

console.log(getManagersDetails(employees));

// Expected Output (The final array should contain objects with ONLY 'name' and 'email'):
/*
[
  { name: 'Bob', email: 'bob@corp.com' },
  { name: 'David', email: 'david@corp.com' }
]
*/