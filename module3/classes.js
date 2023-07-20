// bluerint that u can use to create new objects as many times you like

class Car {
  // create the new object
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  // methods
  turboOn() {
    console.log("turbo on");
  }
}

// creating a new instance -> new car object
const car1 = new Car("red", 120);
car1.turboOn;
