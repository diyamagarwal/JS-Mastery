//Day 11: Execution Context & Scope

/*
The topics today— "Execution Context and Scope" —are fundamental to understanding concepts like closures, hoisting, and the "this" keyword, which are essential for deep mastery.

1. Execution Context
Think of the Execution Context (EC) as the environment where a piece of JavaScript code is evaluated and executed. It's like a temporary workspace created by the JavaScript engine (V8 in Chrome, etc.) to run your code.
Every time a function is called, a new Execution Context is created.

There are two main types of EC:
-- Global Execution Context (GEC): The base, default EC. It is created when your script first starts and manages all code that is not inside a function.
-- Function Execution Context (FEC): Created every time a function is called. It manages the function's own code and lifecycle.

Each EC has two phases:
-- Creation Phase: The JS engine scans the code, sets up the Scope Chain, and allocates memory for variables and functions (Hoisting).
-- Execution Phase: The JS engine runs the code line-by-line, assigning final values to variables and executing function calls.

2. Scope
Scope determines the accessibility of variables, functions, and objects in some particular part of your code during runtime. It answers the question: "Can I access this variable here?"

There are three main types of scope in modern JS:
-- Global Scope: Variables declared outside any function or block. They can be accessed from anywhere in the program.
-- Function/Local Scope (Prior to ES6): Variables declared inside a function are only accessible within that function.
-- Block Scope (ES6: let and const): Variables declared with let or const inside a {} block (like an if statement or a for loop) are only accessible within that block.

💡 The Lexical Environment
The term Lexical Environment is often used interchangeably with Scope, but it's more specific. It's the internal structure that defines identifiers (variables/functions) within an execution context.
The "lexical" part means the scope is defined where the variable is written/defined (at compile time/parse time), not where it is called.
Why this matters: When you try to access a variable, JS looks in the current EC's Lexical Environment. If it doesn't find it, it moves up the Scope Chain to the next outer (parent) EC until it reaches the Global EC.
*/

const a = 10; 

function outerFunction() {
    const b = 20;

    function innerFunction() {
        const c = 30;
        console.log(a); // Output 1
        console.log(b); // Output 2
        console.log(c); // Output 3
    }
    
    // Output b here
    console.log(b); // Output 4
    innerFunction();
}

outerFunction();