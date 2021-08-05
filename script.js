"use strict";

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
  } else if (operator === "/" && number2 === 0) {
    return "cant / by 0";
  } else if (operator === "/") return divide(number1, number2);
}

console.log(operate(2, "*", 10));

const allNumbers = document.querySelectorAll(".number");
const allOperators = document.querySelectorAll(".operator");
const input = document.querySelector(".container-input");
const operated = document.getElementById("operate");
const allClear = document.getElementById("allClear");
const dot = document.querySelector(".dot");

//onverting the nodelists into an arrays

const numbers = Array.prototype.slice.call(allNumbers);
const operators = Array.prototype.slice.call(allOperators);

let temp = [];
input.value = [];

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    let clickNumber = numbers[i].textContent;
    input.value = input.value + clickNumber;
    input.textContent = input.value;
  });
}

/////////////
if (input.textContent.includes(0)) {
  console.log("true");
} else {
  console.log("false");
}

/////////////

console.log(temp);

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    let clickOperator = operators[i].textContent;
    console.log(clickOperator);
    temp.push(input.value);
    temp.push(clickOperator);
    input.value = [];
    console.log(temp);
  });
}

dot.addEventListener("click", function () {
  let punt = dot.textContent;
  input.value = input.value + punt;
  input.textContent = input.value;
});

operated.addEventListener("click", function () {
  temp.push(input.value);
  input.value = operate(+temp[0], temp[1], +temp[2]);
  input.textContent = input.value;
  temp = [];
  console.log(temp);
});

allClear.addEventListener("click", function () {
  temp = [];
  input.value = [];
  input.textContent = input.value;
  console.log(input.value);
});
