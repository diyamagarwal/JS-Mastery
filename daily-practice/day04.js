//Day 4 - Functions in JavaScript

//A function is a block of reusable code.
//Helps avoid repeating code.
//You give it input (parameters), it can return output (value).

//function declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!

//function expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // 8

//Arrow function
const multiply = (a, b) => a*b;
console.log(multiply(4,5)); // 20

//parameters and default values
function sayHello(name = "Guest") {
    console.log(`Hello, ${name}`);
}
sayHello();        // Hello, Guest
sayHello("Bob");   // Hello, Bob

//return vs console.log
//return gives value back so you can use it later.
//console.log only prints, doesn’t return.
function square(n) {
    return n * n;
}
let result = square(6);
console.log(result); // 36

//Function Scope - local
//Variables inside a function are local (not accessible outside).
function testScope() {
    let x = 10;
    console.log(x); // works
}
//console.log(x); // Error: x is not defined

//Functions calling other functions
function add2(a, b) {
    return a + b;
}
function double(n) {
    return n * 2;
}
console.log(double(add2(3, 4))); // 14

