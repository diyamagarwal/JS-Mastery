//Day 1 – Variables & Data Types

//VARIABLES - Var, Let, Const
var old = "I am Old"; //Old way - function scoped ; avoid using
let count = 1; //block scoped - use whn value can change
const PI= 3.14; //Constant , cannot reassign

let x=10;
x=20; //allowed

const y=10;
// y = 20; //Not allowed - error out --- TypeError: Assignment to constant variable.

//DATA TYPES
let age = 22;                 // number
let name = "Diya M Agarwal";  // string
let isLoggedIn = true;        // boolean
let salary = null;            // null
let address;                  // undefined
let bigNum = 12345678901234567890n; // bigint
//typeof operator
console.log(typeof 42);       // "number"
console.log(typeof "hello");  // "string"
console.log(typeof true);     // "boolean"
console.log(typeof null);     // "object" (weird JS!)
console.log(typeof undefined);// "undefined"
console.log(typeof bigNum);   // bigint
//Strings
let user = "Diya Agarwal";
console.log(`Hello, ${user}!`);

//Practice Problems (Day 1)
let firstName= "Diya";
let lastName= "Agarwal";
let agee="22";
console.log(`Hi, I am ${firstName} ${lastName} and I am ${agee} years old.`)

let a;
console.log(typeof a) //undefined