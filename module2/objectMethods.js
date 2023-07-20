var car = {};

//update the value of a property of the car object
car.color = "red";
car.mileage = 98765;

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function () {
  console.log("engine running");
};

// clg
console.log(car);
car.turnKey();
