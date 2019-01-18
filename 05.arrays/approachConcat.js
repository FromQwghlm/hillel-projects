function getRandomInt (min, max) {
    return +Math.floor(Math.random() * (max - min)) + min;
}

var wordsCount = +prompt('Какое количество рандомных значений необходимо создать?', 10);
var minLetters = +prompt('Минимальное количество букв в слове?', 4);
var maxLetters = +prompt('Максимальное количество букв в слове?', 10);

var str = 'abcdefghijklmnopqrstuvwxyz'; // str.length 26
var strArray = str.split('');
var newWordArray = [];

for (var k = 0; k < wordsCount; k++) {
    var newWord = '';  // чтобы задать строчный тип переменной
    var randWordLength = getRandomInt(minLetters, maxLetters);
    for (var i = 0; i < randWordLength; i++) {                
        randomLetter = getRandomInt(0, str.length);
        newWord += strArray[randomLetter];
    }
    newWordArray.push(newWord);
}

console.log('Сгенерированы следующие слова:');
console.log(...newWordArray);

for (var charDigit = {}, a = newWordArray, n = 0; n < a.length; n++) {
    if (charDigit[a[n].length] === undefined) {
        charDigit[a[n].length] = [];		
    }
    charDigit[a[n].length].push(a[n]);
}
for (var n in charDigit) {
    console.log(`${charDigit[n].length} слов с ${n} символами`);	
}

console.log('Слова сгруппированы в объект по количеству значений в строке:');
console.log(charDigit);
