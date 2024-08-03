function orderDinner(dish) {
    let randomAmountOfTime = Math.floor(Math.random() * 2000);
    let willItFail = Math.random() > 0.8; // 20% chance of failure
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (willItFail) {
                reject(`Failed to prepare ${dish}.`);
            } else {
                console.log(dish + " is ready!");
                resolve(dish);
            }
        }, randomAmountOfTime);
    });
}

function pickUpDinner(dish) {
    let randomAmountOfTime = Math.floor(Math.random() * 2000);
    let willItFail = Math.random() > 0.8; // 20% chance of failure
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (willItFail) {
                reject(`Failed to pick up ${dish}.`);
            } else {
                console.log(dish + " is picked up!");
                resolve();
            }
        }, randomAmountOfTime);
    });
}

orderDinner("steak")
    .then((dishName) => pickUpDinner(dishName))
    .catch((error) => console.log(error));
