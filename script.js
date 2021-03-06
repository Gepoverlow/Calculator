"use strict";

//BASIC FUNCTIONS

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

function backspace(string) {
  let sliced = string.slice(0, -1);
  return sliced;
}

function expo(a, b) {
  return Number.parseFloat(a).toExponential(b);
}

//OPERATRE FUNCTIONS BASED ON THE OPERATOR

function operate(number1, operator, number2) {
  if (operator === "+") {
    let added = add(number1, number2);
    return added;
  } else if (operator === "-") {
    let subtracted = subtract(number1, number2);
    return subtracted;
  } else if (operator === "*") {
    let multiplied = multiply(number1, number2);
    return multiplied;
  } else if (operator === "/" && number2 === 0) {
    return "Ha! Gotcha :)";
  } else if (operator === "/") {
    let divided = divide(number1, number2);
    return parseFloat(divided.toFixed(3));
  }
}

//QUERY SELECTORS

const allNumbers = document.querySelectorAll(".number");
const allOperators = document.querySelectorAll(".operator");
const input = document.querySelector(".container-input");
const operated = document.getElementById("operate");
const allClear = document.getElementById("allClear");
const period = document.querySelector(".dot");
const back = document.querySelector(".del");

//converting the nodelists into an arrays

const numbers = Array.prototype.slice.call(allNumbers);
const operators = Array.prototype.slice.call(allOperators);

let temp = [];
input.value = [];

//EVENT LISTENERS

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    if (input.textContent.length < 12) {
      let clickNumber = numbers[i].textContent;
      input.value = input.value + clickNumber;
      input.textContent = input.value;
    } else alert("Number is too long, Please delete some numbers to proceed calculations");
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    let clickOperator = operators[i].textContent;
    if (temp[1] === undefined) {
      temp.push(input.value);
      temp.push(clickOperator);
      input.value = [];
    } else if (temp[1] !== undefined) {
      temp.push(input.value);
      let result = operate(+temp[0], temp[1], +temp[2]);
      temp = [];
      input.value = [];
      input.textContent = result;
      temp.push(input.textContent);
      temp.push(clickOperator);
    }
  });
}

/*
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    let clickOperator = operators[i].textContent;
    if (
      !temp.includes("+") &&
      !temp.includes("-") &&
      !temp.includes("*") &&
      !temp.includes("/") &&
      input.value.length !== 0
    ) {
      temp.push(input.value);
      temp.push(clickOperator);
      input.value = [];
      console.log(temp);
      console.log(total);
    }
  });
}
*/

period.addEventListener("click", function () {
  if (!input.textContent.includes(".") && input.value.length !== 0) {
    let punt = period.textContent;
    input.value = input.value + punt;
    input.textContent = input.value;
  }
});

operated.addEventListener("click", function () {
  if (temp.length !== 0) {
    temp.push(input.value);
    input.value = operate(+temp[0], temp[1], +temp[2]);
    input.textContent = input.value;
    temp = [];
  }
});

allClear.addEventListener("click", function () {
  temp = [];
  input.value = [];
  input.textContent = 0;
});

back.addEventListener("click", function () {
  input.value = backspace(input.textContent);
  input.textContent = input.value;
});
