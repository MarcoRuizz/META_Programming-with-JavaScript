var letters = "abc";
console.log(letters.length); // 3
console.log(letters[0]); // a
console.log(letters.charAt(0)); // a
console.log(letters.indexOf("a")); // 0
console.log(letters.toUpperCase); // ABC
console.log(letters.toLowerCase); // abc

for (var i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

var santa = "ho-ho-ho";
santa.split("-"); // ['ho', 'ho', 'ho']
