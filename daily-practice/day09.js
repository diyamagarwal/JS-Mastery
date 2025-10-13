//Day 9: Asynchronous JavaScript (Part 1) - Callbacks and Promises

//1. Callbacks: The Old Way
/*The traditional way to handle the result of an 
asynchronous operation is with callbacks. A callback 
is just a function that you pass as an argument to 
another function, with the expectation that the outer 
function will call it back later when the result is ready.*/

// A simple simulation of fetching data (takes 2 seconds)
function fetchData(callback) {
  setTimeout(() => {
    const data = "User data fetched!";
    callback(data); // The callback function is called LATER
  }, 2000); // 2000ms delay
}

// Execution: This logs "User data fetched!" after 2 seconds.
fetchData((result) => {
  console.log(result); 
});
console.log("This logs IMMEDIATELY, NOT waiting for fetchData.");

//The Problem: Callback Hell
/*step1((result1) => {
  step2(result1, (result2) => {
    step3(result2, (result3) => {
      // Very deep indentation... difficult to read and maintain!
      step4(result3, (finalResult) => {
        console.log(finalResult);
      });
    });
  });
});*/
//This is where Promises come in to save the day!

//✅✅✅✅✅
//The crucial concept that:
//Synchronous code runs first.
// //Asynchronous code runs based on its designated time/priority, after the main thread is clear.
//✅✅✅✅✅

//2. Promises: The Modern Solution
/*A Promise in JavaScript is an object that represents the 
eventual completion (or failure) of an asynchronous operation 
and its resulting value. Think of a Promise as a receipt or 
a guarantee from a restaurant. */

//Promises solve Callback Hell by allowing you to chain asynchronous operations using the .then() method.

// Instead of nested functions (Callback Hell):
step1()
  .then(result1 => step2(result1)) // Returns a new Promise for step2
  .then(result2 => step3(result2)) // Returns a new Promise for step3
  .then(finalResult => {
    console.log("Success:", finalResult);
  })
  .catch(error => {
    console.error("An error occurred at any step:", error);
  });

//  3. Async/Await: The Syntactic Sugar
/*While Promises with .then() and .catch() solved Callback Hell, 
the code could still feel a bit separated from the normal, synchronous flow. 
async and await were introduced to make asynchronous code look and behave 
almost exactly like synchronous code, making it much easier to read and debug.*/