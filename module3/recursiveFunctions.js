let counter = 3;

function example() {
  console.log(counter);
  counter = counter - 1;

  // avoid infinite loops
  if (counter === 0) return;

  // recursive function
  example();
}

example();
