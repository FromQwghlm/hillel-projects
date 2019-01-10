// Write a script that ask user to guess what number system has generated

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function debugLog (param, value) {
    console.log(param + ': ' + value);
}

var min = 1;
var max = 100;

random =  getRandomInt(min, max);
debugLog ('random', random);

guessNum = +prompt('Guess number from ' + min + ' to ' + max);
debugLog ('guessNum', guessNum);

if (random === guessNum) {
    alert('You win');
} else {
    alert('Sorry, you lost');
}