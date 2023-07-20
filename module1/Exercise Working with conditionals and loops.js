/* EXCERCISE 1 
In this exercise, you will create the code for a for loop, using the counter variable named i starting from 1.
To make the counter increment by 1 on each loop, you will use i++.
The exit condition for the for loop should match the output given below. 
Inside the loop, write an if-else statement, which will check the following conditions:
First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".
Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".
Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".
For all the remaining values of i, your code will console log just the value of i.
*/

for (var i = 1; i < 11; i++) {
  var result = "";
  if (i == 1) {
    result = "Gold medal";
  } else if (i == 2) {
    result = "Silver medal";
  } else if (i == 3) {
    result = "Bronze medal";
  } else {
    result = i;
  }
  console.log(result);
}

/* EXCERCISE 2
convert it to switch statement
*/

for (var i = 1; i < 11; i++) {
  var result = "";

  switch (i) {
    case 1:
      result = "Gold medal";
      break;
    case 2:
      result = "Silver medal";
      break;
    case 3:
      result = "Bronze medal";
      break;
    default:
      result = i;
      break;
  }
  console.log(result);
}
