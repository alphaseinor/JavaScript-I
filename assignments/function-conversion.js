// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

myFunction = () => console.log("Function was invoked!");
myFunction();

anotherFunction = (param) => param;

anotherFunction("Example");

add = (param1, param2) => param1 + param2;

add(1,2);

subtract = (param1, param2) => param1 - param2;

subtract(1,2);


// Stretch

exampleArray = [1,2,3,4];
const triple = exampleArray.map(num =>  num * 3);
console.log(triple);