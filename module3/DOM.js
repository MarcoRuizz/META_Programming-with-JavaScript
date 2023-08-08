// allows to change properties of a webpage

const h2 = document.createElement("h2");

// adding attributes and text to the element created
h2.innerText = "this is an h2 heading";
h2.setAttribute("id", "sub-heading");
h2.setAttribute("class", "secondary");

// adding to the webpage
document.body.appendChild(h2);
