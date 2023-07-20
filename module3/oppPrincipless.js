class Animal {}

const myDog = new Animal();

console.log(Animal);

// inheritance

/*
    -> base class
    -> one or more sub-classes thaat inherit the properties of the base class
*/

class Bird extends Animal {}

// encapsulation

/*
    -> has to do with making a code implementation "hidden" from other users
*/

"abc".toUpperCase();

// abstraction

/*
    -> extracting the concept 
    -> writing code in a way that will make it more generalized
*/

// polymorphism

/*
    -> "something that can take on many shapes"
    -> build objects that can have the exact same functionality, namely, 
       functions with the exact same name, which behave exactly the same.
*/

const bicycle = {
  bell: function () {
    return "Ring, ring! Watch out, please!";
  },
};
const door = {
  bell: function () {
    return "Ring, ring! Come here, please!";
  },
};

//  It accepts a thing parameter - which I expect to be an object
function ringTheBell(thing) {
  console.log(thing.bell());
}

ringTheBell(bicycle); // Ring, ring! Watch out, please!
ringTheBell(door); // "Ring, ring! Come here, please!"

// example 2
class Bird {
  useWings() {
    console.log("Flying!");
  }
}

class Eagle extends Bird {
  useWings() {
    super.useWings();
    console.log("Barely flapping!");
  }
}

class Penguin extends Bird {
  useWings() {
    console.log("Diving!");
  }
}

// calling methods
var baldEagle = new Eagle();
baldEagle.useWings(); // "Flying! Barely flapping!"

var kingPenguin = new Penguin();
kingPenguin.useWings(); // "Diving!"
