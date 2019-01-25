// Ask user to enter numbers splitted by comma and calculate result *

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

function debugLog (param, value) {
        console.log(param + ': ' + value);
}

function add(a, b) {
    return a + b;
}

var promptNums = prompt('Введите числа через запятую: ', '1, 2, 3');

var  promptArr = promptNums.split(',').map(function(item) {
    return parseInt(item, 10);
});

var promptSum = promptArr.reduce(add, 0);

debugLog('promptSum', promptSum);

alert('Сумма введенных чисел: ' + promptSum);