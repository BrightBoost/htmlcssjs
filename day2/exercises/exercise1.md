# Asynchronous Programming in JavaScript

## 1. Introduction to Asynchronous Programming

### Simple Exercise:
Write two console logs, one that says "Start" and another that says "End", with a `setTimeout` in between them that logs "Async operation complete" after 1 second. Observe the order of the logs.


### A Bit More Challenging:
Create a function `asyncOperation` that takes a string and a delay time, then logs the string after the delay using `setTimeout`. Call this function three times with different strings and delay times.


### Challenging / Bonus:
Modify the `asyncOperation` function to take a callback as a second parameter and call it after logging the message. Then, chain three calls to `asyncOperation` so that the second call happens after the first one completes, and the third call after the second.



## 2. Callbacks

### Simple Exercise:
Create a function `printMessage` that takes a message and a callback, logs the message, and then executes the callback.

### A Bit More Challenging:
Write two functions `firstOperation` and `secondOperation`. Each should take a callback and log a message after a 1-second delay. Use these functions to log "First Operation" and "Second Operation" in sequence.


### Challenging / Bonus:
Extend the previous example by adding a third function `thirdOperation` that also takes a callback and logs a message after a delay. Chain these three operations in sequence.


## 3. Promises

### Simple Exercise:
Convert a function that logs a message after a 1-second delay into a function that returns a Promise.


### A Bit More Challenging:
Create two functions `firstOperation` and `secondOperation`, both returning Promises that resolve after a delay. Chain these functions using `.then()`.


### Challenging / Bonus:
Add error handling to the previous example by rejecting one of the Promises conditionally and using `.catch()` to handle the error.


## BONUS 4. Async/Await

### Simple Exercise:
Rewrite one of the previous Promise-based function using `async`/`await`.

### A Bit More Challenging:
Convert the previous chain of Promises into `async`/`await`.

### Challenging / Bonus:
Add error handling to the `async`/`await` code by using `try`/`catch`.


