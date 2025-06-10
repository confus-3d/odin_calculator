const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};
const multiply = function(first, second) {
	return first * second;
};

const divide = function(first, second) {
	return first / second;
};

let first;
let second;
let operation;

const operate = function(first, second, operation) {
    if (operation == "+") {return add(first,second)}
    if (operation == "-") {return subtract(first,second)}
    if (operation == "*") {return multiply(first,second)}
    if (operation == "/") {return divide(first,second)}
}

const display = document.querySelector("screen");
const clear = document.querySelector("clear");

const fnClear = function() {
    display.textContent = "";
}

clear.addEventListener("click", fnClear);