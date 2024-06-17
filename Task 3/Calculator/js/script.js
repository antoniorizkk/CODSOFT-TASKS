// Selecting elements from the DOM
const display = document.querySelector('.display input');
const buttons = document.querySelectorAll('.buttons button');

// Variables to store the operand and operator
let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let resetDisplay = false;

// Adding event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('operator')) {
            handleOperator(this.value);
        } else if (this.classList.contains('number')) {
            handleNumber(this.value);
        } else if (this.classList.contains('clear')) {
            resetCalculator();
        }
    });
});

// Function to handle number input
function handleNumber(number) {
    if (resetDisplay) {
        display.value = '';
        resetDisplay = false;
    }
    display.value += number;
}

// Function to handle operator
function handleOperator(operator) {
    if (currentOperator !== null && !resetDisplay) {
        operate();
    }
    firstOperand = display.value;
    currentOperator = operator;
    resetDisplay = true;
}

// Function to perform operation
function operate() {
    secondOperand = display.value;
    let result = performOperation(firstOperand, secondOperand, currentOperator);
    if (result === 'Error') {
        display.value = result;
        resetCalculator();
    } else {
        display.value = result;
        firstOperand = result;
        secondOperand = '';
    }
}

// Function to perform calculation
function performOperation(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return 'Error';
            } else {
                return a / b;
            }
        default:
            return;
    }
}

// Function to reset calculator
function resetCalculator() {
    display.value = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
    resetDisplay = false;
}
