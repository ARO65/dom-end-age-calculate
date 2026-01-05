const functionEl = document.querySelector("#function");
const resultEl = document.querySelector(".result");

function addFunction(a, b) {
  return a + b;
}

let add = addFunction(3, 6);
console.log(add);

function hello() {
  console.log("hello everyone");
}
hello();

//Function Expression
let action = function (x, y) {
  return x * y;
};
console.log(action(5, 6));

//Arrow Fonksiyon (ES6)

let dive = (x, y) => x / y;
console.log(10 / 5);
console.log(dive.toString);
