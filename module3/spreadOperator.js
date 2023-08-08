// copy the properties of an object onto a newly created object

let top3 = [
  "The Colosseum",
  "Trevi Fountain",
  "The Vatican Citys",
  "place4",
  "place5",
  "place6",
];

function showItinerary(place1, place2, place3) {
  console.log("visit: " + place1);
  console.log("visit: " + place2);
  console.log("visit: " + place3);
}

// dont have to list every item of the array
showItinerary(...top3);

// convert a string to an arrray
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); // ["h", "e", "l", "l", "o"]
