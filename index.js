/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */
let num1 = null;
let num2 = null;
let operation = null;
const history = [];
let res;
let number1Text = "";
let number2Text = "";

function buttonClick(text) {
  console.log("Clicking", text);
  // Write your code here
  if (text >= 0 && text <= 9) {
    printOnConsole(text);
    if (!num1) {
      number1Text += text;
      num1 = parseInt(number1Text);
    } else if (operation === null) {
      number1Text += text;
      num1 = parseInt(number1Text);
      printOnConsole(num1);
    } else if (num1 && !num2) {
      number2Text += text;
      num2 = parseInt(number2Text);
    } else if (num1 && num2) {
      number2Text += text;
      num2 = parseInt(number2Text);
      printOnConsole(num2);
    }
  } else if (text === "-" || text === "+" || text === "÷" || text === "x") {
    operation = text;
  } else if (text === "=") {
    res = result(operation, num1, num2);
    printOnConsole(res);
    history.push([`${num1} ${operation} ${num2} = ${res}`]);
    updateHistory(history);
  } else if (text === "AC") {
    num2 = null;
    num1 = null;
    operation = null;
    res = null;
    number1Text = "";
    number2Text = "";
    text = null;
    printOnConsole(0);
  }
}

function result(operation, num1, num2) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;

    case "÷":
      return num1 / num2;
  }
}
/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
// printOnConsole("123");
// updateHistory(["This is a sample historry", "1 + 5 = 6", "5 x 10 = 50"]);
