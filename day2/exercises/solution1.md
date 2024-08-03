# Asynchronous Programming in JavaScript

## 1. Introduction to Asynchronous Programming

### Simple Exercise:
Write two console logs, one that says "Start" and another that says "End", with a `setTimeout` in between them that logs "Async operation complete" after 1 second. Observe the order of the logs.

```javascript
console.log('Start');
setTimeout(() => {
    console.log('Async operation complete');
}, 1000);
console.log('End');
```

### A Bit More Challenging:
Create a function `asyncOperation` that takes a string and a delay time, then logs the string after the delay using `setTimeout`. Call this function three times with different strings and delay times.

```javascript
function asyncOperation(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

asyncOperation('First operation', 1000);
asyncOperation('Second operation', 500);
asyncOperation('Third operation', 1500);
```

### Challenging / Bonus:
Modify the `asyncOperation` function to take a callback as a second parameter and call it after logging the message. Then, chain three calls to `asyncOperation` so that the second call happens after the first one completes, and the third call after the second.

```javascript
function asyncOperation(message, delay, callback) {
    setTimeout(() => {
        console.log(message);
        callback();
    }, delay);
}

asyncOperation('First operation', 1000, () => {
    asyncOperation('Second operation', 500, () => {
        asyncOperation('Third operation', 1500, () => {
            console.log('All operations complete');
        });
    });
});
```

## 2. Callbacks

### Simple Exercise:
Create a function `printMessage` that takes a message and a callback, logs the message, and then executes the callback.

```javascript
function printMessage(message, callback) {
    console.log(message);
    callback();
}

printMessage('Hello, World!', () => {
    console.log('Callback executed');
});
```

### A Bit More Challenging:
Write two functions `firstOperation` and `secondOperation`. Each should take a callback and log a message after a 1-second delay. Use these functions to log "First Operation" and "Second Operation" in sequence.

```javascript
function firstOperation(callback) {
    setTimeout(() => {
        console.log('First Operation');
        callback();
    }, 1000);
}

function secondOperation(callback) {
    setTimeout(() => {
        console.log('Second Operation');
        callback();
    }, 1000);
}

firstOperation(() => {
    secondOperation(() => {
        console.log('All operations complete');
    });
});
```

### Challenging / Bonus:
Extend the previous example by adding a third function `thirdOperation` that also takes a callback and logs a message after a delay. Chain these three operations in sequence.

```javascript
function firstOperation(callback) {
    setTimeout(() => {
        console.log('First Operation');
        callback();
    }, 1000);
}

function secondOperation(callback) {
    setTimeout(() => {
        console.log('Second Operation');
        callback();
    }, 1000);
}

function thirdOperation(callback) {
    setTimeout(() => {
        console.log('Third Operation');
        callback();
    }, 1000);
}

firstOperation(() => {
    secondOperation(() => {
        thirdOperation(() => {
            console.log('All operations complete');
        });
    });
});
```

## 3. Promises

### Simple Exercise:
Convert a function that logs a message after a 1-second delay into a function that returns a Promise.

```javascript
function logMessage(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, 1000);
    });
}

logMessage('Hello, World!').then(() => {
    console.log('Promise resolved');
});
```

### A Bit More Challenging:
Create two functions `firstOperation` and `secondOperation`, both returning Promises that resolve after a delay. Chain these functions using `.then()`.

```javascript
function firstOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('First Operation');
            resolve();
        }, 1000);
    });
}

function secondOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Second Operation');
            resolve();
        }, 1000);
    });
}

firstOperation()
    .then(() => {
        return secondOperation();
    })
    .then(() => {
        console.log('All operations complete');
    });
```

### Challenging / Bonus:
Add error handling to the previous example by rejecting one of the Promises conditionally and using `.catch()` to handle the error.

```javascript
function firstOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('First Operation');
            resolve();
        }, 1000);
    });
}

function secondOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true; // Change to `false` to see the success path
            if (error) {
                reject('Second Operation Failed');
            } else {
                console.log('Second Operation');
                resolve();
            }
        }, 1000);
    });
}

firstOperation()
    .then(() => {
        return secondOperation();
    })
    .then(() => {
        console.log('All operations complete');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
```

## 4. Async/Await

### Simple Exercise:
Rewrite a Promise-based function using `async`/`await`.

```javascript
async function logMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Hello, World!');
            resolve();
        }, 1000);
    });
}

async function execute() {
    await logMessage();
    console.log('Message logged');
}

execute();
```

### A Bit More Challenging:
Convert a chain of Promises into `async`/`await`.

```javascript
function firstOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('First Operation');
            resolve();
        }, 1000);
    });
}

function secondOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Second Operation');
            resolve();
        }, 1000);
    });
}

async function executeOperations() {
    await firstOperation();
    await secondOperation();
    console.log('All operations complete');
}

executeOperations();
```

### Challenging / Bonus:
Add error handling to the `async`/`await` code by using `try`/`catch`.

```javascript
function firstOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('First Operation');
            resolve();
        }, 1000);
    });
}

function secondOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true; // Change to `false` to see the success path
            if (error) {
                reject('Second Operation Failed');
            } else {
                console.log('Second Operation');
                resolve();
            }
        }, 1000);
    });
}

async function executeOperations() {
    try {
        await firstOperation();
        await secondOperation();
        console.log('All operations complete');
    } catch (error) {
        console.error('Error:', error);
    }
}

executeOperations();
```
