// Скрипт о запросе на угадывание сгенерированного числа так, 
// чтобы человек мог отменить игру, либо угадывать, пока число не станет соответствовать

function getRandoMINt (MIN, MAX) {
    return Math.floor(Math.random() * (MAX - MIN)) + MIN;
}

function debugLog (param, value) {
    console.log(param + ': ' + value);
}

function epilogueMsg (guessNum, random, enable) {
    if (enable === true) {
        if (Number(guessNum) === random) {
            alert('Вы угадали!'); 
        } else {
            alert('Попробуйте в следующий раз');
        }
    }
}

var MIN = 1;
var MAX = 10;
var guessNum;

var random =  getRandoMINt (MIN, MAX);
debugLog ('random', random);

do {
    guessNum = prompt('Отгадайте загаданное число ' + MIN + ' от ' + MAX);
}
while (Number(guessNum) !== random && guessNum !== null);

debugLog ('guessNum', guessNum);
epilogueMsg (guessNum, random, false);
