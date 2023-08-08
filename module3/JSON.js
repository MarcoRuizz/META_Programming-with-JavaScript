// JavaScript Object Notation

const jsonStr = '{"greeting" : "hello"}';
const aPlainObj = JSON.parse(jsonStr);

// changing the property
aPlainObj.greeting = "hi";
console.log(aPlainObj);

// converting an object to JSON
const data = {
  firstName: "John",
  lastName: "Doe",
  greeting: "Hello",
};

JSON.stringify(data);
