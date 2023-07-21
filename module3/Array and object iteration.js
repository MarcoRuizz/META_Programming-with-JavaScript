// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

logDairy(dairy);

// Task 2
const animal = {
  canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan(object) {
  for (key of Object.keys(object)) {
    console.log(`${key} : ${object[key]}`);
  }
}

birdCan(bird);

// Task 3
function animalCan(object) {
  for (prop in object) {
    console.log(`${prop} : ${object[prop]} `);
  }
}

animalCan(bird);
