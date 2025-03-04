function sayHi() {
  // creating variables
  let firstName = "Max";
  let age = 37;
  let isHappy = true;
  let hobbies = [
    "hiking",
    "workout",
    "swimming",
    "dancing",
    "jogging",
    "diving",
  ];
  let dog = {
    breed: "shih tzu",
    age: 325,
    name: "Waffles",
  };

  let dog2 = dog;
  let dog3 = { ...dog };

  dog.breed = "german shephard";
  console.log(dog.breed + " " + dog2.breed + " " + dog3.breed);

  //object destructuring
  //without destructuring
  const dogBreed = dog.breed;
  const dogAge = dog.age;
  const dogName = dog.name;
  
  //with destructuring
  const {dogsBreed, dogsAge, dogsName} = dog;

  // list
  console.log(hobbies[3]);

  // object
  let key = "breed";
  console.log("Max's dog " + dog[key] + " is " + dog["age"] + " yo");
  console.log(dog[key]);
  console.log(dog.breed);

  // data types
  console.log(typeof firstName);
  console.log(typeof age);
  console.log(typeof isHappy);
  console.log(typeof hobbies);

  // math operator
  let x = 3; // % / * -

  // conditional statements
  if (x < 5 && x % 2 == 0) {
    console.log("x is smaller than 5 and it is even");
  } else {
    console.log("x is not smaller than 5 and/or it is not even");
  }

  if (5 !== "5") {
    console.log("yup those are the same");
  } else {
    console.log("no not the same");
  }

  console.log(dog2 == dog);
  console.log(dog3 == dog);
}

sayHi();

// loops
// While loop
let count = 0;
while (count < 5) {
  console.log(`Count ${count}`);
  count++;
}

//for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//looping over an array
let fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(fruit => {
    console.log(fruit);
});


