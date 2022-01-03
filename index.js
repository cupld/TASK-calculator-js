/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */
 let num1;
 let num2;
 let operation;
 let result;
 let history1;

function buttonClick(text) {
  console.log("Clicking", text);
  // Write your code here
  printOnConsole(text);
 if ( text == "+" || text == "-" || text == "÷" || text == "/"){
   operation = text
 }
 else if (text === "AC"){
    printOnConsole(0);
    num1 = 0;
    num2 = 0;
  }
  else if (!isNaN(text) && !num1){
    printOnConsole(text);
    if (!num1) num1= parseInt(text);
    else if (operation) num2= parseInt(text);
  }
  else if (text == "="){
    printOnConsole(calculate(operation,num1,num2));
    history1.push(`${num1} ${operation} ${num2} = ${result}`);
    updateHistory(history1);
  }
}
 function calculate(operatin,num1,num2){
switch (operation){
  case "+":
    return num1+num2
  case "-":
    return num1-num2
  case "*":
    return num1*num2
  case "/":
    return num1/num2
}
 } 



/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing

updateHistory(["This is a sample historry", "1 + 5 = 6", "5 x 10 = 50"]);
