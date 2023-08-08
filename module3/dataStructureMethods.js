// foreach

const fruits = ["kiwi", "mango", "apple", "pear"];

function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}

fruits.forEach(appendIndex);

// filter

const nums = [0, 10, 20, 30, 40, 50];
nums.filter(function (num) {
  return num > 20;
});

// map

[0, 10, 20, 30, 40, 50].map(function (num) {
  return num / 10;
});

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers); // Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}
bestBoxers.get(1); // 'The Champion'
