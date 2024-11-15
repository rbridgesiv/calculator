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

let firstNumber

let operator

let secondNumber

let displayValue

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

const displayText= function() {
    let text = document.getElementById("textField");
    text.style.display = "";
  }