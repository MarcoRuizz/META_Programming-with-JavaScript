// creating the class
class Train {
  // constructor
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }

  // methods
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }

  lightsStatus() {
    console.log("Lights on?", this.lightsOn);
  }

  getSelf() {
    console.log(this);
  }

  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

// creating an instance of the class Train
var myFirstTrain = new Train("red", false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}

// using the methods
var train4 = new Train("red", false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

// inherits theee Train class
class HighSpeedTrain extends Train {
  // constructor
  constructor(passengers, highSpeedOn, color, lightsOn) {
    // to inherit both the properties
    super(color, lightsOn);

    // aditional properties
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }

  // methods
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("High speed status:", this.highSpeedOn);
  }

  toggleLights() {
    super.toggleLigths();
    super.lightsStatus();
    console.log("Lights are 100% operational.");
  }
}

var train5 = new Train("blue", false);
train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true

var highSpeed1 = new HighSpeedTrain(200, false, "green", false);
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.


// Using class instance as another class' constructor's property
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //



