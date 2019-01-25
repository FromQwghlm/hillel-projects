//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
function declension(number, titles) {  
    cases = [2, 0, 1, 1, 1, 2];  
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];  
}

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
function wordsGenerConcat(newWordArray, wordsCount, minLetters, maxLetters){
// use concatenation for randomLetter
var str = 'abcdefghijklmnopqrstuvwxyz'; // str.length 26
var strArray = str.split('');

    for (var k = 0; k < wordsCount; k++) {
        var newWord = '';  // чтобы задать строчный тип переменной
        var randWordLength = +Math.floor(Math.random() * (maxLetters - minLetters)) + minLetters;
        for (var i = 0; i < randWordLength; i++) {
            randomLetter = +Math.floor(Math.random() * (str.length - 1));
            newWord += strArray[randomLetter];  //char concat approach
        }
        newWordArray.push(newWord);
    }
    return newWordArray;
}

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
function wordsGenerJoin(newWordArray, wordsCount, minLetters, maxLetters){
    // use Join for randomLetter
    var str = 'abcdefghijklmnopqrstuvwxyz'; // str.length 26
    var strArray = str.split('');
    
for (var k = 0; k < wordsCount; k++) {
    var newWord = [];
    var randWordLength = +Math.floor(Math.random() * (maxLetters - minLetters)) + minLetters;
    for (var i = 0; i < randWordLength; i++) {
        randomLetter = +Math.floor(Math.random() * (str.length - 1));
        newWord.push(strArray[randomLetter]);
        var returnWord = newWord.join('');  // char Join approach
    }
    newWordArray.push(returnWord);
}
return newWordArray;
}

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
function wordStorage(newWordArray) {
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
    console.table(wordDigits);
}

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
var newWordArray = [];
var wordsCount = +prompt('Какое количество рандомных значений необходимо создать?', 10);
var minLetters = +prompt('Минимальное количество букв в слове?', 4);
var maxLetters = +prompt('Максимальное количество букв в слове?', 10);

wordsGenerConcat(newWordArray, wordsCount, minLetters, maxLetters);
// or
// wordsGenerJoin(newWordArray, wordsCount, minLetters, maxLetters);

console.log('Сгенерированы следующие слова:');
console.log(...newWordArray);

wordStorage(newWordArray);




