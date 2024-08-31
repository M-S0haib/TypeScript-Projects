#! /usr/bin/env node
import inquirer from "inquirer";
console.log("");

console.log("                      Welcome to Simple CLI Calculator :) !");
console.log("");

const calculator = await inquirer.prompt([
  { message: "Enter the first number", type: "number", name: "firstNumber" },
  { message: "Enter the second number", type: "number", name: "secondNumber" },
  {
    message: "Select the Operation to perform",
    type: "list",
    name: "operation",
    choices: ["+", "-", "x", "/","%",""],
  },
]);

console.log("");


if (calculator.operation == "+") {
  console.log(calculator.firstNumber + calculator.secondNumber);
}

else if (calculator.operation == "-") {
    console.log(calculator.firstNumber - calculator.secondNumber);
  }

else if (calculator.operation == "x") {
    console.log(calculator.firstNumber * calculator.secondNumber);
  }

else if (calculator.operation == "/") {
    console.log(calculator.firstNumber / calculator.secondNumber);
  }

  
else if (calculator.operation == "%") {
  console.log(calculator.firstNumber % calculator.secondNumber);
}