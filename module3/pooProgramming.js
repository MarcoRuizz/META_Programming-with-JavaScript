// calculate the total price of a shoes with the taxes

var purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = this.shoes * this.stateTax;
    console.log("total price: ", calculation);
  },
};

purchase1.totalPrice(); // 120
purchase1.shoes; // 100

var purchase2 = {
  shoes: 50,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = this.shoes * this.stateTax;
    console.log("total price: ", calculation);
  },
};

purchase2.totalPrice(); // 1000
