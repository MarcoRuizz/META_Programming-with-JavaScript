// allow me to build a function that will run with default argument values even if I don't pass it any arguments
function withDefaultParams(number = 10) {
  console.log("Result:", number * number);
}

withDefaultParams(); // 100

// exammple with a class
class WithDefaultParams {
  constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }
  calculate() {
    if (this.bool1) {
      console.log(this.string1, this.num1 + this.num2 + this.num3);
      return;
    }
    return "The value of bool1 is incorrect";
  }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6
