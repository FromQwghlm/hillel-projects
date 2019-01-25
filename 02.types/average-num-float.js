// Ask user to enter ONLY FLOAT number one by one and calculate result
// //////////////////////////////////////////////////

function getRandomFloat(min, max, fpoint) {   
    var floatNum = +(Math.random() * (max - min) + min).toFixed(fpoint);
    while (floatNum % 1 === 0) {
        floatNum = +(Math.random() * (max - min) + min).toFixed(fpoint); 
    }
    return floatNum;
}

function getFloat(promptNum) {
    promptNum = +prompt('Enter your float number: ', getRandomFloat(min, max, floatPoint)); 
    while (promptNum % 1 === 0) {
        promptNum = +prompt('reEnter your FLOAT number: ', getRandomFloat(min, max, floatPoint)); 
    }
    debugLog('promptNum', promptNum);
    return promptNum;  
}

function debugLog (param, value) {
        console.log(param + ': ' + value);
}

// //////////////////////////////////////////////////
var min = 1;
var max = 100;

floatPoint = +prompt('Max numbers after the floating point: ', 1);
debugLog('floatPoint', floatPoint);
if ((floatPoint != 0) && (floatPoint != null)) {
    var first = getFloat(first);
    var second = getFloat(second);   
    var avg = ((first + second) / 2).toFixed(floatPoint);
    debugLog('avg', avg);
} else {
    alert ("You'll try another time");
}

