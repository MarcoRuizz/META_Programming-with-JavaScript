// task 2
const h1 = document.querySelector("h1");

// task 3
let arr = ["Example Domain", "First Click", "Second Click", "Third Click"];

// task 4
function handleclicks() {
  switch (h1.innerText) {
    case arr[0]:
      h1.innerText = arr[1];
      break;
    case arr[1]:
      h1.innerText = arr[2];
      break;
    case arr[2]:
      h1.innerText = arr[3];
      break;
    default:
      h1.innerText = arr[0];
      break;
  }
}

// task 5
h1.addEventListener("click", handleclicks);
