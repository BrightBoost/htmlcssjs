// console.log("start");
// setTimeout(printMiddle, 1000);
// console.log("end");

// function printMiddle() {
//     console.log("middle");
// }

// // write it with arrow function
// console.log("start");
// setTimeout(() => {
//     console.log("middle")
// }, 1000);
// console.log("end");

// let x = () => console.log("bla");
// x();

// // horrible code to demonstrate callback hell - christmas tree callback

// function firstFunc(callbackFunc) {
//     setTimeout(() => {
//         console.log("first function done!");
//         callbackFunc();
//     }, 1000);
// }

// function secondFunc(callbackFunc) {
//     setTimeout(() => {
//         console.log("second function done!");
//         callbackFunc();
//     }, 1000);
// }

// function thirdFunc() {
//     setTimeout(() => {
//         console.log("third function done!");
//     }, 1000);
// }

// firstFunc(() => {
//     secondFunc(() => {
//         thirdFunc();
//     });
// });

// function printMessage(message, callback) {
//     console.log(message);
//     callback();
// }

// printMessage('Hello, World!', () => {
//     console.log('Callback executed');
// });


function firstOperation(callback) {
    setTimeout(() => {
        console.log('First Operation');
    }, 1000);
    callback();
}

function secondOperation(callback) {
    setTimeout(() => {
        console.log('Second Operation');
        callback();
    }, 1);
}

firstOperation(() => {
    secondOperation(() => {
        console.log('All operations complete');
    });
});
// so the problem: hard to read >> hard to maintain
// solution? promises
// holding a value that might be there already and otherwise will be there in the future
