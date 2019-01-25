// Ask user to enter number one by one and calculate result

function getRandomInt(min, max) {
    return +Math.floor(Math.random() * (max - min)) + min;
}

function debugLog (param, value) {
    console.log(param + ': ' + value);
}

var min = 1;
var max = 100;

firstNum = +prompt('Average calculating. Enter first number: ', getRandomInt(min, max));
secondNum = +prompt('Average calculating. Enter second number: ', getRandomInt(min, max));
var avg = (firstNum + secondNum) / 2;

debugLog ('sum', (firstNum + secondNum));
debugLog ('avg', avg);