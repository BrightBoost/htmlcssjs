# Asynchronous Programming in JavaScript

## 1. Introduction to Asynchronous Programming 

### Concepts Covered:
- **Synchronous vs Asynchronous Code**:
  - **Synchronous Code**: Code is executed line by line. Each line waits for the previous one to complete.
  - **Asynchronous Code**: Code does not wait. Multiple operations can happen simultaneously, with results handled when ready.

- **Blocking vs Non-blocking Operations**:
  - **Blocking**: Operations that block the execution of subsequent code until they complete.
  - **Non-blocking**: Operations that allow subsequent code to execute without waiting for the current operation to complete.

- **Event Loop and Callbacks**:
  - **Event Loop**: A mechanism that handles asynchronous operations in JavaScript, allowing non-blocking code execution.
  - **Callbacks**: Functions passed as arguments to other functions, which are executed once the asynchronous operation completes.

### Demo:
- Simple synchronous vs asynchronous examples using `setTimeout`.

```javascript
// Synchronous Example
console.log('Start');
console.log('End');

// Asynchronous Example
console.log('Start');
setTimeout(() => {
    console.log('Async operation complete');
}, 1000);
console.log('End');
```

## 2. Callbacks 

### Concepts Covered:
- **Definition and Use of Callbacks**:
  - A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of action.

- **Common Issues (Callback Hell)**:
  - Nesting multiple callbacks can lead to hard-to-read and maintain code, known as "callback hell".

### Demo:
- Implementing a sequence of async operations using callbacks.

```javascript
function firstOperation(callback) {
    setTimeout(() => {
        console.log('First Operation Complete');
        callback();
    }, 1000);
}

function secondOperation(callback) {
    setTimeout(() => {
        console.log('Second Operation Complete');
        callback();
    }, 1000);
}

function thirdOperation() {
    setTimeout(() => {
        console.log('Third Operation Complete');
    }, 1000);
}

firstOperation(() => {
    secondOperation(() => {
        thirdOperation();
    });
});
```

## 3. Promises 

### Concepts Covered:
- **Introduction to Promises**:
  - A Promise represents a value that may be available now, or in the future, or never.

- **States of a Promise**:
  - **Pending**: Initial state, neither fulfilled nor rejected.
  - **Fulfilled**: Operation completed successfully.
  - **Rejected**: Operation failed.

- **`.then()`, `.catch()`, `.finally()`**:
  - **`.then()`**: Handles successful completion.
  - **`.catch()`**: Handles errors.
  - **`.finally()`**: Executes regardless of the outcome.

### Demo:
- Refactoring callback code to use Promises.

```javascript
function firstOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('First Operation Complete');
            resolve();
        }, 1000);
    });
}

function secondOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Second Operation Complete');
            resolve();
        }, 1000);
    });
}

function thirdOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Third Operation Complete');
            resolve();
        }, 1000);
    });
}

firstOperation()
    .then(secondOperation)
    .then(thirdOperation)
    .catch((error) => {
        console.error('Error:', error);
    });
```

## 4. Async/Await 

### Concepts Covered:
- **Syntactic Sugar over Promises**:
  - `async`/`await` makes asynchronous code look and behave like synchronous code, while still being asynchronous.

- **Writing Cleaner Async Code with `async` and `await`**:
  - Use `async` to declare a function that returns a Promise.
  - Use `await` to pause the execution of an `async` function and wait for the Promise to resolve.

- **Error Handling with `try`/`catch`**:
  - Handle errors using `try`/`catch` blocks inside `async` functions.

### Demo:
- Refactoring Promises code to use `async`/`await`.

```javascript
async function performOperations() {
    try {
        await firstOperation();
        await secondOperation();
        await thirdOperation();
    } catch (error) {
        console.error('Error:', error);
    }
}

performOperations();

async function firstOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('First Operation Complete');
            resolve();
        }, 1000);
    });
}

async function secondOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Second Operation Complete');
            resolve();
        }, 1000);
    });
}

async function thirdOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Third Operation Complete');
            resolve();
        }, 1000);
    });
}
```
