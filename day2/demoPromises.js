function orderDinner(dish) {
    let randomAmountOfTime = Math.floor(Math.random() * 2000);
    // equivalent of token to get the dinner
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(dish + " is ready!");
            resolve(dish);
        }, randomAmountOfTime);
    });
}

function pickUpDinner(dish) {
    let randomAmountOfTime = Math.floor(Math.random() * 2000);
    // equivalent of waiting to get the ready dinner
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(dish + " is picked up!");
            resolve();
        }, randomAmountOfTime);
    });
}

orderDinner("steak")
    .then((dishName) => pickUpDinner(dishName));
