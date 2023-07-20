// block scope ES6

let color = "red";

if (color == "red") {
  let color = "blue";
}

console.log(color); // red

// VAR - we can access a variabe before initialization
console.log(user);
var user;

// LET - we can NOT access a variabe before initialization
console.log(userLET);
let userLET;
