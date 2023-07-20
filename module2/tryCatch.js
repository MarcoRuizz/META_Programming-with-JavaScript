// if it is an error on the try, it will throw an error to the catch

try {
  console.log(c + d);
} catch (err) {
  console.log(err);
}

console.log("this line now runs");
