// used to build a smaller box and pack items into it

const top7 = [
  "The Colosseum",
  "Trevi Fountain",
  "The Vatican Citys",
  "place4",
  "place5",
  "place6",
];

const [] = top7;

const [first, second, third, ...secondVisit] = top7;

console.log("first: ", first);
console.log("Second: ", second);
console.log("third: ", third);

// sub array of the rest of the array
console.log("first: ", secondVisit);

function addTaxToPrices(taxRate, ...itemsBought) {
  return itemsBought.map((item) => taxRate * item);
}

let shoppingCart = addTaxToPrices(1.1, 46, 39, 35, 68);
console.log(shoppingCart); // [50.6 , 97.0 , 48.5 , 86.9]
