//Day 2 – Operators & Conditionals

//Arithmetic Operators
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1 (remainder)
console.log(a ** b); // 1000 (10^3)

//Assignment Operators
let x = 5;
x += 3; // same as x = x + 3
console.log(x); // 8

//Comparison Operators
console.log(5 == "5");  // true (loose equality, only values compared)
console.log(5 === "5"); // false (strict equality, type+value compared)
console.log(5 != "5");  // false
console.log(5 !== "5"); // true
console.log(10 > 5);    // true
console.log(10 <= 5);   // false

//Logical Operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false


//Conditionals

//if, else if, else
let age = 18;
if (age < 13) {
  console.log("You are a child");
} else if (age < 20) {
  console.log("You are a teenager");
} else {
  console.log("You are an adult");
}
//Ternary Operator
let number = 5;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result); // Odd

//Practice Problems (Day 1)
let num = 5;
if(num<0){
    console.log("Negative")
}else if (num == 0 ){
    console.log("Zero")
} else{
    console.log("Positive")
}

let voterAge = 21;
if (voterAge >= 18){
    console.log("You are eligible to vote")
} else {
    console.log("You need to be 18 to vote!")
}

let score = 95;
if (score >= 90){
    console.log("Grade A")
} else if (score >= 70 && score <= 89){
    console.log("Grade B")
} else if (score >= 50 && score <= 69){
    console.log(" Grade C")
}else {
    console.log("Fail")
}

