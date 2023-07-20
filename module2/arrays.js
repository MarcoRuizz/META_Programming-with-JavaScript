// store and rearrange sequenced collections of items

var carriage0 = "wheat";
var carriage0 = "barley";
var carriage0 = "salt";

var train1 = ["wheat", "barley", "potato"];
console.log(train1[0]);

function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]); //display the array item where the index is euqal to i
  }
}

// creating a new array and calling the function
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors); //display all items in the array at once

// adding new items
colors.push("black");
colors.pop();
