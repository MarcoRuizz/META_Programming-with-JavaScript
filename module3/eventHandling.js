// listen events of elements

const target = document.querySelector("body");

function handleClick() {
  console.log("cicked the body");
}

// adding the function to the event listener of the target
target.addEventListener("click", handleClick);
