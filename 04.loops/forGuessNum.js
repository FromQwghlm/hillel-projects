// Скрипт о запросе на угадывание сгенерированного числа так, 
// чтобы человек мог отменить игру, либо угадывать, пока число не станет соответствовать

// добавлена возможность ввода количества попыток

function getRandomInt (MIN, MAX) {
    return Math.floor(Math.random() * (MAX - MIN)) + MIN;
}

function debugLog (param, value) {
    console.log(param + ': ' + value);
}

function epilogueMsg (guessNum, randomNum, enable) {
    if (enable === true) {
        if (Number(guessNum) === randomNum) {
            alert('Вы угадали!'); 
        } else {
            alert('Попробуйте в следующий раз');
        }
    }
}

var MIN = 1;
var MAX = 10;
var guessNum;

var randomNum =  getRandomInt (MIN, MAX);
debugLog ('randomNum', randomNum);

var attempt = prompt('За сколько попыток попробуете \nотгадать число от ' + MIN + ' до ' + MAX + '?');

debugLog ('attempt', attempt);
var tip = Number(attempt);

for (let index = 0; index < Number(attempt); index++) {
    guessNum = prompt('Отгадайте загаданное число ' + MIN + ' от ' + MAX + '. \nПопыток: ' + tip--);
    if (Number(guessNum) === randomNum || guessNum === null) break;
    //if (guessNum === null) break;
}

debugLog ('guessNum', guessNum);
epilogueMsg (guessNum, randomNum, true);