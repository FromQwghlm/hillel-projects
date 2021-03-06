function getRandomInt (min, max) {
    return +Math.floor(Math.random() * (max - min)) + min;
}

function declension(number, titles) {  
    cases = [2, 0, 1, 1, 1, 2];  
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];  
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
        randomLetter = getRandomInt(0, (str.length - 1));
        newWord += strArray[randomLetter];
    }
    newWordArray.push(newWord);
}

console.log('Сгенерированы следующие слова:');
console.log(...newWordArray);

for (var wordDigits = {}, a = newWordArray, n = 0; n < a.length; n++) {
    if (wordDigits[a[n].length] === undefined) {
        wordDigits[a[n].length] = [];		
    }
    wordDigits[a[n].length].push(a[n]);
}
for (var n in wordDigits) {
    var num = wordDigits[n].length;
    console.log(`${num} ${declension(`${num}`, ['слово','слова','слов'])} с ${n} символами`);	
}

console.log('Слова сгруппированы в объект "wordDigits" по количеству значений в строке:');
console.log(wordDigits);