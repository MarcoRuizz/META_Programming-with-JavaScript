/// example 1
var shoes = 100;
var stateTax = 1.1;

function totalPrice(price, tax) {
  return price * tax;
}

var toPay = totalPrice(shoes, stateTax);
console.log(toPay);

// example 2
var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
  return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);
