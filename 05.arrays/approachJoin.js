function getRandomInt (min, max) {
    return +Math.floor(Math.random() * (max - min)) + min;
}

function declension(number, titles) {  
    cases = [2, 0, 1, 1, 1, 2];  
    return titles[(number % 00 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];  
}

var wordsCount = +prompt('Какое количество рандомных значений необходимо создать?', 10);
var minLetters = +prompt('Минимальное количество букв в слове?', 4);
var maxLetters = +prompt('Максимальное количество букв в слове?', 10);

var str = 'abcdefghijklmnopqrstuvwxyz'; // str.length 26
var strArray = str.split('');
var newWordArray = [];

for (var k = 0; k < wordsCount; k++) {
    var newWord = [];
    var randWordLength = getRandomInt(minLetters, maxLetters);
    for (var i = 0; i < randWordLength; i++) {
        randomLetter = getRandomInt(0, str.length);
        newWord.push(strArray[randomLetter]);
        var returnWord = newWord.join('');
    }
    newWordArray.push(returnWord);
}
console.log('Сгенерированы следующие слова:');
console.log(...newWordArray);

for (var digitWords = {}, a = newWordArray, n = 0; n < a.length; n++) {
    if (digitWords[a[n].length] === undefined) {
        digitWords[a[n].length] = [];		
    }
    digitWords[a[n].length].push(a[n]);
}
for (var n in digitWords) {
    console.log(`${digitWords[n].length} ${declension(`${digitWords[n].length}`, ['слово','слова','слов'])} с ${n} символами`);	
}

console.log('Слова сгруппированы в объект "digitWords" по количеству значений в строке:');
console.log(digitWords);