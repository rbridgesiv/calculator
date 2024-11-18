let operator
let firstNumber
let secondNumber

let displayValue = "";

const operate = function(operator, firstNumber, secondNumber){
    switch (operator) {
        case 'add':
            return add(firstNumber,secondNumber);
            break;
        case 'subtract':
            return subtract(firstNumber,secondNumber);
            break;
        case 'multiply':
            return multiply(firstNumber,secondNumber);
            break;
        case 'divide':
            return divide(firstNumber,secondNumber);
            break;
        default:
            return 'Invalid';
    }
}

const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const multiply = function(arr) {
    return a * b;
  };

const divide = function(a, b){
    if (a === 0 || b === 0) {return undefined;}
    return a / b;
}

function updateDisplay() {
    if (displayValue === ""){
        document.getElementById('textField').innerHTML = "0";
    } else {
        document.getElementById('textField').innerHTML = displayValue;
    }
}

function appendNumber (number) {
    displayValue += number;
    updateDisplay();
}

let lastActionWasToggleSign = false;

function appendOperator(operator) {
    if (
        displayValue !== "" &&
        (!isNaN(displayValue.charAt(displayValue.length - 1)) || lastActionWasToggleSign)
    ) {
      displayValue += operator;
      lastActionWasToggleSign = false;
      updateDisplay();
    }
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function toggleSign() {
    if (displayValue === "" || displayValue === "0") {
        return NaN;
    } else {
        displayValue = (parseFloat(displayValue) * -1).toString(); // Ensure displayValue is still a string
        lastActionWasToggleSign = true; // Mark this action as toggleSign
        updateDisplay();
    }
}
  
function backspace() {
    const textField = document.getElementById('textField');
    let currentValue = textField.textContent;

    // Prevent backspacing the initial "0"
    if (currentValue.length > 1) {
      displayValue = currentValue.slice(0, -1);
      updateDisplay();
    } else {
      displayValue = ""; // Reset to "0" if all characters are deleted
      updateDisplay();
    }
}

function percent() {
    displayValue *= 0.01;
    updateDisplay();
}