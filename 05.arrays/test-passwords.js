//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
function declension(number, titles) {  
    cases = [2, 0, 1, 1, 1, 2];  
    return titles[(number % 00 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];  
}

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
function wordsGeneratorC(newWordArray, wordsCount, minLetters, maxLetters){
// use concatenation for randomLetter
var str = 'abcdefghijklmnopqrstuvwxyz'; // str.length 26
var strArray = str.split('');

    for (var k = 0; k < wordsCount; k++) {
        var newWord = '';  // чтобы задать строчный тип переменной
        var randWordLength = +Math.floor(Math.random() * (maxLetters - minLetters)) + minLetters;
        for (var i = 0; i < randWordLength; i++) {
            randomLetter = +Math.floor(Math.random() * (str.length - 0)) + 0;
            newWord += strArray[randomLetter];
        }
        newWordArray.push(newWord);
    }
    return newWordArray;
}

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
function wordsGeneratorJ(newWordArray, wordsCount, minLetters, maxLetters){
    // use Join for randomLetter
    var str = 'abcdefghijklmnopqrstuvwxyz'; // str.length 26
    var strArray = str.split('');
    
for (var k = 0; k < wordsCount; k++) {
    var newWord = [];
    var randWordLength = +Math.floor(Math.random() * (maxLetters - minLetters)) + minLetters;
    for (var i = 0; i < randWordLength; i++) {
        randomLetter = +Math.floor(Math.random() * (str.length - 0)) + 0;
        newWord.push(strArray[randomLetter]);
        var returnWord = newWord.join('');
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
    console.log(wordDigits);
}

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
var newWordArray = [];
var wordsCount = 100000;
var minLetters = 10;
var maxLetters = 10;

/* 
wordsGeneratorC(newWordArray, wordsCount, minLetters, maxLetters);
//or
//wordsGeneratorJ(newWordArray, wordsCount, minLetters, maxLetters);

console.log('Сгенерированы следующие слова:');
console.log(...newWordArray);

wordStorage(newWordArray);
 */

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
// ----------- TEST -----------------
function runTest() {
    console.log(`--------------------------`);
    console.log(`"wordsGeneratorJ" started..`);
    time0 = performance.now();
    var str2 = wordsGeneratorJ(newWordArray = [], wordsCount, minLetters, maxLetters);
    time1 = performance.now();
    console.log(`"wordsGeneratorJ" completed: time: ${(time1 - time0)} + milliseconds.`);

    console.log(`--------------------------`);
    console.log(`"wordsGeneratorC" started..`);
    var time0 = performance.now();
    var str1 = wordsGeneratorC(newWordArray = [], wordsCount, minLetters, maxLetters);
    var time1 = performance.now();
    console.log(`"wordsGeneratorC" completed: time: ${(time1 - time0)} + milliseconds.`);
}

runTest();

// https://stackoverflow.com/questions/17256182/what-is-the-difference-between-string-primitives-and-string-objects-in-javascrip




