// Object.keys
const car2 = {
  speed: 200,
  color: "red",
};
console.log(Object.keys(car2)); // ['speed','color']

// Object.values
const car3 = {
  speed: 300,
  color: "yellow",
};
console.log(Object.values(car3)); // [300, 'yellow']

// Object.entries
const car4 = {
  speed: 400,
  color: "magenta",
};
console.log(Object.entries(car4)); // [ ['speed', 400], ['color', 'magenta'] ]

// object looping
var clothingItem = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autumn",
};

for (key of Object.keys(clothingItem)) {
  console.log(keys, ":", clothingItem[key]);
}

for (prop in clothingItem) {
  console.log(prop);
}
