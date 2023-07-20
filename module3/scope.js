// scope is wbere do a variable can be accessible

var num1 = 10; // global variable

function scopeTest() {
  var localVar = "I am scoped to the function";
  console.log(globalVar);
}

console.log(localVar);
