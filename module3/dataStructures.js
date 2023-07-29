// way to organize data

// objects
const car = {
  owner: "John",
  color: "red", // key - value pairs

  engineOn: function () {
    console.log("enggine on");
  },
};

// arrays
const grades = [1, 24, 2, 3, 4, 2]; // under an index
let gradeSum = 0;

for (let i = 0; i < grades.length; i++) {
  gradeSum += grades[i];
}

console.log(gradeSum / grades.length);

// maps

// key - value pair
// iterable
// any value can be used as a key

// set

// unique in collection
const set = new Set();
