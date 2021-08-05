function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(number1, operator, number2) {
  if (operator === "+") {
    return add(number1, number2);
  } else if (operator === "-") {
    return subtract(number1, number2);
  } else if (operator === "*") {
    return multiply(number1, number2);
  } else if (number2 === 0 && operator === "/") {
    return "cannot divide by zero";
  } else if (operator === "/") return divide(number1, number2);
}

console.log(operate(2, "+", 3));

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const input = document.querySelector(".container-input");
const operated = document.getElementById("operate");
const allClear = document.getElementById("allClear");

const temp = [];
input.value = [];

console.log(input.value);

operated.addEventListener("click", function () {
  input.value = add(5, 5);
  input.textContent = input.value;
  console.log(input.value);
});

allClear.addEventListener("click", function () {
  temp.value = 0;
  input.value = 0;
  input.textContent = input.value;
  console.log(input.value);
});
